[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / HlsSegmentApi

# Class: HlsSegmentApi

[generated-client](../modules/generated_client.md).HlsSegmentApi

HlsSegmentApi - object-oriented interface

**`export`**

## Hierarchy

- `BaseAPI`

  ↳ **`HlsSegmentApi`**

## Table of contents

### Constructors

- [constructor](generated_client.HlsSegmentApi.md#constructor)

### Properties

- [axios](generated_client.HlsSegmentApi.md#axios)
- [basePath](generated_client.HlsSegmentApi.md#basepath)
- [configuration](generated_client.HlsSegmentApi.md#configuration)

### Methods

- [getHlsAudioSegmentLegacyAac](generated_client.HlsSegmentApi.md#gethlsaudiosegmentlegacyaac)
- [getHlsAudioSegmentLegacyMp3](generated_client.HlsSegmentApi.md#gethlsaudiosegmentlegacymp3)
- [getHlsPlaylistLegacy](generated_client.HlsSegmentApi.md#gethlsplaylistlegacy)
- [getHlsVideoSegmentLegacy](generated_client.HlsSegmentApi.md#gethlsvideosegmentlegacy)
- [stopEncodingProcess](generated_client.HlsSegmentApi.md#stopencodingprocess)

## Constructors

### constructor

• **new HlsSegmentApi**(`configuration?`, `basePath?`, `axios?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](generated_client.Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Inherited from

BaseAPI.constructor

#### Defined in

[generated-client/base.ts:52](https://github.com/thornbill/jellyfin-sdk-typescript/blob/03092f3/src/generated-client/base.ts#L52)

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

[generated-client/base.ts:50](https://github.com/thornbill/jellyfin-sdk-typescript/blob/03092f3/src/generated-client/base.ts#L50)

## Methods

### getHlsAudioSegmentLegacyAac

▸ **getHlsAudioSegmentLegacyAac**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`any`, `any`\>\>

**`summary`** Gets the specified audio segment for an audio item.

**`throws`** {RequiredError}

**`memberof`** HlsSegmentApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`HlsSegmentApiGetHlsAudioSegmentLegacyAacRequest`](../interfaces/generated_client.HlsSegmentApiGetHlsAudioSegmentLegacyAacRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`any`, `any`\>\>

#### Defined in

[generated-client/api/hls-segment-api.ts:517](https://github.com/thornbill/jellyfin-sdk-typescript/blob/03092f3/src/generated-client/api/hls-segment-api.ts#L517)

___

### getHlsAudioSegmentLegacyMp3

▸ **getHlsAudioSegmentLegacyMp3**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`any`, `any`\>\>

**`summary`** Gets the specified audio segment for an audio item.

**`throws`** {RequiredError}

**`memberof`** HlsSegmentApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`HlsSegmentApiGetHlsAudioSegmentLegacyMp3Request`](../interfaces/generated_client.HlsSegmentApiGetHlsAudioSegmentLegacyMp3Request.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`any`, `any`\>\>

#### Defined in

[generated-client/api/hls-segment-api.ts:529](https://github.com/thornbill/jellyfin-sdk-typescript/blob/03092f3/src/generated-client/api/hls-segment-api.ts#L529)

___

### getHlsPlaylistLegacy

▸ **getHlsPlaylistLegacy**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`any`, `any`\>\>

**`summary`** Gets a hls video playlist.

**`throws`** {RequiredError}

**`memberof`** HlsSegmentApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`HlsSegmentApiGetHlsPlaylistLegacyRequest`](../interfaces/generated_client.HlsSegmentApiGetHlsPlaylistLegacyRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`any`, `any`\>\>

#### Defined in

[generated-client/api/hls-segment-api.ts:541](https://github.com/thornbill/jellyfin-sdk-typescript/blob/03092f3/src/generated-client/api/hls-segment-api.ts#L541)

___

### getHlsVideoSegmentLegacy

▸ **getHlsVideoSegmentLegacy**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`any`, `any`\>\>

**`summary`** Gets a hls video segment.

**`throws`** {RequiredError}

**`memberof`** HlsSegmentApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`HlsSegmentApiGetHlsVideoSegmentLegacyRequest`](../interfaces/generated_client.HlsSegmentApiGetHlsVideoSegmentLegacyRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`any`, `any`\>\>

#### Defined in

[generated-client/api/hls-segment-api.ts:553](https://github.com/thornbill/jellyfin-sdk-typescript/blob/03092f3/src/generated-client/api/hls-segment-api.ts#L553)

___

### stopEncodingProcess

▸ **stopEncodingProcess**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`, `any`\>\>

**`summary`** Stops an active encoding.

**`throws`** {RequiredError}

**`memberof`** HlsSegmentApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`HlsSegmentApiStopEncodingProcessRequest`](../interfaces/generated_client.HlsSegmentApiStopEncodingProcessRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`, `any`\>\>

#### Defined in

[generated-client/api/hls-segment-api.ts:565](https://github.com/thornbill/jellyfin-sdk-typescript/blob/03092f3/src/generated-client/api/hls-segment-api.ts#L565)
