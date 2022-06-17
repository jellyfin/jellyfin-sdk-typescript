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

[generated-client/api/image-api.ts:6769](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L6769)

___

### backgroundColor

• `Optional` `Readonly` **backgroundColor**: `string`

Optional. Apply a background color for transparent images.

**`memberof`** ImageApiGetItemImage2

#### Defined in

[generated-client/api/image-api.ts:6783](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L6783)

___

### blur

• `Optional` `Readonly` **blur**: `number`

Optional. Blur image.

**`memberof`** ImageApiGetItemImage2

#### Defined in

[generated-client/api/image-api.ts:6776](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L6776)

___

### cropWhitespace

• `Optional` `Readonly` **cropWhitespace**: `boolean`

Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.

**`memberof`** ImageApiGetItemImage2

#### Defined in

[generated-client/api/image-api.ts:6762](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L6762)

___

### fillHeight

• `Optional` `Readonly` **fillHeight**: `number`

Height of box to fill.

**`memberof`** ImageApiGetItemImage2

#### Defined in

[generated-client/api/image-api.ts:6755](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L6755)

___

### fillWidth

• `Optional` `Readonly` **fillWidth**: `number`

Width of box to fill.

**`memberof`** ImageApiGetItemImage2

#### Defined in

[generated-client/api/image-api.ts:6748](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L6748)

___

### foregroundLayer

• `Optional` `Readonly` **foregroundLayer**: `string`

Optional. Apply a foreground layer on top of the image.

**`memberof`** ImageApiGetItemImage2

#### Defined in

[generated-client/api/image-api.ts:6790](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L6790)

___

### format

• `Readonly` **format**: [`ImageFormat`](../enums/generated_client.ImageFormat.md)

Determines the output format of the image - original,gif,jpg,png.

**`memberof`** ImageApiGetItemImage2

#### Defined in

[generated-client/api/image-api.ts:6699](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L6699)

___

### height

• `Optional` `Readonly` **height**: `number`

The fixed image height to return.

**`memberof`** ImageApiGetItemImage2

#### Defined in

[generated-client/api/image-api.ts:6734](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L6734)

___

### imageIndex

• `Readonly` **imageIndex**: `number`

Image index.

**`memberof`** ImageApiGetItemImage2

#### Defined in

[generated-client/api/image-api.ts:6720](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L6720)

___

### imageType

• `Readonly` **imageType**: [`ImageType`](../enums/generated_client.ImageType.md)

Image type.

**`memberof`** ImageApiGetItemImage2

#### Defined in

[generated-client/api/image-api.ts:6671](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L6671)

___

### itemId

• `Readonly` **itemId**: `string`

Item id.

**`memberof`** ImageApiGetItemImage2

#### Defined in

[generated-client/api/image-api.ts:6664](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L6664)

___

### maxHeight

• `Readonly` **maxHeight**: `number`

The maximum image height to return.

**`memberof`** ImageApiGetItemImage2

#### Defined in

[generated-client/api/image-api.ts:6685](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L6685)

___

### maxWidth

• `Readonly` **maxWidth**: `number`

The maximum image width to return.

**`memberof`** ImageApiGetItemImage2

#### Defined in

[generated-client/api/image-api.ts:6678](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L6678)

___

### percentPlayed

• `Readonly` **percentPlayed**: `number`

Optional. Percent to render for the percent played overlay.

**`memberof`** ImageApiGetItemImage2

#### Defined in

[generated-client/api/image-api.ts:6706](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L6706)

___

### quality

• `Optional` `Readonly` **quality**: `number`

Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases.

**`memberof`** ImageApiGetItemImage2

#### Defined in

[generated-client/api/image-api.ts:6741](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L6741)

___

### tag

• `Readonly` **tag**: `string`

Optional. Supply the cache tag from the item object to receive strong caching headers.

**`memberof`** ImageApiGetItemImage2

#### Defined in

[generated-client/api/image-api.ts:6692](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L6692)

___

### unplayedCount

• `Readonly` **unplayedCount**: `number`

Optional. Unplayed count overlay to render.

**`memberof`** ImageApiGetItemImage2

#### Defined in

[generated-client/api/image-api.ts:6713](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L6713)

___

### width

• `Optional` `Readonly` **width**: `number`

The fixed image width to return.

**`memberof`** ImageApiGetItemImage2

#### Defined in

[generated-client/api/image-api.ts:6727](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L6727)
