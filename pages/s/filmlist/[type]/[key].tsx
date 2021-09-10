import IfWrapper from '@components/pages/filmlist/IfWrapper';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { fetchFilmlistProps } from '@utils/db/props';
import auth from '@utils/security/auth';

const Key = ({ ...props }) => {
  return <IfWrapper {...props} />;
};

export async function getServerSideProps({ query: { type, key }, locale, req }) {
  const token = await auth.pageAuth(req);
  if (!token) {
    return {
      redirect: {
        permanent: false,
        destination: '/login',
      },
    };
  }
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      ...(await fetchFilmlistProps(token, req, locale, type, key)),
    },
  };
}

export default Key;
