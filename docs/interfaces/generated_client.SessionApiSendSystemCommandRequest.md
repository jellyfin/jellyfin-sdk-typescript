[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / SessionApiSendSystemCommandRequest

# Interface: SessionApiSendSystemCommandRequest

[generated-client](../modules/generated_client.md).SessionApiSendSystemCommandRequest

Request parameters for sendSystemCommand operation in SessionApi.

**`export`**

**`interface`** SessionApiSendSystemCommandRequest

## Table of contents

### Properties

- [command](generated_client.SessionApiSendSystemCommandRequest.md#command)
- [sessionId](generated_client.SessionApiSendSystemCommandRequest.md#sessionid)

## Properties

### command

• `Readonly` **command**: [`GeneralCommandType`](../enums/generated_client.GeneralCommandType.md)

The command to send.

**`memberof`** SessionApiSendSystemCommand

#### Defined in

[generated-client/api/session-api.ts:1565](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/session-api.ts#L1565)

___

### sessionId

• `Readonly` **sessionId**: `string`

The session id.

**`memberof`** SessionApiSendSystemCommand

#### Defined in

[generated-client/api/session-api.ts:1558](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/session-api.ts#L1558)
