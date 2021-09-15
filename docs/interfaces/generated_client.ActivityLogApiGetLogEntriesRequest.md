[jellyfin-sdk-typescript](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / ActivityLogApiGetLogEntriesRequest

# Interface: ActivityLogApiGetLogEntriesRequest

[generated-client](../modules/generated_client.md).ActivityLogApiGetLogEntriesRequest

Request parameters for getLogEntries operation in ActivityLogApi.

**`export`**

**`interface`** ActivityLogApiGetLogEntriesRequest

## Table of contents

### Properties

- [hasUserId](generated_client.ActivityLogApiGetLogEntriesRequest.md#hasuserid)
- [limit](generated_client.ActivityLogApiGetLogEntriesRequest.md#limit)
- [minDate](generated_client.ActivityLogApiGetLogEntriesRequest.md#mindate)
- [startIndex](generated_client.ActivityLogApiGetLogEntriesRequest.md#startindex)

## Properties

### hasUserId

• `Optional` `Readonly` **hasUserId**: `boolean`

Optional. Filter log entries if it has user id, or not.

**`memberof`** ActivityLogApiGetLogEntries

#### Defined in

[generated-client/api/activity-log-api.ts:168](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/activity-log-api.ts#L168)

___

### limit

• `Optional` `Readonly` **limit**: `number`

Optional. The maximum number of records to return.

**`memberof`** ActivityLogApiGetLogEntries

#### Defined in

[generated-client/api/activity-log-api.ts:154](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/activity-log-api.ts#L154)

___

### minDate

• `Optional` `Readonly` **minDate**: `string`

Optional. The minimum date. Format &#x3D; ISO.

**`memberof`** ActivityLogApiGetLogEntries

#### Defined in

[generated-client/api/activity-log-api.ts:161](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/activity-log-api.ts#L161)

___

### startIndex

• `Optional` `Readonly` **startIndex**: `number`

Optional. The record index to start at. All items with a lower index will be dropped from the results.

**`memberof`** ActivityLogApiGetLogEntries

#### Defined in

[generated-client/api/activity-log-api.ts:147](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/activity-log-api.ts#L147)
