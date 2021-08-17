import Sidebar from '@components/pages/filmlist/Sidebar';
import { FilmListItems } from '@config/filmlist';
import { MoviePageProps } from '@Types/filmlist';
import { searchArray, sortByKey } from '@utils/tools/array';
import { applyConfig, getReleaseDate, isReleased, removeUnreleased } from '@utils/tools/movies';
import { useEffect, useState } from 'react';
import Card from './Card';
import Sidebar2 from './Sidebar2';

const Index = ({ sort }: MoviePageProps) => {
  const [items, setItems] = useState([]);

  const filter = (key: string, value: any) => {
    if (key === 'soon') {
      let bin = FilmListItems;

      bin = bin.filter(({ release_date }) => {
        return !isReleased(release_date);
      });

      return sortByKey(bin, 'release_date');
    } else {
      return sortByKey(searchArray(FilmListItems, key, value), 'name');
    }
  };

  useEffect(() => {
    switch (sort) {
      case 'all':
        setItems(sortByKey(FilmListItems, 'name'));
        break;
      case 'favourites':
        setItems(filter('favoured', true));
        break;
      case 'later':
        setItems(removeUnreleased(filter('watched', false)));
        break;
      case 'soon':
        setItems(filter('soon', false));
        break;
      case 'childish':
        setItems(filter('childish', true));
        break;
      case 'films':
        setItems(filter('type', 'film'));
        break;
      case 'series':
        setItems(filter('type', 'series'));
        break;
      default:
        setItems([]);
        break;
    }
  }, [sort]);

  return (
    <div className="w-full h-screen flex justify-center" style={{ background: '#121212' }}>
      <div className="flex w-full justify-between max-w-screen-2xl mx-100 my-6">
        <Sidebar />
        <div className="w-full p-4 py-0 block overflow-y-auto dD5d-items" style={{ marginTop: '130px' }}>
          {sortByKey(items, 'title').map(({ ...props }) => (
            <Card {...props} sort={sort} key={`${props.id}-${props.type}`} />
          ))}
        </div>
        <Sidebar2 items={items} categories={[]} sort={sort} />
      </div>
    </div>
  );
};

export default Index;
