[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / SessionApiSendMessageCommandRequest

# Interface: SessionApiSendMessageCommandRequest

[generated-client](../modules/generated_client.md).SessionApiSendMessageCommandRequest

Request parameters for sendMessageCommand operation in SessionApi.

**`export`**

**`interface`** SessionApiSendMessageCommandRequest

## Table of contents

### Properties

- [messageCommand](generated_client.SessionApiSendMessageCommandRequest.md#messagecommand)
- [sessionId](generated_client.SessionApiSendMessageCommandRequest.md#sessionid)

## Properties

### messageCommand

• `Readonly` **messageCommand**: [`MessageCommand`](generated_client.MessageCommand.md)

The MediaBrowser.Model.Session.MessageCommand object containing Header, Message Text, and TimeoutMs.

**`memberof`** SessionApiSendMessageCommand

#### Defined in

[generated-client/api/session-api.ts:1507](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/session-api.ts#L1507)

___

### sessionId

• `Readonly` **sessionId**: `string`

The session id.

**`memberof`** SessionApiSendMessageCommand

#### Defined in

[generated-client/api/session-api.ts:1500](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/session-api.ts#L1500)
