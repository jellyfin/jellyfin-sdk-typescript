[jellyfin-sdk-typescript](../README.md) / [Modules](../modules.md) / index

# Module: index

## Table of contents

### Classes

- [Api](../classes/index.Api.md)
- [Configuration](../classes/index.Configuration.md)
- [Jellyfin](../classes/index.Jellyfin.md)

### Interfaces

- [ClientInfo](../interfaces/index.ClientInfo.md)
- [ConfigurationParameters](../interfaces/index.ConfigurationParameters.md)
- [DeviceInfo](../interfaces/index.DeviceInfo.md)

### Variables

- [AUTHORIZATION_HEADER](index.md#authorization_header)
- [MINIMUM_VERSION](index.md#minimum_version)

### Functions

- [getAuthorizationHeader](index.md#getauthorizationheader)

## Variables

### AUTHORIZATION\_HEADER

• **AUTHORIZATION\_HEADER**: ``"X-Emby-Authorization"``

The authorization header field name.

#### Defined in

[api.ts:16](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/api.ts#L16)

___

### MINIMUM\_VERSION

• **MINIMUM\_VERSION**: ``"10.7.0"``

The minimum supported server version.

#### Defined in

[jellyfin.ts:15](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/jellyfin.ts#L15)

## Functions

### getAuthorizationHeader

▸ **getAuthorizationHeader**(`clientInfo`, `deviceInfo`, `accessToken?`): `string`

Returns a valid authorization header string.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `clientInfo` | [`ClientInfo`](../interfaces/index.ClientInfo.md) | `undefined` |
| `deviceInfo` | [`DeviceInfo`](../interfaces/generated_client.DeviceInfo.md) | `undefined` |
| `accessToken` | `string` | `''` |

#### Returns

`string`

#### Defined in

[utils.ts:12](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/utils.ts#L12)
