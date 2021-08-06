import Full from '@components/Full';
import Head from 'next/head';
import styled from 'styled-components';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Client } from '@projects/lookup/client';
import { FormatedProps } from '@Types/lookup';
import { Spinner } from '@components/Spinner';

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

const Discord = ({ id }) => {
  const [user, setUser] = useState({} as FormatedProps);

  useEffect(() => {
    const api = new Client('discord');

    api.get(id).then(user => setUser(user));
  }, [id]);

  if (!user?.success) {
    return (
      <Full className="grid place-items-center">
        <Spinner />
      </Full>
    );
  } else {
    const {
      avatar: { url },
      username,
      discriminator,
    } = user;

    return (
      <>
        <Full className="grid place-items-center">
          <ModalWrapper>
            <BackgroundColor color="rgb(70, 62, 48)" />
            <div className="w-full relative">
              <Avatar>
                <Image src={url} alt=" " className="" aria-hidden="true" height="120" width="120"></Image>
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
  }
};

const Page = () => {
  return (
    <>
      <Head>
        <title>Discord</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Discord id="340036867468820482" />
    </>
  );
};

export default Page;
