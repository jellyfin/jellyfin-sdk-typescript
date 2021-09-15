[jellyfin-sdk-typescript](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / UserLibraryApi

# Class: UserLibraryApi

[generated-client](../modules/generated_client.md).UserLibraryApi

UserLibraryApi - object-oriented interface

**`export`**

## Hierarchy

- `BaseAPI`

  ↳ **`UserLibraryApi`**

## Table of contents

### Constructors

- [constructor](generated_client.UserLibraryApi.md#constructor)

### Properties

- [axios](generated_client.UserLibraryApi.md#axios)
- [basePath](generated_client.UserLibraryApi.md#basepath)
- [configuration](generated_client.UserLibraryApi.md#configuration)

### Methods

- [deleteUserItemRating](generated_client.UserLibraryApi.md#deleteuseritemrating)
- [getIntros](generated_client.UserLibraryApi.md#getintros)
- [getItem](generated_client.UserLibraryApi.md#getitem)
- [getLatestMedia](generated_client.UserLibraryApi.md#getlatestmedia)
- [getLocalTrailers](generated_client.UserLibraryApi.md#getlocaltrailers)
- [getRootFolder](generated_client.UserLibraryApi.md#getrootfolder)
- [getSpecialFeatures](generated_client.UserLibraryApi.md#getspecialfeatures)
- [markFavoriteItem](generated_client.UserLibraryApi.md#markfavoriteitem)
- [unmarkFavoriteItem](generated_client.UserLibraryApi.md#unmarkfavoriteitem)
- [updateUserItemRating](generated_client.UserLibraryApi.md#updateuseritemrating)

## Constructors

### constructor

• **new UserLibraryApi**(`configuration?`, `basePath?`, `axios?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](generated_client.Configuration.md) |
| `basePath` | `string` |
| `axios` | `AxiosInstance` |

#### Inherited from

BaseAPI.constructor

#### Defined in

[generated-client/base.ts:52](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/base.ts#L52)

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

[generated-client/base.ts:50](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/base.ts#L50)

## Methods

### deleteUserItemRating

▸ **deleteUserItemRating**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`UserItemDataDto`](../interfaces/generated_client.UserItemDataDto.md)\>\>

**`summary`** Deletes a user\'s saved personal rating for an item.

**`throws`** {RequiredError}

**`memberof`** UserLibraryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`UserLibraryApiDeleteUserItemRatingRequest`](../interfaces/generated_client.UserLibraryApiDeleteUserItemRatingRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`UserItemDataDto`](../interfaces/generated_client.UserItemDataDto.md)\>\>

#### Defined in

[generated-client/api/user-library-api.ts:1055](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/user-library-api.ts#L1055)

___

### getIntros

▸ **getIntros**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`BaseItemDtoQueryResult`](../interfaces/generated_client.BaseItemDtoQueryResult.md)\>\>

**`summary`** Gets intros to play before the main media item plays.

**`throws`** {RequiredError}

**`memberof`** UserLibraryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`UserLibraryApiGetIntrosRequest`](../interfaces/generated_client.UserLibraryApiGetIntrosRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`BaseItemDtoQueryResult`](../interfaces/generated_client.BaseItemDtoQueryResult.md)\>\>

#### Defined in

[generated-client/api/user-library-api.ts:1067](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/user-library-api.ts#L1067)

___

### getItem

▸ **getItem**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`BaseItemDto`](../interfaces/generated_client.BaseItemDto.md)\>\>

**`summary`** Gets an item from a user\'s library.

**`throws`** {RequiredError}

**`memberof`** UserLibraryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`UserLibraryApiGetItemRequest`](../interfaces/generated_client.UserLibraryApiGetItemRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`BaseItemDto`](../interfaces/generated_client.BaseItemDto.md)\>\>

#### Defined in

[generated-client/api/user-library-api.ts:1079](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/user-library-api.ts#L1079)

___

### getLatestMedia

▸ **getLatestMedia**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`BaseItemDto`](../interfaces/generated_client.BaseItemDto.md)[]\>\>

**`summary`** Gets latest media.

**`throws`** {RequiredError}

**`memberof`** UserLibraryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`UserLibraryApiGetLatestMediaRequest`](../interfaces/generated_client.UserLibraryApiGetLatestMediaRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`BaseItemDto`](../interfaces/generated_client.BaseItemDto.md)[]\>\>

#### Defined in

[generated-client/api/user-library-api.ts:1091](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/user-library-api.ts#L1091)

___

### getLocalTrailers

▸ **getLocalTrailers**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`BaseItemDto`](../interfaces/generated_client.BaseItemDto.md)[]\>\>

**`summary`** Gets local trailers for an item.

**`throws`** {RequiredError}

**`memberof`** UserLibraryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`UserLibraryApiGetLocalTrailersRequest`](../interfaces/generated_client.UserLibraryApiGetLocalTrailersRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`BaseItemDto`](../interfaces/generated_client.BaseItemDto.md)[]\>\>

#### Defined in

[generated-client/api/user-library-api.ts:1103](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/user-library-api.ts#L1103)

___

### getRootFolder

▸ **getRootFolder**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`BaseItemDto`](../interfaces/generated_client.BaseItemDto.md)\>\>

**`summary`** Gets the root folder from a user\'s library.

**`throws`** {RequiredError}

**`memberof`** UserLibraryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`UserLibraryApiGetRootFolderRequest`](../interfaces/generated_client.UserLibraryApiGetRootFolderRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`BaseItemDto`](../interfaces/generated_client.BaseItemDto.md)\>\>

#### Defined in

[generated-client/api/user-library-api.ts:1115](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/user-library-api.ts#L1115)

___

### getSpecialFeatures

▸ **getSpecialFeatures**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`BaseItemDto`](../interfaces/generated_client.BaseItemDto.md)[]\>\>

**`summary`** Gets special features for an item.

**`throws`** {RequiredError}

**`memberof`** UserLibraryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`UserLibraryApiGetSpecialFeaturesRequest`](../interfaces/generated_client.UserLibraryApiGetSpecialFeaturesRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`BaseItemDto`](../interfaces/generated_client.BaseItemDto.md)[]\>\>

#### Defined in

[generated-client/api/user-library-api.ts:1127](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/user-library-api.ts#L1127)

___

### markFavoriteItem

▸ **markFavoriteItem**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`UserItemDataDto`](../interfaces/generated_client.UserItemDataDto.md)\>\>

**`summary`** Marks an item as a favorite.

**`throws`** {RequiredError}

**`memberof`** UserLibraryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`UserLibraryApiMarkFavoriteItemRequest`](../interfaces/generated_client.UserLibraryApiMarkFavoriteItemRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`UserItemDataDto`](../interfaces/generated_client.UserItemDataDto.md)\>\>

#### Defined in

[generated-client/api/user-library-api.ts:1139](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/user-library-api.ts#L1139)

___

### unmarkFavoriteItem

▸ **unmarkFavoriteItem**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`UserItemDataDto`](../interfaces/generated_client.UserItemDataDto.md)\>\>

**`summary`** Unmarks item as a favorite.

**`throws`** {RequiredError}

**`memberof`** UserLibraryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`UserLibraryApiUnmarkFavoriteItemRequest`](../interfaces/generated_client.UserLibraryApiUnmarkFavoriteItemRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`UserItemDataDto`](../interfaces/generated_client.UserItemDataDto.md)\>\>

#### Defined in

[generated-client/api/user-library-api.ts:1151](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/user-library-api.ts#L1151)

___

### updateUserItemRating

▸ **updateUserItemRating**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`UserItemDataDto`](../interfaces/generated_client.UserItemDataDto.md)\>\>

**`summary`** Updates a user\'s rating for an item.

**`throws`** {RequiredError}

**`memberof`** UserLibraryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`UserLibraryApiUpdateUserItemRatingRequest`](../interfaces/generated_client.UserLibraryApiUpdateUserItemRatingRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`UserItemDataDto`](../interfaces/generated_client.UserItemDataDto.md)\>\>

#### Defined in

[generated-client/api/user-library-api.ts:1163](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/user-library-api.ts#L1163)
