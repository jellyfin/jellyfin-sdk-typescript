[jellyfin-sdk-typescript](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / VideoHlsApiGetLiveHlsStreamRequest

# Interface: VideoHlsApiGetLiveHlsStreamRequest

[generated-client](../modules/generated_client.md).VideoHlsApiGetLiveHlsStreamRequest

Request parameters for getLiveHlsStream operation in VideoHlsApi.

**`export`**

**`interface`** VideoHlsApiGetLiveHlsStreamRequest

## Table of contents

### Properties

- [_static](generated_client.VideoHlsApiGetLiveHlsStreamRequest.md#_static)
- [allowAudioStreamCopy](generated_client.VideoHlsApiGetLiveHlsStreamRequest.md#allowaudiostreamcopy)
- [allowVideoStreamCopy](generated_client.VideoHlsApiGetLiveHlsStreamRequest.md#allowvideostreamcopy)
- [audioBitRate](generated_client.VideoHlsApiGetLiveHlsStreamRequest.md#audiobitrate)
- [audioChannels](generated_client.VideoHlsApiGetLiveHlsStreamRequest.md#audiochannels)
- [audioCodec](generated_client.VideoHlsApiGetLiveHlsStreamRequest.md#audiocodec)
- [audioSampleRate](generated_client.VideoHlsApiGetLiveHlsStreamRequest.md#audiosamplerate)
- [audioStreamIndex](generated_client.VideoHlsApiGetLiveHlsStreamRequest.md#audiostreamindex)
- [breakOnNonKeyFrames](generated_client.VideoHlsApiGetLiveHlsStreamRequest.md#breakonnonkeyframes)
- [container](generated_client.VideoHlsApiGetLiveHlsStreamRequest.md#container)
- [context](generated_client.VideoHlsApiGetLiveHlsStreamRequest.md#context)
- [copyTimestamps](generated_client.VideoHlsApiGetLiveHlsStreamRequest.md#copytimestamps)
- [cpuCoreLimit](generated_client.VideoHlsApiGetLiveHlsStreamRequest.md#cpucorelimit)
- [deInterlace](generated_client.VideoHlsApiGetLiveHlsStreamRequest.md#deinterlace)
- [deviceId](generated_client.VideoHlsApiGetLiveHlsStreamRequest.md#deviceid)
- [deviceProfileId](generated_client.VideoHlsApiGetLiveHlsStreamRequest.md#deviceprofileid)
- [enableAutoStreamCopy](generated_client.VideoHlsApiGetLiveHlsStreamRequest.md#enableautostreamcopy)
- [enableMpegtsM2TsMode](generated_client.VideoHlsApiGetLiveHlsStreamRequest.md#enablempegtsm2tsmode)
- [enableSubtitlesInManifest](generated_client.VideoHlsApiGetLiveHlsStreamRequest.md#enablesubtitlesinmanifest)
- [framerate](generated_client.VideoHlsApiGetLiveHlsStreamRequest.md#framerate)
- [height](generated_client.VideoHlsApiGetLiveHlsStreamRequest.md#height)
- [itemId](generated_client.VideoHlsApiGetLiveHlsStreamRequest.md#itemid)
- [level](generated_client.VideoHlsApiGetLiveHlsStreamRequest.md#level)
- [liveStreamId](generated_client.VideoHlsApiGetLiveHlsStreamRequest.md#livestreamid)
- [maxAudioBitDepth](generated_client.VideoHlsApiGetLiveHlsStreamRequest.md#maxaudiobitdepth)
- [maxAudioChannels](generated_client.VideoHlsApiGetLiveHlsStreamRequest.md#maxaudiochannels)
- [maxFramerate](generated_client.VideoHlsApiGetLiveHlsStreamRequest.md#maxframerate)
- [maxHeight](generated_client.VideoHlsApiGetLiveHlsStreamRequest.md#maxheight)
- [maxRefFrames](generated_client.VideoHlsApiGetLiveHlsStreamRequest.md#maxrefframes)
- [maxVideoBitDepth](generated_client.VideoHlsApiGetLiveHlsStreamRequest.md#maxvideobitdepth)
- [maxWidth](generated_client.VideoHlsApiGetLiveHlsStreamRequest.md#maxwidth)
- [mediaSourceId](generated_client.VideoHlsApiGetLiveHlsStreamRequest.md#mediasourceid)
- [minSegments](generated_client.VideoHlsApiGetLiveHlsStreamRequest.md#minsegments)
- [params](generated_client.VideoHlsApiGetLiveHlsStreamRequest.md#params)
- [playSessionId](generated_client.VideoHlsApiGetLiveHlsStreamRequest.md#playsessionid)
- [profile](generated_client.VideoHlsApiGetLiveHlsStreamRequest.md#profile)
- [requireAvc](generated_client.VideoHlsApiGetLiveHlsStreamRequest.md#requireavc)
- [requireNonAnamorphic](generated_client.VideoHlsApiGetLiveHlsStreamRequest.md#requirenonanamorphic)
- [segmentContainer](generated_client.VideoHlsApiGetLiveHlsStreamRequest.md#segmentcontainer)
- [segmentLength](generated_client.VideoHlsApiGetLiveHlsStreamRequest.md#segmentlength)
- [startTimeTicks](generated_client.VideoHlsApiGetLiveHlsStreamRequest.md#starttimeticks)
- [streamOptions](generated_client.VideoHlsApiGetLiveHlsStreamRequest.md#streamoptions)
- [subtitleCodec](generated_client.VideoHlsApiGetLiveHlsStreamRequest.md#subtitlecodec)
- [subtitleMethod](generated_client.VideoHlsApiGetLiveHlsStreamRequest.md#subtitlemethod)
- [subtitleStreamIndex](generated_client.VideoHlsApiGetLiveHlsStreamRequest.md#subtitlestreamindex)
- [tag](generated_client.VideoHlsApiGetLiveHlsStreamRequest.md#tag)
- [transcodeReasons](generated_client.VideoHlsApiGetLiveHlsStreamRequest.md#transcodereasons)
- [transcodingMaxAudioChannels](generated_client.VideoHlsApiGetLiveHlsStreamRequest.md#transcodingmaxaudiochannels)
- [videoBitRate](generated_client.VideoHlsApiGetLiveHlsStreamRequest.md#videobitrate)
- [videoCodec](generated_client.VideoHlsApiGetLiveHlsStreamRequest.md#videocodec)
- [videoStreamIndex](generated_client.VideoHlsApiGetLiveHlsStreamRequest.md#videostreamindex)
- [width](generated_client.VideoHlsApiGetLiveHlsStreamRequest.md#width)

## Properties

### \_static

• `Optional` `Readonly` **\_static**: `boolean`

Optional. If true, the original file will be streamed statically without any encoding. Use either no url extension or the original file extension. true/false.

**`memberof`** VideoHlsApiGetLiveHlsStream

#### Defined in

[generated-client/api/video-hls-api.ts:496](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/video-hls-api.ts#L496)

___

### allowAudioStreamCopy

• `Optional` `Readonly` **allowAudioStreamCopy**: `boolean`

Whether or not to allow copying of the audio stream url.

**`memberof`** VideoHlsApiGetLiveHlsStream

#### Defined in

[generated-client/api/video-hls-api.ts:587](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/video-hls-api.ts#L587)

___

### allowVideoStreamCopy

• `Optional` `Readonly` **allowVideoStreamCopy**: `boolean`

Whether or not to allow copying of the video stream url.

**`memberof`** VideoHlsApiGetLiveHlsStream

#### Defined in

[generated-client/api/video-hls-api.ts:580](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/video-hls-api.ts#L580)

___

### audioBitRate

• `Optional` `Readonly` **audioBitRate**: `number`

Optional. Specify an audio bitrate to encode to, e.g. 128000. If omitted this will be left to encoder defaults.

**`memberof`** VideoHlsApiGetLiveHlsStream

#### Defined in

[generated-client/api/video-hls-api.ts:615](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/video-hls-api.ts#L615)

___

### audioChannels

• `Optional` `Readonly` **audioChannels**: `number`

Optional. Specify a specific number of audio channels to encode to, e.g. 2.

**`memberof`** VideoHlsApiGetLiveHlsStream

#### Defined in

[generated-client/api/video-hls-api.ts:622](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/video-hls-api.ts#L622)

___

### audioCodec

• `Optional` `Readonly` **audioCodec**: `string`

Optional. Specify a audio codec to encode to, e.g. mp3. If omitted the server will auto-select using the url\&#39;s extension. Options: aac, mp3, vorbis, wma.

**`memberof`** VideoHlsApiGetLiveHlsStream

#### Defined in

[generated-client/api/video-hls-api.ts:566](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/video-hls-api.ts#L566)

___

### audioSampleRate

• `Optional` `Readonly` **audioSampleRate**: `number`

Optional. Specify a specific audio sample rate, e.g. 44100.

**`memberof`** VideoHlsApiGetLiveHlsStream

#### Defined in

[generated-client/api/video-hls-api.ts:601](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/video-hls-api.ts#L601)

___

### audioStreamIndex

• `Optional` `Readonly` **audioStreamIndex**: `number`

Optional. The index of the audio stream to use. If omitted the first audio stream will be used.

**`memberof`** VideoHlsApiGetLiveHlsStream

#### Defined in

[generated-client/api/video-hls-api.ts:797](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/video-hls-api.ts#L797)

___

### breakOnNonKeyFrames

• `Optional` `Readonly` **breakOnNonKeyFrames**: `boolean`

Optional. Whether to break on non key frames.

**`memberof`** VideoHlsApiGetLiveHlsStream

#### Defined in

[generated-client/api/video-hls-api.ts:594](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/video-hls-api.ts#L594)

___

### container

• `Optional` `Readonly` **container**: `string`

The audio container.

**`memberof`** VideoHlsApiGetLiveHlsStream

#### Defined in

[generated-client/api/video-hls-api.ts:489](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/video-hls-api.ts#L489)

___

### context

• `Optional` `Readonly` **context**: [`EncodingContext`](../enums/generated_client.EncodingContext.md)

Optional. The MediaBrowser.Model.Dlna.EncodingContext.

**`memberof`** VideoHlsApiGetLiveHlsStream

#### Defined in

[generated-client/api/video-hls-api.ts:811](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/video-hls-api.ts#L811)

___

### copyTimestamps

• `Optional` `Readonly` **copyTimestamps**: `boolean`

Whether or not to copy timestamps when transcoding with an offset. Defaults to false.

**`memberof`** VideoHlsApiGetLiveHlsStream

#### Defined in

[generated-client/api/video-hls-api.ts:664](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/video-hls-api.ts#L664)

___

### cpuCoreLimit

• `Optional` `Readonly` **cpuCoreLimit**: `number`

Optional. The limit of how many cpu cores to use.

**`memberof`** VideoHlsApiGetLiveHlsStream

#### Defined in

[generated-client/api/video-hls-api.ts:755](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/video-hls-api.ts#L755)

___

### deInterlace

• `Optional` `Readonly` **deInterlace**: `boolean`

Optional. Whether to deinterlace the video.

**`memberof`** VideoHlsApiGetLiveHlsStream

#### Defined in

[generated-client/api/video-hls-api.ts:734](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/video-hls-api.ts#L734)

___

### deviceId

• `Optional` `Readonly` **deviceId**: `string`

The device id of the client requesting. Used to stop encoding processes when needed.

**`memberof`** VideoHlsApiGetLiveHlsStream

#### Defined in

[generated-client/api/video-hls-api.ts:559](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/video-hls-api.ts#L559)

___

### deviceProfileId

• `Optional` `Readonly` **deviceProfileId**: `string`

Optional. The dlna device profile id to utilize.

**`memberof`** VideoHlsApiGetLiveHlsStream

#### Defined in

[generated-client/api/video-hls-api.ts:517](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/video-hls-api.ts#L517)

___

### enableAutoStreamCopy

• `Optional` `Readonly` **enableAutoStreamCopy**: `boolean`

Whether or not to allow automatic stream copy if requested values match the original source. Defaults to true.

**`memberof`** VideoHlsApiGetLiveHlsStream

#### Defined in

[generated-client/api/video-hls-api.ts:573](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/video-hls-api.ts#L573)

___

### enableMpegtsM2TsMode

• `Optional` `Readonly` **enableMpegtsM2TsMode**: `boolean`

Optional. Whether to enable the MpegtsM2Ts mode.

**`memberof`** VideoHlsApiGetLiveHlsStream

#### Defined in

[generated-client/api/video-hls-api.ts:769](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/video-hls-api.ts#L769)

___

### enableSubtitlesInManifest

• `Optional` `Readonly` **enableSubtitlesInManifest**: `boolean`

Optional. Whether to enable subtitles in the manifest.

**`memberof`** VideoHlsApiGetLiveHlsStream

#### Defined in

[generated-client/api/video-hls-api.ts:839](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/video-hls-api.ts#L839)

___

### framerate

• `Optional` `Readonly` **framerate**: `number`

Optional. A specific video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements.

**`memberof`** VideoHlsApiGetLiveHlsStream

#### Defined in

[generated-client/api/video-hls-api.ts:650](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/video-hls-api.ts#L650)

___

### height

• `Optional` `Readonly` **height**: `number`

Optional. The fixed vertical resolution of the encoded video.

**`memberof`** VideoHlsApiGetLiveHlsStream

#### Defined in

[generated-client/api/video-hls-api.ts:685](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/video-hls-api.ts#L685)

___

### itemId

• `Readonly` **itemId**: `string`

The item id.

**`memberof`** VideoHlsApiGetLiveHlsStream

#### Defined in

[generated-client/api/video-hls-api.ts:482](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/video-hls-api.ts#L482)

___

### level

• `Optional` `Readonly` **level**: `string`

Optional. Specify a level for the encoder profile (varies by encoder), e.g. 3, 3.1.

**`memberof`** VideoHlsApiGetLiveHlsStream

#### Defined in

[generated-client/api/video-hls-api.ts:643](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/video-hls-api.ts#L643)

___

### liveStreamId

• `Optional` `Readonly` **liveStreamId**: `string`

The live stream id.

**`memberof`** VideoHlsApiGetLiveHlsStream

#### Defined in

[generated-client/api/video-hls-api.ts:762](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/video-hls-api.ts#L762)

___

### maxAudioBitDepth

• `Optional` `Readonly` **maxAudioBitDepth**: `number`

Optional. The maximum audio bit depth.

**`memberof`** VideoHlsApiGetLiveHlsStream

#### Defined in

[generated-client/api/video-hls-api.ts:608](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/video-hls-api.ts#L608)

___

### maxAudioChannels

• `Optional` `Readonly` **maxAudioChannels**: `number`

Optional. Specify a maximum number of audio channels to encode to, e.g. 2.

**`memberof`** VideoHlsApiGetLiveHlsStream

#### Defined in

[generated-client/api/video-hls-api.ts:629](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/video-hls-api.ts#L629)

___

### maxFramerate

• `Optional` `Readonly` **maxFramerate**: `number`

Optional. A specific maximum video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements.

**`memberof`** VideoHlsApiGetLiveHlsStream

#### Defined in

[generated-client/api/video-hls-api.ts:657](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/video-hls-api.ts#L657)

___

### maxHeight

• `Optional` `Readonly` **maxHeight**: `number`

Optional. The max height.

**`memberof`** VideoHlsApiGetLiveHlsStream

#### Defined in

[generated-client/api/video-hls-api.ts:832](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/video-hls-api.ts#L832)

___

### maxRefFrames

• `Optional` `Readonly` **maxRefFrames**: `number`

Optional.

**`memberof`** VideoHlsApiGetLiveHlsStream

#### Defined in

[generated-client/api/video-hls-api.ts:713](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/video-hls-api.ts#L713)

___

### maxVideoBitDepth

• `Optional` `Readonly` **maxVideoBitDepth**: `number`

Optional. The maximum video bit depth.

**`memberof`** VideoHlsApiGetLiveHlsStream

#### Defined in

[generated-client/api/video-hls-api.ts:720](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/video-hls-api.ts#L720)

___

### maxWidth

• `Optional` `Readonly` **maxWidth**: `number`

Optional. The max width.

**`memberof`** VideoHlsApiGetLiveHlsStream

#### Defined in

[generated-client/api/video-hls-api.ts:825](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/video-hls-api.ts#L825)

___

### mediaSourceId

• `Optional` `Readonly` **mediaSourceId**: `string`

The media version id, if playing an alternate version.

**`memberof`** VideoHlsApiGetLiveHlsStream

#### Defined in

[generated-client/api/video-hls-api.ts:552](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/video-hls-api.ts#L552)

___

### minSegments

• `Optional` `Readonly` **minSegments**: `number`

The minimum number of segments.

**`memberof`** VideoHlsApiGetLiveHlsStream

#### Defined in

[generated-client/api/video-hls-api.ts:545](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/video-hls-api.ts#L545)

___

### params

• `Optional` `Readonly` **params**: `string`

The streaming parameters.

**`memberof`** VideoHlsApiGetLiveHlsStream

#### Defined in

[generated-client/api/video-hls-api.ts:503](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/video-hls-api.ts#L503)

___

### playSessionId

• `Optional` `Readonly` **playSessionId**: `string`

The play session id.

**`memberof`** VideoHlsApiGetLiveHlsStream

#### Defined in

[generated-client/api/video-hls-api.ts:524](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/video-hls-api.ts#L524)

___

### profile

• `Optional` `Readonly` **profile**: `string`

Optional. Specify a specific an encoder profile (varies by encoder), e.g. main, baseline, high.

**`memberof`** VideoHlsApiGetLiveHlsStream

#### Defined in

[generated-client/api/video-hls-api.ts:636](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/video-hls-api.ts#L636)

___

### requireAvc

• `Optional` `Readonly` **requireAvc**: `boolean`

Optional. Whether to require avc.

**`memberof`** VideoHlsApiGetLiveHlsStream

#### Defined in

[generated-client/api/video-hls-api.ts:727](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/video-hls-api.ts#L727)

___

### requireNonAnamorphic

• `Optional` `Readonly` **requireNonAnamorphic**: `boolean`

Optional. Whether to require a non anamorphic stream.

**`memberof`** VideoHlsApiGetLiveHlsStream

#### Defined in

[generated-client/api/video-hls-api.ts:741](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/video-hls-api.ts#L741)

___

### segmentContainer

• `Optional` `Readonly` **segmentContainer**: `string`

The segment container.

**`memberof`** VideoHlsApiGetLiveHlsStream

#### Defined in

[generated-client/api/video-hls-api.ts:531](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/video-hls-api.ts#L531)

___

### segmentLength

• `Optional` `Readonly` **segmentLength**: `number`

The segment lenght.

**`memberof`** VideoHlsApiGetLiveHlsStream

#### Defined in

[generated-client/api/video-hls-api.ts:538](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/video-hls-api.ts#L538)

___

### startTimeTicks

• `Optional` `Readonly` **startTimeTicks**: `number`

Optional. Specify a starting offset, in ticks. 1 tick &#x3D; 10000 ms.

**`memberof`** VideoHlsApiGetLiveHlsStream

#### Defined in

[generated-client/api/video-hls-api.ts:671](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/video-hls-api.ts#L671)

___

### streamOptions

• `Optional` `Readonly` **streamOptions**: `Object`

Optional. The streaming options.

**`memberof`** VideoHlsApiGetLiveHlsStream

#### Index signature

▪ [key: `string`]: `string`

#### Defined in

[generated-client/api/video-hls-api.ts:818](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/video-hls-api.ts#L818)

___

### subtitleCodec

• `Optional` `Readonly` **subtitleCodec**: `string`

Optional. Specify a subtitle codec to encode to.

**`memberof`** VideoHlsApiGetLiveHlsStream

#### Defined in

[generated-client/api/video-hls-api.ts:783](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/video-hls-api.ts#L783)

___

### subtitleMethod

• `Optional` `Readonly` **subtitleMethod**: [`SubtitleDeliveryMethod`](../enums/generated_client.SubtitleDeliveryMethod.md)

Optional. Specify the subtitle delivery method.

**`memberof`** VideoHlsApiGetLiveHlsStream

#### Defined in

[generated-client/api/video-hls-api.ts:706](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/video-hls-api.ts#L706)

___

### subtitleStreamIndex

• `Optional` `Readonly` **subtitleStreamIndex**: `number`

Optional. The index of the subtitle stream to use. If omitted no subtitles will be used.

**`memberof`** VideoHlsApiGetLiveHlsStream

#### Defined in

[generated-client/api/video-hls-api.ts:699](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/video-hls-api.ts#L699)

___

### tag

• `Optional` `Readonly` **tag**: `string`

The tag.

**`memberof`** VideoHlsApiGetLiveHlsStream

#### Defined in

[generated-client/api/video-hls-api.ts:510](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/video-hls-api.ts#L510)

___

### transcodeReasons

• `Optional` `Readonly` **transcodeReasons**: `string`

Optional. The transcoding reason.

**`memberof`** VideoHlsApiGetLiveHlsStream

#### Defined in

[generated-client/api/video-hls-api.ts:790](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/video-hls-api.ts#L790)

___

### transcodingMaxAudioChannels

• `Optional` `Readonly` **transcodingMaxAudioChannels**: `number`

Optional. The maximum number of audio channels to transcode.

**`memberof`** VideoHlsApiGetLiveHlsStream

#### Defined in

[generated-client/api/video-hls-api.ts:748](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/video-hls-api.ts#L748)

___

### videoBitRate

• `Optional` `Readonly` **videoBitRate**: `number`

Optional. Specify a video bitrate to encode to, e.g. 500000. If omitted this will be left to encoder defaults.

**`memberof`** VideoHlsApiGetLiveHlsStream

#### Defined in

[generated-client/api/video-hls-api.ts:692](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/video-hls-api.ts#L692)

___

### videoCodec

• `Optional` `Readonly` **videoCodec**: `string`

Optional. Specify a video codec to encode to, e.g. h264. If omitted the server will auto-select using the url\&#39;s extension. Options: h265, h264, mpeg4, theora, vpx, wmv.

**`memberof`** VideoHlsApiGetLiveHlsStream

#### Defined in

[generated-client/api/video-hls-api.ts:776](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/video-hls-api.ts#L776)

___

### videoStreamIndex

• `Optional` `Readonly` **videoStreamIndex**: `number`

Optional. The index of the video stream to use. If omitted the first video stream will be used.

**`memberof`** VideoHlsApiGetLiveHlsStream

#### Defined in

[generated-client/api/video-hls-api.ts:804](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/video-hls-api.ts#L804)

___

### width

• `Optional` `Readonly` **width**: `number`

Optional. The fixed horizontal resolution of the encoded video.

**`memberof`** VideoHlsApiGetLiveHlsStream

#### Defined in

[generated-client/api/video-hls-api.ts:678](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/video-hls-api.ts#L678)
