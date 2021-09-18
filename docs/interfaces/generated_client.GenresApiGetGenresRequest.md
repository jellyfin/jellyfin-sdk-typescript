[jellyfin-sdk-typescript](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / GenresApiGetGenresRequest

# Interface: GenresApiGetGenresRequest

[generated-client](../modules/generated_client.md).GenresApiGetGenresRequest

Request parameters for getGenres operation in GenresApi.

**`export`**

**`interface`** GenresApiGetGenresRequest

## Table of contents

### Properties

- [enableImageTypes](generated_client.GenresApiGetGenresRequest.md#enableimagetypes)
- [enableImages](generated_client.GenresApiGetGenresRequest.md#enableimages)
- [enableTotalRecordCount](generated_client.GenresApiGetGenresRequest.md#enabletotalrecordcount)
- [excludeItemTypes](generated_client.GenresApiGetGenresRequest.md#excludeitemtypes)
- [fields](generated_client.GenresApiGetGenresRequest.md#fields)
- [imageTypeLimit](generated_client.GenresApiGetGenresRequest.md#imagetypelimit)
- [includeItemTypes](generated_client.GenresApiGetGenresRequest.md#includeitemtypes)
- [isFavorite](generated_client.GenresApiGetGenresRequest.md#isfavorite)
- [limit](generated_client.GenresApiGetGenresRequest.md#limit)
- [nameLessThan](generated_client.GenresApiGetGenresRequest.md#namelessthan)
- [nameStartsWith](generated_client.GenresApiGetGenresRequest.md#namestartswith)
- [nameStartsWithOrGreater](generated_client.GenresApiGetGenresRequest.md#namestartswithorgreater)
- [parentId](generated_client.GenresApiGetGenresRequest.md#parentid)
- [searchTerm](generated_client.GenresApiGetGenresRequest.md#searchterm)
- [startIndex](generated_client.GenresApiGetGenresRequest.md#startindex)
- [userId](generated_client.GenresApiGetGenresRequest.md#userid)

## Properties

### enableImageTypes

• `Optional` `Readonly` **enableImageTypes**: [`ImageType`](../enums/generated_client.ImageType.md)[]

Optional. The image types to include in the output.

**`memberof`** GenresApiGetGenres

#### Defined in

[generated-client/api/genres-api.ts:384](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e4df7f8/src/generated-client/api/genres-api.ts#L384)

___

### enableImages

• `Optional` `Readonly` **enableImages**: `boolean`

Optional, include image information in output.

**`memberof`** GenresApiGetGenres

#### Defined in

[generated-client/api/genres-api.ts:419](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e4df7f8/src/generated-client/api/genres-api.ts#L419)

___

### enableTotalRecordCount

• `Optional` `Readonly` **enableTotalRecordCount**: `boolean`

Optional. Include total record count.

**`memberof`** GenresApiGetGenres

#### Defined in

[generated-client/api/genres-api.ts:426](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e4df7f8/src/generated-client/api/genres-api.ts#L426)

___

### excludeItemTypes

• `Optional` `Readonly` **excludeItemTypes**: `string`[]

Optional. If specified, results will be filtered out based on item type. This allows multiple, comma delimited.

**`memberof`** GenresApiGetGenres

#### Defined in

[generated-client/api/genres-api.ts:356](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e4df7f8/src/generated-client/api/genres-api.ts#L356)

___

### fields

• `Optional` `Readonly` **fields**: [`ItemFields`](../enums/generated_client.ItemFields.md)[]

Optional. Specify additional fields of information to return in the output.

**`memberof`** GenresApiGetGenres

#### Defined in

[generated-client/api/genres-api.ts:349](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e4df7f8/src/generated-client/api/genres-api.ts#L349)

___

### imageTypeLimit

• `Optional` `Readonly` **imageTypeLimit**: `number`

Optional, the max number of images to return, per image type.

**`memberof`** GenresApiGetGenres

#### Defined in

[generated-client/api/genres-api.ts:377](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e4df7f8/src/generated-client/api/genres-api.ts#L377)

___

### includeItemTypes

• `Optional` `Readonly` **includeItemTypes**: `string`[]

Optional. If specified, results will be filtered in based on item type. This allows multiple, comma delimited.

**`memberof`** GenresApiGetGenres

#### Defined in

[generated-client/api/genres-api.ts:363](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e4df7f8/src/generated-client/api/genres-api.ts#L363)

___

### isFavorite

• `Optional` `Readonly` **isFavorite**: `boolean`

Optional filter by items that are marked as favorite, or not.

**`memberof`** GenresApiGetGenres

#### Defined in

[generated-client/api/genres-api.ts:370](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e4df7f8/src/generated-client/api/genres-api.ts#L370)

___

### limit

• `Optional` `Readonly` **limit**: `number`

Optional. The maximum number of records to return.

**`memberof`** GenresApiGetGenres

#### Defined in

[generated-client/api/genres-api.ts:328](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e4df7f8/src/generated-client/api/genres-api.ts#L328)

___

### nameLessThan

• `Optional` `Readonly` **nameLessThan**: `string`

Optional filter by items whose name is equally or lesser than a given input string.

**`memberof`** GenresApiGetGenres

#### Defined in

[generated-client/api/genres-api.ts:412](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e4df7f8/src/generated-client/api/genres-api.ts#L412)

___

### nameStartsWith

• `Optional` `Readonly` **nameStartsWith**: `string`

Optional filter by items whose name is sorted equally than a given input string.

**`memberof`** GenresApiGetGenres

#### Defined in

[generated-client/api/genres-api.ts:405](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e4df7f8/src/generated-client/api/genres-api.ts#L405)

___

### nameStartsWithOrGreater

• `Optional` `Readonly` **nameStartsWithOrGreater**: `string`

Optional filter by items whose name is sorted equally or greater than a given input string.

**`memberof`** GenresApiGetGenres

#### Defined in

[generated-client/api/genres-api.ts:398](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e4df7f8/src/generated-client/api/genres-api.ts#L398)

___

### parentId

• `Optional` `Readonly` **parentId**: `string`

Specify this to localize the search to a specific item or folder. Omit to use the root.

**`memberof`** GenresApiGetGenres

#### Defined in

[generated-client/api/genres-api.ts:342](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e4df7f8/src/generated-client/api/genres-api.ts#L342)

___

### searchTerm

• `Optional` `Readonly` **searchTerm**: `string`

The search term.

**`memberof`** GenresApiGetGenres

#### Defined in

[generated-client/api/genres-api.ts:335](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e4df7f8/src/generated-client/api/genres-api.ts#L335)

___

### startIndex

• `Optional` `Readonly` **startIndex**: `number`

Optional. The record index to start at. All items with a lower index will be dropped from the results.

**`memberof`** GenresApiGetGenres

#### Defined in

[generated-client/api/genres-api.ts:321](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e4df7f8/src/generated-client/api/genres-api.ts#L321)

___

### userId

• `Optional` `Readonly` **userId**: `string`

User id.

**`memberof`** GenresApiGetGenres

#### Defined in

[generated-client/api/genres-api.ts:391](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e4df7f8/src/generated-client/api/genres-api.ts#L391)
