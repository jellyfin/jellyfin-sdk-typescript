[jellyfin-sdk-typescript](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / SessionApiPlayRequest

# Interface: SessionApiPlayRequest

[generated-client](../modules/generated_client.md).SessionApiPlayRequest

Request parameters for play operation in SessionApi.

**`export`**

**`interface`** SessionApiPlayRequest

## Table of contents

### Properties

- [audioStreamIndex](generated_client.SessionApiPlayRequest.md#audiostreamindex)
- [itemIds](generated_client.SessionApiPlayRequest.md#itemids)
- [mediaSourceId](generated_client.SessionApiPlayRequest.md#mediasourceid)
- [playCommand](generated_client.SessionApiPlayRequest.md#playcommand)
- [sessionId](generated_client.SessionApiPlayRequest.md#sessionid)
- [startIndex](generated_client.SessionApiPlayRequest.md#startindex)
- [startPositionTicks](generated_client.SessionApiPlayRequest.md#startpositionticks)
- [subtitleStreamIndex](generated_client.SessionApiPlayRequest.md#subtitlestreamindex)

## Properties

### audioStreamIndex

• `Optional` `Readonly` **audioStreamIndex**: `number`

Optional. The index of the audio stream to play.

**`memberof`** SessionApiPlay

#### Defined in

[generated-client/api/session-api.ts:1318](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/session-api.ts#L1318)

___

### itemIds

• `Readonly` **itemIds**: `string`[]

The ids of the items to play, comma delimited.

**`memberof`** SessionApiPlay

#### Defined in

[generated-client/api/session-api.ts:1297](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/session-api.ts#L1297)

___

### mediaSourceId

• `Optional` `Readonly` **mediaSourceId**: `string`

Optional. The media source id.

**`memberof`** SessionApiPlay

#### Defined in

[generated-client/api/session-api.ts:1311](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/session-api.ts#L1311)

___

### playCommand

• `Readonly` **playCommand**: [`PlayCommand`](../enums/generated_client.PlayCommand.md)

The type of play command to issue (PlayNow, PlayNext, PlayLast). Clients who have not yet implemented play next and play last may play now.

**`memberof`** SessionApiPlay

#### Defined in

[generated-client/api/session-api.ts:1290](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/session-api.ts#L1290)

___

### sessionId

• `Readonly` **sessionId**: `string`

The session id.

**`memberof`** SessionApiPlay

#### Defined in

[generated-client/api/session-api.ts:1283](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/session-api.ts#L1283)

___

### startIndex

• `Optional` `Readonly` **startIndex**: `number`

Optional. The start index.

**`memberof`** SessionApiPlay

#### Defined in

[generated-client/api/session-api.ts:1332](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/session-api.ts#L1332)

___

### startPositionTicks

• `Optional` `Readonly` **startPositionTicks**: `number`

The starting position of the first item.

**`memberof`** SessionApiPlay

#### Defined in

[generated-client/api/session-api.ts:1304](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/session-api.ts#L1304)

___

### subtitleStreamIndex

• `Optional` `Readonly` **subtitleStreamIndex**: `number`

Optional. The index of the subtitle stream to play.

**`memberof`** SessionApiPlay

#### Defined in

[generated-client/api/session-api.ts:1325](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/session-api.ts#L1325)
