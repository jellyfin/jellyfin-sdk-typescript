[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / VideosApiHeadVideoStreamRequest

# Interface: VideosApiHeadVideoStreamRequest

[generated-client](../modules/generated_client.md).VideosApiHeadVideoStreamRequest

Request parameters for headVideoStream operation in VideosApi.

**`export`**

**`interface`** VideosApiHeadVideoStreamRequest

## Table of contents

### Properties

- [_static](generated_client.VideosApiHeadVideoStreamRequest.md#_static)
- [allowAudioStreamCopy](generated_client.VideosApiHeadVideoStreamRequest.md#allowaudiostreamcopy)
- [allowVideoStreamCopy](generated_client.VideosApiHeadVideoStreamRequest.md#allowvideostreamcopy)
- [audioBitRate](generated_client.VideosApiHeadVideoStreamRequest.md#audiobitrate)
- [audioChannels](generated_client.VideosApiHeadVideoStreamRequest.md#audiochannels)
- [audioCodec](generated_client.VideosApiHeadVideoStreamRequest.md#audiocodec)
- [audioSampleRate](generated_client.VideosApiHeadVideoStreamRequest.md#audiosamplerate)
- [audioStreamIndex](generated_client.VideosApiHeadVideoStreamRequest.md#audiostreamindex)
- [breakOnNonKeyFrames](generated_client.VideosApiHeadVideoStreamRequest.md#breakonnonkeyframes)
- [container](generated_client.VideosApiHeadVideoStreamRequest.md#container)
- [context](generated_client.VideosApiHeadVideoStreamRequest.md#context)
- [copyTimestamps](generated_client.VideosApiHeadVideoStreamRequest.md#copytimestamps)
- [cpuCoreLimit](generated_client.VideosApiHeadVideoStreamRequest.md#cpucorelimit)
- [deInterlace](generated_client.VideosApiHeadVideoStreamRequest.md#deinterlace)
- [deviceId](generated_client.VideosApiHeadVideoStreamRequest.md#deviceid)
- [deviceProfileId](generated_client.VideosApiHeadVideoStreamRequest.md#deviceprofileid)
- [enableAutoStreamCopy](generated_client.VideosApiHeadVideoStreamRequest.md#enableautostreamcopy)
- [enableMpegtsM2TsMode](generated_client.VideosApiHeadVideoStreamRequest.md#enablempegtsm2tsmode)
- [framerate](generated_client.VideosApiHeadVideoStreamRequest.md#framerate)
- [height](generated_client.VideosApiHeadVideoStreamRequest.md#height)
- [itemId](generated_client.VideosApiHeadVideoStreamRequest.md#itemid)
- [level](generated_client.VideosApiHeadVideoStreamRequest.md#level)
- [liveStreamId](generated_client.VideosApiHeadVideoStreamRequest.md#livestreamid)
- [maxAudioBitDepth](generated_client.VideosApiHeadVideoStreamRequest.md#maxaudiobitdepth)
- [maxAudioChannels](generated_client.VideosApiHeadVideoStreamRequest.md#maxaudiochannels)
- [maxFramerate](generated_client.VideosApiHeadVideoStreamRequest.md#maxframerate)
- [maxHeight](generated_client.VideosApiHeadVideoStreamRequest.md#maxheight)
- [maxRefFrames](generated_client.VideosApiHeadVideoStreamRequest.md#maxrefframes)
- [maxVideoBitDepth](generated_client.VideosApiHeadVideoStreamRequest.md#maxvideobitdepth)
- [maxWidth](generated_client.VideosApiHeadVideoStreamRequest.md#maxwidth)
- [mediaSourceId](generated_client.VideosApiHeadVideoStreamRequest.md#mediasourceid)
- [minSegments](generated_client.VideosApiHeadVideoStreamRequest.md#minsegments)
- [params](generated_client.VideosApiHeadVideoStreamRequest.md#params)
- [playSessionId](generated_client.VideosApiHeadVideoStreamRequest.md#playsessionid)
- [profile](generated_client.VideosApiHeadVideoStreamRequest.md#profile)
- [requireAvc](generated_client.VideosApiHeadVideoStreamRequest.md#requireavc)
- [requireNonAnamorphic](generated_client.VideosApiHeadVideoStreamRequest.md#requirenonanamorphic)
- [segmentContainer](generated_client.VideosApiHeadVideoStreamRequest.md#segmentcontainer)
- [segmentLength](generated_client.VideosApiHeadVideoStreamRequest.md#segmentlength)
- [startTimeTicks](generated_client.VideosApiHeadVideoStreamRequest.md#starttimeticks)
- [streamOptions](generated_client.VideosApiHeadVideoStreamRequest.md#streamoptions)
- [subtitleCodec](generated_client.VideosApiHeadVideoStreamRequest.md#subtitlecodec)
- [subtitleMethod](generated_client.VideosApiHeadVideoStreamRequest.md#subtitlemethod)
- [subtitleStreamIndex](generated_client.VideosApiHeadVideoStreamRequest.md#subtitlestreamindex)
- [tag](generated_client.VideosApiHeadVideoStreamRequest.md#tag)
- [transcodeReasons](generated_client.VideosApiHeadVideoStreamRequest.md#transcodereasons)
- [transcodingMaxAudioChannels](generated_client.VideosApiHeadVideoStreamRequest.md#transcodingmaxaudiochannels)
- [videoBitRate](generated_client.VideosApiHeadVideoStreamRequest.md#videobitrate)
- [videoCodec](generated_client.VideosApiHeadVideoStreamRequest.md#videocodec)
- [videoStreamIndex](generated_client.VideosApiHeadVideoStreamRequest.md#videostreamindex)
- [width](generated_client.VideosApiHeadVideoStreamRequest.md#width)

## Properties

### \_static

• `Optional` `Readonly` **\_static**: `boolean`

Optional. If true, the original file will be streamed statically without any encoding. Use either no url extension or the original file extension. true/false.

**`memberof`** VideosApiHeadVideoStream

#### Defined in

[generated-client/api/videos-api.ts:2650](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/videos-api.ts#L2650)

___

### allowAudioStreamCopy

• `Optional` `Readonly` **allowAudioStreamCopy**: `boolean`

Whether or not to allow copying of the audio stream url.

**`memberof`** VideosApiHeadVideoStream

#### Defined in

[generated-client/api/videos-api.ts:2741](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/videos-api.ts#L2741)

___

### allowVideoStreamCopy

• `Optional` `Readonly` **allowVideoStreamCopy**: `boolean`

Whether or not to allow copying of the video stream url.

**`memberof`** VideosApiHeadVideoStream

#### Defined in

[generated-client/api/videos-api.ts:2734](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/videos-api.ts#L2734)

___

### audioBitRate

• `Optional` `Readonly` **audioBitRate**: `number`

Optional. Specify an audio bitrate to encode to, e.g. 128000. If omitted this will be left to encoder defaults.

**`memberof`** VideosApiHeadVideoStream

#### Defined in

[generated-client/api/videos-api.ts:2769](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/videos-api.ts#L2769)

___

### audioChannels

• `Optional` `Readonly` **audioChannels**: `number`

Optional. Specify a specific number of audio channels to encode to, e.g. 2.

**`memberof`** VideosApiHeadVideoStream

#### Defined in

[generated-client/api/videos-api.ts:2776](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/videos-api.ts#L2776)

___

### audioCodec

• `Optional` `Readonly` **audioCodec**: `string`

Optional. Specify a audio codec to encode to, e.g. mp3. If omitted the server will auto-select using the url\&#39;s extension. Options: aac, mp3, vorbis, wma.

**`memberof`** VideosApiHeadVideoStream

#### Defined in

[generated-client/api/videos-api.ts:2720](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/videos-api.ts#L2720)

___

### audioSampleRate

• `Optional` `Readonly` **audioSampleRate**: `number`

Optional. Specify a specific audio sample rate, e.g. 44100.

**`memberof`** VideosApiHeadVideoStream

#### Defined in

[generated-client/api/videos-api.ts:2755](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/videos-api.ts#L2755)

___

### audioStreamIndex

• `Optional` `Readonly` **audioStreamIndex**: `number`

Optional. The index of the audio stream to use. If omitted the first audio stream will be used.

**`memberof`** VideosApiHeadVideoStream

#### Defined in

[generated-client/api/videos-api.ts:2965](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/videos-api.ts#L2965)

___

### breakOnNonKeyFrames

• `Optional` `Readonly` **breakOnNonKeyFrames**: `boolean`

Optional. Whether to break on non key frames.

**`memberof`** VideosApiHeadVideoStream

#### Defined in

[generated-client/api/videos-api.ts:2748](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/videos-api.ts#L2748)

___

### container

• `Optional` `Readonly` **container**: `string`

The video container. Possible values are: ts, webm, asf, wmv, ogv, mp4, m4v, mkv, mpeg, mpg, avi, 3gp, wmv, wtv, m2ts, mov, iso, flv.

**`memberof`** VideosApiHeadVideoStream

#### Defined in

[generated-client/api/videos-api.ts:2643](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/videos-api.ts#L2643)

___

### context

• `Optional` `Readonly` **context**: [`EncodingContext`](../enums/generated_client.EncodingContext.md)

Optional. The MediaBrowser.Model.Dlna.EncodingContext.

**`memberof`** VideosApiHeadVideoStream

#### Defined in

[generated-client/api/videos-api.ts:2979](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/videos-api.ts#L2979)

___

### copyTimestamps

• `Optional` `Readonly` **copyTimestamps**: `boolean`

Whether or not to copy timestamps when transcoding with an offset. Defaults to false.

**`memberof`** VideosApiHeadVideoStream

#### Defined in

[generated-client/api/videos-api.ts:2818](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/videos-api.ts#L2818)

___

### cpuCoreLimit

• `Optional` `Readonly` **cpuCoreLimit**: `number`

Optional. The limit of how many cpu cores to use.

**`memberof`** VideosApiHeadVideoStream

#### Defined in

[generated-client/api/videos-api.ts:2923](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/videos-api.ts#L2923)

___

### deInterlace

• `Optional` `Readonly` **deInterlace**: `boolean`

Optional. Whether to deinterlace the video.

**`memberof`** VideosApiHeadVideoStream

#### Defined in

[generated-client/api/videos-api.ts:2902](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/videos-api.ts#L2902)

___

### deviceId

• `Optional` `Readonly` **deviceId**: `string`

The device id of the client requesting. Used to stop encoding processes when needed.

**`memberof`** VideosApiHeadVideoStream

#### Defined in

[generated-client/api/videos-api.ts:2713](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/videos-api.ts#L2713)

___

### deviceProfileId

• `Optional` `Readonly` **deviceProfileId**: `string`

Optional. The dlna device profile id to utilize.

**`memberof`** VideosApiHeadVideoStream

#### Defined in

[generated-client/api/videos-api.ts:2671](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/videos-api.ts#L2671)

___

### enableAutoStreamCopy

• `Optional` `Readonly` **enableAutoStreamCopy**: `boolean`

Whether or not to allow automatic stream copy if requested values match the original source. Defaults to true.

**`memberof`** VideosApiHeadVideoStream

#### Defined in

[generated-client/api/videos-api.ts:2727](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/videos-api.ts#L2727)

___

### enableMpegtsM2TsMode

• `Optional` `Readonly` **enableMpegtsM2TsMode**: `boolean`

Optional. Whether to enable the MpegtsM2Ts mode.

**`memberof`** VideosApiHeadVideoStream

#### Defined in

[generated-client/api/videos-api.ts:2937](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/videos-api.ts#L2937)

___

### framerate

• `Optional` `Readonly` **framerate**: `number`

Optional. A specific video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements.

**`memberof`** VideosApiHeadVideoStream

#### Defined in

[generated-client/api/videos-api.ts:2804](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/videos-api.ts#L2804)

___

### height

• `Optional` `Readonly` **height**: `number`

Optional. The fixed vertical resolution of the encoded video.

**`memberof`** VideosApiHeadVideoStream

#### Defined in

[generated-client/api/videos-api.ts:2839](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/videos-api.ts#L2839)

___

### itemId

• `Readonly` **itemId**: `string`

The item id.

**`memberof`** VideosApiHeadVideoStream

#### Defined in

[generated-client/api/videos-api.ts:2636](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/videos-api.ts#L2636)

___

### level

• `Optional` `Readonly` **level**: `string`

Optional. Specify a level for the encoder profile (varies by encoder), e.g. 3, 3.1.

**`memberof`** VideosApiHeadVideoStream

#### Defined in

[generated-client/api/videos-api.ts:2797](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/videos-api.ts#L2797)

___

### liveStreamId

• `Optional` `Readonly` **liveStreamId**: `string`

The live stream id.

**`memberof`** VideosApiHeadVideoStream

#### Defined in

[generated-client/api/videos-api.ts:2930](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/videos-api.ts#L2930)

___

### maxAudioBitDepth

• `Optional` `Readonly` **maxAudioBitDepth**: `number`

Optional. The maximum audio bit depth.

**`memberof`** VideosApiHeadVideoStream

#### Defined in

[generated-client/api/videos-api.ts:2762](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/videos-api.ts#L2762)

___

### maxAudioChannels

• `Optional` `Readonly` **maxAudioChannels**: `number`

Optional. Specify a maximum number of audio channels to encode to, e.g. 2.

**`memberof`** VideosApiHeadVideoStream

#### Defined in

[generated-client/api/videos-api.ts:2783](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/videos-api.ts#L2783)

___

### maxFramerate

• `Optional` `Readonly` **maxFramerate**: `number`

Optional. A specific maximum video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements.

**`memberof`** VideosApiHeadVideoStream

#### Defined in

[generated-client/api/videos-api.ts:2811](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/videos-api.ts#L2811)

___

### maxHeight

• `Optional` `Readonly` **maxHeight**: `number`

Optional. The maximum vertical resolution of the encoded video.

**`memberof`** VideosApiHeadVideoStream

#### Defined in

[generated-client/api/videos-api.ts:2853](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/videos-api.ts#L2853)

___

### maxRefFrames

• `Optional` `Readonly` **maxRefFrames**: `number`

Optional.

**`memberof`** VideosApiHeadVideoStream

#### Defined in

[generated-client/api/videos-api.ts:2881](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/videos-api.ts#L2881)

___

### maxVideoBitDepth

• `Optional` `Readonly` **maxVideoBitDepth**: `number`

Optional. The maximum video bit depth.

**`memberof`** VideosApiHeadVideoStream

#### Defined in

[generated-client/api/videos-api.ts:2888](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/videos-api.ts#L2888)

___

### maxWidth

• `Optional` `Readonly` **maxWidth**: `number`

Optional. The maximum horizontal resolution of the encoded video.

**`memberof`** VideosApiHeadVideoStream

#### Defined in

[generated-client/api/videos-api.ts:2846](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/videos-api.ts#L2846)

___

### mediaSourceId

• `Optional` `Readonly` **mediaSourceId**: `string`

The media version id, if playing an alternate version.

**`memberof`** VideosApiHeadVideoStream

#### Defined in

[generated-client/api/videos-api.ts:2706](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/videos-api.ts#L2706)

___

### minSegments

• `Optional` `Readonly` **minSegments**: `number`

The minimum number of segments.

**`memberof`** VideosApiHeadVideoStream

#### Defined in

[generated-client/api/videos-api.ts:2699](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/videos-api.ts#L2699)

___

### params

• `Optional` `Readonly` **params**: `string`

The streaming parameters.

**`memberof`** VideosApiHeadVideoStream

#### Defined in

[generated-client/api/videos-api.ts:2657](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/videos-api.ts#L2657)

___

### playSessionId

• `Optional` `Readonly` **playSessionId**: `string`

The play session id.

**`memberof`** VideosApiHeadVideoStream

#### Defined in

[generated-client/api/videos-api.ts:2678](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/videos-api.ts#L2678)

___

### profile

• `Optional` `Readonly` **profile**: `string`

Optional. Specify a specific an encoder profile (varies by encoder), e.g. main, baseline, high.

**`memberof`** VideosApiHeadVideoStream

#### Defined in

[generated-client/api/videos-api.ts:2790](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/videos-api.ts#L2790)

___

### requireAvc

• `Optional` `Readonly` **requireAvc**: `boolean`

Optional. Whether to require avc.

**`memberof`** VideosApiHeadVideoStream

#### Defined in

[generated-client/api/videos-api.ts:2895](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/videos-api.ts#L2895)

___

### requireNonAnamorphic

• `Optional` `Readonly` **requireNonAnamorphic**: `boolean`

Optional. Whether to require a non anamorphic stream.

**`memberof`** VideosApiHeadVideoStream

#### Defined in

[generated-client/api/videos-api.ts:2909](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/videos-api.ts#L2909)

___

### segmentContainer

• `Optional` `Readonly` **segmentContainer**: `string`

The segment container.

**`memberof`** VideosApiHeadVideoStream

#### Defined in

[generated-client/api/videos-api.ts:2685](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/videos-api.ts#L2685)

___

### segmentLength

• `Optional` `Readonly` **segmentLength**: `number`

The segment length.

**`memberof`** VideosApiHeadVideoStream

#### Defined in

[generated-client/api/videos-api.ts:2692](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/videos-api.ts#L2692)

___

### startTimeTicks

• `Optional` `Readonly` **startTimeTicks**: `number`

Optional. Specify a starting offset, in ticks. 1 tick &#x3D; 10000 ms.

**`memberof`** VideosApiHeadVideoStream

#### Defined in

[generated-client/api/videos-api.ts:2825](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/videos-api.ts#L2825)

___

### streamOptions

• `Optional` `Readonly` **streamOptions**: `Object`

Optional. The streaming options.

**`memberof`** VideosApiHeadVideoStream

#### Index signature

▪ [key: `string`]: `string`

#### Defined in

[generated-client/api/videos-api.ts:2986](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/videos-api.ts#L2986)

___

### subtitleCodec

• `Optional` `Readonly` **subtitleCodec**: `string`

Optional. Specify a subtitle codec to encode to.

**`memberof`** VideosApiHeadVideoStream

#### Defined in

[generated-client/api/videos-api.ts:2951](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/videos-api.ts#L2951)

___

### subtitleMethod

• `Optional` `Readonly` **subtitleMethod**: [`SubtitleDeliveryMethod`](../enums/generated_client.SubtitleDeliveryMethod.md)

Optional. Specify the subtitle delivery method.

**`memberof`** VideosApiHeadVideoStream

#### Defined in

[generated-client/api/videos-api.ts:2874](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/videos-api.ts#L2874)

___

### subtitleStreamIndex

• `Optional` `Readonly` **subtitleStreamIndex**: `number`

Optional. The index of the subtitle stream to use. If omitted no subtitles will be used.

**`memberof`** VideosApiHeadVideoStream

#### Defined in

[generated-client/api/videos-api.ts:2867](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/videos-api.ts#L2867)

___

### tag

• `Optional` `Readonly` **tag**: `string`

The tag.

**`memberof`** VideosApiHeadVideoStream

#### Defined in

[generated-client/api/videos-api.ts:2664](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/videos-api.ts#L2664)

___

### transcodeReasons

• `Optional` `Readonly` **transcodeReasons**: `string`

Optional. The transcoding reason.

**`memberof`** VideosApiHeadVideoStream

#### Defined in

[generated-client/api/videos-api.ts:2958](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/videos-api.ts#L2958)

___

### transcodingMaxAudioChannels

• `Optional` `Readonly` **transcodingMaxAudioChannels**: `number`

Optional. The maximum number of audio channels to transcode.

**`memberof`** VideosApiHeadVideoStream

#### Defined in

[generated-client/api/videos-api.ts:2916](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/videos-api.ts#L2916)

___

### videoBitRate

• `Optional` `Readonly` **videoBitRate**: `number`

Optional. Specify a video bitrate to encode to, e.g. 500000. If omitted this will be left to encoder defaults.

**`memberof`** VideosApiHeadVideoStream

#### Defined in

[generated-client/api/videos-api.ts:2860](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/videos-api.ts#L2860)

___

### videoCodec

• `Optional` `Readonly` **videoCodec**: `string`

Optional. Specify a video codec to encode to, e.g. h264. If omitted the server will auto-select using the url\&#39;s extension. Options: h265, h264, mpeg4, theora, vpx, wmv.

**`memberof`** VideosApiHeadVideoStream

#### Defined in

[generated-client/api/videos-api.ts:2944](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/videos-api.ts#L2944)

___

### videoStreamIndex

• `Optional` `Readonly` **videoStreamIndex**: `number`

Optional. The index of the video stream to use. If omitted the first video stream will be used.

**`memberof`** VideosApiHeadVideoStream

#### Defined in

[generated-client/api/videos-api.ts:2972](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/videos-api.ts#L2972)

___

### width

• `Optional` `Readonly` **width**: `number`

Optional. The fixed horizontal resolution of the encoded video.

**`memberof`** VideosApiHeadVideoStream

#### Defined in

[generated-client/api/videos-api.ts:2832](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/videos-api.ts#L2832)
