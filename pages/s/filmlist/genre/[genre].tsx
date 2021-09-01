import { GetStaticPaths } from 'next';
import IfWrapper from '@components/pages/filmlist/IfWrapper';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { sortByKey } from '@utils/tools/array';
import util from '@utils/films/main';

const Films = ({ ...props }) => {
  return <IfWrapper {...props} />;
};

export async function getStaticProps(context) {
  return {
    props: {
      ...(await serverSideTranslations(context.locale, ['common', 'footer'])),
      items: util.find('genres', context.params.genre),
      sort: context.params.genre,
      type: 'genres',
      max: util?.max().all?.[context.params.genre],
      genres: sortByKey(await (await fetch('http://localhost:3000/api/filmlist/genres')).json(), 'name'),
      languages: sortByKey(await (await fetch('http://localhost:3000/api/filmlist/languages')).json(), 'count').reverse(),
    },
  };
}
export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export default Films;
