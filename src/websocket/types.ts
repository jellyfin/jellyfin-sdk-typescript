import type { InboundWebSocketMessage, OutboundWebSocketMessageType } from '../generated-client';
import type { OutboundWebSocketMessage } from '../generated-client/models/outbound-web-socket-message';

export type SocketMessageHandler<T extends OutboundWebSocketMessageType> = (message: Extract<OutboundWebSocketMessage, { MessageType: T }>) => void

export type SocketStatusHandler = (status: WebSocket['readyState'] | 'disconnected') => void

export type WebSocketSubscription<
    T extends OutboundWebSocketMessageType
> = {
    messageType: T,
    createStartMessage: () => InboundWebSocketMessage,
    createStopMessage: () => InboundWebSocketMessage
}
