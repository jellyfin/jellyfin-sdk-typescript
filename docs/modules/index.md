[jellyfin-sdk-typescript](../README.md) / [Modules](../modules.md) / index

# Module: index

## Table of contents

### Classes

- [Api](../classes/index.Api.md)
- [Jellyfin](../classes/index.Jellyfin.md)

### Interfaces

- [ClientInfo](../interfaces/index.ClientInfo.md)
- [DeviceInfo](../interfaces/index.DeviceInfo.md)
- [JellyfinParameters](../interfaces/index.JellyfinParameters.md)

### Variables

- [AUTHORIZATION_HEADER](index.md#authorization_header)
- [HTTPS_PORT](index.md#https_port)
- [HTTPS_PROTOCOL](index.md#https_protocol)
- [HTTP_PORT](index.md#http_port)
- [HTTP_PROTOCOL](index.md#http_protocol)
- [JF_HTTPS_PORT](index.md#jf_https_port)
- [JF_HTTP_PORT](index.md#jf_http_port)
- [MINIMUM_VERSION](index.md#minimum_version)

### Functions

- [copyUrl](index.md#copyurl)
- [getAddressCandidates](index.md#getaddresscandidates)
- [getAuthorizationHeader](index.md#getauthorizationheader)
- [getDefaultPort](index.md#getdefaultport)
- [parseUrl](index.md#parseurl)

## Variables

### AUTHORIZATION\_HEADER

• **AUTHORIZATION\_HEADER**: ``"X-Emby-Authorization"``

The authorization header field name.

#### Defined in

[api.ts:16](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e4df7f8/src/api.ts#L16)

___

### HTTPS\_PORT

• **HTTPS\_PORT**: ``443``

#### Defined in

[utils/url.ts:14](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e4df7f8/src/utils/url.ts#L14)

___

### HTTPS\_PROTOCOL

• **HTTPS\_PROTOCOL**: ``"https:"``

#### Defined in

[utils/url.ts:10](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e4df7f8/src/utils/url.ts#L10)

___

### HTTP\_PORT

• **HTTP\_PORT**: ``80``

#### Defined in

[utils/url.ts:12](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e4df7f8/src/utils/url.ts#L12)

___

### HTTP\_PROTOCOL

• **HTTP\_PROTOCOL**: ``"http:"``

#### Defined in

[utils/url.ts:8](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e4df7f8/src/utils/url.ts#L8)

___

### JF\_HTTPS\_PORT

• **JF\_HTTPS\_PORT**: ``8920``

#### Defined in

[utils/address-candidates.ts:13](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e4df7f8/src/utils/address-candidates.ts#L13)

___

### JF\_HTTP\_PORT

• **JF\_HTTP\_PORT**: ``8096``

#### Defined in

[utils/address-candidates.ts:11](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e4df7f8/src/utils/address-candidates.ts#L11)

___

### MINIMUM\_VERSION

• **MINIMUM\_VERSION**: ``"10.7.0"``

The minimum supported server version.

#### Defined in

[jellyfin.ts:19](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e4df7f8/src/jellyfin.ts#L19)

## Functions

### copyUrl

▸ **copyUrl**(`original`): `Url`

Copies a Url instance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `original` | `URLParse` | The original Url. |

#### Returns

`Url`

A copy of the original Url.

#### Defined in

[utils/url.ts:21](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e4df7f8/src/utils/url.ts#L21)

___

### getAddressCandidates

▸ **getAddressCandidates**(`input`): `Url`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `string` |

#### Returns

`Url`[]

#### Defined in

[utils/address-candidates.ts:15](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e4df7f8/src/utils/address-candidates.ts#L15)

___

### getAuthorizationHeader

▸ **getAuthorizationHeader**(`clientInfo`, `deviceInfo`, `accessToken?`): `string`

Returns a valid authorization header string.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `clientInfo` | [`ClientInfo`](../interfaces/index.ClientInfo.md) | `undefined` |
| `deviceInfo` | [`DeviceInfo`](../interfaces/index.DeviceInfo.md) | `undefined` |
| `accessToken` | `string` | `''` |

#### Returns

`string`

#### Defined in

[utils/authentication.ts:11](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e4df7f8/src/utils/authentication.ts#L11)

___

### getDefaultPort

▸ **getDefaultPort**(`protocol`): `number`

Returns the default port number for a given protocol.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `protocol` | `string` | The protocol string. |

#### Returns

`number`

The default port number of the protocol.

#### Defined in

[utils/url.ts:30](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e4df7f8/src/utils/url.ts#L30)

___

### parseUrl

▸ **parseUrl**(`input`): `Url`

Parses a string to a Url object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `string` | A string representing a url. |

#### Returns

`Url`

The Url object.

#### Defined in

[utils/url.ts:41](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e4df7f8/src/utils/url.ts#L41)
