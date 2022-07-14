[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / QuickConnectResult

# Interface: QuickConnectResult

[generated-client](../modules/generated_client.md).QuickConnectResult

Stores the state of an quick connect request.

**`export`**

**`interface`** QuickConnectResult

## Table of contents

### Properties

- [AppName](generated_client.QuickConnectResult.md#appname)
- [AppVersion](generated_client.QuickConnectResult.md#appversion)
- [Authenticated](generated_client.QuickConnectResult.md#authenticated)
- [Code](generated_client.QuickConnectResult.md#code)
- [DateAdded](generated_client.QuickConnectResult.md#dateadded)
- [DeviceId](generated_client.QuickConnectResult.md#deviceid)
- [DeviceName](generated_client.QuickConnectResult.md#devicename)
- [Secret](generated_client.QuickConnectResult.md#secret)

## Properties

### AppName

• `Optional` **AppName**: `string`

Gets the requesting app name.

**`memberof`** QuickConnectResult

#### Defined in

[generated-client/models/quick-connect-result.ts:58](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/models/quick-connect-result.ts#L58)

___

### AppVersion

• `Optional` **AppVersion**: `string`

Gets the requesting app version.

**`memberof`** QuickConnectResult

#### Defined in

[generated-client/models/quick-connect-result.ts:64](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/models/quick-connect-result.ts#L64)

___

### Authenticated

• `Optional` **Authenticated**: `boolean`

Gets or sets a value indicating whether this request is authorized.

**`memberof`** QuickConnectResult

#### Defined in

[generated-client/models/quick-connect-result.ts:28](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/models/quick-connect-result.ts#L28)

___

### Code

• `Optional` **Code**: `string`

Gets the user facing code used so the user can quickly differentiate this request from others.

**`memberof`** QuickConnectResult

#### Defined in

[generated-client/models/quick-connect-result.ts:40](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/models/quick-connect-result.ts#L40)

___

### DateAdded

• `Optional` **DateAdded**: `string`

Gets or sets the DateTime that this request was created.

**`memberof`** QuickConnectResult

#### Defined in

[generated-client/models/quick-connect-result.ts:70](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/models/quick-connect-result.ts#L70)

___

### DeviceId

• `Optional` **DeviceId**: `string`

Gets the requesting device id.

**`memberof`** QuickConnectResult

#### Defined in

[generated-client/models/quick-connect-result.ts:46](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/models/quick-connect-result.ts#L46)

___

### DeviceName

• `Optional` **DeviceName**: `string`

Gets the requesting device name.

**`memberof`** QuickConnectResult

#### Defined in

[generated-client/models/quick-connect-result.ts:52](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/models/quick-connect-result.ts#L52)

___

### Secret

• `Optional` **Secret**: `string`

Gets the secret value used to uniquely identify this request. Can be used to retrieve authentication information.

**`memberof`** QuickConnectResult

#### Defined in

[generated-client/models/quick-connect-result.ts:34](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/models/quick-connect-result.ts#L34)
