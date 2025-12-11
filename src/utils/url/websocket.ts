import { HTTP_PROTOCOL, parseUrl, WS_PROTOCOL, WSS_PROTOCOL } from ".";
import { Api } from "../../api";


/**
 * 
 * @param basePath The {@link Api.basePath} to connect to
 */
export default function getWebSocketUrl(basePath: string) : URL {

    let protocol;

    const baseUrl = parseUrl(basePath)

    if (baseUrl.protocol.startsWith(HTTP_PROTOCOL)) 
        protocol = WS_PROTOCOL
    else 
        protocol = WSS_PROTOCOL

    return new URL(`${protocol}//${baseUrl.host}`)
}