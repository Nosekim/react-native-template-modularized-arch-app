import React from 'react';
import {render} from '@testing-library/react-native';

import {ExampleComponent} from '../index';

test('examples of some things', async () => {
  const {getByText, toJSON} = render(<ExampleComponent />);
  const componentText = 'Example Component';

  expect(getByText('Example Component').props.children).toBe(componentText);
  expect(toJSON()).toMatchSnapshot();
});
