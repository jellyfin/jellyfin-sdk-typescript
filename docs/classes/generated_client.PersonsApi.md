[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / PersonsApi

# Class: PersonsApi

[generated-client](../modules/generated_client.md).PersonsApi

PersonsApi - object-oriented interface

**`export`**

## Hierarchy

- `BaseAPI`

  ↳ **`PersonsApi`**

## Table of contents

### Constructors

- [constructor](generated_client.PersonsApi.md#constructor)

### Properties

- [axios](generated_client.PersonsApi.md#axios)
- [basePath](generated_client.PersonsApi.md#basepath)
- [configuration](generated_client.PersonsApi.md#configuration)

### Methods

- [getPerson](generated_client.PersonsApi.md#getperson)
- [getPersons](generated_client.PersonsApi.md#getpersons)

## Constructors

### constructor

• **new PersonsApi**(`configuration?`, `basePath?`, `axios?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](generated_client.Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Inherited from

BaseAPI.constructor

#### Defined in

[generated-client/base.ts:52](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/base.ts#L52)

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

[generated-client/base.ts:50](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/base.ts#L50)

## Methods

### getPerson

▸ **getPerson**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`BaseItemDto`](../interfaces/generated_client.BaseItemDto.md), `any`\>\>

**`summary`** Get person by name.

**`throws`** {RequiredError}

**`memberof`** PersonsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`PersonsApiGetPersonRequest`](../interfaces/generated_client.PersonsApiGetPersonRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`BaseItemDto`](../interfaces/generated_client.BaseItemDto.md), `any`\>\>

#### Defined in

[generated-client/api/persons-api.ts:406](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/persons-api.ts#L406)

___

### getPersons

▸ **getPersons**(`requestParameters?`, `options?`): `Promise`<`AxiosResponse`<[`BaseItemDtoQueryResult`](../interfaces/generated_client.BaseItemDtoQueryResult.md), `any`\>\>

**`summary`** Gets all persons.

**`throws`** {RequiredError}

**`memberof`** PersonsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`PersonsApiGetPersonsRequest`](../interfaces/generated_client.PersonsApiGetPersonsRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`BaseItemDtoQueryResult`](../interfaces/generated_client.BaseItemDtoQueryResult.md), `any`\>\>

#### Defined in

[generated-client/api/persons-api.ts:418](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/persons-api.ts#L418)
