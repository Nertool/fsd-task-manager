import z from 'zod';

import type { validationSchema } from './validator';

export type TFormValues = z.infer<typeof validationSchema>;
