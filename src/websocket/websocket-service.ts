import { Api, AUTHORIZATION_PARAMETER } from "../api";
import { InboundWebSocketMessage, OutboundWebSocketMessage } from "../generated-client";
import { SUBSCRIPTION_REGISTRY } from "./constants";
import { SocketMessageHandler } from "./types";


/**
 * A class used for managing the lifecycle of websocket connections
 * to Jellyfin
 */
export class WebSocketService {
    
    /**
     * The URL to connect to, supplied by the {@link Api} instance
     */
    private url : URL;

    /**
     * The active websocket connection, if one exists
     */
    private socket : WebSocket | undefined;

    /**
     * A map of message type subscriptions to their respective handlers
     */
    private subscriptions: Map<string, SocketMessageHandler<any>[]> = new Map();

    /**
     * Constructs a new instance of the {@link WebSocketService}
     * 
     * Uses the authenticated {@link Api} instance for constructing a URI
     * that will be used to establish socket connections.
     * 
     * @param api The authenticated {@link Api} instance
     */
    constructor(api: Api) {
        this.url = new URL(
            api.getUri("socket", { [AUTHORIZATION_PARAMETER]: api.accessToken })
                .replace(/^http/, "ws")
        )
    }

    private initSocket() {
        this.socket = new WebSocket(this.url.toString());

        this.socket.onopen = () => {
            // Attach all subscriptions, sending start messages as needed
            for (const type of this.subscriptions.keys()) {
                const mapping = SUBSCRIPTION_REGISTRY[type as OutboundWebSocketMessage['MessageType']];
                if (mapping) this.sendMessage(mapping.createStartMessage());
            }
        };

        this.socket.onmessage = (event) => {
            const data = JSON.parse(event.data) as OutboundWebSocketMessage;
            const handlers = this.subscriptions.get(data.MessageType);
            handlers?.forEach(handler => handler(data));
        };

        this.socket.onclose = () => {
            // Reconnect after 5 seconds
            if (this.subscriptions.size > 0) {
                setTimeout(() => this.initSocket(), 5000);
            }
        };
    }

    private sendMessage(message: InboundWebSocketMessage) {
        if (this.socket?.readyState === WebSocket.OPEN) {
            this.socket.send(JSON.stringify(message))
        }
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
        if (!this.socket || this.socket.readyState === WebSocket.CLOSED) {
            this.initSocket();
        }

        for (const type of messageTypes) {
            const isNewType = !this.subscriptions.has(type);
            
            if (isNewType) {
                this.subscriptions.set(type, []);
 
                // Send start message as needed, depending on the messageType
                const mapping = SUBSCRIPTION_REGISTRY[type];
                if (mapping && this.socket?.readyState === WebSocket.OPEN) {
                    this.sendMessage(mapping.createStartMessage());
                }
            }
            
            this.subscriptions.get(type)!.push(onMessage);
        }

        // Return an unsubscription function
        return () => {
            for (const type of messageTypes) {
                const handlers = this.subscriptions.get(type);
                if (!handlers) continue;

                const index = handlers.indexOf(onMessage);
                if (index !== -1) handlers.splice(index, 1);

                if (handlers.length === 0) {
                    this.subscriptions.delete(type);
                    // Send Stop Message
                    const mapping = SUBSCRIPTION_REGISTRY[type];
                    if (mapping) this.sendMessage(mapping.createStopMessage());
                }
            }

            if (this.subscriptions.size === 0) {
                this.socket?.close();
            }
        };
    }
}