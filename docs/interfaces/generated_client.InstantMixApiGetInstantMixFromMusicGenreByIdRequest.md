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

• `Optional` `Readonly` **enableImageTypes**: [`ImageType`](../enums/index.api.ImageType.md)[]

Optional. The image types to include in the output.

**`memberof`** InstantMixApiGetInstantMixFromMusicGenreById

#### Defined in

[generated-client/api/instant-mix-api.ts:1345](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/instant-mix-api.ts#L1345)

___

### enableImages

• `Optional` `Readonly` **enableImages**: `boolean`

Optional. Include image information in output.

**`memberof`** InstantMixApiGetInstantMixFromMusicGenreById

#### Defined in

[generated-client/api/instant-mix-api.ts:1324](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/instant-mix-api.ts#L1324)

___

### enableUserData

• `Optional` `Readonly` **enableUserData**: `boolean`

Optional. Include user data.

**`memberof`** InstantMixApiGetInstantMixFromMusicGenreById

#### Defined in

[generated-client/api/instant-mix-api.ts:1331](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/instant-mix-api.ts#L1331)

___

### fields

• `Optional` `Readonly` **fields**: [`ItemFields`](../enums/index.api.ItemFields.md)[]

Optional. Specify additional fields of information to return in the output.

**`memberof`** InstantMixApiGetInstantMixFromMusicGenreById

#### Defined in

[generated-client/api/instant-mix-api.ts:1317](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/instant-mix-api.ts#L1317)

___

### id

• `Readonly` **id**: `string`

The item id.

**`memberof`** InstantMixApiGetInstantMixFromMusicGenreById

#### Defined in

[generated-client/api/instant-mix-api.ts:1296](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/instant-mix-api.ts#L1296)

___

### imageTypeLimit

• `Optional` `Readonly` **imageTypeLimit**: `number`

Optional. The max number of images to return, per image type.

**`memberof`** InstantMixApiGetInstantMixFromMusicGenreById

#### Defined in

[generated-client/api/instant-mix-api.ts:1338](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/instant-mix-api.ts#L1338)

___

### limit

• `Optional` `Readonly` **limit**: `number`

Optional. The maximum number of records to return.

**`memberof`** InstantMixApiGetInstantMixFromMusicGenreById

#### Defined in

[generated-client/api/instant-mix-api.ts:1310](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/instant-mix-api.ts#L1310)

___

### userId

• `Optional` `Readonly` **userId**: `string`

Optional. Filter by user id, and attach user data.

**`memberof`** InstantMixApiGetInstantMixFromMusicGenreById

#### Defined in

[generated-client/api/instant-mix-api.ts:1303](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/instant-mix-api.ts#L1303)
