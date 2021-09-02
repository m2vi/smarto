import { createContext, useContext, useReducer } from 'react';

const SearchContext = createContext(null);

const initalState = {
  items: [],
  render: [],
};

export const searchReducer = (state, { render, items }: any) => {
  if (items) return { items, render: items };
  return { items: state.items, render };
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
