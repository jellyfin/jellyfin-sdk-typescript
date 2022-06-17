[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / NotificationsApi

# Class: NotificationsApi

[generated-client](../modules/generated_client.md).NotificationsApi

NotificationsApi - object-oriented interface

**`export`**

## Hierarchy

- `BaseAPI`

  ↳ **`NotificationsApi`**

## Table of contents

### Constructors

- [constructor](generated_client.NotificationsApi.md#constructor)

### Properties

- [axios](generated_client.NotificationsApi.md#axios)
- [basePath](generated_client.NotificationsApi.md#basepath)
- [configuration](generated_client.NotificationsApi.md#configuration)

### Methods

- [createAdminNotification](generated_client.NotificationsApi.md#createadminnotification)
- [getNotificationServices](generated_client.NotificationsApi.md#getnotificationservices)
- [getNotificationTypes](generated_client.NotificationsApi.md#getnotificationtypes)
- [getNotifications](generated_client.NotificationsApi.md#getnotifications)
- [getNotificationsSummary](generated_client.NotificationsApi.md#getnotificationssummary)
- [setRead](generated_client.NotificationsApi.md#setread)
- [setUnread](generated_client.NotificationsApi.md#setunread)

## Constructors

### constructor

• **new NotificationsApi**(`configuration?`, `basePath?`, `axios?`)

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

### createAdminNotification

▸ **createAdminNotification**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`, `any`\>\>

**`summary`** Sends a notification to all admins.

**`throws`** {RequiredError}

**`memberof`** NotificationsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`NotificationsApiCreateAdminNotificationRequest`](../interfaces/generated_client.NotificationsApiCreateAdminNotificationRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`, `any`\>\>

#### Defined in

[generated-client/api/notifications-api.ts:543](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/notifications-api.ts#L543)

___

### getNotificationServices

▸ **getNotificationServices**(`options?`): `Promise`<`AxiosResponse`<[`NameIdPair`](../interfaces/generated_client.NameIdPair.md)[], `any`\>\>

**`summary`** Gets notification services.

**`throws`** {RequiredError}

**`memberof`** NotificationsApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `any` |

#### Returns

`Promise`<`AxiosResponse`<[`NameIdPair`](../interfaces/generated_client.NameIdPair.md)[], `any`\>\>

#### Defined in

[generated-client/api/notifications-api.ts:554](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/notifications-api.ts#L554)

___

### getNotificationTypes

▸ **getNotificationTypes**(`options?`): `Promise`<`AxiosResponse`<[`NotificationTypeInfo`](../interfaces/generated_client.NotificationTypeInfo.md)[], `any`\>\>

**`summary`** Gets notification types.

**`throws`** {RequiredError}

**`memberof`** NotificationsApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `any` |

#### Returns

`Promise`<`AxiosResponse`<[`NotificationTypeInfo`](../interfaces/generated_client.NotificationTypeInfo.md)[], `any`\>\>

#### Defined in

[generated-client/api/notifications-api.ts:565](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/notifications-api.ts#L565)

___

### getNotifications

▸ **getNotifications**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`NotificationResultDto`](../interfaces/generated_client.NotificationResultDto.md), `any`\>\>

**`summary`** Gets a user\'s notifications.

**`throws`** {RequiredError}

**`memberof`** NotificationsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`NotificationsApiGetNotificationsRequest`](../interfaces/generated_client.NotificationsApiGetNotificationsRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`NotificationResultDto`](../interfaces/generated_client.NotificationResultDto.md), `any`\>\>

#### Defined in

[generated-client/api/notifications-api.ts:577](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/notifications-api.ts#L577)

___

### getNotificationsSummary

▸ **getNotificationsSummary**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`NotificationsSummaryDto`](../interfaces/generated_client.NotificationsSummaryDto.md), `any`\>\>

**`summary`** Gets a user\'s notification summary.

**`throws`** {RequiredError}

**`memberof`** NotificationsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`NotificationsApiGetNotificationsSummaryRequest`](../interfaces/generated_client.NotificationsApiGetNotificationsSummaryRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`NotificationsSummaryDto`](../interfaces/generated_client.NotificationsSummaryDto.md), `any`\>\>

#### Defined in

[generated-client/api/notifications-api.ts:589](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/notifications-api.ts#L589)

___

### setRead

▸ **setRead**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`, `any`\>\>

**`summary`** Sets notifications as read.

**`throws`** {RequiredError}

**`memberof`** NotificationsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`NotificationsApiSetReadRequest`](../interfaces/generated_client.NotificationsApiSetReadRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`, `any`\>\>

#### Defined in

[generated-client/api/notifications-api.ts:601](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/notifications-api.ts#L601)

___

### setUnread

▸ **setUnread**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`, `any`\>\>

**`summary`** Sets notifications as unread.

**`throws`** {RequiredError}

**`memberof`** NotificationsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`NotificationsApiSetUnreadRequest`](../interfaces/generated_client.NotificationsApiSetUnreadRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`, `any`\>\>

#### Defined in

[generated-client/api/notifications-api.ts:613](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/notifications-api.ts#L613)
