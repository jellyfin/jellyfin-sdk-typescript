[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / DynamicHlsApiGetHlsAudioSegmentRequest

# Interface: DynamicHlsApiGetHlsAudioSegmentRequest

[generated-client](../modules/generated_client.md).DynamicHlsApiGetHlsAudioSegmentRequest

Request parameters for getHlsAudioSegment operation in DynamicHlsApi.

**`export`**

**`interface`** DynamicHlsApiGetHlsAudioSegmentRequest

## Table of contents

### Properties

- [\_static](generated_client.DynamicHlsApiGetHlsAudioSegmentRequest.md#_static)
- [actualSegmentLengthTicks](generated_client.DynamicHlsApiGetHlsAudioSegmentRequest.md#actualsegmentlengthticks)
- [allowAudioStreamCopy](generated_client.DynamicHlsApiGetHlsAudioSegmentRequest.md#allowaudiostreamcopy)
- [allowVideoStreamCopy](generated_client.DynamicHlsApiGetHlsAudioSegmentRequest.md#allowvideostreamcopy)
- [audioBitRate](generated_client.DynamicHlsApiGetHlsAudioSegmentRequest.md#audiobitrate)
- [audioChannels](generated_client.DynamicHlsApiGetHlsAudioSegmentRequest.md#audiochannels)
- [audioCodec](generated_client.DynamicHlsApiGetHlsAudioSegmentRequest.md#audiocodec)
- [audioSampleRate](generated_client.DynamicHlsApiGetHlsAudioSegmentRequest.md#audiosamplerate)
- [audioStreamIndex](generated_client.DynamicHlsApiGetHlsAudioSegmentRequest.md#audiostreamindex)
- [breakOnNonKeyFrames](generated_client.DynamicHlsApiGetHlsAudioSegmentRequest.md#breakonnonkeyframes)
- [container](generated_client.DynamicHlsApiGetHlsAudioSegmentRequest.md#container)
- [context](generated_client.DynamicHlsApiGetHlsAudioSegmentRequest.md#context)
- [copyTimestamps](generated_client.DynamicHlsApiGetHlsAudioSegmentRequest.md#copytimestamps)
- [cpuCoreLimit](generated_client.DynamicHlsApiGetHlsAudioSegmentRequest.md#cpucorelimit)
- [deInterlace](generated_client.DynamicHlsApiGetHlsAudioSegmentRequest.md#deinterlace)
- [deviceId](generated_client.DynamicHlsApiGetHlsAudioSegmentRequest.md#deviceid)
- [deviceProfileId](generated_client.DynamicHlsApiGetHlsAudioSegmentRequest.md#deviceprofileid)
- [enableAutoStreamCopy](generated_client.DynamicHlsApiGetHlsAudioSegmentRequest.md#enableautostreamcopy)
- [enableMpegtsM2TsMode](generated_client.DynamicHlsApiGetHlsAudioSegmentRequest.md#enablempegtsm2tsmode)
- [framerate](generated_client.DynamicHlsApiGetHlsAudioSegmentRequest.md#framerate)
- [height](generated_client.DynamicHlsApiGetHlsAudioSegmentRequest.md#height)
- [itemId](generated_client.DynamicHlsApiGetHlsAudioSegmentRequest.md#itemid)
- [level](generated_client.DynamicHlsApiGetHlsAudioSegmentRequest.md#level)
- [liveStreamId](generated_client.DynamicHlsApiGetHlsAudioSegmentRequest.md#livestreamid)
- [maxAudioBitDepth](generated_client.DynamicHlsApiGetHlsAudioSegmentRequest.md#maxaudiobitdepth)
- [maxAudioChannels](generated_client.DynamicHlsApiGetHlsAudioSegmentRequest.md#maxaudiochannels)
- [maxFramerate](generated_client.DynamicHlsApiGetHlsAudioSegmentRequest.md#maxframerate)
- [maxRefFrames](generated_client.DynamicHlsApiGetHlsAudioSegmentRequest.md#maxrefframes)
- [maxStreamingBitrate](generated_client.DynamicHlsApiGetHlsAudioSegmentRequest.md#maxstreamingbitrate)
- [maxVideoBitDepth](generated_client.DynamicHlsApiGetHlsAudioSegmentRequest.md#maxvideobitdepth)
- [mediaSourceId](generated_client.DynamicHlsApiGetHlsAudioSegmentRequest.md#mediasourceid)
- [minSegments](generated_client.DynamicHlsApiGetHlsAudioSegmentRequest.md#minsegments)
- [params](generated_client.DynamicHlsApiGetHlsAudioSegmentRequest.md#params)
- [playSessionId](generated_client.DynamicHlsApiGetHlsAudioSegmentRequest.md#playsessionid)
- [playlistId](generated_client.DynamicHlsApiGetHlsAudioSegmentRequest.md#playlistid)
- [profile](generated_client.DynamicHlsApiGetHlsAudioSegmentRequest.md#profile)
- [requireAvc](generated_client.DynamicHlsApiGetHlsAudioSegmentRequest.md#requireavc)
- [requireNonAnamorphic](generated_client.DynamicHlsApiGetHlsAudioSegmentRequest.md#requirenonanamorphic)
- [runtimeTicks](generated_client.DynamicHlsApiGetHlsAudioSegmentRequest.md#runtimeticks)
- [segmentContainer](generated_client.DynamicHlsApiGetHlsAudioSegmentRequest.md#segmentcontainer)
- [segmentId](generated_client.DynamicHlsApiGetHlsAudioSegmentRequest.md#segmentid)
- [segmentLength](generated_client.DynamicHlsApiGetHlsAudioSegmentRequest.md#segmentlength)
- [startTimeTicks](generated_client.DynamicHlsApiGetHlsAudioSegmentRequest.md#starttimeticks)
- [streamOptions](generated_client.DynamicHlsApiGetHlsAudioSegmentRequest.md#streamoptions)
- [subtitleCodec](generated_client.DynamicHlsApiGetHlsAudioSegmentRequest.md#subtitlecodec)
- [subtitleMethod](generated_client.DynamicHlsApiGetHlsAudioSegmentRequest.md#subtitlemethod)
- [subtitleStreamIndex](generated_client.DynamicHlsApiGetHlsAudioSegmentRequest.md#subtitlestreamindex)
- [tag](generated_client.DynamicHlsApiGetHlsAudioSegmentRequest.md#tag)
- [transcodeReasons](generated_client.DynamicHlsApiGetHlsAudioSegmentRequest.md#transcodereasons)
- [transcodingMaxAudioChannels](generated_client.DynamicHlsApiGetHlsAudioSegmentRequest.md#transcodingmaxaudiochannels)
- [videoBitRate](generated_client.DynamicHlsApiGetHlsAudioSegmentRequest.md#videobitrate)
- [videoCodec](generated_client.DynamicHlsApiGetHlsAudioSegmentRequest.md#videocodec)
- [videoStreamIndex](generated_client.DynamicHlsApiGetHlsAudioSegmentRequest.md#videostreamindex)
- [width](generated_client.DynamicHlsApiGetHlsAudioSegmentRequest.md#width)

## Properties

### \_static

• `Optional` `Readonly` **\_static**: `boolean`

Optional. If true, the original file will be streamed statically without any encoding. Use either no url extension or the original file extension. true/false.

**`memberof`** DynamicHlsApiGetHlsAudioSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3812](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L3812)

___

### actualSegmentLengthTicks

• `Readonly` **actualSegmentLengthTicks**: `number`

The length of the requested segment in ticks.

**`memberof`** DynamicHlsApiGetHlsAudioSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3805](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L3805)

___

### allowAudioStreamCopy

• `Optional` `Readonly` **allowAudioStreamCopy**: `boolean`

Whether or not to allow copying of the audio stream url.

**`memberof`** DynamicHlsApiGetHlsAudioSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3903](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L3903)

___

### allowVideoStreamCopy

• `Optional` `Readonly` **allowVideoStreamCopy**: `boolean`

Whether or not to allow copying of the video stream url.

**`memberof`** DynamicHlsApiGetHlsAudioSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3896](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L3896)

___

### audioBitRate

• `Optional` `Readonly` **audioBitRate**: `number`

Optional. Specify an audio bitrate to encode to, e.g. 128000. If omitted this will be left to encoder defaults.

**`memberof`** DynamicHlsApiGetHlsAudioSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3938](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L3938)

___

### audioChannels

• `Optional` `Readonly` **audioChannels**: `number`

Optional. Specify a specific number of audio channels to encode to, e.g. 2.

**`memberof`** DynamicHlsApiGetHlsAudioSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3945](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L3945)

___

### audioCodec

• `Optional` `Readonly` **audioCodec**: `string`

Optional. Specify a audio codec to encode to, e.g. mp3. If omitted the server will auto-select using the url\&#39;s extension. Options: aac, mp3, vorbis, wma.

**`memberof`** DynamicHlsApiGetHlsAudioSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3882](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L3882)

___

### audioSampleRate

• `Optional` `Readonly` **audioSampleRate**: `number`

Optional. Specify a specific audio sample rate, e.g. 44100.

**`memberof`** DynamicHlsApiGetHlsAudioSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3917](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L3917)

___

### audioStreamIndex

• `Optional` `Readonly` **audioStreamIndex**: `number`

Optional. The index of the audio stream to use. If omitted the first audio stream will be used.

**`memberof`** DynamicHlsApiGetHlsAudioSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4120](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L4120)

___

### breakOnNonKeyFrames

• `Optional` `Readonly` **breakOnNonKeyFrames**: `boolean`

Optional. Whether to break on non key frames.

**`memberof`** DynamicHlsApiGetHlsAudioSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3910](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L3910)

___

### container

• `Readonly` **container**: `string`

The video container. Possible values are: ts, webm, asf, wmv, ogv, mp4, m4v, mkv, mpeg, mpg, avi, 3gp, wmv, wtv, m2ts, mov, iso, flv.

**`memberof`** DynamicHlsApiGetHlsAudioSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3791](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L3791)

___

### context

• `Optional` `Readonly` **context**: [`EncodingContext`](../enums/generated_client.EncodingContext.md)

Optional. The MediaBrowser.Model.Dlna.EncodingContext.

**`memberof`** DynamicHlsApiGetHlsAudioSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4134](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L4134)

___

### copyTimestamps

• `Optional` `Readonly` **copyTimestamps**: `boolean`

Whether or not to copy timestamps when transcoding with an offset. Defaults to false.

**`memberof`** DynamicHlsApiGetHlsAudioSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3987](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L3987)

___

### cpuCoreLimit

• `Optional` `Readonly` **cpuCoreLimit**: `number`

Optional. The limit of how many cpu cores to use.

**`memberof`** DynamicHlsApiGetHlsAudioSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4078](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L4078)

___

### deInterlace

• `Optional` `Readonly` **deInterlace**: `boolean`

Optional. Whether to deinterlace the video.

**`memberof`** DynamicHlsApiGetHlsAudioSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4057](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L4057)

___

### deviceId

• `Optional` `Readonly` **deviceId**: `string`

The device id of the client requesting. Used to stop encoding processes when needed.

**`memberof`** DynamicHlsApiGetHlsAudioSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3875](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L3875)

___

### deviceProfileId

• `Optional` `Readonly` **deviceProfileId**: `string`

Optional. The dlna device profile id to utilize.

**`memberof`** DynamicHlsApiGetHlsAudioSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3833](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L3833)

___

### enableAutoStreamCopy

• `Optional` `Readonly` **enableAutoStreamCopy**: `boolean`

Whether or not to allow automatic stream copy if requested values match the original source. Defaults to true.

**`memberof`** DynamicHlsApiGetHlsAudioSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3889](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L3889)

___

### enableMpegtsM2TsMode

• `Optional` `Readonly` **enableMpegtsM2TsMode**: `boolean`

Optional. Whether to enable the MpegtsM2Ts mode.

**`memberof`** DynamicHlsApiGetHlsAudioSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4092](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L4092)

___

### framerate

• `Optional` `Readonly` **framerate**: `number`

Optional. A specific video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements.

**`memberof`** DynamicHlsApiGetHlsAudioSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3973](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L3973)

___

### height

• `Optional` `Readonly` **height**: `number`

Optional. The fixed vertical resolution of the encoded video.

**`memberof`** DynamicHlsApiGetHlsAudioSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4008](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L4008)

___

### itemId

• `Readonly` **itemId**: `string`

The item id.

**`memberof`** DynamicHlsApiGetHlsAudioSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3770](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L3770)

___

### level

• `Optional` `Readonly` **level**: `string`

Optional. Specify a level for the encoder profile (varies by encoder), e.g. 3, 3.1.

**`memberof`** DynamicHlsApiGetHlsAudioSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3966](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L3966)

___

### liveStreamId

• `Optional` `Readonly` **liveStreamId**: `string`

The live stream id.

**`memberof`** DynamicHlsApiGetHlsAudioSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4085](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L4085)

___

### maxAudioBitDepth

• `Optional` `Readonly` **maxAudioBitDepth**: `number`

Optional. The maximum audio bit depth.

**`memberof`** DynamicHlsApiGetHlsAudioSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3924](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L3924)

___

### maxAudioChannels

• `Optional` `Readonly` **maxAudioChannels**: `number`

Optional. Specify a maximum number of audio channels to encode to, e.g. 2.

**`memberof`** DynamicHlsApiGetHlsAudioSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3952](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L3952)

___

### maxFramerate

• `Optional` `Readonly` **maxFramerate**: `number`

Optional. A specific maximum video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements.

**`memberof`** DynamicHlsApiGetHlsAudioSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3980](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L3980)

___

### maxRefFrames

• `Optional` `Readonly` **maxRefFrames**: `number`

Optional.

**`memberof`** DynamicHlsApiGetHlsAudioSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4036](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L4036)

___

### maxStreamingBitrate

• `Optional` `Readonly` **maxStreamingBitrate**: `number`

Optional. The maximum streaming bitrate.

**`memberof`** DynamicHlsApiGetHlsAudioSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3931](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L3931)

___

### maxVideoBitDepth

• `Optional` `Readonly` **maxVideoBitDepth**: `number`

Optional. The maximum video bit depth.

**`memberof`** DynamicHlsApiGetHlsAudioSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4043](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L4043)

___

### mediaSourceId

• `Optional` `Readonly` **mediaSourceId**: `string`

The media version id, if playing an alternate version.

**`memberof`** DynamicHlsApiGetHlsAudioSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3868](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L3868)

___

### minSegments

• `Optional` `Readonly` **minSegments**: `number`

The minimum number of segments.

**`memberof`** DynamicHlsApiGetHlsAudioSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3861](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L3861)

___

### params

• `Optional` `Readonly` **params**: `string`

The streaming parameters.

**`memberof`** DynamicHlsApiGetHlsAudioSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3819](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L3819)

___

### playSessionId

• `Optional` `Readonly` **playSessionId**: `string`

The play session id.

**`memberof`** DynamicHlsApiGetHlsAudioSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3840](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L3840)

___

### playlistId

• `Readonly` **playlistId**: `string`

The playlist id.

**`memberof`** DynamicHlsApiGetHlsAudioSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3777](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L3777)

___

### profile

• `Optional` `Readonly` **profile**: `string`

Optional. Specify a specific an encoder profile (varies by encoder), e.g. main, baseline, high.

**`memberof`** DynamicHlsApiGetHlsAudioSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3959](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L3959)

___

### requireAvc

• `Optional` `Readonly` **requireAvc**: `boolean`

Optional. Whether to require avc.

**`memberof`** DynamicHlsApiGetHlsAudioSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4050](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L4050)

___

### requireNonAnamorphic

• `Optional` `Readonly` **requireNonAnamorphic**: `boolean`

Optional. Whether to require a non anamorphic stream.

**`memberof`** DynamicHlsApiGetHlsAudioSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4064](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L4064)

___

### runtimeTicks

• `Readonly` **runtimeTicks**: `number`

The position of the requested segment in ticks.

**`memberof`** DynamicHlsApiGetHlsAudioSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3798](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L3798)

___

### segmentContainer

• `Optional` `Readonly` **segmentContainer**: `string`

The segment container.

**`memberof`** DynamicHlsApiGetHlsAudioSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3847](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L3847)

___

### segmentId

• `Readonly` **segmentId**: `number`

The segment id.

**`memberof`** DynamicHlsApiGetHlsAudioSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3784](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L3784)

___

### segmentLength

• `Optional` `Readonly` **segmentLength**: `number`

The segment length.

**`memberof`** DynamicHlsApiGetHlsAudioSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3854](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L3854)

___

### startTimeTicks

• `Optional` `Readonly` **startTimeTicks**: `number`

Optional. Specify a starting offset, in ticks. 1 tick &#x3D; 10000 ms.

**`memberof`** DynamicHlsApiGetHlsAudioSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3994](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L3994)

___

### streamOptions

• `Optional` `Readonly` **streamOptions**: `Object`

Optional. The streaming options.

**`memberof`** DynamicHlsApiGetHlsAudioSegment

#### Index signature

▪ [key: `string`]: `string`

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4141](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L4141)

___

### subtitleCodec

• `Optional` `Readonly` **subtitleCodec**: `string`

Optional. Specify a subtitle codec to encode to.

**`memberof`** DynamicHlsApiGetHlsAudioSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4106](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L4106)

___

### subtitleMethod

• `Optional` `Readonly` **subtitleMethod**: [`SubtitleDeliveryMethod`](../enums/generated_client.SubtitleDeliveryMethod.md)

Optional. Specify the subtitle delivery method.

**`memberof`** DynamicHlsApiGetHlsAudioSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4029](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L4029)

___

### subtitleStreamIndex

• `Optional` `Readonly` **subtitleStreamIndex**: `number`

Optional. The index of the subtitle stream to use. If omitted no subtitles will be used.

**`memberof`** DynamicHlsApiGetHlsAudioSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4022](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L4022)

___

### tag

• `Optional` `Readonly` **tag**: `string`

The tag.

**`memberof`** DynamicHlsApiGetHlsAudioSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3826](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L3826)

___

### transcodeReasons

• `Optional` `Readonly` **transcodeReasons**: `string`

Optional. The transcoding reason.

**`memberof`** DynamicHlsApiGetHlsAudioSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4113](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L4113)

___

### transcodingMaxAudioChannels

• `Optional` `Readonly` **transcodingMaxAudioChannels**: `number`

Optional. The maximum number of audio channels to transcode.

**`memberof`** DynamicHlsApiGetHlsAudioSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4071](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L4071)

___

### videoBitRate

• `Optional` `Readonly` **videoBitRate**: `number`

Optional. Specify a video bitrate to encode to, e.g. 500000. If omitted this will be left to encoder defaults.

**`memberof`** DynamicHlsApiGetHlsAudioSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4015](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L4015)

___

### videoCodec

• `Optional` `Readonly` **videoCodec**: `string`

Optional. Specify a video codec to encode to, e.g. h264. If omitted the server will auto-select using the url\&#39;s extension. Options: h265, h264, mpeg4, theora, vpx, wmv.

**`memberof`** DynamicHlsApiGetHlsAudioSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4099](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L4099)

___

### videoStreamIndex

• `Optional` `Readonly` **videoStreamIndex**: `number`

Optional. The index of the video stream to use. If omitted the first video stream will be used.

**`memberof`** DynamicHlsApiGetHlsAudioSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4127](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L4127)

___

### width

• `Optional` `Readonly` **width**: `number`

Optional. The fixed horizontal resolution of the encoded video.

**`memberof`** DynamicHlsApiGetHlsAudioSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4001](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L4001)
