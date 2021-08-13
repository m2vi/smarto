import Head from 'next/head';
import Page from '@components/pages/search';
import { SearchProvider } from '@context/search';
import { useTranslation } from 'react-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const Search = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t('titles.search')}</title>
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

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      // Will be passed to the page component as props
    },
  };
}

export default Search;
