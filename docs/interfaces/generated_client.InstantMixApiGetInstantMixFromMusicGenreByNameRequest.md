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

[generated-client/api/instant-mix-api.ts:1471](https://github.com/thornbill/jellyfin-sdk-typescript/blob/21a118e/src/generated-client/api/instant-mix-api.ts#L1471)

___

### enableImages

• `Optional` `Readonly` **enableImages**: `boolean`

Optional. Include image information in output.

**`memberof`** InstantMixApiGetInstantMixFromMusicGenreByName

#### Defined in

[generated-client/api/instant-mix-api.ts:1450](https://github.com/thornbill/jellyfin-sdk-typescript/blob/21a118e/src/generated-client/api/instant-mix-api.ts#L1450)

___

### enableUserData

• `Optional` `Readonly` **enableUserData**: `boolean`

Optional. Include user data.

**`memberof`** InstantMixApiGetInstantMixFromMusicGenreByName

#### Defined in

[generated-client/api/instant-mix-api.ts:1457](https://github.com/thornbill/jellyfin-sdk-typescript/blob/21a118e/src/generated-client/api/instant-mix-api.ts#L1457)

___

### fields

• `Optional` `Readonly` **fields**: [`ItemFields`](../enums/generated_client.ItemFields.md)[]

Optional. Specify additional fields of information to return in the output.

**`memberof`** InstantMixApiGetInstantMixFromMusicGenreByName

#### Defined in

[generated-client/api/instant-mix-api.ts:1443](https://github.com/thornbill/jellyfin-sdk-typescript/blob/21a118e/src/generated-client/api/instant-mix-api.ts#L1443)

___

### imageTypeLimit

• `Optional` `Readonly` **imageTypeLimit**: `number`

Optional. The max number of images to return, per image type.

**`memberof`** InstantMixApiGetInstantMixFromMusicGenreByName

#### Defined in

[generated-client/api/instant-mix-api.ts:1464](https://github.com/thornbill/jellyfin-sdk-typescript/blob/21a118e/src/generated-client/api/instant-mix-api.ts#L1464)

___

### limit

• `Optional` `Readonly` **limit**: `number`

Optional. The maximum number of records to return.

**`memberof`** InstantMixApiGetInstantMixFromMusicGenreByName

#### Defined in

[generated-client/api/instant-mix-api.ts:1436](https://github.com/thornbill/jellyfin-sdk-typescript/blob/21a118e/src/generated-client/api/instant-mix-api.ts#L1436)

___

### name

• `Readonly` **name**: `string`

The genre name.

**`memberof`** InstantMixApiGetInstantMixFromMusicGenreByName

#### Defined in

[generated-client/api/instant-mix-api.ts:1422](https://github.com/thornbill/jellyfin-sdk-typescript/blob/21a118e/src/generated-client/api/instant-mix-api.ts#L1422)

___

### userId

• `Optional` `Readonly` **userId**: `string`

Optional. Filter by user id, and attach user data.

**`memberof`** InstantMixApiGetInstantMixFromMusicGenreByName

#### Defined in

[generated-client/api/instant-mix-api.ts:1429](https://github.com/thornbill/jellyfin-sdk-typescript/blob/21a118e/src/generated-client/api/instant-mix-api.ts#L1429)
