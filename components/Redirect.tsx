import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { RedirectProps } from '@Types/components';

export const Redirect = ({ title, type, url, as, options }: RedirectProps) => {
  const Router = useRouter();

  const defaultOptions = {
    shallow: true,
  };

  !options && (options = defaultOptions);

  useEffect(() => {
    if (!Router.isReady) return;

    switch (type) {
      case 'replace':
        Router.replace(url, as, options);
        break;

      default:
        Router.push(url, as, options);
        break;
    }
  }, [Router.isReady, Router, as, options, type, url]);

  return (
    <>
      <Head>
        <title>{title ? title : 'Redirecting...'}</title>
      </Head>
    </>
  );
};

export default Redirect;
