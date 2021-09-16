[jellyfin-sdk-typescript](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / DlnaApi

# Class: DlnaApi

[generated-client](../modules/generated_client.md).DlnaApi

DlnaApi - object-oriented interface

**`export`**

## Hierarchy

- `BaseAPI`

  ↳ **`DlnaApi`**

## Table of contents

### Constructors

- [constructor](generated_client.DlnaApi.md#constructor)

### Properties

- [axios](generated_client.DlnaApi.md#axios)
- [basePath](generated_client.DlnaApi.md#basepath)
- [configuration](generated_client.DlnaApi.md#configuration)

### Methods

- [createProfile](generated_client.DlnaApi.md#createprofile)
- [deleteProfile](generated_client.DlnaApi.md#deleteprofile)
- [getDefaultProfile](generated_client.DlnaApi.md#getdefaultprofile)
- [getProfile](generated_client.DlnaApi.md#getprofile)
- [getProfileInfos](generated_client.DlnaApi.md#getprofileinfos)
- [updateProfile](generated_client.DlnaApi.md#updateprofile)

## Constructors

### constructor

• **new DlnaApi**(`configuration?`, `basePath?`, `axios?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](index.Configuration.md) |
| `basePath` | `string` |
| `axios` | `AxiosInstance` |

#### Inherited from

BaseAPI.constructor

#### Defined in

[generated-client/base.ts:52](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/base.ts#L52)

## Properties

### axios

• `Protected` **axios**: `AxiosInstance`

#### Inherited from

BaseAPI.axios

___

### basePath

• `Protected` **basePath**: `string`

#### Inherited from

BaseAPI.basePath

___

### configuration

• `Protected` **configuration**: `undefined` \| [`Configuration`](index.Configuration.md)

#### Inherited from

BaseAPI.configuration

#### Defined in

[generated-client/base.ts:50](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/base.ts#L50)

## Methods

### createProfile

▸ **createProfile**(`requestParameters?`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Creates a profile.

**`throws`** {RequiredError}

**`memberof`** DlnaApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`DlnaApiCreateProfileRequest`](../interfaces/generated_client.DlnaApiCreateProfileRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[generated-client/api/dlna-api.ts:478](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/api/dlna-api.ts#L478)

___

### deleteProfile

▸ **deleteProfile**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Deletes a profile.

**`throws`** {RequiredError}

**`memberof`** DlnaApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`DlnaApiDeleteProfileRequest`](../interfaces/generated_client.DlnaApiDeleteProfileRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[generated-client/api/dlna-api.ts:490](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/api/dlna-api.ts#L490)

___

### getDefaultProfile

▸ **getDefaultProfile**(`options?`): `Promise`<`AxiosResponse`<[`DeviceProfile`](../interfaces/generated_client.DeviceProfile.md)\>\>

**`summary`** Gets the default profile.

**`throws`** {RequiredError}

**`memberof`** DlnaApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `any` |

#### Returns

`Promise`<`AxiosResponse`<[`DeviceProfile`](../interfaces/generated_client.DeviceProfile.md)\>\>

#### Defined in

[generated-client/api/dlna-api.ts:501](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/api/dlna-api.ts#L501)

___

### getProfile

▸ **getProfile**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`DeviceProfile`](../interfaces/generated_client.DeviceProfile.md)\>\>

**`summary`** Gets a single profile.

**`throws`** {RequiredError}

**`memberof`** DlnaApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`DlnaApiGetProfileRequest`](../interfaces/generated_client.DlnaApiGetProfileRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`DeviceProfile`](../interfaces/generated_client.DeviceProfile.md)\>\>

#### Defined in

[generated-client/api/dlna-api.ts:513](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/api/dlna-api.ts#L513)

___

### getProfileInfos

▸ **getProfileInfos**(`options?`): `Promise`<`AxiosResponse`<[`DeviceProfileInfo`](../interfaces/generated_client.DeviceProfileInfo.md)[]\>\>

**`summary`** Get profile infos.

**`throws`** {RequiredError}

**`memberof`** DlnaApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `any` |

#### Returns

`Promise`<`AxiosResponse`<[`DeviceProfileInfo`](../interfaces/generated_client.DeviceProfileInfo.md)[]\>\>

#### Defined in

[generated-client/api/dlna-api.ts:524](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/api/dlna-api.ts#L524)

___

### updateProfile

▸ **updateProfile**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Updates a profile.

**`throws`** {RequiredError}

**`memberof`** DlnaApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`DlnaApiUpdateProfileRequest`](../interfaces/generated_client.DlnaApiUpdateProfileRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[generated-client/api/dlna-api.ts:536](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/api/dlna-api.ts#L536)
