import {useCallback, useEffect, useMemo, useRef, useState} from 'react';

import {sizer} from '@/utils/metrics';
import {Strings} from '@/utils/strings';
import {commonStyles} from '@/utils/common-styles';
import {FormElementTypes} from '@/components/Form/Form.constants';
import {FormElementProps, FormRef} from '@/components/Form/Form.types';

export const useDummyScreen = () => {
  const formRef = useRef<FormRef>(null);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [contactNo, setContactNo] = useState('');

  // Simulated error for error boundary
  const [showError, setShowError] = useState(false);
  useEffect(() => {
    return () => {
      setShowError(false);
    };
  }, []);
  const throwError = useCallback(() => {
    setShowError(true);
  }, []);

  const formData = useMemo(() => {
    return {
      [Strings.email]: email,
      [Strings.username]: username,
      [Strings.contact]: contactNo,
    };
  }, [username, contactNo, email]);

  const propsForFormElements = useMemo<
    (FormElementProps | FormElementProps[])[]
  >(() => {
    return [
      {
        maxLength: 30,
        value: username,
        label: Strings.username,
        onChangeText: setUsername,
        fieldName: Strings.username,
        placeholder: '',
        type: FormElementTypes.TEXT_INPUT,
        style: {
          padding: sizer(8),
        },
      },
      [
        {
          maxLength: 10,
          value: contactNo,
          keyboardType: 'numeric',
          label: Strings.contactNo,
          onChangeText: setContactNo,
          fieldName: Strings.contact,
          placeholder: '',
          type: FormElementTypes.TEXT_INPUT,
          style: {
            padding: sizer(8),
          },
          containerStyle: commonStyles.flex1,
        },
        {
          maxLength: 25,
          value: email,
          label: Strings.email,
          onChangeText: setEmail,
          fieldName: Strings.email,
          placeholder: '',
          type: FormElementTypes.TEXT_INPUT,
          style: {
            padding: sizer(8),
          },
          containerStyle: commonStyles.flex1,
        },
      ],
    ];
  }, [username, contactNo, email]);

  return {
    formRef,
    formData,
    showError,
    throwError,
    propsForFormElements,
  };
};
