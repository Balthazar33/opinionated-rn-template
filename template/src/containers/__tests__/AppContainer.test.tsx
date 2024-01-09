import React from 'react';

import {it, describe, expect} from '@jest/globals';
import {render} from '@testing-library/react-native';
import '@testing-library/react-native/extend-expect';

import {AppContainer} from '../AppContainer';
import {TestIds} from '../../utils/test-ids';
import * as store from '../../appRedux/store.utils';

describe('AppContainer', () => {
  it('should display the activity indicator if "loading" is true in store', () => {
    jest.spyOn(store, 'useAppSelector').mockReturnValue({
      loading: true,
    });
    const {queryByTestId} = render(<AppContainer />);
    const loader = queryByTestId(TestIds.APP_ACTIVITY_INDICATOR);
    expect(loader).toBeOnTheScreen();
  });

  it('should NOT display the activity indicator if "loading" is false in store', () => {
    jest.spyOn(store, 'useAppSelector').mockReturnValue({
      loading: false,
    });
    const {queryByTestId} = render(<AppContainer />);
    const loader = queryByTestId(TestIds.APP_ACTIVITY_INDICATOR);
    expect(loader).not.toBeOnTheScreen();
  });
});
