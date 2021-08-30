import { forwardRef, useEffect } from 'react';

import { CardProps } from '@Types/filmlist';
import React from 'react';
import { useFilmSearch } from '@context/filmSearch';

export interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  items: CardProps[];
}

export const Input = ({ className, items, ...props }) => {
  const cn = `w-full py-2 px-4 rounded-8 text-primary-100 placeholder-primary-300 bg-primary-700 ${className} `;
  const ref = React.useRef<HTMLInputElement>(null);
  const { dispatch } = useFilmSearch();

  const handleSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    if (!value || value === '' || value.length < 2 || e.code !== 'Enter') return;

    fetch(`/api/filmlist/items?type=default&key=all&start=0&offset=0&query=${value}`)
      .then(data => data.json())
      .then(data => dispatch(data));
  };

  return <input ref={ref} className={cn} {...props} data-testid="input" style={{ background: '#2d2c31' }} />;
};
