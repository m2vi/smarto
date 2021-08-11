import { useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import Full from '@components/Full';
import user from '@config/me';
import GoBack from '@components/GoBack';
import Favicon from '@components/Favicon';
import { Wrapper } from '@components/pages/search/styles';
import Input from '@components/pages/search/Input';
import Body from '@components/pages/search/Body';

export const Search = () => {
  const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  const handleKeyDown = (e: any) => {
    if (e.key === 'f' && e.ctrlKey === true) {
      e.preventDefault();
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }
  };

  useEffect(() => window.addEventListener('keydown', e => handleKeyDown(e)), []);

  return (
    <>
      <Head>
        <title>Search</title>
        <Favicon project="hub" />
      </Head>
      <Full
        className="grid place-items-center font-roboto"
        style={{ backgroundImage: `url("/assets/bg/sand.png")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
        onKeyPress={handleKeyDown}
      >
        <GoBack url="/" className="absolute top-0 left-0 m-2 opacity-80" />
        <Wrapper className="w-full rounded-8 flex flex-col">
          <Input ref={inputRef} />
          <Body />
        </Wrapper>
      </Full>
    </>
  );
};

export default Search;
