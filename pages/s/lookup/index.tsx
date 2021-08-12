import Favicon from '@components/Favicon';
import Head from 'next/head';
import Page from '@components/pages/lookup/index';
import { LookupModalProvider } from '@context/lookupModal';

const Home = () => {
  return (
    <>
      <Head>
        <title>Lookup</title>
        <Favicon project="lookup" />
      </Head>
      <LookupModalProvider>
        <Page />
      </LookupModalProvider>
    </>
  );
};

export default Home;
