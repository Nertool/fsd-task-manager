import { useFieldArray, useFormContext } from 'react-hook-form';

import type { TFormValues } from '../model';

import styles from './RegisterForm.module.css';

export function SocialLinks() {
  const {
    control,
    register,
    formState: { errors },
  } = useFormContext<TFormValues>();

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'socialLinks',
  });

  return (
    <div className={styles.socials}>
      <div className={styles.fieldHeader}>
        <span className={styles.label}>Социальные ссылки</span>
        <button type="button" onClick={() => append({ url: '' })}>
          Добавить ссылку
        </button>
      </div>

      {fields.map((field, index) => (
        <div key={field.id} className={styles.socialItem}>
          <input
            className={styles.input}
            placeholder="https://github.com"
            {...register(`socialLinks.${index}.url`)}
          />

          <button
            type="button"
            onClick={() => remove(index)}
            disabled={fields.length === 1}
          >
            Удалить
          </button>

          {errors.socialLinks?.[index]?.url && (
            <span className={styles.error}>
              {errors.socialLinks[index]?.url?.message}
            </span>
          )}
        </div>
      ))}

      {typeof errors.socialLinks?.message === 'string' && (
        <span className={styles.error}>{errors.socialLinks.message}</span>
      )}
    </div>
  );
}
