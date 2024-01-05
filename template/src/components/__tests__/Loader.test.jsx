import React from 'react';
import {Loader} from '../index';

import {it, describe, expect} from '@jest/globals';
import {render} from '@testing-library/react-native';
import '@testing-library/react-native/extend-expect';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {TestIds} from '../../utils/testIds';
import {Colors} from '../../utils/colors';

describe('Loader', () => {
  it('renders correctly', () => {
    const elementTree = renderer.create(<Loader />).toJSON();
    expect(elementTree).toMatchSnapshot();
  });

  it('has activity indicator with large size if size="large" is passed as a prop', () => {
    const {getByTestId} = render(<Loader size={'large'} />);
    const activityIndicator = getByTestId(TestIds.APP_ACTIVITY_INDICATOR);
    expect(activityIndicator).toHaveProp('size', 'large');
  });

  it('has activity indicator with the color "black" if color="black" is passed as a prop', () => {
    const {getByTestId} = render(<Loader color={Colors.BLACK} />);
    const activityIndicator = getByTestId(TestIds.APP_ACTIVITY_INDICATOR);
    expect(activityIndicator).toHaveProp('color', Colors.BLACK);
  });
});
