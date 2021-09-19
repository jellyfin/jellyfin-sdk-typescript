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

[generated-client/api/instant-mix-api.ts:1093](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/api/instant-mix-api.ts#L1093)

___

### enableImages

• `Optional` `Readonly` **enableImages**: `boolean`

Optional. Include image information in output.

**`memberof`** InstantMixApiGetInstantMixFromAlbum

#### Defined in

[generated-client/api/instant-mix-api.ts:1072](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/api/instant-mix-api.ts#L1072)

___

### enableUserData

• `Optional` `Readonly` **enableUserData**: `boolean`

Optional. Include user data.

**`memberof`** InstantMixApiGetInstantMixFromAlbum

#### Defined in

[generated-client/api/instant-mix-api.ts:1079](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/api/instant-mix-api.ts#L1079)

___

### fields

• `Optional` `Readonly` **fields**: [`ItemFields`](../enums/generated_client.ItemFields.md)[]

Optional. Specify additional fields of information to return in the output.

**`memberof`** InstantMixApiGetInstantMixFromAlbum

#### Defined in

[generated-client/api/instant-mix-api.ts:1065](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/api/instant-mix-api.ts#L1065)

___

### id

• `Readonly` **id**: `string`

The item id.

**`memberof`** InstantMixApiGetInstantMixFromAlbum

#### Defined in

[generated-client/api/instant-mix-api.ts:1044](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/api/instant-mix-api.ts#L1044)

___

### imageTypeLimit

• `Optional` `Readonly` **imageTypeLimit**: `number`

Optional. The max number of images to return, per image type.

**`memberof`** InstantMixApiGetInstantMixFromAlbum

#### Defined in

[generated-client/api/instant-mix-api.ts:1086](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/api/instant-mix-api.ts#L1086)

___

### limit

• `Optional` `Readonly` **limit**: `number`

Optional. The maximum number of records to return.

**`memberof`** InstantMixApiGetInstantMixFromAlbum

#### Defined in

[generated-client/api/instant-mix-api.ts:1058](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/api/instant-mix-api.ts#L1058)

___

### userId

• `Optional` `Readonly` **userId**: `string`

Optional. Filter by user id, and attach user data.

**`memberof`** InstantMixApiGetInstantMixFromAlbum

#### Defined in

[generated-client/api/instant-mix-api.ts:1051](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/api/instant-mix-api.ts#L1051)
