/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import type { WebSocketSubscription } from './types';
import { OutboundWebSocketMessageType } from './types';

/**
 * The URL path segment for websocket connections
 */
export const WEBSOCKET_URL_PATH = 'socket';

/**
 * The timeout interval in which the websocket connections will be reconnected
 */
export const RECONNECT_TIMEOUT_INTERVAL = 5000;

export const SUBSCRIPTION_REGISTRY: Partial<Record<OutboundWebSocketMessageType, WebSocketSubscription<OutboundWebSocketMessageType>>> = {
	[OutboundWebSocketMessageType.Sessions]: {
		messageType: OutboundWebSocketMessageType.Sessions,
		createStartMessage: (interval: string) => ({ MessageType: 'SessionsStart', Data: interval }),
		createStopMessage: () => ({ MessageType: 'SessionsStop' })
	},
	[OutboundWebSocketMessageType.ActivityLogEntry]: {
		messageType: OutboundWebSocketMessageType.ActivityLogEntry,
		createStartMessage: (interval: string) => ({ MessageType: 'ActivityLogEntryStart', Data: interval }),
		createStopMessage: () => ({ MessageType: 'ActivityLogEntryStop' })
	},
	[OutboundWebSocketMessageType.ScheduledTasksInfo]: {
		messageType: OutboundWebSocketMessageType.ScheduledTasksInfo,
		createStartMessage: (interval: string) => ({ MessageType: 'ScheduledTasksInfoStart', Data: interval }),
		createStopMessage: () => ({ MessageType: 'ScheduledTasksInfoStop' })
	}
};
