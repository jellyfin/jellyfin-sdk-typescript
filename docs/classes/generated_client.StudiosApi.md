[jellyfin-sdk-typescript](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / StudiosApi

# Class: StudiosApi

[generated-client](../modules/generated_client.md).StudiosApi

StudiosApi - object-oriented interface

**`export`**

## Hierarchy

- `BaseAPI`

  ↳ **`StudiosApi`**

## Table of contents

### Constructors

- [constructor](generated_client.StudiosApi.md#constructor)

### Properties

- [axios](generated_client.StudiosApi.md#axios)
- [basePath](generated_client.StudiosApi.md#basepath)
- [configuration](generated_client.StudiosApi.md#configuration)

### Methods

- [getStudio](generated_client.StudiosApi.md#getstudio)
- [getStudios](generated_client.StudiosApi.md#getstudios)

## Constructors

### constructor

• **new StudiosApi**(`configuration?`, `basePath?`, `axios?`)

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

### getStudio

▸ **getStudio**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`BaseItemDto`](../interfaces/generated_client.BaseItemDto.md)\>\>

**`summary`** Gets a studio by name.

**`throws`** {RequiredError}

**`memberof`** StudiosApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`StudiosApiGetStudioRequest`](../interfaces/generated_client.StudiosApiGetStudioRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`BaseItemDto`](../interfaces/generated_client.BaseItemDto.md)\>\>

#### Defined in

[generated-client/api/studios-api.ts:458](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b0f5501/src/generated-client/api/studios-api.ts#L458)

___

### getStudios

▸ **getStudios**(`requestParameters?`, `options?`): `Promise`<`AxiosResponse`<[`BaseItemDtoQueryResult`](../interfaces/generated_client.BaseItemDtoQueryResult.md)\>\>

**`summary`** Gets all studios from a given item, folder, or the entire library.

**`throws`** {RequiredError}

**`memberof`** StudiosApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`StudiosApiGetStudiosRequest`](../interfaces/generated_client.StudiosApiGetStudiosRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`BaseItemDtoQueryResult`](../interfaces/generated_client.BaseItemDtoQueryResult.md)\>\>

#### Defined in

[generated-client/api/studios-api.ts:470](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b0f5501/src/generated-client/api/studios-api.ts#L470)
