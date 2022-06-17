[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / SearchApi

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

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](generated_client.Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Inherited from

BaseAPI.constructor

#### Defined in

[generated-client/base.ts:52](https://github.com/thornbill/jellyfin-sdk-typescript/blob/03092f3/src/generated-client/base.ts#L52)

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

[generated-client/base.ts:50](https://github.com/thornbill/jellyfin-sdk-typescript/blob/03092f3/src/generated-client/base.ts#L50)

## Methods

### get

▸ **get**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`SearchHintResult`](../interfaces/generated_client.SearchHintResult.md), `any`\>\>

**`summary`** Gets the search hint result.

**`throws`** {RequiredError}

**`memberof`** SearchApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`SearchApiGetRequest`](../interfaces/generated_client.SearchApiGetRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`SearchHintResult`](../interfaces/generated_client.SearchHintResult.md), `any`\>\>

#### Defined in

[generated-client/api/search-api.ts:382](https://github.com/thornbill/jellyfin-sdk-typescript/blob/03092f3/src/generated-client/api/search-api.ts#L382)
