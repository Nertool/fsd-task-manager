import type { TFormValues } from './types';

export const initialValues: TFormValues = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
  socialLinks: [{ url: '' }],
};
