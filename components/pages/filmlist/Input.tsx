import { useFilmSearch } from '@context/filmSearch';
import { forwardRef } from 'react';

export interface InputProps extends React.ComponentPropsWithoutRef<'input'> {
  sort: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({ className, sort, ...props }, ref) => {
  const cn = `w-full py-2 px-4 rounded-8 text-primary-100 placeholder-primary-300 bg-primary-700 ${className} `;
  const { dispatch, state } = useFilmSearch();

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    if (!e.currentTarget.value || e.currentTarget.value.length < 3) return dispatch({ sort });
    dispatch({ sort: sort, query: e.currentTarget.value });
  };

  return <input ref={ref} className={cn} {...props} data-testid="input" style={{ background: '#2d2c31' }} onChange={handleChange} />;
});

Input.displayName = 'Input';
