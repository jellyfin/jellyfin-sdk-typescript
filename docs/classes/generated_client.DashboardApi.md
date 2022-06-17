[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / DashboardApi

# Class: DashboardApi

[generated-client](../modules/generated_client.md).DashboardApi

DashboardApi - object-oriented interface

**`export`**

## Hierarchy

- `BaseAPI`

  ↳ **`DashboardApi`**

## Table of contents

### Constructors

- [constructor](generated_client.DashboardApi.md#constructor)

### Properties

- [axios](generated_client.DashboardApi.md#axios)
- [basePath](generated_client.DashboardApi.md#basepath)
- [configuration](generated_client.DashboardApi.md#configuration)

### Methods

- [getConfigurationPages](generated_client.DashboardApi.md#getconfigurationpages)
- [getDashboardConfigurationPage](generated_client.DashboardApi.md#getdashboardconfigurationpage)

## Constructors

### constructor

• **new DashboardApi**(`configuration?`, `basePath?`, `axios?`)

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

### getConfigurationPages

▸ **getConfigurationPages**(`requestParameters?`, `options?`): `Promise`<`AxiosResponse`<[`ConfigurationPageInfo`](../interfaces/generated_client.ConfigurationPageInfo.md)[], `any`\>\>

**`summary`** Gets the configuration pages.

**`throws`** {RequiredError}

**`memberof`** DashboardApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`DashboardApiGetConfigurationPagesRequest`](../interfaces/generated_client.DashboardApiGetConfigurationPagesRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`ConfigurationPageInfo`](../interfaces/generated_client.ConfigurationPageInfo.md)[], `any`\>\>

#### Defined in

[generated-client/api/dashboard-api.ts:214](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/dashboard-api.ts#L214)

___

### getDashboardConfigurationPage

▸ **getDashboardConfigurationPage**(`requestParameters?`, `options?`): `Promise`<`AxiosResponse`<`any`, `any`\>\>

**`summary`** Gets a dashboard configuration page.

**`throws`** {RequiredError}

**`memberof`** DashboardApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`DashboardApiGetDashboardConfigurationPageRequest`](../interfaces/generated_client.DashboardApiGetDashboardConfigurationPageRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`any`, `any`\>\>

#### Defined in

[generated-client/api/dashboard-api.ts:226](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/dashboard-api.ts#L226)
