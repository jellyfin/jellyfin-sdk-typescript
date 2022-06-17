[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / MusicGenresApiGetMusicGenresRequest

# Interface: MusicGenresApiGetMusicGenresRequest

[generated-client](../modules/generated_client.md).MusicGenresApiGetMusicGenresRequest

Request parameters for getMusicGenres operation in MusicGenresApi.

**`export`**

**`interface`** MusicGenresApiGetMusicGenresRequest

## Table of contents

### Properties

- [enableImageTypes](generated_client.MusicGenresApiGetMusicGenresRequest.md#enableimagetypes)
- [enableImages](generated_client.MusicGenresApiGetMusicGenresRequest.md#enableimages)
- [enableTotalRecordCount](generated_client.MusicGenresApiGetMusicGenresRequest.md#enabletotalrecordcount)
- [excludeItemTypes](generated_client.MusicGenresApiGetMusicGenresRequest.md#excludeitemtypes)
- [fields](generated_client.MusicGenresApiGetMusicGenresRequest.md#fields)
- [imageTypeLimit](generated_client.MusicGenresApiGetMusicGenresRequest.md#imagetypelimit)
- [includeItemTypes](generated_client.MusicGenresApiGetMusicGenresRequest.md#includeitemtypes)
- [isFavorite](generated_client.MusicGenresApiGetMusicGenresRequest.md#isfavorite)
- [limit](generated_client.MusicGenresApiGetMusicGenresRequest.md#limit)
- [nameLessThan](generated_client.MusicGenresApiGetMusicGenresRequest.md#namelessthan)
- [nameStartsWith](generated_client.MusicGenresApiGetMusicGenresRequest.md#namestartswith)
- [nameStartsWithOrGreater](generated_client.MusicGenresApiGetMusicGenresRequest.md#namestartswithorgreater)
- [parentId](generated_client.MusicGenresApiGetMusicGenresRequest.md#parentid)
- [searchTerm](generated_client.MusicGenresApiGetMusicGenresRequest.md#searchterm)
- [sortBy](generated_client.MusicGenresApiGetMusicGenresRequest.md#sortby)
- [sortOrder](generated_client.MusicGenresApiGetMusicGenresRequest.md#sortorder)
- [startIndex](generated_client.MusicGenresApiGetMusicGenresRequest.md#startindex)
- [userId](generated_client.MusicGenresApiGetMusicGenresRequest.md#userid)

## Properties

### enableImageTypes

• `Optional` `Readonly` **enableImageTypes**: [`ImageType`](../enums/generated_client.ImageType.md)[]

Optional. The image types to include in the output.

**`memberof`** MusicGenresApiGetMusicGenres

#### Defined in

[generated-client/api/music-genres-api.ts:405](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/music-genres-api.ts#L405)

___

### enableImages

• `Optional` `Readonly` **enableImages**: `boolean`

Optional, include image information in output.

**`memberof`** MusicGenresApiGetMusicGenres

#### Defined in

[generated-client/api/music-genres-api.ts:454](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/music-genres-api.ts#L454)

___

### enableTotalRecordCount

• `Optional` `Readonly` **enableTotalRecordCount**: `boolean`

Optional. Include total record count.

**`memberof`** MusicGenresApiGetMusicGenres

#### Defined in

[generated-client/api/music-genres-api.ts:461](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/music-genres-api.ts#L461)

___

### excludeItemTypes

• `Optional` `Readonly` **excludeItemTypes**: [`BaseItemKind`](../enums/generated_client.BaseItemKind.md)[]

Optional. If specified, results will be filtered out based on item type. This allows multiple, comma delimited.

**`memberof`** MusicGenresApiGetMusicGenres

#### Defined in

[generated-client/api/music-genres-api.ts:377](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/music-genres-api.ts#L377)

___

### fields

• `Optional` `Readonly` **fields**: [`ItemFields`](../enums/generated_client.ItemFields.md)[]

Optional. Specify additional fields of information to return in the output.

**`memberof`** MusicGenresApiGetMusicGenres

#### Defined in

[generated-client/api/music-genres-api.ts:370](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/music-genres-api.ts#L370)

___

### imageTypeLimit

• `Optional` `Readonly` **imageTypeLimit**: `number`

Optional, the max number of images to return, per image type.

**`memberof`** MusicGenresApiGetMusicGenres

#### Defined in

[generated-client/api/music-genres-api.ts:398](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/music-genres-api.ts#L398)

___

### includeItemTypes

• `Optional` `Readonly` **includeItemTypes**: [`BaseItemKind`](../enums/generated_client.BaseItemKind.md)[]

Optional. If specified, results will be filtered in based on item type. This allows multiple, comma delimited.

**`memberof`** MusicGenresApiGetMusicGenres

#### Defined in

[generated-client/api/music-genres-api.ts:384](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/music-genres-api.ts#L384)

___

### isFavorite

• `Optional` `Readonly` **isFavorite**: `boolean`

Optional filter by items that are marked as favorite, or not.

**`memberof`** MusicGenresApiGetMusicGenres

#### Defined in

[generated-client/api/music-genres-api.ts:391](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/music-genres-api.ts#L391)

___

### limit

• `Optional` `Readonly` **limit**: `number`

Optional. The maximum number of records to return.

**`memberof`** MusicGenresApiGetMusicGenres

#### Defined in

[generated-client/api/music-genres-api.ts:349](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/music-genres-api.ts#L349)

___

### nameLessThan

• `Optional` `Readonly` **nameLessThan**: `string`

Optional filter by items whose name is equally or lesser than a given input string.

**`memberof`** MusicGenresApiGetMusicGenres

#### Defined in

[generated-client/api/music-genres-api.ts:433](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/music-genres-api.ts#L433)

___

### nameStartsWith

• `Optional` `Readonly` **nameStartsWith**: `string`

Optional filter by items whose name is sorted equally than a given input string.

**`memberof`** MusicGenresApiGetMusicGenres

#### Defined in

[generated-client/api/music-genres-api.ts:426](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/music-genres-api.ts#L426)

___

### nameStartsWithOrGreater

• `Optional` `Readonly` **nameStartsWithOrGreater**: `string`

Optional filter by items whose name is sorted equally or greater than a given input string.

**`memberof`** MusicGenresApiGetMusicGenres

#### Defined in

[generated-client/api/music-genres-api.ts:419](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/music-genres-api.ts#L419)

___

### parentId

• `Optional` `Readonly` **parentId**: `string`

Specify this to localize the search to a specific item or folder. Omit to use the root.

**`memberof`** MusicGenresApiGetMusicGenres

#### Defined in

[generated-client/api/music-genres-api.ts:363](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/music-genres-api.ts#L363)

___

### searchTerm

• `Optional` `Readonly` **searchTerm**: `string`

The search term.

**`memberof`** MusicGenresApiGetMusicGenres

#### Defined in

[generated-client/api/music-genres-api.ts:356](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/music-genres-api.ts#L356)

___

### sortBy

• `Optional` `Readonly` **sortBy**: `string`[]

Optional. Specify one or more sort orders, comma delimited.

**`memberof`** MusicGenresApiGetMusicGenres

#### Defined in

[generated-client/api/music-genres-api.ts:440](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/music-genres-api.ts#L440)

___

### sortOrder

• `Optional` `Readonly` **sortOrder**: [`SortOrder`](../enums/generated_client.SortOrder.md)[]

Sort Order - Ascending,Descending.

**`memberof`** MusicGenresApiGetMusicGenres

#### Defined in

[generated-client/api/music-genres-api.ts:447](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/music-genres-api.ts#L447)

___

### startIndex

• `Optional` `Readonly` **startIndex**: `number`

Optional. The record index to start at. All items with a lower index will be dropped from the results.

**`memberof`** MusicGenresApiGetMusicGenres

#### Defined in

[generated-client/api/music-genres-api.ts:342](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/music-genres-api.ts#L342)

___

### userId

• `Optional` `Readonly` **userId**: `string`

User id.

**`memberof`** MusicGenresApiGetMusicGenres

#### Defined in

[generated-client/api/music-genres-api.ts:412](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/music-genres-api.ts#L412)
