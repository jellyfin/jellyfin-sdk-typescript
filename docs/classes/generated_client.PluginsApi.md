[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / PluginsApi

# Class: PluginsApi

[generated-client](../modules/generated_client.md).PluginsApi

PluginsApi - object-oriented interface

**`export`**

## Hierarchy

- `BaseAPI`

  ↳ **`PluginsApi`**

## Table of contents

### Constructors

- [constructor](generated_client.PluginsApi.md#constructor)

### Properties

- [axios](generated_client.PluginsApi.md#axios)
- [basePath](generated_client.PluginsApi.md#basepath)
- [configuration](generated_client.PluginsApi.md#configuration)

### Methods

- [disablePlugin](generated_client.PluginsApi.md#disableplugin)
- [enablePlugin](generated_client.PluginsApi.md#enableplugin)
- [getPluginConfiguration](generated_client.PluginsApi.md#getpluginconfiguration)
- [getPluginImage](generated_client.PluginsApi.md#getpluginimage)
- [getPluginManifest](generated_client.PluginsApi.md#getpluginmanifest)
- [getPlugins](generated_client.PluginsApi.md#getplugins)
- [uninstallPlugin](generated_client.PluginsApi.md#uninstallplugin)
- [uninstallPluginByVersion](generated_client.PluginsApi.md#uninstallpluginbyversion)
- [updatePluginConfiguration](generated_client.PluginsApi.md#updatepluginconfiguration)
- [updatePluginSecurityInfo](generated_client.PluginsApi.md#updatepluginsecurityinfo)

## Constructors

### constructor

• **new PluginsApi**(`configuration?`, `basePath?`, `axios?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](generated_client.Configuration.md) |
| `basePath` | `string` |
| `axios` | `AxiosInstance` |

#### Inherited from

BaseAPI.constructor

#### Defined in

[generated-client/base.ts:52](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/base.ts#L52)

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

[generated-client/base.ts:50](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/base.ts#L50)

## Methods

### disablePlugin

▸ **disablePlugin**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Disable a plugin.

**`throws`** {RequiredError}

**`memberof`** PluginsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`PluginsApiDisablePluginRequest`](../interfaces/generated_client.PluginsApiDisablePluginRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[generated-client/api/plugins-api.ts:835](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/plugins-api.ts#L835)

___

### enablePlugin

▸ **enablePlugin**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Enables a disabled plugin.

**`throws`** {RequiredError}

**`memberof`** PluginsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`PluginsApiEnablePluginRequest`](../interfaces/generated_client.PluginsApiEnablePluginRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[generated-client/api/plugins-api.ts:847](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/plugins-api.ts#L847)

___

### getPluginConfiguration

▸ **getPluginConfiguration**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`object`\>\>

**`summary`** Gets plugin configuration.

**`throws`** {RequiredError}

**`memberof`** PluginsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`PluginsApiGetPluginConfigurationRequest`](../interfaces/generated_client.PluginsApiGetPluginConfigurationRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`object`\>\>

#### Defined in

[generated-client/api/plugins-api.ts:859](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/plugins-api.ts#L859)

___

### getPluginImage

▸ **getPluginImage**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`any`\>\>

**`summary`** Gets a plugin\'s image.

**`throws`** {RequiredError}

**`memberof`** PluginsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`PluginsApiGetPluginImageRequest`](../interfaces/generated_client.PluginsApiGetPluginImageRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`any`\>\>

#### Defined in

[generated-client/api/plugins-api.ts:871](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/plugins-api.ts#L871)

___

### getPluginManifest

▸ **getPluginManifest**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Gets a plugin\'s manifest.

**`throws`** {RequiredError}

**`memberof`** PluginsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`PluginsApiGetPluginManifestRequest`](../interfaces/generated_client.PluginsApiGetPluginManifestRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[generated-client/api/plugins-api.ts:883](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/plugins-api.ts#L883)

___

### getPlugins

▸ **getPlugins**(`options?`): `Promise`<`AxiosResponse`<[`PluginInfo`](../interfaces/generated_client.PluginInfo.md)[]\>\>

**`summary`** Gets a list of currently installed plugins.

**`throws`** {RequiredError}

**`memberof`** PluginsApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `any` |

#### Returns

`Promise`<`AxiosResponse`<[`PluginInfo`](../interfaces/generated_client.PluginInfo.md)[]\>\>

#### Defined in

[generated-client/api/plugins-api.ts:894](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/plugins-api.ts#L894)

___

### uninstallPlugin

▸ **uninstallPlugin**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Uninstalls a plugin.

**`deprecated`**

**`throws`** {RequiredError}

**`memberof`** PluginsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`PluginsApiUninstallPluginRequest`](../interfaces/generated_client.PluginsApiUninstallPluginRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[generated-client/api/plugins-api.ts:907](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/plugins-api.ts#L907)

___

### uninstallPluginByVersion

▸ **uninstallPluginByVersion**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Uninstalls a plugin by version.

**`throws`** {RequiredError}

**`memberof`** PluginsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`PluginsApiUninstallPluginByVersionRequest`](../interfaces/generated_client.PluginsApiUninstallPluginByVersionRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[generated-client/api/plugins-api.ts:919](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/plugins-api.ts#L919)

___

### updatePluginConfiguration

▸ **updatePluginConfiguration**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

Accepts plugin configuration as JSON body.

**`summary`** Updates plugin configuration.

**`throws`** {RequiredError}

**`memberof`** PluginsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`PluginsApiUpdatePluginConfigurationRequest`](../interfaces/generated_client.PluginsApiUpdatePluginConfigurationRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[generated-client/api/plugins-api.ts:931](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/plugins-api.ts#L931)

___

### updatePluginSecurityInfo

▸ **updatePluginSecurityInfo**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Updates plugin security info.

**`deprecated`**

**`throws`** {RequiredError}

**`memberof`** PluginsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`PluginsApiUpdatePluginSecurityInfoRequest`](../interfaces/generated_client.PluginsApiUpdatePluginSecurityInfoRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[generated-client/api/plugins-api.ts:944](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/plugins-api.ts#L944)
