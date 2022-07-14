[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / GenresApi

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

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](generated_client.Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Inherited from

BaseAPI.constructor

#### Defined in

[generated-client/base.ts:52](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/base.ts#L52)

## Properties

### axios

• `Protected` **axios**: `AxiosInstance` = `globalAxios`

#### Inherited from

BaseAPI.axios

___

### basePath

• `Protected` **basePath**: `string` = `BASE_PATH`

#### Inherited from

BaseAPI.basePath

___

### configuration

• `Protected` **configuration**: `undefined` \| [`Configuration`](generated_client.Configuration.md)

#### Inherited from

BaseAPI.configuration

#### Defined in

[generated-client/base.ts:50](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/base.ts#L50)

## Methods

### getGenre

▸ **getGenre**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`BaseItemDto`](../interfaces/generated_client.BaseItemDto.md), `any`\>\>

**`summary`** Gets a genre, by name.

**`throws`** {RequiredError}

**`memberof`** GenresApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`GenresApiGetGenreRequest`](../interfaces/generated_client.GenresApiGetGenreRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`BaseItemDto`](../interfaces/generated_client.BaseItemDto.md), `any`\>\>

#### Defined in

[generated-client/api/genres-api.ts:476](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/genres-api.ts#L476)

___

### getGenres

▸ **getGenres**(`requestParameters?`, `options?`): `Promise`<`AxiosResponse`<[`BaseItemDtoQueryResult`](../interfaces/generated_client.BaseItemDtoQueryResult.md), `any`\>\>

**`summary`** Gets all genres from a given item, folder, or the entire library.

**`throws`** {RequiredError}

**`memberof`** GenresApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`GenresApiGetGenresRequest`](../interfaces/generated_client.GenresApiGetGenresRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`BaseItemDtoQueryResult`](../interfaces/generated_client.BaseItemDtoQueryResult.md), `any`\>\>

#### Defined in

[generated-client/api/genres-api.ts:488](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/genres-api.ts#L488)
