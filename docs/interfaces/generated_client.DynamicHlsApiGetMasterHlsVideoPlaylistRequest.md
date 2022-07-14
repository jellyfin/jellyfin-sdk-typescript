[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / DynamicHlsApiGetMasterHlsVideoPlaylistRequest

# Interface: DynamicHlsApiGetMasterHlsVideoPlaylistRequest

[generated-client](../modules/generated_client.md).DynamicHlsApiGetMasterHlsVideoPlaylistRequest

Request parameters for getMasterHlsVideoPlaylist operation in DynamicHlsApi.

**`export`**

**`interface`** DynamicHlsApiGetMasterHlsVideoPlaylistRequest

## Table of contents

### Properties

- [\_static](generated_client.DynamicHlsApiGetMasterHlsVideoPlaylistRequest.md#_static)
- [allowAudioStreamCopy](generated_client.DynamicHlsApiGetMasterHlsVideoPlaylistRequest.md#allowaudiostreamcopy)
- [allowVideoStreamCopy](generated_client.DynamicHlsApiGetMasterHlsVideoPlaylistRequest.md#allowvideostreamcopy)
- [audioBitRate](generated_client.DynamicHlsApiGetMasterHlsVideoPlaylistRequest.md#audiobitrate)
- [audioChannels](generated_client.DynamicHlsApiGetMasterHlsVideoPlaylistRequest.md#audiochannels)
- [audioCodec](generated_client.DynamicHlsApiGetMasterHlsVideoPlaylistRequest.md#audiocodec)
- [audioSampleRate](generated_client.DynamicHlsApiGetMasterHlsVideoPlaylistRequest.md#audiosamplerate)
- [audioStreamIndex](generated_client.DynamicHlsApiGetMasterHlsVideoPlaylistRequest.md#audiostreamindex)
- [breakOnNonKeyFrames](generated_client.DynamicHlsApiGetMasterHlsVideoPlaylistRequest.md#breakonnonkeyframes)
- [context](generated_client.DynamicHlsApiGetMasterHlsVideoPlaylistRequest.md#context)
- [copyTimestamps](generated_client.DynamicHlsApiGetMasterHlsVideoPlaylistRequest.md#copytimestamps)
- [cpuCoreLimit](generated_client.DynamicHlsApiGetMasterHlsVideoPlaylistRequest.md#cpucorelimit)
- [deInterlace](generated_client.DynamicHlsApiGetMasterHlsVideoPlaylistRequest.md#deinterlace)
- [deviceId](generated_client.DynamicHlsApiGetMasterHlsVideoPlaylistRequest.md#deviceid)
- [deviceProfileId](generated_client.DynamicHlsApiGetMasterHlsVideoPlaylistRequest.md#deviceprofileid)
- [enableAdaptiveBitrateStreaming](generated_client.DynamicHlsApiGetMasterHlsVideoPlaylistRequest.md#enableadaptivebitratestreaming)
- [enableAutoStreamCopy](generated_client.DynamicHlsApiGetMasterHlsVideoPlaylistRequest.md#enableautostreamcopy)
- [enableMpegtsM2TsMode](generated_client.DynamicHlsApiGetMasterHlsVideoPlaylistRequest.md#enablempegtsm2tsmode)
- [framerate](generated_client.DynamicHlsApiGetMasterHlsVideoPlaylistRequest.md#framerate)
- [height](generated_client.DynamicHlsApiGetMasterHlsVideoPlaylistRequest.md#height)
- [itemId](generated_client.DynamicHlsApiGetMasterHlsVideoPlaylistRequest.md#itemid)
- [level](generated_client.DynamicHlsApiGetMasterHlsVideoPlaylistRequest.md#level)
- [liveStreamId](generated_client.DynamicHlsApiGetMasterHlsVideoPlaylistRequest.md#livestreamid)
- [maxAudioBitDepth](generated_client.DynamicHlsApiGetMasterHlsVideoPlaylistRequest.md#maxaudiobitdepth)
- [maxAudioChannels](generated_client.DynamicHlsApiGetMasterHlsVideoPlaylistRequest.md#maxaudiochannels)
- [maxFramerate](generated_client.DynamicHlsApiGetMasterHlsVideoPlaylistRequest.md#maxframerate)
- [maxHeight](generated_client.DynamicHlsApiGetMasterHlsVideoPlaylistRequest.md#maxheight)
- [maxRefFrames](generated_client.DynamicHlsApiGetMasterHlsVideoPlaylistRequest.md#maxrefframes)
- [maxVideoBitDepth](generated_client.DynamicHlsApiGetMasterHlsVideoPlaylistRequest.md#maxvideobitdepth)
- [maxWidth](generated_client.DynamicHlsApiGetMasterHlsVideoPlaylistRequest.md#maxwidth)
- [mediaSourceId](generated_client.DynamicHlsApiGetMasterHlsVideoPlaylistRequest.md#mediasourceid)
- [minSegments](generated_client.DynamicHlsApiGetMasterHlsVideoPlaylistRequest.md#minsegments)
- [params](generated_client.DynamicHlsApiGetMasterHlsVideoPlaylistRequest.md#params)
- [playSessionId](generated_client.DynamicHlsApiGetMasterHlsVideoPlaylistRequest.md#playsessionid)
- [profile](generated_client.DynamicHlsApiGetMasterHlsVideoPlaylistRequest.md#profile)
- [requireAvc](generated_client.DynamicHlsApiGetMasterHlsVideoPlaylistRequest.md#requireavc)
- [requireNonAnamorphic](generated_client.DynamicHlsApiGetMasterHlsVideoPlaylistRequest.md#requirenonanamorphic)
- [segmentContainer](generated_client.DynamicHlsApiGetMasterHlsVideoPlaylistRequest.md#segmentcontainer)
- [segmentLength](generated_client.DynamicHlsApiGetMasterHlsVideoPlaylistRequest.md#segmentlength)
- [startTimeTicks](generated_client.DynamicHlsApiGetMasterHlsVideoPlaylistRequest.md#starttimeticks)
- [streamOptions](generated_client.DynamicHlsApiGetMasterHlsVideoPlaylistRequest.md#streamoptions)
- [subtitleCodec](generated_client.DynamicHlsApiGetMasterHlsVideoPlaylistRequest.md#subtitlecodec)
- [subtitleMethod](generated_client.DynamicHlsApiGetMasterHlsVideoPlaylistRequest.md#subtitlemethod)
- [subtitleStreamIndex](generated_client.DynamicHlsApiGetMasterHlsVideoPlaylistRequest.md#subtitlestreamindex)
- [tag](generated_client.DynamicHlsApiGetMasterHlsVideoPlaylistRequest.md#tag)
- [transcodeReasons](generated_client.DynamicHlsApiGetMasterHlsVideoPlaylistRequest.md#transcodereasons)
- [transcodingMaxAudioChannels](generated_client.DynamicHlsApiGetMasterHlsVideoPlaylistRequest.md#transcodingmaxaudiochannels)
- [videoBitRate](generated_client.DynamicHlsApiGetMasterHlsVideoPlaylistRequest.md#videobitrate)
- [videoCodec](generated_client.DynamicHlsApiGetMasterHlsVideoPlaylistRequest.md#videocodec)
- [videoStreamIndex](generated_client.DynamicHlsApiGetMasterHlsVideoPlaylistRequest.md#videostreamindex)
- [width](generated_client.DynamicHlsApiGetMasterHlsVideoPlaylistRequest.md#width)

## Properties

### \_static

• `Optional` `Readonly` **\_static**: `boolean`

Optional. If true, the original file will be streamed statically without any encoding. Use either no url extension or the original file extension. true/false.

**`memberof`** DynamicHlsApiGetMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5289](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/dynamic-hls-api.ts#L5289)

___

### allowAudioStreamCopy

• `Optional` `Readonly` **allowAudioStreamCopy**: `boolean`

Whether or not to allow copying of the audio stream url.

**`memberof`** DynamicHlsApiGetMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5373](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/dynamic-hls-api.ts#L5373)

___

### allowVideoStreamCopy

• `Optional` `Readonly` **allowVideoStreamCopy**: `boolean`

Whether or not to allow copying of the video stream url.

**`memberof`** DynamicHlsApiGetMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5366](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/dynamic-hls-api.ts#L5366)

___

### audioBitRate

• `Optional` `Readonly` **audioBitRate**: `number`

Optional. Specify an audio bitrate to encode to, e.g. 128000. If omitted this will be left to encoder defaults.

**`memberof`** DynamicHlsApiGetMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5401](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/dynamic-hls-api.ts#L5401)

___

### audioChannels

• `Optional` `Readonly` **audioChannels**: `number`

Optional. Specify a specific number of audio channels to encode to, e.g. 2.

**`memberof`** DynamicHlsApiGetMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5408](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/dynamic-hls-api.ts#L5408)

___

### audioCodec

• `Optional` `Readonly` **audioCodec**: `string`

Optional. Specify a audio codec to encode to, e.g. mp3. If omitted the server will auto-select using the url\&#39;s extension. Options: aac, mp3, vorbis, wma.

**`memberof`** DynamicHlsApiGetMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5352](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/dynamic-hls-api.ts#L5352)

___

### audioSampleRate

• `Optional` `Readonly` **audioSampleRate**: `number`

Optional. Specify a specific audio sample rate, e.g. 44100.

**`memberof`** DynamicHlsApiGetMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5387](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/dynamic-hls-api.ts#L5387)

___

### audioStreamIndex

• `Optional` `Readonly` **audioStreamIndex**: `number`

Optional. The index of the audio stream to use. If omitted the first audio stream will be used.

**`memberof`** DynamicHlsApiGetMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5597](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/dynamic-hls-api.ts#L5597)

___

### breakOnNonKeyFrames

• `Optional` `Readonly` **breakOnNonKeyFrames**: `boolean`

Optional. Whether to break on non key frames.

**`memberof`** DynamicHlsApiGetMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5380](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/dynamic-hls-api.ts#L5380)

___

### context

• `Optional` `Readonly` **context**: [`EncodingContext`](../enums/generated_client.EncodingContext.md)

Optional. The MediaBrowser.Model.Dlna.EncodingContext.

**`memberof`** DynamicHlsApiGetMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5611](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/dynamic-hls-api.ts#L5611)

___

### copyTimestamps

• `Optional` `Readonly` **copyTimestamps**: `boolean`

Whether or not to copy timestamps when transcoding with an offset. Defaults to false.

**`memberof`** DynamicHlsApiGetMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5450](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/dynamic-hls-api.ts#L5450)

___

### cpuCoreLimit

• `Optional` `Readonly` **cpuCoreLimit**: `number`

Optional. The limit of how many cpu cores to use.

**`memberof`** DynamicHlsApiGetMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5555](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/dynamic-hls-api.ts#L5555)

___

### deInterlace

• `Optional` `Readonly` **deInterlace**: `boolean`

Optional. Whether to deinterlace the video.

**`memberof`** DynamicHlsApiGetMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5534](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/dynamic-hls-api.ts#L5534)

___

### deviceId

• `Optional` `Readonly` **deviceId**: `string`

The device id of the client requesting. Used to stop encoding processes when needed.

**`memberof`** DynamicHlsApiGetMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5345](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/dynamic-hls-api.ts#L5345)

___

### deviceProfileId

• `Optional` `Readonly` **deviceProfileId**: `string`

Optional. The dlna device profile id to utilize.

**`memberof`** DynamicHlsApiGetMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5310](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/dynamic-hls-api.ts#L5310)

___

### enableAdaptiveBitrateStreaming

• `Optional` `Readonly` **enableAdaptiveBitrateStreaming**: `boolean`

Enable adaptive bitrate streaming.

**`memberof`** DynamicHlsApiGetMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5625](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/dynamic-hls-api.ts#L5625)

___

### enableAutoStreamCopy

• `Optional` `Readonly` **enableAutoStreamCopy**: `boolean`

Whether or not to allow automatic stream copy if requested values match the original source. Defaults to true.

**`memberof`** DynamicHlsApiGetMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5359](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/dynamic-hls-api.ts#L5359)

___

### enableMpegtsM2TsMode

• `Optional` `Readonly` **enableMpegtsM2TsMode**: `boolean`

Optional. Whether to enable the MpegtsM2Ts mode.

**`memberof`** DynamicHlsApiGetMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5569](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/dynamic-hls-api.ts#L5569)

___

### framerate

• `Optional` `Readonly` **framerate**: `number`

Optional. A specific video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements.

**`memberof`** DynamicHlsApiGetMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5436](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/dynamic-hls-api.ts#L5436)

___

### height

• `Optional` `Readonly` **height**: `number`

Optional. The fixed vertical resolution of the encoded video.

**`memberof`** DynamicHlsApiGetMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5471](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/dynamic-hls-api.ts#L5471)

___

### itemId

• `Readonly` **itemId**: `string`

The item id.

**`memberof`** DynamicHlsApiGetMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5275](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/dynamic-hls-api.ts#L5275)

___

### level

• `Optional` `Readonly` **level**: `string`

Optional. Specify a level for the encoder profile (varies by encoder), e.g. 3, 3.1.

**`memberof`** DynamicHlsApiGetMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5429](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/dynamic-hls-api.ts#L5429)

___

### liveStreamId

• `Optional` `Readonly` **liveStreamId**: `string`

The live stream id.

**`memberof`** DynamicHlsApiGetMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5562](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/dynamic-hls-api.ts#L5562)

___

### maxAudioBitDepth

• `Optional` `Readonly` **maxAudioBitDepth**: `number`

Optional. The maximum audio bit depth.

**`memberof`** DynamicHlsApiGetMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5394](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/dynamic-hls-api.ts#L5394)

___

### maxAudioChannels

• `Optional` `Readonly` **maxAudioChannels**: `number`

Optional. Specify a maximum number of audio channels to encode to, e.g. 2.

**`memberof`** DynamicHlsApiGetMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5415](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/dynamic-hls-api.ts#L5415)

___

### maxFramerate

• `Optional` `Readonly` **maxFramerate**: `number`

Optional. A specific maximum video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements.

**`memberof`** DynamicHlsApiGetMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5443](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/dynamic-hls-api.ts#L5443)

___

### maxHeight

• `Optional` `Readonly` **maxHeight**: `number`

Optional. The maximum vertical resolution of the encoded video.

**`memberof`** DynamicHlsApiGetMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5485](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/dynamic-hls-api.ts#L5485)

___

### maxRefFrames

• `Optional` `Readonly` **maxRefFrames**: `number`

Optional.

**`memberof`** DynamicHlsApiGetMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5513](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/dynamic-hls-api.ts#L5513)

___

### maxVideoBitDepth

• `Optional` `Readonly` **maxVideoBitDepth**: `number`

Optional. The maximum video bit depth.

**`memberof`** DynamicHlsApiGetMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5520](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/dynamic-hls-api.ts#L5520)

___

### maxWidth

• `Optional` `Readonly` **maxWidth**: `number`

Optional. The maximum horizontal resolution of the encoded video.

**`memberof`** DynamicHlsApiGetMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5478](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/dynamic-hls-api.ts#L5478)

___

### mediaSourceId

• `Readonly` **mediaSourceId**: `string`

The media version id, if playing an alternate version.

**`memberof`** DynamicHlsApiGetMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5282](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/dynamic-hls-api.ts#L5282)

___

### minSegments

• `Optional` `Readonly` **minSegments**: `number`

The minimum number of segments.

**`memberof`** DynamicHlsApiGetMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5338](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/dynamic-hls-api.ts#L5338)

___

### params

• `Optional` `Readonly` **params**: `string`

The streaming parameters.

**`memberof`** DynamicHlsApiGetMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5296](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/dynamic-hls-api.ts#L5296)

___

### playSessionId

• `Optional` `Readonly` **playSessionId**: `string`

The play session id.

**`memberof`** DynamicHlsApiGetMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5317](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/dynamic-hls-api.ts#L5317)

___

### profile

• `Optional` `Readonly` **profile**: `string`

Optional. Specify a specific an encoder profile (varies by encoder), e.g. main, baseline, high.

**`memberof`** DynamicHlsApiGetMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5422](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/dynamic-hls-api.ts#L5422)

___

### requireAvc

• `Optional` `Readonly` **requireAvc**: `boolean`

Optional. Whether to require avc.

**`memberof`** DynamicHlsApiGetMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5527](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/dynamic-hls-api.ts#L5527)

___

### requireNonAnamorphic

• `Optional` `Readonly` **requireNonAnamorphic**: `boolean`

Optional. Whether to require a non anamorphic stream.

**`memberof`** DynamicHlsApiGetMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5541](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/dynamic-hls-api.ts#L5541)

___

### segmentContainer

• `Optional` `Readonly` **segmentContainer**: `string`

The segment container.

**`memberof`** DynamicHlsApiGetMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5324](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/dynamic-hls-api.ts#L5324)

___

### segmentLength

• `Optional` `Readonly` **segmentLength**: `number`

The segment length.

**`memberof`** DynamicHlsApiGetMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5331](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/dynamic-hls-api.ts#L5331)

___

### startTimeTicks

• `Optional` `Readonly` **startTimeTicks**: `number`

Optional. Specify a starting offset, in ticks. 1 tick &#x3D; 10000 ms.

**`memberof`** DynamicHlsApiGetMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5457](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/dynamic-hls-api.ts#L5457)

___

### streamOptions

• `Optional` `Readonly` **streamOptions**: `Object`

Optional. The streaming options.

**`memberof`** DynamicHlsApiGetMasterHlsVideoPlaylist

#### Index signature

▪ [key: `string`]: `string`

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5618](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/dynamic-hls-api.ts#L5618)

___

### subtitleCodec

• `Optional` `Readonly` **subtitleCodec**: `string`

Optional. Specify a subtitle codec to encode to.

**`memberof`** DynamicHlsApiGetMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5583](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/dynamic-hls-api.ts#L5583)

___

### subtitleMethod

• `Optional` `Readonly` **subtitleMethod**: [`SubtitleDeliveryMethod`](../enums/generated_client.SubtitleDeliveryMethod.md)

Optional. Specify the subtitle delivery method.

**`memberof`** DynamicHlsApiGetMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5506](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/dynamic-hls-api.ts#L5506)

___

### subtitleStreamIndex

• `Optional` `Readonly` **subtitleStreamIndex**: `number`

Optional. The index of the subtitle stream to use. If omitted no subtitles will be used.

**`memberof`** DynamicHlsApiGetMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5499](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/dynamic-hls-api.ts#L5499)

___

### tag

• `Optional` `Readonly` **tag**: `string`

The tag.

**`memberof`** DynamicHlsApiGetMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5303](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/dynamic-hls-api.ts#L5303)

___

### transcodeReasons

• `Optional` `Readonly` **transcodeReasons**: `string`

Optional. The transcoding reason.

**`memberof`** DynamicHlsApiGetMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5590](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/dynamic-hls-api.ts#L5590)

___

### transcodingMaxAudioChannels

• `Optional` `Readonly` **transcodingMaxAudioChannels**: `number`

Optional. The maximum number of audio channels to transcode.

**`memberof`** DynamicHlsApiGetMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5548](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/dynamic-hls-api.ts#L5548)

___

### videoBitRate

• `Optional` `Readonly` **videoBitRate**: `number`

Optional. Specify a video bitrate to encode to, e.g. 500000. If omitted this will be left to encoder defaults.

**`memberof`** DynamicHlsApiGetMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5492](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/dynamic-hls-api.ts#L5492)

___

### videoCodec

• `Optional` `Readonly` **videoCodec**: `string`

Optional. Specify a video codec to encode to, e.g. h264. If omitted the server will auto-select using the url\&#39;s extension. Options: h265, h264, mpeg4, theora, vp8, vp9, vpx (deprecated), wmv.

**`memberof`** DynamicHlsApiGetMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5576](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/dynamic-hls-api.ts#L5576)

___

### videoStreamIndex

• `Optional` `Readonly` **videoStreamIndex**: `number`

Optional. The index of the video stream to use. If omitted the first video stream will be used.

**`memberof`** DynamicHlsApiGetMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5604](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/dynamic-hls-api.ts#L5604)

___

### width

• `Optional` `Readonly` **width**: `number`

Optional. The fixed horizontal resolution of the encoded video.

**`memberof`** DynamicHlsApiGetMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5464](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/dynamic-hls-api.ts#L5464)
