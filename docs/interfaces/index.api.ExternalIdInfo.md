[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / [api](../modules/index.api.md) / ExternalIdInfo

# Interface: ExternalIdInfo

[index](../modules/index.md).[api](../modules/index.api.md).ExternalIdInfo

Represents the external id information for serialization to the client.

**`export`**

**`interface`** ExternalIdInfo

## Table of contents

### Properties

- [Key](index.api.ExternalIdInfo.md#key)
- [Name](index.api.ExternalIdInfo.md#name)
- [Type](index.api.ExternalIdInfo.md#type)
- [UrlFormatString](index.api.ExternalIdInfo.md#urlformatstring)

## Properties

### Key

• `Optional` **Key**: ``null`` \| `string`

Gets or sets the unique key for this id. This key should be unique across all providers.

**`memberof`** ExternalIdInfo

#### Defined in

[generated-client/models/external-id-info.ts:35](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/external-id-info.ts#L35)

___

### Name

• `Optional` **Name**: ``null`` \| `string`

Gets or sets the display name of the external id provider (IE: IMDB, MusicBrainz, etc).

**`memberof`** ExternalIdInfo

#### Defined in

[generated-client/models/external-id-info.ts:29](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/external-id-info.ts#L29)

___

### Type

• `Optional` **Type**: [`ExternalIdMediaType`](../enums/index.api.ExternalIdMediaType.md)

**`memberof`** ExternalIdInfo

#### Defined in

[generated-client/models/external-id-info.ts:41](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/external-id-info.ts#L41)

___

### UrlFormatString

• `Optional` **UrlFormatString**: ``null`` \| `string`

Gets or sets the URL format string.

**`memberof`** ExternalIdInfo

#### Defined in

[generated-client/models/external-id-info.ts:47](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/external-id-info.ts#L47)
