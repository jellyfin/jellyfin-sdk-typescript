[jellyfin-sdk-typescript](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / LiveTvApiGetTimersRequest

# Interface: LiveTvApiGetTimersRequest

[generated-client](../modules/generated_client.md).LiveTvApiGetTimersRequest

Request parameters for getTimers operation in LiveTvApi.

**`export`**

**`interface`** LiveTvApiGetTimersRequest

## Table of contents

### Properties

- [channelId](generated_client.LiveTvApiGetTimersRequest.md#channelid)
- [isActive](generated_client.LiveTvApiGetTimersRequest.md#isactive)
- [isScheduled](generated_client.LiveTvApiGetTimersRequest.md#isscheduled)
- [seriesTimerId](generated_client.LiveTvApiGetTimersRequest.md#seriestimerid)

## Properties

### channelId

• `Optional` `Readonly` **channelId**: `string`

Optional. Filter by channel id.

**`memberof`** LiveTvApiGetTimers

#### Defined in

[generated-client/api/live-tv-api.ts:4390](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/generated-client/api/live-tv-api.ts#L4390)

___

### isActive

• `Optional` `Readonly` **isActive**: `boolean`

Optional. Filter by timers that are active.

**`memberof`** LiveTvApiGetTimers

#### Defined in

[generated-client/api/live-tv-api.ts:4404](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/generated-client/api/live-tv-api.ts#L4404)

___

### isScheduled

• `Optional` `Readonly` **isScheduled**: `boolean`

Optional. Filter by timers that are scheduled.

**`memberof`** LiveTvApiGetTimers

#### Defined in

[generated-client/api/live-tv-api.ts:4411](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/generated-client/api/live-tv-api.ts#L4411)

___

### seriesTimerId

• `Optional` `Readonly` **seriesTimerId**: `string`

Optional. Filter by timers belonging to a series timer.

**`memberof`** LiveTvApiGetTimers

#### Defined in

[generated-client/api/live-tv-api.ts:4397](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/generated-client/api/live-tv-api.ts#L4397)
