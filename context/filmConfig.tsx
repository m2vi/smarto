import { CardProps } from '@Types/filmlist';
import { createContext, useContext, useReducer } from 'react';

const FilmConfigContext = createContext(null);

const initalState: any = [];

export const filmConfigReducer = (state, items: CardProps[]) => {
  return items;
};

export const FilmConfigProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filmConfigReducer, initalState);
  const value = { state, dispatch };
  return <FilmConfigContext.Provider value={value}>{children}</FilmConfigContext.Provider>;
};

export const useFilmConfig = () => {
  const context = useContext(FilmConfigContext);
  if (context === undefined) {
    console.error('useFilmConfig must be used within a SearchProvider');
  }
  return context;
};
