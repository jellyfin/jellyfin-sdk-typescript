[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / ImageApiHeadMusicGenreImageRequest

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

[generated-client/api/image-api.ts:9107](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9107)

___

### backgroundColor

• `Optional` `Readonly` **backgroundColor**: `string`

Optional. Apply a background color for transparent images.

**`memberof`** ImageApiHeadMusicGenreImage

#### Defined in

[generated-client/api/image-api.ts:9121](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9121)

___

### blur

• `Optional` `Readonly` **blur**: `number`

Optional. Blur image.

**`memberof`** ImageApiHeadMusicGenreImage

#### Defined in

[generated-client/api/image-api.ts:9114](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9114)

___

### cropWhitespace

• `Optional` `Readonly` **cropWhitespace**: `boolean`

Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.

**`memberof`** ImageApiHeadMusicGenreImage

#### Defined in

[generated-client/api/image-api.ts:9100](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9100)

___

### fillHeight

• `Optional` `Readonly` **fillHeight**: `number`

Height of box to fill.

**`memberof`** ImageApiHeadMusicGenreImage

#### Defined in

[generated-client/api/image-api.ts:9093](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9093)

___

### fillWidth

• `Optional` `Readonly` **fillWidth**: `number`

Width of box to fill.

**`memberof`** ImageApiHeadMusicGenreImage

#### Defined in

[generated-client/api/image-api.ts:9086](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9086)

___

### foregroundLayer

• `Optional` `Readonly` **foregroundLayer**: `string`

Optional. Apply a foreground layer on top of the image.

**`memberof`** ImageApiHeadMusicGenreImage

#### Defined in

[generated-client/api/image-api.ts:9128](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9128)

___

### format

• `Optional` `Readonly` **format**: [`ImageFormat`](../enums/generated_client.ImageFormat.md)

Determines the output format of the image - original,gif,jpg,png.

**`memberof`** ImageApiHeadMusicGenreImage

#### Defined in

[generated-client/api/image-api.ts:9030](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9030)

___

### height

• `Optional` `Readonly` **height**: `number`

The fixed image height to return.

**`memberof`** ImageApiHeadMusicGenreImage

#### Defined in

[generated-client/api/image-api.ts:9072](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9072)

___

### imageIndex

• `Optional` `Readonly` **imageIndex**: `number`

Image index.

**`memberof`** ImageApiHeadMusicGenreImage

#### Defined in

[generated-client/api/image-api.ts:9135](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9135)

___

### imageType

• `Readonly` **imageType**: [`ImageType`](../enums/generated_client.ImageType.md)

Image type.

**`memberof`** ImageApiHeadMusicGenreImage

#### Defined in

[generated-client/api/image-api.ts:9016](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9016)

___

### maxHeight

• `Optional` `Readonly` **maxHeight**: `number`

The maximum image height to return.

**`memberof`** ImageApiHeadMusicGenreImage

#### Defined in

[generated-client/api/image-api.ts:9044](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9044)

___

### maxWidth

• `Optional` `Readonly` **maxWidth**: `number`

The maximum image width to return.

**`memberof`** ImageApiHeadMusicGenreImage

#### Defined in

[generated-client/api/image-api.ts:9037](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9037)

___

### name

• `Readonly` **name**: `string`

Music genre name.

**`memberof`** ImageApiHeadMusicGenreImage

#### Defined in

[generated-client/api/image-api.ts:9009](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9009)

___

### percentPlayed

• `Optional` `Readonly` **percentPlayed**: `number`

Optional. Percent to render for the percent played overlay.

**`memberof`** ImageApiHeadMusicGenreImage

#### Defined in

[generated-client/api/image-api.ts:9051](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9051)

___

### quality

• `Optional` `Readonly` **quality**: `number`

Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases.

**`memberof`** ImageApiHeadMusicGenreImage

#### Defined in

[generated-client/api/image-api.ts:9079](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9079)

___

### tag

• `Optional` `Readonly` **tag**: `string`

Optional. Supply the cache tag from the item object to receive strong caching headers.

**`memberof`** ImageApiHeadMusicGenreImage

#### Defined in

[generated-client/api/image-api.ts:9023](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9023)

___

### unplayedCount

• `Optional` `Readonly` **unplayedCount**: `number`

Optional. Unplayed count overlay to render.

**`memberof`** ImageApiHeadMusicGenreImage

#### Defined in

[generated-client/api/image-api.ts:9058](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9058)

___

### width

• `Optional` `Readonly` **width**: `number`

The fixed image width to return.

**`memberof`** ImageApiHeadMusicGenreImage

#### Defined in

[generated-client/api/image-api.ts:9065](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9065)
