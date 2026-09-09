import useWebSocket, { ReadyState } from "react-use-websocket";

interface ChatMessage {
    id: string;
    message: string;
    sender: string;
    timeStamp: string;
}

export const SERVER_URL = "server-url";

export const formatConnectionStatus = (readyState: ReadyState) => {
  switch (readyState) {
    case ReadyState.CONNECTING:
      return { label: 'Connecting', color: '#eab308' };
    case ReadyState.OPEN:
      return { label: 'Connected', color: '#22c55e' };
    case ReadyState.CLOSING:
      return { label: 'Closing', color: '#f97316' };
    case ReadyState.CLOSED:
      return { label: 'Disconnected', color: '#ef4444' };
    case ReadyState.UNINSTANTIATED:
    default:
      return { label: 'Idle', color: '#6b7280' };
  }
};

export type WebSocketInboundEvent =
  | { type: 'CHAT_MESSAGE'; payload: ChatMessage }
  | { type: 'USER_TYPING'; payload: { user: string; isTyping: boolean } }
  | { type: 'ERROR'; payload: { message: string } };

export type WebSocketOutboundEvent =
  | { type: 'SEND_MESSAGE'; payload: ChatMessage }
  | { type: 'SET_TYPING'; payload: { isTyping: boolean } };

export const startChat = (endpoint: string = SERVER_URL) => {
    const socket = useWebSocket(endpoint, {
        shouldReconnect: () => true,
        reconnectAttempts: 5,
        reconnectInterval: (attemptNumber) => Math.min(1000 * 2 ** attemptNumber, 10000)
    })

    const sendPayload = (event: WebSocketOutboundEvent) => {
        socket.sendJsonMessage(event)
    }

    const reconnect = () => {
        const wsInstance = socket.getWebSocket();
        if (wsInstance) {
            wsInstance.close()
        }
    }

    return {
        ...socket,
        sendPayload,
        reconnect,
        status: formatConnectionStatus(socket.readyState)
    }
}

