import { useEffect, useState } from 'react';
import moment from 'moment';
import { useTranslation } from 'react-i18next';

import { TimeProps } from '@Types/components';
import { between } from '@utils/tools/number';

const getGreeting = (hours: number): number => {
  if (between(hours, 5, 11)) {
    return 0;
  } else if (between(hours, 11, 17)) {
    return 1;
  } else if (between(hours, 18, 22)) {
    return 2;
  } else if (between(hours, 23, 24) || between(hours, 0, 4)) {
    return 3;
  }
};

const Time = ({ format = 'LT', wrapperClassName, ...props }: TimeProps) => {
  const { t } = useTranslation();
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={wrapperClassName}>
      <span className="font-semibold text-lg">{t(`components.time.${getGreeting(moment(date).hours())}`)}</span>
      <span {...props}>{moment(date).format(format)}</span>
    </div>
  );
};

export default Time;
