[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / DynamicHlsApiHeadMasterHlsVideoPlaylistRequest

# Interface: DynamicHlsApiHeadMasterHlsVideoPlaylistRequest

[generated-client](../modules/generated_client.md).DynamicHlsApiHeadMasterHlsVideoPlaylistRequest

Request parameters for headMasterHlsVideoPlaylist operation in DynamicHlsApi.

**`export`**

**`interface`** DynamicHlsApiHeadMasterHlsVideoPlaylistRequest

## Table of contents

### Properties

- [_static](generated_client.DynamicHlsApiHeadMasterHlsVideoPlaylistRequest.md#_static)
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
- [maxRefFrames](generated_client.DynamicHlsApiHeadMasterHlsVideoPlaylistRequest.md#maxrefframes)
- [maxVideoBitDepth](generated_client.DynamicHlsApiHeadMasterHlsVideoPlaylistRequest.md#maxvideobitdepth)
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

[generated-client/api/dynamic-hls-api.ts:5769](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/dynamic-hls-api.ts#L5769)

___

### allowAudioStreamCopy

• `Optional` `Readonly` **allowAudioStreamCopy**: `boolean`

Whether or not to allow copying of the audio stream url.

**`memberof`** DynamicHlsApiHeadMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5853](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/dynamic-hls-api.ts#L5853)

___

### allowVideoStreamCopy

• `Optional` `Readonly` **allowVideoStreamCopy**: `boolean`

Whether or not to allow copying of the video stream url.

**`memberof`** DynamicHlsApiHeadMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5846](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/dynamic-hls-api.ts#L5846)

___

### audioBitRate

• `Optional` `Readonly` **audioBitRate**: `number`

Optional. Specify an audio bitrate to encode to, e.g. 128000. If omitted this will be left to encoder defaults.

**`memberof`** DynamicHlsApiHeadMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5881](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/dynamic-hls-api.ts#L5881)

___

### audioChannels

• `Optional` `Readonly` **audioChannels**: `number`

Optional. Specify a specific number of audio channels to encode to, e.g. 2.

**`memberof`** DynamicHlsApiHeadMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5888](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/dynamic-hls-api.ts#L5888)

___

### audioCodec

• `Optional` `Readonly` **audioCodec**: `string`

Optional. Specify a audio codec to encode to, e.g. mp3. If omitted the server will auto-select using the url\&#39;s extension. Options: aac, mp3, vorbis, wma.

**`memberof`** DynamicHlsApiHeadMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5832](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/dynamic-hls-api.ts#L5832)

___

### audioSampleRate

• `Optional` `Readonly` **audioSampleRate**: `number`

Optional. Specify a specific audio sample rate, e.g. 44100.

**`memberof`** DynamicHlsApiHeadMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5867](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/dynamic-hls-api.ts#L5867)

___

### audioStreamIndex

• `Optional` `Readonly` **audioStreamIndex**: `number`

Optional. The index of the audio stream to use. If omitted the first audio stream will be used.

**`memberof`** DynamicHlsApiHeadMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:6063](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/dynamic-hls-api.ts#L6063)

___

### breakOnNonKeyFrames

• `Optional` `Readonly` **breakOnNonKeyFrames**: `boolean`

Optional. Whether to break on non key frames.

**`memberof`** DynamicHlsApiHeadMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5860](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/dynamic-hls-api.ts#L5860)

___

### context

• `Optional` `Readonly` **context**: [`EncodingContext`](../enums/generated_client.EncodingContext.md)

Optional. The MediaBrowser.Model.Dlna.EncodingContext.

**`memberof`** DynamicHlsApiHeadMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:6077](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/dynamic-hls-api.ts#L6077)

___

### copyTimestamps

• `Optional` `Readonly` **copyTimestamps**: `boolean`

Whether or not to copy timestamps when transcoding with an offset. Defaults to false.

**`memberof`** DynamicHlsApiHeadMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5930](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/dynamic-hls-api.ts#L5930)

___

### cpuCoreLimit

• `Optional` `Readonly` **cpuCoreLimit**: `number`

Optional. The limit of how many cpu cores to use.

**`memberof`** DynamicHlsApiHeadMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:6021](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/dynamic-hls-api.ts#L6021)

___

### deInterlace

• `Optional` `Readonly` **deInterlace**: `boolean`

Optional. Whether to deinterlace the video.

**`memberof`** DynamicHlsApiHeadMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:6000](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/dynamic-hls-api.ts#L6000)

___

### deviceId

• `Optional` `Readonly` **deviceId**: `string`

The device id of the client requesting. Used to stop encoding processes when needed.

**`memberof`** DynamicHlsApiHeadMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5825](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/dynamic-hls-api.ts#L5825)

___

### deviceProfileId

• `Optional` `Readonly` **deviceProfileId**: `string`

Optional. The dlna device profile id to utilize.

**`memberof`** DynamicHlsApiHeadMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5790](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/dynamic-hls-api.ts#L5790)

___

### enableAdaptiveBitrateStreaming

• `Optional` `Readonly` **enableAdaptiveBitrateStreaming**: `boolean`

Enable adaptive bitrate streaming.

**`memberof`** DynamicHlsApiHeadMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:6091](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/dynamic-hls-api.ts#L6091)

___

### enableAutoStreamCopy

• `Optional` `Readonly` **enableAutoStreamCopy**: `boolean`

Whether or not to allow automatic stream copy if requested values match the original source. Defaults to true.

**`memberof`** DynamicHlsApiHeadMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5839](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/dynamic-hls-api.ts#L5839)

___

### enableMpegtsM2TsMode

• `Optional` `Readonly` **enableMpegtsM2TsMode**: `boolean`

Optional. Whether to enable the MpegtsM2Ts mode.

**`memberof`** DynamicHlsApiHeadMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:6035](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/dynamic-hls-api.ts#L6035)

___

### framerate

• `Optional` `Readonly` **framerate**: `number`

Optional. A specific video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements.

**`memberof`** DynamicHlsApiHeadMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5916](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/dynamic-hls-api.ts#L5916)

___

### height

• `Optional` `Readonly` **height**: `number`

Optional. The fixed vertical resolution of the encoded video.

**`memberof`** DynamicHlsApiHeadMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5951](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/dynamic-hls-api.ts#L5951)

___

### itemId

• `Readonly` **itemId**: `string`

The item id.

**`memberof`** DynamicHlsApiHeadMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5755](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/dynamic-hls-api.ts#L5755)

___

### level

• `Optional` `Readonly` **level**: `string`

Optional. Specify a level for the encoder profile (varies by encoder), e.g. 3, 3.1.

**`memberof`** DynamicHlsApiHeadMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5909](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/dynamic-hls-api.ts#L5909)

___

### liveStreamId

• `Optional` `Readonly` **liveStreamId**: `string`

The live stream id.

**`memberof`** DynamicHlsApiHeadMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:6028](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/dynamic-hls-api.ts#L6028)

___

### maxAudioBitDepth

• `Optional` `Readonly` **maxAudioBitDepth**: `number`

Optional. The maximum audio bit depth.

**`memberof`** DynamicHlsApiHeadMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5874](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/dynamic-hls-api.ts#L5874)

___

### maxAudioChannels

• `Optional` `Readonly` **maxAudioChannels**: `number`

Optional. Specify a maximum number of audio channels to encode to, e.g. 2.

**`memberof`** DynamicHlsApiHeadMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5895](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/dynamic-hls-api.ts#L5895)

___

### maxFramerate

• `Optional` `Readonly` **maxFramerate**: `number`

Optional. A specific maximum video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements.

**`memberof`** DynamicHlsApiHeadMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5923](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/dynamic-hls-api.ts#L5923)

___

### maxRefFrames

• `Optional` `Readonly` **maxRefFrames**: `number`

Optional.

**`memberof`** DynamicHlsApiHeadMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5979](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/dynamic-hls-api.ts#L5979)

___

### maxVideoBitDepth

• `Optional` `Readonly` **maxVideoBitDepth**: `number`

Optional. The maximum video bit depth.

**`memberof`** DynamicHlsApiHeadMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5986](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/dynamic-hls-api.ts#L5986)

___

### mediaSourceId

• `Readonly` **mediaSourceId**: `string`

The media version id, if playing an alternate version.

**`memberof`** DynamicHlsApiHeadMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5762](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/dynamic-hls-api.ts#L5762)

___

### minSegments

• `Optional` `Readonly` **minSegments**: `number`

The minimum number of segments.

**`memberof`** DynamicHlsApiHeadMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5818](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/dynamic-hls-api.ts#L5818)

___

### params

• `Optional` `Readonly` **params**: `string`

The streaming parameters.

**`memberof`** DynamicHlsApiHeadMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5776](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/dynamic-hls-api.ts#L5776)

___

### playSessionId

• `Optional` `Readonly` **playSessionId**: `string`

The play session id.

**`memberof`** DynamicHlsApiHeadMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5797](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/dynamic-hls-api.ts#L5797)

___

### profile

• `Optional` `Readonly` **profile**: `string`

Optional. Specify a specific an encoder profile (varies by encoder), e.g. main, baseline, high.

**`memberof`** DynamicHlsApiHeadMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5902](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/dynamic-hls-api.ts#L5902)

___

### requireAvc

• `Optional` `Readonly` **requireAvc**: `boolean`

Optional. Whether to require avc.

**`memberof`** DynamicHlsApiHeadMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5993](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/dynamic-hls-api.ts#L5993)

___

### requireNonAnamorphic

• `Optional` `Readonly` **requireNonAnamorphic**: `boolean`

Optional. Whether to require a non anamorphic stream.

**`memberof`** DynamicHlsApiHeadMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:6007](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/dynamic-hls-api.ts#L6007)

___

### segmentContainer

• `Optional` `Readonly` **segmentContainer**: `string`

The segment container.

**`memberof`** DynamicHlsApiHeadMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5804](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/dynamic-hls-api.ts#L5804)

___

### segmentLength

• `Optional` `Readonly` **segmentLength**: `number`

The segment length.

**`memberof`** DynamicHlsApiHeadMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5811](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/dynamic-hls-api.ts#L5811)

___

### startTimeTicks

• `Optional` `Readonly` **startTimeTicks**: `number`

Optional. Specify a starting offset, in ticks. 1 tick &#x3D; 10000 ms.

**`memberof`** DynamicHlsApiHeadMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5937](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/dynamic-hls-api.ts#L5937)

___

### streamOptions

• `Optional` `Readonly` **streamOptions**: `Object`

Optional. The streaming options.

**`memberof`** DynamicHlsApiHeadMasterHlsVideoPlaylist

#### Index signature

▪ [key: `string`]: `string`

#### Defined in

[generated-client/api/dynamic-hls-api.ts:6084](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/dynamic-hls-api.ts#L6084)

___

### subtitleCodec

• `Optional` `Readonly` **subtitleCodec**: `string`

Optional. Specify a subtitle codec to encode to.

**`memberof`** DynamicHlsApiHeadMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:6049](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/dynamic-hls-api.ts#L6049)

___

### subtitleMethod

• `Optional` `Readonly` **subtitleMethod**: [`SubtitleDeliveryMethod`](../enums/generated_client.SubtitleDeliveryMethod.md)

Optional. Specify the subtitle delivery method.

**`memberof`** DynamicHlsApiHeadMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5972](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/dynamic-hls-api.ts#L5972)

___

### subtitleStreamIndex

• `Optional` `Readonly` **subtitleStreamIndex**: `number`

Optional. The index of the subtitle stream to use. If omitted no subtitles will be used.

**`memberof`** DynamicHlsApiHeadMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5965](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/dynamic-hls-api.ts#L5965)

___

### tag

• `Optional` `Readonly` **tag**: `string`

The tag.

**`memberof`** DynamicHlsApiHeadMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5783](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/dynamic-hls-api.ts#L5783)

___

### transcodeReasons

• `Optional` `Readonly` **transcodeReasons**: `string`

Optional. The transcoding reason.

**`memberof`** DynamicHlsApiHeadMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:6056](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/dynamic-hls-api.ts#L6056)

___

### transcodingMaxAudioChannels

• `Optional` `Readonly` **transcodingMaxAudioChannels**: `number`

Optional. The maximum number of audio channels to transcode.

**`memberof`** DynamicHlsApiHeadMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:6014](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/dynamic-hls-api.ts#L6014)

___

### videoBitRate

• `Optional` `Readonly` **videoBitRate**: `number`

Optional. Specify a video bitrate to encode to, e.g. 500000. If omitted this will be left to encoder defaults.

**`memberof`** DynamicHlsApiHeadMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5958](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/dynamic-hls-api.ts#L5958)

___

### videoCodec

• `Optional` `Readonly` **videoCodec**: `string`

Optional. Specify a video codec to encode to, e.g. h264. If omitted the server will auto-select using the url\&#39;s extension. Options: h265, h264, mpeg4, theora, vpx, wmv.

**`memberof`** DynamicHlsApiHeadMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:6042](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/dynamic-hls-api.ts#L6042)

___

### videoStreamIndex

• `Optional` `Readonly` **videoStreamIndex**: `number`

Optional. The index of the video stream to use. If omitted the first video stream will be used.

**`memberof`** DynamicHlsApiHeadMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:6070](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/dynamic-hls-api.ts#L6070)

___

### width

• `Optional` `Readonly` **width**: `number`

Optional. The fixed horizontal resolution of the encoded video.

**`memberof`** DynamicHlsApiHeadMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:5944](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/dynamic-hls-api.ts#L5944)
