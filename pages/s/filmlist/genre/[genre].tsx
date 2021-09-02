import IfWrapper from '@components/pages/filmlist/IfWrapper';
import { baseUrl } from '@utils/tools/utils';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { sortByKey } from '@utils/tools/array';
import util from '@utils/films/main';

const Genre = ({ ...props }) => {
  return <IfWrapper {...props} />;
};

export async function getServerSideProps({ query: { genre: key }, locale, req }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'footer'])),
      items: util.find('genres', key),
      sort: key,
      type: 'genres',
      max: util?.max().all?.[key] ? util?.max().all?.[key] : 0,
      genres: sortByKey(await (await fetch(`${baseUrl(req)}/api/filmlist/genres`)).json(), 'name'),
      languages: sortByKey(await (await fetch(`${baseUrl(req)}/api/filmlist/languages`)).json(), 'count').reverse(),
    },
  };
}

export default Genre;
