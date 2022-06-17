[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / DynamicHlsApiGetVariantHlsVideoPlaylistRequest

# Interface: DynamicHlsApiGetVariantHlsVideoPlaylistRequest

[generated-client](../modules/generated_client.md).DynamicHlsApiGetVariantHlsVideoPlaylistRequest

Request parameters for getVariantHlsVideoPlaylist operation in DynamicHlsApi.

**`export`**

**`interface`** DynamicHlsApiGetVariantHlsVideoPlaylistRequest

## Table of contents

### Properties

- [\_static](generated_client.DynamicHlsApiGetVariantHlsVideoPlaylistRequest.md#_static)
- [allowAudioStreamCopy](generated_client.DynamicHlsApiGetVariantHlsVideoPlaylistRequest.md#allowaudiostreamcopy)
- [allowVideoStreamCopy](generated_client.DynamicHlsApiGetVariantHlsVideoPlaylistRequest.md#allowvideostreamcopy)
- [audioBitRate](generated_client.DynamicHlsApiGetVariantHlsVideoPlaylistRequest.md#audiobitrate)
- [audioChannels](generated_client.DynamicHlsApiGetVariantHlsVideoPlaylistRequest.md#audiochannels)
- [audioCodec](generated_client.DynamicHlsApiGetVariantHlsVideoPlaylistRequest.md#audiocodec)
- [audioSampleRate](generated_client.DynamicHlsApiGetVariantHlsVideoPlaylistRequest.md#audiosamplerate)
- [audioStreamIndex](generated_client.DynamicHlsApiGetVariantHlsVideoPlaylistRequest.md#audiostreamindex)
- [breakOnNonKeyFrames](generated_client.DynamicHlsApiGetVariantHlsVideoPlaylistRequest.md#breakonnonkeyframes)
- [context](generated_client.DynamicHlsApiGetVariantHlsVideoPlaylistRequest.md#context)
- [copyTimestamps](generated_client.DynamicHlsApiGetVariantHlsVideoPlaylistRequest.md#copytimestamps)
- [cpuCoreLimit](generated_client.DynamicHlsApiGetVariantHlsVideoPlaylistRequest.md#cpucorelimit)
- [deInterlace](generated_client.DynamicHlsApiGetVariantHlsVideoPlaylistRequest.md#deinterlace)
- [deviceId](generated_client.DynamicHlsApiGetVariantHlsVideoPlaylistRequest.md#deviceid)
- [deviceProfileId](generated_client.DynamicHlsApiGetVariantHlsVideoPlaylistRequest.md#deviceprofileid)
- [enableAutoStreamCopy](generated_client.DynamicHlsApiGetVariantHlsVideoPlaylistRequest.md#enableautostreamcopy)
- [enableMpegtsM2TsMode](generated_client.DynamicHlsApiGetVariantHlsVideoPlaylistRequest.md#enablempegtsm2tsmode)
- [framerate](generated_client.DynamicHlsApiGetVariantHlsVideoPlaylistRequest.md#framerate)
- [height](generated_client.DynamicHlsApiGetVariantHlsVideoPlaylistRequest.md#height)
- [itemId](generated_client.DynamicHlsApiGetVariantHlsVideoPlaylistRequest.md#itemid)
- [level](generated_client.DynamicHlsApiGetVariantHlsVideoPlaylistRequest.md#level)
- [liveStreamId](generated_client.DynamicHlsApiGetVariantHlsVideoPlaylistRequest.md#livestreamid)
- [maxAudioBitDepth](generated_client.DynamicHlsApiGetVariantHlsVideoPlaylistRequest.md#maxaudiobitdepth)
- [maxAudioChannels](generated_client.DynamicHlsApiGetVariantHlsVideoPlaylistRequest.md#maxaudiochannels)
- [maxFramerate](generated_client.DynamicHlsApiGetVariantHlsVideoPlaylistRequest.md#maxframerate)
- [maxHeight](generated_client.DynamicHlsApiGetVariantHlsVideoPlaylistRequest.md#maxheight)
- [maxRefFrames](generated_client.DynamicHlsApiGetVariantHlsVideoPlaylistRequest.md#maxrefframes)
- [maxVideoBitDepth](generated_client.DynamicHlsApiGetVariantHlsVideoPlaylistRequest.md#maxvideobitdepth)
- [maxWidth](generated_client.DynamicHlsApiGetVariantHlsVideoPlaylistRequest.md#maxwidth)
- [mediaSourceId](generated_client.DynamicHlsApiGetVariantHlsVideoPlaylistRequest.md#mediasourceid)
- [minSegments](generated_client.DynamicHlsApiGetVariantHlsVideoPlaylistRequest.md#minsegments)
- [params](generated_client.DynamicHlsApiGetVariantHlsVideoPlaylistRequest.md#params)
- [playSessionId](generated_client.DynamicHlsApiGetVariantHlsVideoPlaylistRequest.md#playsessionid)
- [profile](generated_client.DynamicHlsApiGetVariantHlsVideoPlaylistRequest.md#profile)
- [requireAvc](generated_client.DynamicHlsApiGetVariantHlsVideoPlaylistRequest.md#requireavc)
- [requireNonAnamorphic](generated_client.DynamicHlsApiGetVariantHlsVideoPlaylistRequest.md#requirenonanamorphic)
- [segmentContainer](generated_client.DynamicHlsApiGetVariantHlsVideoPlaylistRequest.md#segmentcontainer)
- [segmentLength](generated_client.DynamicHlsApiGetVariantHlsVideoPlaylistRequest.md#segmentlength)
- [startTimeTicks](generated_client.DynamicHlsApiGetVariantHlsVideoPlaylistRequest.md#starttimeticks)
- [streamOptions](generated_client.DynamicHlsApiGetVariantHlsVideoPlaylistRequest.md#streamoptions)
- [subtitleCodec](generated_client.DynamicHlsApiGetVariantHlsVideoPlaylistRequest.md#subtitlecodec)
- [subtitleMethod](generated_client.DynamicHlsApiGetVariantHlsVideoPlaylistRequest.md#subtitlemethod)
- [subtitleStreamIndex](generated_client.DynamicHlsApiGetVariantHlsVideoPlaylistRequest.md#subtitlestreamindex)
- [tag](generated_client.DynamicHlsApiGetVariantHlsVideoPlaylistRequest.md#tag)
- [transcodeReasons](generated_client.DynamicHlsApiGetVariantHlsVideoPlaylistRequest.md#transcodereasons)
- [transcodingMaxAudioChannels](generated_client.DynamicHlsApiGetVariantHlsVideoPlaylistRequest.md#transcodingmaxaudiochannels)
- [videoBitRate](generated_client.DynamicHlsApiGetVariantHlsVideoPlaylistRequest.md#videobitrate)
- [videoCodec](generated_client.DynamicHlsApiGetVariantHlsVideoPlaylistRequest.md#videocodec)
- [videoStreamIndex](generated_client.DynamicHlsApiGetVariantHlsVideoPlaylistRequest.md#videostreamindex)
- [width](generated_client.DynamicHlsApiGetVariantHlsVideoPlaylistRequest.md#width)

## Properties

### \_static

• `Optional` `Readonly` **\_static**: `boolean`

Optional. If true, the original file will be streamed statically without any encoding. Use either no url extension or the original file extension. true/false.

**`memberof`** DynamicHlsApiGetVariantHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5996](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/dynamic-hls-api.ts#L5996)

___

### allowAudioStreamCopy

• `Optional` `Readonly` **allowAudioStreamCopy**: `boolean`

Whether or not to allow copying of the audio stream url.

**`memberof`** DynamicHlsApiGetVariantHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:6087](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/dynamic-hls-api.ts#L6087)

___

### allowVideoStreamCopy

• `Optional` `Readonly` **allowVideoStreamCopy**: `boolean`

Whether or not to allow copying of the video stream url.

**`memberof`** DynamicHlsApiGetVariantHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:6080](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/dynamic-hls-api.ts#L6080)

___

### audioBitRate

• `Optional` `Readonly` **audioBitRate**: `number`

Optional. Specify an audio bitrate to encode to, e.g. 128000. If omitted this will be left to encoder defaults.

**`memberof`** DynamicHlsApiGetVariantHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:6115](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/dynamic-hls-api.ts#L6115)

___

### audioChannels

• `Optional` `Readonly` **audioChannels**: `number`

Optional. Specify a specific number of audio channels to encode to, e.g. 2.

**`memberof`** DynamicHlsApiGetVariantHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:6122](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/dynamic-hls-api.ts#L6122)

___

### audioCodec

• `Optional` `Readonly` **audioCodec**: `string`

Optional. Specify a audio codec to encode to, e.g. mp3. If omitted the server will auto-select using the url\&#39;s extension. Options: aac, mp3, vorbis, wma.

**`memberof`** DynamicHlsApiGetVariantHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:6066](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/dynamic-hls-api.ts#L6066)

___

### audioSampleRate

• `Optional` `Readonly` **audioSampleRate**: `number`

Optional. Specify a specific audio sample rate, e.g. 44100.

**`memberof`** DynamicHlsApiGetVariantHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:6101](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/dynamic-hls-api.ts#L6101)

___

### audioStreamIndex

• `Optional` `Readonly` **audioStreamIndex**: `number`

Optional. The index of the audio stream to use. If omitted the first audio stream will be used.

**`memberof`** DynamicHlsApiGetVariantHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:6311](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/dynamic-hls-api.ts#L6311)

___

### breakOnNonKeyFrames

• `Optional` `Readonly` **breakOnNonKeyFrames**: `boolean`

Optional. Whether to break on non key frames.

**`memberof`** DynamicHlsApiGetVariantHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:6094](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/dynamic-hls-api.ts#L6094)

___

### context

• `Optional` `Readonly` **context**: [`EncodingContext`](../enums/generated_client.EncodingContext.md)

Optional. The MediaBrowser.Model.Dlna.EncodingContext.

**`memberof`** DynamicHlsApiGetVariantHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:6325](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/dynamic-hls-api.ts#L6325)

___

### copyTimestamps

• `Optional` `Readonly` **copyTimestamps**: `boolean`

Whether or not to copy timestamps when transcoding with an offset. Defaults to false.

**`memberof`** DynamicHlsApiGetVariantHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:6164](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/dynamic-hls-api.ts#L6164)

___

### cpuCoreLimit

• `Optional` `Readonly` **cpuCoreLimit**: `number`

Optional. The limit of how many cpu cores to use.

**`memberof`** DynamicHlsApiGetVariantHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:6269](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/dynamic-hls-api.ts#L6269)

___

### deInterlace

• `Optional` `Readonly` **deInterlace**: `boolean`

Optional. Whether to deinterlace the video.

**`memberof`** DynamicHlsApiGetVariantHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:6248](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/dynamic-hls-api.ts#L6248)

___

### deviceId

• `Optional` `Readonly` **deviceId**: `string`

The device id of the client requesting. Used to stop encoding processes when needed.

**`memberof`** DynamicHlsApiGetVariantHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:6059](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/dynamic-hls-api.ts#L6059)

___

### deviceProfileId

• `Optional` `Readonly` **deviceProfileId**: `string`

Optional. The dlna device profile id to utilize.

**`memberof`** DynamicHlsApiGetVariantHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:6017](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/dynamic-hls-api.ts#L6017)

___

### enableAutoStreamCopy

• `Optional` `Readonly` **enableAutoStreamCopy**: `boolean`

Whether or not to allow automatic stream copy if requested values match the original source. Defaults to true.

**`memberof`** DynamicHlsApiGetVariantHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:6073](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/dynamic-hls-api.ts#L6073)

___

### enableMpegtsM2TsMode

• `Optional` `Readonly` **enableMpegtsM2TsMode**: `boolean`

Optional. Whether to enable the MpegtsM2Ts mode.

**`memberof`** DynamicHlsApiGetVariantHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:6283](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/dynamic-hls-api.ts#L6283)

___

### framerate

• `Optional` `Readonly` **framerate**: `number`

Optional. A specific video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements.

**`memberof`** DynamicHlsApiGetVariantHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:6150](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/dynamic-hls-api.ts#L6150)

___

### height

• `Optional` `Readonly` **height**: `number`

Optional. The fixed vertical resolution of the encoded video.

**`memberof`** DynamicHlsApiGetVariantHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:6185](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/dynamic-hls-api.ts#L6185)

___

### itemId

• `Readonly` **itemId**: `string`

The item id.

**`memberof`** DynamicHlsApiGetVariantHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5989](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/dynamic-hls-api.ts#L5989)

___

### level

• `Optional` `Readonly` **level**: `string`

Optional. Specify a level for the encoder profile (varies by encoder), e.g. 3, 3.1.

**`memberof`** DynamicHlsApiGetVariantHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:6143](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/dynamic-hls-api.ts#L6143)

___

### liveStreamId

• `Optional` `Readonly` **liveStreamId**: `string`

The live stream id.

**`memberof`** DynamicHlsApiGetVariantHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:6276](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/dynamic-hls-api.ts#L6276)

___

### maxAudioBitDepth

• `Optional` `Readonly` **maxAudioBitDepth**: `number`

Optional. The maximum audio bit depth.

**`memberof`** DynamicHlsApiGetVariantHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:6108](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/dynamic-hls-api.ts#L6108)

___

### maxAudioChannels

• `Optional` `Readonly` **maxAudioChannels**: `number`

Optional. Specify a maximum number of audio channels to encode to, e.g. 2.

**`memberof`** DynamicHlsApiGetVariantHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:6129](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/dynamic-hls-api.ts#L6129)

___

### maxFramerate

• `Optional` `Readonly` **maxFramerate**: `number`

Optional. A specific maximum video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements.

**`memberof`** DynamicHlsApiGetVariantHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:6157](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/dynamic-hls-api.ts#L6157)

___

### maxHeight

• `Optional` `Readonly` **maxHeight**: `number`

Optional. The maximum vertical resolution of the encoded video.

**`memberof`** DynamicHlsApiGetVariantHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:6199](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/dynamic-hls-api.ts#L6199)

___

### maxRefFrames

• `Optional` `Readonly` **maxRefFrames**: `number`

Optional.

**`memberof`** DynamicHlsApiGetVariantHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:6227](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/dynamic-hls-api.ts#L6227)

___

### maxVideoBitDepth

• `Optional` `Readonly` **maxVideoBitDepth**: `number`

Optional. The maximum video bit depth.

**`memberof`** DynamicHlsApiGetVariantHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:6234](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/dynamic-hls-api.ts#L6234)

___

### maxWidth

• `Optional` `Readonly` **maxWidth**: `number`

Optional. The maximum horizontal resolution of the encoded video.

**`memberof`** DynamicHlsApiGetVariantHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:6192](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/dynamic-hls-api.ts#L6192)

___

### mediaSourceId

• `Optional` `Readonly` **mediaSourceId**: `string`

The media version id, if playing an alternate version.

**`memberof`** DynamicHlsApiGetVariantHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:6052](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/dynamic-hls-api.ts#L6052)

___

### minSegments

• `Optional` `Readonly` **minSegments**: `number`

The minimum number of segments.

**`memberof`** DynamicHlsApiGetVariantHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:6045](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/dynamic-hls-api.ts#L6045)

___

### params

• `Optional` `Readonly` **params**: `string`

The streaming parameters.

**`memberof`** DynamicHlsApiGetVariantHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:6003](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/dynamic-hls-api.ts#L6003)

___

### playSessionId

• `Optional` `Readonly` **playSessionId**: `string`

The play session id.

**`memberof`** DynamicHlsApiGetVariantHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:6024](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/dynamic-hls-api.ts#L6024)

___

### profile

• `Optional` `Readonly` **profile**: `string`

Optional. Specify a specific an encoder profile (varies by encoder), e.g. main, baseline, high.

**`memberof`** DynamicHlsApiGetVariantHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:6136](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/dynamic-hls-api.ts#L6136)

___

### requireAvc

• `Optional` `Readonly` **requireAvc**: `boolean`

Optional. Whether to require avc.

**`memberof`** DynamicHlsApiGetVariantHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:6241](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/dynamic-hls-api.ts#L6241)

___

### requireNonAnamorphic

• `Optional` `Readonly` **requireNonAnamorphic**: `boolean`

Optional. Whether to require a non anamorphic stream.

**`memberof`** DynamicHlsApiGetVariantHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:6255](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/dynamic-hls-api.ts#L6255)

___

### segmentContainer

• `Optional` `Readonly` **segmentContainer**: `string`

The segment container.

**`memberof`** DynamicHlsApiGetVariantHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:6031](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/dynamic-hls-api.ts#L6031)

___

### segmentLength

• `Optional` `Readonly` **segmentLength**: `number`

The segment length.

**`memberof`** DynamicHlsApiGetVariantHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:6038](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/dynamic-hls-api.ts#L6038)

___

### startTimeTicks

• `Optional` `Readonly` **startTimeTicks**: `number`

Optional. Specify a starting offset, in ticks. 1 tick &#x3D; 10000 ms.

**`memberof`** DynamicHlsApiGetVariantHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:6171](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/dynamic-hls-api.ts#L6171)

___

### streamOptions

• `Optional` `Readonly` **streamOptions**: `Object`

Optional. The streaming options.

**`memberof`** DynamicHlsApiGetVariantHlsVideoPlaylist

#### Index signature

▪ [key: `string`]: `string`

#### Defined in

[generated-client/api/dynamic-hls-api.ts:6332](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/dynamic-hls-api.ts#L6332)

___

### subtitleCodec

• `Optional` `Readonly` **subtitleCodec**: `string`

Optional. Specify a subtitle codec to encode to.

**`memberof`** DynamicHlsApiGetVariantHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:6297](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/dynamic-hls-api.ts#L6297)

___

### subtitleMethod

• `Optional` `Readonly` **subtitleMethod**: [`SubtitleDeliveryMethod`](../enums/generated_client.SubtitleDeliveryMethod.md)

Optional. Specify the subtitle delivery method.

**`memberof`** DynamicHlsApiGetVariantHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:6220](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/dynamic-hls-api.ts#L6220)

___

### subtitleStreamIndex

• `Optional` `Readonly` **subtitleStreamIndex**: `number`

Optional. The index of the subtitle stream to use. If omitted no subtitles will be used.

**`memberof`** DynamicHlsApiGetVariantHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:6213](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/dynamic-hls-api.ts#L6213)

___

### tag

• `Optional` `Readonly` **tag**: `string`

The tag.

**`memberof`** DynamicHlsApiGetVariantHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:6010](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/dynamic-hls-api.ts#L6010)

___

### transcodeReasons

• `Optional` `Readonly` **transcodeReasons**: `string`

Optional. The transcoding reason.

**`memberof`** DynamicHlsApiGetVariantHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:6304](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/dynamic-hls-api.ts#L6304)

___

### transcodingMaxAudioChannels

• `Optional` `Readonly` **transcodingMaxAudioChannels**: `number`

Optional. The maximum number of audio channels to transcode.

**`memberof`** DynamicHlsApiGetVariantHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:6262](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/dynamic-hls-api.ts#L6262)

___

### videoBitRate

• `Optional` `Readonly` **videoBitRate**: `number`

Optional. Specify a video bitrate to encode to, e.g. 500000. If omitted this will be left to encoder defaults.

**`memberof`** DynamicHlsApiGetVariantHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:6206](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/dynamic-hls-api.ts#L6206)

___

### videoCodec

• `Optional` `Readonly` **videoCodec**: `string`

Optional. Specify a video codec to encode to, e.g. h264. If omitted the server will auto-select using the url\&#39;s extension. Options: h265, h264, mpeg4, theora, vp8, vp9, vpx (deprecated), wmv.

**`memberof`** DynamicHlsApiGetVariantHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:6290](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/dynamic-hls-api.ts#L6290)

___

### videoStreamIndex

• `Optional` `Readonly` **videoStreamIndex**: `number`

Optional. The index of the video stream to use. If omitted the first video stream will be used.

**`memberof`** DynamicHlsApiGetVariantHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:6318](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/dynamic-hls-api.ts#L6318)

___

### width

• `Optional` `Readonly` **width**: `number`

Optional. The fixed horizontal resolution of the encoded video.

**`memberof`** DynamicHlsApiGetVariantHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:6178](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/dynamic-hls-api.ts#L6178)
