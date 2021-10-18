[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / MoviesApi

# Class: MoviesApi

[generated-client](../modules/generated_client.md).MoviesApi

MoviesApi - object-oriented interface

**`export`**

## Hierarchy

- `BaseAPI`

  ↳ **`MoviesApi`**

## Table of contents

### Constructors

- [constructor](generated_client.MoviesApi.md#constructor)

### Properties

- [axios](generated_client.MoviesApi.md#axios)
- [basePath](generated_client.MoviesApi.md#basepath)
- [configuration](generated_client.MoviesApi.md#configuration)

### Methods

- [getMovieRecommendations](generated_client.MoviesApi.md#getmovierecommendations)

## Constructors

### constructor

• **new MoviesApi**(`configuration?`, `basePath?`, `axios?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](generated_client.Configuration.md) |
| `basePath` | `string` |
| `axios` | `AxiosInstance` |

#### Inherited from

BaseAPI.constructor

#### Defined in

[generated-client/base.ts:52](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/base.ts#L52)

## Properties

### axios

• `Protected` **axios**: `AxiosInstance`

#### Inherited from

BaseAPI.axios

___

### basePath

• `Protected` **basePath**: `string`

#### Inherited from

BaseAPI.basePath

___

### configuration

• `Protected` **configuration**: `undefined` \| [`Configuration`](generated_client.Configuration.md)

#### Inherited from

BaseAPI.configuration

#### Defined in

[generated-client/base.ts:50](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/base.ts#L50)

## Methods

### getMovieRecommendations

▸ **getMovieRecommendations**(`requestParameters?`, `options?`): `Promise`<`AxiosResponse`<[`RecommendationDto`](../interfaces/generated_client.RecommendationDto.md)[]\>\>

**`summary`** Gets movie recommendations.

**`throws`** {RequiredError}

**`memberof`** MoviesApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`MoviesApiGetMovieRecommendationsRequest`](../interfaces/generated_client.MoviesApiGetMovieRecommendationsRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`RecommendationDto`](../interfaces/generated_client.RecommendationDto.md)[]\>\>

#### Defined in

[generated-client/api/movies-api.ts:200](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/movies-api.ts#L200)
