import { useFormContext } from 'react-hook-form';

import type { TFormValues } from 'features/loginForm';
import { Field } from 'shared';

import styles from './LoginForm.module.css';

export function Email() {
  const {
    register,
    formState: { errors },
  } = useFormContext<TFormValues>();

  return (
    <Field id="email" label="Email" error={errors.email?.message}>
      <input
        id="email"
        className={styles.input}
        type="email"
        {...register('email')}
      />
    </Field>
  );
}
