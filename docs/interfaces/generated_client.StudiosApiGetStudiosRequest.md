[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / StudiosApiGetStudiosRequest

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

[generated-client/api/studios-api.ts:400](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/studios-api.ts#L400)

___

### enableImages

• `Optional` `Readonly` **enableImages**: `boolean`

Optional, include image information in output.

**`memberof`** StudiosApiGetStudios

#### Defined in

[generated-client/api/studios-api.ts:435](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/studios-api.ts#L435)

___

### enableTotalRecordCount

• `Optional` `Readonly` **enableTotalRecordCount**: `boolean`

Total record count.

**`memberof`** StudiosApiGetStudios

#### Defined in

[generated-client/api/studios-api.ts:442](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/studios-api.ts#L442)

___

### enableUserData

• `Optional` `Readonly` **enableUserData**: `boolean`

Optional, include user data.

**`memberof`** StudiosApiGetStudios

#### Defined in

[generated-client/api/studios-api.ts:386](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/studios-api.ts#L386)

___

### excludeItemTypes

• `Optional` `Readonly` **excludeItemTypes**: [`BaseItemKind`](../enums/generated_client.BaseItemKind.md)[]

Optional. If specified, results will be filtered out based on item type. This allows multiple, comma delimited.

**`memberof`** StudiosApiGetStudios

#### Defined in

[generated-client/api/studios-api.ts:365](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/studios-api.ts#L365)

___

### fields

• `Optional` `Readonly` **fields**: [`ItemFields`](../enums/generated_client.ItemFields.md)[]

Optional. Specify additional fields of information to return in the output.

**`memberof`** StudiosApiGetStudios

#### Defined in

[generated-client/api/studios-api.ts:358](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/studios-api.ts#L358)

___

### imageTypeLimit

• `Optional` `Readonly` **imageTypeLimit**: `number`

Optional, the max number of images to return, per image type.

**`memberof`** StudiosApiGetStudios

#### Defined in

[generated-client/api/studios-api.ts:393](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/studios-api.ts#L393)

___

### includeItemTypes

• `Optional` `Readonly` **includeItemTypes**: [`BaseItemKind`](../enums/generated_client.BaseItemKind.md)[]

Optional. If specified, results will be filtered based on item type. This allows multiple, comma delimited.

**`memberof`** StudiosApiGetStudios

#### Defined in

[generated-client/api/studios-api.ts:372](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/studios-api.ts#L372)

___

### isFavorite

• `Optional` `Readonly` **isFavorite**: `boolean`

Optional filter by items that are marked as favorite, or not.

**`memberof`** StudiosApiGetStudios

#### Defined in

[generated-client/api/studios-api.ts:379](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/studios-api.ts#L379)

___

### limit

• `Optional` `Readonly` **limit**: `number`

Optional. The maximum number of records to return.

**`memberof`** StudiosApiGetStudios

#### Defined in

[generated-client/api/studios-api.ts:337](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/studios-api.ts#L337)

___

### nameLessThan

• `Optional` `Readonly` **nameLessThan**: `string`

Optional filter by items whose name is equally or lesser than a given input string.

**`memberof`** StudiosApiGetStudios

#### Defined in

[generated-client/api/studios-api.ts:428](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/studios-api.ts#L428)

___

### nameStartsWith

• `Optional` `Readonly` **nameStartsWith**: `string`

Optional filter by items whose name is sorted equally than a given input string.

**`memberof`** StudiosApiGetStudios

#### Defined in

[generated-client/api/studios-api.ts:421](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/studios-api.ts#L421)

___

### nameStartsWithOrGreater

• `Optional` `Readonly` **nameStartsWithOrGreater**: `string`

Optional filter by items whose name is sorted equally or greater than a given input string.

**`memberof`** StudiosApiGetStudios

#### Defined in

[generated-client/api/studios-api.ts:414](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/studios-api.ts#L414)

___

### parentId

• `Optional` `Readonly` **parentId**: `string`

Specify this to localize the search to a specific item or folder. Omit to use the root.

**`memberof`** StudiosApiGetStudios

#### Defined in

[generated-client/api/studios-api.ts:351](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/studios-api.ts#L351)

___

### searchTerm

• `Optional` `Readonly` **searchTerm**: `string`

Optional. Search term.

**`memberof`** StudiosApiGetStudios

#### Defined in

[generated-client/api/studios-api.ts:344](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/studios-api.ts#L344)

___

### startIndex

• `Optional` `Readonly` **startIndex**: `number`

Optional. The record index to start at. All items with a lower index will be dropped from the results.

**`memberof`** StudiosApiGetStudios

#### Defined in

[generated-client/api/studios-api.ts:330](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/studios-api.ts#L330)

___

### userId

• `Optional` `Readonly` **userId**: `string`

User id.

**`memberof`** StudiosApiGetStudios

#### Defined in

[generated-client/api/studios-api.ts:407](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/studios-api.ts#L407)
