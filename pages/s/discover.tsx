import Favicon from '@components/Favicon';
import Head from 'next/head';
import Hub from '@components/pages/hub';
import { HubSearchProvider } from '@context/hubSearch';
import { WidgetStateProvider } from '@context/widgetState';
import { baseUrl } from '@utils/tools/utils';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'react-i18next';
import { fetchBasicProps } from '@utils/db/props';
import { fetchWithCache } from '@utils/db/fetch';

export const Discover = ({ widgets, settings, user, timer }) => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t('titles.discover')}</title>
        <Favicon project="hub" />
      </Head>

      <HubSearchProvider>
        <WidgetStateProvider>
          <Hub timer={timer} settings={settings} widgets={widgets} user={user} />
        </WidgetStateProvider>
      </HubSearchProvider>
    </>
  );
};

export async function getServerSideProps({ locale, req }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      ...(await fetchBasicProps(locale, req)),
      widgets: await fetchWithCache(`${baseUrl(req)}/api/@widgets`, 60 * 24),
      timer: await fetchWithCache(`${baseUrl(req)}/api/@timer`, 60 * 24),
    },
  };
}

export default Discover;
