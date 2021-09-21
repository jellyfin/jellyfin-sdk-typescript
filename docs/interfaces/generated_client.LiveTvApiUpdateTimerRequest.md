[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / LiveTvApiUpdateTimerRequest

# Interface: LiveTvApiUpdateTimerRequest

[generated-client](../modules/generated_client.md).LiveTvApiUpdateTimerRequest

Request parameters for updateTimer operation in LiveTvApi.

**`export`**

**`interface`** LiveTvApiUpdateTimerRequest

## Table of contents

### Properties

- [timerId](generated_client.LiveTvApiUpdateTimerRequest.md#timerid)
- [timerInfoDto](generated_client.LiveTvApiUpdateTimerRequest.md#timerinfodto)

## Properties

### timerId

• `Readonly` **timerId**: `string`

Timer id.

**`memberof`** LiveTvApiUpdateTimer

#### Defined in

[generated-client/api/live-tv-api.ts:4474](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/live-tv-api.ts#L4474)

___

### timerInfoDto

• `Optional` `Readonly` **timerInfoDto**: [`TimerInfoDto`](generated_client.TimerInfoDto.md)

New timer info.

**`memberof`** LiveTvApiUpdateTimer

#### Defined in

[generated-client/api/live-tv-api.ts:4481](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/live-tv-api.ts#L4481)
