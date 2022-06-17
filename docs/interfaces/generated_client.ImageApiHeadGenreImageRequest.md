[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / ImageApiHeadGenreImageRequest

# Interface: ImageApiHeadGenreImageRequest

[generated-client](../modules/generated_client.md).ImageApiHeadGenreImageRequest

Request parameters for headGenreImage operation in ImageApi.

**`export`**

**`interface`** ImageApiHeadGenreImageRequest

## Table of contents

### Properties

- [addPlayedIndicator](generated_client.ImageApiHeadGenreImageRequest.md#addplayedindicator)
- [backgroundColor](generated_client.ImageApiHeadGenreImageRequest.md#backgroundcolor)
- [blur](generated_client.ImageApiHeadGenreImageRequest.md#blur)
- [cropWhitespace](generated_client.ImageApiHeadGenreImageRequest.md#cropwhitespace)
- [fillHeight](generated_client.ImageApiHeadGenreImageRequest.md#fillheight)
- [fillWidth](generated_client.ImageApiHeadGenreImageRequest.md#fillwidth)
- [foregroundLayer](generated_client.ImageApiHeadGenreImageRequest.md#foregroundlayer)
- [format](generated_client.ImageApiHeadGenreImageRequest.md#format)
- [height](generated_client.ImageApiHeadGenreImageRequest.md#height)
- [imageIndex](generated_client.ImageApiHeadGenreImageRequest.md#imageindex)
- [imageType](generated_client.ImageApiHeadGenreImageRequest.md#imagetype)
- [maxHeight](generated_client.ImageApiHeadGenreImageRequest.md#maxheight)
- [maxWidth](generated_client.ImageApiHeadGenreImageRequest.md#maxwidth)
- [name](generated_client.ImageApiHeadGenreImageRequest.md#name)
- [percentPlayed](generated_client.ImageApiHeadGenreImageRequest.md#percentplayed)
- [quality](generated_client.ImageApiHeadGenreImageRequest.md#quality)
- [tag](generated_client.ImageApiHeadGenreImageRequest.md#tag)
- [unplayedCount](generated_client.ImageApiHeadGenreImageRequest.md#unplayedcount)
- [width](generated_client.ImageApiHeadGenreImageRequest.md#width)

## Properties

### addPlayedIndicator

• `Optional` `Readonly` **addPlayedIndicator**: `boolean`

Optional. Add a played indicator.

**`memberof`** ImageApiHeadGenreImage

#### Defined in

[generated-client/api/image-api.ts:8407](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L8407)

___

### backgroundColor

• `Optional` `Readonly` **backgroundColor**: `string`

Optional. Apply a background color for transparent images.

**`memberof`** ImageApiHeadGenreImage

#### Defined in

[generated-client/api/image-api.ts:8421](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L8421)

___

### blur

• `Optional` `Readonly` **blur**: `number`

Optional. Blur image.

**`memberof`** ImageApiHeadGenreImage

#### Defined in

[generated-client/api/image-api.ts:8414](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L8414)

___

### cropWhitespace

• `Optional` `Readonly` **cropWhitespace**: `boolean`

Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.

**`memberof`** ImageApiHeadGenreImage

#### Defined in

[generated-client/api/image-api.ts:8400](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L8400)

___

### fillHeight

• `Optional` `Readonly` **fillHeight**: `number`

Height of box to fill.

**`memberof`** ImageApiHeadGenreImage

#### Defined in

[generated-client/api/image-api.ts:8393](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L8393)

___

### fillWidth

• `Optional` `Readonly` **fillWidth**: `number`

Width of box to fill.

**`memberof`** ImageApiHeadGenreImage

#### Defined in

[generated-client/api/image-api.ts:8386](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L8386)

___

### foregroundLayer

• `Optional` `Readonly` **foregroundLayer**: `string`

Optional. Apply a foreground layer on top of the image.

**`memberof`** ImageApiHeadGenreImage

#### Defined in

[generated-client/api/image-api.ts:8428](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L8428)

___

### format

• `Optional` `Readonly` **format**: [`ImageFormat`](../enums/generated_client.ImageFormat.md)

Determines the output format of the image - original,gif,jpg,png.

**`memberof`** ImageApiHeadGenreImage

#### Defined in

[generated-client/api/image-api.ts:8330](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L8330)

___

### height

• `Optional` `Readonly` **height**: `number`

The fixed image height to return.

**`memberof`** ImageApiHeadGenreImage

#### Defined in

[generated-client/api/image-api.ts:8372](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L8372)

___

### imageIndex

• `Optional` `Readonly` **imageIndex**: `number`

Image index.

**`memberof`** ImageApiHeadGenreImage

#### Defined in

[generated-client/api/image-api.ts:8435](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L8435)

___

### imageType

• `Readonly` **imageType**: [`ImageType`](../enums/generated_client.ImageType.md)

Image type.

**`memberof`** ImageApiHeadGenreImage

#### Defined in

[generated-client/api/image-api.ts:8316](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L8316)

___

### maxHeight

• `Optional` `Readonly` **maxHeight**: `number`

The maximum image height to return.

**`memberof`** ImageApiHeadGenreImage

#### Defined in

[generated-client/api/image-api.ts:8344](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L8344)

___

### maxWidth

• `Optional` `Readonly` **maxWidth**: `number`

The maximum image width to return.

**`memberof`** ImageApiHeadGenreImage

#### Defined in

[generated-client/api/image-api.ts:8337](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L8337)

___

### name

• `Readonly` **name**: `string`

Genre name.

**`memberof`** ImageApiHeadGenreImage

#### Defined in

[generated-client/api/image-api.ts:8309](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L8309)

___

### percentPlayed

• `Optional` `Readonly` **percentPlayed**: `number`

Optional. Percent to render for the percent played overlay.

**`memberof`** ImageApiHeadGenreImage

#### Defined in

[generated-client/api/image-api.ts:8351](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L8351)

___

### quality

• `Optional` `Readonly` **quality**: `number`

Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases.

**`memberof`** ImageApiHeadGenreImage

#### Defined in

[generated-client/api/image-api.ts:8379](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L8379)

___

### tag

• `Optional` `Readonly` **tag**: `string`

Optional. Supply the cache tag from the item object to receive strong caching headers.

**`memberof`** ImageApiHeadGenreImage

#### Defined in

[generated-client/api/image-api.ts:8323](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L8323)

___

### unplayedCount

• `Optional` `Readonly` **unplayedCount**: `number`

Optional. Unplayed count overlay to render.

**`memberof`** ImageApiHeadGenreImage

#### Defined in

[generated-client/api/image-api.ts:8358](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L8358)

___

### width

• `Optional` `Readonly` **width**: `number`

The fixed image width to return.

**`memberof`** ImageApiHeadGenreImage

#### Defined in

[generated-client/api/image-api.ts:8365](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L8365)
