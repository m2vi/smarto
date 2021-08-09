import { useWidgetState } from '@context/widgetState';
import { useEffect, useState } from 'react';

export interface WidgetProps {
  name?: string;
  value?: string;
  icon?: React.FC;
  getValue?: () => Promise<string>;
  invisible?: boolean;
}

export const Widget = ({ name, value: base, icon: Icon, getValue, invisible }: WidgetProps) => {
  const state = useWidgetState().state;
  const [value, setValue] = useState('...');

  useEffect(() => {
    if (getValue) {
      getValue().then(newValue => setValue(newValue));
    } else if (base) {
      setValue(base);
    }
  }, [base, getValue]);

  return (
    <div
      className={`${
        !invisible ? 'bg-primary-800 hover:bg-primary-700' : 'bg-transparent invisible'
      } p-3 flex flex-row justify-start items-center h-11 rounded-8 cursor-pointer`}
      style={{ width: 'calc((1280px - 10px * 6) / 6)' }}
    >
      <div className="h-7 w-7 mr-2 rounded bg-primary-600 grid place-items-center">{Icon ? <Icon /> : null}</div>
      <div className="flex flex-col justify-start items-start h-full">
        <p className="small l-1 pb-1">{name ? name : '...'}</p>
        <p className="small l-1 text-primary-300">{value}</p>
      </div>
    </div>
  );
};

export default Widget;
