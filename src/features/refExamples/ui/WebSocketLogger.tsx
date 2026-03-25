import { useEffect, useRef } from 'react';

import { Button } from 'shared';

const SOCKET_URL = 'wss://example.com/chat';

export function WebSocketLogger() {
  const socketRef = useRef<WebSocket>(null);

  useEffect(() => {
    const socket = new WebSocket(SOCKET_URL);

    socketRef.current = socket;

    socket.onmessage = event => {
      const msg = JSON.parse(event.data);

      console.log('Новое сообщение:', msg);
    };

    return () => {
      socketRef.current?.close();
    };
  }, []);

  const sendMsg = (text: string) => {
    if (socketRef.current?.readyState === WebSocket.OPEN) {
      socketRef.current.send(JSON.stringify({ type: 'chat', text }));
    }
  };

  return (
    <div>
      <h3>WebSocketLogger</h3>
      <Button onClick={() => sendMsg('Hello world!')}>
        Отправить приветствие
      </Button>
    </div>
  );
}
