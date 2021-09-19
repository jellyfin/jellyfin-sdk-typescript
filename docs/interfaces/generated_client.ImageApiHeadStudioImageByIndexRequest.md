[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / ImageApiHeadStudioImageByIndexRequest

# Interface: ImageApiHeadStudioImageByIndexRequest

[generated-client](../modules/generated_client.md).ImageApiHeadStudioImageByIndexRequest

Request parameters for headStudioImageByIndex operation in ImageApi.

**`export`**

**`interface`** ImageApiHeadStudioImageByIndexRequest

## Table of contents

### Properties

- [addPlayedIndicator](generated_client.ImageApiHeadStudioImageByIndexRequest.md#addplayedindicator)
- [backgroundColor](generated_client.ImageApiHeadStudioImageByIndexRequest.md#backgroundcolor)
- [blur](generated_client.ImageApiHeadStudioImageByIndexRequest.md#blur)
- [cropWhitespace](generated_client.ImageApiHeadStudioImageByIndexRequest.md#cropwhitespace)
- [fillHeight](generated_client.ImageApiHeadStudioImageByIndexRequest.md#fillheight)
- [fillWidth](generated_client.ImageApiHeadStudioImageByIndexRequest.md#fillwidth)
- [foregroundLayer](generated_client.ImageApiHeadStudioImageByIndexRequest.md#foregroundlayer)
- [format](generated_client.ImageApiHeadStudioImageByIndexRequest.md#format)
- [height](generated_client.ImageApiHeadStudioImageByIndexRequest.md#height)
- [imageIndex](generated_client.ImageApiHeadStudioImageByIndexRequest.md#imageindex)
- [imageType](generated_client.ImageApiHeadStudioImageByIndexRequest.md#imagetype)
- [maxHeight](generated_client.ImageApiHeadStudioImageByIndexRequest.md#maxheight)
- [maxWidth](generated_client.ImageApiHeadStudioImageByIndexRequest.md#maxwidth)
- [name](generated_client.ImageApiHeadStudioImageByIndexRequest.md#name)
- [percentPlayed](generated_client.ImageApiHeadStudioImageByIndexRequest.md#percentplayed)
- [quality](generated_client.ImageApiHeadStudioImageByIndexRequest.md#quality)
- [tag](generated_client.ImageApiHeadStudioImageByIndexRequest.md#tag)
- [unplayedCount](generated_client.ImageApiHeadStudioImageByIndexRequest.md#unplayedcount)
- [width](generated_client.ImageApiHeadStudioImageByIndexRequest.md#width)

## Properties

### addPlayedIndicator

• `Optional` `Readonly` **addPlayedIndicator**: `boolean`

Optional. Add a played indicator.

**`memberof`** ImageApiHeadStudioImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9532](https://github.com/thornbill/jellyfin-sdk-typescript/blob/21a118e/src/generated-client/api/image-api.ts#L9532)

___

### backgroundColor

• `Optional` `Readonly` **backgroundColor**: `string`

Optional. Apply a background color for transparent images.

**`memberof`** ImageApiHeadStudioImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9546](https://github.com/thornbill/jellyfin-sdk-typescript/blob/21a118e/src/generated-client/api/image-api.ts#L9546)

___

### blur

• `Optional` `Readonly` **blur**: `number`

Optional. Blur image.

**`memberof`** ImageApiHeadStudioImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9539](https://github.com/thornbill/jellyfin-sdk-typescript/blob/21a118e/src/generated-client/api/image-api.ts#L9539)

___

### cropWhitespace

• `Optional` `Readonly` **cropWhitespace**: `boolean`

Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.

**`memberof`** ImageApiHeadStudioImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9525](https://github.com/thornbill/jellyfin-sdk-typescript/blob/21a118e/src/generated-client/api/image-api.ts#L9525)

___

### fillHeight

• `Optional` `Readonly` **fillHeight**: `number`

Height of box to fill.

**`memberof`** ImageApiHeadStudioImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9518](https://github.com/thornbill/jellyfin-sdk-typescript/blob/21a118e/src/generated-client/api/image-api.ts#L9518)

___

### fillWidth

• `Optional` `Readonly` **fillWidth**: `number`

Width of box to fill.

**`memberof`** ImageApiHeadStudioImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9511](https://github.com/thornbill/jellyfin-sdk-typescript/blob/21a118e/src/generated-client/api/image-api.ts#L9511)

___

### foregroundLayer

• `Optional` `Readonly` **foregroundLayer**: `string`

Optional. Apply a foreground layer on top of the image.

**`memberof`** ImageApiHeadStudioImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9553](https://github.com/thornbill/jellyfin-sdk-typescript/blob/21a118e/src/generated-client/api/image-api.ts#L9553)

___

### format

• `Optional` `Readonly` **format**: [`ImageFormat`](../enums/generated_client.ImageFormat.md)

Determines the output format of the image - original,gif,jpg,png.

**`memberof`** ImageApiHeadStudioImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9455](https://github.com/thornbill/jellyfin-sdk-typescript/blob/21a118e/src/generated-client/api/image-api.ts#L9455)

___

### height

• `Optional` `Readonly` **height**: `number`

The fixed image height to return.

**`memberof`** ImageApiHeadStudioImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9497](https://github.com/thornbill/jellyfin-sdk-typescript/blob/21a118e/src/generated-client/api/image-api.ts#L9497)

___

### imageIndex

• `Readonly` **imageIndex**: `number`

Image index.

**`memberof`** ImageApiHeadStudioImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9441](https://github.com/thornbill/jellyfin-sdk-typescript/blob/21a118e/src/generated-client/api/image-api.ts#L9441)

___

### imageType

• `Readonly` **imageType**: [`ImageType`](../enums/generated_client.ImageType.md)

Image type.

**`memberof`** ImageApiHeadStudioImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9434](https://github.com/thornbill/jellyfin-sdk-typescript/blob/21a118e/src/generated-client/api/image-api.ts#L9434)

___

### maxHeight

• `Optional` `Readonly` **maxHeight**: `number`

The maximum image height to return.

**`memberof`** ImageApiHeadStudioImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9469](https://github.com/thornbill/jellyfin-sdk-typescript/blob/21a118e/src/generated-client/api/image-api.ts#L9469)

___

### maxWidth

• `Optional` `Readonly` **maxWidth**: `number`

The maximum image width to return.

**`memberof`** ImageApiHeadStudioImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9462](https://github.com/thornbill/jellyfin-sdk-typescript/blob/21a118e/src/generated-client/api/image-api.ts#L9462)

___

### name

• `Readonly` **name**: `string`

Studio name.

**`memberof`** ImageApiHeadStudioImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9427](https://github.com/thornbill/jellyfin-sdk-typescript/blob/21a118e/src/generated-client/api/image-api.ts#L9427)

___

### percentPlayed

• `Optional` `Readonly` **percentPlayed**: `number`

Optional. Percent to render for the percent played overlay.

**`memberof`** ImageApiHeadStudioImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9476](https://github.com/thornbill/jellyfin-sdk-typescript/blob/21a118e/src/generated-client/api/image-api.ts#L9476)

___

### quality

• `Optional` `Readonly` **quality**: `number`

Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases.

**`memberof`** ImageApiHeadStudioImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9504](https://github.com/thornbill/jellyfin-sdk-typescript/blob/21a118e/src/generated-client/api/image-api.ts#L9504)

___

### tag

• `Optional` `Readonly` **tag**: `string`

Optional. Supply the cache tag from the item object to receive strong caching headers.

**`memberof`** ImageApiHeadStudioImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9448](https://github.com/thornbill/jellyfin-sdk-typescript/blob/21a118e/src/generated-client/api/image-api.ts#L9448)

___

### unplayedCount

• `Optional` `Readonly` **unplayedCount**: `number`

Optional. Unplayed count overlay to render.

**`memberof`** ImageApiHeadStudioImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9483](https://github.com/thornbill/jellyfin-sdk-typescript/blob/21a118e/src/generated-client/api/image-api.ts#L9483)

___

### width

• `Optional` `Readonly` **width**: `number`

The fixed image width to return.

**`memberof`** ImageApiHeadStudioImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9490](https://github.com/thornbill/jellyfin-sdk-typescript/blob/21a118e/src/generated-client/api/image-api.ts#L9490)
