[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / ArtistsApiGetArtistsRequest

# Interface: ArtistsApiGetArtistsRequest

[generated-client](../modules/generated_client.md).ArtistsApiGetArtistsRequest

Request parameters for getArtists operation in ArtistsApi.

**`export`**

**`interface`** ArtistsApiGetArtistsRequest

## Table of contents

### Properties

- [enableImageTypes](generated_client.ArtistsApiGetArtistsRequest.md#enableimagetypes)
- [enableImages](generated_client.ArtistsApiGetArtistsRequest.md#enableimages)
- [enableTotalRecordCount](generated_client.ArtistsApiGetArtistsRequest.md#enabletotalrecordcount)
- [enableUserData](generated_client.ArtistsApiGetArtistsRequest.md#enableuserdata)
- [excludeItemTypes](generated_client.ArtistsApiGetArtistsRequest.md#excludeitemtypes)
- [fields](generated_client.ArtistsApiGetArtistsRequest.md#fields)
- [filters](generated_client.ArtistsApiGetArtistsRequest.md#filters)
- [genreIds](generated_client.ArtistsApiGetArtistsRequest.md#genreids)
- [genres](generated_client.ArtistsApiGetArtistsRequest.md#genres)
- [imageTypeLimit](generated_client.ArtistsApiGetArtistsRequest.md#imagetypelimit)
- [includeItemTypes](generated_client.ArtistsApiGetArtistsRequest.md#includeitemtypes)
- [isFavorite](generated_client.ArtistsApiGetArtistsRequest.md#isfavorite)
- [limit](generated_client.ArtistsApiGetArtistsRequest.md#limit)
- [mediaTypes](generated_client.ArtistsApiGetArtistsRequest.md#mediatypes)
- [minCommunityRating](generated_client.ArtistsApiGetArtistsRequest.md#mincommunityrating)
- [nameLessThan](generated_client.ArtistsApiGetArtistsRequest.md#namelessthan)
- [nameStartsWith](generated_client.ArtistsApiGetArtistsRequest.md#namestartswith)
- [nameStartsWithOrGreater](generated_client.ArtistsApiGetArtistsRequest.md#namestartswithorgreater)
- [officialRatings](generated_client.ArtistsApiGetArtistsRequest.md#officialratings)
- [parentId](generated_client.ArtistsApiGetArtistsRequest.md#parentid)
- [person](generated_client.ArtistsApiGetArtistsRequest.md#person)
- [personIds](generated_client.ArtistsApiGetArtistsRequest.md#personids)
- [personTypes](generated_client.ArtistsApiGetArtistsRequest.md#persontypes)
- [searchTerm](generated_client.ArtistsApiGetArtistsRequest.md#searchterm)
- [sortBy](generated_client.ArtistsApiGetArtistsRequest.md#sortby)
- [sortOrder](generated_client.ArtistsApiGetArtistsRequest.md#sortorder)
- [startIndex](generated_client.ArtistsApiGetArtistsRequest.md#startindex)
- [studioIds](generated_client.ArtistsApiGetArtistsRequest.md#studioids)
- [studios](generated_client.ArtistsApiGetArtistsRequest.md#studios)
- [tags](generated_client.ArtistsApiGetArtistsRequest.md#tags)
- [userId](generated_client.ArtistsApiGetArtistsRequest.md#userid)
- [years](generated_client.ArtistsApiGetArtistsRequest.md#years)

## Properties

### enableImageTypes

• `Optional` `Readonly` **enableImageTypes**: [`ImageType`](../enums/generated_client.ImageType.md)[]

Optional. The image types to include in the output.

**`memberof`** ArtistsApiGetArtists

#### Defined in

[generated-client/api/artists-api.ts:1072](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/artists-api.ts#L1072)

___

### enableImages

• `Optional` `Readonly` **enableImages**: `boolean`

Optional, include image information in output.

**`memberof`** ArtistsApiGetArtists

#### Defined in

[generated-client/api/artists-api.ts:1156](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/artists-api.ts#L1156)

___

### enableTotalRecordCount

• `Optional` `Readonly` **enableTotalRecordCount**: `boolean`

Total record count.

**`memberof`** ArtistsApiGetArtists

#### Defined in

[generated-client/api/artists-api.ts:1163](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/artists-api.ts#L1163)

___

### enableUserData

• `Optional` `Readonly` **enableUserData**: `boolean`

Optional, include user data.

**`memberof`** ArtistsApiGetArtists

#### Defined in

[generated-client/api/artists-api.ts:1058](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/artists-api.ts#L1058)

___

### excludeItemTypes

• `Optional` `Readonly` **excludeItemTypes**: [`BaseItemKind`](../enums/generated_client.BaseItemKind.md)[]

Optional. If specified, results will be filtered out based on item type. This allows multiple, comma delimited.

**`memberof`** ArtistsApiGetArtists

#### Defined in

[generated-client/api/artists-api.ts:988](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/artists-api.ts#L988)

___

### fields

• `Optional` `Readonly` **fields**: [`ItemFields`](../enums/generated_client.ItemFields.md)[]

Optional. Specify additional fields of information to return in the output.

**`memberof`** ArtistsApiGetArtists

#### Defined in

[generated-client/api/artists-api.ts:981](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/artists-api.ts#L981)

___

### filters

• `Optional` `Readonly` **filters**: [`ItemFilter`](../enums/generated_client.ItemFilter.md)[]

Optional. Specify additional filters to apply.

**`memberof`** ArtistsApiGetArtists

#### Defined in

[generated-client/api/artists-api.ts:1002](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/artists-api.ts#L1002)

___

### genreIds

• `Optional` `Readonly` **genreIds**: `string`[]

Optional. If specified, results will be filtered based on genre id. This allows multiple, pipe delimited.

**`memberof`** ArtistsApiGetArtists

#### Defined in

[generated-client/api/artists-api.ts:1030](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/artists-api.ts#L1030)

___

### genres

• `Optional` `Readonly` **genres**: `string`[]

Optional. If specified, results will be filtered based on genre. This allows multiple, pipe delimited.

**`memberof`** ArtistsApiGetArtists

#### Defined in

[generated-client/api/artists-api.ts:1023](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/artists-api.ts#L1023)

___

### imageTypeLimit

• `Optional` `Readonly` **imageTypeLimit**: `number`

Optional, the max number of images to return, per image type.

**`memberof`** ArtistsApiGetArtists

#### Defined in

[generated-client/api/artists-api.ts:1065](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/artists-api.ts#L1065)

___

### includeItemTypes

• `Optional` `Readonly` **includeItemTypes**: [`BaseItemKind`](../enums/generated_client.BaseItemKind.md)[]

Optional. If specified, results will be filtered based on item type. This allows multiple, comma delimited.

**`memberof`** ArtistsApiGetArtists

#### Defined in

[generated-client/api/artists-api.ts:995](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/artists-api.ts#L995)

___

### isFavorite

• `Optional` `Readonly` **isFavorite**: `boolean`

Optional filter by items that are marked as favorite, or not.

**`memberof`** ArtistsApiGetArtists

#### Defined in

[generated-client/api/artists-api.ts:1009](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/artists-api.ts#L1009)

___

### limit

• `Optional` `Readonly` **limit**: `number`

Optional. The maximum number of records to return.

**`memberof`** ArtistsApiGetArtists

#### Defined in

[generated-client/api/artists-api.ts:960](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/artists-api.ts#L960)

___

### mediaTypes

• `Optional` `Readonly` **mediaTypes**: `string`[]

Optional filter by MediaType. Allows multiple, comma delimited.

**`memberof`** ArtistsApiGetArtists

#### Defined in

[generated-client/api/artists-api.ts:1016](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/artists-api.ts#L1016)

___

### minCommunityRating

• `Optional` `Readonly` **minCommunityRating**: `number`

Optional filter by minimum community rating.

**`memberof`** ArtistsApiGetArtists

#### Defined in

[generated-client/api/artists-api.ts:946](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/artists-api.ts#L946)

___

### nameLessThan

• `Optional` `Readonly` **nameLessThan**: `string`

Optional filter by items whose name is equally or lesser than a given input string.

**`memberof`** ArtistsApiGetArtists

#### Defined in

[generated-client/api/artists-api.ts:1135](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/artists-api.ts#L1135)

___

### nameStartsWith

• `Optional` `Readonly` **nameStartsWith**: `string`

Optional filter by items whose name is sorted equally than a given input string.

**`memberof`** ArtistsApiGetArtists

#### Defined in

[generated-client/api/artists-api.ts:1128](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/artists-api.ts#L1128)

___

### nameStartsWithOrGreater

• `Optional` `Readonly` **nameStartsWithOrGreater**: `string`

Optional filter by items whose name is sorted equally or greater than a given input string.

**`memberof`** ArtistsApiGetArtists

#### Defined in

[generated-client/api/artists-api.ts:1121](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/artists-api.ts#L1121)

___

### officialRatings

• `Optional` `Readonly` **officialRatings**: `string`[]

Optional. If specified, results will be filtered based on OfficialRating. This allows multiple, pipe delimited.

**`memberof`** ArtistsApiGetArtists

#### Defined in

[generated-client/api/artists-api.ts:1037](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/artists-api.ts#L1037)

___

### parentId

• `Optional` `Readonly` **parentId**: `string`

Specify this to localize the search to a specific item or folder. Omit to use the root.

**`memberof`** ArtistsApiGetArtists

#### Defined in

[generated-client/api/artists-api.ts:974](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/artists-api.ts#L974)

___

### person

• `Optional` `Readonly` **person**: `string`

Optional. If specified, results will be filtered to include only those containing the specified person.

**`memberof`** ArtistsApiGetArtists

#### Defined in

[generated-client/api/artists-api.ts:1079](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/artists-api.ts#L1079)

___

### personIds

• `Optional` `Readonly` **personIds**: `string`[]

Optional. If specified, results will be filtered to include only those containing the specified person ids.

**`memberof`** ArtistsApiGetArtists

#### Defined in

[generated-client/api/artists-api.ts:1086](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/artists-api.ts#L1086)

___

### personTypes

• `Optional` `Readonly` **personTypes**: `string`[]

Optional. If specified, along with Person, results will be filtered to include only those containing the specified person and PersonType. Allows multiple, comma-delimited.

**`memberof`** ArtistsApiGetArtists

#### Defined in

[generated-client/api/artists-api.ts:1093](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/artists-api.ts#L1093)

___

### searchTerm

• `Optional` `Readonly` **searchTerm**: `string`

Optional. Search term.

**`memberof`** ArtistsApiGetArtists

#### Defined in

[generated-client/api/artists-api.ts:967](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/artists-api.ts#L967)

___

### sortBy

• `Optional` `Readonly` **sortBy**: `string`[]

Optional. Specify one or more sort orders, comma delimited.

**`memberof`** ArtistsApiGetArtists

#### Defined in

[generated-client/api/artists-api.ts:1142](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/artists-api.ts#L1142)

___

### sortOrder

• `Optional` `Readonly` **sortOrder**: [`SortOrder`](../enums/generated_client.SortOrder.md)[]

Sort Order - Ascending,Descending.

**`memberof`** ArtistsApiGetArtists

#### Defined in

[generated-client/api/artists-api.ts:1149](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/artists-api.ts#L1149)

___

### startIndex

• `Optional` `Readonly` **startIndex**: `number`

Optional. The record index to start at. All items with a lower index will be dropped from the results.

**`memberof`** ArtistsApiGetArtists

#### Defined in

[generated-client/api/artists-api.ts:953](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/artists-api.ts#L953)

___

### studioIds

• `Optional` `Readonly` **studioIds**: `string`[]

Optional. If specified, results will be filtered based on studio id. This allows multiple, pipe delimited.

**`memberof`** ArtistsApiGetArtists

#### Defined in

[generated-client/api/artists-api.ts:1107](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/artists-api.ts#L1107)

___

### studios

• `Optional` `Readonly` **studios**: `string`[]

Optional. If specified, results will be filtered based on studio. This allows multiple, pipe delimited.

**`memberof`** ArtistsApiGetArtists

#### Defined in

[generated-client/api/artists-api.ts:1100](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/artists-api.ts#L1100)

___

### tags

• `Optional` `Readonly` **tags**: `string`[]

Optional. If specified, results will be filtered based on tag. This allows multiple, pipe delimited.

**`memberof`** ArtistsApiGetArtists

#### Defined in

[generated-client/api/artists-api.ts:1044](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/artists-api.ts#L1044)

___

### userId

• `Optional` `Readonly` **userId**: `string`

User id.

**`memberof`** ArtistsApiGetArtists

#### Defined in

[generated-client/api/artists-api.ts:1114](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/artists-api.ts#L1114)

___

### years

• `Optional` `Readonly` **years**: `number`[]

Optional. If specified, results will be filtered based on production year. This allows multiple, comma delimited.

**`memberof`** ArtistsApiGetArtists

#### Defined in

[generated-client/api/artists-api.ts:1051](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/artists-api.ts#L1051)
