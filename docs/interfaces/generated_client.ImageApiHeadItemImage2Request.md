[jellyfin-sdk-typescript](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / ImageApiHeadItemImage2Request

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

[generated-client/api/image-api.ts:8552](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b0f5501/src/generated-client/api/image-api.ts#L8552)

___

### backgroundColor

• `Optional` `Readonly` **backgroundColor**: `string`

Optional. Apply a background color for transparent images.

**`memberof`** ImageApiHeadItemImage2

#### Defined in

[generated-client/api/image-api.ts:8566](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b0f5501/src/generated-client/api/image-api.ts#L8566)

___

### blur

• `Optional` `Readonly` **blur**: `number`

Optional. Blur image.

**`memberof`** ImageApiHeadItemImage2

#### Defined in

[generated-client/api/image-api.ts:8559](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b0f5501/src/generated-client/api/image-api.ts#L8559)

___

### cropWhitespace

• `Optional` `Readonly` **cropWhitespace**: `boolean`

Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.

**`memberof`** ImageApiHeadItemImage2

#### Defined in

[generated-client/api/image-api.ts:8545](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b0f5501/src/generated-client/api/image-api.ts#L8545)

___

### fillHeight

• `Optional` `Readonly` **fillHeight**: `number`

Height of box to fill.

**`memberof`** ImageApiHeadItemImage2

#### Defined in

[generated-client/api/image-api.ts:8538](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b0f5501/src/generated-client/api/image-api.ts#L8538)

___

### fillWidth

• `Optional` `Readonly` **fillWidth**: `number`

Width of box to fill.

**`memberof`** ImageApiHeadItemImage2

#### Defined in

[generated-client/api/image-api.ts:8531](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b0f5501/src/generated-client/api/image-api.ts#L8531)

___

### foregroundLayer

• `Optional` `Readonly` **foregroundLayer**: `string`

Optional. Apply a foreground layer on top of the image.

**`memberof`** ImageApiHeadItemImage2

#### Defined in

[generated-client/api/image-api.ts:8573](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b0f5501/src/generated-client/api/image-api.ts#L8573)

___

### format

• `Readonly` **format**: [`ImageFormat`](../enums/generated_client.ImageFormat.md)

Determines the output format of the image - original,gif,jpg,png.

**`memberof`** ImageApiHeadItemImage2

#### Defined in

[generated-client/api/image-api.ts:8482](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b0f5501/src/generated-client/api/image-api.ts#L8482)

___

### height

• `Optional` `Readonly` **height**: `number`

The fixed image height to return.

**`memberof`** ImageApiHeadItemImage2

#### Defined in

[generated-client/api/image-api.ts:8517](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b0f5501/src/generated-client/api/image-api.ts#L8517)

___

### imageIndex

• `Readonly` **imageIndex**: `number`

Image index.

**`memberof`** ImageApiHeadItemImage2

#### Defined in

[generated-client/api/image-api.ts:8503](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b0f5501/src/generated-client/api/image-api.ts#L8503)

___

### imageType

• `Readonly` **imageType**: [`ImageType`](../enums/generated_client.ImageType.md)

Image type.

**`memberof`** ImageApiHeadItemImage2

#### Defined in

[generated-client/api/image-api.ts:8454](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b0f5501/src/generated-client/api/image-api.ts#L8454)

___

### itemId

• `Readonly` **itemId**: `string`

Item id.

**`memberof`** ImageApiHeadItemImage2

#### Defined in

[generated-client/api/image-api.ts:8447](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b0f5501/src/generated-client/api/image-api.ts#L8447)

___

### maxHeight

• `Readonly` **maxHeight**: `number`

The maximum image height to return.

**`memberof`** ImageApiHeadItemImage2

#### Defined in

[generated-client/api/image-api.ts:8468](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b0f5501/src/generated-client/api/image-api.ts#L8468)

___

### maxWidth

• `Readonly` **maxWidth**: `number`

The maximum image width to return.

**`memberof`** ImageApiHeadItemImage2

#### Defined in

[generated-client/api/image-api.ts:8461](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b0f5501/src/generated-client/api/image-api.ts#L8461)

___

### percentPlayed

• `Readonly` **percentPlayed**: `number`

Optional. Percent to render for the percent played overlay.

**`memberof`** ImageApiHeadItemImage2

#### Defined in

[generated-client/api/image-api.ts:8489](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b0f5501/src/generated-client/api/image-api.ts#L8489)

___

### quality

• `Optional` `Readonly` **quality**: `number`

Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases.

**`memberof`** ImageApiHeadItemImage2

#### Defined in

[generated-client/api/image-api.ts:8524](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b0f5501/src/generated-client/api/image-api.ts#L8524)

___

### tag

• `Readonly` **tag**: `string`

Optional. Supply the cache tag from the item object to receive strong caching headers.

**`memberof`** ImageApiHeadItemImage2

#### Defined in

[generated-client/api/image-api.ts:8475](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b0f5501/src/generated-client/api/image-api.ts#L8475)

___

### unplayedCount

• `Readonly` **unplayedCount**: `number`

Optional. Unplayed count overlay to render.

**`memberof`** ImageApiHeadItemImage2

#### Defined in

[generated-client/api/image-api.ts:8496](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b0f5501/src/generated-client/api/image-api.ts#L8496)

___

### width

• `Optional` `Readonly` **width**: `number`

The fixed image width to return.

**`memberof`** ImageApiHeadItemImage2

#### Defined in

[generated-client/api/image-api.ts:8510](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b0f5501/src/generated-client/api/image-api.ts#L8510)
