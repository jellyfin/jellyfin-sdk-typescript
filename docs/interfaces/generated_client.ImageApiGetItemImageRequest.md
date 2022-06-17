[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / ImageApiGetItemImageRequest

# Interface: ImageApiGetItemImageRequest

[generated-client](../modules/generated_client.md).ImageApiGetItemImageRequest

Request parameters for getItemImage operation in ImageApi.

**`export`**

**`interface`** ImageApiGetItemImageRequest

## Table of contents

### Properties

- [addPlayedIndicator](generated_client.ImageApiGetItemImageRequest.md#addplayedindicator)
- [backgroundColor](generated_client.ImageApiGetItemImageRequest.md#backgroundcolor)
- [blur](generated_client.ImageApiGetItemImageRequest.md#blur)
- [cropWhitespace](generated_client.ImageApiGetItemImageRequest.md#cropwhitespace)
- [fillHeight](generated_client.ImageApiGetItemImageRequest.md#fillheight)
- [fillWidth](generated_client.ImageApiGetItemImageRequest.md#fillwidth)
- [foregroundLayer](generated_client.ImageApiGetItemImageRequest.md#foregroundlayer)
- [format](generated_client.ImageApiGetItemImageRequest.md#format)
- [height](generated_client.ImageApiGetItemImageRequest.md#height)
- [imageIndex](generated_client.ImageApiGetItemImageRequest.md#imageindex)
- [imageType](generated_client.ImageApiGetItemImageRequest.md#imagetype)
- [itemId](generated_client.ImageApiGetItemImageRequest.md#itemid)
- [maxHeight](generated_client.ImageApiGetItemImageRequest.md#maxheight)
- [maxWidth](generated_client.ImageApiGetItemImageRequest.md#maxwidth)
- [percentPlayed](generated_client.ImageApiGetItemImageRequest.md#percentplayed)
- [quality](generated_client.ImageApiGetItemImageRequest.md#quality)
- [tag](generated_client.ImageApiGetItemImageRequest.md#tag)
- [unplayedCount](generated_client.ImageApiGetItemImageRequest.md#unplayedcount)
- [width](generated_client.ImageApiGetItemImageRequest.md#width)

## Properties

### addPlayedIndicator

• `Optional` `Readonly` **addPlayedIndicator**: `boolean`

Optional. Add a played indicator.

**`memberof`** ImageApiGetItemImage

#### Defined in

[generated-client/api/image-api.ts:6608](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L6608)

___

### backgroundColor

• `Optional` `Readonly` **backgroundColor**: `string`

Optional. Apply a background color for transparent images.

**`memberof`** ImageApiGetItemImage

#### Defined in

[generated-client/api/image-api.ts:6636](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L6636)

___

### blur

• `Optional` `Readonly` **blur**: `number`

Optional. Blur image.

**`memberof`** ImageApiGetItemImage

#### Defined in

[generated-client/api/image-api.ts:6629](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L6629)

___

### cropWhitespace

• `Optional` `Readonly` **cropWhitespace**: `boolean`

Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.

**`memberof`** ImageApiGetItemImage

#### Defined in

[generated-client/api/image-api.ts:6594](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L6594)

___

### fillHeight

• `Optional` `Readonly` **fillHeight**: `number`

Height of box to fill.

**`memberof`** ImageApiGetItemImage

#### Defined in

[generated-client/api/image-api.ts:6580](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L6580)

___

### fillWidth

• `Optional` `Readonly` **fillWidth**: `number`

Width of box to fill.

**`memberof`** ImageApiGetItemImage

#### Defined in

[generated-client/api/image-api.ts:6573](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L6573)

___

### foregroundLayer

• `Optional` `Readonly` **foregroundLayer**: `string`

Optional. Apply a foreground layer on top of the image.

**`memberof`** ImageApiGetItemImage

#### Defined in

[generated-client/api/image-api.ts:6643](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L6643)

___

### format

• `Optional` `Readonly` **format**: [`ImageFormat`](../enums/generated_client.ImageFormat.md)

Optional. The MediaBrowser.Model.Drawing.ImageFormat of the returned image.

**`memberof`** ImageApiGetItemImage

#### Defined in

[generated-client/api/image-api.ts:6601](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L6601)

___

### height

• `Optional` `Readonly` **height**: `number`

The fixed image height to return.

**`memberof`** ImageApiGetItemImage

#### Defined in

[generated-client/api/image-api.ts:6559](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L6559)

___

### imageIndex

• `Optional` `Readonly` **imageIndex**: `number`

Image index.

**`memberof`** ImageApiGetItemImage

#### Defined in

[generated-client/api/image-api.ts:6650](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L6650)

___

### imageType

• `Readonly` **imageType**: [`ImageType`](../enums/generated_client.ImageType.md)

Image type.

**`memberof`** ImageApiGetItemImage

#### Defined in

[generated-client/api/image-api.ts:6531](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L6531)

___

### itemId

• `Readonly` **itemId**: `string`

Item id.

**`memberof`** ImageApiGetItemImage

#### Defined in

[generated-client/api/image-api.ts:6524](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L6524)

___

### maxHeight

• `Optional` `Readonly` **maxHeight**: `number`

The maximum image height to return.

**`memberof`** ImageApiGetItemImage

#### Defined in

[generated-client/api/image-api.ts:6545](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L6545)

___

### maxWidth

• `Optional` `Readonly` **maxWidth**: `number`

The maximum image width to return.

**`memberof`** ImageApiGetItemImage

#### Defined in

[generated-client/api/image-api.ts:6538](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L6538)

___

### percentPlayed

• `Optional` `Readonly` **percentPlayed**: `number`

Optional. Percent to render for the percent played overlay.

**`memberof`** ImageApiGetItemImage

#### Defined in

[generated-client/api/image-api.ts:6615](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L6615)

___

### quality

• `Optional` `Readonly` **quality**: `number`

Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases.

**`memberof`** ImageApiGetItemImage

#### Defined in

[generated-client/api/image-api.ts:6566](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L6566)

___

### tag

• `Optional` `Readonly` **tag**: `string`

Optional. Supply the cache tag from the item object to receive strong caching headers.

**`memberof`** ImageApiGetItemImage

#### Defined in

[generated-client/api/image-api.ts:6587](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L6587)

___

### unplayedCount

• `Optional` `Readonly` **unplayedCount**: `number`

Optional. Unplayed count overlay to render.

**`memberof`** ImageApiGetItemImage

#### Defined in

[generated-client/api/image-api.ts:6622](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L6622)

___

### width

• `Optional` `Readonly` **width**: `number`

The fixed image width to return.

**`memberof`** ImageApiGetItemImage

#### Defined in

[generated-client/api/image-api.ts:6552](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L6552)
