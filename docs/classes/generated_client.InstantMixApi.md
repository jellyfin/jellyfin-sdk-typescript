[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / InstantMixApi

# Class: InstantMixApi

[generated-client](../modules/generated_client.md).InstantMixApi

InstantMixApi - object-oriented interface

**`export`**

## Hierarchy

- `BaseAPI`

  ↳ **`InstantMixApi`**

## Table of contents

### Constructors

- [constructor](generated_client.InstantMixApi.md#constructor)

### Properties

- [axios](generated_client.InstantMixApi.md#axios)
- [basePath](generated_client.InstantMixApi.md#basepath)
- [configuration](generated_client.InstantMixApi.md#configuration)

### Methods

- [getInstantMixFromAlbum](generated_client.InstantMixApi.md#getinstantmixfromalbum)
- [getInstantMixFromArtists](generated_client.InstantMixApi.md#getinstantmixfromartists)
- [getInstantMixFromArtists2](generated_client.InstantMixApi.md#getinstantmixfromartists2)
- [getInstantMixFromItem](generated_client.InstantMixApi.md#getinstantmixfromitem)
- [getInstantMixFromMusicGenreById](generated_client.InstantMixApi.md#getinstantmixfrommusicgenrebyid)
- [getInstantMixFromMusicGenreById2](generated_client.InstantMixApi.md#getinstantmixfrommusicgenrebyid2)
- [getInstantMixFromMusicGenreByName](generated_client.InstantMixApi.md#getinstantmixfrommusicgenrebyname)
- [getInstantMixFromPlaylist](generated_client.InstantMixApi.md#getinstantmixfromplaylist)
- [getInstantMixFromSong](generated_client.InstantMixApi.md#getinstantmixfromsong)

## Constructors

### constructor

• **new InstantMixApi**(`configuration?`, `basePath?`, `axios?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](generated_client.Configuration.md) |
| `basePath` | `string` |
| `axios` | `AxiosInstance` |

#### Inherited from

BaseAPI.constructor

#### Defined in

[generated-client/base.ts:52](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/base.ts#L52)

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

[generated-client/base.ts:50](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/base.ts#L50)

## Methods

### getInstantMixFromAlbum

▸ **getInstantMixFromAlbum**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`BaseItemDtoQueryResult`](../interfaces/generated_client.BaseItemDtoQueryResult.md)\>\>

**`summary`** Creates an instant playlist based on a given album.

**`throws`** {RequiredError}

**`memberof`** InstantMixApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`InstantMixApiGetInstantMixFromAlbumRequest`](../interfaces/generated_client.InstantMixApiGetInstantMixFromAlbumRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`BaseItemDtoQueryResult`](../interfaces/generated_client.BaseItemDtoQueryResult.md)\>\>

#### Defined in

[generated-client/api/instant-mix-api.ts:1615](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/instant-mix-api.ts#L1615)

___

### getInstantMixFromArtists

▸ **getInstantMixFromArtists**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`BaseItemDtoQueryResult`](../interfaces/generated_client.BaseItemDtoQueryResult.md)\>\>

**`summary`** Creates an instant playlist based on a given artist.

**`throws`** {RequiredError}

**`memberof`** InstantMixApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`InstantMixApiGetInstantMixFromArtistsRequest`](../interfaces/generated_client.InstantMixApiGetInstantMixFromArtistsRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`BaseItemDtoQueryResult`](../interfaces/generated_client.BaseItemDtoQueryResult.md)\>\>

#### Defined in

[generated-client/api/instant-mix-api.ts:1627](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/instant-mix-api.ts#L1627)

___

### getInstantMixFromArtists2

▸ **getInstantMixFromArtists2**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`BaseItemDtoQueryResult`](../interfaces/generated_client.BaseItemDtoQueryResult.md)\>\>

**`summary`** Creates an instant playlist based on a given artist.

**`deprecated`**

**`throws`** {RequiredError}

**`memberof`** InstantMixApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`InstantMixApiGetInstantMixFromArtists2Request`](../interfaces/generated_client.InstantMixApiGetInstantMixFromArtists2Request.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`BaseItemDtoQueryResult`](../interfaces/generated_client.BaseItemDtoQueryResult.md)\>\>

#### Defined in

[generated-client/api/instant-mix-api.ts:1640](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/instant-mix-api.ts#L1640)

___

### getInstantMixFromItem

▸ **getInstantMixFromItem**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`BaseItemDtoQueryResult`](../interfaces/generated_client.BaseItemDtoQueryResult.md)\>\>

**`summary`** Creates an instant playlist based on a given item.

**`throws`** {RequiredError}

**`memberof`** InstantMixApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`InstantMixApiGetInstantMixFromItemRequest`](../interfaces/generated_client.InstantMixApiGetInstantMixFromItemRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`BaseItemDtoQueryResult`](../interfaces/generated_client.BaseItemDtoQueryResult.md)\>\>

#### Defined in

[generated-client/api/instant-mix-api.ts:1652](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/instant-mix-api.ts#L1652)

___

### getInstantMixFromMusicGenreById

▸ **getInstantMixFromMusicGenreById**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`BaseItemDtoQueryResult`](../interfaces/generated_client.BaseItemDtoQueryResult.md)\>\>

**`summary`** Creates an instant playlist based on a given genre.

**`throws`** {RequiredError}

**`memberof`** InstantMixApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`InstantMixApiGetInstantMixFromMusicGenreByIdRequest`](../interfaces/generated_client.InstantMixApiGetInstantMixFromMusicGenreByIdRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`BaseItemDtoQueryResult`](../interfaces/generated_client.BaseItemDtoQueryResult.md)\>\>

#### Defined in

[generated-client/api/instant-mix-api.ts:1664](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/instant-mix-api.ts#L1664)

___

### getInstantMixFromMusicGenreById2

▸ **getInstantMixFromMusicGenreById2**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`BaseItemDtoQueryResult`](../interfaces/generated_client.BaseItemDtoQueryResult.md)\>\>

**`summary`** Creates an instant playlist based on a given genre.

**`deprecated`**

**`throws`** {RequiredError}

**`memberof`** InstantMixApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`InstantMixApiGetInstantMixFromMusicGenreById2Request`](../interfaces/generated_client.InstantMixApiGetInstantMixFromMusicGenreById2Request.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`BaseItemDtoQueryResult`](../interfaces/generated_client.BaseItemDtoQueryResult.md)\>\>

#### Defined in

[generated-client/api/instant-mix-api.ts:1677](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/instant-mix-api.ts#L1677)

___

### getInstantMixFromMusicGenreByName

▸ **getInstantMixFromMusicGenreByName**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`BaseItemDtoQueryResult`](../interfaces/generated_client.BaseItemDtoQueryResult.md)\>\>

**`summary`** Creates an instant playlist based on a given genre.

**`throws`** {RequiredError}

**`memberof`** InstantMixApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`InstantMixApiGetInstantMixFromMusicGenreByNameRequest`](../interfaces/generated_client.InstantMixApiGetInstantMixFromMusicGenreByNameRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`BaseItemDtoQueryResult`](../interfaces/generated_client.BaseItemDtoQueryResult.md)\>\>

#### Defined in

[generated-client/api/instant-mix-api.ts:1689](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/instant-mix-api.ts#L1689)

___

### getInstantMixFromPlaylist

▸ **getInstantMixFromPlaylist**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`BaseItemDtoQueryResult`](../interfaces/generated_client.BaseItemDtoQueryResult.md)\>\>

**`summary`** Creates an instant playlist based on a given playlist.

**`throws`** {RequiredError}

**`memberof`** InstantMixApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`InstantMixApiGetInstantMixFromPlaylistRequest`](../interfaces/generated_client.InstantMixApiGetInstantMixFromPlaylistRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`BaseItemDtoQueryResult`](../interfaces/generated_client.BaseItemDtoQueryResult.md)\>\>

#### Defined in

[generated-client/api/instant-mix-api.ts:1701](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/instant-mix-api.ts#L1701)

___

### getInstantMixFromSong

▸ **getInstantMixFromSong**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`BaseItemDtoQueryResult`](../interfaces/generated_client.BaseItemDtoQueryResult.md)\>\>

**`summary`** Creates an instant playlist based on a given song.

**`throws`** {RequiredError}

**`memberof`** InstantMixApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`InstantMixApiGetInstantMixFromSongRequest`](../interfaces/generated_client.InstantMixApiGetInstantMixFromSongRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`BaseItemDtoQueryResult`](../interfaces/generated_client.BaseItemDtoQueryResult.md)\>\>

#### Defined in

[generated-client/api/instant-mix-api.ts:1713](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/instant-mix-api.ts#L1713)
