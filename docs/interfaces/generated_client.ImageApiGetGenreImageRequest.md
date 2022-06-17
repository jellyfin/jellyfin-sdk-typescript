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

[generated-client/api/image-api.ts:6342](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L6342)

___

### backgroundColor

• `Optional` `Readonly` **backgroundColor**: `string`

Optional. Apply a background color for transparent images.

**`memberof`** ImageApiGetGenreImage

#### Defined in

[generated-client/api/image-api.ts:6356](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L6356)

___

### blur

• `Optional` `Readonly` **blur**: `number`

Optional. Blur image.

**`memberof`** ImageApiGetGenreImage

#### Defined in

[generated-client/api/image-api.ts:6349](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L6349)

___

### cropWhitespace

• `Optional` `Readonly` **cropWhitespace**: `boolean`

Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.

**`memberof`** ImageApiGetGenreImage

#### Defined in

[generated-client/api/image-api.ts:6335](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L6335)

___

### fillHeight

• `Optional` `Readonly` **fillHeight**: `number`

Height of box to fill.

**`memberof`** ImageApiGetGenreImage

#### Defined in

[generated-client/api/image-api.ts:6328](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L6328)

___

### fillWidth

• `Optional` `Readonly` **fillWidth**: `number`

Width of box to fill.

**`memberof`** ImageApiGetGenreImage

#### Defined in

[generated-client/api/image-api.ts:6321](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L6321)

___

### foregroundLayer

• `Optional` `Readonly` **foregroundLayer**: `string`

Optional. Apply a foreground layer on top of the image.

**`memberof`** ImageApiGetGenreImage

#### Defined in

[generated-client/api/image-api.ts:6363](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L6363)

___

### format

• `Optional` `Readonly` **format**: [`ImageFormat`](../enums/generated_client.ImageFormat.md)

Determines the output format of the image - original,gif,jpg,png.

**`memberof`** ImageApiGetGenreImage

#### Defined in

[generated-client/api/image-api.ts:6265](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L6265)

___

### height

• `Optional` `Readonly` **height**: `number`

The fixed image height to return.

**`memberof`** ImageApiGetGenreImage

#### Defined in

[generated-client/api/image-api.ts:6307](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L6307)

___

### imageIndex

• `Optional` `Readonly` **imageIndex**: `number`

Image index.

**`memberof`** ImageApiGetGenreImage

#### Defined in

[generated-client/api/image-api.ts:6370](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L6370)

___

### imageType

• `Readonly` **imageType**: [`ImageType`](../enums/generated_client.ImageType.md)

Image type.

**`memberof`** ImageApiGetGenreImage

#### Defined in

[generated-client/api/image-api.ts:6251](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L6251)

___

### maxHeight

• `Optional` `Readonly` **maxHeight**: `number`

The maximum image height to return.

**`memberof`** ImageApiGetGenreImage

#### Defined in

[generated-client/api/image-api.ts:6279](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L6279)

___

### maxWidth

• `Optional` `Readonly` **maxWidth**: `number`

The maximum image width to return.

**`memberof`** ImageApiGetGenreImage

#### Defined in

[generated-client/api/image-api.ts:6272](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L6272)

___

### name

• `Readonly` **name**: `string`

Genre name.

**`memberof`** ImageApiGetGenreImage

#### Defined in

[generated-client/api/image-api.ts:6244](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L6244)

___

### percentPlayed

• `Optional` `Readonly` **percentPlayed**: `number`

Optional. Percent to render for the percent played overlay.

**`memberof`** ImageApiGetGenreImage

#### Defined in

[generated-client/api/image-api.ts:6286](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L6286)

___

### quality

• `Optional` `Readonly` **quality**: `number`

Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases.

**`memberof`** ImageApiGetGenreImage

#### Defined in

[generated-client/api/image-api.ts:6314](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L6314)

___

### tag

• `Optional` `Readonly` **tag**: `string`

Optional. Supply the cache tag from the item object to receive strong caching headers.

**`memberof`** ImageApiGetGenreImage

#### Defined in

[generated-client/api/image-api.ts:6258](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L6258)

___

### unplayedCount

• `Optional` `Readonly` **unplayedCount**: `number`

Optional. Unplayed count overlay to render.

**`memberof`** ImageApiGetGenreImage

#### Defined in

[generated-client/api/image-api.ts:6293](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L6293)

___

### width

• `Optional` `Readonly` **width**: `number`

The fixed image width to return.

**`memberof`** ImageApiGetGenreImage

#### Defined in

[generated-client/api/image-api.ts:6300](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L6300)
