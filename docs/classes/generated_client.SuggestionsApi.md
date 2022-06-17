[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / SuggestionsApi

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

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](generated_client.Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Inherited from

BaseAPI.constructor

#### Defined in

[generated-client/base.ts:52](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/base.ts#L52)

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

[generated-client/base.ts:50](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/base.ts#L50)

## Methods

### getSuggestions

▸ **getSuggestions**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`BaseItemDtoQueryResult`](../interfaces/generated_client.BaseItemDtoQueryResult.md), `any`\>\>

**`summary`** Gets suggestions.

**`throws`** {RequiredError}

**`memberof`** SuggestionsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`SuggestionsApiGetSuggestionsRequest`](../interfaces/generated_client.SuggestionsApiGetSuggestionsRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`BaseItemDtoQueryResult`](../interfaces/generated_client.BaseItemDtoQueryResult.md), `any`\>\>

#### Defined in

[generated-client/api/suggestions-api.ts:213](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/suggestions-api.ts#L213)
