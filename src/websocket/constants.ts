import type { OutboundWebSocketMessage } from '../generated-client/models/outbound-web-socket-message';

import type { WebSocketSubscription } from './types';

export const SUBSCRIPTION_REGISTRY: Partial<Record<OutboundWebSocketMessage['MessageType'], WebSocketSubscription<OutboundWebSocketMessage['MessageType']>>> = {
	'Sessions': {
		messageType: 'Sessions',
		createStartMessage: () => ({ MessageType: 'SessionsStart', Data: '0,5000' }),
		createStopMessage: () => ({ MessageType: 'SessionsStop' })
	},
	'ActivityLogEntry': {
		messageType: 'ActivityLogEntry',
		createStartMessage: () => ({ MessageType: 'ActivityLogEntryStart', Data: '0,5000' }),
		createStopMessage: () => ({ MessageType: 'ActivityLogEntryStop' })
	},
	'ScheduledTasksInfo': {
		messageType: 'ScheduledTasksInfo',
		createStartMessage: () => ({ MessageType: 'ScheduledTasksInfoStart', Data: '0,5000' }),
		createStopMessage: () => ({ MessageType: 'ScheduledTasksInfoStop' })
	}
};
