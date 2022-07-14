[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / ImageApiHeadGenreImageRequest

# Interface: ImageApiHeadGenreImageRequest

[generated-client](../modules/generated_client.md).ImageApiHeadGenreImageRequest

Request parameters for headGenreImage operation in ImageApi.

**`export`**

**`interface`** ImageApiHeadGenreImageRequest

## Table of contents

### Properties

- [addPlayedIndicator](generated_client.ImageApiHeadGenreImageRequest.md#addplayedindicator)
- [backgroundColor](generated_client.ImageApiHeadGenreImageRequest.md#backgroundcolor)
- [blur](generated_client.ImageApiHeadGenreImageRequest.md#blur)
- [cropWhitespace](generated_client.ImageApiHeadGenreImageRequest.md#cropwhitespace)
- [fillHeight](generated_client.ImageApiHeadGenreImageRequest.md#fillheight)
- [fillWidth](generated_client.ImageApiHeadGenreImageRequest.md#fillwidth)
- [foregroundLayer](generated_client.ImageApiHeadGenreImageRequest.md#foregroundlayer)
- [format](generated_client.ImageApiHeadGenreImageRequest.md#format)
- [height](generated_client.ImageApiHeadGenreImageRequest.md#height)
- [imageIndex](generated_client.ImageApiHeadGenreImageRequest.md#imageindex)
- [imageType](generated_client.ImageApiHeadGenreImageRequest.md#imagetype)
- [maxHeight](generated_client.ImageApiHeadGenreImageRequest.md#maxheight)
- [maxWidth](generated_client.ImageApiHeadGenreImageRequest.md#maxwidth)
- [name](generated_client.ImageApiHeadGenreImageRequest.md#name)
- [percentPlayed](generated_client.ImageApiHeadGenreImageRequest.md#percentplayed)
- [quality](generated_client.ImageApiHeadGenreImageRequest.md#quality)
- [tag](generated_client.ImageApiHeadGenreImageRequest.md#tag)
- [unplayedCount](generated_client.ImageApiHeadGenreImageRequest.md#unplayedcount)
- [width](generated_client.ImageApiHeadGenreImageRequest.md#width)

## Properties

### addPlayedIndicator

• `Optional` `Readonly` **addPlayedIndicator**: `boolean`

Optional. Add a played indicator.

**`memberof`** ImageApiHeadGenreImage

#### Defined in

[generated-client/api/image-api.ts:8459](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L8459)

___

### backgroundColor

• `Optional` `Readonly` **backgroundColor**: `string`

Optional. Apply a background color for transparent images.

**`memberof`** ImageApiHeadGenreImage

#### Defined in

[generated-client/api/image-api.ts:8473](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L8473)

___

### blur

• `Optional` `Readonly` **blur**: `number`

Optional. Blur image.

**`memberof`** ImageApiHeadGenreImage

#### Defined in

[generated-client/api/image-api.ts:8466](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L8466)

___

### cropWhitespace

• `Optional` `Readonly` **cropWhitespace**: `boolean`

Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.

**`memberof`** ImageApiHeadGenreImage

#### Defined in

[generated-client/api/image-api.ts:8452](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L8452)

___

### fillHeight

• `Optional` `Readonly` **fillHeight**: `number`

Height of box to fill.

**`memberof`** ImageApiHeadGenreImage

#### Defined in

[generated-client/api/image-api.ts:8445](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L8445)

___

### fillWidth

• `Optional` `Readonly` **fillWidth**: `number`

Width of box to fill.

**`memberof`** ImageApiHeadGenreImage

#### Defined in

[generated-client/api/image-api.ts:8438](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L8438)

___

### foregroundLayer

• `Optional` `Readonly` **foregroundLayer**: `string`

Optional. Apply a foreground layer on top of the image.

**`memberof`** ImageApiHeadGenreImage

#### Defined in

[generated-client/api/image-api.ts:8480](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L8480)

___

### format

• `Optional` `Readonly` **format**: [`ImageFormat`](../enums/generated_client.ImageFormat.md)

Determines the output format of the image - original,gif,jpg,png.

**`memberof`** ImageApiHeadGenreImage

#### Defined in

[generated-client/api/image-api.ts:8382](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L8382)

___

### height

• `Optional` `Readonly` **height**: `number`

The fixed image height to return.

**`memberof`** ImageApiHeadGenreImage

#### Defined in

[generated-client/api/image-api.ts:8424](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L8424)

___

### imageIndex

• `Optional` `Readonly` **imageIndex**: `number`

Image index.

**`memberof`** ImageApiHeadGenreImage

#### Defined in

[generated-client/api/image-api.ts:8487](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L8487)

___

### imageType

• `Readonly` **imageType**: [`ImageType`](../enums/generated_client.ImageType.md)

Image type.

**`memberof`** ImageApiHeadGenreImage

#### Defined in

[generated-client/api/image-api.ts:8368](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L8368)

___

### maxHeight

• `Optional` `Readonly` **maxHeight**: `number`

The maximum image height to return.

**`memberof`** ImageApiHeadGenreImage

#### Defined in

[generated-client/api/image-api.ts:8396](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L8396)

___

### maxWidth

• `Optional` `Readonly` **maxWidth**: `number`

The maximum image width to return.

**`memberof`** ImageApiHeadGenreImage

#### Defined in

[generated-client/api/image-api.ts:8389](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L8389)

___

### name

• `Readonly` **name**: `string`

Genre name.

**`memberof`** ImageApiHeadGenreImage

#### Defined in

[generated-client/api/image-api.ts:8361](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L8361)

___

### percentPlayed

• `Optional` `Readonly` **percentPlayed**: `number`

Optional. Percent to render for the percent played overlay.

**`memberof`** ImageApiHeadGenreImage

#### Defined in

[generated-client/api/image-api.ts:8403](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L8403)

___

### quality

• `Optional` `Readonly` **quality**: `number`

Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases.

**`memberof`** ImageApiHeadGenreImage

#### Defined in

[generated-client/api/image-api.ts:8431](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L8431)

___

### tag

• `Optional` `Readonly` **tag**: `string`

Optional. Supply the cache tag from the item object to receive strong caching headers.

**`memberof`** ImageApiHeadGenreImage

#### Defined in

[generated-client/api/image-api.ts:8375](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L8375)

___

### unplayedCount

• `Optional` `Readonly` **unplayedCount**: `number`

Optional. Unplayed count overlay to render.

**`memberof`** ImageApiHeadGenreImage

#### Defined in

[generated-client/api/image-api.ts:8410](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L8410)

___

### width

• `Optional` `Readonly` **width**: `number`

The fixed image width to return.

**`memberof`** ImageApiHeadGenreImage

#### Defined in

[generated-client/api/image-api.ts:8417](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L8417)
