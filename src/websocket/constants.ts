import { PERIODIC_LISTENER_INTERVAL } from './configs';

import { OutboundWebSocketMessageType, WebSocketSubscription } from './types';

export const SUBSCRIPTION_REGISTRY: Partial<Record<OutboundWebSocketMessageType, WebSocketSubscription<OutboundWebSocketMessageType>>> = {
	'Sessions': {
		messageType: OutboundWebSocketMessageType.Sessions,
		createStartMessage: () => ({ MessageType: 'SessionsStart', Data: PERIODIC_LISTENER_INTERVAL }),
		createStopMessage: () => ({ MessageType: 'SessionsStop' })
	},
	'ActivityLogEntry': {
		messageType: OutboundWebSocketMessageType.ActivityLogEntry,
		createStartMessage: () => ({ MessageType: 'ActivityLogEntryStart', Data: PERIODIC_LISTENER_INTERVAL}),
		createStopMessage: () => ({ MessageType: 'ActivityLogEntryStop' })
	},
	'ScheduledTasksInfo': {
		messageType: OutboundWebSocketMessageType.ScheduledTasksInfo,
		createStartMessage: () => ({ MessageType: 'ScheduledTasksInfoStart', Data: PERIODIC_LISTENER_INTERVAL }),
		createStopMessage: () => ({ MessageType: 'ScheduledTasksInfoStop' })
	}
};
