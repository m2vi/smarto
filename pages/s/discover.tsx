import Favicon from '@components/Favicon';
import Head from 'next/head';
import Hub from '@components/pages/hub';
import { HubSearchProvider } from '@context/hubSearch';
import { WidgetStateProvider } from '@context/widgetState';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'react-i18next';

export const Discover = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t('titles.discover')}</title>
        <Favicon project="hub" />
      </Head>

      <HubSearchProvider>
        <WidgetStateProvider>
          <Hub />
        </WidgetStateProvider>
      </HubSearchProvider>
    </>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      // Will be passed to the page component as props
    },
  };
}

export default Discover;
