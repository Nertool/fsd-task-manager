import { useRef } from 'react';

import { Button } from 'shared';

interface IClickData {
  startTime: number | null;
  clickCount: number;
}

export function ClickTimer() {
  const clickDataRef = useRef<IClickData>({ startTime: null, clickCount: 0 });

  const handleClick = () => {
    const now = Date.now();

    if (clickDataRef.current.startTime === null) {
      clickDataRef.current.startTime = now;
    }

    clickDataRef.current.clickCount += 1;

    console.log('ClickTimer', {
      timeFromFirstClick: now - clickDataRef.current.startTime,
      clickCount: clickDataRef.current.clickCount,
    });
  };

  return (
    <div>
      <h3>ClickTimer</h3>
      <Button onClick={handleClick}>Нажать</Button>
    </div>
  );
}
