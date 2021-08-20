import {
  IoBookOutline,
  IoFilmOutline,
  IoHappyOutline,
  IoHourglassOutline,
  IoLogOutOutline,
  IoPlayOutline,
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
    key: 'all',
  },
  {
    icon: IoStarOutline,
    key: 'favourites',
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
    key: 'childish',
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
    icon: IoPlayOutline,
    path: '/s/filmlist/streaming',
    key: 'streaming',
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
    setCurr(Router.query.key.toString());
  }, [Router]);

  return (
    <div className="p-6 flex flex-col w-250 overflow-hidden">
      <p className="text-3xl mb-8">
        {t('pages.filmlist.name')}
        <span style={{ color: '#d7b350' }}>.</span>
      </p>
      <div className="w-full flex flex-col items-start">
        {sections.map(({ icon: Icon, key }) => (
          <Link href={`/s/filmlist/${key}`} passHref={true} shallow={false} key={key}>
            <span style={{ color: curr === key && '#d7b350' }} className="my-2 flex items-center cursor-pointer filmlist-hover">
              {<Icon className="h-4 2xl:w-4 mr-2" />}
              {t(`pages.filmlist.menu.${key}`)}
            </span>
          </Link>
        ))}
        <div className="w-full bg-primary-300 opacity-50 my-2" style={{ height: '1px' }}></div>
        {otherSections.map(({ path, icon: Icon, key }) => (
          <Link href={`${path}`} passHref={true} shallow={false} key={key}>
            <span style={{ color: curr === key && '#d7b350' }} className="my-2 flex items-center cursor-pointer filmlist-hover">
              {<Icon className="h-4 2xl:w-4 mr-2" />}
              {t(`pages.filmlist.menu.${key}`)}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
