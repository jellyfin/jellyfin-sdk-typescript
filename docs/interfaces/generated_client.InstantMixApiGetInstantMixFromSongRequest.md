[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / InstantMixApiGetInstantMixFromSongRequest

# Interface: InstantMixApiGetInstantMixFromSongRequest

[generated-client](../modules/generated_client.md).InstantMixApiGetInstantMixFromSongRequest

Request parameters for getInstantMixFromSong operation in InstantMixApi.

**`export`**

**`interface`** InstantMixApiGetInstantMixFromSongRequest

## Table of contents

### Properties

- [enableImageTypes](generated_client.InstantMixApiGetInstantMixFromSongRequest.md#enableimagetypes)
- [enableImages](generated_client.InstantMixApiGetInstantMixFromSongRequest.md#enableimages)
- [enableUserData](generated_client.InstantMixApiGetInstantMixFromSongRequest.md#enableuserdata)
- [fields](generated_client.InstantMixApiGetInstantMixFromSongRequest.md#fields)
- [id](generated_client.InstantMixApiGetInstantMixFromSongRequest.md#id)
- [imageTypeLimit](generated_client.InstantMixApiGetInstantMixFromSongRequest.md#imagetypelimit)
- [limit](generated_client.InstantMixApiGetInstantMixFromSongRequest.md#limit)
- [userId](generated_client.InstantMixApiGetInstantMixFromSongRequest.md#userid)

## Properties

### enableImageTypes

• `Optional` `Readonly` **enableImageTypes**: [`ImageType`](../enums/generated_client.ImageType.md)[]

Optional. The image types to include in the output.

**`memberof`** InstantMixApiGetInstantMixFromSong

#### Defined in

[generated-client/api/instant-mix-api.ts:1424](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/instant-mix-api.ts#L1424)

___

### enableImages

• `Optional` `Readonly` **enableImages**: `boolean`

Optional. Include image information in output.

**`memberof`** InstantMixApiGetInstantMixFromSong

#### Defined in

[generated-client/api/instant-mix-api.ts:1403](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/instant-mix-api.ts#L1403)

___

### enableUserData

• `Optional` `Readonly` **enableUserData**: `boolean`

Optional. Include user data.

**`memberof`** InstantMixApiGetInstantMixFromSong

#### Defined in

[generated-client/api/instant-mix-api.ts:1410](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/instant-mix-api.ts#L1410)

___

### fields

• `Optional` `Readonly` **fields**: [`ItemFields`](../enums/generated_client.ItemFields.md)[]

Optional. Specify additional fields of information to return in the output.

**`memberof`** InstantMixApiGetInstantMixFromSong

#### Defined in

[generated-client/api/instant-mix-api.ts:1396](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/instant-mix-api.ts#L1396)

___

### id

• `Readonly` **id**: `string`

The item id.

**`memberof`** InstantMixApiGetInstantMixFromSong

#### Defined in

[generated-client/api/instant-mix-api.ts:1375](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/instant-mix-api.ts#L1375)

___

### imageTypeLimit

• `Optional` `Readonly` **imageTypeLimit**: `number`

Optional. The max number of images to return, per image type.

**`memberof`** InstantMixApiGetInstantMixFromSong

#### Defined in

[generated-client/api/instant-mix-api.ts:1417](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/instant-mix-api.ts#L1417)

___

### limit

• `Optional` `Readonly` **limit**: `number`

Optional. The maximum number of records to return.

**`memberof`** InstantMixApiGetInstantMixFromSong

#### Defined in

[generated-client/api/instant-mix-api.ts:1389](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/instant-mix-api.ts#L1389)

___

### userId

• `Optional` `Readonly` **userId**: `string`

Optional. Filter by user id, and attach user data.

**`memberof`** InstantMixApiGetInstantMixFromSong

#### Defined in

[generated-client/api/instant-mix-api.ts:1382](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/instant-mix-api.ts#L1382)
