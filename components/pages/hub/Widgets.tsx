import user from '@config/me';
import { WidgetProps } from '@Types/config';
import { useTranslation } from 'react-i18next';
import { IoAddCircleOutline, IoAddOutline } from 'react-icons/io5';

const Widgets = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full max-w-xxs ">
      <span className="flex items-center justify-between mb-4">
        <p className="font-semibold text-lg">{t('pages.hub.widgets.default')}</p>
        <IoAddCircleOutline className="h-4 w-4 text-primary-200 hover:text-primary-100 cursor-pointer" />
      </span>
      <div className="grid grid-cols-2 grid-rows-3 gap-6 w-full">
        {user.widgets.map(({ icon, name, unit, openInNewTab, path }) => {
          const { includeUnits } = user.settings.hub.widgets;

          return <Widget icon={icon} name={name} unit={includeUnits ? unit : null} key={name} openInNewTab={openInNewTab} path={path} />;
        })}
        <div className="h-widget rounded-8 text-primary-200 cursor-pointer text-center py-4 flex flex-col items-center border-dotted border-primary-500 border-2">
          <IoAddOutline className="h-4 w-4 mb-2" />
          <p className="small font-semibold text-primary-100">Add Widget</p>
        </div>
      </div>
    </div>
  );
};

const Widget = ({ icon: Icon, name, unit }: WidgetProps) => {
  return (
    <div className="bg-primary-800 h-widget rounded-8 text-primary-200 cursor-pointer text-center py-4 flex flex-col items-center border-primary-800">
      <Icon className="h-4 w-4 mb-2" />
      <p className="small font-semibold text-primary-100 mb-1">{name}</p>
      <p className="reallySmall">13 {unit}</p>
    </div>
  );
};

export default Widgets;
