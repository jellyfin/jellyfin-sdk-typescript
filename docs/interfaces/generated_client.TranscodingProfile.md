[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / TranscodingProfile

# Interface: TranscodingProfile

[generated-client](../modules/generated_client.md).TranscodingProfile

**`export`**

**`interface`** TranscodingProfile

## Table of contents

### Properties

- [AudioCodec](generated_client.TranscodingProfile.md#audiocodec)
- [BreakOnNonKeyFrames](generated_client.TranscodingProfile.md#breakonnonkeyframes)
- [Conditions](generated_client.TranscodingProfile.md#conditions)
- [Container](generated_client.TranscodingProfile.md#container)
- [Context](generated_client.TranscodingProfile.md#context)
- [CopyTimestamps](generated_client.TranscodingProfile.md#copytimestamps)
- [EnableMpegtsM2TsMode](generated_client.TranscodingProfile.md#enablempegtsm2tsmode)
- [EnableSubtitlesInManifest](generated_client.TranscodingProfile.md#enablesubtitlesinmanifest)
- [EstimateContentLength](generated_client.TranscodingProfile.md#estimatecontentlength)
- [MaxAudioChannels](generated_client.TranscodingProfile.md#maxaudiochannels)
- [MinSegments](generated_client.TranscodingProfile.md#minsegments)
- [Protocol](generated_client.TranscodingProfile.md#protocol)
- [SegmentLength](generated_client.TranscodingProfile.md#segmentlength)
- [TranscodeSeekInfo](generated_client.TranscodingProfile.md#transcodeseekinfo)
- [Type](generated_client.TranscodingProfile.md#type)
- [VideoCodec](generated_client.TranscodingProfile.md#videocodec)

## Properties

### AudioCodec

• `Optional` **AudioCodec**: `string`

**`memberof`** TranscodingProfile

#### Defined in

[generated-client/models/transcoding-profile.ts:50](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/transcoding-profile.ts#L50)

___

### BreakOnNonKeyFrames

• `Optional` **BreakOnNonKeyFrames**: `boolean`

**`memberof`** TranscodingProfile

#### Defined in

[generated-client/models/transcoding-profile.ts:116](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/transcoding-profile.ts#L116)

___

### Conditions

• `Optional` **Conditions**: [`ProfileCondition`](generated_client.ProfileCondition.md)[]

**`memberof`** TranscodingProfile

#### Defined in

[generated-client/models/transcoding-profile.ts:122](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/transcoding-profile.ts#L122)

___

### Container

• `Optional` **Container**: `string`

**`memberof`** TranscodingProfile

#### Defined in

[generated-client/models/transcoding-profile.ts:32](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/transcoding-profile.ts#L32)

___

### Context

• `Optional` **Context**: [`EncodingContext`](../enums/generated_client.EncodingContext.md)

**`memberof`** TranscodingProfile

#### Defined in

[generated-client/models/transcoding-profile.ts:86](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/transcoding-profile.ts#L86)

___

### CopyTimestamps

• `Optional` **CopyTimestamps**: `boolean`

**`memberof`** TranscodingProfile

#### Defined in

[generated-client/models/transcoding-profile.ts:80](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/transcoding-profile.ts#L80)

___

### EnableMpegtsM2TsMode

• `Optional` **EnableMpegtsM2TsMode**: `boolean`

**`memberof`** TranscodingProfile

#### Defined in

[generated-client/models/transcoding-profile.ts:68](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/transcoding-profile.ts#L68)

___

### EnableSubtitlesInManifest

• `Optional` **EnableSubtitlesInManifest**: `boolean`

**`memberof`** TranscodingProfile

#### Defined in

[generated-client/models/transcoding-profile.ts:92](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/transcoding-profile.ts#L92)

___

### EstimateContentLength

• `Optional` **EstimateContentLength**: `boolean`

**`memberof`** TranscodingProfile

#### Defined in

[generated-client/models/transcoding-profile.ts:62](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/transcoding-profile.ts#L62)

___

### MaxAudioChannels

• `Optional` **MaxAudioChannels**: ``null`` \| `string`

**`memberof`** TranscodingProfile

#### Defined in

[generated-client/models/transcoding-profile.ts:98](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/transcoding-profile.ts#L98)

___

### MinSegments

• `Optional` **MinSegments**: `number`

**`memberof`** TranscodingProfile

#### Defined in

[generated-client/models/transcoding-profile.ts:104](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/transcoding-profile.ts#L104)

___

### Protocol

• `Optional` **Protocol**: `string`

**`memberof`** TranscodingProfile

#### Defined in

[generated-client/models/transcoding-profile.ts:56](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/transcoding-profile.ts#L56)

___

### SegmentLength

• `Optional` **SegmentLength**: `number`

**`memberof`** TranscodingProfile

#### Defined in

[generated-client/models/transcoding-profile.ts:110](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/transcoding-profile.ts#L110)

___

### TranscodeSeekInfo

• `Optional` **TranscodeSeekInfo**: [`TranscodeSeekInfo`](../enums/generated_client.TranscodeSeekInfo.md)

**`memberof`** TranscodingProfile

#### Defined in

[generated-client/models/transcoding-profile.ts:74](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/transcoding-profile.ts#L74)

___

### Type

• `Optional` **Type**: [`DlnaProfileType`](../enums/generated_client.DlnaProfileType.md)

**`memberof`** TranscodingProfile

#### Defined in

[generated-client/models/transcoding-profile.ts:38](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/transcoding-profile.ts#L38)

___

### VideoCodec

• `Optional` **VideoCodec**: `string`

**`memberof`** TranscodingProfile

#### Defined in

[generated-client/models/transcoding-profile.ts:44](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/transcoding-profile.ts#L44)
