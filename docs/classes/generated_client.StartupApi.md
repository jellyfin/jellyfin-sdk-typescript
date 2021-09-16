[jellyfin-sdk-typescript](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / StartupApi

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

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](index.Configuration.md) |
| `basePath` | `string` |
| `axios` | `AxiosInstance` |

#### Inherited from

BaseAPI.constructor

#### Defined in

[generated-client/base.ts:52](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/base.ts#L52)

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

[generated-client/base.ts:50](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/base.ts#L50)

## Methods

### completeWizard

▸ **completeWizard**(`options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Completes the startup wizard.

**`throws`** {RequiredError}

**`memberof`** StartupApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `any` |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[generated-client/api/startup-api.ts:500](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/startup-api.ts#L500)

___

### getFirstUser

▸ **getFirstUser**(`options?`): `Promise`<`AxiosResponse`<[`StartupUserDto`](../interfaces/generated_client.StartupUserDto.md)\>\>

**`summary`** Gets the first user.

**`throws`** {RequiredError}

**`memberof`** StartupApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `any` |

#### Returns

`Promise`<`AxiosResponse`<[`StartupUserDto`](../interfaces/generated_client.StartupUserDto.md)\>\>

#### Defined in

[generated-client/api/startup-api.ts:511](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/startup-api.ts#L511)

___

### getFirstUser2

▸ **getFirstUser2**(`options?`): `Promise`<`AxiosResponse`<[`StartupUserDto`](../interfaces/generated_client.StartupUserDto.md)\>\>

**`summary`** Gets the first user.

**`throws`** {RequiredError}

**`memberof`** StartupApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `any` |

#### Returns

`Promise`<`AxiosResponse`<[`StartupUserDto`](../interfaces/generated_client.StartupUserDto.md)\>\>

#### Defined in

[generated-client/api/startup-api.ts:522](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/startup-api.ts#L522)

___

### getStartupConfiguration

▸ **getStartupConfiguration**(`options?`): `Promise`<`AxiosResponse`<[`StartupConfigurationDto`](../interfaces/generated_client.StartupConfigurationDto.md)\>\>

**`summary`** Gets the initial startup wizard configuration.

**`throws`** {RequiredError}

**`memberof`** StartupApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `any` |

#### Returns

`Promise`<`AxiosResponse`<[`StartupConfigurationDto`](../interfaces/generated_client.StartupConfigurationDto.md)\>\>

#### Defined in

[generated-client/api/startup-api.ts:533](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/startup-api.ts#L533)

___

### setRemoteAccess

▸ **setRemoteAccess**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Sets remote access and UPnP.

**`throws`** {RequiredError}

**`memberof`** StartupApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`StartupApiSetRemoteAccessRequest`](../interfaces/generated_client.StartupApiSetRemoteAccessRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[generated-client/api/startup-api.ts:545](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/startup-api.ts#L545)

___

### updateInitialConfiguration

▸ **updateInitialConfiguration**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Sets the initial startup wizard configuration.

**`throws`** {RequiredError}

**`memberof`** StartupApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`StartupApiUpdateInitialConfigurationRequest`](../interfaces/generated_client.StartupApiUpdateInitialConfigurationRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[generated-client/api/startup-api.ts:557](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/startup-api.ts#L557)

___

### updateStartupUser

▸ **updateStartupUser**(`requestParameters?`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Sets the user name and password.

**`throws`** {RequiredError}

**`memberof`** StartupApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`StartupApiUpdateStartupUserRequest`](../interfaces/generated_client.StartupApiUpdateStartupUserRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[generated-client/api/startup-api.ts:569](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/startup-api.ts#L569)
