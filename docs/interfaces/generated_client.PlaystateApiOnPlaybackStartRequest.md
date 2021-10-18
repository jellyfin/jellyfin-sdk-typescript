[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / PlaystateApiOnPlaybackStartRequest

# Interface: PlaystateApiOnPlaybackStartRequest

[generated-client](../modules/generated_client.md).PlaystateApiOnPlaybackStartRequest

Request parameters for onPlaybackStart operation in PlaystateApi.

**`export`**

**`interface`** PlaystateApiOnPlaybackStartRequest

## Table of contents

### Properties

- [audioStreamIndex](generated_client.PlaystateApiOnPlaybackStartRequest.md#audiostreamindex)
- [canSeek](generated_client.PlaystateApiOnPlaybackStartRequest.md#canseek)
- [itemId](generated_client.PlaystateApiOnPlaybackStartRequest.md#itemid)
- [liveStreamId](generated_client.PlaystateApiOnPlaybackStartRequest.md#livestreamid)
- [mediaSourceId](generated_client.PlaystateApiOnPlaybackStartRequest.md#mediasourceid)
- [playMethod](generated_client.PlaystateApiOnPlaybackStartRequest.md#playmethod)
- [playSessionId](generated_client.PlaystateApiOnPlaybackStartRequest.md#playsessionid)
- [subtitleStreamIndex](generated_client.PlaystateApiOnPlaybackStartRequest.md#subtitlestreamindex)
- [userId](generated_client.PlaystateApiOnPlaybackStartRequest.md#userid)

## Properties

### audioStreamIndex

• `Optional` `Readonly` **audioStreamIndex**: `number`

The audio stream index.

**`memberof`** PlaystateApiOnPlaybackStart

#### Defined in

[generated-client/api/playstate-api.ts:968](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/playstate-api.ts#L968)

___

### canSeek

• `Optional` `Readonly` **canSeek**: `boolean`

Indicates if the client can seek.

**`memberof`** PlaystateApiOnPlaybackStart

#### Defined in

[generated-client/api/playstate-api.ts:1003](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/playstate-api.ts#L1003)

___

### itemId

• `Readonly` **itemId**: `string`

Item id.

**`memberof`** PlaystateApiOnPlaybackStart

#### Defined in

[generated-client/api/playstate-api.ts:954](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/playstate-api.ts#L954)

___

### liveStreamId

• `Optional` `Readonly` **liveStreamId**: `string`

The live stream id.

**`memberof`** PlaystateApiOnPlaybackStart

#### Defined in

[generated-client/api/playstate-api.ts:989](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/playstate-api.ts#L989)

___

### mediaSourceId

• `Optional` `Readonly` **mediaSourceId**: `string`

The id of the MediaSource.

**`memberof`** PlaystateApiOnPlaybackStart

#### Defined in

[generated-client/api/playstate-api.ts:961](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/playstate-api.ts#L961)

___

### playMethod

• `Optional` `Readonly` **playMethod**: [`PlayMethod`](../enums/generated_client.PlayMethod.md)

The play method.

**`memberof`** PlaystateApiOnPlaybackStart

#### Defined in

[generated-client/api/playstate-api.ts:982](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/playstate-api.ts#L982)

___

### playSessionId

• `Optional` `Readonly` **playSessionId**: `string`

The play session id.

**`memberof`** PlaystateApiOnPlaybackStart

#### Defined in

[generated-client/api/playstate-api.ts:996](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/playstate-api.ts#L996)

___

### subtitleStreamIndex

• `Optional` `Readonly` **subtitleStreamIndex**: `number`

The subtitle stream index.

**`memberof`** PlaystateApiOnPlaybackStart

#### Defined in

[generated-client/api/playstate-api.ts:975](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/playstate-api.ts#L975)

___

### userId

• `Readonly` **userId**: `string`

User id.

**`memberof`** PlaystateApiOnPlaybackStart

#### Defined in

[generated-client/api/playstate-api.ts:947](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/playstate-api.ts#L947)
