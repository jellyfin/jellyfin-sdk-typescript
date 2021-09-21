[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / PersonsApiGetPersonsRequest

# Interface: PersonsApiGetPersonsRequest

[generated-client](../modules/generated_client.md).PersonsApiGetPersonsRequest

Request parameters for getPersons operation in PersonsApi.

**`export`**

**`interface`** PersonsApiGetPersonsRequest

## Table of contents

### Properties

- [appearsInItemId](generated_client.PersonsApiGetPersonsRequest.md#appearsinitemid)
- [enableImageTypes](generated_client.PersonsApiGetPersonsRequest.md#enableimagetypes)
- [enableImages](generated_client.PersonsApiGetPersonsRequest.md#enableimages)
- [enableUserData](generated_client.PersonsApiGetPersonsRequest.md#enableuserdata)
- [excludePersonTypes](generated_client.PersonsApiGetPersonsRequest.md#excludepersontypes)
- [fields](generated_client.PersonsApiGetPersonsRequest.md#fields)
- [filters](generated_client.PersonsApiGetPersonsRequest.md#filters)
- [imageTypeLimit](generated_client.PersonsApiGetPersonsRequest.md#imagetypelimit)
- [isFavorite](generated_client.PersonsApiGetPersonsRequest.md#isfavorite)
- [limit](generated_client.PersonsApiGetPersonsRequest.md#limit)
- [personTypes](generated_client.PersonsApiGetPersonsRequest.md#persontypes)
- [searchTerm](generated_client.PersonsApiGetPersonsRequest.md#searchterm)
- [userId](generated_client.PersonsApiGetPersonsRequest.md#userid)

## Properties

### appearsInItemId

• `Optional` `Readonly` **appearsInItemId**: `string`

Optional. If specified, person results will be filtered on items related to said persons.

**`memberof`** PersonsApiGetPersons

#### Defined in

[generated-client/api/persons-api.ts:374](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/persons-api.ts#L374)

___

### enableImageTypes

• `Optional` `Readonly` **enableImageTypes**: [`ImageType`](../enums/generated_client.ImageType.md)[]

Optional. The image types to include in the output.

**`memberof`** PersonsApiGetPersons

#### Defined in

[generated-client/api/persons-api.ts:353](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/persons-api.ts#L353)

___

### enableImages

• `Optional` `Readonly` **enableImages**: `boolean`

Optional, include image information in output.

**`memberof`** PersonsApiGetPersons

#### Defined in

[generated-client/api/persons-api.ts:388](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/persons-api.ts#L388)

___

### enableUserData

• `Optional` `Readonly` **enableUserData**: `boolean`

Optional, include user data.

**`memberof`** PersonsApiGetPersons

#### Defined in

[generated-client/api/persons-api.ts:339](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/persons-api.ts#L339)

___

### excludePersonTypes

• `Optional` `Readonly` **excludePersonTypes**: `string`[]

Optional. If specified results will be filtered to exclude those containing the specified PersonType. Allows multiple, comma-delimited.

**`memberof`** PersonsApiGetPersons

#### Defined in

[generated-client/api/persons-api.ts:360](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/persons-api.ts#L360)

___

### fields

• `Optional` `Readonly` **fields**: [`ItemFields`](../enums/generated_client.ItemFields.md)[]

Optional. Specify additional fields of information to return in the output.

**`memberof`** PersonsApiGetPersons

#### Defined in

[generated-client/api/persons-api.ts:318](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/persons-api.ts#L318)

___

### filters

• `Optional` `Readonly` **filters**: [`ItemFilter`](../enums/generated_client.ItemFilter.md)[]

Optional. Specify additional filters to apply.

**`memberof`** PersonsApiGetPersons

#### Defined in

[generated-client/api/persons-api.ts:325](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/persons-api.ts#L325)

___

### imageTypeLimit

• `Optional` `Readonly` **imageTypeLimit**: `number`

Optional, the max number of images to return, per image type.

**`memberof`** PersonsApiGetPersons

#### Defined in

[generated-client/api/persons-api.ts:346](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/persons-api.ts#L346)

___

### isFavorite

• `Optional` `Readonly` **isFavorite**: `boolean`

Optional filter by items that are marked as favorite, or not. userId is required.

**`memberof`** PersonsApiGetPersons

#### Defined in

[generated-client/api/persons-api.ts:332](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/persons-api.ts#L332)

___

### limit

• `Optional` `Readonly` **limit**: `number`

Optional. The maximum number of records to return.

**`memberof`** PersonsApiGetPersons

#### Defined in

[generated-client/api/persons-api.ts:304](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/persons-api.ts#L304)

___

### personTypes

• `Optional` `Readonly` **personTypes**: `string`[]

Optional. If specified results will be filtered to include only those containing the specified PersonType. Allows multiple, comma-delimited.

**`memberof`** PersonsApiGetPersons

#### Defined in

[generated-client/api/persons-api.ts:367](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/persons-api.ts#L367)

___

### searchTerm

• `Optional` `Readonly` **searchTerm**: `string`

The search term.

**`memberof`** PersonsApiGetPersons

#### Defined in

[generated-client/api/persons-api.ts:311](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/persons-api.ts#L311)

___

### userId

• `Optional` `Readonly` **userId**: `string`

User id.

**`memberof`** PersonsApiGetPersons

#### Defined in

[generated-client/api/persons-api.ts:381](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/persons-api.ts#L381)
