[jellyfin-sdk-typescript](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / MoviesApiGetMovieRecommendationsRequest

# Interface: MoviesApiGetMovieRecommendationsRequest

[generated-client](../modules/generated_client.md).MoviesApiGetMovieRecommendationsRequest

Request parameters for getMovieRecommendations operation in MoviesApi.

**`export`**

**`interface`** MoviesApiGetMovieRecommendationsRequest

## Table of contents

### Properties

- [categoryLimit](generated_client.MoviesApiGetMovieRecommendationsRequest.md#categorylimit)
- [fields](generated_client.MoviesApiGetMovieRecommendationsRequest.md#fields)
- [itemLimit](generated_client.MoviesApiGetMovieRecommendationsRequest.md#itemlimit)
- [parentId](generated_client.MoviesApiGetMovieRecommendationsRequest.md#parentid)
- [userId](generated_client.MoviesApiGetMovieRecommendationsRequest.md#userid)

## Properties

### categoryLimit

• `Optional` `Readonly` **categoryLimit**: `number`

The max number of categories to return.

**`memberof`** MoviesApiGetMovieRecommendations

#### Defined in

[generated-client/api/movies-api.ts:175](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/movies-api.ts#L175)

___

### fields

• `Optional` `Readonly` **fields**: [`ItemFields`](../enums/generated_client.ItemFields.md)[]

Optional. The fields to return.

**`memberof`** MoviesApiGetMovieRecommendations

#### Defined in

[generated-client/api/movies-api.ts:168](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/movies-api.ts#L168)

___

### itemLimit

• `Optional` `Readonly` **itemLimit**: `number`

The max number of items to return per category.

**`memberof`** MoviesApiGetMovieRecommendations

#### Defined in

[generated-client/api/movies-api.ts:182](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/movies-api.ts#L182)

___

### parentId

• `Optional` `Readonly` **parentId**: `string`

Specify this to localize the search to a specific item or folder. Omit to use the root.

**`memberof`** MoviesApiGetMovieRecommendations

#### Defined in

[generated-client/api/movies-api.ts:161](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/movies-api.ts#L161)

___

### userId

• `Optional` `Readonly` **userId**: `string`

Optional. Filter by user id, and attach user data.

**`memberof`** MoviesApiGetMovieRecommendations

#### Defined in

[generated-client/api/movies-api.ts:154](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/movies-api.ts#L154)
