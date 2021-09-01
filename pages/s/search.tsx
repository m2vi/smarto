import Head from 'next/head';
import Page from '@components/pages/search';
import { SearchProvider } from '@context/search';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'react-i18next';

export const Search = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t('titles.search')}</title>
        <link rel="icon" type="image/svg+xml" href="/favicon/search/favicon.svg" />
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
    },
  };
}

export default Search;
