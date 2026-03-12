export type TWizardState =
  | { status: 'initial' }
  | { status: 'pending' }
  | { status: 'error'; message: string }
  | { status: 'success'; message: string };
