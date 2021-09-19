[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / PlaystateApiOnPlaybackStoppedRequest

# Interface: PlaystateApiOnPlaybackStoppedRequest

[generated-client](../modules/generated_client.md).PlaystateApiOnPlaybackStoppedRequest

Request parameters for onPlaybackStopped operation in PlaystateApi.

**`export`**

**`interface`** PlaystateApiOnPlaybackStoppedRequest

## Table of contents

### Properties

- [itemId](generated_client.PlaystateApiOnPlaybackStoppedRequest.md#itemid)
- [liveStreamId](generated_client.PlaystateApiOnPlaybackStoppedRequest.md#livestreamid)
- [mediaSourceId](generated_client.PlaystateApiOnPlaybackStoppedRequest.md#mediasourceid)
- [nextMediaType](generated_client.PlaystateApiOnPlaybackStoppedRequest.md#nextmediatype)
- [playSessionId](generated_client.PlaystateApiOnPlaybackStoppedRequest.md#playsessionid)
- [positionTicks](generated_client.PlaystateApiOnPlaybackStoppedRequest.md#positionticks)
- [userId](generated_client.PlaystateApiOnPlaybackStoppedRequest.md#userid)

## Properties

### itemId

• `Readonly` **itemId**: `string`

Item id.

**`memberof`** PlaystateApiOnPlaybackStopped

#### Defined in

[generated-client/api/playstate-api.ts:1024](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/api/playstate-api.ts#L1024)

___

### liveStreamId

• `Optional` `Readonly` **liveStreamId**: `string`

The live stream id.

**`memberof`** PlaystateApiOnPlaybackStopped

#### Defined in

[generated-client/api/playstate-api.ts:1052](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/api/playstate-api.ts#L1052)

___

### mediaSourceId

• `Optional` `Readonly` **mediaSourceId**: `string`

The id of the MediaSource.

**`memberof`** PlaystateApiOnPlaybackStopped

#### Defined in

[generated-client/api/playstate-api.ts:1031](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/api/playstate-api.ts#L1031)

___

### nextMediaType

• `Optional` `Readonly` **nextMediaType**: `string`

The next media type that will play.

**`memberof`** PlaystateApiOnPlaybackStopped

#### Defined in

[generated-client/api/playstate-api.ts:1038](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/api/playstate-api.ts#L1038)

___

### playSessionId

• `Optional` `Readonly` **playSessionId**: `string`

The play session id.

**`memberof`** PlaystateApiOnPlaybackStopped

#### Defined in

[generated-client/api/playstate-api.ts:1059](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/api/playstate-api.ts#L1059)

___

### positionTicks

• `Optional` `Readonly` **positionTicks**: `number`

Optional. The position, in ticks, where playback stopped. 1 tick &#x3D; 10000 ms.

**`memberof`** PlaystateApiOnPlaybackStopped

#### Defined in

[generated-client/api/playstate-api.ts:1045](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/api/playstate-api.ts#L1045)

___

### userId

• `Readonly` **userId**: `string`

User id.

**`memberof`** PlaystateApiOnPlaybackStopped

#### Defined in

[generated-client/api/playstate-api.ts:1017](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/api/playstate-api.ts#L1017)
