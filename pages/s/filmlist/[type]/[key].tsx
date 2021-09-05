import { FilmlistUtil, fetchItems } from '@utils/films/main';

import IfWrapper from '@components/pages/filmlist/IfWrapper';
import { baseUrl } from '@utils/tools/utils';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { sortByKey } from '@utils/tools/array';

const Key = ({ ...props }) => {
  return <IfWrapper {...props} />;
};

export async function getServerSideProps({ query: { type, key }, locale, req }) {
  const util = new FilmlistUtil(await fetchItems(req));

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'footer'])),
      items: util.find(locale, type, key),
      sort: key,
      type: type,
      locale,
      max: util?.max().all?.[key] ? await util?.max().all?.[key] : 0,
      genres: sortByKey(await (await fetch(`${baseUrl(req)}/api/filmlist/genres`)).json(), 'name'),
      languages: sortByKey(await (await fetch(`${baseUrl(req)}/api/filmlist/languages`)).json(), 'count').reverse(),
    },
  };
}

export default Key;
