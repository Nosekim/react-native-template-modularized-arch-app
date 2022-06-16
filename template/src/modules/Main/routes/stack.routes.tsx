import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Main} from '../screens';

const {Navigator, Screen} = createNativeStackNavigator();

function Route() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name="Home" component={Main} />
    </Navigator>
  );
}

export default Route;
