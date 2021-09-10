import LoginPage from '@components/Login';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Login = () => {
  const Router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
    } else {
      Router.replace('/s/discover');
    }
  }, [Router]);

  return <LoginPage />;
};

export default Login;
