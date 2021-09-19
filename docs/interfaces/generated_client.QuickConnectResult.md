[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / QuickConnectResult

# Interface: QuickConnectResult

[generated-client](../modules/generated_client.md).QuickConnectResult

Stores the result of an incoming quick connect request.

**`export`**

**`interface`** QuickConnectResult

## Table of contents

### Properties

- [Authenticated](generated_client.QuickConnectResult.md#authenticated)
- [Authentication](generated_client.QuickConnectResult.md#authentication)
- [Code](generated_client.QuickConnectResult.md#code)
- [DateAdded](generated_client.QuickConnectResult.md#dateadded)
- [Error](generated_client.QuickConnectResult.md#error)
- [Secret](generated_client.QuickConnectResult.md#secret)

## Properties

### Authenticated

• `Optional` **Authenticated**: `boolean`

Gets a value indicating whether this request is authorized.

**`memberof`** QuickConnectResult

#### Defined in

[generated-client/models/quick-connect-result.ts:28](https://github.com/thornbill/jellyfin-sdk-typescript/blob/21a118e/src/generated-client/models/quick-connect-result.ts#L28)

___

### Authentication

• `Optional` **Authentication**: ``null`` \| `string`

Gets or sets the private access token.

**`memberof`** QuickConnectResult

#### Defined in

[generated-client/models/quick-connect-result.ts:46](https://github.com/thornbill/jellyfin-sdk-typescript/blob/21a118e/src/generated-client/models/quick-connect-result.ts#L46)

___

### Code

• `Optional` **Code**: ``null`` \| `string`

Gets or sets the user facing code used so the user can quickly differentiate this request from others.

**`memberof`** QuickConnectResult

#### Defined in

[generated-client/models/quick-connect-result.ts:40](https://github.com/thornbill/jellyfin-sdk-typescript/blob/21a118e/src/generated-client/models/quick-connect-result.ts#L40)

___

### DateAdded

• `Optional` **DateAdded**: ``null`` \| `string`

Gets or sets the DateTime that this request was created.

**`memberof`** QuickConnectResult

#### Defined in

[generated-client/models/quick-connect-result.ts:58](https://github.com/thornbill/jellyfin-sdk-typescript/blob/21a118e/src/generated-client/models/quick-connect-result.ts#L58)

___

### Error

• `Optional` **Error**: ``null`` \| `string`

Gets or sets an error message.

**`memberof`** QuickConnectResult

#### Defined in

[generated-client/models/quick-connect-result.ts:52](https://github.com/thornbill/jellyfin-sdk-typescript/blob/21a118e/src/generated-client/models/quick-connect-result.ts#L52)

___

### Secret

• `Optional` **Secret**: ``null`` \| `string`

Gets or sets the secret value used to uniquely identify this request. Can be used to retrieve authentication information.

**`memberof`** QuickConnectResult

#### Defined in

[generated-client/models/quick-connect-result.ts:34](https://github.com/thornbill/jellyfin-sdk-typescript/blob/21a118e/src/generated-client/models/quick-connect-result.ts#L34)
