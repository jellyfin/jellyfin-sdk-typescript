[jellyfin-sdk-typescript](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / UniversalAudioApiGetUniversalAudioStreamRequest

# Interface: UniversalAudioApiGetUniversalAudioStreamRequest

[generated-client](../modules/generated_client.md).UniversalAudioApiGetUniversalAudioStreamRequest

Request parameters for getUniversalAudioStream operation in UniversalAudioApi.

**`export`**

**`interface`** UniversalAudioApiGetUniversalAudioStreamRequest

## Table of contents

### Properties

- [audioBitRate](generated_client.UniversalAudioApiGetUniversalAudioStreamRequest.md#audiobitrate)
- [audioCodec](generated_client.UniversalAudioApiGetUniversalAudioStreamRequest.md#audiocodec)
- [breakOnNonKeyFrames](generated_client.UniversalAudioApiGetUniversalAudioStreamRequest.md#breakonnonkeyframes)
- [container](generated_client.UniversalAudioApiGetUniversalAudioStreamRequest.md#container)
- [deviceId](generated_client.UniversalAudioApiGetUniversalAudioStreamRequest.md#deviceid)
- [enableRedirection](generated_client.UniversalAudioApiGetUniversalAudioStreamRequest.md#enableredirection)
- [enableRemoteMedia](generated_client.UniversalAudioApiGetUniversalAudioStreamRequest.md#enableremotemedia)
- [itemId](generated_client.UniversalAudioApiGetUniversalAudioStreamRequest.md#itemid)
- [maxAudioBitDepth](generated_client.UniversalAudioApiGetUniversalAudioStreamRequest.md#maxaudiobitdepth)
- [maxAudioChannels](generated_client.UniversalAudioApiGetUniversalAudioStreamRequest.md#maxaudiochannels)
- [maxAudioSampleRate](generated_client.UniversalAudioApiGetUniversalAudioStreamRequest.md#maxaudiosamplerate)
- [maxStreamingBitrate](generated_client.UniversalAudioApiGetUniversalAudioStreamRequest.md#maxstreamingbitrate)
- [mediaSourceId](generated_client.UniversalAudioApiGetUniversalAudioStreamRequest.md#mediasourceid)
- [startTimeTicks](generated_client.UniversalAudioApiGetUniversalAudioStreamRequest.md#starttimeticks)
- [transcodingAudioChannels](generated_client.UniversalAudioApiGetUniversalAudioStreamRequest.md#transcodingaudiochannels)
- [transcodingContainer](generated_client.UniversalAudioApiGetUniversalAudioStreamRequest.md#transcodingcontainer)
- [transcodingProtocol](generated_client.UniversalAudioApiGetUniversalAudioStreamRequest.md#transcodingprotocol)
- [userId](generated_client.UniversalAudioApiGetUniversalAudioStreamRequest.md#userid)

## Properties

### audioBitRate

• `Optional` `Readonly` **audioBitRate**: `number`

Optional. Specify an audio bitrate to encode to, e.g. 128000. If omitted this will be left to encoder defaults.

**`memberof`** UniversalAudioApiGetUniversalAudioStream

#### Defined in

[generated-client/api/universal-audio-api.ts:480](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/universal-audio-api.ts#L480)

___

### audioCodec

• `Optional` `Readonly` **audioCodec**: `string`

Optional. The audio codec to transcode to.

**`memberof`** UniversalAudioApiGetUniversalAudioStream

#### Defined in

[generated-client/api/universal-audio-api.ts:452](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/universal-audio-api.ts#L452)

___

### breakOnNonKeyFrames

• `Optional` `Readonly` **breakOnNonKeyFrames**: `boolean`

Optional. Whether to break on non key frames.

**`memberof`** UniversalAudioApiGetUniversalAudioStream

#### Defined in

[generated-client/api/universal-audio-api.ts:529](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/universal-audio-api.ts#L529)

___

### container

• `Optional` `Readonly` **container**: `string`[]

Optional. The audio container.

**`memberof`** UniversalAudioApiGetUniversalAudioStream

#### Defined in

[generated-client/api/universal-audio-api.ts:424](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/universal-audio-api.ts#L424)

___

### deviceId

• `Optional` `Readonly` **deviceId**: `string`

The device id of the client requesting. Used to stop encoding processes when needed.

**`memberof`** UniversalAudioApiGetUniversalAudioStream

#### Defined in

[generated-client/api/universal-audio-api.ts:438](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/universal-audio-api.ts#L438)

___

### enableRedirection

• `Optional` `Readonly` **enableRedirection**: `boolean`

Whether to enable redirection. Defaults to true.

**`memberof`** UniversalAudioApiGetUniversalAudioStream

#### Defined in

[generated-client/api/universal-audio-api.ts:536](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/universal-audio-api.ts#L536)

___

### enableRemoteMedia

• `Optional` `Readonly` **enableRemoteMedia**: `boolean`

Optional. Whether to enable remote media.

**`memberof`** UniversalAudioApiGetUniversalAudioStream

#### Defined in

[generated-client/api/universal-audio-api.ts:522](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/universal-audio-api.ts#L522)

___

### itemId

• `Readonly` **itemId**: `string`

The item id.

**`memberof`** UniversalAudioApiGetUniversalAudioStream

#### Defined in

[generated-client/api/universal-audio-api.ts:417](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/universal-audio-api.ts#L417)

___

### maxAudioBitDepth

• `Optional` `Readonly` **maxAudioBitDepth**: `number`

Optional. The maximum audio bit depth.

**`memberof`** UniversalAudioApiGetUniversalAudioStream

#### Defined in

[generated-client/api/universal-audio-api.ts:515](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/universal-audio-api.ts#L515)

___

### maxAudioChannels

• `Optional` `Readonly` **maxAudioChannels**: `number`

Optional. The maximum number of audio channels.

**`memberof`** UniversalAudioApiGetUniversalAudioStream

#### Defined in

[generated-client/api/universal-audio-api.ts:459](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/universal-audio-api.ts#L459)

___

### maxAudioSampleRate

• `Optional` `Readonly` **maxAudioSampleRate**: `number`

Optional. The maximum audio sample rate.

**`memberof`** UniversalAudioApiGetUniversalAudioStream

#### Defined in

[generated-client/api/universal-audio-api.ts:508](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/universal-audio-api.ts#L508)

___

### maxStreamingBitrate

• `Optional` `Readonly` **maxStreamingBitrate**: `number`

Optional. The maximum streaming bitrate.

**`memberof`** UniversalAudioApiGetUniversalAudioStream

#### Defined in

[generated-client/api/universal-audio-api.ts:473](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/universal-audio-api.ts#L473)

___

### mediaSourceId

• `Optional` `Readonly` **mediaSourceId**: `string`

The media version id, if playing an alternate version.

**`memberof`** UniversalAudioApiGetUniversalAudioStream

#### Defined in

[generated-client/api/universal-audio-api.ts:431](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/universal-audio-api.ts#L431)

___

### startTimeTicks

• `Optional` `Readonly` **startTimeTicks**: `number`

Optional. Specify a starting offset, in ticks. 1 tick &#x3D; 10000 ms.

**`memberof`** UniversalAudioApiGetUniversalAudioStream

#### Defined in

[generated-client/api/universal-audio-api.ts:487](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/universal-audio-api.ts#L487)

___

### transcodingAudioChannels

• `Optional` `Readonly` **transcodingAudioChannels**: `number`

Optional. The number of how many audio channels to transcode to.

**`memberof`** UniversalAudioApiGetUniversalAudioStream

#### Defined in

[generated-client/api/universal-audio-api.ts:466](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/universal-audio-api.ts#L466)

___

### transcodingContainer

• `Optional` `Readonly` **transcodingContainer**: `string`

Optional. The container to transcode to.

**`memberof`** UniversalAudioApiGetUniversalAudioStream

#### Defined in

[generated-client/api/universal-audio-api.ts:494](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/universal-audio-api.ts#L494)

___

### transcodingProtocol

• `Optional` `Readonly` **transcodingProtocol**: `string`

Optional. The transcoding protocol.

**`memberof`** UniversalAudioApiGetUniversalAudioStream

#### Defined in

[generated-client/api/universal-audio-api.ts:501](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/universal-audio-api.ts#L501)

___

### userId

• `Optional` `Readonly` **userId**: `string`

Optional. The user id.

**`memberof`** UniversalAudioApiGetUniversalAudioStream

#### Defined in

[generated-client/api/universal-audio-api.ts:445](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/universal-audio-api.ts#L445)
