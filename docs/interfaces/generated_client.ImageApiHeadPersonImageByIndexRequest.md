[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / ImageApiHeadPersonImageByIndexRequest

# Interface: ImageApiHeadPersonImageByIndexRequest

[generated-client](../modules/generated_client.md).ImageApiHeadPersonImageByIndexRequest

Request parameters for headPersonImageByIndex operation in ImageApi.

**`export`**

**`interface`** ImageApiHeadPersonImageByIndexRequest

## Table of contents

### Properties

- [addPlayedIndicator](generated_client.ImageApiHeadPersonImageByIndexRequest.md#addplayedindicator)
- [backgroundColor](generated_client.ImageApiHeadPersonImageByIndexRequest.md#backgroundcolor)
- [blur](generated_client.ImageApiHeadPersonImageByIndexRequest.md#blur)
- [cropWhitespace](generated_client.ImageApiHeadPersonImageByIndexRequest.md#cropwhitespace)
- [fillHeight](generated_client.ImageApiHeadPersonImageByIndexRequest.md#fillheight)
- [fillWidth](generated_client.ImageApiHeadPersonImageByIndexRequest.md#fillwidth)
- [foregroundLayer](generated_client.ImageApiHeadPersonImageByIndexRequest.md#foregroundlayer)
- [format](generated_client.ImageApiHeadPersonImageByIndexRequest.md#format)
- [height](generated_client.ImageApiHeadPersonImageByIndexRequest.md#height)
- [imageIndex](generated_client.ImageApiHeadPersonImageByIndexRequest.md#imageindex)
- [imageType](generated_client.ImageApiHeadPersonImageByIndexRequest.md#imagetype)
- [maxHeight](generated_client.ImageApiHeadPersonImageByIndexRequest.md#maxheight)
- [maxWidth](generated_client.ImageApiHeadPersonImageByIndexRequest.md#maxwidth)
- [name](generated_client.ImageApiHeadPersonImageByIndexRequest.md#name)
- [percentPlayed](generated_client.ImageApiHeadPersonImageByIndexRequest.md#percentplayed)
- [quality](generated_client.ImageApiHeadPersonImageByIndexRequest.md#quality)
- [tag](generated_client.ImageApiHeadPersonImageByIndexRequest.md#tag)
- [unplayedCount](generated_client.ImageApiHeadPersonImageByIndexRequest.md#unplayedcount)
- [width](generated_client.ImageApiHeadPersonImageByIndexRequest.md#width)

## Properties

### addPlayedIndicator

• `Optional` `Readonly` **addPlayedIndicator**: `boolean`

Optional. Add a played indicator.

**`memberof`** ImageApiHeadPersonImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9534](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9534)

___

### backgroundColor

• `Optional` `Readonly` **backgroundColor**: `string`

Optional. Apply a background color for transparent images.

**`memberof`** ImageApiHeadPersonImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9548](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9548)

___

### blur

• `Optional` `Readonly` **blur**: `number`

Optional. Blur image.

**`memberof`** ImageApiHeadPersonImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9541](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9541)

___

### cropWhitespace

• `Optional` `Readonly` **cropWhitespace**: `boolean`

Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.

**`memberof`** ImageApiHeadPersonImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9527](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9527)

___

### fillHeight

• `Optional` `Readonly` **fillHeight**: `number`

Height of box to fill.

**`memberof`** ImageApiHeadPersonImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9520](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9520)

___

### fillWidth

• `Optional` `Readonly` **fillWidth**: `number`

Width of box to fill.

**`memberof`** ImageApiHeadPersonImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9513](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9513)

___

### foregroundLayer

• `Optional` `Readonly` **foregroundLayer**: `string`

Optional. Apply a foreground layer on top of the image.

**`memberof`** ImageApiHeadPersonImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9555](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9555)

___

### format

• `Optional` `Readonly` **format**: [`ImageFormat`](../enums/generated_client.ImageFormat.md)

Determines the output format of the image - original,gif,jpg,png.

**`memberof`** ImageApiHeadPersonImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9457](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9457)

___

### height

• `Optional` `Readonly` **height**: `number`

The fixed image height to return.

**`memberof`** ImageApiHeadPersonImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9499](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9499)

___

### imageIndex

• `Readonly` **imageIndex**: `number`

Image index.

**`memberof`** ImageApiHeadPersonImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9443](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9443)

___

### imageType

• `Readonly` **imageType**: [`ImageType`](../enums/generated_client.ImageType.md)

Image type.

**`memberof`** ImageApiHeadPersonImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9436](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9436)

___

### maxHeight

• `Optional` `Readonly` **maxHeight**: `number`

The maximum image height to return.

**`memberof`** ImageApiHeadPersonImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9471](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9471)

___

### maxWidth

• `Optional` `Readonly` **maxWidth**: `number`

The maximum image width to return.

**`memberof`** ImageApiHeadPersonImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9464](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9464)

___

### name

• `Readonly` **name**: `string`

Person name.

**`memberof`** ImageApiHeadPersonImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9429](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9429)

___

### percentPlayed

• `Optional` `Readonly` **percentPlayed**: `number`

Optional. Percent to render for the percent played overlay.

**`memberof`** ImageApiHeadPersonImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9478](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9478)

___

### quality

• `Optional` `Readonly` **quality**: `number`

Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases.

**`memberof`** ImageApiHeadPersonImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9506](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9506)

___

### tag

• `Optional` `Readonly` **tag**: `string`

Optional. Supply the cache tag from the item object to receive strong caching headers.

**`memberof`** ImageApiHeadPersonImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9450](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9450)

___

### unplayedCount

• `Optional` `Readonly` **unplayedCount**: `number`

Optional. Unplayed count overlay to render.

**`memberof`** ImageApiHeadPersonImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9485](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9485)

___

### width

• `Optional` `Readonly` **width**: `number`

The fixed image width to return.

**`memberof`** ImageApiHeadPersonImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9492](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9492)
