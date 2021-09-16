[jellyfin-sdk-typescript](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / Configuration

# Class: Configuration

[index](../modules/index.md).Configuration

## Table of contents

### Constructors

- [constructor](index.Configuration.md#constructor)

### Properties

- [accessToken](index.Configuration.md#accesstoken)
- [apiKey](index.Configuration.md#apikey)
- [baseOptions](index.Configuration.md#baseoptions)
- [basePath](index.Configuration.md#basepath)
- [formDataCtor](index.Configuration.md#formdatactor)
- [password](index.Configuration.md#password)
- [username](index.Configuration.md#username)

### Methods

- [isJsonMime](index.Configuration.md#isjsonmime)

## Constructors

### constructor

• **new Configuration**(`param?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `param` | [`ConfigurationParameters`](../interfaces/index.ConfigurationParameters.md) |

#### Defined in

[generated-client/configuration.ts:77](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/configuration.ts#L77)

## Properties

### accessToken

• `Optional` **accessToken**: `string` \| `Promise`<`string`\> \| (`name?`: `string`, `scopes?`: `string`[]) => `string` \| (`name?`: `string`, `scopes?`: `string`[]) => `Promise`<`string`\>

parameter for oauth2 security

**`param`** security name

**`param`** oauth2 scope

**`memberof`** Configuration

#### Defined in

[generated-client/configuration.ts:53](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/configuration.ts#L53)

___

### apiKey

• `Optional` **apiKey**: `string` \| `Promise`<`string`\> \| (`name`: `string`) => `string` \| (`name`: `string`) => `Promise`<`string`\>

parameter for apiKey security

**`param`** security name

**`memberof`** Configuration

#### Defined in

[generated-client/configuration.ts:32](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/configuration.ts#L32)

___

### baseOptions

• `Optional` **baseOptions**: `any`

base options for axios calls

**`memberof`** Configuration

#### Defined in

[generated-client/configuration.ts:67](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/configuration.ts#L67)

___

### basePath

• `Optional` **basePath**: `string`

override base path

**`memberof`** Configuration

#### Defined in

[generated-client/configuration.ts:60](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/configuration.ts#L60)

___

### formDataCtor

• `Optional` **formDataCtor**: () => `any`

#### Type declaration

• **new Configuration**()

The FormData constructor that will be used to create multipart form data
requests. You can inject this here so that execution environments that
do not support the FormData class can still run the generated client.

#### Defined in

[generated-client/configuration.ts:75](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/configuration.ts#L75)

___

### password

• `Optional` **password**: `string`

parameter for basic security

**`memberof`** Configuration

#### Defined in

[generated-client/configuration.ts:46](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/configuration.ts#L46)

___

### username

• `Optional` **username**: `string`

parameter for basic security

**`memberof`** Configuration

#### Defined in

[generated-client/configuration.ts:39](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/configuration.ts#L39)

## Methods

### isJsonMime

▸ **isJsonMime**(`mime`): `boolean`

Check if the given MIME is a JSON MIME.
JSON MIME examples:
  application/json
  application/json; charset=UTF8
  APPLICATION/JSON
  application/vnd.company+json

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mime` | `string` | MIME (Multipurpose Internet Mail Extensions) |

#### Returns

`boolean`

True if the given MIME is JSON, false otherwise.

#### Defined in

[generated-client/configuration.ts:97](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/configuration.ts#L97)
