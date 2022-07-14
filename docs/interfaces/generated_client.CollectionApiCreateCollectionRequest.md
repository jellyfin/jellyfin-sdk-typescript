[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / CollectionApiCreateCollectionRequest

# Interface: CollectionApiCreateCollectionRequest

[generated-client](../modules/generated_client.md).CollectionApiCreateCollectionRequest

Request parameters for createCollection operation in CollectionApi.

**`export`**

**`interface`** CollectionApiCreateCollectionRequest

## Table of contents

### Properties

- [ids](generated_client.CollectionApiCreateCollectionRequest.md#ids)
- [isLocked](generated_client.CollectionApiCreateCollectionRequest.md#islocked)
- [name](generated_client.CollectionApiCreateCollectionRequest.md#name)
- [parentId](generated_client.CollectionApiCreateCollectionRequest.md#parentid)

## Properties

### ids

• `Optional` `Readonly` **ids**: `string`[]

Item Ids to add to the collection.

**`memberof`** CollectionApiCreateCollection

#### Defined in

[generated-client/api/collection-api.ts:307](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/collection-api.ts#L307)

___

### isLocked

• `Optional` `Readonly` **isLocked**: `boolean`

Whether or not to lock the new collection.

**`memberof`** CollectionApiCreateCollection

#### Defined in

[generated-client/api/collection-api.ts:321](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/collection-api.ts#L321)

___

### name

• `Optional` `Readonly` **name**: `string`

The name of the collection.

**`memberof`** CollectionApiCreateCollection

#### Defined in

[generated-client/api/collection-api.ts:300](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/collection-api.ts#L300)

___

### parentId

• `Optional` `Readonly` **parentId**: `string`

Optional. Create the collection within a specific folder.

**`memberof`** CollectionApiCreateCollection

#### Defined in

[generated-client/api/collection-api.ts:314](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/collection-api.ts#L314)
