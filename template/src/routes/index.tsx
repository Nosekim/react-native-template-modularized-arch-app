import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainRoute from './../modules/Main/routes';

export default function Route() {
  return (
    <NavigationContainer>
      <MainRoute />
    </NavigationContainer>
  );
}
