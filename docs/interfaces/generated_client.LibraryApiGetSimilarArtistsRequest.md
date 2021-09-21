[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / LibraryApiGetSimilarArtistsRequest

# Interface: LibraryApiGetSimilarArtistsRequest

[generated-client](../modules/generated_client.md).LibraryApiGetSimilarArtistsRequest

Request parameters for getSimilarArtists operation in LibraryApi.

**`export`**

**`interface`** LibraryApiGetSimilarArtistsRequest

## Table of contents

### Properties

- [excludeArtistIds](generated_client.LibraryApiGetSimilarArtistsRequest.md#excludeartistids)
- [fields](generated_client.LibraryApiGetSimilarArtistsRequest.md#fields)
- [itemId](generated_client.LibraryApiGetSimilarArtistsRequest.md#itemid)
- [limit](generated_client.LibraryApiGetSimilarArtistsRequest.md#limit)
- [userId](generated_client.LibraryApiGetSimilarArtistsRequest.md#userid)

## Properties

### excludeArtistIds

• `Optional` `Readonly` **excludeArtistIds**: `string`[]

Exclude artist ids.

**`memberof`** LibraryApiGetSimilarArtists

#### Defined in

[generated-client/api/library-api.ts:1973](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/library-api.ts#L1973)

___

### fields

• `Optional` `Readonly` **fields**: [`ItemFields`](../enums/generated_client.ItemFields.md)[]

Optional. Specify additional fields of information to return in the output. This allows multiple, comma delimited. Options: Budget, Chapters, DateCreated, Genres, HomePageUrl, IndexOptions, MediaStreams, Overview, ParentId, Path, People, ProviderIds, PrimaryImageAspectRatio, Revenue, SortName, Studios, Taglines, TrailerUrls.

**`memberof`** LibraryApiGetSimilarArtists

#### Defined in

[generated-client/api/library-api.ts:1994](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/library-api.ts#L1994)

___

### itemId

• `Readonly` **itemId**: `string`

The item id.

**`memberof`** LibraryApiGetSimilarArtists

#### Defined in

[generated-client/api/library-api.ts:1966](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/library-api.ts#L1966)

___

### limit

• `Optional` `Readonly` **limit**: `number`

Optional. The maximum number of records to return.

**`memberof`** LibraryApiGetSimilarArtists

#### Defined in

[generated-client/api/library-api.ts:1987](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/library-api.ts#L1987)

___

### userId

• `Optional` `Readonly` **userId**: `string`

Optional. Filter by user id, and attach user data.

**`memberof`** LibraryApiGetSimilarArtists

#### Defined in

[generated-client/api/library-api.ts:1980](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/library-api.ts#L1980)
