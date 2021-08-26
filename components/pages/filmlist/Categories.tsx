import { removeDuplicates, sortByKey } from '@utils/tools/array';
import { useEffect, useState } from 'react';

import Link from 'next/link';
import { genreList } from '@utils/tools/films';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';

const c = removeDuplicates(genreList.films.concat(genreList.series).map(({ name }) => name.toLowerCase()));

const Categories = () => {
  const Router = useRouter();
  const [curr, setCurr] = useState('');
  const { t } = useTranslation();

  useEffect(() => {
    setCurr(Router.query.key.toString());
  }, [Router]);

  return (
    <div className="p-6 flex flex-col w-250 overflow-hidden">
      <div className="w-full flex flex-col items-start mt-80" style={{ padding: '2px' }}>
        {sortByKey(c).map(n => (
          <Link href={`/s/filmlist/category/${n}`} passHref={true} shallow={false} key={n}>
            <span style={{ color: curr === n && '#d7b350' }} className="mt-1 flex items-center cursor-pointer filmlist-hover">
              {t(`pages.filmlist.categories.${n}`)}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
