[jellyfin-sdk-typescript](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / VideosApiGetVideoStreamRequest

# Interface: VideosApiGetVideoStreamRequest

[generated-client](../modules/generated_client.md).VideosApiGetVideoStreamRequest

Request parameters for getVideoStream operation in VideosApi.

**`export`**

**`interface`** VideosApiGetVideoStreamRequest

## Table of contents

### Properties

- [_static](generated_client.VideosApiGetVideoStreamRequest.md#_static)
- [allowAudioStreamCopy](generated_client.VideosApiGetVideoStreamRequest.md#allowaudiostreamcopy)
- [allowVideoStreamCopy](generated_client.VideosApiGetVideoStreamRequest.md#allowvideostreamcopy)
- [audioBitRate](generated_client.VideosApiGetVideoStreamRequest.md#audiobitrate)
- [audioChannels](generated_client.VideosApiGetVideoStreamRequest.md#audiochannels)
- [audioCodec](generated_client.VideosApiGetVideoStreamRequest.md#audiocodec)
- [audioSampleRate](generated_client.VideosApiGetVideoStreamRequest.md#audiosamplerate)
- [audioStreamIndex](generated_client.VideosApiGetVideoStreamRequest.md#audiostreamindex)
- [breakOnNonKeyFrames](generated_client.VideosApiGetVideoStreamRequest.md#breakonnonkeyframes)
- [container](generated_client.VideosApiGetVideoStreamRequest.md#container)
- [context](generated_client.VideosApiGetVideoStreamRequest.md#context)
- [copyTimestamps](generated_client.VideosApiGetVideoStreamRequest.md#copytimestamps)
- [cpuCoreLimit](generated_client.VideosApiGetVideoStreamRequest.md#cpucorelimit)
- [deInterlace](generated_client.VideosApiGetVideoStreamRequest.md#deinterlace)
- [deviceId](generated_client.VideosApiGetVideoStreamRequest.md#deviceid)
- [deviceProfileId](generated_client.VideosApiGetVideoStreamRequest.md#deviceprofileid)
- [enableAutoStreamCopy](generated_client.VideosApiGetVideoStreamRequest.md#enableautostreamcopy)
- [enableMpegtsM2TsMode](generated_client.VideosApiGetVideoStreamRequest.md#enablempegtsm2tsmode)
- [framerate](generated_client.VideosApiGetVideoStreamRequest.md#framerate)
- [height](generated_client.VideosApiGetVideoStreamRequest.md#height)
- [itemId](generated_client.VideosApiGetVideoStreamRequest.md#itemid)
- [level](generated_client.VideosApiGetVideoStreamRequest.md#level)
- [liveStreamId](generated_client.VideosApiGetVideoStreamRequest.md#livestreamid)
- [maxAudioBitDepth](generated_client.VideosApiGetVideoStreamRequest.md#maxaudiobitdepth)
- [maxAudioChannels](generated_client.VideosApiGetVideoStreamRequest.md#maxaudiochannels)
- [maxFramerate](generated_client.VideosApiGetVideoStreamRequest.md#maxframerate)
- [maxRefFrames](generated_client.VideosApiGetVideoStreamRequest.md#maxrefframes)
- [maxVideoBitDepth](generated_client.VideosApiGetVideoStreamRequest.md#maxvideobitdepth)
- [mediaSourceId](generated_client.VideosApiGetVideoStreamRequest.md#mediasourceid)
- [minSegments](generated_client.VideosApiGetVideoStreamRequest.md#minsegments)
- [params](generated_client.VideosApiGetVideoStreamRequest.md#params)
- [playSessionId](generated_client.VideosApiGetVideoStreamRequest.md#playsessionid)
- [profile](generated_client.VideosApiGetVideoStreamRequest.md#profile)
- [requireAvc](generated_client.VideosApiGetVideoStreamRequest.md#requireavc)
- [requireNonAnamorphic](generated_client.VideosApiGetVideoStreamRequest.md#requirenonanamorphic)
- [segmentContainer](generated_client.VideosApiGetVideoStreamRequest.md#segmentcontainer)
- [segmentLength](generated_client.VideosApiGetVideoStreamRequest.md#segmentlength)
- [startTimeTicks](generated_client.VideosApiGetVideoStreamRequest.md#starttimeticks)
- [streamOptions](generated_client.VideosApiGetVideoStreamRequest.md#streamoptions)
- [subtitleCodec](generated_client.VideosApiGetVideoStreamRequest.md#subtitlecodec)
- [subtitleMethod](generated_client.VideosApiGetVideoStreamRequest.md#subtitlemethod)
- [subtitleStreamIndex](generated_client.VideosApiGetVideoStreamRequest.md#subtitlestreamindex)
- [tag](generated_client.VideosApiGetVideoStreamRequest.md#tag)
- [transcodeReasons](generated_client.VideosApiGetVideoStreamRequest.md#transcodereasons)
- [transcodingMaxAudioChannels](generated_client.VideosApiGetVideoStreamRequest.md#transcodingmaxaudiochannels)
- [videoBitRate](generated_client.VideosApiGetVideoStreamRequest.md#videobitrate)
- [videoCodec](generated_client.VideosApiGetVideoStreamRequest.md#videocodec)
- [videoStreamIndex](generated_client.VideosApiGetVideoStreamRequest.md#videostreamindex)
- [width](generated_client.VideosApiGetVideoStreamRequest.md#width)

## Properties

### \_static

• `Optional` `Readonly` **\_static**: `boolean`

Optional. If true, the original file will be streamed statically without any encoding. Use either no url extension or the original file extension. true/false.

**`memberof`** VideosApiGetVideoStream

#### Defined in

[generated-client/api/videos-api.ts:1866](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/videos-api.ts#L1866)

___

### allowAudioStreamCopy

• `Optional` `Readonly` **allowAudioStreamCopy**: `boolean`

Whether or not to allow copying of the audio stream url.

**`memberof`** VideosApiGetVideoStream

#### Defined in

[generated-client/api/videos-api.ts:1957](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/videos-api.ts#L1957)

___

### allowVideoStreamCopy

• `Optional` `Readonly` **allowVideoStreamCopy**: `boolean`

Whether or not to allow copying of the video stream url.

**`memberof`** VideosApiGetVideoStream

#### Defined in

[generated-client/api/videos-api.ts:1950](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/videos-api.ts#L1950)

___

### audioBitRate

• `Optional` `Readonly` **audioBitRate**: `number`

Optional. Specify an audio bitrate to encode to, e.g. 128000. If omitted this will be left to encoder defaults.

**`memberof`** VideosApiGetVideoStream

#### Defined in

[generated-client/api/videos-api.ts:1985](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/videos-api.ts#L1985)

___

### audioChannels

• `Optional` `Readonly` **audioChannels**: `number`

Optional. Specify a specific number of audio channels to encode to, e.g. 2.

**`memberof`** VideosApiGetVideoStream

#### Defined in

[generated-client/api/videos-api.ts:1992](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/videos-api.ts#L1992)

___

### audioCodec

• `Optional` `Readonly` **audioCodec**: `string`

Optional. Specify a audio codec to encode to, e.g. mp3. If omitted the server will auto-select using the url\&#39;s extension. Options: aac, mp3, vorbis, wma.

**`memberof`** VideosApiGetVideoStream

#### Defined in

[generated-client/api/videos-api.ts:1936](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/videos-api.ts#L1936)

___

### audioSampleRate

• `Optional` `Readonly` **audioSampleRate**: `number`

Optional. Specify a specific audio sample rate, e.g. 44100.

**`memberof`** VideosApiGetVideoStream

#### Defined in

[generated-client/api/videos-api.ts:1971](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/videos-api.ts#L1971)

___

### audioStreamIndex

• `Optional` `Readonly` **audioStreamIndex**: `number`

Optional. The index of the audio stream to use. If omitted the first audio stream will be used.

**`memberof`** VideosApiGetVideoStream

#### Defined in

[generated-client/api/videos-api.ts:2167](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/videos-api.ts#L2167)

___

### breakOnNonKeyFrames

• `Optional` `Readonly` **breakOnNonKeyFrames**: `boolean`

Optional. Whether to break on non key frames.

**`memberof`** VideosApiGetVideoStream

#### Defined in

[generated-client/api/videos-api.ts:1964](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/videos-api.ts#L1964)

___

### container

• `Optional` `Readonly` **container**: `string`

The video container. Possible values are: ts, webm, asf, wmv, ogv, mp4, m4v, mkv, mpeg, mpg, avi, 3gp, wmv, wtv, m2ts, mov, iso, flv.

**`memberof`** VideosApiGetVideoStream

#### Defined in

[generated-client/api/videos-api.ts:1859](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/videos-api.ts#L1859)

___

### context

• `Optional` `Readonly` **context**: [`EncodingContext`](../enums/generated_client.EncodingContext.md)

Optional. The MediaBrowser.Model.Dlna.EncodingContext.

**`memberof`** VideosApiGetVideoStream

#### Defined in

[generated-client/api/videos-api.ts:2181](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/videos-api.ts#L2181)

___

### copyTimestamps

• `Optional` `Readonly` **copyTimestamps**: `boolean`

Whether or not to copy timestamps when transcoding with an offset. Defaults to false.

**`memberof`** VideosApiGetVideoStream

#### Defined in

[generated-client/api/videos-api.ts:2034](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/videos-api.ts#L2034)

___

### cpuCoreLimit

• `Optional` `Readonly` **cpuCoreLimit**: `number`

Optional. The limit of how many cpu cores to use.

**`memberof`** VideosApiGetVideoStream

#### Defined in

[generated-client/api/videos-api.ts:2125](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/videos-api.ts#L2125)

___

### deInterlace

• `Optional` `Readonly` **deInterlace**: `boolean`

Optional. Whether to deinterlace the video.

**`memberof`** VideosApiGetVideoStream

#### Defined in

[generated-client/api/videos-api.ts:2104](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/videos-api.ts#L2104)

___

### deviceId

• `Optional` `Readonly` **deviceId**: `string`

The device id of the client requesting. Used to stop encoding processes when needed.

**`memberof`** VideosApiGetVideoStream

#### Defined in

[generated-client/api/videos-api.ts:1929](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/videos-api.ts#L1929)

___

### deviceProfileId

• `Optional` `Readonly` **deviceProfileId**: `string`

Optional. The dlna device profile id to utilize.

**`memberof`** VideosApiGetVideoStream

#### Defined in

[generated-client/api/videos-api.ts:1887](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/videos-api.ts#L1887)

___

### enableAutoStreamCopy

• `Optional` `Readonly` **enableAutoStreamCopy**: `boolean`

Whether or not to allow automatic stream copy if requested values match the original source. Defaults to true.

**`memberof`** VideosApiGetVideoStream

#### Defined in

[generated-client/api/videos-api.ts:1943](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/videos-api.ts#L1943)

___

### enableMpegtsM2TsMode

• `Optional` `Readonly` **enableMpegtsM2TsMode**: `boolean`

Optional. Whether to enable the MpegtsM2Ts mode.

**`memberof`** VideosApiGetVideoStream

#### Defined in

[generated-client/api/videos-api.ts:2139](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/videos-api.ts#L2139)

___

### framerate

• `Optional` `Readonly` **framerate**: `number`

Optional. A specific video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements.

**`memberof`** VideosApiGetVideoStream

#### Defined in

[generated-client/api/videos-api.ts:2020](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/videos-api.ts#L2020)

___

### height

• `Optional` `Readonly` **height**: `number`

Optional. The fixed vertical resolution of the encoded video.

**`memberof`** VideosApiGetVideoStream

#### Defined in

[generated-client/api/videos-api.ts:2055](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/videos-api.ts#L2055)

___

### itemId

• `Readonly` **itemId**: `string`

The item id.

**`memberof`** VideosApiGetVideoStream

#### Defined in

[generated-client/api/videos-api.ts:1852](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/videos-api.ts#L1852)

___

### level

• `Optional` `Readonly` **level**: `string`

Optional. Specify a level for the encoder profile (varies by encoder), e.g. 3, 3.1.

**`memberof`** VideosApiGetVideoStream

#### Defined in

[generated-client/api/videos-api.ts:2013](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/videos-api.ts#L2013)

___

### liveStreamId

• `Optional` `Readonly` **liveStreamId**: `string`

The live stream id.

**`memberof`** VideosApiGetVideoStream

#### Defined in

[generated-client/api/videos-api.ts:2132](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/videos-api.ts#L2132)

___

### maxAudioBitDepth

• `Optional` `Readonly` **maxAudioBitDepth**: `number`

Optional. The maximum audio bit depth.

**`memberof`** VideosApiGetVideoStream

#### Defined in

[generated-client/api/videos-api.ts:1978](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/videos-api.ts#L1978)

___

### maxAudioChannels

• `Optional` `Readonly` **maxAudioChannels**: `number`

Optional. Specify a maximum number of audio channels to encode to, e.g. 2.

**`memberof`** VideosApiGetVideoStream

#### Defined in

[generated-client/api/videos-api.ts:1999](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/videos-api.ts#L1999)

___

### maxFramerate

• `Optional` `Readonly` **maxFramerate**: `number`

Optional. A specific maximum video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements.

**`memberof`** VideosApiGetVideoStream

#### Defined in

[generated-client/api/videos-api.ts:2027](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/videos-api.ts#L2027)

___

### maxRefFrames

• `Optional` `Readonly` **maxRefFrames**: `number`

Optional.

**`memberof`** VideosApiGetVideoStream

#### Defined in

[generated-client/api/videos-api.ts:2083](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/videos-api.ts#L2083)

___

### maxVideoBitDepth

• `Optional` `Readonly` **maxVideoBitDepth**: `number`

Optional. The maximum video bit depth.

**`memberof`** VideosApiGetVideoStream

#### Defined in

[generated-client/api/videos-api.ts:2090](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/videos-api.ts#L2090)

___

### mediaSourceId

• `Optional` `Readonly` **mediaSourceId**: `string`

The media version id, if playing an alternate version.

**`memberof`** VideosApiGetVideoStream

#### Defined in

[generated-client/api/videos-api.ts:1922](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/videos-api.ts#L1922)

___

### minSegments

• `Optional` `Readonly` **minSegments**: `number`

The minimum number of segments.

**`memberof`** VideosApiGetVideoStream

#### Defined in

[generated-client/api/videos-api.ts:1915](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/videos-api.ts#L1915)

___

### params

• `Optional` `Readonly` **params**: `string`

The streaming parameters.

**`memberof`** VideosApiGetVideoStream

#### Defined in

[generated-client/api/videos-api.ts:1873](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/videos-api.ts#L1873)

___

### playSessionId

• `Optional` `Readonly` **playSessionId**: `string`

The play session id.

**`memberof`** VideosApiGetVideoStream

#### Defined in

[generated-client/api/videos-api.ts:1894](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/videos-api.ts#L1894)

___

### profile

• `Optional` `Readonly` **profile**: `string`

Optional. Specify a specific an encoder profile (varies by encoder), e.g. main, baseline, high.

**`memberof`** VideosApiGetVideoStream

#### Defined in

[generated-client/api/videos-api.ts:2006](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/videos-api.ts#L2006)

___

### requireAvc

• `Optional` `Readonly` **requireAvc**: `boolean`

Optional. Whether to require avc.

**`memberof`** VideosApiGetVideoStream

#### Defined in

[generated-client/api/videos-api.ts:2097](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/videos-api.ts#L2097)

___

### requireNonAnamorphic

• `Optional` `Readonly` **requireNonAnamorphic**: `boolean`

Optional. Whether to require a non anamorphic stream.

**`memberof`** VideosApiGetVideoStream

#### Defined in

[generated-client/api/videos-api.ts:2111](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/videos-api.ts#L2111)

___

### segmentContainer

• `Optional` `Readonly` **segmentContainer**: `string`

The segment container.

**`memberof`** VideosApiGetVideoStream

#### Defined in

[generated-client/api/videos-api.ts:1901](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/videos-api.ts#L1901)

___

### segmentLength

• `Optional` `Readonly` **segmentLength**: `number`

The segment length.

**`memberof`** VideosApiGetVideoStream

#### Defined in

[generated-client/api/videos-api.ts:1908](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/videos-api.ts#L1908)

___

### startTimeTicks

• `Optional` `Readonly` **startTimeTicks**: `number`

Optional. Specify a starting offset, in ticks. 1 tick &#x3D; 10000 ms.

**`memberof`** VideosApiGetVideoStream

#### Defined in

[generated-client/api/videos-api.ts:2041](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/videos-api.ts#L2041)

___

### streamOptions

• `Optional` `Readonly` **streamOptions**: `Object`

Optional. The streaming options.

**`memberof`** VideosApiGetVideoStream

#### Index signature

▪ [key: `string`]: `string`

#### Defined in

[generated-client/api/videos-api.ts:2188](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/videos-api.ts#L2188)

___

### subtitleCodec

• `Optional` `Readonly` **subtitleCodec**: `string`

Optional. Specify a subtitle codec to encode to.

**`memberof`** VideosApiGetVideoStream

#### Defined in

[generated-client/api/videos-api.ts:2153](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/videos-api.ts#L2153)

___

### subtitleMethod

• `Optional` `Readonly` **subtitleMethod**: [`SubtitleDeliveryMethod`](../enums/generated_client.SubtitleDeliveryMethod.md)

Optional. Specify the subtitle delivery method.

**`memberof`** VideosApiGetVideoStream

#### Defined in

[generated-client/api/videos-api.ts:2076](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/videos-api.ts#L2076)

___

### subtitleStreamIndex

• `Optional` `Readonly` **subtitleStreamIndex**: `number`

Optional. The index of the subtitle stream to use. If omitted no subtitles will be used.

**`memberof`** VideosApiGetVideoStream

#### Defined in

[generated-client/api/videos-api.ts:2069](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/videos-api.ts#L2069)

___

### tag

• `Optional` `Readonly` **tag**: `string`

The tag.

**`memberof`** VideosApiGetVideoStream

#### Defined in

[generated-client/api/videos-api.ts:1880](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/videos-api.ts#L1880)

___

### transcodeReasons

• `Optional` `Readonly` **transcodeReasons**: `string`

Optional. The transcoding reason.

**`memberof`** VideosApiGetVideoStream

#### Defined in

[generated-client/api/videos-api.ts:2160](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/videos-api.ts#L2160)

___

### transcodingMaxAudioChannels

• `Optional` `Readonly` **transcodingMaxAudioChannels**: `number`

Optional. The maximum number of audio channels to transcode.

**`memberof`** VideosApiGetVideoStream

#### Defined in

[generated-client/api/videos-api.ts:2118](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/videos-api.ts#L2118)

___

### videoBitRate

• `Optional` `Readonly` **videoBitRate**: `number`

Optional. Specify a video bitrate to encode to, e.g. 500000. If omitted this will be left to encoder defaults.

**`memberof`** VideosApiGetVideoStream

#### Defined in

[generated-client/api/videos-api.ts:2062](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/videos-api.ts#L2062)

___

### videoCodec

• `Optional` `Readonly` **videoCodec**: `string`

Optional. Specify a video codec to encode to, e.g. h264. If omitted the server will auto-select using the url\&#39;s extension. Options: h265, h264, mpeg4, theora, vpx, wmv.

**`memberof`** VideosApiGetVideoStream

#### Defined in

[generated-client/api/videos-api.ts:2146](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/videos-api.ts#L2146)

___

### videoStreamIndex

• `Optional` `Readonly` **videoStreamIndex**: `number`

Optional. The index of the video stream to use. If omitted the first video stream will be used.

**`memberof`** VideosApiGetVideoStream

#### Defined in

[generated-client/api/videos-api.ts:2174](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/videos-api.ts#L2174)

___

### width

• `Optional` `Readonly` **width**: `number`

Optional. The fixed horizontal resolution of the encoded video.

**`memberof`** VideosApiGetVideoStream

#### Defined in

[generated-client/api/videos-api.ts:2048](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/videos-api.ts#L2048)
