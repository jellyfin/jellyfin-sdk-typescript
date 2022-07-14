[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / MusicGenresApi

# Class: MusicGenresApi

[generated-client](../modules/generated_client.md).MusicGenresApi

MusicGenresApi - object-oriented interface

**`export`**

## Hierarchy

- `BaseAPI`

  ↳ **`MusicGenresApi`**

## Table of contents

### Constructors

- [constructor](generated_client.MusicGenresApi.md#constructor)

### Properties

- [axios](generated_client.MusicGenresApi.md#axios)
- [basePath](generated_client.MusicGenresApi.md#basepath)
- [configuration](generated_client.MusicGenresApi.md#configuration)

### Methods

- [getMusicGenre](generated_client.MusicGenresApi.md#getmusicgenre)
- [getMusicGenres](generated_client.MusicGenresApi.md#getmusicgenres)

## Constructors

### constructor

• **new MusicGenresApi**(`configuration?`, `basePath?`, `axios?`)

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

### getMusicGenre

▸ **getMusicGenre**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`BaseItemDto`](../interfaces/generated_client.BaseItemDto.md), `any`\>\>

**`summary`** Gets a music genre, by name.

**`throws`** {RequiredError}

**`memberof`** MusicGenresApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`MusicGenresApiGetMusicGenreRequest`](../interfaces/generated_client.MusicGenresApiGetMusicGenreRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`BaseItemDto`](../interfaces/generated_client.BaseItemDto.md), `any`\>\>

#### Defined in

[generated-client/api/music-genres-api.ts:479](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/music-genres-api.ts#L479)

___

### getMusicGenres

▸ **getMusicGenres**(`requestParameters?`, `options?`): `Promise`<`AxiosResponse`<[`BaseItemDtoQueryResult`](../interfaces/generated_client.BaseItemDtoQueryResult.md), `any`\>\>

**`summary`** Gets all music genres from a given item, folder, or the entire library.

**`deprecated`**

**`throws`** {RequiredError}

**`memberof`** MusicGenresApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`MusicGenresApiGetMusicGenresRequest`](../interfaces/generated_client.MusicGenresApiGetMusicGenresRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`BaseItemDtoQueryResult`](../interfaces/generated_client.BaseItemDtoQueryResult.md), `any`\>\>

#### Defined in

[generated-client/api/music-genres-api.ts:492](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/music-genres-api.ts#L492)
