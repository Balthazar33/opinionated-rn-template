import React from 'react';

import renderer from 'react-test-renderer';
import {it, describe, expect} from '@jest/globals';
import '@testing-library/react-native/extend-expect';
import {fireEvent, render} from '@testing-library/react-native';

import {DummyScreen} from '..';
import {TestIds} from '../../utils/test-ids';
import {DummyScreenProps} from '../DummyScreen/DummyScreen.types';
import {StackScreens} from '../../navigation/types';

const navigation: Partial<DummyScreenProps['navigation']> = {
  navigate: jest.fn,
};
const route: Partial<DummyScreenProps['route']> = {
  params: undefined,
};

describe('DummyScreen', () => {
  it('renders correctly', () => {
    const elementTree = renderer
      .create(
        <DummyScreen
          navigation={navigation as DummyScreenProps['navigation']}
          route={route as DummyScreenProps['route']}
        />,
      )
      .toJSON();
    expect(elementTree).toMatchSnapshot();
  });

  it('should navigate to API Call screen on pressing "To Api Call Screen" button', () => {
    const navigateSpy = jest.spyOn(navigation, 'navigate');
    const {getByTestId} = render(
      <DummyScreen
        navigation={navigation as DummyScreenProps['navigation']}
        route={route as DummyScreenProps['route']}
      />,
    );
    const toApiCallScreenBtn = getByTestId(TestIds.TO_API_SCREEN_BTN);
    fireEvent(toApiCallScreenBtn, 'press');
    expect(navigateSpy).toHaveBeenCalledWith(StackScreens.ApiCallScreen);
  });
});
