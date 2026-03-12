import { RegisterForm } from 'features/registerForm';
import { SubscriptionWizard } from 'features/subscriptionWizard';

import styles from './RegisterPage.module.css';

export function RegisterPage() {
  return (
    <div className={styles.root}>
      <h1 className={styles.title}>Регистрация</h1>
      <RegisterForm />
      <SubscriptionWizard />
    </div>
  );
}
