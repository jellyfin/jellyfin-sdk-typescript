/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import type { InboundWebSocketMessage } from '../generated-client';
import type { OutboundWebSocketMessage } from '../generated-client/models/outbound-web-socket-message';

import type { PeriodicListenerInterval, WebSocketStatuses } from './models';

/**
 * The connection status of the {@link WebSocketService}, as reported by the `status` of a {@link WebSocketStatusEvent}.
 *
 * - `disconnected`: No socket is open and no reconnection is pending.
 * - `connecting`: A socket has been created and is waiting to open.
 * - `open`: The socket is open and subscriptions are active.
 * - `reconnecting`: The socket was lost and a reconnection attempt is scheduled.
 */
export type WebSocketStatus = typeof WebSocketStatuses[keyof typeof WebSocketStatuses];

/**
 * A socket has been created and is waiting to open.
 */
export type WebSocketConnecting = { status: typeof WebSocketStatuses.Connecting };

/**
 * The socket is open and subscriptions are active.
 */
export type WebSocketOpen = { status: typeof WebSocketStatuses.Open };

/**
 * The socket was lost and a reconnection attempt is scheduled.
 */
export type WebSocketReconnecting = {
	status: typeof WebSocketStatuses.Reconnecting,

	/**
	 * The number of the upcoming reconnection attempt, starting at 1
	 */
	attempt: number,

	/**
	 * The delay in milliseconds before the reconnection attempt
	 */
	delay: number,

	/**
	 * The close code reported by the lost socket
	 */
	code: number,

	/**
	 * The close reason reported by the lost socket
	 */
	reason: string
};

/**
 * No socket is open and no reconnection is pending.
 *
 * If this was not `intentional`, subscriptions are preserved and are restored by {@link WebSocketService.reconnect},
 * the next subscription or the next access token update.
 */
export type WebSocketDisconnected = {
	status: typeof WebSocketStatuses.Disconnected,

	/**
	 * Whether the disconnection was requested (unsubscribing, logging out),
	 * rather than reconnection being abandoned after too many failed attempts
	 */
	intentional: boolean,

	/**
	 * The close code reported by the socket, if it was closed by the server or network
	 */
	code?: number,

	/**
	 * The close reason reported by the socket, if it was closed by the server or network
	 */
	reason?: string
};

/**
 * An event describing a change in the {@link WebSocketStatus}, with any details relevant to the new status.
 *
 * Narrow on `status` to access the details of each variant.
 */
export type WebSocketStatusEvent =
	| WebSocketConnecting
	| WebSocketOpen
	| WebSocketReconnecting
	| WebSocketDisconnected;

export type SocketMessageHandler<T extends OutboundWebSocketMessageType> = (message: Extract<OutboundWebSocketMessage, { MessageType: T }>) => void

export type SocketStatusHandler = (event: WebSocketStatusEvent) => void

export type WebSocketSubscription<
    T extends OutboundWebSocketMessageType
> = {
    messageType: T,
    createStartMessage: (interval: PeriodicListenerInterval) => InboundWebSocketMessage,
    createStopMessage: () => InboundWebSocketMessage
}

/**
 * The different kinds of outbound messages sent by the WebSocket API.
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
