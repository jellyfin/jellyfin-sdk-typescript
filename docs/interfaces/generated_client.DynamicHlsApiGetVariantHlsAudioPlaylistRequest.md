[jellyfin-sdk-typescript](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / DynamicHlsApiGetVariantHlsAudioPlaylistRequest

# Interface: DynamicHlsApiGetVariantHlsAudioPlaylistRequest

[generated-client](../modules/generated_client.md).DynamicHlsApiGetVariantHlsAudioPlaylistRequest

Request parameters for getVariantHlsAudioPlaylist operation in DynamicHlsApi.

**`export`**

**`interface`** DynamicHlsApiGetVariantHlsAudioPlaylistRequest

## Table of contents

### Properties

- [_static](generated_client.DynamicHlsApiGetVariantHlsAudioPlaylistRequest.md#_static)
- [allowAudioStreamCopy](generated_client.DynamicHlsApiGetVariantHlsAudioPlaylistRequest.md#allowaudiostreamcopy)
- [allowVideoStreamCopy](generated_client.DynamicHlsApiGetVariantHlsAudioPlaylistRequest.md#allowvideostreamcopy)
- [audioBitRate](generated_client.DynamicHlsApiGetVariantHlsAudioPlaylistRequest.md#audiobitrate)
- [audioChannels](generated_client.DynamicHlsApiGetVariantHlsAudioPlaylistRequest.md#audiochannels)
- [audioCodec](generated_client.DynamicHlsApiGetVariantHlsAudioPlaylistRequest.md#audiocodec)
- [audioSampleRate](generated_client.DynamicHlsApiGetVariantHlsAudioPlaylistRequest.md#audiosamplerate)
- [audioStreamIndex](generated_client.DynamicHlsApiGetVariantHlsAudioPlaylistRequest.md#audiostreamindex)
- [breakOnNonKeyFrames](generated_client.DynamicHlsApiGetVariantHlsAudioPlaylistRequest.md#breakonnonkeyframes)
- [context](generated_client.DynamicHlsApiGetVariantHlsAudioPlaylistRequest.md#context)
- [copyTimestamps](generated_client.DynamicHlsApiGetVariantHlsAudioPlaylistRequest.md#copytimestamps)
- [cpuCoreLimit](generated_client.DynamicHlsApiGetVariantHlsAudioPlaylistRequest.md#cpucorelimit)
- [deInterlace](generated_client.DynamicHlsApiGetVariantHlsAudioPlaylistRequest.md#deinterlace)
- [deviceId](generated_client.DynamicHlsApiGetVariantHlsAudioPlaylistRequest.md#deviceid)
- [deviceProfileId](generated_client.DynamicHlsApiGetVariantHlsAudioPlaylistRequest.md#deviceprofileid)
- [enableAutoStreamCopy](generated_client.DynamicHlsApiGetVariantHlsAudioPlaylistRequest.md#enableautostreamcopy)
- [enableMpegtsM2TsMode](generated_client.DynamicHlsApiGetVariantHlsAudioPlaylistRequest.md#enablempegtsm2tsmode)
- [framerate](generated_client.DynamicHlsApiGetVariantHlsAudioPlaylistRequest.md#framerate)
- [height](generated_client.DynamicHlsApiGetVariantHlsAudioPlaylistRequest.md#height)
- [itemId](generated_client.DynamicHlsApiGetVariantHlsAudioPlaylistRequest.md#itemid)
- [level](generated_client.DynamicHlsApiGetVariantHlsAudioPlaylistRequest.md#level)
- [liveStreamId](generated_client.DynamicHlsApiGetVariantHlsAudioPlaylistRequest.md#livestreamid)
- [maxAudioBitDepth](generated_client.DynamicHlsApiGetVariantHlsAudioPlaylistRequest.md#maxaudiobitdepth)
- [maxAudioChannels](generated_client.DynamicHlsApiGetVariantHlsAudioPlaylistRequest.md#maxaudiochannels)
- [maxFramerate](generated_client.DynamicHlsApiGetVariantHlsAudioPlaylistRequest.md#maxframerate)
- [maxRefFrames](generated_client.DynamicHlsApiGetVariantHlsAudioPlaylistRequest.md#maxrefframes)
- [maxStreamingBitrate](generated_client.DynamicHlsApiGetVariantHlsAudioPlaylistRequest.md#maxstreamingbitrate)
- [maxVideoBitDepth](generated_client.DynamicHlsApiGetVariantHlsAudioPlaylistRequest.md#maxvideobitdepth)
- [mediaSourceId](generated_client.DynamicHlsApiGetVariantHlsAudioPlaylistRequest.md#mediasourceid)
- [minSegments](generated_client.DynamicHlsApiGetVariantHlsAudioPlaylistRequest.md#minsegments)
- [params](generated_client.DynamicHlsApiGetVariantHlsAudioPlaylistRequest.md#params)
- [playSessionId](generated_client.DynamicHlsApiGetVariantHlsAudioPlaylistRequest.md#playsessionid)
- [profile](generated_client.DynamicHlsApiGetVariantHlsAudioPlaylistRequest.md#profile)
- [requireAvc](generated_client.DynamicHlsApiGetVariantHlsAudioPlaylistRequest.md#requireavc)
- [requireNonAnamorphic](generated_client.DynamicHlsApiGetVariantHlsAudioPlaylistRequest.md#requirenonanamorphic)
- [segmentContainer](generated_client.DynamicHlsApiGetVariantHlsAudioPlaylistRequest.md#segmentcontainer)
- [segmentLength](generated_client.DynamicHlsApiGetVariantHlsAudioPlaylistRequest.md#segmentlength)
- [startTimeTicks](generated_client.DynamicHlsApiGetVariantHlsAudioPlaylistRequest.md#starttimeticks)
- [streamOptions](generated_client.DynamicHlsApiGetVariantHlsAudioPlaylistRequest.md#streamoptions)
- [subtitleCodec](generated_client.DynamicHlsApiGetVariantHlsAudioPlaylistRequest.md#subtitlecodec)
- [subtitleMethod](generated_client.DynamicHlsApiGetVariantHlsAudioPlaylistRequest.md#subtitlemethod)
- [subtitleStreamIndex](generated_client.DynamicHlsApiGetVariantHlsAudioPlaylistRequest.md#subtitlestreamindex)
- [tag](generated_client.DynamicHlsApiGetVariantHlsAudioPlaylistRequest.md#tag)
- [transcodeReasons](generated_client.DynamicHlsApiGetVariantHlsAudioPlaylistRequest.md#transcodereasons)
- [transcodingMaxAudioChannels](generated_client.DynamicHlsApiGetVariantHlsAudioPlaylistRequest.md#transcodingmaxaudiochannels)
- [videoBitRate](generated_client.DynamicHlsApiGetVariantHlsAudioPlaylistRequest.md#videobitrate)
- [videoCodec](generated_client.DynamicHlsApiGetVariantHlsAudioPlaylistRequest.md#videocodec)
- [videoStreamIndex](generated_client.DynamicHlsApiGetVariantHlsAudioPlaylistRequest.md#videostreamindex)
- [width](generated_client.DynamicHlsApiGetVariantHlsAudioPlaylistRequest.md#width)

## Properties

### \_static

• `Optional` `Readonly` **\_static**: `boolean`

Optional. If true, the original file will be streamed statically without any encoding. Use either no url extension or the original file extension. true/false.

**`memberof`** DynamicHlsApiGetVariantHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4712](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/dynamic-hls-api.ts#L4712)

___

### allowAudioStreamCopy

• `Optional` `Readonly` **allowAudioStreamCopy**: `boolean`

Whether or not to allow copying of the audio stream url.

**`memberof`** DynamicHlsApiGetVariantHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4803](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/dynamic-hls-api.ts#L4803)

___

### allowVideoStreamCopy

• `Optional` `Readonly` **allowVideoStreamCopy**: `boolean`

Whether or not to allow copying of the video stream url.

**`memberof`** DynamicHlsApiGetVariantHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4796](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/dynamic-hls-api.ts#L4796)

___

### audioBitRate

• `Optional` `Readonly` **audioBitRate**: `number`

Optional. Specify an audio bitrate to encode to, e.g. 128000. If omitted this will be left to encoder defaults.

**`memberof`** DynamicHlsApiGetVariantHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4838](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/dynamic-hls-api.ts#L4838)

___

### audioChannels

• `Optional` `Readonly` **audioChannels**: `number`

Optional. Specify a specific number of audio channels to encode to, e.g. 2.

**`memberof`** DynamicHlsApiGetVariantHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4845](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/dynamic-hls-api.ts#L4845)

___

### audioCodec

• `Optional` `Readonly` **audioCodec**: `string`

Optional. Specify a audio codec to encode to, e.g. mp3. If omitted the server will auto-select using the url\&#39;s extension. Options: aac, mp3, vorbis, wma.

**`memberof`** DynamicHlsApiGetVariantHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4782](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/dynamic-hls-api.ts#L4782)

___

### audioSampleRate

• `Optional` `Readonly` **audioSampleRate**: `number`

Optional. Specify a specific audio sample rate, e.g. 44100.

**`memberof`** DynamicHlsApiGetVariantHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4817](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/dynamic-hls-api.ts#L4817)

___

### audioStreamIndex

• `Optional` `Readonly` **audioStreamIndex**: `number`

Optional. The index of the audio stream to use. If omitted the first audio stream will be used.

**`memberof`** DynamicHlsApiGetVariantHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5020](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/dynamic-hls-api.ts#L5020)

___

### breakOnNonKeyFrames

• `Optional` `Readonly` **breakOnNonKeyFrames**: `boolean`

Optional. Whether to break on non key frames.

**`memberof`** DynamicHlsApiGetVariantHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4810](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/dynamic-hls-api.ts#L4810)

___

### context

• `Optional` `Readonly` **context**: [`EncodingContext`](../enums/generated_client.EncodingContext.md)

Optional. The MediaBrowser.Model.Dlna.EncodingContext.

**`memberof`** DynamicHlsApiGetVariantHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5034](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/dynamic-hls-api.ts#L5034)

___

### copyTimestamps

• `Optional` `Readonly` **copyTimestamps**: `boolean`

Whether or not to copy timestamps when transcoding with an offset. Defaults to false.

**`memberof`** DynamicHlsApiGetVariantHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4887](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/dynamic-hls-api.ts#L4887)

___

### cpuCoreLimit

• `Optional` `Readonly` **cpuCoreLimit**: `number`

Optional. The limit of how many cpu cores to use.

**`memberof`** DynamicHlsApiGetVariantHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4978](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/dynamic-hls-api.ts#L4978)

___

### deInterlace

• `Optional` `Readonly` **deInterlace**: `boolean`

Optional. Whether to deinterlace the video.

**`memberof`** DynamicHlsApiGetVariantHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4957](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/dynamic-hls-api.ts#L4957)

___

### deviceId

• `Optional` `Readonly` **deviceId**: `string`

The device id of the client requesting. Used to stop encoding processes when needed.

**`memberof`** DynamicHlsApiGetVariantHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4775](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/dynamic-hls-api.ts#L4775)

___

### deviceProfileId

• `Optional` `Readonly` **deviceProfileId**: `string`

Optional. The dlna device profile id to utilize.

**`memberof`** DynamicHlsApiGetVariantHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4733](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/dynamic-hls-api.ts#L4733)

___

### enableAutoStreamCopy

• `Optional` `Readonly` **enableAutoStreamCopy**: `boolean`

Whether or not to allow automatic stream copy if requested values match the original source. Defaults to true.

**`memberof`** DynamicHlsApiGetVariantHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4789](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/dynamic-hls-api.ts#L4789)

___

### enableMpegtsM2TsMode

• `Optional` `Readonly` **enableMpegtsM2TsMode**: `boolean`

Optional. Whether to enable the MpegtsM2Ts mode.

**`memberof`** DynamicHlsApiGetVariantHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4992](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/dynamic-hls-api.ts#L4992)

___

### framerate

• `Optional` `Readonly` **framerate**: `number`

Optional. A specific video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements.

**`memberof`** DynamicHlsApiGetVariantHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4873](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/dynamic-hls-api.ts#L4873)

___

### height

• `Optional` `Readonly` **height**: `number`

Optional. The fixed vertical resolution of the encoded video.

**`memberof`** DynamicHlsApiGetVariantHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4908](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/dynamic-hls-api.ts#L4908)

___

### itemId

• `Readonly` **itemId**: `string`

The item id.

**`memberof`** DynamicHlsApiGetVariantHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4705](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/dynamic-hls-api.ts#L4705)

___

### level

• `Optional` `Readonly` **level**: `string`

Optional. Specify a level for the encoder profile (varies by encoder), e.g. 3, 3.1.

**`memberof`** DynamicHlsApiGetVariantHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4866](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/dynamic-hls-api.ts#L4866)

___

### liveStreamId

• `Optional` `Readonly` **liveStreamId**: `string`

The live stream id.

**`memberof`** DynamicHlsApiGetVariantHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4985](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/dynamic-hls-api.ts#L4985)

___

### maxAudioBitDepth

• `Optional` `Readonly` **maxAudioBitDepth**: `number`

Optional. The maximum audio bit depth.

**`memberof`** DynamicHlsApiGetVariantHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4824](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/dynamic-hls-api.ts#L4824)

___

### maxAudioChannels

• `Optional` `Readonly` **maxAudioChannels**: `number`

Optional. Specify a maximum number of audio channels to encode to, e.g. 2.

**`memberof`** DynamicHlsApiGetVariantHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4852](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/dynamic-hls-api.ts#L4852)

___

### maxFramerate

• `Optional` `Readonly` **maxFramerate**: `number`

Optional. A specific maximum video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements.

**`memberof`** DynamicHlsApiGetVariantHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4880](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/dynamic-hls-api.ts#L4880)

___

### maxRefFrames

• `Optional` `Readonly` **maxRefFrames**: `number`

Optional.

**`memberof`** DynamicHlsApiGetVariantHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4936](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/dynamic-hls-api.ts#L4936)

___

### maxStreamingBitrate

• `Optional` `Readonly` **maxStreamingBitrate**: `number`

Optional. The maximum streaming bitrate.

**`memberof`** DynamicHlsApiGetVariantHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4831](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/dynamic-hls-api.ts#L4831)

___

### maxVideoBitDepth

• `Optional` `Readonly` **maxVideoBitDepth**: `number`

Optional. The maximum video bit depth.

**`memberof`** DynamicHlsApiGetVariantHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4943](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/dynamic-hls-api.ts#L4943)

___

### mediaSourceId

• `Optional` `Readonly` **mediaSourceId**: `string`

The media version id, if playing an alternate version.

**`memberof`** DynamicHlsApiGetVariantHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4768](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/dynamic-hls-api.ts#L4768)

___

### minSegments

• `Optional` `Readonly` **minSegments**: `number`

The minimum number of segments.

**`memberof`** DynamicHlsApiGetVariantHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4761](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/dynamic-hls-api.ts#L4761)

___

### params

• `Optional` `Readonly` **params**: `string`

The streaming parameters.

**`memberof`** DynamicHlsApiGetVariantHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4719](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/dynamic-hls-api.ts#L4719)

___

### playSessionId

• `Optional` `Readonly` **playSessionId**: `string`

The play session id.

**`memberof`** DynamicHlsApiGetVariantHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4740](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/dynamic-hls-api.ts#L4740)

___

### profile

• `Optional` `Readonly` **profile**: `string`

Optional. Specify a specific an encoder profile (varies by encoder), e.g. main, baseline, high.

**`memberof`** DynamicHlsApiGetVariantHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4859](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/dynamic-hls-api.ts#L4859)

___

### requireAvc

• `Optional` `Readonly` **requireAvc**: `boolean`

Optional. Whether to require avc.

**`memberof`** DynamicHlsApiGetVariantHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4950](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/dynamic-hls-api.ts#L4950)

___

### requireNonAnamorphic

• `Optional` `Readonly` **requireNonAnamorphic**: `boolean`

Optional. Whether to require a non anamorphic stream.

**`memberof`** DynamicHlsApiGetVariantHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4964](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/dynamic-hls-api.ts#L4964)

___

### segmentContainer

• `Optional` `Readonly` **segmentContainer**: `string`

The segment container.

**`memberof`** DynamicHlsApiGetVariantHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4747](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/dynamic-hls-api.ts#L4747)

___

### segmentLength

• `Optional` `Readonly` **segmentLength**: `number`

The segment length.

**`memberof`** DynamicHlsApiGetVariantHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4754](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/dynamic-hls-api.ts#L4754)

___

### startTimeTicks

• `Optional` `Readonly` **startTimeTicks**: `number`

Optional. Specify a starting offset, in ticks. 1 tick &#x3D; 10000 ms.

**`memberof`** DynamicHlsApiGetVariantHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4894](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/dynamic-hls-api.ts#L4894)

___

### streamOptions

• `Optional` `Readonly` **streamOptions**: `Object`

Optional. The streaming options.

**`memberof`** DynamicHlsApiGetVariantHlsAudioPlaylist

#### Index signature

▪ [key: `string`]: `string`

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5041](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/dynamic-hls-api.ts#L5041)

___

### subtitleCodec

• `Optional` `Readonly` **subtitleCodec**: `string`

Optional. Specify a subtitle codec to encode to.

**`memberof`** DynamicHlsApiGetVariantHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5006](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/dynamic-hls-api.ts#L5006)

___

### subtitleMethod

• `Optional` `Readonly` **subtitleMethod**: [`SubtitleDeliveryMethod`](../enums/generated_client.SubtitleDeliveryMethod.md)

Optional. Specify the subtitle delivery method.

**`memberof`** DynamicHlsApiGetVariantHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4929](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/dynamic-hls-api.ts#L4929)

___

### subtitleStreamIndex

• `Optional` `Readonly` **subtitleStreamIndex**: `number`

Optional. The index of the subtitle stream to use. If omitted no subtitles will be used.

**`memberof`** DynamicHlsApiGetVariantHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4922](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/dynamic-hls-api.ts#L4922)

___

### tag

• `Optional` `Readonly` **tag**: `string`

The tag.

**`memberof`** DynamicHlsApiGetVariantHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4726](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/dynamic-hls-api.ts#L4726)

___

### transcodeReasons

• `Optional` `Readonly` **transcodeReasons**: `string`

Optional. The transcoding reason.

**`memberof`** DynamicHlsApiGetVariantHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5013](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/dynamic-hls-api.ts#L5013)

___

### transcodingMaxAudioChannels

• `Optional` `Readonly` **transcodingMaxAudioChannels**: `number`

Optional. The maximum number of audio channels to transcode.

**`memberof`** DynamicHlsApiGetVariantHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4971](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/dynamic-hls-api.ts#L4971)

___

### videoBitRate

• `Optional` `Readonly` **videoBitRate**: `number`

Optional. Specify a video bitrate to encode to, e.g. 500000. If omitted this will be left to encoder defaults.

**`memberof`** DynamicHlsApiGetVariantHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4915](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/dynamic-hls-api.ts#L4915)

___

### videoCodec

• `Optional` `Readonly` **videoCodec**: `string`

Optional. Specify a video codec to encode to, e.g. h264. If omitted the server will auto-select using the url\&#39;s extension. Options: h265, h264, mpeg4, theora, vpx, wmv.

**`memberof`** DynamicHlsApiGetVariantHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4999](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/dynamic-hls-api.ts#L4999)

___

### videoStreamIndex

• `Optional` `Readonly` **videoStreamIndex**: `number`

Optional. The index of the video stream to use. If omitted the first video stream will be used.

**`memberof`** DynamicHlsApiGetVariantHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5027](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/dynamic-hls-api.ts#L5027)

___

### width

• `Optional` `Readonly` **width**: `number`

Optional. The fixed horizontal resolution of the encoded video.

**`memberof`** DynamicHlsApiGetVariantHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4901](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/dynamic-hls-api.ts#L4901)
