import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import Route from './routes';

export default function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <Route />
      </Provider>
    </SafeAreaProvider>
  );
}
