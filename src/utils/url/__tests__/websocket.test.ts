import { describe, expect, it } from "vitest";

import { Api } from "../../../api";
import getWebSocketUrl from '../websocket';

const httpApi = new Api('http://example.com', { name: 'Vitest', version: '0.0.0' }, { id: '123', name: 'Vitest' }, 'test');
const httpsApi = new Api('https://example.com', { name: 'Vitest', version: '0.0.0' }, { id: '123', name: 'Vitest' }, 'test');

describe('Websocket URLs', () => {
    it('should construct URLs properly', () => {
        expect(getWebSocketUrl(httpApi)).toStrictEqual(new URL('ws://example.com/socket?api_key=test'))
        expect(getWebSocketUrl(httpsApi)).toStrictEqual(new URL('wss://example.com/socket?api_key=test'))
    });
});