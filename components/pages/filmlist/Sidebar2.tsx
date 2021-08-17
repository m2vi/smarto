import { genreItems } from '@utils/tools/movies';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Sidebar2 = ({ items, categories: current, sort }) => {
  return (
    <div className="p-6 flex flex-col 250">
      <p className="text-3xl mb-11 opacity-70">Utils</p>
      <div className="w-full flex flex-col items-start">
        {genreItems(items).map(({ id, name }) => {
          return null;
          return (
            <Link href={`${sort}/${id}`} key={id} passHref={true}>
              <span>{name}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar2;
