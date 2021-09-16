[jellyfin-sdk-typescript](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / InstantMixApiGetInstantMixFromSongRequest

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

[generated-client/api/instant-mix-api.ts:1597](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b0f5501/src/generated-client/api/instant-mix-api.ts#L1597)

___

### enableImages

• `Optional` `Readonly` **enableImages**: `boolean`

Optional. Include image information in output.

**`memberof`** InstantMixApiGetInstantMixFromSong

#### Defined in

[generated-client/api/instant-mix-api.ts:1576](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b0f5501/src/generated-client/api/instant-mix-api.ts#L1576)

___

### enableUserData

• `Optional` `Readonly` **enableUserData**: `boolean`

Optional. Include user data.

**`memberof`** InstantMixApiGetInstantMixFromSong

#### Defined in

[generated-client/api/instant-mix-api.ts:1583](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b0f5501/src/generated-client/api/instant-mix-api.ts#L1583)

___

### fields

• `Optional` `Readonly` **fields**: [`ItemFields`](../enums/generated_client.ItemFields.md)[]

Optional. Specify additional fields of information to return in the output.

**`memberof`** InstantMixApiGetInstantMixFromSong

#### Defined in

[generated-client/api/instant-mix-api.ts:1569](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b0f5501/src/generated-client/api/instant-mix-api.ts#L1569)

___

### id

• `Readonly` **id**: `string`

The item id.

**`memberof`** InstantMixApiGetInstantMixFromSong

#### Defined in

[generated-client/api/instant-mix-api.ts:1548](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b0f5501/src/generated-client/api/instant-mix-api.ts#L1548)

___

### imageTypeLimit

• `Optional` `Readonly` **imageTypeLimit**: `number`

Optional. The max number of images to return, per image type.

**`memberof`** InstantMixApiGetInstantMixFromSong

#### Defined in

[generated-client/api/instant-mix-api.ts:1590](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b0f5501/src/generated-client/api/instant-mix-api.ts#L1590)

___

### limit

• `Optional` `Readonly` **limit**: `number`

Optional. The maximum number of records to return.

**`memberof`** InstantMixApiGetInstantMixFromSong

#### Defined in

[generated-client/api/instant-mix-api.ts:1562](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b0f5501/src/generated-client/api/instant-mix-api.ts#L1562)

___

### userId

• `Optional` `Readonly` **userId**: `string`

Optional. Filter by user id, and attach user data.

**`memberof`** InstantMixApiGetInstantMixFromSong

#### Defined in

[generated-client/api/instant-mix-api.ts:1555](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b0f5501/src/generated-client/api/instant-mix-api.ts#L1555)
