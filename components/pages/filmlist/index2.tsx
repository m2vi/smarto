import Card from './Card2';
import { CardProps } from '@Types/filmlist';
import { Input } from './Input';
import Sidebar from '@components/pages/filmlist/Sidebar';
import { StreamingServices } from '@config/filmlist';
import { sortByKey } from '@utils/tools/array';
import { useEffect } from 'react';
import { useFilmSearch } from '@context/filmSearch';

const Index = ({ items }) => {
  const state = sortByKey(StreamingServices, 'name');

  return (
    <div className="w-full h-screen flex justify-center">
      <div className="flex w-full justify-between max-w-screen-2xl mx-8 lg:mx-11 2xl:mx-100 my-6">
        <Sidebar />
        <div className="w-full flex flex-col">
          <div className="w-full flex justify-end mt-6">
            <Input placeholder="Search movie, series" className="max-w-xs mb-10" items={items} />
          </div>

          <div className="w-full p-4 py-0 grid gap-6 grid-cols-2 flg:grid-cols-3 fxl:grid-cols-4 f2xl:grid-cols-5 auto-rows-auto overflow-y-auto dD5d-items place-items-center">
            {state.map(({ ...props }, index: number) => {
              return <Card {...(props as any)} key={`${props.id}-${props.type}`} />;
            })}
          </div>
        </div>
        <div className="w-250"></div>
      </div>
    </div>
  );
};

export default Index;
