[jellyfin-sdk-typescript](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / DynamicHlsApi

# Class: DynamicHlsApi

[generated-client](../modules/generated_client.md).DynamicHlsApi

DynamicHlsApi - object-oriented interface

**`export`**

## Hierarchy

- `BaseAPI`

  ↳ **`DynamicHlsApi`**

## Table of contents

### Constructors

- [constructor](generated_client.DynamicHlsApi.md#constructor)

### Properties

- [axios](generated_client.DynamicHlsApi.md#axios)
- [basePath](generated_client.DynamicHlsApi.md#basepath)
- [configuration](generated_client.DynamicHlsApi.md#configuration)

### Methods

- [getHlsAudioSegment](generated_client.DynamicHlsApi.md#gethlsaudiosegment)
- [getHlsVideoSegment](generated_client.DynamicHlsApi.md#gethlsvideosegment)
- [getMasterHlsAudioPlaylist](generated_client.DynamicHlsApi.md#getmasterhlsaudioplaylist)
- [getMasterHlsVideoPlaylist](generated_client.DynamicHlsApi.md#getmasterhlsvideoplaylist)
- [getVariantHlsAudioPlaylist](generated_client.DynamicHlsApi.md#getvarianthlsaudioplaylist)
- [getVariantHlsVideoPlaylist](generated_client.DynamicHlsApi.md#getvarianthlsvideoplaylist)
- [headMasterHlsAudioPlaylist](generated_client.DynamicHlsApi.md#headmasterhlsaudioplaylist)
- [headMasterHlsVideoPlaylist](generated_client.DynamicHlsApi.md#headmasterhlsvideoplaylist)

## Constructors

### constructor

• **new DynamicHlsApi**(`configuration?`, `basePath?`, `axios?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](generated_client.Configuration.md) |
| `basePath` | `string` |
| `axios` | `AxiosInstance` |

#### Inherited from

BaseAPI.constructor

#### Defined in

[generated-client/base.ts:52](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/base.ts#L52)

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

• `Protected` **configuration**: `undefined` \| [`Configuration`](generated_client.Configuration.md)

#### Inherited from

BaseAPI.configuration

#### Defined in

[generated-client/base.ts:50](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/base.ts#L50)

## Methods

### getHlsAudioSegment

▸ **getHlsAudioSegment**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`any`\>\>

**`summary`** Gets a video stream using HTTP live streaming.

**`throws`** {RequiredError}

**`memberof`** DynamicHlsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`DynamicHlsApiGetHlsAudioSegmentRequest`](../interfaces/generated_client.DynamicHlsApiGetHlsAudioSegmentRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`any`\>\>

#### Defined in

[generated-client/api/dynamic-hls-api.ts:6109](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/dynamic-hls-api.ts#L6109)

___

### getHlsVideoSegment

▸ **getHlsVideoSegment**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`any`\>\>

**`summary`** Gets a video stream using HTTP live streaming.

**`throws`** {RequiredError}

**`memberof`** DynamicHlsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`DynamicHlsApiGetHlsVideoSegmentRequest`](../interfaces/generated_client.DynamicHlsApiGetHlsVideoSegmentRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`any`\>\>

#### Defined in

[generated-client/api/dynamic-hls-api.ts:6121](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/dynamic-hls-api.ts#L6121)

___

### getMasterHlsAudioPlaylist

▸ **getMasterHlsAudioPlaylist**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`any`\>\>

**`summary`** Gets an audio hls playlist stream.

**`throws`** {RequiredError}

**`memberof`** DynamicHlsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`DynamicHlsApiGetMasterHlsAudioPlaylistRequest`](../interfaces/generated_client.DynamicHlsApiGetMasterHlsAudioPlaylistRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`any`\>\>

#### Defined in

[generated-client/api/dynamic-hls-api.ts:6133](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/dynamic-hls-api.ts#L6133)

___

### getMasterHlsVideoPlaylist

▸ **getMasterHlsVideoPlaylist**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`any`\>\>

**`summary`** Gets a video hls playlist stream.

**`throws`** {RequiredError}

**`memberof`** DynamicHlsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`DynamicHlsApiGetMasterHlsVideoPlaylistRequest`](../interfaces/generated_client.DynamicHlsApiGetMasterHlsVideoPlaylistRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`any`\>\>

#### Defined in

[generated-client/api/dynamic-hls-api.ts:6145](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/dynamic-hls-api.ts#L6145)

___

### getVariantHlsAudioPlaylist

▸ **getVariantHlsAudioPlaylist**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`any`\>\>

**`summary`** Gets an audio stream using HTTP live streaming.

**`throws`** {RequiredError}

**`memberof`** DynamicHlsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`DynamicHlsApiGetVariantHlsAudioPlaylistRequest`](../interfaces/generated_client.DynamicHlsApiGetVariantHlsAudioPlaylistRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`any`\>\>

#### Defined in

[generated-client/api/dynamic-hls-api.ts:6157](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/dynamic-hls-api.ts#L6157)

___

### getVariantHlsVideoPlaylist

▸ **getVariantHlsVideoPlaylist**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`any`\>\>

**`summary`** Gets a video stream using HTTP live streaming.

**`throws`** {RequiredError}

**`memberof`** DynamicHlsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`DynamicHlsApiGetVariantHlsVideoPlaylistRequest`](../interfaces/generated_client.DynamicHlsApiGetVariantHlsVideoPlaylistRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`any`\>\>

#### Defined in

[generated-client/api/dynamic-hls-api.ts:6169](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/dynamic-hls-api.ts#L6169)

___

### headMasterHlsAudioPlaylist

▸ **headMasterHlsAudioPlaylist**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`any`\>\>

**`summary`** Gets an audio hls playlist stream.

**`throws`** {RequiredError}

**`memberof`** DynamicHlsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`DynamicHlsApiHeadMasterHlsAudioPlaylistRequest`](../interfaces/generated_client.DynamicHlsApiHeadMasterHlsAudioPlaylistRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`any`\>\>

#### Defined in

[generated-client/api/dynamic-hls-api.ts:6181](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/dynamic-hls-api.ts#L6181)

___

### headMasterHlsVideoPlaylist

▸ **headMasterHlsVideoPlaylist**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`any`\>\>

**`summary`** Gets a video hls playlist stream.

**`throws`** {RequiredError}

**`memberof`** DynamicHlsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`DynamicHlsApiHeadMasterHlsVideoPlaylistRequest`](../interfaces/generated_client.DynamicHlsApiHeadMasterHlsVideoPlaylistRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`any`\>\>

#### Defined in

[generated-client/api/dynamic-hls-api.ts:6193](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/dynamic-hls-api.ts#L6193)
