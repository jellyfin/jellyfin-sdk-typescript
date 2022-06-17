[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / StartupApi

# Class: StartupApi

[generated-client](../modules/generated_client.md).StartupApi

StartupApi - object-oriented interface

**`export`**

## Hierarchy

- `BaseAPI`

  ↳ **`StartupApi`**

## Table of contents

### Constructors

- [constructor](generated_client.StartupApi.md#constructor)

### Properties

- [axios](generated_client.StartupApi.md#axios)
- [basePath](generated_client.StartupApi.md#basepath)
- [configuration](generated_client.StartupApi.md#configuration)

### Methods

- [completeWizard](generated_client.StartupApi.md#completewizard)
- [getFirstUser](generated_client.StartupApi.md#getfirstuser)
- [getFirstUser2](generated_client.StartupApi.md#getfirstuser2)
- [getStartupConfiguration](generated_client.StartupApi.md#getstartupconfiguration)
- [setRemoteAccess](generated_client.StartupApi.md#setremoteaccess)
- [updateInitialConfiguration](generated_client.StartupApi.md#updateinitialconfiguration)
- [updateStartupUser](generated_client.StartupApi.md#updatestartupuser)

## Constructors

### constructor

• **new StartupApi**(`configuration?`, `basePath?`, `axios?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](generated_client.Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Inherited from

BaseAPI.constructor

#### Defined in

[generated-client/base.ts:52](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/base.ts#L52)

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

[generated-client/base.ts:50](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/base.ts#L50)

## Methods

### completeWizard

▸ **completeWizard**(`options?`): `Promise`<`AxiosResponse`<`void`, `any`\>\>

**`summary`** Completes the startup wizard.

**`throws`** {RequiredError}

**`memberof`** StartupApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `any` |

#### Returns

`Promise`<`AxiosResponse`<`void`, `any`\>\>

#### Defined in

[generated-client/api/startup-api.ts:500](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/startup-api.ts#L500)

___

### getFirstUser

▸ **getFirstUser**(`options?`): `Promise`<`AxiosResponse`<[`StartupUserDto`](../interfaces/generated_client.StartupUserDto.md), `any`\>\>

**`summary`** Gets the first user.

**`throws`** {RequiredError}

**`memberof`** StartupApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `any` |

#### Returns

`Promise`<`AxiosResponse`<[`StartupUserDto`](../interfaces/generated_client.StartupUserDto.md), `any`\>\>

#### Defined in

[generated-client/api/startup-api.ts:511](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/startup-api.ts#L511)

___

### getFirstUser2

▸ **getFirstUser2**(`options?`): `Promise`<`AxiosResponse`<[`StartupUserDto`](../interfaces/generated_client.StartupUserDto.md), `any`\>\>

**`summary`** Gets the first user.

**`throws`** {RequiredError}

**`memberof`** StartupApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `any` |

#### Returns

`Promise`<`AxiosResponse`<[`StartupUserDto`](../interfaces/generated_client.StartupUserDto.md), `any`\>\>

#### Defined in

[generated-client/api/startup-api.ts:522](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/startup-api.ts#L522)

___

### getStartupConfiguration

▸ **getStartupConfiguration**(`options?`): `Promise`<`AxiosResponse`<[`StartupConfigurationDto`](../interfaces/generated_client.StartupConfigurationDto.md), `any`\>\>

**`summary`** Gets the initial startup wizard configuration.

**`throws`** {RequiredError}

**`memberof`** StartupApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `any` |

#### Returns

`Promise`<`AxiosResponse`<[`StartupConfigurationDto`](../interfaces/generated_client.StartupConfigurationDto.md), `any`\>\>

#### Defined in

[generated-client/api/startup-api.ts:533](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/startup-api.ts#L533)

___

### setRemoteAccess

▸ **setRemoteAccess**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`, `any`\>\>

**`summary`** Sets remote access and UPnP.

**`throws`** {RequiredError}

**`memberof`** StartupApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`StartupApiSetRemoteAccessRequest`](../interfaces/generated_client.StartupApiSetRemoteAccessRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`, `any`\>\>

#### Defined in

[generated-client/api/startup-api.ts:545](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/startup-api.ts#L545)

___

### updateInitialConfiguration

▸ **updateInitialConfiguration**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`, `any`\>\>

**`summary`** Sets the initial startup wizard configuration.

**`throws`** {RequiredError}

**`memberof`** StartupApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`StartupApiUpdateInitialConfigurationRequest`](../interfaces/generated_client.StartupApiUpdateInitialConfigurationRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`, `any`\>\>

#### Defined in

[generated-client/api/startup-api.ts:557](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/startup-api.ts#L557)

___

### updateStartupUser

▸ **updateStartupUser**(`requestParameters?`, `options?`): `Promise`<`AxiosResponse`<`void`, `any`\>\>

**`summary`** Sets the user name and password.

**`throws`** {RequiredError}

**`memberof`** StartupApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`StartupApiUpdateStartupUserRequest`](../interfaces/generated_client.StartupApiUpdateStartupUserRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`, `any`\>\>

#### Defined in

[generated-client/api/startup-api.ts:569](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/startup-api.ts#L569)
