[jellyfin-sdk-typescript](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / LibraryApiGetSimilarAlbumsRequest

# Interface: LibraryApiGetSimilarAlbumsRequest

[generated-client](../modules/generated_client.md).LibraryApiGetSimilarAlbumsRequest

Request parameters for getSimilarAlbums operation in LibraryApi.

**`export`**

**`interface`** LibraryApiGetSimilarAlbumsRequest

## Table of contents

### Properties

- [excludeArtistIds](generated_client.LibraryApiGetSimilarAlbumsRequest.md#excludeartistids)
- [fields](generated_client.LibraryApiGetSimilarAlbumsRequest.md#fields)
- [itemId](generated_client.LibraryApiGetSimilarAlbumsRequest.md#itemid)
- [limit](generated_client.LibraryApiGetSimilarAlbumsRequest.md#limit)
- [userId](generated_client.LibraryApiGetSimilarAlbumsRequest.md#userid)

## Properties

### excludeArtistIds

• `Optional` `Readonly` **excludeArtistIds**: `string`[]

Exclude artist ids.

**`memberof`** LibraryApiGetSimilarAlbums

#### Defined in

[generated-client/api/library-api.ts:1931](https://github.com/thornbill/jellyfin-sdk-typescript/blob/644c849/src/generated-client/api/library-api.ts#L1931)

___

### fields

• `Optional` `Readonly` **fields**: [`ItemFields`](../enums/generated_client.ItemFields.md)[]

Optional. Specify additional fields of information to return in the output. This allows multiple, comma delimited. Options: Budget, Chapters, DateCreated, Genres, HomePageUrl, IndexOptions, MediaStreams, Overview, ParentId, Path, People, ProviderIds, PrimaryImageAspectRatio, Revenue, SortName, Studios, Taglines, TrailerUrls.

**`memberof`** LibraryApiGetSimilarAlbums

#### Defined in

[generated-client/api/library-api.ts:1952](https://github.com/thornbill/jellyfin-sdk-typescript/blob/644c849/src/generated-client/api/library-api.ts#L1952)

___

### itemId

• `Readonly` **itemId**: `string`

The item id.

**`memberof`** LibraryApiGetSimilarAlbums

#### Defined in

[generated-client/api/library-api.ts:1924](https://github.com/thornbill/jellyfin-sdk-typescript/blob/644c849/src/generated-client/api/library-api.ts#L1924)

___

### limit

• `Optional` `Readonly` **limit**: `number`

Optional. The maximum number of records to return.

**`memberof`** LibraryApiGetSimilarAlbums

#### Defined in

[generated-client/api/library-api.ts:1945](https://github.com/thornbill/jellyfin-sdk-typescript/blob/644c849/src/generated-client/api/library-api.ts#L1945)

___

### userId

• `Optional` `Readonly` **userId**: `string`

Optional. Filter by user id, and attach user data.

**`memberof`** LibraryApiGetSimilarAlbums

#### Defined in

[generated-client/api/library-api.ts:1938](https://github.com/thornbill/jellyfin-sdk-typescript/blob/644c849/src/generated-client/api/library-api.ts#L1938)
