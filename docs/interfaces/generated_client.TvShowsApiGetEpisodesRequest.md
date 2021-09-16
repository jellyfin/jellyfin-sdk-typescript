[jellyfin-sdk-typescript](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / TvShowsApiGetEpisodesRequest

# Interface: TvShowsApiGetEpisodesRequest

[generated-client](../modules/generated_client.md).TvShowsApiGetEpisodesRequest

Request parameters for getEpisodes operation in TvShowsApi.

**`export`**

**`interface`** TvShowsApiGetEpisodesRequest

## Table of contents

### Properties

- [adjacentTo](generated_client.TvShowsApiGetEpisodesRequest.md#adjacentto)
- [enableImageTypes](generated_client.TvShowsApiGetEpisodesRequest.md#enableimagetypes)
- [enableImages](generated_client.TvShowsApiGetEpisodesRequest.md#enableimages)
- [enableUserData](generated_client.TvShowsApiGetEpisodesRequest.md#enableuserdata)
- [fields](generated_client.TvShowsApiGetEpisodesRequest.md#fields)
- [imageTypeLimit](generated_client.TvShowsApiGetEpisodesRequest.md#imagetypelimit)
- [isMissing](generated_client.TvShowsApiGetEpisodesRequest.md#ismissing)
- [limit](generated_client.TvShowsApiGetEpisodesRequest.md#limit)
- [season](generated_client.TvShowsApiGetEpisodesRequest.md#season)
- [seasonId](generated_client.TvShowsApiGetEpisodesRequest.md#seasonid)
- [seriesId](generated_client.TvShowsApiGetEpisodesRequest.md#seriesid)
- [sortBy](generated_client.TvShowsApiGetEpisodesRequest.md#sortby)
- [startIndex](generated_client.TvShowsApiGetEpisodesRequest.md#startindex)
- [startItemId](generated_client.TvShowsApiGetEpisodesRequest.md#startitemid)
- [userId](generated_client.TvShowsApiGetEpisodesRequest.md#userid)

## Properties

### adjacentTo

• `Optional` `Readonly` **adjacentTo**: `string`

Optional. Return items that are siblings of a supplied item.

**`memberof`** TvShowsApiGetEpisodes

#### Defined in

[generated-client/api/tv-shows-api.ts:641](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/tv-shows-api.ts#L641)

___

### enableImageTypes

• `Optional` `Readonly` **enableImageTypes**: [`ImageType`](../enums/generated_client.ImageType.md)[]

Optional. The image types to include in the output.

**`memberof`** TvShowsApiGetEpisodes

#### Defined in

[generated-client/api/tv-shows-api.ts:683](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/tv-shows-api.ts#L683)

___

### enableImages

• `Optional` `Readonly` **enableImages**: `boolean`

Optional, include image information in output.

**`memberof`** TvShowsApiGetEpisodes

#### Defined in

[generated-client/api/tv-shows-api.ts:669](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/tv-shows-api.ts#L669)

___

### enableUserData

• `Optional` `Readonly` **enableUserData**: `boolean`

Optional. Include user data.

**`memberof`** TvShowsApiGetEpisodes

#### Defined in

[generated-client/api/tv-shows-api.ts:690](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/tv-shows-api.ts#L690)

___

### fields

• `Optional` `Readonly` **fields**: [`ItemFields`](../enums/generated_client.ItemFields.md)[]

Optional. Specify additional fields of information to return in the output. This allows multiple, comma delimited. Options: Budget, Chapters, DateCreated, Genres, HomePageUrl, IndexOptions, MediaStreams, Overview, ParentId, Path, People, ProviderIds, PrimaryImageAspectRatio, Revenue, SortName, Studios, Taglines, TrailerUrls.

**`memberof`** TvShowsApiGetEpisodes

#### Defined in

[generated-client/api/tv-shows-api.ts:613](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/tv-shows-api.ts#L613)

___

### imageTypeLimit

• `Optional` `Readonly` **imageTypeLimit**: `number`

Optional, the max number of images to return, per image type.

**`memberof`** TvShowsApiGetEpisodes

#### Defined in

[generated-client/api/tv-shows-api.ts:676](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/tv-shows-api.ts#L676)

___

### isMissing

• `Optional` `Readonly` **isMissing**: `boolean`

Optional. Filter by items that are missing episodes or not.

**`memberof`** TvShowsApiGetEpisodes

#### Defined in

[generated-client/api/tv-shows-api.ts:634](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/tv-shows-api.ts#L634)

___

### limit

• `Optional` `Readonly` **limit**: `number`

Optional. The maximum number of records to return.

**`memberof`** TvShowsApiGetEpisodes

#### Defined in

[generated-client/api/tv-shows-api.ts:662](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/tv-shows-api.ts#L662)

___

### season

• `Optional` `Readonly` **season**: `number`

Optional filter by season number.

**`memberof`** TvShowsApiGetEpisodes

#### Defined in

[generated-client/api/tv-shows-api.ts:620](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/tv-shows-api.ts#L620)

___

### seasonId

• `Optional` `Readonly` **seasonId**: `string`

Optional. Filter by season id.

**`memberof`** TvShowsApiGetEpisodes

#### Defined in

[generated-client/api/tv-shows-api.ts:627](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/tv-shows-api.ts#L627)

___

### seriesId

• `Readonly` **seriesId**: `string`

The series id.

**`memberof`** TvShowsApiGetEpisodes

#### Defined in

[generated-client/api/tv-shows-api.ts:599](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/tv-shows-api.ts#L599)

___

### sortBy

• `Optional` `Readonly` **sortBy**: `string`

Optional. Specify one or more sort orders, comma delimited. Options: Album, AlbumArtist, Artist, Budget, CommunityRating, CriticRating, DateCreated, DatePlayed, PlayCount, PremiereDate, ProductionYear, SortName, Random, Revenue, Runtime.

**`memberof`** TvShowsApiGetEpisodes

#### Defined in

[generated-client/api/tv-shows-api.ts:697](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/tv-shows-api.ts#L697)

___

### startIndex

• `Optional` `Readonly` **startIndex**: `number`

Optional. The record index to start at. All items with a lower index will be dropped from the results.

**`memberof`** TvShowsApiGetEpisodes

#### Defined in

[generated-client/api/tv-shows-api.ts:655](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/tv-shows-api.ts#L655)

___

### startItemId

• `Optional` `Readonly` **startItemId**: `string`

Optional. Skip through the list until a given item is found.

**`memberof`** TvShowsApiGetEpisodes

#### Defined in

[generated-client/api/tv-shows-api.ts:648](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/tv-shows-api.ts#L648)

___

### userId

• `Optional` `Readonly` **userId**: `string`

The user id.

**`memberof`** TvShowsApiGetEpisodes

#### Defined in

[generated-client/api/tv-shows-api.ts:606](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/tv-shows-api.ts#L606)
