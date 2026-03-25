import {
  ClickTimer,
  DebouncedLogger,
  FocusTracker,
  PreviousInput,
  WebSocketLogger,
} from 'features/refExamples';

import styles from './RefExamplesPage.module.css';

export function RefExamplesPage() {
  return (
    <div className={styles.root}>
      <h1 className={styles.title}>Работа с useRef в React</h1>
      <div className={styles.section}>
        <ClickTimer />
        <PreviousInput />
        <FocusTracker />
        <DebouncedLogger />
        <WebSocketLogger />
      </div>
    </div>
  );
}
