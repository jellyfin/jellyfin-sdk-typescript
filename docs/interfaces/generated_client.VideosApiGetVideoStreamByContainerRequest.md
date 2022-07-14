[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / VideosApiGetVideoStreamByContainerRequest

# Interface: VideosApiGetVideoStreamByContainerRequest

[generated-client](../modules/generated_client.md).VideosApiGetVideoStreamByContainerRequest

Request parameters for getVideoStreamByContainer operation in VideosApi.

**`export`**

**`interface`** VideosApiGetVideoStreamByContainerRequest

## Table of contents

### Properties

- [\_static](generated_client.VideosApiGetVideoStreamByContainerRequest.md#_static)
- [allowAudioStreamCopy](generated_client.VideosApiGetVideoStreamByContainerRequest.md#allowaudiostreamcopy)
- [allowVideoStreamCopy](generated_client.VideosApiGetVideoStreamByContainerRequest.md#allowvideostreamcopy)
- [audioBitRate](generated_client.VideosApiGetVideoStreamByContainerRequest.md#audiobitrate)
- [audioChannels](generated_client.VideosApiGetVideoStreamByContainerRequest.md#audiochannels)
- [audioCodec](generated_client.VideosApiGetVideoStreamByContainerRequest.md#audiocodec)
- [audioSampleRate](generated_client.VideosApiGetVideoStreamByContainerRequest.md#audiosamplerate)
- [audioStreamIndex](generated_client.VideosApiGetVideoStreamByContainerRequest.md#audiostreamindex)
- [breakOnNonKeyFrames](generated_client.VideosApiGetVideoStreamByContainerRequest.md#breakonnonkeyframes)
- [container](generated_client.VideosApiGetVideoStreamByContainerRequest.md#container)
- [context](generated_client.VideosApiGetVideoStreamByContainerRequest.md#context)
- [copyTimestamps](generated_client.VideosApiGetVideoStreamByContainerRequest.md#copytimestamps)
- [cpuCoreLimit](generated_client.VideosApiGetVideoStreamByContainerRequest.md#cpucorelimit)
- [deInterlace](generated_client.VideosApiGetVideoStreamByContainerRequest.md#deinterlace)
- [deviceId](generated_client.VideosApiGetVideoStreamByContainerRequest.md#deviceid)
- [deviceProfileId](generated_client.VideosApiGetVideoStreamByContainerRequest.md#deviceprofileid)
- [enableAutoStreamCopy](generated_client.VideosApiGetVideoStreamByContainerRequest.md#enableautostreamcopy)
- [enableMpegtsM2TsMode](generated_client.VideosApiGetVideoStreamByContainerRequest.md#enablempegtsm2tsmode)
- [framerate](generated_client.VideosApiGetVideoStreamByContainerRequest.md#framerate)
- [height](generated_client.VideosApiGetVideoStreamByContainerRequest.md#height)
- [itemId](generated_client.VideosApiGetVideoStreamByContainerRequest.md#itemid)
- [level](generated_client.VideosApiGetVideoStreamByContainerRequest.md#level)
- [liveStreamId](generated_client.VideosApiGetVideoStreamByContainerRequest.md#livestreamid)
- [maxAudioBitDepth](generated_client.VideosApiGetVideoStreamByContainerRequest.md#maxaudiobitdepth)
- [maxAudioChannels](generated_client.VideosApiGetVideoStreamByContainerRequest.md#maxaudiochannels)
- [maxFramerate](generated_client.VideosApiGetVideoStreamByContainerRequest.md#maxframerate)
- [maxHeight](generated_client.VideosApiGetVideoStreamByContainerRequest.md#maxheight)
- [maxRefFrames](generated_client.VideosApiGetVideoStreamByContainerRequest.md#maxrefframes)
- [maxVideoBitDepth](generated_client.VideosApiGetVideoStreamByContainerRequest.md#maxvideobitdepth)
- [maxWidth](generated_client.VideosApiGetVideoStreamByContainerRequest.md#maxwidth)
- [mediaSourceId](generated_client.VideosApiGetVideoStreamByContainerRequest.md#mediasourceid)
- [minSegments](generated_client.VideosApiGetVideoStreamByContainerRequest.md#minsegments)
- [params](generated_client.VideosApiGetVideoStreamByContainerRequest.md#params)
- [playSessionId](generated_client.VideosApiGetVideoStreamByContainerRequest.md#playsessionid)
- [profile](generated_client.VideosApiGetVideoStreamByContainerRequest.md#profile)
- [requireAvc](generated_client.VideosApiGetVideoStreamByContainerRequest.md#requireavc)
- [requireNonAnamorphic](generated_client.VideosApiGetVideoStreamByContainerRequest.md#requirenonanamorphic)
- [segmentContainer](generated_client.VideosApiGetVideoStreamByContainerRequest.md#segmentcontainer)
- [segmentLength](generated_client.VideosApiGetVideoStreamByContainerRequest.md#segmentlength)
- [startTimeTicks](generated_client.VideosApiGetVideoStreamByContainerRequest.md#starttimeticks)
- [streamOptions](generated_client.VideosApiGetVideoStreamByContainerRequest.md#streamoptions)
- [subtitleCodec](generated_client.VideosApiGetVideoStreamByContainerRequest.md#subtitlecodec)
- [subtitleMethod](generated_client.VideosApiGetVideoStreamByContainerRequest.md#subtitlemethod)
- [subtitleStreamIndex](generated_client.VideosApiGetVideoStreamByContainerRequest.md#subtitlestreamindex)
- [tag](generated_client.VideosApiGetVideoStreamByContainerRequest.md#tag)
- [transcodeReasons](generated_client.VideosApiGetVideoStreamByContainerRequest.md#transcodereasons)
- [transcodingMaxAudioChannels](generated_client.VideosApiGetVideoStreamByContainerRequest.md#transcodingmaxaudiochannels)
- [videoBitRate](generated_client.VideosApiGetVideoStreamByContainerRequest.md#videobitrate)
- [videoCodec](generated_client.VideosApiGetVideoStreamByContainerRequest.md#videocodec)
- [videoStreamIndex](generated_client.VideosApiGetVideoStreamByContainerRequest.md#videostreamindex)
- [width](generated_client.VideosApiGetVideoStreamByContainerRequest.md#width)

## Properties

### \_static

• `Optional` `Readonly` **\_static**: `boolean`

Optional. If true, the original file will be streamed statically without any encoding. Use either no url extension or the original file extension. true/false.

**`memberof`** VideosApiGetVideoStreamByContainer

#### Defined in

[generated-client/api/videos-api.ts:2286](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/videos-api.ts#L2286)

___

### allowAudioStreamCopy

• `Optional` `Readonly` **allowAudioStreamCopy**: `boolean`

Whether or not to allow copying of the audio stream url.

**`memberof`** VideosApiGetVideoStreamByContainer

#### Defined in

[generated-client/api/videos-api.ts:2377](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/videos-api.ts#L2377)

___

### allowVideoStreamCopy

• `Optional` `Readonly` **allowVideoStreamCopy**: `boolean`

Whether or not to allow copying of the video stream url.

**`memberof`** VideosApiGetVideoStreamByContainer

#### Defined in

[generated-client/api/videos-api.ts:2370](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/videos-api.ts#L2370)

___

### audioBitRate

• `Optional` `Readonly` **audioBitRate**: `number`

Optional. Specify an audio bitrate to encode to, e.g. 128000. If omitted this will be left to encoder defaults.

**`memberof`** VideosApiGetVideoStreamByContainer

#### Defined in

[generated-client/api/videos-api.ts:2405](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/videos-api.ts#L2405)

___

### audioChannels

• `Optional` `Readonly` **audioChannels**: `number`

Optional. Specify a specific number of audio channels to encode to, e.g. 2.

**`memberof`** VideosApiGetVideoStreamByContainer

#### Defined in

[generated-client/api/videos-api.ts:2412](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/videos-api.ts#L2412)

___

### audioCodec

• `Optional` `Readonly` **audioCodec**: `string`

Optional. Specify a audio codec to encode to, e.g. mp3. If omitted the server will auto-select using the url\&#39;s extension. Options: aac, mp3, vorbis, wma.

**`memberof`** VideosApiGetVideoStreamByContainer

#### Defined in

[generated-client/api/videos-api.ts:2356](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/videos-api.ts#L2356)

___

### audioSampleRate

• `Optional` `Readonly` **audioSampleRate**: `number`

Optional. Specify a specific audio sample rate, e.g. 44100.

**`memberof`** VideosApiGetVideoStreamByContainer

#### Defined in

[generated-client/api/videos-api.ts:2391](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/videos-api.ts#L2391)

___

### audioStreamIndex

• `Optional` `Readonly` **audioStreamIndex**: `number`

Optional. The index of the audio stream to use. If omitted the first audio stream will be used.

**`memberof`** VideosApiGetVideoStreamByContainer

#### Defined in

[generated-client/api/videos-api.ts:2601](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/videos-api.ts#L2601)

___

### breakOnNonKeyFrames

• `Optional` `Readonly` **breakOnNonKeyFrames**: `boolean`

Optional. Whether to break on non key frames.

**`memberof`** VideosApiGetVideoStreamByContainer

#### Defined in

[generated-client/api/videos-api.ts:2384](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/videos-api.ts#L2384)

___

### container

• `Readonly` **container**: `string`

The video container. Possible values are: ts, webm, asf, wmv, ogv, mp4, m4v, mkv, mpeg, mpg, avi, 3gp, wmv, wtv, m2ts, mov, iso, flv.

**`memberof`** VideosApiGetVideoStreamByContainer

#### Defined in

[generated-client/api/videos-api.ts:2279](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/videos-api.ts#L2279)

___

### context

• `Optional` `Readonly` **context**: [`EncodingContext`](../enums/generated_client.EncodingContext.md)

Optional. The MediaBrowser.Model.Dlna.EncodingContext.

**`memberof`** VideosApiGetVideoStreamByContainer

#### Defined in

[generated-client/api/videos-api.ts:2615](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/videos-api.ts#L2615)

___

### copyTimestamps

• `Optional` `Readonly` **copyTimestamps**: `boolean`

Whether or not to copy timestamps when transcoding with an offset. Defaults to false.

**`memberof`** VideosApiGetVideoStreamByContainer

#### Defined in

[generated-client/api/videos-api.ts:2454](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/videos-api.ts#L2454)

___

### cpuCoreLimit

• `Optional` `Readonly` **cpuCoreLimit**: `number`

Optional. The limit of how many cpu cores to use.

**`memberof`** VideosApiGetVideoStreamByContainer

#### Defined in

[generated-client/api/videos-api.ts:2559](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/videos-api.ts#L2559)

___

### deInterlace

• `Optional` `Readonly` **deInterlace**: `boolean`

Optional. Whether to deinterlace the video.

**`memberof`** VideosApiGetVideoStreamByContainer

#### Defined in

[generated-client/api/videos-api.ts:2538](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/videos-api.ts#L2538)

___

### deviceId

• `Optional` `Readonly` **deviceId**: `string`

The device id of the client requesting. Used to stop encoding processes when needed.

**`memberof`** VideosApiGetVideoStreamByContainer

#### Defined in

[generated-client/api/videos-api.ts:2349](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/videos-api.ts#L2349)

___

### deviceProfileId

• `Optional` `Readonly` **deviceProfileId**: `string`

Optional. The dlna device profile id to utilize.

**`memberof`** VideosApiGetVideoStreamByContainer

#### Defined in

[generated-client/api/videos-api.ts:2307](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/videos-api.ts#L2307)

___

### enableAutoStreamCopy

• `Optional` `Readonly` **enableAutoStreamCopy**: `boolean`

Whether or not to allow automatic stream copy if requested values match the original source. Defaults to true.

**`memberof`** VideosApiGetVideoStreamByContainer

#### Defined in

[generated-client/api/videos-api.ts:2363](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/videos-api.ts#L2363)

___

### enableMpegtsM2TsMode

• `Optional` `Readonly` **enableMpegtsM2TsMode**: `boolean`

Optional. Whether to enable the MpegtsM2Ts mode.

**`memberof`** VideosApiGetVideoStreamByContainer

#### Defined in

[generated-client/api/videos-api.ts:2573](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/videos-api.ts#L2573)

___

### framerate

• `Optional` `Readonly` **framerate**: `number`

Optional. A specific video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements.

**`memberof`** VideosApiGetVideoStreamByContainer

#### Defined in

[generated-client/api/videos-api.ts:2440](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/videos-api.ts#L2440)

___

### height

• `Optional` `Readonly` **height**: `number`

Optional. The fixed vertical resolution of the encoded video.

**`memberof`** VideosApiGetVideoStreamByContainer

#### Defined in

[generated-client/api/videos-api.ts:2475](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/videos-api.ts#L2475)

___

### itemId

• `Readonly` **itemId**: `string`

The item id.

**`memberof`** VideosApiGetVideoStreamByContainer

#### Defined in

[generated-client/api/videos-api.ts:2272](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/videos-api.ts#L2272)

___

### level

• `Optional` `Readonly` **level**: `string`

Optional. Specify a level for the encoder profile (varies by encoder), e.g. 3, 3.1.

**`memberof`** VideosApiGetVideoStreamByContainer

#### Defined in

[generated-client/api/videos-api.ts:2433](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/videos-api.ts#L2433)

___

### liveStreamId

• `Optional` `Readonly` **liveStreamId**: `string`

The live stream id.

**`memberof`** VideosApiGetVideoStreamByContainer

#### Defined in

[generated-client/api/videos-api.ts:2566](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/videos-api.ts#L2566)

___

### maxAudioBitDepth

• `Optional` `Readonly` **maxAudioBitDepth**: `number`

Optional. The maximum audio bit depth.

**`memberof`** VideosApiGetVideoStreamByContainer

#### Defined in

[generated-client/api/videos-api.ts:2398](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/videos-api.ts#L2398)

___

### maxAudioChannels

• `Optional` `Readonly` **maxAudioChannels**: `number`

Optional. Specify a maximum number of audio channels to encode to, e.g. 2.

**`memberof`** VideosApiGetVideoStreamByContainer

#### Defined in

[generated-client/api/videos-api.ts:2419](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/videos-api.ts#L2419)

___

### maxFramerate

• `Optional` `Readonly` **maxFramerate**: `number`

Optional. A specific maximum video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements.

**`memberof`** VideosApiGetVideoStreamByContainer

#### Defined in

[generated-client/api/videos-api.ts:2447](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/videos-api.ts#L2447)

___

### maxHeight

• `Optional` `Readonly` **maxHeight**: `number`

Optional. The maximum vertical resolution of the encoded video.

**`memberof`** VideosApiGetVideoStreamByContainer

#### Defined in

[generated-client/api/videos-api.ts:2489](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/videos-api.ts#L2489)

___

### maxRefFrames

• `Optional` `Readonly` **maxRefFrames**: `number`

Optional.

**`memberof`** VideosApiGetVideoStreamByContainer

#### Defined in

[generated-client/api/videos-api.ts:2517](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/videos-api.ts#L2517)

___

### maxVideoBitDepth

• `Optional` `Readonly` **maxVideoBitDepth**: `number`

Optional. The maximum video bit depth.

**`memberof`** VideosApiGetVideoStreamByContainer

#### Defined in

[generated-client/api/videos-api.ts:2524](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/videos-api.ts#L2524)

___

### maxWidth

• `Optional` `Readonly` **maxWidth**: `number`

Optional. The maximum horizontal resolution of the encoded video.

**`memberof`** VideosApiGetVideoStreamByContainer

#### Defined in

[generated-client/api/videos-api.ts:2482](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/videos-api.ts#L2482)

___

### mediaSourceId

• `Optional` `Readonly` **mediaSourceId**: `string`

The media version id, if playing an alternate version.

**`memberof`** VideosApiGetVideoStreamByContainer

#### Defined in

[generated-client/api/videos-api.ts:2342](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/videos-api.ts#L2342)

___

### minSegments

• `Optional` `Readonly` **minSegments**: `number`

The minimum number of segments.

**`memberof`** VideosApiGetVideoStreamByContainer

#### Defined in

[generated-client/api/videos-api.ts:2335](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/videos-api.ts#L2335)

___

### params

• `Optional` `Readonly` **params**: `string`

The streaming parameters.

**`memberof`** VideosApiGetVideoStreamByContainer

#### Defined in

[generated-client/api/videos-api.ts:2293](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/videos-api.ts#L2293)

___

### playSessionId

• `Optional` `Readonly` **playSessionId**: `string`

The play session id.

**`memberof`** VideosApiGetVideoStreamByContainer

#### Defined in

[generated-client/api/videos-api.ts:2314](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/videos-api.ts#L2314)

___

### profile

• `Optional` `Readonly` **profile**: `string`

Optional. Specify a specific an encoder profile (varies by encoder), e.g. main, baseline, high.

**`memberof`** VideosApiGetVideoStreamByContainer

#### Defined in

[generated-client/api/videos-api.ts:2426](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/videos-api.ts#L2426)

___

### requireAvc

• `Optional` `Readonly` **requireAvc**: `boolean`

Optional. Whether to require avc.

**`memberof`** VideosApiGetVideoStreamByContainer

#### Defined in

[generated-client/api/videos-api.ts:2531](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/videos-api.ts#L2531)

___

### requireNonAnamorphic

• `Optional` `Readonly` **requireNonAnamorphic**: `boolean`

Optional. Whether to require a non anamorphic stream.

**`memberof`** VideosApiGetVideoStreamByContainer

#### Defined in

[generated-client/api/videos-api.ts:2545](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/videos-api.ts#L2545)

___

### segmentContainer

• `Optional` `Readonly` **segmentContainer**: `string`

The segment container.

**`memberof`** VideosApiGetVideoStreamByContainer

#### Defined in

[generated-client/api/videos-api.ts:2321](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/videos-api.ts#L2321)

___

### segmentLength

• `Optional` `Readonly` **segmentLength**: `number`

The segment length.

**`memberof`** VideosApiGetVideoStreamByContainer

#### Defined in

[generated-client/api/videos-api.ts:2328](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/videos-api.ts#L2328)

___

### startTimeTicks

• `Optional` `Readonly` **startTimeTicks**: `number`

Optional. Specify a starting offset, in ticks. 1 tick &#x3D; 10000 ms.

**`memberof`** VideosApiGetVideoStreamByContainer

#### Defined in

[generated-client/api/videos-api.ts:2461](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/videos-api.ts#L2461)

___

### streamOptions

• `Optional` `Readonly` **streamOptions**: `Object`

Optional. The streaming options.

**`memberof`** VideosApiGetVideoStreamByContainer

#### Index signature

▪ [key: `string`]: `string`

#### Defined in

[generated-client/api/videos-api.ts:2622](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/videos-api.ts#L2622)

___

### subtitleCodec

• `Optional` `Readonly` **subtitleCodec**: `string`

Optional. Specify a subtitle codec to encode to.

**`memberof`** VideosApiGetVideoStreamByContainer

#### Defined in

[generated-client/api/videos-api.ts:2587](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/videos-api.ts#L2587)

___

### subtitleMethod

• `Optional` `Readonly` **subtitleMethod**: [`SubtitleDeliveryMethod`](../enums/generated_client.SubtitleDeliveryMethod.md)

Optional. Specify the subtitle delivery method.

**`memberof`** VideosApiGetVideoStreamByContainer

#### Defined in

[generated-client/api/videos-api.ts:2510](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/videos-api.ts#L2510)

___

### subtitleStreamIndex

• `Optional` `Readonly` **subtitleStreamIndex**: `number`

Optional. The index of the subtitle stream to use. If omitted no subtitles will be used.

**`memberof`** VideosApiGetVideoStreamByContainer

#### Defined in

[generated-client/api/videos-api.ts:2503](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/videos-api.ts#L2503)

___

### tag

• `Optional` `Readonly` **tag**: `string`

The tag.

**`memberof`** VideosApiGetVideoStreamByContainer

#### Defined in

[generated-client/api/videos-api.ts:2300](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/videos-api.ts#L2300)

___

### transcodeReasons

• `Optional` `Readonly` **transcodeReasons**: `string`

Optional. The transcoding reason.

**`memberof`** VideosApiGetVideoStreamByContainer

#### Defined in

[generated-client/api/videos-api.ts:2594](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/videos-api.ts#L2594)

___

### transcodingMaxAudioChannels

• `Optional` `Readonly` **transcodingMaxAudioChannels**: `number`

Optional. The maximum number of audio channels to transcode.

**`memberof`** VideosApiGetVideoStreamByContainer

#### Defined in

[generated-client/api/videos-api.ts:2552](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/videos-api.ts#L2552)

___

### videoBitRate

• `Optional` `Readonly` **videoBitRate**: `number`

Optional. Specify a video bitrate to encode to, e.g. 500000. If omitted this will be left to encoder defaults.

**`memberof`** VideosApiGetVideoStreamByContainer

#### Defined in

[generated-client/api/videos-api.ts:2496](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/videos-api.ts#L2496)

___

### videoCodec

• `Optional` `Readonly` **videoCodec**: `string`

Optional. Specify a video codec to encode to, e.g. h264. If omitted the server will auto-select using the url\&#39;s extension. Options: h265, h264, mpeg4, theora, vp8, vp9, vpx (deprecated), wmv.

**`memberof`** VideosApiGetVideoStreamByContainer

#### Defined in

[generated-client/api/videos-api.ts:2580](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/videos-api.ts#L2580)

___

### videoStreamIndex

• `Optional` `Readonly` **videoStreamIndex**: `number`

Optional. The index of the video stream to use. If omitted the first video stream will be used.

**`memberof`** VideosApiGetVideoStreamByContainer

#### Defined in

[generated-client/api/videos-api.ts:2608](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/videos-api.ts#L2608)

___

### width

• `Optional` `Readonly` **width**: `number`

Optional. The fixed horizontal resolution of the encoded video.

**`memberof`** VideosApiGetVideoStreamByContainer

#### Defined in

[generated-client/api/videos-api.ts:2468](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/videos-api.ts#L2468)
