import { useEffect, useRef } from 'react';

import Body from '@components/pages/search/Body';
import Full from '@components/Full';
import GoBack from '@components/GoBack';
import Input from '@components/pages/search/Input';
import { Wrapper } from '@components/pages/search/styles';
import { useSearch } from '@context/search';

export const Search = ({ items }) => {
  const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const { dispatch } = useSearch();

  const handleKeyDown = (e: any) => {
    if (e.key === 'f' && e.ctrlKey === true) {
      e.preventDefault();
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }
  };

  useEffect(() => window.addEventListener('keydown', e => handleKeyDown(e)), []);

  useEffect(() => dispatch({ items }), [dispatch, items]);

  return (
    <>
      <Full
        className="grid place-items-center font-roboto"
        style={{
          backgroundImage: `url("/assets/bg/horizon.png")`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
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
