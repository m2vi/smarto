import {
  IoBookOutline,
  IoFilmOutline,
  IoHappyOutline,
  IoHourglassOutline,
  IoLogOutOutline,
  IoSettingsOutline,
  IoStarOutline,
  IoTimerOutline,
  IoTvOutline,
} from 'react-icons/io5';
import { useEffect, useState } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';

const sections = [
  {
    icon: IoBookOutline,
    path: 'all',
    key: 'all',
  },
  {
    icon: IoStarOutline,
    path: 'favourites',
    key: 'fav',
  },
  {
    icon: IoTimerOutline,
    path: 'later',
    key: 'later',
  },
  {
    icon: IoHourglassOutline,
    path: 'soon',
    key: 'soon',
  },
  {
    icon: IoHappyOutline,
    path: 'childish',
    key: 'childish',
  },
  {
    icon: IoFilmOutline,
    path: 'films',
    key: 'films',
  },
  {
    icon: IoTvOutline,
    path: 'series',
    key: 'series',
  },
];

const Sidebar = () => {
  const Router = useRouter();
  const [curr, setCurr] = useState('');
  const { t } = useTranslation();

  useEffect(() => {
    setCurr(Router.query.key.toString());
  }, [Router]);

  return (
    <div className="p-6 flex flex-col w-250">
      <p className="text-3xl mb-8">
        {t('pages.filmlist.name')}
        <span style={{ color: '#d7b350' }}>.</span>
      </p>
      <div className="w-full flex flex-col items-start">
        {sections.map(({ path, icon: Icon, key }) => (
          <Link href={path} passHref={true} shallow={false} key={key}>
            <span style={{ color: curr === path && '#d7b350' }} className="my-2 flex items-center cursor-pointer">
              {<Icon className="h-4 2xl:w-4 mr-2" />}
              {t(`pages.filmlist.menu.${key}`)}
            </span>
          </Link>
        ))}
        <div className="w-full bg-primary-300 opacity-50 my-2" style={{ height: '1px' }}></div>
        <Link href={'/'} passHref={true} shallow={false}>
          <span className="my-2 flex items-center cursor-pointer">
            {<IoSettingsOutline className="h-4 2xl:w-4 mr-2" />}
            {t(`pages.filmlist.menu.settings`)}
          </span>
        </Link>
        <Link href={'/'} passHref={true} shallow={false}>
          <span className="my-2 flex items-center cursor-pointer">
            {<IoLogOutOutline className="h-4 2xl:w-4 mr-2" />}
            {t(`pages.filmlist.menu.goback`)}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
