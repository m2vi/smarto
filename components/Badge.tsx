import { HTMLAttributes } from 'react';

const Badge = ({ className, ...props }: HTMLAttributes<HTMLSpanElement>) => {
  return <span className={`${className}`} {...props}></span>;
};

export default Badge;
