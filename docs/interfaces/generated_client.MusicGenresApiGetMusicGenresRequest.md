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
- [startIndex](generated_client.MusicGenresApiGetMusicGenresRequest.md#startindex)
- [userId](generated_client.MusicGenresApiGetMusicGenresRequest.md#userid)

## Properties

### enableImageTypes

• `Optional` `Readonly` **enableImageTypes**: [`ImageType`](../enums/generated_client.ImageType.md)[]

Optional. The image types to include in the output.

**`memberof`** MusicGenresApiGetMusicGenres

#### Defined in

[generated-client/api/music-genres-api.ts:387](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/music-genres-api.ts#L387)

___

### enableImages

• `Optional` `Readonly` **enableImages**: `boolean`

Optional, include image information in output.

**`memberof`** MusicGenresApiGetMusicGenres

#### Defined in

[generated-client/api/music-genres-api.ts:422](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/music-genres-api.ts#L422)

___

### enableTotalRecordCount

• `Optional` `Readonly` **enableTotalRecordCount**: `boolean`

Optional. Include total record count.

**`memberof`** MusicGenresApiGetMusicGenres

#### Defined in

[generated-client/api/music-genres-api.ts:429](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/music-genres-api.ts#L429)

___

### excludeItemTypes

• `Optional` `Readonly` **excludeItemTypes**: `string`[]

Optional. If specified, results will be filtered out based on item type. This allows multiple, comma delimited.

**`memberof`** MusicGenresApiGetMusicGenres

#### Defined in

[generated-client/api/music-genres-api.ts:359](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/music-genres-api.ts#L359)

___

### fields

• `Optional` `Readonly` **fields**: [`ItemFields`](../enums/generated_client.ItemFields.md)[]

Optional. Specify additional fields of information to return in the output.

**`memberof`** MusicGenresApiGetMusicGenres

#### Defined in

[generated-client/api/music-genres-api.ts:352](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/music-genres-api.ts#L352)

___

### imageTypeLimit

• `Optional` `Readonly` **imageTypeLimit**: `number`

Optional, the max number of images to return, per image type.

**`memberof`** MusicGenresApiGetMusicGenres

#### Defined in

[generated-client/api/music-genres-api.ts:380](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/music-genres-api.ts#L380)

___

### includeItemTypes

• `Optional` `Readonly` **includeItemTypes**: `string`[]

Optional. If specified, results will be filtered in based on item type. This allows multiple, comma delimited.

**`memberof`** MusicGenresApiGetMusicGenres

#### Defined in

[generated-client/api/music-genres-api.ts:366](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/music-genres-api.ts#L366)

___

### isFavorite

• `Optional` `Readonly` **isFavorite**: `boolean`

Optional filter by items that are marked as favorite, or not.

**`memberof`** MusicGenresApiGetMusicGenres

#### Defined in

[generated-client/api/music-genres-api.ts:373](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/music-genres-api.ts#L373)

___

### limit

• `Optional` `Readonly` **limit**: `number`

Optional. The maximum number of records to return.

**`memberof`** MusicGenresApiGetMusicGenres

#### Defined in

[generated-client/api/music-genres-api.ts:331](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/music-genres-api.ts#L331)

___

### nameLessThan

• `Optional` `Readonly` **nameLessThan**: `string`

Optional filter by items whose name is equally or lesser than a given input string.

**`memberof`** MusicGenresApiGetMusicGenres

#### Defined in

[generated-client/api/music-genres-api.ts:415](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/music-genres-api.ts#L415)

___

### nameStartsWith

• `Optional` `Readonly` **nameStartsWith**: `string`

Optional filter by items whose name is sorted equally than a given input string.

**`memberof`** MusicGenresApiGetMusicGenres

#### Defined in

[generated-client/api/music-genres-api.ts:408](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/music-genres-api.ts#L408)

___

### nameStartsWithOrGreater

• `Optional` `Readonly` **nameStartsWithOrGreater**: `string`

Optional filter by items whose name is sorted equally or greater than a given input string.

**`memberof`** MusicGenresApiGetMusicGenres

#### Defined in

[generated-client/api/music-genres-api.ts:401](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/music-genres-api.ts#L401)

___

### parentId

• `Optional` `Readonly` **parentId**: `string`

Specify this to localize the search to a specific item or folder. Omit to use the root.

**`memberof`** MusicGenresApiGetMusicGenres

#### Defined in

[generated-client/api/music-genres-api.ts:345](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/music-genres-api.ts#L345)

___

### searchTerm

• `Optional` `Readonly` **searchTerm**: `string`

The search term.

**`memberof`** MusicGenresApiGetMusicGenres

#### Defined in

[generated-client/api/music-genres-api.ts:338](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/music-genres-api.ts#L338)

___

### startIndex

• `Optional` `Readonly` **startIndex**: `number`

Optional. The record index to start at. All items with a lower index will be dropped from the results.

**`memberof`** MusicGenresApiGetMusicGenres

#### Defined in

[generated-client/api/music-genres-api.ts:324](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/music-genres-api.ts#L324)

___

### userId

• `Optional` `Readonly` **userId**: `string`

User id.

**`memberof`** MusicGenresApiGetMusicGenres

#### Defined in

[generated-client/api/music-genres-api.ts:394](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/music-genres-api.ts#L394)
