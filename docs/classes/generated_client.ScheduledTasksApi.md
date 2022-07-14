[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / ScheduledTasksApi

# Class: ScheduledTasksApi

[generated-client](../modules/generated_client.md).ScheduledTasksApi

ScheduledTasksApi - object-oriented interface

**`export`**

## Hierarchy

- `BaseAPI`

  ↳ **`ScheduledTasksApi`**

## Table of contents

### Constructors

- [constructor](generated_client.ScheduledTasksApi.md#constructor)

### Properties

- [axios](generated_client.ScheduledTasksApi.md#axios)
- [basePath](generated_client.ScheduledTasksApi.md#basepath)
- [configuration](generated_client.ScheduledTasksApi.md#configuration)

### Methods

- [getTask](generated_client.ScheduledTasksApi.md#gettask)
- [getTasks](generated_client.ScheduledTasksApi.md#gettasks)
- [startTask](generated_client.ScheduledTasksApi.md#starttask)
- [stopTask](generated_client.ScheduledTasksApi.md#stoptask)
- [updateTask](generated_client.ScheduledTasksApi.md#updatetask)

## Constructors

### constructor

• **new ScheduledTasksApi**(`configuration?`, `basePath?`, `axios?`)

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

### getTask

▸ **getTask**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`TaskInfo`](../interfaces/generated_client.TaskInfo.md), `any`\>\>

**`summary`** Get task by id.

**`throws`** {RequiredError}

**`memberof`** ScheduledTasksApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`ScheduledTasksApiGetTaskRequest`](../interfaces/generated_client.ScheduledTasksApiGetTaskRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`TaskInfo`](../interfaces/generated_client.TaskInfo.md), `any`\>\>

#### Defined in

[generated-client/api/scheduled-tasks-api.ts:463](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/scheduled-tasks-api.ts#L463)

___

### getTasks

▸ **getTasks**(`requestParameters?`, `options?`): `Promise`<`AxiosResponse`<[`TaskInfo`](../interfaces/generated_client.TaskInfo.md)[], `any`\>\>

**`summary`** Get tasks.

**`throws`** {RequiredError}

**`memberof`** ScheduledTasksApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`ScheduledTasksApiGetTasksRequest`](../interfaces/generated_client.ScheduledTasksApiGetTasksRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`TaskInfo`](../interfaces/generated_client.TaskInfo.md)[], `any`\>\>

#### Defined in

[generated-client/api/scheduled-tasks-api.ts:475](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/scheduled-tasks-api.ts#L475)

___

### startTask

▸ **startTask**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`, `any`\>\>

**`summary`** Start specified task.

**`throws`** {RequiredError}

**`memberof`** ScheduledTasksApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`ScheduledTasksApiStartTaskRequest`](../interfaces/generated_client.ScheduledTasksApiStartTaskRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`, `any`\>\>

#### Defined in

[generated-client/api/scheduled-tasks-api.ts:487](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/scheduled-tasks-api.ts#L487)

___

### stopTask

▸ **stopTask**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`, `any`\>\>

**`summary`** Stop specified task.

**`throws`** {RequiredError}

**`memberof`** ScheduledTasksApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`ScheduledTasksApiStopTaskRequest`](../interfaces/generated_client.ScheduledTasksApiStopTaskRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`, `any`\>\>

#### Defined in

[generated-client/api/scheduled-tasks-api.ts:499](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/scheduled-tasks-api.ts#L499)

___

### updateTask

▸ **updateTask**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`, `any`\>\>

**`summary`** Update specified task triggers.

**`throws`** {RequiredError}

**`memberof`** ScheduledTasksApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`ScheduledTasksApiUpdateTaskRequest`](../interfaces/generated_client.ScheduledTasksApiUpdateTaskRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`, `any`\>\>

#### Defined in

[generated-client/api/scheduled-tasks-api.ts:511](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/scheduled-tasks-api.ts#L511)
