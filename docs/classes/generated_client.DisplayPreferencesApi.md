[jellyfin-sdk-typescript](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / DisplayPreferencesApi

# Class: DisplayPreferencesApi

[generated-client](../modules/generated_client.md).DisplayPreferencesApi

DisplayPreferencesApi - object-oriented interface

**`export`**

## Hierarchy

- `BaseAPI`

  ↳ **`DisplayPreferencesApi`**

## Table of contents

### Constructors

- [constructor](generated_client.DisplayPreferencesApi.md#constructor)

### Properties

- [axios](generated_client.DisplayPreferencesApi.md#axios)
- [basePath](generated_client.DisplayPreferencesApi.md#basepath)
- [configuration](generated_client.DisplayPreferencesApi.md#configuration)

### Methods

- [getDisplayPreferences](generated_client.DisplayPreferencesApi.md#getdisplaypreferences)
- [updateDisplayPreferences](generated_client.DisplayPreferencesApi.md#updatedisplaypreferences)

## Constructors

### constructor

• **new DisplayPreferencesApi**(`configuration?`, `basePath?`, `axios?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](generated_client.Configuration.md) |
| `basePath` | `string` |
| `axios` | `AxiosInstance` |

#### Inherited from

BaseAPI.constructor

#### Defined in

[generated-client/base.ts:52](https://github.com/thornbill/jellyfin-sdk-typescript/blob/644c849/src/generated-client/base.ts#L52)

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

• `Protected` **configuration**: `undefined` \| [`Configuration`](generated_client.Configuration.md)

#### Inherited from

BaseAPI.configuration

#### Defined in

[generated-client/base.ts:50](https://github.com/thornbill/jellyfin-sdk-typescript/blob/644c849/src/generated-client/base.ts#L50)

## Methods

### getDisplayPreferences

▸ **getDisplayPreferences**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`DisplayPreferencesDto`](../interfaces/generated_client.DisplayPreferencesDto.md)\>\>

**`summary`** Get Display Preferences.

**`throws`** {RequiredError}

**`memberof`** DisplayPreferencesApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`DisplayPreferencesApiGetDisplayPreferencesRequest`](../interfaces/generated_client.DisplayPreferencesApiGetDisplayPreferencesRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`DisplayPreferencesDto`](../interfaces/generated_client.DisplayPreferencesDto.md)\>\>

#### Defined in

[generated-client/api/display-preferences-api.ts:292](https://github.com/thornbill/jellyfin-sdk-typescript/blob/644c849/src/generated-client/api/display-preferences-api.ts#L292)

___

### updateDisplayPreferences

▸ **updateDisplayPreferences**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Update Display Preferences.

**`throws`** {RequiredError}

**`memberof`** DisplayPreferencesApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`DisplayPreferencesApiUpdateDisplayPreferencesRequest`](../interfaces/generated_client.DisplayPreferencesApiUpdateDisplayPreferencesRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[generated-client/api/display-preferences-api.ts:304](https://github.com/thornbill/jellyfin-sdk-typescript/blob/644c849/src/generated-client/api/display-preferences-api.ts#L304)
