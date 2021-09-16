[jellyfin-sdk-typescript](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / SuggestionsApi

# Class: SuggestionsApi

[generated-client](../modules/generated_client.md).SuggestionsApi

SuggestionsApi - object-oriented interface

**`export`**

## Hierarchy

- `BaseAPI`

  ↳ **`SuggestionsApi`**

## Table of contents

### Constructors

- [constructor](generated_client.SuggestionsApi.md#constructor)

### Properties

- [axios](generated_client.SuggestionsApi.md#axios)
- [basePath](generated_client.SuggestionsApi.md#basepath)
- [configuration](generated_client.SuggestionsApi.md#configuration)

### Methods

- [getSuggestions](generated_client.SuggestionsApi.md#getsuggestions)

## Constructors

### constructor

• **new SuggestionsApi**(`configuration?`, `basePath?`, `axios?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](index.Configuration.md) |
| `basePath` | `string` |
| `axios` | `AxiosInstance` |

#### Inherited from

BaseAPI.constructor

#### Defined in

[generated-client/base.ts:52](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/base.ts#L52)

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

[generated-client/base.ts:50](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/base.ts#L50)

## Methods

### getSuggestions

▸ **getSuggestions**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`BaseItemDtoQueryResult`](../interfaces/generated_client.BaseItemDtoQueryResult.md)\>\>

**`summary`** Gets suggestions.

**`throws`** {RequiredError}

**`memberof`** SuggestionsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`SuggestionsApiGetSuggestionsRequest`](../interfaces/generated_client.SuggestionsApiGetSuggestionsRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`BaseItemDtoQueryResult`](../interfaces/generated_client.BaseItemDtoQueryResult.md)\>\>

#### Defined in

[generated-client/api/suggestions-api.ts:211](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/api/suggestions-api.ts#L211)
