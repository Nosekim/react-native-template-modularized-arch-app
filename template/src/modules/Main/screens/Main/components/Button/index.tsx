import {Text, TouchableOpacity} from 'react-native';
import React from 'react';

import {useAppDispatch} from '../../../../../../redux/hooks';
import {decrement, increment} from '../../../../../../redux/reducer';

import styles from './styles';

interface Props {
  type: 'increment' | 'decrement';
  disabled: boolean;
}
export default function Button({type, disabled}: Props) {
  const dispatch = useAppDispatch();
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={() => dispatch(type === 'increment' ? increment() : decrement())}
      style={styles.button}>
      <Text style={styles.buttonText}>{type === 'increment' ? '+' : '-'}</Text>
    </TouchableOpacity>
  );
}
