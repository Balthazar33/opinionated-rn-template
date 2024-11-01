import {StyleProp, TextInput, TextInputProps, ViewStyle} from 'react-native';

import {ObjectSchema} from 'yup';

import {FormElementTypes} from './Form.constants';

export interface FormError {
  label: string;
  errors: string[];
}

export interface FormValidatorProps {
  formData: {[x: string]: any};
  schema: ObjectSchema<{[x: string]: any}>;
  callback: (isValid: boolean, errorPathsWithMessages?: FormError[]) => void;
}

export interface FormElementProps
  extends Pick<
    TextInputProps,
    | 'style'
    | 'value'
    | 'testID'
    | 'editable'
    | 'multiline'
    | 'maxLength'
    | 'placeholder'
    | 'onChangeText'
    | 'numberOfLines'
    | 'accessibilityHint'
    | 'accessibilityLabel'
  > {
  label: string;
  dense?: boolean;
  fieldName: string;
  iconSize?: number;
  leftIcon?: string;
  rightIcon?: string;
  iconColor?: string;
  onFocus?: () => void;
  mode?: TextInputModes;
  errorMessage?: string;
  type: FormElementTypes;
  formErrorMessage?: string;
  onRightIconPress?: () => void;
  containerStyle?: StyleProp<ViewStyle>;
  keyboardType?: Exclude<TextInput['props']['keyboardType'], undefined>;
}

export interface FormProps {
  /**
   * Array of key-value pairs where the key is the field identifier,
   * and the value is the state variable for the field.
   * Eg., [{ username: usernameStateVariable }]
   */
  formData: {[x: string]: any};
  /**
   * The schema for the form.
   */
  schema: ObjectSchema<{[x: string]: any}>;
  /**
   * Props for the form text elements. Can either be a single object
   * or an array of objects.
   */
  formElementProps: (FormElementProps | FormElementProps[])[];
}

export interface FormTextInputRef {
  focus: () => void;
}

export interface FormRef {
  validate: () => boolean;
}

export type TextInputModes = 'outlined' | 'flat' | undefined;
