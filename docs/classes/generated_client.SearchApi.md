[jellyfin-sdk-typescript](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / SearchApi

# Class: SearchApi

[generated-client](../modules/generated_client.md).SearchApi

SearchApi - object-oriented interface

**`export`**

## Hierarchy

- `BaseAPI`

  ↳ **`SearchApi`**

## Table of contents

### Constructors

- [constructor](generated_client.SearchApi.md#constructor)

### Properties

- [axios](generated_client.SearchApi.md#axios)
- [basePath](generated_client.SearchApi.md#basepath)
- [configuration](generated_client.SearchApi.md#configuration)

### Methods

- [get](generated_client.SearchApi.md#get)

## Constructors

### constructor

• **new SearchApi**(`configuration?`, `basePath?`, `axios?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](generated_client.Configuration.md) |
| `basePath` | `string` |
| `axios` | `AxiosInstance` |

#### Inherited from

BaseAPI.constructor

#### Defined in

[generated-client/base.ts:52](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b0f5501/src/generated-client/base.ts#L52)

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

[generated-client/base.ts:50](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b0f5501/src/generated-client/base.ts#L50)

## Methods

### get

▸ **get**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`SearchHintResult`](../interfaces/generated_client.SearchHintResult.md)\>\>

**`summary`** Gets the search hint result.

**`throws`** {RequiredError}

**`memberof`** SearchApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`SearchApiGetRequest`](../interfaces/generated_client.SearchApiGetRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`SearchHintResult`](../interfaces/generated_client.SearchHintResult.md)\>\>

#### Defined in

[generated-client/api/search-api.ts:382](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b0f5501/src/generated-client/api/search-api.ts#L382)
