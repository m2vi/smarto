import Head from 'next/head';
import Favicon from '@components/Favicon';
import Page from '@components/pages/search';
import { SearchProvider } from '@context/search';

export const Search = () => {
  return (
    <>
      <Head>
        <title>Search</title>
        <Favicon project="hub" />
      </Head>
      <SearchProvider>
        <Page />
      </SearchProvider>
    </>
  );
};

export default Search;
