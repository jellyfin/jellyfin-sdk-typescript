[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / DynamicHlsApiGetMasterHlsVideoPlaylistRequest

# Interface: DynamicHlsApiGetMasterHlsVideoPlaylistRequest

[generated-client](../modules/generated_client.md).DynamicHlsApiGetMasterHlsVideoPlaylistRequest

Request parameters for getMasterHlsVideoPlaylist operation in DynamicHlsApi.

**`export`**

**`interface`** DynamicHlsApiGetMasterHlsVideoPlaylistRequest

## Table of contents

### Properties

- [_static](generated_client.DynamicHlsApiGetMasterHlsVideoPlaylistRequest.md#_static)
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
- [maxRefFrames](generated_client.DynamicHlsApiGetMasterHlsVideoPlaylistRequest.md#maxrefframes)
- [maxVideoBitDepth](generated_client.DynamicHlsApiGetMasterHlsVideoPlaylistRequest.md#maxvideobitdepth)
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

[generated-client/api/dynamic-hls-api.ts:4369](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/dynamic-hls-api.ts#L4369)

___

### allowAudioStreamCopy

• `Optional` `Readonly` **allowAudioStreamCopy**: `boolean`

Whether or not to allow copying of the audio stream url.

**`memberof`** DynamicHlsApiGetMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4453](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/dynamic-hls-api.ts#L4453)

___

### allowVideoStreamCopy

• `Optional` `Readonly` **allowVideoStreamCopy**: `boolean`

Whether or not to allow copying of the video stream url.

**`memberof`** DynamicHlsApiGetMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4446](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/dynamic-hls-api.ts#L4446)

___

### audioBitRate

• `Optional` `Readonly` **audioBitRate**: `number`

Optional. Specify an audio bitrate to encode to, e.g. 128000. If omitted this will be left to encoder defaults.

**`memberof`** DynamicHlsApiGetMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4481](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/dynamic-hls-api.ts#L4481)

___

### audioChannels

• `Optional` `Readonly` **audioChannels**: `number`

Optional. Specify a specific number of audio channels to encode to, e.g. 2.

**`memberof`** DynamicHlsApiGetMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4488](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/dynamic-hls-api.ts#L4488)

___

### audioCodec

• `Optional` `Readonly` **audioCodec**: `string`

Optional. Specify a audio codec to encode to, e.g. mp3. If omitted the server will auto-select using the url\&#39;s extension. Options: aac, mp3, vorbis, wma.

**`memberof`** DynamicHlsApiGetMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4432](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/dynamic-hls-api.ts#L4432)

___

### audioSampleRate

• `Optional` `Readonly` **audioSampleRate**: `number`

Optional. Specify a specific audio sample rate, e.g. 44100.

**`memberof`** DynamicHlsApiGetMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4467](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/dynamic-hls-api.ts#L4467)

___

### audioStreamIndex

• `Optional` `Readonly` **audioStreamIndex**: `number`

Optional. The index of the audio stream to use. If omitted the first audio stream will be used.

**`memberof`** DynamicHlsApiGetMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4663](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/dynamic-hls-api.ts#L4663)

___

### breakOnNonKeyFrames

• `Optional` `Readonly` **breakOnNonKeyFrames**: `boolean`

Optional. Whether to break on non key frames.

**`memberof`** DynamicHlsApiGetMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4460](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/dynamic-hls-api.ts#L4460)

___

### context

• `Optional` `Readonly` **context**: [`EncodingContext`](../enums/generated_client.EncodingContext.md)

Optional. The MediaBrowser.Model.Dlna.EncodingContext.

**`memberof`** DynamicHlsApiGetMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4677](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/dynamic-hls-api.ts#L4677)

___

### copyTimestamps

• `Optional` `Readonly` **copyTimestamps**: `boolean`

Whether or not to copy timestamps when transcoding with an offset. Defaults to false.

**`memberof`** DynamicHlsApiGetMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4530](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/dynamic-hls-api.ts#L4530)

___

### cpuCoreLimit

• `Optional` `Readonly` **cpuCoreLimit**: `number`

Optional. The limit of how many cpu cores to use.

**`memberof`** DynamicHlsApiGetMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4621](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/dynamic-hls-api.ts#L4621)

___

### deInterlace

• `Optional` `Readonly` **deInterlace**: `boolean`

Optional. Whether to deinterlace the video.

**`memberof`** DynamicHlsApiGetMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4600](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/dynamic-hls-api.ts#L4600)

___

### deviceId

• `Optional` `Readonly` **deviceId**: `string`

The device id of the client requesting. Used to stop encoding processes when needed.

**`memberof`** DynamicHlsApiGetMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4425](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/dynamic-hls-api.ts#L4425)

___

### deviceProfileId

• `Optional` `Readonly` **deviceProfileId**: `string`

Optional. The dlna device profile id to utilize.

**`memberof`** DynamicHlsApiGetMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4390](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/dynamic-hls-api.ts#L4390)

___

### enableAdaptiveBitrateStreaming

• `Optional` `Readonly` **enableAdaptiveBitrateStreaming**: `boolean`

Enable adaptive bitrate streaming.

**`memberof`** DynamicHlsApiGetMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4691](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/dynamic-hls-api.ts#L4691)

___

### enableAutoStreamCopy

• `Optional` `Readonly` **enableAutoStreamCopy**: `boolean`

Whether or not to allow automatic stream copy if requested values match the original source. Defaults to true.

**`memberof`** DynamicHlsApiGetMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4439](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/dynamic-hls-api.ts#L4439)

___

### enableMpegtsM2TsMode

• `Optional` `Readonly` **enableMpegtsM2TsMode**: `boolean`

Optional. Whether to enable the MpegtsM2Ts mode.

**`memberof`** DynamicHlsApiGetMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4635](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/dynamic-hls-api.ts#L4635)

___

### framerate

• `Optional` `Readonly` **framerate**: `number`

Optional. A specific video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements.

**`memberof`** DynamicHlsApiGetMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4516](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/dynamic-hls-api.ts#L4516)

___

### height

• `Optional` `Readonly` **height**: `number`

Optional. The fixed vertical resolution of the encoded video.

**`memberof`** DynamicHlsApiGetMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4551](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/dynamic-hls-api.ts#L4551)

___

### itemId

• `Readonly` **itemId**: `string`

The item id.

**`memberof`** DynamicHlsApiGetMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4355](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/dynamic-hls-api.ts#L4355)

___

### level

• `Optional` `Readonly` **level**: `string`

Optional. Specify a level for the encoder profile (varies by encoder), e.g. 3, 3.1.

**`memberof`** DynamicHlsApiGetMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4509](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/dynamic-hls-api.ts#L4509)

___

### liveStreamId

• `Optional` `Readonly` **liveStreamId**: `string`

The live stream id.

**`memberof`** DynamicHlsApiGetMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4628](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/dynamic-hls-api.ts#L4628)

___

### maxAudioBitDepth

• `Optional` `Readonly` **maxAudioBitDepth**: `number`

Optional. The maximum audio bit depth.

**`memberof`** DynamicHlsApiGetMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4474](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/dynamic-hls-api.ts#L4474)

___

### maxAudioChannels

• `Optional` `Readonly` **maxAudioChannels**: `number`

Optional. Specify a maximum number of audio channels to encode to, e.g. 2.

**`memberof`** DynamicHlsApiGetMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4495](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/dynamic-hls-api.ts#L4495)

___

### maxFramerate

• `Optional` `Readonly` **maxFramerate**: `number`

Optional. A specific maximum video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements.

**`memberof`** DynamicHlsApiGetMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4523](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/dynamic-hls-api.ts#L4523)

___

### maxRefFrames

• `Optional` `Readonly` **maxRefFrames**: `number`

Optional.

**`memberof`** DynamicHlsApiGetMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4579](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/dynamic-hls-api.ts#L4579)

___

### maxVideoBitDepth

• `Optional` `Readonly` **maxVideoBitDepth**: `number`

Optional. The maximum video bit depth.

**`memberof`** DynamicHlsApiGetMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4586](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/dynamic-hls-api.ts#L4586)

___

### mediaSourceId

• `Readonly` **mediaSourceId**: `string`

The media version id, if playing an alternate version.

**`memberof`** DynamicHlsApiGetMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4362](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/dynamic-hls-api.ts#L4362)

___

### minSegments

• `Optional` `Readonly` **minSegments**: `number`

The minimum number of segments.

**`memberof`** DynamicHlsApiGetMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4418](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/dynamic-hls-api.ts#L4418)

___

### params

• `Optional` `Readonly` **params**: `string`

The streaming parameters.

**`memberof`** DynamicHlsApiGetMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4376](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/dynamic-hls-api.ts#L4376)

___

### playSessionId

• `Optional` `Readonly` **playSessionId**: `string`

The play session id.

**`memberof`** DynamicHlsApiGetMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4397](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/dynamic-hls-api.ts#L4397)

___

### profile

• `Optional` `Readonly` **profile**: `string`

Optional. Specify a specific an encoder profile (varies by encoder), e.g. main, baseline, high.

**`memberof`** DynamicHlsApiGetMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4502](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/dynamic-hls-api.ts#L4502)

___

### requireAvc

• `Optional` `Readonly` **requireAvc**: `boolean`

Optional. Whether to require avc.

**`memberof`** DynamicHlsApiGetMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4593](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/dynamic-hls-api.ts#L4593)

___

### requireNonAnamorphic

• `Optional` `Readonly` **requireNonAnamorphic**: `boolean`

Optional. Whether to require a non anamorphic stream.

**`memberof`** DynamicHlsApiGetMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4607](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/dynamic-hls-api.ts#L4607)

___

### segmentContainer

• `Optional` `Readonly` **segmentContainer**: `string`

The segment container.

**`memberof`** DynamicHlsApiGetMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4404](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/dynamic-hls-api.ts#L4404)

___

### segmentLength

• `Optional` `Readonly` **segmentLength**: `number`

The segment length.

**`memberof`** DynamicHlsApiGetMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4411](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/dynamic-hls-api.ts#L4411)

___

### startTimeTicks

• `Optional` `Readonly` **startTimeTicks**: `number`

Optional. Specify a starting offset, in ticks. 1 tick &#x3D; 10000 ms.

**`memberof`** DynamicHlsApiGetMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4537](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/dynamic-hls-api.ts#L4537)

___

### streamOptions

• `Optional` `Readonly` **streamOptions**: `Object`

Optional. The streaming options.

**`memberof`** DynamicHlsApiGetMasterHlsVideoPlaylist

#### Index signature

▪ [key: `string`]: `string`

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4684](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/dynamic-hls-api.ts#L4684)

___

### subtitleCodec

• `Optional` `Readonly` **subtitleCodec**: `string`

Optional. Specify a subtitle codec to encode to.

**`memberof`** DynamicHlsApiGetMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4649](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/dynamic-hls-api.ts#L4649)

___

### subtitleMethod

• `Optional` `Readonly` **subtitleMethod**: [`SubtitleDeliveryMethod`](../enums/generated_client.SubtitleDeliveryMethod.md)

Optional. Specify the subtitle delivery method.

**`memberof`** DynamicHlsApiGetMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4572](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/dynamic-hls-api.ts#L4572)

___

### subtitleStreamIndex

• `Optional` `Readonly` **subtitleStreamIndex**: `number`

Optional. The index of the subtitle stream to use. If omitted no subtitles will be used.

**`memberof`** DynamicHlsApiGetMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4565](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/dynamic-hls-api.ts#L4565)

___

### tag

• `Optional` `Readonly` **tag**: `string`

The tag.

**`memberof`** DynamicHlsApiGetMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4383](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/dynamic-hls-api.ts#L4383)

___

### transcodeReasons

• `Optional` `Readonly` **transcodeReasons**: `string`

Optional. The transcoding reason.

**`memberof`** DynamicHlsApiGetMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4656](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/dynamic-hls-api.ts#L4656)

___

### transcodingMaxAudioChannels

• `Optional` `Readonly` **transcodingMaxAudioChannels**: `number`

Optional. The maximum number of audio channels to transcode.

**`memberof`** DynamicHlsApiGetMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4614](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/dynamic-hls-api.ts#L4614)

___

### videoBitRate

• `Optional` `Readonly` **videoBitRate**: `number`

Optional. Specify a video bitrate to encode to, e.g. 500000. If omitted this will be left to encoder defaults.

**`memberof`** DynamicHlsApiGetMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4558](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/dynamic-hls-api.ts#L4558)

___

### videoCodec

• `Optional` `Readonly` **videoCodec**: `string`

Optional. Specify a video codec to encode to, e.g. h264. If omitted the server will auto-select using the url\&#39;s extension. Options: h265, h264, mpeg4, theora, vpx, wmv.

**`memberof`** DynamicHlsApiGetMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4642](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/dynamic-hls-api.ts#L4642)

___

### videoStreamIndex

• `Optional` `Readonly` **videoStreamIndex**: `number`

Optional. The index of the video stream to use. If omitted the first video stream will be used.

**`memberof`** DynamicHlsApiGetMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4670](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/dynamic-hls-api.ts#L4670)

___

### width

• `Optional` `Readonly` **width**: `number`

Optional. The fixed horizontal resolution of the encoded video.

**`memberof`** DynamicHlsApiGetMasterHlsVideoPlaylist

#### Defined in

[generated-client/api/dynamic-hls-api.ts:4544](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/dynamic-hls-api.ts#L4544)
