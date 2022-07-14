[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / InstantMixApiGetInstantMixFromArtists2Request

# Interface: InstantMixApiGetInstantMixFromArtists2Request

[generated-client](../modules/generated_client.md).InstantMixApiGetInstantMixFromArtists2Request

Request parameters for getInstantMixFromArtists2 operation in InstantMixApi.

**`export`**

**`interface`** InstantMixApiGetInstantMixFromArtists2Request

## Table of contents

### Properties

- [enableImageTypes](generated_client.InstantMixApiGetInstantMixFromArtists2Request.md#enableimagetypes)
- [enableImages](generated_client.InstantMixApiGetInstantMixFromArtists2Request.md#enableimages)
- [enableUserData](generated_client.InstantMixApiGetInstantMixFromArtists2Request.md#enableuserdata)
- [fields](generated_client.InstantMixApiGetInstantMixFromArtists2Request.md#fields)
- [id](generated_client.InstantMixApiGetInstantMixFromArtists2Request.md#id)
- [imageTypeLimit](generated_client.InstantMixApiGetInstantMixFromArtists2Request.md#imagetypelimit)
- [limit](generated_client.InstantMixApiGetInstantMixFromArtists2Request.md#limit)
- [userId](generated_client.InstantMixApiGetInstantMixFromArtists2Request.md#userid)

## Properties

### enableImageTypes

• `Optional` `Readonly` **enableImageTypes**: [`ImageType`](../enums/generated_client.ImageType.md)[]

Optional. The image types to include in the output.

**`memberof`** InstantMixApiGetInstantMixFromArtists2

#### Defined in

[generated-client/api/instant-mix-api.ts:1109](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/instant-mix-api.ts#L1109)

___

### enableImages

• `Optional` `Readonly` **enableImages**: `boolean`

Optional. Include image information in output.

**`memberof`** InstantMixApiGetInstantMixFromArtists2

#### Defined in

[generated-client/api/instant-mix-api.ts:1088](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/instant-mix-api.ts#L1088)

___

### enableUserData

• `Optional` `Readonly` **enableUserData**: `boolean`

Optional. Include user data.

**`memberof`** InstantMixApiGetInstantMixFromArtists2

#### Defined in

[generated-client/api/instant-mix-api.ts:1095](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/instant-mix-api.ts#L1095)

___

### fields

• `Optional` `Readonly` **fields**: [`ItemFields`](../enums/generated_client.ItemFields.md)[]

Optional. Specify additional fields of information to return in the output.

**`memberof`** InstantMixApiGetInstantMixFromArtists2

#### Defined in

[generated-client/api/instant-mix-api.ts:1081](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/instant-mix-api.ts#L1081)

___

### id

• `Readonly` **id**: `string`

The item id.

**`memberof`** InstantMixApiGetInstantMixFromArtists2

#### Defined in

[generated-client/api/instant-mix-api.ts:1060](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/instant-mix-api.ts#L1060)

___

### imageTypeLimit

• `Optional` `Readonly` **imageTypeLimit**: `number`

Optional. The max number of images to return, per image type.

**`memberof`** InstantMixApiGetInstantMixFromArtists2

#### Defined in

[generated-client/api/instant-mix-api.ts:1102](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/instant-mix-api.ts#L1102)

___

### limit

• `Optional` `Readonly` **limit**: `number`

Optional. The maximum number of records to return.

**`memberof`** InstantMixApiGetInstantMixFromArtists2

#### Defined in

[generated-client/api/instant-mix-api.ts:1074](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/instant-mix-api.ts#L1074)

___

### userId

• `Optional` `Readonly` **userId**: `string`

Optional. Filter by user id, and attach user data.

**`memberof`** InstantMixApiGetInstantMixFromArtists2

#### Defined in

[generated-client/api/instant-mix-api.ts:1067](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/instant-mix-api.ts#L1067)
