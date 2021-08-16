import Sidebar from '@components/pages/filmlist/Sidebar';
import { FilmListItems } from '@config/filmlist';
import { MoviePageProps } from '@Types/filmlist';
import { searchArray, sortByKey } from '@utils/tools/array';
import { useEffect, useState } from 'react';
import Card from './Card';

const Index = ({ sort }: MoviePageProps) => {
  const [items, setItems] = useState([]);

  const filter = (key: string, value: any) => {
    const items = FilmListItems.filter(({ genre_ids }) => {
      return genre_ids.includes(27);
    });
    return sortByKey(items, 'name');

    return sortByKey(searchArray(FilmListItems, key, value), 'name');
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
        setItems(filter('watched', false));
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
    <div className="flex w-full h-full overflow-y-auto dD5d-items" style={{ background: '#222a33' }}>
      <Sidebar />
      <div className="w-full h-full ml-100 p-4 block">
        {sortByKey(items, 'title').map(({ ...props }) => (
          <Card {...props} sort={sort} key={`${props.id}-${props.type}`} />
        ))}
      </div>
    </div>
  );
};

export default Index;
