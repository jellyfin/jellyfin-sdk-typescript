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

### Functions

- [getAuthorizationHeader](index.md#getauthorizationheader)

## Variables

### AUTHORIZATION\_HEADER

• **AUTHORIZATION\_HEADER**: ``"X-Emby-Authorization"``

#### Defined in

[api.ts:13](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/api.ts#L13)

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

[utils.ts:12](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/utils.ts#L12)
