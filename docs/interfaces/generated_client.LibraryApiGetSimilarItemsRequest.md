[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / LibraryApiGetSimilarItemsRequest

# Interface: LibraryApiGetSimilarItemsRequest

[generated-client](../modules/generated_client.md).LibraryApiGetSimilarItemsRequest

Request parameters for getSimilarItems operation in LibraryApi.

**`export`**

**`interface`** LibraryApiGetSimilarItemsRequest

## Table of contents

### Properties

- [excludeArtistIds](generated_client.LibraryApiGetSimilarItemsRequest.md#excludeartistids)
- [fields](generated_client.LibraryApiGetSimilarItemsRequest.md#fields)
- [itemId](generated_client.LibraryApiGetSimilarItemsRequest.md#itemid)
- [limit](generated_client.LibraryApiGetSimilarItemsRequest.md#limit)
- [userId](generated_client.LibraryApiGetSimilarItemsRequest.md#userid)

## Properties

### excludeArtistIds

• `Optional` `Readonly` **excludeArtistIds**: `string`[]

Exclude artist ids.

**`memberof`** LibraryApiGetSimilarItems

#### Defined in

[generated-client/api/library-api.ts:2015](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/library-api.ts#L2015)

___

### fields

• `Optional` `Readonly` **fields**: [`ItemFields`](../enums/generated_client.ItemFields.md)[]

Optional. Specify additional fields of information to return in the output. This allows multiple, comma delimited. Options: Budget, Chapters, DateCreated, Genres, HomePageUrl, IndexOptions, MediaStreams, Overview, ParentId, Path, People, ProviderIds, PrimaryImageAspectRatio, Revenue, SortName, Studios, Taglines, TrailerUrls.

**`memberof`** LibraryApiGetSimilarItems

#### Defined in

[generated-client/api/library-api.ts:2036](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/library-api.ts#L2036)

___

### itemId

• `Readonly` **itemId**: `string`

The item id.

**`memberof`** LibraryApiGetSimilarItems

#### Defined in

[generated-client/api/library-api.ts:2008](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/library-api.ts#L2008)

___

### limit

• `Optional` `Readonly` **limit**: `number`

Optional. The maximum number of records to return.

**`memberof`** LibraryApiGetSimilarItems

#### Defined in

[generated-client/api/library-api.ts:2029](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/library-api.ts#L2029)

___

### userId

• `Optional` `Readonly` **userId**: `string`

Optional. Filter by user id, and attach user data.

**`memberof`** LibraryApiGetSimilarItems

#### Defined in

[generated-client/api/library-api.ts:2022](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/library-api.ts#L2022)
