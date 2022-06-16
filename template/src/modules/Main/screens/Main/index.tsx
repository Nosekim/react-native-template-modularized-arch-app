//libs
import {Text, View} from 'react-native';
import React from 'react';

import {useAppSelector} from '../../../../redux/hooks';
import {selectCount, selectStatus} from '../../../../redux/reducer';

//components
import DefaultContainer from '../../../../sharedComponents/DefaultContainer';
import CounterDisplay from './components/CounterDisplay';
import Button from './components/Button';
import InputAmmount from './components/InputAmmount';

//styles
import styles from './styles';

export default function Main() {
  const count = useAppSelector(selectCount);
  const status = useAppSelector(selectStatus);

  return (
    <DefaultContainer>
      <>
        <Text style={styles.title}>Main Screen</Text>
        <View style={styles.container}>
          <View style={styles.counterContent}>
            <CounterDisplay count={count} />
            <View style={styles.buttonsContainer}>
              <Button
                disabled={status === 'loading' ? true : false}
                type="decrement"
              />
              <Button
                disabled={status === 'loading' ? true : false}
                type="increment"
              />
            </View>
          </View>
          <View style={styles.incrementAmmoutContainer}>
            <InputAmmount label="Insert amount" />
          </View>
        </View>
      </>
    </DefaultContainer>
  );
}
