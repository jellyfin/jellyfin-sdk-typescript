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
- [getSplashscreen](generated_client.ImageApi.md#getsplashscreen)
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
- [uploadCustomSplashscreen](generated_client.ImageApi.md#uploadcustomsplashscreen)

## Constructors

### constructor

• **new ImageApi**(`configuration?`, `basePath?`, `axios?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](generated_client.Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Inherited from

BaseAPI.constructor

#### Defined in

[generated-client/base.ts:52](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/base.ts#L52)

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

[generated-client/base.ts:50](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/base.ts#L50)

## Methods

### deleteItemImage

▸ **deleteItemImage**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`, `any`\>\>

**`summary`** Delete an item\'s image.

**`throws`** {RequiredError}

**`memberof`** ImageApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`ImageApiDeleteItemImageRequest`](../interfaces/generated_client.ImageApiDeleteItemImageRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`, `any`\>\>

#### Defined in

[generated-client/api/image-api.ts:10315](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L10315)

___

### deleteItemImageByIndex

▸ **deleteItemImageByIndex**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`, `any`\>\>

**`summary`** Delete an item\'s image.

**`throws`** {RequiredError}

**`memberof`** ImageApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`ImageApiDeleteItemImageByIndexRequest`](../interfaces/generated_client.ImageApiDeleteItemImageByIndexRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`, `any`\>\>

#### Defined in

[generated-client/api/image-api.ts:10327](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L10327)

___

### deleteUserImage

▸ **deleteUserImage**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`, `any`\>\>

**`summary`** Delete the user\'s image.

**`throws`** {RequiredError}

**`memberof`** ImageApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`ImageApiDeleteUserImageRequest`](../interfaces/generated_client.ImageApiDeleteUserImageRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`, `any`\>\>

#### Defined in

[generated-client/api/image-api.ts:10339](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L10339)

___

### deleteUserImageByIndex

▸ **deleteUserImageByIndex**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`, `any`\>\>

**`summary`** Delete the user\'s image.

**`throws`** {RequiredError}

**`memberof`** ImageApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`ImageApiDeleteUserImageByIndexRequest`](../interfaces/generated_client.ImageApiDeleteUserImageByIndexRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`, `any`\>\>

#### Defined in

[generated-client/api/image-api.ts:10351](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L10351)

___

### getArtistImage

▸ **getArtistImage**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`any`, `any`\>\>

**`summary`** Get artist image by name.

**`throws`** {RequiredError}

**`memberof`** ImageApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`ImageApiGetArtistImageRequest`](../interfaces/generated_client.ImageApiGetArtistImageRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`any`, `any`\>\>

#### Defined in

[generated-client/api/image-api.ts:10363](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L10363)

___

### getGenreImage

▸ **getGenreImage**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`any`, `any`\>\>

**`summary`** Get genre image by name.

**`throws`** {RequiredError}

**`memberof`** ImageApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`ImageApiGetGenreImageRequest`](../interfaces/generated_client.ImageApiGetGenreImageRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`any`, `any`\>\>

#### Defined in

[generated-client/api/image-api.ts:10375](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L10375)

___

### getGenreImageByIndex

▸ **getGenreImageByIndex**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`any`, `any`\>\>

**`summary`** Get genre image by name.

**`throws`** {RequiredError}

**`memberof`** ImageApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`ImageApiGetGenreImageByIndexRequest`](../interfaces/generated_client.ImageApiGetGenreImageByIndexRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`any`, `any`\>\>

#### Defined in

[generated-client/api/image-api.ts:10387](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L10387)

___

### getItemImage

▸ **getItemImage**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`any`, `any`\>\>

**`summary`** Gets the item\'s image.

**`throws`** {RequiredError}

**`memberof`** ImageApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`ImageApiGetItemImageRequest`](../interfaces/generated_client.ImageApiGetItemImageRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`any`, `any`\>\>

#### Defined in

[generated-client/api/image-api.ts:10399](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L10399)

___

### getItemImage2

▸ **getItemImage2**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`any`, `any`\>\>

**`summary`** Gets the item\'s image.

**`throws`** {RequiredError}

**`memberof`** ImageApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`ImageApiGetItemImage2Request`](../interfaces/generated_client.ImageApiGetItemImage2Request.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`any`, `any`\>\>

#### Defined in

[generated-client/api/image-api.ts:10411](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L10411)

___

### getItemImageByIndex

▸ **getItemImageByIndex**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`any`, `any`\>\>

**`summary`** Gets the item\'s image.

**`throws`** {RequiredError}

**`memberof`** ImageApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`ImageApiGetItemImageByIndexRequest`](../interfaces/generated_client.ImageApiGetItemImageByIndexRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`any`, `any`\>\>

#### Defined in

[generated-client/api/image-api.ts:10423](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L10423)

___

### getItemImageInfos

▸ **getItemImageInfos**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`ImageInfo`](../interfaces/generated_client.ImageInfo.md)[], `any`\>\>

**`summary`** Get item image infos.

**`throws`** {RequiredError}

**`memberof`** ImageApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`ImageApiGetItemImageInfosRequest`](../interfaces/generated_client.ImageApiGetItemImageInfosRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`ImageInfo`](../interfaces/generated_client.ImageInfo.md)[], `any`\>\>

#### Defined in

[generated-client/api/image-api.ts:10435](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L10435)

___

### getMusicGenreImage

▸ **getMusicGenreImage**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`any`, `any`\>\>

**`summary`** Get music genre image by name.

**`throws`** {RequiredError}

**`memberof`** ImageApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`ImageApiGetMusicGenreImageRequest`](../interfaces/generated_client.ImageApiGetMusicGenreImageRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`any`, `any`\>\>

#### Defined in

[generated-client/api/image-api.ts:10447](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L10447)

___

### getMusicGenreImageByIndex

▸ **getMusicGenreImageByIndex**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`any`, `any`\>\>

**`summary`** Get music genre image by name.

**`throws`** {RequiredError}

**`memberof`** ImageApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`ImageApiGetMusicGenreImageByIndexRequest`](../interfaces/generated_client.ImageApiGetMusicGenreImageByIndexRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`any`, `any`\>\>

#### Defined in

[generated-client/api/image-api.ts:10459](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L10459)

___

### getPersonImage

▸ **getPersonImage**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`any`, `any`\>\>

**`summary`** Get person image by name.

**`throws`** {RequiredError}

**`memberof`** ImageApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`ImageApiGetPersonImageRequest`](../interfaces/generated_client.ImageApiGetPersonImageRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`any`, `any`\>\>

#### Defined in

[generated-client/api/image-api.ts:10471](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L10471)

___

### getPersonImageByIndex

▸ **getPersonImageByIndex**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`any`, `any`\>\>

**`summary`** Get person image by name.

**`throws`** {RequiredError}

**`memberof`** ImageApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`ImageApiGetPersonImageByIndexRequest`](../interfaces/generated_client.ImageApiGetPersonImageByIndexRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`any`, `any`\>\>

#### Defined in

[generated-client/api/image-api.ts:10483](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L10483)

___

### getSplashscreen

▸ **getSplashscreen**(`requestParameters?`, `options?`): `Promise`<`AxiosResponse`<`any`, `any`\>\>

**`summary`** Generates or gets the splashscreen.

**`throws`** {RequiredError}

**`memberof`** ImageApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`ImageApiGetSplashscreenRequest`](../interfaces/generated_client.ImageApiGetSplashscreenRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`any`, `any`\>\>

#### Defined in

[generated-client/api/image-api.ts:10495](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L10495)

___

### getStudioImage

▸ **getStudioImage**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`any`, `any`\>\>

**`summary`** Get studio image by name.

**`throws`** {RequiredError}

**`memberof`** ImageApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`ImageApiGetStudioImageRequest`](../interfaces/generated_client.ImageApiGetStudioImageRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`any`, `any`\>\>

#### Defined in

[generated-client/api/image-api.ts:10507](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L10507)

___

### getStudioImageByIndex

▸ **getStudioImageByIndex**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`any`, `any`\>\>

**`summary`** Get studio image by name.

**`throws`** {RequiredError}

**`memberof`** ImageApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`ImageApiGetStudioImageByIndexRequest`](../interfaces/generated_client.ImageApiGetStudioImageByIndexRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`any`, `any`\>\>

#### Defined in

[generated-client/api/image-api.ts:10519](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L10519)

___

### getUserImage

▸ **getUserImage**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`any`, `any`\>\>

**`summary`** Get user profile image.

**`throws`** {RequiredError}

**`memberof`** ImageApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`ImageApiGetUserImageRequest`](../interfaces/generated_client.ImageApiGetUserImageRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`any`, `any`\>\>

#### Defined in

[generated-client/api/image-api.ts:10531](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L10531)

___

### getUserImageByIndex

▸ **getUserImageByIndex**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`any`, `any`\>\>

**`summary`** Get user profile image.

**`throws`** {RequiredError}

**`memberof`** ImageApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`ImageApiGetUserImageByIndexRequest`](../interfaces/generated_client.ImageApiGetUserImageByIndexRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`any`, `any`\>\>

#### Defined in

[generated-client/api/image-api.ts:10543](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L10543)

___

### headArtistImage

▸ **headArtistImage**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`any`, `any`\>\>

**`summary`** Get artist image by name.

**`throws`** {RequiredError}

**`memberof`** ImageApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`ImageApiHeadArtistImageRequest`](../interfaces/generated_client.ImageApiHeadArtistImageRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`any`, `any`\>\>

#### Defined in

[generated-client/api/image-api.ts:10555](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L10555)

___

### headGenreImage

▸ **headGenreImage**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`any`, `any`\>\>

**`summary`** Get genre image by name.

**`throws`** {RequiredError}

**`memberof`** ImageApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`ImageApiHeadGenreImageRequest`](../interfaces/generated_client.ImageApiHeadGenreImageRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`any`, `any`\>\>

#### Defined in

[generated-client/api/image-api.ts:10567](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L10567)

___

### headGenreImageByIndex

▸ **headGenreImageByIndex**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`any`, `any`\>\>

**`summary`** Get genre image by name.

**`throws`** {RequiredError}

**`memberof`** ImageApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`ImageApiHeadGenreImageByIndexRequest`](../interfaces/generated_client.ImageApiHeadGenreImageByIndexRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`any`, `any`\>\>

#### Defined in

[generated-client/api/image-api.ts:10579](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L10579)

___

### headItemImage

▸ **headItemImage**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`any`, `any`\>\>

**`summary`** Gets the item\'s image.

**`throws`** {RequiredError}

**`memberof`** ImageApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`ImageApiHeadItemImageRequest`](../interfaces/generated_client.ImageApiHeadItemImageRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`any`, `any`\>\>

#### Defined in

[generated-client/api/image-api.ts:10591](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L10591)

___

### headItemImage2

▸ **headItemImage2**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`any`, `any`\>\>

**`summary`** Gets the item\'s image.

**`throws`** {RequiredError}

**`memberof`** ImageApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`ImageApiHeadItemImage2Request`](../interfaces/generated_client.ImageApiHeadItemImage2Request.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`any`, `any`\>\>

#### Defined in

[generated-client/api/image-api.ts:10603](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L10603)

___

### headItemImageByIndex

▸ **headItemImageByIndex**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`any`, `any`\>\>

**`summary`** Gets the item\'s image.

**`throws`** {RequiredError}

**`memberof`** ImageApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`ImageApiHeadItemImageByIndexRequest`](../interfaces/generated_client.ImageApiHeadItemImageByIndexRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`any`, `any`\>\>

#### Defined in

[generated-client/api/image-api.ts:10615](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L10615)

___

### headMusicGenreImage

▸ **headMusicGenreImage**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`any`, `any`\>\>

**`summary`** Get music genre image by name.

**`throws`** {RequiredError}

**`memberof`** ImageApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`ImageApiHeadMusicGenreImageRequest`](../interfaces/generated_client.ImageApiHeadMusicGenreImageRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`any`, `any`\>\>

#### Defined in

[generated-client/api/image-api.ts:10627](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L10627)

___

### headMusicGenreImageByIndex

▸ **headMusicGenreImageByIndex**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`any`, `any`\>\>

**`summary`** Get music genre image by name.

**`throws`** {RequiredError}

**`memberof`** ImageApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`ImageApiHeadMusicGenreImageByIndexRequest`](../interfaces/generated_client.ImageApiHeadMusicGenreImageByIndexRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`any`, `any`\>\>

#### Defined in

[generated-client/api/image-api.ts:10639](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L10639)

___

### headPersonImage

▸ **headPersonImage**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`any`, `any`\>\>

**`summary`** Get person image by name.

**`throws`** {RequiredError}

**`memberof`** ImageApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`ImageApiHeadPersonImageRequest`](../interfaces/generated_client.ImageApiHeadPersonImageRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`any`, `any`\>\>

#### Defined in

[generated-client/api/image-api.ts:10651](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L10651)

___

### headPersonImageByIndex

▸ **headPersonImageByIndex**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`any`, `any`\>\>

**`summary`** Get person image by name.

**`throws`** {RequiredError}

**`memberof`** ImageApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`ImageApiHeadPersonImageByIndexRequest`](../interfaces/generated_client.ImageApiHeadPersonImageByIndexRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`any`, `any`\>\>

#### Defined in

[generated-client/api/image-api.ts:10663](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L10663)

___

### headStudioImage

▸ **headStudioImage**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`any`, `any`\>\>

**`summary`** Get studio image by name.

**`throws`** {RequiredError}

**`memberof`** ImageApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`ImageApiHeadStudioImageRequest`](../interfaces/generated_client.ImageApiHeadStudioImageRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`any`, `any`\>\>

#### Defined in

[generated-client/api/image-api.ts:10675](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L10675)

___

### headStudioImageByIndex

▸ **headStudioImageByIndex**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`any`, `any`\>\>

**`summary`** Get studio image by name.

**`throws`** {RequiredError}

**`memberof`** ImageApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`ImageApiHeadStudioImageByIndexRequest`](../interfaces/generated_client.ImageApiHeadStudioImageByIndexRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`any`, `any`\>\>

#### Defined in

[generated-client/api/image-api.ts:10687](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L10687)

___

### headUserImage

▸ **headUserImage**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`any`, `any`\>\>

**`summary`** Get user profile image.

**`throws`** {RequiredError}

**`memberof`** ImageApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`ImageApiHeadUserImageRequest`](../interfaces/generated_client.ImageApiHeadUserImageRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`any`, `any`\>\>

#### Defined in

[generated-client/api/image-api.ts:10699](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L10699)

___

### headUserImageByIndex

▸ **headUserImageByIndex**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`any`, `any`\>\>

**`summary`** Get user profile image.

**`throws`** {RequiredError}

**`memberof`** ImageApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`ImageApiHeadUserImageByIndexRequest`](../interfaces/generated_client.ImageApiHeadUserImageByIndexRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`any`, `any`\>\>

#### Defined in

[generated-client/api/image-api.ts:10711](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L10711)

___

### postUserImage

▸ **postUserImage**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`, `any`\>\>

**`summary`** Sets the user image.

**`throws`** {RequiredError}

**`memberof`** ImageApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`ImageApiPostUserImageRequest`](../interfaces/generated_client.ImageApiPostUserImageRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`, `any`\>\>

#### Defined in

[generated-client/api/image-api.ts:10723](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L10723)

___

### postUserImageByIndex

▸ **postUserImageByIndex**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`, `any`\>\>

**`summary`** Sets the user image.

**`throws`** {RequiredError}

**`memberof`** ImageApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`ImageApiPostUserImageByIndexRequest`](../interfaces/generated_client.ImageApiPostUserImageByIndexRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`, `any`\>\>

#### Defined in

[generated-client/api/image-api.ts:10735](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L10735)

___

### setItemImage

▸ **setItemImage**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`, `any`\>\>

**`summary`** Set item image.

**`throws`** {RequiredError}

**`memberof`** ImageApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`ImageApiSetItemImageRequest`](../interfaces/generated_client.ImageApiSetItemImageRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`, `any`\>\>

#### Defined in

[generated-client/api/image-api.ts:10747](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L10747)

___

### setItemImageByIndex

▸ **setItemImageByIndex**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`, `any`\>\>

**`summary`** Set item image.

**`throws`** {RequiredError}

**`memberof`** ImageApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`ImageApiSetItemImageByIndexRequest`](../interfaces/generated_client.ImageApiSetItemImageByIndexRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`, `any`\>\>

#### Defined in

[generated-client/api/image-api.ts:10759](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L10759)

___

### updateItemImageIndex

▸ **updateItemImageIndex**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`, `any`\>\>

**`summary`** Updates the index for an item image.

**`throws`** {RequiredError}

**`memberof`** ImageApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`ImageApiUpdateItemImageIndexRequest`](../interfaces/generated_client.ImageApiUpdateItemImageIndexRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`, `any`\>\>

#### Defined in

[generated-client/api/image-api.ts:10771](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L10771)

___

### uploadCustomSplashscreen

▸ **uploadCustomSplashscreen**(`requestParameters?`, `options?`): `Promise`<`AxiosResponse`<`void`, `any`\>\>

**`summary`** Uploads a custom splashscreen.

**`throws`** {RequiredError}

**`memberof`** ImageApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`ImageApiUploadCustomSplashscreenRequest`](../interfaces/generated_client.ImageApiUploadCustomSplashscreenRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`, `any`\>\>

#### Defined in

[generated-client/api/image-api.ts:10783](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L10783)
