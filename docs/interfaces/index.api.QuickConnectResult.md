[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / [api](../modules/index.api.md) / QuickConnectResult

# Interface: QuickConnectResult

[index](../modules/index.md).[api](../modules/index.api.md).QuickConnectResult

Stores the result of an incoming quick connect request.

**`export`**

**`interface`** QuickConnectResult

## Table of contents

### Properties

- [Authenticated](index.api.QuickConnectResult.md#authenticated)
- [Authentication](index.api.QuickConnectResult.md#authentication)
- [Code](index.api.QuickConnectResult.md#code)
- [DateAdded](index.api.QuickConnectResult.md#dateadded)
- [Error](index.api.QuickConnectResult.md#error)
- [Secret](index.api.QuickConnectResult.md#secret)

## Properties

### Authenticated

• `Optional` **Authenticated**: `boolean`

Gets a value indicating whether this request is authorized.

**`memberof`** QuickConnectResult

#### Defined in

[generated-client/models/quick-connect-result.ts:28](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/quick-connect-result.ts#L28)

___

### Authentication

• `Optional` **Authentication**: ``null`` \| `string`

Gets or sets the private access token.

**`memberof`** QuickConnectResult

#### Defined in

[generated-client/models/quick-connect-result.ts:46](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/quick-connect-result.ts#L46)

___

### Code

• `Optional` **Code**: ``null`` \| `string`

Gets or sets the user facing code used so the user can quickly differentiate this request from others.

**`memberof`** QuickConnectResult

#### Defined in

[generated-client/models/quick-connect-result.ts:40](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/quick-connect-result.ts#L40)

___

### DateAdded

• `Optional` **DateAdded**: ``null`` \| `string`

Gets or sets the DateTime that this request was created.

**`memberof`** QuickConnectResult

#### Defined in

[generated-client/models/quick-connect-result.ts:58](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/quick-connect-result.ts#L58)

___

### Error

• `Optional` **Error**: ``null`` \| `string`

Gets or sets an error message.

**`memberof`** QuickConnectResult

#### Defined in

[generated-client/models/quick-connect-result.ts:52](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/quick-connect-result.ts#L52)

___

### Secret

• `Optional` **Secret**: ``null`` \| `string`

Gets or sets the secret value used to uniquely identify this request. Can be used to retrieve authentication information.

**`memberof`** QuickConnectResult

#### Defined in

[generated-client/models/quick-connect-result.ts:34](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/quick-connect-result.ts#L34)
