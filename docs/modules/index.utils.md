[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [index](index.md) / utils

# Namespace: utils

[index](index.md).utils

## Table of contents

### Interfaces

- [DeviceProfileGeneratorOptions](../interfaces/index.utils.DeviceProfileGeneratorOptions.md)

### Variables

- [HTTPS\_PORT](index.utils.md#https_port)
- [HTTPS\_PROTOCOL](index.utils.md#https_protocol)
- [HTTP\_PORT](index.utils.md#http_port)
- [HTTP\_PROTOCOL](index.utils.md#http_protocol)
- [JF\_HTTPS\_PORT](index.utils.md#jf_https_port)
- [JF\_HTTP\_PORT](index.utils.md#jf_http_port)

### Functions

- [copyUrl](index.utils.md#copyurl)
- [getAddressCandidates](index.utils.md#getaddresscandidates)
- [getAuthorizationHeader](index.utils.md#getauthorizationheader)
- [getBrowserDeviceProfile](index.utils.md#getbrowserdeviceprofile)
- [getDefaultPort](index.utils.md#getdefaultport)
- [parseUrl](index.utils.md#parseurl)

## Variables

### HTTPS\_PORT

• **HTTPS\_PORT**: ``443``

The default port for the https protocol.

#### Defined in

[utils/url.ts:19](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/utils/url.ts#L19)

___

### HTTPS\_PROTOCOL

• **HTTPS\_PROTOCOL**: ``"https:"``

The https protocol string.

#### Defined in

[utils/url.ts:13](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/utils/url.ts#L13)

___

### HTTP\_PORT

• **HTTP\_PORT**: ``80``

The default port for the http protocol.

#### Defined in

[utils/url.ts:16](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/utils/url.ts#L16)

___

### HTTP\_PROTOCOL

• **HTTP\_PROTOCOL**: ``"http:"``

The http protocol string.

#### Defined in

[utils/url.ts:10](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/utils/url.ts#L10)

___

### JF\_HTTPS\_PORT

• **JF\_HTTPS\_PORT**: ``8920``

The default https port for Jellyfin servers.

#### Defined in

[utils/address-candidates.ts:13](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/utils/address-candidates.ts#L13)

___

### JF\_HTTP\_PORT

• **JF\_HTTP\_PORT**: ``8096``

The default http port for Jellyfin servers.

#### Defined in

[utils/address-candidates.ts:10](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/utils/address-candidates.ts#L10)

## Functions

### copyUrl

▸ **copyUrl**(`original`): `URL`

Copies a URL instance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `original` | `URL` | The original URL. |

#### Returns

`URL`

A copy of the original URL.

#### Defined in

[utils/url.ts:26](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/utils/url.ts#L26)

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

[utils/address-candidates.ts:52](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/utils/address-candidates.ts#L52)

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

[utils/authentication.ts:11](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/utils/authentication.ts#L11)

___

### getBrowserDeviceProfile

▸ `Const` **getBrowserDeviceProfile**(`options?`, `videoElement?`): [`DeviceProfile`](../interfaces/generated_client.DeviceProfile.md)

Generates a device profile based on a few options and the current browser capabilites

**`exports`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`DeviceProfileGeneratorOptions`](../interfaces/index.utils.DeviceProfileGeneratorOptions.md) | Options to pass to the different profiles generators |
| `videoElement?` | `HTMLVideoElement` | Optionnal HTML video element to use, else it'll create one |

#### Returns

[`DeviceProfile`](../interfaces/generated_client.DeviceProfile.md)

A detected device profile

#### Defined in

[utils/browser-profiles.ts:56](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/utils/browser-profiles.ts#L56)

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

[utils/url.ts:35](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/utils/url.ts#L35)

___

### parseUrl

▸ **parseUrl**(`input`): `URL`

Parses a string to a Url object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `string` | A string representing a url. |

#### Returns

`URL`

The Url object.

#### Defined in

[utils/url.ts:46](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/utils/url.ts#L46)
