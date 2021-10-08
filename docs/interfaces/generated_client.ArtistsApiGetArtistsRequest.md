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

[generated-client/api/artists-api.ts:1026](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/artists-api.ts#L1026)

___

### enableImages

• `Optional` `Readonly` **enableImages**: `boolean`

Optional, include image information in output.

**`memberof`** ArtistsApiGetArtists

#### Defined in

[generated-client/api/artists-api.ts:1096](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/artists-api.ts#L1096)

___

### enableTotalRecordCount

• `Optional` `Readonly` **enableTotalRecordCount**: `boolean`

Total record count.

**`memberof`** ArtistsApiGetArtists

#### Defined in

[generated-client/api/artists-api.ts:1103](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/artists-api.ts#L1103)

___

### enableUserData

• `Optional` `Readonly` **enableUserData**: `boolean`

Optional, include user data.

**`memberof`** ArtistsApiGetArtists

#### Defined in

[generated-client/api/artists-api.ts:1012](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/artists-api.ts#L1012)

___

### excludeItemTypes

• `Optional` `Readonly` **excludeItemTypes**: `string`[]

Optional. If specified, results will be filtered out based on item type. This allows multiple, comma delimited.

**`memberof`** ArtistsApiGetArtists

#### Defined in

[generated-client/api/artists-api.ts:942](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/artists-api.ts#L942)

___

### fields

• `Optional` `Readonly` **fields**: [`ItemFields`](../enums/generated_client.ItemFields.md)[]

Optional. Specify additional fields of information to return in the output.

**`memberof`** ArtistsApiGetArtists

#### Defined in

[generated-client/api/artists-api.ts:935](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/artists-api.ts#L935)

___

### filters

• `Optional` `Readonly` **filters**: [`ItemFilter`](../enums/generated_client.ItemFilter.md)[]

Optional. Specify additional filters to apply.

**`memberof`** ArtistsApiGetArtists

#### Defined in

[generated-client/api/artists-api.ts:956](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/artists-api.ts#L956)

___

### genreIds

• `Optional` `Readonly` **genreIds**: `string`[]

Optional. If specified, results will be filtered based on genre id. This allows multiple, pipe delimited.

**`memberof`** ArtistsApiGetArtists

#### Defined in

[generated-client/api/artists-api.ts:984](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/artists-api.ts#L984)

___

### genres

• `Optional` `Readonly` **genres**: `string`[]

Optional. If specified, results will be filtered based on genre. This allows multiple, pipe delimited.

**`memberof`** ArtistsApiGetArtists

#### Defined in

[generated-client/api/artists-api.ts:977](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/artists-api.ts#L977)

___

### imageTypeLimit

• `Optional` `Readonly` **imageTypeLimit**: `number`

Optional, the max number of images to return, per image type.

**`memberof`** ArtistsApiGetArtists

#### Defined in

[generated-client/api/artists-api.ts:1019](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/artists-api.ts#L1019)

___

### includeItemTypes

• `Optional` `Readonly` **includeItemTypes**: `string`[]

Optional. If specified, results will be filtered based on item type. This allows multiple, comma delimited.

**`memberof`** ArtistsApiGetArtists

#### Defined in

[generated-client/api/artists-api.ts:949](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/artists-api.ts#L949)

___

### isFavorite

• `Optional` `Readonly` **isFavorite**: `boolean`

Optional filter by items that are marked as favorite, or not.

**`memberof`** ArtistsApiGetArtists

#### Defined in

[generated-client/api/artists-api.ts:963](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/artists-api.ts#L963)

___

### limit

• `Optional` `Readonly` **limit**: `number`

Optional. The maximum number of records to return.

**`memberof`** ArtistsApiGetArtists

#### Defined in

[generated-client/api/artists-api.ts:914](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/artists-api.ts#L914)

___

### mediaTypes

• `Optional` `Readonly` **mediaTypes**: `string`[]

Optional filter by MediaType. Allows multiple, comma delimited.

**`memberof`** ArtistsApiGetArtists

#### Defined in

[generated-client/api/artists-api.ts:970](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/artists-api.ts#L970)

___

### minCommunityRating

• `Optional` `Readonly` **minCommunityRating**: `number`

Optional filter by minimum community rating.

**`memberof`** ArtistsApiGetArtists

#### Defined in

[generated-client/api/artists-api.ts:900](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/artists-api.ts#L900)

___

### nameLessThan

• `Optional` `Readonly` **nameLessThan**: `string`

Optional filter by items whose name is equally or lesser than a given input string.

**`memberof`** ArtistsApiGetArtists

#### Defined in

[generated-client/api/artists-api.ts:1089](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/artists-api.ts#L1089)

___

### nameStartsWith

• `Optional` `Readonly` **nameStartsWith**: `string`

Optional filter by items whose name is sorted equally than a given input string.

**`memberof`** ArtistsApiGetArtists

#### Defined in

[generated-client/api/artists-api.ts:1082](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/artists-api.ts#L1082)

___

### nameStartsWithOrGreater

• `Optional` `Readonly` **nameStartsWithOrGreater**: `string`

Optional filter by items whose name is sorted equally or greater than a given input string.

**`memberof`** ArtistsApiGetArtists

#### Defined in

[generated-client/api/artists-api.ts:1075](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/artists-api.ts#L1075)

___

### officialRatings

• `Optional` `Readonly` **officialRatings**: `string`[]

Optional. If specified, results will be filtered based on OfficialRating. This allows multiple, pipe delimited.

**`memberof`** ArtistsApiGetArtists

#### Defined in

[generated-client/api/artists-api.ts:991](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/artists-api.ts#L991)

___

### parentId

• `Optional` `Readonly` **parentId**: `string`

Specify this to localize the search to a specific item or folder. Omit to use the root.

**`memberof`** ArtistsApiGetArtists

#### Defined in

[generated-client/api/artists-api.ts:928](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/artists-api.ts#L928)

___

### person

• `Optional` `Readonly` **person**: `string`

Optional. If specified, results will be filtered to include only those containing the specified person.

**`memberof`** ArtistsApiGetArtists

#### Defined in

[generated-client/api/artists-api.ts:1033](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/artists-api.ts#L1033)

___

### personIds

• `Optional` `Readonly` **personIds**: `string`[]

Optional. If specified, results will be filtered to include only those containing the specified person ids.

**`memberof`** ArtistsApiGetArtists

#### Defined in

[generated-client/api/artists-api.ts:1040](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/artists-api.ts#L1040)

___

### personTypes

• `Optional` `Readonly` **personTypes**: `string`[]

Optional. If specified, along with Person, results will be filtered to include only those containing the specified person and PersonType. Allows multiple, comma-delimited.

**`memberof`** ArtistsApiGetArtists

#### Defined in

[generated-client/api/artists-api.ts:1047](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/artists-api.ts#L1047)

___

### searchTerm

• `Optional` `Readonly` **searchTerm**: `string`

Optional. Search term.

**`memberof`** ArtistsApiGetArtists

#### Defined in

[generated-client/api/artists-api.ts:921](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/artists-api.ts#L921)

___

### startIndex

• `Optional` `Readonly` **startIndex**: `number`

Optional. The record index to start at. All items with a lower index will be dropped from the results.

**`memberof`** ArtistsApiGetArtists

#### Defined in

[generated-client/api/artists-api.ts:907](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/artists-api.ts#L907)

___

### studioIds

• `Optional` `Readonly` **studioIds**: `string`[]

Optional. If specified, results will be filtered based on studio id. This allows multiple, pipe delimited.

**`memberof`** ArtistsApiGetArtists

#### Defined in

[generated-client/api/artists-api.ts:1061](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/artists-api.ts#L1061)

___

### studios

• `Optional` `Readonly` **studios**: `string`[]

Optional. If specified, results will be filtered based on studio. This allows multiple, pipe delimited.

**`memberof`** ArtistsApiGetArtists

#### Defined in

[generated-client/api/artists-api.ts:1054](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/artists-api.ts#L1054)

___

### tags

• `Optional` `Readonly` **tags**: `string`[]

Optional. If specified, results will be filtered based on tag. This allows multiple, pipe delimited.

**`memberof`** ArtistsApiGetArtists

#### Defined in

[generated-client/api/artists-api.ts:998](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/artists-api.ts#L998)

___

### userId

• `Optional` `Readonly` **userId**: `string`

User id.

**`memberof`** ArtistsApiGetArtists

#### Defined in

[generated-client/api/artists-api.ts:1068](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/artists-api.ts#L1068)

___

### years

• `Optional` `Readonly` **years**: `number`[]

Optional. If specified, results will be filtered based on production year. This allows multiple, comma delimited.

**`memberof`** ArtistsApiGetArtists

#### Defined in

[generated-client/api/artists-api.ts:1005](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/artists-api.ts#L1005)
