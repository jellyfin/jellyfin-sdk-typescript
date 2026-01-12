import { OutboundWebSocketMessageType } from '../generated-client';

import type { WebSocketSubscription } from './types';

export const SUBSCRIPTION_REGISTRY: Partial<Record<OutboundWebSocketMessageType, WebSocketSubscription<OutboundWebSocketMessageType>>> = {
	'Sessions': {
		messageType: OutboundWebSocketMessageType.Sessions,
		createStartMessage: () => ({ MessageType: 'SessionsStart', Data: '0,5000' }),
		createStopMessage: () => ({ MessageType: 'SessionsStop' })
	},
	'ActivityLogEntry': {
		messageType: OutboundWebSocketMessageType.ActivityLogEntry,
		createStartMessage: () => ({ MessageType: 'ActivityLogEntryStart', Data: '0,5000' }),
		createStopMessage: () => ({ MessageType: 'ActivityLogEntryStop' })
	},
	'ScheduledTasksInfo': {
		messageType: OutboundWebSocketMessageType.ScheduledTasksInfo,
		createStartMessage: () => ({ MessageType: 'ScheduledTasksInfoStart', Data: '0,5000' }),
		createStopMessage: () => ({ MessageType: 'ScheduledTasksInfoStop' })
	}
};
