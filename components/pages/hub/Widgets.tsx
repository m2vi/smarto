import { IoAddCircleOutline, IoAddOutline } from 'react-icons/io5';
import { useEffect, useState } from 'react';

import Icon from '@components/Icon';
import { WidgetProps } from '@Types/config';
import { sortByKey } from '@utils/tools/array';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import user from '@config/me';

const Widgets = ({ widgets, ...props }) => {
  const { t } = useTranslation();

  return (
    <div className="w-full max-w-xxs" {...props}>
      <span className="flex items-center justify-between mb-4">
        <p className="font-semibold text-lg">{t('pages.hub.widgets.default')}</p>
        <IoAddCircleOutline className="h-4 w-4 text-primary-200 hover:text-primary-100 cursor-pointer" />
      </span>
      <div className="grid grid-cols-2 grid-rows-3 gap-6 w-full">
        {sortByKey(widgets, 'name').map(({ icon, name, unit, openInNewTab, path, func, removeSpace }) => {
          const { includeUnits } = user.settings.hub.widgets;

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

const Widget = ({ icon, name, unit, openInNewTab, path, func, removeSpace }: WidgetProps) => {
  const [value, setValue] = useState('');
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
      {/* <Icon icon={icon} className="h-4 w-4 mb-2" /> */}
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
