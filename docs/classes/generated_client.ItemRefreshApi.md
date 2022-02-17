[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / ItemRefreshApi

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

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](generated_client.Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Inherited from

BaseAPI.constructor

#### Defined in

[generated-client/base.ts:52](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/base.ts#L52)

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

[generated-client/base.ts:50](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/base.ts#L50)

## Methods

### post

▸ **post**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`, `any`\>\>

**`summary`** Refreshes metadata for an item.

**`throws`** {RequiredError}

**`memberof`** ItemRefreshApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`ItemRefreshApiPostRequest`](../interfaces/generated_client.ItemRefreshApiPostRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`, `any`\>\>

#### Defined in

[generated-client/api/item-refresh-api.ts:199](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/item-refresh-api.ts#L199)
