[jellyfin-sdk-typescript](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / DynamicHlsApiGetHlsAudioSegmentRequest

# Interface: DynamicHlsApiGetHlsAudioSegmentRequest

[generated-client](../modules/generated_client.md).DynamicHlsApiGetHlsAudioSegmentRequest

Request parameters for getHlsAudioSegment operation in DynamicHlsApi.

**`export`**

**`interface`** DynamicHlsApiGetHlsAudioSegmentRequest

## Table of contents

### Properties

- [_static](generated_client.DynamicHlsApiGetHlsAudioSegmentRequest.md#_static)
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

[generated-client/api/dynamic-hls-api.ts:3291](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/dynamic-hls-api.ts#L3291)

___

### allowAudioStreamCopy

• `Optional` `Readonly` **allowAudioStreamCopy**: `boolean`

Whether or not to allow copying of the audio stream url.

**`memberof`** DynamicHlsApiGetHlsAudioSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3382](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/dynamic-hls-api.ts#L3382)

___

### allowVideoStreamCopy

• `Optional` `Readonly` **allowVideoStreamCopy**: `boolean`

Whether or not to allow copying of the video stream url.

**`memberof`** DynamicHlsApiGetHlsAudioSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3375](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/dynamic-hls-api.ts#L3375)

___

### audioBitRate

• `Optional` `Readonly` **audioBitRate**: `number`

Optional. Specify an audio bitrate to encode to, e.g. 128000. If omitted this will be left to encoder defaults.

**`memberof`** DynamicHlsApiGetHlsAudioSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3417](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/dynamic-hls-api.ts#L3417)

___

### audioChannels

• `Optional` `Readonly` **audioChannels**: `number`

Optional. Specify a specific number of audio channels to encode to, e.g. 2.

**`memberof`** DynamicHlsApiGetHlsAudioSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3424](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/dynamic-hls-api.ts#L3424)

___

### audioCodec

• `Optional` `Readonly` **audioCodec**: `string`

Optional. Specify a audio codec to encode to, e.g. mp3. If omitted the server will auto-select using the url\&#39;s extension. Options: aac, mp3, vorbis, wma.

**`memberof`** DynamicHlsApiGetHlsAudioSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3361](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/dynamic-hls-api.ts#L3361)

___

### audioSampleRate

• `Optional` `Readonly` **audioSampleRate**: `number`

Optional. Specify a specific audio sample rate, e.g. 44100.

**`memberof`** DynamicHlsApiGetHlsAudioSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3396](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/dynamic-hls-api.ts#L3396)

___

### audioStreamIndex

• `Optional` `Readonly` **audioStreamIndex**: `number`

Optional. The index of the audio stream to use. If omitted the first audio stream will be used.

**`memberof`** DynamicHlsApiGetHlsAudioSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3599](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/dynamic-hls-api.ts#L3599)

___

### breakOnNonKeyFrames

• `Optional` `Readonly` **breakOnNonKeyFrames**: `boolean`

Optional. Whether to break on non key frames.

**`memberof`** DynamicHlsApiGetHlsAudioSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3389](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/dynamic-hls-api.ts#L3389)

___

### container

• `Readonly` **container**: `string`

The video container. Possible values are: ts, webm, asf, wmv, ogv, mp4, m4v, mkv, mpeg, mpg, avi, 3gp, wmv, wtv, m2ts, mov, iso, flv.

**`memberof`** DynamicHlsApiGetHlsAudioSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3284](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/dynamic-hls-api.ts#L3284)

___

### context

• `Optional` `Readonly` **context**: [`EncodingContext`](../enums/generated_client.EncodingContext.md)

Optional. The MediaBrowser.Model.Dlna.EncodingContext.

**`memberof`** DynamicHlsApiGetHlsAudioSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3613](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/dynamic-hls-api.ts#L3613)

___

### copyTimestamps

• `Optional` `Readonly` **copyTimestamps**: `boolean`

Whether or not to copy timestamps when transcoding with an offset. Defaults to false.

**`memberof`** DynamicHlsApiGetHlsAudioSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3466](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/dynamic-hls-api.ts#L3466)

___

### cpuCoreLimit

• `Optional` `Readonly` **cpuCoreLimit**: `number`

Optional. The limit of how many cpu cores to use.

**`memberof`** DynamicHlsApiGetHlsAudioSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3557](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/dynamic-hls-api.ts#L3557)

___

### deInterlace

• `Optional` `Readonly` **deInterlace**: `boolean`

Optional. Whether to deinterlace the video.

**`memberof`** DynamicHlsApiGetHlsAudioSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3536](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/dynamic-hls-api.ts#L3536)

___

### deviceId

• `Optional` `Readonly` **deviceId**: `string`

The device id of the client requesting. Used to stop encoding processes when needed.

**`memberof`** DynamicHlsApiGetHlsAudioSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3354](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/dynamic-hls-api.ts#L3354)

___

### deviceProfileId

• `Optional` `Readonly` **deviceProfileId**: `string`

Optional. The dlna device profile id to utilize.

**`memberof`** DynamicHlsApiGetHlsAudioSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3312](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/dynamic-hls-api.ts#L3312)

___

### enableAutoStreamCopy

• `Optional` `Readonly` **enableAutoStreamCopy**: `boolean`

Whether or not to allow automatic stream copy if requested values match the original source. Defaults to true.

**`memberof`** DynamicHlsApiGetHlsAudioSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3368](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/dynamic-hls-api.ts#L3368)

___

### enableMpegtsM2TsMode

• `Optional` `Readonly` **enableMpegtsM2TsMode**: `boolean`

Optional. Whether to enable the MpegtsM2Ts mode.

**`memberof`** DynamicHlsApiGetHlsAudioSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3571](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/dynamic-hls-api.ts#L3571)

___

### framerate

• `Optional` `Readonly` **framerate**: `number`

Optional. A specific video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements.

**`memberof`** DynamicHlsApiGetHlsAudioSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3452](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/dynamic-hls-api.ts#L3452)

___

### height

• `Optional` `Readonly` **height**: `number`

Optional. The fixed vertical resolution of the encoded video.

**`memberof`** DynamicHlsApiGetHlsAudioSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3487](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/dynamic-hls-api.ts#L3487)

___

### itemId

• `Readonly` **itemId**: `string`

The item id.

**`memberof`** DynamicHlsApiGetHlsAudioSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3263](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/dynamic-hls-api.ts#L3263)

___

### level

• `Optional` `Readonly` **level**: `string`

Optional. Specify a level for the encoder profile (varies by encoder), e.g. 3, 3.1.

**`memberof`** DynamicHlsApiGetHlsAudioSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3445](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/dynamic-hls-api.ts#L3445)

___

### liveStreamId

• `Optional` `Readonly` **liveStreamId**: `string`

The live stream id.

**`memberof`** DynamicHlsApiGetHlsAudioSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3564](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/dynamic-hls-api.ts#L3564)

___

### maxAudioBitDepth

• `Optional` `Readonly` **maxAudioBitDepth**: `number`

Optional. The maximum audio bit depth.

**`memberof`** DynamicHlsApiGetHlsAudioSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3403](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/dynamic-hls-api.ts#L3403)

___

### maxAudioChannels

• `Optional` `Readonly` **maxAudioChannels**: `number`

Optional. Specify a maximum number of audio channels to encode to, e.g. 2.

**`memberof`** DynamicHlsApiGetHlsAudioSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3431](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/dynamic-hls-api.ts#L3431)

___

### maxFramerate

• `Optional` `Readonly` **maxFramerate**: `number`

Optional. A specific maximum video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements.

**`memberof`** DynamicHlsApiGetHlsAudioSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3459](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/dynamic-hls-api.ts#L3459)

___

### maxRefFrames

• `Optional` `Readonly` **maxRefFrames**: `number`

Optional.

**`memberof`** DynamicHlsApiGetHlsAudioSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3515](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/dynamic-hls-api.ts#L3515)

___

### maxStreamingBitrate

• `Optional` `Readonly` **maxStreamingBitrate**: `number`

Optional. The maximum streaming bitrate.

**`memberof`** DynamicHlsApiGetHlsAudioSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3410](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/dynamic-hls-api.ts#L3410)

___

### maxVideoBitDepth

• `Optional` `Readonly` **maxVideoBitDepth**: `number`

Optional. The maximum video bit depth.

**`memberof`** DynamicHlsApiGetHlsAudioSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3522](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/dynamic-hls-api.ts#L3522)

___

### mediaSourceId

• `Optional` `Readonly` **mediaSourceId**: `string`

The media version id, if playing an alternate version.

**`memberof`** DynamicHlsApiGetHlsAudioSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3347](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/dynamic-hls-api.ts#L3347)

___

### minSegments

• `Optional` `Readonly` **minSegments**: `number`

The minimum number of segments.

**`memberof`** DynamicHlsApiGetHlsAudioSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3340](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/dynamic-hls-api.ts#L3340)

___

### params

• `Optional` `Readonly` **params**: `string`

The streaming parameters.

**`memberof`** DynamicHlsApiGetHlsAudioSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3298](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/dynamic-hls-api.ts#L3298)

___

### playSessionId

• `Optional` `Readonly` **playSessionId**: `string`

The play session id.

**`memberof`** DynamicHlsApiGetHlsAudioSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3319](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/dynamic-hls-api.ts#L3319)

___

### playlistId

• `Readonly` **playlistId**: `string`

The playlist id.

**`memberof`** DynamicHlsApiGetHlsAudioSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3270](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/dynamic-hls-api.ts#L3270)

___

### profile

• `Optional` `Readonly` **profile**: `string`

Optional. Specify a specific an encoder profile (varies by encoder), e.g. main, baseline, high.

**`memberof`** DynamicHlsApiGetHlsAudioSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3438](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/dynamic-hls-api.ts#L3438)

___

### requireAvc

• `Optional` `Readonly` **requireAvc**: `boolean`

Optional. Whether to require avc.

**`memberof`** DynamicHlsApiGetHlsAudioSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3529](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/dynamic-hls-api.ts#L3529)

___

### requireNonAnamorphic

• `Optional` `Readonly` **requireNonAnamorphic**: `boolean`

Optional. Whether to require a non anamorphic stream.

**`memberof`** DynamicHlsApiGetHlsAudioSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3543](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/dynamic-hls-api.ts#L3543)

___

### segmentContainer

• `Optional` `Readonly` **segmentContainer**: `string`

The segment container.

**`memberof`** DynamicHlsApiGetHlsAudioSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3326](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/dynamic-hls-api.ts#L3326)

___

### segmentId

• `Readonly` **segmentId**: `number`

The segment id.

**`memberof`** DynamicHlsApiGetHlsAudioSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3277](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/dynamic-hls-api.ts#L3277)

___

### segmentLength

• `Optional` `Readonly` **segmentLength**: `number`

The segment length.

**`memberof`** DynamicHlsApiGetHlsAudioSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3333](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/dynamic-hls-api.ts#L3333)

___

### startTimeTicks

• `Optional` `Readonly` **startTimeTicks**: `number`

Optional. Specify a starting offset, in ticks. 1 tick &#x3D; 10000 ms.

**`memberof`** DynamicHlsApiGetHlsAudioSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3473](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/dynamic-hls-api.ts#L3473)

___

### streamOptions

• `Optional` `Readonly` **streamOptions**: `Object`

Optional. The streaming options.

**`memberof`** DynamicHlsApiGetHlsAudioSegment

#### Index signature

▪ [key: `string`]: `string`

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3620](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/dynamic-hls-api.ts#L3620)

___

### subtitleCodec

• `Optional` `Readonly` **subtitleCodec**: `string`

Optional. Specify a subtitle codec to encode to.

**`memberof`** DynamicHlsApiGetHlsAudioSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3585](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/dynamic-hls-api.ts#L3585)

___

### subtitleMethod

• `Optional` `Readonly` **subtitleMethod**: [`SubtitleDeliveryMethod`](../enums/generated_client.SubtitleDeliveryMethod.md)

Optional. Specify the subtitle delivery method.

**`memberof`** DynamicHlsApiGetHlsAudioSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3508](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/dynamic-hls-api.ts#L3508)

___

### subtitleStreamIndex

• `Optional` `Readonly` **subtitleStreamIndex**: `number`

Optional. The index of the subtitle stream to use. If omitted no subtitles will be used.

**`memberof`** DynamicHlsApiGetHlsAudioSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3501](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/dynamic-hls-api.ts#L3501)

___

### tag

• `Optional` `Readonly` **tag**: `string`

The tag.

**`memberof`** DynamicHlsApiGetHlsAudioSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3305](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/dynamic-hls-api.ts#L3305)

___

### transcodeReasons

• `Optional` `Readonly` **transcodeReasons**: `string`

Optional. The transcoding reason.

**`memberof`** DynamicHlsApiGetHlsAudioSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3592](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/dynamic-hls-api.ts#L3592)

___

### transcodingMaxAudioChannels

• `Optional` `Readonly` **transcodingMaxAudioChannels**: `number`

Optional. The maximum number of audio channels to transcode.

**`memberof`** DynamicHlsApiGetHlsAudioSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3550](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/dynamic-hls-api.ts#L3550)

___

### videoBitRate

• `Optional` `Readonly` **videoBitRate**: `number`

Optional. Specify a video bitrate to encode to, e.g. 500000. If omitted this will be left to encoder defaults.

**`memberof`** DynamicHlsApiGetHlsAudioSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3494](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/dynamic-hls-api.ts#L3494)

___

### videoCodec

• `Optional` `Readonly` **videoCodec**: `string`

Optional. Specify a video codec to encode to, e.g. h264. If omitted the server will auto-select using the url\&#39;s extension. Options: h265, h264, mpeg4, theora, vpx, wmv.

**`memberof`** DynamicHlsApiGetHlsAudioSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3578](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/dynamic-hls-api.ts#L3578)

___

### videoStreamIndex

• `Optional` `Readonly` **videoStreamIndex**: `number`

Optional. The index of the video stream to use. If omitted the first video stream will be used.

**`memberof`** DynamicHlsApiGetHlsAudioSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3606](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/dynamic-hls-api.ts#L3606)

___

### width

• `Optional` `Readonly` **width**: `number`

Optional. The fixed horizontal resolution of the encoded video.

**`memberof`** DynamicHlsApiGetHlsAudioSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3480](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/dynamic-hls-api.ts#L3480)
