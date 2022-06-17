[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / VideoHlsApi

# Class: VideoHlsApi

[generated-client](../modules/generated_client.md).VideoHlsApi

VideoHlsApi - object-oriented interface

**`export`**

## Hierarchy

- `BaseAPI`

  ↳ **`VideoHlsApi`**

## Table of contents

### Constructors

- [constructor](generated_client.VideoHlsApi.md#constructor)

### Properties

- [axios](generated_client.VideoHlsApi.md#axios)
- [basePath](generated_client.VideoHlsApi.md#basepath)
- [configuration](generated_client.VideoHlsApi.md#configuration)

### Methods

- [getLiveHlsStream](generated_client.VideoHlsApi.md#getlivehlsstream)

## Constructors

### constructor

• **new VideoHlsApi**(`configuration?`, `basePath?`, `axios?`)

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

### getLiveHlsStream

▸ **getLiveHlsStream**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`any`, `any`\>\>

**`summary`** Gets a hls live stream.

**`throws`** {RequiredError}

**`memberof`** VideoHlsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`VideoHlsApiGetLiveHlsStreamRequest`](../interfaces/generated_client.VideoHlsApiGetLiveHlsStreamRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`any`, `any`\>\>

#### Defined in

[generated-client/api/video-hls-api.ts:857](https://github.com/thornbill/jellyfin-sdk-typescript/blob/03092f3/src/generated-client/api/video-hls-api.ts#L857)
