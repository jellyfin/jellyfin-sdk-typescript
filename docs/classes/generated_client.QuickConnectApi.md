[jellyfin-sdk-typescript](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / QuickConnectApi

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

- [activate](generated_client.QuickConnectApi.md#activate)
- [authorize](generated_client.QuickConnectApi.md#authorize)
- [available](generated_client.QuickConnectApi.md#available)
- [connect](generated_client.QuickConnectApi.md#connect)
- [deauthorize](generated_client.QuickConnectApi.md#deauthorize)
- [getStatus](generated_client.QuickConnectApi.md#getstatus)
- [initiate](generated_client.QuickConnectApi.md#initiate)

## Constructors

### constructor

• **new QuickConnectApi**(`configuration?`, `basePath?`, `axios?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](generated_client.Configuration.md) |
| `basePath` | `string` |
| `axios` | `AxiosInstance` |

#### Inherited from

BaseAPI.constructor

#### Defined in

[generated-client/base.ts:52](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e4df7f8/src/generated-client/base.ts#L52)

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

[generated-client/base.ts:50](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e4df7f8/src/generated-client/base.ts#L50)

## Methods

### activate

▸ **activate**(`options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Temporarily activates quick connect for five minutes.

**`throws`** {RequiredError}

**`memberof`** QuickConnectApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `any` |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[generated-client/api/quick-connect-api.ts:494](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e4df7f8/src/generated-client/api/quick-connect-api.ts#L494)

___

### authorize

▸ **authorize**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`boolean`\>\>

**`summary`** Authorizes a pending quick connect request.

**`throws`** {RequiredError}

**`memberof`** QuickConnectApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`QuickConnectApiAuthorizeRequest`](../interfaces/generated_client.QuickConnectApiAuthorizeRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`boolean`\>\>

#### Defined in

[generated-client/api/quick-connect-api.ts:506](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e4df7f8/src/generated-client/api/quick-connect-api.ts#L506)

___

### available

▸ **available**(`requestParameters?`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Enables or disables quick connect.

**`throws`** {RequiredError}

**`memberof`** QuickConnectApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`QuickConnectApiAvailableRequest`](../interfaces/generated_client.QuickConnectApiAvailableRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[generated-client/api/quick-connect-api.ts:518](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e4df7f8/src/generated-client/api/quick-connect-api.ts#L518)

___

### connect

▸ **connect**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`QuickConnectResult`](../interfaces/generated_client.QuickConnectResult.md)\>\>

**`summary`** Attempts to retrieve authentication information.

**`throws`** {RequiredError}

**`memberof`** QuickConnectApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`QuickConnectApiConnectRequest`](../interfaces/generated_client.QuickConnectApiConnectRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`QuickConnectResult`](../interfaces/generated_client.QuickConnectResult.md)\>\>

#### Defined in

[generated-client/api/quick-connect-api.ts:530](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e4df7f8/src/generated-client/api/quick-connect-api.ts#L530)

___

### deauthorize

▸ **deauthorize**(`options?`): `Promise`<`AxiosResponse`<`number`\>\>

**`summary`** Deauthorize all quick connect devices for the current user.

**`throws`** {RequiredError}

**`memberof`** QuickConnectApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `any` |

#### Returns

`Promise`<`AxiosResponse`<`number`\>\>

#### Defined in

[generated-client/api/quick-connect-api.ts:541](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e4df7f8/src/generated-client/api/quick-connect-api.ts#L541)

___

### getStatus

▸ **getStatus**(`options?`): `Promise`<`AxiosResponse`<[`QuickConnectState`](../enums/generated_client.QuickConnectState.md)\>\>

**`summary`** Gets the current quick connect state.

**`throws`** {RequiredError}

**`memberof`** QuickConnectApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `any` |

#### Returns

`Promise`<`AxiosResponse`<[`QuickConnectState`](../enums/generated_client.QuickConnectState.md)\>\>

#### Defined in

[generated-client/api/quick-connect-api.ts:552](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e4df7f8/src/generated-client/api/quick-connect-api.ts#L552)

___

### initiate

▸ **initiate**(`options?`): `Promise`<`AxiosResponse`<[`QuickConnectResult`](../interfaces/generated_client.QuickConnectResult.md)\>\>

**`summary`** Initiate a new quick connect request.

**`throws`** {RequiredError}

**`memberof`** QuickConnectApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `any` |

#### Returns

`Promise`<`AxiosResponse`<[`QuickConnectResult`](../interfaces/generated_client.QuickConnectResult.md)\>\>

#### Defined in

[generated-client/api/quick-connect-api.ts:563](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e4df7f8/src/generated-client/api/quick-connect-api.ts#L563)
