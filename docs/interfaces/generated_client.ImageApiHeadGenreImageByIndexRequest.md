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

[generated-client/api/image-api.ts:8606](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L8606)

___

### backgroundColor

• `Optional` `Readonly` **backgroundColor**: `string`

Optional. Apply a background color for transparent images.

**`memberof`** ImageApiHeadGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:8620](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L8620)

___

### blur

• `Optional` `Readonly` **blur**: `number`

Optional. Blur image.

**`memberof`** ImageApiHeadGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:8613](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L8613)

___

### cropWhitespace

• `Optional` `Readonly` **cropWhitespace**: `boolean`

Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.

**`memberof`** ImageApiHeadGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:8599](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L8599)

___

### fillHeight

• `Optional` `Readonly` **fillHeight**: `number`

Height of box to fill.

**`memberof`** ImageApiHeadGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:8592](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L8592)

___

### fillWidth

• `Optional` `Readonly` **fillWidth**: `number`

Width of box to fill.

**`memberof`** ImageApiHeadGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:8585](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L8585)

___

### foregroundLayer

• `Optional` `Readonly` **foregroundLayer**: `string`

Optional. Apply a foreground layer on top of the image.

**`memberof`** ImageApiHeadGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:8627](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L8627)

___

### format

• `Optional` `Readonly` **format**: [`ImageFormat`](../enums/generated_client.ImageFormat.md)

Determines the output format of the image - original,gif,jpg,png.

**`memberof`** ImageApiHeadGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:8529](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L8529)

___

### height

• `Optional` `Readonly` **height**: `number`

The fixed image height to return.

**`memberof`** ImageApiHeadGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:8571](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L8571)

___

### imageIndex

• `Readonly` **imageIndex**: `number`

Image index.

**`memberof`** ImageApiHeadGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:8515](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L8515)

___

### imageType

• `Readonly` **imageType**: [`ImageType`](../enums/generated_client.ImageType.md)

Image type.

**`memberof`** ImageApiHeadGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:8508](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L8508)

___

### maxHeight

• `Optional` `Readonly` **maxHeight**: `number`

The maximum image height to return.

**`memberof`** ImageApiHeadGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:8543](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L8543)

___

### maxWidth

• `Optional` `Readonly` **maxWidth**: `number`

The maximum image width to return.

**`memberof`** ImageApiHeadGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:8536](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L8536)

___

### name

• `Readonly` **name**: `string`

Genre name.

**`memberof`** ImageApiHeadGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:8501](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L8501)

___

### percentPlayed

• `Optional` `Readonly` **percentPlayed**: `number`

Optional. Percent to render for the percent played overlay.

**`memberof`** ImageApiHeadGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:8550](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L8550)

___

### quality

• `Optional` `Readonly` **quality**: `number`

Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases.

**`memberof`** ImageApiHeadGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:8578](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L8578)

___

### tag

• `Optional` `Readonly` **tag**: `string`

Optional. Supply the cache tag from the item object to receive strong caching headers.

**`memberof`** ImageApiHeadGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:8522](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L8522)

___

### unplayedCount

• `Optional` `Readonly` **unplayedCount**: `number`

Optional. Unplayed count overlay to render.

**`memberof`** ImageApiHeadGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:8557](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L8557)

___

### width

• `Optional` `Readonly` **width**: `number`

The fixed image width to return.

**`memberof`** ImageApiHeadGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:8564](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L8564)
