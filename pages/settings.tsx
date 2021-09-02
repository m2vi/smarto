import Favicon from '@components/Favicon';
import Full from '@components/Full';
import Head from 'next/head';
import { Spinner } from '@components/Spinner';

const settings = () => {
  return (
    <Full className="grid place-items-center">
      <Head>
        <title>Settings</title>
      </Head>
      <Favicon project="hub" />
      <Spinner />
    </Full>
  );
};

export default settings;
