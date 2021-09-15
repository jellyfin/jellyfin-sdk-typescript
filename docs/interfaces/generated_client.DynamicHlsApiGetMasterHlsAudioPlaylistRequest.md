[jellyfin-sdk-typescript](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / DynamicHlsApiGetMasterHlsAudioPlaylistRequest

# Interface: DynamicHlsApiGetMasterHlsAudioPlaylistRequest

[generated-client](../modules/generated_client.md).DynamicHlsApiGetMasterHlsAudioPlaylistRequest

Request parameters for getMasterHlsAudioPlaylist operation in DynamicHlsApi.

**`export`**

**`interface`** DynamicHlsApiGetMasterHlsAudioPlaylistRequest

## Table of contents

### Properties

- [_static](generated_client.DynamicHlsApiGetMasterHlsAudioPlaylistRequest.md#_static)
- [allowAudioStreamCopy](generated_client.DynamicHlsApiGetMasterHlsAudioPlaylistRequest.md#allowaudiostreamcopy)
- [allowVideoStreamCopy](generated_client.DynamicHlsApiGetMasterHlsAudioPlaylistRequest.md#allowvideostreamcopy)
- [audioBitRate](generated_client.DynamicHlsApiGetMasterHlsAudioPlaylistRequest.md#audiobitrate)
- [audioChannels](generated_client.DynamicHlsApiGetMasterHlsAudioPlaylistRequest.md#audiochannels)
- [audioCodec](generated_client.DynamicHlsApiGetMasterHlsAudioPlaylistRequest.md#audiocodec)
- [audioSampleRate](generated_client.DynamicHlsApiGetMasterHlsAudioPlaylistRequest.md#audiosamplerate)
- [audioStreamIndex](generated_client.DynamicHlsApiGetMasterHlsAudioPlaylistRequest.md#audiostreamindex)
- [breakOnNonKeyFrames](generated_client.DynamicHlsApiGetMasterHlsAudioPlaylistRequest.md#breakonnonkeyframes)
- [context](generated_client.DynamicHlsApiGetMasterHlsAudioPlaylistRequest.md#context)
- [copyTimestamps](generated_client.DynamicHlsApiGetMasterHlsAudioPlaylistRequest.md#copytimestamps)
- [cpuCoreLimit](generated_client.DynamicHlsApiGetMasterHlsAudioPlaylistRequest.md#cpucorelimit)
- [deInterlace](generated_client.DynamicHlsApiGetMasterHlsAudioPlaylistRequest.md#deinterlace)
- [deviceId](generated_client.DynamicHlsApiGetMasterHlsAudioPlaylistRequest.md#deviceid)
- [deviceProfileId](generated_client.DynamicHlsApiGetMasterHlsAudioPlaylistRequest.md#deviceprofileid)
- [enableAdaptiveBitrateStreaming](generated_client.DynamicHlsApiGetMasterHlsAudioPlaylistRequest.md#enableadaptivebitratestreaming)
- [enableAutoStreamCopy](generated_client.DynamicHlsApiGetMasterHlsAudioPlaylistRequest.md#enableautostreamcopy)
- [enableMpegtsM2TsMode](generated_client.DynamicHlsApiGetMasterHlsAudioPlaylistRequest.md#enablempegtsm2tsmode)
- [framerate](generated_client.DynamicHlsApiGetMasterHlsAudioPlaylistRequest.md#framerate)
- [height](generated_client.DynamicHlsApiGetMasterHlsAudioPlaylistRequest.md#height)
- [itemId](generated_client.DynamicHlsApiGetMasterHlsAudioPlaylistRequest.md#itemid)
- [level](generated_client.DynamicHlsApiGetMasterHlsAudioPlaylistRequest.md#level)
- [liveStreamId](generated_client.DynamicHlsApiGetMasterHlsAudioPlaylistRequest.md#livestreamid)
- [maxAudioBitDepth](generated_client.DynamicHlsApiGetMasterHlsAudioPlaylistRequest.md#maxaudiobitdepth)
- [maxAudioChannels](generated_client.DynamicHlsApiGetMasterHlsAudioPlaylistRequest.md#maxaudiochannels)
- [maxFramerate](generated_client.DynamicHlsApiGetMasterHlsAudioPlaylistRequest.md#maxframerate)
- [maxRefFrames](generated_client.DynamicHlsApiGetMasterHlsAudioPlaylistRequest.md#maxrefframes)
- [maxStreamingBitrate](generated_client.DynamicHlsApiGetMasterHlsAudioPlaylistRequest.md#maxstreamingbitrate)
- [maxVideoBitDepth](generated_client.DynamicHlsApiGetMasterHlsAudioPlaylistRequest.md#maxvideobitdepth)
- [mediaSourceId](generated_client.DynamicHlsApiGetMasterHlsAudioPlaylistRequest.md#mediasourceid)
- [minSegments](generated_client.DynamicHlsApiGetMasterHlsAudioPlaylistRequest.md#minsegments)
- [params](generated_client.DynamicHlsApiGetMasterHlsAudioPlaylistRequest.md#params)
- [playSessionId](generated_client.DynamicHlsApiGetMasterHlsAudioPlaylistRequest.md#playsessionid)
- [profile](generated_client.DynamicHlsApiGetMasterHlsAudioPlaylistRequest.md#profile)
- [requireAvc](generated_client.DynamicHlsApiGetMasterHlsAudioPlaylistRequest.md#requireavc)
- [requireNonAnamorphic](generated_client.DynamicHlsApiGetMasterHlsAudioPlaylistRequest.md#requirenonanamorphic)
- [segmentContainer](generated_client.DynamicHlsApiGetMasterHlsAudioPlaylistRequest.md#segmentcontainer)
- [segmentLength](generated_client.DynamicHlsApiGetMasterHlsAudioPlaylistRequest.md#segmentlength)
- [startTimeTicks](generated_client.DynamicHlsApiGetMasterHlsAudioPlaylistRequest.md#starttimeticks)
- [streamOptions](generated_client.DynamicHlsApiGetMasterHlsAudioPlaylistRequest.md#streamoptions)
- [subtitleCodec](generated_client.DynamicHlsApiGetMasterHlsAudioPlaylistRequest.md#subtitlecodec)
- [subtitleMethod](generated_client.DynamicHlsApiGetMasterHlsAudioPlaylistRequest.md#subtitlemethod)
- [subtitleStreamIndex](generated_client.DynamicHlsApiGetMasterHlsAudioPlaylistRequest.md#subtitlestreamindex)
- [tag](generated_client.DynamicHlsApiGetMasterHlsAudioPlaylistRequest.md#tag)
- [transcodeReasons](generated_client.DynamicHlsApiGetMasterHlsAudioPlaylistRequest.md#transcodereasons)
- [transcodingMaxAudioChannels](generated_client.DynamicHlsApiGetMasterHlsAudioPlaylistRequest.md#transcodingmaxaudiochannels)
- [videoBitRate](generated_client.DynamicHlsApiGetMasterHlsAudioPlaylistRequest.md#videobitrate)
- [videoCodec](generated_client.DynamicHlsApiGetMasterHlsAudioPlaylistRequest.md#videocodec)
- [videoStreamIndex](generated_client.DynamicHlsApiGetMasterHlsAudioPlaylistRequest.md#videostreamindex)
- [width](generated_client.DynamicHlsApiGetMasterHlsAudioPlaylistRequest.md#width)

## Properties

### \_static

• `Optional` `Readonly` **\_static**: `boolean`

Optional. If true, the original file will be streamed statically without any encoding. Use either no url extension or the original file extension. true/false.

**`memberof`** DynamicHlsApiGetMasterHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4012](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/dynamic-hls-api.ts#L4012)

___

### allowAudioStreamCopy

• `Optional` `Readonly` **allowAudioStreamCopy**: `boolean`

Whether or not to allow copying of the audio stream url.

**`memberof`** DynamicHlsApiGetMasterHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4096](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/dynamic-hls-api.ts#L4096)

___

### allowVideoStreamCopy

• `Optional` `Readonly` **allowVideoStreamCopy**: `boolean`

Whether or not to allow copying of the video stream url.

**`memberof`** DynamicHlsApiGetMasterHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4089](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/dynamic-hls-api.ts#L4089)

___

### audioBitRate

• `Optional` `Readonly` **audioBitRate**: `number`

Optional. Specify an audio bitrate to encode to, e.g. 128000. If omitted this will be left to encoder defaults.

**`memberof`** DynamicHlsApiGetMasterHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4131](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/dynamic-hls-api.ts#L4131)

___

### audioChannels

• `Optional` `Readonly` **audioChannels**: `number`

Optional. Specify a specific number of audio channels to encode to, e.g. 2.

**`memberof`** DynamicHlsApiGetMasterHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4138](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/dynamic-hls-api.ts#L4138)

___

### audioCodec

• `Optional` `Readonly` **audioCodec**: `string`

Optional. Specify a audio codec to encode to, e.g. mp3. If omitted the server will auto-select using the url\&#39;s extension. Options: aac, mp3, vorbis, wma.

**`memberof`** DynamicHlsApiGetMasterHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4075](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/dynamic-hls-api.ts#L4075)

___

### audioSampleRate

• `Optional` `Readonly` **audioSampleRate**: `number`

Optional. Specify a specific audio sample rate, e.g. 44100.

**`memberof`** DynamicHlsApiGetMasterHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4110](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/dynamic-hls-api.ts#L4110)

___

### audioStreamIndex

• `Optional` `Readonly` **audioStreamIndex**: `number`

Optional. The index of the audio stream to use. If omitted the first audio stream will be used.

**`memberof`** DynamicHlsApiGetMasterHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4313](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/dynamic-hls-api.ts#L4313)

___

### breakOnNonKeyFrames

• `Optional` `Readonly` **breakOnNonKeyFrames**: `boolean`

Optional. Whether to break on non key frames.

**`memberof`** DynamicHlsApiGetMasterHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4103](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/dynamic-hls-api.ts#L4103)

___

### context

• `Optional` `Readonly` **context**: [`EncodingContext`](../enums/generated_client.EncodingContext.md)

Optional. The MediaBrowser.Model.Dlna.EncodingContext.

**`memberof`** DynamicHlsApiGetMasterHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4327](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/dynamic-hls-api.ts#L4327)

___

### copyTimestamps

• `Optional` `Readonly` **copyTimestamps**: `boolean`

Whether or not to copy timestamps when transcoding with an offset. Defaults to false.

**`memberof`** DynamicHlsApiGetMasterHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4180](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/dynamic-hls-api.ts#L4180)

___

### cpuCoreLimit

• `Optional` `Readonly` **cpuCoreLimit**: `number`

Optional. The limit of how many cpu cores to use.

**`memberof`** DynamicHlsApiGetMasterHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4271](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/dynamic-hls-api.ts#L4271)

___

### deInterlace

• `Optional` `Readonly` **deInterlace**: `boolean`

Optional. Whether to deinterlace the video.

**`memberof`** DynamicHlsApiGetMasterHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4250](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/dynamic-hls-api.ts#L4250)

___

### deviceId

• `Optional` `Readonly` **deviceId**: `string`

The device id of the client requesting. Used to stop encoding processes when needed.

**`memberof`** DynamicHlsApiGetMasterHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4068](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/dynamic-hls-api.ts#L4068)

___

### deviceProfileId

• `Optional` `Readonly` **deviceProfileId**: `string`

Optional. The dlna device profile id to utilize.

**`memberof`** DynamicHlsApiGetMasterHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4033](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/dynamic-hls-api.ts#L4033)

___

### enableAdaptiveBitrateStreaming

• `Optional` `Readonly` **enableAdaptiveBitrateStreaming**: `boolean`

Enable adaptive bitrate streaming.

**`memberof`** DynamicHlsApiGetMasterHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4341](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/dynamic-hls-api.ts#L4341)

___

### enableAutoStreamCopy

• `Optional` `Readonly` **enableAutoStreamCopy**: `boolean`

Whether or not to allow automatic stream copy if requested values match the original source. Defaults to true.

**`memberof`** DynamicHlsApiGetMasterHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4082](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/dynamic-hls-api.ts#L4082)

___

### enableMpegtsM2TsMode

• `Optional` `Readonly` **enableMpegtsM2TsMode**: `boolean`

Optional. Whether to enable the MpegtsM2Ts mode.

**`memberof`** DynamicHlsApiGetMasterHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4285](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/dynamic-hls-api.ts#L4285)

___

### framerate

• `Optional` `Readonly` **framerate**: `number`

Optional. A specific video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements.

**`memberof`** DynamicHlsApiGetMasterHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4166](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/dynamic-hls-api.ts#L4166)

___

### height

• `Optional` `Readonly` **height**: `number`

Optional. The fixed vertical resolution of the encoded video.

**`memberof`** DynamicHlsApiGetMasterHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4201](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/dynamic-hls-api.ts#L4201)

___

### itemId

• `Readonly` **itemId**: `string`

The item id.

**`memberof`** DynamicHlsApiGetMasterHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:3998](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/dynamic-hls-api.ts#L3998)

___

### level

• `Optional` `Readonly` **level**: `string`

Optional. Specify a level for the encoder profile (varies by encoder), e.g. 3, 3.1.

**`memberof`** DynamicHlsApiGetMasterHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4159](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/dynamic-hls-api.ts#L4159)

___

### liveStreamId

• `Optional` `Readonly` **liveStreamId**: `string`

The live stream id.

**`memberof`** DynamicHlsApiGetMasterHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4278](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/dynamic-hls-api.ts#L4278)

___

### maxAudioBitDepth

• `Optional` `Readonly` **maxAudioBitDepth**: `number`

Optional. The maximum audio bit depth.

**`memberof`** DynamicHlsApiGetMasterHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4117](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/dynamic-hls-api.ts#L4117)

___

### maxAudioChannels

• `Optional` `Readonly` **maxAudioChannels**: `number`

Optional. Specify a maximum number of audio channels to encode to, e.g. 2.

**`memberof`** DynamicHlsApiGetMasterHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4145](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/dynamic-hls-api.ts#L4145)

___

### maxFramerate

• `Optional` `Readonly` **maxFramerate**: `number`

Optional. A specific maximum video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements.

**`memberof`** DynamicHlsApiGetMasterHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4173](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/dynamic-hls-api.ts#L4173)

___

### maxRefFrames

• `Optional` `Readonly` **maxRefFrames**: `number`

Optional.

**`memberof`** DynamicHlsApiGetMasterHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4229](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/dynamic-hls-api.ts#L4229)

___

### maxStreamingBitrate

• `Optional` `Readonly` **maxStreamingBitrate**: `number`

Optional. The maximum streaming bitrate.

**`memberof`** DynamicHlsApiGetMasterHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4124](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/dynamic-hls-api.ts#L4124)

___

### maxVideoBitDepth

• `Optional` `Readonly` **maxVideoBitDepth**: `number`

Optional. The maximum video bit depth.

**`memberof`** DynamicHlsApiGetMasterHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4236](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/dynamic-hls-api.ts#L4236)

___

### mediaSourceId

• `Readonly` **mediaSourceId**: `string`

The media version id, if playing an alternate version.

**`memberof`** DynamicHlsApiGetMasterHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4005](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/dynamic-hls-api.ts#L4005)

___

### minSegments

• `Optional` `Readonly` **minSegments**: `number`

The minimum number of segments.

**`memberof`** DynamicHlsApiGetMasterHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4061](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/dynamic-hls-api.ts#L4061)

___

### params

• `Optional` `Readonly` **params**: `string`

The streaming parameters.

**`memberof`** DynamicHlsApiGetMasterHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4019](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/dynamic-hls-api.ts#L4019)

___

### playSessionId

• `Optional` `Readonly` **playSessionId**: `string`

The play session id.

**`memberof`** DynamicHlsApiGetMasterHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4040](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/dynamic-hls-api.ts#L4040)

___

### profile

• `Optional` `Readonly` **profile**: `string`

Optional. Specify a specific an encoder profile (varies by encoder), e.g. main, baseline, high.

**`memberof`** DynamicHlsApiGetMasterHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4152](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/dynamic-hls-api.ts#L4152)

___

### requireAvc

• `Optional` `Readonly` **requireAvc**: `boolean`

Optional. Whether to require avc.

**`memberof`** DynamicHlsApiGetMasterHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4243](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/dynamic-hls-api.ts#L4243)

___

### requireNonAnamorphic

• `Optional` `Readonly` **requireNonAnamorphic**: `boolean`

Optional. Whether to require a non anamorphic stream.

**`memberof`** DynamicHlsApiGetMasterHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4257](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/dynamic-hls-api.ts#L4257)

___

### segmentContainer

• `Optional` `Readonly` **segmentContainer**: `string`

The segment container.

**`memberof`** DynamicHlsApiGetMasterHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4047](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/dynamic-hls-api.ts#L4047)

___

### segmentLength

• `Optional` `Readonly` **segmentLength**: `number`

The segment length.

**`memberof`** DynamicHlsApiGetMasterHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4054](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/dynamic-hls-api.ts#L4054)

___

### startTimeTicks

• `Optional` `Readonly` **startTimeTicks**: `number`

Optional. Specify a starting offset, in ticks. 1 tick &#x3D; 10000 ms.

**`memberof`** DynamicHlsApiGetMasterHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4187](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/dynamic-hls-api.ts#L4187)

___

### streamOptions

• `Optional` `Readonly` **streamOptions**: `Object`

Optional. The streaming options.

**`memberof`** DynamicHlsApiGetMasterHlsAudioPlaylist

#### Index signature

▪ [key: `string`]: `string`

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4334](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/dynamic-hls-api.ts#L4334)

___

### subtitleCodec

• `Optional` `Readonly` **subtitleCodec**: `string`

Optional. Specify a subtitle codec to encode to.

**`memberof`** DynamicHlsApiGetMasterHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4299](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/dynamic-hls-api.ts#L4299)

___

### subtitleMethod

• `Optional` `Readonly` **subtitleMethod**: [`SubtitleDeliveryMethod`](../enums/generated_client.SubtitleDeliveryMethod.md)

Optional. Specify the subtitle delivery method.

**`memberof`** DynamicHlsApiGetMasterHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4222](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/dynamic-hls-api.ts#L4222)

___

### subtitleStreamIndex

• `Optional` `Readonly` **subtitleStreamIndex**: `number`

Optional. The index of the subtitle stream to use. If omitted no subtitles will be used.

**`memberof`** DynamicHlsApiGetMasterHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4215](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/dynamic-hls-api.ts#L4215)

___

### tag

• `Optional` `Readonly` **tag**: `string`

The tag.

**`memberof`** DynamicHlsApiGetMasterHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4026](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/dynamic-hls-api.ts#L4026)

___

### transcodeReasons

• `Optional` `Readonly` **transcodeReasons**: `string`

Optional. The transcoding reason.

**`memberof`** DynamicHlsApiGetMasterHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4306](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/dynamic-hls-api.ts#L4306)

___

### transcodingMaxAudioChannels

• `Optional` `Readonly` **transcodingMaxAudioChannels**: `number`

Optional. The maximum number of audio channels to transcode.

**`memberof`** DynamicHlsApiGetMasterHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4264](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/dynamic-hls-api.ts#L4264)

___

### videoBitRate

• `Optional` `Readonly` **videoBitRate**: `number`

Optional. Specify a video bitrate to encode to, e.g. 500000. If omitted this will be left to encoder defaults.

**`memberof`** DynamicHlsApiGetMasterHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4208](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/dynamic-hls-api.ts#L4208)

___

### videoCodec

• `Optional` `Readonly` **videoCodec**: `string`

Optional. Specify a video codec to encode to, e.g. h264. If omitted the server will auto-select using the url\&#39;s extension. Options: h265, h264, mpeg4, theora, vpx, wmv.

**`memberof`** DynamicHlsApiGetMasterHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4292](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/dynamic-hls-api.ts#L4292)

___

### videoStreamIndex

• `Optional` `Readonly` **videoStreamIndex**: `number`

Optional. The index of the video stream to use. If omitted the first video stream will be used.

**`memberof`** DynamicHlsApiGetMasterHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4320](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/dynamic-hls-api.ts#L4320)

___

### width

• `Optional` `Readonly` **width**: `number`

Optional. The fixed horizontal resolution of the encoded video.

**`memberof`** DynamicHlsApiGetMasterHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4194](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/dynamic-hls-api.ts#L4194)
