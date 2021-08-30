import Card from './Card';
import { CardProps } from '@Types/filmlist';
import Genres from './Genres';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Input } from './Input';
import Menu from '@components/pages/filmlist/Menu';
import { useEffect } from 'react';
import { useFilmSearch } from '@context/filmSearch';
import { useTranslation } from 'react-i18next';

const Index = ({ items }) => {
  const { dispatch, state } = useFilmSearch();
  const { t } = useTranslation();

  useEffect(() => {
    dispatch({ items });
  }, [dispatch, items]);

  const fetchMoreData = () => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    setTimeout(() => {
      // dispatch({
      //   items: this.state.items.concat(Array.from({ length: 20 })),
      // });
      console.log('Loaded..');
    }, 500);
  };

  return (
    <div className="w-full h-screen flex justify-center">
      <div className="flex w-full justify-between max-w-screen-2xl mx-8 lg:mx-11 2xl:mx-100 my-6">
        <Menu />
        <div className="w-full flex flex-col">
          <header className="w-full flex justify-end mt-6">
            <Input placeholder={t('pages.filmlist.menu.search')} className="max-w-xs mb-10" items={items} />
          </header>
          <main className="w-full overflow-y-auto dD5d-items" id="scrollableDiv">
            <InfiniteScroll
              dataLength={state.render.length}
              next={fetchMoreData}
              hasMore={true}
              loader={<h4>Loading...</h4>}
              scrollableTarget="scrollableDiv"
              className="w-full p-4 py-0 grid gap-6 grid-cols-2 flg:grid-cols-3 fxl:grid-cols-4 f2xl:grid-cols-5 auto-rows-auto place-items-center"
            >
              {state.render.map(({ ...props }) => {
                return <Card {...(props as CardProps)} key={`${props.id}-${props.type}`} />;
              })}
            </InfiniteScroll>
          </main>
        </div>
        <div className="w-250"></div>
        {/* <Genres /> */}
      </div>
    </div>
  );
};

export default Index;
