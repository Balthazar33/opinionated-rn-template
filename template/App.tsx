/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {ActivityIndicator, StyleSheet} from 'react-native';

import {Provider} from 'react-redux';
import SplashScreen from 'react-native-bootsplash';
import {PersistGate} from 'redux-persist/integration/react';

import {Colors} from './src/utils/colors';
import {AppContainer} from './src/containers/AppContainer';
import {SPLASH_HIDE_DURATION} from './src/utils/constants';
import {persistor, store} from './src/appRedux/store.utils';

function App(): React.JSX.Element {
  useEffect(() => {
    setTimeout(() => {
      // Perform computations...
      SplashScreen.hide(); // Hide splash screen when done
    }, SPLASH_HIDE_DURATION);
  }, []);

  return (
    <Provider store={store}>
      <PersistGate
        loading={
          <ActivityIndicator
            size="large"
            color={Colors.BLACK}
            style={StyleSheet.absoluteFill}
          />
        }
        persistor={persistor}>
        <AppContainer />
      </PersistGate>
    </Provider>
  );
}

export default App;
