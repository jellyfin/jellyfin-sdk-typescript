[jellyfin-sdk-typescript](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / AudioApi

# Class: AudioApi

[generated-client](../modules/generated_client.md).AudioApi

AudioApi - object-oriented interface

**`export`**

## Hierarchy

- `BaseAPI`

  ↳ **`AudioApi`**

## Table of contents

### Constructors

- [constructor](generated_client.AudioApi.md#constructor)

### Properties

- [axios](generated_client.AudioApi.md#axios)
- [basePath](generated_client.AudioApi.md#basepath)
- [configuration](generated_client.AudioApi.md#configuration)

### Methods

- [getAudioStream](generated_client.AudioApi.md#getaudiostream)
- [getAudioStreamByContainer](generated_client.AudioApi.md#getaudiostreambycontainer)
- [headAudioStream](generated_client.AudioApi.md#headaudiostream)
- [headAudioStreamByContainer](generated_client.AudioApi.md#headaudiostreambycontainer)

## Constructors

### constructor

• **new AudioApi**(`configuration?`, `basePath?`, `axios?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](index.Configuration.md) |
| `basePath` | `string` |
| `axios` | `AxiosInstance` |

#### Inherited from

BaseAPI.constructor

#### Defined in

[generated-client/base.ts:52](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/base.ts#L52)

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

[generated-client/base.ts:50](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/base.ts#L50)

## Methods

### getAudioStream

▸ **getAudioStream**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`any`\>\>

**`summary`** Gets an audio stream.

**`throws`** {RequiredError}

**`memberof`** AudioApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`AudioApiGetAudioStreamRequest`](../interfaces/generated_client.AudioApiGetAudioStreamRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`any`\>\>

#### Defined in

[generated-client/api/audio-api.ts:3033](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/audio-api.ts#L3033)

___

### getAudioStreamByContainer

▸ **getAudioStreamByContainer**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`any`\>\>

**`summary`** Gets an audio stream.

**`throws`** {RequiredError}

**`memberof`** AudioApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`AudioApiGetAudioStreamByContainerRequest`](../interfaces/generated_client.AudioApiGetAudioStreamByContainerRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`any`\>\>

#### Defined in

[generated-client/api/audio-api.ts:3045](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/audio-api.ts#L3045)

___

### headAudioStream

▸ **headAudioStream**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`any`\>\>

**`summary`** Gets an audio stream.

**`throws`** {RequiredError}

**`memberof`** AudioApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`AudioApiHeadAudioStreamRequest`](../interfaces/generated_client.AudioApiHeadAudioStreamRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`any`\>\>

#### Defined in

[generated-client/api/audio-api.ts:3057](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/audio-api.ts#L3057)

___

### headAudioStreamByContainer

▸ **headAudioStreamByContainer**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`any`\>\>

**`summary`** Gets an audio stream.

**`throws`** {RequiredError}

**`memberof`** AudioApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`AudioApiHeadAudioStreamByContainerRequest`](../interfaces/generated_client.AudioApiHeadAudioStreamByContainerRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`any`\>\>

#### Defined in

[generated-client/api/audio-api.ts:3069](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/audio-api.ts#L3069)
