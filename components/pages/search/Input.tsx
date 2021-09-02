import { Bar } from '@components/pages/search/styles';
import { IoSearch } from 'react-icons/io5';
import { forwardRef } from 'react';
import { matchSorter } from 'match-sorter';
import { useSearch } from '@context/search';
import { useTranslation } from 'react-i18next';

const Input = forwardRef<HTMLInputElement>((props, ref) => {
  const { dispatch, state } = useSearch();
  const { t } = useTranslation();

  const handleChange = ({ currentTarget: { value } }: React.FormEvent<HTMLInputElement>) => {
    const results = searchItems(value, state.items);

    dispatch({ render: results });
  };

  return (
    <Bar className="p-5 flex justify-between select-none">
      <div className="flex items-center justify-start">
        <IoSearch className="text-white opacity-60 h-5 w-5 mr-3" />
        <input
          type="text"
          className="bg-transparent border-0 text-2xl font-light p-0 dD5d-input"
          placeholder={t('pages.search.input')}
          onChange={handleChange}
          ref={ref}
        />
      </div>
      <p className="small text-center flex items-center justify-center text-white opacity-60 font-light">&#8984; + F</p>
    </Bar>
  );
});

Input.displayName = 'Input';

export const searchItems = (value: string, state: any) => {
  if (value === '' || value === '*') return state;
  const items = matchSorter(state, value, { keys: ['name', 'path', 'tags'] });
  return items;
};

export default Input;
