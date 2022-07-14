[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / DynamicHlsApi

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
- [getLiveHlsStream](generated_client.DynamicHlsApi.md#getlivehlsstream)
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

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](generated_client.Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Inherited from

BaseAPI.constructor

#### Defined in

[generated-client/base.ts:52](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/base.ts#L52)

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

[generated-client/base.ts:50](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/base.ts#L50)

## Methods

### getHlsAudioSegment

▸ **getHlsAudioSegment**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`any`, `any`\>\>

**`summary`** Gets a video stream using HTTP live streaming.

**`throws`** {RequiredError}

**`memberof`** DynamicHlsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`DynamicHlsApiGetHlsAudioSegmentRequest`](../interfaces/generated_client.DynamicHlsApiGetHlsAudioSegmentRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`any`, `any`\>\>

#### Defined in

[generated-client/api/dynamic-hls-api.ts:7071](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L7071)

___

### getHlsVideoSegment

▸ **getHlsVideoSegment**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`any`, `any`\>\>

**`summary`** Gets a video stream using HTTP live streaming.

**`throws`** {RequiredError}

**`memberof`** DynamicHlsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`DynamicHlsApiGetHlsVideoSegmentRequest`](../interfaces/generated_client.DynamicHlsApiGetHlsVideoSegmentRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`any`, `any`\>\>

#### Defined in

[generated-client/api/dynamic-hls-api.ts:7083](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L7083)

___

### getLiveHlsStream

▸ **getLiveHlsStream**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`any`, `any`\>\>

**`summary`** Gets a hls live stream.

**`throws`** {RequiredError}

**`memberof`** DynamicHlsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`DynamicHlsApiGetLiveHlsStreamRequest`](../interfaces/generated_client.DynamicHlsApiGetLiveHlsStreamRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`any`, `any`\>\>

#### Defined in

[generated-client/api/dynamic-hls-api.ts:7095](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L7095)

___

### getMasterHlsAudioPlaylist

▸ **getMasterHlsAudioPlaylist**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`any`, `any`\>\>

**`summary`** Gets an audio hls playlist stream.

**`throws`** {RequiredError}

**`memberof`** DynamicHlsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`DynamicHlsApiGetMasterHlsAudioPlaylistRequest`](../interfaces/generated_client.DynamicHlsApiGetMasterHlsAudioPlaylistRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`any`, `any`\>\>

#### Defined in

[generated-client/api/dynamic-hls-api.ts:7107](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L7107)

___

### getMasterHlsVideoPlaylist

▸ **getMasterHlsVideoPlaylist**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`any`, `any`\>\>

**`summary`** Gets a video hls playlist stream.

**`throws`** {RequiredError}

**`memberof`** DynamicHlsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`DynamicHlsApiGetMasterHlsVideoPlaylistRequest`](../interfaces/generated_client.DynamicHlsApiGetMasterHlsVideoPlaylistRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`any`, `any`\>\>

#### Defined in

[generated-client/api/dynamic-hls-api.ts:7119](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L7119)

___

### getVariantHlsAudioPlaylist

▸ **getVariantHlsAudioPlaylist**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`any`, `any`\>\>

**`summary`** Gets an audio stream using HTTP live streaming.

**`throws`** {RequiredError}

**`memberof`** DynamicHlsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`DynamicHlsApiGetVariantHlsAudioPlaylistRequest`](../interfaces/generated_client.DynamicHlsApiGetVariantHlsAudioPlaylistRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`any`, `any`\>\>

#### Defined in

[generated-client/api/dynamic-hls-api.ts:7131](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L7131)

___

### getVariantHlsVideoPlaylist

▸ **getVariantHlsVideoPlaylist**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`any`, `any`\>\>

**`summary`** Gets a video stream using HTTP live streaming.

**`throws`** {RequiredError}

**`memberof`** DynamicHlsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`DynamicHlsApiGetVariantHlsVideoPlaylistRequest`](../interfaces/generated_client.DynamicHlsApiGetVariantHlsVideoPlaylistRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`any`, `any`\>\>

#### Defined in

[generated-client/api/dynamic-hls-api.ts:7143](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L7143)

___

### headMasterHlsAudioPlaylist

▸ **headMasterHlsAudioPlaylist**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`any`, `any`\>\>

**`summary`** Gets an audio hls playlist stream.

**`throws`** {RequiredError}

**`memberof`** DynamicHlsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`DynamicHlsApiHeadMasterHlsAudioPlaylistRequest`](../interfaces/generated_client.DynamicHlsApiHeadMasterHlsAudioPlaylistRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`any`, `any`\>\>

#### Defined in

[generated-client/api/dynamic-hls-api.ts:7155](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L7155)

___

### headMasterHlsVideoPlaylist

▸ **headMasterHlsVideoPlaylist**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`any`, `any`\>\>

**`summary`** Gets a video hls playlist stream.

**`throws`** {RequiredError}

**`memberof`** DynamicHlsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`DynamicHlsApiHeadMasterHlsVideoPlaylistRequest`](../interfaces/generated_client.DynamicHlsApiHeadMasterHlsVideoPlaylistRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`any`, `any`\>\>

#### Defined in

[generated-client/api/dynamic-hls-api.ts:7167](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/dynamic-hls-api.ts#L7167)
