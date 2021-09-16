[jellyfin-sdk-typescript](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / AudioApiHeadAudioStreamByContainerRequest

# Interface: AudioApiHeadAudioStreamByContainerRequest

[generated-client](../modules/generated_client.md).AudioApiHeadAudioStreamByContainerRequest

Request parameters for headAudioStreamByContainer operation in AudioApi.

**`export`**

**`interface`** AudioApiHeadAudioStreamByContainerRequest

## Table of contents

### Properties

- [_static](generated_client.AudioApiHeadAudioStreamByContainerRequest.md#_static)
- [allowAudioStreamCopy](generated_client.AudioApiHeadAudioStreamByContainerRequest.md#allowaudiostreamcopy)
- [allowVideoStreamCopy](generated_client.AudioApiHeadAudioStreamByContainerRequest.md#allowvideostreamcopy)
- [audioBitRate](generated_client.AudioApiHeadAudioStreamByContainerRequest.md#audiobitrate)
- [audioChannels](generated_client.AudioApiHeadAudioStreamByContainerRequest.md#audiochannels)
- [audioCodec](generated_client.AudioApiHeadAudioStreamByContainerRequest.md#audiocodec)
- [audioSampleRate](generated_client.AudioApiHeadAudioStreamByContainerRequest.md#audiosamplerate)
- [audioStreamIndex](generated_client.AudioApiHeadAudioStreamByContainerRequest.md#audiostreamindex)
- [breakOnNonKeyFrames](generated_client.AudioApiHeadAudioStreamByContainerRequest.md#breakonnonkeyframes)
- [container](generated_client.AudioApiHeadAudioStreamByContainerRequest.md#container)
- [context](generated_client.AudioApiHeadAudioStreamByContainerRequest.md#context)
- [copyTimestamps](generated_client.AudioApiHeadAudioStreamByContainerRequest.md#copytimestamps)
- [cpuCoreLimit](generated_client.AudioApiHeadAudioStreamByContainerRequest.md#cpucorelimit)
- [deInterlace](generated_client.AudioApiHeadAudioStreamByContainerRequest.md#deinterlace)
- [deviceId](generated_client.AudioApiHeadAudioStreamByContainerRequest.md#deviceid)
- [deviceProfileId](generated_client.AudioApiHeadAudioStreamByContainerRequest.md#deviceprofileid)
- [enableAutoStreamCopy](generated_client.AudioApiHeadAudioStreamByContainerRequest.md#enableautostreamcopy)
- [enableMpegtsM2TsMode](generated_client.AudioApiHeadAudioStreamByContainerRequest.md#enablempegtsm2tsmode)
- [framerate](generated_client.AudioApiHeadAudioStreamByContainerRequest.md#framerate)
- [height](generated_client.AudioApiHeadAudioStreamByContainerRequest.md#height)
- [itemId](generated_client.AudioApiHeadAudioStreamByContainerRequest.md#itemid)
- [level](generated_client.AudioApiHeadAudioStreamByContainerRequest.md#level)
- [liveStreamId](generated_client.AudioApiHeadAudioStreamByContainerRequest.md#livestreamid)
- [maxAudioBitDepth](generated_client.AudioApiHeadAudioStreamByContainerRequest.md#maxaudiobitdepth)
- [maxAudioChannels](generated_client.AudioApiHeadAudioStreamByContainerRequest.md#maxaudiochannels)
- [maxFramerate](generated_client.AudioApiHeadAudioStreamByContainerRequest.md#maxframerate)
- [maxRefFrames](generated_client.AudioApiHeadAudioStreamByContainerRequest.md#maxrefframes)
- [maxVideoBitDepth](generated_client.AudioApiHeadAudioStreamByContainerRequest.md#maxvideobitdepth)
- [mediaSourceId](generated_client.AudioApiHeadAudioStreamByContainerRequest.md#mediasourceid)
- [minSegments](generated_client.AudioApiHeadAudioStreamByContainerRequest.md#minsegments)
- [params](generated_client.AudioApiHeadAudioStreamByContainerRequest.md#params)
- [playSessionId](generated_client.AudioApiHeadAudioStreamByContainerRequest.md#playsessionid)
- [profile](generated_client.AudioApiHeadAudioStreamByContainerRequest.md#profile)
- [requireAvc](generated_client.AudioApiHeadAudioStreamByContainerRequest.md#requireavc)
- [requireNonAnamorphic](generated_client.AudioApiHeadAudioStreamByContainerRequest.md#requirenonanamorphic)
- [segmentContainer](generated_client.AudioApiHeadAudioStreamByContainerRequest.md#segmentcontainer)
- [segmentLength](generated_client.AudioApiHeadAudioStreamByContainerRequest.md#segmentlength)
- [startTimeTicks](generated_client.AudioApiHeadAudioStreamByContainerRequest.md#starttimeticks)
- [streamOptions](generated_client.AudioApiHeadAudioStreamByContainerRequest.md#streamoptions)
- [subtitleCodec](generated_client.AudioApiHeadAudioStreamByContainerRequest.md#subtitlecodec)
- [subtitleMethod](generated_client.AudioApiHeadAudioStreamByContainerRequest.md#subtitlemethod)
- [subtitleStreamIndex](generated_client.AudioApiHeadAudioStreamByContainerRequest.md#subtitlestreamindex)
- [tag](generated_client.AudioApiHeadAudioStreamByContainerRequest.md#tag)
- [transcodeReasons](generated_client.AudioApiHeadAudioStreamByContainerRequest.md#transcodereasons)
- [transcodingMaxAudioChannels](generated_client.AudioApiHeadAudioStreamByContainerRequest.md#transcodingmaxaudiochannels)
- [videoBitRate](generated_client.AudioApiHeadAudioStreamByContainerRequest.md#videobitrate)
- [videoCodec](generated_client.AudioApiHeadAudioStreamByContainerRequest.md#videocodec)
- [videoStreamIndex](generated_client.AudioApiHeadAudioStreamByContainerRequest.md#videostreamindex)
- [width](generated_client.AudioApiHeadAudioStreamByContainerRequest.md#width)

## Properties

### \_static

• `Optional` `Readonly` **\_static**: `boolean`

Optional. If true, the original file will be streamed statically without any encoding. Use either no url extension or the original file extension. true/false.

**`memberof`** AudioApiHeadAudioStreamByContainer

#### Defined in

[generated-client/api/audio-api.ts:2693](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/audio-api.ts#L2693)

___

### allowAudioStreamCopy

• `Optional` `Readonly` **allowAudioStreamCopy**: `boolean`

Whether or not to allow copying of the audio stream url.

**`memberof`** AudioApiHeadAudioStreamByContainer

#### Defined in

[generated-client/api/audio-api.ts:2784](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/audio-api.ts#L2784)

___

### allowVideoStreamCopy

• `Optional` `Readonly` **allowVideoStreamCopy**: `boolean`

Whether or not to allow copying of the video stream url.

**`memberof`** AudioApiHeadAudioStreamByContainer

#### Defined in

[generated-client/api/audio-api.ts:2777](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/audio-api.ts#L2777)

___

### audioBitRate

• `Optional` `Readonly` **audioBitRate**: `number`

Optional. Specify an audio bitrate to encode to, e.g. 128000. If omitted this will be left to encoder defaults.

**`memberof`** AudioApiHeadAudioStreamByContainer

#### Defined in

[generated-client/api/audio-api.ts:2812](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/audio-api.ts#L2812)

___

### audioChannels

• `Optional` `Readonly` **audioChannels**: `number`

Optional. Specify a specific number of audio channels to encode to, e.g. 2.

**`memberof`** AudioApiHeadAudioStreamByContainer

#### Defined in

[generated-client/api/audio-api.ts:2819](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/audio-api.ts#L2819)

___

### audioCodec

• `Optional` `Readonly` **audioCodec**: `string`

Optional. Specify a audio codec to encode to, e.g. mp3. If omitted the server will auto-select using the url\&#39;s extension. Options: aac, mp3, vorbis, wma.

**`memberof`** AudioApiHeadAudioStreamByContainer

#### Defined in

[generated-client/api/audio-api.ts:2763](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/audio-api.ts#L2763)

___

### audioSampleRate

• `Optional` `Readonly` **audioSampleRate**: `number`

Optional. Specify a specific audio sample rate, e.g. 44100.

**`memberof`** AudioApiHeadAudioStreamByContainer

#### Defined in

[generated-client/api/audio-api.ts:2798](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/audio-api.ts#L2798)

___

### audioStreamIndex

• `Optional` `Readonly` **audioStreamIndex**: `number`

Optional. The index of the audio stream to use. If omitted the first audio stream will be used.

**`memberof`** AudioApiHeadAudioStreamByContainer

#### Defined in

[generated-client/api/audio-api.ts:2994](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/audio-api.ts#L2994)

___

### breakOnNonKeyFrames

• `Optional` `Readonly` **breakOnNonKeyFrames**: `boolean`

Optional. Whether to break on non key frames.

**`memberof`** AudioApiHeadAudioStreamByContainer

#### Defined in

[generated-client/api/audio-api.ts:2791](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/audio-api.ts#L2791)

___

### container

• `Readonly` **container**: `string`

The audio container.

**`memberof`** AudioApiHeadAudioStreamByContainer

#### Defined in

[generated-client/api/audio-api.ts:2686](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/audio-api.ts#L2686)

___

### context

• `Optional` `Readonly` **context**: [`EncodingContext`](../enums/generated_client.EncodingContext.md)

Optional. The MediaBrowser.Model.Dlna.EncodingContext.

**`memberof`** AudioApiHeadAudioStreamByContainer

#### Defined in

[generated-client/api/audio-api.ts:3008](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/audio-api.ts#L3008)

___

### copyTimestamps

• `Optional` `Readonly` **copyTimestamps**: `boolean`

Whether or not to copy timestamps when transcoding with an offset. Defaults to false.

**`memberof`** AudioApiHeadAudioStreamByContainer

#### Defined in

[generated-client/api/audio-api.ts:2861](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/audio-api.ts#L2861)

___

### cpuCoreLimit

• `Optional` `Readonly` **cpuCoreLimit**: `number`

Optional. The limit of how many cpu cores to use.

**`memberof`** AudioApiHeadAudioStreamByContainer

#### Defined in

[generated-client/api/audio-api.ts:2952](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/audio-api.ts#L2952)

___

### deInterlace

• `Optional` `Readonly` **deInterlace**: `boolean`

Optional. Whether to deinterlace the video.

**`memberof`** AudioApiHeadAudioStreamByContainer

#### Defined in

[generated-client/api/audio-api.ts:2931](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/audio-api.ts#L2931)

___

### deviceId

• `Optional` `Readonly` **deviceId**: `string`

The device id of the client requesting. Used to stop encoding processes when needed.

**`memberof`** AudioApiHeadAudioStreamByContainer

#### Defined in

[generated-client/api/audio-api.ts:2756](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/audio-api.ts#L2756)

___

### deviceProfileId

• `Optional` `Readonly` **deviceProfileId**: `string`

Optional. The dlna device profile id to utilize.

**`memberof`** AudioApiHeadAudioStreamByContainer

#### Defined in

[generated-client/api/audio-api.ts:2714](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/audio-api.ts#L2714)

___

### enableAutoStreamCopy

• `Optional` `Readonly` **enableAutoStreamCopy**: `boolean`

Whether or not to allow automatic stream copy if requested values match the original source. Defaults to true.

**`memberof`** AudioApiHeadAudioStreamByContainer

#### Defined in

[generated-client/api/audio-api.ts:2770](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/audio-api.ts#L2770)

___

### enableMpegtsM2TsMode

• `Optional` `Readonly` **enableMpegtsM2TsMode**: `boolean`

Optional. Whether to enable the MpegtsM2Ts mode.

**`memberof`** AudioApiHeadAudioStreamByContainer

#### Defined in

[generated-client/api/audio-api.ts:2966](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/audio-api.ts#L2966)

___

### framerate

• `Optional` `Readonly` **framerate**: `number`

Optional. A specific video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements.

**`memberof`** AudioApiHeadAudioStreamByContainer

#### Defined in

[generated-client/api/audio-api.ts:2847](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/audio-api.ts#L2847)

___

### height

• `Optional` `Readonly` **height**: `number`

Optional. The fixed vertical resolution of the encoded video.

**`memberof`** AudioApiHeadAudioStreamByContainer

#### Defined in

[generated-client/api/audio-api.ts:2882](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/audio-api.ts#L2882)

___

### itemId

• `Readonly` **itemId**: `string`

The item id.

**`memberof`** AudioApiHeadAudioStreamByContainer

#### Defined in

[generated-client/api/audio-api.ts:2679](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/audio-api.ts#L2679)

___

### level

• `Optional` `Readonly` **level**: `string`

Optional. Specify a level for the encoder profile (varies by encoder), e.g. 3, 3.1.

**`memberof`** AudioApiHeadAudioStreamByContainer

#### Defined in

[generated-client/api/audio-api.ts:2840](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/audio-api.ts#L2840)

___

### liveStreamId

• `Optional` `Readonly` **liveStreamId**: `string`

The live stream id.

**`memberof`** AudioApiHeadAudioStreamByContainer

#### Defined in

[generated-client/api/audio-api.ts:2959](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/audio-api.ts#L2959)

___

### maxAudioBitDepth

• `Optional` `Readonly` **maxAudioBitDepth**: `number`

Optional. The maximum audio bit depth.

**`memberof`** AudioApiHeadAudioStreamByContainer

#### Defined in

[generated-client/api/audio-api.ts:2805](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/audio-api.ts#L2805)

___

### maxAudioChannels

• `Optional` `Readonly` **maxAudioChannels**: `number`

Optional. Specify a maximum number of audio channels to encode to, e.g. 2.

**`memberof`** AudioApiHeadAudioStreamByContainer

#### Defined in

[generated-client/api/audio-api.ts:2826](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/audio-api.ts#L2826)

___

### maxFramerate

• `Optional` `Readonly` **maxFramerate**: `number`

Optional. A specific maximum video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements.

**`memberof`** AudioApiHeadAudioStreamByContainer

#### Defined in

[generated-client/api/audio-api.ts:2854](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/audio-api.ts#L2854)

___

### maxRefFrames

• `Optional` `Readonly` **maxRefFrames**: `number`

Optional.

**`memberof`** AudioApiHeadAudioStreamByContainer

#### Defined in

[generated-client/api/audio-api.ts:2910](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/audio-api.ts#L2910)

___

### maxVideoBitDepth

• `Optional` `Readonly` **maxVideoBitDepth**: `number`

Optional. The maximum video bit depth.

**`memberof`** AudioApiHeadAudioStreamByContainer

#### Defined in

[generated-client/api/audio-api.ts:2917](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/audio-api.ts#L2917)

___

### mediaSourceId

• `Optional` `Readonly` **mediaSourceId**: `string`

The media version id, if playing an alternate version.

**`memberof`** AudioApiHeadAudioStreamByContainer

#### Defined in

[generated-client/api/audio-api.ts:2749](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/audio-api.ts#L2749)

___

### minSegments

• `Optional` `Readonly` **minSegments**: `number`

The minimum number of segments.

**`memberof`** AudioApiHeadAudioStreamByContainer

#### Defined in

[generated-client/api/audio-api.ts:2742](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/audio-api.ts#L2742)

___

### params

• `Optional` `Readonly` **params**: `string`

The streaming parameters.

**`memberof`** AudioApiHeadAudioStreamByContainer

#### Defined in

[generated-client/api/audio-api.ts:2700](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/audio-api.ts#L2700)

___

### playSessionId

• `Optional` `Readonly` **playSessionId**: `string`

The play session id.

**`memberof`** AudioApiHeadAudioStreamByContainer

#### Defined in

[generated-client/api/audio-api.ts:2721](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/audio-api.ts#L2721)

___

### profile

• `Optional` `Readonly` **profile**: `string`

Optional. Specify a specific an encoder profile (varies by encoder), e.g. main, baseline, high.

**`memberof`** AudioApiHeadAudioStreamByContainer

#### Defined in

[generated-client/api/audio-api.ts:2833](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/audio-api.ts#L2833)

___

### requireAvc

• `Optional` `Readonly` **requireAvc**: `boolean`

Optional. Whether to require avc.

**`memberof`** AudioApiHeadAudioStreamByContainer

#### Defined in

[generated-client/api/audio-api.ts:2924](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/audio-api.ts#L2924)

___

### requireNonAnamorphic

• `Optional` `Readonly` **requireNonAnamorphic**: `boolean`

Optional. Whether to require a non anamporphic stream.

**`memberof`** AudioApiHeadAudioStreamByContainer

#### Defined in

[generated-client/api/audio-api.ts:2938](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/audio-api.ts#L2938)

___

### segmentContainer

• `Optional` `Readonly` **segmentContainer**: `string`

The segment container.

**`memberof`** AudioApiHeadAudioStreamByContainer

#### Defined in

[generated-client/api/audio-api.ts:2728](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/audio-api.ts#L2728)

___

### segmentLength

• `Optional` `Readonly` **segmentLength**: `number`

The segment lenght.

**`memberof`** AudioApiHeadAudioStreamByContainer

#### Defined in

[generated-client/api/audio-api.ts:2735](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/audio-api.ts#L2735)

___

### startTimeTicks

• `Optional` `Readonly` **startTimeTicks**: `number`

Optional. Specify a starting offset, in ticks. 1 tick &#x3D; 10000 ms.

**`memberof`** AudioApiHeadAudioStreamByContainer

#### Defined in

[generated-client/api/audio-api.ts:2868](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/audio-api.ts#L2868)

___

### streamOptions

• `Optional` `Readonly` **streamOptions**: `Object`

Optional. The streaming options.

**`memberof`** AudioApiHeadAudioStreamByContainer

#### Index signature

▪ [key: `string`]: `string`

#### Defined in

[generated-client/api/audio-api.ts:3015](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/audio-api.ts#L3015)

___

### subtitleCodec

• `Optional` `Readonly` **subtitleCodec**: `string`

Optional. Specify a subtitle codec to encode to.

**`memberof`** AudioApiHeadAudioStreamByContainer

#### Defined in

[generated-client/api/audio-api.ts:2980](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/audio-api.ts#L2980)

___

### subtitleMethod

• `Optional` `Readonly` **subtitleMethod**: [`SubtitleDeliveryMethod`](../enums/generated_client.SubtitleDeliveryMethod.md)

Optional. Specify the subtitle delivery method.

**`memberof`** AudioApiHeadAudioStreamByContainer

#### Defined in

[generated-client/api/audio-api.ts:2903](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/audio-api.ts#L2903)

___

### subtitleStreamIndex

• `Optional` `Readonly` **subtitleStreamIndex**: `number`

Optional. The index of the subtitle stream to use. If omitted no subtitles will be used.

**`memberof`** AudioApiHeadAudioStreamByContainer

#### Defined in

[generated-client/api/audio-api.ts:2896](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/audio-api.ts#L2896)

___

### tag

• `Optional` `Readonly` **tag**: `string`

The tag.

**`memberof`** AudioApiHeadAudioStreamByContainer

#### Defined in

[generated-client/api/audio-api.ts:2707](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/audio-api.ts#L2707)

___

### transcodeReasons

• `Optional` `Readonly` **transcodeReasons**: `string`

Optional. The transcoding reason.

**`memberof`** AudioApiHeadAudioStreamByContainer

#### Defined in

[generated-client/api/audio-api.ts:2987](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/audio-api.ts#L2987)

___

### transcodingMaxAudioChannels

• `Optional` `Readonly` **transcodingMaxAudioChannels**: `number`

Optional. The maximum number of audio channels to transcode.

**`memberof`** AudioApiHeadAudioStreamByContainer

#### Defined in

[generated-client/api/audio-api.ts:2945](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/audio-api.ts#L2945)

___

### videoBitRate

• `Optional` `Readonly` **videoBitRate**: `number`

Optional. Specify a video bitrate to encode to, e.g. 500000. If omitted this will be left to encoder defaults.

**`memberof`** AudioApiHeadAudioStreamByContainer

#### Defined in

[generated-client/api/audio-api.ts:2889](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/audio-api.ts#L2889)

___

### videoCodec

• `Optional` `Readonly` **videoCodec**: `string`

Optional. Specify a video codec to encode to, e.g. h264. If omitted the server will auto-select using the url\&#39;s extension. Options: h265, h264, mpeg4, theora, vpx, wmv.

**`memberof`** AudioApiHeadAudioStreamByContainer

#### Defined in

[generated-client/api/audio-api.ts:2973](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/audio-api.ts#L2973)

___

### videoStreamIndex

• `Optional` `Readonly` **videoStreamIndex**: `number`

Optional. The index of the video stream to use. If omitted the first video stream will be used.

**`memberof`** AudioApiHeadAudioStreamByContainer

#### Defined in

[generated-client/api/audio-api.ts:3001](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/audio-api.ts#L3001)

___

### width

• `Optional` `Readonly` **width**: `number`

Optional. The fixed horizontal resolution of the encoded video.

**`memberof`** AudioApiHeadAudioStreamByContainer

#### Defined in

[generated-client/api/audio-api.ts:2875](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/audio-api.ts#L2875)
