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

[generated-client/api/image-api.ts:7581](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L7581)

___

### blur

• `Optional` `Readonly` **blur**: `number`

Blur image.

**`memberof`** ImageApiGetSplashscreen

#### Defined in

[generated-client/api/image-api.ts:7574](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L7574)

___

### fillHeight

• `Optional` `Readonly` **fillHeight**: `number`

Height of box to fill.

**`memberof`** ImageApiGetSplashscreen

#### Defined in

[generated-client/api/image-api.ts:7567](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L7567)

___

### fillWidth

• `Optional` `Readonly` **fillWidth**: `number`

Width of box to fill.

**`memberof`** ImageApiGetSplashscreen

#### Defined in

[generated-client/api/image-api.ts:7560](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L7560)

___

### foregroundLayer

• `Optional` `Readonly` **foregroundLayer**: `string`

Apply a foreground layer on top of the image.

**`memberof`** ImageApiGetSplashscreen

#### Defined in

[generated-client/api/image-api.ts:7588](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L7588)

___

### format

• `Optional` `Readonly` **format**: [`ImageFormat`](../enums/generated_client.ImageFormat.md)

Determines the output format of the image - original,gif,jpg,png.

**`memberof`** ImageApiGetSplashscreen

#### Defined in

[generated-client/api/image-api.ts:7525](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L7525)

___

### height

• `Optional` `Readonly` **height**: `number`

The fixed image height to return.

**`memberof`** ImageApiGetSplashscreen

#### Defined in

[generated-client/api/image-api.ts:7553](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L7553)

___

### maxHeight

• `Optional` `Readonly` **maxHeight**: `number`

The maximum image height to return.

**`memberof`** ImageApiGetSplashscreen

#### Defined in

[generated-client/api/image-api.ts:7539](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L7539)

___

### maxWidth

• `Optional` `Readonly` **maxWidth**: `number`

The maximum image width to return.

**`memberof`** ImageApiGetSplashscreen

#### Defined in

[generated-client/api/image-api.ts:7532](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L7532)

___

### quality

• `Optional` `Readonly` **quality**: `number`

Quality setting, from 0-100.

**`memberof`** ImageApiGetSplashscreen

#### Defined in

[generated-client/api/image-api.ts:7595](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L7595)

___

### tag

• `Optional` `Readonly` **tag**: `string`

Supply the cache tag from the item object to receive strong caching headers.

**`memberof`** ImageApiGetSplashscreen

#### Defined in

[generated-client/api/image-api.ts:7518](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L7518)

___

### width

• `Optional` `Readonly` **width**: `number`

The fixed image width to return.

**`memberof`** ImageApiGetSplashscreen

#### Defined in

[generated-client/api/image-api.ts:7546](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L7546)
