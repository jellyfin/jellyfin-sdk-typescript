[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / FilterApiGetQueryFiltersRequest

# Interface: FilterApiGetQueryFiltersRequest

[generated-client](../modules/generated_client.md).FilterApiGetQueryFiltersRequest

Request parameters for getQueryFilters operation in FilterApi.

**`export`**

**`interface`** FilterApiGetQueryFiltersRequest

## Table of contents

### Properties

- [includeItemTypes](generated_client.FilterApiGetQueryFiltersRequest.md#includeitemtypes)
- [isAiring](generated_client.FilterApiGetQueryFiltersRequest.md#isairing)
- [isKids](generated_client.FilterApiGetQueryFiltersRequest.md#iskids)
- [isMovie](generated_client.FilterApiGetQueryFiltersRequest.md#ismovie)
- [isNews](generated_client.FilterApiGetQueryFiltersRequest.md#isnews)
- [isSeries](generated_client.FilterApiGetQueryFiltersRequest.md#isseries)
- [isSports](generated_client.FilterApiGetQueryFiltersRequest.md#issports)
- [parentId](generated_client.FilterApiGetQueryFiltersRequest.md#parentid)
- [recursive](generated_client.FilterApiGetQueryFiltersRequest.md#recursive)
- [userId](generated_client.FilterApiGetQueryFiltersRequest.md#userid)

## Properties

### includeItemTypes

• `Optional` `Readonly` **includeItemTypes**: [`BaseItemKind`](../enums/generated_client.BaseItemKind.md)[]

Optional. If specified, results will be filtered based on item type. This allows multiple, comma delimited.

**`memberof`** FilterApiGetQueryFilters

#### Defined in

[generated-client/api/filter-api.ts:285](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/filter-api.ts#L285)

___

### isAiring

• `Optional` `Readonly` **isAiring**: `boolean`

Optional. Is item airing.

**`memberof`** FilterApiGetQueryFilters

#### Defined in

[generated-client/api/filter-api.ts:292](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/filter-api.ts#L292)

___

### isKids

• `Optional` `Readonly` **isKids**: `boolean`

Optional. Is item kids.

**`memberof`** FilterApiGetQueryFilters

#### Defined in

[generated-client/api/filter-api.ts:313](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/filter-api.ts#L313)

___

### isMovie

• `Optional` `Readonly` **isMovie**: `boolean`

Optional. Is item movie.

**`memberof`** FilterApiGetQueryFilters

#### Defined in

[generated-client/api/filter-api.ts:299](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/filter-api.ts#L299)

___

### isNews

• `Optional` `Readonly` **isNews**: `boolean`

Optional. Is item news.

**`memberof`** FilterApiGetQueryFilters

#### Defined in

[generated-client/api/filter-api.ts:320](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/filter-api.ts#L320)

___

### isSeries

• `Optional` `Readonly` **isSeries**: `boolean`

Optional. Is item series.

**`memberof`** FilterApiGetQueryFilters

#### Defined in

[generated-client/api/filter-api.ts:327](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/filter-api.ts#L327)

___

### isSports

• `Optional` `Readonly` **isSports**: `boolean`

Optional. Is item sports.

**`memberof`** FilterApiGetQueryFilters

#### Defined in

[generated-client/api/filter-api.ts:306](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/filter-api.ts#L306)

___

### parentId

• `Optional` `Readonly` **parentId**: `string`

Optional. Specify this to localize the search to a specific item or folder. Omit to use the root.

**`memberof`** FilterApiGetQueryFilters

#### Defined in

[generated-client/api/filter-api.ts:278](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/filter-api.ts#L278)

___

### recursive

• `Optional` `Readonly` **recursive**: `boolean`

Optional. Search recursive.

**`memberof`** FilterApiGetQueryFilters

#### Defined in

[generated-client/api/filter-api.ts:334](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/filter-api.ts#L334)

___

### userId

• `Optional` `Readonly` **userId**: `string`

Optional. User id.

**`memberof`** FilterApiGetQueryFilters

#### Defined in

[generated-client/api/filter-api.ts:271](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/filter-api.ts#L271)
