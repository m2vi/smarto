import * as React from 'react';
import { MainProps } from '../components/youtube/Page';
import { parsedProps } from '../utils/youtube/youtube';

const YoutubeContext = React.createContext(null);

interface stateProps extends MainProps {
  success: boolean;
}

const initalState: stateProps = {
  success: false,
};

export interface actionProps {
  type: string;
  info: parsedProps;
}

export const YoutubeReducer = (
  state,
  { type, info }: actionProps
): stateProps => {
  switch (type) {
    case 'set': {
      console.log('YouTube Context changed');
      return { success: info.success, info: info };
    }
    default: {
      console.error(`Unhandled action type: ${type}`);
    }
  }
};

export const YoutubeProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(YoutubeReducer, initalState);
  const value = { state, dispatch };
  return (
    <YoutubeContext.Provider value={value}>{children}</YoutubeContext.Provider>
  );
};

export const useYoutube = () => {
  const context = React.useContext(YoutubeContext);
  if (context === undefined) {
    console.error('useCount must be used within a CountProvider');
  }
  return context;
};
