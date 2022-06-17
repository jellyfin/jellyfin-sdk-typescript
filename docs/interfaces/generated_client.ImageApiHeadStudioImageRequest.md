[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / ImageApiHeadStudioImageRequest

# Interface: ImageApiHeadStudioImageRequest

[generated-client](../modules/generated_client.md).ImageApiHeadStudioImageRequest

Request parameters for headStudioImage operation in ImageApi.

**`export`**

**`interface`** ImageApiHeadStudioImageRequest

## Table of contents

### Properties

- [addPlayedIndicator](generated_client.ImageApiHeadStudioImageRequest.md#addplayedindicator)
- [backgroundColor](generated_client.ImageApiHeadStudioImageRequest.md#backgroundcolor)
- [blur](generated_client.ImageApiHeadStudioImageRequest.md#blur)
- [cropWhitespace](generated_client.ImageApiHeadStudioImageRequest.md#cropwhitespace)
- [fillHeight](generated_client.ImageApiHeadStudioImageRequest.md#fillheight)
- [fillWidth](generated_client.ImageApiHeadStudioImageRequest.md#fillwidth)
- [foregroundLayer](generated_client.ImageApiHeadStudioImageRequest.md#foregroundlayer)
- [format](generated_client.ImageApiHeadStudioImageRequest.md#format)
- [height](generated_client.ImageApiHeadStudioImageRequest.md#height)
- [imageIndex](generated_client.ImageApiHeadStudioImageRequest.md#imageindex)
- [imageType](generated_client.ImageApiHeadStudioImageRequest.md#imagetype)
- [maxHeight](generated_client.ImageApiHeadStudioImageRequest.md#maxheight)
- [maxWidth](generated_client.ImageApiHeadStudioImageRequest.md#maxwidth)
- [name](generated_client.ImageApiHeadStudioImageRequest.md#name)
- [percentPlayed](generated_client.ImageApiHeadStudioImageRequest.md#percentplayed)
- [quality](generated_client.ImageApiHeadStudioImageRequest.md#quality)
- [tag](generated_client.ImageApiHeadStudioImageRequest.md#tag)
- [unplayedCount](generated_client.ImageApiHeadStudioImageRequest.md#unplayedcount)
- [width](generated_client.ImageApiHeadStudioImageRequest.md#width)

## Properties

### addPlayedIndicator

• `Optional` `Readonly` **addPlayedIndicator**: `boolean`

Optional. Add a played indicator.

**`memberof`** ImageApiHeadStudioImage

#### Defined in

[generated-client/api/image-api.ts:9667](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9667)

___

### backgroundColor

• `Optional` `Readonly` **backgroundColor**: `string`

Optional. Apply a background color for transparent images.

**`memberof`** ImageApiHeadStudioImage

#### Defined in

[generated-client/api/image-api.ts:9681](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9681)

___

### blur

• `Optional` `Readonly` **blur**: `number`

Optional. Blur image.

**`memberof`** ImageApiHeadStudioImage

#### Defined in

[generated-client/api/image-api.ts:9674](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9674)

___

### cropWhitespace

• `Optional` `Readonly` **cropWhitespace**: `boolean`

Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.

**`memberof`** ImageApiHeadStudioImage

#### Defined in

[generated-client/api/image-api.ts:9660](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9660)

___

### fillHeight

• `Optional` `Readonly` **fillHeight**: `number`

Height of box to fill.

**`memberof`** ImageApiHeadStudioImage

#### Defined in

[generated-client/api/image-api.ts:9653](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9653)

___

### fillWidth

• `Optional` `Readonly` **fillWidth**: `number`

Width of box to fill.

**`memberof`** ImageApiHeadStudioImage

#### Defined in

[generated-client/api/image-api.ts:9646](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9646)

___

### foregroundLayer

• `Optional` `Readonly` **foregroundLayer**: `string`

Optional. Apply a foreground layer on top of the image.

**`memberof`** ImageApiHeadStudioImage

#### Defined in

[generated-client/api/image-api.ts:9688](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9688)

___

### format

• `Optional` `Readonly` **format**: [`ImageFormat`](../enums/generated_client.ImageFormat.md)

Determines the output format of the image - original,gif,jpg,png.

**`memberof`** ImageApiHeadStudioImage

#### Defined in

[generated-client/api/image-api.ts:9590](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9590)

___

### height

• `Optional` `Readonly` **height**: `number`

The fixed image height to return.

**`memberof`** ImageApiHeadStudioImage

#### Defined in

[generated-client/api/image-api.ts:9632](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9632)

___

### imageIndex

• `Optional` `Readonly` **imageIndex**: `number`

Image index.

**`memberof`** ImageApiHeadStudioImage

#### Defined in

[generated-client/api/image-api.ts:9695](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9695)

___

### imageType

• `Readonly` **imageType**: [`ImageType`](../enums/generated_client.ImageType.md)

Image type.

**`memberof`** ImageApiHeadStudioImage

#### Defined in

[generated-client/api/image-api.ts:9576](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9576)

___

### maxHeight

• `Optional` `Readonly` **maxHeight**: `number`

The maximum image height to return.

**`memberof`** ImageApiHeadStudioImage

#### Defined in

[generated-client/api/image-api.ts:9604](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9604)

___

### maxWidth

• `Optional` `Readonly` **maxWidth**: `number`

The maximum image width to return.

**`memberof`** ImageApiHeadStudioImage

#### Defined in

[generated-client/api/image-api.ts:9597](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9597)

___

### name

• `Readonly` **name**: `string`

Studio name.

**`memberof`** ImageApiHeadStudioImage

#### Defined in

[generated-client/api/image-api.ts:9569](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9569)

___

### percentPlayed

• `Optional` `Readonly` **percentPlayed**: `number`

Optional. Percent to render for the percent played overlay.

**`memberof`** ImageApiHeadStudioImage

#### Defined in

[generated-client/api/image-api.ts:9611](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9611)

___

### quality

• `Optional` `Readonly` **quality**: `number`

Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases.

**`memberof`** ImageApiHeadStudioImage

#### Defined in

[generated-client/api/image-api.ts:9639](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9639)

___

### tag

• `Optional` `Readonly` **tag**: `string`

Optional. Supply the cache tag from the item object to receive strong caching headers.

**`memberof`** ImageApiHeadStudioImage

#### Defined in

[generated-client/api/image-api.ts:9583](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9583)

___

### unplayedCount

• `Optional` `Readonly` **unplayedCount**: `number`

Optional. Unplayed count overlay to render.

**`memberof`** ImageApiHeadStudioImage

#### Defined in

[generated-client/api/image-api.ts:9618](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9618)

___

### width

• `Optional` `Readonly` **width**: `number`

The fixed image width to return.

**`memberof`** ImageApiHeadStudioImage

#### Defined in

[generated-client/api/image-api.ts:9625](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9625)
