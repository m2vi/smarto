import { GetStaticPaths } from 'next';
import IfWrapper from '@components/pages/filmlist/IfWrapper';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
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
