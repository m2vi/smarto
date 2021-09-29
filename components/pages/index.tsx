import Full from '@components/Full';
import Time from '@components/pages/Time';
import Sidebar from './Sidebar';
import Timers from './Timers';
import Widgets from './Widgets';

export const Hub = ({ widgets, settings, me, timer }) => {
  return (
    <Full className="flex flex-row p-4">
      <Sidebar settings={settings} />
      <div className="h-full w-full ml-3 bg-transparent pl-1  max-w-6xl">
        <Time className="text-primary-300" wrapperClassName="flex flex-col font-medium mb-5" />
        <div className="flex mb-6">
          <Widgets settings={settings} widgets={widgets} me={me} />
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
