import type { PropsWithChildren } from 'react';

import { StoreProvider } from './Store';
import { AuthProvider } from './Auth';

export function AppProviders({ children }: PropsWithChildren) {
  return (
    <StoreProvider>
      <AuthProvider>{children}</AuthProvider>
    </StoreProvider>
  );
}
