[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / InstantMixApiGetInstantMixFromPlaylistRequest

# Interface: InstantMixApiGetInstantMixFromPlaylistRequest

[generated-client](../modules/generated_client.md).InstantMixApiGetInstantMixFromPlaylistRequest

Request parameters for getInstantMixFromPlaylist operation in InstantMixApi.

**`export`**

**`interface`** InstantMixApiGetInstantMixFromPlaylistRequest

## Table of contents

### Properties

- [enableImageTypes](generated_client.InstantMixApiGetInstantMixFromPlaylistRequest.md#enableimagetypes)
- [enableImages](generated_client.InstantMixApiGetInstantMixFromPlaylistRequest.md#enableimages)
- [enableUserData](generated_client.InstantMixApiGetInstantMixFromPlaylistRequest.md#enableuserdata)
- [fields](generated_client.InstantMixApiGetInstantMixFromPlaylistRequest.md#fields)
- [id](generated_client.InstantMixApiGetInstantMixFromPlaylistRequest.md#id)
- [imageTypeLimit](generated_client.InstantMixApiGetInstantMixFromPlaylistRequest.md#imagetypelimit)
- [limit](generated_client.InstantMixApiGetInstantMixFromPlaylistRequest.md#limit)
- [userId](generated_client.InstantMixApiGetInstantMixFromPlaylistRequest.md#userid)

## Properties

### enableImageTypes

• `Optional` `Readonly` **enableImageTypes**: [`ImageType`](../enums/generated_client.ImageType.md)[]

Optional. The image types to include in the output.

**`memberof`** InstantMixApiGetInstantMixFromPlaylist

#### Defined in

[generated-client/api/instant-mix-api.ts:1361](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/instant-mix-api.ts#L1361)

___

### enableImages

• `Optional` `Readonly` **enableImages**: `boolean`

Optional. Include image information in output.

**`memberof`** InstantMixApiGetInstantMixFromPlaylist

#### Defined in

[generated-client/api/instant-mix-api.ts:1340](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/instant-mix-api.ts#L1340)

___

### enableUserData

• `Optional` `Readonly` **enableUserData**: `boolean`

Optional. Include user data.

**`memberof`** InstantMixApiGetInstantMixFromPlaylist

#### Defined in

[generated-client/api/instant-mix-api.ts:1347](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/instant-mix-api.ts#L1347)

___

### fields

• `Optional` `Readonly` **fields**: [`ItemFields`](../enums/generated_client.ItemFields.md)[]

Optional. Specify additional fields of information to return in the output.

**`memberof`** InstantMixApiGetInstantMixFromPlaylist

#### Defined in

[generated-client/api/instant-mix-api.ts:1333](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/instant-mix-api.ts#L1333)

___

### id

• `Readonly` **id**: `string`

The item id.

**`memberof`** InstantMixApiGetInstantMixFromPlaylist

#### Defined in

[generated-client/api/instant-mix-api.ts:1312](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/instant-mix-api.ts#L1312)

___

### imageTypeLimit

• `Optional` `Readonly` **imageTypeLimit**: `number`

Optional. The max number of images to return, per image type.

**`memberof`** InstantMixApiGetInstantMixFromPlaylist

#### Defined in

[generated-client/api/instant-mix-api.ts:1354](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/instant-mix-api.ts#L1354)

___

### limit

• `Optional` `Readonly` **limit**: `number`

Optional. The maximum number of records to return.

**`memberof`** InstantMixApiGetInstantMixFromPlaylist

#### Defined in

[generated-client/api/instant-mix-api.ts:1326](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/instant-mix-api.ts#L1326)

___

### userId

• `Optional` `Readonly` **userId**: `string`

Optional. Filter by user id, and attach user data.

**`memberof`** InstantMixApiGetInstantMixFromPlaylist

#### Defined in

[generated-client/api/instant-mix-api.ts:1319](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/instant-mix-api.ts#L1319)
