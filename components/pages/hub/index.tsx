import Full from '@components/Full';
import { IoEllipsisHorizontalOutline } from 'react-icons/io5';
import Sidebar from '@components/pages/hub/Sidebar';
import Time from '@components/pages/hub/Time';
import Timers from './Timers';
import Widgets from './Widgets';

export const Hub = ({ widgets, settings, user, timer }) => {
  return (
    <Full className="flex flex-row">
      <Sidebar settings={settings} user={user} />
      <div className="h-screen w-full max-w-xs ml-3 bg-primary-800 p-4">
        <span className="flex justify-between items-center">
          <p className="font-semibold text-lg">Controls</p>
          <IoEllipsisHorizontalOutline className="h-4 w-4 text-primary-200 hover:text-primary-100 cursor-pointer" />
        </span>
      </div>
      <div className="h-screen w-full ml-3 bg-transparent p-4 pl-1  max-w-6xl">
        <Time className="text-primary-300" wrapperClassName="flex flex-col font-medium mb-5" />
        <div className="flex mb-6">
          <Widgets settings={settings} widgets={widgets} user={user} />
          <div className="ml-6 mt-9 w-full bg-primary-800 rounded-8 p-4"></div>
        </div>
        <div className="w-full max-h-250 h-full flex">
          <div className="h-full bg-primary-800 rounded-8 mr-6 w-full max-w-2xl p-4"></div>
          <Timers TimerItems={timer} />
        </div>
      </div>
    </Full>
  );
};

export default Hub;
