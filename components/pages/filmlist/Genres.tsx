import { useEffect, useState } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';

const Genres = ({ genres, languages }) => {
  const Router = useRouter();
  const [currGenre, setCurrGenre] = useState('');
  const [currLanguage, setCurrLanguage] = useState('');
  const { t } = useTranslation();

  useEffect(() => {
    setCurrGenre(Router.query?.genre?.toString());
    setCurrLanguage(Router.query?.language?.toString());
  }, [Router]);

  return (
    <div className="m-6 flex flex-col w-300 overflow-hidden">
      <p className="text-primary-300" style={{ marginTop: '87px' }}>
        {t('pages.filmlist.genres.default')}
      </p>
      <div className="w-full flex flex-col items-start overflow-y-auto invisible-scrollbar mt-1" style={{ maxHeight: '210px' }}>
        {genres.map(({ id, count, name }) => (
          <Link href={`/s/filmlist/genre/${name.toLowerCase()}`} passHref={true} shallow={false} key={id}>
            <span
              style={{ color: currGenre === name.toLowerCase() && '#d7b350' }}
              className="my-1 first:mt-0 flex items-center justify-between cursor-pointer filmlist-hover w-full"
            >
              <span className="overflow-hidden overflow-ellipsis whitespace-nowrap">{t(`pages.filmlist.genres.${name.toLowerCase()}`)}</span>
              <span className="ml-4 mr-2 filmlist-accent">{count}</span>
            </span>
          </Link>
        ))}
      </div>
      <p className="text-primary-300 mt-4">{t('pages.filmlist.languages.default')}</p>
      <div className="w-full flex flex-col items-start overflow-y-auto invisible-scrollbar mt-1" style={{ maxHeight: '210px' }}>
        {languages.map(({ id, count }) => (
          <Link href={`/s/filmlist/language/${id}`} passHref={true} shallow={false} key={id}>
            <span
              style={{ color: currLanguage === id && '#d7b350' }}
              className="my-1 first:mt-0 flex items-center justify-between cursor-pointer filmlist-hover w-full"
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
