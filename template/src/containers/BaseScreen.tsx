import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';

import {TestIds} from '../utils/testIds';
import {withScroll} from '../hocs/withScroll';
import {commonStyles} from '../utils/commonStyles';
import {Colors} from '../utils/colors';
import {NoInternet} from '../components';
import {useInternet} from '../hooks';

export interface BaseScreenProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

const BaseScreen = ({children, style}: BaseScreenProps) => {
  const {isNetAvailable} = useInternet();

  return (
    <SafeAreaView testID={TestIds.APP_SAFEAREA} style={styles.safeArea}>
      <StatusBar barStyle={'dark-content'} backgroundColor={Colors.WHITE} />
      {!isNetAvailable && <NoInternet />}
      <View style={[commonStyles.flex1, style]}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: Colors.TRANSPARENT,
    flex: 1,
  },
});

/**
 * Usage:
 * <BaseScreen style={{}}>
 *   {children}
 * </BaseScreen>
 */
export default BaseScreen;

/**
 * Usage:
 * <ScrollableScreen scrollViewProps={{}}>
 *   {children}
 * </ScrollableScreen>
 */
export const ScrollableScreen = withScroll(BaseScreen);
