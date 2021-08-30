import { createContext, useContext, useReducer } from 'react';

const FilmSearchContext = createContext(null);

const initalState: any = [];

export const filmSearchReducer = (state, items) => {
  if (!items) return state;
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
