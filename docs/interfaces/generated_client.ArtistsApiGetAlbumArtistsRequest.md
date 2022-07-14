[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / ArtistsApiGetAlbumArtistsRequest

# Interface: ArtistsApiGetAlbumArtistsRequest

[generated-client](../modules/generated_client.md).ArtistsApiGetAlbumArtistsRequest

Request parameters for getAlbumArtists operation in ArtistsApi.

**`export`**

**`interface`** ArtistsApiGetAlbumArtistsRequest

## Table of contents

### Properties

- [enableImageTypes](generated_client.ArtistsApiGetAlbumArtistsRequest.md#enableimagetypes)
- [enableImages](generated_client.ArtistsApiGetAlbumArtistsRequest.md#enableimages)
- [enableTotalRecordCount](generated_client.ArtistsApiGetAlbumArtistsRequest.md#enabletotalrecordcount)
- [enableUserData](generated_client.ArtistsApiGetAlbumArtistsRequest.md#enableuserdata)
- [excludeItemTypes](generated_client.ArtistsApiGetAlbumArtistsRequest.md#excludeitemtypes)
- [fields](generated_client.ArtistsApiGetAlbumArtistsRequest.md#fields)
- [filters](generated_client.ArtistsApiGetAlbumArtistsRequest.md#filters)
- [genreIds](generated_client.ArtistsApiGetAlbumArtistsRequest.md#genreids)
- [genres](generated_client.ArtistsApiGetAlbumArtistsRequest.md#genres)
- [imageTypeLimit](generated_client.ArtistsApiGetAlbumArtistsRequest.md#imagetypelimit)
- [includeItemTypes](generated_client.ArtistsApiGetAlbumArtistsRequest.md#includeitemtypes)
- [isFavorite](generated_client.ArtistsApiGetAlbumArtistsRequest.md#isfavorite)
- [limit](generated_client.ArtistsApiGetAlbumArtistsRequest.md#limit)
- [mediaTypes](generated_client.ArtistsApiGetAlbumArtistsRequest.md#mediatypes)
- [minCommunityRating](generated_client.ArtistsApiGetAlbumArtistsRequest.md#mincommunityrating)
- [nameLessThan](generated_client.ArtistsApiGetAlbumArtistsRequest.md#namelessthan)
- [nameStartsWith](generated_client.ArtistsApiGetAlbumArtistsRequest.md#namestartswith)
- [nameStartsWithOrGreater](generated_client.ArtistsApiGetAlbumArtistsRequest.md#namestartswithorgreater)
- [officialRatings](generated_client.ArtistsApiGetAlbumArtistsRequest.md#officialratings)
- [parentId](generated_client.ArtistsApiGetAlbumArtistsRequest.md#parentid)
- [person](generated_client.ArtistsApiGetAlbumArtistsRequest.md#person)
- [personIds](generated_client.ArtistsApiGetAlbumArtistsRequest.md#personids)
- [personTypes](generated_client.ArtistsApiGetAlbumArtistsRequest.md#persontypes)
- [searchTerm](generated_client.ArtistsApiGetAlbumArtistsRequest.md#searchterm)
- [sortBy](generated_client.ArtistsApiGetAlbumArtistsRequest.md#sortby)
- [sortOrder](generated_client.ArtistsApiGetAlbumArtistsRequest.md#sortorder)
- [startIndex](generated_client.ArtistsApiGetAlbumArtistsRequest.md#startindex)
- [studioIds](generated_client.ArtistsApiGetAlbumArtistsRequest.md#studioids)
- [studios](generated_client.ArtistsApiGetAlbumArtistsRequest.md#studios)
- [tags](generated_client.ArtistsApiGetAlbumArtistsRequest.md#tags)
- [userId](generated_client.ArtistsApiGetAlbumArtistsRequest.md#userid)
- [years](generated_client.ArtistsApiGetAlbumArtistsRequest.md#years)

## Properties

### enableImageTypes

• `Optional` `Readonly` **enableImageTypes**: [`ImageType`](../enums/generated_client.ImageType.md)[]

Optional. The image types to include in the output.

**`memberof`** ArtistsApiGetAlbumArtists

#### Defined in

[generated-client/api/artists-api.ts:820](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/artists-api.ts#L820)

___

### enableImages

• `Optional` `Readonly` **enableImages**: `boolean`

Optional, include image information in output.

**`memberof`** ArtistsApiGetAlbumArtists

#### Defined in

[generated-client/api/artists-api.ts:904](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/artists-api.ts#L904)

___

### enableTotalRecordCount

• `Optional` `Readonly` **enableTotalRecordCount**: `boolean`

Total record count.

**`memberof`** ArtistsApiGetAlbumArtists

#### Defined in

[generated-client/api/artists-api.ts:911](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/artists-api.ts#L911)

___

### enableUserData

• `Optional` `Readonly` **enableUserData**: `boolean`

Optional, include user data.

**`memberof`** ArtistsApiGetAlbumArtists

#### Defined in

[generated-client/api/artists-api.ts:806](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/artists-api.ts#L806)

___

### excludeItemTypes

• `Optional` `Readonly` **excludeItemTypes**: [`BaseItemKind`](../enums/generated_client.BaseItemKind.md)[]

Optional. If specified, results will be filtered out based on item type. This allows multiple, comma delimited.

**`memberof`** ArtistsApiGetAlbumArtists

#### Defined in

[generated-client/api/artists-api.ts:736](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/artists-api.ts#L736)

___

### fields

• `Optional` `Readonly` **fields**: [`ItemFields`](../enums/generated_client.ItemFields.md)[]

Optional. Specify additional fields of information to return in the output.

**`memberof`** ArtistsApiGetAlbumArtists

#### Defined in

[generated-client/api/artists-api.ts:729](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/artists-api.ts#L729)

___

### filters

• `Optional` `Readonly` **filters**: [`ItemFilter`](../enums/generated_client.ItemFilter.md)[]

Optional. Specify additional filters to apply.

**`memberof`** ArtistsApiGetAlbumArtists

#### Defined in

[generated-client/api/artists-api.ts:750](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/artists-api.ts#L750)

___

### genreIds

• `Optional` `Readonly` **genreIds**: `string`[]

Optional. If specified, results will be filtered based on genre id. This allows multiple, pipe delimited.

**`memberof`** ArtistsApiGetAlbumArtists

#### Defined in

[generated-client/api/artists-api.ts:778](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/artists-api.ts#L778)

___

### genres

• `Optional` `Readonly` **genres**: `string`[]

Optional. If specified, results will be filtered based on genre. This allows multiple, pipe delimited.

**`memberof`** ArtistsApiGetAlbumArtists

#### Defined in

[generated-client/api/artists-api.ts:771](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/artists-api.ts#L771)

___

### imageTypeLimit

• `Optional` `Readonly` **imageTypeLimit**: `number`

Optional, the max number of images to return, per image type.

**`memberof`** ArtistsApiGetAlbumArtists

#### Defined in

[generated-client/api/artists-api.ts:813](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/artists-api.ts#L813)

___

### includeItemTypes

• `Optional` `Readonly` **includeItemTypes**: [`BaseItemKind`](../enums/generated_client.BaseItemKind.md)[]

Optional. If specified, results will be filtered based on item type. This allows multiple, comma delimited.

**`memberof`** ArtistsApiGetAlbumArtists

#### Defined in

[generated-client/api/artists-api.ts:743](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/artists-api.ts#L743)

___

### isFavorite

• `Optional` `Readonly` **isFavorite**: `boolean`

Optional filter by items that are marked as favorite, or not.

**`memberof`** ArtistsApiGetAlbumArtists

#### Defined in

[generated-client/api/artists-api.ts:757](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/artists-api.ts#L757)

___

### limit

• `Optional` `Readonly` **limit**: `number`

Optional. The maximum number of records to return.

**`memberof`** ArtistsApiGetAlbumArtists

#### Defined in

[generated-client/api/artists-api.ts:708](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/artists-api.ts#L708)

___

### mediaTypes

• `Optional` `Readonly` **mediaTypes**: `string`[]

Optional filter by MediaType. Allows multiple, comma delimited.

**`memberof`** ArtistsApiGetAlbumArtists

#### Defined in

[generated-client/api/artists-api.ts:764](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/artists-api.ts#L764)

___

### minCommunityRating

• `Optional` `Readonly` **minCommunityRating**: `number`

Optional filter by minimum community rating.

**`memberof`** ArtistsApiGetAlbumArtists

#### Defined in

[generated-client/api/artists-api.ts:694](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/artists-api.ts#L694)

___

### nameLessThan

• `Optional` `Readonly` **nameLessThan**: `string`

Optional filter by items whose name is equally or lesser than a given input string.

**`memberof`** ArtistsApiGetAlbumArtists

#### Defined in

[generated-client/api/artists-api.ts:883](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/artists-api.ts#L883)

___

### nameStartsWith

• `Optional` `Readonly` **nameStartsWith**: `string`

Optional filter by items whose name is sorted equally than a given input string.

**`memberof`** ArtistsApiGetAlbumArtists

#### Defined in

[generated-client/api/artists-api.ts:876](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/artists-api.ts#L876)

___

### nameStartsWithOrGreater

• `Optional` `Readonly` **nameStartsWithOrGreater**: `string`

Optional filter by items whose name is sorted equally or greater than a given input string.

**`memberof`** ArtistsApiGetAlbumArtists

#### Defined in

[generated-client/api/artists-api.ts:869](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/artists-api.ts#L869)

___

### officialRatings

• `Optional` `Readonly` **officialRatings**: `string`[]

Optional. If specified, results will be filtered based on OfficialRating. This allows multiple, pipe delimited.

**`memberof`** ArtistsApiGetAlbumArtists

#### Defined in

[generated-client/api/artists-api.ts:785](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/artists-api.ts#L785)

___

### parentId

• `Optional` `Readonly` **parentId**: `string`

Specify this to localize the search to a specific item or folder. Omit to use the root.

**`memberof`** ArtistsApiGetAlbumArtists

#### Defined in

[generated-client/api/artists-api.ts:722](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/artists-api.ts#L722)

___

### person

• `Optional` `Readonly` **person**: `string`

Optional. If specified, results will be filtered to include only those containing the specified person.

**`memberof`** ArtistsApiGetAlbumArtists

#### Defined in

[generated-client/api/artists-api.ts:827](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/artists-api.ts#L827)

___

### personIds

• `Optional` `Readonly` **personIds**: `string`[]

Optional. If specified, results will be filtered to include only those containing the specified person ids.

**`memberof`** ArtistsApiGetAlbumArtists

#### Defined in

[generated-client/api/artists-api.ts:834](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/artists-api.ts#L834)

___

### personTypes

• `Optional` `Readonly` **personTypes**: `string`[]

Optional. If specified, along with Person, results will be filtered to include only those containing the specified person and PersonType. Allows multiple, comma-delimited.

**`memberof`** ArtistsApiGetAlbumArtists

#### Defined in

[generated-client/api/artists-api.ts:841](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/artists-api.ts#L841)

___

### searchTerm

• `Optional` `Readonly` **searchTerm**: `string`

Optional. Search term.

**`memberof`** ArtistsApiGetAlbumArtists

#### Defined in

[generated-client/api/artists-api.ts:715](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/artists-api.ts#L715)

___

### sortBy

• `Optional` `Readonly` **sortBy**: `string`[]

Optional. Specify one or more sort orders, comma delimited.

**`memberof`** ArtistsApiGetAlbumArtists

#### Defined in

[generated-client/api/artists-api.ts:890](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/artists-api.ts#L890)

___

### sortOrder

• `Optional` `Readonly` **sortOrder**: [`SortOrder`](../enums/generated_client.SortOrder.md)[]

Sort Order - Ascending,Descending.

**`memberof`** ArtistsApiGetAlbumArtists

#### Defined in

[generated-client/api/artists-api.ts:897](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/artists-api.ts#L897)

___

### startIndex

• `Optional` `Readonly` **startIndex**: `number`

Optional. The record index to start at. All items with a lower index will be dropped from the results.

**`memberof`** ArtistsApiGetAlbumArtists

#### Defined in

[generated-client/api/artists-api.ts:701](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/artists-api.ts#L701)

___

### studioIds

• `Optional` `Readonly` **studioIds**: `string`[]

Optional. If specified, results will be filtered based on studio id. This allows multiple, pipe delimited.

**`memberof`** ArtistsApiGetAlbumArtists

#### Defined in

[generated-client/api/artists-api.ts:855](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/artists-api.ts#L855)

___

### studios

• `Optional` `Readonly` **studios**: `string`[]

Optional. If specified, results will be filtered based on studio. This allows multiple, pipe delimited.

**`memberof`** ArtistsApiGetAlbumArtists

#### Defined in

[generated-client/api/artists-api.ts:848](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/artists-api.ts#L848)

___

### tags

• `Optional` `Readonly` **tags**: `string`[]

Optional. If specified, results will be filtered based on tag. This allows multiple, pipe delimited.

**`memberof`** ArtistsApiGetAlbumArtists

#### Defined in

[generated-client/api/artists-api.ts:792](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/artists-api.ts#L792)

___

### userId

• `Optional` `Readonly` **userId**: `string`

User id.

**`memberof`** ArtistsApiGetAlbumArtists

#### Defined in

[generated-client/api/artists-api.ts:862](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/artists-api.ts#L862)

___

### years

• `Optional` `Readonly` **years**: `number`[]

Optional. If specified, results will be filtered based on production year. This allows multiple, comma delimited.

**`memberof`** ArtistsApiGetAlbumArtists

#### Defined in

[generated-client/api/artists-api.ts:799](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/artists-api.ts#L799)
