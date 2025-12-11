import { HTTP_PROTOCOL, parseUrl, WS_PROTOCOL, WSS_PROTOCOL } from ".";
import { Api } from "../../api";


/**
 * 
 * @param param0 The authenticated {@link Api} instance
 */
export default function getWebSocketUrl({ accessToken, basePath } : Api) : URL {

    let protocol;

    const baseUrl = parseUrl(basePath)

    if (baseUrl.protocol.startsWith(HTTP_PROTOCOL)) protocol = WS_PROTOCOL
    else protocol = WSS_PROTOCOL

    let url = new URL(`${protocol}//${baseUrl.host}/socket`)
    url.searchParams.append("api_key", accessToken)

    return url
}