import {
  IoAlbumsOutline,
  IoBookOutline,
  IoCreateOutline,
  IoFilmOutline,
  IoHappyOutline,
  IoHourglassOutline,
  IoLogOutOutline,
  IoRefreshOutline,
  IoSearchOutline,
  IoShuffleOutline,
  IoStarOutline,
  IoTimerOutline,
  IoTvOutline,
} from 'react-icons/io5';
import { useEffect, useState } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import { util } from '@utils/films/client';

const sections = [
  {
    icon: IoBookOutline,
    key: 'all',
  },
  {
    icon: IoStarOutline,
    key: 'favourites',
  },
  {
    icon: IoRefreshOutline,
    key: 'new',
  },
  {
    icon: IoTimerOutline,
    key: 'later',
  },
  {
    icon: IoHourglassOutline,
    key: 'soon',
  },
  {
    icon: IoHappyOutline,
    key: 'kids',
  },
  {
    icon: IoFilmOutline,
    key: 'films',
  },
  {
    icon: IoTvOutline,
    key: 'series',
  },
];

const otherSections = [
  {
    icon: IoSearchOutline,
    path: '/s/filmlist/find/*',
    key: 'find',
  },
  {
    icon: IoLogOutOutline,
    path: '/',
    key: 'goback',
  },
];

const Sidebar = () => {
  const Router = useRouter();
  const [curr, setCurr] = useState('');
  const { t } = useTranslation();

  useEffect(() => {
    setCurr(Router.query?.key?.toString());
  }, [Router]);

  const reloadCache = () => {
    util.reload().then(() => {
      Router.reload();
    });
  };

  return (
    <aside className="m-6 flex flex-col w-250 overflow-hidden overflow-y-auto dD5d-items">
      <p className="text-3xl mb-8 cursor-pointer" onClick={reloadCache}>
        {t('pages.filmlist.name')}
        <span style={{ color: 'var(--color-accent)' }}>.</span>
      </p>
      <div className="w-full flex flex-col items-start">
        {sections.map(({ icon: Icon, key }) => (
          <Link href={`/s/filmlist/default/${key}`} passHref={true} shallow={false} key={key}>
            <span
              style={{ color: curr === key && 'var(--color-accent)' }}
              className="my-2 flex items-center cursor-pointer hover:text-accent overflow-hidden overflow-ellipsis whitespace-nowrap"
            >
              {<Icon className="h-4 2xl:w-4 mr-2" />}
              {t(`pages.filmlist.menu.${key}`)}
            </span>
          </Link>
        ))}
        <div className="w-full bg-primary-300 opacity-50 my-2" style={{ height: '1px' }}></div>
        {otherSections.map(({ path, icon: Icon, key }) => (
          <Link href={`${path}`} passHref={true} shallow={false} key={key}>
            <span
              style={{ color: curr === key && 'var(--color-accent)' }}
              className="my-2 flex items-center cursor-pointer hover:text-accent overflow-hidden overflow-ellipsis whitespace-nowrap"
            >
              {<Icon className="h-4 2xl:w-4 mr-2" />}
              {t(`pages.filmlist.menu.${key}`)}
            </span>
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
