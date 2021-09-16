[jellyfin-sdk-typescript](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / ImageApiHeadPersonImageRequest

# Interface: ImageApiHeadPersonImageRequest

[generated-client](../modules/generated_client.md).ImageApiHeadPersonImageRequest

Request parameters for headPersonImage operation in ImageApi.

**`export`**

**`interface`** ImageApiHeadPersonImageRequest

## Table of contents

### Properties

- [addPlayedIndicator](generated_client.ImageApiHeadPersonImageRequest.md#addplayedindicator)
- [backgroundColor](generated_client.ImageApiHeadPersonImageRequest.md#backgroundcolor)
- [blur](generated_client.ImageApiHeadPersonImageRequest.md#blur)
- [cropWhitespace](generated_client.ImageApiHeadPersonImageRequest.md#cropwhitespace)
- [fillHeight](generated_client.ImageApiHeadPersonImageRequest.md#fillheight)
- [fillWidth](generated_client.ImageApiHeadPersonImageRequest.md#fillwidth)
- [foregroundLayer](generated_client.ImageApiHeadPersonImageRequest.md#foregroundlayer)
- [format](generated_client.ImageApiHeadPersonImageRequest.md#format)
- [height](generated_client.ImageApiHeadPersonImageRequest.md#height)
- [imageIndex](generated_client.ImageApiHeadPersonImageRequest.md#imageindex)
- [imageType](generated_client.ImageApiHeadPersonImageRequest.md#imagetype)
- [maxHeight](generated_client.ImageApiHeadPersonImageRequest.md#maxheight)
- [maxWidth](generated_client.ImageApiHeadPersonImageRequest.md#maxwidth)
- [name](generated_client.ImageApiHeadPersonImageRequest.md#name)
- [percentPlayed](generated_client.ImageApiHeadPersonImageRequest.md#percentplayed)
- [quality](generated_client.ImageApiHeadPersonImageRequest.md#quality)
- [tag](generated_client.ImageApiHeadPersonImageRequest.md#tag)
- [unplayedCount](generated_client.ImageApiHeadPersonImageRequest.md#unplayedcount)
- [width](generated_client.ImageApiHeadPersonImageRequest.md#width)

## Properties

### addPlayedIndicator

• `Optional` `Readonly` **addPlayedIndicator**: `boolean`

Optional. Add a played indicator.

**`memberof`** ImageApiHeadPersonImage

#### Defined in

[generated-client/api/image-api.ts:9105](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b0f5501/src/generated-client/api/image-api.ts#L9105)

___

### backgroundColor

• `Optional` `Readonly` **backgroundColor**: `string`

Optional. Apply a background color for transparent images.

**`memberof`** ImageApiHeadPersonImage

#### Defined in

[generated-client/api/image-api.ts:9119](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b0f5501/src/generated-client/api/image-api.ts#L9119)

___

### blur

• `Optional` `Readonly` **blur**: `number`

Optional. Blur image.

**`memberof`** ImageApiHeadPersonImage

#### Defined in

[generated-client/api/image-api.ts:9112](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b0f5501/src/generated-client/api/image-api.ts#L9112)

___

### cropWhitespace

• `Optional` `Readonly` **cropWhitespace**: `boolean`

Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.

**`memberof`** ImageApiHeadPersonImage

#### Defined in

[generated-client/api/image-api.ts:9098](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b0f5501/src/generated-client/api/image-api.ts#L9098)

___

### fillHeight

• `Optional` `Readonly` **fillHeight**: `number`

Height of box to fill.

**`memberof`** ImageApiHeadPersonImage

#### Defined in

[generated-client/api/image-api.ts:9091](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b0f5501/src/generated-client/api/image-api.ts#L9091)

___

### fillWidth

• `Optional` `Readonly` **fillWidth**: `number`

Width of box to fill.

**`memberof`** ImageApiHeadPersonImage

#### Defined in

[generated-client/api/image-api.ts:9084](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b0f5501/src/generated-client/api/image-api.ts#L9084)

___

### foregroundLayer

• `Optional` `Readonly` **foregroundLayer**: `string`

Optional. Apply a foreground layer on top of the image.

**`memberof`** ImageApiHeadPersonImage

#### Defined in

[generated-client/api/image-api.ts:9126](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b0f5501/src/generated-client/api/image-api.ts#L9126)

___

### format

• `Optional` `Readonly` **format**: [`ImageFormat`](../enums/generated_client.ImageFormat.md)

Determines the output format of the image - original,gif,jpg,png.

**`memberof`** ImageApiHeadPersonImage

#### Defined in

[generated-client/api/image-api.ts:9028](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b0f5501/src/generated-client/api/image-api.ts#L9028)

___

### height

• `Optional` `Readonly` **height**: `number`

The fixed image height to return.

**`memberof`** ImageApiHeadPersonImage

#### Defined in

[generated-client/api/image-api.ts:9070](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b0f5501/src/generated-client/api/image-api.ts#L9070)

___

### imageIndex

• `Optional` `Readonly` **imageIndex**: `number`

Image index.

**`memberof`** ImageApiHeadPersonImage

#### Defined in

[generated-client/api/image-api.ts:9133](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b0f5501/src/generated-client/api/image-api.ts#L9133)

___

### imageType

• `Readonly` **imageType**: [`ImageType`](../enums/generated_client.ImageType.md)

Image type.

**`memberof`** ImageApiHeadPersonImage

#### Defined in

[generated-client/api/image-api.ts:9014](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b0f5501/src/generated-client/api/image-api.ts#L9014)

___

### maxHeight

• `Optional` `Readonly` **maxHeight**: `number`

The maximum image height to return.

**`memberof`** ImageApiHeadPersonImage

#### Defined in

[generated-client/api/image-api.ts:9042](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b0f5501/src/generated-client/api/image-api.ts#L9042)

___

### maxWidth

• `Optional` `Readonly` **maxWidth**: `number`

The maximum image width to return.

**`memberof`** ImageApiHeadPersonImage

#### Defined in

[generated-client/api/image-api.ts:9035](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b0f5501/src/generated-client/api/image-api.ts#L9035)

___

### name

• `Readonly` **name**: `string`

Person name.

**`memberof`** ImageApiHeadPersonImage

#### Defined in

[generated-client/api/image-api.ts:9007](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b0f5501/src/generated-client/api/image-api.ts#L9007)

___

### percentPlayed

• `Optional` `Readonly` **percentPlayed**: `number`

Optional. Percent to render for the percent played overlay.

**`memberof`** ImageApiHeadPersonImage

#### Defined in

[generated-client/api/image-api.ts:9049](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b0f5501/src/generated-client/api/image-api.ts#L9049)

___

### quality

• `Optional` `Readonly` **quality**: `number`

Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases.

**`memberof`** ImageApiHeadPersonImage

#### Defined in

[generated-client/api/image-api.ts:9077](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b0f5501/src/generated-client/api/image-api.ts#L9077)

___

### tag

• `Optional` `Readonly` **tag**: `string`

Optional. Supply the cache tag from the item object to receive strong caching headers.

**`memberof`** ImageApiHeadPersonImage

#### Defined in

[generated-client/api/image-api.ts:9021](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b0f5501/src/generated-client/api/image-api.ts#L9021)

___

### unplayedCount

• `Optional` `Readonly` **unplayedCount**: `number`

Optional. Unplayed count overlay to render.

**`memberof`** ImageApiHeadPersonImage

#### Defined in

[generated-client/api/image-api.ts:9056](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b0f5501/src/generated-client/api/image-api.ts#L9056)

___

### width

• `Optional` `Readonly` **width**: `number`

The fixed image width to return.

**`memberof`** ImageApiHeadPersonImage

#### Defined in

[generated-client/api/image-api.ts:9063](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b0f5501/src/generated-client/api/image-api.ts#L9063)
