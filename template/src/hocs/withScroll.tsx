import React, {ElementType} from 'react';
import {ScrollViewProps} from 'react-native';

import {commonStyles} from '@utils/common-styles';
import {BaseScreenProps} from '../containers/BaseScreen';
import {KeyboardAwareScrollView, KeyboardAwareScrollViewProps} from 'react-native-keyboard-controller';

export interface ScrollableScreenProps extends BaseScreenProps {
  scrollViewProps?: KeyboardAwareScrollViewProps;
}

export const defaultScrollViewProps: Partial<ScrollViewProps> = {
  keyboardShouldPersistTaps: 'always',
  contentContainerStyle: commonStyles.flexGrow1,
};

export const withScroll = (BaseComponent: ElementType) => {
  return (props: ScrollableScreenProps) => {
    const {scrollViewProps, ...rest} = props || {};
    return (
      <KeyboardAwareScrollView {...defaultScrollViewProps} {...scrollViewProps}>
        <BaseComponent {...rest} />
      </KeyboardAwareScrollView>
    );
  };
};
