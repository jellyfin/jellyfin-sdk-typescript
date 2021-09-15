[jellyfin-sdk-typescript](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / ItemUpdateApi

# Class: ItemUpdateApi

[generated-client](../modules/generated_client.md).ItemUpdateApi

ItemUpdateApi - object-oriented interface

**`export`**

## Hierarchy

- `BaseAPI`

  ↳ **`ItemUpdateApi`**

## Table of contents

### Constructors

- [constructor](generated_client.ItemUpdateApi.md#constructor)

### Properties

- [axios](generated_client.ItemUpdateApi.md#axios)
- [basePath](generated_client.ItemUpdateApi.md#basepath)
- [configuration](generated_client.ItemUpdateApi.md#configuration)

### Methods

- [getMetadataEditorInfo](generated_client.ItemUpdateApi.md#getmetadataeditorinfo)
- [updateItem](generated_client.ItemUpdateApi.md#updateitem)
- [updateItemContentType](generated_client.ItemUpdateApi.md#updateitemcontenttype)

## Constructors

### constructor

• **new ItemUpdateApi**(`configuration?`, `basePath?`, `axios?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](generated_client.Configuration.md) |
| `basePath` | `string` |
| `axios` | `AxiosInstance` |

#### Inherited from

BaseAPI.constructor

#### Defined in

[generated-client/base.ts:52](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/base.ts#L52)

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

[generated-client/base.ts:50](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/base.ts#L50)

## Methods

### getMetadataEditorInfo

▸ **getMetadataEditorInfo**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`MetadataEditorInfo`](../interfaces/generated_client.MetadataEditorInfo.md)\>\>

**`summary`** Gets metadata editor info for an item.

**`throws`** {RequiredError}

**`memberof`** ItemUpdateApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`ItemUpdateApiGetMetadataEditorInfoRequest`](../interfaces/generated_client.ItemUpdateApiGetMetadataEditorInfoRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`MetadataEditorInfo`](../interfaces/generated_client.MetadataEditorInfo.md)\>\>

#### Defined in

[generated-client/api/item-update-api.ts:318](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/item-update-api.ts#L318)

___

### updateItem

▸ **updateItem**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Updates an item.

**`throws`** {RequiredError}

**`memberof`** ItemUpdateApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`ItemUpdateApiUpdateItemRequest`](../interfaces/generated_client.ItemUpdateApiUpdateItemRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[generated-client/api/item-update-api.ts:330](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/item-update-api.ts#L330)

___

### updateItemContentType

▸ **updateItemContentType**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Updates an item\'s content type.

**`throws`** {RequiredError}

**`memberof`** ItemUpdateApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`ItemUpdateApiUpdateItemContentTypeRequest`](../interfaces/generated_client.ItemUpdateApiUpdateItemContentTypeRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[generated-client/api/item-update-api.ts:342](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/item-update-api.ts#L342)
