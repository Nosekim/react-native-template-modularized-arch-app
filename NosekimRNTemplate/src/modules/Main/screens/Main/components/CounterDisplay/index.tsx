import {View, Text} from 'react-native';
import React from 'react';

import styles from './styles';

interface Props {
  count: number;
}

export default function CounterDisplay({count}: Props) {
  return (
    <View style={styles.counterContainer}>
      <Text style={styles.countTitle}>Counter</Text>
      <Text style={styles.count}>{count}</Text>
    </View>
  );
}
