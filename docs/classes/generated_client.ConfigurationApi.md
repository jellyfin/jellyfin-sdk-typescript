[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / ConfigurationApi

# Class: ConfigurationApi

[generated-client](../modules/generated_client.md).ConfigurationApi

ConfigurationApi - object-oriented interface

**`export`**

## Hierarchy

- `BaseAPI`

  ↳ **`ConfigurationApi`**

## Table of contents

### Constructors

- [constructor](generated_client.ConfigurationApi.md#constructor)

### Properties

- [axios](generated_client.ConfigurationApi.md#axios)
- [basePath](generated_client.ConfigurationApi.md#basepath)
- [configuration](generated_client.ConfigurationApi.md#configuration)

### Methods

- [getConfiguration](generated_client.ConfigurationApi.md#getconfiguration)
- [getDefaultMetadataOptions](generated_client.ConfigurationApi.md#getdefaultmetadataoptions)
- [getNamedConfiguration](generated_client.ConfigurationApi.md#getnamedconfiguration)
- [updateConfiguration](generated_client.ConfigurationApi.md#updateconfiguration)
- [updateMediaEncoderPath](generated_client.ConfigurationApi.md#updatemediaencoderpath)
- [updateNamedConfiguration](generated_client.ConfigurationApi.md#updatenamedconfiguration)

## Constructors

### constructor

• **new ConfigurationApi**(`configuration?`, `basePath?`, `axios?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](generated_client.Configuration.md) |
| `basePath` | `string` |
| `axios` | `AxiosInstance` |

#### Inherited from

BaseAPI.constructor

#### Defined in

[generated-client/base.ts:52](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/base.ts#L52)

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

[generated-client/base.ts:50](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/base.ts#L50)

## Methods

### getConfiguration

▸ **getConfiguration**(`options?`): `Promise`<`AxiosResponse`<[`ServerConfiguration`](../interfaces/generated_client.ServerConfiguration.md)\>\>

**`summary`** Gets application configuration.

**`throws`** {RequiredError}

**`memberof`** ConfigurationApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `any` |

#### Returns

`Promise`<`AxiosResponse`<[`ServerConfiguration`](../interfaces/generated_client.ServerConfiguration.md)\>\>

#### Defined in

[generated-client/api/configuration-api.ts:468](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/configuration-api.ts#L468)

___

### getDefaultMetadataOptions

▸ **getDefaultMetadataOptions**(`options?`): `Promise`<`AxiosResponse`<[`MetadataOptions`](../interfaces/generated_client.MetadataOptions.md)\>\>

**`summary`** Gets a default MetadataOptions object.

**`throws`** {RequiredError}

**`memberof`** ConfigurationApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `any` |

#### Returns

`Promise`<`AxiosResponse`<[`MetadataOptions`](../interfaces/generated_client.MetadataOptions.md)\>\>

#### Defined in

[generated-client/api/configuration-api.ts:479](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/configuration-api.ts#L479)

___

### getNamedConfiguration

▸ **getNamedConfiguration**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`any`\>\>

**`summary`** Gets a named configuration.

**`throws`** {RequiredError}

**`memberof`** ConfigurationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`ConfigurationApiGetNamedConfigurationRequest`](../interfaces/generated_client.ConfigurationApiGetNamedConfigurationRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`any`\>\>

#### Defined in

[generated-client/api/configuration-api.ts:491](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/configuration-api.ts#L491)

___

### updateConfiguration

▸ **updateConfiguration**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Updates application configuration.

**`throws`** {RequiredError}

**`memberof`** ConfigurationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`ConfigurationApiUpdateConfigurationRequest`](../interfaces/generated_client.ConfigurationApiUpdateConfigurationRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[generated-client/api/configuration-api.ts:503](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/configuration-api.ts#L503)

___

### updateMediaEncoderPath

▸ **updateMediaEncoderPath**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Updates the path to the media encoder.

**`throws`** {RequiredError}

**`memberof`** ConfigurationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`ConfigurationApiUpdateMediaEncoderPathRequest`](../interfaces/generated_client.ConfigurationApiUpdateMediaEncoderPathRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[generated-client/api/configuration-api.ts:515](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/configuration-api.ts#L515)

___

### updateNamedConfiguration

▸ **updateNamedConfiguration**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Updates named configuration.

**`throws`** {RequiredError}

**`memberof`** ConfigurationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`ConfigurationApiUpdateNamedConfigurationRequest`](../interfaces/generated_client.ConfigurationApiUpdateNamedConfigurationRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[generated-client/api/configuration-api.ts:527](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/configuration-api.ts#L527)
