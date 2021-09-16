[jellyfin-sdk-typescript](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / ImageApiHeadGenreImageRequest

# Interface: ImageApiHeadGenreImageRequest

[generated-client](../modules/generated_client.md).ImageApiHeadGenreImageRequest

Request parameters for headGenreImage operation in ImageApi.

**`export`**

**`interface`** ImageApiHeadGenreImageRequest

## Table of contents

### Properties

- [addPlayedIndicator](generated_client.ImageApiHeadGenreImageRequest.md#addplayedindicator)
- [backgroundColor](generated_client.ImageApiHeadGenreImageRequest.md#backgroundcolor)
- [blur](generated_client.ImageApiHeadGenreImageRequest.md#blur)
- [cropWhitespace](generated_client.ImageApiHeadGenreImageRequest.md#cropwhitespace)
- [fillHeight](generated_client.ImageApiHeadGenreImageRequest.md#fillheight)
- [fillWidth](generated_client.ImageApiHeadGenreImageRequest.md#fillwidth)
- [foregroundLayer](generated_client.ImageApiHeadGenreImageRequest.md#foregroundlayer)
- [format](generated_client.ImageApiHeadGenreImageRequest.md#format)
- [height](generated_client.ImageApiHeadGenreImageRequest.md#height)
- [imageIndex](generated_client.ImageApiHeadGenreImageRequest.md#imageindex)
- [imageType](generated_client.ImageApiHeadGenreImageRequest.md#imagetype)
- [maxHeight](generated_client.ImageApiHeadGenreImageRequest.md#maxheight)
- [maxWidth](generated_client.ImageApiHeadGenreImageRequest.md#maxwidth)
- [name](generated_client.ImageApiHeadGenreImageRequest.md#name)
- [percentPlayed](generated_client.ImageApiHeadGenreImageRequest.md#percentplayed)
- [quality](generated_client.ImageApiHeadGenreImageRequest.md#quality)
- [tag](generated_client.ImageApiHeadGenreImageRequest.md#tag)
- [unplayedCount](generated_client.ImageApiHeadGenreImageRequest.md#unplayedcount)
- [width](generated_client.ImageApiHeadGenreImageRequest.md#width)

## Properties

### addPlayedIndicator

• `Optional` `Readonly` **addPlayedIndicator**: `boolean`

Optional. Add a played indicator.

**`memberof`** ImageApiHeadGenreImage

#### Defined in

[generated-client/api/image-api.ts:8125](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/image-api.ts#L8125)

___

### backgroundColor

• `Optional` `Readonly` **backgroundColor**: `string`

Optional. Apply a background color for transparent images.

**`memberof`** ImageApiHeadGenreImage

#### Defined in

[generated-client/api/image-api.ts:8139](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/image-api.ts#L8139)

___

### blur

• `Optional` `Readonly` **blur**: `number`

Optional. Blur image.

**`memberof`** ImageApiHeadGenreImage

#### Defined in

[generated-client/api/image-api.ts:8132](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/image-api.ts#L8132)

___

### cropWhitespace

• `Optional` `Readonly` **cropWhitespace**: `boolean`

Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.

**`memberof`** ImageApiHeadGenreImage

#### Defined in

[generated-client/api/image-api.ts:8118](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/image-api.ts#L8118)

___

### fillHeight

• `Optional` `Readonly` **fillHeight**: `number`

Height of box to fill.

**`memberof`** ImageApiHeadGenreImage

#### Defined in

[generated-client/api/image-api.ts:8111](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/image-api.ts#L8111)

___

### fillWidth

• `Optional` `Readonly` **fillWidth**: `number`

Width of box to fill.

**`memberof`** ImageApiHeadGenreImage

#### Defined in

[generated-client/api/image-api.ts:8104](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/image-api.ts#L8104)

___

### foregroundLayer

• `Optional` `Readonly` **foregroundLayer**: `string`

Optional. Apply a foreground layer on top of the image.

**`memberof`** ImageApiHeadGenreImage

#### Defined in

[generated-client/api/image-api.ts:8146](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/image-api.ts#L8146)

___

### format

• `Optional` `Readonly` **format**: [`ImageFormat`](../enums/generated_client.ImageFormat.md)

Determines the output format of the image - original,gif,jpg,png.

**`memberof`** ImageApiHeadGenreImage

#### Defined in

[generated-client/api/image-api.ts:8048](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/image-api.ts#L8048)

___

### height

• `Optional` `Readonly` **height**: `number`

The fixed image height to return.

**`memberof`** ImageApiHeadGenreImage

#### Defined in

[generated-client/api/image-api.ts:8090](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/image-api.ts#L8090)

___

### imageIndex

• `Optional` `Readonly` **imageIndex**: `number`

Image index.

**`memberof`** ImageApiHeadGenreImage

#### Defined in

[generated-client/api/image-api.ts:8153](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/image-api.ts#L8153)

___

### imageType

• `Readonly` **imageType**: [`ImageType`](../enums/generated_client.ImageType.md)

Image type.

**`memberof`** ImageApiHeadGenreImage

#### Defined in

[generated-client/api/image-api.ts:8034](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/image-api.ts#L8034)

___

### maxHeight

• `Optional` `Readonly` **maxHeight**: `number`

The maximum image height to return.

**`memberof`** ImageApiHeadGenreImage

#### Defined in

[generated-client/api/image-api.ts:8062](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/image-api.ts#L8062)

___

### maxWidth

• `Optional` `Readonly` **maxWidth**: `number`

The maximum image width to return.

**`memberof`** ImageApiHeadGenreImage

#### Defined in

[generated-client/api/image-api.ts:8055](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/image-api.ts#L8055)

___

### name

• `Readonly` **name**: `string`

Genre name.

**`memberof`** ImageApiHeadGenreImage

#### Defined in

[generated-client/api/image-api.ts:8027](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/image-api.ts#L8027)

___

### percentPlayed

• `Optional` `Readonly` **percentPlayed**: `number`

Optional. Percent to render for the percent played overlay.

**`memberof`** ImageApiHeadGenreImage

#### Defined in

[generated-client/api/image-api.ts:8069](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/image-api.ts#L8069)

___

### quality

• `Optional` `Readonly` **quality**: `number`

Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases.

**`memberof`** ImageApiHeadGenreImage

#### Defined in

[generated-client/api/image-api.ts:8097](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/image-api.ts#L8097)

___

### tag

• `Optional` `Readonly` **tag**: `string`

Optional. Supply the cache tag from the item object to receive strong caching headers.

**`memberof`** ImageApiHeadGenreImage

#### Defined in

[generated-client/api/image-api.ts:8041](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/image-api.ts#L8041)

___

### unplayedCount

• `Optional` `Readonly` **unplayedCount**: `number`

Optional. Unplayed count overlay to render.

**`memberof`** ImageApiHeadGenreImage

#### Defined in

[generated-client/api/image-api.ts:8076](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/image-api.ts#L8076)

___

### width

• `Optional` `Readonly` **width**: `number`

The fixed image width to return.

**`memberof`** ImageApiHeadGenreImage

#### Defined in

[generated-client/api/image-api.ts:8083](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/image-api.ts#L8083)
