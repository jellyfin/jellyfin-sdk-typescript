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

[jellyfin.ts:24](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/jellyfin.ts#L24)

## Properties

### clientInfo

• **clientInfo**: [`ClientInfo`](../interfaces/index.ClientInfo.md)

#### Defined in

[jellyfin.ts:21](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/jellyfin.ts#L21)

___

### deviceInfo

• **deviceInfo**: [`DeviceInfo`](../interfaces/index.DeviceInfo.md)

#### Defined in

[jellyfin.ts:22](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/jellyfin.ts#L22)

## Methods

### createApi

▸ **createApi**(`configuration`, `axiosInstance?`): [`Api`](index.Api.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration` | [`Configuration`](index.Configuration.md) |
| `axiosInstance` | `AxiosStatic` |

#### Returns

[`Api`](index.Api.md)

#### Defined in

[jellyfin.ts:33](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/jellyfin.ts#L33)
