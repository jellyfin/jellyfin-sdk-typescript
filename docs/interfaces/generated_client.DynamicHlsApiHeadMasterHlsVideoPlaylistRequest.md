[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / DynamicHlsApiHeadMasterHlsVideoPlaylistRequest

# Interface: DynamicHlsApiHeadMasterHlsVideoPlaylistRequest

[generated-client](../modules/generated_client.md).DynamicHlsApiHeadMasterHlsVideoPlaylistRequest

Request parameters for headMasterHlsVideoPlaylist operation in DynamicHlsApi.

**`export`**

**`interface`** DynamicHlsApiHeadMasterHlsVideoPlaylistRequest

## Table of contents

### Properties

- [\_static](generated_client.DynamicHlsApiHeadMasterHlsVideoPlaylistRequest.md#_static)
- [allowAudioStreamCopy](generated_client.DynamicHlsApiHeadMasterHlsVideoPlaylistRequest.md#allowaudiostreamcopy)
- [allowVideoStreamCopy](generated_client.DynamicHlsApiHeadMasterHlsVideoPlaylistRequest.md#allowvideostreamcopy)
- [audioBitRate](generated_client.DynamicHlsApiHeadMasterHlsVideoPlaylistRequest.md#audiobitrate)
- [audioChannels](generated_client.DynamicHlsApiHeadMasterHlsVideoPlaylistRequest.md#audiochannels)
- [audioCodec](generated_client.DynamicHlsApiHeadMasterHlsVideoPlaylistRequest.md#audiocodec)
- [audioSampleRate](generated_client.DynamicHlsApiHeadMasterHlsVideoPlaylistRequest.md#audiosamplerate)
- [audioStreamIndex](generated_client.DynamicHlsApiHeadMasterHlsVideoPlaylistRequest.md#audiostreamindex)
- [breakOnNonKeyFrames](generated_client.DynamicHlsApiHeadMasterHlsVideoPlaylistRequest.md#breakonnonkeyframes)
- [context](generated_client.DynamicHlsApiHeadMasterHlsVideoPlaylistRequest.md#context)
- [copyTimestamps](generated_client.DynamicHlsApiHeadMasterHlsVideoPlaylistRequest.md#copytimestamps)
- [cpuCoreLimit](generated_client.DynamicHlsApiHeadMasterHlsVideoPlaylistRequest.md#cpucorelimit)
- [deInterlace](generated_client.DynamicHlsApiHeadMasterHlsVideoPlaylistRequest.md#deinterlace)
- [deviceId](generated_client.DynamicHlsApiHeadMasterHlsVideoPlaylistRequest.md#deviceid)
- [deviceProfileId](generated_client.DynamicHlsApiHeadMasterHlsVideoPlaylistRequest.md#deviceprofileid)
- [enableAdaptiveBitrateStreaming](generated_client.DynamicHlsApiHeadMasterHlsVideoPlaylistRequest.md#enableadaptivebitratestreaming)
- [enableAutoStreamCopy](generated_client.DynamicHlsApiHeadMasterHlsVideoPlaylistRequest.md#enableautostreamcopy)
- [enableMpegtsM2TsMode](generated_client.DynamicHlsApiHeadMasterHlsVideoPlaylistRequest.md#enablempegtsm2tsmode)
- [framerate](generated_client.DynamicHlsApiHeadMasterHlsVideoPlaylistRequest.md#framerate)
- [height](generated_client.DynamicHlsApiHeadMasterHlsVideoPlaylistRequest.md#height)
- [itemId](generated_client.DynamicHlsApiHeadMasterHlsVideoPlaylistRequest.md#itemid)
- [level](generated_client.DynamicHlsApiHeadMasterHlsVideoPlaylistRequest.md#level)
- [liveStreamId](generated_client.DynamicHlsApiHeadMasterHlsVideoPlaylistRequest.md#livestreamid)
- [maxAudioBitDepth](generated_client.DynamicHlsApiHeadMasterHlsVideoPlaylistRequest.md#maxaudiobitdepth)
- [maxAudioChannels](generated_client.DynamicHlsApiHeadMasterHlsVideoPlaylistRequest.md#maxaudiochannels)
- [maxFramerate](generated_client.DynamicHlsApiHeadMasterHlsVideoPlaylistRequest.md#maxframerate)
- [maxHeight](generated_client.DynamicHlsApiHeadMasterHlsVideoPlaylistRequest.md#maxheight)
- [maxRefFrames](generated_client.DynamicHlsApiHeadMasterHlsVideoPlaylistRequest.md#maxrefframes)
- [maxVideoBitDepth](generated_client.DynamicHlsApiHeadMasterHlsVideoPlaylistRequest.md#maxvideobitdepth)
- [maxWidth](generated_client.DynamicHlsApiHeadMasterHlsVideoPlaylistRequest.md#maxwidth)
- [mediaSourceId](generated_client.DynamicHlsApiHeadMasterHlsVideoPlaylistRequest.md#mediasourceid)
- [minSegments](generated_client.DynamicHlsApiHeadMasterHlsVideoPlaylistRequest.md#minsegments)
- [params](generated_client.DynamicHlsApiHeadMasterHlsVideoPlaylistRequest.md#params)
- [playSessionId](generated_client.DynamicHlsApiHeadMasterHlsVideoPlaylistRequest.md#playsessionid)
- [profile](generated_client.DynamicHlsApiHeadMasterHlsVideoPlaylistRequest.md#profile)
- [requireAvc](generated_client.DynamicHlsApiHeadMasterHlsVideoPlaylistRequest.md#requireavc)
- [requireNonAnamorphic](generated_client.DynamicHlsApiHeadMasterHlsVideoPlaylistRequest.md#requirenonanamorphic)
- [segmentContainer](generated_client.DynamicHlsApiHeadMasterHlsVideoPlaylistRequest.md#segmentcontainer)
- [segmentLength](generated_client.DynamicHlsApiHeadMasterHlsVideoPlaylistRequest.md#segmentlength)
- [startTimeTicks](generated_client.DynamicHlsApiHeadMasterHlsVideoPlaylistRequest.md#starttimeticks)
- [streamOptions](generated_client.DynamicHlsApiHeadMasterHlsVideoPlaylistRequest.md#streamoptions)
- [subtitleCodec](generated_client.DynamicHlsApiHeadMasterHlsVideoPlaylistRequest.md#subtitlecodec)
- [subtitleMethod](generated_client.DynamicHlsApiHeadMasterHlsVideoPlaylistRequest.md#subtitlemethod)
- [subtitleStreamIndex](generated_client.DynamicHlsApiHeadMasterHlsVideoPlaylistRequest.md#subtitlestreamindex)
- [tag](generated_client.DynamicHlsApiHeadMasterHlsVideoPlaylistRequest.md#tag)
- [transcodeReasons](generated_client.DynamicHlsApiHeadMasterHlsVideoPlaylistRequest.md#transcodereasons)
- [transcodingMaxAudioChannels](generated_client.DynamicHlsApiHeadMasterHlsVideoPlaylistRequest.md#transcodingmaxaudiochannels)
- [videoBitRate](generated_client.DynamicHlsApiHeadMasterHlsVideoPlaylistRequest.md#videobitrate)
- [videoCodec](generated_client.DynamicHlsApiHeadMasterHlsVideoPlaylistRequest.md#videocodec)
- [videoStreamIndex](generated_client.DynamicHlsApiHeadMasterHlsVideoPlaylistRequest.md#videostreamindex)
- [width](generated_client.DynamicHlsApiHeadMasterHlsVideoPlaylistRequest.md#width)

## Properties

### \_static

• `Optional` `Readonly` **\_static**: `boolean`

Optional. If true, the original file will be streamed statically without any encoding. Use either no url extension or the original file extension. true/false.

**`memberof`** DynamicHlsApiHeadMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:6717](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/dynamic-hls-api.ts#L6717)

___

### allowAudioStreamCopy

• `Optional` `Readonly` **allowAudioStreamCopy**: `boolean`

Whether or not to allow copying of the audio stream url.

**`memberof`** DynamicHlsApiHeadMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:6801](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/dynamic-hls-api.ts#L6801)

___

### allowVideoStreamCopy

• `Optional` `Readonly` **allowVideoStreamCopy**: `boolean`

Whether or not to allow copying of the video stream url.

**`memberof`** DynamicHlsApiHeadMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:6794](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/dynamic-hls-api.ts#L6794)

___

### audioBitRate

• `Optional` `Readonly` **audioBitRate**: `number`

Optional. Specify an audio bitrate to encode to, e.g. 128000. If omitted this will be left to encoder defaults.

**`memberof`** DynamicHlsApiHeadMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:6829](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/dynamic-hls-api.ts#L6829)

___

### audioChannels

• `Optional` `Readonly` **audioChannels**: `number`

Optional. Specify a specific number of audio channels to encode to, e.g. 2.

**`memberof`** DynamicHlsApiHeadMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:6836](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/dynamic-hls-api.ts#L6836)

___

### audioCodec

• `Optional` `Readonly` **audioCodec**: `string`

Optional. Specify a audio codec to encode to, e.g. mp3. If omitted the server will auto-select using the url\&#39;s extension. Options: aac, mp3, vorbis, wma.

**`memberof`** DynamicHlsApiHeadMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:6780](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/dynamic-hls-api.ts#L6780)

___

### audioSampleRate

• `Optional` `Readonly` **audioSampleRate**: `number`

Optional. Specify a specific audio sample rate, e.g. 44100.

**`memberof`** DynamicHlsApiHeadMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:6815](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/dynamic-hls-api.ts#L6815)

___

### audioStreamIndex

• `Optional` `Readonly` **audioStreamIndex**: `number`

Optional. The index of the audio stream to use. If omitted the first audio stream will be used.

**`memberof`** DynamicHlsApiHeadMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:7025](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/dynamic-hls-api.ts#L7025)

___

### breakOnNonKeyFrames

• `Optional` `Readonly` **breakOnNonKeyFrames**: `boolean`

Optional. Whether to break on non key frames.

**`memberof`** DynamicHlsApiHeadMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:6808](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/dynamic-hls-api.ts#L6808)

___

### context

• `Optional` `Readonly` **context**: [`EncodingContext`](../enums/generated_client.EncodingContext.md)

Optional. The MediaBrowser.Model.Dlna.EncodingContext.

**`memberof`** DynamicHlsApiHeadMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:7039](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/dynamic-hls-api.ts#L7039)

___

### copyTimestamps

• `Optional` `Readonly` **copyTimestamps**: `boolean`

Whether or not to copy timestamps when transcoding with an offset. Defaults to false.

**`memberof`** DynamicHlsApiHeadMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:6878](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/dynamic-hls-api.ts#L6878)

___

### cpuCoreLimit

• `Optional` `Readonly` **cpuCoreLimit**: `number`

Optional. The limit of how many cpu cores to use.

**`memberof`** DynamicHlsApiHeadMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:6983](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/dynamic-hls-api.ts#L6983)

___

### deInterlace

• `Optional` `Readonly` **deInterlace**: `boolean`

Optional. Whether to deinterlace the video.

**`memberof`** DynamicHlsApiHeadMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:6962](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/dynamic-hls-api.ts#L6962)

___

### deviceId

• `Optional` `Readonly` **deviceId**: `string`

The device id of the client requesting. Used to stop encoding processes when needed.

**`memberof`** DynamicHlsApiHeadMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:6773](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/dynamic-hls-api.ts#L6773)

___

### deviceProfileId

• `Optional` `Readonly` **deviceProfileId**: `string`

Optional. The dlna device profile id to utilize.

**`memberof`** DynamicHlsApiHeadMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:6738](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/dynamic-hls-api.ts#L6738)

___

### enableAdaptiveBitrateStreaming

• `Optional` `Readonly` **enableAdaptiveBitrateStreaming**: `boolean`

Enable adaptive bitrate streaming.

**`memberof`** DynamicHlsApiHeadMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:7053](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/dynamic-hls-api.ts#L7053)

___

### enableAutoStreamCopy

• `Optional` `Readonly` **enableAutoStreamCopy**: `boolean`

Whether or not to allow automatic stream copy if requested values match the original source. Defaults to true.

**`memberof`** DynamicHlsApiHeadMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:6787](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/dynamic-hls-api.ts#L6787)

___

### enableMpegtsM2TsMode

• `Optional` `Readonly` **enableMpegtsM2TsMode**: `boolean`

Optional. Whether to enable the MpegtsM2Ts mode.

**`memberof`** DynamicHlsApiHeadMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:6997](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/dynamic-hls-api.ts#L6997)

___

### framerate

• `Optional` `Readonly` **framerate**: `number`

Optional. A specific video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements.

**`memberof`** DynamicHlsApiHeadMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:6864](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/dynamic-hls-api.ts#L6864)

___

### height

• `Optional` `Readonly` **height**: `number`

Optional. The fixed vertical resolution of the encoded video.

**`memberof`** DynamicHlsApiHeadMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:6899](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/dynamic-hls-api.ts#L6899)

___

### itemId

• `Readonly` **itemId**: `string`

The item id.

**`memberof`** DynamicHlsApiHeadMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:6703](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/dynamic-hls-api.ts#L6703)

___

### level

• `Optional` `Readonly` **level**: `string`

Optional. Specify a level for the encoder profile (varies by encoder), e.g. 3, 3.1.

**`memberof`** DynamicHlsApiHeadMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:6857](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/dynamic-hls-api.ts#L6857)

___

### liveStreamId

• `Optional` `Readonly` **liveStreamId**: `string`

The live stream id.

**`memberof`** DynamicHlsApiHeadMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:6990](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/dynamic-hls-api.ts#L6990)

___

### maxAudioBitDepth

• `Optional` `Readonly` **maxAudioBitDepth**: `number`

Optional. The maximum audio bit depth.

**`memberof`** DynamicHlsApiHeadMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:6822](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/dynamic-hls-api.ts#L6822)

___

### maxAudioChannels

• `Optional` `Readonly` **maxAudioChannels**: `number`

Optional. Specify a maximum number of audio channels to encode to, e.g. 2.

**`memberof`** DynamicHlsApiHeadMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:6843](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/dynamic-hls-api.ts#L6843)

___

### maxFramerate

• `Optional` `Readonly` **maxFramerate**: `number`

Optional. A specific maximum video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements.

**`memberof`** DynamicHlsApiHeadMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:6871](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/dynamic-hls-api.ts#L6871)

___

### maxHeight

• `Optional` `Readonly` **maxHeight**: `number`

Optional. The maximum vertical resolution of the encoded video.

**`memberof`** DynamicHlsApiHeadMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:6913](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/dynamic-hls-api.ts#L6913)

___

### maxRefFrames

• `Optional` `Readonly` **maxRefFrames**: `number`

Optional.

**`memberof`** DynamicHlsApiHeadMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:6941](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/dynamic-hls-api.ts#L6941)

___

### maxVideoBitDepth

• `Optional` `Readonly` **maxVideoBitDepth**: `number`

Optional. The maximum video bit depth.

**`memberof`** DynamicHlsApiHeadMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:6948](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/dynamic-hls-api.ts#L6948)

___

### maxWidth

• `Optional` `Readonly` **maxWidth**: `number`

Optional. The maximum horizontal resolution of the encoded video.

**`memberof`** DynamicHlsApiHeadMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:6906](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/dynamic-hls-api.ts#L6906)

___

### mediaSourceId

• `Readonly` **mediaSourceId**: `string`

The media version id, if playing an alternate version.

**`memberof`** DynamicHlsApiHeadMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:6710](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/dynamic-hls-api.ts#L6710)

___

### minSegments

• `Optional` `Readonly` **minSegments**: `number`

The minimum number of segments.

**`memberof`** DynamicHlsApiHeadMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:6766](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/dynamic-hls-api.ts#L6766)

___

### params

• `Optional` `Readonly` **params**: `string`

The streaming parameters.

**`memberof`** DynamicHlsApiHeadMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:6724](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/dynamic-hls-api.ts#L6724)

___

### playSessionId

• `Optional` `Readonly` **playSessionId**: `string`

The play session id.

**`memberof`** DynamicHlsApiHeadMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:6745](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/dynamic-hls-api.ts#L6745)

___

### profile

• `Optional` `Readonly` **profile**: `string`

Optional. Specify a specific an encoder profile (varies by encoder), e.g. main, baseline, high.

**`memberof`** DynamicHlsApiHeadMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:6850](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/dynamic-hls-api.ts#L6850)

___

### requireAvc

• `Optional` `Readonly` **requireAvc**: `boolean`

Optional. Whether to require avc.

**`memberof`** DynamicHlsApiHeadMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:6955](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/dynamic-hls-api.ts#L6955)

___

### requireNonAnamorphic

• `Optional` `Readonly` **requireNonAnamorphic**: `boolean`

Optional. Whether to require a non anamorphic stream.

**`memberof`** DynamicHlsApiHeadMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:6969](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/dynamic-hls-api.ts#L6969)

___

### segmentContainer

• `Optional` `Readonly` **segmentContainer**: `string`

The segment container.

**`memberof`** DynamicHlsApiHeadMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:6752](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/dynamic-hls-api.ts#L6752)

___

### segmentLength

• `Optional` `Readonly` **segmentLength**: `number`

The segment length.

**`memberof`** DynamicHlsApiHeadMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:6759](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/dynamic-hls-api.ts#L6759)

___

### startTimeTicks

• `Optional` `Readonly` **startTimeTicks**: `number`

Optional. Specify a starting offset, in ticks. 1 tick &#x3D; 10000 ms.

**`memberof`** DynamicHlsApiHeadMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:6885](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/dynamic-hls-api.ts#L6885)

___

### streamOptions

• `Optional` `Readonly` **streamOptions**: `Object`

Optional. The streaming options.

**`memberof`** DynamicHlsApiHeadMasterHlsVideoPlaylist

#### Index signature

▪ [key: `string`]: `string`

#### Defined in

[generated-client/api/dynamic-hls-api.ts:7046](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/dynamic-hls-api.ts#L7046)

___

### subtitleCodec

• `Optional` `Readonly` **subtitleCodec**: `string`

Optional. Specify a subtitle codec to encode to.

**`memberof`** DynamicHlsApiHeadMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:7011](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/dynamic-hls-api.ts#L7011)

___

### subtitleMethod

• `Optional` `Readonly` **subtitleMethod**: [`SubtitleDeliveryMethod`](../enums/generated_client.SubtitleDeliveryMethod.md)

Optional. Specify the subtitle delivery method.

**`memberof`** DynamicHlsApiHeadMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:6934](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/dynamic-hls-api.ts#L6934)

___

### subtitleStreamIndex

• `Optional` `Readonly` **subtitleStreamIndex**: `number`

Optional. The index of the subtitle stream to use. If omitted no subtitles will be used.

**`memberof`** DynamicHlsApiHeadMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:6927](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/dynamic-hls-api.ts#L6927)

___

### tag

• `Optional` `Readonly` **tag**: `string`

The tag.

**`memberof`** DynamicHlsApiHeadMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:6731](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/dynamic-hls-api.ts#L6731)

___

### transcodeReasons

• `Optional` `Readonly` **transcodeReasons**: `string`

Optional. The transcoding reason.

**`memberof`** DynamicHlsApiHeadMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:7018](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/dynamic-hls-api.ts#L7018)

___

### transcodingMaxAudioChannels

• `Optional` `Readonly` **transcodingMaxAudioChannels**: `number`

Optional. The maximum number of audio channels to transcode.

**`memberof`** DynamicHlsApiHeadMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:6976](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/dynamic-hls-api.ts#L6976)

___

### videoBitRate

• `Optional` `Readonly` **videoBitRate**: `number`

Optional. Specify a video bitrate to encode to, e.g. 500000. If omitted this will be left to encoder defaults.

**`memberof`** DynamicHlsApiHeadMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:6920](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/dynamic-hls-api.ts#L6920)

___

### videoCodec

• `Optional` `Readonly` **videoCodec**: `string`

Optional. Specify a video codec to encode to, e.g. h264. If omitted the server will auto-select using the url\&#39;s extension. Options: h265, h264, mpeg4, theora, vp8, vp9, vpx (deprecated), wmv.

**`memberof`** DynamicHlsApiHeadMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:7004](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/dynamic-hls-api.ts#L7004)

___

### videoStreamIndex

• `Optional` `Readonly` **videoStreamIndex**: `number`

Optional. The index of the video stream to use. If omitted the first video stream will be used.

**`memberof`** DynamicHlsApiHeadMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:7032](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/dynamic-hls-api.ts#L7032)

___

### width

• `Optional` `Readonly` **width**: `number`

Optional. The fixed horizontal resolution of the encoded video.

**`memberof`** DynamicHlsApiHeadMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:6892](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/dynamic-hls-api.ts#L6892)
