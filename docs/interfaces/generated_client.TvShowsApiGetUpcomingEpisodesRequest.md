[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / TvShowsApiGetUpcomingEpisodesRequest

# Interface: TvShowsApiGetUpcomingEpisodesRequest

[generated-client](../modules/generated_client.md).TvShowsApiGetUpcomingEpisodesRequest

Request parameters for getUpcomingEpisodes operation in TvShowsApi.

**`export`**

**`interface`** TvShowsApiGetUpcomingEpisodesRequest

## Table of contents

### Properties

- [enableImageTypes](generated_client.TvShowsApiGetUpcomingEpisodesRequest.md#enableimagetypes)
- [enableImages](generated_client.TvShowsApiGetUpcomingEpisodesRequest.md#enableimages)
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

[generated-client/api/tv-shows-api.ts:958](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/tv-shows-api.ts#L958)

___

### enableImages

• `Optional` `Readonly` **enableImages**: `boolean`

Optional. Include image information in output.

**`memberof`** TvShowsApiGetUpcomingEpisodes

#### Defined in

[generated-client/api/tv-shows-api.ts:944](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/tv-shows-api.ts#L944)

___

### enableUserData

• `Optional` `Readonly` **enableUserData**: `boolean`

Optional. Include user data.

**`memberof`** TvShowsApiGetUpcomingEpisodes

#### Defined in

[generated-client/api/tv-shows-api.ts:965](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/tv-shows-api.ts#L965)

___

### fields

• `Optional` `Readonly` **fields**: [`ItemFields`](../enums/generated_client.ItemFields.md)[]

Optional. Specify additional fields of information to return in the output.

**`memberof`** TvShowsApiGetUpcomingEpisodes

#### Defined in

[generated-client/api/tv-shows-api.ts:930](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/tv-shows-api.ts#L930)

___

### imageTypeLimit

• `Optional` `Readonly` **imageTypeLimit**: `number`

Optional. The max number of images to return, per image type.

**`memberof`** TvShowsApiGetUpcomingEpisodes

#### Defined in

[generated-client/api/tv-shows-api.ts:951](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/tv-shows-api.ts#L951)

___

### limit

• `Optional` `Readonly` **limit**: `number`

Optional. The maximum number of records to return.

**`memberof`** TvShowsApiGetUpcomingEpisodes

#### Defined in

[generated-client/api/tv-shows-api.ts:923](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/tv-shows-api.ts#L923)

___

### parentId

• `Optional` `Readonly` **parentId**: `string`

Optional. Specify this to localize the search to a specific item or folder. Omit to use the root.

**`memberof`** TvShowsApiGetUpcomingEpisodes

#### Defined in

[generated-client/api/tv-shows-api.ts:937](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/tv-shows-api.ts#L937)

___

### startIndex

• `Optional` `Readonly` **startIndex**: `number`

Optional. The record index to start at. All items with a lower index will be dropped from the results.

**`memberof`** TvShowsApiGetUpcomingEpisodes

#### Defined in

[generated-client/api/tv-shows-api.ts:916](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/tv-shows-api.ts#L916)

___

### userId

• `Optional` `Readonly` **userId**: `string`

The user id of the user to get the upcoming episodes for.

**`memberof`** TvShowsApiGetUpcomingEpisodes

#### Defined in

[generated-client/api/tv-shows-api.ts:909](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/tv-shows-api.ts#L909)
