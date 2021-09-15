[jellyfin-sdk-typescript](../README.md) / [Modules](../modules.md) / index

# Module: index

## Table of contents

### Classes

- [Jellyfin](../classes/index.Jellyfin.md)

### Functions

- [getAuthorizationHeader](index.md#getauthorizationheader)

## Functions

### getAuthorizationHeader

▸ **getAuthorizationHeader**(`clientInfo`, `deviceInfo`, `accessToken?`): `string`

Returns a valid authorization header string.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `clientInfo` | [`ClientInfo`](../interfaces/models.ClientInfo.md) | `undefined` |
| `deviceInfo` | [`DeviceInfo`](../interfaces/generated_client.DeviceInfo.md) | `undefined` |
| `accessToken` | `string` | `''` |

#### Returns

`string`

#### Defined in

[utils.ts:12](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/utils.ts#L12)
