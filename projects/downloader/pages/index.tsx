import Head from 'next/head';
import { useEffect } from 'react';
import Menu from '../components/Menu';

export default function Home() {
  return (
    <>
      <Head>
        <title>Downloader - Menu</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='h-full w-full'>
        <Menu />
      </main>
    </>
  );
}
