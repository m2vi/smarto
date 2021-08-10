import Favicon from '@components/Favicon';
import Hub from '@components/pages/hub';
import { SearchProvider } from '@context/search';
import { WidgetStateProvider } from '@context/widgetState';
import Head from 'next/head';
import { NotificationContainer } from 'react-notifications';

export const Discover = () => {
  return (
    <>
      <Head>
        <title>Discover</title>
        <Favicon project="hub" />
      </Head>

      <SearchProvider>
        <WidgetStateProvider>
          <Hub />
        </WidgetStateProvider>
      </SearchProvider>

      <NotificationContainer />
    </>
  );
};

export default Discover;
