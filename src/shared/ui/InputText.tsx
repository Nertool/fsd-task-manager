import { type ChangeEvent, type FocusEvent, forwardRef } from 'react';

import styles from './InputText.module.css';

type Props = {
  value?: string;
  placeholder?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
};

export const InputText = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { value, placeholder, onChange, onFocus } = props;

  return (
    <input
      ref={ref}
      type="text"
      className={styles.input}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      onFocus={onFocus}
    />
  );
});
