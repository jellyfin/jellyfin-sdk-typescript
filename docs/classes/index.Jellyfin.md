[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / Jellyfin

# Class: Jellyfin

[index](../modules/index.md).Jellyfin

Class representing the Jellyfin SDK.

## Table of contents

### Constructors

- [constructor](index.Jellyfin.md#constructor)

### Properties

- [clientInfo](index.Jellyfin.md#clientinfo)
- [deviceInfo](index.Jellyfin.md#deviceinfo)
- [discovery](index.Jellyfin.md#discovery)

### Methods

- [createApi](index.Jellyfin.md#createapi)

## Constructors

### constructor

• **new Jellyfin**(`parameters`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parameters` | [`JellyfinParameters`](../interfaces/index.JellyfinParameters.md) |

#### Defined in

[jellyfin.ts:27](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/jellyfin.ts#L27)

## Properties

### clientInfo

• **clientInfo**: [`ClientInfo`](../interfaces/index.ClientInfo.md)

#### Defined in

[jellyfin.ts:23](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/jellyfin.ts#L23)

___

### deviceInfo

• **deviceInfo**: [`DeviceInfo`](../interfaces/index.DeviceInfo.md)

#### Defined in

[jellyfin.ts:24](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/jellyfin.ts#L24)

___

### discovery

• **discovery**: [`Discovery`](index.Discovery.md)

#### Defined in

[jellyfin.ts:25](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/jellyfin.ts#L25)

## Methods

### createApi

▸ **createApi**(`basePath`, `accessToken?`, `axiosInstance?`): [`Api`](index.Api.md)

Creates an Api instance for a given server path.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `basePath` | `string` | A base path of a server. |
| `accessToken?` | `string` | An (optional) access token to use for authentication. |
| `axiosInstance?` | `AxiosInstance` | An (optional) Axios instance for the Api to use. |

#### Returns

[`Api`](index.Api.md)

An Api instance.

#### Defined in

[jellyfin.ts:40](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/jellyfin.ts#L40)
