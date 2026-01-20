/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import { PERIODIC_LISTENER_INTERVAL } from './configs';

import type { WebSocketSubscription } from './types';
import { OutboundWebSocketMessageType } from './types';

export const SUBSCRIPTION_REGISTRY: Partial<Record<OutboundWebSocketMessageType, WebSocketSubscription<OutboundWebSocketMessageType>>> = {
	'Sessions': {
		messageType: OutboundWebSocketMessageType.Sessions,
		createStartMessage: () => ({ MessageType: 'SessionsStart', Data: PERIODIC_LISTENER_INTERVAL }),
		createStopMessage: () => ({ MessageType: 'SessionsStop' })
	},
	'ActivityLogEntry': {
		messageType: OutboundWebSocketMessageType.ActivityLogEntry,
		createStartMessage: () => ({ MessageType: 'ActivityLogEntryStart', Data: PERIODIC_LISTENER_INTERVAL }),
		createStopMessage: () => ({ MessageType: 'ActivityLogEntryStop' })
	},
	'ScheduledTasksInfo': {
		messageType: OutboundWebSocketMessageType.ScheduledTasksInfo,
		createStartMessage: () => ({ MessageType: 'ScheduledTasksInfoStart', Data: PERIODIC_LISTENER_INTERVAL }),
		createStopMessage: () => ({ MessageType: 'ScheduledTasksInfoStop' })
	}
};
