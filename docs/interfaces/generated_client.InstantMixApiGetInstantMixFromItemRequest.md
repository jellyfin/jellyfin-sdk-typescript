[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / InstantMixApiGetInstantMixFromItemRequest

# Interface: InstantMixApiGetInstantMixFromItemRequest

[generated-client](../modules/generated_client.md).InstantMixApiGetInstantMixFromItemRequest

Request parameters for getInstantMixFromItem operation in InstantMixApi.

**`export`**

**`interface`** InstantMixApiGetInstantMixFromItemRequest

## Table of contents

### Properties

- [enableImageTypes](generated_client.InstantMixApiGetInstantMixFromItemRequest.md#enableimagetypes)
- [enableImages](generated_client.InstantMixApiGetInstantMixFromItemRequest.md#enableimages)
- [enableUserData](generated_client.InstantMixApiGetInstantMixFromItemRequest.md#enableuserdata)
- [fields](generated_client.InstantMixApiGetInstantMixFromItemRequest.md#fields)
- [id](generated_client.InstantMixApiGetInstantMixFromItemRequest.md#id)
- [imageTypeLimit](generated_client.InstantMixApiGetInstantMixFromItemRequest.md#imagetypelimit)
- [limit](generated_client.InstantMixApiGetInstantMixFromItemRequest.md#limit)
- [userId](generated_client.InstantMixApiGetInstantMixFromItemRequest.md#userid)

## Properties

### enableImageTypes

• `Optional` `Readonly` **enableImageTypes**: [`ImageType`](../enums/generated_client.ImageType.md)[]

Optional. The image types to include in the output.

**`memberof`** InstantMixApiGetInstantMixFromItem

#### Defined in

[generated-client/api/instant-mix-api.ts:1282](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/instant-mix-api.ts#L1282)

___

### enableImages

• `Optional` `Readonly` **enableImages**: `boolean`

Optional. Include image information in output.

**`memberof`** InstantMixApiGetInstantMixFromItem

#### Defined in

[generated-client/api/instant-mix-api.ts:1261](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/instant-mix-api.ts#L1261)

___

### enableUserData

• `Optional` `Readonly` **enableUserData**: `boolean`

Optional. Include user data.

**`memberof`** InstantMixApiGetInstantMixFromItem

#### Defined in

[generated-client/api/instant-mix-api.ts:1268](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/instant-mix-api.ts#L1268)

___

### fields

• `Optional` `Readonly` **fields**: [`ItemFields`](../enums/generated_client.ItemFields.md)[]

Optional. Specify additional fields of information to return in the output.

**`memberof`** InstantMixApiGetInstantMixFromItem

#### Defined in

[generated-client/api/instant-mix-api.ts:1254](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/instant-mix-api.ts#L1254)

___

### id

• `Readonly` **id**: `string`

The item id.

**`memberof`** InstantMixApiGetInstantMixFromItem

#### Defined in

[generated-client/api/instant-mix-api.ts:1233](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/instant-mix-api.ts#L1233)

___

### imageTypeLimit

• `Optional` `Readonly` **imageTypeLimit**: `number`

Optional. The max number of images to return, per image type.

**`memberof`** InstantMixApiGetInstantMixFromItem

#### Defined in

[generated-client/api/instant-mix-api.ts:1275](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/instant-mix-api.ts#L1275)

___

### limit

• `Optional` `Readonly` **limit**: `number`

Optional. The maximum number of records to return.

**`memberof`** InstantMixApiGetInstantMixFromItem

#### Defined in

[generated-client/api/instant-mix-api.ts:1247](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/instant-mix-api.ts#L1247)

___

### userId

• `Optional` `Readonly` **userId**: `string`

Optional. Filter by user id, and attach user data.

**`memberof`** InstantMixApiGetInstantMixFromItem

#### Defined in

[generated-client/api/instant-mix-api.ts:1240](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/instant-mix-api.ts#L1240)
