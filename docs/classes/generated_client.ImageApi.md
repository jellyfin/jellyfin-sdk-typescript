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

- [deleteCustomSplashscreen](generated_client.ImageApi.md#deletecustomsplashscreen)
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

[generated-client/base.ts:52](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/base.ts#L52)

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

[generated-client/base.ts:50](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/base.ts#L50)

## Methods

### deleteCustomSplashscreen

▸ **deleteCustomSplashscreen**(`options?`): `Promise`<`AxiosResponse`<`void`, `any`\>\>

**`summary`** Delete a custom splashscreen.

**`throws`** {RequiredError}

**`memberof`** ImageApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `any` |

#### Returns

`Promise`<`AxiosResponse`<`void`, `any`\>\>

#### Defined in

[generated-client/api/image-api.ts:10366](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L10366)

___

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

[generated-client/api/image-api.ts:10378](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L10378)

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

[generated-client/api/image-api.ts:10390](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L10390)

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

[generated-client/api/image-api.ts:10402](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L10402)

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

[generated-client/api/image-api.ts:10414](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L10414)

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

[generated-client/api/image-api.ts:10426](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L10426)

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

[generated-client/api/image-api.ts:10438](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L10438)

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

[generated-client/api/image-api.ts:10450](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L10450)

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

[generated-client/api/image-api.ts:10462](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L10462)

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

[generated-client/api/image-api.ts:10474](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L10474)

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

[generated-client/api/image-api.ts:10486](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L10486)

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

[generated-client/api/image-api.ts:10498](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L10498)

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

[generated-client/api/image-api.ts:10510](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L10510)

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

[generated-client/api/image-api.ts:10522](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L10522)

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

[generated-client/api/image-api.ts:10534](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L10534)

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

[generated-client/api/image-api.ts:10546](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L10546)

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

[generated-client/api/image-api.ts:10558](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L10558)

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

[generated-client/api/image-api.ts:10570](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L10570)

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

[generated-client/api/image-api.ts:10582](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L10582)

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

[generated-client/api/image-api.ts:10594](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L10594)

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

[generated-client/api/image-api.ts:10606](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L10606)

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

[generated-client/api/image-api.ts:10618](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L10618)

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

[generated-client/api/image-api.ts:10630](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L10630)

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

[generated-client/api/image-api.ts:10642](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L10642)

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

[generated-client/api/image-api.ts:10654](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L10654)

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

[generated-client/api/image-api.ts:10666](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L10666)

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

[generated-client/api/image-api.ts:10678](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L10678)

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

[generated-client/api/image-api.ts:10690](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L10690)

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

[generated-client/api/image-api.ts:10702](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L10702)

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

[generated-client/api/image-api.ts:10714](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L10714)

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

[generated-client/api/image-api.ts:10726](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L10726)

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

[generated-client/api/image-api.ts:10738](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L10738)

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

[generated-client/api/image-api.ts:10750](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L10750)

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

[generated-client/api/image-api.ts:10762](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L10762)

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

[generated-client/api/image-api.ts:10774](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L10774)

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

[generated-client/api/image-api.ts:10786](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L10786)

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

[generated-client/api/image-api.ts:10798](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L10798)

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

[generated-client/api/image-api.ts:10810](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L10810)

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

[generated-client/api/image-api.ts:10822](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L10822)

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

[generated-client/api/image-api.ts:10834](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L10834)

___

### uploadCustomSplashscreen

▸ **uploadCustomSplashscreen**(`requestParameters?`, `options?`): `Promise`<`AxiosResponse`<`void`, `any`\>\>

**`summary`** Uploads a custom splashscreen.  The body is expected to the image contents base64 encoded.

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

[generated-client/api/image-api.ts:10846](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L10846)
