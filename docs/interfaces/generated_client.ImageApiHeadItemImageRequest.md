[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / ImageApiHeadItemImageRequest

# Interface: ImageApiHeadItemImageRequest

[generated-client](../modules/generated_client.md).ImageApiHeadItemImageRequest

Request parameters for headItemImage operation in ImageApi.

**`export`**

**`interface`** ImageApiHeadItemImageRequest

## Table of contents

### Properties

- [addPlayedIndicator](generated_client.ImageApiHeadItemImageRequest.md#addplayedindicator)
- [backgroundColor](generated_client.ImageApiHeadItemImageRequest.md#backgroundcolor)
- [blur](generated_client.ImageApiHeadItemImageRequest.md#blur)
- [cropWhitespace](generated_client.ImageApiHeadItemImageRequest.md#cropwhitespace)
- [fillHeight](generated_client.ImageApiHeadItemImageRequest.md#fillheight)
- [fillWidth](generated_client.ImageApiHeadItemImageRequest.md#fillwidth)
- [foregroundLayer](generated_client.ImageApiHeadItemImageRequest.md#foregroundlayer)
- [format](generated_client.ImageApiHeadItemImageRequest.md#format)
- [height](generated_client.ImageApiHeadItemImageRequest.md#height)
- [imageIndex](generated_client.ImageApiHeadItemImageRequest.md#imageindex)
- [imageType](generated_client.ImageApiHeadItemImageRequest.md#imagetype)
- [itemId](generated_client.ImageApiHeadItemImageRequest.md#itemid)
- [maxHeight](generated_client.ImageApiHeadItemImageRequest.md#maxheight)
- [maxWidth](generated_client.ImageApiHeadItemImageRequest.md#maxwidth)
- [percentPlayed](generated_client.ImageApiHeadItemImageRequest.md#percentplayed)
- [quality](generated_client.ImageApiHeadItemImageRequest.md#quality)
- [tag](generated_client.ImageApiHeadItemImageRequest.md#tag)
- [unplayedCount](generated_client.ImageApiHeadItemImageRequest.md#unplayedcount)
- [width](generated_client.ImageApiHeadItemImageRequest.md#width)

## Properties

### addPlayedIndicator

• `Optional` `Readonly` **addPlayedIndicator**: `boolean`

Optional. Add a played indicator.

**`memberof`** ImageApiHeadItemImage

#### Defined in

[generated-client/api/image-api.ts:8391](https://github.com/thornbill/jellyfin-sdk-typescript/blob/21a118e/src/generated-client/api/image-api.ts#L8391)

___

### backgroundColor

• `Optional` `Readonly` **backgroundColor**: `string`

Optional. Apply a background color for transparent images.

**`memberof`** ImageApiHeadItemImage

#### Defined in

[generated-client/api/image-api.ts:8419](https://github.com/thornbill/jellyfin-sdk-typescript/blob/21a118e/src/generated-client/api/image-api.ts#L8419)

___

### blur

• `Optional` `Readonly` **blur**: `number`

Optional. Blur image.

**`memberof`** ImageApiHeadItemImage

#### Defined in

[generated-client/api/image-api.ts:8412](https://github.com/thornbill/jellyfin-sdk-typescript/blob/21a118e/src/generated-client/api/image-api.ts#L8412)

___

### cropWhitespace

• `Optional` `Readonly` **cropWhitespace**: `boolean`

Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.

**`memberof`** ImageApiHeadItemImage

#### Defined in

[generated-client/api/image-api.ts:8377](https://github.com/thornbill/jellyfin-sdk-typescript/blob/21a118e/src/generated-client/api/image-api.ts#L8377)

___

### fillHeight

• `Optional` `Readonly` **fillHeight**: `number`

Height of box to fill.

**`memberof`** ImageApiHeadItemImage

#### Defined in

[generated-client/api/image-api.ts:8363](https://github.com/thornbill/jellyfin-sdk-typescript/blob/21a118e/src/generated-client/api/image-api.ts#L8363)

___

### fillWidth

• `Optional` `Readonly` **fillWidth**: `number`

Width of box to fill.

**`memberof`** ImageApiHeadItemImage

#### Defined in

[generated-client/api/image-api.ts:8356](https://github.com/thornbill/jellyfin-sdk-typescript/blob/21a118e/src/generated-client/api/image-api.ts#L8356)

___

### foregroundLayer

• `Optional` `Readonly` **foregroundLayer**: `string`

Optional. Apply a foreground layer on top of the image.

**`memberof`** ImageApiHeadItemImage

#### Defined in

[generated-client/api/image-api.ts:8426](https://github.com/thornbill/jellyfin-sdk-typescript/blob/21a118e/src/generated-client/api/image-api.ts#L8426)

___

### format

• `Optional` `Readonly` **format**: [`ImageFormat`](../enums/generated_client.ImageFormat.md)

Optional. The MediaBrowser.Model.Drawing.ImageFormat of the returned image.

**`memberof`** ImageApiHeadItemImage

#### Defined in

[generated-client/api/image-api.ts:8384](https://github.com/thornbill/jellyfin-sdk-typescript/blob/21a118e/src/generated-client/api/image-api.ts#L8384)

___

### height

• `Optional` `Readonly` **height**: `number`

The fixed image height to return.

**`memberof`** ImageApiHeadItemImage

#### Defined in

[generated-client/api/image-api.ts:8342](https://github.com/thornbill/jellyfin-sdk-typescript/blob/21a118e/src/generated-client/api/image-api.ts#L8342)

___

### imageIndex

• `Optional` `Readonly` **imageIndex**: `number`

Image index.

**`memberof`** ImageApiHeadItemImage

#### Defined in

[generated-client/api/image-api.ts:8433](https://github.com/thornbill/jellyfin-sdk-typescript/blob/21a118e/src/generated-client/api/image-api.ts#L8433)

___

### imageType

• `Readonly` **imageType**: [`ImageType`](../enums/generated_client.ImageType.md)

Image type.

**`memberof`** ImageApiHeadItemImage

#### Defined in

[generated-client/api/image-api.ts:8314](https://github.com/thornbill/jellyfin-sdk-typescript/blob/21a118e/src/generated-client/api/image-api.ts#L8314)

___

### itemId

• `Readonly` **itemId**: `string`

Item id.

**`memberof`** ImageApiHeadItemImage

#### Defined in

[generated-client/api/image-api.ts:8307](https://github.com/thornbill/jellyfin-sdk-typescript/blob/21a118e/src/generated-client/api/image-api.ts#L8307)

___

### maxHeight

• `Optional` `Readonly` **maxHeight**: `number`

The maximum image height to return.

**`memberof`** ImageApiHeadItemImage

#### Defined in

[generated-client/api/image-api.ts:8328](https://github.com/thornbill/jellyfin-sdk-typescript/blob/21a118e/src/generated-client/api/image-api.ts#L8328)

___

### maxWidth

• `Optional` `Readonly` **maxWidth**: `number`

The maximum image width to return.

**`memberof`** ImageApiHeadItemImage

#### Defined in

[generated-client/api/image-api.ts:8321](https://github.com/thornbill/jellyfin-sdk-typescript/blob/21a118e/src/generated-client/api/image-api.ts#L8321)

___

### percentPlayed

• `Optional` `Readonly` **percentPlayed**: `number`

Optional. Percent to render for the percent played overlay.

**`memberof`** ImageApiHeadItemImage

#### Defined in

[generated-client/api/image-api.ts:8398](https://github.com/thornbill/jellyfin-sdk-typescript/blob/21a118e/src/generated-client/api/image-api.ts#L8398)

___

### quality

• `Optional` `Readonly` **quality**: `number`

Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases.

**`memberof`** ImageApiHeadItemImage

#### Defined in

[generated-client/api/image-api.ts:8349](https://github.com/thornbill/jellyfin-sdk-typescript/blob/21a118e/src/generated-client/api/image-api.ts#L8349)

___

### tag

• `Optional` `Readonly` **tag**: `string`

Optional. Supply the cache tag from the item object to receive strong caching headers.

**`memberof`** ImageApiHeadItemImage

#### Defined in

[generated-client/api/image-api.ts:8370](https://github.com/thornbill/jellyfin-sdk-typescript/blob/21a118e/src/generated-client/api/image-api.ts#L8370)

___

### unplayedCount

• `Optional` `Readonly` **unplayedCount**: `number`

Optional. Unplayed count overlay to render.

**`memberof`** ImageApiHeadItemImage

#### Defined in

[generated-client/api/image-api.ts:8405](https://github.com/thornbill/jellyfin-sdk-typescript/blob/21a118e/src/generated-client/api/image-api.ts#L8405)

___

### width

• `Optional` `Readonly` **width**: `number`

The fixed image width to return.

**`memberof`** ImageApiHeadItemImage

#### Defined in

[generated-client/api/image-api.ts:8335](https://github.com/thornbill/jellyfin-sdk-typescript/blob/21a118e/src/generated-client/api/image-api.ts#L8335)
