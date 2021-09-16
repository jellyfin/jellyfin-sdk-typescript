[jellyfin-sdk-typescript](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / ItemRefreshApi

# Class: ItemRefreshApi

[generated-client](../modules/generated_client.md).ItemRefreshApi

ItemRefreshApi - object-oriented interface

**`export`**

## Hierarchy

- `BaseAPI`

  ↳ **`ItemRefreshApi`**

## Table of contents

### Constructors

- [constructor](generated_client.ItemRefreshApi.md#constructor)

### Properties

- [axios](generated_client.ItemRefreshApi.md#axios)
- [basePath](generated_client.ItemRefreshApi.md#basepath)
- [configuration](generated_client.ItemRefreshApi.md#configuration)

### Methods

- [post](generated_client.ItemRefreshApi.md#post)

## Constructors

### constructor

• **new ItemRefreshApi**(`configuration?`, `basePath?`, `axios?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](index.Configuration.md) |
| `basePath` | `string` |
| `axios` | `AxiosInstance` |

#### Inherited from

BaseAPI.constructor

#### Defined in

[generated-client/base.ts:52](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/generated-client/base.ts#L52)

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

• `Protected` **configuration**: `undefined` \| [`Configuration`](index.Configuration.md)

#### Inherited from

BaseAPI.configuration

#### Defined in

[generated-client/base.ts:50](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/generated-client/base.ts#L50)

## Methods

### post

▸ **post**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Refreshes metadata for an item.

**`throws`** {RequiredError}

**`memberof`** ItemRefreshApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`ItemRefreshApiPostRequest`](../interfaces/generated_client.ItemRefreshApiPostRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[generated-client/api/item-refresh-api.ts:199](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/generated-client/api/item-refresh-api.ts#L199)
