import React from 'react';
import {View} from 'react-native';

import {it, describe, expect} from '@jest/globals';
import {render} from '@testing-library/react-native';
import '@testing-library/react-native/extend-expect';

import BaseScreen from '../BaseScreen';
import * as hooks from '../../hooks/useInternet';
import {TestIds} from '@utils/test-ids';

describe('BaseScreen', () => {
  it('should display the "NoInternet" component when connectivity is NOT available', () => {
    jest.spyOn(hooks, 'useInternet').mockReturnValue({isNetAvailable: false});
    const {queryByTestId} = render(
      <BaseScreen>
        <View />
      </BaseScreen>,
    );
    const noInternetComp = queryByTestId(TestIds.NO_INTERNET);
    expect(noInternetComp).toBeOnTheScreen();
  });

  it('should NOT display the "NoInternet" component when connectivity is available', () => {
    jest.spyOn(hooks, 'useInternet').mockReturnValue({isNetAvailable: true});
    const {queryByTestId} = render(
      <BaseScreen>
        <View />
      </BaseScreen>,
    );
    const noInternetComp = queryByTestId(TestIds.NO_INTERNET);
    expect(noInternetComp).not.toBeOnTheScreen();
  });
});
