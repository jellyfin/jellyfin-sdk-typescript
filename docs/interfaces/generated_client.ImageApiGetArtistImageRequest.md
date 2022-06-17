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

[generated-client/api/image-api.ts:6209](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L6209)

___

### backgroundColor

• `Optional` `Readonly` **backgroundColor**: `string`

Optional. Apply a background color for transparent images.

**`memberof`** ImageApiGetArtistImage

#### Defined in

[generated-client/api/image-api.ts:6223](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L6223)

___

### blur

• `Optional` `Readonly` **blur**: `number`

Optional. Blur image.

**`memberof`** ImageApiGetArtistImage

#### Defined in

[generated-client/api/image-api.ts:6216](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L6216)

___

### cropWhitespace

• `Optional` `Readonly` **cropWhitespace**: `boolean`

Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.

**`memberof`** ImageApiGetArtistImage

#### Defined in

[generated-client/api/image-api.ts:6202](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L6202)

___

### fillHeight

• `Optional` `Readonly` **fillHeight**: `number`

Height of box to fill.

**`memberof`** ImageApiGetArtistImage

#### Defined in

[generated-client/api/image-api.ts:6195](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L6195)

___

### fillWidth

• `Optional` `Readonly` **fillWidth**: `number`

Width of box to fill.

**`memberof`** ImageApiGetArtistImage

#### Defined in

[generated-client/api/image-api.ts:6188](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L6188)

___

### foregroundLayer

• `Optional` `Readonly` **foregroundLayer**: `string`

Optional. Apply a foreground layer on top of the image.

**`memberof`** ImageApiGetArtistImage

#### Defined in

[generated-client/api/image-api.ts:6230](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L6230)

___

### format

• `Optional` `Readonly` **format**: [`ImageFormat`](../enums/generated_client.ImageFormat.md)

Determines the output format of the image - original,gif,jpg,png.

**`memberof`** ImageApiGetArtistImage

#### Defined in

[generated-client/api/image-api.ts:6132](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L6132)

___

### height

• `Optional` `Readonly` **height**: `number`

The fixed image height to return.

**`memberof`** ImageApiGetArtistImage

#### Defined in

[generated-client/api/image-api.ts:6174](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L6174)

___

### imageIndex

• `Readonly` **imageIndex**: `number`

Image index.

**`memberof`** ImageApiGetArtistImage

#### Defined in

[generated-client/api/image-api.ts:6118](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L6118)

___

### imageType

• `Readonly` **imageType**: [`ImageType`](../enums/generated_client.ImageType.md)

Image type.

**`memberof`** ImageApiGetArtistImage

#### Defined in

[generated-client/api/image-api.ts:6111](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L6111)

___

### maxHeight

• `Optional` `Readonly` **maxHeight**: `number`

The maximum image height to return.

**`memberof`** ImageApiGetArtistImage

#### Defined in

[generated-client/api/image-api.ts:6146](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L6146)

___

### maxWidth

• `Optional` `Readonly` **maxWidth**: `number`

The maximum image width to return.

**`memberof`** ImageApiGetArtistImage

#### Defined in

[generated-client/api/image-api.ts:6139](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L6139)

___

### name

• `Readonly` **name**: `string`

Artist name.

**`memberof`** ImageApiGetArtistImage

#### Defined in

[generated-client/api/image-api.ts:6104](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L6104)

___

### percentPlayed

• `Optional` `Readonly` **percentPlayed**: `number`

Optional. Percent to render for the percent played overlay.

**`memberof`** ImageApiGetArtistImage

#### Defined in

[generated-client/api/image-api.ts:6153](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L6153)

___

### quality

• `Optional` `Readonly` **quality**: `number`

Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases.

**`memberof`** ImageApiGetArtistImage

#### Defined in

[generated-client/api/image-api.ts:6181](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L6181)

___

### tag

• `Optional` `Readonly` **tag**: `string`

Optional. Supply the cache tag from the item object to receive strong caching headers.

**`memberof`** ImageApiGetArtistImage

#### Defined in

[generated-client/api/image-api.ts:6125](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L6125)

___

### unplayedCount

• `Optional` `Readonly` **unplayedCount**: `number`

Optional. Unplayed count overlay to render.

**`memberof`** ImageApiGetArtistImage

#### Defined in

[generated-client/api/image-api.ts:6160](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L6160)

___

### width

• `Optional` `Readonly` **width**: `number`

The fixed image width to return.

**`memberof`** ImageApiGetArtistImage

#### Defined in

[generated-client/api/image-api.ts:6167](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L6167)
