import type { PropsWithChildren } from 'react';

import styles from './Button.module.css';

type Props = {
  onClick: () => void;
  isActive?: boolean;
};

export function Button({
  children,
  onClick,
  isActive = false,
}: PropsWithChildren<Props>) {
  return (
    <button
      className={isActive ? styles.active : styles.root}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
