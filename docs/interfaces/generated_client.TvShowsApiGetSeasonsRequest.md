[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / TvShowsApiGetSeasonsRequest

# Interface: TvShowsApiGetSeasonsRequest

[generated-client](../modules/generated_client.md).TvShowsApiGetSeasonsRequest

Request parameters for getSeasons operation in TvShowsApi.

**`export`**

**`interface`** TvShowsApiGetSeasonsRequest

## Table of contents

### Properties

- [adjacentTo](generated_client.TvShowsApiGetSeasonsRequest.md#adjacentto)
- [enableImageTypes](generated_client.TvShowsApiGetSeasonsRequest.md#enableimagetypes)
- [enableImages](generated_client.TvShowsApiGetSeasonsRequest.md#enableimages)
- [enableUserData](generated_client.TvShowsApiGetSeasonsRequest.md#enableuserdata)
- [fields](generated_client.TvShowsApiGetSeasonsRequest.md#fields)
- [imageTypeLimit](generated_client.TvShowsApiGetSeasonsRequest.md#imagetypelimit)
- [isMissing](generated_client.TvShowsApiGetSeasonsRequest.md#ismissing)
- [isSpecialSeason](generated_client.TvShowsApiGetSeasonsRequest.md#isspecialseason)
- [seriesId](generated_client.TvShowsApiGetSeasonsRequest.md#seriesid)
- [userId](generated_client.TvShowsApiGetSeasonsRequest.md#userid)

## Properties

### adjacentTo

• `Optional` `Readonly` **adjacentTo**: `string`

Optional. Return items that are siblings of a supplied item.

**`memberof`** TvShowsApiGetSeasons

#### Defined in

[generated-client/api/tv-shows-api.ts:867](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/tv-shows-api.ts#L867)

___

### enableImageTypes

• `Optional` `Readonly` **enableImageTypes**: [`ImageType`](../enums/generated_client.ImageType.md)[]

Optional. The image types to include in the output.

**`memberof`** TvShowsApiGetSeasons

#### Defined in

[generated-client/api/tv-shows-api.ts:888](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/tv-shows-api.ts#L888)

___

### enableImages

• `Optional` `Readonly` **enableImages**: `boolean`

Optional. Include image information in output.

**`memberof`** TvShowsApiGetSeasons

#### Defined in

[generated-client/api/tv-shows-api.ts:874](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/tv-shows-api.ts#L874)

___

### enableUserData

• `Optional` `Readonly` **enableUserData**: `boolean`

Optional. Include user data.

**`memberof`** TvShowsApiGetSeasons

#### Defined in

[generated-client/api/tv-shows-api.ts:895](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/tv-shows-api.ts#L895)

___

### fields

• `Optional` `Readonly` **fields**: [`ItemFields`](../enums/generated_client.ItemFields.md)[]

Optional. Specify additional fields of information to return in the output. This allows multiple, comma delimited. Options: Budget, Chapters, DateCreated, Genres, HomePageUrl, IndexOptions, MediaStreams, Overview, ParentId, Path, People, ProviderIds, PrimaryImageAspectRatio, Revenue, SortName, Studios, Taglines, TrailerUrls.

**`memberof`** TvShowsApiGetSeasons

#### Defined in

[generated-client/api/tv-shows-api.ts:846](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/tv-shows-api.ts#L846)

___

### imageTypeLimit

• `Optional` `Readonly` **imageTypeLimit**: `number`

Optional. The max number of images to return, per image type.

**`memberof`** TvShowsApiGetSeasons

#### Defined in

[generated-client/api/tv-shows-api.ts:881](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/tv-shows-api.ts#L881)

___

### isMissing

• `Optional` `Readonly` **isMissing**: `boolean`

Optional. Filter by items that are missing episodes or not.

**`memberof`** TvShowsApiGetSeasons

#### Defined in

[generated-client/api/tv-shows-api.ts:860](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/tv-shows-api.ts#L860)

___

### isSpecialSeason

• `Optional` `Readonly` **isSpecialSeason**: `boolean`

Optional. Filter by special season.

**`memberof`** TvShowsApiGetSeasons

#### Defined in

[generated-client/api/tv-shows-api.ts:853](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/tv-shows-api.ts#L853)

___

### seriesId

• `Readonly` **seriesId**: `string`

The series id.

**`memberof`** TvShowsApiGetSeasons

#### Defined in

[generated-client/api/tv-shows-api.ts:832](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/tv-shows-api.ts#L832)

___

### userId

• `Optional` `Readonly` **userId**: `string`

The user id.

**`memberof`** TvShowsApiGetSeasons

#### Defined in

[generated-client/api/tv-shows-api.ts:839](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/tv-shows-api.ts#L839)
