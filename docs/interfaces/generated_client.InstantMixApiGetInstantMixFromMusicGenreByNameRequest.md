[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / InstantMixApiGetInstantMixFromMusicGenreByNameRequest

# Interface: InstantMixApiGetInstantMixFromMusicGenreByNameRequest

[generated-client](../modules/generated_client.md).InstantMixApiGetInstantMixFromMusicGenreByNameRequest

Request parameters for getInstantMixFromMusicGenreByName operation in InstantMixApi.

**`export`**

**`interface`** InstantMixApiGetInstantMixFromMusicGenreByNameRequest

## Table of contents

### Properties

- [enableImageTypes](generated_client.InstantMixApiGetInstantMixFromMusicGenreByNameRequest.md#enableimagetypes)
- [enableImages](generated_client.InstantMixApiGetInstantMixFromMusicGenreByNameRequest.md#enableimages)
- [enableUserData](generated_client.InstantMixApiGetInstantMixFromMusicGenreByNameRequest.md#enableuserdata)
- [fields](generated_client.InstantMixApiGetInstantMixFromMusicGenreByNameRequest.md#fields)
- [imageTypeLimit](generated_client.InstantMixApiGetInstantMixFromMusicGenreByNameRequest.md#imagetypelimit)
- [limit](generated_client.InstantMixApiGetInstantMixFromMusicGenreByNameRequest.md#limit)
- [name](generated_client.InstantMixApiGetInstantMixFromMusicGenreByNameRequest.md#name)
- [userId](generated_client.InstantMixApiGetInstantMixFromMusicGenreByNameRequest.md#userid)

## Properties

### enableImageTypes

• `Optional` `Readonly` **enableImageTypes**: [`ImageType`](../enums/generated_client.ImageType.md)[]

Optional. The image types to include in the output.

**`memberof`** InstantMixApiGetInstantMixFromMusicGenreByName

#### Defined in

[generated-client/api/instant-mix-api.ts:1298](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/instant-mix-api.ts#L1298)

___

### enableImages

• `Optional` `Readonly` **enableImages**: `boolean`

Optional. Include image information in output.

**`memberof`** InstantMixApiGetInstantMixFromMusicGenreByName

#### Defined in

[generated-client/api/instant-mix-api.ts:1277](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/instant-mix-api.ts#L1277)

___

### enableUserData

• `Optional` `Readonly` **enableUserData**: `boolean`

Optional. Include user data.

**`memberof`** InstantMixApiGetInstantMixFromMusicGenreByName

#### Defined in

[generated-client/api/instant-mix-api.ts:1284](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/instant-mix-api.ts#L1284)

___

### fields

• `Optional` `Readonly` **fields**: [`ItemFields`](../enums/generated_client.ItemFields.md)[]

Optional. Specify additional fields of information to return in the output.

**`memberof`** InstantMixApiGetInstantMixFromMusicGenreByName

#### Defined in

[generated-client/api/instant-mix-api.ts:1270](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/instant-mix-api.ts#L1270)

___

### imageTypeLimit

• `Optional` `Readonly` **imageTypeLimit**: `number`

Optional. The max number of images to return, per image type.

**`memberof`** InstantMixApiGetInstantMixFromMusicGenreByName

#### Defined in

[generated-client/api/instant-mix-api.ts:1291](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/instant-mix-api.ts#L1291)

___

### limit

• `Optional` `Readonly` **limit**: `number`

Optional. The maximum number of records to return.

**`memberof`** InstantMixApiGetInstantMixFromMusicGenreByName

#### Defined in

[generated-client/api/instant-mix-api.ts:1263](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/instant-mix-api.ts#L1263)

___

### name

• `Readonly` **name**: `string`

The genre name.

**`memberof`** InstantMixApiGetInstantMixFromMusicGenreByName

#### Defined in

[generated-client/api/instant-mix-api.ts:1249](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/instant-mix-api.ts#L1249)

___

### userId

• `Optional` `Readonly` **userId**: `string`

Optional. Filter by user id, and attach user data.

**`memberof`** InstantMixApiGetInstantMixFromMusicGenreByName

#### Defined in

[generated-client/api/instant-mix-api.ts:1256](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/instant-mix-api.ts#L1256)
