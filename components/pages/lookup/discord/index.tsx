import Full from '@components/Full';
import Head from 'next/head';
import { HeaderTop, ModalWrapper, NameTag, Wrapper } from '@components/pages/lookup/discord/styles';
import { FormatedProps } from '@Types/lookup';
import Favicon from '@components/Favicon';
import GoBack from '@components/GoBack';
import Banner from '@components/pages/lookup/discord/Banner';
import AvatarEl from '@components/pages/lookup/discord/Avatar';
import Details from '@components/pages/lookup/discord/Details';
import BotBadge from './BotBadge';

const Discord = ({ data }) => {
  const {
    avatar: { url: avatarUrl },
    username,
    discriminator,
    banner: { color: customBannerColor, key: bannerKey, url: bannerUrl },
    creationDate,
    flags,
    id,
    bot,
  } = data as FormatedProps;

  return (
    <>
      <Head>
        <title>Discord</title>
        <Favicon project="lookup" />
      </Head>
      <Wrapper>
        <Full className="grid place-items-center" style={{ background: 'rgba(0, 0, 0, 0.75)' }}>
          <GoBack url="/s/lookup" className="absolute top-2 left-2 opacity-80" />
          <ModalWrapper>
            <Banner avatarUrl={avatarUrl} bannerKey={bannerKey} bannerUrl={bannerUrl} customBannerColor={customBannerColor} />
            <div className="w-full relative">
              <AvatarEl avatarUrl={avatarUrl} />
              <HeaderTop />
            </div>
            <NameTag>
              {username}
              <span className="discriminator">#{discriminator}</span>
              <BotBadge isBot={bot} />
            </NameTag>
            <Details creationDate={creationDate} flags={flags} id={id} />
          </ModalWrapper>
        </Full>
      </Wrapper>
    </>
  );
};

export default Discord;
