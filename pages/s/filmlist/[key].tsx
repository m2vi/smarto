import Head from 'next/head';
import Page from '@components/pages/filmlist/index';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Full from '@components/Full';
import { NextSeo } from 'next-seo';

const Films = () => {
  const Router = useRouter();
  const [sort, setSort] = useState(null);

  useEffect(() => {
    const query = Router.query.key;
    setSort(query ? query : null);
  }, [Router]);

  return (
    <>
      <Head>
        <link rel="icon" type="image/svg+xml" href="/favicon/filmlist/favicon.svg" />
      </Head>
      <NextSeo description="A Page with Apps, Programs, Stuff, Files, Stuff and much more like rick rolls!" title="Filmlist" defaultTitle="Smarto" />
      {sort ? <Page sort={sort} /> : <Full className="grid place-items-center" style={{ background: '#222a33' }} />}
    </>
  );
};

export default Films;
