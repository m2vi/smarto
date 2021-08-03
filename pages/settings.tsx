import Favicon from '@components/Favicon';
import Full from '@components/Full';
import { Spinner } from '@components/Spinner';
import Head from 'next/head';

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
