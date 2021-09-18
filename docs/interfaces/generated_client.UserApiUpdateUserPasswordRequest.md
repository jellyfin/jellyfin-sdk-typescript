[jellyfin-sdk-typescript](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / UserApiUpdateUserPasswordRequest

# Interface: UserApiUpdateUserPasswordRequest

[generated-client](../modules/generated_client.md).UserApiUpdateUserPasswordRequest

Request parameters for updateUserPassword operation in UserApi.

**`export`**

**`interface`** UserApiUpdateUserPasswordRequest

## Table of contents

### Properties

- [updateUserPassword](generated_client.UserApiUpdateUserPasswordRequest.md#updateuserpassword)
- [userId](generated_client.UserApiUpdateUserPasswordRequest.md#userid)

## Properties

### updateUserPassword

• `Readonly` **updateUserPassword**: [`UpdateUserPassword`](generated_client.UpdateUserPassword.md)

The M:Jellyfin.Api.Controllers.UserController.UpdateUserPassword(System.Guid,Jellyfin.Api.Models.UserDtos.UpdateUserPassword) request.

**`memberof`** UserApiUpdateUserPassword

#### Defined in

[generated-client/api/user-api.ts:1280](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e4df7f8/src/generated-client/api/user-api.ts#L1280)

___

### userId

• `Readonly` **userId**: `string`

The user id.

**`memberof`** UserApiUpdateUserPassword

#### Defined in

[generated-client/api/user-api.ts:1273](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e4df7f8/src/generated-client/api/user-api.ts#L1273)
