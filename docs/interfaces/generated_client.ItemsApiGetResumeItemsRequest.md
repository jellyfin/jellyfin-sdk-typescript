[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / ItemsApiGetResumeItemsRequest

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
- [excludeActiveSessions](generated_client.ItemsApiGetResumeItemsRequest.md#excludeactivesessions)
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

[generated-client/api/items-api.ts:2813](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/items-api.ts#L2813)

___

### enableImages

• `Optional` `Readonly` **enableImages**: `boolean`

Optional. Include image information in output.

**`memberof`** ItemsApiGetResumeItems

#### Defined in

[generated-client/api/items-api.ts:2841](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/items-api.ts#L2841)

___

### enableTotalRecordCount

• `Optional` `Readonly` **enableTotalRecordCount**: `boolean`

Optional. Enable the total record count.

**`memberof`** ItemsApiGetResumeItems

#### Defined in

[generated-client/api/items-api.ts:2834](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/items-api.ts#L2834)

___

### enableUserData

• `Optional` `Readonly` **enableUserData**: `boolean`

Optional. Include user data.

**`memberof`** ItemsApiGetResumeItems

#### Defined in

[generated-client/api/items-api.ts:2799](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/items-api.ts#L2799)

___

### excludeActiveSessions

• `Optional` `Readonly` **excludeActiveSessions**: `boolean`

Optional. Whether to exclude the currently active sessions.

**`memberof`** ItemsApiGetResumeItems

#### Defined in

[generated-client/api/items-api.ts:2848](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/items-api.ts#L2848)

___

### excludeItemTypes

• `Optional` `Readonly` **excludeItemTypes**: [`BaseItemKind`](../enums/generated_client.BaseItemKind.md)[]

Optional. If specified, results will be filtered based on item type. This allows multiple, comma delimited.

**`memberof`** ItemsApiGetResumeItems

#### Defined in

[generated-client/api/items-api.ts:2820](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/items-api.ts#L2820)

___

### fields

• `Optional` `Readonly` **fields**: [`ItemFields`](../enums/generated_client.ItemFields.md)[]

Optional. Specify additional fields of information to return in the output. This allows multiple, comma delimited. Options: Budget, Chapters, DateCreated, Genres, HomePageUrl, IndexOptions, MediaStreams, Overview, ParentId, Path, People, ProviderIds, PrimaryImageAspectRatio, Revenue, SortName, Studios, Taglines.

**`memberof`** ItemsApiGetResumeItems

#### Defined in

[generated-client/api/items-api.ts:2785](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/items-api.ts#L2785)

___

### imageTypeLimit

• `Optional` `Readonly` **imageTypeLimit**: `number`

Optional. The max number of images to return, per image type.

**`memberof`** ItemsApiGetResumeItems

#### Defined in

[generated-client/api/items-api.ts:2806](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/items-api.ts#L2806)

___

### includeItemTypes

• `Optional` `Readonly` **includeItemTypes**: [`BaseItemKind`](../enums/generated_client.BaseItemKind.md)[]

Optional. If specified, results will be filtered based on the item type. This allows multiple, comma delimited.

**`memberof`** ItemsApiGetResumeItems

#### Defined in

[generated-client/api/items-api.ts:2827](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/items-api.ts#L2827)

___

### limit

• `Optional` `Readonly` **limit**: `number`

The item limit.

**`memberof`** ItemsApiGetResumeItems

#### Defined in

[generated-client/api/items-api.ts:2764](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/items-api.ts#L2764)

___

### mediaTypes

• `Optional` `Readonly` **mediaTypes**: `string`[]

Optional. Filter by MediaType. Allows multiple, comma delimited.

**`memberof`** ItemsApiGetResumeItems

#### Defined in

[generated-client/api/items-api.ts:2792](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/items-api.ts#L2792)

___

### parentId

• `Optional` `Readonly` **parentId**: `string`

Specify this to localize the search to a specific item or folder. Omit to use the root.

**`memberof`** ItemsApiGetResumeItems

#### Defined in

[generated-client/api/items-api.ts:2778](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/items-api.ts#L2778)

___

### searchTerm

• `Optional` `Readonly` **searchTerm**: `string`

The search term.

**`memberof`** ItemsApiGetResumeItems

#### Defined in

[generated-client/api/items-api.ts:2771](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/items-api.ts#L2771)

___

### startIndex

• `Optional` `Readonly` **startIndex**: `number`

The start index.

**`memberof`** ItemsApiGetResumeItems

#### Defined in

[generated-client/api/items-api.ts:2757](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/items-api.ts#L2757)

___

### userId

• `Readonly` **userId**: `string`

The user id.

**`memberof`** ItemsApiGetResumeItems

#### Defined in

[generated-client/api/items-api.ts:2750](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/items-api.ts#L2750)
