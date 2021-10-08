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

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](generated_client.Configuration.md) |
| `basePath` | `string` |
| `axios` | `AxiosInstance` |

#### Inherited from

BaseAPI.constructor

#### Defined in

[generated-client/base.ts:52](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/base.ts#L52)

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

[generated-client/base.ts:50](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/base.ts#L50)

## Methods

### getLogEntries

▸ **getLogEntries**(`requestParameters?`, `options?`): `Promise`<`AxiosResponse`<[`ActivityLogEntryQueryResult`](../interfaces/generated_client.ActivityLogEntryQueryResult.md)\>\>

**`summary`** Gets activity log entries.

**`throws`** {RequiredError}

**`memberof`** ActivityLogApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`ActivityLogApiGetLogEntriesRequest`](../interfaces/generated_client.ActivityLogApiGetLogEntriesRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`ActivityLogEntryQueryResult`](../interfaces/generated_client.ActivityLogEntryQueryResult.md)\>\>

#### Defined in

[generated-client/api/activity-log-api.ts:186](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/activity-log-api.ts#L186)
