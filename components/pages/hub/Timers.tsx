import moment from 'moment';
import { sortByKey } from '@utils/tools/array';
import { useTranslation } from 'react-i18next';
import user from '@config/me';

const Timers = () => {
  const { t } = useTranslation();

  return (
    <div className="h-full grid" style={{ width: 'calc(905px - 504px - 30px)' }}>
      <div className="grid grid-rows-2 grid-cols-3 w-full rounded-8 gap-6">
        {sortByKey(user.timers, 'date').map(({ icon: Icon, date, name }) => {
          const time = [moment(date).fromNow(true), `${moment(date).diff(this, 'days').toString()} days`];

          return (
            <div
              className="bg-primary-800 h-widget rounded-8 text-primary-200 cursor-pointer text-center py-4 flex flex-col items-center border-primary-800"
              key={name}
              title={time[1]}
            >
              <Icon className="h-4 w-4 mb-2" />
              <p className="small font-semibold text-primary-100 mb-1">{t(`pages.hub.timer.${name}`)}</p>
              <p className="reallySmall">{time[0]}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Timers;
