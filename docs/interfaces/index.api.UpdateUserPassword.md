[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / [api](../modules/index.api.md) / UpdateUserPassword

# Interface: UpdateUserPassword

[index](../modules/index.md).[api](../modules/index.api.md).UpdateUserPassword

The update user password request body.

**`export`**

**`interface`** UpdateUserPassword

## Table of contents

### Properties

- [CurrentPassword](index.api.UpdateUserPassword.md#currentpassword)
- [CurrentPw](index.api.UpdateUserPassword.md#currentpw)
- [NewPw](index.api.UpdateUserPassword.md#newpw)
- [ResetPassword](index.api.UpdateUserPassword.md#resetpassword)

## Properties

### CurrentPassword

• `Optional` **CurrentPassword**: ``null`` \| `string`

Gets or sets the current sha1-hashed password.

**`memberof`** UpdateUserPassword

#### Defined in

[generated-client/models/update-user-password.ts:28](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/update-user-password.ts#L28)

___

### CurrentPw

• `Optional` **CurrentPw**: ``null`` \| `string`

Gets or sets the current plain text password.

**`memberof`** UpdateUserPassword

#### Defined in

[generated-client/models/update-user-password.ts:34](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/update-user-password.ts#L34)

___

### NewPw

• `Optional` **NewPw**: ``null`` \| `string`

Gets or sets the new plain text password.

**`memberof`** UpdateUserPassword

#### Defined in

[generated-client/models/update-user-password.ts:40](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/update-user-password.ts#L40)

___

### ResetPassword

• `Optional` **ResetPassword**: `boolean`

Gets or sets a value indicating whether to reset the password.

**`memberof`** UpdateUserPassword

#### Defined in

[generated-client/models/update-user-password.ts:46](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/update-user-password.ts#L46)
