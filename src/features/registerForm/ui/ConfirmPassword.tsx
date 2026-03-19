import { useFormContext } from 'react-hook-form';

import { Field } from 'shared';
import type { TFormValues } from '../model';

import styles from './RegisterForm.module.css';

export function ConfirmPassword() {
  const {
    register,
    formState: { errors },
  } = useFormContext<TFormValues>();

  return (
    <Field
      id="confirmPassword"
      label="Подтверждение пароля"
      error={errors.confirmPassword?.message}
    >
      <input
        id="confirmPassword"
        className={styles.input}
        type="password"
        {...register('confirmPassword')}
      />
    </Field>
  );
}
