[jellyfin-sdk-typescript](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / StudiosApiGetStudiosRequest

# Interface: StudiosApiGetStudiosRequest

[generated-client](../modules/generated_client.md).StudiosApiGetStudiosRequest

Request parameters for getStudios operation in StudiosApi.

**`export`**

**`interface`** StudiosApiGetStudiosRequest

## Table of contents

### Properties

- [enableImageTypes](generated_client.StudiosApiGetStudiosRequest.md#enableimagetypes)
- [enableImages](generated_client.StudiosApiGetStudiosRequest.md#enableimages)
- [enableTotalRecordCount](generated_client.StudiosApiGetStudiosRequest.md#enabletotalrecordcount)
- [enableUserData](generated_client.StudiosApiGetStudiosRequest.md#enableuserdata)
- [excludeItemTypes](generated_client.StudiosApiGetStudiosRequest.md#excludeitemtypes)
- [fields](generated_client.StudiosApiGetStudiosRequest.md#fields)
- [imageTypeLimit](generated_client.StudiosApiGetStudiosRequest.md#imagetypelimit)
- [includeItemTypes](generated_client.StudiosApiGetStudiosRequest.md#includeitemtypes)
- [isFavorite](generated_client.StudiosApiGetStudiosRequest.md#isfavorite)
- [limit](generated_client.StudiosApiGetStudiosRequest.md#limit)
- [nameLessThan](generated_client.StudiosApiGetStudiosRequest.md#namelessthan)
- [nameStartsWith](generated_client.StudiosApiGetStudiosRequest.md#namestartswith)
- [nameStartsWithOrGreater](generated_client.StudiosApiGetStudiosRequest.md#namestartswithorgreater)
- [parentId](generated_client.StudiosApiGetStudiosRequest.md#parentid)
- [searchTerm](generated_client.StudiosApiGetStudiosRequest.md#searchterm)
- [startIndex](generated_client.StudiosApiGetStudiosRequest.md#startindex)
- [userId](generated_client.StudiosApiGetStudiosRequest.md#userid)

## Properties

### enableImageTypes

• `Optional` `Readonly` **enableImageTypes**: [`ImageType`](../enums/generated_client.ImageType.md)[]

Optional. The image types to include in the output.

**`memberof`** StudiosApiGetStudios

#### Defined in

[generated-client/api/studios-api.ts:398](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/studios-api.ts#L398)

___

### enableImages

• `Optional` `Readonly` **enableImages**: `boolean`

Optional, include image information in output.

**`memberof`** StudiosApiGetStudios

#### Defined in

[generated-client/api/studios-api.ts:433](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/studios-api.ts#L433)

___

### enableTotalRecordCount

• `Optional` `Readonly` **enableTotalRecordCount**: `boolean`

Total record count.

**`memberof`** StudiosApiGetStudios

#### Defined in

[generated-client/api/studios-api.ts:440](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/studios-api.ts#L440)

___

### enableUserData

• `Optional` `Readonly` **enableUserData**: `boolean`

Optional, include user data.

**`memberof`** StudiosApiGetStudios

#### Defined in

[generated-client/api/studios-api.ts:384](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/studios-api.ts#L384)

___

### excludeItemTypes

• `Optional` `Readonly` **excludeItemTypes**: `string`[]

Optional. If specified, results will be filtered out based on item type. This allows multiple, comma delimited.

**`memberof`** StudiosApiGetStudios

#### Defined in

[generated-client/api/studios-api.ts:363](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/studios-api.ts#L363)

___

### fields

• `Optional` `Readonly` **fields**: [`ItemFields`](../enums/generated_client.ItemFields.md)[]

Optional. Specify additional fields of information to return in the output.

**`memberof`** StudiosApiGetStudios

#### Defined in

[generated-client/api/studios-api.ts:356](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/studios-api.ts#L356)

___

### imageTypeLimit

• `Optional` `Readonly` **imageTypeLimit**: `number`

Optional, the max number of images to return, per image type.

**`memberof`** StudiosApiGetStudios

#### Defined in

[generated-client/api/studios-api.ts:391](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/studios-api.ts#L391)

___

### includeItemTypes

• `Optional` `Readonly` **includeItemTypes**: `string`[]

Optional. If specified, results will be filtered based on item type. This allows multiple, comma delimited.

**`memberof`** StudiosApiGetStudios

#### Defined in

[generated-client/api/studios-api.ts:370](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/studios-api.ts#L370)

___

### isFavorite

• `Optional` `Readonly` **isFavorite**: `boolean`

Optional filter by items that are marked as favorite, or not.

**`memberof`** StudiosApiGetStudios

#### Defined in

[generated-client/api/studios-api.ts:377](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/studios-api.ts#L377)

___

### limit

• `Optional` `Readonly` **limit**: `number`

Optional. The maximum number of records to return.

**`memberof`** StudiosApiGetStudios

#### Defined in

[generated-client/api/studios-api.ts:335](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/studios-api.ts#L335)

___

### nameLessThan

• `Optional` `Readonly` **nameLessThan**: `string`

Optional filter by items whose name is equally or lesser than a given input string.

**`memberof`** StudiosApiGetStudios

#### Defined in

[generated-client/api/studios-api.ts:426](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/studios-api.ts#L426)

___

### nameStartsWith

• `Optional` `Readonly` **nameStartsWith**: `string`

Optional filter by items whose name is sorted equally than a given input string.

**`memberof`** StudiosApiGetStudios

#### Defined in

[generated-client/api/studios-api.ts:419](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/studios-api.ts#L419)

___

### nameStartsWithOrGreater

• `Optional` `Readonly` **nameStartsWithOrGreater**: `string`

Optional filter by items whose name is sorted equally or greater than a given input string.

**`memberof`** StudiosApiGetStudios

#### Defined in

[generated-client/api/studios-api.ts:412](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/studios-api.ts#L412)

___

### parentId

• `Optional` `Readonly` **parentId**: `string`

Specify this to localize the search to a specific item or folder. Omit to use the root.

**`memberof`** StudiosApiGetStudios

#### Defined in

[generated-client/api/studios-api.ts:349](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/studios-api.ts#L349)

___

### searchTerm

• `Optional` `Readonly` **searchTerm**: `string`

Optional. Search term.

**`memberof`** StudiosApiGetStudios

#### Defined in

[generated-client/api/studios-api.ts:342](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/studios-api.ts#L342)

___

### startIndex

• `Optional` `Readonly` **startIndex**: `number`

Optional. The record index to start at. All items with a lower index will be dropped from the results.

**`memberof`** StudiosApiGetStudios

#### Defined in

[generated-client/api/studios-api.ts:328](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/studios-api.ts#L328)

___

### userId

• `Optional` `Readonly` **userId**: `string`

User id.

**`memberof`** StudiosApiGetStudios

#### Defined in

[generated-client/api/studios-api.ts:405](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/studios-api.ts#L405)
