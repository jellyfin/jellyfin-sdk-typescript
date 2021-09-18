[jellyfin-sdk-typescript](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / DashboardApi

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

### getConfigurationPages

▸ **getConfigurationPages**(`requestParameters?`, `options?`): `Promise`<`AxiosResponse`<[`ConfigurationPageInfo`](../interfaces/generated_client.ConfigurationPageInfo.md)[]\>\>

**`summary`** Gets the configuration pages.

**`throws`** {RequiredError}

**`memberof`** DashboardApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`DashboardApiGetConfigurationPagesRequest`](../interfaces/generated_client.DashboardApiGetConfigurationPagesRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`ConfigurationPageInfo`](../interfaces/generated_client.ConfigurationPageInfo.md)[]\>\>

#### Defined in

[generated-client/api/dashboard-api.ts:227](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e4df7f8/src/generated-client/api/dashboard-api.ts#L227)

___

### getDashboardConfigurationPage

▸ **getDashboardConfigurationPage**(`requestParameters?`, `options?`): `Promise`<`AxiosResponse`<`any`\>\>

**`summary`** Gets a dashboard configuration page.

**`throws`** {RequiredError}

**`memberof`** DashboardApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`DashboardApiGetDashboardConfigurationPageRequest`](../interfaces/generated_client.DashboardApiGetDashboardConfigurationPageRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`any`\>\>

#### Defined in

[generated-client/api/dashboard-api.ts:239](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e4df7f8/src/generated-client/api/dashboard-api.ts#L239)
