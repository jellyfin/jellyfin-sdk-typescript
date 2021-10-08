[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / MediaInfoApi

# Class: MediaInfoApi

[generated-client](../modules/generated_client.md).MediaInfoApi

MediaInfoApi - object-oriented interface

**`export`**

## Hierarchy

- `BaseAPI`

  ↳ **`MediaInfoApi`**

## Table of contents

### Constructors

- [constructor](generated_client.MediaInfoApi.md#constructor)

### Properties

- [axios](generated_client.MediaInfoApi.md#axios)
- [basePath](generated_client.MediaInfoApi.md#basepath)
- [configuration](generated_client.MediaInfoApi.md#configuration)

### Methods

- [closeLiveStream](generated_client.MediaInfoApi.md#closelivestream)
- [getBitrateTestBytes](generated_client.MediaInfoApi.md#getbitratetestbytes)
- [getPlaybackInfo](generated_client.MediaInfoApi.md#getplaybackinfo)
- [getPostedPlaybackInfo](generated_client.MediaInfoApi.md#getpostedplaybackinfo)
- [openLiveStream](generated_client.MediaInfoApi.md#openlivestream)

## Constructors

### constructor

• **new MediaInfoApi**(`configuration?`, `basePath?`, `axios?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](generated_client.Configuration.md) |
| `basePath` | `string` |
| `axios` | `AxiosInstance` |

#### Inherited from

BaseAPI.constructor

#### Defined in

[generated-client/base.ts:52](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/base.ts#L52)

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

[generated-client/base.ts:50](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/base.ts#L50)

## Methods

### closeLiveStream

▸ **closeLiveStream**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Closes a media source.

**`throws`** {RequiredError}

**`memberof`** MediaInfoApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`MediaInfoApiCloseLiveStreamRequest`](../interfaces/generated_client.MediaInfoApiCloseLiveStreamRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[generated-client/api/media-info-api.ts:820](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/media-info-api.ts#L820)

___

### getBitrateTestBytes

▸ **getBitrateTestBytes**(`requestParameters?`, `options?`): `Promise`<`AxiosResponse`<`any`\>\>

**`summary`** Tests the network with a request with the size of the bitrate.

**`throws`** {RequiredError}

**`memberof`** MediaInfoApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`MediaInfoApiGetBitrateTestBytesRequest`](../interfaces/generated_client.MediaInfoApiGetBitrateTestBytesRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`any`\>\>

#### Defined in

[generated-client/api/media-info-api.ts:832](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/media-info-api.ts#L832)

___

### getPlaybackInfo

▸ **getPlaybackInfo**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`PlaybackInfoResponse`](../interfaces/generated_client.PlaybackInfoResponse.md)\>\>

**`summary`** Gets live playback media info for an item.

**`throws`** {RequiredError}

**`memberof`** MediaInfoApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`MediaInfoApiGetPlaybackInfoRequest`](../interfaces/generated_client.MediaInfoApiGetPlaybackInfoRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`PlaybackInfoResponse`](../interfaces/generated_client.PlaybackInfoResponse.md)\>\>

#### Defined in

[generated-client/api/media-info-api.ts:844](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/media-info-api.ts#L844)

___

### getPostedPlaybackInfo

▸ **getPostedPlaybackInfo**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`PlaybackInfoResponse`](../interfaces/generated_client.PlaybackInfoResponse.md)\>\>

For backwards compatibility parameters can be sent via Query or Body, with Query having higher precedence.  Query parameters are obsolete.

**`summary`** Gets live playback media info for an item.

**`throws`** {RequiredError}

**`memberof`** MediaInfoApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`MediaInfoApiGetPostedPlaybackInfoRequest`](../interfaces/generated_client.MediaInfoApiGetPostedPlaybackInfoRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`PlaybackInfoResponse`](../interfaces/generated_client.PlaybackInfoResponse.md)\>\>

#### Defined in

[generated-client/api/media-info-api.ts:856](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/media-info-api.ts#L856)

___

### openLiveStream

▸ **openLiveStream**(`requestParameters?`, `options?`): `Promise`<`AxiosResponse`<[`LiveStreamResponse`](../interfaces/generated_client.LiveStreamResponse.md)\>\>

**`summary`** Opens a media source.

**`throws`** {RequiredError}

**`memberof`** MediaInfoApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`MediaInfoApiOpenLiveStreamRequest`](../interfaces/generated_client.MediaInfoApiOpenLiveStreamRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`LiveStreamResponse`](../interfaces/generated_client.LiveStreamResponse.md)\>\>

#### Defined in

[generated-client/api/media-info-api.ts:868](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/media-info-api.ts#L868)
