[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / ImageApi

# Class: ImageApi

[generated-client](../modules/generated_client.md).ImageApi

ImageApi - object-oriented interface

**`export`**

## Hierarchy

- `BaseAPI`

  ↳ **`ImageApi`**

## Table of contents

### Constructors

- [constructor](generated_client.ImageApi.md#constructor)

### Properties

- [axios](generated_client.ImageApi.md#axios)
- [basePath](generated_client.ImageApi.md#basepath)
- [configuration](generated_client.ImageApi.md#configuration)

### Methods

- [deleteItemImage](generated_client.ImageApi.md#deleteitemimage)
- [deleteItemImageByIndex](generated_client.ImageApi.md#deleteitemimagebyindex)
- [deleteUserImage](generated_client.ImageApi.md#deleteuserimage)
- [deleteUserImageByIndex](generated_client.ImageApi.md#deleteuserimagebyindex)
- [getArtistImage](generated_client.ImageApi.md#getartistimage)
- [getGenreImage](generated_client.ImageApi.md#getgenreimage)
- [getGenreImageByIndex](generated_client.ImageApi.md#getgenreimagebyindex)
- [getItemImage](generated_client.ImageApi.md#getitemimage)
- [getItemImage2](generated_client.ImageApi.md#getitemimage2)
- [getItemImageByIndex](generated_client.ImageApi.md#getitemimagebyindex)
- [getItemImageInfos](generated_client.ImageApi.md#getitemimageinfos)
- [getMusicGenreImage](generated_client.ImageApi.md#getmusicgenreimage)
- [getMusicGenreImageByIndex](generated_client.ImageApi.md#getmusicgenreimagebyindex)
- [getPersonImage](generated_client.ImageApi.md#getpersonimage)
- [getPersonImageByIndex](generated_client.ImageApi.md#getpersonimagebyindex)
- [getStudioImage](generated_client.ImageApi.md#getstudioimage)
- [getStudioImageByIndex](generated_client.ImageApi.md#getstudioimagebyindex)
- [getUserImage](generated_client.ImageApi.md#getuserimage)
- [getUserImageByIndex](generated_client.ImageApi.md#getuserimagebyindex)
- [headArtistImage](generated_client.ImageApi.md#headartistimage)
- [headGenreImage](generated_client.ImageApi.md#headgenreimage)
- [headGenreImageByIndex](generated_client.ImageApi.md#headgenreimagebyindex)
- [headItemImage](generated_client.ImageApi.md#headitemimage)
- [headItemImage2](generated_client.ImageApi.md#headitemimage2)
- [headItemImageByIndex](generated_client.ImageApi.md#headitemimagebyindex)
- [headMusicGenreImage](generated_client.ImageApi.md#headmusicgenreimage)
- [headMusicGenreImageByIndex](generated_client.ImageApi.md#headmusicgenreimagebyindex)
- [headPersonImage](generated_client.ImageApi.md#headpersonimage)
- [headPersonImageByIndex](generated_client.ImageApi.md#headpersonimagebyindex)
- [headStudioImage](generated_client.ImageApi.md#headstudioimage)
- [headStudioImageByIndex](generated_client.ImageApi.md#headstudioimagebyindex)
- [headUserImage](generated_client.ImageApi.md#headuserimage)
- [headUserImageByIndex](generated_client.ImageApi.md#headuserimagebyindex)
- [postUserImage](generated_client.ImageApi.md#postuserimage)
- [postUserImageByIndex](generated_client.ImageApi.md#postuserimagebyindex)
- [setItemImage](generated_client.ImageApi.md#setitemimage)
- [setItemImageByIndex](generated_client.ImageApi.md#setitemimagebyindex)
- [updateItemImageIndex](generated_client.ImageApi.md#updateitemimageindex)

## Constructors

### constructor

• **new ImageApi**(`configuration?`, `basePath?`, `axios?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](generated_client.Configuration.md) |
| `basePath` | `string` |
| `axios` | `AxiosInstance` |

#### Inherited from

BaseAPI.constructor

#### Defined in

[generated-client/base.ts:52](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/base.ts#L52)

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

[generated-client/base.ts:50](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/base.ts#L50)

## Methods

### deleteItemImage

▸ **deleteItemImage**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Delete an item\'s image.

**`throws`** {RequiredError}

**`memberof`** ImageApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`ImageApiDeleteItemImageRequest`](../interfaces/generated_client.ImageApiDeleteItemImageRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[generated-client/api/image-api.ts:10019](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/api/image-api.ts#L10019)

___

### deleteItemImageByIndex

▸ **deleteItemImageByIndex**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Delete an item\'s image.

**`throws`** {RequiredError}

**`memberof`** ImageApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`ImageApiDeleteItemImageByIndexRequest`](../interfaces/generated_client.ImageApiDeleteItemImageByIndexRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[generated-client/api/image-api.ts:10031](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/api/image-api.ts#L10031)

___

### deleteUserImage

▸ **deleteUserImage**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Delete the user\'s image.

**`throws`** {RequiredError}

**`memberof`** ImageApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`ImageApiDeleteUserImageRequest`](../interfaces/generated_client.ImageApiDeleteUserImageRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[generated-client/api/image-api.ts:10043](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/api/image-api.ts#L10043)

___

### deleteUserImageByIndex

▸ **deleteUserImageByIndex**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Delete the user\'s image.

**`throws`** {RequiredError}

**`memberof`** ImageApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`ImageApiDeleteUserImageByIndexRequest`](../interfaces/generated_client.ImageApiDeleteUserImageByIndexRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[generated-client/api/image-api.ts:10055](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/api/image-api.ts#L10055)

___

### getArtistImage

▸ **getArtistImage**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`any`\>\>

**`summary`** Get artist image by name.

**`throws`** {RequiredError}

**`memberof`** ImageApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`ImageApiGetArtistImageRequest`](../interfaces/generated_client.ImageApiGetArtistImageRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`any`\>\>

#### Defined in

[generated-client/api/image-api.ts:10067](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/api/image-api.ts#L10067)

___

### getGenreImage

▸ **getGenreImage**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`any`\>\>

**`summary`** Get genre image by name.

**`throws`** {RequiredError}

**`memberof`** ImageApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`ImageApiGetGenreImageRequest`](../interfaces/generated_client.ImageApiGetGenreImageRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`any`\>\>

#### Defined in

[generated-client/api/image-api.ts:10079](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/api/image-api.ts#L10079)

___

### getGenreImageByIndex

▸ **getGenreImageByIndex**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`any`\>\>

**`summary`** Get genre image by name.

**`throws`** {RequiredError}

**`memberof`** ImageApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`ImageApiGetGenreImageByIndexRequest`](../interfaces/generated_client.ImageApiGetGenreImageByIndexRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`any`\>\>

#### Defined in

[generated-client/api/image-api.ts:10091](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/api/image-api.ts#L10091)

___

### getItemImage

▸ **getItemImage**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`any`\>\>

**`summary`** Gets the item\'s image.

**`throws`** {RequiredError}

**`memberof`** ImageApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`ImageApiGetItemImageRequest`](../interfaces/generated_client.ImageApiGetItemImageRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`any`\>\>

#### Defined in

[generated-client/api/image-api.ts:10103](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/api/image-api.ts#L10103)

___

### getItemImage2

▸ **getItemImage2**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`any`\>\>

**`summary`** Gets the item\'s image.

**`throws`** {RequiredError}

**`memberof`** ImageApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`ImageApiGetItemImage2Request`](../interfaces/generated_client.ImageApiGetItemImage2Request.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`any`\>\>

#### Defined in

[generated-client/api/image-api.ts:10115](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/api/image-api.ts#L10115)

___

### getItemImageByIndex

▸ **getItemImageByIndex**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`any`\>\>

**`summary`** Gets the item\'s image.

**`throws`** {RequiredError}

**`memberof`** ImageApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`ImageApiGetItemImageByIndexRequest`](../interfaces/generated_client.ImageApiGetItemImageByIndexRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`any`\>\>

#### Defined in

[generated-client/api/image-api.ts:10127](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/api/image-api.ts#L10127)

___

### getItemImageInfos

▸ **getItemImageInfos**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`ImageInfo`](../interfaces/generated_client.ImageInfo.md)[]\>\>

**`summary`** Get item image infos.

**`throws`** {RequiredError}

**`memberof`** ImageApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`ImageApiGetItemImageInfosRequest`](../interfaces/generated_client.ImageApiGetItemImageInfosRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`ImageInfo`](../interfaces/generated_client.ImageInfo.md)[]\>\>

#### Defined in

[generated-client/api/image-api.ts:10139](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/api/image-api.ts#L10139)

___

### getMusicGenreImage

▸ **getMusicGenreImage**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`any`\>\>

**`summary`** Get music genre image by name.

**`throws`** {RequiredError}

**`memberof`** ImageApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`ImageApiGetMusicGenreImageRequest`](../interfaces/generated_client.ImageApiGetMusicGenreImageRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`any`\>\>

#### Defined in

[generated-client/api/image-api.ts:10151](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/api/image-api.ts#L10151)

___

### getMusicGenreImageByIndex

▸ **getMusicGenreImageByIndex**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`any`\>\>

**`summary`** Get music genre image by name.

**`throws`** {RequiredError}

**`memberof`** ImageApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`ImageApiGetMusicGenreImageByIndexRequest`](../interfaces/generated_client.ImageApiGetMusicGenreImageByIndexRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`any`\>\>

#### Defined in

[generated-client/api/image-api.ts:10163](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/api/image-api.ts#L10163)

___

### getPersonImage

▸ **getPersonImage**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`any`\>\>

**`summary`** Get person image by name.

**`throws`** {RequiredError}

**`memberof`** ImageApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`ImageApiGetPersonImageRequest`](../interfaces/generated_client.ImageApiGetPersonImageRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`any`\>\>

#### Defined in

[generated-client/api/image-api.ts:10175](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/api/image-api.ts#L10175)

___

### getPersonImageByIndex

▸ **getPersonImageByIndex**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`any`\>\>

**`summary`** Get person image by name.

**`throws`** {RequiredError}

**`memberof`** ImageApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`ImageApiGetPersonImageByIndexRequest`](../interfaces/generated_client.ImageApiGetPersonImageByIndexRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`any`\>\>

#### Defined in

[generated-client/api/image-api.ts:10187](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/api/image-api.ts#L10187)

___

### getStudioImage

▸ **getStudioImage**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`any`\>\>

**`summary`** Get studio image by name.

**`throws`** {RequiredError}

**`memberof`** ImageApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`ImageApiGetStudioImageRequest`](../interfaces/generated_client.ImageApiGetStudioImageRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`any`\>\>

#### Defined in

[generated-client/api/image-api.ts:10199](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/api/image-api.ts#L10199)

___

### getStudioImageByIndex

▸ **getStudioImageByIndex**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`any`\>\>

**`summary`** Get studio image by name.

**`throws`** {RequiredError}

**`memberof`** ImageApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`ImageApiGetStudioImageByIndexRequest`](../interfaces/generated_client.ImageApiGetStudioImageByIndexRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`any`\>\>

#### Defined in

[generated-client/api/image-api.ts:10211](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/api/image-api.ts#L10211)

___

### getUserImage

▸ **getUserImage**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`any`\>\>

**`summary`** Get user profile image.

**`throws`** {RequiredError}

**`memberof`** ImageApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`ImageApiGetUserImageRequest`](../interfaces/generated_client.ImageApiGetUserImageRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`any`\>\>

#### Defined in

[generated-client/api/image-api.ts:10223](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/api/image-api.ts#L10223)

___

### getUserImageByIndex

▸ **getUserImageByIndex**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`any`\>\>

**`summary`** Get user profile image.

**`throws`** {RequiredError}

**`memberof`** ImageApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`ImageApiGetUserImageByIndexRequest`](../interfaces/generated_client.ImageApiGetUserImageByIndexRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`any`\>\>

#### Defined in

[generated-client/api/image-api.ts:10235](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/api/image-api.ts#L10235)

___

### headArtistImage

▸ **headArtistImage**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`any`\>\>

**`summary`** Get artist image by name.

**`throws`** {RequiredError}

**`memberof`** ImageApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`ImageApiHeadArtistImageRequest`](../interfaces/generated_client.ImageApiHeadArtistImageRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`any`\>\>

#### Defined in

[generated-client/api/image-api.ts:10247](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/api/image-api.ts#L10247)

___

### headGenreImage

▸ **headGenreImage**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`any`\>\>

**`summary`** Get genre image by name.

**`throws`** {RequiredError}

**`memberof`** ImageApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`ImageApiHeadGenreImageRequest`](../interfaces/generated_client.ImageApiHeadGenreImageRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`any`\>\>

#### Defined in

[generated-client/api/image-api.ts:10259](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/api/image-api.ts#L10259)

___

### headGenreImageByIndex

▸ **headGenreImageByIndex**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`any`\>\>

**`summary`** Get genre image by name.

**`throws`** {RequiredError}

**`memberof`** ImageApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`ImageApiHeadGenreImageByIndexRequest`](../interfaces/generated_client.ImageApiHeadGenreImageByIndexRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`any`\>\>

#### Defined in

[generated-client/api/image-api.ts:10271](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/api/image-api.ts#L10271)

___

### headItemImage

▸ **headItemImage**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`any`\>\>

**`summary`** Gets the item\'s image.

**`throws`** {RequiredError}

**`memberof`** ImageApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`ImageApiHeadItemImageRequest`](../interfaces/generated_client.ImageApiHeadItemImageRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`any`\>\>

#### Defined in

[generated-client/api/image-api.ts:10283](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/api/image-api.ts#L10283)

___

### headItemImage2

▸ **headItemImage2**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`any`\>\>

**`summary`** Gets the item\'s image.

**`throws`** {RequiredError}

**`memberof`** ImageApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`ImageApiHeadItemImage2Request`](../interfaces/generated_client.ImageApiHeadItemImage2Request.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`any`\>\>

#### Defined in

[generated-client/api/image-api.ts:10295](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/api/image-api.ts#L10295)

___

### headItemImageByIndex

▸ **headItemImageByIndex**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`any`\>\>

**`summary`** Gets the item\'s image.

**`throws`** {RequiredError}

**`memberof`** ImageApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`ImageApiHeadItemImageByIndexRequest`](../interfaces/generated_client.ImageApiHeadItemImageByIndexRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`any`\>\>

#### Defined in

[generated-client/api/image-api.ts:10307](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/api/image-api.ts#L10307)

___

### headMusicGenreImage

▸ **headMusicGenreImage**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`any`\>\>

**`summary`** Get music genre image by name.

**`throws`** {RequiredError}

**`memberof`** ImageApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`ImageApiHeadMusicGenreImageRequest`](../interfaces/generated_client.ImageApiHeadMusicGenreImageRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`any`\>\>

#### Defined in

[generated-client/api/image-api.ts:10319](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/api/image-api.ts#L10319)

___

### headMusicGenreImageByIndex

▸ **headMusicGenreImageByIndex**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`any`\>\>

**`summary`** Get music genre image by name.

**`throws`** {RequiredError}

**`memberof`** ImageApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`ImageApiHeadMusicGenreImageByIndexRequest`](../interfaces/generated_client.ImageApiHeadMusicGenreImageByIndexRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`any`\>\>

#### Defined in

[generated-client/api/image-api.ts:10331](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/api/image-api.ts#L10331)

___

### headPersonImage

▸ **headPersonImage**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`any`\>\>

**`summary`** Get person image by name.

**`throws`** {RequiredError}

**`memberof`** ImageApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`ImageApiHeadPersonImageRequest`](../interfaces/generated_client.ImageApiHeadPersonImageRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`any`\>\>

#### Defined in

[generated-client/api/image-api.ts:10343](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/api/image-api.ts#L10343)

___

### headPersonImageByIndex

▸ **headPersonImageByIndex**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`any`\>\>

**`summary`** Get person image by name.

**`throws`** {RequiredError}

**`memberof`** ImageApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`ImageApiHeadPersonImageByIndexRequest`](../interfaces/generated_client.ImageApiHeadPersonImageByIndexRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`any`\>\>

#### Defined in

[generated-client/api/image-api.ts:10355](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/api/image-api.ts#L10355)

___

### headStudioImage

▸ **headStudioImage**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`any`\>\>

**`summary`** Get studio image by name.

**`throws`** {RequiredError}

**`memberof`** ImageApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`ImageApiHeadStudioImageRequest`](../interfaces/generated_client.ImageApiHeadStudioImageRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`any`\>\>

#### Defined in

[generated-client/api/image-api.ts:10367](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/api/image-api.ts#L10367)

___

### headStudioImageByIndex

▸ **headStudioImageByIndex**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`any`\>\>

**`summary`** Get studio image by name.

**`throws`** {RequiredError}

**`memberof`** ImageApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`ImageApiHeadStudioImageByIndexRequest`](../interfaces/generated_client.ImageApiHeadStudioImageByIndexRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`any`\>\>

#### Defined in

[generated-client/api/image-api.ts:10379](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/api/image-api.ts#L10379)

___

### headUserImage

▸ **headUserImage**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`any`\>\>

**`summary`** Get user profile image.

**`throws`** {RequiredError}

**`memberof`** ImageApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`ImageApiHeadUserImageRequest`](../interfaces/generated_client.ImageApiHeadUserImageRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`any`\>\>

#### Defined in

[generated-client/api/image-api.ts:10391](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/api/image-api.ts#L10391)

___

### headUserImageByIndex

▸ **headUserImageByIndex**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`any`\>\>

**`summary`** Get user profile image.

**`throws`** {RequiredError}

**`memberof`** ImageApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`ImageApiHeadUserImageByIndexRequest`](../interfaces/generated_client.ImageApiHeadUserImageByIndexRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`any`\>\>

#### Defined in

[generated-client/api/image-api.ts:10403](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/api/image-api.ts#L10403)

___

### postUserImage

▸ **postUserImage**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Sets the user image.

**`throws`** {RequiredError}

**`memberof`** ImageApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`ImageApiPostUserImageRequest`](../interfaces/generated_client.ImageApiPostUserImageRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[generated-client/api/image-api.ts:10415](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/api/image-api.ts#L10415)

___

### postUserImageByIndex

▸ **postUserImageByIndex**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Sets the user image.

**`throws`** {RequiredError}

**`memberof`** ImageApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`ImageApiPostUserImageByIndexRequest`](../interfaces/generated_client.ImageApiPostUserImageByIndexRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[generated-client/api/image-api.ts:10427](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/api/image-api.ts#L10427)

___

### setItemImage

▸ **setItemImage**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Set item image.

**`throws`** {RequiredError}

**`memberof`** ImageApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`ImageApiSetItemImageRequest`](../interfaces/generated_client.ImageApiSetItemImageRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[generated-client/api/image-api.ts:10439](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/api/image-api.ts#L10439)

___

### setItemImageByIndex

▸ **setItemImageByIndex**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Set item image.

**`throws`** {RequiredError}

**`memberof`** ImageApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`ImageApiSetItemImageByIndexRequest`](../interfaces/generated_client.ImageApiSetItemImageByIndexRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[generated-client/api/image-api.ts:10451](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/api/image-api.ts#L10451)

___

### updateItemImageIndex

▸ **updateItemImageIndex**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Updates the index for an item image.

**`throws`** {RequiredError}

**`memberof`** ImageApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`ImageApiUpdateItemImageIndexRequest`](../interfaces/generated_client.ImageApiUpdateItemImageIndexRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[generated-client/api/image-api.ts:10463](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/api/image-api.ts#L10463)
