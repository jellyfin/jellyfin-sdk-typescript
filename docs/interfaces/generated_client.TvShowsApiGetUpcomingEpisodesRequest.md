[jellyfin-sdk-typescript](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / TvShowsApiGetUpcomingEpisodesRequest

# Interface: TvShowsApiGetUpcomingEpisodesRequest

[generated-client](../modules/generated_client.md).TvShowsApiGetUpcomingEpisodesRequest

Request parameters for getUpcomingEpisodes operation in TvShowsApi.

**`export`**

**`interface`** TvShowsApiGetUpcomingEpisodesRequest

## Table of contents

### Properties

- [enableImageTypes](generated_client.TvShowsApiGetUpcomingEpisodesRequest.md#enableimagetypes)
- [enableImges](generated_client.TvShowsApiGetUpcomingEpisodesRequest.md#enableimges)
- [enableUserData](generated_client.TvShowsApiGetUpcomingEpisodesRequest.md#enableuserdata)
- [fields](generated_client.TvShowsApiGetUpcomingEpisodesRequest.md#fields)
- [imageTypeLimit](generated_client.TvShowsApiGetUpcomingEpisodesRequest.md#imagetypelimit)
- [limit](generated_client.TvShowsApiGetUpcomingEpisodesRequest.md#limit)
- [parentId](generated_client.TvShowsApiGetUpcomingEpisodesRequest.md#parentid)
- [startIndex](generated_client.TvShowsApiGetUpcomingEpisodesRequest.md#startindex)
- [userId](generated_client.TvShowsApiGetUpcomingEpisodesRequest.md#userid)

## Properties

### enableImageTypes

• `Optional` `Readonly` **enableImageTypes**: [`ImageType`](../enums/generated_client.ImageType.md)[]

Optional. The image types to include in the output.

**`memberof`** TvShowsApiGetUpcomingEpisodes

#### Defined in

[generated-client/api/tv-shows-api.ts:928](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/tv-shows-api.ts#L928)

___

### enableImges

• `Optional` `Readonly` **enableImges**: `boolean`

Optional. Include image information in output.

**`memberof`** TvShowsApiGetUpcomingEpisodes

#### Defined in

[generated-client/api/tv-shows-api.ts:914](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/tv-shows-api.ts#L914)

___

### enableUserData

• `Optional` `Readonly` **enableUserData**: `boolean`

Optional. Include user data.

**`memberof`** TvShowsApiGetUpcomingEpisodes

#### Defined in

[generated-client/api/tv-shows-api.ts:935](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/tv-shows-api.ts#L935)

___

### fields

• `Optional` `Readonly` **fields**: [`ItemFields`](../enums/generated_client.ItemFields.md)[]

Optional. Specify additional fields of information to return in the output.

**`memberof`** TvShowsApiGetUpcomingEpisodes

#### Defined in

[generated-client/api/tv-shows-api.ts:900](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/tv-shows-api.ts#L900)

___

### imageTypeLimit

• `Optional` `Readonly` **imageTypeLimit**: `number`

Optional. The max number of images to return, per image type.

**`memberof`** TvShowsApiGetUpcomingEpisodes

#### Defined in

[generated-client/api/tv-shows-api.ts:921](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/tv-shows-api.ts#L921)

___

### limit

• `Optional` `Readonly` **limit**: `number`

Optional. The maximum number of records to return.

**`memberof`** TvShowsApiGetUpcomingEpisodes

#### Defined in

[generated-client/api/tv-shows-api.ts:893](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/tv-shows-api.ts#L893)

___

### parentId

• `Optional` `Readonly` **parentId**: `string`

Optional. Specify this to localize the search to a specific item or folder. Omit to use the root.

**`memberof`** TvShowsApiGetUpcomingEpisodes

#### Defined in

[generated-client/api/tv-shows-api.ts:907](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/tv-shows-api.ts#L907)

___

### startIndex

• `Optional` `Readonly` **startIndex**: `number`

Optional. The record index to start at. All items with a lower index will be dropped from the results.

**`memberof`** TvShowsApiGetUpcomingEpisodes

#### Defined in

[generated-client/api/tv-shows-api.ts:886](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/tv-shows-api.ts#L886)

___

### userId

• `Optional` `Readonly` **userId**: `string`

The user id of the user to get the upcoming episodes for.

**`memberof`** TvShowsApiGetUpcomingEpisodes

#### Defined in

[generated-client/api/tv-shows-api.ts:879](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/tv-shows-api.ts#L879)
