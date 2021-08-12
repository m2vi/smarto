import Full from '@components/Full';
import Head from 'next/head';
import styled from 'styled-components';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FormatedProps } from '@Types/lookup';
import getKeyColor from '@utils/tools/image/getColor';
import Tooltip from '@components/Tooltip';
import Favicon from '@components/Favicon';
import moment from 'moment';
import GoBack from '@components/GoBack';

const ModalWrapper = styled.div`
  background-color: #18191c;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  width: 600px;
  min-height: 200px;
`;

const BackgroundColor = styled.div`
  background-color: ${props => props.color};
  width: 600px;
  height: 120px;
  position: relative;
  transition: background-color 0.1s;
  outline: 0;
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: cover;
`;

const Avatar = styled.div`
  width: 120px;
  height: 120px;
  position: absolute;
  top: -68px;
  left: 16px;
  border: 8px solid #18191c;
  background-color: #18191c;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
`;

const HeaderTop = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  left: 160px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NameTag = styled.div`
  text-rendering: optimizeLegibility;
  pointer-events: all;
  padding: 0;
  border: 0;
  font-style: inherit;
  vertical-align: baseline;
  outline: 0;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
  position: relative;
  display: block;
  user-select: text;
  white-space: normal;
  word-break: break-word;
  line-height: 24px;
  font-size: 20px;
  margin-top: 76px;
  margin-left: 16px;
  margin-right: 16px;
  font-weight: 600;
  margin-bottom: 12px;

  span {
    overflow: hidden;
    display: inline;
    vertical-align: top;
    color: #fff;
    white-space: normal;
  }

  span.discriminator {
    color: #b9bbbe;
  }
`;

const CustomStatus = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1;
  text-rendering: optimizeLegibility;
  -webkit-box-direction: normal;
  pointer-events: all;
  margin: 0;
  border: 0;
  font-weight: inherit;
  font-style: inherit;
  font-family: inherit;
  font-size: 100%;
  vertical-align: baseline;
  outline: 0;
  padding: 16px;
  font-size: 14px;
  line-height: 18px;
  color: #b9bbbe;
  border-top: 1px solid #ffffff0f;
`;

const Discord = ({ data }) => {
  const [bannerColor, setBannerColor] = useState('transparent');
  const [bannerTooltip, setBannerTooltip] = useState('');
  const [bannerStyle, setBannerStyle] = useState({});

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

  useEffect(() => {
    console.log(data);
  }, [data]);

  useEffect(() => {
    if (customBannerColor && !bannerKey) {
      setBannerColor(customBannerColor);
      setBannerTooltip('Custom Banner Color');
    } else if (bannerKey && bannerUrl) {
      setBannerStyle({ backgroundImage: `url(${bannerUrl}?size=512)`, width: '600px', height: '240px', cursor: 'pointer' });
    } else {
      getKeyColor(avatarUrl).then(c => setBannerColor(c.hex));
      setBannerTooltip('I use a different algorithm');
    }
  }, [avatarUrl, bannerKey, bannerUrl, customBannerColor]);

  const redirect = (url: string) => {
    window.open(url, '_ blank');
  };

  return (
    <>
      <Head>
        <title>Discord</title>
        <Favicon project="lookup" />
      </Head>
      <div style={{ background: '#36393f' }}>
        <Full className="grid place-items-center" style={{ background: 'rgba(0, 0, 0, 0.75)' }}>
          <GoBack url="/s/lookup" className="absolute top-2 left-2 opacity-80" />
          <ModalWrapper>
            <Tooltip>
              <span data-tip={bannerTooltip}>
                <BackgroundColor
                  color={bannerColor}
                  style={bannerStyle}
                  onClick={() => bannerKey && bannerUrl && redirect(`${bannerUrl}?size=2048`)}
                />
              </span>
            </Tooltip>
            <div className="w-full relative">
              <Avatar onClick={() => redirect(`${avatarUrl}?size=1024`)}>
                <Image
                  src={`${avatarUrl}?size=128`}
                  alt=" "
                  className="avatarImage-d2dk select-none"
                  aria-hidden="true"
                  height="120"
                  width="120"
                ></Image>
              </Avatar>
              <HeaderTop />
            </div>
            <NameTag>
              <span>{username}</span>
              <span className="discriminator">#{discriminator}</span>
            </NameTag>
            <CustomStatus>
              <span>
                <b>Creation Date: </b>
                <span>
                  {moment(creationDate).format('Mo of MMMM YYYY')} ({moment().diff(creationDate, 'days')} Days)
                </span>
              </span>
              <span>
                <b>Flags: </b>
                <span>{flags}</span>
              </span>
              <span>
                <b>Id: </b>
                <span>{id}</span>
              </span>
            </CustomStatus>
          </ModalWrapper>
        </Full>
      </div>
    </>
  );
};

export async function getServerSideProps({ query: { id }, req }) {
  const protocol = req.headers['x-forwarded-proto'] || 'http';
  const baseUrl = req ? `${protocol}://${req.headers.host}` : '';

  const data = await (await fetch(`${baseUrl}/api/lookup?service=discord&id=${id}`)).json();

  if (!data) {
    return {
      props: { data: false },
    };
  }

  return {
    props: { data },
  };
}

export default Discord;
