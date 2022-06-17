[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / ImageApiHeadMusicGenreImageByIndexRequest

# Interface: ImageApiHeadMusicGenreImageByIndexRequest

[generated-client](../modules/generated_client.md).ImageApiHeadMusicGenreImageByIndexRequest

Request parameters for headMusicGenreImageByIndex operation in ImageApi.

**`export`**

**`interface`** ImageApiHeadMusicGenreImageByIndexRequest

## Table of contents

### Properties

- [addPlayedIndicator](generated_client.ImageApiHeadMusicGenreImageByIndexRequest.md#addplayedindicator)
- [backgroundColor](generated_client.ImageApiHeadMusicGenreImageByIndexRequest.md#backgroundcolor)
- [blur](generated_client.ImageApiHeadMusicGenreImageByIndexRequest.md#blur)
- [cropWhitespace](generated_client.ImageApiHeadMusicGenreImageByIndexRequest.md#cropwhitespace)
- [fillHeight](generated_client.ImageApiHeadMusicGenreImageByIndexRequest.md#fillheight)
- [fillWidth](generated_client.ImageApiHeadMusicGenreImageByIndexRequest.md#fillwidth)
- [foregroundLayer](generated_client.ImageApiHeadMusicGenreImageByIndexRequest.md#foregroundlayer)
- [format](generated_client.ImageApiHeadMusicGenreImageByIndexRequest.md#format)
- [height](generated_client.ImageApiHeadMusicGenreImageByIndexRequest.md#height)
- [imageIndex](generated_client.ImageApiHeadMusicGenreImageByIndexRequest.md#imageindex)
- [imageType](generated_client.ImageApiHeadMusicGenreImageByIndexRequest.md#imagetype)
- [maxHeight](generated_client.ImageApiHeadMusicGenreImageByIndexRequest.md#maxheight)
- [maxWidth](generated_client.ImageApiHeadMusicGenreImageByIndexRequest.md#maxwidth)
- [name](generated_client.ImageApiHeadMusicGenreImageByIndexRequest.md#name)
- [percentPlayed](generated_client.ImageApiHeadMusicGenreImageByIndexRequest.md#percentplayed)
- [quality](generated_client.ImageApiHeadMusicGenreImageByIndexRequest.md#quality)
- [tag](generated_client.ImageApiHeadMusicGenreImageByIndexRequest.md#tag)
- [unplayedCount](generated_client.ImageApiHeadMusicGenreImageByIndexRequest.md#unplayedcount)
- [width](generated_client.ImageApiHeadMusicGenreImageByIndexRequest.md#width)

## Properties

### addPlayedIndicator

• `Optional` `Readonly` **addPlayedIndicator**: `boolean`

Optional. Add a played indicator.

**`memberof`** ImageApiHeadMusicGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9254](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9254)

___

### backgroundColor

• `Optional` `Readonly` **backgroundColor**: `string`

Optional. Apply a background color for transparent images.

**`memberof`** ImageApiHeadMusicGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9268](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9268)

___

### blur

• `Optional` `Readonly` **blur**: `number`

Optional. Blur image.

**`memberof`** ImageApiHeadMusicGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9261](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9261)

___

### cropWhitespace

• `Optional` `Readonly` **cropWhitespace**: `boolean`

Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.

**`memberof`** ImageApiHeadMusicGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9247](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9247)

___

### fillHeight

• `Optional` `Readonly` **fillHeight**: `number`

Height of box to fill.

**`memberof`** ImageApiHeadMusicGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9240](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9240)

___

### fillWidth

• `Optional` `Readonly` **fillWidth**: `number`

Width of box to fill.

**`memberof`** ImageApiHeadMusicGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9233](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9233)

___

### foregroundLayer

• `Optional` `Readonly` **foregroundLayer**: `string`

Optional. Apply a foreground layer on top of the image.

**`memberof`** ImageApiHeadMusicGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9275](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9275)

___

### format

• `Optional` `Readonly` **format**: [`ImageFormat`](../enums/generated_client.ImageFormat.md)

Determines the output format of the image - original,gif,jpg,png.

**`memberof`** ImageApiHeadMusicGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9177](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9177)

___

### height

• `Optional` `Readonly` **height**: `number`

The fixed image height to return.

**`memberof`** ImageApiHeadMusicGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9219](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9219)

___

### imageIndex

• `Readonly` **imageIndex**: `number`

Image index.

**`memberof`** ImageApiHeadMusicGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9163](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9163)

___

### imageType

• `Readonly` **imageType**: [`ImageType`](../enums/generated_client.ImageType.md)

Image type.

**`memberof`** ImageApiHeadMusicGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9156](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9156)

___

### maxHeight

• `Optional` `Readonly` **maxHeight**: `number`

The maximum image height to return.

**`memberof`** ImageApiHeadMusicGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9191](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9191)

___

### maxWidth

• `Optional` `Readonly` **maxWidth**: `number`

The maximum image width to return.

**`memberof`** ImageApiHeadMusicGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9184](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9184)

___

### name

• `Readonly` **name**: `string`

Music genre name.

**`memberof`** ImageApiHeadMusicGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9149](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9149)

___

### percentPlayed

• `Optional` `Readonly` **percentPlayed**: `number`

Optional. Percent to render for the percent played overlay.

**`memberof`** ImageApiHeadMusicGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9198](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9198)

___

### quality

• `Optional` `Readonly` **quality**: `number`

Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases.

**`memberof`** ImageApiHeadMusicGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9226](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9226)

___

### tag

• `Optional` `Readonly` **tag**: `string`

Optional. Supply the cache tag from the item object to receive strong caching headers.

**`memberof`** ImageApiHeadMusicGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9170](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9170)

___

### unplayedCount

• `Optional` `Readonly` **unplayedCount**: `number`

Optional. Unplayed count overlay to render.

**`memberof`** ImageApiHeadMusicGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9205](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9205)

___

### width

• `Optional` `Readonly` **width**: `number`

The fixed image width to return.

**`memberof`** ImageApiHeadMusicGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9212](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9212)
