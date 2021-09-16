[jellyfin-sdk-typescript](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / ImageApiHeadMusicGenreImageRequest

# Interface: ImageApiHeadMusicGenreImageRequest

[generated-client](../modules/generated_client.md).ImageApiHeadMusicGenreImageRequest

Request parameters for headMusicGenreImage operation in ImageApi.

**`export`**

**`interface`** ImageApiHeadMusicGenreImageRequest

## Table of contents

### Properties

- [addPlayedIndicator](generated_client.ImageApiHeadMusicGenreImageRequest.md#addplayedindicator)
- [backgroundColor](generated_client.ImageApiHeadMusicGenreImageRequest.md#backgroundcolor)
- [blur](generated_client.ImageApiHeadMusicGenreImageRequest.md#blur)
- [cropWhitespace](generated_client.ImageApiHeadMusicGenreImageRequest.md#cropwhitespace)
- [fillHeight](generated_client.ImageApiHeadMusicGenreImageRequest.md#fillheight)
- [fillWidth](generated_client.ImageApiHeadMusicGenreImageRequest.md#fillwidth)
- [foregroundLayer](generated_client.ImageApiHeadMusicGenreImageRequest.md#foregroundlayer)
- [format](generated_client.ImageApiHeadMusicGenreImageRequest.md#format)
- [height](generated_client.ImageApiHeadMusicGenreImageRequest.md#height)
- [imageIndex](generated_client.ImageApiHeadMusicGenreImageRequest.md#imageindex)
- [imageType](generated_client.ImageApiHeadMusicGenreImageRequest.md#imagetype)
- [maxHeight](generated_client.ImageApiHeadMusicGenreImageRequest.md#maxheight)
- [maxWidth](generated_client.ImageApiHeadMusicGenreImageRequest.md#maxwidth)
- [name](generated_client.ImageApiHeadMusicGenreImageRequest.md#name)
- [percentPlayed](generated_client.ImageApiHeadMusicGenreImageRequest.md#percentplayed)
- [quality](generated_client.ImageApiHeadMusicGenreImageRequest.md#quality)
- [tag](generated_client.ImageApiHeadMusicGenreImageRequest.md#tag)
- [unplayedCount](generated_client.ImageApiHeadMusicGenreImageRequest.md#unplayedcount)
- [width](generated_client.ImageApiHeadMusicGenreImageRequest.md#width)

## Properties

### addPlayedIndicator

• `Optional` `Readonly` **addPlayedIndicator**: `boolean`

Optional. Add a played indicator.

**`memberof`** ImageApiHeadMusicGenreImage

#### Defined in

[generated-client/api/image-api.ts:8825](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/api/image-api.ts#L8825)

___

### backgroundColor

• `Optional` `Readonly` **backgroundColor**: `string`

Optional. Apply a background color for transparent images.

**`memberof`** ImageApiHeadMusicGenreImage

#### Defined in

[generated-client/api/image-api.ts:8839](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/api/image-api.ts#L8839)

___

### blur

• `Optional` `Readonly` **blur**: `number`

Optional. Blur image.

**`memberof`** ImageApiHeadMusicGenreImage

#### Defined in

[generated-client/api/image-api.ts:8832](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/api/image-api.ts#L8832)

___

### cropWhitespace

• `Optional` `Readonly` **cropWhitespace**: `boolean`

Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.

**`memberof`** ImageApiHeadMusicGenreImage

#### Defined in

[generated-client/api/image-api.ts:8818](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/api/image-api.ts#L8818)

___

### fillHeight

• `Optional` `Readonly` **fillHeight**: `number`

Height of box to fill.

**`memberof`** ImageApiHeadMusicGenreImage

#### Defined in

[generated-client/api/image-api.ts:8811](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/api/image-api.ts#L8811)

___

### fillWidth

• `Optional` `Readonly` **fillWidth**: `number`

Width of box to fill.

**`memberof`** ImageApiHeadMusicGenreImage

#### Defined in

[generated-client/api/image-api.ts:8804](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/api/image-api.ts#L8804)

___

### foregroundLayer

• `Optional` `Readonly` **foregroundLayer**: `string`

Optional. Apply a foreground layer on top of the image.

**`memberof`** ImageApiHeadMusicGenreImage

#### Defined in

[generated-client/api/image-api.ts:8846](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/api/image-api.ts#L8846)

___

### format

• `Optional` `Readonly` **format**: [`ImageFormat`](../enums/generated_client.ImageFormat.md)

Determines the output format of the image - original,gif,jpg,png.

**`memberof`** ImageApiHeadMusicGenreImage

#### Defined in

[generated-client/api/image-api.ts:8748](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/api/image-api.ts#L8748)

___

### height

• `Optional` `Readonly` **height**: `number`

The fixed image height to return.

**`memberof`** ImageApiHeadMusicGenreImage

#### Defined in

[generated-client/api/image-api.ts:8790](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/api/image-api.ts#L8790)

___

### imageIndex

• `Optional` `Readonly` **imageIndex**: `number`

Image index.

**`memberof`** ImageApiHeadMusicGenreImage

#### Defined in

[generated-client/api/image-api.ts:8853](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/api/image-api.ts#L8853)

___

### imageType

• `Readonly` **imageType**: [`ImageType`](../enums/generated_client.ImageType.md)

Image type.

**`memberof`** ImageApiHeadMusicGenreImage

#### Defined in

[generated-client/api/image-api.ts:8734](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/api/image-api.ts#L8734)

___

### maxHeight

• `Optional` `Readonly` **maxHeight**: `number`

The maximum image height to return.

**`memberof`** ImageApiHeadMusicGenreImage

#### Defined in

[generated-client/api/image-api.ts:8762](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/api/image-api.ts#L8762)

___

### maxWidth

• `Optional` `Readonly` **maxWidth**: `number`

The maximum image width to return.

**`memberof`** ImageApiHeadMusicGenreImage

#### Defined in

[generated-client/api/image-api.ts:8755](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/api/image-api.ts#L8755)

___

### name

• `Readonly` **name**: `string`

Music genre name.

**`memberof`** ImageApiHeadMusicGenreImage

#### Defined in

[generated-client/api/image-api.ts:8727](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/api/image-api.ts#L8727)

___

### percentPlayed

• `Optional` `Readonly` **percentPlayed**: `number`

Optional. Percent to render for the percent played overlay.

**`memberof`** ImageApiHeadMusicGenreImage

#### Defined in

[generated-client/api/image-api.ts:8769](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/api/image-api.ts#L8769)

___

### quality

• `Optional` `Readonly` **quality**: `number`

Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases.

**`memberof`** ImageApiHeadMusicGenreImage

#### Defined in

[generated-client/api/image-api.ts:8797](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/api/image-api.ts#L8797)

___

### tag

• `Optional` `Readonly` **tag**: `string`

Optional. Supply the cache tag from the item object to receive strong caching headers.

**`memberof`** ImageApiHeadMusicGenreImage

#### Defined in

[generated-client/api/image-api.ts:8741](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/api/image-api.ts#L8741)

___

### unplayedCount

• `Optional` `Readonly` **unplayedCount**: `number`

Optional. Unplayed count overlay to render.

**`memberof`** ImageApiHeadMusicGenreImage

#### Defined in

[generated-client/api/image-api.ts:8776](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/api/image-api.ts#L8776)

___

### width

• `Optional` `Readonly` **width**: `number`

The fixed image width to return.

**`memberof`** ImageApiHeadMusicGenreImage

#### Defined in

[generated-client/api/image-api.ts:8783](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/api/image-api.ts#L8783)
