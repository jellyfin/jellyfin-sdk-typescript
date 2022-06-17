[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / AudioApiHeadAudioStreamRequest

# Interface: AudioApiHeadAudioStreamRequest

[generated-client](../modules/generated_client.md).AudioApiHeadAudioStreamRequest

Request parameters for headAudioStream operation in AudioApi.

**`export`**

**`interface`** AudioApiHeadAudioStreamRequest

## Table of contents

### Properties

- [\_static](generated_client.AudioApiHeadAudioStreamRequest.md#_static)
- [allowAudioStreamCopy](generated_client.AudioApiHeadAudioStreamRequest.md#allowaudiostreamcopy)
- [allowVideoStreamCopy](generated_client.AudioApiHeadAudioStreamRequest.md#allowvideostreamcopy)
- [audioBitRate](generated_client.AudioApiHeadAudioStreamRequest.md#audiobitrate)
- [audioChannels](generated_client.AudioApiHeadAudioStreamRequest.md#audiochannels)
- [audioCodec](generated_client.AudioApiHeadAudioStreamRequest.md#audiocodec)
- [audioSampleRate](generated_client.AudioApiHeadAudioStreamRequest.md#audiosamplerate)
- [audioStreamIndex](generated_client.AudioApiHeadAudioStreamRequest.md#audiostreamindex)
- [breakOnNonKeyFrames](generated_client.AudioApiHeadAudioStreamRequest.md#breakonnonkeyframes)
- [container](generated_client.AudioApiHeadAudioStreamRequest.md#container)
- [context](generated_client.AudioApiHeadAudioStreamRequest.md#context)
- [copyTimestamps](generated_client.AudioApiHeadAudioStreamRequest.md#copytimestamps)
- [cpuCoreLimit](generated_client.AudioApiHeadAudioStreamRequest.md#cpucorelimit)
- [deInterlace](generated_client.AudioApiHeadAudioStreamRequest.md#deinterlace)
- [deviceId](generated_client.AudioApiHeadAudioStreamRequest.md#deviceid)
- [deviceProfileId](generated_client.AudioApiHeadAudioStreamRequest.md#deviceprofileid)
- [enableAutoStreamCopy](generated_client.AudioApiHeadAudioStreamRequest.md#enableautostreamcopy)
- [enableMpegtsM2TsMode](generated_client.AudioApiHeadAudioStreamRequest.md#enablempegtsm2tsmode)
- [framerate](generated_client.AudioApiHeadAudioStreamRequest.md#framerate)
- [height](generated_client.AudioApiHeadAudioStreamRequest.md#height)
- [itemId](generated_client.AudioApiHeadAudioStreamRequest.md#itemid)
- [level](generated_client.AudioApiHeadAudioStreamRequest.md#level)
- [liveStreamId](generated_client.AudioApiHeadAudioStreamRequest.md#livestreamid)
- [maxAudioBitDepth](generated_client.AudioApiHeadAudioStreamRequest.md#maxaudiobitdepth)
- [maxAudioChannels](generated_client.AudioApiHeadAudioStreamRequest.md#maxaudiochannels)
- [maxFramerate](generated_client.AudioApiHeadAudioStreamRequest.md#maxframerate)
- [maxRefFrames](generated_client.AudioApiHeadAudioStreamRequest.md#maxrefframes)
- [maxVideoBitDepth](generated_client.AudioApiHeadAudioStreamRequest.md#maxvideobitdepth)
- [mediaSourceId](generated_client.AudioApiHeadAudioStreamRequest.md#mediasourceid)
- [minSegments](generated_client.AudioApiHeadAudioStreamRequest.md#minsegments)
- [params](generated_client.AudioApiHeadAudioStreamRequest.md#params)
- [playSessionId](generated_client.AudioApiHeadAudioStreamRequest.md#playsessionid)
- [profile](generated_client.AudioApiHeadAudioStreamRequest.md#profile)
- [requireAvc](generated_client.AudioApiHeadAudioStreamRequest.md#requireavc)
- [requireNonAnamorphic](generated_client.AudioApiHeadAudioStreamRequest.md#requirenonanamorphic)
- [segmentContainer](generated_client.AudioApiHeadAudioStreamRequest.md#segmentcontainer)
- [segmentLength](generated_client.AudioApiHeadAudioStreamRequest.md#segmentlength)
- [startTimeTicks](generated_client.AudioApiHeadAudioStreamRequest.md#starttimeticks)
- [streamOptions](generated_client.AudioApiHeadAudioStreamRequest.md#streamoptions)
- [subtitleCodec](generated_client.AudioApiHeadAudioStreamRequest.md#subtitlecodec)
- [subtitleMethod](generated_client.AudioApiHeadAudioStreamRequest.md#subtitlemethod)
- [subtitleStreamIndex](generated_client.AudioApiHeadAudioStreamRequest.md#subtitlestreamindex)
- [tag](generated_client.AudioApiHeadAudioStreamRequest.md#tag)
- [transcodeReasons](generated_client.AudioApiHeadAudioStreamRequest.md#transcodereasons)
- [transcodingMaxAudioChannels](generated_client.AudioApiHeadAudioStreamRequest.md#transcodingmaxaudiochannels)
- [videoBitRate](generated_client.AudioApiHeadAudioStreamRequest.md#videobitrate)
- [videoCodec](generated_client.AudioApiHeadAudioStreamRequest.md#videocodec)
- [videoStreamIndex](generated_client.AudioApiHeadAudioStreamRequest.md#videostreamindex)
- [width](generated_client.AudioApiHeadAudioStreamRequest.md#width)

## Properties

### \_static

• `Optional` `Readonly` **\_static**: `boolean`

Optional. If true, the original file will be streamed statically without any encoding. Use either no url extension or the original file extension. true/false.

**`memberof`** AudioApiHeadAudioStream

#### Defined in

[generated-client/api/audio-api.ts:2343](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/audio-api.ts#L2343)

___

### allowAudioStreamCopy

• `Optional` `Readonly` **allowAudioStreamCopy**: `boolean`

Whether or not to allow copying of the audio stream url.

**`memberof`** AudioApiHeadAudioStream

#### Defined in

[generated-client/api/audio-api.ts:2434](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/audio-api.ts#L2434)

___

### allowVideoStreamCopy

• `Optional` `Readonly` **allowVideoStreamCopy**: `boolean`

Whether or not to allow copying of the video stream url.

**`memberof`** AudioApiHeadAudioStream

#### Defined in

[generated-client/api/audio-api.ts:2427](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/audio-api.ts#L2427)

___

### audioBitRate

• `Optional` `Readonly` **audioBitRate**: `number`

Optional. Specify an audio bitrate to encode to, e.g. 128000. If omitted this will be left to encoder defaults.

**`memberof`** AudioApiHeadAudioStream

#### Defined in

[generated-client/api/audio-api.ts:2462](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/audio-api.ts#L2462)

___

### audioChannels

• `Optional` `Readonly` **audioChannels**: `number`

Optional. Specify a specific number of audio channels to encode to, e.g. 2.

**`memberof`** AudioApiHeadAudioStream

#### Defined in

[generated-client/api/audio-api.ts:2469](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/audio-api.ts#L2469)

___

### audioCodec

• `Optional` `Readonly` **audioCodec**: `string`

Optional. Specify a audio codec to encode to, e.g. mp3. If omitted the server will auto-select using the url\&#39;s extension. Options: aac, mp3, vorbis, wma.

**`memberof`** AudioApiHeadAudioStream

#### Defined in

[generated-client/api/audio-api.ts:2413](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/audio-api.ts#L2413)

___

### audioSampleRate

• `Optional` `Readonly` **audioSampleRate**: `number`

Optional. Specify a specific audio sample rate, e.g. 44100.

**`memberof`** AudioApiHeadAudioStream

#### Defined in

[generated-client/api/audio-api.ts:2448](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/audio-api.ts#L2448)

___

### audioStreamIndex

• `Optional` `Readonly` **audioStreamIndex**: `number`

Optional. The index of the audio stream to use. If omitted the first audio stream will be used.

**`memberof`** AudioApiHeadAudioStream

#### Defined in

[generated-client/api/audio-api.ts:2644](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/audio-api.ts#L2644)

___

### breakOnNonKeyFrames

• `Optional` `Readonly` **breakOnNonKeyFrames**: `boolean`

Optional. Whether to break on non key frames.

**`memberof`** AudioApiHeadAudioStream

#### Defined in

[generated-client/api/audio-api.ts:2441](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/audio-api.ts#L2441)

___

### container

• `Optional` `Readonly` **container**: `string`

The audio container.

**`memberof`** AudioApiHeadAudioStream

#### Defined in

[generated-client/api/audio-api.ts:2336](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/audio-api.ts#L2336)

___

### context

• `Optional` `Readonly` **context**: [`EncodingContext`](../enums/generated_client.EncodingContext.md)

Optional. The MediaBrowser.Model.Dlna.EncodingContext.

**`memberof`** AudioApiHeadAudioStream

#### Defined in

[generated-client/api/audio-api.ts:2658](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/audio-api.ts#L2658)

___

### copyTimestamps

• `Optional` `Readonly` **copyTimestamps**: `boolean`

Whether or not to copy timestamps when transcoding with an offset. Defaults to false.

**`memberof`** AudioApiHeadAudioStream

#### Defined in

[generated-client/api/audio-api.ts:2511](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/audio-api.ts#L2511)

___

### cpuCoreLimit

• `Optional` `Readonly` **cpuCoreLimit**: `number`

Optional. The limit of how many cpu cores to use.

**`memberof`** AudioApiHeadAudioStream

#### Defined in

[generated-client/api/audio-api.ts:2602](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/audio-api.ts#L2602)

___

### deInterlace

• `Optional` `Readonly` **deInterlace**: `boolean`

Optional. Whether to deinterlace the video.

**`memberof`** AudioApiHeadAudioStream

#### Defined in

[generated-client/api/audio-api.ts:2581](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/audio-api.ts#L2581)

___

### deviceId

• `Optional` `Readonly` **deviceId**: `string`

The device id of the client requesting. Used to stop encoding processes when needed.

**`memberof`** AudioApiHeadAudioStream

#### Defined in

[generated-client/api/audio-api.ts:2406](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/audio-api.ts#L2406)

___

### deviceProfileId

• `Optional` `Readonly` **deviceProfileId**: `string`

Optional. The dlna device profile id to utilize.

**`memberof`** AudioApiHeadAudioStream

#### Defined in

[generated-client/api/audio-api.ts:2364](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/audio-api.ts#L2364)

___

### enableAutoStreamCopy

• `Optional` `Readonly` **enableAutoStreamCopy**: `boolean`

Whether or not to allow automatic stream copy if requested values match the original source. Defaults to true.

**`memberof`** AudioApiHeadAudioStream

#### Defined in

[generated-client/api/audio-api.ts:2420](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/audio-api.ts#L2420)

___

### enableMpegtsM2TsMode

• `Optional` `Readonly` **enableMpegtsM2TsMode**: `boolean`

Optional. Whether to enable the MpegtsM2Ts mode.

**`memberof`** AudioApiHeadAudioStream

#### Defined in

[generated-client/api/audio-api.ts:2616](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/audio-api.ts#L2616)

___

### framerate

• `Optional` `Readonly` **framerate**: `number`

Optional. A specific video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements.

**`memberof`** AudioApiHeadAudioStream

#### Defined in

[generated-client/api/audio-api.ts:2497](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/audio-api.ts#L2497)

___

### height

• `Optional` `Readonly` **height**: `number`

Optional. The fixed vertical resolution of the encoded video.

**`memberof`** AudioApiHeadAudioStream

#### Defined in

[generated-client/api/audio-api.ts:2532](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/audio-api.ts#L2532)

___

### itemId

• `Readonly` **itemId**: `string`

The item id.

**`memberof`** AudioApiHeadAudioStream

#### Defined in

[generated-client/api/audio-api.ts:2329](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/audio-api.ts#L2329)

___

### level

• `Optional` `Readonly` **level**: `string`

Optional. Specify a level for the encoder profile (varies by encoder), e.g. 3, 3.1.

**`memberof`** AudioApiHeadAudioStream

#### Defined in

[generated-client/api/audio-api.ts:2490](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/audio-api.ts#L2490)

___

### liveStreamId

• `Optional` `Readonly` **liveStreamId**: `string`

The live stream id.

**`memberof`** AudioApiHeadAudioStream

#### Defined in

[generated-client/api/audio-api.ts:2609](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/audio-api.ts#L2609)

___

### maxAudioBitDepth

• `Optional` `Readonly` **maxAudioBitDepth**: `number`

Optional. The maximum audio bit depth.

**`memberof`** AudioApiHeadAudioStream

#### Defined in

[generated-client/api/audio-api.ts:2455](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/audio-api.ts#L2455)

___

### maxAudioChannels

• `Optional` `Readonly` **maxAudioChannels**: `number`

Optional. Specify a maximum number of audio channels to encode to, e.g. 2.

**`memberof`** AudioApiHeadAudioStream

#### Defined in

[generated-client/api/audio-api.ts:2476](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/audio-api.ts#L2476)

___

### maxFramerate

• `Optional` `Readonly` **maxFramerate**: `number`

Optional. A specific maximum video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements.

**`memberof`** AudioApiHeadAudioStream

#### Defined in

[generated-client/api/audio-api.ts:2504](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/audio-api.ts#L2504)

___

### maxRefFrames

• `Optional` `Readonly` **maxRefFrames**: `number`

Optional.

**`memberof`** AudioApiHeadAudioStream

#### Defined in

[generated-client/api/audio-api.ts:2560](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/audio-api.ts#L2560)

___

### maxVideoBitDepth

• `Optional` `Readonly` **maxVideoBitDepth**: `number`

Optional. The maximum video bit depth.

**`memberof`** AudioApiHeadAudioStream

#### Defined in

[generated-client/api/audio-api.ts:2567](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/audio-api.ts#L2567)

___

### mediaSourceId

• `Optional` `Readonly` **mediaSourceId**: `string`

The media version id, if playing an alternate version.

**`memberof`** AudioApiHeadAudioStream

#### Defined in

[generated-client/api/audio-api.ts:2399](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/audio-api.ts#L2399)

___

### minSegments

• `Optional` `Readonly` **minSegments**: `number`

The minimum number of segments.

**`memberof`** AudioApiHeadAudioStream

#### Defined in

[generated-client/api/audio-api.ts:2392](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/audio-api.ts#L2392)

___

### params

• `Optional` `Readonly` **params**: `string`

The streaming parameters.

**`memberof`** AudioApiHeadAudioStream

#### Defined in

[generated-client/api/audio-api.ts:2350](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/audio-api.ts#L2350)

___

### playSessionId

• `Optional` `Readonly` **playSessionId**: `string`

The play session id.

**`memberof`** AudioApiHeadAudioStream

#### Defined in

[generated-client/api/audio-api.ts:2371](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/audio-api.ts#L2371)

___

### profile

• `Optional` `Readonly` **profile**: `string`

Optional. Specify a specific an encoder profile (varies by encoder), e.g. main, baseline, high.

**`memberof`** AudioApiHeadAudioStream

#### Defined in

[generated-client/api/audio-api.ts:2483](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/audio-api.ts#L2483)

___

### requireAvc

• `Optional` `Readonly` **requireAvc**: `boolean`

Optional. Whether to require avc.

**`memberof`** AudioApiHeadAudioStream

#### Defined in

[generated-client/api/audio-api.ts:2574](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/audio-api.ts#L2574)

___

### requireNonAnamorphic

• `Optional` `Readonly` **requireNonAnamorphic**: `boolean`

Optional. Whether to require a non anamorphic stream.

**`memberof`** AudioApiHeadAudioStream

#### Defined in

[generated-client/api/audio-api.ts:2588](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/audio-api.ts#L2588)

___

### segmentContainer

• `Optional` `Readonly` **segmentContainer**: `string`

The segment container.

**`memberof`** AudioApiHeadAudioStream

#### Defined in

[generated-client/api/audio-api.ts:2378](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/audio-api.ts#L2378)

___

### segmentLength

• `Optional` `Readonly` **segmentLength**: `number`

The segment length.

**`memberof`** AudioApiHeadAudioStream

#### Defined in

[generated-client/api/audio-api.ts:2385](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/audio-api.ts#L2385)

___

### startTimeTicks

• `Optional` `Readonly` **startTimeTicks**: `number`

Optional. Specify a starting offset, in ticks. 1 tick &#x3D; 10000 ms.

**`memberof`** AudioApiHeadAudioStream

#### Defined in

[generated-client/api/audio-api.ts:2518](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/audio-api.ts#L2518)

___

### streamOptions

• `Optional` `Readonly` **streamOptions**: `Object`

Optional. The streaming options.

**`memberof`** AudioApiHeadAudioStream

#### Index signature

▪ [key: `string`]: `string`

#### Defined in

[generated-client/api/audio-api.ts:2665](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/audio-api.ts#L2665)

___

### subtitleCodec

• `Optional` `Readonly` **subtitleCodec**: `string`

Optional. Specify a subtitle codec to encode to.

**`memberof`** AudioApiHeadAudioStream

#### Defined in

[generated-client/api/audio-api.ts:2630](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/audio-api.ts#L2630)

___

### subtitleMethod

• `Optional` `Readonly` **subtitleMethod**: [`SubtitleDeliveryMethod`](../enums/generated_client.SubtitleDeliveryMethod.md)

Optional. Specify the subtitle delivery method.

**`memberof`** AudioApiHeadAudioStream

#### Defined in

[generated-client/api/audio-api.ts:2553](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/audio-api.ts#L2553)

___

### subtitleStreamIndex

• `Optional` `Readonly` **subtitleStreamIndex**: `number`

Optional. The index of the subtitle stream to use. If omitted no subtitles will be used.

**`memberof`** AudioApiHeadAudioStream

#### Defined in

[generated-client/api/audio-api.ts:2546](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/audio-api.ts#L2546)

___

### tag

• `Optional` `Readonly` **tag**: `string`

The tag.

**`memberof`** AudioApiHeadAudioStream

#### Defined in

[generated-client/api/audio-api.ts:2357](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/audio-api.ts#L2357)

___

### transcodeReasons

• `Optional` `Readonly` **transcodeReasons**: `string`

Optional. The transcoding reason.

**`memberof`** AudioApiHeadAudioStream

#### Defined in

[generated-client/api/audio-api.ts:2637](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/audio-api.ts#L2637)

___

### transcodingMaxAudioChannels

• `Optional` `Readonly` **transcodingMaxAudioChannels**: `number`

Optional. The maximum number of audio channels to transcode.

**`memberof`** AudioApiHeadAudioStream

#### Defined in

[generated-client/api/audio-api.ts:2595](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/audio-api.ts#L2595)

___

### videoBitRate

• `Optional` `Readonly` **videoBitRate**: `number`

Optional. Specify a video bitrate to encode to, e.g. 500000. If omitted this will be left to encoder defaults.

**`memberof`** AudioApiHeadAudioStream

#### Defined in

[generated-client/api/audio-api.ts:2539](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/audio-api.ts#L2539)

___

### videoCodec

• `Optional` `Readonly` **videoCodec**: `string`

Optional. Specify a video codec to encode to, e.g. h264. If omitted the server will auto-select using the url\&#39;s extension. Options: h265, h264, mpeg4, theora, vp8, vp9, vpx (deprecated), wmv.

**`memberof`** AudioApiHeadAudioStream

#### Defined in

[generated-client/api/audio-api.ts:2623](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/audio-api.ts#L2623)

___

### videoStreamIndex

• `Optional` `Readonly` **videoStreamIndex**: `number`

Optional. The index of the video stream to use. If omitted the first video stream will be used.

**`memberof`** AudioApiHeadAudioStream

#### Defined in

[generated-client/api/audio-api.ts:2651](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/audio-api.ts#L2651)

___

### width

• `Optional` `Readonly` **width**: `number`

Optional. The fixed horizontal resolution of the encoded video.

**`memberof`** AudioApiHeadAudioStream

#### Defined in

[generated-client/api/audio-api.ts:2525](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/audio-api.ts#L2525)
