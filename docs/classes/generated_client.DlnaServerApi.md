[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / DlnaServerApi

# Class: DlnaServerApi

[generated-client](../modules/generated_client.md).DlnaServerApi

DlnaServerApi - object-oriented interface

**`export`**

## Hierarchy

- `BaseAPI`

  ↳ **`DlnaServerApi`**

## Table of contents

### Constructors

- [constructor](generated_client.DlnaServerApi.md#constructor)

### Properties

- [axios](generated_client.DlnaServerApi.md#axios)
- [basePath](generated_client.DlnaServerApi.md#basepath)
- [configuration](generated_client.DlnaServerApi.md#configuration)

### Methods

- [getConnectionManager](generated_client.DlnaServerApi.md#getconnectionmanager)
- [getConnectionManager2](generated_client.DlnaServerApi.md#getconnectionmanager2)
- [getConnectionManager3](generated_client.DlnaServerApi.md#getconnectionmanager3)
- [getContentDirectory](generated_client.DlnaServerApi.md#getcontentdirectory)
- [getContentDirectory2](generated_client.DlnaServerApi.md#getcontentdirectory2)
- [getContentDirectory3](generated_client.DlnaServerApi.md#getcontentdirectory3)
- [getDescriptionXml](generated_client.DlnaServerApi.md#getdescriptionxml)
- [getDescriptionXml2](generated_client.DlnaServerApi.md#getdescriptionxml2)
- [getIcon](generated_client.DlnaServerApi.md#geticon)
- [getIconId](generated_client.DlnaServerApi.md#geticonid)
- [getMediaReceiverRegistrar](generated_client.DlnaServerApi.md#getmediareceiverregistrar)
- [getMediaReceiverRegistrar2](generated_client.DlnaServerApi.md#getmediareceiverregistrar2)
- [getMediaReceiverRegistrar3](generated_client.DlnaServerApi.md#getmediareceiverregistrar3)
- [processConnectionManagerControlRequest](generated_client.DlnaServerApi.md#processconnectionmanagercontrolrequest)
- [processContentDirectoryControlRequest](generated_client.DlnaServerApi.md#processcontentdirectorycontrolrequest)
- [processMediaReceiverRegistrarControlRequest](generated_client.DlnaServerApi.md#processmediareceiverregistrarcontrolrequest)

## Constructors

### constructor

• **new DlnaServerApi**(`configuration?`, `basePath?`, `axios?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](generated_client.Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Inherited from

BaseAPI.constructor

#### Defined in

[generated-client/base.ts:52](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/base.ts#L52)

## Properties

### axios

• `Protected` **axios**: `AxiosInstance` = `globalAxios`

#### Inherited from

BaseAPI.axios

___

### basePath

• `Protected` **basePath**: `string` = `BASE_PATH`

#### Inherited from

BaseAPI.basePath

___

### configuration

• `Protected` **configuration**: `undefined` \| [`Configuration`](generated_client.Configuration.md)

#### Inherited from

BaseAPI.configuration

#### Defined in

[generated-client/base.ts:50](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/base.ts#L50)

## Methods

### getConnectionManager

▸ **getConnectionManager**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`any`, `any`\>\>

**`summary`** Gets Dlna media receiver registrar xml.

**`throws`** {RequiredError}

**`memberof`** DlnaServerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`DlnaServerApiGetConnectionManagerRequest`](../interfaces/generated_client.DlnaServerApiGetConnectionManagerRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`any`, `any`\>\>

#### Defined in

[generated-client/api/dlna-server-api.ts:1186](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/dlna-server-api.ts#L1186)

___

### getConnectionManager2

▸ **getConnectionManager2**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`any`, `any`\>\>

**`summary`** Gets Dlna media receiver registrar xml.

**`throws`** {RequiredError}

**`memberof`** DlnaServerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`DlnaServerApiGetConnectionManager2Request`](../interfaces/generated_client.DlnaServerApiGetConnectionManager2Request.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`any`, `any`\>\>

#### Defined in

[generated-client/api/dlna-server-api.ts:1198](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/dlna-server-api.ts#L1198)

___

### getConnectionManager3

▸ **getConnectionManager3**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`any`, `any`\>\>

**`summary`** Gets Dlna media receiver registrar xml.

**`throws`** {RequiredError}

**`memberof`** DlnaServerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`DlnaServerApiGetConnectionManager3Request`](../interfaces/generated_client.DlnaServerApiGetConnectionManager3Request.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`any`, `any`\>\>

#### Defined in

[generated-client/api/dlna-server-api.ts:1210](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/dlna-server-api.ts#L1210)

___

### getContentDirectory

▸ **getContentDirectory**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`any`, `any`\>\>

**`summary`** Gets Dlna content directory xml.

**`throws`** {RequiredError}

**`memberof`** DlnaServerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`DlnaServerApiGetContentDirectoryRequest`](../interfaces/generated_client.DlnaServerApiGetContentDirectoryRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`any`, `any`\>\>

#### Defined in

[generated-client/api/dlna-server-api.ts:1222](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/dlna-server-api.ts#L1222)

___

### getContentDirectory2

▸ **getContentDirectory2**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`any`, `any`\>\>

**`summary`** Gets Dlna content directory xml.

**`throws`** {RequiredError}

**`memberof`** DlnaServerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`DlnaServerApiGetContentDirectory2Request`](../interfaces/generated_client.DlnaServerApiGetContentDirectory2Request.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`any`, `any`\>\>

#### Defined in

[generated-client/api/dlna-server-api.ts:1234](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/dlna-server-api.ts#L1234)

___

### getContentDirectory3

▸ **getContentDirectory3**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`any`, `any`\>\>

**`summary`** Gets Dlna content directory xml.

**`throws`** {RequiredError}

**`memberof`** DlnaServerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`DlnaServerApiGetContentDirectory3Request`](../interfaces/generated_client.DlnaServerApiGetContentDirectory3Request.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`any`, `any`\>\>

#### Defined in

[generated-client/api/dlna-server-api.ts:1246](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/dlna-server-api.ts#L1246)

___

### getDescriptionXml

▸ **getDescriptionXml**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`any`, `any`\>\>

**`summary`** Get Description Xml.

**`throws`** {RequiredError}

**`memberof`** DlnaServerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`DlnaServerApiGetDescriptionXmlRequest`](../interfaces/generated_client.DlnaServerApiGetDescriptionXmlRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`any`, `any`\>\>

#### Defined in

[generated-client/api/dlna-server-api.ts:1258](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/dlna-server-api.ts#L1258)

___

### getDescriptionXml2

▸ **getDescriptionXml2**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`any`, `any`\>\>

**`summary`** Get Description Xml.

**`throws`** {RequiredError}

**`memberof`** DlnaServerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`DlnaServerApiGetDescriptionXml2Request`](../interfaces/generated_client.DlnaServerApiGetDescriptionXml2Request.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`any`, `any`\>\>

#### Defined in

[generated-client/api/dlna-server-api.ts:1270](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/dlna-server-api.ts#L1270)

___

### getIcon

▸ **getIcon**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`any`, `any`\>\>

**`summary`** Gets a server icon.

**`throws`** {RequiredError}

**`memberof`** DlnaServerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`DlnaServerApiGetIconRequest`](../interfaces/generated_client.DlnaServerApiGetIconRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`any`, `any`\>\>

#### Defined in

[generated-client/api/dlna-server-api.ts:1282](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/dlna-server-api.ts#L1282)

___

### getIconId

▸ **getIconId**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`any`, `any`\>\>

**`summary`** Gets a server icon.

**`throws`** {RequiredError}

**`memberof`** DlnaServerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`DlnaServerApiGetIconIdRequest`](../interfaces/generated_client.DlnaServerApiGetIconIdRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`any`, `any`\>\>

#### Defined in

[generated-client/api/dlna-server-api.ts:1294](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/dlna-server-api.ts#L1294)

___

### getMediaReceiverRegistrar

▸ **getMediaReceiverRegistrar**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`any`, `any`\>\>

**`summary`** Gets Dlna media receiver registrar xml.

**`throws`** {RequiredError}

**`memberof`** DlnaServerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`DlnaServerApiGetMediaReceiverRegistrarRequest`](../interfaces/generated_client.DlnaServerApiGetMediaReceiverRegistrarRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`any`, `any`\>\>

#### Defined in

[generated-client/api/dlna-server-api.ts:1306](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/dlna-server-api.ts#L1306)

___

### getMediaReceiverRegistrar2

▸ **getMediaReceiverRegistrar2**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`any`, `any`\>\>

**`summary`** Gets Dlna media receiver registrar xml.

**`throws`** {RequiredError}

**`memberof`** DlnaServerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`DlnaServerApiGetMediaReceiverRegistrar2Request`](../interfaces/generated_client.DlnaServerApiGetMediaReceiverRegistrar2Request.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`any`, `any`\>\>

#### Defined in

[generated-client/api/dlna-server-api.ts:1318](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/dlna-server-api.ts#L1318)

___

### getMediaReceiverRegistrar3

▸ **getMediaReceiverRegistrar3**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`any`, `any`\>\>

**`summary`** Gets Dlna media receiver registrar xml.

**`throws`** {RequiredError}

**`memberof`** DlnaServerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`DlnaServerApiGetMediaReceiverRegistrar3Request`](../interfaces/generated_client.DlnaServerApiGetMediaReceiverRegistrar3Request.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`any`, `any`\>\>

#### Defined in

[generated-client/api/dlna-server-api.ts:1330](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/dlna-server-api.ts#L1330)

___

### processConnectionManagerControlRequest

▸ **processConnectionManagerControlRequest**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`any`, `any`\>\>

**`summary`** Process a connection manager control request.

**`throws`** {RequiredError}

**`memberof`** DlnaServerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`DlnaServerApiProcessConnectionManagerControlRequestRequest`](../interfaces/generated_client.DlnaServerApiProcessConnectionManagerControlRequestRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`any`, `any`\>\>

#### Defined in

[generated-client/api/dlna-server-api.ts:1342](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/dlna-server-api.ts#L1342)

___

### processContentDirectoryControlRequest

▸ **processContentDirectoryControlRequest**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`any`, `any`\>\>

**`summary`** Process a content directory control request.

**`throws`** {RequiredError}

**`memberof`** DlnaServerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`DlnaServerApiProcessContentDirectoryControlRequestRequest`](../interfaces/generated_client.DlnaServerApiProcessContentDirectoryControlRequestRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`any`, `any`\>\>

#### Defined in

[generated-client/api/dlna-server-api.ts:1354](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/dlna-server-api.ts#L1354)

___

### processMediaReceiverRegistrarControlRequest

▸ **processMediaReceiverRegistrarControlRequest**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`any`, `any`\>\>

**`summary`** Process a media receiver registrar control request.

**`throws`** {RequiredError}

**`memberof`** DlnaServerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`DlnaServerApiProcessMediaReceiverRegistrarControlRequestRequest`](../interfaces/generated_client.DlnaServerApiProcessMediaReceiverRegistrarControlRequestRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`any`, `any`\>\>

#### Defined in

[generated-client/api/dlna-server-api.ts:1366](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/dlna-server-api.ts#L1366)
