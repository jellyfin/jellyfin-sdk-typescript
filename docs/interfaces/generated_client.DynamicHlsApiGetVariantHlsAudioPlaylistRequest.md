[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / DynamicHlsApiGetVariantHlsAudioPlaylistRequest

# Interface: DynamicHlsApiGetVariantHlsAudioPlaylistRequest

[generated-client](../modules/generated_client.md).DynamicHlsApiGetVariantHlsAudioPlaylistRequest

Request parameters for getVariantHlsAudioPlaylist operation in DynamicHlsApi.

**`export`**

**`interface`** DynamicHlsApiGetVariantHlsAudioPlaylistRequest

## Table of contents

### Properties

- [\_static](generated_client.DynamicHlsApiGetVariantHlsAudioPlaylistRequest.md#_static)
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

[generated-client/api/dynamic-hls-api.ts:5646](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L5646)

___

### allowAudioStreamCopy

• `Optional` `Readonly` **allowAudioStreamCopy**: `boolean`

Whether or not to allow copying of the audio stream url.

**`memberof`** DynamicHlsApiGetVariantHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5737](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L5737)

___

### allowVideoStreamCopy

• `Optional` `Readonly` **allowVideoStreamCopy**: `boolean`

Whether or not to allow copying of the video stream url.

**`memberof`** DynamicHlsApiGetVariantHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5730](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L5730)

___

### audioBitRate

• `Optional` `Readonly` **audioBitRate**: `number`

Optional. Specify an audio bitrate to encode to, e.g. 128000. If omitted this will be left to encoder defaults.

**`memberof`** DynamicHlsApiGetVariantHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5772](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L5772)

___

### audioChannels

• `Optional` `Readonly` **audioChannels**: `number`

Optional. Specify a specific number of audio channels to encode to, e.g. 2.

**`memberof`** DynamicHlsApiGetVariantHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5779](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L5779)

___

### audioCodec

• `Optional` `Readonly` **audioCodec**: `string`

Optional. Specify a audio codec to encode to, e.g. mp3. If omitted the server will auto-select using the url\&#39;s extension. Options: aac, mp3, vorbis, wma.

**`memberof`** DynamicHlsApiGetVariantHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5716](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L5716)

___

### audioSampleRate

• `Optional` `Readonly` **audioSampleRate**: `number`

Optional. Specify a specific audio sample rate, e.g. 44100.

**`memberof`** DynamicHlsApiGetVariantHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5751](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L5751)

___

### audioStreamIndex

• `Optional` `Readonly` **audioStreamIndex**: `number`

Optional. The index of the audio stream to use. If omitted the first audio stream will be used.

**`memberof`** DynamicHlsApiGetVariantHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5954](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L5954)

___

### breakOnNonKeyFrames

• `Optional` `Readonly` **breakOnNonKeyFrames**: `boolean`

Optional. Whether to break on non key frames.

**`memberof`** DynamicHlsApiGetVariantHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5744](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L5744)

___

### context

• `Optional` `Readonly` **context**: [`EncodingContext`](../enums/generated_client.EncodingContext.md)

Optional. The MediaBrowser.Model.Dlna.EncodingContext.

**`memberof`** DynamicHlsApiGetVariantHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5968](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L5968)

___

### copyTimestamps

• `Optional` `Readonly` **copyTimestamps**: `boolean`

Whether or not to copy timestamps when transcoding with an offset. Defaults to false.

**`memberof`** DynamicHlsApiGetVariantHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5821](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L5821)

___

### cpuCoreLimit

• `Optional` `Readonly` **cpuCoreLimit**: `number`

Optional. The limit of how many cpu cores to use.

**`memberof`** DynamicHlsApiGetVariantHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5912](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L5912)

___

### deInterlace

• `Optional` `Readonly` **deInterlace**: `boolean`

Optional. Whether to deinterlace the video.

**`memberof`** DynamicHlsApiGetVariantHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5891](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L5891)

___

### deviceId

• `Optional` `Readonly` **deviceId**: `string`

