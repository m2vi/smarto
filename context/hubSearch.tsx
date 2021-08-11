import { createContext, useContext, useReducer } from 'react';

const HubSearchContext = createContext(null);

const initalState: any = [];

export interface actionProps {
  type: string;
  value: any;
}

export const hubSearchReducer = (state, { type, value }: actionProps) => {
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

export const HubSearchProvider = ({ children }) => {
  const [state, dispatch] = useReducer(hubSearchReducer, initalState);
  const value = { state, dispatch };
  return <HubSearchContext.Provider value={value}>{children}</HubSearchContext.Provider>;
};

export const useHubSearch = () => {
  const context = useContext(HubSearchContext);
  if (context === undefined) {
    console.error('useHubSearch must be used within a SearchProvider');
  }
  return context;
};
