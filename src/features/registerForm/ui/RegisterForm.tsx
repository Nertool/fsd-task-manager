import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { type TFormValues, initialValues, validationSchema } from '../model';

import { Username } from './Username';
import { Email } from './Email';
import { Password } from './Password';
import { ConfirmPassword } from './ConfirmPassword';
import { SocialLinks } from './SocialLinks';

import styles from './RegisterForm.module.css';

export function RegisterForm() {
  const form = useForm<TFormValues>({
    defaultValues: initialValues,
    mode: 'onChange',
    resolver: zodResolver(validationSchema),
  });

  const onSubmit = (values: TFormValues) => {
    console.log('Данные формы:', values);
  };

  return (
    <FormProvider {...form}>
      <form
        className={styles.form}
        onSubmit={form.handleSubmit(onSubmit)}
        noValidate
      >
        <Username />
        <Email />
        <Password />
        <ConfirmPassword />
        <SocialLinks />
        <button className={styles.submit} type="submit">
          Зарегистрироваться
        </button>
      </form>
    </FormProvider>
  );
}
