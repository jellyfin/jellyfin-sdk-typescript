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

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](generated_client.Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Inherited from

BaseAPI.constructor

#### Defined in

[generated-client/base.ts:52](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/base.ts#L52)

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

[generated-client/base.ts:50](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/base.ts#L50)

## Methods

### addUserToSession

▸ **addUserToSession**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`, `any`\>\>

**`summary`** Adds an additional user to a session.

**`throws`** {RequiredError}

**`memberof`** SessionApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`SessionApiAddUserToSessionRequest`](../interfaces/generated_client.SessionApiAddUserToSessionRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`, `any`\>\>

#### Defined in

[generated-client/api/session-api.ts:1583](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/session-api.ts#L1583)

___

### displayContent

▸ **displayContent**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`, `any`\>\>

**`summary`** Instructs a session to browse to an item or view.

**`throws`** {RequiredError}

**`memberof`** SessionApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`SessionApiDisplayContentRequest`](../interfaces/generated_client.SessionApiDisplayContentRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`, `any`\>\>

#### Defined in

[generated-client/api/session-api.ts:1595](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/session-api.ts#L1595)

___

### getAuthProviders

▸ **getAuthProviders**(`options?`): `Promise`<`AxiosResponse`<[`NameIdPair`](../interfaces/generated_client.NameIdPair.md)[], `any`\>\>

**`summary`** Get all auth providers.

**`throws`** {RequiredError}

**`memberof`** SessionApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `any` |

#### Returns

`Promise`<`AxiosResponse`<[`NameIdPair`](../interfaces/generated_client.NameIdPair.md)[], `any`\>\>

#### Defined in

[generated-client/api/session-api.ts:1606](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/session-api.ts#L1606)

___

### getPasswordResetProviders

▸ **getPasswordResetProviders**(`options?`): `Promise`<`AxiosResponse`<[`NameIdPair`](../interfaces/generated_client.NameIdPair.md)[], `any`\>\>

**`summary`** Get all password reset providers.

**`throws`** {RequiredError}

**`memberof`** SessionApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `any` |

#### Returns

`Promise`<`AxiosResponse`<[`NameIdPair`](../interfaces/generated_client.NameIdPair.md)[], `any`\>\>

#### Defined in

[generated-client/api/session-api.ts:1617](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/session-api.ts#L1617)

___

### getSessions

▸ **getSessions**(`requestParameters?`, `options?`): `Promise`<`AxiosResponse`<[`SessionInfo`](../interfaces/generated_client.SessionInfo.md)[], `any`\>\>

**`summary`** Gets a list of sessions.

**`throws`** {RequiredError}

**`memberof`** SessionApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`SessionApiGetSessionsRequest`](../interfaces/generated_client.SessionApiGetSessionsRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`SessionInfo`](../interfaces/generated_client.SessionInfo.md)[], `any`\>\>

#### Defined in

[generated-client/api/session-api.ts:1629](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/session-api.ts#L1629)

___

### play

▸ **play**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`, `any`\>\>

**`summary`** Instructs a session to play an item.

**`throws`** {RequiredError}

**`memberof`** SessionApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`SessionApiPlayRequest`](../interfaces/generated_client.SessionApiPlayRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`, `any`\>\>

#### Defined in

[generated-client/api/session-api.ts:1641](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/session-api.ts#L1641)

___

### postCapabilities

▸ **postCapabilities**(`requestParameters?`, `options?`): `Promise`<`AxiosResponse`<`void`, `any`\>\>

**`summary`** Updates capabilities for a device.

**`throws`** {RequiredError}

**`memberof`** SessionApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`SessionApiPostCapabilitiesRequest`](../interfaces/generated_client.SessionApiPostCapabilitiesRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`, `any`\>\>

#### Defined in

[generated-client/api/session-api.ts:1653](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/session-api.ts#L1653)

___

### postFullCapabilities

▸ **postFullCapabilities**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`, `any`\>\>

**`summary`** Updates capabilities for a device.

**`throws`** {RequiredError}

**`memberof`** SessionApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`SessionApiPostFullCapabilitiesRequest`](../interfaces/generated_client.SessionApiPostFullCapabilitiesRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`, `any`\>\>

#### Defined in

[generated-client/api/session-api.ts:1665](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/session-api.ts#L1665)

___

### removeUserFromSession

▸ **removeUserFromSession**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`, `any`\>\>

**`summary`** Removes an additional user from a session.

**`throws`** {RequiredError}

**`memberof`** SessionApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`SessionApiRemoveUserFromSessionRequest`](../interfaces/generated_client.SessionApiRemoveUserFromSessionRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`, `any`\>\>

#### Defined in

[generated-client/api/session-api.ts:1677](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/session-api.ts#L1677)

___

### reportSessionEnded

▸ **reportSessionEnded**(`options?`): `Promise`<`AxiosResponse`<`void`, `any`\>\>

**`summary`** Reports that a session has ended.

**`throws`** {RequiredError}

**`memberof`** SessionApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `any` |

#### Returns

`Promise`<`AxiosResponse`<`void`, `any`\>\>

#### Defined in

[generated-client/api/session-api.ts:1688](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/session-api.ts#L1688)

___

### reportViewing

▸ **reportViewing**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`, `any`\>\>

**`summary`** Reports that a session is viewing an item.

**`throws`** {RequiredError}

**`memberof`** SessionApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`SessionApiReportViewingRequest`](../interfaces/generated_client.SessionApiReportViewingRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`, `any`\>\>

#### Defined in

[generated-client/api/session-api.ts:1700](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/session-api.ts#L1700)

___

### sendFullGeneralCommand

▸ **sendFullGeneralCommand**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`, `any`\>\>

**`summary`** Issues a full general command to a client.

**`throws`** {RequiredError}

**`memberof`** SessionApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`SessionApiSendFullGeneralCommandRequest`](../interfaces/generated_client.SessionApiSendFullGeneralCommandRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`, `any`\>\>

#### Defined in

[generated-client/api/session-api.ts:1712](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/session-api.ts#L1712)

___

### sendGeneralCommand

▸ **sendGeneralCommand**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`, `any`\>\>

**`summary`** Issues a general command to a client.

**`throws`** {RequiredError}

**`memberof`** SessionApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`SessionApiSendGeneralCommandRequest`](../interfaces/generated_client.SessionApiSendGeneralCommandRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`, `any`\>\>

#### Defined in

[generated-client/api/session-api.ts:1724](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/session-api.ts#L1724)

___

### sendMessageCommand

▸ **sendMessageCommand**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`, `any`\>\>

**`summary`** Issues a command to a client to display a message to the user.

**`throws`** {RequiredError}

**`memberof`** SessionApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`SessionApiSendMessageCommandRequest`](../interfaces/generated_client.SessionApiSendMessageCommandRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`, `any`\>\>

#### Defined in

[generated-client/api/session-api.ts:1736](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/session-api.ts#L1736)

___

### sendPlaystateCommand

▸ **sendPlaystateCommand**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`, `any`\>\>

**`summary`** Issues a playstate command to a client.

**`throws`** {RequiredError}

**`memberof`** SessionApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`SessionApiSendPlaystateCommandRequest`](../interfaces/generated_client.SessionApiSendPlaystateCommandRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`, `any`\>\>

#### Defined in

[generated-client/api/session-api.ts:1748](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/session-api.ts#L1748)

___

### sendSystemCommand

▸ **sendSystemCommand**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`, `any`\>\>

**`summary`** Issues a system command to a client.

**`throws`** {RequiredError}

**`memberof`** SessionApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`SessionApiSendSystemCommandRequest`](../interfaces/generated_client.SessionApiSendSystemCommandRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`, `any`\>\>

#### Defined in

[generated-client/api/session-api.ts:1760](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/session-api.ts#L1760)
