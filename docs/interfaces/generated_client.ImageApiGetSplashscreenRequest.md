[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / ImageApiGetSplashscreenRequest

# Interface: ImageApiGetSplashscreenRequest

[generated-client](../modules/generated_client.md).ImageApiGetSplashscreenRequest

Request parameters for getSplashscreen operation in ImageApi.

**`export`**

**`interface`** ImageApiGetSplashscreenRequest

## Table of contents

### Properties

- [backgroundColor](generated_client.ImageApiGetSplashscreenRequest.md#backgroundcolor)
- [blur](generated_client.ImageApiGetSplashscreenRequest.md#blur)
- [fillHeight](generated_client.ImageApiGetSplashscreenRequest.md#fillheight)
- [fillWidth](generated_client.ImageApiGetSplashscreenRequest.md#fillwidth)
- [foregroundLayer](generated_client.ImageApiGetSplashscreenRequest.md#foregroundlayer)
- [format](generated_client.ImageApiGetSplashscreenRequest.md#format)
- [height](generated_client.ImageApiGetSplashscreenRequest.md#height)
- [maxHeight](generated_client.ImageApiGetSplashscreenRequest.md#maxheight)
- [maxWidth](generated_client.ImageApiGetSplashscreenRequest.md#maxwidth)
- [quality](generated_client.ImageApiGetSplashscreenRequest.md#quality)
- [tag](generated_client.ImageApiGetSplashscreenRequest.md#tag)
- [width](generated_client.ImageApiGetSplashscreenRequest.md#width)

## Properties

### backgroundColor

• `Optional` `Readonly` **backgroundColor**: `string`

Apply a background color for transparent images.

**`memberof`** ImageApiGetSplashscreen

#### Defined in

[generated-client/api/image-api.ts:7633](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L7633)

___

### blur

• `Optional` `Readonly` **blur**: `number`

Blur image.

**`memberof`** ImageApiGetSplashscreen

#### Defined in

[generated-client/api/image-api.ts:7626](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L7626)

___

### fillHeight

• `Optional` `Readonly` **fillHeight**: `number`

Height of box to fill.

**`memberof`** ImageApiGetSplashscreen

#### Defined in

[generated-client/api/image-api.ts:7619](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L7619)

___

### fillWidth

• `Optional` `Readonly` **fillWidth**: `number`

Width of box to fill.

**`memberof`** ImageApiGetSplashscreen

#### Defined in

[generated-client/api/image-api.ts:7612](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L7612)

___

### foregroundLayer

• `Optional` `Readonly` **foregroundLayer**: `string`

Apply a foreground layer on top of the image.

**`memberof`** ImageApiGetSplashscreen

#### Defined in

[generated-client/api/image-api.ts:7640](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L7640)

___

### format

• `Optional` `Readonly` **format**: [`ImageFormat`](../enums/generated_client.ImageFormat.md)

Determines the output format of the image - original,gif,jpg,png.

**`memberof`** ImageApiGetSplashscreen

#### Defined in

[generated-client/api/image-api.ts:7577](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L7577)

___

### height

• `Optional` `Readonly` **height**: `number`

The fixed image height to return.

**`memberof`** ImageApiGetSplashscreen

#### Defined in

[generated-client/api/image-api.ts:7605](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L7605)

___

### maxHeight

• `Optional` `Readonly` **maxHeight**: `number`

The maximum image height to return.

**`memberof`** ImageApiGetSplashscreen

#### Defined in

[generated-client/api/image-api.ts:7591](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L7591)

___

### maxWidth

• `Optional` `Readonly` **maxWidth**: `number`

The maximum image width to return.

**`memberof`** ImageApiGetSplashscreen

#### Defined in

[generated-client/api/image-api.ts:7584](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L7584)

___

### quality

• `Optional` `Readonly` **quality**: `number`

Quality setting, from 0-100.

**`memberof`** ImageApiGetSplashscreen

#### Defined in

[generated-client/api/image-api.ts:7647](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L7647)

___

### tag

• `Optional` `Readonly` **tag**: `string`

Supply the cache tag from the item object to receive strong caching headers.

**`memberof`** ImageApiGetSplashscreen

#### Defined in

[generated-client/api/image-api.ts:7570](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L7570)

___

### width

• `Optional` `Readonly` **width**: `number`

The fixed image width to return.

**`memberof`** ImageApiGetSplashscreen

#### Defined in

[generated-client/api/image-api.ts:7598](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L7598)
