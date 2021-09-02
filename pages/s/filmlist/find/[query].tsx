import IfWrapper from '@components/pages/filmlist/IfWrapper';
import { baseUrl } from '@utils/tools/utils';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { sortByKey } from '@utils/tools/array';
import util from '@utils/films/main';

const Find = ({ ...props }) => {
  return <IfWrapper {...props} />;
};

export async function getServerSideProps({ query: { query: key }, locale, req }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'footer'])),
      query: key,
      items: key === '*' ? util.find('default', 'all') : util.find('default', 'all', 0, 50, key),
      sort: 'all',
      type: 'default',
      max: util.max().all['all'] ? util.max().all['all'] : 0,
      genres: sortByKey(await (await fetch(`${baseUrl(req)}/api/filmlist/genres`)).json(), 'name'),
      languages: sortByKey(await (await fetch(`${baseUrl(req)}/api/filmlist/languages`)).json(), 'count').reverse(),
    },
  };
}

export default Find;
