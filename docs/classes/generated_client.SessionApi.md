[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / SessionApi

# Class: SessionApi

[generated-client](../modules/generated_client.md).SessionApi

SessionApi - object-oriented interface

**`export`**

## Hierarchy

- `BaseAPI`

  ↳ **`SessionApi`**

## Table of contents

### Constructors

- [constructor](generated_client.SessionApi.md#constructor)

### Properties

- [axios](generated_client.SessionApi.md#axios)
- [basePath](generated_client.SessionApi.md#basepath)
- [configuration](generated_client.SessionApi.md#configuration)

### Methods

- [addUserToSession](generated_client.SessionApi.md#addusertosession)
- [displayContent](generated_client.SessionApi.md#displaycontent)
- [getAuthProviders](generated_client.SessionApi.md#getauthproviders)
- [getPasswordResetProviders](generated_client.SessionApi.md#getpasswordresetproviders)
- [getSessions](generated_client.SessionApi.md#getsessions)
- [play](generated_client.SessionApi.md#play)
- [postCapabilities](generated_client.SessionApi.md#postcapabilities)
- [postFullCapabilities](generated_client.SessionApi.md#postfullcapabilities)
- [removeUserFromSession](generated_client.SessionApi.md#removeuserfromsession)
- [reportSessionEnded](generated_client.SessionApi.md#reportsessionended)
- [reportViewing](generated_client.SessionApi.md#reportviewing)
- [sendFullGeneralCommand](generated_client.SessionApi.md#sendfullgeneralcommand)
- [sendGeneralCommand](generated_client.SessionApi.md#sendgeneralcommand)
- [sendMessageCommand](generated_client.SessionApi.md#sendmessagecommand)
- [sendPlaystateCommand](generated_client.SessionApi.md#sendplaystatecommand)
- [sendSystemCommand](generated_client.SessionApi.md#sendsystemcommand)

## Constructors

### constructor

• **new SessionApi**(`configuration?`, `basePath?`, `axios?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](generated_client.Configuration.md) |
| `basePath` | `string` |
| `axios` | `AxiosInstance` |

#### Inherited from

BaseAPI.constructor

#### Defined in

[generated-client/base.ts:52](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/base.ts#L52)

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

[generated-client/base.ts:50](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/base.ts#L50)

## Methods

### addUserToSession

▸ **addUserToSession**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Adds an additional user to a session.

**`throws`** {RequiredError}

**`memberof`** SessionApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`SessionApiAddUserToSessionRequest`](../interfaces/generated_client.SessionApiAddUserToSessionRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[generated-client/api/session-api.ts:1581](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/session-api.ts#L1581)

___

### displayContent

▸ **displayContent**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Instructs a session to browse to an item or view.

**`throws`** {RequiredError}

**`memberof`** SessionApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`SessionApiDisplayContentRequest`](../interfaces/generated_client.SessionApiDisplayContentRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[generated-client/api/session-api.ts:1593](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/session-api.ts#L1593)

___

### getAuthProviders

▸ **getAuthProviders**(`options?`): `Promise`<`AxiosResponse`<[`NameIdPair`](../interfaces/generated_client.NameIdPair.md)[]\>\>

**`summary`** Get all auth providers.

**`throws`** {RequiredError}

**`memberof`** SessionApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `any` |

#### Returns

`Promise`<`AxiosResponse`<[`NameIdPair`](../interfaces/generated_client.NameIdPair.md)[]\>\>

#### Defined in

[generated-client/api/session-api.ts:1604](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/session-api.ts#L1604)

___

### getPasswordResetProviders

▸ **getPasswordResetProviders**(`options?`): `Promise`<`AxiosResponse`<[`NameIdPair`](../interfaces/generated_client.NameIdPair.md)[]\>\>

**`summary`** Get all password reset providers.

**`throws`** {RequiredError}

**`memberof`** SessionApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `any` |

#### Returns

`Promise`<`AxiosResponse`<[`NameIdPair`](../interfaces/generated_client.NameIdPair.md)[]\>\>

#### Defined in

[generated-client/api/session-api.ts:1615](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/session-api.ts#L1615)

___

### getSessions

▸ **getSessions**(`requestParameters?`, `options?`): `Promise`<`AxiosResponse`<[`SessionInfo`](../interfaces/generated_client.SessionInfo.md)[]\>\>

**`summary`** Gets a list of sessions.

**`throws`** {RequiredError}

**`memberof`** SessionApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`SessionApiGetSessionsRequest`](../interfaces/generated_client.SessionApiGetSessionsRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`SessionInfo`](../interfaces/generated_client.SessionInfo.md)[]\>\>

#### Defined in

[generated-client/api/session-api.ts:1627](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/session-api.ts#L1627)

___

### play

▸ **play**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Instructs a session to play an item.

**`throws`** {RequiredError}

**`memberof`** SessionApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`SessionApiPlayRequest`](../interfaces/generated_client.SessionApiPlayRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[generated-client/api/session-api.ts:1639](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/session-api.ts#L1639)

___

### postCapabilities

▸ **postCapabilities**(`requestParameters?`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Updates capabilities for a device.

**`throws`** {RequiredError}

**`memberof`** SessionApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`SessionApiPostCapabilitiesRequest`](../interfaces/generated_client.SessionApiPostCapabilitiesRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[generated-client/api/session-api.ts:1651](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/session-api.ts#L1651)

___

### postFullCapabilities

▸ **postFullCapabilities**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Updates capabilities for a device.

**`throws`** {RequiredError}

**`memberof`** SessionApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`SessionApiPostFullCapabilitiesRequest`](../interfaces/generated_client.SessionApiPostFullCapabilitiesRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[generated-client/api/session-api.ts:1663](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/session-api.ts#L1663)

___

### removeUserFromSession

▸ **removeUserFromSession**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Removes an additional user from a session.

**`throws`** {RequiredError}

**`memberof`** SessionApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`SessionApiRemoveUserFromSessionRequest`](../interfaces/generated_client.SessionApiRemoveUserFromSessionRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[generated-client/api/session-api.ts:1675](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/session-api.ts#L1675)

___

### reportSessionEnded

▸ **reportSessionEnded**(`options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Reports that a session has ended.

**`throws`** {RequiredError}

**`memberof`** SessionApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `any` |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[generated-client/api/session-api.ts:1686](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/session-api.ts#L1686)

___

### reportViewing

▸ **reportViewing**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Reports that a session is viewing an item.

**`throws`** {RequiredError}

**`memberof`** SessionApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`SessionApiReportViewingRequest`](../interfaces/generated_client.SessionApiReportViewingRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[generated-client/api/session-api.ts:1698](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/session-api.ts#L1698)

___

### sendFullGeneralCommand

▸ **sendFullGeneralCommand**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Issues a full general command to a client.

**`throws`** {RequiredError}

**`memberof`** SessionApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`SessionApiSendFullGeneralCommandRequest`](../interfaces/generated_client.SessionApiSendFullGeneralCommandRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[generated-client/api/session-api.ts:1710](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/session-api.ts#L1710)

___

### sendGeneralCommand

▸ **sendGeneralCommand**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Issues a general command to a client.

**`throws`** {RequiredError}

**`memberof`** SessionApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`SessionApiSendGeneralCommandRequest`](../interfaces/generated_client.SessionApiSendGeneralCommandRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[generated-client/api/session-api.ts:1722](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/session-api.ts#L1722)

___

### sendMessageCommand

▸ **sendMessageCommand**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Issues a command to a client to display a message to the user.

**`throws`** {RequiredError}

**`memberof`** SessionApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`SessionApiSendMessageCommandRequest`](../interfaces/generated_client.SessionApiSendMessageCommandRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[generated-client/api/session-api.ts:1734](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/session-api.ts#L1734)

___

### sendPlaystateCommand

▸ **sendPlaystateCommand**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Issues a playstate command to a client.

**`throws`** {RequiredError}

**`memberof`** SessionApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`SessionApiSendPlaystateCommandRequest`](../interfaces/generated_client.SessionApiSendPlaystateCommandRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[generated-client/api/session-api.ts:1746](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/session-api.ts#L1746)

___

### sendSystemCommand

▸ **sendSystemCommand**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Issues a system command to a client.

**`throws`** {RequiredError}

**`memberof`** SessionApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`SessionApiSendSystemCommandRequest`](../interfaces/generated_client.SessionApiSendSystemCommandRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[generated-client/api/session-api.ts:1758](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/session-api.ts#L1758)
