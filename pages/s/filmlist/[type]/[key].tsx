import IfWrapper from '@components/pages/filmlist/IfWrapper';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { fetchFilmlistProps } from '@utils/db/props';

const Key = ({ ...props }) => {
  return <IfWrapper {...props} />;
};

export async function getServerSideProps({ query: { type, key }, locale, req }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      ...(await fetchFilmlistProps(req, locale, type, key)),
    },
  };
}

export default Key;
