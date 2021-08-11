import Favicon from '@components/Favicon';
import Full from '@components/Full';
import Head from 'next/head';
import Image from 'next/image';
import DiscordLogo from '@public/assets/logos/discord.svg';
import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
import { Input } from '@components/Input';

const Home = () => {
  const Router = useRouter();
  const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const [showModal, setShowModal] = useState([false, '']);
  const [id, SetId] = useState('');

  const handleClick = (url: string) => {
    Router.push(`/s/lookup/${url}`);
  };

  return (
    <>
      <Head>
        <title>Lookup</title>
        <Favicon project="lookup" />
      </Head>
      <Full className="grid place-items-center">
        <div
          className="bg-primary-800 p-3 w-80 h-80 grid place-items-center rounded-15 hover:bg-primary-700 cursor-pointer no-drag select-none"
          onClick={() => setShowModal([true, 'discord'])}
        >
          <DiscordLogo className="w-full h-full" />
        </div>
        <div
          className={`${!showModal[1] ? 'pointer-events-none invisible' : 'grid place-items-center'} absolute inset-0 w-screen h-full`}
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
        >
          <div className="max-w-md w-full h-12 bg-primary-700 rounded-15 grid place-items-center p-3">
            <Input placeholder="Id" ref={inputRef} onKeyDown={e => e.key === 'Enter' && handleClick(`${showModal[1]}/${inputRef.current.value}`)} />
          </div>
        </div>
      </Full>
    </>
  );
};

export default Home;

// TODO: Use react-modal and context
