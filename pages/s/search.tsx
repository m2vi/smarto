import Full from '@components/Full';
import Head from 'next/head';
import styled from 'styled-components';
import { IoSearch, IoReturnDownBackSharp, IoLinkOutline, IoLink } from 'react-icons/io5';
import EditBox from '@public/assets/icons/editBox.svg';
import { useRouter } from 'next/router';
import user from '@config/me';
import { matchSorter } from 'match-sorter';
import { useState } from 'react';
import { SearchItemProps } from '@Types/search';

export const Wrapper = styled.div`
  max-width: 500px;
  height: 288px;
  background: rgba(0, 0, 0, 0.5);
  box-shadow: 8px 16px 64px rgba(0, 0, 0, 0.24);
  backdrop-filter: blur(16px);
`;

export const Bar = styled.div`
  background: rgba(0, 0, 0, 0.4);
  border-radius: 8px 8px 0px 0px;
  height: 72px;
  width: full;
`;

export const Item = ({ icon: Icon, name, path }: SearchItemProps) => {
  if (!Icon) Icon = IoLinkOutline;

  const Router = useRouter();

  const handleClick = () => {
    Router.push(path);
  };

  return (
    <div className="flex flex-row items-center justify-between px-3 py-2 rounded-8 cursor-pointer dD5d-search" onClick={handleClick}>
      <div className="flex flex-row items-center justify-start">
        <span className="h-3 w-3 grid place-items-center mr-3">
          <Icon />
        </span>
        <span className="small font-light l-1">{name}</span>
      </div>
      <IoReturnDownBackSharp className="h-3 w-3 dD5d-icon" />
    </div>
  );
};

export const Search = () => {
  const [items, setItems] = useState(user.search);

  return (
    <>
      <Head>
        <title>Search</title>
      </Head>
      <Full
        className="grid place-items-center"
        style={{ backgroundImage: `url("/assets/bg/sand.png")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
      >
        <Wrapper className="w-full rounded-8 flex flex-col">
          <Bar className="p-5 flex justify-between">
            <div className="flex items-center justify-start">
              <IoSearch className="text-white opacity-60 h-5 w-5" />
            </div>
            <p className="small text-center flex items-center justify-center text-white opacity-60 font-light">&#8984; + F</p>
          </Bar>
          <div className="flex flex-col px-3 py-1">
            {items.map(item => {
              const { icon, name, path } = item;

              return <Item icon={icon} path={path} name={name} key={name} />;
            })}
          </div>
        </Wrapper>
      </Full>
    </>
  );
};

export const searchItems = (value: string) => {
  const items = matchSorter(user.search, value, { keys: ['name', 'path', 'tags'] });
  return items;
};

export default Search;
