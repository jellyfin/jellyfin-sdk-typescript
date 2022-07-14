[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / SystemApi

# Class: SystemApi

[generated-client](../modules/generated_client.md).SystemApi

SystemApi - object-oriented interface

**`export`**

## Hierarchy

- `BaseAPI`

  ↳ **`SystemApi`**

## Table of contents

### Constructors

- [constructor](generated_client.SystemApi.md#constructor)

### Properties

- [axios](generated_client.SystemApi.md#axios)
- [basePath](generated_client.SystemApi.md#basepath)
- [configuration](generated_client.SystemApi.md#configuration)

### Methods

- [getEndpointInfo](generated_client.SystemApi.md#getendpointinfo)
- [getLogFile](generated_client.SystemApi.md#getlogfile)
- [getPingSystem](generated_client.SystemApi.md#getpingsystem)
- [getPublicSystemInfo](generated_client.SystemApi.md#getpublicsysteminfo)
- [getServerLogs](generated_client.SystemApi.md#getserverlogs)
- [getSystemInfo](generated_client.SystemApi.md#getsysteminfo)
- [getWakeOnLanInfo](generated_client.SystemApi.md#getwakeonlaninfo)
- [postPingSystem](generated_client.SystemApi.md#postpingsystem)
- [restartApplication](generated_client.SystemApi.md#restartapplication)
- [shutdownApplication](generated_client.SystemApi.md#shutdownapplication)

## Constructors

### constructor

• **new SystemApi**(`configuration?`, `basePath?`, `axios?`)

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

### getEndpointInfo

▸ **getEndpointInfo**(`options?`): `Promise`<`AxiosResponse`<[`EndPointInfo`](../interfaces/generated_client.EndPointInfo.md), `any`\>\>

**`summary`** Gets information about the request endpoint.

**`throws`** {RequiredError}

**`memberof`** SystemApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `any` |

#### Returns

`Promise`<`AxiosResponse`<[`EndPointInfo`](../interfaces/generated_client.EndPointInfo.md), `any`\>\>

#### Defined in

[generated-client/api/system-api.ts:613](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/system-api.ts#L613)

___

### getLogFile

▸ **getLogFile**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`any`, `any`\>\>

**`summary`** Gets a log file.

**`throws`** {RequiredError}

**`memberof`** SystemApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`SystemApiGetLogFileRequest`](../interfaces/generated_client.SystemApiGetLogFileRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`any`, `any`\>\>

#### Defined in

[generated-client/api/system-api.ts:625](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/system-api.ts#L625)

___

### getPingSystem

▸ **getPingSystem**(`options?`): `Promise`<`AxiosResponse`<`string`, `any`\>\>

**`summary`** Pings the system.

**`throws`** {RequiredError}

**`memberof`** SystemApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `any` |

#### Returns

`Promise`<`AxiosResponse`<`string`, `any`\>\>

#### Defined in

[generated-client/api/system-api.ts:636](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/system-api.ts#L636)

___

### getPublicSystemInfo

▸ **getPublicSystemInfo**(`options?`): `Promise`<`AxiosResponse`<[`PublicSystemInfo`](../interfaces/generated_client.PublicSystemInfo.md), `any`\>\>

**`summary`** Gets public information about the server.

**`throws`** {RequiredError}

**`memberof`** SystemApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `any` |

#### Returns

`Promise`<`AxiosResponse`<[`PublicSystemInfo`](../interfaces/generated_client.PublicSystemInfo.md), `any`\>\>

#### Defined in

[generated-client/api/system-api.ts:647](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/system-api.ts#L647)

___

### getServerLogs

▸ **getServerLogs**(`options?`): `Promise`<`AxiosResponse`<[`LogFile`](../interfaces/generated_client.LogFile.md)[], `any`\>\>

**`summary`** Gets a list of available server log files.

**`throws`** {RequiredError}

**`memberof`** SystemApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `any` |

#### Returns

`Promise`<`AxiosResponse`<[`LogFile`](../interfaces/generated_client.LogFile.md)[], `any`\>\>

#### Defined in

[generated-client/api/system-api.ts:658](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/system-api.ts#L658)

___

### getSystemInfo

▸ **getSystemInfo**(`options?`): `Promise`<`AxiosResponse`<[`SystemInfo`](../interfaces/generated_client.SystemInfo.md), `any`\>\>

**`summary`** Gets information about the server.

**`throws`** {RequiredError}

**`memberof`** SystemApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `any` |

#### Returns

`Promise`<`AxiosResponse`<[`SystemInfo`](../interfaces/generated_client.SystemInfo.md), `any`\>\>

#### Defined in

[generated-client/api/system-api.ts:669](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/system-api.ts#L669)

___

### getWakeOnLanInfo

▸ **getWakeOnLanInfo**(`options?`): `Promise`<`AxiosResponse`<[`WakeOnLanInfo`](../interfaces/generated_client.WakeOnLanInfo.md)[], `any`\>\>

**`summary`** Gets wake on lan information.

**`deprecated`**

**`throws`** {RequiredError}

**`memberof`** SystemApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `any` |

#### Returns

`Promise`<`AxiosResponse`<[`WakeOnLanInfo`](../interfaces/generated_client.WakeOnLanInfo.md)[], `any`\>\>

#### Defined in

[generated-client/api/system-api.ts:681](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/system-api.ts#L681)

___

### postPingSystem

▸ **postPingSystem**(`options?`): `Promise`<`AxiosResponse`<`string`, `any`\>\>

**`summary`** Pings the system.

**`throws`** {RequiredError}

**`memberof`** SystemApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `any` |

#### Returns

`Promise`<`AxiosResponse`<`string`, `any`\>\>

#### Defined in

[generated-client/api/system-api.ts:692](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/system-api.ts#L692)

___

### restartApplication

▸ **restartApplication**(`options?`): `Promise`<`AxiosResponse`<`void`, `any`\>\>

**`summary`** Restarts the application.

**`throws`** {RequiredError}

**`memberof`** SystemApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `any` |

#### Returns

`Promise`<`AxiosResponse`<`void`, `any`\>\>

#### Defined in

[generated-client/api/system-api.ts:703](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/system-api.ts#L703)

___

### shutdownApplication

▸ **shutdownApplication**(`options?`): `Promise`<`AxiosResponse`<`void`, `any`\>\>

**`summary`** Shuts down the application.

**`throws`** {RequiredError}

**`memberof`** SystemApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `any` |

#### Returns

`Promise`<`AxiosResponse`<`void`, `any`\>\>

#### Defined in

[generated-client/api/system-api.ts:714](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/system-api.ts#L714)
