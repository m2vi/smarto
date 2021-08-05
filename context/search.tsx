import { createContext, useContext, useReducer } from 'react';

const SearchContext = createContext(null);

const initalState: any = [];

export interface actionProps {
  type: string;
  value: any;
}

export const searchReducer = (state, { type, value }: actionProps) => {
  switch (type) {
    case 'setArray': {
      return value;
    }
    case 'clear': {
      return [];
    }
    default: {
      console.error(`Unhandled action type: ${type}`);
    }
  }
};

export const SearchProvider = ({ children }) => {
  const [state, dispatch] = useReducer(searchReducer, initalState);
  const value = { state, dispatch };
  return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>;
};

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (context === undefined) {
    console.error('useCount must be used within a CountProvider');
  }
  return context;
};
