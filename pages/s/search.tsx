import Head from 'next/head';
import Page from '@components/pages/search';
import { SearchProvider } from '@context/search';
import { baseUrl } from '@utils/tools/utils';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { sortByKey } from '@utils/tools/array';
import { useTranslation } from 'react-i18next';

export const Search = ({ items }) => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t('titles.search')}</title>
        <link rel="icon" type="image/svg+xml" href="/favicon/search/favicon.svg" />
      </Head>
      <SearchProvider>{items ? <Page items={items} /> : null}</SearchProvider>
    </>
  );
};

export async function getServerSideProps({ query: { key: key }, locale, req }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'footer'])),
      items: sortByKey(await (await fetch(`${baseUrl(req)}/api/@search`)).json(), 'name'),
    },
  };
}

export default Search;
