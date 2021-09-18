[jellyfin-sdk-typescript](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / TvShowsApiGetNextUpRequest

# Interface: TvShowsApiGetNextUpRequest

[generated-client](../modules/generated_client.md).TvShowsApiGetNextUpRequest

Request parameters for getNextUp operation in TvShowsApi.

**`export`**

**`interface`** TvShowsApiGetNextUpRequest

## Table of contents

### Properties

- [disableFirstEpisode](generated_client.TvShowsApiGetNextUpRequest.md#disablefirstepisode)
- [enableImageTypes](generated_client.TvShowsApiGetNextUpRequest.md#enableimagetypes)
- [enableImges](generated_client.TvShowsApiGetNextUpRequest.md#enableimges)
- [enableTotalRecordCount](generated_client.TvShowsApiGetNextUpRequest.md#enabletotalrecordcount)
- [enableUserData](generated_client.TvShowsApiGetNextUpRequest.md#enableuserdata)
- [fields](generated_client.TvShowsApiGetNextUpRequest.md#fields)
- [imageTypeLimit](generated_client.TvShowsApiGetNextUpRequest.md#imagetypelimit)
- [limit](generated_client.TvShowsApiGetNextUpRequest.md#limit)
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

[generated-client/api/tv-shows-api.ts:788](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e4df7f8/src/generated-client/api/tv-shows-api.ts#L788)

___

### enableImageTypes

• `Optional` `Readonly` **enableImageTypes**: [`ImageType`](../enums/generated_client.ImageType.md)[]

Optional. The image types to include in the output.

**`memberof`** TvShowsApiGetNextUp

#### Defined in

[generated-client/api/tv-shows-api.ts:767](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e4df7f8/src/generated-client/api/tv-shows-api.ts#L767)

___

### enableImges

• `Optional` `Readonly` **enableImges**: `boolean`

Optional. Include image information in output.

**`memberof`** TvShowsApiGetNextUp

#### Defined in

[generated-client/api/tv-shows-api.ts:753](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e4df7f8/src/generated-client/api/tv-shows-api.ts#L753)

___

### enableTotalRecordCount

• `Optional` `Readonly` **enableTotalRecordCount**: `boolean`

Whether to enable the total records count. Defaults to true.

**`memberof`** TvShowsApiGetNextUp

#### Defined in

[generated-client/api/tv-shows-api.ts:781](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e4df7f8/src/generated-client/api/tv-shows-api.ts#L781)

___

### enableUserData

• `Optional` `Readonly` **enableUserData**: `boolean`

Optional. Include user data.

**`memberof`** TvShowsApiGetNextUp

#### Defined in

[generated-client/api/tv-shows-api.ts:774](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e4df7f8/src/generated-client/api/tv-shows-api.ts#L774)

___

### fields

• `Optional` `Readonly` **fields**: [`ItemFields`](../enums/generated_client.ItemFields.md)[]

Optional. Specify additional fields of information to return in the output.

**`memberof`** TvShowsApiGetNextUp

#### Defined in

[generated-client/api/tv-shows-api.ts:732](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e4df7f8/src/generated-client/api/tv-shows-api.ts#L732)

___

### imageTypeLimit

• `Optional` `Readonly` **imageTypeLimit**: `number`

Optional. The max number of images to return, per image type.

**`memberof`** TvShowsApiGetNextUp

#### Defined in

[generated-client/api/tv-shows-api.ts:760](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e4df7f8/src/generated-client/api/tv-shows-api.ts#L760)

___

### limit

• `Optional` `Readonly` **limit**: `number`

Optional. The maximum number of records to return.

**`memberof`** TvShowsApiGetNextUp

#### Defined in

[generated-client/api/tv-shows-api.ts:725](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e4df7f8/src/generated-client/api/tv-shows-api.ts#L725)

___

### parentId

• `Optional` `Readonly` **parentId**: `string`

Optional. Specify this to localize the search to a specific item or folder. Omit to use the root.

**`memberof`** TvShowsApiGetNextUp

#### Defined in

[generated-client/api/tv-shows-api.ts:746](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e4df7f8/src/generated-client/api/tv-shows-api.ts#L746)

___

### seriesId

• `Optional` `Readonly` **seriesId**: `string`

Optional. Filter by series id.

**`memberof`** TvShowsApiGetNextUp

#### Defined in

[generated-client/api/tv-shows-api.ts:739](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e4df7f8/src/generated-client/api/tv-shows-api.ts#L739)

___

### startIndex

• `Optional` `Readonly` **startIndex**: `number`

Optional. The record index to start at. All items with a lower index will be dropped from the results.

**`memberof`** TvShowsApiGetNextUp

#### Defined in

[generated-client/api/tv-shows-api.ts:718](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e4df7f8/src/generated-client/api/tv-shows-api.ts#L718)

___

### userId

• `Optional` `Readonly` **userId**: `string`

The user id of the user to get the next up episodes for.

**`memberof`** TvShowsApiGetNextUp

#### Defined in

[generated-client/api/tv-shows-api.ts:711](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e4df7f8/src/generated-client/api/tv-shows-api.ts#L711)
