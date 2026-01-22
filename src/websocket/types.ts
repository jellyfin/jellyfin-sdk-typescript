/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import type { InboundWebSocketMessage } from '../generated-client';
import type { OutboundWebSocketMessage } from '../generated-client/models/outbound-web-socket-message';

export type WebSocketStatus = WebSocket['readyState'] | 'disconnected';

export type SocketMessageHandler<T extends OutboundWebSocketMessageType> = (message: Extract<OutboundWebSocketMessage, { MessageType: T }>) => void

export type SocketStatusHandler = (status: WebSocket['readyState'] | 'disconnected') => void

export type WebSocketSubscription<
    T extends OutboundWebSocketMessageType
> = {
    messageType: T,
    createStartMessage: (interval: string) => InboundWebSocketMessage,
    createStopMessage: () => InboundWebSocketMessage
}

/**
 * The different kinds of outbound messages sent by the WebSocket API.
 * @export
 * @enum {string}
 */
export const OutboundWebSocketMessageType: { [T in OutboundWebSocketMessageType]: T; } = {
	ActivityLogEntry: 'ActivityLogEntry',
	ForceKeepAlive: 'ForceKeepAlive',
	GeneralCommand: 'GeneralCommand',
	KeepAlive: 'KeepAlive',
	LibraryChanged: 'LibraryChanged',
	PackageInstallationCancelled: 'PackageInstallationCancelled',
	PackageInstallationCompleted: 'PackageInstallationCompleted',
	PackageInstallationFailed: 'PackageInstallationFailed',
	PackageInstalling: 'PackageInstalling',
	PackageUninstalled: 'PackageUninstalled',
	Play: 'Play',
	Playstate: 'Playstate',
	RefreshProgress: 'RefreshProgress',
	RestartRequired: 'RestartRequired',
	ScheduledTaskEnded: 'ScheduledTaskEnded',
	ScheduledTasksInfo: 'ScheduledTasksInfo',
	SeriesTimerCancelled: 'SeriesTimerCancelled',
	SeriesTimerCreated: 'SeriesTimerCreated',
	ServerRestarting: 'ServerRestarting',
	ServerShuttingDown: 'ServerShuttingDown',
	Sessions: 'Sessions',
	SyncPlayCommand: 'SyncPlayCommand',
	SyncPlayGroupUpdate: 'SyncPlayGroupUpdate',
	TimerCancelled: 'TimerCancelled',
	TimerCreated: 'TimerCreated',
	UserDataChanged: 'UserDataChanged',
	UserDeleted: 'UserDeleted',
	UserUpdated: 'UserUpdated'
} as const;

export type OutboundWebSocketMessageType = OutboundWebSocketMessage['MessageType'];

export class PeriodicListenerInterval {
	initialDelay: number;
	interval: number;

	constructor(initialDelay: number, interval: number) {
		this.initialDelay = initialDelay;
		this.interval = interval;
	}

	toString(): string {
		return `${this.initialDelay},${this.interval}`;
	}
}

/**
 * A mapping of outbound WebSocket message types to their respective periodic listener intervals.
 * 
 * @example
 * const intervals: WebSocketSubscriptionIntervals = {
 *   [OutboundWebSocketMessageType.ActivityLogEntry]: new PeriodicListenerInterval(0, 1000),
 *   [OutboundWebSocketMessageType.Sessions]: new PeriodicListenerInterval(0, 5000)
 * };
 */
export type WebSocketSubscriptionIntervals = Partial<Record<OutboundWebSocketMessageType, PeriodicListenerInterval>>;
