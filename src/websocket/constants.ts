import { OutboundWebSocketMessage } from "../generated-client/models/outbound-web-socket-message";
import { WebSocketSubscription } from "./types";

export const SUBSCRIPTION_REGISTRY : Partial<Record<OutboundWebSocketMessage['MessageType'], WebSocketSubscription<OutboundWebSocketMessage['MessageType']>>> = {
    'Sessions' : {
        messageType: 'Sessions',
        createStartMessage: () => ({ MessageType: 'SessionsStart'}),
        createStopMessage: () => ({ MessageType: 'SessionsStop' })
    },
    'ActivityLogEntry' : {
        messageType: 'ActivityLogEntry',
        createStartMessage: () => ({ MessageType: 'ActivityLogEntryStart' }),
        createStopMessage: () => ({ MessageType: 'ActivityLogEntryStop' })
    },
    'ScheduledTasksInfo': {
        messageType: 'ScheduledTasksInfo',
        createStartMessage: () => ({ MessageType: 'ScheduledTasksInfoStart' }),
        createStopMessage: () => ({ MessageType: 'ScheduledTasksInfoStop' })
    }
}