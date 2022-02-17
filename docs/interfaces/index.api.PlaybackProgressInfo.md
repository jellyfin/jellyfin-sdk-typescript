[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / [api](../modules/index.api.md) / PlaybackProgressInfo

# Interface: PlaybackProgressInfo

[index](../modules/index.md).[api](../modules/index.api.md).PlaybackProgressInfo

Class PlaybackProgressInfo.

**`export`**

**`interface`** PlaybackProgressInfo

## Table of contents

### Properties

- [AspectRatio](index.api.PlaybackProgressInfo.md#aspectratio)
- [AudioStreamIndex](index.api.PlaybackProgressInfo.md#audiostreamindex)
- [Brightness](index.api.PlaybackProgressInfo.md#brightness)
- [CanSeek](index.api.PlaybackProgressInfo.md#canseek)
- [IsMuted](index.api.PlaybackProgressInfo.md#ismuted)
- [IsPaused](index.api.PlaybackProgressInfo.md#ispaused)
- [Item](index.api.PlaybackProgressInfo.md#item)
- [ItemId](index.api.PlaybackProgressInfo.md#itemid)
- [LiveStreamId](index.api.PlaybackProgressInfo.md#livestreamid)
- [MediaSourceId](index.api.PlaybackProgressInfo.md#mediasourceid)
- [NowPlayingQueue](index.api.PlaybackProgressInfo.md#nowplayingqueue)
- [PlayMethod](index.api.PlaybackProgressInfo.md#playmethod)
- [PlaySessionId](index.api.PlaybackProgressInfo.md#playsessionid)
- [PlaybackStartTimeTicks](index.api.PlaybackProgressInfo.md#playbackstarttimeticks)
- [PlaylistItemId](index.api.PlaybackProgressInfo.md#playlistitemid)
- [PositionTicks](index.api.PlaybackProgressInfo.md#positionticks)
- [RepeatMode](index.api.PlaybackProgressInfo.md#repeatmode)
- [SessionId](index.api.PlaybackProgressInfo.md#sessionid)
- [SubtitleStreamIndex](index.api.PlaybackProgressInfo.md#subtitlestreamindex)
- [VolumeLevel](index.api.PlaybackProgressInfo.md#volumelevel)

## Properties

### AspectRatio

• `Optional` **AspectRatio**: ``null`` \| `string`

**`memberof`** PlaybackProgressInfo

#### Defined in

[generated-client/models/playback-progress-info.ts:110](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/playback-progress-info.ts#L110)

___

### AudioStreamIndex

• `Optional` **AudioStreamIndex**: ``null`` \| `number`

Gets or sets the index of the audio stream.

**`memberof`** PlaybackProgressInfo

#### Defined in

[generated-client/models/playback-progress-info.ts:62](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/playback-progress-info.ts#L62)

___

### Brightness

• `Optional` **Brightness**: ``null`` \| `number`

**`memberof`** PlaybackProgressInfo

#### Defined in

[generated-client/models/playback-progress-info.ts:104](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/playback-progress-info.ts#L104)

___

### CanSeek

• `Optional` **CanSeek**: `boolean`

Gets or sets a value indicating whether this instance can seek.

**`memberof`** PlaybackProgressInfo

#### Defined in

[generated-client/models/playback-progress-info.ts:32](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/playback-progress-info.ts#L32)

___

### IsMuted

• `Optional` **IsMuted**: `boolean`

Gets or sets a value indicating whether this instance is muted.

**`memberof`** PlaybackProgressInfo

#### Defined in

[generated-client/models/playback-progress-info.ts:80](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/playback-progress-info.ts#L80)

___

### IsPaused

• `Optional` **IsPaused**: `boolean`

Gets or sets a value indicating whether this instance is paused.

**`memberof`** PlaybackProgressInfo

#### Defined in

[generated-client/models/playback-progress-info.ts:74](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/playback-progress-info.ts#L74)

___

### Item

• `Optional` **Item**: [`BaseItemDto`](index.api.BaseItemDto.md)

**`memberof`** PlaybackProgressInfo

#### Defined in

[generated-client/models/playback-progress-info.ts:38](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/playback-progress-info.ts#L38)

___

### ItemId

• `Optional` **ItemId**: `string`

Gets or sets the item identifier.

**`memberof`** PlaybackProgressInfo

#### Defined in

[generated-client/models/playback-progress-info.ts:44](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/playback-progress-info.ts#L44)

___

### LiveStreamId

• `Optional` **LiveStreamId**: ``null`` \| `string`

Gets or sets the live stream identifier.

**`memberof`** PlaybackProgressInfo

#### Defined in

[generated-client/models/playback-progress-info.ts:122](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/playback-progress-info.ts#L122)

___

### MediaSourceId

• `Optional` **MediaSourceId**: ``null`` \| `string`

Gets or sets the media version identifier.

**`memberof`** PlaybackProgressInfo

#### Defined in

[generated-client/models/playback-progress-info.ts:56](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/playback-progress-info.ts#L56)

___

### NowPlayingQueue

• `Optional` **NowPlayingQueue**: ``null`` \| [`QueueItem`](index.api.QueueItem.md)[]

**`memberof`** PlaybackProgressInfo

#### Defined in

[generated-client/models/playback-progress-info.ts:140](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/playback-progress-info.ts#L140)

___

### PlayMethod

• `Optional` **PlayMethod**: [`PlayMethod`](../enums/index.api.PlayMethod.md)

**`memberof`** PlaybackProgressInfo

#### Defined in

[generated-client/models/playback-progress-info.ts:116](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/playback-progress-info.ts#L116)

___

### PlaySessionId

• `Optional` **PlaySessionId**: ``null`` \| `string`

Gets or sets the play session identifier.

**`memberof`** PlaybackProgressInfo

#### Defined in

[generated-client/models/playback-progress-info.ts:128](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/playback-progress-info.ts#L128)

___

### PlaybackStartTimeTicks

• `Optional` **PlaybackStartTimeTicks**: ``null`` \| `number`

**`memberof`** PlaybackProgressInfo

#### Defined in

[generated-client/models/playback-progress-info.ts:92](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/playback-progress-info.ts#L92)

___

### PlaylistItemId

• `Optional` **PlaylistItemId**: ``null`` \| `string`

**`memberof`** PlaybackProgressInfo

#### Defined in

[generated-client/models/playback-progress-info.ts:146](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/playback-progress-info.ts#L146)

___

### PositionTicks

• `Optional` **PositionTicks**: ``null`` \| `number`

Gets or sets the position ticks.

**`memberof`** PlaybackProgressInfo

#### Defined in

[generated-client/models/playback-progress-info.ts:86](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/playback-progress-info.ts#L86)

___

### RepeatMode

• `Optional` **RepeatMode**: [`RepeatMode`](../enums/index.api.RepeatMode.md)

**`memberof`** PlaybackProgressInfo

#### Defined in

[generated-client/models/playback-progress-info.ts:134](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/playback-progress-info.ts#L134)

___

### SessionId

• `Optional` **SessionId**: ``null`` \| `string`

Gets or sets the session id.

**`memberof`** PlaybackProgressInfo

#### Defined in

[generated-client/models/playback-progress-info.ts:50](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/playback-progress-info.ts#L50)

___

### SubtitleStreamIndex

• `Optional` **SubtitleStreamIndex**: ``null`` \| `number`

Gets or sets the index of the subtitle stream.

**`memberof`** PlaybackProgressInfo

#### Defined in

[generated-client/models/playback-progress-info.ts:68](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/playback-progress-info.ts#L68)

___

### VolumeLevel

• `Optional` **VolumeLevel**: ``null`` \| `number`

Gets or sets the volume level.

**`memberof`** PlaybackProgressInfo

#### Defined in

[generated-client/models/playback-progress-info.ts:98](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/playback-progress-info.ts#L98)
