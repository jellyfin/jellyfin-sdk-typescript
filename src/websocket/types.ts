import type { InboundWebSocketMessage } from '../generated-client';
import type { OutboundWebSocketMessage } from '../generated-client/models/outbound-web-socket-message';

export type WebSocketStatus = WebSocket['readyState'] | 'disconnected';

export type SocketMessageHandler<T extends OutboundWebSocketMessageType> = (message: Extract<OutboundWebSocketMessage, { MessageType: T }>) => void

export type SocketStatusHandler = (status: WebSocket['readyState'] | 'disconnected') => void

export type WebSocketSubscription<
    T extends OutboundWebSocketMessageType
> = {
    messageType: T,
    createStartMessage: () => InboundWebSocketMessage,
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
