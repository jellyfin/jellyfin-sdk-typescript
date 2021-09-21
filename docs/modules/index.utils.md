[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [index](index.md) / utils

# Namespace: utils

[index](index.md).utils

## Table of contents

### Variables

- [HTTPS_PORT](index.utils.md#https_port)
- [HTTPS_PROTOCOL](index.utils.md#https_protocol)
- [HTTP_PORT](index.utils.md#http_port)
- [HTTP_PROTOCOL](index.utils.md#http_protocol)
- [JF_HTTPS_PORT](index.utils.md#jf_https_port)
- [JF_HTTP_PORT](index.utils.md#jf_http_port)

### Functions

- [copyUrl](index.utils.md#copyurl)
- [getAddressCandidates](index.utils.md#getaddresscandidates)
- [getAuthorizationHeader](index.utils.md#getauthorizationheader)
- [getDefaultPort](index.utils.md#getdefaultport)
- [parseUrl](index.utils.md#parseurl)

## Variables

### HTTPS\_PORT

• **HTTPS\_PORT**: ``443``

The default port for the https protocol.

#### Defined in

[utils/url.ts:19](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/utils/url.ts#L19)

___

### HTTPS\_PROTOCOL

• **HTTPS\_PROTOCOL**: ``"https:"``

The https protocol string.

#### Defined in

[utils/url.ts:13](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/utils/url.ts#L13)

___

### HTTP\_PORT

• **HTTP\_PORT**: ``80``

The default port for the http protocol.

#### Defined in

[utils/url.ts:16](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/utils/url.ts#L16)

___

### HTTP\_PROTOCOL

• **HTTP\_PROTOCOL**: ``"http:"``

The http protocol string.

#### Defined in

[utils/url.ts:10](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/utils/url.ts#L10)

___

### JF\_HTTPS\_PORT

• **JF\_HTTPS\_PORT**: ``8920``

The default https port for Jellyfin servers.

#### Defined in

[utils/address-candidates.ts:15](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/utils/address-candidates.ts#L15)

___

### JF\_HTTP\_PORT

• **JF\_HTTP\_PORT**: ``8096``

The default http port for Jellyfin servers.

#### Defined in

[utils/address-candidates.ts:12](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/utils/address-candidates.ts#L12)

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

[utils/url.ts:26](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/utils/url.ts#L26)

___

### getAddressCandidates

▸ **getAddressCandidates**(`input`): `string`[]

Gets a list of address candidates url strings
from a provided url address string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `string` | A server url address string. |

#### Returns

`string`[]

A list of potential server addresses.

#### Defined in

[utils/address-candidates.ts:23](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/utils/address-candidates.ts#L23)

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

[utils/authentication.ts:11](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/utils/authentication.ts#L11)

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

[utils/url.ts:35](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/utils/url.ts#L35)

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

[utils/url.ts:46](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/utils/url.ts#L46)
