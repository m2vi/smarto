import Hub from '@components/pages/hub';
import { HubProvider } from '@context/hubSearch';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import searchReducer from '@redux/reducers/searchReducer';
const store = createStore(searchReducer);

export const Discover = () => {
  return (
    <>
      <Provider store={store}>
        <Hub />
      </Provider>
    </>
  );
};

export default Discover;
