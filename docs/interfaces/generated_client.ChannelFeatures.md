[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / ChannelFeatures

# Interface: ChannelFeatures

[generated-client](../modules/generated_client.md).ChannelFeatures

**`export`**

**`interface`** ChannelFeatures

## Table of contents

### Properties

- [AutoRefreshLevels](generated_client.ChannelFeatures.md#autorefreshlevels)
- [CanFilter](generated_client.ChannelFeatures.md#canfilter)
- [CanSearch](generated_client.ChannelFeatures.md#cansearch)
- [ContentTypes](generated_client.ChannelFeatures.md#contenttypes)
- [DefaultSortFields](generated_client.ChannelFeatures.md#defaultsortfields)
- [Id](generated_client.ChannelFeatures.md#id)
- [MaxPageSize](generated_client.ChannelFeatures.md#maxpagesize)
- [MediaTypes](generated_client.ChannelFeatures.md#mediatypes)
- [Name](generated_client.ChannelFeatures.md#name)
- [SupportsContentDownloading](generated_client.ChannelFeatures.md#supportscontentdownloading)
- [SupportsLatestMedia](generated_client.ChannelFeatures.md#supportslatestmedia)
- [SupportsSortOrderToggle](generated_client.ChannelFeatures.md#supportssortordertoggle)

## Properties

### AutoRefreshLevels

• `Optional` **AutoRefreshLevels**: ``null`` \| `number`

Gets or sets the automatic refresh levels.

**`memberof`** ChannelFeatures

#### Defined in

[generated-client/models/channel-features.ts:67](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/models/channel-features.ts#L67)

___

### CanFilter

• `Optional` **CanFilter**: `boolean`

Gets or sets a value indicating whether this instance can filter.

**`memberof`** ChannelFeatures

#### Defined in

[generated-client/models/channel-features.ts:91](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/models/channel-features.ts#L91)

___

### CanSearch

• `Optional` **CanSearch**: `boolean`

Gets or sets a value indicating whether this instance can search.

**`memberof`** ChannelFeatures

#### Defined in

[generated-client/models/channel-features.ts:43](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/models/channel-features.ts#L43)

___

### ContentTypes

• `Optional` **ContentTypes**: [`ChannelMediaContentType`](../enums/generated_client.ChannelMediaContentType.md)[]

Gets or sets the content types.

**`memberof`** ChannelFeatures

#### Defined in

[generated-client/models/channel-features.ts:55](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/models/channel-features.ts#L55)

___

### DefaultSortFields

• `Optional` **DefaultSortFields**: [`ChannelItemSortField`](../enums/generated_client.ChannelItemSortField.md)[]

Gets or sets the default sort orders.

**`memberof`** ChannelFeatures

#### Defined in

[generated-client/models/channel-features.ts:73](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/models/channel-features.ts#L73)

___

### Id

• `Optional` **Id**: `string`

Gets or sets the identifier.

**`memberof`** ChannelFeatures

#### Defined in

[generated-client/models/channel-features.ts:37](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/models/channel-features.ts#L37)

___

### MaxPageSize

• `Optional` **MaxPageSize**: ``null`` \| `number`

Gets or sets the maximum number of records the channel allows retrieving at a time.

**`memberof`** ChannelFeatures

#### Defined in

[generated-client/models/channel-features.ts:61](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/models/channel-features.ts#L61)

___

### MediaTypes

• `Optional` **MediaTypes**: [`ChannelMediaType`](../enums/generated_client.ChannelMediaType.md)[]

Gets or sets the media types.

**`memberof`** ChannelFeatures

#### Defined in

[generated-client/models/channel-features.ts:49](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/models/channel-features.ts#L49)

___

### Name

• `Optional` **Name**: `string`

Gets or sets the name.

**`memberof`** ChannelFeatures

#### Defined in

[generated-client/models/channel-features.ts:31](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/models/channel-features.ts#L31)

___

### SupportsContentDownloading

• `Optional` **SupportsContentDownloading**: `boolean`

Gets or sets a value indicating whether [supports content downloading].

**`memberof`** ChannelFeatures

#### Defined in

[generated-client/models/channel-features.ts:97](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/models/channel-features.ts#L97)

___

### SupportsLatestMedia

• `Optional` **SupportsLatestMedia**: `boolean`

Gets or sets a value indicating whether [supports latest media].

**`memberof`** ChannelFeatures

#### Defined in

[generated-client/models/channel-features.ts:85](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/models/channel-features.ts#L85)

___

### SupportsSortOrderToggle

• `Optional` **SupportsSortOrderToggle**: `boolean`

Gets or sets a value indicating whether a sort ascending/descending toggle is supported.

**`memberof`** ChannelFeatures

#### Defined in

[generated-client/models/channel-features.ts:79](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/models/channel-features.ts#L79)
