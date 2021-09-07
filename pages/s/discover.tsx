import Favicon from '@components/Favicon';
import Head from 'next/head';
import Hub from '@components/pages/hub';
import { HubSearchProvider } from '@context/hubSearch';
import { WidgetStateProvider } from '@context/widgetState';
import { baseUrl } from '@utils/tools/utils';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'react-i18next';
import * as uuid from 'uuid';
export const Discover = ({ widgets }) => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t('titles.discover')}</title>
        <Favicon project="hub" />
      </Head>

      <HubSearchProvider>
        <WidgetStateProvider>
          <Hub widgets={widgets} />
        </WidgetStateProvider>
      </HubSearchProvider>
    </>
  );
};

export async function getServerSideProps({ locale, req }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'footer'])),
      widgets: (await (await fetch(`${baseUrl(req)}/api/@widgets`)).json()).map(w => w.name),
    },
  };
}

export default Discover;
