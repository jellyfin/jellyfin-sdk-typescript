[jellyfin-sdk-typescript](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / SessionApiSendPlaystateCommandRequest

# Interface: SessionApiSendPlaystateCommandRequest

[generated-client](../modules/generated_client.md).SessionApiSendPlaystateCommandRequest

Request parameters for sendPlaystateCommand operation in SessionApi.

**`export`**

**`interface`** SessionApiSendPlaystateCommandRequest

## Table of contents

### Properties

- [command](generated_client.SessionApiSendPlaystateCommandRequest.md#command)
- [controllingUserId](generated_client.SessionApiSendPlaystateCommandRequest.md#controllinguserid)
- [seekPositionTicks](generated_client.SessionApiSendPlaystateCommandRequest.md#seekpositionticks)
- [sessionId](generated_client.SessionApiSendPlaystateCommandRequest.md#sessionid)

## Properties

### command

• `Readonly` **command**: [`PlaystateCommand`](../enums/generated_client.PlaystateCommand.md)

The MediaBrowser.Model.Session.PlaystateCommand.

**`memberof`** SessionApiSendPlaystateCommand

#### Defined in

[generated-client/api/session-api.ts:1528](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/api/session-api.ts#L1528)

___

### controllingUserId

• `Optional` `Readonly` **controllingUserId**: `string`

The optional controlling user id.

**`memberof`** SessionApiSendPlaystateCommand

#### Defined in

[generated-client/api/session-api.ts:1542](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/api/session-api.ts#L1542)

___

### seekPositionTicks

• `Optional` `Readonly` **seekPositionTicks**: `number`

The optional position ticks.

**`memberof`** SessionApiSendPlaystateCommand

#### Defined in

[generated-client/api/session-api.ts:1535](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/api/session-api.ts#L1535)

___

### sessionId

• `Readonly` **sessionId**: `string`

The session id.

**`memberof`** SessionApiSendPlaystateCommand

#### Defined in

[generated-client/api/session-api.ts:1521](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/api/session-api.ts#L1521)
