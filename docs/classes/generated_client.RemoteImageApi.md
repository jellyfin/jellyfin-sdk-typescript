[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / RemoteImageApi

# Class: RemoteImageApi

[generated-client](../modules/generated_client.md).RemoteImageApi

RemoteImageApi - object-oriented interface

**`export`**

## Hierarchy

- `BaseAPI`

  ↳ **`RemoteImageApi`**

## Table of contents

### Constructors

- [constructor](generated_client.RemoteImageApi.md#constructor)

### Properties

- [axios](generated_client.RemoteImageApi.md#axios)
- [basePath](generated_client.RemoteImageApi.md#basepath)
- [configuration](generated_client.RemoteImageApi.md#configuration)

### Methods

- [downloadRemoteImage](generated_client.RemoteImageApi.md#downloadremoteimage)
- [getRemoteImageProviders](generated_client.RemoteImageApi.md#getremoteimageproviders)
- [getRemoteImages](generated_client.RemoteImageApi.md#getremoteimages)

## Constructors

### constructor

• **new RemoteImageApi**(`configuration?`, `basePath?`, `axios?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](generated_client.Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Inherited from

BaseAPI.constructor

#### Defined in

[generated-client/base.ts:52](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/base.ts#L52)

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

[generated-client/base.ts:50](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/base.ts#L50)

## Methods

### downloadRemoteImage

▸ **downloadRemoteImage**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`, `any`\>\>

**`summary`** Downloads a remote image for an item.

**`throws`** {RequiredError}

**`memberof`** RemoteImageApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RemoteImageApiDownloadRemoteImageRequest`](../interfaces/generated_client.RemoteImageApiDownloadRemoteImageRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`, `any`\>\>

#### Defined in

[generated-client/api/remote-image-api.ts:391](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/remote-image-api.ts#L391)

___

### getRemoteImageProviders

▸ **getRemoteImageProviders**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`ImageProviderInfo`](../interfaces/index.api.ImageProviderInfo.md)[], `any`\>\>

**`summary`** Gets available remote image providers for an item.

**`throws`** {RequiredError}

**`memberof`** RemoteImageApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RemoteImageApiGetRemoteImageProvidersRequest`](../interfaces/generated_client.RemoteImageApiGetRemoteImageProvidersRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`ImageProviderInfo`](../interfaces/index.api.ImageProviderInfo.md)[], `any`\>\>

#### Defined in

[generated-client/api/remote-image-api.ts:403](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/remote-image-api.ts#L403)

___

### getRemoteImages

▸ **getRemoteImages**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`RemoteImageResult`](../interfaces/index.api.RemoteImageResult.md), `any`\>\>

**`summary`** Gets available remote images for an item.

**`throws`** {RequiredError}

**`memberof`** RemoteImageApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RemoteImageApiGetRemoteImagesRequest`](../interfaces/generated_client.RemoteImageApiGetRemoteImagesRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`RemoteImageResult`](../interfaces/index.api.RemoteImageResult.md), `any`\>\>

#### Defined in

[generated-client/api/remote-image-api.ts:415](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/remote-image-api.ts#L415)
