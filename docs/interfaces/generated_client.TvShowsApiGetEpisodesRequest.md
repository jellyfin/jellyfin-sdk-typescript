[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / TvShowsApiGetEpisodesRequest

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

[generated-client/api/tv-shows-api.ts:657](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/tv-shows-api.ts#L657)

___

### enableImageTypes

• `Optional` `Readonly` **enableImageTypes**: [`ImageType`](../enums/generated_client.ImageType.md)[]

Optional. The image types to include in the output.

**`memberof`** TvShowsApiGetEpisodes

#### Defined in

[generated-client/api/tv-shows-api.ts:699](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/tv-shows-api.ts#L699)

___

### enableImages

• `Optional` `Readonly` **enableImages**: `boolean`

Optional, include image information in output.

**`memberof`** TvShowsApiGetEpisodes

#### Defined in

[generated-client/api/tv-shows-api.ts:685](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/tv-shows-api.ts#L685)

___

### enableUserData

• `Optional` `Readonly` **enableUserData**: `boolean`

Optional. Include user data.

**`memberof`** TvShowsApiGetEpisodes

#### Defined in

[generated-client/api/tv-shows-api.ts:706](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/tv-shows-api.ts#L706)

___

### fields

• `Optional` `Readonly` **fields**: [`ItemFields`](../enums/generated_client.ItemFields.md)[]

Optional. Specify additional fields of information to return in the output. This allows multiple, comma delimited. Options: Budget, Chapters, DateCreated, Genres, HomePageUrl, IndexOptions, MediaStreams, Overview, ParentId, Path, People, ProviderIds, PrimaryImageAspectRatio, Revenue, SortName, Studios, Taglines, TrailerUrls.

**`memberof`** TvShowsApiGetEpisodes

#### Defined in

[generated-client/api/tv-shows-api.ts:629](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/tv-shows-api.ts#L629)

___

### imageTypeLimit

• `Optional` `Readonly` **imageTypeLimit**: `number`

Optional, the max number of images to return, per image type.

**`memberof`** TvShowsApiGetEpisodes

#### Defined in

[generated-client/api/tv-shows-api.ts:692](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/tv-shows-api.ts#L692)

___

### isMissing

• `Optional` `Readonly` **isMissing**: `boolean`

Optional. Filter by items that are missing episodes or not.

**`memberof`** TvShowsApiGetEpisodes

#### Defined in

[generated-client/api/tv-shows-api.ts:650](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/tv-shows-api.ts#L650)

___

### limit

• `Optional` `Readonly` **limit**: `number`

Optional. The maximum number of records to return.

**`memberof`** TvShowsApiGetEpisodes

#### Defined in

[generated-client/api/tv-shows-api.ts:678](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/tv-shows-api.ts#L678)

___

### season

• `Optional` `Readonly` **season**: `number`

Optional filter by season number.

**`memberof`** TvShowsApiGetEpisodes

#### Defined in

[generated-client/api/tv-shows-api.ts:636](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/tv-shows-api.ts#L636)

___

### seasonId

• `Optional` `Readonly` **seasonId**: `string`

Optional. Filter by season id.

**`memberof`** TvShowsApiGetEpisodes

#### Defined in

[generated-client/api/tv-shows-api.ts:643](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/tv-shows-api.ts#L643)

___

### seriesId

• `Readonly` **seriesId**: `string`

The series id.

**`memberof`** TvShowsApiGetEpisodes

#### Defined in

[generated-client/api/tv-shows-api.ts:615](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/tv-shows-api.ts#L615)

___

### sortBy

• `Optional` `Readonly` **sortBy**: `string`

Optional. Specify one or more sort orders, comma delimited. Options: Album, AlbumArtist, Artist, Budget, CommunityRating, CriticRating, DateCreated, DatePlayed, PlayCount, PremiereDate, ProductionYear, SortName, Random, Revenue, Runtime.

**`memberof`** TvShowsApiGetEpisodes

#### Defined in

[generated-client/api/tv-shows-api.ts:713](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/tv-shows-api.ts#L713)

___

### startIndex

• `Optional` `Readonly` **startIndex**: `number`

Optional. The record index to start at. All items with a lower index will be dropped from the results.

**`memberof`** TvShowsApiGetEpisodes

#### Defined in

[generated-client/api/tv-shows-api.ts:671](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/tv-shows-api.ts#L671)

___

### startItemId

• `Optional` `Readonly` **startItemId**: `string`

Optional. Skip through the list until a given item is found.

**`memberof`** TvShowsApiGetEpisodes

#### Defined in

[generated-client/api/tv-shows-api.ts:664](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/tv-shows-api.ts#L664)

___

### userId

• `Optional` `Readonly` **userId**: `string`

The user id.

**`memberof`** TvShowsApiGetEpisodes

#### Defined in

[generated-client/api/tv-shows-api.ts:622](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/tv-shows-api.ts#L622)
