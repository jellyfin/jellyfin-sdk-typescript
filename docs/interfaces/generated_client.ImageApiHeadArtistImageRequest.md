[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / ImageApiHeadArtistImageRequest

# Interface: ImageApiHeadArtistImageRequest

[generated-client](../modules/generated_client.md).ImageApiHeadArtistImageRequest

Request parameters for headArtistImage operation in ImageApi.

**`export`**

**`interface`** ImageApiHeadArtistImageRequest

## Table of contents

### Properties

- [addPlayedIndicator](generated_client.ImageApiHeadArtistImageRequest.md#addplayedindicator)
- [backgroundColor](generated_client.ImageApiHeadArtistImageRequest.md#backgroundcolor)
- [blur](generated_client.ImageApiHeadArtistImageRequest.md#blur)
- [cropWhitespace](generated_client.ImageApiHeadArtistImageRequest.md#cropwhitespace)
- [fillHeight](generated_client.ImageApiHeadArtistImageRequest.md#fillheight)
- [fillWidth](generated_client.ImageApiHeadArtistImageRequest.md#fillwidth)
- [foregroundLayer](generated_client.ImageApiHeadArtistImageRequest.md#foregroundlayer)
- [format](generated_client.ImageApiHeadArtistImageRequest.md#format)
- [height](generated_client.ImageApiHeadArtistImageRequest.md#height)
- [imageIndex](generated_client.ImageApiHeadArtistImageRequest.md#imageindex)
- [imageType](generated_client.ImageApiHeadArtistImageRequest.md#imagetype)
- [maxHeight](generated_client.ImageApiHeadArtistImageRequest.md#maxheight)
- [maxWidth](generated_client.ImageApiHeadArtistImageRequest.md#maxwidth)
- [name](generated_client.ImageApiHeadArtistImageRequest.md#name)
- [percentPlayed](generated_client.ImageApiHeadArtistImageRequest.md#percentplayed)
- [quality](generated_client.ImageApiHeadArtistImageRequest.md#quality)
- [tag](generated_client.ImageApiHeadArtistImageRequest.md#tag)
- [unplayedCount](generated_client.ImageApiHeadArtistImageRequest.md#unplayedcount)
- [width](generated_client.ImageApiHeadArtistImageRequest.md#width)

## Properties

### addPlayedIndicator

• `Optional` `Readonly` **addPlayedIndicator**: `boolean`

Optional. Add a played indicator.

**`memberof`** ImageApiHeadArtistImage

#### Defined in

[generated-client/api/image-api.ts:8274](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L8274)

___

### backgroundColor

• `Optional` `Readonly` **backgroundColor**: `string`

Optional. Apply a background color for transparent images.

**`memberof`** ImageApiHeadArtistImage

#### Defined in

[generated-client/api/image-api.ts:8288](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L8288)

___

### blur

• `Optional` `Readonly` **blur**: `number`

Optional. Blur image.

**`memberof`** ImageApiHeadArtistImage

#### Defined in

[generated-client/api/image-api.ts:8281](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L8281)

___

### cropWhitespace

• `Optional` `Readonly` **cropWhitespace**: `boolean`

Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.

**`memberof`** ImageApiHeadArtistImage

#### Defined in

[generated-client/api/image-api.ts:8267](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L8267)

___

### fillHeight

• `Optional` `Readonly` **fillHeight**: `number`

Height of box to fill.

**`memberof`** ImageApiHeadArtistImage

#### Defined in

[generated-client/api/image-api.ts:8260](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L8260)

___

### fillWidth

• `Optional` `Readonly` **fillWidth**: `number`

Width of box to fill.

**`memberof`** ImageApiHeadArtistImage

#### Defined in

[generated-client/api/image-api.ts:8253](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L8253)

___

### foregroundLayer

• `Optional` `Readonly` **foregroundLayer**: `string`

Optional. Apply a foreground layer on top of the image.

**`memberof`** ImageApiHeadArtistImage

#### Defined in

[generated-client/api/image-api.ts:8295](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L8295)

___

### format

• `Optional` `Readonly` **format**: [`ImageFormat`](../enums/generated_client.ImageFormat.md)

Determines the output format of the image - original,gif,jpg,png.

**`memberof`** ImageApiHeadArtistImage

#### Defined in

[generated-client/api/image-api.ts:8197](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L8197)

___

### height

• `Optional` `Readonly` **height**: `number`

The fixed image height to return.

**`memberof`** ImageApiHeadArtistImage

#### Defined in

[generated-client/api/image-api.ts:8239](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L8239)

___

### imageIndex

• `Readonly` **imageIndex**: `number`

Image index.

**`memberof`** ImageApiHeadArtistImage

#### Defined in

[generated-client/api/image-api.ts:8183](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L8183)

___

### imageType

• `Readonly` **imageType**: [`ImageType`](../enums/generated_client.ImageType.md)

Image type.

**`memberof`** ImageApiHeadArtistImage

#### Defined in

[generated-client/api/image-api.ts:8176](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L8176)

___

### maxHeight

• `Optional` `Readonly` **maxHeight**: `number`

The maximum image height to return.

**`memberof`** ImageApiHeadArtistImage

#### Defined in

[generated-client/api/image-api.ts:8211](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L8211)

___

### maxWidth

• `Optional` `Readonly` **maxWidth**: `number`

The maximum image width to return.

**`memberof`** ImageApiHeadArtistImage

#### Defined in

[generated-client/api/image-api.ts:8204](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L8204)

___

### name

• `Readonly` **name**: `string`

Artist name.

**`memberof`** ImageApiHeadArtistImage

#### Defined in

[generated-client/api/image-api.ts:8169](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L8169)

___

### percentPlayed

• `Optional` `Readonly` **percentPlayed**: `number`

Optional. Percent to render for the percent played overlay.

**`memberof`** ImageApiHeadArtistImage

#### Defined in

[generated-client/api/image-api.ts:8218](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L8218)

___

### quality

• `Optional` `Readonly` **quality**: `number`

Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases.

**`memberof`** ImageApiHeadArtistImage

#### Defined in

[generated-client/api/image-api.ts:8246](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L8246)

___

### tag

• `Optional` `Readonly` **tag**: `string`

Optional. Supply the cache tag from the item object to receive strong caching headers.

**`memberof`** ImageApiHeadArtistImage

#### Defined in

[generated-client/api/image-api.ts:8190](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L8190)

___

### unplayedCount

• `Optional` `Readonly` **unplayedCount**: `number`

Optional. Unplayed count overlay to render.

**`memberof`** ImageApiHeadArtistImage

#### Defined in

[generated-client/api/image-api.ts:8225](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L8225)

___

### width

• `Optional` `Readonly` **width**: `number`

The fixed image width to return.

**`memberof`** ImageApiHeadArtistImage

#### Defined in

[generated-client/api/image-api.ts:8232](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L8232)
