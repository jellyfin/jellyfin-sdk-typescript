[jellyfin-sdk-typescript](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / UserApi

# Class: UserApi

[generated-client](../modules/generated_client.md).UserApi

UserApi - object-oriented interface

**`export`**

## Hierarchy

- `BaseAPI`

  ↳ **`UserApi`**

## Table of contents

### Constructors

- [constructor](generated_client.UserApi.md#constructor)

### Properties

- [axios](generated_client.UserApi.md#axios)
- [basePath](generated_client.UserApi.md#basepath)
- [configuration](generated_client.UserApi.md#configuration)

### Methods

- [authenticateUser](generated_client.UserApi.md#authenticateuser)
- [authenticateUserByName](generated_client.UserApi.md#authenticateuserbyname)
- [authenticateWithQuickConnect](generated_client.UserApi.md#authenticatewithquickconnect)
- [createUserByName](generated_client.UserApi.md#createuserbyname)
- [deleteUser](generated_client.UserApi.md#deleteuser)
- [forgotPassword](generated_client.UserApi.md#forgotpassword)
- [forgotPasswordPin](generated_client.UserApi.md#forgotpasswordpin)
- [getCurrentUser](generated_client.UserApi.md#getcurrentuser)
- [getPublicUsers](generated_client.UserApi.md#getpublicusers)
- [getUserById](generated_client.UserApi.md#getuserbyid)
- [getUsers](generated_client.UserApi.md#getusers)
- [updateUser](generated_client.UserApi.md#updateuser)
- [updateUserConfiguration](generated_client.UserApi.md#updateuserconfiguration)
- [updateUserEasyPassword](generated_client.UserApi.md#updateusereasypassword)
- [updateUserPassword](generated_client.UserApi.md#updateuserpassword)
- [updateUserPolicy](generated_client.UserApi.md#updateuserpolicy)

## Constructors

### constructor

• **new UserApi**(`configuration?`, `basePath?`, `axios?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](generated_client.Configuration.md) |
| `basePath` | `string` |
| `axios` | `AxiosInstance` |

#### Inherited from

BaseAPI.constructor

#### Defined in

[generated-client/base.ts:52](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/base.ts#L52)

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

[generated-client/base.ts:50](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/base.ts#L50)

## Methods

### authenticateUser

▸ **authenticateUser**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`AuthenticationResult`](../interfaces/generated_client.AuthenticationResult.md)\>\>

**`summary`** Authenticates a user.

**`throws`** {RequiredError}

**`memberof`** UserApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`UserApiAuthenticateUserRequest`](../interfaces/generated_client.UserApiAuthenticateUserRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`AuthenticationResult`](../interfaces/generated_client.AuthenticationResult.md)\>\>

#### Defined in

[generated-client/api/user-api.ts:1319](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/user-api.ts#L1319)

___

### authenticateUserByName

▸ **authenticateUserByName**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`AuthenticationResult`](../interfaces/generated_client.AuthenticationResult.md)\>\>

**`summary`** Authenticates a user by name.

**`throws`** {RequiredError}

**`memberof`** UserApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`UserApiAuthenticateUserByNameRequest`](../interfaces/generated_client.UserApiAuthenticateUserByNameRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`AuthenticationResult`](../interfaces/generated_client.AuthenticationResult.md)\>\>

#### Defined in

[generated-client/api/user-api.ts:1331](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/user-api.ts#L1331)

___

### authenticateWithQuickConnect

▸ **authenticateWithQuickConnect**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`AuthenticationResult`](../interfaces/generated_client.AuthenticationResult.md)\>\>

**`summary`** Authenticates a user with quick connect.

**`throws`** {RequiredError}

**`memberof`** UserApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`UserApiAuthenticateWithQuickConnectRequest`](../interfaces/generated_client.UserApiAuthenticateWithQuickConnectRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`AuthenticationResult`](../interfaces/generated_client.AuthenticationResult.md)\>\>

#### Defined in

[generated-client/api/user-api.ts:1343](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/user-api.ts#L1343)

___

### createUserByName

▸ **createUserByName**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`UserDto`](../interfaces/generated_client.UserDto.md)\>\>

**`summary`** Creates a user.

**`throws`** {RequiredError}

**`memberof`** UserApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`UserApiCreateUserByNameRequest`](../interfaces/generated_client.UserApiCreateUserByNameRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`UserDto`](../interfaces/generated_client.UserDto.md)\>\>

#### Defined in

[generated-client/api/user-api.ts:1355](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/user-api.ts#L1355)

___

### deleteUser

▸ **deleteUser**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Deletes a user.

**`throws`** {RequiredError}

**`memberof`** UserApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`UserApiDeleteUserRequest`](../interfaces/generated_client.UserApiDeleteUserRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[generated-client/api/user-api.ts:1367](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/user-api.ts#L1367)

___

### forgotPassword

▸ **forgotPassword**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`ForgotPasswordResult`](../interfaces/generated_client.ForgotPasswordResult.md)\>\>

**`summary`** Initiates the forgot password process for a local user.

**`throws`** {RequiredError}

**`memberof`** UserApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`UserApiForgotPasswordRequest`](../interfaces/generated_client.UserApiForgotPasswordRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`ForgotPasswordResult`](../interfaces/generated_client.ForgotPasswordResult.md)\>\>

#### Defined in

[generated-client/api/user-api.ts:1379](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/user-api.ts#L1379)

___

### forgotPasswordPin

▸ **forgotPasswordPin**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`PinRedeemResult`](../interfaces/generated_client.PinRedeemResult.md)\>\>

**`summary`** Redeems a forgot password pin.

**`throws`** {RequiredError}

**`memberof`** UserApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`UserApiForgotPasswordPinRequest`](../interfaces/generated_client.UserApiForgotPasswordPinRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`PinRedeemResult`](../interfaces/generated_client.PinRedeemResult.md)\>\>

#### Defined in

[generated-client/api/user-api.ts:1391](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/user-api.ts#L1391)

___

### getCurrentUser

▸ **getCurrentUser**(`options?`): `Promise`<`AxiosResponse`<[`UserDto`](../interfaces/generated_client.UserDto.md)\>\>

**`summary`** Gets the user based on auth token.

**`throws`** {RequiredError}

**`memberof`** UserApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `any` |

#### Returns

`Promise`<`AxiosResponse`<[`UserDto`](../interfaces/generated_client.UserDto.md)\>\>

#### Defined in

[generated-client/api/user-api.ts:1402](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/user-api.ts#L1402)

___

### getPublicUsers

▸ **getPublicUsers**(`options?`): `Promise`<`AxiosResponse`<[`UserDto`](../interfaces/generated_client.UserDto.md)[]\>\>

**`summary`** Gets a list of publicly visible users for display on a login screen.

**`throws`** {RequiredError}

**`memberof`** UserApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `any` |

#### Returns

`Promise`<`AxiosResponse`<[`UserDto`](../interfaces/generated_client.UserDto.md)[]\>\>

#### Defined in

[generated-client/api/user-api.ts:1413](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/user-api.ts#L1413)

___

### getUserById

▸ **getUserById**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`UserDto`](../interfaces/generated_client.UserDto.md)\>\>

**`summary`** Gets a user by Id.

**`throws`** {RequiredError}

**`memberof`** UserApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`UserApiGetUserByIdRequest`](../interfaces/generated_client.UserApiGetUserByIdRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`UserDto`](../interfaces/generated_client.UserDto.md)\>\>

#### Defined in

[generated-client/api/user-api.ts:1425](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/user-api.ts#L1425)

___

### getUsers

▸ **getUsers**(`requestParameters?`, `options?`): `Promise`<`AxiosResponse`<[`UserDto`](../interfaces/generated_client.UserDto.md)[]\>\>

**`summary`** Gets a list of users.

**`throws`** {RequiredError}

**`memberof`** UserApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`UserApiGetUsersRequest`](../interfaces/generated_client.UserApiGetUsersRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`UserDto`](../interfaces/generated_client.UserDto.md)[]\>\>

#### Defined in

[generated-client/api/user-api.ts:1437](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/user-api.ts#L1437)

___

### updateUser

▸ **updateUser**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Updates a user.

**`throws`** {RequiredError}

**`memberof`** UserApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`UserApiUpdateUserRequest`](../interfaces/generated_client.UserApiUpdateUserRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[generated-client/api/user-api.ts:1449](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/user-api.ts#L1449)

___

### updateUserConfiguration

▸ **updateUserConfiguration**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Updates a user configuration.

**`throws`** {RequiredError}

**`memberof`** UserApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`UserApiUpdateUserConfigurationRequest`](../interfaces/generated_client.UserApiUpdateUserConfigurationRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[generated-client/api/user-api.ts:1461](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/user-api.ts#L1461)

___

### updateUserEasyPassword

▸ **updateUserEasyPassword**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Updates a user\'s easy password.

**`throws`** {RequiredError}

**`memberof`** UserApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`UserApiUpdateUserEasyPasswordRequest`](../interfaces/generated_client.UserApiUpdateUserEasyPasswordRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[generated-client/api/user-api.ts:1473](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/user-api.ts#L1473)

___

### updateUserPassword

▸ **updateUserPassword**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Updates a user\'s password.

**`throws`** {RequiredError}

**`memberof`** UserApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`UserApiUpdateUserPasswordRequest`](../interfaces/generated_client.UserApiUpdateUserPasswordRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[generated-client/api/user-api.ts:1485](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/user-api.ts#L1485)

___

### updateUserPolicy

▸ **updateUserPolicy**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Updates a user policy.

**`throws`** {RequiredError}

**`memberof`** UserApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`UserApiUpdateUserPolicyRequest`](../interfaces/generated_client.UserApiUpdateUserPolicyRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[generated-client/api/user-api.ts:1497](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/user-api.ts#L1497)
