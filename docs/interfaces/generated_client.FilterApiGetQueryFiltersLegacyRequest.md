[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / FilterApiGetQueryFiltersLegacyRequest

# Interface: FilterApiGetQueryFiltersLegacyRequest

[generated-client](../modules/generated_client.md).FilterApiGetQueryFiltersLegacyRequest

Request parameters for getQueryFiltersLegacy operation in FilterApi.

**`export`**

**`interface`** FilterApiGetQueryFiltersLegacyRequest

## Table of contents

### Properties

- [includeItemTypes](generated_client.FilterApiGetQueryFiltersLegacyRequest.md#includeitemtypes)
- [mediaTypes](generated_client.FilterApiGetQueryFiltersLegacyRequest.md#mediatypes)
- [parentId](generated_client.FilterApiGetQueryFiltersLegacyRequest.md#parentid)
- [userId](generated_client.FilterApiGetQueryFiltersLegacyRequest.md#userid)

## Properties

### includeItemTypes

• `Optional` `Readonly` **includeItemTypes**: `string`[]

Optional. If specified, results will be filtered based on item type. This allows multiple, comma delimited.

**`memberof`** FilterApiGetQueryFiltersLegacy

#### Defined in

[generated-client/api/filter-api.ts:360](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/filter-api.ts#L360)

___

### mediaTypes

• `Optional` `Readonly` **mediaTypes**: `string`[]

Optional. Filter by MediaType. Allows multiple, comma delimited.

**`memberof`** FilterApiGetQueryFiltersLegacy

#### Defined in

[generated-client/api/filter-api.ts:367](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/filter-api.ts#L367)

___

### parentId

• `Optional` `Readonly` **parentId**: `string`

Optional. Parent id.

**`memberof`** FilterApiGetQueryFiltersLegacy

#### Defined in

[generated-client/api/filter-api.ts:353](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/filter-api.ts#L353)

___

### userId

• `Optional` `Readonly` **userId**: `string`

Optional. User id.

**`memberof`** FilterApiGetQueryFiltersLegacy

#### Defined in

[generated-client/api/filter-api.ts:346](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/filter-api.ts#L346)
