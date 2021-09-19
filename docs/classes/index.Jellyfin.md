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

[jellyfin.ts:28](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/jellyfin.ts#L28)

## Properties

### clientInfo

• **clientInfo**: [`ClientInfo`](../interfaces/index.ClientInfo.md)

#### Defined in

[jellyfin.ts:25](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/jellyfin.ts#L25)

___

### deviceInfo

• **deviceInfo**: [`DeviceInfo`](../interfaces/index.DeviceInfo.md)

#### Defined in

[jellyfin.ts:26](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/jellyfin.ts#L26)

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

[jellyfin.ts:33](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/jellyfin.ts#L33)
