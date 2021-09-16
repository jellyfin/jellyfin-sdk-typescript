[jellyfin-sdk-typescript](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / ImageByNameApi

# Class: ImageByNameApi

[generated-client](../modules/generated_client.md).ImageByNameApi

ImageByNameApi - object-oriented interface

**`export`**

## Hierarchy

- `BaseAPI`

  ↳ **`ImageByNameApi`**

## Table of contents

### Constructors

- [constructor](generated_client.ImageByNameApi.md#constructor)

### Properties

- [axios](generated_client.ImageByNameApi.md#axios)
- [basePath](generated_client.ImageByNameApi.md#basepath)
- [configuration](generated_client.ImageByNameApi.md#configuration)

### Methods

- [getGeneralImage](generated_client.ImageByNameApi.md#getgeneralimage)
- [getGeneralImages](generated_client.ImageByNameApi.md#getgeneralimages)
- [getMediaInfoImage](generated_client.ImageByNameApi.md#getmediainfoimage)
- [getMediaInfoImages](generated_client.ImageByNameApi.md#getmediainfoimages)
- [getRatingImage](generated_client.ImageByNameApi.md#getratingimage)
- [getRatingImages](generated_client.ImageByNameApi.md#getratingimages)

## Constructors

### constructor

• **new ImageByNameApi**(`configuration?`, `basePath?`, `axios?`)

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

### getGeneralImage

▸ **getGeneralImage**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`any`\>\>

**`summary`** Get General Image.

**`throws`** {RequiredError}

**`memberof`** ImageByNameApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`ImageByNameApiGetGeneralImageRequest`](../interfaces/generated_client.ImageByNameApiGetGeneralImageRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`any`\>\>

#### Defined in

[generated-client/api/image-by-name-api.ts:473](https://github.com/thornbill/jellyfin-sdk-typescript/blob/644c849/src/generated-client/api/image-by-name-api.ts#L473)

___

### getGeneralImages

▸ **getGeneralImages**(`options?`): `Promise`<`AxiosResponse`<[`ImageByNameInfo`](../interfaces/generated_client.ImageByNameInfo.md)[]\>\>

**`summary`** Get all general images.

**`throws`** {RequiredError}

**`memberof`** ImageByNameApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `any` |

#### Returns

`Promise`<`AxiosResponse`<[`ImageByNameInfo`](../interfaces/generated_client.ImageByNameInfo.md)[]\>\>

#### Defined in

[generated-client/api/image-by-name-api.ts:484](https://github.com/thornbill/jellyfin-sdk-typescript/blob/644c849/src/generated-client/api/image-by-name-api.ts#L484)

___

### getMediaInfoImage

▸ **getMediaInfoImage**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`any`\>\>

**`summary`** Get media info image.

**`throws`** {RequiredError}

**`memberof`** ImageByNameApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`ImageByNameApiGetMediaInfoImageRequest`](../interfaces/generated_client.ImageByNameApiGetMediaInfoImageRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`any`\>\>

#### Defined in

[generated-client/api/image-by-name-api.ts:496](https://github.com/thornbill/jellyfin-sdk-typescript/blob/644c849/src/generated-client/api/image-by-name-api.ts#L496)

___

### getMediaInfoImages

▸ **getMediaInfoImages**(`options?`): `Promise`<`AxiosResponse`<[`ImageByNameInfo`](../interfaces/generated_client.ImageByNameInfo.md)[]\>\>

**`summary`** Get all media info images.

**`throws`** {RequiredError}

**`memberof`** ImageByNameApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `any` |

#### Returns

`Promise`<`AxiosResponse`<[`ImageByNameInfo`](../interfaces/generated_client.ImageByNameInfo.md)[]\>\>

#### Defined in

[generated-client/api/image-by-name-api.ts:507](https://github.com/thornbill/jellyfin-sdk-typescript/blob/644c849/src/generated-client/api/image-by-name-api.ts#L507)

___

### getRatingImage

▸ **getRatingImage**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`any`\>\>

**`summary`** Get rating image.

**`throws`** {RequiredError}

**`memberof`** ImageByNameApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`ImageByNameApiGetRatingImageRequest`](../interfaces/generated_client.ImageByNameApiGetRatingImageRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`any`\>\>

#### Defined in

[generated-client/api/image-by-name-api.ts:519](https://github.com/thornbill/jellyfin-sdk-typescript/blob/644c849/src/generated-client/api/image-by-name-api.ts#L519)

___

### getRatingImages

▸ **getRatingImages**(`options?`): `Promise`<`AxiosResponse`<[`ImageByNameInfo`](../interfaces/generated_client.ImageByNameInfo.md)[]\>\>

**`summary`** Get all general images.

**`throws`** {RequiredError}

**`memberof`** ImageByNameApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `any` |

#### Returns

`Promise`<`AxiosResponse`<[`ImageByNameInfo`](../interfaces/generated_client.ImageByNameInfo.md)[]\>\>

#### Defined in

[generated-client/api/image-by-name-api.ts:530](https://github.com/thornbill/jellyfin-sdk-typescript/blob/644c849/src/generated-client/api/image-by-name-api.ts#L530)
