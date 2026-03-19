import { useFormContext } from 'react-hook-form';

import { Field } from 'shared';
import type { TFormValues } from '../model';

import styles from './RegisterForm.module.css';

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
