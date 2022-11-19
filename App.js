import React from 'react';
import Navigator from './src/navigation/MainNav';
import {Provider} from 'react-redux';
import store from './src/store/store';

function App() {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}

export default App;
