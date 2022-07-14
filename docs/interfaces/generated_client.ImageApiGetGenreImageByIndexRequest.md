[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / ImageApiGetGenreImageByIndexRequest

# Interface: ImageApiGetGenreImageByIndexRequest

[generated-client](../modules/generated_client.md).ImageApiGetGenreImageByIndexRequest

Request parameters for getGenreImageByIndex operation in ImageApi.

**`export`**

**`interface`** ImageApiGetGenreImageByIndexRequest

## Table of contents

### Properties

- [addPlayedIndicator](generated_client.ImageApiGetGenreImageByIndexRequest.md#addplayedindicator)
- [backgroundColor](generated_client.ImageApiGetGenreImageByIndexRequest.md#backgroundcolor)
- [blur](generated_client.ImageApiGetGenreImageByIndexRequest.md#blur)
- [cropWhitespace](generated_client.ImageApiGetGenreImageByIndexRequest.md#cropwhitespace)
- [fillHeight](generated_client.ImageApiGetGenreImageByIndexRequest.md#fillheight)
- [fillWidth](generated_client.ImageApiGetGenreImageByIndexRequest.md#fillwidth)
- [foregroundLayer](generated_client.ImageApiGetGenreImageByIndexRequest.md#foregroundlayer)
- [format](generated_client.ImageApiGetGenreImageByIndexRequest.md#format)
- [height](generated_client.ImageApiGetGenreImageByIndexRequest.md#height)
- [imageIndex](generated_client.ImageApiGetGenreImageByIndexRequest.md#imageindex)
- [imageType](generated_client.ImageApiGetGenreImageByIndexRequest.md#imagetype)
- [maxHeight](generated_client.ImageApiGetGenreImageByIndexRequest.md#maxheight)
- [maxWidth](generated_client.ImageApiGetGenreImageByIndexRequest.md#maxwidth)
- [name](generated_client.ImageApiGetGenreImageByIndexRequest.md#name)
- [percentPlayed](generated_client.ImageApiGetGenreImageByIndexRequest.md#percentplayed)
- [quality](generated_client.ImageApiGetGenreImageByIndexRequest.md#quality)
- [tag](generated_client.ImageApiGetGenreImageByIndexRequest.md#tag)
- [unplayedCount](generated_client.ImageApiGetGenreImageByIndexRequest.md#unplayedcount)
- [width](generated_client.ImageApiGetGenreImageByIndexRequest.md#width)

## Properties

### addPlayedIndicator

• `Optional` `Readonly` **addPlayedIndicator**: `boolean`

Optional. Add a played indicator.

**`memberof`** ImageApiGetGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:6541](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L6541)

___

### backgroundColor

• `Optional` `Readonly` **backgroundColor**: `string`

Optional. Apply a background color for transparent images.

**`memberof`** ImageApiGetGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:6555](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L6555)

___

### blur

• `Optional` `Readonly` **blur**: `number`

Optional. Blur image.

**`memberof`** ImageApiGetGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:6548](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L6548)

___

### cropWhitespace

• `Optional` `Readonly` **cropWhitespace**: `boolean`

Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.

**`memberof`** ImageApiGetGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:6534](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L6534)

___

### fillHeight

• `Optional` `Readonly` **fillHeight**: `number`

Height of box to fill.

**`memberof`** ImageApiGetGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:6527](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L6527)

___

### fillWidth

• `Optional` `Readonly` **fillWidth**: `number`

Width of box to fill.

**`memberof`** ImageApiGetGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:6520](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L6520)

___

### foregroundLayer

• `Optional` `Readonly` **foregroundLayer**: `string`

Optional. Apply a foreground layer on top of the image.

**`memberof`** ImageApiGetGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:6562](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L6562)

___

### format

• `Optional` `Readonly` **format**: [`ImageFormat`](../enums/generated_client.ImageFormat.md)

Determines the output format of the image - original,gif,jpg,png.

**`memberof`** ImageApiGetGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:6464](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L6464)

___

### height

• `Optional` `Readonly` **height**: `number`

The fixed image height to return.

**`memberof`** ImageApiGetGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:6506](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L6506)

___

### imageIndex

• `Readonly` **imageIndex**: `number`

Image index.

**`memberof`** ImageApiGetGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:6450](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L6450)

___

### imageType

• `Readonly` **imageType**: [`ImageType`](../enums/generated_client.ImageType.md)

Image type.

**`memberof`** ImageApiGetGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:6443](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L6443)

___

### maxHeight

• `Optional` `Readonly` **maxHeight**: `number`

The maximum image height to return.

**`memberof`** ImageApiGetGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:6478](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L6478)

___

### maxWidth

• `Optional` `Readonly` **maxWidth**: `number`

The maximum image width to return.

**`memberof`** ImageApiGetGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:6471](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L6471)

___

### name

• `Readonly` **name**: `string`

Genre name.

**`memberof`** ImageApiGetGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:6436](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L6436)

___

### percentPlayed

• `Optional` `Readonly` **percentPlayed**: `number`

Optional. Percent to render for the percent played overlay.

**`memberof`** ImageApiGetGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:6485](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L6485)

___

### quality

• `Optional` `Readonly` **quality**: `number`

Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases.

**`memberof`** ImageApiGetGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:6513](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L6513)

___

### tag

• `Optional` `Readonly` **tag**: `string`

Optional. Supply the cache tag from the item object to receive strong caching headers.

**`memberof`** ImageApiGetGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:6457](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L6457)

___

### unplayedCount

• `Optional` `Readonly` **unplayedCount**: `number`

Optional. Unplayed count overlay to render.

**`memberof`** ImageApiGetGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:6492](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L6492)

___

### width

• `Optional` `Readonly` **width**: `number`

The fixed image width to return.

**`memberof`** ImageApiGetGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:6499](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L6499)
