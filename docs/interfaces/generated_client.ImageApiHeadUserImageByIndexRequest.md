[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / ImageApiHeadUserImageByIndexRequest

# Interface: ImageApiHeadUserImageByIndexRequest

[generated-client](../modules/generated_client.md).ImageApiHeadUserImageByIndexRequest

Request parameters for headUserImageByIndex operation in ImageApi.

**`export`**

**`interface`** ImageApiHeadUserImageByIndexRequest

## Table of contents

### Properties

- [addPlayedIndicator](generated_client.ImageApiHeadUserImageByIndexRequest.md#addplayedindicator)
- [backgroundColor](generated_client.ImageApiHeadUserImageByIndexRequest.md#backgroundcolor)
- [blur](generated_client.ImageApiHeadUserImageByIndexRequest.md#blur)
- [cropWhitespace](generated_client.ImageApiHeadUserImageByIndexRequest.md#cropwhitespace)
- [fillHeight](generated_client.ImageApiHeadUserImageByIndexRequest.md#fillheight)
- [fillWidth](generated_client.ImageApiHeadUserImageByIndexRequest.md#fillwidth)
- [foregroundLayer](generated_client.ImageApiHeadUserImageByIndexRequest.md#foregroundlayer)
- [format](generated_client.ImageApiHeadUserImageByIndexRequest.md#format)
- [height](generated_client.ImageApiHeadUserImageByIndexRequest.md#height)
- [imageIndex](generated_client.ImageApiHeadUserImageByIndexRequest.md#imageindex)
- [imageType](generated_client.ImageApiHeadUserImageByIndexRequest.md#imagetype)
- [maxHeight](generated_client.ImageApiHeadUserImageByIndexRequest.md#maxheight)
- [maxWidth](generated_client.ImageApiHeadUserImageByIndexRequest.md#maxwidth)
- [percentPlayed](generated_client.ImageApiHeadUserImageByIndexRequest.md#percentplayed)
- [quality](generated_client.ImageApiHeadUserImageByIndexRequest.md#quality)
- [tag](generated_client.ImageApiHeadUserImageByIndexRequest.md#tag)
- [unplayedCount](generated_client.ImageApiHeadUserImageByIndexRequest.md#unplayedcount)
- [userId](generated_client.ImageApiHeadUserImageByIndexRequest.md#userid)
- [width](generated_client.ImageApiHeadUserImageByIndexRequest.md#width)

## Properties

### addPlayedIndicator

• `Optional` `Readonly` **addPlayedIndicator**: `boolean`

Optional. Add a played indicator.

**`memberof`** ImageApiHeadUserImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9812](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/image-api.ts#L9812)

___

### backgroundColor

• `Optional` `Readonly` **backgroundColor**: `string`

Optional. Apply a background color for transparent images.

**`memberof`** ImageApiHeadUserImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9826](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/image-api.ts#L9826)

___

### blur

• `Optional` `Readonly` **blur**: `number`

Optional. Blur image.

**`memberof`** ImageApiHeadUserImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9819](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/image-api.ts#L9819)

___

### cropWhitespace

• `Optional` `Readonly` **cropWhitespace**: `boolean`

Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.

**`memberof`** ImageApiHeadUserImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9805](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/image-api.ts#L9805)

___

### fillHeight

• `Optional` `Readonly` **fillHeight**: `number`

Height of box to fill.

**`memberof`** ImageApiHeadUserImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9798](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/image-api.ts#L9798)

___

### fillWidth

• `Optional` `Readonly` **fillWidth**: `number`

Width of box to fill.

**`memberof`** ImageApiHeadUserImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9791](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/image-api.ts#L9791)

___

### foregroundLayer

• `Optional` `Readonly` **foregroundLayer**: `string`

Optional. Apply a foreground layer on top of the image.

**`memberof`** ImageApiHeadUserImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9833](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/image-api.ts#L9833)

___

### format

• `Optional` `Readonly` **format**: [`ImageFormat`](../enums/generated_client.ImageFormat.md)

Determines the output format of the image - original,gif,jpg,png.

**`memberof`** ImageApiHeadUserImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9735](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/image-api.ts#L9735)

___

### height

• `Optional` `Readonly` **height**: `number`

The fixed image height to return.

**`memberof`** ImageApiHeadUserImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9777](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/image-api.ts#L9777)

___

### imageIndex

• `Readonly` **imageIndex**: `number`

Image index.

**`memberof`** ImageApiHeadUserImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9721](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/image-api.ts#L9721)

___

### imageType

• `Readonly` **imageType**: [`ImageType`](../enums/generated_client.ImageType.md)

Image type.

**`memberof`** ImageApiHeadUserImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9714](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/image-api.ts#L9714)

___

### maxHeight

• `Optional` `Readonly` **maxHeight**: `number`

The maximum image height to return.

**`memberof`** ImageApiHeadUserImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9749](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/image-api.ts#L9749)

___

### maxWidth

• `Optional` `Readonly` **maxWidth**: `number`

The maximum image width to return.

**`memberof`** ImageApiHeadUserImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9742](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/image-api.ts#L9742)

___

### percentPlayed

• `Optional` `Readonly` **percentPlayed**: `number`

Optional. Percent to render for the percent played overlay.

**`memberof`** ImageApiHeadUserImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9756](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/image-api.ts#L9756)

___

### quality

• `Optional` `Readonly` **quality**: `number`

Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases.

**`memberof`** ImageApiHeadUserImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9784](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/image-api.ts#L9784)

___

### tag

• `Optional` `Readonly` **tag**: `string`

Optional. Supply the cache tag from the item object to receive strong caching headers.

**`memberof`** ImageApiHeadUserImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9728](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/image-api.ts#L9728)

___

### unplayedCount

• `Optional` `Readonly` **unplayedCount**: `number`

Optional. Unplayed count overlay to render.

**`memberof`** ImageApiHeadUserImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9763](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/image-api.ts#L9763)

___

### userId

• `Readonly` **userId**: `string`

User id.

**`memberof`** ImageApiHeadUserImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9707](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/image-api.ts#L9707)

___

### width

• `Optional` `Readonly` **width**: `number`

The fixed image width to return.

**`memberof`** ImageApiHeadUserImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9770](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/image-api.ts#L9770)
