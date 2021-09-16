[jellyfin-sdk-typescript](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / LibraryApiGetSimilarTrailersRequest

# Interface: LibraryApiGetSimilarTrailersRequest

[generated-client](../modules/generated_client.md).LibraryApiGetSimilarTrailersRequest

Request parameters for getSimilarTrailers operation in LibraryApi.

**`export`**

**`interface`** LibraryApiGetSimilarTrailersRequest

## Table of contents

### Properties

- [excludeArtistIds](generated_client.LibraryApiGetSimilarTrailersRequest.md#excludeartistids)
- [fields](generated_client.LibraryApiGetSimilarTrailersRequest.md#fields)
- [itemId](generated_client.LibraryApiGetSimilarTrailersRequest.md#itemid)
- [limit](generated_client.LibraryApiGetSimilarTrailersRequest.md#limit)
- [userId](generated_client.LibraryApiGetSimilarTrailersRequest.md#userid)

## Properties

### excludeArtistIds

• `Optional` `Readonly` **excludeArtistIds**: `string`[]

Exclude artist ids.

**`memberof`** LibraryApiGetSimilarTrailers

#### Defined in

[generated-client/api/library-api.ts:2141](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b0f5501/src/generated-client/api/library-api.ts#L2141)

___

### fields

• `Optional` `Readonly` **fields**: [`ItemFields`](../enums/generated_client.ItemFields.md)[]

Optional. Specify additional fields of information to return in the output. This allows multiple, comma delimited. Options: Budget, Chapters, DateCreated, Genres, HomePageUrl, IndexOptions, MediaStreams, Overview, ParentId, Path, People, ProviderIds, PrimaryImageAspectRatio, Revenue, SortName, Studios, Taglines, TrailerUrls.

**`memberof`** LibraryApiGetSimilarTrailers

#### Defined in

[generated-client/api/library-api.ts:2162](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b0f5501/src/generated-client/api/library-api.ts#L2162)

___

### itemId

• `Readonly` **itemId**: `string`

The item id.

**`memberof`** LibraryApiGetSimilarTrailers

#### Defined in

[generated-client/api/library-api.ts:2134](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b0f5501/src/generated-client/api/library-api.ts#L2134)

___

### limit

• `Optional` `Readonly` **limit**: `number`

Optional. The maximum number of records to return.

**`memberof`** LibraryApiGetSimilarTrailers

#### Defined in

[generated-client/api/library-api.ts:2155](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b0f5501/src/generated-client/api/library-api.ts#L2155)

___

### userId

• `Optional` `Readonly` **userId**: `string`

Optional. Filter by user id, and attach user data.

**`memberof`** LibraryApiGetSimilarTrailers

#### Defined in

[generated-client/api/library-api.ts:2148](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b0f5501/src/generated-client/api/library-api.ts#L2148)
