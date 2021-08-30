import { removeDuplicates, sortByKey } from '@utils/tools/array';
import { useEffect, useState } from 'react';

import Console from '@utils/tools/console';
import Link from 'next/link';
import { genreList } from '@utils/films/utils';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';

const Genres = () => {
  const Router = useRouter();
  const [curr, setCurr] = useState('');
  const { t } = useTranslation();
  const [genres, setGenres] = useState(null);

  useEffect(() => {
    setCurr(Router.query?.category?.toString());
  }, [Router]);

  useEffect(() => {
    fetch('/api/filmlist/genres')
      .then(g => g.json())
      .then(g => {
        setGenres(sortByKey(Object.entries(g), '0'));
        Console.fetch(g, 'filmlist/genres');
      });
  }, []);

  return (
    <>
      {genres ? (
        <div className="m-6 flex flex-col w-300 overflow-hidden">
          <div className="w-full flex flex-col items-start overflow-y-auto dD5d-items" style={{ marginTop: '87px', maxHeight: '515px' }}>
            {genres.map(genre => (
              <Link href={`/s/filmlist/category/${genre[0]}`} passHref={true} shallow={false} key={genre[0]}>
                <span
                  style={{ color: curr === genre[0] && '#d7b350' }}
                  className="mt-1 first:mt-0 flex items-center justify-between cursor-pointer filmlist-hover w-full"
                >
                  <span className="overflow-hidden overflow-ellipsis whitespace-nowrap">{t(`pages.filmlist.categories.${genre[0]}`)}</span>
                  <span style={{ color: '#d7b350' }} className="ml-4 mr-2">
                    {genre[1].length}
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <div className="w-250"></div>
      )}
    </>
  );
};

export default Genres;
