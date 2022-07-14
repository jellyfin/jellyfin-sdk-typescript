[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / ImageApiHeadItemImage2Request

# Interface: ImageApiHeadItemImage2Request

[generated-client](../modules/generated_client.md).ImageApiHeadItemImage2Request

Request parameters for headItemImage2 operation in ImageApi.

**`export`**

**`interface`** ImageApiHeadItemImage2Request

## Table of contents

### Properties

- [addPlayedIndicator](generated_client.ImageApiHeadItemImage2Request.md#addplayedindicator)
- [backgroundColor](generated_client.ImageApiHeadItemImage2Request.md#backgroundcolor)
- [blur](generated_client.ImageApiHeadItemImage2Request.md#blur)
- [cropWhitespace](generated_client.ImageApiHeadItemImage2Request.md#cropwhitespace)
- [fillHeight](generated_client.ImageApiHeadItemImage2Request.md#fillheight)
- [fillWidth](generated_client.ImageApiHeadItemImage2Request.md#fillwidth)
- [foregroundLayer](generated_client.ImageApiHeadItemImage2Request.md#foregroundlayer)
- [format](generated_client.ImageApiHeadItemImage2Request.md#format)
- [height](generated_client.ImageApiHeadItemImage2Request.md#height)
- [imageIndex](generated_client.ImageApiHeadItemImage2Request.md#imageindex)
- [imageType](generated_client.ImageApiHeadItemImage2Request.md#imagetype)
- [itemId](generated_client.ImageApiHeadItemImage2Request.md#itemid)
- [maxHeight](generated_client.ImageApiHeadItemImage2Request.md#maxheight)
- [maxWidth](generated_client.ImageApiHeadItemImage2Request.md#maxwidth)
- [percentPlayed](generated_client.ImageApiHeadItemImage2Request.md#percentplayed)
- [quality](generated_client.ImageApiHeadItemImage2Request.md#quality)
- [tag](generated_client.ImageApiHeadItemImage2Request.md#tag)
- [unplayedCount](generated_client.ImageApiHeadItemImage2Request.md#unplayedcount)
- [width](generated_client.ImageApiHeadItemImage2Request.md#width)

## Properties

### addPlayedIndicator

• `Optional` `Readonly` **addPlayedIndicator**: `boolean`

Optional. Add a played indicator.

**`memberof`** ImageApiHeadItemImage2

#### Defined in

[generated-client/api/image-api.ts:8886](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L8886)

___

### backgroundColor

• `Optional` `Readonly` **backgroundColor**: `string`

Optional. Apply a background color for transparent images.

**`memberof`** ImageApiHeadItemImage2

#### Defined in

[generated-client/api/image-api.ts:8900](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L8900)

___

### blur

• `Optional` `Readonly` **blur**: `number`

Optional. Blur image.

**`memberof`** ImageApiHeadItemImage2

#### Defined in

[generated-client/api/image-api.ts:8893](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L8893)

___

### cropWhitespace

• `Optional` `Readonly` **cropWhitespace**: `boolean`

Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.

**`memberof`** ImageApiHeadItemImage2

#### Defined in

[generated-client/api/image-api.ts:8879](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L8879)

___

### fillHeight

• `Optional` `Readonly` **fillHeight**: `number`

Height of box to fill.

**`memberof`** ImageApiHeadItemImage2

#### Defined in

[generated-client/api/image-api.ts:8872](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L8872)

___

### fillWidth

• `Optional` `Readonly` **fillWidth**: `number`

Width of box to fill.

**`memberof`** ImageApiHeadItemImage2

#### Defined in

[generated-client/api/image-api.ts:8865](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L8865)

___

### foregroundLayer

• `Optional` `Readonly` **foregroundLayer**: `string`

Optional. Apply a foreground layer on top of the image.

**`memberof`** ImageApiHeadItemImage2

#### Defined in

[generated-client/api/image-api.ts:8907](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L8907)

___

### format

• `Readonly` **format**: [`ImageFormat`](../enums/generated_client.ImageFormat.md)

Determines the output format of the image - original,gif,jpg,png.

**`memberof`** ImageApiHeadItemImage2

#### Defined in

[generated-client/api/image-api.ts:8816](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L8816)

___

### height

• `Optional` `Readonly` **height**: `number`

The fixed image height to return.

**`memberof`** ImageApiHeadItemImage2

#### Defined in

[generated-client/api/image-api.ts:8851](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L8851)

___

### imageIndex

• `Readonly` **imageIndex**: `number`

Image index.

**`memberof`** ImageApiHeadItemImage2

#### Defined in

[generated-client/api/image-api.ts:8837](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L8837)

___

### imageType

• `Readonly` **imageType**: [`ImageType`](../enums/generated_client.ImageType.md)

Image type.

**`memberof`** ImageApiHeadItemImage2

#### Defined in

[generated-client/api/image-api.ts:8788](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L8788)

___

### itemId

• `Readonly` **itemId**: `string`

Item id.

**`memberof`** ImageApiHeadItemImage2

#### Defined in

[generated-client/api/image-api.ts:8781](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L8781)

___

### maxHeight

• `Readonly` **maxHeight**: `number`

The maximum image height to return.

**`memberof`** ImageApiHeadItemImage2

#### Defined in

[generated-client/api/image-api.ts:8802](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L8802)

___

### maxWidth

• `Readonly` **maxWidth**: `number`

The maximum image width to return.

**`memberof`** ImageApiHeadItemImage2

#### Defined in

[generated-client/api/image-api.ts:8795](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L8795)

___

### percentPlayed

• `Readonly` **percentPlayed**: `number`

Optional. Percent to render for the percent played overlay.

**`memberof`** ImageApiHeadItemImage2

#### Defined in

[generated-client/api/image-api.ts:8823](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L8823)

___

### quality

• `Optional` `Readonly` **quality**: `number`

Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases.

**`memberof`** ImageApiHeadItemImage2

#### Defined in

[generated-client/api/image-api.ts:8858](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L8858)

___

### tag

• `Readonly` **tag**: `string`

Optional. Supply the cache tag from the item object to receive strong caching headers.

**`memberof`** ImageApiHeadItemImage2

#### Defined in

[generated-client/api/image-api.ts:8809](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L8809)

___

### unplayedCount

• `Readonly` **unplayedCount**: `number`

Optional. Unplayed count overlay to render.

**`memberof`** ImageApiHeadItemImage2

#### Defined in

[generated-client/api/image-api.ts:8830](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L8830)

___

### width

• `Optional` `Readonly` **width**: `number`

The fixed image width to return.

**`memberof`** ImageApiHeadItemImage2

#### Defined in

[generated-client/api/image-api.ts:8844](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L8844)
