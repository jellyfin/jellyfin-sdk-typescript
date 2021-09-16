[jellyfin-sdk-typescript](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / Jellyfin

# Class: Jellyfin

[index](../modules/index.md).Jellyfin

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

[jellyfin.ts:16](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/jellyfin.ts#L16)

## Properties

### clientInfo

• **clientInfo**: [`ClientInfo`](../interfaces/index.ClientInfo.md)

#### Defined in

[jellyfin.ts:13](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/jellyfin.ts#L13)

___

### deviceInfo

• **deviceInfo**: [`DeviceInfo`](../interfaces/index.DeviceInfo.md)

#### Defined in

[jellyfin.ts:14](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/jellyfin.ts#L14)

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

[jellyfin.ts:25](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/jellyfin.ts#L25)
