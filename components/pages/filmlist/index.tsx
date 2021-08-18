import Card from './Card';
import { CardProps } from '@Types/filmlist';
import { Input } from './Input';
import Sidebar from '@components/pages/filmlist/Sidebar';
import { useEffect } from 'react';
import { useFilmSearch } from '@context/filmSearch';

const Index = ({ items }) => {
  const { dispatch, state } = useFilmSearch();

  useEffect(() => {
    dispatch({ items });
  }, [dispatch, items]);

  return (
    <div className="w-full h-screen flex justify-center">
      <div className="flex w-full justify-between max-w-screen-2xl mx-100 my-6">
        <Sidebar />
        <div className="w-full flex flex-col">
          <div className="w-full flex justify-end mt-6">
            <Input placeholder="Search movie, series" className="max-w-xs mb-10" items={items} />
          </div>

          <div className="w-full p-4 py-0 grid gap-6 grid-cols-5 auto-rows-auto overflow-y-auto dD5d-items">
            {state.render.map(({ ...props }, index) => {
              // if (index > 100) return null;

              return <Card {...(props as CardProps)} key={`${props.id}-${props.type}`} />;
            })}
          </div>
        </div>
        <div className="w-250"></div>
      </div>
    </div>
  );
};

export default Index;
