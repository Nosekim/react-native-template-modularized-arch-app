import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {useAppDispatch, useAppSelector} from '../../../../../../redux/hooks';

import styles from './styles';
import {
  incrementAsync,
  incrementByAmount,
  incrementIfOdd,
  selectStatus,
} from '../../../../../../redux/reducer';

interface Props {
  label: string;
}
export default function InputAmmount({label}: Props) {
  const [incrementValue, setIncrementValue] = useState<string>('0');
  const dispatch = useAppDispatch();
  const state = useAppSelector(selectStatus);

  const handleDispatch = (type: 'add_amount' | 'add_async' | 'add_if_odd') => {
    if (!incrementValue) {
      Alert.alert('Error', 'Please insert a value');
      return;
    }
    let value = Number(incrementValue);
    setIncrementValue('0');
    switch (type) {
      case 'add_amount':
        return dispatch(incrementByAmount(value));
      case 'add_async':
        return dispatch(incrementAsync(value));
      case 'add_if_odd':
        return dispatch(incrementIfOdd(value));
      default:
        return dispatch(incrementByAmount(value));
    }
  };

  return (
    <KeyboardAwareScrollView
      enableOnAndroid={true}
      keyboardShouldPersistTaps={'handled'}
      enableResetScrollToCoords={false}>
      <View style={styles.container}>
        <View>
          <Text>{label}</Text>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.inputFlex}>
            <TextInput
              keyboardType="numeric"
              placeholder="0"
              style={styles.input}
              value={incrementValue}
              onChangeText={(text: string) => setIncrementValue(text)}
            />
          </View>
        </View>
        <View style={styles.buttonFlex}>
          <View style={styles.button}>
            <Button
              disabled={state === 'loading' ? true : false}
              title="Add Amount"
              color="#000"
              onPress={() => handleDispatch('add_amount')}
            />
          </View>
          <View style={styles.button}>
            {state === 'loading' && (
              <ActivityIndicator size="small" color="#24c" />
            )}
            <Button
              disabled={state === 'loading' ? true : false}
              title="Add Async"
              color="#000"
              onPress={() => handleDispatch('add_async')}
            />
          </View>
          <View style={styles.button}>
            <Button
              disabled={state === 'loading' ? true : false}
              title="Add If Odd"
              color="#000"
              onPress={() => handleDispatch('add_if_odd')}
            />
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}
