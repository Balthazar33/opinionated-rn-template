import React, {
  useRef,
  useMemo,
  forwardRef,
  useCallback,
  PropsWithChildren,
  useImperativeHandle,
} from 'react';
import {TextInput, View} from 'react-native';

import {TextInput as PaperInput} from 'react-native-paper';
import Animated, {FadeInUp, FadeOutUp} from 'react-native-reanimated';

import {sizer} from '@/utils/metrics';
import {Colors} from '@/utils/colors';
import {styles as formStyle} from './Form.styles';
import {commonStyles} from '@/utils/common-styles';
import {TextRegular10} from '@components/Typography';
import {FormElementProps, FormTextInputRef} from './Form.types';

export const FormTextInput = forwardRef<
  FormTextInputRef,
  PropsWithChildren<FormElementProps>
>(
  (
    {
      value,
      label,
      dense,
      style,
      testID,
      onFocus,
      editable,
      leftIcon,
      iconSize,
      rightIcon,
      iconColor,
      maxLength,
      multiline,
      placeholder,
      keyboardType,
      onChangeText,
      numberOfLines,
      onRightIconPress,
      accessibilityHint,
      accessibilityLabel,
      formErrorMessage,
      containerStyle,
    }: FormElementProps,
    ref,
  ) => {
    const inputRef = useRef<TextInput>(null);

    // Expose focus method to the parent component
    useImperativeHandle(ref, () => ({
      focus,
    }));

    const focus = () => {
      inputRef?.current?.focus?.();
    };

    const textInputProps = useMemo(() => {
      return {
        dense,
        label,
        onFocus,
        editable,
        iconColor,
        multiline,
        maxLength,
        placeholder,
        keyboardType,
        numberOfLines,
        left: leftIcon,
        placeholderTextColor: Colors.GREY,
        theme: {
          colors: {
            primary: Colors.BLACK,
            placeholder: Colors.GREY,
            error: Colors.PRIMARY_RED,
            text: formErrorMessage ? Colors.PRIMARY_RED : Colors.BLACK,
          },
        },
      };
    }, [
      dense,
      label,
      onFocus,
      editable,
      leftIcon,
      maxLength,
      multiline,
      iconColor,
      placeholder,
      keyboardType,
      numberOfLines,
      formErrorMessage,
    ]);

    const renderMessage = useCallback(() => {
      if (formErrorMessage) {
        return (
          <Animated.View entering={FadeInUp} exiting={FadeOutUp}>
            <TextRegular10 style={formStyle.errorMessageTextStyle}>
              {formErrorMessage}
            </TextRegular10>
          </Animated.View>
        );
      }
      return null;
    }, [formErrorMessage]);

    return (
      <View style={containerStyle}>
        <PaperInput
          ref={inputRef}
          mode="flat"
          value={value}
          testID={testID}
          {...textInputProps}
          onChangeText={text => {
            onChangeText?.(text);
          }}
          onFocus={() => onFocus?.()}
          textColor={Colors.BLACK}
          left={
            leftIcon ? (
              <PaperInput.Icon
                icon={leftIcon}
                size={iconSize ?? sizer(16)}
                style={commonStyles.margin0}
                accessibilityHint={accessibilityHint}
                accessibilityLabel={accessibilityLabel}
                color={(_: boolean) => iconColor ?? Colors.BLACK}
              />
            ) : undefined
          }
          right={
            rightIcon ? (
              <PaperInput.Icon
                icon={rightIcon}
                onPress={onRightIconPress}
                size={iconSize ?? sizer(16)}
                accessibilityHint={accessibilityHint}
                accessibilityLabel={accessibilityLabel}
                color={(_: boolean) => iconColor ?? Colors.BLACK}
              />
            ) : undefined
          }
          outlineColor={formErrorMessage ? Colors.PRIMARY_RED : Colors.GREY}
          style={[formStyle.formTextInputStyle, style]}
          error={!!formErrorMessage}
        />
        {renderMessage()}
      </View>
    );
  },
);
