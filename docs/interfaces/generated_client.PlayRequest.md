[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / PlayRequest

# Interface: PlayRequest

[generated-client](../modules/generated_client.md).PlayRequest

Class PlayRequest.

**`export`**

**`interface`** PlayRequest

## Table of contents

### Properties

- [AudioStreamIndex](generated_client.PlayRequest.md#audiostreamindex)
- [ControllingUserId](generated_client.PlayRequest.md#controllinguserid)
- [ItemIds](generated_client.PlayRequest.md#itemids)
- [MediaSourceId](generated_client.PlayRequest.md#mediasourceid)
- [PlayCommand](generated_client.PlayRequest.md#playcommand)
- [StartIndex](generated_client.PlayRequest.md#startindex)
- [StartPositionTicks](generated_client.PlayRequest.md#startpositionticks)
- [SubtitleStreamIndex](generated_client.PlayRequest.md#subtitlestreamindex)

## Properties

### AudioStreamIndex

• `Optional` **AudioStreamIndex**: ``null`` \| `number`

**`memberof`** PlayRequest

#### Defined in

[generated-client/models/play-request.ts:59](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/models/play-request.ts#L59)

___

### ControllingUserId

• `Optional` **ControllingUserId**: `string`

Gets or sets the controlling user identifier.

**`memberof`** PlayRequest

#### Defined in

[generated-client/models/play-request.ts:47](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/models/play-request.ts#L47)

___

### ItemIds

• `Optional` **ItemIds**: ``null`` \| `string`[]

Gets or sets the item ids.

**`memberof`** PlayRequest

#### Defined in

[generated-client/models/play-request.ts:29](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/models/play-request.ts#L29)

___

### MediaSourceId

• `Optional` **MediaSourceId**: ``null`` \| `string`

**`memberof`** PlayRequest

#### Defined in

[generated-client/models/play-request.ts:65](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/models/play-request.ts#L65)

___

### PlayCommand

• `Optional` **PlayCommand**: [`PlayCommand`](../enums/generated_client.PlayCommand.md)

**`memberof`** PlayRequest

#### Defined in

[generated-client/models/play-request.ts:41](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/models/play-request.ts#L41)

___

### StartIndex

• `Optional` **StartIndex**: ``null`` \| `number`

**`memberof`** PlayRequest

#### Defined in

[generated-client/models/play-request.ts:71](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/models/play-request.ts#L71)

___

### StartPositionTicks

• `Optional` **StartPositionTicks**: ``null`` \| `number`

Gets or sets the start position ticks that the first item should be played at.

**`memberof`** PlayRequest

#### Defined in

[generated-client/models/play-request.ts:35](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/models/play-request.ts#L35)

___

### SubtitleStreamIndex

• `Optional` **SubtitleStreamIndex**: ``null`` \| `number`

**`memberof`** PlayRequest

#### Defined in

[generated-client/models/play-request.ts:53](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/models/play-request.ts#L53)
