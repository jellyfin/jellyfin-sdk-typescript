[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / SessionApiGetSessionsRequest

# Interface: SessionApiGetSessionsRequest

[generated-client](../modules/generated_client.md).SessionApiGetSessionsRequest

Request parameters for getSessions operation in SessionApi.

**`export`**

**`interface`** SessionApiGetSessionsRequest

## Table of contents

### Properties

- [activeWithinSeconds](generated_client.SessionApiGetSessionsRequest.md#activewithinseconds)
- [controllableByUserId](generated_client.SessionApiGetSessionsRequest.md#controllablebyuserid)
- [deviceId](generated_client.SessionApiGetSessionsRequest.md#deviceid)

## Properties

### activeWithinSeconds

• `Optional` `Readonly` **activeWithinSeconds**: `number`

Optional. Filter by sessions that were active in the last n seconds.

**`memberof`** SessionApiGetSessions

#### Defined in

[generated-client/api/session-api.ts:1271](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/session-api.ts#L1271)

___

### controllableByUserId

• `Optional` `Readonly` **controllableByUserId**: `string`

Filter by sessions that a given user is allowed to remote control.

**`memberof`** SessionApiGetSessions

#### Defined in

[generated-client/api/session-api.ts:1257](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/session-api.ts#L1257)

___

### deviceId

• `Optional` `Readonly` **deviceId**: `string`

Filter by device Id.

**`memberof`** SessionApiGetSessions

#### Defined in

[generated-client/api/session-api.ts:1264](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/session-api.ts#L1264)
