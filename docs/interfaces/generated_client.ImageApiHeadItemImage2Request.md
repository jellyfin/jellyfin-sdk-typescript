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

[generated-client/api/image-api.ts:8834](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L8834)

___

### backgroundColor

• `Optional` `Readonly` **backgroundColor**: `string`

Optional. Apply a background color for transparent images.

**`memberof`** ImageApiHeadItemImage2

#### Defined in

[generated-client/api/image-api.ts:8848](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L8848)

___

### blur

• `Optional` `Readonly` **blur**: `number`

Optional. Blur image.

**`memberof`** ImageApiHeadItemImage2

#### Defined in

[generated-client/api/image-api.ts:8841](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L8841)

___

### cropWhitespace

• `Optional` `Readonly` **cropWhitespace**: `boolean`

Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.

**`memberof`** ImageApiHeadItemImage2

#### Defined in

[generated-client/api/image-api.ts:8827](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L8827)

___

### fillHeight

• `Optional` `Readonly` **fillHeight**: `number`

Height of box to fill.

**`memberof`** ImageApiHeadItemImage2

#### Defined in

[generated-client/api/image-api.ts:8820](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L8820)

___

### fillWidth

• `Optional` `Readonly` **fillWidth**: `number`

Width of box to fill.

**`memberof`** ImageApiHeadItemImage2

#### Defined in

[generated-client/api/image-api.ts:8813](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L8813)

___

### foregroundLayer

• `Optional` `Readonly` **foregroundLayer**: `string`

Optional. Apply a foreground layer on top of the image.

**`memberof`** ImageApiHeadItemImage2

#### Defined in

[generated-client/api/image-api.ts:8855](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L8855)

___

### format

• `Readonly` **format**: [`ImageFormat`](../enums/generated_client.ImageFormat.md)

Determines the output format of the image - original,gif,jpg,png.

**`memberof`** ImageApiHeadItemImage2

#### Defined in

[generated-client/api/image-api.ts:8764](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L8764)

___

### height

• `Optional` `Readonly` **height**: `number`

The fixed image height to return.

**`memberof`** ImageApiHeadItemImage2

#### Defined in

[generated-client/api/image-api.ts:8799](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L8799)

___

### imageIndex

• `Readonly` **imageIndex**: `number`

Image index.

**`memberof`** ImageApiHeadItemImage2

#### Defined in

[generated-client/api/image-api.ts:8785](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L8785)

___

### imageType

• `Readonly` **imageType**: [`ImageType`](../enums/generated_client.ImageType.md)

Image type.

**`memberof`** ImageApiHeadItemImage2

#### Defined in

[generated-client/api/image-api.ts:8736](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L8736)

___

### itemId

• `Readonly` **itemId**: `string`

Item id.

**`memberof`** ImageApiHeadItemImage2

#### Defined in

[generated-client/api/image-api.ts:8729](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L8729)

___

### maxHeight

• `Readonly` **maxHeight**: `number`

The maximum image height to return.

**`memberof`** ImageApiHeadItemImage2

#### Defined in

[generated-client/api/image-api.ts:8750](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L8750)

___

### maxWidth

• `Readonly` **maxWidth**: `number`

The maximum image width to return.

**`memberof`** ImageApiHeadItemImage2

#### Defined in

[generated-client/api/image-api.ts:8743](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L8743)

___

### percentPlayed

• `Readonly` **percentPlayed**: `number`

Optional. Percent to render for the percent played overlay.

**`memberof`** ImageApiHeadItemImage2

#### Defined in

[generated-client/api/image-api.ts:8771](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L8771)

___

### quality

• `Optional` `Readonly` **quality**: `number`

Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases.

**`memberof`** ImageApiHeadItemImage2

#### Defined in

[generated-client/api/image-api.ts:8806](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L8806)

___

### tag

• `Readonly` **tag**: `string`

Optional. Supply the cache tag from the item object to receive strong caching headers.

**`memberof`** ImageApiHeadItemImage2

#### Defined in

[generated-client/api/image-api.ts:8757](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L8757)

___

### unplayedCount

• `Readonly` **unplayedCount**: `number`

Optional. Unplayed count overlay to render.

**`memberof`** ImageApiHeadItemImage2

#### Defined in

[generated-client/api/image-api.ts:8778](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L8778)

___

### width

• `Optional` `Readonly` **width**: `number`

The fixed image width to return.

**`memberof`** ImageApiHeadItemImage2

#### Defined in

[generated-client/api/image-api.ts:8792](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L8792)
