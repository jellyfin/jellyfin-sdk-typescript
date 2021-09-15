[jellyfin-sdk-typescript](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / AudioApiGetAudioStreamRequest

# Interface: AudioApiGetAudioStreamRequest

[generated-client](../modules/generated_client.md).AudioApiGetAudioStreamRequest

Request parameters for getAudioStream operation in AudioApi.

**`export`**

**`interface`** AudioApiGetAudioStreamRequest

## Table of contents

### Properties

- [_static](generated_client.AudioApiGetAudioStreamRequest.md#_static)
- [allowAudioStreamCopy](generated_client.AudioApiGetAudioStreamRequest.md#allowaudiostreamcopy)
- [allowVideoStreamCopy](generated_client.AudioApiGetAudioStreamRequest.md#allowvideostreamcopy)
- [audioBitRate](generated_client.AudioApiGetAudioStreamRequest.md#audiobitrate)
- [audioChannels](generated_client.AudioApiGetAudioStreamRequest.md#audiochannels)
- [audioCodec](generated_client.AudioApiGetAudioStreamRequest.md#audiocodec)
- [audioSampleRate](generated_client.AudioApiGetAudioStreamRequest.md#audiosamplerate)
- [audioStreamIndex](generated_client.AudioApiGetAudioStreamRequest.md#audiostreamindex)
- [breakOnNonKeyFrames](generated_client.AudioApiGetAudioStreamRequest.md#breakonnonkeyframes)
- [container](generated_client.AudioApiGetAudioStreamRequest.md#container)
- [context](generated_client.AudioApiGetAudioStreamRequest.md#context)
- [copyTimestamps](generated_client.AudioApiGetAudioStreamRequest.md#copytimestamps)
- [cpuCoreLimit](generated_client.AudioApiGetAudioStreamRequest.md#cpucorelimit)
- [deInterlace](generated_client.AudioApiGetAudioStreamRequest.md#deinterlace)
- [deviceId](generated_client.AudioApiGetAudioStreamRequest.md#deviceid)
- [deviceProfileId](generated_client.AudioApiGetAudioStreamRequest.md#deviceprofileid)
- [enableAutoStreamCopy](generated_client.AudioApiGetAudioStreamRequest.md#enableautostreamcopy)
- [enableMpegtsM2TsMode](generated_client.AudioApiGetAudioStreamRequest.md#enablempegtsm2tsmode)
- [framerate](generated_client.AudioApiGetAudioStreamRequest.md#framerate)
- [height](generated_client.AudioApiGetAudioStreamRequest.md#height)
- [itemId](generated_client.AudioApiGetAudioStreamRequest.md#itemid)
- [level](generated_client.AudioApiGetAudioStreamRequest.md#level)
- [liveStreamId](generated_client.AudioApiGetAudioStreamRequest.md#livestreamid)
- [maxAudioBitDepth](generated_client.AudioApiGetAudioStreamRequest.md#maxaudiobitdepth)
- [maxAudioChannels](generated_client.AudioApiGetAudioStreamRequest.md#maxaudiochannels)
- [maxFramerate](generated_client.AudioApiGetAudioStreamRequest.md#maxframerate)
- [maxRefFrames](generated_client.AudioApiGetAudioStreamRequest.md#maxrefframes)
- [maxVideoBitDepth](generated_client.AudioApiGetAudioStreamRequest.md#maxvideobitdepth)
- [mediaSourceId](generated_client.AudioApiGetAudioStreamRequest.md#mediasourceid)
- [minSegments](generated_client.AudioApiGetAudioStreamRequest.md#minsegments)
- [params](generated_client.AudioApiGetAudioStreamRequest.md#params)
- [playSessionId](generated_client.AudioApiGetAudioStreamRequest.md#playsessionid)
- [profile](generated_client.AudioApiGetAudioStreamRequest.md#profile)
- [requireAvc](generated_client.AudioApiGetAudioStreamRequest.md#requireavc)
- [requireNonAnamorphic](generated_client.AudioApiGetAudioStreamRequest.md#requirenonanamorphic)
- [segmentContainer](generated_client.AudioApiGetAudioStreamRequest.md#segmentcontainer)
- [segmentLength](generated_client.AudioApiGetAudioStreamRequest.md#segmentlength)
- [startTimeTicks](generated_client.AudioApiGetAudioStreamRequest.md#starttimeticks)
- [streamOptions](generated_client.AudioApiGetAudioStreamRequest.md#streamoptions)
- [subtitleCodec](generated_client.AudioApiGetAudioStreamRequest.md#subtitlecodec)
- [subtitleMethod](generated_client.AudioApiGetAudioStreamRequest.md#subtitlemethod)
- [subtitleStreamIndex](generated_client.AudioApiGetAudioStreamRequest.md#subtitlestreamindex)
- [tag](generated_client.AudioApiGetAudioStreamRequest.md#tag)
- [transcodeReasons](generated_client.AudioApiGetAudioStreamRequest.md#transcodereasons)
- [transcodingMaxAudioChannels](generated_client.AudioApiGetAudioStreamRequest.md#transcodingmaxaudiochannels)
- [videoBitRate](generated_client.AudioApiGetAudioStreamRequest.md#videobitrate)
- [videoCodec](generated_client.AudioApiGetAudioStreamRequest.md#videocodec)
- [videoStreamIndex](generated_client.AudioApiGetAudioStreamRequest.md#videostreamindex)
- [width](generated_client.AudioApiGetAudioStreamRequest.md#width)

## Properties

### \_static

• `Optional` `Readonly` **\_static**: `boolean`

Optional. If true, the original file will be streamed statically without any encoding. Use either no url extension or the original file extension. true/false.

**`memberof`** AudioApiGetAudioStream

#### Defined in

[generated-client/api/audio-api.ts:1643](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/audio-api.ts#L1643)

___

### allowAudioStreamCopy

• `Optional` `Readonly` **allowAudioStreamCopy**: `boolean`

Whether or not to allow copying of the audio stream url.

**`memberof`** AudioApiGetAudioStream

#### Defined in

[generated-client/api/audio-api.ts:1734](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/audio-api.ts#L1734)

___

### allowVideoStreamCopy

• `Optional` `Readonly` **allowVideoStreamCopy**: `boolean`

Whether or not to allow copying of the video stream url.

**`memberof`** AudioApiGetAudioStream

#### Defined in

[generated-client/api/audio-api.ts:1727](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/audio-api.ts#L1727)

___

### audioBitRate

• `Optional` `Readonly` **audioBitRate**: `number`

Optional. Specify an audio bitrate to encode to, e.g. 128000. If omitted this will be left to encoder defaults.

**`memberof`** AudioApiGetAudioStream

#### Defined in

[generated-client/api/audio-api.ts:1762](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/audio-api.ts#L1762)

___

### audioChannels

• `Optional` `Readonly` **audioChannels**: `number`

Optional. Specify a specific number of audio channels to encode to, e.g. 2.

**`memberof`** AudioApiGetAudioStream

#### Defined in

[generated-client/api/audio-api.ts:1769](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/audio-api.ts#L1769)

___

### audioCodec

• `Optional` `Readonly` **audioCodec**: `string`

Optional. Specify a audio codec to encode to, e.g. mp3. If omitted the server will auto-select using the url\&#39;s extension. Options: aac, mp3, vorbis, wma.

**`memberof`** AudioApiGetAudioStream

#### Defined in

[generated-client/api/audio-api.ts:1713](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/audio-api.ts#L1713)

___

### audioSampleRate

• `Optional` `Readonly` **audioSampleRate**: `number`

Optional. Specify a specific audio sample rate, e.g. 44100.

**`memberof`** AudioApiGetAudioStream

#### Defined in

[generated-client/api/audio-api.ts:1748](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/audio-api.ts#L1748)

___

### audioStreamIndex

• `Optional` `Readonly` **audioStreamIndex**: `number`

Optional. The index of the audio stream to use. If omitted the first audio stream will be used.

**`memberof`** AudioApiGetAudioStream

#### Defined in

[generated-client/api/audio-api.ts:1944](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/audio-api.ts#L1944)

___

### breakOnNonKeyFrames

• `Optional` `Readonly` **breakOnNonKeyFrames**: `boolean`

Optional. Whether to break on non key frames.

**`memberof`** AudioApiGetAudioStream

#### Defined in

[generated-client/api/audio-api.ts:1741](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/audio-api.ts#L1741)

___

### container

• `Optional` `Readonly` **container**: `string`

The audio container.

**`memberof`** AudioApiGetAudioStream

#### Defined in

[generated-client/api/audio-api.ts:1636](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/audio-api.ts#L1636)

___

### context

• `Optional` `Readonly` **context**: [`EncodingContext`](../enums/generated_client.EncodingContext.md)

Optional. The MediaBrowser.Model.Dlna.EncodingContext.

**`memberof`** AudioApiGetAudioStream

#### Defined in

[generated-client/api/audio-api.ts:1958](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/audio-api.ts#L1958)

___

### copyTimestamps

• `Optional` `Readonly` **copyTimestamps**: `boolean`

Whether or not to copy timestamps when transcoding with an offset. Defaults to false.

**`memberof`** AudioApiGetAudioStream

#### Defined in

[generated-client/api/audio-api.ts:1811](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/audio-api.ts#L1811)

___

### cpuCoreLimit

• `Optional` `Readonly` **cpuCoreLimit**: `number`

Optional. The limit of how many cpu cores to use.

**`memberof`** AudioApiGetAudioStream

#### Defined in

[generated-client/api/audio-api.ts:1902](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/audio-api.ts#L1902)

___

### deInterlace

• `Optional` `Readonly` **deInterlace**: `boolean`

Optional. Whether to deinterlace the video.

**`memberof`** AudioApiGetAudioStream

#### Defined in

[generated-client/api/audio-api.ts:1881](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/audio-api.ts#L1881)

___

### deviceId

• `Optional` `Readonly` **deviceId**: `string`

The device id of the client requesting. Used to stop encoding processes when needed.

**`memberof`** AudioApiGetAudioStream

#### Defined in

[generated-client/api/audio-api.ts:1706](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/audio-api.ts#L1706)

___

### deviceProfileId

• `Optional` `Readonly` **deviceProfileId**: `string`

Optional. The dlna device profile id to utilize.

**`memberof`** AudioApiGetAudioStream

#### Defined in

[generated-client/api/audio-api.ts:1664](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/audio-api.ts#L1664)

___

### enableAutoStreamCopy

• `Optional` `Readonly` **enableAutoStreamCopy**: `boolean`

Whether or not to allow automatic stream copy if requested values match the original source. Defaults to true.

**`memberof`** AudioApiGetAudioStream

#### Defined in

[generated-client/api/audio-api.ts:1720](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/audio-api.ts#L1720)

___

### enableMpegtsM2TsMode

• `Optional` `Readonly` **enableMpegtsM2TsMode**: `boolean`

Optional. Whether to enable the MpegtsM2Ts mode.

**`memberof`** AudioApiGetAudioStream

#### Defined in

[generated-client/api/audio-api.ts:1916](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/audio-api.ts#L1916)

___

### framerate

• `Optional` `Readonly` **framerate**: `number`

Optional. A specific video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements.

**`memberof`** AudioApiGetAudioStream

#### Defined in

[generated-client/api/audio-api.ts:1797](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/audio-api.ts#L1797)

___

### height

• `Optional` `Readonly` **height**: `number`

Optional. The fixed vertical resolution of the encoded video.

**`memberof`** AudioApiGetAudioStream

#### Defined in

[generated-client/api/audio-api.ts:1832](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/audio-api.ts#L1832)

___

### itemId

• `Readonly` **itemId**: `string`

The item id.

**`memberof`** AudioApiGetAudioStream

#### Defined in

[generated-client/api/audio-api.ts:1629](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/audio-api.ts#L1629)

___

### level

• `Optional` `Readonly` **level**: `string`

Optional. Specify a level for the encoder profile (varies by encoder), e.g. 3, 3.1.

**`memberof`** AudioApiGetAudioStream

#### Defined in

[generated-client/api/audio-api.ts:1790](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/audio-api.ts#L1790)

___

### liveStreamId

• `Optional` `Readonly` **liveStreamId**: `string`

The live stream id.

**`memberof`** AudioApiGetAudioStream

#### Defined in

[generated-client/api/audio-api.ts:1909](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/audio-api.ts#L1909)

___

### maxAudioBitDepth

• `Optional` `Readonly` **maxAudioBitDepth**: `number`

Optional. The maximum audio bit depth.

**`memberof`** AudioApiGetAudioStream

#### Defined in

[generated-client/api/audio-api.ts:1755](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/audio-api.ts#L1755)

___

### maxAudioChannels

• `Optional` `Readonly` **maxAudioChannels**: `number`

Optional. Specify a maximum number of audio channels to encode to, e.g. 2.

**`memberof`** AudioApiGetAudioStream

#### Defined in

[generated-client/api/audio-api.ts:1776](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/audio-api.ts#L1776)

___

### maxFramerate

• `Optional` `Readonly` **maxFramerate**: `number`

Optional. A specific maximum video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements.

**`memberof`** AudioApiGetAudioStream

#### Defined in

[generated-client/api/audio-api.ts:1804](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/audio-api.ts#L1804)

___

### maxRefFrames

• `Optional` `Readonly` **maxRefFrames**: `number`

Optional.

**`memberof`** AudioApiGetAudioStream

#### Defined in

[generated-client/api/audio-api.ts:1860](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/audio-api.ts#L1860)

___

### maxVideoBitDepth

• `Optional` `Readonly` **maxVideoBitDepth**: `number`

Optional. The maximum video bit depth.

**`memberof`** AudioApiGetAudioStream

#### Defined in

[generated-client/api/audio-api.ts:1867](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/audio-api.ts#L1867)

___

### mediaSourceId

• `Optional` `Readonly` **mediaSourceId**: `string`

The media version id, if playing an alternate version.

**`memberof`** AudioApiGetAudioStream

#### Defined in

[generated-client/api/audio-api.ts:1699](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/audio-api.ts#L1699)

___

### minSegments

• `Optional` `Readonly` **minSegments**: `number`

The minimum number of segments.

**`memberof`** AudioApiGetAudioStream

#### Defined in

[generated-client/api/audio-api.ts:1692](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/audio-api.ts#L1692)

___

### params

• `Optional` `Readonly` **params**: `string`

The streaming parameters.

**`memberof`** AudioApiGetAudioStream

#### Defined in

[generated-client/api/audio-api.ts:1650](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/audio-api.ts#L1650)

___

### playSessionId

• `Optional` `Readonly` **playSessionId**: `string`

The play session id.

**`memberof`** AudioApiGetAudioStream

#### Defined in

[generated-client/api/audio-api.ts:1671](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/audio-api.ts#L1671)

___

### profile

• `Optional` `Readonly` **profile**: `string`

Optional. Specify a specific an encoder profile (varies by encoder), e.g. main, baseline, high.

**`memberof`** AudioApiGetAudioStream

#### Defined in

[generated-client/api/audio-api.ts:1783](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/audio-api.ts#L1783)

___

### requireAvc

• `Optional` `Readonly` **requireAvc**: `boolean`

Optional. Whether to require avc.

**`memberof`** AudioApiGetAudioStream

#### Defined in

[generated-client/api/audio-api.ts:1874](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/audio-api.ts#L1874)

___

### requireNonAnamorphic

• `Optional` `Readonly` **requireNonAnamorphic**: `boolean`

Optional. Whether to require a non anamorphic stream.

**`memberof`** AudioApiGetAudioStream

#### Defined in

[generated-client/api/audio-api.ts:1888](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/audio-api.ts#L1888)

___

### segmentContainer

• `Optional` `Readonly` **segmentContainer**: `string`

The segment container.

**`memberof`** AudioApiGetAudioStream

#### Defined in

[generated-client/api/audio-api.ts:1678](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/audio-api.ts#L1678)

___

### segmentLength

• `Optional` `Readonly` **segmentLength**: `number`

The segment length.

**`memberof`** AudioApiGetAudioStream

#### Defined in

[generated-client/api/audio-api.ts:1685](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/audio-api.ts#L1685)

___

### startTimeTicks

• `Optional` `Readonly` **startTimeTicks**: `number`

Optional. Specify a starting offset, in ticks. 1 tick &#x3D; 10000 ms.

**`memberof`** AudioApiGetAudioStream

#### Defined in

[generated-client/api/audio-api.ts:1818](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/audio-api.ts#L1818)

___

### streamOptions

• `Optional` `Readonly` **streamOptions**: `Object`

Optional. The streaming options.

**`memberof`** AudioApiGetAudioStream

#### Index signature

▪ [key: `string`]: `string`

#### Defined in

[generated-client/api/audio-api.ts:1965](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/audio-api.ts#L1965)

___

### subtitleCodec

• `Optional` `Readonly` **subtitleCodec**: `string`

Optional. Specify a subtitle codec to encode to.

**`memberof`** AudioApiGetAudioStream

#### Defined in

[generated-client/api/audio-api.ts:1930](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/audio-api.ts#L1930)

___

### subtitleMethod

• `Optional` `Readonly` **subtitleMethod**: [`SubtitleDeliveryMethod`](../enums/generated_client.SubtitleDeliveryMethod.md)

Optional. Specify the subtitle delivery method.

**`memberof`** AudioApiGetAudioStream

#### Defined in

[generated-client/api/audio-api.ts:1853](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/audio-api.ts#L1853)

___

### subtitleStreamIndex

• `Optional` `Readonly` **subtitleStreamIndex**: `number`

Optional. The index of the subtitle stream to use. If omitted no subtitles will be used.

**`memberof`** AudioApiGetAudioStream

#### Defined in

[generated-client/api/audio-api.ts:1846](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/audio-api.ts#L1846)

___

### tag

• `Optional` `Readonly` **tag**: `string`

The tag.

**`memberof`** AudioApiGetAudioStream

#### Defined in

[generated-client/api/audio-api.ts:1657](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/audio-api.ts#L1657)

___

### transcodeReasons

• `Optional` `Readonly` **transcodeReasons**: `string`

Optional. The transcoding reason.

**`memberof`** AudioApiGetAudioStream

#### Defined in

[generated-client/api/audio-api.ts:1937](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/audio-api.ts#L1937)

___

### transcodingMaxAudioChannels

• `Optional` `Readonly` **transcodingMaxAudioChannels**: `number`

Optional. The maximum number of audio channels to transcode.

**`memberof`** AudioApiGetAudioStream

#### Defined in

[generated-client/api/audio-api.ts:1895](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/audio-api.ts#L1895)

___

### videoBitRate

• `Optional` `Readonly` **videoBitRate**: `number`

Optional. Specify a video bitrate to encode to, e.g. 500000. If omitted this will be left to encoder defaults.

**`memberof`** AudioApiGetAudioStream

#### Defined in

[generated-client/api/audio-api.ts:1839](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/audio-api.ts#L1839)

___

### videoCodec

• `Optional` `Readonly` **videoCodec**: `string`

Optional. Specify a video codec to encode to, e.g. h264. If omitted the server will auto-select using the url\&#39;s extension. Options: h265, h264, mpeg4, theora, vpx, wmv.

**`memberof`** AudioApiGetAudioStream

#### Defined in

[generated-client/api/audio-api.ts:1923](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/audio-api.ts#L1923)

___

### videoStreamIndex

• `Optional` `Readonly` **videoStreamIndex**: `number`

Optional. The index of the video stream to use. If omitted the first video stream will be used.

**`memberof`** AudioApiGetAudioStream

#### Defined in

[generated-client/api/audio-api.ts:1951](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/audio-api.ts#L1951)

___

### width

• `Optional` `Readonly` **width**: `number`

Optional. The fixed horizontal resolution of the encoded video.

**`memberof`** AudioApiGetAudioStream

#### Defined in

[generated-client/api/audio-api.ts:1825](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/audio-api.ts#L1825)
