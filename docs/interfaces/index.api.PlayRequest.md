[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / [api](../modules/index.api.md) / PlayRequest

# Interface: PlayRequest

[index](../modules/index.md).[api](../modules/index.api.md).PlayRequest

Class PlayRequest.

**`export`**

**`interface`** PlayRequest

## Table of contents

### Properties

- [AudioStreamIndex](index.api.PlayRequest.md#audiostreamindex)
- [ControllingUserId](index.api.PlayRequest.md#controllinguserid)
- [ItemIds](index.api.PlayRequest.md#itemids)
- [MediaSourceId](index.api.PlayRequest.md#mediasourceid)
- [PlayCommand](index.api.PlayRequest.md#playcommand)
- [StartIndex](index.api.PlayRequest.md#startindex)
- [StartPositionTicks](index.api.PlayRequest.md#startpositionticks)
- [SubtitleStreamIndex](index.api.PlayRequest.md#subtitlestreamindex)

## Properties

### AudioStreamIndex

• `Optional` **AudioStreamIndex**: ``null`` \| `number`

**`memberof`** PlayRequest

#### Defined in

[generated-client/models/play-request.ts:59](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/play-request.ts#L59)

___

### ControllingUserId

• `Optional` **ControllingUserId**: `string`

Gets or sets the controlling user identifier.

**`memberof`** PlayRequest

#### Defined in

[generated-client/models/play-request.ts:47](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/play-request.ts#L47)

___

### ItemIds

• `Optional` **ItemIds**: ``null`` \| `string`[]

Gets or sets the item ids.

**`memberof`** PlayRequest

#### Defined in

[generated-client/models/play-request.ts:29](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/play-request.ts#L29)

___

### MediaSourceId

• `Optional` **MediaSourceId**: ``null`` \| `string`

**`memberof`** PlayRequest

#### Defined in

[generated-client/models/play-request.ts:65](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/play-request.ts#L65)

___

### PlayCommand

• `Optional` **PlayCommand**: [`PlayCommand`](../enums/index.api.PlayCommand.md)

**`memberof`** PlayRequest

#### Defined in

[generated-client/models/play-request.ts:41](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/play-request.ts#L41)

___

### StartIndex

• `Optional` **StartIndex**: ``null`` \| `number`

**`memberof`** PlayRequest

#### Defined in

[generated-client/models/play-request.ts:71](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/play-request.ts#L71)

___

### StartPositionTicks

• `Optional` **StartPositionTicks**: ``null`` \| `number`

Gets or sets the start position ticks that the first item should be played at.

**`memberof`** PlayRequest

#### Defined in

[generated-client/models/play-request.ts:35](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/play-request.ts#L35)

___

### SubtitleStreamIndex

• `Optional` **SubtitleStreamIndex**: ``null`` \| `number`

**`memberof`** PlayRequest

#### Defined in

[generated-client/models/play-request.ts:53](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/play-request.ts#L53)
