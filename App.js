import React, {useEffect} from 'react';
import Navigator from './src/navigation/MainNav';
import {Provider} from 'react-redux';
import store, {persistor} from './src/store/store';
import SplashScreen from 'react-native-splash-screen';
import {PersistGate} from 'redux-persist/integration/react';

function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navigator />
      </PersistGate>
    </Provider>
  );
}

export default App;
