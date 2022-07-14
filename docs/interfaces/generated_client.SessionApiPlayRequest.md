[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / SessionApiPlayRequest

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

[generated-client/api/session-api.ts:1320](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/session-api.ts#L1320)

___

### itemIds

• `Readonly` **itemIds**: `string`[]

The ids of the items to play, comma delimited.

**`memberof`** SessionApiPlay

#### Defined in

[generated-client/api/session-api.ts:1299](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/session-api.ts#L1299)

___

### mediaSourceId

• `Optional` `Readonly` **mediaSourceId**: `string`

Optional. The media source id.

**`memberof`** SessionApiPlay

#### Defined in

[generated-client/api/session-api.ts:1313](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/session-api.ts#L1313)

___

### playCommand

• `Readonly` **playCommand**: [`PlayCommand`](../enums/generated_client.PlayCommand.md)

The type of play command to issue (PlayNow, PlayNext, PlayLast). Clients who have not yet implemented play next and play last may play now.

**`memberof`** SessionApiPlay

#### Defined in

[generated-client/api/session-api.ts:1292](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/session-api.ts#L1292)

___

### sessionId

• `Readonly` **sessionId**: `string`

The session id.

**`memberof`** SessionApiPlay

#### Defined in

[generated-client/api/session-api.ts:1285](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/session-api.ts#L1285)

___

### startIndex

• `Optional` `Readonly` **startIndex**: `number`

Optional. The start index.

**`memberof`** SessionApiPlay

#### Defined in

[generated-client/api/session-api.ts:1334](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/session-api.ts#L1334)

___

### startPositionTicks

• `Optional` `Readonly` **startPositionTicks**: `number`

The starting position of the first item.

**`memberof`** SessionApiPlay

#### Defined in

[generated-client/api/session-api.ts:1306](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/session-api.ts#L1306)

___

### subtitleStreamIndex

• `Optional` `Readonly` **subtitleStreamIndex**: `number`

Optional. The index of the subtitle stream to play.

**`memberof`** SessionApiPlay

#### Defined in

[generated-client/api/session-api.ts:1327](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/session-api.ts#L1327)
