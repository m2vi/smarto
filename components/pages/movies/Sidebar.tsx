import { useRouter } from 'next/router';
import { IoCompassOutline, IoFilmOutline, IoLogOutOutline, IoStarOutline, IoTimerOutline, IoTvOutline } from 'react-icons/io5';

const sections = [
  {
    icon: IoCompassOutline,
    path: 'all',
  },
  {
    icon: IoStarOutline,
    path: 'favourites',
  },
  {
    icon: IoTimerOutline,
    path: 'later',
  },
  {
    icon: IoFilmOutline,
    path: 'films',
  },
  {
    icon: IoTvOutline,
    path: 'series',
  },
];

const Sidebar = () => {
  const Router = useRouter();
  const handleClick = (path: string) => {
    Router.push(`/s/movielist/${path}`);
  };

  return (
    <div
      className="fixed left-0 top-0 bottom-0 h-full w-80 p-3 flex flex-col items-center justify-between"
      style={{
        background: '#191c1e',
        boxShadow: '0px 40px 40px 8px rgba(0, 0, 0, 0.16)',
        backdropFilter: 'blur(24px)',
      }}
    >
      <div className="flex flex-col items-center">
        {sections.map(({ icon: Icon, path }) => (
          <div
            className="grid place-items-center mb-11 mt-4 h-4 w-4 cursor-pointer hover:text-accent-hover"
            key={path}
            onClick={() => handleClick(path)}
          >
            <Icon className="h-4 w-4" />
          </div>
        ))}
      </div>
      <div className="grid place-items-center my-4 h-4 w-4 cursor-pointer hover:text-accent-hover" onClick={() => Router.push('/')}>
        <IoLogOutOutline className="h-4 w-4" />
      </div>
    </div>
  );
};

export default Sidebar;
