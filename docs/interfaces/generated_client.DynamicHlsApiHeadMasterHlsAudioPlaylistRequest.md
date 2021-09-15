[jellyfin-sdk-typescript](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / DynamicHlsApiHeadMasterHlsAudioPlaylistRequest

# Interface: DynamicHlsApiHeadMasterHlsAudioPlaylistRequest

[generated-client](../modules/generated_client.md).DynamicHlsApiHeadMasterHlsAudioPlaylistRequest

Request parameters for headMasterHlsAudioPlaylist operation in DynamicHlsApi.

**`export`**

**`interface`** DynamicHlsApiHeadMasterHlsAudioPlaylistRequest

## Table of contents

### Properties

- [_static](generated_client.DynamicHlsApiHeadMasterHlsAudioPlaylistRequest.md#_static)
- [allowAudioStreamCopy](generated_client.DynamicHlsApiHeadMasterHlsAudioPlaylistRequest.md#allowaudiostreamcopy)
- [allowVideoStreamCopy](generated_client.DynamicHlsApiHeadMasterHlsAudioPlaylistRequest.md#allowvideostreamcopy)
- [audioBitRate](generated_client.DynamicHlsApiHeadMasterHlsAudioPlaylistRequest.md#audiobitrate)
- [audioChannels](generated_client.DynamicHlsApiHeadMasterHlsAudioPlaylistRequest.md#audiochannels)
- [audioCodec](generated_client.DynamicHlsApiHeadMasterHlsAudioPlaylistRequest.md#audiocodec)
- [audioSampleRate](generated_client.DynamicHlsApiHeadMasterHlsAudioPlaylistRequest.md#audiosamplerate)
- [audioStreamIndex](generated_client.DynamicHlsApiHeadMasterHlsAudioPlaylistRequest.md#audiostreamindex)
- [breakOnNonKeyFrames](generated_client.DynamicHlsApiHeadMasterHlsAudioPlaylistRequest.md#breakonnonkeyframes)
- [context](generated_client.DynamicHlsApiHeadMasterHlsAudioPlaylistRequest.md#context)
- [copyTimestamps](generated_client.DynamicHlsApiHeadMasterHlsAudioPlaylistRequest.md#copytimestamps)
- [cpuCoreLimit](generated_client.DynamicHlsApiHeadMasterHlsAudioPlaylistRequest.md#cpucorelimit)
- [deInterlace](generated_client.DynamicHlsApiHeadMasterHlsAudioPlaylistRequest.md#deinterlace)
- [deviceId](generated_client.DynamicHlsApiHeadMasterHlsAudioPlaylistRequest.md#deviceid)
- [deviceProfileId](generated_client.DynamicHlsApiHeadMasterHlsAudioPlaylistRequest.md#deviceprofileid)
- [enableAdaptiveBitrateStreaming](generated_client.DynamicHlsApiHeadMasterHlsAudioPlaylistRequest.md#enableadaptivebitratestreaming)
- [enableAutoStreamCopy](generated_client.DynamicHlsApiHeadMasterHlsAudioPlaylistRequest.md#enableautostreamcopy)
- [enableMpegtsM2TsMode](generated_client.DynamicHlsApiHeadMasterHlsAudioPlaylistRequest.md#enablempegtsm2tsmode)
- [framerate](generated_client.DynamicHlsApiHeadMasterHlsAudioPlaylistRequest.md#framerate)
- [height](generated_client.DynamicHlsApiHeadMasterHlsAudioPlaylistRequest.md#height)
- [itemId](generated_client.DynamicHlsApiHeadMasterHlsAudioPlaylistRequest.md#itemid)
- [level](generated_client.DynamicHlsApiHeadMasterHlsAudioPlaylistRequest.md#level)
- [liveStreamId](generated_client.DynamicHlsApiHeadMasterHlsAudioPlaylistRequest.md#livestreamid)
- [maxAudioBitDepth](generated_client.DynamicHlsApiHeadMasterHlsAudioPlaylistRequest.md#maxaudiobitdepth)
- [maxAudioChannels](generated_client.DynamicHlsApiHeadMasterHlsAudioPlaylistRequest.md#maxaudiochannels)
- [maxFramerate](generated_client.DynamicHlsApiHeadMasterHlsAudioPlaylistRequest.md#maxframerate)
- [maxRefFrames](generated_client.DynamicHlsApiHeadMasterHlsAudioPlaylistRequest.md#maxrefframes)
- [maxStreamingBitrate](generated_client.DynamicHlsApiHeadMasterHlsAudioPlaylistRequest.md#maxstreamingbitrate)
- [maxVideoBitDepth](generated_client.DynamicHlsApiHeadMasterHlsAudioPlaylistRequest.md#maxvideobitdepth)
- [mediaSourceId](generated_client.DynamicHlsApiHeadMasterHlsAudioPlaylistRequest.md#mediasourceid)
- [minSegments](generated_client.DynamicHlsApiHeadMasterHlsAudioPlaylistRequest.md#minsegments)
- [params](generated_client.DynamicHlsApiHeadMasterHlsAudioPlaylistRequest.md#params)
- [playSessionId](generated_client.DynamicHlsApiHeadMasterHlsAudioPlaylistRequest.md#playsessionid)
- [profile](generated_client.DynamicHlsApiHeadMasterHlsAudioPlaylistRequest.md#profile)
- [requireAvc](generated_client.DynamicHlsApiHeadMasterHlsAudioPlaylistRequest.md#requireavc)
- [requireNonAnamorphic](generated_client.DynamicHlsApiHeadMasterHlsAudioPlaylistRequest.md#requirenonanamorphic)
- [segmentContainer](generated_client.DynamicHlsApiHeadMasterHlsAudioPlaylistRequest.md#segmentcontainer)
- [segmentLength](generated_client.DynamicHlsApiHeadMasterHlsAudioPlaylistRequest.md#segmentlength)
- [startTimeTicks](generated_client.DynamicHlsApiHeadMasterHlsAudioPlaylistRequest.md#starttimeticks)
- [streamOptions](generated_client.DynamicHlsApiHeadMasterHlsAudioPlaylistRequest.md#streamoptions)
- [subtitleCodec](generated_client.DynamicHlsApiHeadMasterHlsAudioPlaylistRequest.md#subtitlecodec)
- [subtitleMethod](generated_client.DynamicHlsApiHeadMasterHlsAudioPlaylistRequest.md#subtitlemethod)
- [subtitleStreamIndex](generated_client.DynamicHlsApiHeadMasterHlsAudioPlaylistRequest.md#subtitlestreamindex)
- [tag](generated_client.DynamicHlsApiHeadMasterHlsAudioPlaylistRequest.md#tag)
- [transcodeReasons](generated_client.DynamicHlsApiHeadMasterHlsAudioPlaylistRequest.md#transcodereasons)
- [transcodingMaxAudioChannels](generated_client.DynamicHlsApiHeadMasterHlsAudioPlaylistRequest.md#transcodingmaxaudiochannels)
- [videoBitRate](generated_client.DynamicHlsApiHeadMasterHlsAudioPlaylistRequest.md#videobitrate)
- [videoCodec](generated_client.DynamicHlsApiHeadMasterHlsAudioPlaylistRequest.md#videocodec)
- [videoStreamIndex](generated_client.DynamicHlsApiHeadMasterHlsAudioPlaylistRequest.md#videostreamindex)
- [width](generated_client.DynamicHlsApiHeadMasterHlsAudioPlaylistRequest.md#width)

## Properties

### \_static

• `Optional` `Readonly` **\_static**: `boolean`

Optional. If true, the original file will be streamed statically without any encoding. Use either no url extension or the original file extension. true/false.

**`memberof`** DynamicHlsApiHeadMasterHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5412](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/dynamic-hls-api.ts#L5412)

___

### allowAudioStreamCopy

• `Optional` `Readonly` **allowAudioStreamCopy**: `boolean`

Whether or not to allow copying of the audio stream url.

**`memberof`** DynamicHlsApiHeadMasterHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5496](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/dynamic-hls-api.ts#L5496)

___

### allowVideoStreamCopy

• `Optional` `Readonly` **allowVideoStreamCopy**: `boolean`

Whether or not to allow copying of the video stream url.

**`memberof`** DynamicHlsApiHeadMasterHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5489](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/dynamic-hls-api.ts#L5489)

___

### audioBitRate

• `Optional` `Readonly` **audioBitRate**: `number`

Optional. Specify an audio bitrate to encode to, e.g. 128000. If omitted this will be left to encoder defaults.

**`memberof`** DynamicHlsApiHeadMasterHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5531](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/dynamic-hls-api.ts#L5531)

___

### audioChannels

• `Optional` `Readonly` **audioChannels**: `number`

Optional. Specify a specific number of audio channels to encode to, e.g. 2.

**`memberof`** DynamicHlsApiHeadMasterHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5538](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/dynamic-hls-api.ts#L5538)

___

### audioCodec

• `Optional` `Readonly` **audioCodec**: `string`

Optional. Specify a audio codec to encode to, e.g. mp3. If omitted the server will auto-select using the url\&#39;s extension. Options: aac, mp3, vorbis, wma.

**`memberof`** DynamicHlsApiHeadMasterHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5475](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/dynamic-hls-api.ts#L5475)

___

### audioSampleRate

• `Optional` `Readonly` **audioSampleRate**: `number`

Optional. Specify a specific audio sample rate, e.g. 44100.

**`memberof`** DynamicHlsApiHeadMasterHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5510](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/dynamic-hls-api.ts#L5510)

___

### audioStreamIndex

• `Optional` `Readonly` **audioStreamIndex**: `number`

Optional. The index of the audio stream to use. If omitted the first audio stream will be used.

**`memberof`** DynamicHlsApiHeadMasterHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5713](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/dynamic-hls-api.ts#L5713)

___

### breakOnNonKeyFrames

• `Optional` `Readonly` **breakOnNonKeyFrames**: `boolean`

Optional. Whether to break on non key frames.

**`memberof`** DynamicHlsApiHeadMasterHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5503](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/dynamic-hls-api.ts#L5503)

___

### context

• `Optional` `Readonly` **context**: [`EncodingContext`](../enums/generated_client.EncodingContext.md)

Optional. The MediaBrowser.Model.Dlna.EncodingContext.

**`memberof`** DynamicHlsApiHeadMasterHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5727](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/dynamic-hls-api.ts#L5727)

___

### copyTimestamps

• `Optional` `Readonly` **copyTimestamps**: `boolean`

Whether or not to copy timestamps when transcoding with an offset. Defaults to false.

**`memberof`** DynamicHlsApiHeadMasterHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5580](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/dynamic-hls-api.ts#L5580)

___

### cpuCoreLimit

• `Optional` `Readonly` **cpuCoreLimit**: `number`

Optional. The limit of how many cpu cores to use.

**`memberof`** DynamicHlsApiHeadMasterHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5671](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/dynamic-hls-api.ts#L5671)

___

### deInterlace

• `Optional` `Readonly` **deInterlace**: `boolean`

Optional. Whether to deinterlace the video.

**`memberof`** DynamicHlsApiHeadMasterHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5650](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/dynamic-hls-api.ts#L5650)

___

### deviceId

• `Optional` `Readonly` **deviceId**: `string`

The device id of the client requesting. Used to stop encoding processes when needed.

**`memberof`** DynamicHlsApiHeadMasterHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5468](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/dynamic-hls-api.ts#L5468)

___

### deviceProfileId

• `Optional` `Readonly` **deviceProfileId**: `string`

Optional. The dlna device profile id to utilize.

**`memberof`** DynamicHlsApiHeadMasterHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5433](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/dynamic-hls-api.ts#L5433)

___

### enableAdaptiveBitrateStreaming

• `Optional` `Readonly` **enableAdaptiveBitrateStreaming**: `boolean`

Enable adaptive bitrate streaming.

**`memberof`** DynamicHlsApiHeadMasterHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5741](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/dynamic-hls-api.ts#L5741)

___

### enableAutoStreamCopy

• `Optional` `Readonly` **enableAutoStreamCopy**: `boolean`

Whether or not to allow automatic stream copy if requested values match the original source. Defaults to true.

**`memberof`** DynamicHlsApiHeadMasterHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5482](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/dynamic-hls-api.ts#L5482)

___

### enableMpegtsM2TsMode

• `Optional` `Readonly` **enableMpegtsM2TsMode**: `boolean`

Optional. Whether to enable the MpegtsM2Ts mode.

**`memberof`** DynamicHlsApiHeadMasterHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5685](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/dynamic-hls-api.ts#L5685)

___

### framerate

• `Optional` `Readonly` **framerate**: `number`

Optional. A specific video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements.

**`memberof`** DynamicHlsApiHeadMasterHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5566](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/dynamic-hls-api.ts#L5566)

___

### height

• `Optional` `Readonly` **height**: `number`

Optional. The fixed vertical resolution of the encoded video.

**`memberof`** DynamicHlsApiHeadMasterHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5601](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/dynamic-hls-api.ts#L5601)

___

### itemId

• `Readonly` **itemId**: `string`

The item id.

**`memberof`** DynamicHlsApiHeadMasterHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5398](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/dynamic-hls-api.ts#L5398)

___

### level

• `Optional` `Readonly` **level**: `string`

Optional. Specify a level for the encoder profile (varies by encoder), e.g. 3, 3.1.

**`memberof`** DynamicHlsApiHeadMasterHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5559](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/dynamic-hls-api.ts#L5559)

___

### liveStreamId

• `Optional` `Readonly` **liveStreamId**: `string`

The live stream id.

**`memberof`** DynamicHlsApiHeadMasterHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5678](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/dynamic-hls-api.ts#L5678)

___

### maxAudioBitDepth

• `Optional` `Readonly` **maxAudioBitDepth**: `number`

Optional. The maximum audio bit depth.

**`memberof`** DynamicHlsApiHeadMasterHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5517](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/dynamic-hls-api.ts#L5517)

___

### maxAudioChannels

• `Optional` `Readonly` **maxAudioChannels**: `number`

Optional. Specify a maximum number of audio channels to encode to, e.g. 2.

**`memberof`** DynamicHlsApiHeadMasterHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5545](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/dynamic-hls-api.ts#L5545)

___

### maxFramerate

• `Optional` `Readonly` **maxFramerate**: `number`

Optional. A specific maximum video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements.

**`memberof`** DynamicHlsApiHeadMasterHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5573](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/dynamic-hls-api.ts#L5573)

___

### maxRefFrames

• `Optional` `Readonly` **maxRefFrames**: `number`

Optional.

**`memberof`** DynamicHlsApiHeadMasterHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5629](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/dynamic-hls-api.ts#L5629)

___

### maxStreamingBitrate

• `Optional` `Readonly` **maxStreamingBitrate**: `number`

Optional. The maximum streaming bitrate.

**`memberof`** DynamicHlsApiHeadMasterHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5524](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/dynamic-hls-api.ts#L5524)

___

### maxVideoBitDepth

• `Optional` `Readonly` **maxVideoBitDepth**: `number`

Optional. The maximum video bit depth.

**`memberof`** DynamicHlsApiHeadMasterHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5636](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/dynamic-hls-api.ts#L5636)

___

### mediaSourceId

• `Readonly` **mediaSourceId**: `string`

The media version id, if playing an alternate version.

**`memberof`** DynamicHlsApiHeadMasterHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5405](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/dynamic-hls-api.ts#L5405)

___

### minSegments

• `Optional` `Readonly` **minSegments**: `number`

The minimum number of segments.

**`memberof`** DynamicHlsApiHeadMasterHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5461](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/dynamic-hls-api.ts#L5461)

___

### params

• `Optional` `Readonly` **params**: `string`

The streaming parameters.

**`memberof`** DynamicHlsApiHeadMasterHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5419](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/dynamic-hls-api.ts#L5419)

___

### playSessionId

• `Optional` `Readonly` **playSessionId**: `string`

The play session id.

**`memberof`** DynamicHlsApiHeadMasterHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5440](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/dynamic-hls-api.ts#L5440)

___

### profile

• `Optional` `Readonly` **profile**: `string`

Optional. Specify a specific an encoder profile (varies by encoder), e.g. main, baseline, high.

**`memberof`** DynamicHlsApiHeadMasterHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5552](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/dynamic-hls-api.ts#L5552)

___

### requireAvc

• `Optional` `Readonly` **requireAvc**: `boolean`

Optional. Whether to require avc.

**`memberof`** DynamicHlsApiHeadMasterHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5643](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/dynamic-hls-api.ts#L5643)

___

### requireNonAnamorphic

• `Optional` `Readonly` **requireNonAnamorphic**: `boolean`

Optional. Whether to require a non anamorphic stream.

**`memberof`** DynamicHlsApiHeadMasterHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5657](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/dynamic-hls-api.ts#L5657)

___

### segmentContainer

• `Optional` `Readonly` **segmentContainer**: `string`

The segment container.

**`memberof`** DynamicHlsApiHeadMasterHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5447](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/dynamic-hls-api.ts#L5447)

___

### segmentLength

• `Optional` `Readonly` **segmentLength**: `number`

The segment length.

**`memberof`** DynamicHlsApiHeadMasterHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5454](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/dynamic-hls-api.ts#L5454)

___

### startTimeTicks

• `Optional` `Readonly` **startTimeTicks**: `number`

Optional. Specify a starting offset, in ticks. 1 tick &#x3D; 10000 ms.

**`memberof`** DynamicHlsApiHeadMasterHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5587](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/dynamic-hls-api.ts#L5587)

___

### streamOptions

• `Optional` `Readonly` **streamOptions**: `Object`

Optional. The streaming options.

**`memberof`** DynamicHlsApiHeadMasterHlsAudioPlaylist

#### Index signature

▪ [key: `string`]: `string`

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5734](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/dynamic-hls-api.ts#L5734)

___

### subtitleCodec

• `Optional` `Readonly` **subtitleCodec**: `string`

Optional. Specify a subtitle codec to encode to.

**`memberof`** DynamicHlsApiHeadMasterHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5699](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/dynamic-hls-api.ts#L5699)

___

### subtitleMethod

• `Optional` `Readonly` **subtitleMethod**: [`SubtitleDeliveryMethod`](../enums/generated_client.SubtitleDeliveryMethod.md)

Optional. Specify the subtitle delivery method.

**`memberof`** DynamicHlsApiHeadMasterHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5622](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/dynamic-hls-api.ts#L5622)

___

### subtitleStreamIndex

• `Optional` `Readonly` **subtitleStreamIndex**: `number`

Optional. The index of the subtitle stream to use. If omitted no subtitles will be used.

**`memberof`** DynamicHlsApiHeadMasterHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5615](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/dynamic-hls-api.ts#L5615)

___

### tag

• `Optional` `Readonly` **tag**: `string`

The tag.

**`memberof`** DynamicHlsApiHeadMasterHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5426](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/dynamic-hls-api.ts#L5426)

___

### transcodeReasons

• `Optional` `Readonly` **transcodeReasons**: `string`

Optional. The transcoding reason.

**`memberof`** DynamicHlsApiHeadMasterHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5706](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/dynamic-hls-api.ts#L5706)

___

### transcodingMaxAudioChannels

• `Optional` `Readonly` **transcodingMaxAudioChannels**: `number`

Optional. The maximum number of audio channels to transcode.

**`memberof`** DynamicHlsApiHeadMasterHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5664](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/dynamic-hls-api.ts#L5664)

___

### videoBitRate

• `Optional` `Readonly` **videoBitRate**: `number`

Optional. Specify a video bitrate to encode to, e.g. 500000. If omitted this will be left to encoder defaults.

**`memberof`** DynamicHlsApiHeadMasterHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5608](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/dynamic-hls-api.ts#L5608)

___

### videoCodec

• `Optional` `Readonly` **videoCodec**: `string`

Optional. Specify a video codec to encode to, e.g. h264. If omitted the server will auto-select using the url\&#39;s extension. Options: h265, h264, mpeg4, theora, vpx, wmv.

**`memberof`** DynamicHlsApiHeadMasterHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5692](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/dynamic-hls-api.ts#L5692)

___

### videoStreamIndex

• `Optional` `Readonly` **videoStreamIndex**: `number`

Optional. The index of the video stream to use. If omitted the first video stream will be used.

**`memberof`** DynamicHlsApiHeadMasterHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5720](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/dynamic-hls-api.ts#L5720)

___

### width

• `Optional` `Readonly` **width**: `number`

Optional. The fixed horizontal resolution of the encoded video.

**`memberof`** DynamicHlsApiHeadMasterHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5594](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/dynamic-hls-api.ts#L5594)
