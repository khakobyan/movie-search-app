import React from 'react';

import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Provider } from 'react-redux';
import { store } from 'src/redux/store';

import { RootNavigation } from '@navigation';

const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar translucent backgroundColor='transparent' barStyle="dark-content" />
      <RootNavigation />
    </SafeAreaProvider>
  );
};

const AppStoreProvider = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default AppStoreProvider;
