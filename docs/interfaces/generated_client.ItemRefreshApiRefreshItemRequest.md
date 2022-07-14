[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / ItemRefreshApiRefreshItemRequest

# Interface: ItemRefreshApiRefreshItemRequest

[generated-client](../modules/generated_client.md).ItemRefreshApiRefreshItemRequest

Request parameters for refreshItem operation in ItemRefreshApi.

**`export`**

**`interface`** ItemRefreshApiRefreshItemRequest

## Table of contents

### Properties

- [imageRefreshMode](generated_client.ItemRefreshApiRefreshItemRequest.md#imagerefreshmode)
- [itemId](generated_client.ItemRefreshApiRefreshItemRequest.md#itemid)
- [metadataRefreshMode](generated_client.ItemRefreshApiRefreshItemRequest.md#metadatarefreshmode)
- [replaceAllImages](generated_client.ItemRefreshApiRefreshItemRequest.md#replaceallimages)
- [replaceAllMetadata](generated_client.ItemRefreshApiRefreshItemRequest.md#replaceallmetadata)

## Properties

### imageRefreshMode

• `Optional` `Readonly` **imageRefreshMode**: [`MetadataRefreshMode`](../enums/generated_client.MetadataRefreshMode.md)

(Optional) Specifies the image refresh mode.

**`memberof`** ItemRefreshApiRefreshItem

#### Defined in

[generated-client/api/item-refresh-api.ts:167](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/item-refresh-api.ts#L167)

___

### itemId

• `Readonly` **itemId**: `string`

Item id.

**`memberof`** ItemRefreshApiRefreshItem

#### Defined in

[generated-client/api/item-refresh-api.ts:153](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/item-refresh-api.ts#L153)

___

### metadataRefreshMode

• `Optional` `Readonly` **metadataRefreshMode**: [`MetadataRefreshMode`](../enums/generated_client.MetadataRefreshMode.md)

(Optional) Specifies the metadata refresh mode.

**`memberof`** ItemRefreshApiRefreshItem

#### Defined in

[generated-client/api/item-refresh-api.ts:160](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/item-refresh-api.ts#L160)

___

### replaceAllImages

• `Optional` `Readonly` **replaceAllImages**: `boolean`

(Optional) Determines if images should be replaced. Only applicable if mode is FullRefresh.

**`memberof`** ItemRefreshApiRefreshItem

#### Defined in

[generated-client/api/item-refresh-api.ts:181](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/item-refresh-api.ts#L181)

___

### replaceAllMetadata

• `Optional` `Readonly` **replaceAllMetadata**: `boolean`

(Optional) Determines if metadata should be replaced. Only applicable if mode is FullRefresh.

**`memberof`** ItemRefreshApiRefreshItem

#### Defined in

[generated-client/api/item-refresh-api.ts:174](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/item-refresh-api.ts#L174)
