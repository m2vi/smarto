import { createRef, useEffect } from 'react';

import Card from './Card';
import { CardProps } from '@Types/filmlist';
import Genres from './Genres';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Input } from './Input';
import Menu from '@components/pages/filmlist/Menu';
import console from '@utils/tools/console';
import { useFilmSearch } from '@context/filmSearch';
import { useTranslation } from 'react-i18next';
import { util } from '@utils/films/client';

const Index = ({ items, type, sort, max, genres, languages }) => {
  const { dispatch, state } = useFilmSearch();
  const { t } = useTranslation();
  const ScrollRef = createRef<HTMLDivElement>();

  useEffect(() => {
    dispatch({ items });
    console.log(`items: ${max}, sort group: ${type}, sort: ${sort}`);
  }, [dispatch, items, max, sort, type]);

  useEffect(() => {
    if (ScrollRef.current) {
      if (ScrollRef.current.scrollTop === 0) return;
      console.log(`Scrolled from ${ScrollRef.current.scrollTop} to 0`);
      ScrollRef.current.scrollTop = 0;
    }
    // eslint-disable-next-line
  }, [max, sort, type]);

  const fetchMoreData = () => {
    if (sort === 'unfiltered') return;
    util.load(type, sort, state.items.length, max).then(data => dispatch({ items: state.items.concat(data) }));
  };

  return (
    <div className="w-full h-screen flex justify-center">
      <div className="flex w-full justify-between max-w-screen-f2xl my-6">
        <Menu />
        <div className="w-full flex flex-col">
          <header className="w-full flex justify-end mt-6">
            <Input placeholder={t('pages.filmlist.menu.search')} className="max-w-xs mb-10" items={items} />
          </header>
          <main className="w-full overflow-y-auto dD5d-items" ref={ScrollRef} id="scrollableDiv">
            <InfiniteScroll
              dataLength={state.items.length}
              next={fetchMoreData}
              hasMore={true}
              loader={null}
              scrollableTarget="scrollableDiv"
              className="w-full p-4 py-0 grid gap-6 grid-cols-1 fmd:grid-cols-2 flg:grid-cols-3 fxl:grid-cols-4 f2xl:grid-cols-5 auto-rows-auto place-items-center"
            >
              {state.items.map(({ ...props }, i: number) => {
                return <Card {...(props as CardProps)} key={i} />;
              })}
            </InfiniteScroll>
          </main>
        </div>
        <Genres genres={genres} languages={languages} />
      </div>
    </div>
  );
};

export default Index;
