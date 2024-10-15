import {Strings} from '@/utils/strings';
import {object, string} from 'yup';

export const dummySchema = object({
  [Strings.username]: string()
    .required('Username may not be empty')
    .min(4, 'Username must contain at least 4 characters'),
  [Strings.contact]: string()
    .required('Contact no. may not be empty')
    .min(10, 'Contact no. must be at least 10 characters long'),
  [Strings.email]: string()
    .required('Email may not be empty')
    .email('Please enter a valid email address'),
});
