import React, {useCallback} from 'react';
import {StyleSheet, View} from 'react-native';

import {TouchableRipple} from 'react-native-paper';

import {sizer} from '@utils/metrics';
import {Strings} from '@utils/strings';
import {TestIds} from '@utils/test-ids';
import {SCREEN_PADDING} from '@utils/constants';
import {StackScreens} from '@/navigation/types';
import {DummyScreenProps} from './DummyScreen.types';
import {ScrollableScreen} from '@/containers/BaseScreen';
import {TextBold16, TextRegular14} from '@components/Typography';
import {Form} from '@/components/Form/Form';
import {useDummyScreen} from './DummyScreen.hook';
import {dummySchema} from './DummyScreen.util';
import {Colors} from '@/utils/colors';

export const DummyScreen = ({navigation}: DummyScreenProps) => {
  const {formData, propsForFormElements, formRef, showError, throwError} =
    useDummyScreen();

  const handleBtnPress = useCallback(() => {
    navigation.navigate(StackScreens.ApiCallScreen);
  }, [navigation]);

  const handleValidatePress = useCallback(() => {
    const isValid = formRef?.current?.validate?.();
    console.warn(`The form is ${isValid ? 'valid' : 'invalid'}`);
  }, [formRef]);

  if (showError) {
    throw new Error('This is not a drill!');
  }
  return (
    <ScrollableScreen testID={TestIds.DUMMYSCREEN} style={style.screenStyle}>
      <TouchableRipple
        rippleColor={Colors.GREY}
        onPress={handleBtnPress}
        style={style.buttonStyle}
        testID={TestIds.TO_API_SCREEN_BTN}>
        <TextRegular14 color={Colors.WHITE}>
          {Strings.toApiCallScreen}
        </TextRegular14>
      </TouchableRipple>
      <TouchableRipple
        rippleColor={Colors.GREY}
        onPress={throwError}
        style={style.buttonStyle}>
        <TextRegular14 color={Colors.WHITE}>{Strings.throwError}</TextRegular14>
      </TouchableRipple>
      {/* ---------------Form example--------------- */}
      <View style={style.formContainer}>
        <TextBold16>Form</TextBold16>
        <Form
          ref={formRef}
          formData={formData}
          schema={dummySchema}
          formElementProps={propsForFormElements}
        />
        <TouchableRipple
          rippleColor={Colors.GREY}
          onPress={handleValidatePress}
          style={style.buttonStyle}>
          <TextRegular14 style={style.textCenter} color={Colors.WHITE}>
            Validate form
          </TextRegular14>
        </TouchableRipple>
      </View>
      {/* ---------------Form example--------------- */}
    </ScrollableScreen>
  );
};

const style = StyleSheet.create({
  screenStyle: {
    gap: sizer(16),
    padding: SCREEN_PADDING,
  },
  formContainer: {
    gap: 16,
    marginTop: 16,
  },
  textCenter: {
    textAlign: 'center',
  },
  buttonStyle: {
    padding: sizer(16),
    backgroundColor: Colors.PRIMARY_BLUE,
  },
});
