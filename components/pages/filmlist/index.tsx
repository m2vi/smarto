import Sidebar from '@components/pages/filmlist/Sidebar';
import { FilmListItems } from '@config/filmlist';
import { useFilmSearch } from '@context/filmSearch';
import { CardProps, MoviePageProps } from '@Types/filmlist';
import { sortByKey } from '@utils/tools/array';
import { useEffect, useState } from 'react';
import Card from './Card';
import { Input } from './Input';

const Index = ({ sort }: MoviePageProps) => {
  const { dispatch, state } = useFilmSearch();

  useEffect(() => {
    dispatch({ sort });
  }, [sort, dispatch]);

  return (
    <div className="w-full h-screen flex justify-center">
      <div className="flex w-full justify-between max-w-screen-2xl mx-100 my-6">
        <Sidebar />
        <div className="w-full flex flex-col">
          <div className="w-full flex justify-end mt-6">
            <Input placeholder="Search movie, series" className="max-w-xs mb-10" sort={sort} />
          </div>

          <div className="w-full p-4 py-0 grid gap-6 grid-cols-5 auto-rows-auto overflow-y-auto dD5d-items">
            {(state as CardProps[]).map(({ ...props }) => (
              <Card {...props} sort={sort} key={`${props.id}-${props.type}`} />
            ))}
          </div>
        </div>
        <div className="w-250"></div>
      </div>
    </div>
  );
};

export default Index;
