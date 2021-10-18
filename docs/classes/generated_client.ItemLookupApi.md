[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / ItemLookupApi

# Class: ItemLookupApi

[generated-client](../modules/generated_client.md).ItemLookupApi

ItemLookupApi - object-oriented interface

**`export`**

## Hierarchy

- `BaseAPI`

  ↳ **`ItemLookupApi`**

## Table of contents

### Constructors

- [constructor](generated_client.ItemLookupApi.md#constructor)

### Properties

- [axios](generated_client.ItemLookupApi.md#axios)
- [basePath](generated_client.ItemLookupApi.md#basepath)
- [configuration](generated_client.ItemLookupApi.md#configuration)

### Methods

- [applySearchCriteria](generated_client.ItemLookupApi.md#applysearchcriteria)
- [getBookRemoteSearchResults](generated_client.ItemLookupApi.md#getbookremotesearchresults)
- [getBoxSetRemoteSearchResults](generated_client.ItemLookupApi.md#getboxsetremotesearchresults)
- [getExternalIdInfos](generated_client.ItemLookupApi.md#getexternalidinfos)
- [getMovieRemoteSearchResults](generated_client.ItemLookupApi.md#getmovieremotesearchresults)
- [getMusicAlbumRemoteSearchResults](generated_client.ItemLookupApi.md#getmusicalbumremotesearchresults)
- [getMusicArtistRemoteSearchResults](generated_client.ItemLookupApi.md#getmusicartistremotesearchresults)
- [getMusicVideoRemoteSearchResults](generated_client.ItemLookupApi.md#getmusicvideoremotesearchresults)
- [getPersonRemoteSearchResults](generated_client.ItemLookupApi.md#getpersonremotesearchresults)
- [getSeriesRemoteSearchResults](generated_client.ItemLookupApi.md#getseriesremotesearchresults)
- [getTrailerRemoteSearchResults](generated_client.ItemLookupApi.md#gettrailerremotesearchresults)

## Constructors

### constructor

• **new ItemLookupApi**(`configuration?`, `basePath?`, `axios?`)

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

### applySearchCriteria

▸ **applySearchCriteria**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Applies search criteria to an item and refreshes metadata.

**`throws`** {RequiredError}

**`memberof`** ItemLookupApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`ItemLookupApiApplySearchCriteriaRequest`](../interfaces/generated_client.ItemLookupApiApplySearchCriteriaRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[generated-client/api/item-lookup-api.ts:930](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/item-lookup-api.ts#L930)

___

### getBookRemoteSearchResults

▸ **getBookRemoteSearchResults**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`RemoteSearchResult`](../interfaces/generated_client.RemoteSearchResult.md)[]\>\>

**`summary`** Get book remote search.

**`throws`** {RequiredError}

**`memberof`** ItemLookupApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`ItemLookupApiGetBookRemoteSearchResultsRequest`](../interfaces/generated_client.ItemLookupApiGetBookRemoteSearchResultsRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`RemoteSearchResult`](../interfaces/generated_client.RemoteSearchResult.md)[]\>\>

#### Defined in

[generated-client/api/item-lookup-api.ts:942](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/item-lookup-api.ts#L942)

___

### getBoxSetRemoteSearchResults

▸ **getBoxSetRemoteSearchResults**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`RemoteSearchResult`](../interfaces/generated_client.RemoteSearchResult.md)[]\>\>

**`summary`** Get box set remote search.

**`throws`** {RequiredError}

**`memberof`** ItemLookupApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`ItemLookupApiGetBoxSetRemoteSearchResultsRequest`](../interfaces/generated_client.ItemLookupApiGetBoxSetRemoteSearchResultsRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`RemoteSearchResult`](../interfaces/generated_client.RemoteSearchResult.md)[]\>\>

#### Defined in

[generated-client/api/item-lookup-api.ts:954](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/item-lookup-api.ts#L954)

___

### getExternalIdInfos

▸ **getExternalIdInfos**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`ExternalIdInfo`](../interfaces/generated_client.ExternalIdInfo.md)[]\>\>

**`summary`** Get the item\'s external id info.

**`throws`** {RequiredError}

**`memberof`** ItemLookupApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`ItemLookupApiGetExternalIdInfosRequest`](../interfaces/generated_client.ItemLookupApiGetExternalIdInfosRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`ExternalIdInfo`](../interfaces/generated_client.ExternalIdInfo.md)[]\>\>

#### Defined in

[generated-client/api/item-lookup-api.ts:966](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/item-lookup-api.ts#L966)

___

### getMovieRemoteSearchResults

▸ **getMovieRemoteSearchResults**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`RemoteSearchResult`](../interfaces/generated_client.RemoteSearchResult.md)[]\>\>

**`summary`** Get movie remote search.

**`throws`** {RequiredError}

**`memberof`** ItemLookupApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`ItemLookupApiGetMovieRemoteSearchResultsRequest`](../interfaces/generated_client.ItemLookupApiGetMovieRemoteSearchResultsRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`RemoteSearchResult`](../interfaces/generated_client.RemoteSearchResult.md)[]\>\>

#### Defined in

[generated-client/api/item-lookup-api.ts:978](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/item-lookup-api.ts#L978)

___

### getMusicAlbumRemoteSearchResults

▸ **getMusicAlbumRemoteSearchResults**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`RemoteSearchResult`](../interfaces/generated_client.RemoteSearchResult.md)[]\>\>

**`summary`** Get music album remote search.

**`throws`** {RequiredError}

**`memberof`** ItemLookupApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`ItemLookupApiGetMusicAlbumRemoteSearchResultsRequest`](../interfaces/generated_client.ItemLookupApiGetMusicAlbumRemoteSearchResultsRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`RemoteSearchResult`](../interfaces/generated_client.RemoteSearchResult.md)[]\>\>

#### Defined in

[generated-client/api/item-lookup-api.ts:990](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/item-lookup-api.ts#L990)

___

### getMusicArtistRemoteSearchResults

▸ **getMusicArtistRemoteSearchResults**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`RemoteSearchResult`](../interfaces/generated_client.RemoteSearchResult.md)[]\>\>

**`summary`** Get music artist remote search.

**`throws`** {RequiredError}

**`memberof`** ItemLookupApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`ItemLookupApiGetMusicArtistRemoteSearchResultsRequest`](../interfaces/generated_client.ItemLookupApiGetMusicArtistRemoteSearchResultsRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`RemoteSearchResult`](../interfaces/generated_client.RemoteSearchResult.md)[]\>\>

#### Defined in

[generated-client/api/item-lookup-api.ts:1002](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/item-lookup-api.ts#L1002)

___

### getMusicVideoRemoteSearchResults

▸ **getMusicVideoRemoteSearchResults**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`RemoteSearchResult`](../interfaces/generated_client.RemoteSearchResult.md)[]\>\>

**`summary`** Get music video remote search.

**`throws`** {RequiredError}

**`memberof`** ItemLookupApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`ItemLookupApiGetMusicVideoRemoteSearchResultsRequest`](../interfaces/generated_client.ItemLookupApiGetMusicVideoRemoteSearchResultsRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`RemoteSearchResult`](../interfaces/generated_client.RemoteSearchResult.md)[]\>\>

#### Defined in

[generated-client/api/item-lookup-api.ts:1014](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/item-lookup-api.ts#L1014)

___

### getPersonRemoteSearchResults

▸ **getPersonRemoteSearchResults**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`RemoteSearchResult`](../interfaces/generated_client.RemoteSearchResult.md)[]\>\>

**`summary`** Get person remote search.

**`throws`** {RequiredError}

**`memberof`** ItemLookupApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`ItemLookupApiGetPersonRemoteSearchResultsRequest`](../interfaces/generated_client.ItemLookupApiGetPersonRemoteSearchResultsRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`RemoteSearchResult`](../interfaces/generated_client.RemoteSearchResult.md)[]\>\>

#### Defined in

[generated-client/api/item-lookup-api.ts:1026](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/item-lookup-api.ts#L1026)

___

### getSeriesRemoteSearchResults

▸ **getSeriesRemoteSearchResults**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`RemoteSearchResult`](../interfaces/generated_client.RemoteSearchResult.md)[]\>\>

**`summary`** Get series remote search.

**`throws`** {RequiredError}

**`memberof`** ItemLookupApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`ItemLookupApiGetSeriesRemoteSearchResultsRequest`](../interfaces/generated_client.ItemLookupApiGetSeriesRemoteSearchResultsRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`RemoteSearchResult`](../interfaces/generated_client.RemoteSearchResult.md)[]\>\>

#### Defined in

[generated-client/api/item-lookup-api.ts:1038](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/item-lookup-api.ts#L1038)

___

### getTrailerRemoteSearchResults

▸ **getTrailerRemoteSearchResults**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`RemoteSearchResult`](../interfaces/generated_client.RemoteSearchResult.md)[]\>\>

**`summary`** Get trailer remote search.

**`throws`** {RequiredError}

**`memberof`** ItemLookupApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`ItemLookupApiGetTrailerRemoteSearchResultsRequest`](../interfaces/generated_client.ItemLookupApiGetTrailerRemoteSearchResultsRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`RemoteSearchResult`](../interfaces/generated_client.RemoteSearchResult.md)[]\>\>

#### Defined in

[generated-client/api/item-lookup-api.ts:1050](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/item-lookup-api.ts#L1050)
