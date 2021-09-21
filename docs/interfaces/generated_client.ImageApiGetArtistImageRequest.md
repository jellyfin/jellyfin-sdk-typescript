[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / ImageApiGetArtistImageRequest

# Interface: ImageApiGetArtistImageRequest

[generated-client](../modules/generated_client.md).ImageApiGetArtistImageRequest

Request parameters for getArtistImage operation in ImageApi.

**`export`**

**`interface`** ImageApiGetArtistImageRequest

## Table of contents

### Properties

- [addPlayedIndicator](generated_client.ImageApiGetArtistImageRequest.md#addplayedindicator)
- [backgroundColor](generated_client.ImageApiGetArtistImageRequest.md#backgroundcolor)
- [blur](generated_client.ImageApiGetArtistImageRequest.md#blur)
- [cropWhitespace](generated_client.ImageApiGetArtistImageRequest.md#cropwhitespace)
- [fillHeight](generated_client.ImageApiGetArtistImageRequest.md#fillheight)
- [fillWidth](generated_client.ImageApiGetArtistImageRequest.md#fillwidth)
- [foregroundLayer](generated_client.ImageApiGetArtistImageRequest.md#foregroundlayer)
- [format](generated_client.ImageApiGetArtistImageRequest.md#format)
- [height](generated_client.ImageApiGetArtistImageRequest.md#height)
- [imageIndex](generated_client.ImageApiGetArtistImageRequest.md#imageindex)
- [imageType](generated_client.ImageApiGetArtistImageRequest.md#imagetype)
- [maxHeight](generated_client.ImageApiGetArtistImageRequest.md#maxheight)
- [maxWidth](generated_client.ImageApiGetArtistImageRequest.md#maxwidth)
- [name](generated_client.ImageApiGetArtistImageRequest.md#name)
- [percentPlayed](generated_client.ImageApiGetArtistImageRequest.md#percentplayed)
- [quality](generated_client.ImageApiGetArtistImageRequest.md#quality)
- [tag](generated_client.ImageApiGetArtistImageRequest.md#tag)
- [unplayedCount](generated_client.ImageApiGetArtistImageRequest.md#unplayedcount)
- [width](generated_client.ImageApiGetArtistImageRequest.md#width)

## Properties

### addPlayedIndicator

• `Optional` `Readonly` **addPlayedIndicator**: `boolean`

Optional. Add a played indicator.

**`memberof`** ImageApiGetArtistImage

#### Defined in

[generated-client/api/image-api.ts:6018](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/image-api.ts#L6018)

___

### backgroundColor

• `Optional` `Readonly` **backgroundColor**: `string`

Optional. Apply a background color for transparent images.

**`memberof`** ImageApiGetArtistImage

#### Defined in

[generated-client/api/image-api.ts:6032](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/image-api.ts#L6032)

___

### blur

• `Optional` `Readonly` **blur**: `number`

Optional. Blur image.

**`memberof`** ImageApiGetArtistImage

#### Defined in

[generated-client/api/image-api.ts:6025](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/image-api.ts#L6025)

___

### cropWhitespace

• `Optional` `Readonly` **cropWhitespace**: `boolean`

Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.

**`memberof`** ImageApiGetArtistImage

#### Defined in

[generated-client/api/image-api.ts:6011](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/image-api.ts#L6011)

___

### fillHeight

• `Optional` `Readonly` **fillHeight**: `number`

Height of box to fill.

**`memberof`** ImageApiGetArtistImage

#### Defined in

[generated-client/api/image-api.ts:6004](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/image-api.ts#L6004)

___

### fillWidth

• `Optional` `Readonly` **fillWidth**: `number`

Width of box to fill.

**`memberof`** ImageApiGetArtistImage

#### Defined in

[generated-client/api/image-api.ts:5997](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/image-api.ts#L5997)

___

### foregroundLayer

• `Optional` `Readonly` **foregroundLayer**: `string`

Optional. Apply a foreground layer on top of the image.

**`memberof`** ImageApiGetArtistImage

#### Defined in

[generated-client/api/image-api.ts:6039](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/image-api.ts#L6039)

___

### format

• `Optional` `Readonly` **format**: [`ImageFormat`](../enums/generated_client.ImageFormat.md)

Determines the output format of the image - original,gif,jpg,png.

**`memberof`** ImageApiGetArtistImage

#### Defined in

[generated-client/api/image-api.ts:5941](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/image-api.ts#L5941)

___

### height

• `Optional` `Readonly` **height**: `number`

The fixed image height to return.

**`memberof`** ImageApiGetArtistImage

#### Defined in

[generated-client/api/image-api.ts:5983](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/image-api.ts#L5983)

___

### imageIndex

• `Readonly` **imageIndex**: `number`

Image index.

**`memberof`** ImageApiGetArtistImage

#### Defined in

[generated-client/api/image-api.ts:5927](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/image-api.ts#L5927)

___

### imageType

• `Readonly` **imageType**: [`ImageType`](../enums/generated_client.ImageType.md)

Image type.

**`memberof`** ImageApiGetArtistImage

#### Defined in

[generated-client/api/image-api.ts:5920](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/image-api.ts#L5920)

___

### maxHeight

• `Optional` `Readonly` **maxHeight**: `number`

The maximum image height to return.

**`memberof`** ImageApiGetArtistImage

#### Defined in

[generated-client/api/image-api.ts:5955](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/image-api.ts#L5955)

___

### maxWidth

• `Optional` `Readonly` **maxWidth**: `number`

The maximum image width to return.

**`memberof`** ImageApiGetArtistImage

#### Defined in

[generated-client/api/image-api.ts:5948](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/image-api.ts#L5948)

___

### name

• `Readonly` **name**: `string`

Artist name.

**`memberof`** ImageApiGetArtistImage

#### Defined in

[generated-client/api/image-api.ts:5913](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/image-api.ts#L5913)

___

### percentPlayed

• `Optional` `Readonly` **percentPlayed**: `number`

Optional. Percent to render for the percent played overlay.

**`memberof`** ImageApiGetArtistImage

#### Defined in

[generated-client/api/image-api.ts:5962](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/image-api.ts#L5962)

___

### quality

• `Optional` `Readonly` **quality**: `number`

Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases.

**`memberof`** ImageApiGetArtistImage

#### Defined in

[generated-client/api/image-api.ts:5990](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/image-api.ts#L5990)

___

### tag

• `Optional` `Readonly` **tag**: `string`

Optional. Supply the cache tag from the item object to receive strong caching headers.

**`memberof`** ImageApiGetArtistImage

#### Defined in

[generated-client/api/image-api.ts:5934](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/image-api.ts#L5934)

___

### unplayedCount

• `Optional` `Readonly` **unplayedCount**: `number`

Optional. Unplayed count overlay to render.

**`memberof`** ImageApiGetArtistImage

#### Defined in

[generated-client/api/image-api.ts:5969](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/image-api.ts#L5969)

___

### width

• `Optional` `Readonly` **width**: `number`

The fixed image width to return.

**`memberof`** ImageApiGetArtistImage

#### Defined in

[generated-client/api/image-api.ts:5976](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/image-api.ts#L5976)
