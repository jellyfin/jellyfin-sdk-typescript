[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / ImageApiGetArtistImageRequest

# Interface: ImageApiGetArtistImageRequest

[generated-client](../modules/generated_client.md).ImageApiGetArtistImageRequest

Request parameters for getArtistImage operation in ImageApi.

**`export`**

**`interface`** ImageApiGetArtistImageRequest

## Table of contents

### Properties

- [addPlayedIndicator](generated_client.ImageApiGetArtistImageRequest.md#addplayedindicator)
- [backgroundColor](generated_client.ImageApiGetArtistImageRequest.md#backgroundcolor)
- [blur](generated_client.ImageApiGetArtistImageRequest.md#blur)
- [cropWhitespace](generated_client.ImageApiGetArtistImageRequest.md#cropwhitespace)
- [fillHeight](generated_client.ImageApiGetArtistImageRequest.md#fillheight)
- [fillWidth](generated_client.ImageApiGetArtistImageRequest.md#fillwidth)
- [foregroundLayer](generated_client.ImageApiGetArtistImageRequest.md#foregroundlayer)
- [format](generated_client.ImageApiGetArtistImageRequest.md#format)
- [height](generated_client.ImageApiGetArtistImageRequest.md#height)
- [imageIndex](generated_client.ImageApiGetArtistImageRequest.md#imageindex)
- [imageType](generated_client.ImageApiGetArtistImageRequest.md#imagetype)
- [maxHeight](generated_client.ImageApiGetArtistImageRequest.md#maxheight)
- [maxWidth](generated_client.ImageApiGetArtistImageRequest.md#maxwidth)
- [name](generated_client.ImageApiGetArtistImageRequest.md#name)
- [percentPlayed](generated_client.ImageApiGetArtistImageRequest.md#percentplayed)
- [quality](generated_client.ImageApiGetArtistImageRequest.md#quality)
- [tag](generated_client.ImageApiGetArtistImageRequest.md#tag)
- [unplayedCount](generated_client.ImageApiGetArtistImageRequest.md#unplayedcount)
- [width](generated_client.ImageApiGetArtistImageRequest.md#width)

## Properties

### addPlayedIndicator

• `Optional` `Readonly` **addPlayedIndicator**: `boolean`

Optional. Add a played indicator.

**`memberof`** ImageApiGetArtistImage

#### Defined in

[generated-client/api/image-api.ts:6261](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L6261)

___

### backgroundColor

• `Optional` `Readonly` **backgroundColor**: `string`

Optional. Apply a background color for transparent images.

**`memberof`** ImageApiGetArtistImage

#### Defined in

[generated-client/api/image-api.ts:6275](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L6275)

___

### blur

• `Optional` `Readonly` **blur**: `number`

Optional. Blur image.

**`memberof`** ImageApiGetArtistImage

#### Defined in

[generated-client/api/image-api.ts:6268](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L6268)

___

### cropWhitespace

• `Optional` `Readonly` **cropWhitespace**: `boolean`

Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.

**`memberof`** ImageApiGetArtistImage

#### Defined in

[generated-client/api/image-api.ts:6254](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L6254)

___

### fillHeight

• `Optional` `Readonly` **fillHeight**: `number`

Height of box to fill.

**`memberof`** ImageApiGetArtistImage

#### Defined in

[generated-client/api/image-api.ts:6247](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L6247)

___

### fillWidth

• `Optional` `Readonly` **fillWidth**: `number`

Width of box to fill.

**`memberof`** ImageApiGetArtistImage

#### Defined in

[generated-client/api/image-api.ts:6240](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L6240)

___

### foregroundLayer

• `Optional` `Readonly` **foregroundLayer**: `string`

Optional. Apply a foreground layer on top of the image.

**`memberof`** ImageApiGetArtistImage

#### Defined in

[generated-client/api/image-api.ts:6282](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L6282)

___

### format

• `Optional` `Readonly` **format**: [`ImageFormat`](../enums/generated_client.ImageFormat.md)

Determines the output format of the image - original,gif,jpg,png.

**`memberof`** ImageApiGetArtistImage

#### Defined in

[generated-client/api/image-api.ts:6184](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L6184)

___

### height

• `Optional` `Readonly` **height**: `number`

The fixed image height to return.

**`memberof`** ImageApiGetArtistImage

#### Defined in

[generated-client/api/image-api.ts:6226](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L6226)

___

### imageIndex

• `Readonly` **imageIndex**: `number`

Image index.

**`memberof`** ImageApiGetArtistImage

#### Defined in

[generated-client/api/image-api.ts:6170](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L6170)

___

### imageType

• `Readonly` **imageType**: [`ImageType`](../enums/generated_client.ImageType.md)

Image type.

**`memberof`** ImageApiGetArtistImage

#### Defined in

[generated-client/api/image-api.ts:6163](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L6163)

___

### maxHeight

• `Optional` `Readonly` **maxHeight**: `number`

The maximum image height to return.

**`memberof`** ImageApiGetArtistImage

#### Defined in

[generated-client/api/image-api.ts:6198](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L6198)

___

### maxWidth

• `Optional` `Readonly` **maxWidth**: `number`

The maximum image width to return.

**`memberof`** ImageApiGetArtistImage

#### Defined in

[generated-client/api/image-api.ts:6191](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L6191)

___

### name

• `Readonly` **name**: `string`

Artist name.

**`memberof`** ImageApiGetArtistImage

#### Defined in

[generated-client/api/image-api.ts:6156](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L6156)

___

### percentPlayed

• `Optional` `Readonly` **percentPlayed**: `number`

Optional. Percent to render for the percent played overlay.

**`memberof`** ImageApiGetArtistImage

#### Defined in

[generated-client/api/image-api.ts:6205](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L6205)

___

### quality

• `Optional` `Readonly` **quality**: `number`

Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases.

**`memberof`** ImageApiGetArtistImage

#### Defined in

[generated-client/api/image-api.ts:6233](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L6233)

___

### tag

• `Optional` `Readonly` **tag**: `string`

Optional. Supply the cache tag from the item object to receive strong caching headers.

**`memberof`** ImageApiGetArtistImage

#### Defined in

[generated-client/api/image-api.ts:6177](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L6177)

___

### unplayedCount

• `Optional` `Readonly` **unplayedCount**: `number`

Optional. Unplayed count overlay to render.

**`memberof`** ImageApiGetArtistImage

#### Defined in

[generated-client/api/image-api.ts:6212](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L6212)

___

### width

• `Optional` `Readonly` **width**: `number`

The fixed image width to return.

**`memberof`** ImageApiGetArtistImage

#### Defined in

[generated-client/api/image-api.ts:6219](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L6219)
