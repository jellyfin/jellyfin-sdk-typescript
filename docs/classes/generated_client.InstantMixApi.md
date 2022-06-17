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
- [getInstantMixFromMusicGenreByName](generated_client.InstantMixApi.md#getinstantmixfrommusicgenrebyname)
- [getInstantMixFromPlaylist](generated_client.InstantMixApi.md#getinstantmixfromplaylist)
- [getInstantMixFromSong](generated_client.InstantMixApi.md#getinstantmixfromsong)

## Constructors

### constructor

• **new InstantMixApi**(`configuration?`, `basePath?`, `axios?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](generated_client.Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Inherited from

BaseAPI.constructor

#### Defined in

[generated-client/base.ts:52](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/base.ts#L52)

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

[generated-client/base.ts:50](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/base.ts#L50)

## Methods

### getInstantMixFromAlbum

▸ **getInstantMixFromAlbum**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`BaseItemDtoQueryResult`](../interfaces/generated_client.BaseItemDtoQueryResult.md), `any`\>\>

**`summary`** Creates an instant playlist based on a given album.

**`throws`** {RequiredError}

**`memberof`** InstantMixApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`InstantMixApiGetInstantMixFromAlbumRequest`](../interfaces/generated_client.InstantMixApiGetInstantMixFromAlbumRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`BaseItemDtoQueryResult`](../interfaces/generated_client.BaseItemDtoQueryResult.md), `any`\>\>

#### Defined in

[generated-client/api/instant-mix-api.ts:1442](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/instant-mix-api.ts#L1442)

___

### getInstantMixFromArtists

▸ **getInstantMixFromArtists**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`BaseItemDtoQueryResult`](../interfaces/generated_client.BaseItemDtoQueryResult.md), `any`\>\>

**`summary`** Creates an instant playlist based on a given artist.

**`throws`** {RequiredError}

**`memberof`** InstantMixApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`InstantMixApiGetInstantMixFromArtistsRequest`](../interfaces/generated_client.InstantMixApiGetInstantMixFromArtistsRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`BaseItemDtoQueryResult`](../interfaces/generated_client.BaseItemDtoQueryResult.md), `any`\>\>

#### Defined in

[generated-client/api/instant-mix-api.ts:1454](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/instant-mix-api.ts#L1454)

___

### getInstantMixFromArtists2

▸ **getInstantMixFromArtists2**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`BaseItemDtoQueryResult`](../interfaces/generated_client.BaseItemDtoQueryResult.md), `any`\>\>

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

`Promise`<`AxiosResponse`<[`BaseItemDtoQueryResult`](../interfaces/generated_client.BaseItemDtoQueryResult.md), `any`\>\>

#### Defined in

[generated-client/api/instant-mix-api.ts:1467](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/instant-mix-api.ts#L1467)

___

### getInstantMixFromItem

▸ **getInstantMixFromItem**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`BaseItemDtoQueryResult`](../interfaces/generated_client.BaseItemDtoQueryResult.md), `any`\>\>

**`summary`** Creates an instant playlist based on a given item.

**`throws`** {RequiredError}

**`memberof`** InstantMixApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`InstantMixApiGetInstantMixFromItemRequest`](../interfaces/generated_client.InstantMixApiGetInstantMixFromItemRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`BaseItemDtoQueryResult`](../interfaces/generated_client.BaseItemDtoQueryResult.md), `any`\>\>

#### Defined in

[generated-client/api/instant-mix-api.ts:1479](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/instant-mix-api.ts#L1479)

___

### getInstantMixFromMusicGenreById

▸ **getInstantMixFromMusicGenreById**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`BaseItemDtoQueryResult`](../interfaces/generated_client.BaseItemDtoQueryResult.md), `any`\>\>

**`summary`** Creates an instant playlist based on a given genre.

**`throws`** {RequiredError}

**`memberof`** InstantMixApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`InstantMixApiGetInstantMixFromMusicGenreByIdRequest`](../interfaces/generated_client.InstantMixApiGetInstantMixFromMusicGenreByIdRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`BaseItemDtoQueryResult`](../interfaces/generated_client.BaseItemDtoQueryResult.md), `any`\>\>

#### Defined in

[generated-client/api/instant-mix-api.ts:1491](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/instant-mix-api.ts#L1491)

___

### getInstantMixFromMusicGenreByName

▸ **getInstantMixFromMusicGenreByName**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`BaseItemDtoQueryResult`](../interfaces/generated_client.BaseItemDtoQueryResult.md), `any`\>\>

**`summary`** Creates an instant playlist based on a given genre.

**`throws`** {RequiredError}

**`memberof`** InstantMixApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`InstantMixApiGetInstantMixFromMusicGenreByNameRequest`](../interfaces/generated_client.InstantMixApiGetInstantMixFromMusicGenreByNameRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`BaseItemDtoQueryResult`](../interfaces/generated_client.BaseItemDtoQueryResult.md), `any`\>\>

#### Defined in

[generated-client/api/instant-mix-api.ts:1503](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/instant-mix-api.ts#L1503)

___

### getInstantMixFromPlaylist

▸ **getInstantMixFromPlaylist**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`BaseItemDtoQueryResult`](../interfaces/generated_client.BaseItemDtoQueryResult.md), `any`\>\>

**`summary`** Creates an instant playlist based on a given playlist.

**`throws`** {RequiredError}

**`memberof`** InstantMixApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`InstantMixApiGetInstantMixFromPlaylistRequest`](../interfaces/generated_client.InstantMixApiGetInstantMixFromPlaylistRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`BaseItemDtoQueryResult`](../interfaces/generated_client.BaseItemDtoQueryResult.md), `any`\>\>

#### Defined in

[generated-client/api/instant-mix-api.ts:1515](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/instant-mix-api.ts#L1515)

___

### getInstantMixFromSong

▸ **getInstantMixFromSong**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`BaseItemDtoQueryResult`](../interfaces/generated_client.BaseItemDtoQueryResult.md), `any`\>\>

**`summary`** Creates an instant playlist based on a given song.

**`throws`** {RequiredError}

**`memberof`** InstantMixApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`InstantMixApiGetInstantMixFromSongRequest`](../interfaces/generated_client.InstantMixApiGetInstantMixFromSongRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`BaseItemDtoQueryResult`](../interfaces/generated_client.BaseItemDtoQueryResult.md), `any`\>\>

#### Defined in

[generated-client/api/instant-mix-api.ts:1527](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/instant-mix-api.ts#L1527)
