import { createContext, useContext, useReducer } from 'react';

const WidgetStateContext = createContext(null);

const initalState: any = false;

export const widgetStateReducer = (who: any, state: boolean) => {
  return state;
};

export const WidgetStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(widgetStateReducer, initalState);
  const value = { state, dispatch };
  return <WidgetStateContext.Provider value={value}>{children}</WidgetStateContext.Provider>;
};

export const useWidgetState = () => {
  const context = useContext(WidgetStateContext);
  if (context === undefined) {
    console.error('useWidgetState must be used within a WidgetStateProvider');
  }
  return context;
};
