import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import {
  IoBookOutline,
  IoCompassOutline,
  IoFilmOutline,
  IoHappyOutline,
  IoHourglassOutline,
  IoStarOutline,
  IoTimerOutline,
  IoTvOutline,
} from 'react-icons/io5';

const sections = [
  {
    icon: IoBookOutline,
    path: 'all',
    name: 'All Items',
  },
  {
    icon: IoStarOutline,
    path: 'favourites',
    name: 'Favourites',
  },
  {
    icon: IoTimerOutline,
    path: 'later',
    name: 'Watchlist',
  },
  {
    icon: IoHourglassOutline,
    path: 'soon',
    name: 'Coming Soon',
  },
  {
    icon: IoHappyOutline,
    path: 'childish',
    name: 'Childish',
  },
  {
    icon: IoFilmOutline,
    path: 'films',
    name: 'Films',
  },
  {
    icon: IoTvOutline,
    path: 'series',
    name: 'Series',
  },
];

const Sidebar = () => {
  const Router = useRouter();
  const [curr, setCurr] = useState('');

  useEffect(() => {
    setCurr(Router.query.key.toString());
  }, [Router]);

  return (
    <div className="p-6 flex flex-col w-250">
      <p className="text-3xl mb-11">
        filmlist<span style={{ color: '#d7b350' }}>.</span>
      </p>
      <div className="w-full flex flex-col items-start">
        {sections.map(({ path, icon: Icon, name }) => (
          <Link href={path} passHref={true} shallow={true} key={name}>
            <span style={{ color: curr === path && '#d7b350' }} className="my-2 flex items-center cursor-pointer">
              {<Icon className="h-4 2xl:w-4 mr-2" />}
              {name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
