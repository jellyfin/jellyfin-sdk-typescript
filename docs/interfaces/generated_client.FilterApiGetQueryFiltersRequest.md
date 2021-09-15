[jellyfin-sdk-typescript](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / FilterApiGetQueryFiltersRequest

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

• `Optional` `Readonly` **includeItemTypes**: `string`[]

Optional. If specified, results will be filtered based on item type. This allows multiple, comma delimited.

**`memberof`** FilterApiGetQueryFilters

#### Defined in

[generated-client/api/filter-api.ts:283](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/filter-api.ts#L283)

___

### isAiring

• `Optional` `Readonly` **isAiring**: `boolean`

Optional. Is item airing.

**`memberof`** FilterApiGetQueryFilters

#### Defined in

[generated-client/api/filter-api.ts:290](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/filter-api.ts#L290)

___

### isKids

• `Optional` `Readonly` **isKids**: `boolean`

Optional. Is item kids.

**`memberof`** FilterApiGetQueryFilters

#### Defined in

[generated-client/api/filter-api.ts:311](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/filter-api.ts#L311)

___

### isMovie

• `Optional` `Readonly` **isMovie**: `boolean`

Optional. Is item movie.

**`memberof`** FilterApiGetQueryFilters

#### Defined in

[generated-client/api/filter-api.ts:297](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/filter-api.ts#L297)

___

### isNews

• `Optional` `Readonly` **isNews**: `boolean`

Optional. Is item news.

**`memberof`** FilterApiGetQueryFilters

#### Defined in

[generated-client/api/filter-api.ts:318](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/filter-api.ts#L318)

___

### isSeries

• `Optional` `Readonly` **isSeries**: `boolean`

Optional. Is item series.

**`memberof`** FilterApiGetQueryFilters

#### Defined in

[generated-client/api/filter-api.ts:325](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/filter-api.ts#L325)

___

### isSports

• `Optional` `Readonly` **isSports**: `boolean`

Optional. Is item sports.

**`memberof`** FilterApiGetQueryFilters

#### Defined in

[generated-client/api/filter-api.ts:304](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/filter-api.ts#L304)

___

### parentId

• `Optional` `Readonly` **parentId**: `string`

Optional. Specify this to localize the search to a specific item or folder. Omit to use the root.

**`memberof`** FilterApiGetQueryFilters

#### Defined in

[generated-client/api/filter-api.ts:276](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/filter-api.ts#L276)

___

### recursive

• `Optional` `Readonly` **recursive**: `boolean`

Optional. Search recursive.

**`memberof`** FilterApiGetQueryFilters

#### Defined in

[generated-client/api/filter-api.ts:332](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/filter-api.ts#L332)

___

### userId

• `Optional` `Readonly` **userId**: `string`

Optional. User id.

**`memberof`** FilterApiGetQueryFilters

#### Defined in

[generated-client/api/filter-api.ts:269](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/filter-api.ts#L269)
