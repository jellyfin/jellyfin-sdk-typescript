[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / DevicesApi

# Class: DevicesApi

[generated-client](../modules/generated_client.md).DevicesApi

DevicesApi - object-oriented interface

**`export`**

## Hierarchy

- `BaseAPI`

  ↳ **`DevicesApi`**

## Table of contents

### Constructors

- [constructor](generated_client.DevicesApi.md#constructor)

### Properties

- [axios](generated_client.DevicesApi.md#axios)
- [basePath](generated_client.DevicesApi.md#basepath)
- [configuration](generated_client.DevicesApi.md#configuration)

### Methods

- [deleteDevice](generated_client.DevicesApi.md#deletedevice)
- [getDeviceInfo](generated_client.DevicesApi.md#getdeviceinfo)
- [getDeviceOptions](generated_client.DevicesApi.md#getdeviceoptions)
- [getDevices](generated_client.DevicesApi.md#getdevices)
- [updateDeviceOptions](generated_client.DevicesApi.md#updatedeviceoptions)

## Constructors

### constructor

• **new DevicesApi**(`configuration?`, `basePath?`, `axios?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](generated_client.Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Inherited from

BaseAPI.constructor

#### Defined in

[generated-client/base.ts:52](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/base.ts#L52)

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

[generated-client/base.ts:50](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/base.ts#L50)

## Methods

### deleteDevice

▸ **deleteDevice**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`, `any`\>\>

**`summary`** Deletes a device.

**`throws`** {RequiredError}

**`memberof`** DevicesApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`DevicesApiDeleteDeviceRequest`](../interfaces/generated_client.DevicesApiDeleteDeviceRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`, `any`\>\>

#### Defined in

[generated-client/api/devices-api.ts:479](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/devices-api.ts#L479)

___

### getDeviceInfo

▸ **getDeviceInfo**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`DeviceInfo`](../interfaces/generated_client.DeviceInfo.md), `any`\>\>

**`summary`** Get info for a device.

**`throws`** {RequiredError}

**`memberof`** DevicesApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`DevicesApiGetDeviceInfoRequest`](../interfaces/generated_client.DevicesApiGetDeviceInfoRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`DeviceInfo`](../interfaces/generated_client.DeviceInfo.md), `any`\>\>

#### Defined in

[generated-client/api/devices-api.ts:491](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/devices-api.ts#L491)

___

### getDeviceOptions

▸ **getDeviceOptions**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`DeviceOptions`](../interfaces/generated_client.DeviceOptions.md), `any`\>\>

**`summary`** Get options for a device.

**`throws`** {RequiredError}

**`memberof`** DevicesApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`DevicesApiGetDeviceOptionsRequest`](../interfaces/generated_client.DevicesApiGetDeviceOptionsRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`DeviceOptions`](../interfaces/generated_client.DeviceOptions.md), `any`\>\>

#### Defined in

[generated-client/api/devices-api.ts:503](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/devices-api.ts#L503)

___

### getDevices

▸ **getDevices**(`requestParameters?`, `options?`): `Promise`<`AxiosResponse`<[`DeviceInfoQueryResult`](../interfaces/generated_client.DeviceInfoQueryResult.md), `any`\>\>

**`summary`** Get Devices.

**`throws`** {RequiredError}

**`memberof`** DevicesApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`DevicesApiGetDevicesRequest`](../interfaces/generated_client.DevicesApiGetDevicesRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`DeviceInfoQueryResult`](../interfaces/generated_client.DeviceInfoQueryResult.md), `any`\>\>

#### Defined in

[generated-client/api/devices-api.ts:515](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/devices-api.ts#L515)

___

### updateDeviceOptions

▸ **updateDeviceOptions**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`, `any`\>\>

**`summary`** Update device options.

**`throws`** {RequiredError}

**`memberof`** DevicesApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`DevicesApiUpdateDeviceOptionsRequest`](../interfaces/generated_client.DevicesApiUpdateDeviceOptionsRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`, `any`\>\>

#### Defined in

[generated-client/api/devices-api.ts:527](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/devices-api.ts#L527)
