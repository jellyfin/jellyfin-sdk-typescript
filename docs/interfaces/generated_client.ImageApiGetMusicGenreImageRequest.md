[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / ImageApiGetMusicGenreImageRequest

# Interface: ImageApiGetMusicGenreImageRequest

[generated-client](../modules/generated_client.md).ImageApiGetMusicGenreImageRequest

Request parameters for getMusicGenreImage operation in ImageApi.

**`export`**

**`interface`** ImageApiGetMusicGenreImageRequest

## Table of contents

### Properties

- [addPlayedIndicator](generated_client.ImageApiGetMusicGenreImageRequest.md#addplayedindicator)
- [backgroundColor](generated_client.ImageApiGetMusicGenreImageRequest.md#backgroundcolor)
- [blur](generated_client.ImageApiGetMusicGenreImageRequest.md#blur)
- [cropWhitespace](generated_client.ImageApiGetMusicGenreImageRequest.md#cropwhitespace)
- [fillHeight](generated_client.ImageApiGetMusicGenreImageRequest.md#fillheight)
- [fillWidth](generated_client.ImageApiGetMusicGenreImageRequest.md#fillwidth)
- [foregroundLayer](generated_client.ImageApiGetMusicGenreImageRequest.md#foregroundlayer)
- [format](generated_client.ImageApiGetMusicGenreImageRequest.md#format)
- [height](generated_client.ImageApiGetMusicGenreImageRequest.md#height)
- [imageIndex](generated_client.ImageApiGetMusicGenreImageRequest.md#imageindex)
- [imageType](generated_client.ImageApiGetMusicGenreImageRequest.md#imagetype)
- [maxHeight](generated_client.ImageApiGetMusicGenreImageRequest.md#maxheight)
- [maxWidth](generated_client.ImageApiGetMusicGenreImageRequest.md#maxwidth)
- [name](generated_client.ImageApiGetMusicGenreImageRequest.md#name)
- [percentPlayed](generated_client.ImageApiGetMusicGenreImageRequest.md#percentplayed)
- [quality](generated_client.ImageApiGetMusicGenreImageRequest.md#quality)
- [tag](generated_client.ImageApiGetMusicGenreImageRequest.md#tag)
- [unplayedCount](generated_client.ImageApiGetMusicGenreImageRequest.md#unplayedcount)
- [width](generated_client.ImageApiGetMusicGenreImageRequest.md#width)

## Properties

### addPlayedIndicator

• `Optional` `Readonly` **addPlayedIndicator**: `boolean`

Optional. Add a played indicator.

**`memberof`** ImageApiGetMusicGenreImage

#### Defined in

[generated-client/api/image-api.ts:7056](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L7056)

___

### backgroundColor

• `Optional` `Readonly` **backgroundColor**: `string`

Optional. Apply a background color for transparent images.

**`memberof`** ImageApiGetMusicGenreImage

#### Defined in

[generated-client/api/image-api.ts:7070](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L7070)

___

### blur

• `Optional` `Readonly` **blur**: `number`

Optional. Blur image.

**`memberof`** ImageApiGetMusicGenreImage

#### Defined in

[generated-client/api/image-api.ts:7063](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L7063)

___

### cropWhitespace

• `Optional` `Readonly` **cropWhitespace**: `boolean`

Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.

**`memberof`** ImageApiGetMusicGenreImage

#### Defined in

[generated-client/api/image-api.ts:7049](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L7049)

___

### fillHeight

• `Optional` `Readonly` **fillHeight**: `number`

Height of box to fill.

**`memberof`** ImageApiGetMusicGenreImage

#### Defined in

[generated-client/api/image-api.ts:7042](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L7042)

___

### fillWidth

• `Optional` `Readonly` **fillWidth**: `number`

Width of box to fill.

**`memberof`** ImageApiGetMusicGenreImage

#### Defined in

[generated-client/api/image-api.ts:7035](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L7035)

___

### foregroundLayer

• `Optional` `Readonly` **foregroundLayer**: `string`

Optional. Apply a foreground layer on top of the image.

**`memberof`** ImageApiGetMusicGenreImage

#### Defined in

[generated-client/api/image-api.ts:7077](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L7077)

___

### format

• `Optional` `Readonly` **format**: [`ImageFormat`](../enums/generated_client.ImageFormat.md)

Determines the output format of the image - original,gif,jpg,png.

**`memberof`** ImageApiGetMusicGenreImage

#### Defined in

[generated-client/api/image-api.ts:6979](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L6979)

___

### height

• `Optional` `Readonly` **height**: `number`

The fixed image height to return.

**`memberof`** ImageApiGetMusicGenreImage

#### Defined in

[generated-client/api/image-api.ts:7021](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L7021)

___

### imageIndex

• `Optional` `Readonly` **imageIndex**: `number`

Image index.

**`memberof`** ImageApiGetMusicGenreImage

#### Defined in

[generated-client/api/image-api.ts:7084](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L7084)

___

### imageType

• `Readonly` **imageType**: [`ImageType`](../enums/generated_client.ImageType.md)

Image type.

**`memberof`** ImageApiGetMusicGenreImage

#### Defined in

[generated-client/api/image-api.ts:6965](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L6965)

___

### maxHeight

• `Optional` `Readonly` **maxHeight**: `number`

The maximum image height to return.

**`memberof`** ImageApiGetMusicGenreImage

#### Defined in

[generated-client/api/image-api.ts:6993](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L6993)

___

### maxWidth

• `Optional` `Readonly` **maxWidth**: `number`

The maximum image width to return.

**`memberof`** ImageApiGetMusicGenreImage

#### Defined in

[generated-client/api/image-api.ts:6986](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L6986)

___

### name

• `Readonly` **name**: `string`

Music genre name.

**`memberof`** ImageApiGetMusicGenreImage

#### Defined in

[generated-client/api/image-api.ts:6958](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L6958)

___

### percentPlayed

• `Optional` `Readonly` **percentPlayed**: `number`

Optional. Percent to render for the percent played overlay.

**`memberof`** ImageApiGetMusicGenreImage

#### Defined in

[generated-client/api/image-api.ts:7000](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L7000)

___

### quality

• `Optional` `Readonly` **quality**: `number`

Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases.

**`memberof`** ImageApiGetMusicGenreImage

#### Defined in

[generated-client/api/image-api.ts:7028](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L7028)

___

### tag

• `Optional` `Readonly` **tag**: `string`

Optional. Supply the cache tag from the item object to receive strong caching headers.

**`memberof`** ImageApiGetMusicGenreImage

#### Defined in

[generated-client/api/image-api.ts:6972](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L6972)

___

### unplayedCount

• `Optional` `Readonly` **unplayedCount**: `number`

Optional. Unplayed count overlay to render.

**`memberof`** ImageApiGetMusicGenreImage

#### Defined in

[generated-client/api/image-api.ts:7007](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L7007)

___

### width

• `Optional` `Readonly` **width**: `number`

The fixed image width to return.

**`memberof`** ImageApiGetMusicGenreImage

#### Defined in

[generated-client/api/image-api.ts:7014](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L7014)
