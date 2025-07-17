import React, {forwardRef, PropsWithChildren} from 'react';
import {View} from 'react-native';

import {useForm} from './Form.hook';
import {styles} from './Form.styles';
import {FormTextInput} from './FormTextInput';
import {FormProps, FormRef} from './Form.types';
import {isSingleFormElement} from './Form.utils';

export const Form = React.memo(
  forwardRef<FormRef, PropsWithChildren<FormProps>>(
    ({formElementProps, schema, formData}: FormProps, ref) => {
      const {errorFieldMessages, clearErrorsAndSetValue} = useForm(
        {schema, formData},
        ref,
      );

      return (
        <>
          {formElementProps.map((element, index) => {
            // Single text input field in a row
            if (isSingleFormElement(element)) {
              const errorMessage =
                errorFieldMessages[
                  errorFieldMessages.findIndex(
                    item => item.label === element?.fieldName,
                  )
                ]?.errors?.[0];
              return (
                <FormTextInput
                  key={element?.fieldName}
                  {...element}
                  formErrorMessage={errorMessage}
                  onChangeText={text => {
                    clearErrorsAndSetValue(element, text);
                  }}
                />
              );
            } else {
              // Multiple text input fields in a row
              return (
                <View key={index} style={styles.row}>
                  {element?.map?.(inputGroupProps => {
                    const errorMessage =
                      errorFieldMessages[
                        errorFieldMessages.findIndex(
                          item => item.label === inputGroupProps?.fieldName,
                        )
                      ]?.errors?.[0];
                    return (
                      <FormTextInput
                        key={inputGroupProps?.fieldName}
                        {...inputGroupProps}
                        formErrorMessage={errorMessage}
                        onChangeText={text => {
                          clearErrorsAndSetValue(inputGroupProps, text);
                        }}
                      />
                    );
                  })}
                </View>
              );
            }
          })}
        </>
      );
    },
  ),
);
Form.displayName = 'Form';
