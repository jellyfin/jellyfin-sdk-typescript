[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / DynamicHlsApiGetHlsVideoSegmentRequest

# Interface: DynamicHlsApiGetHlsVideoSegmentRequest

[generated-client](../modules/generated_client.md).DynamicHlsApiGetHlsVideoSegmentRequest

Request parameters for getHlsVideoSegment operation in DynamicHlsApi.

**`export`**

**`interface`** DynamicHlsApiGetHlsVideoSegmentRequest

## Table of contents

### Properties

- [\_static](generated_client.DynamicHlsApiGetHlsVideoSegmentRequest.md#_static)
- [actualSegmentLengthTicks](generated_client.DynamicHlsApiGetHlsVideoSegmentRequest.md#actualsegmentlengthticks)
- [allowAudioStreamCopy](generated_client.DynamicHlsApiGetHlsVideoSegmentRequest.md#allowaudiostreamcopy)
- [allowVideoStreamCopy](generated_client.DynamicHlsApiGetHlsVideoSegmentRequest.md#allowvideostreamcopy)
- [audioBitRate](generated_client.DynamicHlsApiGetHlsVideoSegmentRequest.md#audiobitrate)
- [audioChannels](generated_client.DynamicHlsApiGetHlsVideoSegmentRequest.md#audiochannels)
- [audioCodec](generated_client.DynamicHlsApiGetHlsVideoSegmentRequest.md#audiocodec)
- [audioSampleRate](generated_client.DynamicHlsApiGetHlsVideoSegmentRequest.md#audiosamplerate)
- [audioStreamIndex](generated_client.DynamicHlsApiGetHlsVideoSegmentRequest.md#audiostreamindex)
- [breakOnNonKeyFrames](generated_client.DynamicHlsApiGetHlsVideoSegmentRequest.md#breakonnonkeyframes)
- [container](generated_client.DynamicHlsApiGetHlsVideoSegmentRequest.md#container)
- [context](generated_client.DynamicHlsApiGetHlsVideoSegmentRequest.md#context)
- [copyTimestamps](generated_client.DynamicHlsApiGetHlsVideoSegmentRequest.md#copytimestamps)
- [cpuCoreLimit](generated_client.DynamicHlsApiGetHlsVideoSegmentRequest.md#cpucorelimit)
- [deInterlace](generated_client.DynamicHlsApiGetHlsVideoSegmentRequest.md#deinterlace)
- [deviceId](generated_client.DynamicHlsApiGetHlsVideoSegmentRequest.md#deviceid)
- [deviceProfileId](generated_client.DynamicHlsApiGetHlsVideoSegmentRequest.md#deviceprofileid)
- [enableAutoStreamCopy](generated_client.DynamicHlsApiGetHlsVideoSegmentRequest.md#enableautostreamcopy)
- [enableMpegtsM2TsMode](generated_client.DynamicHlsApiGetHlsVideoSegmentRequest.md#enablempegtsm2tsmode)
- [framerate](generated_client.DynamicHlsApiGetHlsVideoSegmentRequest.md#framerate)
- [height](generated_client.DynamicHlsApiGetHlsVideoSegmentRequest.md#height)
- [itemId](generated_client.DynamicHlsApiGetHlsVideoSegmentRequest.md#itemid)
- [level](generated_client.DynamicHlsApiGetHlsVideoSegmentRequest.md#level)
- [liveStreamId](generated_client.DynamicHlsApiGetHlsVideoSegmentRequest.md#livestreamid)
- [maxAudioBitDepth](generated_client.DynamicHlsApiGetHlsVideoSegmentRequest.md#maxaudiobitdepth)
- [maxAudioChannels](generated_client.DynamicHlsApiGetHlsVideoSegmentRequest.md#maxaudiochannels)
- [maxFramerate](generated_client.DynamicHlsApiGetHlsVideoSegmentRequest.md#maxframerate)
- [maxHeight](generated_client.DynamicHlsApiGetHlsVideoSegmentRequest.md#maxheight)
- [maxRefFrames](generated_client.DynamicHlsApiGetHlsVideoSegmentRequest.md#maxrefframes)
- [maxVideoBitDepth](generated_client.DynamicHlsApiGetHlsVideoSegmentRequest.md#maxvideobitdepth)
- [maxWidth](generated_client.DynamicHlsApiGetHlsVideoSegmentRequest.md#maxwidth)
- [mediaSourceId](generated_client.DynamicHlsApiGetHlsVideoSegmentRequest.md#mediasourceid)
- [minSegments](generated_client.DynamicHlsApiGetHlsVideoSegmentRequest.md#minsegments)
- [params](generated_client.DynamicHlsApiGetHlsVideoSegmentRequest.md#params)
- [playSessionId](generated_client.DynamicHlsApiGetHlsVideoSegmentRequest.md#playsessionid)
- [playlistId](generated_client.DynamicHlsApiGetHlsVideoSegmentRequest.md#playlistid)
- [profile](generated_client.DynamicHlsApiGetHlsVideoSegmentRequest.md#profile)
- [requireAvc](generated_client.DynamicHlsApiGetHlsVideoSegmentRequest.md#requireavc)
- [requireNonAnamorphic](generated_client.DynamicHlsApiGetHlsVideoSegmentRequest.md#requirenonanamorphic)
- [runtimeTicks](generated_client.DynamicHlsApiGetHlsVideoSegmentRequest.md#runtimeticks)
- [segmentContainer](generated_client.DynamicHlsApiGetHlsVideoSegmentRequest.md#segmentcontainer)
- [segmentId](generated_client.DynamicHlsApiGetHlsVideoSegmentRequest.md#segmentid)
- [segmentLength](generated_client.DynamicHlsApiGetHlsVideoSegmentRequest.md#segmentlength)
- [startTimeTicks](generated_client.DynamicHlsApiGetHlsVideoSegmentRequest.md#starttimeticks)
- [streamOptions](generated_client.DynamicHlsApiGetHlsVideoSegmentRequest.md#streamoptions)
- [subtitleCodec](generated_client.DynamicHlsApiGetHlsVideoSegmentRequest.md#subtitlecodec)
- [subtitleMethod](generated_client.DynamicHlsApiGetHlsVideoSegmentRequest.md#subtitlemethod)
- [subtitleStreamIndex](generated_client.DynamicHlsApiGetHlsVideoSegmentRequest.md#subtitlestreamindex)
- [tag](generated_client.DynamicHlsApiGetHlsVideoSegmentRequest.md#tag)
- [transcodeReasons](generated_client.DynamicHlsApiGetHlsVideoSegmentRequest.md#transcodereasons)
- [transcodingMaxAudioChannels](generated_client.DynamicHlsApiGetHlsVideoSegmentRequest.md#transcodingmaxaudiochannels)
- [videoBitRate](generated_client.DynamicHlsApiGetHlsVideoSegmentRequest.md#videobitrate)
- [videoCodec](generated_client.DynamicHlsApiGetHlsVideoSegmentRequest.md#videocodec)
- [videoStreamIndex](generated_client.DynamicHlsApiGetHlsVideoSegmentRequest.md#videostreamindex)
- [width](generated_client.DynamicHlsApiGetHlsVideoSegmentRequest.md#width)

## Properties

### \_static

• `Optional` `Readonly` **\_static**: `boolean`

Optional. If true, the original file will be streamed statically without any encoding. Use either no url extension or the original file extension. true/false.

**`memberof`** DynamicHlsApiGetHlsVideoSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4197](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L4197)

___

### actualSegmentLengthTicks

• `Readonly` **actualSegmentLengthTicks**: `number`

The length of the requested segment in ticks.

**`memberof`** DynamicHlsApiGetHlsVideoSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4190](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L4190)

___

### allowAudioStreamCopy

• `Optional` `Readonly` **allowAudioStreamCopy**: `boolean`

Whether or not to allow copying of the audio stream url.

**`memberof`** DynamicHlsApiGetHlsVideoSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4288](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L4288)

___

### allowVideoStreamCopy

• `Optional` `Readonly` **allowVideoStreamCopy**: `boolean`

Whether or not to allow copying of the video stream url.

**`memberof`** DynamicHlsApiGetHlsVideoSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4281](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L4281)

___

### audioBitRate

• `Optional` `Readonly` **audioBitRate**: `number`

Optional. Specify an audio bitrate to encode to, e.g. 128000. If omitted this will be left to encoder defaults.

**`memberof`** DynamicHlsApiGetHlsVideoSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4316](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L4316)

___

### audioChannels

• `Optional` `Readonly` **audioChannels**: `number`

Optional. Specify a specific number of audio channels to encode to, e.g. 2.

**`memberof`** DynamicHlsApiGetHlsVideoSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4323](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L4323)

___

### audioCodec

• `Optional` `Readonly` **audioCodec**: `string`

Optional. Specify a audio codec to encode to, e.g. mp3. If omitted the server will auto-select using the url\&#39;s extension. Options: aac, mp3, vorbis, wma.

**`memberof`** DynamicHlsApiGetHlsVideoSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4267](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L4267)

___

### audioSampleRate

• `Optional` `Readonly` **audioSampleRate**: `number`

Optional. Specify a specific audio sample rate, e.g. 44100.

**`memberof`** DynamicHlsApiGetHlsVideoSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4302](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L4302)

___

### audioStreamIndex

• `Optional` `Readonly` **audioStreamIndex**: `number`

Optional. The index of the audio stream to use. If omitted the first audio stream will be used.

**`memberof`** DynamicHlsApiGetHlsVideoSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4512](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L4512)

___

### breakOnNonKeyFrames

• `Optional` `Readonly` **breakOnNonKeyFrames**: `boolean`

Optional. Whether to break on non key frames.

**`memberof`** DynamicHlsApiGetHlsVideoSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4295](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L4295)

___

### container

• `Readonly` **container**: `string`

The video container. Possible values are: ts, webm, asf, wmv, ogv, mp4, m4v, mkv, mpeg, mpg, avi, 3gp, wmv, wtv, m2ts, mov, iso, flv.

**`memberof`** DynamicHlsApiGetHlsVideoSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4176](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L4176)

___

### context

• `Optional` `Readonly` **context**: [`EncodingContext`](../enums/generated_client.EncodingContext.md)

Optional. The MediaBrowser.Model.Dlna.EncodingContext.

**`memberof`** DynamicHlsApiGetHlsVideoSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4526](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L4526)

___

### copyTimestamps

• `Optional` `Readonly` **copyTimestamps**: `boolean`

Whether or not to copy timestamps when transcoding with an offset. Defaults to false.

**`memberof`** DynamicHlsApiGetHlsVideoSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4365](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L4365)

___

### cpuCoreLimit

• `Optional` `Readonly` **cpuCoreLimit**: `number`

Optional. The limit of how many cpu cores to use.

**`memberof`** DynamicHlsApiGetHlsVideoSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4470](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L4470)

___

### deInterlace

• `Optional` `Readonly` **deInterlace**: `boolean`

Optional. Whether to deinterlace the video.

**`memberof`** DynamicHlsApiGetHlsVideoSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4449](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L4449)

___

### deviceId

• `Optional` `Readonly` **deviceId**: `string`

The device id of the client requesting. Used to stop encoding processes when needed.

**`memberof`** DynamicHlsApiGetHlsVideoSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4260](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L4260)

___

### deviceProfileId

• `Optional` `Readonly` **deviceProfileId**: `string`

Optional. The dlna device profile id to utilize.

**`memberof`** DynamicHlsApiGetHlsVideoSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4218](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L4218)

___

### enableAutoStreamCopy

• `Optional` `Readonly` **enableAutoStreamCopy**: `boolean`

Whether or not to allow automatic stream copy if requested values match the original source. Defaults to true.

**`memberof`** DynamicHlsApiGetHlsVideoSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4274](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L4274)

___

### enableMpegtsM2TsMode

• `Optional` `Readonly` **enableMpegtsM2TsMode**: `boolean`

Optional. Whether to enable the MpegtsM2Ts mode.

**`memberof`** DynamicHlsApiGetHlsVideoSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4484](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L4484)

___

### framerate

• `Optional` `Readonly` **framerate**: `number`

Optional. A specific video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements.

**`memberof`** DynamicHlsApiGetHlsVideoSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4351](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L4351)

___

### height

• `Optional` `Readonly` **height**: `number`

Optional. The fixed vertical resolution of the encoded video.

**`memberof`** DynamicHlsApiGetHlsVideoSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4386](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L4386)

___

### itemId

• `Readonly` **itemId**: `string`

The item id.

**`memberof`** DynamicHlsApiGetHlsVideoSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4155](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L4155)

___

### level

• `Optional` `Readonly` **level**: `string`

Optional. Specify a level for the encoder profile (varies by encoder), e.g. 3, 3.1.

**`memberof`** DynamicHlsApiGetHlsVideoSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4344](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L4344)

___

### liveStreamId

• `Optional` `Readonly` **liveStreamId**: `string`

The live stream id.

**`memberof`** DynamicHlsApiGetHlsVideoSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4477](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L4477)

___

### maxAudioBitDepth

• `Optional` `Readonly` **maxAudioBitDepth**: `number`

Optional. The maximum audio bit depth.

**`memberof`** DynamicHlsApiGetHlsVideoSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4309](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L4309)

___

### maxAudioChannels

• `Optional` `Readonly` **maxAudioChannels**: `number`

Optional. Specify a maximum number of audio channels to encode to, e.g. 2.

**`memberof`** DynamicHlsApiGetHlsVideoSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4330](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L4330)

___

### maxFramerate

• `Optional` `Readonly` **maxFramerate**: `number`

Optional. A specific maximum video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements.

**`memberof`** DynamicHlsApiGetHlsVideoSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4358](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L4358)

___

### maxHeight

• `Optional` `Readonly` **maxHeight**: `number`

Optional. The maximum vertical resolution of the encoded video.

**`memberof`** DynamicHlsApiGetHlsVideoSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4400](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L4400)

___

### maxRefFrames

• `Optional` `Readonly` **maxRefFrames**: `number`

Optional.

**`memberof`** DynamicHlsApiGetHlsVideoSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4428](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L4428)

___

### maxVideoBitDepth

• `Optional` `Readonly` **maxVideoBitDepth**: `number`

Optional. The maximum video bit depth.

**`memberof`** DynamicHlsApiGetHlsVideoSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4435](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L4435)

___

### maxWidth

• `Optional` `Readonly` **maxWidth**: `number`

Optional. The maximum horizontal resolution of the encoded video.

**`memberof`** DynamicHlsApiGetHlsVideoSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4393](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L4393)

___

### mediaSourceId

• `Optional` `Readonly` **mediaSourceId**: `string`

The media version id, if playing an alternate version.

**`memberof`** DynamicHlsApiGetHlsVideoSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4253](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L4253)

___

### minSegments

• `Optional` `Readonly` **minSegments**: `number`

The minimum number of segments.

**`memberof`** DynamicHlsApiGetHlsVideoSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4246](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L4246)

___

### params

• `Optional` `Readonly` **params**: `string`

The streaming parameters.

**`memberof`** DynamicHlsApiGetHlsVideoSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4204](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L4204)

___

### playSessionId

• `Optional` `Readonly` **playSessionId**: `string`

The play session id.

**`memberof`** DynamicHlsApiGetHlsVideoSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4225](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L4225)

___

### playlistId

• `Readonly` **playlistId**: `string`

The playlist id.

**`memberof`** DynamicHlsApiGetHlsVideoSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4162](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L4162)

___

### profile

• `Optional` `Readonly` **profile**: `string`

Optional. Specify a specific an encoder profile (varies by encoder), e.g. main, baseline, high.

**`memberof`** DynamicHlsApiGetHlsVideoSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4337](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L4337)

___

### requireAvc

• `Optional` `Readonly` **requireAvc**: `boolean`

Optional. Whether to require avc.

**`memberof`** DynamicHlsApiGetHlsVideoSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4442](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L4442)

___

### requireNonAnamorphic

• `Optional` `Readonly` **requireNonAnamorphic**: `boolean`

Optional. Whether to require a non anamorphic stream.

**`memberof`** DynamicHlsApiGetHlsVideoSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4456](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L4456)

___

### runtimeTicks

• `Readonly` **runtimeTicks**: `number`

The position of the requested segment in ticks.

**`memberof`** DynamicHlsApiGetHlsVideoSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4183](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L4183)

___

### segmentContainer

• `Optional` `Readonly` **segmentContainer**: `string`

The segment container.

**`memberof`** DynamicHlsApiGetHlsVideoSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4232](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L4232)

___

### segmentId

• `Readonly` **segmentId**: `number`

The segment id.

**`memberof`** DynamicHlsApiGetHlsVideoSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4169](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L4169)

___

### segmentLength

• `Optional` `Readonly` **segmentLength**: `number`

The desired segment length.

**`memberof`** DynamicHlsApiGetHlsVideoSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4239](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L4239)

___

### startTimeTicks

• `Optional` `Readonly` **startTimeTicks**: `number`

Optional. Specify a starting offset, in ticks. 1 tick &#x3D; 10000 ms.

**`memberof`** DynamicHlsApiGetHlsVideoSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4372](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L4372)

___

### streamOptions

• `Optional` `Readonly` **streamOptions**: `Object`

Optional. The streaming options.

**`memberof`** DynamicHlsApiGetHlsVideoSegment

#### Index signature

▪ [key: `string`]: `string`

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4533](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L4533)

___

### subtitleCodec

• `Optional` `Readonly` **subtitleCodec**: `string`

Optional. Specify a subtitle codec to encode to.

**`memberof`** DynamicHlsApiGetHlsVideoSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4498](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L4498)

___

### subtitleMethod

• `Optional` `Readonly` **subtitleMethod**: [`SubtitleDeliveryMethod`](../enums/generated_client.SubtitleDeliveryMethod.md)

Optional. Specify the subtitle delivery method.

**`memberof`** DynamicHlsApiGetHlsVideoSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4421](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L4421)

___

### subtitleStreamIndex

• `Optional` `Readonly` **subtitleStreamIndex**: `number`

Optional. The index of the subtitle stream to use. If omitted no subtitles will be used.

**`memberof`** DynamicHlsApiGetHlsVideoSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4414](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L4414)

___

### tag

• `Optional` `Readonly` **tag**: `string`

The tag.

**`memberof`** DynamicHlsApiGetHlsVideoSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4211](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L4211)

___

### transcodeReasons

• `Optional` `Readonly` **transcodeReasons**: `string`

Optional. The transcoding reason.

**`memberof`** DynamicHlsApiGetHlsVideoSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4505](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L4505)

___

### transcodingMaxAudioChannels

• `Optional` `Readonly` **transcodingMaxAudioChannels**: `number`

Optional. The maximum number of audio channels to transcode.

**`memberof`** DynamicHlsApiGetHlsVideoSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4463](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L4463)

___

### videoBitRate

• `Optional` `Readonly` **videoBitRate**: `number`

Optional. Specify a video bitrate to encode to, e.g. 500000. If omitted this will be left to encoder defaults.

**`memberof`** DynamicHlsApiGetHlsVideoSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4407](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L4407)

___

### videoCodec

• `Optional` `Readonly` **videoCodec**: `string`

Optional. Specify a video codec to encode to, e.g. h264. If omitted the server will auto-select using the url\&#39;s extension. Options: h265, h264, mpeg4, theora, vp8, vp9, vpx (deprecated), wmv.

**`memberof`** DynamicHlsApiGetHlsVideoSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4491](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L4491)

___

### videoStreamIndex

• `Optional` `Readonly` **videoStreamIndex**: `number`

Optional. The index of the video stream to use. If omitted the first video stream will be used.

**`memberof`** DynamicHlsApiGetHlsVideoSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4519](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L4519)

___

### width

• `Optional` `Readonly` **width**: `number`

Optional. The fixed horizontal resolution of the encoded video.

**`memberof`** DynamicHlsApiGetHlsVideoSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4379](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L4379)
