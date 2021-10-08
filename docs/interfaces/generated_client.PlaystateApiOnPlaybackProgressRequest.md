[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / PlaystateApiOnPlaybackProgressRequest

# Interface: PlaystateApiOnPlaybackProgressRequest

[generated-client](../modules/generated_client.md).PlaystateApiOnPlaybackProgressRequest

Request parameters for onPlaybackProgress operation in PlaystateApi.

**`export`**

**`interface`** PlaystateApiOnPlaybackProgressRequest

## Table of contents

### Properties

- [audioStreamIndex](generated_client.PlaystateApiOnPlaybackProgressRequest.md#audiostreamindex)
- [isMuted](generated_client.PlaystateApiOnPlaybackProgressRequest.md#ismuted)
- [isPaused](generated_client.PlaystateApiOnPlaybackProgressRequest.md#ispaused)
- [itemId](generated_client.PlaystateApiOnPlaybackProgressRequest.md#itemid)
- [liveStreamId](generated_client.PlaystateApiOnPlaybackProgressRequest.md#livestreamid)
- [mediaSourceId](generated_client.PlaystateApiOnPlaybackProgressRequest.md#mediasourceid)
- [playMethod](generated_client.PlaystateApiOnPlaybackProgressRequest.md#playmethod)
- [playSessionId](generated_client.PlaystateApiOnPlaybackProgressRequest.md#playsessionid)
- [positionTicks](generated_client.PlaystateApiOnPlaybackProgressRequest.md#positionticks)
- [repeatMode](generated_client.PlaystateApiOnPlaybackProgressRequest.md#repeatmode)
- [subtitleStreamIndex](generated_client.PlaystateApiOnPlaybackProgressRequest.md#subtitlestreamindex)
- [userId](generated_client.PlaystateApiOnPlaybackProgressRequest.md#userid)
- [volumeLevel](generated_client.PlaystateApiOnPlaybackProgressRequest.md#volumelevel)

## Properties

### audioStreamIndex

• `Optional` `Readonly` **audioStreamIndex**: `number`

The audio stream index.

**`memberof`** PlaystateApiOnPlaybackProgress

#### Defined in

[generated-client/api/playstate-api.ts:877](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/playstate-api.ts#L877)

___

### isMuted

• `Optional` `Readonly` **isMuted**: `boolean`

Indicates if the player is muted.

**`memberof`** PlaystateApiOnPlaybackProgress

#### Defined in

[generated-client/api/playstate-api.ts:933](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/playstate-api.ts#L933)

___

### isPaused

• `Optional` `Readonly` **isPaused**: `boolean`

Indicates if the player is paused.

**`memberof`** PlaystateApiOnPlaybackProgress

#### Defined in

[generated-client/api/playstate-api.ts:926](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/playstate-api.ts#L926)

___

### itemId

• `Readonly` **itemId**: `string`

Item id.

**`memberof`** PlaystateApiOnPlaybackProgress

#### Defined in

[generated-client/api/playstate-api.ts:856](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/playstate-api.ts#L856)

___

### liveStreamId

• `Optional` `Readonly` **liveStreamId**: `string`

The live stream id.

**`memberof`** PlaystateApiOnPlaybackProgress

#### Defined in

[generated-client/api/playstate-api.ts:905](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/playstate-api.ts#L905)

___

### mediaSourceId

• `Optional` `Readonly` **mediaSourceId**: `string`

The id of the MediaSource.

**`memberof`** PlaystateApiOnPlaybackProgress

#### Defined in

[generated-client/api/playstate-api.ts:863](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/playstate-api.ts#L863)

___

### playMethod

• `Optional` `Readonly` **playMethod**: [`PlayMethod`](../enums/generated_client.PlayMethod.md)

The play method.

**`memberof`** PlaystateApiOnPlaybackProgress

#### Defined in

[generated-client/api/playstate-api.ts:898](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/playstate-api.ts#L898)

___

### playSessionId

• `Optional` `Readonly` **playSessionId**: `string`

The play session id.

**`memberof`** PlaystateApiOnPlaybackProgress

#### Defined in

[generated-client/api/playstate-api.ts:912](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/playstate-api.ts#L912)

___

### positionTicks

• `Optional` `Readonly` **positionTicks**: `number`

Optional. The current position, in ticks. 1 tick &#x3D; 10000 ms.

**`memberof`** PlaystateApiOnPlaybackProgress

#### Defined in

[generated-client/api/playstate-api.ts:870](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/playstate-api.ts#L870)

___

### repeatMode

• `Optional` `Readonly` **repeatMode**: [`RepeatMode`](../enums/generated_client.RepeatMode.md)

The repeat mode.

**`memberof`** PlaystateApiOnPlaybackProgress

#### Defined in

[generated-client/api/playstate-api.ts:919](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/playstate-api.ts#L919)

___

### subtitleStreamIndex

• `Optional` `Readonly` **subtitleStreamIndex**: `number`

The subtitle stream index.

**`memberof`** PlaystateApiOnPlaybackProgress

#### Defined in

[generated-client/api/playstate-api.ts:884](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/playstate-api.ts#L884)

___

### userId

• `Readonly` **userId**: `string`

User id.

**`memberof`** PlaystateApiOnPlaybackProgress

#### Defined in

[generated-client/api/playstate-api.ts:849](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/playstate-api.ts#L849)

___

### volumeLevel

• `Optional` `Readonly` **volumeLevel**: `number`

Scale of 0-100.

**`memberof`** PlaystateApiOnPlaybackProgress

#### Defined in

[generated-client/api/playstate-api.ts:891](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/playstate-api.ts#L891)
