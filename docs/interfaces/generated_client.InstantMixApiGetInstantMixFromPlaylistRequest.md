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

• `Optional` `Readonly` **enableImageTypes**: [`ImageType`](../enums/index.api.ImageType.md)[]

Optional. The image types to include in the output.

**`memberof`** InstantMixApiGetInstantMixFromPlaylist

#### Defined in

[generated-client/api/instant-mix-api.ts:1534](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/instant-mix-api.ts#L1534)

___

### enableImages

• `Optional` `Readonly` **enableImages**: `boolean`

Optional. Include image information in output.

**`memberof`** InstantMixApiGetInstantMixFromPlaylist

#### Defined in

[generated-client/api/instant-mix-api.ts:1513](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/instant-mix-api.ts#L1513)

___

### enableUserData

• `Optional` `Readonly` **enableUserData**: `boolean`

Optional. Include user data.

**`memberof`** InstantMixApiGetInstantMixFromPlaylist

#### Defined in

[generated-client/api/instant-mix-api.ts:1520](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/instant-mix-api.ts#L1520)

___

### fields

• `Optional` `Readonly` **fields**: [`ItemFields`](../enums/index.api.ItemFields.md)[]

Optional. Specify additional fields of information to return in the output.

**`memberof`** InstantMixApiGetInstantMixFromPlaylist

#### Defined in

[generated-client/api/instant-mix-api.ts:1506](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/instant-mix-api.ts#L1506)

___

### id

• `Readonly` **id**: `string`

The item id.

**`memberof`** InstantMixApiGetInstantMixFromPlaylist

#### Defined in

[generated-client/api/instant-mix-api.ts:1485](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/instant-mix-api.ts#L1485)

___

### imageTypeLimit

• `Optional` `Readonly` **imageTypeLimit**: `number`

Optional. The max number of images to return, per image type.

**`memberof`** InstantMixApiGetInstantMixFromPlaylist

#### Defined in

[generated-client/api/instant-mix-api.ts:1527](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/instant-mix-api.ts#L1527)

___

### limit

• `Optional` `Readonly` **limit**: `number`

Optional. The maximum number of records to return.

**`memberof`** InstantMixApiGetInstantMixFromPlaylist

#### Defined in

[generated-client/api/instant-mix-api.ts:1499](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/instant-mix-api.ts#L1499)

___

### userId

• `Optional` `Readonly` **userId**: `string`

Optional. Filter by user id, and attach user data.

**`memberof`** InstantMixApiGetInstantMixFromPlaylist

#### Defined in

[generated-client/api/instant-mix-api.ts:1492](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/instant-mix-api.ts#L1492)
