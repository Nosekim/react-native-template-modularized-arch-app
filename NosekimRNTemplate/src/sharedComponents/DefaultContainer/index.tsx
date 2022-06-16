import {SafeAreaView} from 'react-native-safe-area-context';
import {StatusBar} from 'react-native';
import React from 'react';
import styles from './styles';

interface Props {
  children: JSX.Element;
}

export default function DefaultContainer({children}: Props) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} barStyle="dark-content" hidden={false} />
      {children}
    </SafeAreaView>
  );
}
