import React from 'react';
import store from './src/redux/store';
import {Provider} from 'react-redux';
import MainStack from './src/routes/MainStack';
const App = () => {
  return (
    <Provider store={store}>
      <MainStack />
    </Provider>
  );
};

export default App;
