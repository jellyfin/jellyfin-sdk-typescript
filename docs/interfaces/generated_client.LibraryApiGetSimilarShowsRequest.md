[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / LibraryApiGetSimilarShowsRequest

# Interface: LibraryApiGetSimilarShowsRequest

[generated-client](../modules/generated_client.md).LibraryApiGetSimilarShowsRequest

Request parameters for getSimilarShows operation in LibraryApi.

**`export`**

**`interface`** LibraryApiGetSimilarShowsRequest

## Table of contents

### Properties

- [excludeArtistIds](generated_client.LibraryApiGetSimilarShowsRequest.md#excludeartistids)
- [fields](generated_client.LibraryApiGetSimilarShowsRequest.md#fields)
- [itemId](generated_client.LibraryApiGetSimilarShowsRequest.md#itemid)
- [limit](generated_client.LibraryApiGetSimilarShowsRequest.md#limit)
- [userId](generated_client.LibraryApiGetSimilarShowsRequest.md#userid)

## Properties

### excludeArtistIds

• `Optional` `Readonly` **excludeArtistIds**: `string`[]

Exclude artist ids.

**`memberof`** LibraryApiGetSimilarShows

#### Defined in

[generated-client/api/library-api.ts:2099](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/library-api.ts#L2099)

___

### fields

• `Optional` `Readonly` **fields**: [`ItemFields`](../enums/generated_client.ItemFields.md)[]

Optional. Specify additional fields of information to return in the output. This allows multiple, comma delimited. Options: Budget, Chapters, DateCreated, Genres, HomePageUrl, IndexOptions, MediaStreams, Overview, ParentId, Path, People, ProviderIds, PrimaryImageAspectRatio, Revenue, SortName, Studios, Taglines, TrailerUrls.

**`memberof`** LibraryApiGetSimilarShows

#### Defined in

[generated-client/api/library-api.ts:2120](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/library-api.ts#L2120)

___

### itemId

• `Readonly` **itemId**: `string`

The item id.

**`memberof`** LibraryApiGetSimilarShows

#### Defined in

[generated-client/api/library-api.ts:2092](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/library-api.ts#L2092)

___

### limit

• `Optional` `Readonly` **limit**: `number`

Optional. The maximum number of records to return.

**`memberof`** LibraryApiGetSimilarShows

#### Defined in

[generated-client/api/library-api.ts:2113](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/library-api.ts#L2113)

___

### userId

• `Optional` `Readonly` **userId**: `string`

Optional. Filter by user id, and attach user data.

**`memberof`** LibraryApiGetSimilarShows

#### Defined in

[generated-client/api/library-api.ts:2106](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/library-api.ts#L2106)
