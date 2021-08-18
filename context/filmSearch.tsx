import { FilmListItems } from '@config/filmlist.2';
import { CardProps } from '@Types/filmlist';
import { sort } from '@utils/tools/movies';
import { matchSorter } from 'match-sorter';
import { createContext, useContext, useReducer } from 'react';

const FilmSearchContext = createContext(null);

const initalState: any = [];

export const filmSearchReducer = (state, { sort: sortType, query }) => {
  const items = sort(sortType);

  if (query) {
    return matchSorter(items, query, { keys: ['name', 'original_name'] });
  }

  return items;
};

export const FilmSearchProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filmSearchReducer, initalState);
  const value = { state, dispatch };
  return <FilmSearchContext.Provider value={value}>{children}</FilmSearchContext.Provider>;
};

export const useFilmSearch = () => {
  const context = useContext(FilmSearchContext);
  if (context === undefined) {
    console.error('useFilmSearch must be used within a SearchProvider');
  }
  return context;
};
