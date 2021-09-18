[jellyfin-sdk-typescript](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / BrandingApi

# Class: BrandingApi

[generated-client](../modules/generated_client.md).BrandingApi

BrandingApi - object-oriented interface

**`export`**

## Hierarchy

- `BaseAPI`

  ↳ **`BrandingApi`**

## Table of contents

### Constructors

- [constructor](generated_client.BrandingApi.md#constructor)

### Properties

- [axios](generated_client.BrandingApi.md#axios)
- [basePath](generated_client.BrandingApi.md#basepath)
- [configuration](generated_client.BrandingApi.md#configuration)

### Methods

- [getBrandingCss](generated_client.BrandingApi.md#getbrandingcss)
- [getBrandingCss2](generated_client.BrandingApi.md#getbrandingcss2)
- [getBrandingOptions](generated_client.BrandingApi.md#getbrandingoptions)

## Constructors

### constructor

• **new BrandingApi**(`configuration?`, `basePath?`, `axios?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](generated_client.Configuration.md) |
| `basePath` | `string` |
| `axios` | `AxiosInstance` |

#### Inherited from

BaseAPI.constructor

#### Defined in

[generated-client/base.ts:52](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e4df7f8/src/generated-client/base.ts#L52)

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

[generated-client/base.ts:50](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e4df7f8/src/generated-client/base.ts#L50)

## Methods

### getBrandingCss

▸ **getBrandingCss**(`options?`): `Promise`<`AxiosResponse`<`string`\>\>

**`summary`** Gets branding css.

**`throws`** {RequiredError}

**`memberof`** BrandingApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `any` |

#### Returns

`Promise`<`AxiosResponse`<`string`\>\>

#### Defined in

[generated-client/api/branding-api.ts:215](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e4df7f8/src/generated-client/api/branding-api.ts#L215)

___

### getBrandingCss2

▸ **getBrandingCss2**(`options?`): `Promise`<`AxiosResponse`<`string`\>\>

**`summary`** Gets branding css.

**`throws`** {RequiredError}

**`memberof`** BrandingApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `any` |

#### Returns

`Promise`<`AxiosResponse`<`string`\>\>

#### Defined in

[generated-client/api/branding-api.ts:226](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e4df7f8/src/generated-client/api/branding-api.ts#L226)

___

### getBrandingOptions

▸ **getBrandingOptions**(`options?`): `Promise`<`AxiosResponse`<[`BrandingOptions`](../interfaces/generated_client.BrandingOptions.md)\>\>

**`summary`** Gets branding configuration.

**`throws`** {RequiredError}

**`memberof`** BrandingApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `any` |

#### Returns

`Promise`<`AxiosResponse`<[`BrandingOptions`](../interfaces/generated_client.BrandingOptions.md)\>\>

#### Defined in

[generated-client/api/branding-api.ts:237](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e4df7f8/src/generated-client/api/branding-api.ts#L237)
