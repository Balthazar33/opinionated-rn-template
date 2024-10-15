import {ValidationError} from 'yup';
import {FormElementProps, FormError, FormValidatorProps} from './Form.types';
import {isArray} from '@/utils/helper';

export const isFormValid = ({
  schema,
  formData,
  callback,
}: FormValidatorProps) => {
  try {
    schema.validateSync(formData, {abortEarly: false});
    callback(true);
  } catch (error: any) {
    const errorLabelsWithMessages: FormError[] = [];
    error?.inner?.forEach((e: ValidationError) => {
      if (e?.path) {
        errorLabelsWithMessages.push({
          label: e.path,
          errors: e?.errors ?? [],
        });
      }
    });
    callback(false, errorLabelsWithMessages);
  }
};

/**
 * Returns true if the argument is a single form element object.
 * False otherwise.
 * @param item
 * @returns boolean
 */
export const isSingleFormElement = (
  item: FormElementProps | FormElementProps[],
): item is FormElementProps => {
  return !isArray(item);
};
