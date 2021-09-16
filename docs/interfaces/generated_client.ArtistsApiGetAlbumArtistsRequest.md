[jellyfin-sdk-typescript](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / ArtistsApiGetAlbumArtistsRequest

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

[generated-client/api/artists-api.ts:788](https://github.com/thornbill/jellyfin-sdk-typescript/blob/644c849/src/generated-client/api/artists-api.ts#L788)

___

### enableImages

• `Optional` `Readonly` **enableImages**: `boolean`

Optional, include image information in output.

**`memberof`** ArtistsApiGetAlbumArtists

#### Defined in

[generated-client/api/artists-api.ts:858](https://github.com/thornbill/jellyfin-sdk-typescript/blob/644c849/src/generated-client/api/artists-api.ts#L858)

___

### enableTotalRecordCount

• `Optional` `Readonly` **enableTotalRecordCount**: `boolean`

Total record count.

**`memberof`** ArtistsApiGetAlbumArtists

#### Defined in

[generated-client/api/artists-api.ts:865](https://github.com/thornbill/jellyfin-sdk-typescript/blob/644c849/src/generated-client/api/artists-api.ts#L865)

___

### enableUserData

• `Optional` `Readonly` **enableUserData**: `boolean`

Optional, include user data.

**`memberof`** ArtistsApiGetAlbumArtists

#### Defined in

[generated-client/api/artists-api.ts:774](https://github.com/thornbill/jellyfin-sdk-typescript/blob/644c849/src/generated-client/api/artists-api.ts#L774)

___

### excludeItemTypes

• `Optional` `Readonly` **excludeItemTypes**: `string`[]

Optional. If specified, results will be filtered out based on item type. This allows multiple, comma delimited.

**`memberof`** ArtistsApiGetAlbumArtists

#### Defined in

[generated-client/api/artists-api.ts:704](https://github.com/thornbill/jellyfin-sdk-typescript/blob/644c849/src/generated-client/api/artists-api.ts#L704)

___

### fields

• `Optional` `Readonly` **fields**: [`ItemFields`](../enums/generated_client.ItemFields.md)[]

Optional. Specify additional fields of information to return in the output.

**`memberof`** ArtistsApiGetAlbumArtists

#### Defined in

[generated-client/api/artists-api.ts:697](https://github.com/thornbill/jellyfin-sdk-typescript/blob/644c849/src/generated-client/api/artists-api.ts#L697)

___

### filters

• `Optional` `Readonly` **filters**: [`ItemFilter`](../enums/generated_client.ItemFilter.md)[]

Optional. Specify additional filters to apply.

**`memberof`** ArtistsApiGetAlbumArtists

#### Defined in

[generated-client/api/artists-api.ts:718](https://github.com/thornbill/jellyfin-sdk-typescript/blob/644c849/src/generated-client/api/artists-api.ts#L718)

___

### genreIds

• `Optional` `Readonly` **genreIds**: `string`[]

Optional. If specified, results will be filtered based on genre id. This allows multiple, pipe delimited.

**`memberof`** ArtistsApiGetAlbumArtists

#### Defined in

[generated-client/api/artists-api.ts:746](https://github.com/thornbill/jellyfin-sdk-typescript/blob/644c849/src/generated-client/api/artists-api.ts#L746)

___

### genres

• `Optional` `Readonly` **genres**: `string`[]

Optional. If specified, results will be filtered based on genre. This allows multiple, pipe delimited.

**`memberof`** ArtistsApiGetAlbumArtists

#### Defined in

[generated-client/api/artists-api.ts:739](https://github.com/thornbill/jellyfin-sdk-typescript/blob/644c849/src/generated-client/api/artists-api.ts#L739)

___

### imageTypeLimit

• `Optional` `Readonly` **imageTypeLimit**: `number`

Optional, the max number of images to return, per image type.

**`memberof`** ArtistsApiGetAlbumArtists

#### Defined in

[generated-client/api/artists-api.ts:781](https://github.com/thornbill/jellyfin-sdk-typescript/blob/644c849/src/generated-client/api/artists-api.ts#L781)

___

### includeItemTypes

• `Optional` `Readonly` **includeItemTypes**: `string`[]

Optional. If specified, results will be filtered based on item type. This allows multiple, comma delimited.

**`memberof`** ArtistsApiGetAlbumArtists

#### Defined in

[generated-client/api/artists-api.ts:711](https://github.com/thornbill/jellyfin-sdk-typescript/blob/644c849/src/generated-client/api/artists-api.ts#L711)

___

### isFavorite

• `Optional` `Readonly` **isFavorite**: `boolean`

Optional filter by items that are marked as favorite, or not.

**`memberof`** ArtistsApiGetAlbumArtists

#### Defined in

[generated-client/api/artists-api.ts:725](https://github.com/thornbill/jellyfin-sdk-typescript/blob/644c849/src/generated-client/api/artists-api.ts#L725)

___

### limit

• `Optional` `Readonly` **limit**: `number`

Optional. The maximum number of records to return.

**`memberof`** ArtistsApiGetAlbumArtists

#### Defined in

[generated-client/api/artists-api.ts:676](https://github.com/thornbill/jellyfin-sdk-typescript/blob/644c849/src/generated-client/api/artists-api.ts#L676)

___

### mediaTypes

• `Optional` `Readonly` **mediaTypes**: `string`[]

Optional filter by MediaType. Allows multiple, comma delimited.

**`memberof`** ArtistsApiGetAlbumArtists

#### Defined in

[generated-client/api/artists-api.ts:732](https://github.com/thornbill/jellyfin-sdk-typescript/blob/644c849/src/generated-client/api/artists-api.ts#L732)

___

### minCommunityRating

• `Optional` `Readonly` **minCommunityRating**: `number`

Optional filter by minimum community rating.

**`memberof`** ArtistsApiGetAlbumArtists

#### Defined in

[generated-client/api/artists-api.ts:662](https://github.com/thornbill/jellyfin-sdk-typescript/blob/644c849/src/generated-client/api/artists-api.ts#L662)

___

### nameLessThan

• `Optional` `Readonly` **nameLessThan**: `string`

Optional filter by items whose name is equally or lesser than a given input string.

**`memberof`** ArtistsApiGetAlbumArtists

#### Defined in

[generated-client/api/artists-api.ts:851](https://github.com/thornbill/jellyfin-sdk-typescript/blob/644c849/src/generated-client/api/artists-api.ts#L851)

___

### nameStartsWith

• `Optional` `Readonly` **nameStartsWith**: `string`

Optional filter by items whose name is sorted equally than a given input string.

**`memberof`** ArtistsApiGetAlbumArtists

#### Defined in

[generated-client/api/artists-api.ts:844](https://github.com/thornbill/jellyfin-sdk-typescript/blob/644c849/src/generated-client/api/artists-api.ts#L844)

___

### nameStartsWithOrGreater

• `Optional` `Readonly` **nameStartsWithOrGreater**: `string`

Optional filter by items whose name is sorted equally or greater than a given input string.

**`memberof`** ArtistsApiGetAlbumArtists

#### Defined in

[generated-client/api/artists-api.ts:837](https://github.com/thornbill/jellyfin-sdk-typescript/blob/644c849/src/generated-client/api/artists-api.ts#L837)

___

### officialRatings

• `Optional` `Readonly` **officialRatings**: `string`[]

Optional. If specified, results will be filtered based on OfficialRating. This allows multiple, pipe delimited.

**`memberof`** ArtistsApiGetAlbumArtists

#### Defined in

[generated-client/api/artists-api.ts:753](https://github.com/thornbill/jellyfin-sdk-typescript/blob/644c849/src/generated-client/api/artists-api.ts#L753)

___

### parentId

• `Optional` `Readonly` **parentId**: `string`

Specify this to localize the search to a specific item or folder. Omit to use the root.

**`memberof`** ArtistsApiGetAlbumArtists

#### Defined in

[generated-client/api/artists-api.ts:690](https://github.com/thornbill/jellyfin-sdk-typescript/blob/644c849/src/generated-client/api/artists-api.ts#L690)

___

### person

• `Optional` `Readonly` **person**: `string`

Optional. If specified, results will be filtered to include only those containing the specified person.

**`memberof`** ArtistsApiGetAlbumArtists

#### Defined in

[generated-client/api/artists-api.ts:795](https://github.com/thornbill/jellyfin-sdk-typescript/blob/644c849/src/generated-client/api/artists-api.ts#L795)

___

### personIds

• `Optional` `Readonly` **personIds**: `string`[]

Optional. If specified, results will be filtered to include only those containing the specified person ids.

**`memberof`** ArtistsApiGetAlbumArtists

#### Defined in

[generated-client/api/artists-api.ts:802](https://github.com/thornbill/jellyfin-sdk-typescript/blob/644c849/src/generated-client/api/artists-api.ts#L802)

___

### personTypes

• `Optional` `Readonly` **personTypes**: `string`[]

Optional. If specified, along with Person, results will be filtered to include only those containing the specified person and PersonType. Allows multiple, comma-delimited.

**`memberof`** ArtistsApiGetAlbumArtists

#### Defined in

[generated-client/api/artists-api.ts:809](https://github.com/thornbill/jellyfin-sdk-typescript/blob/644c849/src/generated-client/api/artists-api.ts#L809)

___

### searchTerm

• `Optional` `Readonly` **searchTerm**: `string`

Optional. Search term.

**`memberof`** ArtistsApiGetAlbumArtists

#### Defined in

[generated-client/api/artists-api.ts:683](https://github.com/thornbill/jellyfin-sdk-typescript/blob/644c849/src/generated-client/api/artists-api.ts#L683)

___

### startIndex

• `Optional` `Readonly` **startIndex**: `number`

Optional. The record index to start at. All items with a lower index will be dropped from the results.

**`memberof`** ArtistsApiGetAlbumArtists

#### Defined in

[generated-client/api/artists-api.ts:669](https://github.com/thornbill/jellyfin-sdk-typescript/blob/644c849/src/generated-client/api/artists-api.ts#L669)

___

### studioIds

• `Optional` `Readonly` **studioIds**: `string`[]

Optional. If specified, results will be filtered based on studio id. This allows multiple, pipe delimited.

**`memberof`** ArtistsApiGetAlbumArtists

#### Defined in

[generated-client/api/artists-api.ts:823](https://github.com/thornbill/jellyfin-sdk-typescript/blob/644c849/src/generated-client/api/artists-api.ts#L823)

___

### studios

• `Optional` `Readonly` **studios**: `string`[]

Optional. If specified, results will be filtered based on studio. This allows multiple, pipe delimited.

**`memberof`** ArtistsApiGetAlbumArtists

#### Defined in

[generated-client/api/artists-api.ts:816](https://github.com/thornbill/jellyfin-sdk-typescript/blob/644c849/src/generated-client/api/artists-api.ts#L816)

___

### tags

• `Optional` `Readonly` **tags**: `string`[]

Optional. If specified, results will be filtered based on tag. This allows multiple, pipe delimited.

**`memberof`** ArtistsApiGetAlbumArtists

#### Defined in

[generated-client/api/artists-api.ts:760](https://github.com/thornbill/jellyfin-sdk-typescript/blob/644c849/src/generated-client/api/artists-api.ts#L760)

___

### userId

• `Optional` `Readonly` **userId**: `string`

User id.

**`memberof`** ArtistsApiGetAlbumArtists

#### Defined in

[generated-client/api/artists-api.ts:830](https://github.com/thornbill/jellyfin-sdk-typescript/blob/644c849/src/generated-client/api/artists-api.ts#L830)

___

### years

• `Optional` `Readonly` **years**: `number`[]

Optional. If specified, results will be filtered based on production year. This allows multiple, comma delimited.

**`memberof`** ArtistsApiGetAlbumArtists

#### Defined in

[generated-client/api/artists-api.ts:767](https://github.com/thornbill/jellyfin-sdk-typescript/blob/644c849/src/generated-client/api/artists-api.ts#L767)
