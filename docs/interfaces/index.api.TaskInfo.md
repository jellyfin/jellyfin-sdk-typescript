[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / [api](../modules/index.api.md) / TaskInfo

# Interface: TaskInfo

[index](../modules/index.md).[api](../modules/index.api.md).TaskInfo

Class TaskInfo.

**`export`**

**`interface`** TaskInfo

## Table of contents

### Properties

- [Category](index.api.TaskInfo.md#category)
- [CurrentProgressPercentage](index.api.TaskInfo.md#currentprogresspercentage)
- [Description](index.api.TaskInfo.md#description)
- [Id](index.api.TaskInfo.md#id)
- [IsHidden](index.api.TaskInfo.md#ishidden)
- [Key](index.api.TaskInfo.md#key)
- [LastExecutionResult](index.api.TaskInfo.md#lastexecutionresult)
- [Name](index.api.TaskInfo.md#name)
- [State](index.api.TaskInfo.md#state)
- [Triggers](index.api.TaskInfo.md#triggers)

## Properties

### Category

• `Optional` **Category**: ``null`` \| `string`

Gets or sets the category.

**`memberof`** TaskInfo

#### Defined in

[generated-client/models/task-info.ts:73](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/task-info.ts#L73)

___

### CurrentProgressPercentage

• `Optional` **CurrentProgressPercentage**: ``null`` \| `number`

Gets or sets the progress.

**`memberof`** TaskInfo

#### Defined in

[generated-client/models/task-info.ts:43](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/task-info.ts#L43)

___

### Description

• `Optional` **Description**: ``null`` \| `string`

Gets or sets the description.

**`memberof`** TaskInfo

#### Defined in

[generated-client/models/task-info.ts:67](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/task-info.ts#L67)

___

### Id

• `Optional` **Id**: ``null`` \| `string`

Gets or sets the id.

**`memberof`** TaskInfo

#### Defined in

[generated-client/models/task-info.ts:49](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/task-info.ts#L49)

___

### IsHidden

• `Optional` **IsHidden**: `boolean`

Gets or sets a value indicating whether this instance is hidden.

**`memberof`** TaskInfo

#### Defined in

[generated-client/models/task-info.ts:79](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/task-info.ts#L79)

___

### Key

• `Optional` **Key**: ``null`` \| `string`

Gets or sets the key.

**`memberof`** TaskInfo

#### Defined in

[generated-client/models/task-info.ts:85](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/task-info.ts#L85)

___

### LastExecutionResult

• `Optional` **LastExecutionResult**: [`TaskResult`](index.api.TaskResult.md)

**`memberof`** TaskInfo

#### Defined in

[generated-client/models/task-info.ts:55](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/task-info.ts#L55)

___

### Name

• `Optional` **Name**: ``null`` \| `string`

Gets or sets the name.

**`memberof`** TaskInfo

#### Defined in

[generated-client/models/task-info.ts:31](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/task-info.ts#L31)

___

### State

• `Optional` **State**: [`TaskState`](../enums/index.api.TaskState.md)

**`memberof`** TaskInfo

#### Defined in

[generated-client/models/task-info.ts:37](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/task-info.ts#L37)

___

### Triggers

• `Optional` **Triggers**: ``null`` \| [`TaskTriggerInfo`](index.api.TaskTriggerInfo.md)[]

Gets or sets the triggers.

**`memberof`** TaskInfo

#### Defined in

[generated-client/models/task-info.ts:61](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/task-info.ts#L61)
