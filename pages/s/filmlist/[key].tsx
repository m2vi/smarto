import IfWrapper from '@components/pages/filmlist/IfWrapper';
import { baseUrl } from '@utils/tools/utils';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { sortByKey } from '@utils/tools/array';
import util from '@utils/films/main';

const Key = ({ ...props }) => {
  return <IfWrapper {...props} />;
};

export async function getServerSideProps({ query: { key: key }, locale, req }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'footer'])),
      items: util.find('default', key),
      sort: key,
      type: 'default',
      max: util?.max().all?.[key],
      genres: sortByKey(await (await fetch(`${baseUrl(req)}/api/filmlist/genres`)).json(), 'name'),
      languages: sortByKey(await (await fetch(`${baseUrl(req)}/api/filmlist/languages`)).json(), 'count').reverse(),
    },
  };
}

export default Key;
