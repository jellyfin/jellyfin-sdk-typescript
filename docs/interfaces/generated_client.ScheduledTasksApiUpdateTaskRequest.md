[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / ScheduledTasksApiUpdateTaskRequest

# Interface: ScheduledTasksApiUpdateTaskRequest

[generated-client](../modules/generated_client.md).ScheduledTasksApiUpdateTaskRequest

Request parameters for updateTask operation in ScheduledTasksApi.

**`export`**

**`interface`** ScheduledTasksApiUpdateTaskRequest

## Table of contents

### Properties

- [taskId](generated_client.ScheduledTasksApiUpdateTaskRequest.md#taskid)
- [taskTriggerInfo](generated_client.ScheduledTasksApiUpdateTaskRequest.md#tasktriggerinfo)

## Properties

### taskId

• `Readonly` **taskId**: `string`

Task Id.

**`memberof`** ScheduledTasksApiUpdateTask

#### Defined in

[generated-client/api/scheduled-tasks-api.ts:438](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/scheduled-tasks-api.ts#L438)

___

### taskTriggerInfo

• `Readonly` **taskTriggerInfo**: [`TaskTriggerInfo`](generated_client.TaskTriggerInfo.md)[]

Triggers.

**`memberof`** ScheduledTasksApiUpdateTask

#### Defined in

[generated-client/api/scheduled-tasks-api.ts:445](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/scheduled-tasks-api.ts#L445)
