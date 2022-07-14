[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / QuickConnectApi

# Class: QuickConnectApi

[generated-client](../modules/generated_client.md).QuickConnectApi

QuickConnectApi - object-oriented interface

**`export`**

## Hierarchy

- `BaseAPI`

  ↳ **`QuickConnectApi`**

## Table of contents

### Constructors

- [constructor](generated_client.QuickConnectApi.md#constructor)

### Properties

- [axios](generated_client.QuickConnectApi.md#axios)
- [basePath](generated_client.QuickConnectApi.md#basepath)
- [configuration](generated_client.QuickConnectApi.md#configuration)

### Methods

- [authorize](generated_client.QuickConnectApi.md#authorize)
- [connect](generated_client.QuickConnectApi.md#connect)
- [getEnabled](generated_client.QuickConnectApi.md#getenabled)
- [initiate](generated_client.QuickConnectApi.md#initiate)

## Constructors

### constructor

• **new QuickConnectApi**(`configuration?`, `basePath?`, `axios?`)

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

### authorize

▸ **authorize**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`boolean`, `any`\>\>

**`summary`** Authorizes a pending quick connect request.

**`throws`** {RequiredError}

**`memberof`** QuickConnectApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`QuickConnectApiAuthorizeRequest`](../interfaces/generated_client.QuickConnectApiAuthorizeRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`boolean`, `any`\>\>

#### Defined in

[generated-client/api/quick-connect-api.ts:316](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/quick-connect-api.ts#L316)

___

### connect

▸ **connect**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`QuickConnectResult`](../interfaces/generated_client.QuickConnectResult.md), `any`\>\>

**`summary`** Attempts to retrieve authentication information.

**`throws`** {RequiredError}

**`memberof`** QuickConnectApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`QuickConnectApiConnectRequest`](../interfaces/generated_client.QuickConnectApiConnectRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`QuickConnectResult`](../interfaces/generated_client.QuickConnectResult.md), `any`\>\>

#### Defined in

[generated-client/api/quick-connect-api.ts:328](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/quick-connect-api.ts#L328)

___

### getEnabled

▸ **getEnabled**(`options?`): `Promise`<`AxiosResponse`<`boolean`, `any`\>\>

**`summary`** Gets the current quick connect state.

**`throws`** {RequiredError}

**`memberof`** QuickConnectApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `any` |

#### Returns

`Promise`<`AxiosResponse`<`boolean`, `any`\>\>

#### Defined in

[generated-client/api/quick-connect-api.ts:339](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/quick-connect-api.ts#L339)

___

### initiate

▸ **initiate**(`options?`): `Promise`<`AxiosResponse`<[`QuickConnectResult`](../interfaces/generated_client.QuickConnectResult.md), `any`\>\>

**`summary`** Initiate a new quick connect request.

**`throws`** {RequiredError}

**`memberof`** QuickConnectApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `any` |

#### Returns

`Promise`<`AxiosResponse`<[`QuickConnectResult`](../interfaces/generated_client.QuickConnectResult.md), `any`\>\>

#### Defined in

[generated-client/api/quick-connect-api.ts:350](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/quick-connect-api.ts#L350)
