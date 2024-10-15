import {ForwardedRef, useEffect, useImperativeHandle, useState} from 'react';

import {
  FormRef,
  FormError,
  FormElementProps,
  FormValidatorProps,
} from './Form.types';
import {isFormValid} from './Form.utils';

export const useForm = (
  {formData, schema}: Pick<FormValidatorProps, 'formData' | 'schema'>,
  ref: ForwardedRef<FormRef>,
) => {
  const [errorFieldMessages, setErrorFieldMessages] = useState<FormError[]>([]);

  // Expose validate method to the parent component
  useImperativeHandle(ref, () => ({
    validate,
  }));

  /**
   * Validate form
   * @returns boolean
   */
  const validate = () => {
    let looksGood = false;
    if (schema && formData) {
      isFormValid({
        schema,
        formData,
        callback: (isValid, errorPathsWithMessages) => {
          looksGood = isValid;
          setErrorFieldMessages(errorPathsWithMessages ?? []);
        },
      });
    }
    return looksGood;
  };

  // Clear state before unmounting
  useEffect(() => {
    return () => {
      setErrorFieldMessages([]);
    };
  }, []);

  // Clear errors for the field being edited and set the new value
  const clearErrorsAndSetValue = (
    formElement: FormElementProps,
    value: any,
  ) => {
    setErrorFieldMessages(
      errorFieldMessages.filter(item => item.label !== formElement?.fieldName),
    );
    formElement?.onChangeText?.(value);
  };

  return {
    errorFieldMessages,
    clearErrorsAndSetValue,
  };
};
