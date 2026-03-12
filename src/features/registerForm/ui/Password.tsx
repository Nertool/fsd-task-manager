import { useFormContext } from 'react-hook-form';

import { Field } from 'shared';
import type { TFormValues } from '../model';

import styles from './RegisterForm.module.css';

export function Password() {
  const {
    register,
    formState: { errors },
  } = useFormContext<TFormValues>();

  return (
    <Field id="password" label="Пароль" error={errors.password?.message}>
      <input
        id="password"
        className={styles.input}
        type="password"
        {...register('password')}
      />
    </Field>
  );
}
