import user from '@config/me';
import { createContext, useContext, useReducer } from 'react';

const SearchContext = createContext(null);

const initalState: any = user.search;

export interface actionProps {
  value: any;
}

export const searchReducer = (state, { value }: actionProps) => {
  return value;
};

export const SearchProvider = ({ children }) => {
  const [state, dispatch] = useReducer(searchReducer, initalState);
  const value = { state, dispatch };
  return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>;
};

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (context === undefined) {
    console.error('useSearch must be used within a SearchProvider');
  }
  return context;
};
