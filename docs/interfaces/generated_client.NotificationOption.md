[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / NotificationOption

# Interface: NotificationOption

[generated-client](../modules/generated_client.md).NotificationOption

**`export`**

**`interface`** NotificationOption

## Table of contents

### Properties

- [DisabledMonitorUsers](generated_client.NotificationOption.md#disabledmonitorusers)
- [DisabledServices](generated_client.NotificationOption.md#disabledservices)
- [Enabled](generated_client.NotificationOption.md#enabled)
- [SendToUserMode](generated_client.NotificationOption.md#sendtousermode)
- [SendToUsers](generated_client.NotificationOption.md#sendtousers)
- [Type](generated_client.NotificationOption.md#type)

## Properties

### DisabledMonitorUsers

• `Optional` **DisabledMonitorUsers**: `string`[]

Gets or sets user Ids to not monitor (it\'s opt out).

**`memberof`** NotificationOption

#### Defined in

[generated-client/models/notification-option.ts:35](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/models/notification-option.ts#L35)

___

### DisabledServices

• `Optional` **DisabledServices**: `string`[]

Gets or sets the disabled services.

**`memberof`** NotificationOption

#### Defined in

[generated-client/models/notification-option.ts:53](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/models/notification-option.ts#L53)

___

### Enabled

• `Optional` **Enabled**: `boolean`

Gets or sets a value indicating whether this MediaBrowser.Model.Notifications.NotificationOption is enabled.

**`memberof`** NotificationOption

#### Defined in

[generated-client/models/notification-option.ts:47](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/models/notification-option.ts#L47)

___

### SendToUserMode

• `Optional` **SendToUserMode**: [`SendToUserType`](../enums/generated_client.SendToUserType.md)

**`memberof`** NotificationOption

#### Defined in

[generated-client/models/notification-option.ts:59](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/models/notification-option.ts#L59)

___

### SendToUsers

• `Optional` **SendToUsers**: `string`[]

Gets or sets user Ids to send to (if SendToUserMode == Custom).

**`memberof`** NotificationOption

#### Defined in

[generated-client/models/notification-option.ts:41](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/models/notification-option.ts#L41)

___

### Type

• `Optional` **Type**: ``null`` \| `string`

**`memberof`** NotificationOption

#### Defined in

[generated-client/models/notification-option.ts:29](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/models/notification-option.ts#L29)
