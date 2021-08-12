import Head from 'next/head';
import Favicon from '@components/Favicon';
import Page from '@components/pages/search';
import { SearchProvider } from '@context/search';

export const Search = () => {
  return (
    <>
      <Head>
        <title>Search</title>
        <link rel="icon" type="image/svg+xml" href="/favicon/search/favicon.svg" />
        {/* <link rel="alternate icon" href="/favicon.ico" /> */}
        {/* <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ff8a01"></link> */}
      </Head>
      <SearchProvider>
        <Page />
      </SearchProvider>
    </>
  );
};

export default Search;