The device id of the client requesting. Used to stop encoding processes when needed.

**`memberof`** DynamicHlsApiGetVariantHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5709](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L5709)

___

### deviceProfileId

• `Optional` `Readonly` **deviceProfileId**: `string`

Optional. The dlna device profile id to utilize.

**`memberof`** DynamicHlsApiGetVariantHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5667](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L5667)

___

### enableAutoStreamCopy

• `Optional` `Readonly` **enableAutoStreamCopy**: `boolean`

Whether or not to allow automatic stream copy if requested values match the original source. Defaults to true.

**`memberof`** DynamicHlsApiGetVariantHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5723](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L5723)

___

### enableMpegtsM2TsMode

• `Optional` `Readonly` **enableMpegtsM2TsMode**: `boolean`

Optional. Whether to enable the MpegtsM2Ts mode.

**`memberof`** DynamicHlsApiGetVariantHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5926](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L5926)

___

### framerate

• `Optional` `Readonly` **framerate**: `number`

Optional. A specific video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements.

**`memberof`** DynamicHlsApiGetVariantHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5807](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L5807)

___

### height

• `Optional` `Readonly` **height**: `number`

Optional. The fixed vertical resolution of the encoded video.

**`memberof`** DynamicHlsApiGetVariantHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5842](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L5842)

___

### itemId

• `Readonly` **itemId**: `string`

The item id.

**`memberof`** DynamicHlsApiGetVariantHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5639](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L5639)

___

### level

• `Optional` `Readonly` **level**: `string`

Optional. Specify a level for the encoder profile (varies by encoder), e.g. 3, 3.1.

**`memberof`** DynamicHlsApiGetVariantHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5800](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L5800)

___

### liveStreamId

• `Optional` `Readonly` **liveStreamId**: `string`

The live stream id.

**`memberof`** DynamicHlsApiGetVariantHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5919](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L5919)

___

### maxAudioBitDepth

• `Optional` `Readonly` **maxAudioBitDepth**: `number`

Optional. The maximum audio bit depth.

**`memberof`** DynamicHlsApiGetVariantHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5758](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L5758)

___

### maxAudioChannels

• `Optional` `Readonly` **maxAudioChannels**: `number`

Optional. Specify a maximum number of audio channels to encode to, e.g. 2.

**`memberof`** DynamicHlsApiGetVariantHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5786](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L5786)

___

### maxFramerate

• `Optional` `Readonly` **maxFramerate**: `number`

Optional. A specific maximum video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements.

**`memberof`** DynamicHlsApiGetVariantHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5814](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L5814)

___

### maxRefFrames

• `Optional` `Readonly` **maxRefFrames**: `number`

Optional.

**`memberof`** DynamicHlsApiGetVariantHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5870](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L5870)

___

### maxStreamingBitrate

• `Optional` `Readonly` **maxStreamingBitrate**: `number`

Optional. The maximum streaming bitrate.

**`memberof`** DynamicHlsApiGetVariantHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5765](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L5765)

___

### maxVideoBitDepth

• `Optional` `Readonly` **maxVideoBitDepth**: `number`

Optional. The maximum video bit depth.

**`memberof`** DynamicHlsApiGetVariantHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5877](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L5877)

___

### mediaSourceId

• `Optional` `Readonly` **mediaSourceId**: `string`

The media version id, if playing an alternate version.

**`memberof`** DynamicHlsApiGetVariantHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5702](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L5702)

___

### minSegments

• `Optional` `Readonly` **minSegments**: `number`

The minimum number of segments.

**`memberof`** DynamicHlsApiGetVariantHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5695](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L5695)

___

### params

• `Optional` `Readonly` **params**: `string`

The streaming parameters.

**`memberof`** DynamicHlsApiGetVariantHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5653](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L5653)

___

### playSessionId

• `Optional` `Readonly` **playSessionId**: `string`

The play session id.

**`memberof`** DynamicHlsApiGetVariantHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5674](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L5674)

___

### profile

• `Optional` `Readonly` **profile**: `string`

