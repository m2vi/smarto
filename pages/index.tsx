import Full from '@components/Full';
import { Spinner } from '@components/Spinner';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Index = () => {
  const Router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      Router.replace('/login');
    } else {
      Router.replace('/s/discover');
    }
  }, [Router]);

  return (
    <Full className="grid place-items-center">
      <Spinner />
    </Full>
  );
};

export default Index;
