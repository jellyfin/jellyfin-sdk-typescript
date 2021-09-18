[jellyfin-sdk-typescript](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / TvShowsApiGetSeasonsRequest

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

[generated-client/api/tv-shows-api.ts:837](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e4df7f8/src/generated-client/api/tv-shows-api.ts#L837)

___

### enableImageTypes

• `Optional` `Readonly` **enableImageTypes**: [`ImageType`](../enums/generated_client.ImageType.md)[]

Optional. The image types to include in the output.

**`memberof`** TvShowsApiGetSeasons

#### Defined in

[generated-client/api/tv-shows-api.ts:858](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e4df7f8/src/generated-client/api/tv-shows-api.ts#L858)

___

### enableImages

• `Optional` `Readonly` **enableImages**: `boolean`

Optional. Include image information in output.

**`memberof`** TvShowsApiGetSeasons

#### Defined in

[generated-client/api/tv-shows-api.ts:844](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e4df7f8/src/generated-client/api/tv-shows-api.ts#L844)

___

### enableUserData

• `Optional` `Readonly` **enableUserData**: `boolean`

Optional. Include user data.

**`memberof`** TvShowsApiGetSeasons

#### Defined in

[generated-client/api/tv-shows-api.ts:865](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e4df7f8/src/generated-client/api/tv-shows-api.ts#L865)

___

### fields

• `Optional` `Readonly` **fields**: [`ItemFields`](../enums/generated_client.ItemFields.md)[]

Optional. Specify additional fields of information to return in the output. This allows multiple, comma delimited. Options: Budget, Chapters, DateCreated, Genres, HomePageUrl, IndexOptions, MediaStreams, Overview, ParentId, Path, People, ProviderIds, PrimaryImageAspectRatio, Revenue, SortName, Studios, Taglines, TrailerUrls.

**`memberof`** TvShowsApiGetSeasons

#### Defined in

[generated-client/api/tv-shows-api.ts:816](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e4df7f8/src/generated-client/api/tv-shows-api.ts#L816)

___

### imageTypeLimit

• `Optional` `Readonly` **imageTypeLimit**: `number`

Optional. The max number of images to return, per image type.

**`memberof`** TvShowsApiGetSeasons

#### Defined in

[generated-client/api/tv-shows-api.ts:851](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e4df7f8/src/generated-client/api/tv-shows-api.ts#L851)

___

### isMissing

• `Optional` `Readonly` **isMissing**: `boolean`

Optional. Filter by items that are missing episodes or not.

**`memberof`** TvShowsApiGetSeasons

#### Defined in

[generated-client/api/tv-shows-api.ts:830](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e4df7f8/src/generated-client/api/tv-shows-api.ts#L830)

___

### isSpecialSeason

• `Optional` `Readonly` **isSpecialSeason**: `boolean`

Optional. Filter by special season.

**`memberof`** TvShowsApiGetSeasons

#### Defined in

[generated-client/api/tv-shows-api.ts:823](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e4df7f8/src/generated-client/api/tv-shows-api.ts#L823)

___

### seriesId

• `Readonly` **seriesId**: `string`

The series id.

**`memberof`** TvShowsApiGetSeasons

#### Defined in

[generated-client/api/tv-shows-api.ts:802](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e4df7f8/src/generated-client/api/tv-shows-api.ts#L802)

___

### userId

• `Optional` `Readonly` **userId**: `string`

The user id.

**`memberof`** TvShowsApiGetSeasons

#### Defined in

[generated-client/api/tv-shows-api.ts:809](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e4df7f8/src/generated-client/api/tv-shows-api.ts#L809)
