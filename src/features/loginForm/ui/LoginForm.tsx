import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  initialValues,
  type TFormValues,
  validationSchema,
} from 'features/loginForm';
import { useAuth } from 'features/authRouting';

import { Email } from './Email';
import { Password } from './Password';

import styles from './LoginForm.module.css';

export function LoginForm() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [error, setError] = useState('');

  const form = useForm<TFormValues>({
    defaultValues: initialValues,
    mode: 'onChange',
    resolver: zodResolver(validationSchema),
  });

  const onSubmit = async (values: TFormValues) => {
    setError('');

    try {
      await login(values);
      navigate('/profile', { replace: true });
    } catch {
      setError('Не удалось выполнить вход. Проверьте введеные вами данные.');
    }
  };

  return (
    <FormProvider {...form}>
      <form
        className={styles.form}
        onSubmit={form.handleSubmit(onSubmit)}
        noValidate
      >
        <Email />
        <Password />
        <button type="submit">Войти</button>
        {error && <div className={styles.error}>{error}</div>}
      </form>
    </FormProvider>
  );
}
