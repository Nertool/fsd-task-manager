import { useFormContext } from 'react-hook-form';

import type { TFormValues } from 'features/loginForm';
import { Field } from 'shared';

import styles from './LoginForm.module.css';

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
