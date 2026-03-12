import { useFormContext } from 'react-hook-form';

import { Field } from 'shared';
import type { TFormValues } from '../model';

import styles from './RegisterForm.module.css';

export function Username() {
  const {
    formState: { errors },
    register,
  } = useFormContext<TFormValues>();

  return (
    <Field
      id="username"
      label="Имя пользователя"
      error={errors.username?.message}
    >
      <input
        type="text"
        id="username"
        className={styles.input}
        {...register('username')}
      />
    </Field>
  );
}
