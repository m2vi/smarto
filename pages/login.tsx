import LoginPage from '@components/Login';
import auth from '@utils/security/auth';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Login = () => {
  return <LoginPage />;
};

export default Login;

export async function getServerSideProps({ locale, req }) {
  const token = await auth.pageAuth(req);

  if (!token) {
    return {
      props: {
        ...(await serverSideTranslations(locale, ['common'])),
      },
    };
  } else {
    return {
      redirect: {
        permanent: false,
        destination: `/${locale}/browse`,
      },
    };
  }
}
