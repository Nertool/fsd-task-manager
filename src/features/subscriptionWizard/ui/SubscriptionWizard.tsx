import { useActionState } from 'react';

import { subscriptionAction, type TWizardState } from '../model';

import styles from './SubscriptionWizard.module.css';

export function SubscriptionWizard() {
  const [wizardState, formAction, isPending] = useActionState<
    TWizardState,
    FormData
  >(subscriptionAction, { status: 'initial' });

  return (
    <section className={styles.root}>
      <h2 className={styles.title}>Подписка</h2>

      <form className={styles.form} action={formAction} noValidate>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="wizard-email">
            Шаг 1 — введите email
          </label>
          <input
            id="wizard-email"
            name="email"
            className={styles.input}
            type="email"
          />
        </div>

        <div className={styles.field}>
          <label className={styles.label}>
            Шаг 2 — нажмите «Подтвердить подписку» для завершения.
          </label>

          <button type="submit" disabled={isPending}>
            {isPending ? 'Отправка...' : 'Подтвердить подписку'}
          </button>
        </div>

        {wizardState.status === 'error' && (
          <div className={styles.error}>{wizardState.message}</div>
        )}

        {wizardState.status === 'success' && (
          <div className={styles.success}>{wizardState.message}</div>
        )}
      </form>
    </section>
  );
}
