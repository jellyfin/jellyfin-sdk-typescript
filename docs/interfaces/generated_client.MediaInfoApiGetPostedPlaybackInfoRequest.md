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

[generated-client/api/media-info-api.ts:702](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/media-info-api.ts#L702)

___

### allowVideoStreamCopy

• `Optional` `Readonly` **allowVideoStreamCopy**: `boolean`

Whether to allow to copy the video stream. Default: true.

**`memberof`** MediaInfoApiGetPostedPlaybackInfo

#### Defined in

[generated-client/api/media-info-api.ts:695](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/media-info-api.ts#L695)

___

### audioStreamIndex

• `Optional` `Readonly` **audioStreamIndex**: `number`

The audio stream index.

**`memberof`** MediaInfoApiGetPostedPlaybackInfo

#### Defined in

[generated-client/api/media-info-api.ts:632](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/media-info-api.ts#L632)

___

### autoOpenLiveStream

• `Optional` `Readonly` **autoOpenLiveStream**: `boolean`

Whether to auto open the livestream.

**`memberof`** MediaInfoApiGetPostedPlaybackInfo

#### Defined in

[generated-client/api/media-info-api.ts:667](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/media-info-api.ts#L667)

___

### enableDirectPlay

• `Optional` `Readonly` **enableDirectPlay**: `boolean`

Whether to enable direct play. Default: true.

**`memberof`** MediaInfoApiGetPostedPlaybackInfo

#### Defined in

[generated-client/api/media-info-api.ts:674](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/media-info-api.ts#L674)

___

### enableDirectStream

• `Optional` `Readonly` **enableDirectStream**: `boolean`

Whether to enable direct stream. Default: true.

**`memberof`** MediaInfoApiGetPostedPlaybackInfo

#### Defined in

[generated-client/api/media-info-api.ts:681](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/media-info-api.ts#L681)

___

### enableTranscoding

• `Optional` `Readonly` **enableTranscoding**: `boolean`

Whether to enable transcoding. Default: true.

**`memberof`** MediaInfoApiGetPostedPlaybackInfo

#### Defined in

[generated-client/api/media-info-api.ts:688](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/media-info-api.ts#L688)

___

### itemId

• `Readonly` **itemId**: `string`

The item id.

**`memberof`** MediaInfoApiGetPostedPlaybackInfo

#### Defined in

[generated-client/api/media-info-api.ts:604](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/media-info-api.ts#L604)

___

### liveStreamId

• `Optional` `Readonly` **liveStreamId**: `string`

The livestream id.

**`memberof`** MediaInfoApiGetPostedPlaybackInfo

#### Defined in

[generated-client/api/media-info-api.ts:660](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/media-info-api.ts#L660)

___

### maxAudioChannels

• `Optional` `Readonly` **maxAudioChannels**: `number`

The maximum number of audio channels.

**`memberof`** MediaInfoApiGetPostedPlaybackInfo

#### Defined in

[generated-client/api/media-info-api.ts:646](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/media-info-api.ts#L646)

___

### maxStreamingBitrate

• `Optional` `Readonly` **maxStreamingBitrate**: `number`

The maximum streaming bitrate.

**`memberof`** MediaInfoApiGetPostedPlaybackInfo

#### Defined in

[generated-client/api/media-info-api.ts:618](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/media-info-api.ts#L618)

___

### mediaSourceId

• `Optional` `Readonly` **mediaSourceId**: `string`

The media source id.

**`memberof`** MediaInfoApiGetPostedPlaybackInfo

#### Defined in

[generated-client/api/media-info-api.ts:653](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/media-info-api.ts#L653)

___

### playbackInfoDto

• `Optional` `Readonly` **playbackInfoDto**: [`PlaybackInfoDto`](generated_client.PlaybackInfoDto.md)

The playback info.

**`memberof`** MediaInfoApiGetPostedPlaybackInfo

#### Defined in

[generated-client/api/media-info-api.ts:709](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/media-info-api.ts#L709)

___

### startTimeTicks

• `Optional` `Readonly` **startTimeTicks**: `number`

The start time in ticks.

**`memberof`** MediaInfoApiGetPostedPlaybackInfo

#### Defined in

[generated-client/api/media-info-api.ts:625](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/media-info-api.ts#L625)

___

### subtitleStreamIndex

• `Optional` `Readonly` **subtitleStreamIndex**: `number`

The subtitle stream index.

**`memberof`** MediaInfoApiGetPostedPlaybackInfo

#### Defined in

[generated-client/api/media-info-api.ts:639](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/media-info-api.ts#L639)

___

### userId

• `Optional` `Readonly` **userId**: `string`

The user id.

**`memberof`** MediaInfoApiGetPostedPlaybackInfo

#### Defined in

[generated-client/api/media-info-api.ts:611](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/media-info-api.ts#L611)
