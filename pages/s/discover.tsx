import Favicon from '@components/Favicon';
import Hub from '@components/pages/hub';
import { SearchProvider } from '@context/search';
import Head from 'next/head';

export const Discover = () => {
  return (
    <>
      <Head>
        <title>Discover</title>
        <Favicon project="hub" />
      </Head>
      <SearchProvider>
        <Hub />
      </SearchProvider>
    </>
  );
};

export default Discover;
