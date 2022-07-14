[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / GenresApiGetGenresRequest

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
- [sortBy](generated_client.GenresApiGetGenresRequest.md#sortby)
- [sortOrder](generated_client.GenresApiGetGenresRequest.md#sortorder)
- [startIndex](generated_client.GenresApiGetGenresRequest.md#startindex)
- [userId](generated_client.GenresApiGetGenresRequest.md#userid)

## Properties

### enableImageTypes

• `Optional` `Readonly` **enableImageTypes**: [`ImageType`](../enums/generated_client.ImageType.md)[]

Optional. The image types to include in the output.

**`memberof`** GenresApiGetGenres

#### Defined in

[generated-client/api/genres-api.ts:402](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/genres-api.ts#L402)

___

### enableImages

• `Optional` `Readonly` **enableImages**: `boolean`

Optional, include image information in output.

**`memberof`** GenresApiGetGenres

#### Defined in

[generated-client/api/genres-api.ts:451](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/genres-api.ts#L451)

___

### enableTotalRecordCount

• `Optional` `Readonly` **enableTotalRecordCount**: `boolean`

Optional. Include total record count.

**`memberof`** GenresApiGetGenres

#### Defined in

[generated-client/api/genres-api.ts:458](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/genres-api.ts#L458)

___

### excludeItemTypes

• `Optional` `Readonly` **excludeItemTypes**: [`BaseItemKind`](../enums/generated_client.BaseItemKind.md)[]

Optional. If specified, results will be filtered out based on item type. This allows multiple, comma delimited.

**`memberof`** GenresApiGetGenres

#### Defined in

[generated-client/api/genres-api.ts:374](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/genres-api.ts#L374)

___

### fields

• `Optional` `Readonly` **fields**: [`ItemFields`](../enums/generated_client.ItemFields.md)[]

Optional. Specify additional fields of information to return in the output.

**`memberof`** GenresApiGetGenres

#### Defined in

[generated-client/api/genres-api.ts:367](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/genres-api.ts#L367)

___

### imageTypeLimit

• `Optional` `Readonly` **imageTypeLimit**: `number`

Optional, the max number of images to return, per image type.

**`memberof`** GenresApiGetGenres

#### Defined in

[generated-client/api/genres-api.ts:395](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/genres-api.ts#L395)

___

### includeItemTypes

• `Optional` `Readonly` **includeItemTypes**: [`BaseItemKind`](../enums/generated_client.BaseItemKind.md)[]

Optional. If specified, results will be filtered in based on item type. This allows multiple, comma delimited.

**`memberof`** GenresApiGetGenres

#### Defined in

[generated-client/api/genres-api.ts:381](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/genres-api.ts#L381)

___

### isFavorite

• `Optional` `Readonly` **isFavorite**: `boolean`

Optional filter by items that are marked as favorite, or not.

**`memberof`** GenresApiGetGenres

#### Defined in

[generated-client/api/genres-api.ts:388](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/genres-api.ts#L388)

___

### limit

• `Optional` `Readonly` **limit**: `number`

Optional. The maximum number of records to return.

**`memberof`** GenresApiGetGenres

#### Defined in

[generated-client/api/genres-api.ts:346](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/genres-api.ts#L346)

___

### nameLessThan

• `Optional` `Readonly` **nameLessThan**: `string`

Optional filter by items whose name is equally or lesser than a given input string.

**`memberof`** GenresApiGetGenres

#### Defined in

[generated-client/api/genres-api.ts:430](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/genres-api.ts#L430)

___

### nameStartsWith

• `Optional` `Readonly` **nameStartsWith**: `string`

Optional filter by items whose name is sorted equally than a given input string.

**`memberof`** GenresApiGetGenres

#### Defined in

[generated-client/api/genres-api.ts:423](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/genres-api.ts#L423)

___

### nameStartsWithOrGreater

• `Optional` `Readonly` **nameStartsWithOrGreater**: `string`

Optional filter by items whose name is sorted equally or greater than a given input string.

**`memberof`** GenresApiGetGenres

#### Defined in

[generated-client/api/genres-api.ts:416](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/genres-api.ts#L416)

___

### parentId

• `Optional` `Readonly` **parentId**: `string`

Specify this to localize the search to a specific item or folder. Omit to use the root.

**`memberof`** GenresApiGetGenres

#### Defined in

[generated-client/api/genres-api.ts:360](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/genres-api.ts#L360)

___

### searchTerm

• `Optional` `Readonly` **searchTerm**: `string`

The search term.

**`memberof`** GenresApiGetGenres

#### Defined in

[generated-client/api/genres-api.ts:353](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/genres-api.ts#L353)

___

### sortBy

• `Optional` `Readonly` **sortBy**: `string`[]

Optional. Specify one or more sort orders, comma delimited.

**`memberof`** GenresApiGetGenres

#### Defined in

[generated-client/api/genres-api.ts:437](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/genres-api.ts#L437)

___

### sortOrder

• `Optional` `Readonly` **sortOrder**: [`SortOrder`](../enums/generated_client.SortOrder.md)[]

Sort Order - Ascending,Descending.

**`memberof`** GenresApiGetGenres

#### Defined in

[generated-client/api/genres-api.ts:444](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/genres-api.ts#L444)

___

### startIndex

• `Optional` `Readonly` **startIndex**: `number`

Optional. The record index to start at. All items with a lower index will be dropped from the results.

**`memberof`** GenresApiGetGenres

#### Defined in

[generated-client/api/genres-api.ts:339](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/genres-api.ts#L339)

___

### userId

• `Optional` `Readonly` **userId**: `string`

User id.

**`memberof`** GenresApiGetGenres

#### Defined in

[generated-client/api/genres-api.ts:409](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/genres-api.ts#L409)
