import * as React from 'react';

const ModalContext = React.createContext(null);

const initalState: any = {
  isOpen: false,
};

export interface actionProps {
  type: string;
  value: any;
}

export const modalReducer = (state, { type, value }: actionProps) => {
  switch (type) {
    case 'setOpen': {
      return { isOpen: value };
    }
    default: {
      console.error(`Unhandled action type: ${type}`);
    }
  }
};

export const ModalProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(modalReducer, initalState);
  const value = { state, dispatch };
  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = React.useContext(ModalContext);
  if (context === undefined) {
    console.error('useCount must be used within a CountProvider');
  }
  return context;
};
