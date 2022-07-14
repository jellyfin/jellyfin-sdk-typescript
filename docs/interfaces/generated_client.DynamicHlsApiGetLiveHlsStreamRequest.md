[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / DynamicHlsApiGetLiveHlsStreamRequest

# Interface: DynamicHlsApiGetLiveHlsStreamRequest

[generated-client](../modules/generated_client.md).DynamicHlsApiGetLiveHlsStreamRequest

Request parameters for getLiveHlsStream operation in DynamicHlsApi.

**`export`**

**`interface`** DynamicHlsApiGetLiveHlsStreamRequest

## Table of contents

### Properties

- [\_static](generated_client.DynamicHlsApiGetLiveHlsStreamRequest.md#_static)
- [allowAudioStreamCopy](generated_client.DynamicHlsApiGetLiveHlsStreamRequest.md#allowaudiostreamcopy)
- [allowVideoStreamCopy](generated_client.DynamicHlsApiGetLiveHlsStreamRequest.md#allowvideostreamcopy)
- [audioBitRate](generated_client.DynamicHlsApiGetLiveHlsStreamRequest.md#audiobitrate)
- [audioChannels](generated_client.DynamicHlsApiGetLiveHlsStreamRequest.md#audiochannels)
- [audioCodec](generated_client.DynamicHlsApiGetLiveHlsStreamRequest.md#audiocodec)
- [audioSampleRate](generated_client.DynamicHlsApiGetLiveHlsStreamRequest.md#audiosamplerate)
- [audioStreamIndex](generated_client.DynamicHlsApiGetLiveHlsStreamRequest.md#audiostreamindex)
- [breakOnNonKeyFrames](generated_client.DynamicHlsApiGetLiveHlsStreamRequest.md#breakonnonkeyframes)
- [container](generated_client.DynamicHlsApiGetLiveHlsStreamRequest.md#container)
- [context](generated_client.DynamicHlsApiGetLiveHlsStreamRequest.md#context)
- [copyTimestamps](generated_client.DynamicHlsApiGetLiveHlsStreamRequest.md#copytimestamps)
- [cpuCoreLimit](generated_client.DynamicHlsApiGetLiveHlsStreamRequest.md#cpucorelimit)
- [deInterlace](generated_client.DynamicHlsApiGetLiveHlsStreamRequest.md#deinterlace)
- [deviceId](generated_client.DynamicHlsApiGetLiveHlsStreamRequest.md#deviceid)
- [deviceProfileId](generated_client.DynamicHlsApiGetLiveHlsStreamRequest.md#deviceprofileid)
- [enableAutoStreamCopy](generated_client.DynamicHlsApiGetLiveHlsStreamRequest.md#enableautostreamcopy)
- [enableMpegtsM2TsMode](generated_client.DynamicHlsApiGetLiveHlsStreamRequest.md#enablempegtsm2tsmode)
- [enableSubtitlesInManifest](generated_client.DynamicHlsApiGetLiveHlsStreamRequest.md#enablesubtitlesinmanifest)
- [framerate](generated_client.DynamicHlsApiGetLiveHlsStreamRequest.md#framerate)
- [height](generated_client.DynamicHlsApiGetLiveHlsStreamRequest.md#height)
- [itemId](generated_client.DynamicHlsApiGetLiveHlsStreamRequest.md#itemid)
- [level](generated_client.DynamicHlsApiGetLiveHlsStreamRequest.md#level)
- [liveStreamId](generated_client.DynamicHlsApiGetLiveHlsStreamRequest.md#livestreamid)
- [maxAudioBitDepth](generated_client.DynamicHlsApiGetLiveHlsStreamRequest.md#maxaudiobitdepth)
- [maxAudioChannels](generated_client.DynamicHlsApiGetLiveHlsStreamRequest.md#maxaudiochannels)
- [maxFramerate](generated_client.DynamicHlsApiGetLiveHlsStreamRequest.md#maxframerate)
- [maxHeight](generated_client.DynamicHlsApiGetLiveHlsStreamRequest.md#maxheight)
- [maxRefFrames](generated_client.DynamicHlsApiGetLiveHlsStreamRequest.md#maxrefframes)
- [maxVideoBitDepth](generated_client.DynamicHlsApiGetLiveHlsStreamRequest.md#maxvideobitdepth)
- [maxWidth](generated_client.DynamicHlsApiGetLiveHlsStreamRequest.md#maxwidth)
- [mediaSourceId](generated_client.DynamicHlsApiGetLiveHlsStreamRequest.md#mediasourceid)
- [minSegments](generated_client.DynamicHlsApiGetLiveHlsStreamRequest.md#minsegments)
- [params](generated_client.DynamicHlsApiGetLiveHlsStreamRequest.md#params)
- [playSessionId](generated_client.DynamicHlsApiGetLiveHlsStreamRequest.md#playsessionid)
- [profile](generated_client.DynamicHlsApiGetLiveHlsStreamRequest.md#profile)
- [requireAvc](generated_client.DynamicHlsApiGetLiveHlsStreamRequest.md#requireavc)
- [requireNonAnamorphic](generated_client.DynamicHlsApiGetLiveHlsStreamRequest.md#requirenonanamorphic)
- [segmentContainer](generated_client.DynamicHlsApiGetLiveHlsStreamRequest.md#segmentcontainer)
- [segmentLength](generated_client.DynamicHlsApiGetLiveHlsStreamRequest.md#segmentlength)
- [startTimeTicks](generated_client.DynamicHlsApiGetLiveHlsStreamRequest.md#starttimeticks)
- [streamOptions](generated_client.DynamicHlsApiGetLiveHlsStreamRequest.md#streamoptions)
- [subtitleCodec](generated_client.DynamicHlsApiGetLiveHlsStreamRequest.md#subtitlecodec)
- [subtitleMethod](generated_client.DynamicHlsApiGetLiveHlsStreamRequest.md#subtitlemethod)
- [subtitleStreamIndex](generated_client.DynamicHlsApiGetLiveHlsStreamRequest.md#subtitlestreamindex)
- [tag](generated_client.DynamicHlsApiGetLiveHlsStreamRequest.md#tag)
- [transcodeReasons](generated_client.DynamicHlsApiGetLiveHlsStreamRequest.md#transcodereasons)
- [transcodingMaxAudioChannels](generated_client.DynamicHlsApiGetLiveHlsStreamRequest.md#transcodingmaxaudiochannels)
- [videoBitRate](generated_client.DynamicHlsApiGetLiveHlsStreamRequest.md#videobitrate)
- [videoCodec](generated_client.DynamicHlsApiGetLiveHlsStreamRequest.md#videocodec)
- [videoStreamIndex](generated_client.DynamicHlsApiGetLiveHlsStreamRequest.md#videostreamindex)
- [width](generated_client.DynamicHlsApiGetLiveHlsStreamRequest.md#width)

## Properties

### \_static

• `Optional` `Readonly` **\_static**: `boolean`

Optional. If true, the original file will be streamed statically without any encoding. Use either no url extension or the original file extension. true/false.

**`memberof`** DynamicHlsApiGetLiveHlsStream

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4561](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L4561)

___

### allowAudioStreamCopy

• `Optional` `Readonly` **allowAudioStreamCopy**: `boolean`

Whether or not to allow copying of the audio stream url.

**`memberof`** DynamicHlsApiGetLiveHlsStream

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4652](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L4652)

___

### allowVideoStreamCopy

• `Optional` `Readonly` **allowVideoStreamCopy**: `boolean`

Whether or not to allow copying of the video stream url.

**`memberof`** DynamicHlsApiGetLiveHlsStream

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4645](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L4645)

___

### audioBitRate

• `Optional` `Readonly` **audioBitRate**: `number`

Optional. Specify an audio bitrate to encode to, e.g. 128000. If omitted this will be left to encoder defaults.

**`memberof`** DynamicHlsApiGetLiveHlsStream

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4680](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L4680)

___

### audioChannels

• `Optional` `Readonly` **audioChannels**: `number`

Optional. Specify a specific number of audio channels to encode to, e.g. 2.

**`memberof`** DynamicHlsApiGetLiveHlsStream

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4687](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L4687)

___

### audioCodec

• `Optional` `Readonly` **audioCodec**: `string`

Optional. Specify a audio codec to encode to, e.g. mp3. If omitted the server will auto-select using the url\&#39;s extension. Options: aac, mp3, vorbis, wma.

**`memberof`** DynamicHlsApiGetLiveHlsStream

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4631](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L4631)

___

### audioSampleRate

• `Optional` `Readonly` **audioSampleRate**: `number`

Optional. Specify a specific audio sample rate, e.g. 44100.

**`memberof`** DynamicHlsApiGetLiveHlsStream

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4666](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L4666)

___

### audioStreamIndex

• `Optional` `Readonly` **audioStreamIndex**: `number`

Optional. The index of the audio stream to use. If omitted the first audio stream will be used.

**`memberof`** DynamicHlsApiGetLiveHlsStream

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4862](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L4862)

___

### breakOnNonKeyFrames

• `Optional` `Readonly` **breakOnNonKeyFrames**: `boolean`

Optional. Whether to break on non key frames.

**`memberof`** DynamicHlsApiGetLiveHlsStream

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4659](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L4659)

___

### container

• `Optional` `Readonly` **container**: `string`

The audio container.

**`memberof`** DynamicHlsApiGetLiveHlsStream

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4554](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L4554)

___

### context

• `Optional` `Readonly` **context**: [`EncodingContext`](../enums/generated_client.EncodingContext.md)

Optional. The MediaBrowser.Model.Dlna.EncodingContext.

**`memberof`** DynamicHlsApiGetLiveHlsStream

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4876](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L4876)

___

### copyTimestamps

• `Optional` `Readonly` **copyTimestamps**: `boolean`

Whether or not to copy timestamps when transcoding with an offset. Defaults to false.

**`memberof`** DynamicHlsApiGetLiveHlsStream

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4729](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L4729)

___

### cpuCoreLimit

• `Optional` `Readonly` **cpuCoreLimit**: `number`

Optional. The limit of how many cpu cores to use.

**`memberof`** DynamicHlsApiGetLiveHlsStream

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4820](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L4820)

___

### deInterlace

• `Optional` `Readonly` **deInterlace**: `boolean`

Optional. Whether to deinterlace the video.

**`memberof`** DynamicHlsApiGetLiveHlsStream

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4799](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L4799)

___

### deviceId

• `Optional` `Readonly` **deviceId**: `string`

The device id of the client requesting. Used to stop encoding processes when needed.

**`memberof`** DynamicHlsApiGetLiveHlsStream

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4624](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L4624)

___

### deviceProfileId

• `Optional` `Readonly` **deviceProfileId**: `string`

Optional. The dlna device profile id to utilize.

**`memberof`** DynamicHlsApiGetLiveHlsStream

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4582](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L4582)

___

### enableAutoStreamCopy

• `Optional` `Readonly` **enableAutoStreamCopy**: `boolean`

Whether or not to allow automatic stream copy if requested values match the original source. Defaults to true.

**`memberof`** DynamicHlsApiGetLiveHlsStream

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4638](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L4638)

___

### enableMpegtsM2TsMode

• `Optional` `Readonly` **enableMpegtsM2TsMode**: `boolean`

Optional. Whether to enable the MpegtsM2Ts mode.

**`memberof`** DynamicHlsApiGetLiveHlsStream

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4834](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L4834)

___

### enableSubtitlesInManifest

• `Optional` `Readonly` **enableSubtitlesInManifest**: `boolean`

Optional. Whether to enable subtitles in the manifest.

**`memberof`** DynamicHlsApiGetLiveHlsStream

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4904](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L4904)

___

### framerate

• `Optional` `Readonly` **framerate**: `number`

Optional. A specific video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements.

**`memberof`** DynamicHlsApiGetLiveHlsStream

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4715](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L4715)

___

### height

• `Optional` `Readonly` **height**: `number`

Optional. The fixed vertical resolution of the encoded video.

**`memberof`** DynamicHlsApiGetLiveHlsStream

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4750](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L4750)

___

### itemId

• `Readonly` **itemId**: `string`

The item id.

**`memberof`** DynamicHlsApiGetLiveHlsStream

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4547](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L4547)

___

### level

• `Optional` `Readonly` **level**: `string`

Optional. Specify a level for the encoder profile (varies by encoder), e.g. 3, 3.1.

**`memberof`** DynamicHlsApiGetLiveHlsStream

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4708](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L4708)

___

### liveStreamId

• `Optional` `Readonly` **liveStreamId**: `string`

The live stream id.

**`memberof`** DynamicHlsApiGetLiveHlsStream

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4827](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L4827)

___

### maxAudioBitDepth

• `Optional` `Readonly` **maxAudioBitDepth**: `number`

Optional. The maximum audio bit depth.

**`memberof`** DynamicHlsApiGetLiveHlsStream

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4673](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L4673)

___

### maxAudioChannels

• `Optional` `Readonly` **maxAudioChannels**: `number`

Optional. Specify a maximum number of audio channels to encode to, e.g. 2.

**`memberof`** DynamicHlsApiGetLiveHlsStream

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4694](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L4694)

___

### maxFramerate

• `Optional` `Readonly` **maxFramerate**: `number`

Optional. A specific maximum video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements.

**`memberof`** DynamicHlsApiGetLiveHlsStream

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4722](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L4722)

___

### maxHeight

• `Optional` `Readonly` **maxHeight**: `number`

Optional. The max height.

**`memberof`** DynamicHlsApiGetLiveHlsStream

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4897](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L4897)

___

### maxRefFrames

• `Optional` `Readonly` **maxRefFrames**: `number`

Optional.

**`memberof`** DynamicHlsApiGetLiveHlsStream

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4778](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L4778)

___

### maxVideoBitDepth

• `Optional` `Readonly` **maxVideoBitDepth**: `number`

Optional. The maximum video bit depth.

**`memberof`** DynamicHlsApiGetLiveHlsStream

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4785](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L4785)

___

### maxWidth

• `Optional` `Readonly` **maxWidth**: `number`

Optional. The max width.

**`memberof`** DynamicHlsApiGetLiveHlsStream

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4890](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L4890)

___

### mediaSourceId

• `Optional` `Readonly` **mediaSourceId**: `string`

The media version id, if playing an alternate version.

**`memberof`** DynamicHlsApiGetLiveHlsStream

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4617](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L4617)

___

### minSegments

• `Optional` `Readonly` **minSegments**: `number`

The minimum number of segments.

**`memberof`** DynamicHlsApiGetLiveHlsStream

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4610](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L4610)

___

### params

• `Optional` `Readonly` **params**: `string`

The streaming parameters.

**`memberof`** DynamicHlsApiGetLiveHlsStream

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4568](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L4568)

___

### playSessionId

• `Optional` `Readonly` **playSessionId**: `string`

The play session id.

**`memberof`** DynamicHlsApiGetLiveHlsStream

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4589](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L4589)

___

### profile

• `Optional` `Readonly` **profile**: `string`

Optional. Specify a specific an encoder profile (varies by encoder), e.g. main, baseline, high.

**`memberof`** DynamicHlsApiGetLiveHlsStream

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4701](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L4701)

___

### requireAvc

• `Optional` `Readonly` **requireAvc**: `boolean`

Optional. Whether to require avc.

**`memberof`** DynamicHlsApiGetLiveHlsStream

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4792](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L4792)

___

### requireNonAnamorphic

• `Optional` `Readonly` **requireNonAnamorphic**: `boolean`

Optional. Whether to require a non anamorphic stream.

**`memberof`** DynamicHlsApiGetLiveHlsStream

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4806](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L4806)

___

### segmentContainer

• `Optional` `Readonly` **segmentContainer**: `string`

The segment container.

**`memberof`** DynamicHlsApiGetLiveHlsStream

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4596](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L4596)

___

### segmentLength

• `Optional` `Readonly` **segmentLength**: `number`

The segment lenght.

**`memberof`** DynamicHlsApiGetLiveHlsStream

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4603](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L4603)

___

### startTimeTicks

• `Optional` `Readonly` **startTimeTicks**: `number`

Optional. Specify a starting offset, in ticks. 1 tick &#x3D; 10000 ms.

**`memberof`** DynamicHlsApiGetLiveHlsStream

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4736](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L4736)

___

### streamOptions

• `Optional` `Readonly` **streamOptions**: `Object`

Optional. The streaming options.

**`memberof`** DynamicHlsApiGetLiveHlsStream

#### Index signature

▪ [key: `string`]: `string`

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4883](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L4883)

___

### subtitleCodec

• `Optional` `Readonly` **subtitleCodec**: `string`

Optional. Specify a subtitle codec to encode to.

**`memberof`** DynamicHlsApiGetLiveHlsStream

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4848](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L4848)

___

### subtitleMethod

• `Optional` `Readonly` **subtitleMethod**: [`SubtitleDeliveryMethod`](../enums/generated_client.SubtitleDeliveryMethod.md)

Optional. Specify the subtitle delivery method.

**`memberof`** DynamicHlsApiGetLiveHlsStream

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4771](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L4771)

___

### subtitleStreamIndex

• `Optional` `Readonly` **subtitleStreamIndex**: `number`

Optional. The index of the subtitle stream to use. If omitted no subtitles will be used.

**`memberof`** DynamicHlsApiGetLiveHlsStream

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4764](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L4764)

___

### tag

• `Optional` `Readonly` **tag**: `string`

The tag.

**`memberof`** DynamicHlsApiGetLiveHlsStream

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4575](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L4575)

___

### transcodeReasons

• `Optional` `Readonly` **transcodeReasons**: `string`

Optional. The transcoding reason.

**`memberof`** DynamicHlsApiGetLiveHlsStream

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4855](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L4855)

___

### transcodingMaxAudioChannels

• `Optional` `Readonly` **transcodingMaxAudioChannels**: `number`

Optional. The maximum number of audio channels to transcode.

**`memberof`** DynamicHlsApiGetLiveHlsStream

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4813](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L4813)

___

### videoBitRate

• `Optional` `Readonly` **videoBitRate**: `number`

Optional. Specify a video bitrate to encode to, e.g. 500000. If omitted this will be left to encoder defaults.

**`memberof`** DynamicHlsApiGetLiveHlsStream

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4757](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L4757)

___

### videoCodec

• `Optional` `Readonly` **videoCodec**: `string`

Optional. Specify a video codec to encode to, e.g. h264. If omitted the server will auto-select using the url\&#39;s extension. Options: h265, h264, mpeg4, theora, vp8, vp9, vpx (deprecated), wmv.

**`memberof`** DynamicHlsApiGetLiveHlsStream

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4841](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L4841)

___

### videoStreamIndex

• `Optional` `Readonly` **videoStreamIndex**: `number`

Optional. The index of the video stream to use. If omitted the first video stream will be used.

**`memberof`** DynamicHlsApiGetLiveHlsStream

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4869](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L4869)

___

### width

• `Optional` `Readonly` **width**: `number`

Optional. The fixed horizontal resolution of the encoded video.

**`memberof`** DynamicHlsApiGetLiveHlsStream

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4743](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L4743)
