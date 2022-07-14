[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / InstantMixApiGetInstantMixFromAlbumRequest

# Interface: InstantMixApiGetInstantMixFromAlbumRequest

[generated-client](../modules/generated_client.md).InstantMixApiGetInstantMixFromAlbumRequest

Request parameters for getInstantMixFromAlbum operation in InstantMixApi.

**`export`**

**`interface`** InstantMixApiGetInstantMixFromAlbumRequest

## Table of contents

### Properties

- [enableImageTypes](generated_client.InstantMixApiGetInstantMixFromAlbumRequest.md#enableimagetypes)
- [enableImages](generated_client.InstantMixApiGetInstantMixFromAlbumRequest.md#enableimages)
- [enableUserData](generated_client.InstantMixApiGetInstantMixFromAlbumRequest.md#enableuserdata)
- [fields](generated_client.InstantMixApiGetInstantMixFromAlbumRequest.md#fields)
- [id](generated_client.InstantMixApiGetInstantMixFromAlbumRequest.md#id)
- [imageTypeLimit](generated_client.InstantMixApiGetInstantMixFromAlbumRequest.md#imagetypelimit)
- [limit](generated_client.InstantMixApiGetInstantMixFromAlbumRequest.md#limit)
- [userId](generated_client.InstantMixApiGetInstantMixFromAlbumRequest.md#userid)

## Properties

### enableImageTypes

• `Optional` `Readonly` **enableImageTypes**: [`ImageType`](../enums/generated_client.ImageType.md)[]

Optional. The image types to include in the output.

**`memberof`** InstantMixApiGetInstantMixFromAlbum

#### Defined in

[generated-client/api/instant-mix-api.ts:983](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/instant-mix-api.ts#L983)

___

### enableImages

• `Optional` `Readonly` **enableImages**: `boolean`

Optional. Include image information in output.

**`memberof`** InstantMixApiGetInstantMixFromAlbum

#### Defined in

[generated-client/api/instant-mix-api.ts:962](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/instant-mix-api.ts#L962)

___

### enableUserData

• `Optional` `Readonly` **enableUserData**: `boolean`

Optional. Include user data.

**`memberof`** InstantMixApiGetInstantMixFromAlbum

#### Defined in

[generated-client/api/instant-mix-api.ts:969](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/instant-mix-api.ts#L969)

___

### fields

• `Optional` `Readonly` **fields**: [`ItemFields`](../enums/generated_client.ItemFields.md)[]

Optional. Specify additional fields of information to return in the output.

**`memberof`** InstantMixApiGetInstantMixFromAlbum

#### Defined in

[generated-client/api/instant-mix-api.ts:955](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/instant-mix-api.ts#L955)

___

### id

• `Readonly` **id**: `string`

The item id.

**`memberof`** InstantMixApiGetInstantMixFromAlbum

#### Defined in

[generated-client/api/instant-mix-api.ts:934](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/instant-mix-api.ts#L934)

___

### imageTypeLimit

• `Optional` `Readonly` **imageTypeLimit**: `number`

Optional. The max number of images to return, per image type.

**`memberof`** InstantMixApiGetInstantMixFromAlbum

#### Defined in

[generated-client/api/instant-mix-api.ts:976](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/instant-mix-api.ts#L976)

___

### limit

• `Optional` `Readonly` **limit**: `number`

Optional. The maximum number of records to return.

**`memberof`** InstantMixApiGetInstantMixFromAlbum

#### Defined in

[generated-client/api/instant-mix-api.ts:948](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/instant-mix-api.ts#L948)

___

### userId

• `Optional` `Readonly` **userId**: `string`

Optional. Filter by user id, and attach user data.

**`memberof`** InstantMixApiGetInstantMixFromAlbum

#### Defined in

[generated-client/api/instant-mix-api.ts:941](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/instant-mix-api.ts#L941)
