[jellyfin-sdk-typescript](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / Jellyfin

# Class: Jellyfin

[index](../modules/index.md).Jellyfin

Class representing the Jellyfin SDK.

## Table of contents

### Constructors

- [constructor](index.Jellyfin.md#constructor)

### Properties

- [clientInfo](index.Jellyfin.md#clientinfo)
- [deviceInfo](index.Jellyfin.md#deviceinfo)

### Methods

- [createApi](index.Jellyfin.md#createapi)

## Constructors

### constructor

• **new Jellyfin**(`clientInfo?`, `deviceInfo?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `clientInfo` | [`ClientInfo`](../interfaces/index.ClientInfo.md) |
| `deviceInfo` | [`DeviceInfo`](../interfaces/index.DeviceInfo.md) |

#### Defined in

[jellyfin.ts:23](https://github.com/thornbill/jellyfin-sdk-typescript/blob/644c849/src/jellyfin.ts#L23)

## Properties

### clientInfo

• **clientInfo**: [`ClientInfo`](../interfaces/index.ClientInfo.md)

#### Defined in

[jellyfin.ts:20](https://github.com/thornbill/jellyfin-sdk-typescript/blob/644c849/src/jellyfin.ts#L20)

___

### deviceInfo

• **deviceInfo**: [`DeviceInfo`](../interfaces/index.DeviceInfo.md)

#### Defined in

[jellyfin.ts:21](https://github.com/thornbill/jellyfin-sdk-typescript/blob/644c849/src/jellyfin.ts#L21)

## Methods

### createApi

▸ **createApi**(`basePath`, `accessToken?`, `axiosInstance?`): [`Api`](index.Api.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `basePath` | `string` |
| `accessToken?` | `string` |
| `axiosInstance?` | `AxiosInstance` |

#### Returns

[`Api`](index.Api.md)

#### Defined in

[jellyfin.ts:32](https://github.com/thornbill/jellyfin-sdk-typescript/blob/644c849/src/jellyfin.ts#L32)
