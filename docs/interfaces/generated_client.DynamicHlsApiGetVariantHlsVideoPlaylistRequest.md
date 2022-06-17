[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / DynamicHlsApiGetVariantHlsVideoPlaylistRequest

# Interface: DynamicHlsApiGetVariantHlsVideoPlaylistRequest

[generated-client](../modules/generated_client.md).DynamicHlsApiGetVariantHlsVideoPlaylistRequest

Request parameters for getVariantHlsVideoPlaylist operation in DynamicHlsApi.

**`export`**

**`interface`** DynamicHlsApiGetVariantHlsVideoPlaylistRequest

## Table of contents

### Properties

- [\_static](generated_client.DynamicHlsApiGetVariantHlsVideoPlaylistRequest.md#_static)
- [allowAudioStreamCopy](generated_client.DynamicHlsApiGetVariantHlsVideoPlaylistRequest.md#allowaudiostreamcopy)
- [allowVideoStreamCopy](generated_client.DynamicHlsApiGetVariantHlsVideoPlaylistRequest.md#allowvideostreamcopy)
- [audioBitRate](generated_client.DynamicHlsApiGetVariantHlsVideoPlaylistRequest.md#audiobitrate)
- [audioChannels](generated_client.DynamicHlsApiGetVariantHlsVideoPlaylistRequest.md#audiochannels)
- [audioCodec](generated_client.DynamicHlsApiGetVariantHlsVideoPlaylistRequest.md#audiocodec)
- [audioSampleRate](generated_client.DynamicHlsApiGetVariantHlsVideoPlaylistRequest.md#audiosamplerate)
- [audioStreamIndex](generated_client.DynamicHlsApiGetVariantHlsVideoPlaylistRequest.md#audiostreamindex)
- [breakOnNonKeyFrames](generated_client.DynamicHlsApiGetVariantHlsVideoPlaylistRequest.md#breakonnonkeyframes)
- [context](generated_client.DynamicHlsApiGetVariantHlsVideoPlaylistRequest.md#context)
- [copyTimestamps](generated_client.DynamicHlsApiGetVariantHlsVideoPlaylistRequest.md#copytimestamps)
- [cpuCoreLimit](generated_client.DynamicHlsApiGetVariantHlsVideoPlaylistRequest.md#cpucorelimit)
- [deInterlace](generated_client.DynamicHlsApiGetVariantHlsVideoPlaylistRequest.md#deinterlace)
- [deviceId](generated_client.DynamicHlsApiGetVariantHlsVideoPlaylistRequest.md#deviceid)
- [deviceProfileId](generated_client.DynamicHlsApiGetVariantHlsVideoPlaylistRequest.md#deviceprofileid)
- [enableAutoStreamCopy](generated_client.DynamicHlsApiGetVariantHlsVideoPlaylistRequest.md#enableautostreamcopy)
- [enableMpegtsM2TsMode](generated_client.DynamicHlsApiGetVariantHlsVideoPlaylistRequest.md#enablempegtsm2tsmode)
- [framerate](generated_client.DynamicHlsApiGetVariantHlsVideoPlaylistRequest.md#framerate)
- [height](generated_client.DynamicHlsApiGetVariantHlsVideoPlaylistRequest.md#height)
- [itemId](generated_client.DynamicHlsApiGetVariantHlsVideoPlaylistRequest.md#itemid)
- [level](generated_client.DynamicHlsApiGetVariantHlsVideoPlaylistRequest.md#level)
- [liveStreamId](generated_client.DynamicHlsApiGetVariantHlsVideoPlaylistRequest.md#livestreamid)
- [maxAudioBitDepth](generated_client.DynamicHlsApiGetVariantHlsVideoPlaylistRequest.md#maxaudiobitdepth)
- [maxAudioChannels](generated_client.DynamicHlsApiGetVariantHlsVideoPlaylistRequest.md#maxaudiochannels)
- [maxFramerate](generated_client.DynamicHlsApiGetVariantHlsVideoPlaylistRequest.md#maxframerate)
- [maxRefFrames](generated_client.DynamicHlsApiGetVariantHlsVideoPlaylistRequest.md#maxrefframes)
- [maxVideoBitDepth](generated_client.DynamicHlsApiGetVariantHlsVideoPlaylistRequest.md#maxvideobitdepth)
- [mediaSourceId](generated_client.DynamicHlsApiGetVariantHlsVideoPlaylistRequest.md#mediasourceid)
- [minSegments](generated_client.DynamicHlsApiGetVariantHlsVideoPlaylistRequest.md#minsegments)
- [params](generated_client.DynamicHlsApiGetVariantHlsVideoPlaylistRequest.md#params)
- [playSessionId](generated_client.DynamicHlsApiGetVariantHlsVideoPlaylistRequest.md#playsessionid)
- [profile](generated_client.DynamicHlsApiGetVariantHlsVideoPlaylistRequest.md#profile)
- [requireAvc](generated_client.DynamicHlsApiGetVariantHlsVideoPlaylistRequest.md#requireavc)
- [requireNonAnamorphic](generated_client.DynamicHlsApiGetVariantHlsVideoPlaylistRequest.md#requirenonanamorphic)
- [segmentContainer](generated_client.DynamicHlsApiGetVariantHlsVideoPlaylistRequest.md#segmentcontainer)
- [segmentLength](generated_client.DynamicHlsApiGetVariantHlsVideoPlaylistRequest.md#segmentlength)
- [startTimeTicks](generated_client.DynamicHlsApiGetVariantHlsVideoPlaylistRequest.md#starttimeticks)
- [streamOptions](generated_client.DynamicHlsApiGetVariantHlsVideoPlaylistRequest.md#streamoptions)
- [subtitleCodec](generated_client.DynamicHlsApiGetVariantHlsVideoPlaylistRequest.md#subtitlecodec)
- [subtitleMethod](generated_client.DynamicHlsApiGetVariantHlsVideoPlaylistRequest.md#subtitlemethod)
- [subtitleStreamIndex](generated_client.DynamicHlsApiGetVariantHlsVideoPlaylistRequest.md#subtitlestreamindex)
- [tag](generated_client.DynamicHlsApiGetVariantHlsVideoPlaylistRequest.md#tag)
- [transcodeReasons](generated_client.DynamicHlsApiGetVariantHlsVideoPlaylistRequest.md#transcodereasons)
- [transcodingMaxAudioChannels](generated_client.DynamicHlsApiGetVariantHlsVideoPlaylistRequest.md#transcodingmaxaudiochannels)
- [videoBitRate](generated_client.DynamicHlsApiGetVariantHlsVideoPlaylistRequest.md#videobitrate)
- [videoCodec](generated_client.DynamicHlsApiGetVariantHlsVideoPlaylistRequest.md#videocodec)
- [videoStreamIndex](generated_client.DynamicHlsApiGetVariantHlsVideoPlaylistRequest.md#videostreamindex)
- [width](generated_client.DynamicHlsApiGetVariantHlsVideoPlaylistRequest.md#width)

## Properties

### \_static

• `Optional` `Readonly` **\_static**: `boolean`

Optional. If true, the original file will be streamed statically without any encoding. Use either no url extension or the original file extension. true/false.

**`memberof`** DynamicHlsApiGetVariantHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5062](https://github.com/thornbill/jellyfin-sdk-typescript/blob/03092f3/src/generated-client/api/dynamic-hls-api.ts#L5062)

___

### allowAudioStreamCopy

• `Optional` `Readonly` **allowAudioStreamCopy**: `boolean`

Whether or not to allow copying of the audio stream url.

**`memberof`** DynamicHlsApiGetVariantHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5153](https://github.com/thornbill/jellyfin-sdk-typescript/blob/03092f3/src/generated-client/api/dynamic-hls-api.ts#L5153)

___

### allowVideoStreamCopy

• `Optional` `Readonly` **allowVideoStreamCopy**: `boolean`

Whether or not to allow copying of the video stream url.

**`memberof`** DynamicHlsApiGetVariantHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5146](https://github.com/thornbill/jellyfin-sdk-typescript/blob/03092f3/src/generated-client/api/dynamic-hls-api.ts#L5146)

___

### audioBitRate

• `Optional` `Readonly` **audioBitRate**: `number`

Optional. Specify an audio bitrate to encode to, e.g. 128000. If omitted this will be left to encoder defaults.

**`memberof`** DynamicHlsApiGetVariantHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5181](https://github.com/thornbill/jellyfin-sdk-typescript/blob/03092f3/src/generated-client/api/dynamic-hls-api.ts#L5181)

___

### audioChannels

• `Optional` `Readonly` **audioChannels**: `number`

Optional. Specify a specific number of audio channels to encode to, e.g. 2.

**`memberof`** DynamicHlsApiGetVariantHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5188](https://github.com/thornbill/jellyfin-sdk-typescript/blob/03092f3/src/generated-client/api/dynamic-hls-api.ts#L5188)

___

### audioCodec

• `Optional` `Readonly` **audioCodec**: `string`

Optional. Specify a audio codec to encode to, e.g. mp3. If omitted the server will auto-select using the url\&#39;s extension. Options: aac, mp3, vorbis, wma.

**`memberof`** DynamicHlsApiGetVariantHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5132](https://github.com/thornbill/jellyfin-sdk-typescript/blob/03092f3/src/generated-client/api/dynamic-hls-api.ts#L5132)

___

### audioSampleRate

• `Optional` `Readonly` **audioSampleRate**: `number`

Optional. Specify a specific audio sample rate, e.g. 44100.

**`memberof`** DynamicHlsApiGetVariantHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5167](https://github.com/thornbill/jellyfin-sdk-typescript/blob/03092f3/src/generated-client/api/dynamic-hls-api.ts#L5167)

___

### audioStreamIndex

• `Optional` `Readonly` **audioStreamIndex**: `number`

Optional. The index of the audio stream to use. If omitted the first audio stream will be used.

**`memberof`** DynamicHlsApiGetVariantHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5363](https://github.com/thornbill/jellyfin-sdk-typescript/blob/03092f3/src/generated-client/api/dynamic-hls-api.ts#L5363)

___

### breakOnNonKeyFrames

• `Optional` `Readonly` **breakOnNonKeyFrames**: `boolean`

Optional. Whether to break on non key frames.

**`memberof`** DynamicHlsApiGetVariantHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5160](https://github.com/thornbill/jellyfin-sdk-typescript/blob/03092f3/src/generated-client/api/dynamic-hls-api.ts#L5160)

___

### context

• `Optional` `Readonly` **context**: [`EncodingContext`](../enums/generated_client.EncodingContext.md)

Optional. The MediaBrowser.Model.Dlna.EncodingContext.

**`memberof`** DynamicHlsApiGetVariantHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5377](https://github.com/thornbill/jellyfin-sdk-typescript/blob/03092f3/src/generated-client/api/dynamic-hls-api.ts#L5377)

___

### copyTimestamps

• `Optional` `Readonly` **copyTimestamps**: `boolean`

Whether or not to copy timestamps when transcoding with an offset. Defaults to false.

**`memberof`** DynamicHlsApiGetVariantHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5230](https://github.com/thornbill/jellyfin-sdk-typescript/blob/03092f3/src/generated-client/api/dynamic-hls-api.ts#L5230)

___

### cpuCoreLimit

• `Optional` `Readonly` **cpuCoreLimit**: `number`

Optional. The limit of how many cpu cores to use.

**`memberof`** DynamicHlsApiGetVariantHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5321](https://github.com/thornbill/jellyfin-sdk-typescript/blob/03092f3/src/generated-client/api/dynamic-hls-api.ts#L5321)

___

### deInterlace

• `Optional` `Readonly` **deInterlace**: `boolean`

Optional. Whether to deinterlace the video.

**`memberof`** DynamicHlsApiGetVariantHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5300](https://github.com/thornbill/jellyfin-sdk-typescript/blob/03092f3/src/generated-client/api/dynamic-hls-api.ts#L5300)

___

### deviceId

• `Optional` `Readonly` **deviceId**: `string`

The device id of the client requesting. Used to stop encoding processes when needed.

**`memberof`** DynamicHlsApiGetVariantHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5125](https://github.com/thornbill/jellyfin-sdk-typescript/blob/03092f3/src/generated-client/api/dynamic-hls-api.ts#L5125)

___

### deviceProfileId

• `Optional` `Readonly` **deviceProfileId**: `string`

Optional. The dlna device profile id to utilize.

**`memberof`** DynamicHlsApiGetVariantHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5083](https://github.com/thornbill/jellyfin-sdk-typescript/blob/03092f3/src/generated-client/api/dynamic-hls-api.ts#L5083)

___

### enableAutoStreamCopy

• `Optional` `Readonly` **enableAutoStreamCopy**: `boolean`

Whether or not to allow automatic stream copy if requested values match the original source. Defaults to true.

**`memberof`** DynamicHlsApiGetVariantHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5139](https://github.com/thornbill/jellyfin-sdk-typescript/blob/03092f3/src/generated-client/api/dynamic-hls-api.ts#L5139)

___

### enableMpegtsM2TsMode

• `Optional` `Readonly` **enableMpegtsM2TsMode**: `boolean`

Optional. Whether to enable the MpegtsM2Ts mode.

**`memberof`** DynamicHlsApiGetVariantHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5335](https://github.com/thornbill/jellyfin-sdk-typescript/blob/03092f3/src/generated-client/api/dynamic-hls-api.ts#L5335)

___

### framerate

• `Optional` `Readonly` **framerate**: `number`

Optional. A specific video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements.

**`memberof`** DynamicHlsApiGetVariantHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5216](https://github.com/thornbill/jellyfin-sdk-typescript/blob/03092f3/src/generated-client/api/dynamic-hls-api.ts#L5216)

___

### height

• `Optional` `Readonly` **height**: `number`

Optional. The fixed vertical resolution of the encoded video.

**`memberof`** DynamicHlsApiGetVariantHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5251](https://github.com/thornbill/jellyfin-sdk-typescript/blob/03092f3/src/generated-client/api/dynamic-hls-api.ts#L5251)

___

### itemId

• `Readonly` **itemId**: `string`

The item id.

**`memberof`** DynamicHlsApiGetVariantHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5055](https://github.com/thornbill/jellyfin-sdk-typescript/blob/03092f3/src/generated-client/api/dynamic-hls-api.ts#L5055)

___

### level

• `Optional` `Readonly` **level**: `string`

Optional. Specify a level for the encoder profile (varies by encoder), e.g. 3, 3.1.

**`memberof`** DynamicHlsApiGetVariantHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5209](https://github.com/thornbill/jellyfin-sdk-typescript/blob/03092f3/src/generated-client/api/dynamic-hls-api.ts#L5209)

___

### liveStreamId

• `Optional` `Readonly` **liveStreamId**: `string`

The live stream id.

**`memberof`** DynamicHlsApiGetVariantHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5328](https://github.com/thornbill/jellyfin-sdk-typescript/blob/03092f3/src/generated-client/api/dynamic-hls-api.ts#L5328)

___

### maxAudioBitDepth

• `Optional` `Readonly` **maxAudioBitDepth**: `number`

Optional. The maximum audio bit depth.

**`memberof`** DynamicHlsApiGetVariantHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5174](https://github.com/thornbill/jellyfin-sdk-typescript/blob/03092f3/src/generated-client/api/dynamic-hls-api.ts#L5174)

___

### maxAudioChannels

• `Optional` `Readonly` **maxAudioChannels**: `number`

Optional. Specify a maximum number of audio channels to encode to, e.g. 2.

**`memberof`** DynamicHlsApiGetVariantHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5195](https://github.com/thornbill/jellyfin-sdk-typescript/blob/03092f3/src/generated-client/api/dynamic-hls-api.ts#L5195)

___

### maxFramerate

• `Optional` `Readonly` **maxFramerate**: `number`

Optional. A specific maximum video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements.

**`memberof`** DynamicHlsApiGetVariantHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5223](https://github.com/thornbill/jellyfin-sdk-typescript/blob/03092f3/src/generated-client/api/dynamic-hls-api.ts#L5223)

___

### maxRefFrames

• `Optional` `Readonly` **maxRefFrames**: `number`

Optional.

**`memberof`** DynamicHlsApiGetVariantHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5279](https://github.com/thornbill/jellyfin-sdk-typescript/blob/03092f3/src/generated-client/api/dynamic-hls-api.ts#L5279)

___

### maxVideoBitDepth

• `Optional` `Readonly` **maxVideoBitDepth**: `number`

Optional. The maximum video bit depth.

**`memberof`** DynamicHlsApiGetVariantHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5286](https://github.com/thornbill/jellyfin-sdk-typescript/blob/03092f3/src/generated-client/api/dynamic-hls-api.ts#L5286)

___

### mediaSourceId

• `Optional` `Readonly` **mediaSourceId**: `string`

The media version id, if playing an alternate version.

**`memberof`** DynamicHlsApiGetVariantHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5118](https://github.com/thornbill/jellyfin-sdk-typescript/blob/03092f3/src/generated-client/api/dynamic-hls-api.ts#L5118)

___

### minSegments

• `Optional` `Readonly` **minSegments**: `number`

The minimum number of segments.

**`memberof`** DynamicHlsApiGetVariantHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5111](https://github.com/thornbill/jellyfin-sdk-typescript/blob/03092f3/src/generated-client/api/dynamic-hls-api.ts#L5111)

___

### params

• `Optional` `Readonly` **params**: `string`

The streaming parameters.

**`memberof`** DynamicHlsApiGetVariantHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5069](https://github.com/thornbill/jellyfin-sdk-typescript/blob/03092f3/src/generated-client/api/dynamic-hls-api.ts#L5069)

___

### playSessionId

• `Optional` `Readonly` **playSessionId**: `string`

The play session id.

**`memberof`** DynamicHlsApiGetVariantHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5090](https://github.com/thornbill/jellyfin-sdk-typescript/blob/03092f3/src/generated-client/api/dynamic-hls-api.ts#L5090)

___

### profile

• `Optional` `Readonly` **profile**: `string`

Optional. Specify a specific an encoder profile (varies by encoder), e.g. main, baseline, high.

**`memberof`** DynamicHlsApiGetVariantHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5202](https://github.com/thornbill/jellyfin-sdk-typescript/blob/03092f3/src/generated-client/api/dynamic-hls-api.ts#L5202)

___

### requireAvc

• `Optional` `Readonly` **requireAvc**: `boolean`

Optional. Whether to require avc.

**`memberof`** DynamicHlsApiGetVariantHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5293](https://github.com/thornbill/jellyfin-sdk-typescript/blob/03092f3/src/generated-client/api/dynamic-hls-api.ts#L5293)

___

### requireNonAnamorphic

• `Optional` `Readonly` **requireNonAnamorphic**: `boolean`

Optional. Whether to require a non anamorphic stream.

**`memberof`** DynamicHlsApiGetVariantHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5307](https://github.com/thornbill/jellyfin-sdk-typescript/blob/03092f3/src/generated-client/api/dynamic-hls-api.ts#L5307)

___

### segmentContainer

• `Optional` `Readonly` **segmentContainer**: `string`

The segment container.

**`memberof`** DynamicHlsApiGetVariantHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5097](https://github.com/thornbill/jellyfin-sdk-typescript/blob/03092f3/src/generated-client/api/dynamic-hls-api.ts#L5097)

___

### segmentLength

• `Optional` `Readonly` **segmentLength**: `number`

The segment length.

**`memberof`** DynamicHlsApiGetVariantHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5104](https://github.com/thornbill/jellyfin-sdk-typescript/blob/03092f3/src/generated-client/api/dynamic-hls-api.ts#L5104)

___

### startTimeTicks

• `Optional` `Readonly` **startTimeTicks**: `number`

Optional. Specify a starting offset, in ticks. 1 tick &#x3D; 10000 ms.

**`memberof`** DynamicHlsApiGetVariantHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5237](https://github.com/thornbill/jellyfin-sdk-typescript/blob/03092f3/src/generated-client/api/dynamic-hls-api.ts#L5237)

___

### streamOptions

• `Optional` `Readonly` **streamOptions**: `Object`

Optional. The streaming options.

**`memberof`** DynamicHlsApiGetVariantHlsVideoPlaylist

#### Index signature

▪ [key: `string`]: `string`

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5384](https://github.com/thornbill/jellyfin-sdk-typescript/blob/03092f3/src/generated-client/api/dynamic-hls-api.ts#L5384)

___

### subtitleCodec

• `Optional` `Readonly` **subtitleCodec**: `string`

Optional. Specify a subtitle codec to encode to.

**`memberof`** DynamicHlsApiGetVariantHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5349](https://github.com/thornbill/jellyfin-sdk-typescript/blob/03092f3/src/generated-client/api/dynamic-hls-api.ts#L5349)

___

### subtitleMethod

• `Optional` `Readonly` **subtitleMethod**: [`SubtitleDeliveryMethod`](../enums/generated_client.SubtitleDeliveryMethod.md)

Optional. Specify the subtitle delivery method.

**`memberof`** DynamicHlsApiGetVariantHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5272](https://github.com/thornbill/jellyfin-sdk-typescript/blob/03092f3/src/generated-client/api/dynamic-hls-api.ts#L5272)

___

### subtitleStreamIndex

• `Optional` `Readonly` **subtitleStreamIndex**: `number`

Optional. The index of the subtitle stream to use. If omitted no subtitles will be used.

**`memberof`** DynamicHlsApiGetVariantHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5265](https://github.com/thornbill/jellyfin-sdk-typescript/blob/03092f3/src/generated-client/api/dynamic-hls-api.ts#L5265)

___

### tag

• `Optional` `Readonly` **tag**: `string`

The tag.

**`memberof`** DynamicHlsApiGetVariantHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5076](https://github.com/thornbill/jellyfin-sdk-typescript/blob/03092f3/src/generated-client/api/dynamic-hls-api.ts#L5076)

___

### transcodeReasons

• `Optional` `Readonly` **transcodeReasons**: `string`

Optional. The transcoding reason.

**`memberof`** DynamicHlsApiGetVariantHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5356](https://github.com/thornbill/jellyfin-sdk-typescript/blob/03092f3/src/generated-client/api/dynamic-hls-api.ts#L5356)

___

### transcodingMaxAudioChannels

• `Optional` `Readonly` **transcodingMaxAudioChannels**: `number`

Optional. The maximum number of audio channels to transcode.

**`memberof`** DynamicHlsApiGetVariantHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5314](https://github.com/thornbill/jellyfin-sdk-typescript/blob/03092f3/src/generated-client/api/dynamic-hls-api.ts#L5314)

___

### videoBitRate

• `Optional` `Readonly` **videoBitRate**: `number`

Optional. Specify a video bitrate to encode to, e.g. 500000. If omitted this will be left to encoder defaults.

**`memberof`** DynamicHlsApiGetVariantHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5258](https://github.com/thornbill/jellyfin-sdk-typescript/blob/03092f3/src/generated-client/api/dynamic-hls-api.ts#L5258)

___

### videoCodec

• `Optional` `Readonly` **videoCodec**: `string`

Optional. Specify a video codec to encode to, e.g. h264. If omitted the server will auto-select using the url\&#39;s extension. Options: h265, h264, mpeg4, theora, vpx, wmv.

**`memberof`** DynamicHlsApiGetVariantHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5342](https://github.com/thornbill/jellyfin-sdk-typescript/blob/03092f3/src/generated-client/api/dynamic-hls-api.ts#L5342)

___

### videoStreamIndex

• `Optional` `Readonly` **videoStreamIndex**: `number`

Optional. The index of the video stream to use. If omitted the first video stream will be used.

**`memberof`** DynamicHlsApiGetVariantHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5370](https://github.com/thornbill/jellyfin-sdk-typescript/blob/03092f3/src/generated-client/api/dynamic-hls-api.ts#L5370)

___

### width

• `Optional` `Readonly` **width**: `number`

Optional. The fixed horizontal resolution of the encoded video.

**`memberof`** DynamicHlsApiGetVariantHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5244](https://github.com/thornbill/jellyfin-sdk-typescript/blob/03092f3/src/generated-client/api/dynamic-hls-api.ts#L5244)
