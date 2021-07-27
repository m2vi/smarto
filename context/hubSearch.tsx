import { createContext, useContext, useReducer } from 'react';

const HubContext = createContext(null);

const initalState: any = [];

export interface actionProps {
  type: string;
  value: any;
}

export const hubReducer = (state, { type, value }: actionProps) => {
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

export const HubProvider = ({ children }) => {
  const [state, dispatch] = useReducer(hubReducer, initalState);
  const value = { state, dispatch };
  return <HubContext.Provider value={value}>{children}</HubContext.Provider>;
};

export const useHub = () => {
  const context = useContext(HubContext);
  if (context === undefined) {
    console.error('useCount must be used within a CountProvider');
  }
  return context;
};
