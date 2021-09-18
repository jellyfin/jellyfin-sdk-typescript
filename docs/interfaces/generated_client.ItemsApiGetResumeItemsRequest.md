[jellyfin-sdk-typescript](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / ItemsApiGetResumeItemsRequest

# Interface: ItemsApiGetResumeItemsRequest

[generated-client](../modules/generated_client.md).ItemsApiGetResumeItemsRequest

Request parameters for getResumeItems operation in ItemsApi.

**`export`**

**`interface`** ItemsApiGetResumeItemsRequest

## Table of contents

### Properties

- [enableImageTypes](generated_client.ItemsApiGetResumeItemsRequest.md#enableimagetypes)
- [enableImages](generated_client.ItemsApiGetResumeItemsRequest.md#enableimages)
- [enableTotalRecordCount](generated_client.ItemsApiGetResumeItemsRequest.md#enabletotalrecordcount)
- [enableUserData](generated_client.ItemsApiGetResumeItemsRequest.md#enableuserdata)
- [excludeItemTypes](generated_client.ItemsApiGetResumeItemsRequest.md#excludeitemtypes)
- [fields](generated_client.ItemsApiGetResumeItemsRequest.md#fields)
- [imageTypeLimit](generated_client.ItemsApiGetResumeItemsRequest.md#imagetypelimit)
- [includeItemTypes](generated_client.ItemsApiGetResumeItemsRequest.md#includeitemtypes)
- [limit](generated_client.ItemsApiGetResumeItemsRequest.md#limit)
- [mediaTypes](generated_client.ItemsApiGetResumeItemsRequest.md#mediatypes)
- [parentId](generated_client.ItemsApiGetResumeItemsRequest.md#parentid)
- [searchTerm](generated_client.ItemsApiGetResumeItemsRequest.md#searchterm)
- [startIndex](generated_client.ItemsApiGetResumeItemsRequest.md#startindex)
- [userId](generated_client.ItemsApiGetResumeItemsRequest.md#userid)

## Properties

### enableImageTypes

• `Optional` `Readonly` **enableImageTypes**: [`ImageType`](../enums/generated_client.ImageType.md)[]

Optional. The image types to include in the output.

**`memberof`** ItemsApiGetResumeItems

#### Defined in

[generated-client/api/items-api.ts:2664](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e4df7f8/src/generated-client/api/items-api.ts#L2664)

___

### enableImages

• `Optional` `Readonly` **enableImages**: `boolean`

Optional. Include image information in output.

**`memberof`** ItemsApiGetResumeItems

#### Defined in

[generated-client/api/items-api.ts:2692](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e4df7f8/src/generated-client/api/items-api.ts#L2692)

___

### enableTotalRecordCount

• `Optional` `Readonly` **enableTotalRecordCount**: `boolean`

Optional. Enable the total record count.

**`memberof`** ItemsApiGetResumeItems

#### Defined in

[generated-client/api/items-api.ts:2685](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e4df7f8/src/generated-client/api/items-api.ts#L2685)

___

### enableUserData

• `Optional` `Readonly` **enableUserData**: `boolean`

Optional. Include user data.

**`memberof`** ItemsApiGetResumeItems

#### Defined in

[generated-client/api/items-api.ts:2650](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e4df7f8/src/generated-client/api/items-api.ts#L2650)

___

### excludeItemTypes

• `Optional` `Readonly` **excludeItemTypes**: `string`[]

Optional. If specified, results will be filtered based on item type. This allows multiple, comma delimited.

**`memberof`** ItemsApiGetResumeItems

#### Defined in

[generated-client/api/items-api.ts:2671](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e4df7f8/src/generated-client/api/items-api.ts#L2671)

___

### fields

• `Optional` `Readonly` **fields**: [`ItemFields`](../enums/generated_client.ItemFields.md)[]

Optional. Specify additional fields of information to return in the output. This allows multiple, comma delimited. Options: Budget, Chapters, DateCreated, Genres, HomePageUrl, IndexOptions, MediaStreams, Overview, ParentId, Path, People, ProviderIds, PrimaryImageAspectRatio, Revenue, SortName, Studios, Taglines.

**`memberof`** ItemsApiGetResumeItems

#### Defined in

[generated-client/api/items-api.ts:2636](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e4df7f8/src/generated-client/api/items-api.ts#L2636)

___

### imageTypeLimit

• `Optional` `Readonly` **imageTypeLimit**: `number`

Optional. The max number of images to return, per image type.

**`memberof`** ItemsApiGetResumeItems

#### Defined in

[generated-client/api/items-api.ts:2657](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e4df7f8/src/generated-client/api/items-api.ts#L2657)

___

### includeItemTypes

• `Optional` `Readonly` **includeItemTypes**: `string`[]

Optional. If specified, results will be filtered based on the item type. This allows multiple, comma delimited.

**`memberof`** ItemsApiGetResumeItems

#### Defined in

[generated-client/api/items-api.ts:2678](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e4df7f8/src/generated-client/api/items-api.ts#L2678)

___

### limit

• `Optional` `Readonly` **limit**: `number`

The item limit.

**`memberof`** ItemsApiGetResumeItems

#### Defined in

[generated-client/api/items-api.ts:2615](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e4df7f8/src/generated-client/api/items-api.ts#L2615)

___

### mediaTypes

• `Optional` `Readonly` **mediaTypes**: `string`[]

Optional. Filter by MediaType. Allows multiple, comma delimited.

**`memberof`** ItemsApiGetResumeItems

#### Defined in

[generated-client/api/items-api.ts:2643](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e4df7f8/src/generated-client/api/items-api.ts#L2643)

___

### parentId

• `Optional` `Readonly` **parentId**: `string`

Specify this to localize the search to a specific item or folder. Omit to use the root.

**`memberof`** ItemsApiGetResumeItems

#### Defined in

[generated-client/api/items-api.ts:2629](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e4df7f8/src/generated-client/api/items-api.ts#L2629)

___

### searchTerm

• `Optional` `Readonly` **searchTerm**: `string`

The search term.

**`memberof`** ItemsApiGetResumeItems

#### Defined in

[generated-client/api/items-api.ts:2622](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e4df7f8/src/generated-client/api/items-api.ts#L2622)

___

### startIndex

• `Optional` `Readonly` **startIndex**: `number`

The start index.

**`memberof`** ItemsApiGetResumeItems

#### Defined in

[generated-client/api/items-api.ts:2608](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e4df7f8/src/generated-client/api/items-api.ts#L2608)

___

### userId

• `Readonly` **userId**: `string`

The user id.

**`memberof`** ItemsApiGetResumeItems

#### Defined in

[generated-client/api/items-api.ts:2601](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e4df7f8/src/generated-client/api/items-api.ts#L2601)
