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

[jellyfin.ts:32](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/jellyfin.ts#L32)

## Properties

### clientInfo

• **clientInfo**: [`ClientInfo`](../interfaces/index.ClientInfo.md)

#### Defined in

[jellyfin.ts:28](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/jellyfin.ts#L28)

___

### deviceInfo

• **deviceInfo**: [`DeviceInfo`](../interfaces/index.DeviceInfo.md)

#### Defined in

[jellyfin.ts:29](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/jellyfin.ts#L29)

___

### discovery

• **discovery**: [`DiscoveryService`](index.discovery.DiscoveryService.md)

#### Defined in

[jellyfin.ts:30](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/jellyfin.ts#L30)

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

[jellyfin.ts:45](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/jellyfin.ts#L45)
