[jellyfin-sdk-typescript](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / SessionApiSendSystemCommandRequest

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

[generated-client/api/session-api.ts:1563](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/session-api.ts#L1563)

___

### sessionId

• `Readonly` **sessionId**: `string`

The session id.

**`memberof`** SessionApiSendSystemCommand

#### Defined in

[generated-client/api/session-api.ts:1556](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/session-api.ts#L1556)
