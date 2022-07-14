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

[generated-client/api/image-api.ts:7108](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L7108)

___

### backgroundColor

• `Optional` `Readonly` **backgroundColor**: `string`

Optional. Apply a background color for transparent images.

**`memberof`** ImageApiGetMusicGenreImage

#### Defined in

[generated-client/api/image-api.ts:7122](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L7122)

___

### blur

• `Optional` `Readonly` **blur**: `number`

Optional. Blur image.

**`memberof`** ImageApiGetMusicGenreImage

#### Defined in

[generated-client/api/image-api.ts:7115](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L7115)

___

### cropWhitespace

• `Optional` `Readonly` **cropWhitespace**: `boolean`

Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.

**`memberof`** ImageApiGetMusicGenreImage

#### Defined in

[generated-client/api/image-api.ts:7101](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L7101)

___

### fillHeight

• `Optional` `Readonly` **fillHeight**: `number`

Height of box to fill.

**`memberof`** ImageApiGetMusicGenreImage

#### Defined in

[generated-client/api/image-api.ts:7094](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L7094)

___

### fillWidth

• `Optional` `Readonly` **fillWidth**: `number`

Width of box to fill.

**`memberof`** ImageApiGetMusicGenreImage

#### Defined in

[generated-client/api/image-api.ts:7087](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L7087)

___

### foregroundLayer

• `Optional` `Readonly` **foregroundLayer**: `string`

Optional. Apply a foreground layer on top of the image.

**`memberof`** ImageApiGetMusicGenreImage

#### Defined in

[generated-client/api/image-api.ts:7129](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L7129)

___

### format

• `Optional` `Readonly` **format**: [`ImageFormat`](../enums/generated_client.ImageFormat.md)

Determines the output format of the image - original,gif,jpg,png.

**`memberof`** ImageApiGetMusicGenreImage

#### Defined in

[generated-client/api/image-api.ts:7031](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L7031)

___

### height

• `Optional` `Readonly` **height**: `number`

The fixed image height to return.

**`memberof`** ImageApiGetMusicGenreImage

#### Defined in

[generated-client/api/image-api.ts:7073](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L7073)

___

### imageIndex

• `Optional` `Readonly` **imageIndex**: `number`

Image index.

**`memberof`** ImageApiGetMusicGenreImage

#### Defined in

[generated-client/api/image-api.ts:7136](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L7136)

___

### imageType

• `Readonly` **imageType**: [`ImageType`](../enums/generated_client.ImageType.md)

Image type.

**`memberof`** ImageApiGetMusicGenreImage

#### Defined in

[generated-client/api/image-api.ts:7017](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L7017)

___

### maxHeight

• `Optional` `Readonly` **maxHeight**: `number`

The maximum image height to return.

**`memberof`** ImageApiGetMusicGenreImage

#### Defined in

[generated-client/api/image-api.ts:7045](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L7045)

___

### maxWidth

• `Optional` `Readonly` **maxWidth**: `number`

The maximum image width to return.

**`memberof`** ImageApiGetMusicGenreImage

#### Defined in

[generated-client/api/image-api.ts:7038](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L7038)

___

### name

• `Readonly` **name**: `string`

Music genre name.

**`memberof`** ImageApiGetMusicGenreImage

#### Defined in

[generated-client/api/image-api.ts:7010](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L7010)

___

### percentPlayed

• `Optional` `Readonly` **percentPlayed**: `number`

Optional. Percent to render for the percent played overlay.

**`memberof`** ImageApiGetMusicGenreImage

#### Defined in

[generated-client/api/image-api.ts:7052](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L7052)

___

### quality

• `Optional` `Readonly` **quality**: `number`

Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases.

**`memberof`** ImageApiGetMusicGenreImage

#### Defined in

[generated-client/api/image-api.ts:7080](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L7080)

___

### tag

• `Optional` `Readonly` **tag**: `string`

Optional. Supply the cache tag from the item object to receive strong caching headers.

**`memberof`** ImageApiGetMusicGenreImage

#### Defined in

[generated-client/api/image-api.ts:7024](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L7024)

___

### unplayedCount

• `Optional` `Readonly` **unplayedCount**: `number`

Optional. Unplayed count overlay to render.

**`memberof`** ImageApiGetMusicGenreImage

#### Defined in

[generated-client/api/image-api.ts:7059](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L7059)

___

### width

• `Optional` `Readonly` **width**: `number`

The fixed image width to return.

**`memberof`** ImageApiGetMusicGenreImage

#### Defined in

[generated-client/api/image-api.ts:7066](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L7066)
