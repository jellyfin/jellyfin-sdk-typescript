import { Api, AUTHORIZATION_PARAMETER } from "../api";
import { OutboundWebSocketMessage, SessionsMessage } from "../generated-client";


/**
 * A class used for managing the lifecycle of websocket connections
 * to Jellyfin
 */
export class WebSocketService {
    
    /**
     * The {@link Api} instance used to construct the websocket URL
     */
    private api;

    /**
     * The active websocket connection, if one exists
     */
    private socket : WebSocket | undefined

    /**
     * A map of message type subscriptions to their respective handlers
     */
    private subscriptions: Map<string, SocketMessageHandler<any>[]> = new Map();

    constructor(api : Api) {
        this.api = api
    }

    /**
     * Gets the websocket URL for the given API instance
     * 
     * @param api The authenticated {@link Api} instance
     * @returns The websocket URL
     */
    private getWebSocketUrl(api: Api) : URL {
        return new URL(
            api.getUri("socket", {
                [AUTHORIZATION_PARAMETER]: api.accessToken
            }).replace(/^http/, "ws")
        );
    }

    /**
     * Gets the current status of the websocket connection
     * @returns The {@link WebSocket.readyState} status
     */
    getSocketStatus() : WebSocket['readyState'] | undefined {
        return this.socket?.readyState;
    }

    /**
     * Adds message listeners for the provided message types
     * 
     * Adding a listener will establish a websocket connection if one does not already exist
     * 
     * Listeners will be automatically re-added if the connection is lost and re-established
     * 
     * Listeners can be removed by invoking the returned unsubscribe function
     * 
     * @param messageTypes Any array of {@link OutboundWebSocketMessage} message types to listen for
     * @param onMessage The callback to invoke when a message is received
     * 
     * @returns A function which can be invoked to remove the added listeners
     */
    subscribe<T extends OutboundWebSocketMessage['MessageType']>(messageTypes: T[], onMessage: SocketMessageHandler<T>) {
        if (!this.socket || this.socket.readyState !== WebSocket.OPEN) {
            const url = this.getWebSocketUrl(this.api);
            this.socket = new WebSocket(url.toString());
        }

        // Send startMessages and stopMessages to the server for three specific message types
        // Sessions
        // ActivityLogEntry 
        // ScheduledTaskSSSSSSSSSSSSSSSSSS🐍Info 

        this.socket.addEventListener('message', (event) => {
            const message = JSON.parse(event.data) as OutboundWebSocketMessage;
            if (messageTypes.includes(message.MessageType as T)) {
                onMessage(message as Extract<OutboundWebSocketMessage, { MessageType: T }>);
            }
        });

        this.socket.addEventListener('close', () => {
            /**
             * If the socket is closed, reopen it if there are subscriptions 
             * and re-add the listeners
             */ 
            if (this.subscriptions.size > 0) {
                const url = this.getWebSocketUrl(this.api);
                this.socket = new WebSocket(url.toString());

                this.socket.addEventListener('open', () => {
                    for (const [messageType, handlers] of this.subscriptions.entries()) {
                        for (const handler of handlers) {
                            this.socket?.addEventListener('message', (event) => {
                                const message = JSON.parse(event.data) as OutboundWebSocketMessage;
                                if (message.MessageType === messageType) {
                                    handler(message);
                                }
                            });
                        }
                    }
                });
            } 
            // Else close and dispose
            else {
                this.socket?.close();
                this.socket = undefined;
            }
        });

        // If the last subscription has been removed, close the socket
        

        // Catalog all existing subscriptions for the given message types
        for (const messageType of messageTypes) {
            if (!this.subscriptions.has(messageType)) {
                this.subscriptions.set(messageType, []);
            }
            this.subscriptions.get(messageType)!.push(onMessage);
        }

        // Return an unsubscribe function
        return () => {
            for (const messageType of messageTypes) {
                const handlers = this.subscriptions.get(messageType);
                if (handlers) {
                    const index = handlers.indexOf(onMessage);
                    if (index !== -1) {
                        handlers.splice(index, 1);
                    }
                    if (handlers.length === 0) {
                        this.subscriptions.delete(messageType);
                    }
                }
            }

            // If there are no more subscriptions, close the socket
            if (this.subscriptions.size === 0) {
                this.socket?.close();
                this.socket = undefined;
            }
        }
    }
}

type SocketMessageHandler<T extends OutboundWebSocketMessage['MessageType']> = (message: Extract<OutboundWebSocketMessage, { MessageType: T }>) => void
