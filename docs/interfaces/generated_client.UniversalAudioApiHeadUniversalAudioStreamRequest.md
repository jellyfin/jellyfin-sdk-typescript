[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / UniversalAudioApiHeadUniversalAudioStreamRequest

# Interface: UniversalAudioApiHeadUniversalAudioStreamRequest

[generated-client](../modules/generated_client.md).UniversalAudioApiHeadUniversalAudioStreamRequest

Request parameters for headUniversalAudioStream operation in UniversalAudioApi.

**`export`**

**`interface`** UniversalAudioApiHeadUniversalAudioStreamRequest

## Table of contents

### Properties

- [audioBitRate](generated_client.UniversalAudioApiHeadUniversalAudioStreamRequest.md#audiobitrate)
- [audioCodec](generated_client.UniversalAudioApiHeadUniversalAudioStreamRequest.md#audiocodec)
- [breakOnNonKeyFrames](generated_client.UniversalAudioApiHeadUniversalAudioStreamRequest.md#breakonnonkeyframes)
- [container](generated_client.UniversalAudioApiHeadUniversalAudioStreamRequest.md#container)
- [deviceId](generated_client.UniversalAudioApiHeadUniversalAudioStreamRequest.md#deviceid)
- [enableRedirection](generated_client.UniversalAudioApiHeadUniversalAudioStreamRequest.md#enableredirection)
- [enableRemoteMedia](generated_client.UniversalAudioApiHeadUniversalAudioStreamRequest.md#enableremotemedia)
- [itemId](generated_client.UniversalAudioApiHeadUniversalAudioStreamRequest.md#itemid)
- [maxAudioBitDepth](generated_client.UniversalAudioApiHeadUniversalAudioStreamRequest.md#maxaudiobitdepth)
- [maxAudioChannels](generated_client.UniversalAudioApiHeadUniversalAudioStreamRequest.md#maxaudiochannels)
- [maxAudioSampleRate](generated_client.UniversalAudioApiHeadUniversalAudioStreamRequest.md#maxaudiosamplerate)
- [maxStreamingBitrate](generated_client.UniversalAudioApiHeadUniversalAudioStreamRequest.md#maxstreamingbitrate)
- [mediaSourceId](generated_client.UniversalAudioApiHeadUniversalAudioStreamRequest.md#mediasourceid)
- [startTimeTicks](generated_client.UniversalAudioApiHeadUniversalAudioStreamRequest.md#starttimeticks)
- [transcodingAudioChannels](generated_client.UniversalAudioApiHeadUniversalAudioStreamRequest.md#transcodingaudiochannels)
- [transcodingContainer](generated_client.UniversalAudioApiHeadUniversalAudioStreamRequest.md#transcodingcontainer)
- [transcodingProtocol](generated_client.UniversalAudioApiHeadUniversalAudioStreamRequest.md#transcodingprotocol)
- [userId](generated_client.UniversalAudioApiHeadUniversalAudioStreamRequest.md#userid)

## Properties

### audioBitRate

• `Optional` `Readonly` **audioBitRate**: `number`

Optional. Specify an audio bitrate to encode to, e.g. 128000. If omitted this will be left to encoder defaults.

**`memberof`** UniversalAudioApiHeadUniversalAudioStream

#### Defined in

[generated-client/api/universal-audio-api.ts:613](https://github.com/thornbill/jellyfin-sdk-typescript/blob/03092f3/src/generated-client/api/universal-audio-api.ts#L613)

___

### audioCodec

• `Optional` `Readonly` **audioCodec**: `string`

Optional. The audio codec to transcode to.

**`memberof`** UniversalAudioApiHeadUniversalAudioStream

#### Defined in

[generated-client/api/universal-audio-api.ts:585](https://github.com/thornbill/jellyfin-sdk-typescript/blob/03092f3/src/generated-client/api/universal-audio-api.ts#L585)

___

### breakOnNonKeyFrames

• `Optional` `Readonly` **breakOnNonKeyFrames**: `boolean`

Optional. Whether to break on non key frames.

**`memberof`** UniversalAudioApiHeadUniversalAudioStream

#### Defined in

[generated-client/api/universal-audio-api.ts:662](https://github.com/thornbill/jellyfin-sdk-typescript/blob/03092f3/src/generated-client/api/universal-audio-api.ts#L662)

___

### container

• `Optional` `Readonly` **container**: `string`[]

Optional. The audio container.

**`memberof`** UniversalAudioApiHeadUniversalAudioStream

#### Defined in

[generated-client/api/universal-audio-api.ts:557](https://github.com/thornbill/jellyfin-sdk-typescript/blob/03092f3/src/generated-client/api/universal-audio-api.ts#L557)

___

### deviceId

• `Optional` `Readonly` **deviceId**: `string`

The device id of the client requesting. Used to stop encoding processes when needed.

**`memberof`** UniversalAudioApiHeadUniversalAudioStream

#### Defined in

[generated-client/api/universal-audio-api.ts:571](https://github.com/thornbill/jellyfin-sdk-typescript/blob/03092f3/src/generated-client/api/universal-audio-api.ts#L571)

___

### enableRedirection

• `Optional` `Readonly` **enableRedirection**: `boolean`

Whether to enable redirection. Defaults to true.

**`memberof`** UniversalAudioApiHeadUniversalAudioStream

#### Defined in

[generated-client/api/universal-audio-api.ts:669](https://github.com/thornbill/jellyfin-sdk-typescript/blob/03092f3/src/generated-client/api/universal-audio-api.ts#L669)

___

### enableRemoteMedia

• `Optional` `Readonly` **enableRemoteMedia**: `boolean`

Optional. Whether to enable remote media.

**`memberof`** UniversalAudioApiHeadUniversalAudioStream

#### Defined in

[generated-client/api/universal-audio-api.ts:655](https://github.com/thornbill/jellyfin-sdk-typescript/blob/03092f3/src/generated-client/api/universal-audio-api.ts#L655)

___

### itemId

• `Readonly` **itemId**: `string`

The item id.

**`memberof`** UniversalAudioApiHeadUniversalAudioStream

#### Defined in

[generated-client/api/universal-audio-api.ts:550](https://github.com/thornbill/jellyfin-sdk-typescript/blob/03092f3/src/generated-client/api/universal-audio-api.ts#L550)

___

### maxAudioBitDepth

• `Optional` `Readonly` **maxAudioBitDepth**: `number`

Optional. The maximum audio bit depth.

**`memberof`** UniversalAudioApiHeadUniversalAudioStream

#### Defined in

[generated-client/api/universal-audio-api.ts:648](https://github.com/thornbill/jellyfin-sdk-typescript/blob/03092f3/src/generated-client/api/universal-audio-api.ts#L648)

___

### maxAudioChannels

• `Optional` `Readonly` **maxAudioChannels**: `number`

Optional. The maximum number of audio channels.

**`memberof`** UniversalAudioApiHeadUniversalAudioStream

#### Defined in

[generated-client/api/universal-audio-api.ts:592](https://github.com/thornbill/jellyfin-sdk-typescript/blob/03092f3/src/generated-client/api/universal-audio-api.ts#L592)

___

### maxAudioSampleRate

• `Optional` `Readonly` **maxAudioSampleRate**: `number`

Optional. The maximum audio sample rate.

**`memberof`** UniversalAudioApiHeadUniversalAudioStream

#### Defined in

[generated-client/api/universal-audio-api.ts:641](https://github.com/thornbill/jellyfin-sdk-typescript/blob/03092f3/src/generated-client/api/universal-audio-api.ts#L641)

___

### maxStreamingBitrate

• `Optional` `Readonly` **maxStreamingBitrate**: `number`

Optional. The maximum streaming bitrate.

**`memberof`** UniversalAudioApiHeadUniversalAudioStream

#### Defined in

[generated-client/api/universal-audio-api.ts:606](https://github.com/thornbill/jellyfin-sdk-typescript/blob/03092f3/src/generated-client/api/universal-audio-api.ts#L606)

___

### mediaSourceId

• `Optional` `Readonly` **mediaSourceId**: `string`

The media version id, if playing an alternate version.

**`memberof`** UniversalAudioApiHeadUniversalAudioStream

#### Defined in

[generated-client/api/universal-audio-api.ts:564](https://github.com/thornbill/jellyfin-sdk-typescript/blob/03092f3/src/generated-client/api/universal-audio-api.ts#L564)

___

### startTimeTicks

• `Optional` `Readonly` **startTimeTicks**: `number`

Optional. Specify a starting offset, in ticks. 1 tick &#x3D; 10000 ms.

**`memberof`** UniversalAudioApiHeadUniversalAudioStream

#### Defined in

[generated-client/api/universal-audio-api.ts:620](https://github.com/thornbill/jellyfin-sdk-typescript/blob/03092f3/src/generated-client/api/universal-audio-api.ts#L620)

___

### transcodingAudioChannels

• `Optional` `Readonly` **transcodingAudioChannels**: `number`

Optional. The number of how many audio channels to transcode to.

**`memberof`** UniversalAudioApiHeadUniversalAudioStream

#### Defined in

[generated-client/api/universal-audio-api.ts:599](https://github.com/thornbill/jellyfin-sdk-typescript/blob/03092f3/src/generated-client/api/universal-audio-api.ts#L599)

___

### transcodingContainer

• `Optional` `Readonly` **transcodingContainer**: `string`

Optional. The container to transcode to.

**`memberof`** UniversalAudioApiHeadUniversalAudioStream

#### Defined in

[generated-client/api/universal-audio-api.ts:627](https://github.com/thornbill/jellyfin-sdk-typescript/blob/03092f3/src/generated-client/api/universal-audio-api.ts#L627)

___

### transcodingProtocol

• `Optional` `Readonly` **transcodingProtocol**: `string`

Optional. The transcoding protocol.

**`memberof`** UniversalAudioApiHeadUniversalAudioStream

#### Defined in

[generated-client/api/universal-audio-api.ts:634](https://github.com/thornbill/jellyfin-sdk-typescript/blob/03092f3/src/generated-client/api/universal-audio-api.ts#L634)

___

### userId

• `Optional` `Readonly` **userId**: `string`

Optional. The user id.

**`memberof`** UniversalAudioApiHeadUniversalAudioStream

#### Defined in

[generated-client/api/universal-audio-api.ts:578](https://github.com/thornbill/jellyfin-sdk-typescript/blob/03092f3/src/generated-client/api/universal-audio-api.ts#L578)
