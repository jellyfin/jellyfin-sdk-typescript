[jellyfin-sdk-typescript](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / YearsApi

# Class: YearsApi

[generated-client](../modules/generated_client.md).YearsApi

YearsApi - object-oriented interface

**`export`**

## Hierarchy

- `BaseAPI`

  ↳ **`YearsApi`**

## Table of contents

### Constructors

- [constructor](generated_client.YearsApi.md#constructor)

### Properties

- [axios](generated_client.YearsApi.md#axios)
- [basePath](generated_client.YearsApi.md#basepath)
- [configuration](generated_client.YearsApi.md#configuration)

### Methods

- [getYear](generated_client.YearsApi.md#getyear)
- [getYears](generated_client.YearsApi.md#getyears)

## Constructors

### constructor

• **new YearsApi**(`configuration?`, `basePath?`, `axios?`)

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

### getYear

▸ **getYear**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`BaseItemDto`](../interfaces/generated_client.BaseItemDto.md)\>\>

**`summary`** Gets a year.

**`throws`** {RequiredError}

**`memberof`** YearsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`YearsApiGetYearRequest`](../interfaces/generated_client.YearsApiGetYearRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`BaseItemDto`](../interfaces/generated_client.BaseItemDto.md)\>\>

#### Defined in

[generated-client/api/years-api.ts:434](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/years-api.ts#L434)

___

### getYears

▸ **getYears**(`requestParameters?`, `options?`): `Promise`<`AxiosResponse`<[`BaseItemDtoQueryResult`](../interfaces/generated_client.BaseItemDtoQueryResult.md)\>\>

**`summary`** Get years.

**`throws`** {RequiredError}

**`memberof`** YearsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`YearsApiGetYearsRequest`](../interfaces/generated_client.YearsApiGetYearsRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`BaseItemDtoQueryResult`](../interfaces/generated_client.BaseItemDtoQueryResult.md)\>\>

#### Defined in

[generated-client/api/years-api.ts:446](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/years-api.ts#L446)
