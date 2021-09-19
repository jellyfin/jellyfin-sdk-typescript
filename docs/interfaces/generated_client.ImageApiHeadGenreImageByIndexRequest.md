[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / ImageApiHeadGenreImageByIndexRequest

# Interface: ImageApiHeadGenreImageByIndexRequest

[generated-client](../modules/generated_client.md).ImageApiHeadGenreImageByIndexRequest

Request parameters for headGenreImageByIndex operation in ImageApi.

**`export`**

**`interface`** ImageApiHeadGenreImageByIndexRequest

## Table of contents

### Properties

- [addPlayedIndicator](generated_client.ImageApiHeadGenreImageByIndexRequest.md#addplayedindicator)
- [backgroundColor](generated_client.ImageApiHeadGenreImageByIndexRequest.md#backgroundcolor)
- [blur](generated_client.ImageApiHeadGenreImageByIndexRequest.md#blur)
- [cropWhitespace](generated_client.ImageApiHeadGenreImageByIndexRequest.md#cropwhitespace)
- [fillHeight](generated_client.ImageApiHeadGenreImageByIndexRequest.md#fillheight)
- [fillWidth](generated_client.ImageApiHeadGenreImageByIndexRequest.md#fillwidth)
- [foregroundLayer](generated_client.ImageApiHeadGenreImageByIndexRequest.md#foregroundlayer)
- [format](generated_client.ImageApiHeadGenreImageByIndexRequest.md#format)
- [height](generated_client.ImageApiHeadGenreImageByIndexRequest.md#height)
- [imageIndex](generated_client.ImageApiHeadGenreImageByIndexRequest.md#imageindex)
- [imageType](generated_client.ImageApiHeadGenreImageByIndexRequest.md#imagetype)
- [maxHeight](generated_client.ImageApiHeadGenreImageByIndexRequest.md#maxheight)
- [maxWidth](generated_client.ImageApiHeadGenreImageByIndexRequest.md#maxwidth)
- [name](generated_client.ImageApiHeadGenreImageByIndexRequest.md#name)
- [percentPlayed](generated_client.ImageApiHeadGenreImageByIndexRequest.md#percentplayed)
- [quality](generated_client.ImageApiHeadGenreImageByIndexRequest.md#quality)
- [tag](generated_client.ImageApiHeadGenreImageByIndexRequest.md#tag)
- [unplayedCount](generated_client.ImageApiHeadGenreImageByIndexRequest.md#unplayedcount)
- [width](generated_client.ImageApiHeadGenreImageByIndexRequest.md#width)

## Properties

### addPlayedIndicator

• `Optional` `Readonly` **addPlayedIndicator**: `boolean`

Optional. Add a played indicator.

**`memberof`** ImageApiHeadGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:8272](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/api/image-api.ts#L8272)

___

### backgroundColor

• `Optional` `Readonly` **backgroundColor**: `string`

Optional. Apply a background color for transparent images.

**`memberof`** ImageApiHeadGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:8286](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/api/image-api.ts#L8286)

___

### blur

• `Optional` `Readonly` **blur**: `number`

Optional. Blur image.

**`memberof`** ImageApiHeadGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:8279](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/api/image-api.ts#L8279)

___

### cropWhitespace

• `Optional` `Readonly` **cropWhitespace**: `boolean`

Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.

**`memberof`** ImageApiHeadGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:8265](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/api/image-api.ts#L8265)

___

### fillHeight

• `Optional` `Readonly` **fillHeight**: `number`

Height of box to fill.

**`memberof`** ImageApiHeadGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:8258](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/api/image-api.ts#L8258)

___

### fillWidth

• `Optional` `Readonly` **fillWidth**: `number`

Width of box to fill.

**`memberof`** ImageApiHeadGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:8251](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/api/image-api.ts#L8251)

___

### foregroundLayer

• `Optional` `Readonly` **foregroundLayer**: `string`

Optional. Apply a foreground layer on top of the image.

**`memberof`** ImageApiHeadGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:8293](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/api/image-api.ts#L8293)

___

### format

• `Optional` `Readonly` **format**: [`ImageFormat`](../enums/generated_client.ImageFormat.md)

Determines the output format of the image - original,gif,jpg,png.

**`memberof`** ImageApiHeadGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:8195](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/api/image-api.ts#L8195)

___

### height

• `Optional` `Readonly` **height**: `number`

The fixed image height to return.

**`memberof`** ImageApiHeadGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:8237](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/api/image-api.ts#L8237)

___

### imageIndex

• `Readonly` **imageIndex**: `number`

Image index.

**`memberof`** ImageApiHeadGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:8181](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/api/image-api.ts#L8181)

___

### imageType

• `Readonly` **imageType**: [`ImageType`](../enums/generated_client.ImageType.md)

Image type.

**`memberof`** ImageApiHeadGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:8174](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/api/image-api.ts#L8174)

___

### maxHeight

• `Optional` `Readonly` **maxHeight**: `number`

The maximum image height to return.

**`memberof`** ImageApiHeadGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:8209](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/api/image-api.ts#L8209)

___

### maxWidth

• `Optional` `Readonly` **maxWidth**: `number`

The maximum image width to return.

**`memberof`** ImageApiHeadGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:8202](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/api/image-api.ts#L8202)

___

### name

• `Readonly` **name**: `string`

Genre name.

**`memberof`** ImageApiHeadGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:8167](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/api/image-api.ts#L8167)

___

### percentPlayed

• `Optional` `Readonly` **percentPlayed**: `number`

Optional. Percent to render for the percent played overlay.

**`memberof`** ImageApiHeadGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:8216](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/api/image-api.ts#L8216)

___

### quality

• `Optional` `Readonly` **quality**: `number`

Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases.

**`memberof`** ImageApiHeadGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:8244](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/api/image-api.ts#L8244)

___

### tag

• `Optional` `Readonly` **tag**: `string`

Optional. Supply the cache tag from the item object to receive strong caching headers.

**`memberof`** ImageApiHeadGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:8188](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/api/image-api.ts#L8188)

___

### unplayedCount

• `Optional` `Readonly` **unplayedCount**: `number`

Optional. Unplayed count overlay to render.

**`memberof`** ImageApiHeadGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:8223](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/api/image-api.ts#L8223)

___

### width

• `Optional` `Readonly` **width**: `number`

The fixed image width to return.

**`memberof`** ImageApiHeadGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:8230](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/api/image-api.ts#L8230)