Optional. Specify a specific an encoder profile (varies by encoder), e.g. main, baseline, high.

**`memberof`** DynamicHlsApiGetVariantHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5793](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L5793)

___

### requireAvc

• `Optional` `Readonly` **requireAvc**: `boolean`

Optional. Whether to require avc.

**`memberof`** DynamicHlsApiGetVariantHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5884](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L5884)

___

### requireNonAnamorphic

• `Optional` `Readonly` **requireNonAnamorphic**: `boolean`

Optional. Whether to require a non anamorphic stream.

**`memberof`** DynamicHlsApiGetVariantHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5898](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L5898)

___

### segmentContainer

• `Optional` `Readonly` **segmentContainer**: `string`

The segment container.

**`memberof`** DynamicHlsApiGetVariantHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5681](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L5681)

___

### segmentLength

• `Optional` `Readonly` **segmentLength**: `number`

The segment length.

**`memberof`** DynamicHlsApiGetVariantHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5688](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L5688)

___

### startTimeTicks

• `Optional` `Readonly` **startTimeTicks**: `number`

Optional. Specify a starting offset, in ticks. 1 tick &#x3D; 10000 ms.

**`memberof`** DynamicHlsApiGetVariantHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5828](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L5828)

___

### streamOptions

• `Optional` `Readonly` **streamOptions**: `Object`

Optional. The streaming options.

**`memberof`** DynamicHlsApiGetVariantHlsAudioPlaylist

#### Index signature

▪ [key: `string`]: `string`

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5975](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L5975)

___

### subtitleCodec

• `Optional` `Readonly` **subtitleCodec**: `string`

Optional. Specify a subtitle codec to encode to.

**`memberof`** DynamicHlsApiGetVariantHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5940](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L5940)

___

### subtitleMethod

• `Optional` `Readonly` **subtitleMethod**: [`SubtitleDeliveryMethod`](../enums/generated_client.SubtitleDeliveryMethod.md)

Optional. Specify the subtitle delivery method.

**`memberof`** DynamicHlsApiGetVariantHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5863](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L5863)

___

### subtitleStreamIndex

• `Optional` `Readonly` **subtitleStreamIndex**: `number`

Optional. The index of the subtitle stream to use. If omitted no subtitles will be used.

**`memberof`** DynamicHlsApiGetVariantHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5856](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L5856)

___

### tag

• `Optional` `Readonly` **tag**: `string`

The tag.

**`memberof`** DynamicHlsApiGetVariantHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5660](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L5660)

___

### transcodeReasons

• `Optional` `Readonly` **transcodeReasons**: `string`

Optional. The transcoding reason.

**`memberof`** DynamicHlsApiGetVariantHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5947](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L5947)

___

### transcodingMaxAudioChannels

• `Optional` `Readonly` **transcodingMaxAudioChannels**: `number`

Optional. The maximum number of audio channels to transcode.

**`memberof`** DynamicHlsApiGetVariantHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5905](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L5905)

___

### videoBitRate

• `Optional` `Readonly` **videoBitRate**: `number`

Optional. Specify a video bitrate to encode to, e.g. 500000. If omitted this will be left to encoder defaults.

**`memberof`** DynamicHlsApiGetVariantHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5849](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L5849)

___

### videoCodec

• `Optional` `Readonly` **videoCodec**: `string`

Optional. Specify a video codec to encode to, e.g. h264. If omitted the server will auto-select using the url\&#39;s extension. Options: h265, h264, mpeg4, theora, vpx, wmv.

**`memberof`** DynamicHlsApiGetVariantHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5933](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L5933)

___

### videoStreamIndex

• `Optional` `Readonly` **videoStreamIndex**: `number`

Optional. The index of the video stream to use. If omitted the first video stream will be used.

**`memberof`** DynamicHlsApiGetVariantHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5961](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L5961)

___

### width

• `Optional` `Readonly` **width**: `number`

Optional. The fixed horizontal resolution of the encoded video.

**`memberof`** DynamicHlsApiGetVariantHlsAudioPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5835](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L5835)
