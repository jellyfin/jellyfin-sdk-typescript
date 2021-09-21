[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / SessionApiSendGeneralCommandRequest

# Interface: SessionApiSendGeneralCommandRequest

[generated-client](../modules/generated_client.md).SessionApiSendGeneralCommandRequest

Request parameters for sendGeneralCommand operation in SessionApi.

**`export`**

**`interface`** SessionApiSendGeneralCommandRequest

## Table of contents

### Properties

- [command](generated_client.SessionApiSendGeneralCommandRequest.md#command)
- [sessionId](generated_client.SessionApiSendGeneralCommandRequest.md#sessionid)

## Properties

### command

• `Readonly` **command**: [`GeneralCommandType`](../enums/generated_client.GeneralCommandType.md)

The command to send.

**`memberof`** SessionApiSendGeneralCommand

#### Defined in

[generated-client/api/session-api.ts:1486](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/session-api.ts#L1486)

___

### sessionId

• `Readonly` **sessionId**: `string`

The session id.

**`memberof`** SessionApiSendGeneralCommand

#### Defined in

[generated-client/api/session-api.ts:1479](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/session-api.ts#L1479)
