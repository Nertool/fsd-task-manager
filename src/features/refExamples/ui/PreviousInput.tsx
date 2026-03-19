import { type ChangeEvent, useEffect, useRef, useState } from 'react';

import { InputText } from 'shared';

export function PreviousInput() {
  const [value, setValue] = useState('');
  const previousValueRef = useRef('');

  useEffect(() => {
    previousValueRef.current = value;
  }, [value]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <h3>PreviousInput</h3>
      <InputText value={value} onChange={handleChange} />
      <div>Предыдущее значение: {previousValueRef.current}</div>
    </div>
  );
}
