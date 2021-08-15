import Full from '@components/Full';
import Sidebar from '@components/pages/filmlist/Sidebar';
import { MovieListItems } from '@config/me';
import { MoviePageProps } from '@Types/movielist';
import { searchArray, sortByKey } from '@utils/tools/array';
import { useEffect, useState } from 'react';
import Card from './Card';

const Index = ({ sort }: MoviePageProps) => {
  const [items, setItems] = useState([]);

  const filter = (key: string, value: any) => {
    return sortByKey(searchArray(MovieListItems, key, value), 'name');
  };

  useEffect(() => {
    switch (sort) {
      case 'all':
        setItems(sortByKey(MovieListItems, 'name'));
        break;
      case 'favourites':
        setItems(filter('favoured', true));
        break;
      case 'later':
        setItems(filter('watched', false));
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
      <div className="w-full h-full ml-100 p-4 grid row-cols-auto grid-cols-8">
        {sortByKey(items, 'title').map(({ ...props }) => (
          <Card {...props} key={props.id} />
        ))}
      </div>
    </div>
  );
};

export default Index;
