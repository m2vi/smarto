import { IoAddCircleOutline, IoAddOutline } from 'react-icons/io5';
import { useEffect, useState } from 'react';

import { WidgetProps } from '@Types/config';
import { sortByKey } from '@utils/tools/array';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import { WidgetItems } from '@utils/widgets';

const Widgets = ({ widgets, settings, me, ...props }) => {
  const { t } = useTranslation();

  const Widgets = widgets.map(name => WidgetItems(me).find(n => n.name === name));

  return (
    <div className="w-full max-w-xxs" {...props}>
      <span className="flex items-center justify-between mb-4">
        <p className="font-semibold text-lg">{t('pages.hub.widgets.default')}</p>
        <IoAddCircleOutline className="h-4 w-4 text-primary-200 hover:text-primary-100 cursor-pointer" />
      </span>
      <div className="grid grid-cols-2 grid-rows-3 gap-6 w-full">
        {sortByKey(Widgets, 'name').map(({ icon, name, unit, openInNewTab, path, func, removeSpace, default: defaultValue }) => {
          const { includeUnits } = settings.hub.widgets;

          return (
            <Widget
              icon={icon}
              name={t(`pages.hub.widgets.${name}`)}
              unit={includeUnits ? unit : null}
              key={name}
              openInNewTab={openInNewTab}
              path={path}
              func={func}
              removeSpace={removeSpace}
              default={defaultValue}
            />
          );
        })}
        <div className="h-widget rounded-8 text-primary-200 cursor-pointer text-center py-4 flex flex-col items-center border-dotted border-primary-500 border-2">
          <IoAddOutline className="h-4 w-4 mb-2" />
          <p className="small font-semibold text-primary-100">Add Widget</p>
        </div>
      </div>
    </div>
  );
};

const Widget = ({ icon: Icon, name, unit, openInNewTab, path, func, removeSpace, default: defaultValue }: WidgetProps) => {
  const [value, setValue] = useState(defaultValue);
  const Router = useRouter();

  useEffect(() => {
    func &&
      func().then(data => {
        data ? setValue(data) : setValue('-');
      });
  }, [func]);

  const handleClick = () => {
    if (path) {
      if (openInNewTab) {
        window.open(path, '_blank');
      } else {
        Router.push(path);
      }
    }
  };

  return (
    <div
      className="bg-primary-800 h-widget rounded-8 text-primary-200 cursor-pointer text-center py-4 flex flex-col items-center border-primary-800"
      onClick={handleClick}
    >
      <Icon className="h-4 w-4 mb-2" />
      <p className="small font-semibold text-primary-100 mb-1">{name}</p>
      <p className="reallySmall">
        {value}
        {removeSpace ? null : ' '}
        {unit}
      </p>
    </div>
  );
};

export default Widgets;
