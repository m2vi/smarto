import Full from '@components/Full';
import Head from 'next/head';
import { useEffect } from 'react';
import Favicon from '@components/Favicon';
import GoBack from '@components/GoBack';
import Page from '@components/pages/lookup/discord';

const Discord = ({ data, error }) => {
  useEffect(() => {
    if (data) {
      console.log(data);
    } else {
      console.error(error.message);
    }
  }, [data, error]);

  return (
    <>
      <Head>
        <title>Discord</title>
        <Favicon project="lookup" />
      </Head>
      {data && data?.success ? (
        <Page data={data} />
      ) : (
        <Full className="grid place-items-center">
          <GoBack className="absolute top-2 left-2" url="/s/lookup" />
          <p>User does not exist</p>
        </Full>
      )}
    </>
  );
};

export async function getServerSideProps({ query: { id }, req }) {
  const protocol = req.headers['x-forwarded-proto'] || 'http';
  const baseUrl = req ? `${protocol}://${req.headers.host}` : '';
  try {
    const data = await (await fetch(`${baseUrl}/api/lookup?service=discord&id=${id}`)).json();

    return {
      props: { data },
    };
  } catch (error) {
    return {
      props: { data: false, error },
    };
  }
}

export default Discord;
