import Favicon from '@components/Favicon';
import Full from '@components/Full';
import Head from 'next/head';
import { Spinner } from '@components/Spinner';
import auth from '@utils/security/auth';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { fetchBasicProps } from '@utils/db/props';

const Settings = ({ ...props }) => {
  console.log(props);
  return (
    <Full className="grid place-items-center">
      <Head>
        <title>Settings</title>
      </Head>
      <Favicon project="hub" />
      <Spinner />
    </Full>
  );
};

export default Settings;

export async function getServerSideProps({ locale, req }) {
  const token = await auth.pageAuth(req);
  if (!token) {
    return {
      redirect: {
        permanent: false,
        destination: '/login',
      },
    };
  }

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      ...(await fetchBasicProps(token, locale, req)),
    },
  };
}
