[jellyfin-sdk-typescript](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / InstantMixApiGetInstantMixFromArtistsRequest

# Interface: InstantMixApiGetInstantMixFromArtistsRequest

[generated-client](../modules/generated_client.md).InstantMixApiGetInstantMixFromArtistsRequest

Request parameters for getInstantMixFromArtists operation in InstantMixApi.

**`export`**

**`interface`** InstantMixApiGetInstantMixFromArtistsRequest

## Table of contents

### Properties

- [enableImageTypes](generated_client.InstantMixApiGetInstantMixFromArtistsRequest.md#enableimagetypes)
- [enableImages](generated_client.InstantMixApiGetInstantMixFromArtistsRequest.md#enableimages)
- [enableUserData](generated_client.InstantMixApiGetInstantMixFromArtistsRequest.md#enableuserdata)
- [fields](generated_client.InstantMixApiGetInstantMixFromArtistsRequest.md#fields)
- [id](generated_client.InstantMixApiGetInstantMixFromArtistsRequest.md#id)
- [imageTypeLimit](generated_client.InstantMixApiGetInstantMixFromArtistsRequest.md#imagetypelimit)
- [limit](generated_client.InstantMixApiGetInstantMixFromArtistsRequest.md#limit)
- [userId](generated_client.InstantMixApiGetInstantMixFromArtistsRequest.md#userid)

## Properties

### enableImageTypes

• `Optional` `Readonly` **enableImageTypes**: [`ImageType`](../enums/generated_client.ImageType.md)[]

Optional. The image types to include in the output.

**`memberof`** InstantMixApiGetInstantMixFromArtists

#### Defined in

[generated-client/api/instant-mix-api.ts:1156](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b0f5501/src/generated-client/api/instant-mix-api.ts#L1156)

___

### enableImages

• `Optional` `Readonly` **enableImages**: `boolean`

Optional. Include image information in output.

**`memberof`** InstantMixApiGetInstantMixFromArtists

#### Defined in

[generated-client/api/instant-mix-api.ts:1135](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b0f5501/src/generated-client/api/instant-mix-api.ts#L1135)

___

### enableUserData

• `Optional` `Readonly` **enableUserData**: `boolean`

Optional. Include user data.

**`memberof`** InstantMixApiGetInstantMixFromArtists

#### Defined in

[generated-client/api/instant-mix-api.ts:1142](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b0f5501/src/generated-client/api/instant-mix-api.ts#L1142)

___

### fields

• `Optional` `Readonly` **fields**: [`ItemFields`](../enums/generated_client.ItemFields.md)[]

Optional. Specify additional fields of information to return in the output.

**`memberof`** InstantMixApiGetInstantMixFromArtists

#### Defined in

[generated-client/api/instant-mix-api.ts:1128](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b0f5501/src/generated-client/api/instant-mix-api.ts#L1128)

___

### id

• `Readonly` **id**: `string`

The item id.

**`memberof`** InstantMixApiGetInstantMixFromArtists

#### Defined in

[generated-client/api/instant-mix-api.ts:1107](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b0f5501/src/generated-client/api/instant-mix-api.ts#L1107)

___

### imageTypeLimit

• `Optional` `Readonly` **imageTypeLimit**: `number`

Optional. The max number of images to return, per image type.

**`memberof`** InstantMixApiGetInstantMixFromArtists

#### Defined in

[generated-client/api/instant-mix-api.ts:1149](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b0f5501/src/generated-client/api/instant-mix-api.ts#L1149)

___

### limit

• `Optional` `Readonly` **limit**: `number`

Optional. The maximum number of records to return.

**`memberof`** InstantMixApiGetInstantMixFromArtists

#### Defined in

[generated-client/api/instant-mix-api.ts:1121](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b0f5501/src/generated-client/api/instant-mix-api.ts#L1121)

___

### userId

• `Optional` `Readonly` **userId**: `string`

Optional. Filter by user id, and attach user data.

**`memberof`** InstantMixApiGetInstantMixFromArtists

#### Defined in

[generated-client/api/instant-mix-api.ts:1114](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b0f5501/src/generated-client/api/instant-mix-api.ts#L1114)
