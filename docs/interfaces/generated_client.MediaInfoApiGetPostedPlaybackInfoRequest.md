[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / MediaInfoApiGetPostedPlaybackInfoRequest

# Interface: MediaInfoApiGetPostedPlaybackInfoRequest

[generated-client](../modules/generated_client.md).MediaInfoApiGetPostedPlaybackInfoRequest

Request parameters for getPostedPlaybackInfo operation in MediaInfoApi.

**`export`**

**`interface`** MediaInfoApiGetPostedPlaybackInfoRequest

## Table of contents

### Properties

- [allowAudioStreamCopy](generated_client.MediaInfoApiGetPostedPlaybackInfoRequest.md#allowaudiostreamcopy)
- [allowVideoStreamCopy](generated_client.MediaInfoApiGetPostedPlaybackInfoRequest.md#allowvideostreamcopy)
- [audioStreamIndex](generated_client.MediaInfoApiGetPostedPlaybackInfoRequest.md#audiostreamindex)
- [autoOpenLiveStream](generated_client.MediaInfoApiGetPostedPlaybackInfoRequest.md#autoopenlivestream)
- [enableDirectPlay](generated_client.MediaInfoApiGetPostedPlaybackInfoRequest.md#enabledirectplay)
- [enableDirectStream](generated_client.MediaInfoApiGetPostedPlaybackInfoRequest.md#enabledirectstream)
- [enableTranscoding](generated_client.MediaInfoApiGetPostedPlaybackInfoRequest.md#enabletranscoding)
- [itemId](generated_client.MediaInfoApiGetPostedPlaybackInfoRequest.md#itemid)
- [liveStreamId](generated_client.MediaInfoApiGetPostedPlaybackInfoRequest.md#livestreamid)
- [maxAudioChannels](generated_client.MediaInfoApiGetPostedPlaybackInfoRequest.md#maxaudiochannels)
- [maxStreamingBitrate](generated_client.MediaInfoApiGetPostedPlaybackInfoRequest.md#maxstreamingbitrate)
- [mediaSourceId](generated_client.MediaInfoApiGetPostedPlaybackInfoRequest.md#mediasourceid)
- [playbackInfoDto](generated_client.MediaInfoApiGetPostedPlaybackInfoRequest.md#playbackinfodto)
- [startTimeTicks](generated_client.MediaInfoApiGetPostedPlaybackInfoRequest.md#starttimeticks)
- [subtitleStreamIndex](generated_client.MediaInfoApiGetPostedPlaybackInfoRequest.md#subtitlestreamindex)
- [userId](generated_client.MediaInfoApiGetPostedPlaybackInfoRequest.md#userid)

## Properties

### allowAudioStreamCopy

• `Optional` `Readonly` **allowAudioStreamCopy**: `boolean`

Whether to allow to copy the audio stream. Default: true.

**`memberof`** MediaInfoApiGetPostedPlaybackInfo

#### Defined in

[generated-client/api/media-info-api.ts:704](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/media-info-api.ts#L704)

___

### allowVideoStreamCopy

• `Optional` `Readonly` **allowVideoStreamCopy**: `boolean`

Whether to allow to copy the video stream. Default: true.

**`memberof`** MediaInfoApiGetPostedPlaybackInfo

#### Defined in

[generated-client/api/media-info-api.ts:697](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/media-info-api.ts#L697)

___

### audioStreamIndex

• `Optional` `Readonly` **audioStreamIndex**: `number`

The audio stream index.

**`memberof`** MediaInfoApiGetPostedPlaybackInfo

#### Defined in

[generated-client/api/media-info-api.ts:634](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/media-info-api.ts#L634)

___

### autoOpenLiveStream

• `Optional` `Readonly` **autoOpenLiveStream**: `boolean`

Whether to auto open the livestream.

**`memberof`** MediaInfoApiGetPostedPlaybackInfo

#### Defined in

[generated-client/api/media-info-api.ts:669](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/media-info-api.ts#L669)

___

### enableDirectPlay

• `Optional` `Readonly` **enableDirectPlay**: `boolean`

Whether to enable direct play. Default: true.

**`memberof`** MediaInfoApiGetPostedPlaybackInfo

#### Defined in

[generated-client/api/media-info-api.ts:676](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/media-info-api.ts#L676)

___

### enableDirectStream

• `Optional` `Readonly` **enableDirectStream**: `boolean`

Whether to enable direct stream. Default: true.

**`memberof`** MediaInfoApiGetPostedPlaybackInfo

#### Defined in

[generated-client/api/media-info-api.ts:683](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/media-info-api.ts#L683)

___

### enableTranscoding

• `Optional` `Readonly` **enableTranscoding**: `boolean`

Whether to enable transcoding. Default: true.

**`memberof`** MediaInfoApiGetPostedPlaybackInfo

#### Defined in

[generated-client/api/media-info-api.ts:690](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/media-info-api.ts#L690)

___

### itemId

• `Readonly` **itemId**: `string`

The item id.

**`memberof`** MediaInfoApiGetPostedPlaybackInfo

#### Defined in

[generated-client/api/media-info-api.ts:606](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/media-info-api.ts#L606)

___

### liveStreamId

• `Optional` `Readonly` **liveStreamId**: `string`

The livestream id.

**`memberof`** MediaInfoApiGetPostedPlaybackInfo

#### Defined in

[generated-client/api/media-info-api.ts:662](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/media-info-api.ts#L662)

___

### maxAudioChannels

• `Optional` `Readonly` **maxAudioChannels**: `number`

The maximum number of audio channels.

**`memberof`** MediaInfoApiGetPostedPlaybackInfo

#### Defined in

[generated-client/api/media-info-api.ts:648](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/media-info-api.ts#L648)

___

### maxStreamingBitrate

• `Optional` `Readonly` **maxStreamingBitrate**: `number`

The maximum streaming bitrate.

**`memberof`** MediaInfoApiGetPostedPlaybackInfo

#### Defined in

[generated-client/api/media-info-api.ts:620](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/media-info-api.ts#L620)

___

### mediaSourceId

• `Optional` `Readonly` **mediaSourceId**: `string`

The media source id.

**`memberof`** MediaInfoApiGetPostedPlaybackInfo

#### Defined in

[generated-client/api/media-info-api.ts:655](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/media-info-api.ts#L655)

___

### playbackInfoDto

• `Optional` `Readonly` **playbackInfoDto**: [`PlaybackInfoDto`](generated_client.PlaybackInfoDto.md)

The playback info.

**`memberof`** MediaInfoApiGetPostedPlaybackInfo

#### Defined in

[generated-client/api/media-info-api.ts:711](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/media-info-api.ts#L711)

___

### startTimeTicks

• `Optional` `Readonly` **startTimeTicks**: `number`

The start time in ticks.

**`memberof`** MediaInfoApiGetPostedPlaybackInfo

#### Defined in

[generated-client/api/media-info-api.ts:627](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/media-info-api.ts#L627)

___

### subtitleStreamIndex

• `Optional` `Readonly` **subtitleStreamIndex**: `number`

The subtitle stream index.

**`memberof`** MediaInfoApiGetPostedPlaybackInfo

#### Defined in

[generated-client/api/media-info-api.ts:641](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/media-info-api.ts#L641)

___

### userId

• `Optional` `Readonly` **userId**: `string`

The user id.

**`memberof`** MediaInfoApiGetPostedPlaybackInfo

#### Defined in

[generated-client/api/media-info-api.ts:613](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/media-info-api.ts#L613)
