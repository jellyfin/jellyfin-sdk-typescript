[jellyfin-sdk-typescript](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / LibraryApiGetSimilarMoviesRequest

# Interface: LibraryApiGetSimilarMoviesRequest

[generated-client](../modules/generated_client.md).LibraryApiGetSimilarMoviesRequest

Request parameters for getSimilarMovies operation in LibraryApi.

**`export`**

**`interface`** LibraryApiGetSimilarMoviesRequest

## Table of contents

### Properties

- [excludeArtistIds](generated_client.LibraryApiGetSimilarMoviesRequest.md#excludeartistids)
- [fields](generated_client.LibraryApiGetSimilarMoviesRequest.md#fields)
- [itemId](generated_client.LibraryApiGetSimilarMoviesRequest.md#itemid)
- [limit](generated_client.LibraryApiGetSimilarMoviesRequest.md#limit)
- [userId](generated_client.LibraryApiGetSimilarMoviesRequest.md#userid)

## Properties

### excludeArtistIds

• `Optional` `Readonly` **excludeArtistIds**: `string`[]

Exclude artist ids.

**`memberof`** LibraryApiGetSimilarMovies

#### Defined in

[generated-client/api/library-api.ts:2057](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/api/library-api.ts#L2057)

___

### fields

• `Optional` `Readonly` **fields**: [`ItemFields`](../enums/generated_client.ItemFields.md)[]

Optional. Specify additional fields of information to return in the output. This allows multiple, comma delimited. Options: Budget, Chapters, DateCreated, Genres, HomePageUrl, IndexOptions, MediaStreams, Overview, ParentId, Path, People, ProviderIds, PrimaryImageAspectRatio, Revenue, SortName, Studios, Taglines, TrailerUrls.

**`memberof`** LibraryApiGetSimilarMovies

#### Defined in

[generated-client/api/library-api.ts:2078](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/api/library-api.ts#L2078)

___

### itemId

• `Readonly` **itemId**: `string`

The item id.

**`memberof`** LibraryApiGetSimilarMovies

#### Defined in

[generated-client/api/library-api.ts:2050](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/api/library-api.ts#L2050)

___

### limit

• `Optional` `Readonly` **limit**: `number`

Optional. The maximum number of records to return.

**`memberof`** LibraryApiGetSimilarMovies

#### Defined in

[generated-client/api/library-api.ts:2071](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/api/library-api.ts#L2071)

___

### userId

• `Optional` `Readonly` **userId**: `string`

Optional. Filter by user id, and attach user data.

**`memberof`** LibraryApiGetSimilarMovies

#### Defined in

[generated-client/api/library-api.ts:2064](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/api/library-api.ts#L2064)
