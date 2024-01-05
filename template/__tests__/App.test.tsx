/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: import explicitly to use the types shipped with jest.
import {it, describe, expect} from '@jest/globals';
import {render} from '@testing-library/react-native';
import '@testing-library/react-native/extend-expect';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {TestIds} from '../src/utils/testIds';
import {Colors} from '../src/utils/colors';

describe('App', () => {
  it('renders correctly', () => {
    const elementTree = renderer.create(<App />).toJSON();
    expect(elementTree).toMatchSnapshot();
  });

  it('has the SafeArea component with transparent background', () => {
    const {getByTestId} = render(<App />);
    const safeArea = getByTestId(TestIds.APP_SAFEAREA);
    expect(safeArea).toHaveStyle({backgroundColor: Colors.TRANSPARENT});
  });
});
