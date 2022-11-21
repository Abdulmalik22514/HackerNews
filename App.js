import React, {useEffect} from 'react';
import Navigator from './src/navigation/MainNav';
import {Provider} from 'react-redux';
import store from './src/store/store';
import SplashScreen from 'react-native-splash-screen';

function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}

export default App;
