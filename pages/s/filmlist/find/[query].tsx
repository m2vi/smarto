import { FilmlistUtil, fetchItems } from '@utils/films/main';

import IfWrapper from '@components/pages/filmlist/IfWrapper';
import { baseUrl } from '@utils/tools/utils';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { sortByKey } from '@utils/tools/array';
import { fetchFilmlistProps } from '@utils/db/props';
import auth from '@utils/security/auth';

const Find = ({ ...props }) => {
  return <IfWrapper {...props} />;
};

export async function getServerSideProps({ query: { query: key }, locale, req }) {
  const token = await auth.pageAuth(req);
  if (!token) {
    return {
      redirect: {
        permanent: false,
        destination: '/login',
      },
    };
  }

  const util = new FilmlistUtil(await fetchItems(token, req, locale));

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      ...(await fetchFilmlistProps(
        token,
        req,
        locale,
        'default',
        'all',
        'normal',
        key,
        key === '*' ? util.find(locale, 'default', 'all') : util.find(locale, 'default', 'all', 0, 50, key),
      )),
    },
  };
}

export default Find;
