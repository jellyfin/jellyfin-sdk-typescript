[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / InstantMixApiGetInstantMixFromMusicGenreByIdRequest

# Interface: InstantMixApiGetInstantMixFromMusicGenreByIdRequest

[generated-client](../modules/generated_client.md).InstantMixApiGetInstantMixFromMusicGenreByIdRequest

Request parameters for getInstantMixFromMusicGenreById operation in InstantMixApi.

**`export`**

**`interface`** InstantMixApiGetInstantMixFromMusicGenreByIdRequest

## Table of contents

### Properties

- [enableImageTypes](generated_client.InstantMixApiGetInstantMixFromMusicGenreByIdRequest.md#enableimagetypes)
- [enableImages](generated_client.InstantMixApiGetInstantMixFromMusicGenreByIdRequest.md#enableimages)
- [enableUserData](generated_client.InstantMixApiGetInstantMixFromMusicGenreByIdRequest.md#enableuserdata)
- [fields](generated_client.InstantMixApiGetInstantMixFromMusicGenreByIdRequest.md#fields)
- [id](generated_client.InstantMixApiGetInstantMixFromMusicGenreByIdRequest.md#id)
- [imageTypeLimit](generated_client.InstantMixApiGetInstantMixFromMusicGenreByIdRequest.md#imagetypelimit)
- [limit](generated_client.InstantMixApiGetInstantMixFromMusicGenreByIdRequest.md#limit)
- [userId](generated_client.InstantMixApiGetInstantMixFromMusicGenreByIdRequest.md#userid)

## Properties

### enableImageTypes

• `Optional` `Readonly` **enableImageTypes**: [`ImageType`](../enums/generated_client.ImageType.md)[]

Optional. The image types to include in the output.

**`memberof`** InstantMixApiGetInstantMixFromMusicGenreById

#### Defined in

[generated-client/api/instant-mix-api.ts:1235](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/instant-mix-api.ts#L1235)

___

### enableImages

• `Optional` `Readonly` **enableImages**: `boolean`

Optional. Include image information in output.

**`memberof`** InstantMixApiGetInstantMixFromMusicGenreById

#### Defined in

[generated-client/api/instant-mix-api.ts:1214](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/instant-mix-api.ts#L1214)

___

### enableUserData

• `Optional` `Readonly` **enableUserData**: `boolean`

Optional. Include user data.

**`memberof`** InstantMixApiGetInstantMixFromMusicGenreById

#### Defined in

[generated-client/api/instant-mix-api.ts:1221](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/instant-mix-api.ts#L1221)

___

### fields

• `Optional` `Readonly` **fields**: [`ItemFields`](../enums/generated_client.ItemFields.md)[]

Optional. Specify additional fields of information to return in the output.

**`memberof`** InstantMixApiGetInstantMixFromMusicGenreById

#### Defined in

[generated-client/api/instant-mix-api.ts:1207](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/instant-mix-api.ts#L1207)

___

### id

• `Readonly` **id**: `string`

The item id.

**`memberof`** InstantMixApiGetInstantMixFromMusicGenreById

#### Defined in

[generated-client/api/instant-mix-api.ts:1186](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/instant-mix-api.ts#L1186)

___

### imageTypeLimit

• `Optional` `Readonly` **imageTypeLimit**: `number`

Optional. The max number of images to return, per image type.

**`memberof`** InstantMixApiGetInstantMixFromMusicGenreById

#### Defined in

[generated-client/api/instant-mix-api.ts:1228](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/instant-mix-api.ts#L1228)

___

### limit

• `Optional` `Readonly` **limit**: `number`

Optional. The maximum number of records to return.

**`memberof`** InstantMixApiGetInstantMixFromMusicGenreById

#### Defined in

[generated-client/api/instant-mix-api.ts:1200](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/instant-mix-api.ts#L1200)

___

### userId

• `Optional` `Readonly` **userId**: `string`

Optional. Filter by user id, and attach user data.

**`memberof`** InstantMixApiGetInstantMixFromMusicGenreById

#### Defined in

[generated-client/api/instant-mix-api.ts:1193](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/instant-mix-api.ts#L1193)
