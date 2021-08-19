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

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    if (!e.currentTarget.value || e.currentTarget.value === '') return dispatch({ items });
    dispatch({ query: e.currentTarget.value });
  };

  return <input ref={ref} className={cn} {...props} data-testid="input" style={{ background: '#2d2c31' }} onChange={handleChange} />;
};
