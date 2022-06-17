[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / ImageApiHeadPersonImageRequest

# Interface: ImageApiHeadPersonImageRequest

[generated-client](../modules/generated_client.md).ImageApiHeadPersonImageRequest

Request parameters for headPersonImage operation in ImageApi.

**`export`**

**`interface`** ImageApiHeadPersonImageRequest

## Table of contents

### Properties

- [addPlayedIndicator](generated_client.ImageApiHeadPersonImageRequest.md#addplayedindicator)
- [backgroundColor](generated_client.ImageApiHeadPersonImageRequest.md#backgroundcolor)
- [blur](generated_client.ImageApiHeadPersonImageRequest.md#blur)
- [cropWhitespace](generated_client.ImageApiHeadPersonImageRequest.md#cropwhitespace)
- [fillHeight](generated_client.ImageApiHeadPersonImageRequest.md#fillheight)
- [fillWidth](generated_client.ImageApiHeadPersonImageRequest.md#fillwidth)
- [foregroundLayer](generated_client.ImageApiHeadPersonImageRequest.md#foregroundlayer)
- [format](generated_client.ImageApiHeadPersonImageRequest.md#format)
- [height](generated_client.ImageApiHeadPersonImageRequest.md#height)
- [imageIndex](generated_client.ImageApiHeadPersonImageRequest.md#imageindex)
- [imageType](generated_client.ImageApiHeadPersonImageRequest.md#imagetype)
- [maxHeight](generated_client.ImageApiHeadPersonImageRequest.md#maxheight)
- [maxWidth](generated_client.ImageApiHeadPersonImageRequest.md#maxwidth)
- [name](generated_client.ImageApiHeadPersonImageRequest.md#name)
- [percentPlayed](generated_client.ImageApiHeadPersonImageRequest.md#percentplayed)
- [quality](generated_client.ImageApiHeadPersonImageRequest.md#quality)
- [tag](generated_client.ImageApiHeadPersonImageRequest.md#tag)
- [unplayedCount](generated_client.ImageApiHeadPersonImageRequest.md#unplayedcount)
- [width](generated_client.ImageApiHeadPersonImageRequest.md#width)

## Properties

### addPlayedIndicator

• `Optional` `Readonly` **addPlayedIndicator**: `boolean`

Optional. Add a played indicator.

**`memberof`** ImageApiHeadPersonImage

#### Defined in

[generated-client/api/image-api.ts:9387](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9387)

___

### backgroundColor

• `Optional` `Readonly` **backgroundColor**: `string`

Optional. Apply a background color for transparent images.

**`memberof`** ImageApiHeadPersonImage

#### Defined in

[generated-client/api/image-api.ts:9401](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9401)

___

### blur

• `Optional` `Readonly` **blur**: `number`

Optional. Blur image.

**`memberof`** ImageApiHeadPersonImage

#### Defined in

[generated-client/api/image-api.ts:9394](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9394)

___

### cropWhitespace

• `Optional` `Readonly` **cropWhitespace**: `boolean`

Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.

**`memberof`** ImageApiHeadPersonImage

#### Defined in

[generated-client/api/image-api.ts:9380](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9380)

___

### fillHeight

• `Optional` `Readonly` **fillHeight**: `number`

Height of box to fill.

**`memberof`** ImageApiHeadPersonImage

#### Defined in

[generated-client/api/image-api.ts:9373](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9373)

___

### fillWidth

• `Optional` `Readonly` **fillWidth**: `number`

Width of box to fill.

**`memberof`** ImageApiHeadPersonImage

#### Defined in

[generated-client/api/image-api.ts:9366](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9366)

___

### foregroundLayer

• `Optional` `Readonly` **foregroundLayer**: `string`

Optional. Apply a foreground layer on top of the image.

**`memberof`** ImageApiHeadPersonImage

#### Defined in

[generated-client/api/image-api.ts:9408](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9408)

___

### format

• `Optional` `Readonly` **format**: [`ImageFormat`](../enums/generated_client.ImageFormat.md)

Determines the output format of the image - original,gif,jpg,png.

**`memberof`** ImageApiHeadPersonImage

#### Defined in

[generated-client/api/image-api.ts:9310](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9310)

___

### height

• `Optional` `Readonly` **height**: `number`

The fixed image height to return.

**`memberof`** ImageApiHeadPersonImage

#### Defined in

[generated-client/api/image-api.ts:9352](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9352)

___

### imageIndex

• `Optional` `Readonly` **imageIndex**: `number`

Image index.

**`memberof`** ImageApiHeadPersonImage

#### Defined in

[generated-client/api/image-api.ts:9415](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9415)

___

### imageType

• `Readonly` **imageType**: [`ImageType`](../enums/generated_client.ImageType.md)

Image type.

**`memberof`** ImageApiHeadPersonImage

#### Defined in

[generated-client/api/image-api.ts:9296](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9296)

___

### maxHeight

• `Optional` `Readonly` **maxHeight**: `number`

The maximum image height to return.

**`memberof`** ImageApiHeadPersonImage

#### Defined in

[generated-client/api/image-api.ts:9324](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9324)

___

### maxWidth

• `Optional` `Readonly` **maxWidth**: `number`

The maximum image width to return.

**`memberof`** ImageApiHeadPersonImage

#### Defined in

[generated-client/api/image-api.ts:9317](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9317)

___

### name

• `Readonly` **name**: `string`

Person name.

**`memberof`** ImageApiHeadPersonImage

#### Defined in

[generated-client/api/image-api.ts:9289](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9289)

___

### percentPlayed

• `Optional` `Readonly` **percentPlayed**: `number`

Optional. Percent to render for the percent played overlay.

**`memberof`** ImageApiHeadPersonImage

#### Defined in

[generated-client/api/image-api.ts:9331](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9331)

___

### quality

• `Optional` `Readonly` **quality**: `number`

Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases.

**`memberof`** ImageApiHeadPersonImage

#### Defined in

[generated-client/api/image-api.ts:9359](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9359)

___

### tag

• `Optional` `Readonly` **tag**: `string`

Optional. Supply the cache tag from the item object to receive strong caching headers.

**`memberof`** ImageApiHeadPersonImage

#### Defined in

[generated-client/api/image-api.ts:9303](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9303)

___

### unplayedCount

• `Optional` `Readonly` **unplayedCount**: `number`

Optional. Unplayed count overlay to render.

**`memberof`** ImageApiHeadPersonImage

#### Defined in

[generated-client/api/image-api.ts:9338](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9338)

___

### width

• `Optional` `Readonly` **width**: `number`

The fixed image width to return.

**`memberof`** ImageApiHeadPersonImage

#### Defined in

[generated-client/api/image-api.ts:9345](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9345)
