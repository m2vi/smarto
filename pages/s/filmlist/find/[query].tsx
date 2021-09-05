import { FilmlistUtil, fetchItems } from '@utils/films/main';

import IfWrapper from '@components/pages/filmlist/IfWrapper';
import { baseUrl } from '@utils/tools/utils';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { sortByKey } from '@utils/tools/array';

const Find = ({ ...props }) => {
  return <IfWrapper {...props} />;
};

export async function getServerSideProps({ query: { query: key }, locale, req }) {
  const util = new FilmlistUtil(await fetchItems(req));

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'footer'])),
      query: key,
      items: key === '*' ? util.find(locale, 'default', 'all') : util.find(locale, 'default', 'all', 0, 50, key),
      sort: 'all',
      type: 'default',
      locale,
      max: util.max().all['all'] ? util.max().all['all'] : 0,
      genres: sortByKey(await (await fetch(`${baseUrl(req)}/api/filmlist/genres`)).json(), 'name'),
      languages: sortByKey(await (await fetch(`${baseUrl(req)}/api/filmlist/languages`)).json(), 'count').reverse(),
    },
  };
}

export default Find;
