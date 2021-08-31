import { removeDuplicates, sortByKey } from '@utils/tools/array';
import { useEffect, useState } from 'react';

import Console from '@utils/tools/console';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';

const Genres = () => {
  const Router = useRouter();
  const [currGenre, setCurrGenre] = useState('');
  const [currLanguage, setCurrLanguage] = useState('');
  const { t } = useTranslation();
  const [genres, setGenres] = useState([]);
  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    setCurrGenre(Router.query?.genre?.toString());
    setCurrLanguage(Router.query?.language?.toString());
  }, [Router]);

  useEffect(() => {
    fetch('/api/filmlist/genres')
      .then(g => g.json())
      .then(g => {
        setGenres(sortByKey(g, 'name'));
        Console.fetch(g, 'filmlist/genres');
      });
    fetch('/api/filmlist/languages')
      .then(l => l.json())
      .then(l => {
        setLanguages(sortByKey(l, 'count').reverse());
        Console.fetch(l, 'filmlist/languages');
      });
  }, []);

  return (
    <div className="m-6 flex flex-col w-300 overflow-hidden">
      <p className="text-primary-300" style={{ marginTop: '87px' }}>
        {t('pages.filmlist.genres.default')}
      </p>
      <div className="w-full flex flex-col items-start overflow-y-auto invisible-scrollbar mt-2" style={{ maxHeight: '200px' }}>
        {genres.map(({ id, count, name }) => (
          <Link href={`/s/filmlist/genre/${name.toLowerCase()}`} passHref={true} shallow={false} key={id}>
            <span
              style={{ color: currGenre === name.toLowerCase() && '#d7b350' }}
              className="mt-1 first:mt-0 flex items-center justify-between cursor-pointer filmlist-hover w-full"
            >
              <span className="overflow-hidden overflow-ellipsis whitespace-nowrap">{t(`pages.filmlist.genres.${name.toLowerCase()}`)}</span>
              <span className="ml-4 mr-2 filmlist-accent">{count}</span>
            </span>
          </Link>
        ))}
      </div>
      <p className="text-primary-300 mt-6">{t('pages.filmlist.languages.default')}</p>
      <div className="w-full flex flex-col items-start overflow-y-auto invisible-scrollbar mt-2" style={{ maxHeight: '200px' }}>
        {languages.map(({ id, count }) => (
          <Link href={`/s/filmlist/language/${id}`} passHref={true} shallow={false} key={id}>
            <span
              style={{ color: currLanguage === id && '#d7b350' }}
              className="mt-1 first:mt-0 flex items-center justify-between cursor-pointer filmlist-hover w-full"
            >
              <span className="overflow-hidden overflow-ellipsis whitespace-nowrap">{t(`pages.filmlist.languages.${id}`)}</span>
              <span className="ml-4 mr-2 filmlist-accent">{count}</span>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Genres;
