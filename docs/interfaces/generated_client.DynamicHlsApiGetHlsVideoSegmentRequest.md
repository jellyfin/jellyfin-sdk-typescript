[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / DynamicHlsApiGetHlsVideoSegmentRequest

# Interface: DynamicHlsApiGetHlsVideoSegmentRequest

[generated-client](../modules/generated_client.md).DynamicHlsApiGetHlsVideoSegmentRequest

Request parameters for getHlsVideoSegment operation in DynamicHlsApi.

**`export`**

**`interface`** DynamicHlsApiGetHlsVideoSegmentRequest

## Table of contents

### Properties

- [\_static](generated_client.DynamicHlsApiGetHlsVideoSegmentRequest.md#_static)
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
- [maxRefFrames](generated_client.DynamicHlsApiGetHlsVideoSegmentRequest.md#maxrefframes)
- [maxVideoBitDepth](generated_client.DynamicHlsApiGetHlsVideoSegmentRequest.md#maxvideobitdepth)
- [mediaSourceId](generated_client.DynamicHlsApiGetHlsVideoSegmentRequest.md#mediasourceid)
- [minSegments](generated_client.DynamicHlsApiGetHlsVideoSegmentRequest.md#minsegments)
- [params](generated_client.DynamicHlsApiGetHlsVideoSegmentRequest.md#params)
- [playSessionId](generated_client.DynamicHlsApiGetHlsVideoSegmentRequest.md#playsessionid)
- [playlistId](generated_client.DynamicHlsApiGetHlsVideoSegmentRequest.md#playlistid)
- [profile](generated_client.DynamicHlsApiGetHlsVideoSegmentRequest.md#profile)
- [requireAvc](generated_client.DynamicHlsApiGetHlsVideoSegmentRequest.md#requireavc)
- [requireNonAnamorphic](generated_client.DynamicHlsApiGetHlsVideoSegmentRequest.md#requirenonanamorphic)
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

[generated-client/api/dynamic-hls-api.ts:3662](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/dynamic-hls-api.ts#L3662)

___

### allowAudioStreamCopy

• `Optional` `Readonly` **allowAudioStreamCopy**: `boolean`

Whether or not to allow copying of the audio stream url.

**`memberof`** DynamicHlsApiGetHlsVideoSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3753](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/dynamic-hls-api.ts#L3753)

___

### allowVideoStreamCopy

• `Optional` `Readonly` **allowVideoStreamCopy**: `boolean`

Whether or not to allow copying of the video stream url.

**`memberof`** DynamicHlsApiGetHlsVideoSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3746](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/dynamic-hls-api.ts#L3746)

___

### audioBitRate

• `Optional` `Readonly` **audioBitRate**: `number`

Optional. Specify an audio bitrate to encode to, e.g. 128000. If omitted this will be left to encoder defaults.

**`memberof`** DynamicHlsApiGetHlsVideoSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3781](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/dynamic-hls-api.ts#L3781)

___

### audioChannels

• `Optional` `Readonly` **audioChannels**: `number`

Optional. Specify a specific number of audio channels to encode to, e.g. 2.

**`memberof`** DynamicHlsApiGetHlsVideoSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3788](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/dynamic-hls-api.ts#L3788)

___

### audioCodec

• `Optional` `Readonly` **audioCodec**: `string`

Optional. Specify a audio codec to encode to, e.g. mp3. If omitted the server will auto-select using the url\&#39;s extension. Options: aac, mp3, vorbis, wma.

**`memberof`** DynamicHlsApiGetHlsVideoSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3732](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/dynamic-hls-api.ts#L3732)

___

### audioSampleRate

• `Optional` `Readonly` **audioSampleRate**: `number`

Optional. Specify a specific audio sample rate, e.g. 44100.

**`memberof`** DynamicHlsApiGetHlsVideoSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3767](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/dynamic-hls-api.ts#L3767)

___

### audioStreamIndex

• `Optional` `Readonly` **audioStreamIndex**: `number`

Optional. The index of the audio stream to use. If omitted the first audio stream will be used.

**`memberof`** DynamicHlsApiGetHlsVideoSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3963](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/dynamic-hls-api.ts#L3963)

___

### breakOnNonKeyFrames

• `Optional` `Readonly` **breakOnNonKeyFrames**: `boolean`

Optional. Whether to break on non key frames.

**`memberof`** DynamicHlsApiGetHlsVideoSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3760](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/dynamic-hls-api.ts#L3760)

___

### container

• `Readonly` **container**: `string`

The video container. Possible values are: ts, webm, asf, wmv, ogv, mp4, m4v, mkv, mpeg, mpg, avi, 3gp, wmv, wtv, m2ts, mov, iso, flv.

**`memberof`** DynamicHlsApiGetHlsVideoSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3655](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/dynamic-hls-api.ts#L3655)

___

### context

• `Optional` `Readonly` **context**: [`EncodingContext`](../enums/generated_client.EncodingContext.md)

Optional. The MediaBrowser.Model.Dlna.EncodingContext.

**`memberof`** DynamicHlsApiGetHlsVideoSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3977](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/dynamic-hls-api.ts#L3977)

___

### copyTimestamps

• `Optional` `Readonly` **copyTimestamps**: `boolean`

Whether or not to copy timestamps when transcoding with an offset. Defaults to false.

**`memberof`** DynamicHlsApiGetHlsVideoSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3830](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/dynamic-hls-api.ts#L3830)

___

### cpuCoreLimit

• `Optional` `Readonly` **cpuCoreLimit**: `number`

Optional. The limit of how many cpu cores to use.

**`memberof`** DynamicHlsApiGetHlsVideoSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3921](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/dynamic-hls-api.ts#L3921)

___

### deInterlace

• `Optional` `Readonly` **deInterlace**: `boolean`

Optional. Whether to deinterlace the video.

**`memberof`** DynamicHlsApiGetHlsVideoSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3900](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/dynamic-hls-api.ts#L3900)

___

### deviceId

• `Optional` `Readonly` **deviceId**: `string`

The device id of the client requesting. Used to stop encoding processes when needed.

**`memberof`** DynamicHlsApiGetHlsVideoSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3725](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/dynamic-hls-api.ts#L3725)

___

### deviceProfileId

• `Optional` `Readonly` **deviceProfileId**: `string`

Optional. The dlna device profile id to utilize.

**`memberof`** DynamicHlsApiGetHlsVideoSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3683](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/dynamic-hls-api.ts#L3683)

___

### enableAutoStreamCopy

• `Optional` `Readonly` **enableAutoStreamCopy**: `boolean`

Whether or not to allow automatic stream copy if requested values match the original source. Defaults to true.

**`memberof`** DynamicHlsApiGetHlsVideoSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3739](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/dynamic-hls-api.ts#L3739)

___

### enableMpegtsM2TsMode

• `Optional` `Readonly` **enableMpegtsM2TsMode**: `boolean`

Optional. Whether to enable the MpegtsM2Ts mode.

**`memberof`** DynamicHlsApiGetHlsVideoSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3935](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/dynamic-hls-api.ts#L3935)

___

### framerate

• `Optional` `Readonly` **framerate**: `number`

Optional. A specific video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements.

**`memberof`** DynamicHlsApiGetHlsVideoSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3816](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/dynamic-hls-api.ts#L3816)

___

### height

• `Optional` `Readonly` **height**: `number`

Optional. The fixed vertical resolution of the encoded video.

**`memberof`** DynamicHlsApiGetHlsVideoSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3851](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/dynamic-hls-api.ts#L3851)

___

### itemId

• `Readonly` **itemId**: `string`

The item id.

**`memberof`** DynamicHlsApiGetHlsVideoSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3634](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/dynamic-hls-api.ts#L3634)

___

### level

• `Optional` `Readonly` **level**: `string`

Optional. Specify a level for the encoder profile (varies by encoder), e.g. 3, 3.1.

**`memberof`** DynamicHlsApiGetHlsVideoSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3809](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/dynamic-hls-api.ts#L3809)

___

### liveStreamId

• `Optional` `Readonly` **liveStreamId**: `string`

The live stream id.

**`memberof`** DynamicHlsApiGetHlsVideoSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3928](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/dynamic-hls-api.ts#L3928)

___

### maxAudioBitDepth

• `Optional` `Readonly` **maxAudioBitDepth**: `number`

Optional. The maximum audio bit depth.

**`memberof`** DynamicHlsApiGetHlsVideoSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3774](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/dynamic-hls-api.ts#L3774)

___

### maxAudioChannels

• `Optional` `Readonly` **maxAudioChannels**: `number`

Optional. Specify a maximum number of audio channels to encode to, e.g. 2.

**`memberof`** DynamicHlsApiGetHlsVideoSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3795](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/dynamic-hls-api.ts#L3795)

___

### maxFramerate

• `Optional` `Readonly` **maxFramerate**: `number`

Optional. A specific maximum video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements.

**`memberof`** DynamicHlsApiGetHlsVideoSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3823](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/dynamic-hls-api.ts#L3823)

___

### maxRefFrames

• `Optional` `Readonly` **maxRefFrames**: `number`

Optional.

**`memberof`** DynamicHlsApiGetHlsVideoSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3879](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/dynamic-hls-api.ts#L3879)

___

### maxVideoBitDepth

• `Optional` `Readonly` **maxVideoBitDepth**: `number`

Optional. The maximum video bit depth.

**`memberof`** DynamicHlsApiGetHlsVideoSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3886](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/dynamic-hls-api.ts#L3886)

___

### mediaSourceId

• `Optional` `Readonly` **mediaSourceId**: `string`

The media version id, if playing an alternate version.

**`memberof`** DynamicHlsApiGetHlsVideoSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3718](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/dynamic-hls-api.ts#L3718)

___

### minSegments

• `Optional` `Readonly` **minSegments**: `number`

The minimum number of segments.

**`memberof`** DynamicHlsApiGetHlsVideoSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3711](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/dynamic-hls-api.ts#L3711)

___

### params

• `Optional` `Readonly` **params**: `string`

The streaming parameters.

**`memberof`** DynamicHlsApiGetHlsVideoSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3669](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/dynamic-hls-api.ts#L3669)

___

### playSessionId

• `Optional` `Readonly` **playSessionId**: `string`

The play session id.

**`memberof`** DynamicHlsApiGetHlsVideoSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3690](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/dynamic-hls-api.ts#L3690)

___

### playlistId

• `Readonly` **playlistId**: `string`

The playlist id.

**`memberof`** DynamicHlsApiGetHlsVideoSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3641](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/dynamic-hls-api.ts#L3641)

___

### profile

• `Optional` `Readonly` **profile**: `string`

Optional. Specify a specific an encoder profile (varies by encoder), e.g. main, baseline, high.

**`memberof`** DynamicHlsApiGetHlsVideoSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3802](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/dynamic-hls-api.ts#L3802)

___

### requireAvc

• `Optional` `Readonly` **requireAvc**: `boolean`

Optional. Whether to require avc.

**`memberof`** DynamicHlsApiGetHlsVideoSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3893](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/dynamic-hls-api.ts#L3893)

___

### requireNonAnamorphic

• `Optional` `Readonly` **requireNonAnamorphic**: `boolean`

Optional. Whether to require a non anamorphic stream.

**`memberof`** DynamicHlsApiGetHlsVideoSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3907](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/dynamic-hls-api.ts#L3907)

___

### segmentContainer

• `Optional` `Readonly` **segmentContainer**: `string`

The segment container.

**`memberof`** DynamicHlsApiGetHlsVideoSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3697](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/dynamic-hls-api.ts#L3697)

___

### segmentId

• `Readonly` **segmentId**: `number`

The segment id.

**`memberof`** DynamicHlsApiGetHlsVideoSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3648](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/dynamic-hls-api.ts#L3648)

___

### segmentLength

• `Optional` `Readonly` **segmentLength**: `number`

The segment lenght.

**`memberof`** DynamicHlsApiGetHlsVideoSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3704](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/dynamic-hls-api.ts#L3704)

___

### startTimeTicks

• `Optional` `Readonly` **startTimeTicks**: `number`

Optional. Specify a starting offset, in ticks. 1 tick &#x3D; 10000 ms.

**`memberof`** DynamicHlsApiGetHlsVideoSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3837](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/dynamic-hls-api.ts#L3837)

___

### streamOptions

• `Optional` `Readonly` **streamOptions**: `Object`

Optional. The streaming options.

**`memberof`** DynamicHlsApiGetHlsVideoSegment

#### Index signature

▪ [key: `string`]: `string`

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3984](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/dynamic-hls-api.ts#L3984)

___

### subtitleCodec

• `Optional` `Readonly` **subtitleCodec**: `string`

Optional. Specify a subtitle codec to encode to.

**`memberof`** DynamicHlsApiGetHlsVideoSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3949](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/dynamic-hls-api.ts#L3949)

___

### subtitleMethod

• `Optional` `Readonly` **subtitleMethod**: [`SubtitleDeliveryMethod`](../enums/generated_client.SubtitleDeliveryMethod.md)

Optional. Specify the subtitle delivery method.

**`memberof`** DynamicHlsApiGetHlsVideoSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3872](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/dynamic-hls-api.ts#L3872)

___

### subtitleStreamIndex

• `Optional` `Readonly` **subtitleStreamIndex**: `number`

Optional. The index of the subtitle stream to use. If omitted no subtitles will be used.

**`memberof`** DynamicHlsApiGetHlsVideoSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3865](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/dynamic-hls-api.ts#L3865)

___

### tag

• `Optional` `Readonly` **tag**: `string`

The tag.

**`memberof`** DynamicHlsApiGetHlsVideoSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3676](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/dynamic-hls-api.ts#L3676)

___

### transcodeReasons

• `Optional` `Readonly` **transcodeReasons**: `string`

Optional. The transcoding reason.

**`memberof`** DynamicHlsApiGetHlsVideoSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3956](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/dynamic-hls-api.ts#L3956)

___

### transcodingMaxAudioChannels

• `Optional` `Readonly` **transcodingMaxAudioChannels**: `number`

Optional. The maximum number of audio channels to transcode.

**`memberof`** DynamicHlsApiGetHlsVideoSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3914](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/dynamic-hls-api.ts#L3914)

___

### videoBitRate

• `Optional` `Readonly` **videoBitRate**: `number`

Optional. Specify a video bitrate to encode to, e.g. 500000. If omitted this will be left to encoder defaults.

**`memberof`** DynamicHlsApiGetHlsVideoSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3858](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/dynamic-hls-api.ts#L3858)

___

### videoCodec

• `Optional` `Readonly` **videoCodec**: `string`

Optional. Specify a video codec to encode to, e.g. h264. If omitted the server will auto-select using the url\&#39;s extension. Options: h265, h264, mpeg4, theora, vpx, wmv.

**`memberof`** DynamicHlsApiGetHlsVideoSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3942](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/dynamic-hls-api.ts#L3942)

___

### videoStreamIndex

• `Optional` `Readonly` **videoStreamIndex**: `number`

Optional. The index of the video stream to use. If omitted the first video stream will be used.

**`memberof`** DynamicHlsApiGetHlsVideoSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3970](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/dynamic-hls-api.ts#L3970)

___

### width

• `Optional` `Readonly` **width**: `number`

Optional. The fixed horizontal resolution of the encoded video.

**`memberof`** DynamicHlsApiGetHlsVideoSegment

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3844](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/dynamic-hls-api.ts#L3844)
