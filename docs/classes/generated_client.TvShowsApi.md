[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / TvShowsApi

# Class: TvShowsApi

[generated-client](../modules/generated_client.md).TvShowsApi

TvShowsApi - object-oriented interface

**`export`**

## Hierarchy

- `BaseAPI`

  ↳ **`TvShowsApi`**

## Table of contents

### Constructors

- [constructor](generated_client.TvShowsApi.md#constructor)

### Properties

- [axios](generated_client.TvShowsApi.md#axios)
- [basePath](generated_client.TvShowsApi.md#basepath)
- [configuration](generated_client.TvShowsApi.md#configuration)

### Methods

- [getEpisodes](generated_client.TvShowsApi.md#getepisodes)
- [getNextUp](generated_client.TvShowsApi.md#getnextup)
- [getSeasons](generated_client.TvShowsApi.md#getseasons)
- [getUpcomingEpisodes](generated_client.TvShowsApi.md#getupcomingepisodes)

## Constructors

### constructor

• **new TvShowsApi**(`configuration?`, `basePath?`, `axios?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](generated_client.Configuration.md) |
| `basePath` | `string` |
| `axios` | `AxiosInstance` |

#### Inherited from

BaseAPI.constructor

#### Defined in

[generated-client/base.ts:52](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/base.ts#L52)

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

[generated-client/base.ts:50](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/base.ts#L50)

## Methods

### getEpisodes

▸ **getEpisodes**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`BaseItemDtoQueryResult`](../interfaces/generated_client.BaseItemDtoQueryResult.md)\>\>

**`summary`** Gets episodes for a tv season.

**`throws`** {RequiredError}

**`memberof`** TvShowsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`TvShowsApiGetEpisodesRequest`](../interfaces/generated_client.TvShowsApiGetEpisodesRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`BaseItemDtoQueryResult`](../interfaces/generated_client.BaseItemDtoQueryResult.md)\>\>

#### Defined in

[generated-client/api/tv-shows-api.ts:953](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/tv-shows-api.ts#L953)

___

### getNextUp

▸ **getNextUp**(`requestParameters?`, `options?`): `Promise`<`AxiosResponse`<[`BaseItemDtoQueryResult`](../interfaces/generated_client.BaseItemDtoQueryResult.md)\>\>

**`summary`** Gets a list of next up episodes.

**`throws`** {RequiredError}

**`memberof`** TvShowsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`TvShowsApiGetNextUpRequest`](../interfaces/generated_client.TvShowsApiGetNextUpRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`BaseItemDtoQueryResult`](../interfaces/generated_client.BaseItemDtoQueryResult.md)\>\>

#### Defined in

[generated-client/api/tv-shows-api.ts:965](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/tv-shows-api.ts#L965)

___

### getSeasons

▸ **getSeasons**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`BaseItemDtoQueryResult`](../interfaces/generated_client.BaseItemDtoQueryResult.md)\>\>

**`summary`** Gets seasons for a tv series.

**`throws`** {RequiredError}

**`memberof`** TvShowsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`TvShowsApiGetSeasonsRequest`](../interfaces/generated_client.TvShowsApiGetSeasonsRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`BaseItemDtoQueryResult`](../interfaces/generated_client.BaseItemDtoQueryResult.md)\>\>

#### Defined in

[generated-client/api/tv-shows-api.ts:977](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/tv-shows-api.ts#L977)

___

### getUpcomingEpisodes

▸ **getUpcomingEpisodes**(`requestParameters?`, `options?`): `Promise`<`AxiosResponse`<[`BaseItemDtoQueryResult`](../interfaces/generated_client.BaseItemDtoQueryResult.md)\>\>

**`summary`** Gets a list of upcoming episodes.

**`throws`** {RequiredError}

**`memberof`** TvShowsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`TvShowsApiGetUpcomingEpisodesRequest`](../interfaces/generated_client.TvShowsApiGetUpcomingEpisodesRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`BaseItemDtoQueryResult`](../interfaces/generated_client.BaseItemDtoQueryResult.md)\>\>

#### Defined in

[generated-client/api/tv-shows-api.ts:989](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/tv-shows-api.ts#L989)
