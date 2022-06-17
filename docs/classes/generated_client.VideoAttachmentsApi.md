[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / VideoAttachmentsApi

# Class: VideoAttachmentsApi

[generated-client](../modules/generated_client.md).VideoAttachmentsApi

VideoAttachmentsApi - object-oriented interface

**`export`**

## Hierarchy

- `BaseAPI`

  ↳ **`VideoAttachmentsApi`**

## Table of contents

### Constructors

- [constructor](generated_client.VideoAttachmentsApi.md#constructor)

### Properties

- [axios](generated_client.VideoAttachmentsApi.md#axios)
- [basePath](generated_client.VideoAttachmentsApi.md#basepath)
- [configuration](generated_client.VideoAttachmentsApi.md#configuration)

### Methods

- [getAttachment](generated_client.VideoAttachmentsApi.md#getattachment)

## Constructors

### constructor

• **new VideoAttachmentsApi**(`configuration?`, `basePath?`, `axios?`)

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

### getAttachment

▸ **getAttachment**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`any`, `any`\>\>

**`summary`** Get video attachment.

**`throws`** {RequiredError}

**`memberof`** VideoAttachmentsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`VideoAttachmentsApiGetAttachmentRequest`](../interfaces/generated_client.VideoAttachmentsApiGetAttachmentRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`any`, `any`\>\>

#### Defined in

[generated-client/api/video-attachments-api.ts:164](https://github.com/thornbill/jellyfin-sdk-typescript/blob/03092f3/src/generated-client/api/video-attachments-api.ts#L164)
