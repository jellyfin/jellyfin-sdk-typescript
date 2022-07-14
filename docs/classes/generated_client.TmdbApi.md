[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / TmdbApi

# Class: TmdbApi

[generated-client](../modules/generated_client.md).TmdbApi

TmdbApi - object-oriented interface

**`export`**

## Hierarchy

- `BaseAPI`

  ↳ **`TmdbApi`**

## Table of contents

### Constructors

- [constructor](generated_client.TmdbApi.md#constructor)

### Properties

- [axios](generated_client.TmdbApi.md#axios)
- [basePath](generated_client.TmdbApi.md#basepath)
- [configuration](generated_client.TmdbApi.md#configuration)

### Methods

- [tmdbClientConfiguration](generated_client.TmdbApi.md#tmdbclientconfiguration)

## Constructors

### constructor

• **new TmdbApi**(`configuration?`, `basePath?`, `axios?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](generated_client.Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Inherited from

BaseAPI.constructor

#### Defined in

[generated-client/base.ts:52](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/base.ts#L52)

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

[generated-client/base.ts:50](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/base.ts#L50)

## Methods

### tmdbClientConfiguration

▸ **tmdbClientConfiguration**(`options?`): `Promise`<`AxiosResponse`<[`ConfigImageTypes`](../interfaces/generated_client.ConfigImageTypes.md), `any`\>\>

**`summary`** Gets the TMDb image configuration options.

**`throws`** {RequiredError}

**`memberof`** TmdbApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `any` |

#### Returns

`Promise`<`AxiosResponse`<[`ConfigImageTypes`](../interfaces/generated_client.ConfigImageTypes.md), `any`\>\>

#### Defined in

[generated-client/api/tmdb-api.ts:120](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/tmdb-api.ts#L120)
