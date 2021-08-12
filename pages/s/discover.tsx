import Favicon from '@components/Favicon';
import Hub from '@components/pages/hub';
import { HubSearchProvider } from '@context/hubSearch';
import { WidgetStateProvider } from '@context/widgetState';
import Head from 'next/head';

export const Discover = () => {
  return (
    <>
      <Head>
        <title>Discover</title>
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

export default Discover;
