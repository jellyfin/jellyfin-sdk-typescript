import { InboundWebSocketMessage } from "../generated-client"
import { OutboundWebSocketMessage } from "../generated-client/models/outbound-web-socket-message"


export type SocketMessageHandler<T extends OutboundWebSocketMessage['MessageType']> = (message: Extract<OutboundWebSocketMessage, { MessageType: T }>) => void

export type SocketStatusHandler = (status: WebSocket['readyState'] | 'disconnected') => void

export type WebSocketSubscription<
    T extends OutboundWebSocketMessage['MessageType']
> = {
    messageType: T,
    createStartMessage: () => InboundWebSocketMessage,
    createStopMessage: () => InboundWebSocketMessage
}