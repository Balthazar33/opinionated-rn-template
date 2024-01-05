/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {Provider} from 'react-redux';

import {persistor, store} from './src/appRedux/store.utils';
import {AppContainer} from './src/containers/AppContainer';
import {PersistGate} from 'redux-persist/integration/react';
import {ActivityIndicator, StyleSheet} from 'react-native';
import {Colors} from './src/utils/colors';

function App(): React.JSX.Element {
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
