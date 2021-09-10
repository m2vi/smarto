import Full from '@components/Full';
import { Spinner } from '@components/Spinner';
import auth from '@utils/security/auth';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Index = () => {
  const Router = useRouter();

  useEffect(() => {
    const func = async () => {
      const token = await auth.getToken();

      if (!token) {
        Router.push('/login');
      } else {
        Router.replace('/s/discover');
      }
    };

    func();
  }, [Router]);

  return null;
};

export default Index;
