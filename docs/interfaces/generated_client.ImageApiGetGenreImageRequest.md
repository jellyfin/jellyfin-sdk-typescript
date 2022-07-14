[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / ImageApiGetGenreImageRequest

# Interface: ImageApiGetGenreImageRequest

[generated-client](../modules/generated_client.md).ImageApiGetGenreImageRequest

Request parameters for getGenreImage operation in ImageApi.

**`export`**

**`interface`** ImageApiGetGenreImageRequest

## Table of contents

### Properties

- [addPlayedIndicator](generated_client.ImageApiGetGenreImageRequest.md#addplayedindicator)
- [backgroundColor](generated_client.ImageApiGetGenreImageRequest.md#backgroundcolor)
- [blur](generated_client.ImageApiGetGenreImageRequest.md#blur)
- [cropWhitespace](generated_client.ImageApiGetGenreImageRequest.md#cropwhitespace)
- [fillHeight](generated_client.ImageApiGetGenreImageRequest.md#fillheight)
- [fillWidth](generated_client.ImageApiGetGenreImageRequest.md#fillwidth)
- [foregroundLayer](generated_client.ImageApiGetGenreImageRequest.md#foregroundlayer)
- [format](generated_client.ImageApiGetGenreImageRequest.md#format)
- [height](generated_client.ImageApiGetGenreImageRequest.md#height)
- [imageIndex](generated_client.ImageApiGetGenreImageRequest.md#imageindex)
- [imageType](generated_client.ImageApiGetGenreImageRequest.md#imagetype)
- [maxHeight](generated_client.ImageApiGetGenreImageRequest.md#maxheight)
- [maxWidth](generated_client.ImageApiGetGenreImageRequest.md#maxwidth)
- [name](generated_client.ImageApiGetGenreImageRequest.md#name)
- [percentPlayed](generated_client.ImageApiGetGenreImageRequest.md#percentplayed)
- [quality](generated_client.ImageApiGetGenreImageRequest.md#quality)
- [tag](generated_client.ImageApiGetGenreImageRequest.md#tag)
- [unplayedCount](generated_client.ImageApiGetGenreImageRequest.md#unplayedcount)
- [width](generated_client.ImageApiGetGenreImageRequest.md#width)

## Properties

### addPlayedIndicator

• `Optional` `Readonly` **addPlayedIndicator**: `boolean`

Optional. Add a played indicator.

**`memberof`** ImageApiGetGenreImage

#### Defined in

[generated-client/api/image-api.ts:6394](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L6394)

___

### backgroundColor

• `Optional` `Readonly` **backgroundColor**: `string`

Optional. Apply a background color for transparent images.

**`memberof`** ImageApiGetGenreImage

#### Defined in

[generated-client/api/image-api.ts:6408](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L6408)

___

### blur

• `Optional` `Readonly` **blur**: `number`

Optional. Blur image.

**`memberof`** ImageApiGetGenreImage

#### Defined in

[generated-client/api/image-api.ts:6401](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L6401)

___

### cropWhitespace

• `Optional` `Readonly` **cropWhitespace**: `boolean`

Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.

**`memberof`** ImageApiGetGenreImage

#### Defined in

[generated-client/api/image-api.ts:6387](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L6387)

___

### fillHeight

• `Optional` `Readonly` **fillHeight**: `number`

Height of box to fill.

**`memberof`** ImageApiGetGenreImage

#### Defined in

[generated-client/api/image-api.ts:6380](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L6380)

___

### fillWidth

• `Optional` `Readonly` **fillWidth**: `number`

Width of box to fill.

**`memberof`** ImageApiGetGenreImage

#### Defined in

[generated-client/api/image-api.ts:6373](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L6373)

___

### foregroundLayer

• `Optional` `Readonly` **foregroundLayer**: `string`

Optional. Apply a foreground layer on top of the image.

**`memberof`** ImageApiGetGenreImage

#### Defined in

[generated-client/api/image-api.ts:6415](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L6415)

___

### format

• `Optional` `Readonly` **format**: [`ImageFormat`](../enums/generated_client.ImageFormat.md)

Determines the output format of the image - original,gif,jpg,png.

**`memberof`** ImageApiGetGenreImage

#### Defined in

[generated-client/api/image-api.ts:6317](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L6317)

___

### height

• `Optional` `Readonly` **height**: `number`

The fixed image height to return.

**`memberof`** ImageApiGetGenreImage

#### Defined in

[generated-client/api/image-api.ts:6359](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L6359)

___

### imageIndex

• `Optional` `Readonly` **imageIndex**: `number`

Image index.

**`memberof`** ImageApiGetGenreImage

#### Defined in

[generated-client/api/image-api.ts:6422](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L6422)

___

### imageType

• `Readonly` **imageType**: [`ImageType`](../enums/generated_client.ImageType.md)

Image type.

**`memberof`** ImageApiGetGenreImage

#### Defined in

[generated-client/api/image-api.ts:6303](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L6303)

___

### maxHeight

• `Optional` `Readonly` **maxHeight**: `number`

The maximum image height to return.

**`memberof`** ImageApiGetGenreImage

#### Defined in

[generated-client/api/image-api.ts:6331](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L6331)

___

### maxWidth

• `Optional` `Readonly` **maxWidth**: `number`

The maximum image width to return.

**`memberof`** ImageApiGetGenreImage

#### Defined in

[generated-client/api/image-api.ts:6324](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L6324)

___

### name

• `Readonly` **name**: `string`

Genre name.

**`memberof`** ImageApiGetGenreImage

#### Defined in

[generated-client/api/image-api.ts:6296](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L6296)

___

### percentPlayed

• `Optional` `Readonly` **percentPlayed**: `number`

Optional. Percent to render for the percent played overlay.

**`memberof`** ImageApiGetGenreImage

#### Defined in

[generated-client/api/image-api.ts:6338](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L6338)

___

### quality

• `Optional` `Readonly` **quality**: `number`

Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases.

**`memberof`** ImageApiGetGenreImage

#### Defined in

[generated-client/api/image-api.ts:6366](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L6366)

___

### tag

• `Optional` `Readonly` **tag**: `string`

Optional. Supply the cache tag from the item object to receive strong caching headers.

**`memberof`** ImageApiGetGenreImage

#### Defined in

[generated-client/api/image-api.ts:6310](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L6310)

___

### unplayedCount

• `Optional` `Readonly` **unplayedCount**: `number`

Optional. Unplayed count overlay to render.

**`memberof`** ImageApiGetGenreImage

#### Defined in

[generated-client/api/image-api.ts:6345](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L6345)

___

### width

• `Optional` `Readonly` **width**: `number`

The fixed image width to return.

**`memberof`** ImageApiGetGenreImage

#### Defined in

[generated-client/api/image-api.ts:6352](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L6352)
