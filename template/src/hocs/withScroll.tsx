import React, {ElementType} from 'react';
import {StyleProp, ViewStyle} from 'react-native';

import {
  KeyboardAwareScrollView,
  KeyboardAwareScrollViewProps,
} from 'react-native-keyboard-aware-scroll-view';

import {commonStyles} from '../utils/common-styles';
import {BaseScreenProps} from '../containers/BaseScreen';

export interface KeyboardAwareScrollViewCustomProps {
  keyboardShouldPersistTaps: 'always' | 'handled' | undefined;
  contentContainerStyle: StyleProp<ViewStyle>;
}

export interface ScrollableScreenProps extends BaseScreenProps {
  scrollViewProps?: KeyboardAwareScrollViewProps;
}

// default props for keyboard-aware scrollview
export const defaultScrollViewProps: KeyboardAwareScrollViewCustomProps = {
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
