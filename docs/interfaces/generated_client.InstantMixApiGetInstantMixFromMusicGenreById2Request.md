[jellyfin-sdk-typescript](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / InstantMixApiGetInstantMixFromMusicGenreById2Request

# Interface: InstantMixApiGetInstantMixFromMusicGenreById2Request

[generated-client](../modules/generated_client.md).InstantMixApiGetInstantMixFromMusicGenreById2Request

Request parameters for getInstantMixFromMusicGenreById2 operation in InstantMixApi.

**`export`**

**`interface`** InstantMixApiGetInstantMixFromMusicGenreById2Request

## Table of contents

### Properties

- [enableImageTypes](generated_client.InstantMixApiGetInstantMixFromMusicGenreById2Request.md#enableimagetypes)
- [enableImages](generated_client.InstantMixApiGetInstantMixFromMusicGenreById2Request.md#enableimages)
- [enableUserData](generated_client.InstantMixApiGetInstantMixFromMusicGenreById2Request.md#enableuserdata)
- [fields](generated_client.InstantMixApiGetInstantMixFromMusicGenreById2Request.md#fields)
- [id](generated_client.InstantMixApiGetInstantMixFromMusicGenreById2Request.md#id)
- [imageTypeLimit](generated_client.InstantMixApiGetInstantMixFromMusicGenreById2Request.md#imagetypelimit)
- [limit](generated_client.InstantMixApiGetInstantMixFromMusicGenreById2Request.md#limit)
- [userId](generated_client.InstantMixApiGetInstantMixFromMusicGenreById2Request.md#userid)

## Properties

### enableImageTypes

• `Optional` `Readonly` **enableImageTypes**: [`ImageType`](../enums/generated_client.ImageType.md)[]

Optional. The image types to include in the output.

**`memberof`** InstantMixApiGetInstantMixFromMusicGenreById2

#### Defined in

[generated-client/api/instant-mix-api.ts:1408](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/instant-mix-api.ts#L1408)

___

### enableImages

• `Optional` `Readonly` **enableImages**: `boolean`

Optional. Include image information in output.

**`memberof`** InstantMixApiGetInstantMixFromMusicGenreById2

#### Defined in

[generated-client/api/instant-mix-api.ts:1387](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/instant-mix-api.ts#L1387)

___

### enableUserData

• `Optional` `Readonly` **enableUserData**: `boolean`

Optional. Include user data.

**`memberof`** InstantMixApiGetInstantMixFromMusicGenreById2

#### Defined in

[generated-client/api/instant-mix-api.ts:1394](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/instant-mix-api.ts#L1394)

___

### fields

• `Optional` `Readonly` **fields**: [`ItemFields`](../enums/generated_client.ItemFields.md)[]

Optional. Specify additional fields of information to return in the output.

**`memberof`** InstantMixApiGetInstantMixFromMusicGenreById2

#### Defined in

[generated-client/api/instant-mix-api.ts:1380](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/instant-mix-api.ts#L1380)

___

### id

• `Readonly` **id**: `string`

The item id.

**`memberof`** InstantMixApiGetInstantMixFromMusicGenreById2

#### Defined in

[generated-client/api/instant-mix-api.ts:1359](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/instant-mix-api.ts#L1359)

___

### imageTypeLimit

• `Optional` `Readonly` **imageTypeLimit**: `number`

Optional. The max number of images to return, per image type.

**`memberof`** InstantMixApiGetInstantMixFromMusicGenreById2

#### Defined in

[generated-client/api/instant-mix-api.ts:1401](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/instant-mix-api.ts#L1401)

___

### limit

• `Optional` `Readonly` **limit**: `number`

Optional. The maximum number of records to return.

**`memberof`** InstantMixApiGetInstantMixFromMusicGenreById2

#### Defined in

[generated-client/api/instant-mix-api.ts:1373](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/instant-mix-api.ts#L1373)

___

### userId

• `Optional` `Readonly` **userId**: `string`

Optional. Filter by user id, and attach user data.

**`memberof`** InstantMixApiGetInstantMixFromMusicGenreById2

#### Defined in

[generated-client/api/instant-mix-api.ts:1366](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/instant-mix-api.ts#L1366)
