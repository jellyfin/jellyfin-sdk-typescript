[jellyfin-sdk-typescript](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / SendCommand

# Interface: SendCommand

[generated-client](../modules/generated_client.md).SendCommand

Class SendCommand.

**`export`**

**`interface`** SendCommand

## Table of contents

### Properties

- [Command](generated_client.SendCommand.md#command)
- [EmittedAt](generated_client.SendCommand.md#emittedat)
- [GroupId](generated_client.SendCommand.md#groupid)
- [PlaylistItemId](generated_client.SendCommand.md#playlistitemid)
- [PositionTicks](generated_client.SendCommand.md#positionticks)
- [When](generated_client.SendCommand.md#when)

## Properties

### Command

• `Optional` **Command**: [`SendCommandType`](../enums/generated_client.SendCommandType.md)

**`memberof`** SendCommand

#### Defined in

[generated-client/models/send-command.ts:53](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/models/send-command.ts#L53)

___

### EmittedAt

• `Optional` **EmittedAt**: `string`

Gets the UTC time when this command has been emitted.

**`memberof`** SendCommand

#### Defined in

[generated-client/models/send-command.ts:59](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/models/send-command.ts#L59)

___

### GroupId

• `Optional` **GroupId**: `string`

Gets the group identifier.

**`memberof`** SendCommand

#### Defined in

[generated-client/models/send-command.ts:29](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/models/send-command.ts#L29)

___

### PlaylistItemId

• `Optional` **PlaylistItemId**: `string`

Gets the playlist identifier of the playing item.

**`memberof`** SendCommand

#### Defined in

[generated-client/models/send-command.ts:35](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/models/send-command.ts#L35)

___

### PositionTicks

• `Optional` **PositionTicks**: ``null`` \| `number`

Gets the position ticks.

**`memberof`** SendCommand

#### Defined in

[generated-client/models/send-command.ts:47](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/models/send-command.ts#L47)

___

### When

• `Optional` **When**: `string`

Gets or sets the UTC time when to execute the command.

**`memberof`** SendCommand

#### Defined in

[generated-client/models/send-command.ts:41](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/models/send-command.ts#L41)
