[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / ItemRefreshApiPostRequest

# Interface: ItemRefreshApiPostRequest

[generated-client](../modules/generated_client.md).ItemRefreshApiPostRequest

Request parameters for post operation in ItemRefreshApi.

**`export`**

**`interface`** ItemRefreshApiPostRequest

## Table of contents

### Properties

- [imageRefreshMode](generated_client.ItemRefreshApiPostRequest.md#imagerefreshmode)
- [itemId](generated_client.ItemRefreshApiPostRequest.md#itemid)
- [metadataRefreshMode](generated_client.ItemRefreshApiPostRequest.md#metadatarefreshmode)
- [replaceAllImages](generated_client.ItemRefreshApiPostRequest.md#replaceallimages)
- [replaceAllMetadata](generated_client.ItemRefreshApiPostRequest.md#replaceallmetadata)

## Properties

### imageRefreshMode

• `Optional` `Readonly` **imageRefreshMode**: [`MetadataRefreshMode`](../enums/generated_client.MetadataRefreshMode.md)

(Optional) Specifies the image refresh mode.

**`memberof`** ItemRefreshApiPost

#### Defined in

[generated-client/api/item-refresh-api.ts:167](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/item-refresh-api.ts#L167)

___

### itemId

• `Readonly` **itemId**: `string`

Item id.

**`memberof`** ItemRefreshApiPost

#### Defined in

[generated-client/api/item-refresh-api.ts:153](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/item-refresh-api.ts#L153)

___

### metadataRefreshMode

• `Optional` `Readonly` **metadataRefreshMode**: [`MetadataRefreshMode`](../enums/generated_client.MetadataRefreshMode.md)

(Optional) Specifies the metadata refresh mode.

**`memberof`** ItemRefreshApiPost

#### Defined in

[generated-client/api/item-refresh-api.ts:160](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/item-refresh-api.ts#L160)

___

### replaceAllImages

• `Optional` `Readonly` **replaceAllImages**: `boolean`

(Optional) Determines if images should be replaced. Only applicable if mode is FullRefresh.

**`memberof`** ItemRefreshApiPost

#### Defined in

[generated-client/api/item-refresh-api.ts:181](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/item-refresh-api.ts#L181)

___

### replaceAllMetadata

• `Optional` `Readonly` **replaceAllMetadata**: `boolean`

(Optional) Determines if metadata should be replaced. Only applicable if mode is FullRefresh.

**`memberof`** ItemRefreshApiPost

#### Defined in

[generated-client/api/item-refresh-api.ts:174](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/item-refresh-api.ts#L174)
