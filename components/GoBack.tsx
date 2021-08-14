import { useRouter } from 'next/router';
import React from 'react';
import { IoArrowBack } from 'react-icons/io5';

export interface GoBackProps extends React.HTMLAttributes<SVGElement> {
  url: string;
}

export const GoBack = ({ url, className, ...props }: GoBackProps) => {
  const Router = useRouter();

  const handleClick = () => {
    Router.push(url);
  };

  return <IoArrowBack className={`h-5 w-5 text-white cursor-pointer ${className}`} onClick={handleClick} {...props} />;
};

export default GoBack;
