import Full from '@components/Full';
import Head from 'next/head';
import styled from 'styled-components';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { FormatedProps } from '@Types/lookup';
import getKeyColor, { getDominantColor } from '@utils/tools/image/getColor';
import Tooltip from '@components/Tooltip';

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
  line-height: 1;
  user-select: none;
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
  padding: 0 0 16px 16px;
  font-size: 14px;
  line-height: 18px;
  color: #b9bbbe;
`;

const Discord = ({ data }) => {
  const [bannerColor, setBannerColor] = useState('transparent');
  const {
    avatar: { url: avatar },
    username,
    discriminator,
  } = data as FormatedProps;
  const imageRef = useRef() as React.MutableRefObject<HTMLImageElement>;

  useEffect(() => {
    console.log(data);
  }, [data]);

  useEffect(() => {
    getKeyColor(avatar).then(c => setBannerColor(c.hex));
  }, [avatar]);

  return (
    <>
      <Head>
        <title>Discord</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>

      <Full className="grid place-items-center">
        <ModalWrapper>
          <Tooltip>
            <BackgroundColor color={bannerColor} data-tip="dd" />
          </Tooltip>
          <div className="w-full relative">
            <Avatar>
              <Image src={`${avatar}?size=128`} alt=" " className="avatarImage-d2dk" aria-hidden="true" height="120" width="120"></Image>
            </Avatar>
            <HeaderTop />
          </div>
          <NameTag>
            <span>{username}</span>
            <span className="discriminator">#{discriminator}</span>
          </NameTag>
          <CustomStatus>I have all the best cognition with all the top grammar</CustomStatus>
        </ModalWrapper>
      </Full>
    </>
  );
};

export async function getServerSideProps({ query: { id }, req }) {
  const protocol = req.headers['x-forwarded-proto'] || 'http';
  const baseUrl = req ? `${protocol}://${req.headers.host}` : '';

  const data = await (await fetch(`${baseUrl}/api/lookup?service=discord&id=${id}`)).json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
  };
}

export default Discord;
