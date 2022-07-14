[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / CollectionApi

# Class: CollectionApi

[generated-client](../modules/generated_client.md).CollectionApi

CollectionApi - object-oriented interface

**`export`**

## Hierarchy

- `BaseAPI`

  ↳ **`CollectionApi`**

## Table of contents

### Constructors

- [constructor](generated_client.CollectionApi.md#constructor)

### Properties

- [axios](generated_client.CollectionApi.md#axios)
- [basePath](generated_client.CollectionApi.md#basepath)
- [configuration](generated_client.CollectionApi.md#configuration)

### Methods

- [addToCollection](generated_client.CollectionApi.md#addtocollection)
- [createCollection](generated_client.CollectionApi.md#createcollection)
- [removeFromCollection](generated_client.CollectionApi.md#removefromcollection)

## Constructors

### constructor

• **new CollectionApi**(`configuration?`, `basePath?`, `axios?`)

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

### addToCollection

▸ **addToCollection**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`, `any`\>\>

**`summary`** Adds items to a collection.

**`throws`** {RequiredError}

**`memberof`** CollectionApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`CollectionApiAddToCollectionRequest`](../interfaces/generated_client.CollectionApiAddToCollectionRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`, `any`\>\>

#### Defined in

[generated-client/api/collection-api.ts:360](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/collection-api.ts#L360)

___

### createCollection

▸ **createCollection**(`requestParameters?`, `options?`): `Promise`<`AxiosResponse`<[`CollectionCreationResult`](../interfaces/generated_client.CollectionCreationResult.md), `any`\>\>

**`summary`** Creates a new collection.

**`throws`** {RequiredError}

**`memberof`** CollectionApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`CollectionApiCreateCollectionRequest`](../interfaces/generated_client.CollectionApiCreateCollectionRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`CollectionCreationResult`](../interfaces/generated_client.CollectionCreationResult.md), `any`\>\>

#### Defined in

[generated-client/api/collection-api.ts:372](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/collection-api.ts#L372)

___

### removeFromCollection

▸ **removeFromCollection**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`, `any`\>\>

**`summary`** Removes items from a collection.

**`throws`** {RequiredError}

**`memberof`** CollectionApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`CollectionApiRemoveFromCollectionRequest`](../interfaces/generated_client.CollectionApiRemoveFromCollectionRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`, `any`\>\>

#### Defined in

[generated-client/api/collection-api.ts:384](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/collection-api.ts#L384)
