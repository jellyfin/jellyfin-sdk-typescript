[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / Api

# Class: Api

[index](../modules/index.md).Api

Class representing the Jellyfin API.

## Table of contents

### Constructors

- [constructor](index.Api.md#constructor)

### Properties

- [accessToken](index.Api.md#accesstoken)
- [axiosInstance](index.Api.md#axiosinstance)
- [basePath](index.Api.md#basepath)
- [clientInfo](index.Api.md#clientinfo)
- [deviceInfo](index.Api.md#deviceinfo)

### Accessors

- [authorizationHeader](index.Api.md#authorizationheader)
- [configuration](index.Api.md#configuration)

### Methods

- [authenticateUserByName](index.Api.md#authenticateuserbyname)
- [getItemImageUrl](index.Api.md#getitemimageurl)
- [logout](index.Api.md#logout)

## Constructors

### constructor

• **new Api**(`basePath`, `clientInfo`, `deviceInfo`, `accessToken?`, `axiosInstance?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `basePath` | `string` | `undefined` |
| `clientInfo` | [`ClientInfo`](../interfaces/index.ClientInfo.md) | `undefined` |
| `deviceInfo` | [`DeviceInfo`](../interfaces/index.DeviceInfo.md) | `undefined` |
| `accessToken` | `string` | `''` |
| `axiosInstance` | `AxiosInstance` | `globalInstance` |

#### Defined in

[api.ts:33](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/api.ts#L33)

## Properties

### accessToken

• **accessToken**: `string`

#### Defined in

[api.ts:30](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/api.ts#L30)

___

### axiosInstance

• **axiosInstance**: `AxiosInstance`

#### Defined in

[api.ts:31](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/api.ts#L31)

___

### basePath

• **basePath**: `string`

#### Defined in

[api.ts:27](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/api.ts#L27)

___

### clientInfo

• **clientInfo**: [`ClientInfo`](../interfaces/index.ClientInfo.md)

#### Defined in

[api.ts:28](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/api.ts#L28)

___

### deviceInfo

• **deviceInfo**: [`DeviceInfo`](../interfaces/index.DeviceInfo.md)

#### Defined in

[api.ts:29](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/api.ts#L29)

## Accessors

### authorizationHeader

• `get` **authorizationHeader**(): `string`

#### Returns

`string`

#### Defined in

[api.ts:100](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/api.ts#L100)

___

### configuration

• `get` **configuration**(): [`Configuration`](generated_client.Configuration.md)

#### Returns

[`Configuration`](generated_client.Configuration.md)

#### Defined in

[api.ts:47](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/api.ts#L47)

## Methods

### authenticateUserByName

▸ **authenticateUserByName**(`username`, `password?`): `Promise`<`AxiosResponse`<[`AuthenticationResult`](../interfaces/generated_client.AuthenticationResult.md), `any`\>\>

Convenience method for authenticating a user by name and updating the internal state.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `username` | `string` | The username. |
| `password?` | `string` | The user password if required. |

#### Returns

`Promise`<`AxiosResponse`<[`AuthenticationResult`](../interfaces/generated_client.AuthenticationResult.md), `any`\>\>

#### Defined in

[api.ts:59](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/api.ts#L59)

___

### getItemImageUrl

▸ **getItemImageUrl**(`itemId`, `imageType?`, `params?`): `undefined` \| `string`

Get an item image URL.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `itemId` | `string` | `undefined` | The Item ID. |
| `imageType` | [`ImageType`](../enums/generated_client.ImageType.md) | `ImageType.Primary` | An optional Image Type (Primary by default). |
| `params` | `ImageRequestParameters` | `{}` | Additional request parameters. |

#### Returns

`undefined` \| `string`

The image URL.

#### Defined in

[api.ts:89](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/api.ts#L89)

___

### logout

▸ **logout**(): `Promise`<`AxiosResponse`<`never`, `any`\> \| `AxiosResponse`<`void`, `any`\>\>

Convenience method for logging out and updating the internal state.

#### Returns

`Promise`<`AxiosResponse`<`never`, `any`\> \| `AxiosResponse`<`void`, `any`\>\>

#### Defined in

[api.ts:75](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/api.ts#L75)
