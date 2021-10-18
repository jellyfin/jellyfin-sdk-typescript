[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / LibraryApi

# Class: LibraryApi

[generated-client](../modules/generated_client.md).LibraryApi

LibraryApi - object-oriented interface

**`export`**

## Hierarchy

- `BaseAPI`

  ↳ **`LibraryApi`**

## Table of contents

### Constructors

- [constructor](generated_client.LibraryApi.md#constructor)

### Properties

- [axios](generated_client.LibraryApi.md#axios)
- [basePath](generated_client.LibraryApi.md#basepath)
- [configuration](generated_client.LibraryApi.md#configuration)

### Methods

- [deleteItem](generated_client.LibraryApi.md#deleteitem)
- [deleteItems](generated_client.LibraryApi.md#deleteitems)
- [getAncestors](generated_client.LibraryApi.md#getancestors)
- [getCriticReviews](generated_client.LibraryApi.md#getcriticreviews)
- [getDownload](generated_client.LibraryApi.md#getdownload)
- [getFile](generated_client.LibraryApi.md#getfile)
- [getItemCounts](generated_client.LibraryApi.md#getitemcounts)
- [getLibraryOptionsInfo](generated_client.LibraryApi.md#getlibraryoptionsinfo)
- [getMediaFolders](generated_client.LibraryApi.md#getmediafolders)
- [getPhysicalPaths](generated_client.LibraryApi.md#getphysicalpaths)
- [getSimilarAlbums](generated_client.LibraryApi.md#getsimilaralbums)
- [getSimilarArtists](generated_client.LibraryApi.md#getsimilarartists)
- [getSimilarItems](generated_client.LibraryApi.md#getsimilaritems)
- [getSimilarMovies](generated_client.LibraryApi.md#getsimilarmovies)
- [getSimilarShows](generated_client.LibraryApi.md#getsimilarshows)
- [getSimilarTrailers](generated_client.LibraryApi.md#getsimilartrailers)
- [getThemeMedia](generated_client.LibraryApi.md#getthememedia)
- [getThemeSongs](generated_client.LibraryApi.md#getthemesongs)
- [getThemeVideos](generated_client.LibraryApi.md#getthemevideos)
- [postAddedMovies](generated_client.LibraryApi.md#postaddedmovies)
- [postAddedSeries](generated_client.LibraryApi.md#postaddedseries)
- [postUpdatedMedia](generated_client.LibraryApi.md#postupdatedmedia)
- [postUpdatedMovies](generated_client.LibraryApi.md#postupdatedmovies)
- [postUpdatedSeries](generated_client.LibraryApi.md#postupdatedseries)
- [refreshLibrary](generated_client.LibraryApi.md#refreshlibrary)

## Constructors

### constructor

• **new LibraryApi**(`configuration?`, `basePath?`, `axios?`)

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

### deleteItem

▸ **deleteItem**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Deletes an item from the library and filesystem.

**`throws`** {RequiredError}

**`memberof`** LibraryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`LibraryApiDeleteItemRequest`](../interfaces/generated_client.LibraryApiDeleteItemRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[generated-client/api/library-api.ts:2348](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/library-api.ts#L2348)

___

### deleteItems

▸ **deleteItems**(`requestParameters?`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Deletes items from the library and filesystem.

**`throws`** {RequiredError}

**`memberof`** LibraryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`LibraryApiDeleteItemsRequest`](../interfaces/generated_client.LibraryApiDeleteItemsRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[generated-client/api/library-api.ts:2360](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/library-api.ts#L2360)

___

### getAncestors

▸ **getAncestors**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`BaseItemDto`](../interfaces/generated_client.BaseItemDto.md)[]\>\>

**`summary`** Gets all parents of an item.

**`throws`** {RequiredError}

**`memberof`** LibraryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`LibraryApiGetAncestorsRequest`](../interfaces/generated_client.LibraryApiGetAncestorsRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`BaseItemDto`](../interfaces/generated_client.BaseItemDto.md)[]\>\>

#### Defined in

[generated-client/api/library-api.ts:2372](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/library-api.ts#L2372)

___

### getCriticReviews

▸ **getCriticReviews**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`BaseItemDtoQueryResult`](../interfaces/generated_client.BaseItemDtoQueryResult.md)\>\>

**`summary`** Gets critic review for an item.

**`deprecated`**

**`throws`** {RequiredError}

**`memberof`** LibraryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`LibraryApiGetCriticReviewsRequest`](../interfaces/generated_client.LibraryApiGetCriticReviewsRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`BaseItemDtoQueryResult`](../interfaces/generated_client.BaseItemDtoQueryResult.md)\>\>

#### Defined in

[generated-client/api/library-api.ts:2385](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/library-api.ts#L2385)

___

### getDownload

▸ **getDownload**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`any`\>\>

**`summary`** Downloads item media.

**`throws`** {RequiredError}

**`memberof`** LibraryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`LibraryApiGetDownloadRequest`](../interfaces/generated_client.LibraryApiGetDownloadRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`any`\>\>

#### Defined in

[generated-client/api/library-api.ts:2397](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/library-api.ts#L2397)

___

### getFile

▸ **getFile**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`any`\>\>

**`summary`** Get the original file of an item.

**`throws`** {RequiredError}

**`memberof`** LibraryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`LibraryApiGetFileRequest`](../interfaces/generated_client.LibraryApiGetFileRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`any`\>\>

#### Defined in

[generated-client/api/library-api.ts:2409](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/library-api.ts#L2409)

___

### getItemCounts

▸ **getItemCounts**(`requestParameters?`, `options?`): `Promise`<`AxiosResponse`<[`ItemCounts`](../interfaces/generated_client.ItemCounts.md)\>\>

**`summary`** Get item counts.

**`throws`** {RequiredError}

**`memberof`** LibraryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`LibraryApiGetItemCountsRequest`](../interfaces/generated_client.LibraryApiGetItemCountsRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`ItemCounts`](../interfaces/generated_client.ItemCounts.md)\>\>

#### Defined in

[generated-client/api/library-api.ts:2421](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/library-api.ts#L2421)

___

### getLibraryOptionsInfo

▸ **getLibraryOptionsInfo**(`requestParameters?`, `options?`): `Promise`<`AxiosResponse`<[`LibraryOptionsResultDto`](../interfaces/generated_client.LibraryOptionsResultDto.md)\>\>

**`summary`** Gets the library options info.

**`throws`** {RequiredError}

**`memberof`** LibraryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`LibraryApiGetLibraryOptionsInfoRequest`](../interfaces/generated_client.LibraryApiGetLibraryOptionsInfoRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`LibraryOptionsResultDto`](../interfaces/generated_client.LibraryOptionsResultDto.md)\>\>

#### Defined in

[generated-client/api/library-api.ts:2433](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/library-api.ts#L2433)

___

### getMediaFolders

▸ **getMediaFolders**(`requestParameters?`, `options?`): `Promise`<`AxiosResponse`<[`BaseItemDtoQueryResult`](../interfaces/generated_client.BaseItemDtoQueryResult.md)\>\>

**`summary`** Gets all user media folders.

**`throws`** {RequiredError}

**`memberof`** LibraryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`LibraryApiGetMediaFoldersRequest`](../interfaces/generated_client.LibraryApiGetMediaFoldersRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`BaseItemDtoQueryResult`](../interfaces/generated_client.BaseItemDtoQueryResult.md)\>\>

#### Defined in

[generated-client/api/library-api.ts:2445](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/library-api.ts#L2445)

___

### getPhysicalPaths

▸ **getPhysicalPaths**(`options?`): `Promise`<`AxiosResponse`<`string`[]\>\>

**`summary`** Gets a list of physical paths from virtual folders.

**`throws`** {RequiredError}

**`memberof`** LibraryApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `any` |

#### Returns

`Promise`<`AxiosResponse`<`string`[]\>\>

#### Defined in

[generated-client/api/library-api.ts:2456](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/library-api.ts#L2456)

___

### getSimilarAlbums

▸ **getSimilarAlbums**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`BaseItemDtoQueryResult`](../interfaces/generated_client.BaseItemDtoQueryResult.md)\>\>

**`summary`** Gets similar items.

**`throws`** {RequiredError}

**`memberof`** LibraryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`LibraryApiGetSimilarAlbumsRequest`](../interfaces/generated_client.LibraryApiGetSimilarAlbumsRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`BaseItemDtoQueryResult`](../interfaces/generated_client.BaseItemDtoQueryResult.md)\>\>

#### Defined in

[generated-client/api/library-api.ts:2468](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/library-api.ts#L2468)

___

### getSimilarArtists

▸ **getSimilarArtists**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`BaseItemDtoQueryResult`](../interfaces/generated_client.BaseItemDtoQueryResult.md)\>\>

**`summary`** Gets similar items.

**`throws`** {RequiredError}

**`memberof`** LibraryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`LibraryApiGetSimilarArtistsRequest`](../interfaces/generated_client.LibraryApiGetSimilarArtistsRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`BaseItemDtoQueryResult`](../interfaces/generated_client.BaseItemDtoQueryResult.md)\>\>

#### Defined in

[generated-client/api/library-api.ts:2480](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/library-api.ts#L2480)

___

### getSimilarItems

▸ **getSimilarItems**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`BaseItemDtoQueryResult`](../interfaces/generated_client.BaseItemDtoQueryResult.md)\>\>

**`summary`** Gets similar items.

**`throws`** {RequiredError}

**`memberof`** LibraryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`LibraryApiGetSimilarItemsRequest`](../interfaces/generated_client.LibraryApiGetSimilarItemsRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`BaseItemDtoQueryResult`](../interfaces/generated_client.BaseItemDtoQueryResult.md)\>\>

#### Defined in

[generated-client/api/library-api.ts:2492](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/library-api.ts#L2492)

___

### getSimilarMovies

▸ **getSimilarMovies**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`BaseItemDtoQueryResult`](../interfaces/generated_client.BaseItemDtoQueryResult.md)\>\>

**`summary`** Gets similar items.

**`throws`** {RequiredError}

**`memberof`** LibraryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`LibraryApiGetSimilarMoviesRequest`](../interfaces/generated_client.LibraryApiGetSimilarMoviesRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`BaseItemDtoQueryResult`](../interfaces/generated_client.BaseItemDtoQueryResult.md)\>\>

#### Defined in

[generated-client/api/library-api.ts:2504](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/library-api.ts#L2504)

___

### getSimilarShows

▸ **getSimilarShows**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`BaseItemDtoQueryResult`](../interfaces/generated_client.BaseItemDtoQueryResult.md)\>\>

**`summary`** Gets similar items.

**`throws`** {RequiredError}

**`memberof`** LibraryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`LibraryApiGetSimilarShowsRequest`](../interfaces/generated_client.LibraryApiGetSimilarShowsRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`BaseItemDtoQueryResult`](../interfaces/generated_client.BaseItemDtoQueryResult.md)\>\>

#### Defined in

[generated-client/api/library-api.ts:2516](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/library-api.ts#L2516)

___

### getSimilarTrailers

▸ **getSimilarTrailers**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`BaseItemDtoQueryResult`](../interfaces/generated_client.BaseItemDtoQueryResult.md)\>\>

**`summary`** Gets similar items.

**`throws`** {RequiredError}

**`memberof`** LibraryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`LibraryApiGetSimilarTrailersRequest`](../interfaces/generated_client.LibraryApiGetSimilarTrailersRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`BaseItemDtoQueryResult`](../interfaces/generated_client.BaseItemDtoQueryResult.md)\>\>

#### Defined in

[generated-client/api/library-api.ts:2528](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/library-api.ts#L2528)

___

### getThemeMedia

▸ **getThemeMedia**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`AllThemeMediaResult`](../interfaces/generated_client.AllThemeMediaResult.md)\>\>

**`summary`** Get theme songs and videos for an item.

**`throws`** {RequiredError}

**`memberof`** LibraryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`LibraryApiGetThemeMediaRequest`](../interfaces/generated_client.LibraryApiGetThemeMediaRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`AllThemeMediaResult`](../interfaces/generated_client.AllThemeMediaResult.md)\>\>

#### Defined in

[generated-client/api/library-api.ts:2540](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/library-api.ts#L2540)

___

### getThemeSongs

▸ **getThemeSongs**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`ThemeMediaResult`](../interfaces/generated_client.ThemeMediaResult.md)\>\>

**`summary`** Get theme songs for an item.

**`throws`** {RequiredError}

**`memberof`** LibraryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`LibraryApiGetThemeSongsRequest`](../interfaces/generated_client.LibraryApiGetThemeSongsRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`ThemeMediaResult`](../interfaces/generated_client.ThemeMediaResult.md)\>\>

#### Defined in

[generated-client/api/library-api.ts:2552](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/library-api.ts#L2552)

___

### getThemeVideos

▸ **getThemeVideos**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`ThemeMediaResult`](../interfaces/generated_client.ThemeMediaResult.md)\>\>

**`summary`** Get theme videos for an item.

**`throws`** {RequiredError}

**`memberof`** LibraryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`LibraryApiGetThemeVideosRequest`](../interfaces/generated_client.LibraryApiGetThemeVideosRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`ThemeMediaResult`](../interfaces/generated_client.ThemeMediaResult.md)\>\>

#### Defined in

[generated-client/api/library-api.ts:2564](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/library-api.ts#L2564)

___

### postAddedMovies

▸ **postAddedMovies**(`requestParameters?`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Reports that new movies have been added by an external source.

**`throws`** {RequiredError}

**`memberof`** LibraryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`LibraryApiPostAddedMoviesRequest`](../interfaces/generated_client.LibraryApiPostAddedMoviesRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[generated-client/api/library-api.ts:2576](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/library-api.ts#L2576)

___

### postAddedSeries

▸ **postAddedSeries**(`requestParameters?`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Reports that new episodes of a series have been added by an external source.

**`throws`** {RequiredError}

**`memberof`** LibraryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`LibraryApiPostAddedSeriesRequest`](../interfaces/generated_client.LibraryApiPostAddedSeriesRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[generated-client/api/library-api.ts:2588](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/library-api.ts#L2588)

___

### postUpdatedMedia

▸ **postUpdatedMedia**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Reports that new movies have been added by an external source.

**`throws`** {RequiredError}

**`memberof`** LibraryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`LibraryApiPostUpdatedMediaRequest`](../interfaces/generated_client.LibraryApiPostUpdatedMediaRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[generated-client/api/library-api.ts:2600](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/library-api.ts#L2600)

___

### postUpdatedMovies

▸ **postUpdatedMovies**(`requestParameters?`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Reports that new movies have been added by an external source.

**`throws`** {RequiredError}

**`memberof`** LibraryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`LibraryApiPostUpdatedMoviesRequest`](../interfaces/generated_client.LibraryApiPostUpdatedMoviesRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[generated-client/api/library-api.ts:2612](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/library-api.ts#L2612)

___

### postUpdatedSeries

▸ **postUpdatedSeries**(`requestParameters?`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Reports that new episodes of a series have been added by an external source.

**`throws`** {RequiredError}

**`memberof`** LibraryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`LibraryApiPostUpdatedSeriesRequest`](../interfaces/generated_client.LibraryApiPostUpdatedSeriesRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[generated-client/api/library-api.ts:2624](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/library-api.ts#L2624)

___

### refreshLibrary

▸ **refreshLibrary**(`options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Starts a library scan.

**`throws`** {RequiredError}

**`memberof`** LibraryApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `any` |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[generated-client/api/library-api.ts:2635](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/library-api.ts#L2635)
