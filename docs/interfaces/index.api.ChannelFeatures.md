[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / [api](../modules/index.api.md) / ChannelFeatures

# Interface: ChannelFeatures

[index](../modules/index.md).[api](../modules/index.api.md).ChannelFeatures

**`export`**

**`interface`** ChannelFeatures

## Table of contents

### Properties

- [AutoRefreshLevels](index.api.ChannelFeatures.md#autorefreshlevels)
- [CanFilter](index.api.ChannelFeatures.md#canfilter)
- [CanSearch](index.api.ChannelFeatures.md#cansearch)
- [ContentTypes](index.api.ChannelFeatures.md#contenttypes)
- [DefaultSortFields](index.api.ChannelFeatures.md#defaultsortfields)
- [Id](index.api.ChannelFeatures.md#id)
- [MaxPageSize](index.api.ChannelFeatures.md#maxpagesize)
- [MediaTypes](index.api.ChannelFeatures.md#mediatypes)
- [Name](index.api.ChannelFeatures.md#name)
- [SupportsContentDownloading](index.api.ChannelFeatures.md#supportscontentdownloading)
- [SupportsLatestMedia](index.api.ChannelFeatures.md#supportslatestmedia)
- [SupportsSortOrderToggle](index.api.ChannelFeatures.md#supportssortordertoggle)

## Properties

### AutoRefreshLevels

• `Optional` **AutoRefreshLevels**: ``null`` \| `number`

Gets or sets the automatic refresh levels.

**`memberof`** ChannelFeatures

#### Defined in

[generated-client/models/channel-features.ts:67](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/channel-features.ts#L67)

___

### CanFilter

• `Optional` **CanFilter**: `boolean`

Gets or sets a value indicating whether this instance can filter.

**`memberof`** ChannelFeatures

#### Defined in

[generated-client/models/channel-features.ts:91](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/channel-features.ts#L91)

___

### CanSearch

• `Optional` **CanSearch**: `boolean`

Gets or sets a value indicating whether this instance can search.

**`memberof`** ChannelFeatures

#### Defined in

[generated-client/models/channel-features.ts:43](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/channel-features.ts#L43)

___

### ContentTypes

• `Optional` **ContentTypes**: ``null`` \| [`ChannelMediaContentType`](../enums/index.api.ChannelMediaContentType.md)[]

Gets or sets the content types.

**`memberof`** ChannelFeatures

#### Defined in

[generated-client/models/channel-features.ts:55](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/channel-features.ts#L55)

___

### DefaultSortFields

• `Optional` **DefaultSortFields**: ``null`` \| [`ChannelItemSortField`](../enums/index.api.ChannelItemSortField.md)[]

Gets or sets the default sort orders.

**`memberof`** ChannelFeatures

#### Defined in

[generated-client/models/channel-features.ts:73](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/channel-features.ts#L73)

___

### Id

• `Optional` **Id**: ``null`` \| `string`

Gets or sets the identifier.

**`memberof`** ChannelFeatures

#### Defined in

[generated-client/models/channel-features.ts:37](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/channel-features.ts#L37)

___

### MaxPageSize

• `Optional` **MaxPageSize**: ``null`` \| `number`

Represents the maximum number of records the channel allows retrieving at a time.

**`memberof`** ChannelFeatures

#### Defined in

[generated-client/models/channel-features.ts:61](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/channel-features.ts#L61)

___

### MediaTypes

• `Optional` **MediaTypes**: ``null`` \| [`ChannelMediaType`](../enums/index.api.ChannelMediaType.md)[]

Gets or sets the media types.

**`memberof`** ChannelFeatures

#### Defined in

[generated-client/models/channel-features.ts:49](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/channel-features.ts#L49)

___

### Name

• `Optional` **Name**: ``null`` \| `string`

Gets or sets the name.

**`memberof`** ChannelFeatures

#### Defined in

[generated-client/models/channel-features.ts:31](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/channel-features.ts#L31)

___

### SupportsContentDownloading

• `Optional` **SupportsContentDownloading**: `boolean`

Gets or sets a value indicating whether [supports content downloading].

**`memberof`** ChannelFeatures

#### Defined in

[generated-client/models/channel-features.ts:97](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/channel-features.ts#L97)

___

### SupportsLatestMedia

• `Optional` **SupportsLatestMedia**: `boolean`

Gets or sets a value indicating whether [supports latest media].

**`memberof`** ChannelFeatures

#### Defined in

[generated-client/models/channel-features.ts:85](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/channel-features.ts#L85)

___

### SupportsSortOrderToggle

• `Optional` **SupportsSortOrderToggle**: `boolean`

Indicates if a sort ascending/descending toggle is supported or not.

**`memberof`** ChannelFeatures

#### Defined in

[generated-client/models/channel-features.ts:79](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/channel-features.ts#L79)
