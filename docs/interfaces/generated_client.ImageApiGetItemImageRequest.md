[jellyfin-sdk-typescript](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / ImageApiGetItemImageRequest

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

[generated-client/api/image-api.ts:6417](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/image-api.ts#L6417)

___

### backgroundColor

• `Optional` `Readonly` **backgroundColor**: `string`

Optional. Apply a background color for transparent images.

**`memberof`** ImageApiGetItemImage

#### Defined in

[generated-client/api/image-api.ts:6445](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/image-api.ts#L6445)

___

### blur

• `Optional` `Readonly` **blur**: `number`

Optional. Blur image.

**`memberof`** ImageApiGetItemImage

#### Defined in

[generated-client/api/image-api.ts:6438](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/image-api.ts#L6438)

___

### cropWhitespace

• `Optional` `Readonly` **cropWhitespace**: `boolean`

Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.

**`memberof`** ImageApiGetItemImage

#### Defined in

[generated-client/api/image-api.ts:6403](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/image-api.ts#L6403)

___

### fillHeight

• `Optional` `Readonly` **fillHeight**: `number`

Height of box to fill.

**`memberof`** ImageApiGetItemImage

#### Defined in

[generated-client/api/image-api.ts:6389](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/image-api.ts#L6389)

___

### fillWidth

• `Optional` `Readonly` **fillWidth**: `number`

Width of box to fill.

**`memberof`** ImageApiGetItemImage

#### Defined in

[generated-client/api/image-api.ts:6382](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/image-api.ts#L6382)

___

### foregroundLayer

• `Optional` `Readonly` **foregroundLayer**: `string`

Optional. Apply a foreground layer on top of the image.

**`memberof`** ImageApiGetItemImage

#### Defined in

[generated-client/api/image-api.ts:6452](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/image-api.ts#L6452)

___

### format

• `Optional` `Readonly` **format**: [`ImageFormat`](../enums/generated_client.ImageFormat.md)

Optional. The MediaBrowser.Model.Drawing.ImageFormat of the returned image.

**`memberof`** ImageApiGetItemImage

#### Defined in

[generated-client/api/image-api.ts:6410](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/image-api.ts#L6410)

___

### height

• `Optional` `Readonly` **height**: `number`

The fixed image height to return.

**`memberof`** ImageApiGetItemImage

#### Defined in

[generated-client/api/image-api.ts:6368](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/image-api.ts#L6368)

___

### imageIndex

• `Optional` `Readonly` **imageIndex**: `number`

Image index.

**`memberof`** ImageApiGetItemImage

#### Defined in

[generated-client/api/image-api.ts:6459](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/image-api.ts#L6459)

___

### imageType

• `Readonly` **imageType**: [`ImageType`](../enums/generated_client.ImageType.md)

Image type.

**`memberof`** ImageApiGetItemImage

#### Defined in

[generated-client/api/image-api.ts:6340](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/image-api.ts#L6340)

___

### itemId

• `Readonly` **itemId**: `string`

Item id.

**`memberof`** ImageApiGetItemImage

#### Defined in

[generated-client/api/image-api.ts:6333](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/image-api.ts#L6333)

___

### maxHeight

• `Optional` `Readonly` **maxHeight**: `number`

The maximum image height to return.

**`memberof`** ImageApiGetItemImage

#### Defined in

[generated-client/api/image-api.ts:6354](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/image-api.ts#L6354)

___

### maxWidth

• `Optional` `Readonly` **maxWidth**: `number`

The maximum image width to return.

**`memberof`** ImageApiGetItemImage

#### Defined in

[generated-client/api/image-api.ts:6347](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/image-api.ts#L6347)

___

### percentPlayed

• `Optional` `Readonly` **percentPlayed**: `number`

Optional. Percent to render for the percent played overlay.

**`memberof`** ImageApiGetItemImage

#### Defined in

[generated-client/api/image-api.ts:6424](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/image-api.ts#L6424)

___

### quality

• `Optional` `Readonly` **quality**: `number`

Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases.

**`memberof`** ImageApiGetItemImage

#### Defined in

[generated-client/api/image-api.ts:6375](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/image-api.ts#L6375)

___

### tag

• `Optional` `Readonly` **tag**: `string`

Optional. Supply the cache tag from the item object to receive strong caching headers.

**`memberof`** ImageApiGetItemImage

#### Defined in

[generated-client/api/image-api.ts:6396](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/image-api.ts#L6396)

___

### unplayedCount

• `Optional` `Readonly` **unplayedCount**: `number`

Optional. Unplayed count overlay to render.

**`memberof`** ImageApiGetItemImage

#### Defined in

[generated-client/api/image-api.ts:6431](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/image-api.ts#L6431)

___

### width

• `Optional` `Readonly` **width**: `number`

The fixed image width to return.

**`memberof`** ImageApiGetItemImage

#### Defined in

[generated-client/api/image-api.ts:6361](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/image-api.ts#L6361)
