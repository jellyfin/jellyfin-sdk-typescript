[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / [api](../modules/index.api.md) / PlayerStateInfo

# Interface: PlayerStateInfo

[index](../modules/index.md).[api](../modules/index.api.md).PlayerStateInfo

**`export`**

**`interface`** PlayerStateInfo

## Table of contents

### Properties

- [AudioStreamIndex](index.api.PlayerStateInfo.md#audiostreamindex)
- [CanSeek](index.api.PlayerStateInfo.md#canseek)
- [IsMuted](index.api.PlayerStateInfo.md#ismuted)
- [IsPaused](index.api.PlayerStateInfo.md#ispaused)
- [MediaSourceId](index.api.PlayerStateInfo.md#mediasourceid)
- [PlayMethod](index.api.PlayerStateInfo.md#playmethod)
- [PositionTicks](index.api.PlayerStateInfo.md#positionticks)
- [RepeatMode](index.api.PlayerStateInfo.md#repeatmode)
- [SubtitleStreamIndex](index.api.PlayerStateInfo.md#subtitlestreamindex)
- [VolumeLevel](index.api.PlayerStateInfo.md#volumelevel)

## Properties

### AudioStreamIndex

• `Optional` **AudioStreamIndex**: ``null`` \| `number`

Gets or sets the index of the now playing audio stream.

**`memberof`** PlayerStateInfo

#### Defined in

[generated-client/models/player-state-info.ts:60](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/player-state-info.ts#L60)

___

### CanSeek

• `Optional` **CanSeek**: `boolean`

Gets or sets a value indicating whether this instance can seek.

**`memberof`** PlayerStateInfo

#### Defined in

[generated-client/models/player-state-info.ts:36](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/player-state-info.ts#L36)

___

### IsMuted

• `Optional` **IsMuted**: `boolean`

Gets or sets a value indicating whether this instance is muted.

**`memberof`** PlayerStateInfo

#### Defined in

[generated-client/models/player-state-info.ts:48](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/player-state-info.ts#L48)

___

### IsPaused

• `Optional` **IsPaused**: `boolean`

Gets or sets a value indicating whether this instance is paused.

**`memberof`** PlayerStateInfo

#### Defined in

[generated-client/models/player-state-info.ts:42](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/player-state-info.ts#L42)

___

### MediaSourceId

• `Optional` **MediaSourceId**: ``null`` \| `string`

Gets or sets the now playing media version identifier.

**`memberof`** PlayerStateInfo

#### Defined in

[generated-client/models/player-state-info.ts:72](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/player-state-info.ts#L72)

___

### PlayMethod

• `Optional` **PlayMethod**: [`PlayMethod`](../enums/index.api.PlayMethod.md)

**`memberof`** PlayerStateInfo

#### Defined in

[generated-client/models/player-state-info.ts:78](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/player-state-info.ts#L78)

___

### PositionTicks

• `Optional` **PositionTicks**: ``null`` \| `number`

Gets or sets the now playing position ticks.

**`memberof`** PlayerStateInfo

#### Defined in

[generated-client/models/player-state-info.ts:30](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/player-state-info.ts#L30)

___

### RepeatMode

• `Optional` **RepeatMode**: [`RepeatMode`](../enums/index.api.RepeatMode.md)

**`memberof`** PlayerStateInfo

#### Defined in

[generated-client/models/player-state-info.ts:84](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/player-state-info.ts#L84)

___

### SubtitleStreamIndex

• `Optional` **SubtitleStreamIndex**: ``null`` \| `number`

Gets or sets the index of the now playing subtitle stream.

**`memberof`** PlayerStateInfo

#### Defined in

[generated-client/models/player-state-info.ts:66](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/player-state-info.ts#L66)

___

### VolumeLevel

• `Optional` **VolumeLevel**: ``null`` \| `number`

Gets or sets the volume level.

**`memberof`** PlayerStateInfo

#### Defined in

[generated-client/models/player-state-info.ts:54](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/player-state-info.ts#L54)
