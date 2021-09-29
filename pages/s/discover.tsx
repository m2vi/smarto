import Favicon from '@components/Favicon';
import Head from 'next/head';
import Hub from '@components/pages/hub';
import { WidgetStateProvider } from '@context/widgetState';
import { baseUrl } from '@utils/tools/utils';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'react-i18next';
import { fetchBasicProps } from '@utils/db/props';
import { fetchWithCache } from '@utils/db/fetch';
import auth from '@utils/security/auth';

export const Discover = ({ ...props }) => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t('titles.discover')}</title>
        <Favicon project="hub" />
      </Head>

      <WidgetStateProvider>
        <Hub {...(props as any)} />
      </WidgetStateProvider>
    </>
  );
};

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
      widgets: await fetchWithCache(`${baseUrl(req)}/api/@widgets?token=${token}`, 60 * 24),
      timer: await fetchWithCache(`${baseUrl(req)}/api/@timer?token=${token}`, 60 * 24),
    },
  };
}

export default Discover;
