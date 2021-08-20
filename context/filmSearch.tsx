import { createContext, useContext, useReducer } from 'react';

import { matchSorter } from 'match-sorter';

const FilmSearchContext = createContext(null);

const initalState: any = { items: [], render: [] };

export const filmSearchReducer = (state, { items, query }) => {
  let bin = items ? items : state.items;

  if (query) {
    return { items: bin, render: matchSorter(bin, query, { keys: ['name', 'original_name'] }) };
  }

  return { items: bin, render: bin };
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
