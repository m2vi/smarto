import { createContext, useContext, useReducer } from 'react';

const LookupModalContext = createContext(null);

const initalState: any = [false, ''];

export interface actionProps {
  value: any;
}

export const lookupModalReducer = (state, { value }: actionProps) => {
  return value;
};

export const LookupModalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(lookupModalReducer, initalState);
  const value = { state, dispatch };
  return <LookupModalContext.Provider value={value}>{children}</LookupModalContext.Provider>;
};

export const useLookupModal = () => {
  const context = useContext(LookupModalContext);
  if (context === undefined) {
    console.error('useLookupModal must be used within a Provider');
  }
  return context;
};
