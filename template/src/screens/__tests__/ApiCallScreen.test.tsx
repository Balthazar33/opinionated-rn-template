import React from 'react';

import {it, describe, expect} from '@jest/globals';
import '@testing-library/react-native/extend-expect';

import {ApiCallScreen} from '..';
import {renderWithProviders} from '../../utils/test-utils';
import {ApiCallScreenProps} from '../ApiCallScreen/ApiCallScreen.types';

const navigation: Partial<ApiCallScreenProps['navigation']> = {
  navigate: jest.fn,
};
const route: Partial<ApiCallScreenProps['route']> = {
  params: undefined,
};

describe('ApiCallScreen', () => {
  it('renders correctly', () => {
    const elementTree = renderWithProviders(
      <ApiCallScreen
        route={route as ApiCallScreenProps['route']}
        navigation={navigation as ApiCallScreenProps['navigation']}
      />,
    ).toJSON();
    expect(elementTree).toMatchSnapshot();
  });
});
