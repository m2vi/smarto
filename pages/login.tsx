import LoginPage from '@components/Login';
import auth from '@utils/security/auth';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Login = () => {
  const Router = useRouter();

  useEffect(() => {
    const func = async () => {
      const token = await auth.getToken();

      if (!token) {
      } else {
        Router.replace('/s/discover');
      }
    };

    func();
  }, [Router]);

  return <LoginPage />;
};

export default Login;

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
