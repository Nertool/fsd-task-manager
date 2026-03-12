import { z } from 'zod';

const socialLinkSchema = z.object({
  url: z.string().url('Некорректный URL'),
});

export const validationSchema = z
  .object({
    username: z.string().min(1, 'Имя пользователя обязательно'),
    email: z.string().email('Некорректный email'),
    password: z.string().min(6, 'Пароль должен содержать минимум 6 символов'),
    confirmPassword: z.string().min(1, 'Подтвердите пароль'),
    socialLinks: z.array(socialLinkSchema),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'Пароли не совпадают',
    path: ['confirmPassword'],
  });
