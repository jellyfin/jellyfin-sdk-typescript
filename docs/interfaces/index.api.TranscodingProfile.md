[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / [api](../modules/index.api.md) / TranscodingProfile

# Interface: TranscodingProfile

[index](../modules/index.md).[api](../modules/index.api.md).TranscodingProfile

**`export`**

**`interface`** TranscodingProfile

## Table of contents

### Properties

- [AudioCodec](index.api.TranscodingProfile.md#audiocodec)
- [BreakOnNonKeyFrames](index.api.TranscodingProfile.md#breakonnonkeyframes)
- [Container](index.api.TranscodingProfile.md#container)
- [Context](index.api.TranscodingProfile.md#context)
- [CopyTimestamps](index.api.TranscodingProfile.md#copytimestamps)
- [EnableMpegtsM2TsMode](index.api.TranscodingProfile.md#enablempegtsm2tsmode)
- [EnableSubtitlesInManifest](index.api.TranscodingProfile.md#enablesubtitlesinmanifest)
- [EstimateContentLength](index.api.TranscodingProfile.md#estimatecontentlength)
- [MaxAudioChannels](index.api.TranscodingProfile.md#maxaudiochannels)
- [MinSegments](index.api.TranscodingProfile.md#minsegments)
- [Protocol](index.api.TranscodingProfile.md#protocol)
- [SegmentLength](index.api.TranscodingProfile.md#segmentlength)
- [TranscodeSeekInfo](index.api.TranscodingProfile.md#transcodeseekinfo)
- [Type](index.api.TranscodingProfile.md#type)
- [VideoCodec](index.api.TranscodingProfile.md#videocodec)

## Properties

### AudioCodec

• `Optional` **AudioCodec**: ``null`` \| `string`

**`memberof`** TranscodingProfile

#### Defined in

[generated-client/models/transcoding-profile.ts:49](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/transcoding-profile.ts#L49)

___

### BreakOnNonKeyFrames

• `Optional` **BreakOnNonKeyFrames**: `boolean`

**`memberof`** TranscodingProfile

#### Defined in

[generated-client/models/transcoding-profile.ts:115](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/transcoding-profile.ts#L115)

___

### Container

• `Optional` **Container**: ``null`` \| `string`

**`memberof`** TranscodingProfile

#### Defined in

[generated-client/models/transcoding-profile.ts:31](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/transcoding-profile.ts#L31)

___

### Context

• `Optional` **Context**: [`EncodingContext`](../enums/index.api.EncodingContext.md)

**`memberof`** TranscodingProfile

#### Defined in

[generated-client/models/transcoding-profile.ts:85](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/transcoding-profile.ts#L85)

___

### CopyTimestamps

• `Optional` **CopyTimestamps**: `boolean`

**`memberof`** TranscodingProfile

#### Defined in

[generated-client/models/transcoding-profile.ts:79](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/transcoding-profile.ts#L79)

___

### EnableMpegtsM2TsMode

• `Optional` **EnableMpegtsM2TsMode**: `boolean`

**`memberof`** TranscodingProfile

#### Defined in

[generated-client/models/transcoding-profile.ts:67](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/transcoding-profile.ts#L67)

___

### EnableSubtitlesInManifest

• `Optional` **EnableSubtitlesInManifest**: `boolean`

**`memberof`** TranscodingProfile

#### Defined in

[generated-client/models/transcoding-profile.ts:91](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/transcoding-profile.ts#L91)

___

### EstimateContentLength

• `Optional` **EstimateContentLength**: `boolean`

**`memberof`** TranscodingProfile

#### Defined in

[generated-client/models/transcoding-profile.ts:61](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/transcoding-profile.ts#L61)

___

### MaxAudioChannels

• `Optional` **MaxAudioChannels**: ``null`` \| `string`

**`memberof`** TranscodingProfile

#### Defined in

[generated-client/models/transcoding-profile.ts:97](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/transcoding-profile.ts#L97)

___

### MinSegments

• `Optional` **MinSegments**: `number`

**`memberof`** TranscodingProfile

#### Defined in

[generated-client/models/transcoding-profile.ts:103](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/transcoding-profile.ts#L103)

___

### Protocol

• `Optional` **Protocol**: ``null`` \| `string`

**`memberof`** TranscodingProfile

#### Defined in

[generated-client/models/transcoding-profile.ts:55](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/transcoding-profile.ts#L55)

___

### SegmentLength

• `Optional` **SegmentLength**: `number`

**`memberof`** TranscodingProfile

#### Defined in

[generated-client/models/transcoding-profile.ts:109](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/transcoding-profile.ts#L109)

___

### TranscodeSeekInfo

• `Optional` **TranscodeSeekInfo**: [`TranscodeSeekInfo`](../enums/index.api.TranscodeSeekInfo.md)

**`memberof`** TranscodingProfile

#### Defined in

[generated-client/models/transcoding-profile.ts:73](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/transcoding-profile.ts#L73)

___

### Type

• `Optional` **Type**: [`DlnaProfileType`](../enums/index.api.DlnaProfileType.md)

**`memberof`** TranscodingProfile

#### Defined in

[generated-client/models/transcoding-profile.ts:37](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/transcoding-profile.ts#L37)

___

### VideoCodec

• `Optional` **VideoCodec**: ``null`` \| `string`

**`memberof`** TranscodingProfile

#### Defined in

[generated-client/models/transcoding-profile.ts:43](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/transcoding-profile.ts#L43)
