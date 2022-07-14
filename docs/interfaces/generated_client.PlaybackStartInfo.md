[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / PlaybackStartInfo

# Interface: PlaybackStartInfo

[generated-client](../modules/generated_client.md).PlaybackStartInfo

Class PlaybackStartInfo.

**`export`**

**`interface`** PlaybackStartInfo

## Table of contents

### Properties

- [AspectRatio](generated_client.PlaybackStartInfo.md#aspectratio)
- [AudioStreamIndex](generated_client.PlaybackStartInfo.md#audiostreamindex)
- [Brightness](generated_client.PlaybackStartInfo.md#brightness)
- [CanSeek](generated_client.PlaybackStartInfo.md#canseek)
- [IsMuted](generated_client.PlaybackStartInfo.md#ismuted)
- [IsPaused](generated_client.PlaybackStartInfo.md#ispaused)
- [Item](generated_client.PlaybackStartInfo.md#item)
- [ItemId](generated_client.PlaybackStartInfo.md#itemid)
- [LiveStreamId](generated_client.PlaybackStartInfo.md#livestreamid)
- [MediaSourceId](generated_client.PlaybackStartInfo.md#mediasourceid)
- [NowPlayingQueue](generated_client.PlaybackStartInfo.md#nowplayingqueue)
- [PlayMethod](generated_client.PlaybackStartInfo.md#playmethod)
- [PlaySessionId](generated_client.PlaybackStartInfo.md#playsessionid)
- [PlaybackStartTimeTicks](generated_client.PlaybackStartInfo.md#playbackstarttimeticks)
- [PlaylistItemId](generated_client.PlaybackStartInfo.md#playlistitemid)
- [PositionTicks](generated_client.PlaybackStartInfo.md#positionticks)
- [RepeatMode](generated_client.PlaybackStartInfo.md#repeatmode)
- [SessionId](generated_client.PlaybackStartInfo.md#sessionid)
- [SubtitleStreamIndex](generated_client.PlaybackStartInfo.md#subtitlestreamindex)
- [VolumeLevel](generated_client.PlaybackStartInfo.md#volumelevel)

## Properties

### AspectRatio

• `Optional` **AspectRatio**: ``null`` \| `string`

**`memberof`** PlaybackStartInfo

#### Defined in

[generated-client/models/playback-start-info.ts:110](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/models/playback-start-info.ts#L110)

___

### AudioStreamIndex

• `Optional` **AudioStreamIndex**: ``null`` \| `number`

Gets or sets the index of the audio stream.

**`memberof`** PlaybackStartInfo

#### Defined in

[generated-client/models/playback-start-info.ts:62](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/models/playback-start-info.ts#L62)

___

### Brightness

• `Optional` **Brightness**: ``null`` \| `number`

**`memberof`** PlaybackStartInfo

#### Defined in

[generated-client/models/playback-start-info.ts:104](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/models/playback-start-info.ts#L104)

___

### CanSeek

• `Optional` **CanSeek**: `boolean`

Gets or sets a value indicating whether this instance can seek.

**`memberof`** PlaybackStartInfo

#### Defined in

[generated-client/models/playback-start-info.ts:32](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/models/playback-start-info.ts#L32)

___

### IsMuted

• `Optional` **IsMuted**: `boolean`

Gets or sets a value indicating whether this instance is muted.

**`memberof`** PlaybackStartInfo

#### Defined in

[generated-client/models/playback-start-info.ts:80](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/models/playback-start-info.ts#L80)

___

### IsPaused

• `Optional` **IsPaused**: `boolean`

Gets or sets a value indicating whether this instance is paused.

**`memberof`** PlaybackStartInfo

#### Defined in

[generated-client/models/playback-start-info.ts:74](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/models/playback-start-info.ts#L74)

___

### Item

• `Optional` **Item**: [`BaseItemDto`](generated_client.BaseItemDto.md)

**`memberof`** PlaybackStartInfo

#### Defined in

[generated-client/models/playback-start-info.ts:38](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/models/playback-start-info.ts#L38)

___

### ItemId

• `Optional` **ItemId**: `string`

Gets or sets the item identifier.

**`memberof`** PlaybackStartInfo

#### Defined in

[generated-client/models/playback-start-info.ts:44](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/models/playback-start-info.ts#L44)

___

### LiveStreamId

• `Optional` **LiveStreamId**: ``null`` \| `string`

Gets or sets the live stream identifier.

**`memberof`** PlaybackStartInfo

#### Defined in

[generated-client/models/playback-start-info.ts:122](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/models/playback-start-info.ts#L122)

___

### MediaSourceId

• `Optional` **MediaSourceId**: ``null`` \| `string`

Gets or sets the media version identifier.

**`memberof`** PlaybackStartInfo

#### Defined in

[generated-client/models/playback-start-info.ts:56](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/models/playback-start-info.ts#L56)

___

### NowPlayingQueue

• `Optional` **NowPlayingQueue**: ``null`` \| [`QueueItem`](generated_client.QueueItem.md)[]

**`memberof`** PlaybackStartInfo

#### Defined in

[generated-client/models/playback-start-info.ts:140](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/models/playback-start-info.ts#L140)

___

### PlayMethod

• `Optional` **PlayMethod**: [`PlayMethod`](../enums/generated_client.PlayMethod.md)

**`memberof`** PlaybackStartInfo

#### Defined in

[generated-client/models/playback-start-info.ts:116](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/models/playback-start-info.ts#L116)

___

### PlaySessionId

• `Optional` **PlaySessionId**: ``null`` \| `string`

Gets or sets the play session identifier.

**`memberof`** PlaybackStartInfo

#### Defined in

[generated-client/models/playback-start-info.ts:128](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/models/playback-start-info.ts#L128)

___

### PlaybackStartTimeTicks

• `Optional` **PlaybackStartTimeTicks**: ``null`` \| `number`

**`memberof`** PlaybackStartInfo

#### Defined in

[generated-client/models/playback-start-info.ts:92](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/models/playback-start-info.ts#L92)

___

### PlaylistItemId

• `Optional` **PlaylistItemId**: ``null`` \| `string`

**`memberof`** PlaybackStartInfo

#### Defined in

[generated-client/models/playback-start-info.ts:146](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/models/playback-start-info.ts#L146)

___

### PositionTicks

• `Optional` **PositionTicks**: ``null`` \| `number`

Gets or sets the position ticks.

**`memberof`** PlaybackStartInfo

#### Defined in

[generated-client/models/playback-start-info.ts:86](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/models/playback-start-info.ts#L86)

___

### RepeatMode

• `Optional` **RepeatMode**: [`RepeatMode`](../enums/generated_client.RepeatMode.md)

**`memberof`** PlaybackStartInfo

#### Defined in

[generated-client/models/playback-start-info.ts:134](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/models/playback-start-info.ts#L134)

___

### SessionId

• `Optional` **SessionId**: ``null`` \| `string`

Gets or sets the session id.

**`memberof`** PlaybackStartInfo

#### Defined in

[generated-client/models/playback-start-info.ts:50](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/models/playback-start-info.ts#L50)

___

### SubtitleStreamIndex

• `Optional` **SubtitleStreamIndex**: ``null`` \| `number`

Gets or sets the index of the subtitle stream.

**`memberof`** PlaybackStartInfo

#### Defined in

[generated-client/models/playback-start-info.ts:68](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/models/playback-start-info.ts#L68)

___

### VolumeLevel

• `Optional` **VolumeLevel**: ``null`` \| `number`

Gets or sets the volume level.

**`memberof`** PlaybackStartInfo

#### Defined in

[generated-client/models/playback-start-info.ts:98](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/models/playback-start-info.ts#L98)
