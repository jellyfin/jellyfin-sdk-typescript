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
| `clientInfo` | [`ClientInfo`](../interfaces/models.ClientInfo.md) |
| `deviceInfo` | [`DeviceInfo`](../interfaces/models.DeviceInfo.md) |

#### Defined in

[index.ts:19](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/index.ts#L19)

## Properties

### clientInfo

• **clientInfo**: [`ClientInfo`](../interfaces/models.ClientInfo.md)

#### Defined in

[index.ts:16](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/index.ts#L16)

___

### deviceInfo

• **deviceInfo**: [`DeviceInfo`](../interfaces/models.DeviceInfo.md)

#### Defined in

[index.ts:17](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/index.ts#L17)

## Methods

### createApi

▸ **createApi**(`configuration`, `axiosInstance?`): `Api`

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration` | [`Configuration`](generated_client.Configuration.md) |
| `axiosInstance` | `AxiosStatic` |

#### Returns

`Api`

#### Defined in

[index.ts:28](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/index.ts#L28)
