import type { TWizardState } from './types';

export async function subscriptionAction(
  _prevState: TWizardState,
  formData: FormData,
): Promise<TWizardState> {
  const email = String(formData.get('email') ?? '').trim();

  if (!email) {
    return { status: 'error', message: 'Укажите email' };
  }

  if (!email.includes('@')) {
    return { status: 'error', message: 'Некорректный email' };
  }

  await new Promise(resolve => setTimeout(resolve, 500));

  return { status: 'success', message: 'Подписка успешно оформлена' };
}
