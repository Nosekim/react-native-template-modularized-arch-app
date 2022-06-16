import {Text} from 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';

import DefaultContainer from './../DefaultContainer';

test('render container <DefaultContainer />', async () => {
  const componentText = 'Main';
  const {toJSON, getByText} = render(
    <DefaultContainer>
      <Text>{componentText}</Text>
    </DefaultContainer>,
  );

  expect(getByText('Main').props.children).toBe(componentText);
  expect(toJSON()).toMatchSnapshot();
});
