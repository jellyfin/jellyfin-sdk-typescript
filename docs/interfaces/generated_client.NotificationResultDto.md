[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / NotificationResultDto

# Interface: NotificationResultDto

[generated-client](../modules/generated_client.md).NotificationResultDto

A list of notifications with the total record count for pagination.

**`export`**

**`interface`** NotificationResultDto

## Table of contents

### Properties

- [Notifications](generated_client.NotificationResultDto.md#notifications)
- [TotalRecordCount](generated_client.NotificationResultDto.md#totalrecordcount)

## Properties

### Notifications

• `Optional` **Notifications**: [`NotificationDto`](generated_client.NotificationDto.md)[]

Gets or sets the current page of notifications.

**`memberof`** NotificationResultDto

#### Defined in

[generated-client/models/notification-result-dto.ts:29](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/models/notification-result-dto.ts#L29)

___

### TotalRecordCount

• `Optional` **TotalRecordCount**: `number`

Gets or sets the total number of notifications.

**`memberof`** NotificationResultDto

#### Defined in

[generated-client/models/notification-result-dto.ts:35](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/models/notification-result-dto.ts#L35)
