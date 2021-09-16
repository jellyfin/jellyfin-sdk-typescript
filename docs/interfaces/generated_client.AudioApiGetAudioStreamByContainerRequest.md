[jellyfin-sdk-typescript](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / AudioApiGetAudioStreamByContainerRequest

# Interface: AudioApiGetAudioStreamByContainerRequest

[generated-client](../modules/generated_client.md).AudioApiGetAudioStreamByContainerRequest

Request parameters for getAudioStreamByContainer operation in AudioApi.

**`export`**

**`interface`** AudioApiGetAudioStreamByContainerRequest

## Table of contents

### Properties

- [_static](generated_client.AudioApiGetAudioStreamByContainerRequest.md#_static)
- [allowAudioStreamCopy](generated_client.AudioApiGetAudioStreamByContainerRequest.md#allowaudiostreamcopy)
- [allowVideoStreamCopy](generated_client.AudioApiGetAudioStreamByContainerRequest.md#allowvideostreamcopy)
- [audioBitRate](generated_client.AudioApiGetAudioStreamByContainerRequest.md#audiobitrate)
- [audioChannels](generated_client.AudioApiGetAudioStreamByContainerRequest.md#audiochannels)
- [audioCodec](generated_client.AudioApiGetAudioStreamByContainerRequest.md#audiocodec)
- [audioSampleRate](generated_client.AudioApiGetAudioStreamByContainerRequest.md#audiosamplerate)
- [audioStreamIndex](generated_client.AudioApiGetAudioStreamByContainerRequest.md#audiostreamindex)
- [breakOnNonKeyFrames](generated_client.AudioApiGetAudioStreamByContainerRequest.md#breakonnonkeyframes)
- [container](generated_client.AudioApiGetAudioStreamByContainerRequest.md#container)
- [context](generated_client.AudioApiGetAudioStreamByContainerRequest.md#context)
- [copyTimestamps](generated_client.AudioApiGetAudioStreamByContainerRequest.md#copytimestamps)
- [cpuCoreLimit](generated_client.AudioApiGetAudioStreamByContainerRequest.md#cpucorelimit)
- [deInterlace](generated_client.AudioApiGetAudioStreamByContainerRequest.md#deinterlace)
- [deviceId](generated_client.AudioApiGetAudioStreamByContainerRequest.md#deviceid)
- [deviceProfileId](generated_client.AudioApiGetAudioStreamByContainerRequest.md#deviceprofileid)
- [enableAutoStreamCopy](generated_client.AudioApiGetAudioStreamByContainerRequest.md#enableautostreamcopy)
- [enableMpegtsM2TsMode](generated_client.AudioApiGetAudioStreamByContainerRequest.md#enablempegtsm2tsmode)
- [framerate](generated_client.AudioApiGetAudioStreamByContainerRequest.md#framerate)
- [height](generated_client.AudioApiGetAudioStreamByContainerRequest.md#height)
- [itemId](generated_client.AudioApiGetAudioStreamByContainerRequest.md#itemid)
- [level](generated_client.AudioApiGetAudioStreamByContainerRequest.md#level)
- [liveStreamId](generated_client.AudioApiGetAudioStreamByContainerRequest.md#livestreamid)
- [maxAudioBitDepth](generated_client.AudioApiGetAudioStreamByContainerRequest.md#maxaudiobitdepth)
- [maxAudioChannels](generated_client.AudioApiGetAudioStreamByContainerRequest.md#maxaudiochannels)
- [maxFramerate](generated_client.AudioApiGetAudioStreamByContainerRequest.md#maxframerate)
- [maxRefFrames](generated_client.AudioApiGetAudioStreamByContainerRequest.md#maxrefframes)
- [maxVideoBitDepth](generated_client.AudioApiGetAudioStreamByContainerRequest.md#maxvideobitdepth)
- [mediaSourceId](generated_client.AudioApiGetAudioStreamByContainerRequest.md#mediasourceid)
- [minSegments](generated_client.AudioApiGetAudioStreamByContainerRequest.md#minsegments)
- [params](generated_client.AudioApiGetAudioStreamByContainerRequest.md#params)
- [playSessionId](generated_client.AudioApiGetAudioStreamByContainerRequest.md#playsessionid)
- [profile](generated_client.AudioApiGetAudioStreamByContainerRequest.md#profile)
- [requireAvc](generated_client.AudioApiGetAudioStreamByContainerRequest.md#requireavc)
- [requireNonAnamorphic](generated_client.AudioApiGetAudioStreamByContainerRequest.md#requirenonanamorphic)
- [segmentContainer](generated_client.AudioApiGetAudioStreamByContainerRequest.md#segmentcontainer)
- [segmentLength](generated_client.AudioApiGetAudioStreamByContainerRequest.md#segmentlength)
- [startTimeTicks](generated_client.AudioApiGetAudioStreamByContainerRequest.md#starttimeticks)
- [streamOptions](generated_client.AudioApiGetAudioStreamByContainerRequest.md#streamoptions)
- [subtitleCodec](generated_client.AudioApiGetAudioStreamByContainerRequest.md#subtitlecodec)
- [subtitleMethod](generated_client.AudioApiGetAudioStreamByContainerRequest.md#subtitlemethod)
- [subtitleStreamIndex](generated_client.AudioApiGetAudioStreamByContainerRequest.md#subtitlestreamindex)
- [tag](generated_client.AudioApiGetAudioStreamByContainerRequest.md#tag)
- [transcodeReasons](generated_client.AudioApiGetAudioStreamByContainerRequest.md#transcodereasons)
- [transcodingMaxAudioChannels](generated_client.AudioApiGetAudioStreamByContainerRequest.md#transcodingmaxaudiochannels)
- [videoBitRate](generated_client.AudioApiGetAudioStreamByContainerRequest.md#videobitrate)
- [videoCodec](generated_client.AudioApiGetAudioStreamByContainerRequest.md#videocodec)
- [videoStreamIndex](generated_client.AudioApiGetAudioStreamByContainerRequest.md#videostreamindex)
- [width](generated_client.AudioApiGetAudioStreamByContainerRequest.md#width)

## Properties

### \_static

• `Optional` `Readonly` **\_static**: `boolean`

Optional. If true, the original file will be streamed statically without any encoding. Use either no url extension or the original file extension. true/false.

**`memberof`** AudioApiGetAudioStreamByContainer

#### Defined in

[generated-client/api/audio-api.ts:1993](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/api/audio-api.ts#L1993)

___

### allowAudioStreamCopy

• `Optional` `Readonly` **allowAudioStreamCopy**: `boolean`

Whether or not to allow copying of the audio stream url.

**`memberof`** AudioApiGetAudioStreamByContainer

#### Defined in

[generated-client/api/audio-api.ts:2084](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/api/audio-api.ts#L2084)

___

### allowVideoStreamCopy

• `Optional` `Readonly` **allowVideoStreamCopy**: `boolean`

Whether or not to allow copying of the video stream url.

**`memberof`** AudioApiGetAudioStreamByContainer

#### Defined in

[generated-client/api/audio-api.ts:2077](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/api/audio-api.ts#L2077)

___

### audioBitRate

• `Optional` `Readonly` **audioBitRate**: `number`

Optional. Specify an audio bitrate to encode to, e.g. 128000. If omitted this will be left to encoder defaults.

**`memberof`** AudioApiGetAudioStreamByContainer

#### Defined in

[generated-client/api/audio-api.ts:2112](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/api/audio-api.ts#L2112)

___

### audioChannels

• `Optional` `Readonly` **audioChannels**: `number`

Optional. Specify a specific number of audio channels to encode to, e.g. 2.

**`memberof`** AudioApiGetAudioStreamByContainer

#### Defined in

[generated-client/api/audio-api.ts:2119](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/api/audio-api.ts#L2119)

___

### audioCodec

• `Optional` `Readonly` **audioCodec**: `string`

Optional. Specify a audio codec to encode to, e.g. mp3. If omitted the server will auto-select using the url\&#39;s extension. Options: aac, mp3, vorbis, wma.

**`memberof`** AudioApiGetAudioStreamByContainer

#### Defined in

[generated-client/api/audio-api.ts:2063](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/api/audio-api.ts#L2063)

___

### audioSampleRate

• `Optional` `Readonly` **audioSampleRate**: `number`

Optional. Specify a specific audio sample rate, e.g. 44100.

**`memberof`** AudioApiGetAudioStreamByContainer

#### Defined in

[generated-client/api/audio-api.ts:2098](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/api/audio-api.ts#L2098)

___

### audioStreamIndex

• `Optional` `Readonly` **audioStreamIndex**: `number`

Optional. The index of the audio stream to use. If omitted the first audio stream will be used.

**`memberof`** AudioApiGetAudioStreamByContainer

#### Defined in

[generated-client/api/audio-api.ts:2294](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/api/audio-api.ts#L2294)

___

### breakOnNonKeyFrames

• `Optional` `Readonly` **breakOnNonKeyFrames**: `boolean`

Optional. Whether to break on non key frames.

**`memberof`** AudioApiGetAudioStreamByContainer

#### Defined in

[generated-client/api/audio-api.ts:2091](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/api/audio-api.ts#L2091)

___

### container

• `Readonly` **container**: `string`

The audio container.

**`memberof`** AudioApiGetAudioStreamByContainer

#### Defined in

[generated-client/api/audio-api.ts:1986](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/api/audio-api.ts#L1986)

___

### context

• `Optional` `Readonly` **context**: [`EncodingContext`](../enums/generated_client.EncodingContext.md)

Optional. The MediaBrowser.Model.Dlna.EncodingContext.

**`memberof`** AudioApiGetAudioStreamByContainer

#### Defined in

[generated-client/api/audio-api.ts:2308](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/api/audio-api.ts#L2308)

___

### copyTimestamps

• `Optional` `Readonly` **copyTimestamps**: `boolean`

Whether or not to copy timestamps when transcoding with an offset. Defaults to false.

**`memberof`** AudioApiGetAudioStreamByContainer

#### Defined in

[generated-client/api/audio-api.ts:2161](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/api/audio-api.ts#L2161)

___

### cpuCoreLimit

• `Optional` `Readonly` **cpuCoreLimit**: `number`

Optional. The limit of how many cpu cores to use.

**`memberof`** AudioApiGetAudioStreamByContainer

#### Defined in

[generated-client/api/audio-api.ts:2252](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/api/audio-api.ts#L2252)

___

### deInterlace

• `Optional` `Readonly` **deInterlace**: `boolean`

Optional. Whether to deinterlace the video.

**`memberof`** AudioApiGetAudioStreamByContainer

#### Defined in

[generated-client/api/audio-api.ts:2231](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/api/audio-api.ts#L2231)

___

### deviceId

• `Optional` `Readonly` **deviceId**: `string`

The device id of the client requesting. Used to stop encoding processes when needed.

**`memberof`** AudioApiGetAudioStreamByContainer

#### Defined in

[generated-client/api/audio-api.ts:2056](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/api/audio-api.ts#L2056)

___

### deviceProfileId

• `Optional` `Readonly` **deviceProfileId**: `string`

Optional. The dlna device profile id to utilize.

**`memberof`** AudioApiGetAudioStreamByContainer

#### Defined in

[generated-client/api/audio-api.ts:2014](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/api/audio-api.ts#L2014)

___

### enableAutoStreamCopy

• `Optional` `Readonly` **enableAutoStreamCopy**: `boolean`

Whether or not to allow automatic stream copy if requested values match the original source. Defaults to true.

**`memberof`** AudioApiGetAudioStreamByContainer

#### Defined in

[generated-client/api/audio-api.ts:2070](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/api/audio-api.ts#L2070)

___

### enableMpegtsM2TsMode

• `Optional` `Readonly` **enableMpegtsM2TsMode**: `boolean`

Optional. Whether to enable the MpegtsM2Ts mode.

**`memberof`** AudioApiGetAudioStreamByContainer

#### Defined in

[generated-client/api/audio-api.ts:2266](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/api/audio-api.ts#L2266)

___

### framerate

• `Optional` `Readonly` **framerate**: `number`

Optional. A specific video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements.

**`memberof`** AudioApiGetAudioStreamByContainer

#### Defined in

[generated-client/api/audio-api.ts:2147](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/api/audio-api.ts#L2147)

___

### height

• `Optional` `Readonly` **height**: `number`

Optional. The fixed vertical resolution of the encoded video.

**`memberof`** AudioApiGetAudioStreamByContainer

#### Defined in

[generated-client/api/audio-api.ts:2182](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/api/audio-api.ts#L2182)

___

### itemId

• `Readonly` **itemId**: `string`

The item id.

**`memberof`** AudioApiGetAudioStreamByContainer

#### Defined in

[generated-client/api/audio-api.ts:1979](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/api/audio-api.ts#L1979)

___

### level

• `Optional` `Readonly` **level**: `string`

Optional. Specify a level for the encoder profile (varies by encoder), e.g. 3, 3.1.

**`memberof`** AudioApiGetAudioStreamByContainer

#### Defined in

[generated-client/api/audio-api.ts:2140](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/api/audio-api.ts#L2140)

___

### liveStreamId

• `Optional` `Readonly` **liveStreamId**: `string`

The live stream id.

**`memberof`** AudioApiGetAudioStreamByContainer

#### Defined in

[generated-client/api/audio-api.ts:2259](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/api/audio-api.ts#L2259)

___

### maxAudioBitDepth

• `Optional` `Readonly` **maxAudioBitDepth**: `number`

Optional. The maximum audio bit depth.

**`memberof`** AudioApiGetAudioStreamByContainer

#### Defined in

[generated-client/api/audio-api.ts:2105](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/api/audio-api.ts#L2105)

___

### maxAudioChannels

• `Optional` `Readonly` **maxAudioChannels**: `number`

Optional. Specify a maximum number of audio channels to encode to, e.g. 2.

**`memberof`** AudioApiGetAudioStreamByContainer

#### Defined in

[generated-client/api/audio-api.ts:2126](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/api/audio-api.ts#L2126)

___

### maxFramerate

• `Optional` `Readonly` **maxFramerate**: `number`

Optional. A specific maximum video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements.

**`memberof`** AudioApiGetAudioStreamByContainer

#### Defined in

[generated-client/api/audio-api.ts:2154](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/api/audio-api.ts#L2154)

___

### maxRefFrames

• `Optional` `Readonly` **maxRefFrames**: `number`

Optional.

**`memberof`** AudioApiGetAudioStreamByContainer

#### Defined in

[generated-client/api/audio-api.ts:2210](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/api/audio-api.ts#L2210)

___

### maxVideoBitDepth

• `Optional` `Readonly` **maxVideoBitDepth**: `number`

Optional. The maximum video bit depth.

**`memberof`** AudioApiGetAudioStreamByContainer

#### Defined in

[generated-client/api/audio-api.ts:2217](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/api/audio-api.ts#L2217)

___

### mediaSourceId

• `Optional` `Readonly` **mediaSourceId**: `string`

The media version id, if playing an alternate version.

**`memberof`** AudioApiGetAudioStreamByContainer

#### Defined in

[generated-client/api/audio-api.ts:2049](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/api/audio-api.ts#L2049)

___

### minSegments

• `Optional` `Readonly` **minSegments**: `number`

The minimum number of segments.

**`memberof`** AudioApiGetAudioStreamByContainer

#### Defined in

[generated-client/api/audio-api.ts:2042](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/api/audio-api.ts#L2042)

___

### params

• `Optional` `Readonly` **params**: `string`

The streaming parameters.

**`memberof`** AudioApiGetAudioStreamByContainer

#### Defined in

[generated-client/api/audio-api.ts:2000](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/api/audio-api.ts#L2000)

___

### playSessionId

• `Optional` `Readonly` **playSessionId**: `string`

The play session id.

**`memberof`** AudioApiGetAudioStreamByContainer

#### Defined in

[generated-client/api/audio-api.ts:2021](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/api/audio-api.ts#L2021)

___

### profile

• `Optional` `Readonly` **profile**: `string`

Optional. Specify a specific an encoder profile (varies by encoder), e.g. main, baseline, high.

**`memberof`** AudioApiGetAudioStreamByContainer

#### Defined in

[generated-client/api/audio-api.ts:2133](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/api/audio-api.ts#L2133)

___

### requireAvc

• `Optional` `Readonly` **requireAvc**: `boolean`

Optional. Whether to require avc.

**`memberof`** AudioApiGetAudioStreamByContainer

#### Defined in

[generated-client/api/audio-api.ts:2224](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/api/audio-api.ts#L2224)

___

### requireNonAnamorphic

• `Optional` `Readonly` **requireNonAnamorphic**: `boolean`

Optional. Whether to require a non anamporphic stream.

**`memberof`** AudioApiGetAudioStreamByContainer

#### Defined in

[generated-client/api/audio-api.ts:2238](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/api/audio-api.ts#L2238)

___

### segmentContainer

• `Optional` `Readonly` **segmentContainer**: `string`

The segment container.

**`memberof`** AudioApiGetAudioStreamByContainer

#### Defined in

[generated-client/api/audio-api.ts:2028](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/api/audio-api.ts#L2028)

___

### segmentLength

• `Optional` `Readonly` **segmentLength**: `number`

The segment lenght.

**`memberof`** AudioApiGetAudioStreamByContainer

#### Defined in

[generated-client/api/audio-api.ts:2035](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/api/audio-api.ts#L2035)

___

### startTimeTicks

• `Optional` `Readonly` **startTimeTicks**: `number`

Optional. Specify a starting offset, in ticks. 1 tick &#x3D; 10000 ms.

**`memberof`** AudioApiGetAudioStreamByContainer

#### Defined in

[generated-client/api/audio-api.ts:2168](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/api/audio-api.ts#L2168)

___

### streamOptions

• `Optional` `Readonly` **streamOptions**: `Object`

Optional. The streaming options.

**`memberof`** AudioApiGetAudioStreamByContainer

#### Index signature

▪ [key: `string`]: `string`

#### Defined in

[generated-client/api/audio-api.ts:2315](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/api/audio-api.ts#L2315)

___

### subtitleCodec

• `Optional` `Readonly` **subtitleCodec**: `string`

Optional. Specify a subtitle codec to encode to.

**`memberof`** AudioApiGetAudioStreamByContainer

#### Defined in

[generated-client/api/audio-api.ts:2280](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/api/audio-api.ts#L2280)

___

### subtitleMethod

• `Optional` `Readonly` **subtitleMethod**: [`SubtitleDeliveryMethod`](../enums/generated_client.SubtitleDeliveryMethod.md)

Optional. Specify the subtitle delivery method.

**`memberof`** AudioApiGetAudioStreamByContainer

#### Defined in

[generated-client/api/audio-api.ts:2203](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/api/audio-api.ts#L2203)

___

### subtitleStreamIndex

• `Optional` `Readonly` **subtitleStreamIndex**: `number`

Optional. The index of the subtitle stream to use. If omitted no subtitles will be used.

**`memberof`** AudioApiGetAudioStreamByContainer

#### Defined in

[generated-client/api/audio-api.ts:2196](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/api/audio-api.ts#L2196)

___

### tag

• `Optional` `Readonly` **tag**: `string`

The tag.

**`memberof`** AudioApiGetAudioStreamByContainer

#### Defined in

[generated-client/api/audio-api.ts:2007](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/api/audio-api.ts#L2007)

___

### transcodeReasons

• `Optional` `Readonly` **transcodeReasons**: `string`

Optional. The transcoding reason.

**`memberof`** AudioApiGetAudioStreamByContainer

#### Defined in

[generated-client/api/audio-api.ts:2287](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/api/audio-api.ts#L2287)

___

### transcodingMaxAudioChannels

• `Optional` `Readonly` **transcodingMaxAudioChannels**: `number`

Optional. The maximum number of audio channels to transcode.

**`memberof`** AudioApiGetAudioStreamByContainer

#### Defined in

[generated-client/api/audio-api.ts:2245](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/api/audio-api.ts#L2245)

___

### videoBitRate

• `Optional` `Readonly` **videoBitRate**: `number`

Optional. Specify a video bitrate to encode to, e.g. 500000. If omitted this will be left to encoder defaults.

**`memberof`** AudioApiGetAudioStreamByContainer

#### Defined in

[generated-client/api/audio-api.ts:2189](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/api/audio-api.ts#L2189)

___

### videoCodec

• `Optional` `Readonly` **videoCodec**: `string`

Optional. Specify a video codec to encode to, e.g. h264. If omitted the server will auto-select using the url\&#39;s extension. Options: h265, h264, mpeg4, theora, vpx, wmv.

**`memberof`** AudioApiGetAudioStreamByContainer

#### Defined in

[generated-client/api/audio-api.ts:2273](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/api/audio-api.ts#L2273)

___

### videoStreamIndex

• `Optional` `Readonly` **videoStreamIndex**: `number`

Optional. The index of the video stream to use. If omitted the first video stream will be used.

**`memberof`** AudioApiGetAudioStreamByContainer

#### Defined in

[generated-client/api/audio-api.ts:2301](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/api/audio-api.ts#L2301)

___

### width

• `Optional` `Readonly` **width**: `number`

Optional. The fixed horizontal resolution of the encoded video.

**`memberof`** AudioApiGetAudioStreamByContainer

#### Defined in

[generated-client/api/audio-api.ts:2175](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/api/audio-api.ts#L2175)
