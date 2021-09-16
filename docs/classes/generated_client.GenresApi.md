[jellyfin-sdk-typescript](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / GenresApi

# Class: GenresApi

[generated-client](../modules/generated_client.md).GenresApi

GenresApi - object-oriented interface

**`export`**

## Hierarchy

- `BaseAPI`

  ↳ **`GenresApi`**

## Table of contents

### Constructors

- [constructor](generated_client.GenresApi.md#constructor)

### Properties

- [axios](generated_client.GenresApi.md#axios)
- [basePath](generated_client.GenresApi.md#basepath)
- [configuration](generated_client.GenresApi.md#configuration)

### Methods

- [getGenre](generated_client.GenresApi.md#getgenre)
- [getGenres](generated_client.GenresApi.md#getgenres)

## Constructors

### constructor

• **new GenresApi**(`configuration?`, `basePath?`, `axios?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](generated_client.Configuration.md) |
| `basePath` | `string` |
| `axios` | `AxiosInstance` |

#### Inherited from

BaseAPI.constructor

#### Defined in

[generated-client/base.ts:52](https://github.com/thornbill/jellyfin-sdk-typescript/blob/644c849/src/generated-client/base.ts#L52)

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

[generated-client/base.ts:50](https://github.com/thornbill/jellyfin-sdk-typescript/blob/644c849/src/generated-client/base.ts#L50)

## Methods

### getGenre

▸ **getGenre**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`BaseItemDto`](../interfaces/generated_client.BaseItemDto.md)\>\>

**`summary`** Gets a genre, by name.

**`throws`** {RequiredError}

**`memberof`** GenresApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`GenresApiGetGenreRequest`](../interfaces/generated_client.GenresApiGetGenreRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`BaseItemDto`](../interfaces/generated_client.BaseItemDto.md)\>\>

#### Defined in

[generated-client/api/genres-api.ts:444](https://github.com/thornbill/jellyfin-sdk-typescript/blob/644c849/src/generated-client/api/genres-api.ts#L444)

___

### getGenres

▸ **getGenres**(`requestParameters?`, `options?`): `Promise`<`AxiosResponse`<[`BaseItemDtoQueryResult`](../interfaces/generated_client.BaseItemDtoQueryResult.md)\>\>

**`summary`** Gets all genres from a given item, folder, or the entire library.

**`throws`** {RequiredError}

**`memberof`** GenresApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`GenresApiGetGenresRequest`](../interfaces/generated_client.GenresApiGetGenresRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`BaseItemDtoQueryResult`](../interfaces/generated_client.BaseItemDtoQueryResult.md)\>\>

#### Defined in

[generated-client/api/genres-api.ts:456](https://github.com/thornbill/jellyfin-sdk-typescript/blob/644c849/src/generated-client/api/genres-api.ts#L456)
