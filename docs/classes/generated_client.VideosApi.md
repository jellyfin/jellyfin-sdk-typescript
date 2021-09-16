[jellyfin-sdk-typescript](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / VideosApi

# Class: VideosApi

[generated-client](../modules/generated_client.md).VideosApi

VideosApi - object-oriented interface

**`export`**

## Hierarchy

- `BaseAPI`

  ↳ **`VideosApi`**

## Table of contents

### Constructors

- [constructor](generated_client.VideosApi.md#constructor)

### Properties

- [axios](generated_client.VideosApi.md#axios)
- [basePath](generated_client.VideosApi.md#basepath)
- [configuration](generated_client.VideosApi.md#configuration)

### Methods

- [deleteAlternateSources](generated_client.VideosApi.md#deletealternatesources)
- [getAdditionalPart](generated_client.VideosApi.md#getadditionalpart)
- [getVideoStream](generated_client.VideosApi.md#getvideostream)
- [getVideoStreamByContainer](generated_client.VideosApi.md#getvideostreambycontainer)
- [headVideoStream](generated_client.VideosApi.md#headvideostream)
- [headVideoStreamByContainer](generated_client.VideosApi.md#headvideostreambycontainer)
- [mergeVersions](generated_client.VideosApi.md#mergeversions)

## Constructors

### constructor

• **new VideosApi**(`configuration?`, `basePath?`, `axios?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](generated_client.Configuration.md) |
| `basePath` | `string` |
| `axios` | `AxiosInstance` |

#### Inherited from

BaseAPI.constructor

#### Defined in

[generated-client/base.ts:52](https://github.com/thornbill/jellyfin-sdk-typescript/blob/644c849/src/generated-client/base.ts#L52)

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

[generated-client/base.ts:50](https://github.com/thornbill/jellyfin-sdk-typescript/blob/644c849/src/generated-client/base.ts#L50)

## Methods

### deleteAlternateSources

▸ **deleteAlternateSources**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Removes alternate video sources.

**`throws`** {RequiredError}

**`memberof`** VideosApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`VideosApiDeleteAlternateSourcesRequest`](../interfaces/generated_client.VideosApiDeleteAlternateSourcesRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[generated-client/api/videos-api.ts:3382](https://github.com/thornbill/jellyfin-sdk-typescript/blob/644c849/src/generated-client/api/videos-api.ts#L3382)

___

### getAdditionalPart

▸ **getAdditionalPart**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`BaseItemDtoQueryResult`](../interfaces/generated_client.BaseItemDtoQueryResult.md)\>\>

**`summary`** Gets additional parts for a video.

**`throws`** {RequiredError}

**`memberof`** VideosApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`VideosApiGetAdditionalPartRequest`](../interfaces/generated_client.VideosApiGetAdditionalPartRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`BaseItemDtoQueryResult`](../interfaces/generated_client.BaseItemDtoQueryResult.md)\>\>

#### Defined in

[generated-client/api/videos-api.ts:3394](https://github.com/thornbill/jellyfin-sdk-typescript/blob/644c849/src/generated-client/api/videos-api.ts#L3394)

___

### getVideoStream

▸ **getVideoStream**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`any`\>\>

**`summary`** Gets a video stream.

**`throws`** {RequiredError}

**`memberof`** VideosApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`VideosApiGetVideoStreamRequest`](../interfaces/generated_client.VideosApiGetVideoStreamRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`any`\>\>

#### Defined in

[generated-client/api/videos-api.ts:3406](https://github.com/thornbill/jellyfin-sdk-typescript/blob/644c849/src/generated-client/api/videos-api.ts#L3406)

___

### getVideoStreamByContainer

▸ **getVideoStreamByContainer**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`any`\>\>

**`summary`** Gets a video stream.

**`throws`** {RequiredError}

**`memberof`** VideosApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`VideosApiGetVideoStreamByContainerRequest`](../interfaces/generated_client.VideosApiGetVideoStreamByContainerRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`any`\>\>

#### Defined in

[generated-client/api/videos-api.ts:3418](https://github.com/thornbill/jellyfin-sdk-typescript/blob/644c849/src/generated-client/api/videos-api.ts#L3418)

___

### headVideoStream

▸ **headVideoStream**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`any`\>\>

**`summary`** Gets a video stream.

**`throws`** {RequiredError}

**`memberof`** VideosApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`VideosApiHeadVideoStreamRequest`](../interfaces/generated_client.VideosApiHeadVideoStreamRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`any`\>\>

#### Defined in

[generated-client/api/videos-api.ts:3430](https://github.com/thornbill/jellyfin-sdk-typescript/blob/644c849/src/generated-client/api/videos-api.ts#L3430)

___

### headVideoStreamByContainer

▸ **headVideoStreamByContainer**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`any`\>\>

**`summary`** Gets a video stream.

**`throws`** {RequiredError}

**`memberof`** VideosApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`VideosApiHeadVideoStreamByContainerRequest`](../interfaces/generated_client.VideosApiHeadVideoStreamByContainerRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`any`\>\>

#### Defined in

[generated-client/api/videos-api.ts:3442](https://github.com/thornbill/jellyfin-sdk-typescript/blob/644c849/src/generated-client/api/videos-api.ts#L3442)

___

### mergeVersions

▸ **mergeVersions**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Merges videos into a single record.

**`throws`** {RequiredError}

**`memberof`** VideosApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`VideosApiMergeVersionsRequest`](../interfaces/generated_client.VideosApiMergeVersionsRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[generated-client/api/videos-api.ts:3454](https://github.com/thornbill/jellyfin-sdk-typescript/blob/644c849/src/generated-client/api/videos-api.ts#L3454)
