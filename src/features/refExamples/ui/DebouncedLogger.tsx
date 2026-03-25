import { type ChangeEvent, useEffect, useRef } from 'react';

import { InputText } from 'shared';

export function DebouncedLogger() {
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      console.log('DebouncedLogger', value);
    }, 1000);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div>
      <h3>DebouncedLogger</h3>
      <InputText onChange={handleChange} />
    </div>
  );
}
