import {View, ActivityIndicator} from 'react-native';
import React from 'react';
import styles from './styles';

export default function Loader() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#000" />
    </View>
  );
}
