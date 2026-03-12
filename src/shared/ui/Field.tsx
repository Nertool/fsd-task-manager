import type { PropsWithChildren, ReactNode } from 'react';

import styles from './Field.module.css';

type Props = {
  id?: string;
  label?: string;
  error?: ReactNode;
};

export function Field({
  id,
  label,
  error,
  children,
}: PropsWithChildren<Props>) {
  return (
    <div className={styles.field}>
      {label && id && (
        <label className={styles.label} htmlFor={id}>
          {label}
        </label>
      )}

      {children}

      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
}
