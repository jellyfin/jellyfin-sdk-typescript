[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / VideosApiHeadVideoStreamByContainerRequest

# Interface: VideosApiHeadVideoStreamByContainerRequest

[generated-client](../modules/generated_client.md).VideosApiHeadVideoStreamByContainerRequest

Request parameters for headVideoStreamByContainer operation in VideosApi.

**`export`**

**`interface`** VideosApiHeadVideoStreamByContainerRequest

## Table of contents

### Properties

- [\_static](generated_client.VideosApiHeadVideoStreamByContainerRequest.md#_static)
- [allowAudioStreamCopy](generated_client.VideosApiHeadVideoStreamByContainerRequest.md#allowaudiostreamcopy)
- [allowVideoStreamCopy](generated_client.VideosApiHeadVideoStreamByContainerRequest.md#allowvideostreamcopy)
- [audioBitRate](generated_client.VideosApiHeadVideoStreamByContainerRequest.md#audiobitrate)
- [audioChannels](generated_client.VideosApiHeadVideoStreamByContainerRequest.md#audiochannels)
- [audioCodec](generated_client.VideosApiHeadVideoStreamByContainerRequest.md#audiocodec)
- [audioSampleRate](generated_client.VideosApiHeadVideoStreamByContainerRequest.md#audiosamplerate)
- [audioStreamIndex](generated_client.VideosApiHeadVideoStreamByContainerRequest.md#audiostreamindex)
- [breakOnNonKeyFrames](generated_client.VideosApiHeadVideoStreamByContainerRequest.md#breakonnonkeyframes)
- [container](generated_client.VideosApiHeadVideoStreamByContainerRequest.md#container)
- [context](generated_client.VideosApiHeadVideoStreamByContainerRequest.md#context)
- [copyTimestamps](generated_client.VideosApiHeadVideoStreamByContainerRequest.md#copytimestamps)
- [cpuCoreLimit](generated_client.VideosApiHeadVideoStreamByContainerRequest.md#cpucorelimit)
- [deInterlace](generated_client.VideosApiHeadVideoStreamByContainerRequest.md#deinterlace)
- [deviceId](generated_client.VideosApiHeadVideoStreamByContainerRequest.md#deviceid)
- [deviceProfileId](generated_client.VideosApiHeadVideoStreamByContainerRequest.md#deviceprofileid)
- [enableAutoStreamCopy](generated_client.VideosApiHeadVideoStreamByContainerRequest.md#enableautostreamcopy)
- [enableMpegtsM2TsMode](generated_client.VideosApiHeadVideoStreamByContainerRequest.md#enablempegtsm2tsmode)
- [framerate](generated_client.VideosApiHeadVideoStreamByContainerRequest.md#framerate)
- [height](generated_client.VideosApiHeadVideoStreamByContainerRequest.md#height)
- [itemId](generated_client.VideosApiHeadVideoStreamByContainerRequest.md#itemid)
- [level](generated_client.VideosApiHeadVideoStreamByContainerRequest.md#level)
- [liveStreamId](generated_client.VideosApiHeadVideoStreamByContainerRequest.md#livestreamid)
- [maxAudioBitDepth](generated_client.VideosApiHeadVideoStreamByContainerRequest.md#maxaudiobitdepth)
- [maxAudioChannels](generated_client.VideosApiHeadVideoStreamByContainerRequest.md#maxaudiochannels)
- [maxFramerate](generated_client.VideosApiHeadVideoStreamByContainerRequest.md#maxframerate)
- [maxHeight](generated_client.VideosApiHeadVideoStreamByContainerRequest.md#maxheight)
- [maxRefFrames](generated_client.VideosApiHeadVideoStreamByContainerRequest.md#maxrefframes)
- [maxVideoBitDepth](generated_client.VideosApiHeadVideoStreamByContainerRequest.md#maxvideobitdepth)
- [maxWidth](generated_client.VideosApiHeadVideoStreamByContainerRequest.md#maxwidth)
- [mediaSourceId](generated_client.VideosApiHeadVideoStreamByContainerRequest.md#mediasourceid)
- [minSegments](generated_client.VideosApiHeadVideoStreamByContainerRequest.md#minsegments)
- [params](generated_client.VideosApiHeadVideoStreamByContainerRequest.md#params)
- [playSessionId](generated_client.VideosApiHeadVideoStreamByContainerRequest.md#playsessionid)
- [profile](generated_client.VideosApiHeadVideoStreamByContainerRequest.md#profile)
- [requireAvc](generated_client.VideosApiHeadVideoStreamByContainerRequest.md#requireavc)
- [requireNonAnamorphic](generated_client.VideosApiHeadVideoStreamByContainerRequest.md#requirenonanamorphic)
- [segmentContainer](generated_client.VideosApiHeadVideoStreamByContainerRequest.md#segmentcontainer)
- [segmentLength](generated_client.VideosApiHeadVideoStreamByContainerRequest.md#segmentlength)
- [startTimeTicks](generated_client.VideosApiHeadVideoStreamByContainerRequest.md#starttimeticks)
- [streamOptions](generated_client.VideosApiHeadVideoStreamByContainerRequest.md#streamoptions)
- [subtitleCodec](generated_client.VideosApiHeadVideoStreamByContainerRequest.md#subtitlecodec)
- [subtitleMethod](generated_client.VideosApiHeadVideoStreamByContainerRequest.md#subtitlemethod)
- [subtitleStreamIndex](generated_client.VideosApiHeadVideoStreamByContainerRequest.md#subtitlestreamindex)
- [tag](generated_client.VideosApiHeadVideoStreamByContainerRequest.md#tag)
- [transcodeReasons](generated_client.VideosApiHeadVideoStreamByContainerRequest.md#transcodereasons)
- [transcodingMaxAudioChannels](generated_client.VideosApiHeadVideoStreamByContainerRequest.md#transcodingmaxaudiochannels)
- [videoBitRate](generated_client.VideosApiHeadVideoStreamByContainerRequest.md#videobitrate)
- [videoCodec](generated_client.VideosApiHeadVideoStreamByContainerRequest.md#videocodec)
- [videoStreamIndex](generated_client.VideosApiHeadVideoStreamByContainerRequest.md#videostreamindex)
- [width](generated_client.VideosApiHeadVideoStreamByContainerRequest.md#width)

## Properties

### \_static

• `Optional` `Readonly` **\_static**: `boolean`

Optional. If true, the original file will be streamed statically without any encoding. Use either no url extension or the original file extension. true/false.

**`memberof`** VideosApiHeadVideoStreamByContainer

#### Defined in

[generated-client/api/videos-api.ts:3014](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/videos-api.ts#L3014)

___

### allowAudioStreamCopy

• `Optional` `Readonly` **allowAudioStreamCopy**: `boolean`

Whether or not to allow copying of the audio stream url.

**`memberof`** VideosApiHeadVideoStreamByContainer

#### Defined in

[generated-client/api/videos-api.ts:3105](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/videos-api.ts#L3105)

___

### allowVideoStreamCopy

• `Optional` `Readonly` **allowVideoStreamCopy**: `boolean`

Whether or not to allow copying of the video stream url.

**`memberof`** VideosApiHeadVideoStreamByContainer

#### Defined in

[generated-client/api/videos-api.ts:3098](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/videos-api.ts#L3098)

___

### audioBitRate

• `Optional` `Readonly` **audioBitRate**: `number`

Optional. Specify an audio bitrate to encode to, e.g. 128000. If omitted this will be left to encoder defaults.

**`memberof`** VideosApiHeadVideoStreamByContainer

#### Defined in

[generated-client/api/videos-api.ts:3133](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/videos-api.ts#L3133)

___

### audioChannels

• `Optional` `Readonly` **audioChannels**: `number`

Optional. Specify a specific number of audio channels to encode to, e.g. 2.

**`memberof`** VideosApiHeadVideoStreamByContainer

#### Defined in

[generated-client/api/videos-api.ts:3140](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/videos-api.ts#L3140)

___

### audioCodec

• `Optional` `Readonly` **audioCodec**: `string`

Optional. Specify a audio codec to encode to, e.g. mp3. If omitted the server will auto-select using the url\&#39;s extension. Options: aac, mp3, vorbis, wma.

**`memberof`** VideosApiHeadVideoStreamByContainer

#### Defined in

[generated-client/api/videos-api.ts:3084](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/videos-api.ts#L3084)

___

### audioSampleRate

• `Optional` `Readonly` **audioSampleRate**: `number`

Optional. Specify a specific audio sample rate, e.g. 44100.

**`memberof`** VideosApiHeadVideoStreamByContainer

#### Defined in

[generated-client/api/videos-api.ts:3119](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/videos-api.ts#L3119)

___

### audioStreamIndex

• `Optional` `Readonly` **audioStreamIndex**: `number`

Optional. The index of the audio stream to use. If omitted the first audio stream will be used.

**`memberof`** VideosApiHeadVideoStreamByContainer

#### Defined in

[generated-client/api/videos-api.ts:3329](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/videos-api.ts#L3329)

___

### breakOnNonKeyFrames

• `Optional` `Readonly` **breakOnNonKeyFrames**: `boolean`

Optional. Whether to break on non key frames.

**`memberof`** VideosApiHeadVideoStreamByContainer

#### Defined in

[generated-client/api/videos-api.ts:3112](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/videos-api.ts#L3112)

___

### container

• `Readonly` **container**: `string`

The video container. Possible values are: ts, webm, asf, wmv, ogv, mp4, m4v, mkv, mpeg, mpg, avi, 3gp, wmv, wtv, m2ts, mov, iso, flv.

**`memberof`** VideosApiHeadVideoStreamByContainer

#### Defined in

[generated-client/api/videos-api.ts:3007](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/videos-api.ts#L3007)

___

### context

• `Optional` `Readonly` **context**: [`EncodingContext`](../enums/generated_client.EncodingContext.md)

Optional. The MediaBrowser.Model.Dlna.EncodingContext.

**`memberof`** VideosApiHeadVideoStreamByContainer

#### Defined in

[generated-client/api/videos-api.ts:3343](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/videos-api.ts#L3343)

___

### copyTimestamps

• `Optional` `Readonly` **copyTimestamps**: `boolean`

Whether or not to copy timestamps when transcoding with an offset. Defaults to false.

**`memberof`** VideosApiHeadVideoStreamByContainer

#### Defined in

[generated-client/api/videos-api.ts:3182](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/videos-api.ts#L3182)

___

### cpuCoreLimit

• `Optional` `Readonly` **cpuCoreLimit**: `number`

Optional. The limit of how many cpu cores to use.

**`memberof`** VideosApiHeadVideoStreamByContainer

#### Defined in

[generated-client/api/videos-api.ts:3287](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/videos-api.ts#L3287)

___

### deInterlace

• `Optional` `Readonly` **deInterlace**: `boolean`

Optional. Whether to deinterlace the video.

**`memberof`** VideosApiHeadVideoStreamByContainer

#### Defined in

[generated-client/api/videos-api.ts:3266](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/videos-api.ts#L3266)

___

### deviceId

• `Optional` `Readonly` **deviceId**: `string`

The device id of the client requesting. Used to stop encoding processes when needed.

**`memberof`** VideosApiHeadVideoStreamByContainer

#### Defined in

[generated-client/api/videos-api.ts:3077](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/videos-api.ts#L3077)

___

### deviceProfileId

• `Optional` `Readonly` **deviceProfileId**: `string`

Optional. The dlna device profile id to utilize.

**`memberof`** VideosApiHeadVideoStreamByContainer

#### Defined in

[generated-client/api/videos-api.ts:3035](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/videos-api.ts#L3035)

___

### enableAutoStreamCopy

• `Optional` `Readonly` **enableAutoStreamCopy**: `boolean`

Whether or not to allow automatic stream copy if requested values match the original source. Defaults to true.

**`memberof`** VideosApiHeadVideoStreamByContainer

#### Defined in

[generated-client/api/videos-api.ts:3091](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/videos-api.ts#L3091)

___

### enableMpegtsM2TsMode

• `Optional` `Readonly` **enableMpegtsM2TsMode**: `boolean`

Optional. Whether to enable the MpegtsM2Ts mode.

**`memberof`** VideosApiHeadVideoStreamByContainer

#### Defined in

[generated-client/api/videos-api.ts:3301](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/videos-api.ts#L3301)

___

### framerate

• `Optional` `Readonly` **framerate**: `number`

Optional. A specific video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements.

**`memberof`** VideosApiHeadVideoStreamByContainer

#### Defined in

[generated-client/api/videos-api.ts:3168](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/videos-api.ts#L3168)

___

### height

• `Optional` `Readonly` **height**: `number`

Optional. The fixed vertical resolution of the encoded video.

**`memberof`** VideosApiHeadVideoStreamByContainer

#### Defined in

[generated-client/api/videos-api.ts:3203](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/videos-api.ts#L3203)

___

### itemId

• `Readonly` **itemId**: `string`

The item id.

**`memberof`** VideosApiHeadVideoStreamByContainer

#### Defined in

[generated-client/api/videos-api.ts:3000](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/videos-api.ts#L3000)

___

### level

• `Optional` `Readonly` **level**: `string`

Optional. Specify a level for the encoder profile (varies by encoder), e.g. 3, 3.1.

**`memberof`** VideosApiHeadVideoStreamByContainer

#### Defined in

[generated-client/api/videos-api.ts:3161](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/videos-api.ts#L3161)

___

### liveStreamId

• `Optional` `Readonly` **liveStreamId**: `string`

The live stream id.

**`memberof`** VideosApiHeadVideoStreamByContainer

#### Defined in

[generated-client/api/videos-api.ts:3294](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/videos-api.ts#L3294)

___

### maxAudioBitDepth

• `Optional` `Readonly` **maxAudioBitDepth**: `number`

Optional. The maximum audio bit depth.

**`memberof`** VideosApiHeadVideoStreamByContainer

#### Defined in

[generated-client/api/videos-api.ts:3126](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/videos-api.ts#L3126)

___

### maxAudioChannels

• `Optional` `Readonly` **maxAudioChannels**: `number`

Optional. Specify a maximum number of audio channels to encode to, e.g. 2.

**`memberof`** VideosApiHeadVideoStreamByContainer

#### Defined in

[generated-client/api/videos-api.ts:3147](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/videos-api.ts#L3147)

___

### maxFramerate

• `Optional` `Readonly` **maxFramerate**: `number`

Optional. A specific maximum video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements.

**`memberof`** VideosApiHeadVideoStreamByContainer

#### Defined in

[generated-client/api/videos-api.ts:3175](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/videos-api.ts#L3175)

___

### maxHeight

• `Optional` `Readonly` **maxHeight**: `number`

Optional. The maximum vertical resolution of the encoded video.

**`memberof`** VideosApiHeadVideoStreamByContainer

#### Defined in

[generated-client/api/videos-api.ts:3217](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/videos-api.ts#L3217)

___

### maxRefFrames

• `Optional` `Readonly` **maxRefFrames**: `number`

Optional.

**`memberof`** VideosApiHeadVideoStreamByContainer

#### Defined in

[generated-client/api/videos-api.ts:3245](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/videos-api.ts#L3245)

___

### maxVideoBitDepth

• `Optional` `Readonly` **maxVideoBitDepth**: `number`

Optional. The maximum video bit depth.

**`memberof`** VideosApiHeadVideoStreamByContainer

#### Defined in

[generated-client/api/videos-api.ts:3252](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/videos-api.ts#L3252)

___

### maxWidth

• `Optional` `Readonly` **maxWidth**: `number`

Optional. The maximum horizontal resolution of the encoded video.

**`memberof`** VideosApiHeadVideoStreamByContainer

#### Defined in

[generated-client/api/videos-api.ts:3210](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/videos-api.ts#L3210)

___

### mediaSourceId

• `Optional` `Readonly` **mediaSourceId**: `string`

The media version id, if playing an alternate version.

**`memberof`** VideosApiHeadVideoStreamByContainer

#### Defined in

[generated-client/api/videos-api.ts:3070](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/videos-api.ts#L3070)

___

### minSegments

• `Optional` `Readonly` **minSegments**: `number`

The minimum number of segments.

**`memberof`** VideosApiHeadVideoStreamByContainer

#### Defined in

[generated-client/api/videos-api.ts:3063](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/videos-api.ts#L3063)

___

### params

• `Optional` `Readonly` **params**: `string`

The streaming parameters.

**`memberof`** VideosApiHeadVideoStreamByContainer

#### Defined in

[generated-client/api/videos-api.ts:3021](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/videos-api.ts#L3021)

___

### playSessionId

• `Optional` `Readonly` **playSessionId**: `string`

The play session id.

**`memberof`** VideosApiHeadVideoStreamByContainer

#### Defined in

[generated-client/api/videos-api.ts:3042](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/videos-api.ts#L3042)

___

### profile

• `Optional` `Readonly` **profile**: `string`

Optional. Specify a specific an encoder profile (varies by encoder), e.g. main, baseline, high.

**`memberof`** VideosApiHeadVideoStreamByContainer

#### Defined in

[generated-client/api/videos-api.ts:3154](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/videos-api.ts#L3154)

___

### requireAvc

• `Optional` `Readonly` **requireAvc**: `boolean`

Optional. Whether to require avc.

**`memberof`** VideosApiHeadVideoStreamByContainer

#### Defined in

[generated-client/api/videos-api.ts:3259](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/videos-api.ts#L3259)

___

### requireNonAnamorphic

• `Optional` `Readonly` **requireNonAnamorphic**: `boolean`

Optional. Whether to require a non anamorphic stream.

**`memberof`** VideosApiHeadVideoStreamByContainer

#### Defined in

[generated-client/api/videos-api.ts:3273](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/videos-api.ts#L3273)

___

### segmentContainer

• `Optional` `Readonly` **segmentContainer**: `string`

The segment container.

**`memberof`** VideosApiHeadVideoStreamByContainer

#### Defined in

[generated-client/api/videos-api.ts:3049](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/videos-api.ts#L3049)

___

### segmentLength

• `Optional` `Readonly` **segmentLength**: `number`

The segment length.

**`memberof`** VideosApiHeadVideoStreamByContainer

#### Defined in

[generated-client/api/videos-api.ts:3056](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/videos-api.ts#L3056)

___

### startTimeTicks

• `Optional` `Readonly` **startTimeTicks**: `number`

Optional. Specify a starting offset, in ticks. 1 tick &#x3D; 10000 ms.

**`memberof`** VideosApiHeadVideoStreamByContainer

#### Defined in

[generated-client/api/videos-api.ts:3189](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/videos-api.ts#L3189)

___

### streamOptions

• `Optional` `Readonly` **streamOptions**: `Object`

Optional. The streaming options.

**`memberof`** VideosApiHeadVideoStreamByContainer

#### Index signature

▪ [key: `string`]: `string`

#### Defined in

[generated-client/api/videos-api.ts:3350](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/videos-api.ts#L3350)

___

### subtitleCodec

• `Optional` `Readonly` **subtitleCodec**: `string`

Optional. Specify a subtitle codec to encode to.

**`memberof`** VideosApiHeadVideoStreamByContainer

#### Defined in

[generated-client/api/videos-api.ts:3315](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/videos-api.ts#L3315)

___

### subtitleMethod

• `Optional` `Readonly` **subtitleMethod**: [`SubtitleDeliveryMethod`](../enums/generated_client.SubtitleDeliveryMethod.md)

Optional. Specify the subtitle delivery method.

**`memberof`** VideosApiHeadVideoStreamByContainer

#### Defined in

[generated-client/api/videos-api.ts:3238](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/videos-api.ts#L3238)

___

### subtitleStreamIndex

• `Optional` `Readonly` **subtitleStreamIndex**: `number`

Optional. The index of the subtitle stream to use. If omitted no subtitles will be used.

**`memberof`** VideosApiHeadVideoStreamByContainer

#### Defined in

[generated-client/api/videos-api.ts:3231](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/videos-api.ts#L3231)

___

### tag

• `Optional` `Readonly` **tag**: `string`

The tag.

**`memberof`** VideosApiHeadVideoStreamByContainer

#### Defined in

[generated-client/api/videos-api.ts:3028](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/videos-api.ts#L3028)

___

### transcodeReasons

• `Optional` `Readonly` **transcodeReasons**: `string`

Optional. The transcoding reason.

**`memberof`** VideosApiHeadVideoStreamByContainer

#### Defined in

[generated-client/api/videos-api.ts:3322](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/videos-api.ts#L3322)

___

### transcodingMaxAudioChannels

• `Optional` `Readonly` **transcodingMaxAudioChannels**: `number`

Optional. The maximum number of audio channels to transcode.

**`memberof`** VideosApiHeadVideoStreamByContainer

#### Defined in

[generated-client/api/videos-api.ts:3280](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/videos-api.ts#L3280)

___

### videoBitRate

• `Optional` `Readonly` **videoBitRate**: `number`

Optional. Specify a video bitrate to encode to, e.g. 500000. If omitted this will be left to encoder defaults.

**`memberof`** VideosApiHeadVideoStreamByContainer

#### Defined in

[generated-client/api/videos-api.ts:3224](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/videos-api.ts#L3224)

___

### videoCodec

• `Optional` `Readonly` **videoCodec**: `string`

Optional. Specify a video codec to encode to, e.g. h264. If omitted the server will auto-select using the url\&#39;s extension. Options: h265, h264, mpeg4, theora, vpx, wmv.

**`memberof`** VideosApiHeadVideoStreamByContainer

#### Defined in

[generated-client/api/videos-api.ts:3308](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/videos-api.ts#L3308)

___

### videoStreamIndex

• `Optional` `Readonly` **videoStreamIndex**: `number`

Optional. The index of the video stream to use. If omitted the first video stream will be used.

**`memberof`** VideosApiHeadVideoStreamByContainer

#### Defined in

[generated-client/api/videos-api.ts:3336](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/videos-api.ts#L3336)

___

### width

• `Optional` `Readonly` **width**: `number`

Optional. The fixed horizontal resolution of the encoded video.

**`memberof`** VideosApiHeadVideoStreamByContainer

#### Defined in

[generated-client/api/videos-api.ts:3196](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/videos-api.ts#L3196)
