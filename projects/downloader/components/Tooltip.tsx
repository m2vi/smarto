import { useEffect, useState } from 'react';
import ReactTooltip, { TooltipProps } from 'react-tooltip';

const Tooltip = ({ effect, border, children, ...props }: TooltipProps) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <>
      {children}
      {show ? (
        <ReactTooltip
          effect='solid'
          border={false}
          textColor='var(--color-primary-100)'
          arrowColor='var(--color-primary-800)'
          backgroundColor='var(--color-primary-800)'
          className='rounded-8 p-2'
          scrollHide={true}
          role='Tooltip'
          {...props}
        />
      ) : null}
    </>
  );
};

export default Tooltip;
