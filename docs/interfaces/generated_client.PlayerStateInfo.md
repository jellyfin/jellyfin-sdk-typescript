[jellyfin-sdk-typescript](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / PlayerStateInfo

# Interface: PlayerStateInfo

[generated-client](../modules/generated_client.md).PlayerStateInfo

**`export`**

**`interface`** PlayerStateInfo

## Table of contents

### Properties

- [AudioStreamIndex](generated_client.PlayerStateInfo.md#audiostreamindex)
- [CanSeek](generated_client.PlayerStateInfo.md#canseek)
- [IsMuted](generated_client.PlayerStateInfo.md#ismuted)
- [IsPaused](generated_client.PlayerStateInfo.md#ispaused)
- [MediaSourceId](generated_client.PlayerStateInfo.md#mediasourceid)
- [PlayMethod](generated_client.PlayerStateInfo.md#playmethod)
- [PositionTicks](generated_client.PlayerStateInfo.md#positionticks)
- [RepeatMode](generated_client.PlayerStateInfo.md#repeatmode)
- [SubtitleStreamIndex](generated_client.PlayerStateInfo.md#subtitlestreamindex)
- [VolumeLevel](generated_client.PlayerStateInfo.md#volumelevel)

## Properties

### AudioStreamIndex

• `Optional` **AudioStreamIndex**: ``null`` \| `number`

Gets or sets the index of the now playing audio stream.

**`memberof`** PlayerStateInfo

#### Defined in

[generated-client/models/player-state-info.ts:60](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/models/player-state-info.ts#L60)

___

### CanSeek

• `Optional` **CanSeek**: `boolean`

Gets or sets a value indicating whether this instance can seek.

**`memberof`** PlayerStateInfo

#### Defined in

[generated-client/models/player-state-info.ts:36](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/models/player-state-info.ts#L36)

___

### IsMuted

• `Optional` **IsMuted**: `boolean`

Gets or sets a value indicating whether this instance is muted.

**`memberof`** PlayerStateInfo

#### Defined in

[generated-client/models/player-state-info.ts:48](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/models/player-state-info.ts#L48)

___

### IsPaused

• `Optional` **IsPaused**: `boolean`

Gets or sets a value indicating whether this instance is paused.

**`memberof`** PlayerStateInfo

#### Defined in

[generated-client/models/player-state-info.ts:42](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/models/player-state-info.ts#L42)

___

### MediaSourceId

• `Optional` **MediaSourceId**: ``null`` \| `string`

Gets or sets the now playing media version identifier.

**`memberof`** PlayerStateInfo

#### Defined in

[generated-client/models/player-state-info.ts:72](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/models/player-state-info.ts#L72)

___

### PlayMethod

• `Optional` **PlayMethod**: [`PlayMethod`](../enums/generated_client.PlayMethod.md)

**`memberof`** PlayerStateInfo

#### Defined in

[generated-client/models/player-state-info.ts:78](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/models/player-state-info.ts#L78)

___

### PositionTicks

• `Optional` **PositionTicks**: ``null`` \| `number`

Gets or sets the now playing position ticks.

**`memberof`** PlayerStateInfo

#### Defined in

[generated-client/models/player-state-info.ts:30](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/models/player-state-info.ts#L30)

___

### RepeatMode

• `Optional` **RepeatMode**: [`RepeatMode`](../enums/generated_client.RepeatMode.md)

**`memberof`** PlayerStateInfo

#### Defined in

[generated-client/models/player-state-info.ts:84](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/models/player-state-info.ts#L84)

___

### SubtitleStreamIndex

• `Optional` **SubtitleStreamIndex**: ``null`` \| `number`

Gets or sets the index of the now playing subtitle stream.

**`memberof`** PlayerStateInfo

#### Defined in

[generated-client/models/player-state-info.ts:66](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/models/player-state-info.ts#L66)

___

### VolumeLevel

• `Optional` **VolumeLevel**: ``null`` \| `number`

Gets or sets the volume level.

**`memberof`** PlayerStateInfo

#### Defined in

[generated-client/models/player-state-info.ts:54](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/models/player-state-info.ts#L54)
