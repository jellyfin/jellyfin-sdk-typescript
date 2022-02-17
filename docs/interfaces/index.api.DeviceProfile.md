[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / [api](../modules/index.api.md) / DeviceProfile

# Interface: DeviceProfile

[index](../modules/index.md).[api](../modules/index.api.md).DeviceProfile

Defines the MediaBrowser.Model.Dlna.DeviceProfile.

**`export`**

**`interface`** DeviceProfile

## Table of contents

### Properties

- [AlbumArtPn](index.api.DeviceProfile.md#albumartpn)
- [CodecProfiles](index.api.DeviceProfile.md#codecprofiles)
- [ContainerProfiles](index.api.DeviceProfile.md#containerprofiles)
- [DirectPlayProfiles](index.api.DeviceProfile.md#directplayprofiles)
- [EnableAlbumArtInDidl](index.api.DeviceProfile.md#enablealbumartindidl)
- [EnableMSMediaReceiverRegistrar](index.api.DeviceProfile.md#enablemsmediareceiverregistrar)
- [EnableSingleAlbumArtLimit](index.api.DeviceProfile.md#enablesinglealbumartlimit)
- [EnableSingleSubtitleLimit](index.api.DeviceProfile.md#enablesinglesubtitlelimit)
- [FriendlyName](index.api.DeviceProfile.md#friendlyname)
- [Id](index.api.DeviceProfile.md#id)
- [Identification](index.api.DeviceProfile.md#identification)
- [IgnoreTranscodeByteRangeRequests](index.api.DeviceProfile.md#ignoretranscodebyterangerequests)
- [Manufacturer](index.api.DeviceProfile.md#manufacturer)
- [ManufacturerUrl](index.api.DeviceProfile.md#manufacturerurl)
- [MaxAlbumArtHeight](index.api.DeviceProfile.md#maxalbumartheight)
- [MaxAlbumArtWidth](index.api.DeviceProfile.md#maxalbumartwidth)
- [MaxIconHeight](index.api.DeviceProfile.md#maxiconheight)
- [MaxIconWidth](index.api.DeviceProfile.md#maxiconwidth)
- [MaxStaticBitrate](index.api.DeviceProfile.md#maxstaticbitrate)
- [MaxStaticMusicBitrate](index.api.DeviceProfile.md#maxstaticmusicbitrate)
- [MaxStreamingBitrate](index.api.DeviceProfile.md#maxstreamingbitrate)
- [ModelDescription](index.api.DeviceProfile.md#modeldescription)
- [ModelName](index.api.DeviceProfile.md#modelname)
- [ModelNumber](index.api.DeviceProfile.md#modelnumber)
- [ModelUrl](index.api.DeviceProfile.md#modelurl)
- [MusicStreamingTranscodingBitrate](index.api.DeviceProfile.md#musicstreamingtranscodingbitrate)
- [Name](index.api.DeviceProfile.md#name)
- [ProtocolInfo](index.api.DeviceProfile.md#protocolinfo)
- [RequiresPlainFolders](index.api.DeviceProfile.md#requiresplainfolders)
- [RequiresPlainVideoItems](index.api.DeviceProfile.md#requiresplainvideoitems)
- [ResponseProfiles](index.api.DeviceProfile.md#responseprofiles)
- [SerialNumber](index.api.DeviceProfile.md#serialnumber)
- [SonyAggregationFlags](index.api.DeviceProfile.md#sonyaggregationflags)
- [SubtitleProfiles](index.api.DeviceProfile.md#subtitleprofiles)
- [SupportedMediaTypes](index.api.DeviceProfile.md#supportedmediatypes)
- [TimelineOffsetSeconds](index.api.DeviceProfile.md#timelineoffsetseconds)
- [TranscodingProfiles](index.api.DeviceProfile.md#transcodingprofiles)
- [UserId](index.api.DeviceProfile.md#userid)
- [XmlRootAttributes](index.api.DeviceProfile.md#xmlrootattributes)

## Properties

### AlbumArtPn

• `Optional` **AlbumArtPn**: ``null`` \| `string`

Gets or sets the AlbumArtPn.

**`memberof`** DeviceProfile

#### Defined in

[generated-client/models/device-profile.ts:132](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/device-profile.ts#L132)

___

### CodecProfiles

• `Optional` **CodecProfiles**: ``null`` \| [`CodecProfile`](index.api.CodecProfile.md)[]

Gets or sets the CodecProfiles.

**`memberof`** DeviceProfile

#### Defined in

[generated-client/models/device-profile.ts:252](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/device-profile.ts#L252)

___

### ContainerProfiles

• `Optional` **ContainerProfiles**: ``null`` \| [`ContainerProfile`](index.api.ContainerProfile.md)[]

Gets or sets the ContainerProfiles.

**`memberof`** DeviceProfile

#### Defined in

[generated-client/models/device-profile.ts:246](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/device-profile.ts#L246)

___

### DirectPlayProfiles

• `Optional` **DirectPlayProfiles**: ``null`` \| [`DirectPlayProfile`](index.api.DirectPlayProfile.md)[]

Gets or sets the direct play profiles.

**`memberof`** DeviceProfile

#### Defined in

[generated-client/models/device-profile.ts:234](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/device-profile.ts#L234)

___

### EnableAlbumArtInDidl

• `Optional` **EnableAlbumArtInDidl**: `boolean`

Gets or sets a value indicating whether EnableAlbumArtInDidl.

**`memberof`** DeviceProfile

#### Defined in

[generated-client/models/device-profile.ts:102](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/device-profile.ts#L102)

___

### EnableMSMediaReceiverRegistrar

• `Optional` **EnableMSMediaReceiverRegistrar**: `boolean`

Gets or sets a value indicating whether EnableMSMediaReceiverRegistrar.

**`memberof`** DeviceProfile

#### Defined in

[generated-client/models/device-profile.ts:216](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/device-profile.ts#L216)

___

### EnableSingleAlbumArtLimit

• `Optional` **EnableSingleAlbumArtLimit**: `boolean`

Gets or sets a value indicating whether EnableSingleAlbumArtLimit.

**`memberof`** DeviceProfile

#### Defined in

[generated-client/models/device-profile.ts:108](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/device-profile.ts#L108)

___

### EnableSingleSubtitleLimit

• `Optional` **EnableSingleSubtitleLimit**: `boolean`

Gets or sets a value indicating whether EnableSingleSubtitleLimit.

**`memberof`** DeviceProfile

#### Defined in

[generated-client/models/device-profile.ts:114](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/device-profile.ts#L114)

___

### FriendlyName

• `Optional` **FriendlyName**: ``null`` \| `string`

Gets or sets the FriendlyName.

**`memberof`** DeviceProfile

#### Defined in

[generated-client/models/device-profile.ts:54](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/device-profile.ts#L54)

___

### Id

• `Optional` **Id**: ``null`` \| `string`

Gets or sets the Id.

**`memberof`** DeviceProfile

#### Defined in

[generated-client/models/device-profile.ts:42](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/device-profile.ts#L42)

___

### Identification

• `Optional` **Identification**: [`DeviceIdentification`](index.api.DeviceIdentification.md)

**`memberof`** DeviceProfile

#### Defined in

[generated-client/models/device-profile.ts:48](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/device-profile.ts#L48)

___

### IgnoreTranscodeByteRangeRequests

• `Optional` **IgnoreTranscodeByteRangeRequests**: `boolean`

Gets or sets a value indicating whether IgnoreTranscodeByteRangeRequests.

**`memberof`** DeviceProfile

#### Defined in

[generated-client/models/device-profile.ts:222](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/device-profile.ts#L222)

___

### Manufacturer

• `Optional` **Manufacturer**: ``null`` \| `string`

Gets or sets the Manufacturer.

**`memberof`** DeviceProfile

#### Defined in

[generated-client/models/device-profile.ts:60](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/device-profile.ts#L60)

___

### ManufacturerUrl

• `Optional` **ManufacturerUrl**: ``null`` \| `string`

Gets or sets the ManufacturerUrl.

**`memberof`** DeviceProfile

#### Defined in

[generated-client/models/device-profile.ts:66](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/device-profile.ts#L66)

___

### MaxAlbumArtHeight

• `Optional` **MaxAlbumArtHeight**: `number`

Gets or sets the MaxAlbumArtHeight.

**`memberof`** DeviceProfile

#### Defined in

[generated-client/models/device-profile.ts:144](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/device-profile.ts#L144)

___

### MaxAlbumArtWidth

• `Optional` **MaxAlbumArtWidth**: `number`

Gets or sets the MaxAlbumArtWidth.

**`memberof`** DeviceProfile

#### Defined in

[generated-client/models/device-profile.ts:138](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/device-profile.ts#L138)

___

### MaxIconHeight

• `Optional` **MaxIconHeight**: ``null`` \| `number`

Gets or sets the MaxIconHeight.

**`memberof`** DeviceProfile

#### Defined in

[generated-client/models/device-profile.ts:156](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/device-profile.ts#L156)

___

### MaxIconWidth

• `Optional` **MaxIconWidth**: ``null`` \| `number`

Gets or sets the MaxIconWidth.

**`memberof`** DeviceProfile

#### Defined in

[generated-client/models/device-profile.ts:150](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/device-profile.ts#L150)

___

### MaxStaticBitrate

• `Optional` **MaxStaticBitrate**: ``null`` \| `number`

Gets or sets the MaxStaticBitrate.

**`memberof`** DeviceProfile

#### Defined in

[generated-client/models/device-profile.ts:168](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/device-profile.ts#L168)

___

### MaxStaticMusicBitrate

• `Optional` **MaxStaticMusicBitrate**: ``null`` \| `number`

Gets or sets the MaxStaticMusicBitrate.

**`memberof`** DeviceProfile

#### Defined in

[generated-client/models/device-profile.ts:180](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/device-profile.ts#L180)

___

### MaxStreamingBitrate

• `Optional` **MaxStreamingBitrate**: ``null`` \| `number`

Gets or sets the MaxStreamingBitrate.

**`memberof`** DeviceProfile

#### Defined in

[generated-client/models/device-profile.ts:162](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/device-profile.ts#L162)

___

### ModelDescription

• `Optional` **ModelDescription**: ``null`` \| `string`

Gets or sets the ModelDescription.

**`memberof`** DeviceProfile

#### Defined in

[generated-client/models/device-profile.ts:78](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/device-profile.ts#L78)

___

### ModelName

• `Optional` **ModelName**: ``null`` \| `string`

Gets or sets the ModelName.

**`memberof`** DeviceProfile

#### Defined in

[generated-client/models/device-profile.ts:72](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/device-profile.ts#L72)

___

### ModelNumber

• `Optional` **ModelNumber**: ``null`` \| `string`

Gets or sets the ModelNumber.

**`memberof`** DeviceProfile

#### Defined in

[generated-client/models/device-profile.ts:84](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/device-profile.ts#L84)

___

### ModelUrl

• `Optional` **ModelUrl**: ``null`` \| `string`

Gets or sets the ModelUrl.

**`memberof`** DeviceProfile

#### Defined in

[generated-client/models/device-profile.ts:90](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/device-profile.ts#L90)

___

### MusicStreamingTranscodingBitrate

• `Optional` **MusicStreamingTranscodingBitrate**: ``null`` \| `number`

Gets or sets the MusicStreamingTranscodingBitrate.

**`memberof`** DeviceProfile

#### Defined in

[generated-client/models/device-profile.ts:174](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/device-profile.ts#L174)

___

### Name

• `Optional` **Name**: ``null`` \| `string`

Gets or sets the Name.

**`memberof`** DeviceProfile

#### Defined in

[generated-client/models/device-profile.ts:36](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/device-profile.ts#L36)

___

### ProtocolInfo

• `Optional` **ProtocolInfo**: ``null`` \| `string`

Gets or sets the ProtocolInfo.

**`memberof`** DeviceProfile

#### Defined in

[generated-client/models/device-profile.ts:192](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/device-profile.ts#L192)

___

### RequiresPlainFolders

• `Optional` **RequiresPlainFolders**: `boolean`

Gets or sets a value indicating whether RequiresPlainFolders.

**`memberof`** DeviceProfile

#### Defined in

[generated-client/models/device-profile.ts:210](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/device-profile.ts#L210)

___

### RequiresPlainVideoItems

• `Optional` **RequiresPlainVideoItems**: `boolean`

Gets or sets a value indicating whether RequiresPlainVideoItems.

**`memberof`** DeviceProfile

#### Defined in

[generated-client/models/device-profile.ts:204](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/device-profile.ts#L204)

___

### ResponseProfiles

• `Optional` **ResponseProfiles**: ``null`` \| [`ResponseProfile`](index.api.ResponseProfile.md)[]

Gets or sets the ResponseProfiles.

**`memberof`** DeviceProfile

#### Defined in

[generated-client/models/device-profile.ts:258](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/device-profile.ts#L258)

___

### SerialNumber

• `Optional` **SerialNumber**: ``null`` \| `string`

Gets or sets the SerialNumber.

**`memberof`** DeviceProfile

#### Defined in

[generated-client/models/device-profile.ts:96](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/device-profile.ts#L96)

___

### SonyAggregationFlags

• `Optional` **SonyAggregationFlags**: ``null`` \| `string`

Gets or sets the content of the aggregationFlags element in the urn:schemas-sonycom:av namespace.

**`memberof`** DeviceProfile

#### Defined in

[generated-client/models/device-profile.ts:186](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/device-profile.ts#L186)

___

### SubtitleProfiles

• `Optional` **SubtitleProfiles**: ``null`` \| [`SubtitleProfile`](index.api.SubtitleProfile.md)[]

Gets or sets the SubtitleProfiles.

**`memberof`** DeviceProfile

#### Defined in

[generated-client/models/device-profile.ts:264](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/device-profile.ts#L264)

___

### SupportedMediaTypes

• `Optional` **SupportedMediaTypes**: ``null`` \| `string`

Gets or sets the SupportedMediaTypes.

**`memberof`** DeviceProfile

#### Defined in

[generated-client/models/device-profile.ts:120](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/device-profile.ts#L120)

___

### TimelineOffsetSeconds

• `Optional` **TimelineOffsetSeconds**: `number`

Gets or sets the TimelineOffsetSeconds.

**`memberof`** DeviceProfile

#### Defined in

[generated-client/models/device-profile.ts:198](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/device-profile.ts#L198)

___

### TranscodingProfiles

• `Optional` **TranscodingProfiles**: ``null`` \| [`TranscodingProfile`](index.api.TranscodingProfile.md)[]

Gets or sets the transcoding profiles.

**`memberof`** DeviceProfile

#### Defined in

[generated-client/models/device-profile.ts:240](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/device-profile.ts#L240)

___

### UserId

• `Optional` **UserId**: ``null`` \| `string`

Gets or sets the UserId.

**`memberof`** DeviceProfile

#### Defined in

[generated-client/models/device-profile.ts:126](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/device-profile.ts#L126)

___

### XmlRootAttributes

• `Optional` **XmlRootAttributes**: ``null`` \| [`XmlAttribute`](index.api.XmlAttribute.md)[]

Gets or sets the XmlRootAttributes.

**`memberof`** DeviceProfile

#### Defined in

[generated-client/models/device-profile.ts:228](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/device-profile.ts#L228)
