[jellyfin-sdk-typescript](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / PlaystateApi

# Class: PlaystateApi

[generated-client](../modules/generated_client.md).PlaystateApi

PlaystateApi - object-oriented interface

**`export`**

## Hierarchy

- `BaseAPI`

  ↳ **`PlaystateApi`**

## Table of contents

### Constructors

- [constructor](generated_client.PlaystateApi.md#constructor)

### Properties

- [axios](generated_client.PlaystateApi.md#axios)
- [basePath](generated_client.PlaystateApi.md#basepath)
- [configuration](generated_client.PlaystateApi.md#configuration)

### Methods

- [markPlayedItem](generated_client.PlaystateApi.md#markplayeditem)
- [markUnplayedItem](generated_client.PlaystateApi.md#markunplayeditem)
- [onPlaybackProgress](generated_client.PlaystateApi.md#onplaybackprogress)
- [onPlaybackStart](generated_client.PlaystateApi.md#onplaybackstart)
- [onPlaybackStopped](generated_client.PlaystateApi.md#onplaybackstopped)
- [pingPlaybackSession](generated_client.PlaystateApi.md#pingplaybacksession)
- [reportPlaybackProgress](generated_client.PlaystateApi.md#reportplaybackprogress)
- [reportPlaybackStart](generated_client.PlaystateApi.md#reportplaybackstart)
- [reportPlaybackStopped](generated_client.PlaystateApi.md#reportplaybackstopped)

## Constructors

### constructor

• **new PlaystateApi**(`configuration?`, `basePath?`, `axios?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](index.Configuration.md) |
| `basePath` | `string` |
| `axios` | `AxiosInstance` |

#### Inherited from

BaseAPI.constructor

#### Defined in

[generated-client/base.ts:52](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/base.ts#L52)

## Properties

### axios

• `Protected` **axios**: `AxiosInstance`

#### Inherited from

BaseAPI.axios

___

### basePath

• `Protected` **basePath**: `string`

#### Inherited from

BaseAPI.basePath

___

### configuration

• `Protected` **configuration**: `undefined` \| [`Configuration`](index.Configuration.md)

#### Inherited from

BaseAPI.configuration

#### Defined in

[generated-client/base.ts:50](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/base.ts#L50)

## Methods

### markPlayedItem

▸ **markPlayedItem**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`UserItemDataDto`](../interfaces/generated_client.UserItemDataDto.md)\>\>

**`summary`** Marks an item as played for user.

**`throws`** {RequiredError}

**`memberof`** PlaystateApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`PlaystateApiMarkPlayedItemRequest`](../interfaces/generated_client.PlaystateApiMarkPlayedItemRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`UserItemDataDto`](../interfaces/generated_client.UserItemDataDto.md)\>\>

#### Defined in

[generated-client/api/playstate-api.ts:1133](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/api/playstate-api.ts#L1133)

___

### markUnplayedItem

▸ **markUnplayedItem**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`UserItemDataDto`](../interfaces/generated_client.UserItemDataDto.md)\>\>

**`summary`** Marks an item as unplayed for user.

**`throws`** {RequiredError}

**`memberof`** PlaystateApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`PlaystateApiMarkUnplayedItemRequest`](../interfaces/generated_client.PlaystateApiMarkUnplayedItemRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`UserItemDataDto`](../interfaces/generated_client.UserItemDataDto.md)\>\>

#### Defined in

[generated-client/api/playstate-api.ts:1145](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/api/playstate-api.ts#L1145)

___

### onPlaybackProgress

▸ **onPlaybackProgress**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Reports a user\'s playback progress.

**`throws`** {RequiredError}

**`memberof`** PlaystateApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`PlaystateApiOnPlaybackProgressRequest`](../interfaces/generated_client.PlaystateApiOnPlaybackProgressRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[generated-client/api/playstate-api.ts:1157](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/api/playstate-api.ts#L1157)

___

### onPlaybackStart

▸ **onPlaybackStart**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Reports that a user has begun playing an item.

**`throws`** {RequiredError}

**`memberof`** PlaystateApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`PlaystateApiOnPlaybackStartRequest`](../interfaces/generated_client.PlaystateApiOnPlaybackStartRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[generated-client/api/playstate-api.ts:1169](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/api/playstate-api.ts#L1169)

___

### onPlaybackStopped

▸ **onPlaybackStopped**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Reports that a user has stopped playing an item.

**`throws`** {RequiredError}

**`memberof`** PlaystateApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`PlaystateApiOnPlaybackStoppedRequest`](../interfaces/generated_client.PlaystateApiOnPlaybackStoppedRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[generated-client/api/playstate-api.ts:1181](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/api/playstate-api.ts#L1181)

___

### pingPlaybackSession

▸ **pingPlaybackSession**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Pings a playback session.

**`throws`** {RequiredError}

**`memberof`** PlaystateApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`PlaystateApiPingPlaybackSessionRequest`](../interfaces/generated_client.PlaystateApiPingPlaybackSessionRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[generated-client/api/playstate-api.ts:1193](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/api/playstate-api.ts#L1193)

___

### reportPlaybackProgress

▸ **reportPlaybackProgress**(`requestParameters?`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Reports playback progress within a session.

**`throws`** {RequiredError}

**`memberof`** PlaystateApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`PlaystateApiReportPlaybackProgressRequest`](../interfaces/generated_client.PlaystateApiReportPlaybackProgressRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[generated-client/api/playstate-api.ts:1205](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/api/playstate-api.ts#L1205)

___

### reportPlaybackStart

▸ **reportPlaybackStart**(`requestParameters?`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Reports playback has started within a session.

**`throws`** {RequiredError}

**`memberof`** PlaystateApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`PlaystateApiReportPlaybackStartRequest`](../interfaces/generated_client.PlaystateApiReportPlaybackStartRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[generated-client/api/playstate-api.ts:1217](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/api/playstate-api.ts#L1217)

___

### reportPlaybackStopped

▸ **reportPlaybackStopped**(`requestParameters?`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Reports playback has stopped within a session.

**`throws`** {RequiredError}

**`memberof`** PlaystateApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`PlaystateApiReportPlaybackStoppedRequest`](../interfaces/generated_client.PlaystateApiReportPlaybackStoppedRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[generated-client/api/playstate-api.ts:1229](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/api/playstate-api.ts#L1229)
