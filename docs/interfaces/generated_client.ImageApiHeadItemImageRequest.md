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

[generated-client/api/image-api.ts:8673](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L8673)

___

### backgroundColor

• `Optional` `Readonly` **backgroundColor**: `string`

Optional. Apply a background color for transparent images.

**`memberof`** ImageApiHeadItemImage

#### Defined in

[generated-client/api/image-api.ts:8701](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L8701)

___

### blur

• `Optional` `Readonly` **blur**: `number`

Optional. Blur image.

**`memberof`** ImageApiHeadItemImage

#### Defined in

[generated-client/api/image-api.ts:8694](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L8694)

___

### cropWhitespace

• `Optional` `Readonly` **cropWhitespace**: `boolean`

Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.

**`memberof`** ImageApiHeadItemImage

#### Defined in

[generated-client/api/image-api.ts:8659](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L8659)

___

### fillHeight

• `Optional` `Readonly` **fillHeight**: `number`

Height of box to fill.

**`memberof`** ImageApiHeadItemImage

#### Defined in

[generated-client/api/image-api.ts:8645](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L8645)

___

### fillWidth

• `Optional` `Readonly` **fillWidth**: `number`

Width of box to fill.

**`memberof`** ImageApiHeadItemImage

#### Defined in

[generated-client/api/image-api.ts:8638](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L8638)

___

### foregroundLayer

• `Optional` `Readonly` **foregroundLayer**: `string`

Optional. Apply a foreground layer on top of the image.

**`memberof`** ImageApiHeadItemImage

#### Defined in

[generated-client/api/image-api.ts:8708](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L8708)

___

### format

• `Optional` `Readonly` **format**: [`ImageFormat`](../enums/generated_client.ImageFormat.md)

Optional. The MediaBrowser.Model.Drawing.ImageFormat of the returned image.

**`memberof`** ImageApiHeadItemImage

#### Defined in

[generated-client/api/image-api.ts:8666](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L8666)

___

### height

• `Optional` `Readonly` **height**: `number`

The fixed image height to return.

**`memberof`** ImageApiHeadItemImage

#### Defined in

[generated-client/api/image-api.ts:8624](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L8624)

___

### imageIndex

• `Optional` `Readonly` **imageIndex**: `number`

Image index.

**`memberof`** ImageApiHeadItemImage

#### Defined in

[generated-client/api/image-api.ts:8715](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L8715)

___

### imageType

• `Readonly` **imageType**: [`ImageType`](../enums/generated_client.ImageType.md)

Image type.

**`memberof`** ImageApiHeadItemImage

#### Defined in

[generated-client/api/image-api.ts:8596](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L8596)

___

### itemId

• `Readonly` **itemId**: `string`

Item id.

**`memberof`** ImageApiHeadItemImage

#### Defined in

[generated-client/api/image-api.ts:8589](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L8589)

___

### maxHeight

• `Optional` `Readonly` **maxHeight**: `number`

The maximum image height to return.

**`memberof`** ImageApiHeadItemImage

#### Defined in

[generated-client/api/image-api.ts:8610](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L8610)

___

### maxWidth

• `Optional` `Readonly` **maxWidth**: `number`

The maximum image width to return.

**`memberof`** ImageApiHeadItemImage

#### Defined in

[generated-client/api/image-api.ts:8603](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L8603)

___

### percentPlayed

• `Optional` `Readonly` **percentPlayed**: `number`

Optional. Percent to render for the percent played overlay.

**`memberof`** ImageApiHeadItemImage

#### Defined in

[generated-client/api/image-api.ts:8680](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L8680)

___

### quality

• `Optional` `Readonly` **quality**: `number`

Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases.

**`memberof`** ImageApiHeadItemImage

#### Defined in

[generated-client/api/image-api.ts:8631](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L8631)

___

### tag

• `Optional` `Readonly` **tag**: `string`

Optional. Supply the cache tag from the item object to receive strong caching headers.

**`memberof`** ImageApiHeadItemImage

#### Defined in

[generated-client/api/image-api.ts:8652](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L8652)

___

### unplayedCount

• `Optional` `Readonly` **unplayedCount**: `number`

Optional. Unplayed count overlay to render.

**`memberof`** ImageApiHeadItemImage

#### Defined in

[generated-client/api/image-api.ts:8687](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L8687)

___

### width

• `Optional` `Readonly` **width**: `number`

The fixed image width to return.

**`memberof`** ImageApiHeadItemImage

#### Defined in

[generated-client/api/image-api.ts:8617](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L8617)
