import { afterEach, beforeEach, describe, it, vi } from "vitest";
import { expect } from "vitest";
import { WebSocketService } from "../websocket-service";

// Mock WebSocket
global.WebSocket = vi.fn() as any;

// Mock Api
vi.mock("../../api");

describe("WebSocketService", () => {
    let service: WebSocketService;
    let mockApi: any;
    let mockWebSocket: any;

    beforeEach(() => {
        vi.clearAllMocks();

        // Setup mock Api
        mockApi = {
            getUri: vi.fn((endpoint: string, params: any) => {
                return `http://example.com/api/${endpoint}?token=${params['X-MediaBrowser-Token']}`;
            }),
            accessToken: "test-token-123",
        };

        // Setup mock WebSocket
        mockWebSocket = {
            readyState: WebSocket.CONNECTING,
            send: vi.fn(),
            close: vi.fn(),
            onopen: null,
            onmessage: null,
            onclose: null,
        };

        (global.WebSocket as any).mockImplementation(() => mockWebSocket);

        service = new WebSocketService(mockApi);
    });

    afterEach(() => {
        vi.clearAllMocks();
    });

    describe("constructor", () => {
        it("should initialize with an Api instance", () => {
            expect(service).toBeDefined();
        });

        it("should have no socket initially", () => {
            expect(service.getSocketStatus()).toBeUndefined();
        });
    });

    describe("getSocketStatus()", () => {
        it("should return undefined when no socket exists", () => {
            expect(service.getSocketStatus()).toBeUndefined();
        });

        it("should return socket readyState when socket exists", () => {
            service.subscribe(["Sessions"], () => {});
            mockWebSocket.readyState = WebSocket.OPEN;
            expect(service.getSocketStatus()).toBe(WebSocket.OPEN);
        });
    });

    describe("subscribe()", () => {
        it("should create a websocket connection if one does not exist", () => {
            service.subscribe(["Sessions"], () => {});
            expect(global.WebSocket).toHaveBeenCalled();
        });

        it("should register a handler for a message type", () => {
            const handler = vi.fn();
            service.subscribe(["Sessions"], handler);

            // Simulate receiving a message
            mockWebSocket.readyState = WebSocket.OPEN;
            const message = { MessageType: "Sessions" } as any;
            mockWebSocket.onmessage({ data: JSON.stringify(message) });

            expect(handler).toHaveBeenCalledWith(message);
        });

        it("should send a start message when subscribing to a registered type", () => {
            mockWebSocket.readyState = WebSocket.OPEN;
            service.subscribe(["Sessions"], () => {});

            expect(mockWebSocket.send).toHaveBeenCalledWith(
                JSON.stringify({ MessageType: "SessionsStart" })
            );
        });

        it("should support multiple message types in one subscription", () => {
            const handler = vi.fn();
            mockWebSocket.readyState = WebSocket.OPEN;
            
            service.subscribe(["Sessions", "ActivityLogEntry"], handler);

            // Verify both start messages sent
            const calls = mockWebSocket.send.mock.calls;
            expect(calls.length).toBeGreaterThanOrEqual(2);
        });

        it("should support multiple handlers for the same message type", () => {
            const handler1 = vi.fn();
            const handler2 = vi.fn();
            
            service.subscribe(["Sessions"], handler1);
            service.subscribe(["Sessions"], handler2);

            mockWebSocket.readyState = WebSocket.OPEN;
            const message = { MessageType: "Sessions" } as any;
            mockWebSocket.onmessage({ data: JSON.stringify(message) });

            expect(handler1).toHaveBeenCalledWith(message);
            expect(handler2).toHaveBeenCalledWith(message);
        });

        it("should return an unsubscribe function", () => {
            const unsubscribe = service.subscribe(["Sessions"], () => {});
            expect(typeof unsubscribe).toBe("function");
        });
    });

    describe("unsubscribe()", () => {
        it("should remove a handler when invoked", () => {
            const handler = vi.fn();
            const unsubscribe = service.subscribe(["Sessions"], handler);
            mockWebSocket.readyState = WebSocket.OPEN;

            unsubscribe();

            const message = { MessageType: "Sessions" } as any;
            mockWebSocket.onmessage({ data: JSON.stringify(message) });

            expect(handler).not.toHaveBeenCalled();
        });

        it("should send a stop message when last handler is removed", () => {
            mockWebSocket.readyState = WebSocket.OPEN;
            const unsubscribe = service.subscribe(["Sessions"], () => {});

            mockWebSocket.send.mockClear();
            unsubscribe();

            expect(mockWebSocket.send).toHaveBeenCalledWith(
                JSON.stringify({ MessageType: "SessionsStop" })
            );
        });

        it("should close socket when all subscriptions are removed", () => {
            const unsubscribe = service.subscribe(["Sessions"], () => {});
            mockWebSocket.readyState = WebSocket.OPEN;

            unsubscribe();

            expect(mockWebSocket.close).toHaveBeenCalled();
        });

        it("should not close socket if other subscriptions remain", () => {
            const unsubscribe1 = service.subscribe(["Sessions"], () => {});
            service.subscribe(["ActivityLogEntry"], () => {});
            mockWebSocket.readyState = WebSocket.OPEN;
            mockWebSocket.close.mockClear();

            unsubscribe1();

            expect(mockWebSocket.close).not.toHaveBeenCalled();
        });
    });

    describe("websocket lifecycle", () => {
        it("should send queued start messages when socket opens", () => {
            mockWebSocket.readyState = WebSocket.CONNECTING;
            service.subscribe(["Sessions"], () => {});

            // Simulate socket opening
            mockWebSocket.readyState = WebSocket.OPEN;
            mockWebSocket.onopen();

            expect(mockWebSocket.send).toHaveBeenCalledWith(
                JSON.stringify({ MessageType: "SessionsStart" })
            );
        });

        it("should reconnect after 5 seconds on close", async () => {
            vi.useFakeTimers();
            service.subscribe(["Sessions"], () => {});
            mockWebSocket.readyState = WebSocket.CLOSED;

            mockWebSocket.onclose();

            vi.advanceTimersByTime(5000);

            expect(global.WebSocket).toHaveBeenCalledTimes(2); // Once for initial, once for reconnect

            vi.useRealTimers();
        });

        it("should not reconnect if no subscriptions exist", async () => {
            vi.useFakeTimers();
            const unsubscribe = service.subscribe(["Sessions"], () => {});
            
            unsubscribe();
            mockWebSocket.readyState = WebSocket.CLOSED;
            
            mockWebSocket.onclose();
            vi.advanceTimersByTime(5000);

            expect(global.WebSocket).toHaveBeenCalledTimes(1);

            vi.useRealTimers();
        });
    });

    describe("message parsing", () => {
        it("should parse JSON messages correctly", () => {
            const handler = vi.fn();
            mockWebSocket.readyState = WebSocket.OPEN;
            service.subscribe(["Sessions"], handler);

            const message = {
                MessageType: "Sessions",
                data: { userId: "123" },
            } as any;

            mockWebSocket.onmessage({
                data: JSON.stringify(message),
            });

            expect(handler).toHaveBeenCalledWith(message);
        });

        it("should call multiple handlers for the same message", () => {
            const handler1 = vi.fn();
            const handler2 = vi.fn();
            mockWebSocket.readyState = WebSocket.OPEN;

            service.subscribe(["Sessions"], handler1);
            service.subscribe(["Sessions"], handler2);

            const message = { MessageType: "Sessions" } as any;
            mockWebSocket.onmessage({ data: JSON.stringify(message) });

            expect(handler1).toHaveBeenCalledWith(message);
            expect(handler2).toHaveBeenCalledWith(message);
        });
    });
});