[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / ImageApiGetStudioImageRequest

# Interface: ImageApiGetStudioImageRequest

[generated-client](../modules/generated_client.md).ImageApiGetStudioImageRequest

Request parameters for getStudioImage operation in ImageApi.

**`export`**

**`interface`** ImageApiGetStudioImageRequest

## Table of contents

### Properties

- [addPlayedIndicator](generated_client.ImageApiGetStudioImageRequest.md#addplayedindicator)
- [backgroundColor](generated_client.ImageApiGetStudioImageRequest.md#backgroundcolor)
- [blur](generated_client.ImageApiGetStudioImageRequest.md#blur)
- [cropWhitespace](generated_client.ImageApiGetStudioImageRequest.md#cropwhitespace)
- [fillHeight](generated_client.ImageApiGetStudioImageRequest.md#fillheight)
- [fillWidth](generated_client.ImageApiGetStudioImageRequest.md#fillwidth)
- [foregroundLayer](generated_client.ImageApiGetStudioImageRequest.md#foregroundlayer)
- [format](generated_client.ImageApiGetStudioImageRequest.md#format)
- [height](generated_client.ImageApiGetStudioImageRequest.md#height)
- [imageIndex](generated_client.ImageApiGetStudioImageRequest.md#imageindex)
- [imageType](generated_client.ImageApiGetStudioImageRequest.md#imagetype)
- [maxHeight](generated_client.ImageApiGetStudioImageRequest.md#maxheight)
- [maxWidth](generated_client.ImageApiGetStudioImageRequest.md#maxwidth)
- [name](generated_client.ImageApiGetStudioImageRequest.md#name)
- [percentPlayed](generated_client.ImageApiGetStudioImageRequest.md#percentplayed)
- [quality](generated_client.ImageApiGetStudioImageRequest.md#quality)
- [tag](generated_client.ImageApiGetStudioImageRequest.md#tag)
- [unplayedCount](generated_client.ImageApiGetStudioImageRequest.md#unplayedcount)
- [width](generated_client.ImageApiGetStudioImageRequest.md#width)

## Properties

### addPlayedIndicator

• `Optional` `Readonly` **addPlayedIndicator**: `boolean`

Optional. Add a played indicator.

**`memberof`** ImageApiGetStudioImage

#### Defined in

[generated-client/api/image-api.ts:7425](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/image-api.ts#L7425)

___

### backgroundColor

• `Optional` `Readonly` **backgroundColor**: `string`

Optional. Apply a background color for transparent images.

**`memberof`** ImageApiGetStudioImage

#### Defined in

[generated-client/api/image-api.ts:7439](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/image-api.ts#L7439)

___

### blur

• `Optional` `Readonly` **blur**: `number`

Optional. Blur image.

**`memberof`** ImageApiGetStudioImage

#### Defined in

[generated-client/api/image-api.ts:7432](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/image-api.ts#L7432)

___

### cropWhitespace

• `Optional` `Readonly` **cropWhitespace**: `boolean`

Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.

**`memberof`** ImageApiGetStudioImage

#### Defined in

[generated-client/api/image-api.ts:7418](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/image-api.ts#L7418)

___

### fillHeight

• `Optional` `Readonly` **fillHeight**: `number`

Height of box to fill.

**`memberof`** ImageApiGetStudioImage

#### Defined in

[generated-client/api/image-api.ts:7411](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/image-api.ts#L7411)

___

### fillWidth

• `Optional` `Readonly` **fillWidth**: `number`

Width of box to fill.

**`memberof`** ImageApiGetStudioImage

#### Defined in

[generated-client/api/image-api.ts:7404](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/image-api.ts#L7404)

___

### foregroundLayer

• `Optional` `Readonly` **foregroundLayer**: `string`

Optional. Apply a foreground layer on top of the image.

**`memberof`** ImageApiGetStudioImage

#### Defined in

[generated-client/api/image-api.ts:7446](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/image-api.ts#L7446)

___

### format

• `Optional` `Readonly` **format**: [`ImageFormat`](../enums/generated_client.ImageFormat.md)

Determines the output format of the image - original,gif,jpg,png.

**`memberof`** ImageApiGetStudioImage

#### Defined in

[generated-client/api/image-api.ts:7348](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/image-api.ts#L7348)

___

### height

• `Optional` `Readonly` **height**: `number`

The fixed image height to return.

**`memberof`** ImageApiGetStudioImage

#### Defined in

[generated-client/api/image-api.ts:7390](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/image-api.ts#L7390)

___

### imageIndex

• `Optional` `Readonly` **imageIndex**: `number`

Image index.

**`memberof`** ImageApiGetStudioImage

#### Defined in

[generated-client/api/image-api.ts:7453](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/image-api.ts#L7453)

___

### imageType

• `Readonly` **imageType**: [`ImageType`](../enums/generated_client.ImageType.md)

Image type.

**`memberof`** ImageApiGetStudioImage

#### Defined in

[generated-client/api/image-api.ts:7334](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/image-api.ts#L7334)

___

### maxHeight

• `Optional` `Readonly` **maxHeight**: `number`

The maximum image height to return.

**`memberof`** ImageApiGetStudioImage

#### Defined in

[generated-client/api/image-api.ts:7362](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/image-api.ts#L7362)

___

### maxWidth

• `Optional` `Readonly` **maxWidth**: `number`

The maximum image width to return.

**`memberof`** ImageApiGetStudioImage

#### Defined in

[generated-client/api/image-api.ts:7355](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/image-api.ts#L7355)

___

### name

• `Readonly` **name**: `string`

Studio name.

**`memberof`** ImageApiGetStudioImage

#### Defined in

[generated-client/api/image-api.ts:7327](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/image-api.ts#L7327)

___

### percentPlayed

• `Optional` `Readonly` **percentPlayed**: `number`

Optional. Percent to render for the percent played overlay.

**`memberof`** ImageApiGetStudioImage

#### Defined in

[generated-client/api/image-api.ts:7369](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/image-api.ts#L7369)

___

### quality

• `Optional` `Readonly` **quality**: `number`

Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases.

**`memberof`** ImageApiGetStudioImage

#### Defined in

[generated-client/api/image-api.ts:7397](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/image-api.ts#L7397)

___

### tag

• `Optional` `Readonly` **tag**: `string`

Optional. Supply the cache tag from the item object to receive strong caching headers.

**`memberof`** ImageApiGetStudioImage

#### Defined in

[generated-client/api/image-api.ts:7341](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/image-api.ts#L7341)

___

### unplayedCount

• `Optional` `Readonly` **unplayedCount**: `number`

Optional. Unplayed count overlay to render.

**`memberof`** ImageApiGetStudioImage

#### Defined in

[generated-client/api/image-api.ts:7376](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/image-api.ts#L7376)

___

### width

• `Optional` `Readonly` **width**: `number`

The fixed image width to return.

**`memberof`** ImageApiGetStudioImage

#### Defined in

[generated-client/api/image-api.ts:7383](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/image-api.ts#L7383)
