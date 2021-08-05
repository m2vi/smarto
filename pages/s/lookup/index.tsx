import Favicon from '@components/Favicon';
import Full from '@components/Full';
import Head from 'next/head';
import Image from 'next/image';
import DiscordLogo from '@public/assets/logos/discord.svg';
import { useRouter } from 'next/router';

const Home = () => {
  const Router = useRouter();
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
          onClick={() => handleClick('discord')}
        >
          <Image src={DiscordLogo} alt="Discord Logo" />
        </div>
      </Full>
    </>
  );
};

export default Home;
