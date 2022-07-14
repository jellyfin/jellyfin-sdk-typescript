[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / YearsApiGetYearsRequest

# Interface: YearsApiGetYearsRequest

[generated-client](../modules/generated_client.md).YearsApiGetYearsRequest

Request parameters for getYears operation in YearsApi.

**`export`**

**`interface`** YearsApiGetYearsRequest

## Table of contents

### Properties

- [enableImageTypes](generated_client.YearsApiGetYearsRequest.md#enableimagetypes)
- [enableImages](generated_client.YearsApiGetYearsRequest.md#enableimages)
- [enableUserData](generated_client.YearsApiGetYearsRequest.md#enableuserdata)
- [excludeItemTypes](generated_client.YearsApiGetYearsRequest.md#excludeitemtypes)
- [fields](generated_client.YearsApiGetYearsRequest.md#fields)
- [imageTypeLimit](generated_client.YearsApiGetYearsRequest.md#imagetypelimit)
- [includeItemTypes](generated_client.YearsApiGetYearsRequest.md#includeitemtypes)
- [limit](generated_client.YearsApiGetYearsRequest.md#limit)
- [mediaTypes](generated_client.YearsApiGetYearsRequest.md#mediatypes)
- [parentId](generated_client.YearsApiGetYearsRequest.md#parentid)
- [recursive](generated_client.YearsApiGetYearsRequest.md#recursive)
- [sortBy](generated_client.YearsApiGetYearsRequest.md#sortby)
- [sortOrder](generated_client.YearsApiGetYearsRequest.md#sortorder)
- [startIndex](generated_client.YearsApiGetYearsRequest.md#startindex)
- [userId](generated_client.YearsApiGetYearsRequest.md#userid)

## Properties

### enableImageTypes

• `Optional` `Readonly` **enableImageTypes**: [`ImageType`](../enums/generated_client.ImageType.md)[]

Optional. The image types to include in the output.

**`memberof`** YearsApiGetYears

#### Defined in

[generated-client/api/years-api.ts:397](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/years-api.ts#L397)

___

### enableImages

• `Optional` `Readonly` **enableImages**: `boolean`

Optional. Include image information in output.

**`memberof`** YearsApiGetYears

#### Defined in

[generated-client/api/years-api.ts:418](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/years-api.ts#L418)

___

### enableUserData

• `Optional` `Readonly` **enableUserData**: `boolean`

Optional. Include user data.

**`memberof`** YearsApiGetYears

#### Defined in

[generated-client/api/years-api.ts:383](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/years-api.ts#L383)

___

### excludeItemTypes

• `Optional` `Readonly` **excludeItemTypes**: [`BaseItemKind`](../enums/generated_client.BaseItemKind.md)[]

Optional. If specified, results will be excluded based on item type. This allows multiple, comma delimited.

**`memberof`** YearsApiGetYears

#### Defined in

[generated-client/api/years-api.ts:355](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/years-api.ts#L355)

___

### fields

• `Optional` `Readonly` **fields**: [`ItemFields`](../enums/generated_client.ItemFields.md)[]

Optional. Specify additional fields of information to return in the output.

**`memberof`** YearsApiGetYears

#### Defined in

[generated-client/api/years-api.ts:348](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/years-api.ts#L348)

___

### imageTypeLimit

• `Optional` `Readonly` **imageTypeLimit**: `number`

Optional. The max number of images to return, per image type.

**`memberof`** YearsApiGetYears

#### Defined in

[generated-client/api/years-api.ts:390](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/years-api.ts#L390)

___

### includeItemTypes

• `Optional` `Readonly` **includeItemTypes**: [`BaseItemKind`](../enums/generated_client.BaseItemKind.md)[]

Optional. If specified, results will be included based on item type. This allows multiple, comma delimited.

**`memberof`** YearsApiGetYears

#### Defined in

[generated-client/api/years-api.ts:362](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/years-api.ts#L362)

___

### limit

• `Optional` `Readonly` **limit**: `number`

Optional. The maximum number of records to return.

**`memberof`** YearsApiGetYears

#### Defined in

[generated-client/api/years-api.ts:327](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/years-api.ts#L327)

___

### mediaTypes

• `Optional` `Readonly` **mediaTypes**: `string`[]

Optional. Filter by MediaType. Allows multiple, comma delimited.

**`memberof`** YearsApiGetYears

#### Defined in

[generated-client/api/years-api.ts:369](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/years-api.ts#L369)

___

### parentId

• `Optional` `Readonly` **parentId**: `string`

Specify this to localize the search to a specific item or folder. Omit to use the root.

**`memberof`** YearsApiGetYears

#### Defined in

[generated-client/api/years-api.ts:341](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/years-api.ts#L341)

___

### recursive

• `Optional` `Readonly` **recursive**: `boolean`

Search recursively.

**`memberof`** YearsApiGetYears

#### Defined in

[generated-client/api/years-api.ts:411](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/years-api.ts#L411)

___

### sortBy

• `Optional` `Readonly` **sortBy**: `string`[]

Optional. Specify one or more sort orders, comma delimited. Options: Album, AlbumArtist, Artist, Budget, CommunityRating, CriticRating, DateCreated, DatePlayed, PlayCount, PremiereDate, ProductionYear, SortName, Random, Revenue, Runtime.

**`memberof`** YearsApiGetYears

#### Defined in

[generated-client/api/years-api.ts:376](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/years-api.ts#L376)

___

### sortOrder

• `Optional` `Readonly` **sortOrder**: [`SortOrder`](../enums/generated_client.SortOrder.md)[]

Sort Order - Ascending,Descending.

**`memberof`** YearsApiGetYears

#### Defined in

[generated-client/api/years-api.ts:334](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/years-api.ts#L334)

___

### startIndex

• `Optional` `Readonly` **startIndex**: `number`

Skips over a given number of items within the results. Use for paging.

**`memberof`** YearsApiGetYears

#### Defined in

[generated-client/api/years-api.ts:320](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/years-api.ts#L320)

___

### userId

• `Optional` `Readonly` **userId**: `string`

User Id.

**`memberof`** YearsApiGetYears

#### Defined in

[generated-client/api/years-api.ts:404](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/years-api.ts#L404)
