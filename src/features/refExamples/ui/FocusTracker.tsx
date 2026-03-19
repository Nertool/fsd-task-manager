import { useRef, type FocusEvent } from 'react';

import { Button, InputText } from 'shared';

import styles from './FocusTracker.module.css';

export function FocusTracker() {
  const firstInputRef = useRef<HTMLInputElement>(null);
  const secondInputRef = useRef<HTMLInputElement>(null);
  const clickCount = useRef(0);

  const handleFocus = (event: FocusEvent<HTMLInputElement>) => {
    const previousElement = event.relatedTarget;

    if (
      previousElement === firstInputRef.current ||
      previousElement === secondInputRef.current
    ) {
      clickCount.current += 1;

      console.log('FocusTracker', { clickCount: clickCount.current });
    }
  };

  return (
    <div className={styles.root}>
      <h3>FocusTracker</h3>
      <Button onClick={() => firstInputRef.current?.focus()}>
        Сфокусировать на первом
      </Button>
      <InputText
        ref={firstInputRef}
        onFocus={handleFocus}
        placeholder="first"
      />
      <InputText
        ref={secondInputRef}
        onFocus={handleFocus}
        placeholder="second"
      />
    </div>
  );
}
