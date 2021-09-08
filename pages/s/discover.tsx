import Favicon from '@components/Favicon';
import Head from 'next/head';
import Hub from '@components/pages/hub';
import { HubSearchProvider } from '@context/hubSearch';
import { WidgetStateProvider } from '@context/widgetState';
import { baseUrl } from '@utils/tools/utils';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'react-i18next';

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
      widgets: (await (await fetch(`${baseUrl(req)}/api/@widgets`)).json()).map(w => w.name),
      user: await (await fetch(`${baseUrl(req)}/api/@me`)).json(),
      settings: await (await fetch(`${baseUrl(req)}/api/@me`)).json(),
      timer: await (await fetch(`${baseUrl(req)}/api/@timer`)).json(),
    },
  };
}

export default Discover;
