[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / ActivityLogApi

# Class: ActivityLogApi

[generated-client](../modules/generated_client.md).ActivityLogApi

ActivityLogApi - object-oriented interface

**`export`**

## Hierarchy

- `BaseAPI`

  ↳ **`ActivityLogApi`**

## Table of contents

### Constructors

- [constructor](generated_client.ActivityLogApi.md#constructor)

### Properties

- [axios](generated_client.ActivityLogApi.md#axios)
- [basePath](generated_client.ActivityLogApi.md#basepath)
- [configuration](generated_client.ActivityLogApi.md#configuration)

### Methods

- [getLogEntries](generated_client.ActivityLogApi.md#getlogentries)

## Constructors

### constructor

• **new ActivityLogApi**(`configuration?`, `basePath?`, `axios?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](generated_client.Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Inherited from

BaseAPI.constructor

#### Defined in

[generated-client/base.ts:52](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/base.ts#L52)

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

[generated-client/base.ts:50](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/base.ts#L50)

## Methods

### getLogEntries

▸ **getLogEntries**(`requestParameters?`, `options?`): `Promise`<`AxiosResponse`<[`ActivityLogEntryQueryResult`](../interfaces/index.api.ActivityLogEntryQueryResult.md), `any`\>\>

**`summary`** Gets activity log entries.

**`throws`** {RequiredError}

**`memberof`** ActivityLogApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`ActivityLogApiGetLogEntriesRequest`](../interfaces/generated_client.ActivityLogApiGetLogEntriesRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`ActivityLogEntryQueryResult`](../interfaces/index.api.ActivityLogEntryQueryResult.md), `any`\>\>

#### Defined in

[generated-client/api/activity-log-api.ts:186](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/activity-log-api.ts#L186)
