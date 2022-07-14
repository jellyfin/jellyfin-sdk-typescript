[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / ImageApiHeadItemImageByIndexRequest

# Interface: ImageApiHeadItemImageByIndexRequest

[generated-client](../modules/generated_client.md).ImageApiHeadItemImageByIndexRequest

Request parameters for headItemImageByIndex operation in ImageApi.

**`export`**

**`interface`** ImageApiHeadItemImageByIndexRequest

## Table of contents

### Properties

- [addPlayedIndicator](generated_client.ImageApiHeadItemImageByIndexRequest.md#addplayedindicator)
- [backgroundColor](generated_client.ImageApiHeadItemImageByIndexRequest.md#backgroundcolor)
- [blur](generated_client.ImageApiHeadItemImageByIndexRequest.md#blur)
- [cropWhitespace](generated_client.ImageApiHeadItemImageByIndexRequest.md#cropwhitespace)
- [fillHeight](generated_client.ImageApiHeadItemImageByIndexRequest.md#fillheight)
- [fillWidth](generated_client.ImageApiHeadItemImageByIndexRequest.md#fillwidth)
- [foregroundLayer](generated_client.ImageApiHeadItemImageByIndexRequest.md#foregroundlayer)
- [format](generated_client.ImageApiHeadItemImageByIndexRequest.md#format)
- [height](generated_client.ImageApiHeadItemImageByIndexRequest.md#height)
- [imageIndex](generated_client.ImageApiHeadItemImageByIndexRequest.md#imageindex)
- [imageType](generated_client.ImageApiHeadItemImageByIndexRequest.md#imagetype)
- [itemId](generated_client.ImageApiHeadItemImageByIndexRequest.md#itemid)
- [maxHeight](generated_client.ImageApiHeadItemImageByIndexRequest.md#maxheight)
- [maxWidth](generated_client.ImageApiHeadItemImageByIndexRequest.md#maxwidth)
- [percentPlayed](generated_client.ImageApiHeadItemImageByIndexRequest.md#percentplayed)
- [quality](generated_client.ImageApiHeadItemImageByIndexRequest.md#quality)
- [tag](generated_client.ImageApiHeadItemImageByIndexRequest.md#tag)
- [unplayedCount](generated_client.ImageApiHeadItemImageByIndexRequest.md#unplayedcount)
- [width](generated_client.ImageApiHeadItemImageByIndexRequest.md#width)

## Properties

### addPlayedIndicator

• `Optional` `Readonly` **addPlayedIndicator**: `boolean`

Optional. Add a played indicator.

**`memberof`** ImageApiHeadItemImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9012](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L9012)

___

### backgroundColor

• `Optional` `Readonly` **backgroundColor**: `string`

Optional. Apply a background color for transparent images.

**`memberof`** ImageApiHeadItemImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9040](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L9040)

___

### blur

• `Optional` `Readonly` **blur**: `number`

Optional. Blur image.

**`memberof`** ImageApiHeadItemImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9033](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L9033)

___

### cropWhitespace

• `Optional` `Readonly` **cropWhitespace**: `boolean`

Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.

**`memberof`** ImageApiHeadItemImageByIndex

#### Defined in

[generated-client/api/image-api.ts:8998](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L8998)

___

### fillHeight

• `Optional` `Readonly` **fillHeight**: `number`

Height of box to fill.

**`memberof`** ImageApiHeadItemImageByIndex

#### Defined in

[generated-client/api/image-api.ts:8984](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L8984)

___

### fillWidth

• `Optional` `Readonly` **fillWidth**: `number`

Width of box to fill.

**`memberof`** ImageApiHeadItemImageByIndex

#### Defined in

[generated-client/api/image-api.ts:8977](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L8977)

___

### foregroundLayer

• `Optional` `Readonly` **foregroundLayer**: `string`

Optional. Apply a foreground layer on top of the image.

**`memberof`** ImageApiHeadItemImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9047](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L9047)

___

### format

• `Optional` `Readonly` **format**: [`ImageFormat`](../enums/generated_client.ImageFormat.md)

Optional. The MediaBrowser.Model.Drawing.ImageFormat of the returned image.

**`memberof`** ImageApiHeadItemImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9005](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L9005)

___

### height

• `Optional` `Readonly` **height**: `number`

The fixed image height to return.

**`memberof`** ImageApiHeadItemImageByIndex

#### Defined in

[generated-client/api/image-api.ts:8963](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L8963)

___

### imageIndex

• `Readonly` **imageIndex**: `number`

Image index.

**`memberof`** ImageApiHeadItemImageByIndex

#### Defined in

[generated-client/api/image-api.ts:8935](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L8935)

___

### imageType

• `Readonly` **imageType**: [`ImageType`](../enums/generated_client.ImageType.md)

Image type.

**`memberof`** ImageApiHeadItemImageByIndex

#### Defined in

[generated-client/api/image-api.ts:8928](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L8928)

___

### itemId

• `Readonly` **itemId**: `string`

Item id.

**`memberof`** ImageApiHeadItemImageByIndex

#### Defined in

[generated-client/api/image-api.ts:8921](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L8921)

___

### maxHeight

• `Optional` `Readonly` **maxHeight**: `number`

The maximum image height to return.

**`memberof`** ImageApiHeadItemImageByIndex

#### Defined in

[generated-client/api/image-api.ts:8949](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L8949)

___

### maxWidth

• `Optional` `Readonly` **maxWidth**: `number`

The maximum image width to return.

**`memberof`** ImageApiHeadItemImageByIndex

#### Defined in

[generated-client/api/image-api.ts:8942](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L8942)

___

### percentPlayed

• `Optional` `Readonly` **percentPlayed**: `number`

Optional. Percent to render for the percent played overlay.

**`memberof`** ImageApiHeadItemImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9019](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L9019)

___

### quality

• `Optional` `Readonly` **quality**: `number`

Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases.

**`memberof`** ImageApiHeadItemImageByIndex

#### Defined in

[generated-client/api/image-api.ts:8970](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L8970)

___

### tag

• `Optional` `Readonly` **tag**: `string`

Optional. Supply the cache tag from the item object to receive strong caching headers.

**`memberof`** ImageApiHeadItemImageByIndex

#### Defined in

[generated-client/api/image-api.ts:8991](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L8991)

___

### unplayedCount

• `Optional` `Readonly` **unplayedCount**: `number`

Optional. Unplayed count overlay to render.

**`memberof`** ImageApiHeadItemImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9026](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L9026)

___

### width

• `Optional` `Readonly` **width**: `number`

The fixed image width to return.

**`memberof`** ImageApiHeadItemImageByIndex

#### Defined in

[generated-client/api/image-api.ts:8956](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L8956)
