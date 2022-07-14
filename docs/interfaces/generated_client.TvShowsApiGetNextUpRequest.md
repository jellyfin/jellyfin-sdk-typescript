[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / TvShowsApiGetNextUpRequest

# Interface: TvShowsApiGetNextUpRequest

[generated-client](../modules/generated_client.md).TvShowsApiGetNextUpRequest

Request parameters for getNextUp operation in TvShowsApi.

**`export`**

**`interface`** TvShowsApiGetNextUpRequest

## Table of contents

### Properties

- [disableFirstEpisode](generated_client.TvShowsApiGetNextUpRequest.md#disablefirstepisode)
- [enableImageTypes](generated_client.TvShowsApiGetNextUpRequest.md#enableimagetypes)
- [enableImages](generated_client.TvShowsApiGetNextUpRequest.md#enableimages)
- [enableRewatching](generated_client.TvShowsApiGetNextUpRequest.md#enablerewatching)
- [enableTotalRecordCount](generated_client.TvShowsApiGetNextUpRequest.md#enabletotalrecordcount)
- [enableUserData](generated_client.TvShowsApiGetNextUpRequest.md#enableuserdata)
- [fields](generated_client.TvShowsApiGetNextUpRequest.md#fields)
- [imageTypeLimit](generated_client.TvShowsApiGetNextUpRequest.md#imagetypelimit)
- [limit](generated_client.TvShowsApiGetNextUpRequest.md#limit)
- [nextUpDateCutoff](generated_client.TvShowsApiGetNextUpRequest.md#nextupdatecutoff)
- [parentId](generated_client.TvShowsApiGetNextUpRequest.md#parentid)
- [seriesId](generated_client.TvShowsApiGetNextUpRequest.md#seriesid)
- [startIndex](generated_client.TvShowsApiGetNextUpRequest.md#startindex)
- [userId](generated_client.TvShowsApiGetNextUpRequest.md#userid)

## Properties

### disableFirstEpisode

• `Optional` `Readonly` **disableFirstEpisode**: `boolean`

Whether to disable sending the first episode in a series as next up.

**`memberof`** TvShowsApiGetNextUp

#### Defined in

[generated-client/api/tv-shows-api.ts:811](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/tv-shows-api.ts#L811)

___

### enableImageTypes

• `Optional` `Readonly` **enableImageTypes**: [`ImageType`](../enums/generated_client.ImageType.md)[]

Optional. The image types to include in the output.

**`memberof`** TvShowsApiGetNextUp

#### Defined in

[generated-client/api/tv-shows-api.ts:783](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/tv-shows-api.ts#L783)

___

### enableImages

• `Optional` `Readonly` **enableImages**: `boolean`

Optional. Include image information in output.

**`memberof`** TvShowsApiGetNextUp

#### Defined in

[generated-client/api/tv-shows-api.ts:769](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/tv-shows-api.ts#L769)

___

### enableRewatching

• `Optional` `Readonly` **enableRewatching**: `boolean`

Whether to include watched episode in next up results.

**`memberof`** TvShowsApiGetNextUp

#### Defined in

[generated-client/api/tv-shows-api.ts:818](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/tv-shows-api.ts#L818)

___

### enableTotalRecordCount

• `Optional` `Readonly` **enableTotalRecordCount**: `boolean`

Whether to enable the total records count. Defaults to true.

**`memberof`** TvShowsApiGetNextUp

#### Defined in

[generated-client/api/tv-shows-api.ts:804](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/tv-shows-api.ts#L804)

___

### enableUserData

• `Optional` `Readonly` **enableUserData**: `boolean`

Optional. Include user data.

**`memberof`** TvShowsApiGetNextUp

#### Defined in

[generated-client/api/tv-shows-api.ts:790](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/tv-shows-api.ts#L790)

___

### fields

• `Optional` `Readonly` **fields**: [`ItemFields`](../enums/generated_client.ItemFields.md)[]

Optional. Specify additional fields of information to return in the output.

**`memberof`** TvShowsApiGetNextUp

#### Defined in

[generated-client/api/tv-shows-api.ts:748](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/tv-shows-api.ts#L748)

___

### imageTypeLimit

• `Optional` `Readonly` **imageTypeLimit**: `number`

Optional. The max number of images to return, per image type.

**`memberof`** TvShowsApiGetNextUp

#### Defined in

[generated-client/api/tv-shows-api.ts:776](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/tv-shows-api.ts#L776)

___

### limit

• `Optional` `Readonly` **limit**: `number`

Optional. The maximum number of records to return.

**`memberof`** TvShowsApiGetNextUp

#### Defined in

[generated-client/api/tv-shows-api.ts:741](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/tv-shows-api.ts#L741)

___

### nextUpDateCutoff

• `Optional` `Readonly` **nextUpDateCutoff**: `string`

Optional. Starting date of shows to show in Next Up section.

**`memberof`** TvShowsApiGetNextUp

#### Defined in

[generated-client/api/tv-shows-api.ts:797](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/tv-shows-api.ts#L797)

___

### parentId

• `Optional` `Readonly` **parentId**: `string`

Optional. Specify this to localize the search to a specific item or folder. Omit to use the root.

**`memberof`** TvShowsApiGetNextUp

#### Defined in

[generated-client/api/tv-shows-api.ts:762](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/tv-shows-api.ts#L762)

___

### seriesId

• `Optional` `Readonly` **seriesId**: `string`

Optional. Filter by series id.

**`memberof`** TvShowsApiGetNextUp

#### Defined in

[generated-client/api/tv-shows-api.ts:755](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/tv-shows-api.ts#L755)

___

### startIndex

• `Optional` `Readonly` **startIndex**: `number`

Optional. The record index to start at. All items with a lower index will be dropped from the results.

**`memberof`** TvShowsApiGetNextUp

#### Defined in

[generated-client/api/tv-shows-api.ts:734](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/tv-shows-api.ts#L734)

___

### userId

• `Optional` `Readonly` **userId**: `string`

The user id of the user to get the next up episodes for.

**`memberof`** TvShowsApiGetNextUp

#### Defined in

[generated-client/api/tv-shows-api.ts:727](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/tv-shows-api.ts#L727)
