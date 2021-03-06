[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / ImageApiGetItemImage2Request

# Interface: ImageApiGetItemImage2Request

[generated-client](../modules/generated_client.md).ImageApiGetItemImage2Request

Request parameters for getItemImage2 operation in ImageApi.

**`export`**

**`interface`** ImageApiGetItemImage2Request

## Table of contents

### Properties

- [addPlayedIndicator](generated_client.ImageApiGetItemImage2Request.md#addplayedindicator)
- [backgroundColor](generated_client.ImageApiGetItemImage2Request.md#backgroundcolor)
- [blur](generated_client.ImageApiGetItemImage2Request.md#blur)
- [cropWhitespace](generated_client.ImageApiGetItemImage2Request.md#cropwhitespace)
- [fillHeight](generated_client.ImageApiGetItemImage2Request.md#fillheight)
- [fillWidth](generated_client.ImageApiGetItemImage2Request.md#fillwidth)
- [foregroundLayer](generated_client.ImageApiGetItemImage2Request.md#foregroundlayer)
- [format](generated_client.ImageApiGetItemImage2Request.md#format)
- [height](generated_client.ImageApiGetItemImage2Request.md#height)
- [imageIndex](generated_client.ImageApiGetItemImage2Request.md#imageindex)
- [imageType](generated_client.ImageApiGetItemImage2Request.md#imagetype)
- [itemId](generated_client.ImageApiGetItemImage2Request.md#itemid)
- [maxHeight](generated_client.ImageApiGetItemImage2Request.md#maxheight)
- [maxWidth](generated_client.ImageApiGetItemImage2Request.md#maxwidth)
- [percentPlayed](generated_client.ImageApiGetItemImage2Request.md#percentplayed)
- [quality](generated_client.ImageApiGetItemImage2Request.md#quality)
- [tag](generated_client.ImageApiGetItemImage2Request.md#tag)
- [unplayedCount](generated_client.ImageApiGetItemImage2Request.md#unplayedcount)
- [width](generated_client.ImageApiGetItemImage2Request.md#width)

## Properties

### addPlayedIndicator

• `Optional` `Readonly` **addPlayedIndicator**: `boolean`

Optional. Add a played indicator.

**`memberof`** ImageApiGetItemImage2

#### Defined in

[generated-client/api/image-api.ts:6821](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L6821)

___

### backgroundColor

• `Optional` `Readonly` **backgroundColor**: `string`

Optional. Apply a background color for transparent images.

**`memberof`** ImageApiGetItemImage2

#### Defined in

[generated-client/api/image-api.ts:6835](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L6835)

___

### blur

• `Optional` `Readonly` **blur**: `number`

Optional. Blur image.

**`memberof`** ImageApiGetItemImage2

#### Defined in

[generated-client/api/image-api.ts:6828](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L6828)

___

### cropWhitespace

• `Optional` `Readonly` **cropWhitespace**: `boolean`

Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.

**`memberof`** ImageApiGetItemImage2

#### Defined in

[generated-client/api/image-api.ts:6814](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L6814)

___

### fillHeight

• `Optional` `Readonly` **fillHeight**: `number`

Height of box to fill.

**`memberof`** ImageApiGetItemImage2

#### Defined in

[generated-client/api/image-api.ts:6807](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L6807)

___

### fillWidth

• `Optional` `Readonly` **fillWidth**: `number`

Width of box to fill.

**`memberof`** ImageApiGetItemImage2

#### Defined in

[generated-client/api/image-api.ts:6800](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L6800)

___

### foregroundLayer

• `Optional` `Readonly` **foregroundLayer**: `string`

Optional. Apply a foreground layer on top of the image.

**`memberof`** ImageApiGetItemImage2

#### Defined in

[generated-client/api/image-api.ts:6842](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L6842)

___

### format

• `Readonly` **format**: [`ImageFormat`](../enums/generated_client.ImageFormat.md)

Determines the output format of the image - original,gif,jpg,png.

**`memberof`** ImageApiGetItemImage2

#### Defined in

[generated-client/api/image-api.ts:6751](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L6751)

___

### height

• `Optional` `Readonly` **height**: `number`

The fixed image height to return.

**`memberof`** ImageApiGetItemImage2

#### Defined in

[generated-client/api/image-api.ts:6786](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L6786)

___

### imageIndex

• `Readonly` **imageIndex**: `number`

Image index.

**`memberof`** ImageApiGetItemImage2

#### Defined in

[generated-client/api/image-api.ts:6772](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L6772)

___

### imageType

• `Readonly` **imageType**: [`ImageType`](../enums/generated_client.ImageType.md)

Image type.

**`memberof`** ImageApiGetItemImage2

#### Defined in

[generated-client/api/image-api.ts:6723](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L6723)

___

### itemId

• `Readonly` **itemId**: `string`

Item id.

**`memberof`** ImageApiGetItemImage2

#### Defined in

[generated-client/api/image-api.ts:6716](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L6716)

___

### maxHeight

• `Readonly` **maxHeight**: `number`

The maximum image height to return.

**`memberof`** ImageApiGetItemImage2

#### Defined in

[generated-client/api/image-api.ts:6737](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L6737)

___

### maxWidth

• `Readonly` **maxWidth**: `number`

The maximum image width to return.

**`memberof`** ImageApiGetItemImage2

#### Defined in

[generated-client/api/image-api.ts:6730](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L6730)

___

### percentPlayed

• `Readonly` **percentPlayed**: `number`

Optional. Percent to render for the percent played overlay.

**`memberof`** ImageApiGetItemImage2

#### Defined in

[generated-client/api/image-api.ts:6758](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L6758)

___

### quality

• `Optional` `Readonly` **quality**: `number`

Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases.

**`memberof`** ImageApiGetItemImage2

#### Defined in

[generated-client/api/image-api.ts:6793](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L6793)

___

### tag

• `Readonly` **tag**: `string`

Optional. Supply the cache tag from the item object to receive strong caching headers.

**`memberof`** ImageApiGetItemImage2

#### Defined in

[generated-client/api/image-api.ts:6744](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L6744)

___

### unplayedCount

• `Readonly` **unplayedCount**: `number`

Optional. Unplayed count overlay to render.

**`memberof`** ImageApiGetItemImage2

#### Defined in

[generated-client/api/image-api.ts:6765](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L6765)

___

### width

• `Optional` `Readonly` **width**: `number`

The fixed image width to return.

**`memberof`** ImageApiGetItemImage2

#### Defined in

[generated-client/api/image-api.ts:6779](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L6779)
