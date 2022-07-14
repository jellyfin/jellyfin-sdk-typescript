[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / ClientLogApi

# Class: ClientLogApi

[generated-client](../modules/generated_client.md).ClientLogApi

ClientLogApi - object-oriented interface

**`export`**

## Hierarchy

- `BaseAPI`

  ↳ **`ClientLogApi`**

## Table of contents

### Constructors

- [constructor](generated_client.ClientLogApi.md#constructor)

### Properties

- [axios](generated_client.ClientLogApi.md#axios)
- [basePath](generated_client.ClientLogApi.md#basepath)
- [configuration](generated_client.ClientLogApi.md#configuration)

### Methods

- [logFile](generated_client.ClientLogApi.md#logfile)

## Constructors

### constructor

• **new ClientLogApi**(`configuration?`, `basePath?`, `axios?`)

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

### logFile

▸ **logFile**(`requestParameters?`, `options?`): `Promise`<`AxiosResponse`<[`ClientLogDocumentResponseDto`](../interfaces/generated_client.ClientLogDocumentResponseDto.md), `any`\>\>

**`summary`** Upload a document.

**`throws`** {RequiredError}

**`memberof`** ClientLogApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`ClientLogApiLogFileRequest`](../interfaces/generated_client.ClientLogApiLogFileRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`ClientLogDocumentResponseDto`](../interfaces/generated_client.ClientLogDocumentResponseDto.md), `any`\>\>

#### Defined in

[generated-client/api/client-log-api.ts:143](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/client-log-api.ts#L143)
