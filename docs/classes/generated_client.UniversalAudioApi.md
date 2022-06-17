[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / UniversalAudioApi

# Class: UniversalAudioApi

[generated-client](../modules/generated_client.md).UniversalAudioApi

UniversalAudioApi - object-oriented interface

**`export`**

## Hierarchy

- `BaseAPI`

  ↳ **`UniversalAudioApi`**

## Table of contents

### Constructors

- [constructor](generated_client.UniversalAudioApi.md#constructor)

### Properties

- [axios](generated_client.UniversalAudioApi.md#axios)
- [basePath](generated_client.UniversalAudioApi.md#basepath)
- [configuration](generated_client.UniversalAudioApi.md#configuration)

### Methods

- [getUniversalAudioStream](generated_client.UniversalAudioApi.md#getuniversalaudiostream)
- [headUniversalAudioStream](generated_client.UniversalAudioApi.md#headuniversalaudiostream)

## Constructors

### constructor

• **new UniversalAudioApi**(`configuration?`, `basePath?`, `axios?`)

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

### getUniversalAudioStream

▸ **getUniversalAudioStream**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`any`, `any`\>\>

**`summary`** Gets an audio stream.

**`throws`** {RequiredError}

**`memberof`** UniversalAudioApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`UniversalAudioApiGetUniversalAudioStreamRequest`](../interfaces/generated_client.UniversalAudioApiGetUniversalAudioStreamRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`any`, `any`\>\>

#### Defined in

[generated-client/api/universal-audio-api.ts:687](https://github.com/thornbill/jellyfin-sdk-typescript/blob/03092f3/src/generated-client/api/universal-audio-api.ts#L687)

___

### headUniversalAudioStream

▸ **headUniversalAudioStream**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`any`, `any`\>\>

**`summary`** Gets an audio stream.

**`throws`** {RequiredError}

**`memberof`** UniversalAudioApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`UniversalAudioApiHeadUniversalAudioStreamRequest`](../interfaces/generated_client.UniversalAudioApiHeadUniversalAudioStreamRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`any`, `any`\>\>

#### Defined in

[generated-client/api/universal-audio-api.ts:699](https://github.com/thornbill/jellyfin-sdk-typescript/blob/03092f3/src/generated-client/api/universal-audio-api.ts#L699)
