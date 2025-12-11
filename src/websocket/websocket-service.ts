import { Api } from "../api";
import { SessionsMessage } from "../generated-client";
import getWebSocketUrl from "../utils/url/websocket";


/**
 * A class used for managing the lifecycle of websocket connections
 * to Jellyfin
 */
export class WebSocketService {
    
    private api;
    private socket : WebSocket | undefined

    constructor(api : Api) {
        this.api = api
    }

    private shouldOpenWebSocket(accessToken : string) { 

        const socketClosed = this.socket === undefined || this.socket.readyState === WebSocket.CLOSED

        // TODO: Add validation around accessToken
        return socketClosed && accessToken.length > 0
    }

    /**
     * Ensures a websocket connection to the server is active by establishing a new connection
     * if a connection doesn't already exist or the previous connection is closed.
     * 
     * Depends on the {@link Api.accessToken} being valid and
     * populated.
     * 
     * @param onOpen An optional callback to run when the socket is opened
     * @param onClose An optional callback to run when the socket is closed
     */
    ensureWebSocket(
        onOpen?: (e?: Event) => Promise<void>, 
        onClose?: (e?: CloseEvent) => Promise<void>
    ) {

        if (this.shouldOpenWebSocket(this.api.accessToken)) {

            const webSocketUrl = getWebSocketUrl(this.api)
            
            this.socket = new WebSocket(webSocketUrl)
        }

        this.socket.onopen = onOpen
        this.socket.onclose = onClose
    }

    sendMessage(message: SessionsMessage) {
        this.socket.send(JSON.stringify(message))
    } 
}