import { FilmListItems } from '@config/filmlist';
import { GetStaticPaths } from 'next';
import IfWrapper from '@components/pages/filmlist/IfWrapper';
import { filmlistUtil } from '@utils/tools/films';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Films = ({ items }) => {
  return <IfWrapper items={items} />;
};

export async function getStaticProps(context) {
  return {
    props: {
      ...(await serverSideTranslations(context.locale, ['common', 'footer'])),
      items: filmlistUtil.sort('categories', context.params.category, FilmListItems),
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
