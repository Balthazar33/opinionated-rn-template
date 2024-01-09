/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: import explicitly to use the types shipped with jest.
import {it, describe, expect} from '@jest/globals';
import '@testing-library/react-native/extend-expect';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('App', () => {
  it('renders correctly', () => {
    const elementTree = renderer.create(<App />).toJSON();
    expect(elementTree).toMatchSnapshot();
  });
});
