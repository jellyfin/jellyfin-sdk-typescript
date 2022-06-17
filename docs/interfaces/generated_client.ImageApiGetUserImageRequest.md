[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / ImageApiGetUserImageRequest

# Interface: ImageApiGetUserImageRequest

[generated-client](../modules/generated_client.md).ImageApiGetUserImageRequest

Request parameters for getUserImage operation in ImageApi.

**`export`**

**`interface`** ImageApiGetUserImageRequest

## Table of contents

### Properties

- [addPlayedIndicator](generated_client.ImageApiGetUserImageRequest.md#addplayedindicator)
- [backgroundColor](generated_client.ImageApiGetUserImageRequest.md#backgroundcolor)
- [blur](generated_client.ImageApiGetUserImageRequest.md#blur)
- [cropWhitespace](generated_client.ImageApiGetUserImageRequest.md#cropwhitespace)
- [fillHeight](generated_client.ImageApiGetUserImageRequest.md#fillheight)
- [fillWidth](generated_client.ImageApiGetUserImageRequest.md#fillwidth)
- [foregroundLayer](generated_client.ImageApiGetUserImageRequest.md#foregroundlayer)
- [format](generated_client.ImageApiGetUserImageRequest.md#format)
- [height](generated_client.ImageApiGetUserImageRequest.md#height)
- [imageIndex](generated_client.ImageApiGetUserImageRequest.md#imageindex)
- [imageType](generated_client.ImageApiGetUserImageRequest.md#imagetype)
- [maxHeight](generated_client.ImageApiGetUserImageRequest.md#maxheight)
- [maxWidth](generated_client.ImageApiGetUserImageRequest.md#maxwidth)
- [percentPlayed](generated_client.ImageApiGetUserImageRequest.md#percentplayed)
- [quality](generated_client.ImageApiGetUserImageRequest.md#quality)
- [tag](generated_client.ImageApiGetUserImageRequest.md#tag)
- [unplayedCount](generated_client.ImageApiGetUserImageRequest.md#unplayedcount)
- [userId](generated_client.ImageApiGetUserImageRequest.md#userid)
- [width](generated_client.ImageApiGetUserImageRequest.md#width)

## Properties

### addPlayedIndicator

• `Optional` `Readonly` **addPlayedIndicator**: `boolean`

Optional. Add a played indicator.

**`memberof`** ImageApiGetUserImage

#### Defined in

[generated-client/api/image-api.ts:7987](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L7987)

___

### backgroundColor

• `Optional` `Readonly` **backgroundColor**: `string`

Optional. Apply a background color for transparent images.

**`memberof`** ImageApiGetUserImage

#### Defined in

[generated-client/api/image-api.ts:8001](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L8001)

___

### blur

• `Optional` `Readonly` **blur**: `number`

Optional. Blur image.

**`memberof`** ImageApiGetUserImage

#### Defined in

[generated-client/api/image-api.ts:7994](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L7994)

___

### cropWhitespace

• `Optional` `Readonly` **cropWhitespace**: `boolean`

Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.

**`memberof`** ImageApiGetUserImage

#### Defined in

[generated-client/api/image-api.ts:7980](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L7980)

___

### fillHeight

• `Optional` `Readonly` **fillHeight**: `number`

Height of box to fill.

**`memberof`** ImageApiGetUserImage

#### Defined in

[generated-client/api/image-api.ts:7973](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L7973)

___

### fillWidth

• `Optional` `Readonly` **fillWidth**: `number`

Width of box to fill.

**`memberof`** ImageApiGetUserImage

#### Defined in

[generated-client/api/image-api.ts:7966](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L7966)

___

### foregroundLayer

• `Optional` `Readonly` **foregroundLayer**: `string`

Optional. Apply a foreground layer on top of the image.

**`memberof`** ImageApiGetUserImage

#### Defined in

[generated-client/api/image-api.ts:8008](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L8008)

___

### format

• `Optional` `Readonly` **format**: [`ImageFormat`](../enums/generated_client.ImageFormat.md)

Determines the output format of the image - original,gif,jpg,png.

**`memberof`** ImageApiGetUserImage

#### Defined in

[generated-client/api/image-api.ts:7910](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L7910)

___

### height

• `Optional` `Readonly` **height**: `number`

The fixed image height to return.

**`memberof`** ImageApiGetUserImage

#### Defined in

[generated-client/api/image-api.ts:7952](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L7952)

___

### imageIndex

• `Optional` `Readonly` **imageIndex**: `number`

Image index.

**`memberof`** ImageApiGetUserImage

#### Defined in

[generated-client/api/image-api.ts:8015](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L8015)

___

### imageType

• `Readonly` **imageType**: [`ImageType`](../enums/generated_client.ImageType.md)

Image type.

**`memberof`** ImageApiGetUserImage

#### Defined in

[generated-client/api/image-api.ts:7896](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L7896)

___

### maxHeight

• `Optional` `Readonly` **maxHeight**: `number`

The maximum image height to return.

**`memberof`** ImageApiGetUserImage

#### Defined in

[generated-client/api/image-api.ts:7924](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L7924)

___

### maxWidth

• `Optional` `Readonly` **maxWidth**: `number`

The maximum image width to return.

**`memberof`** ImageApiGetUserImage

#### Defined in

[generated-client/api/image-api.ts:7917](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L7917)

___

### percentPlayed

• `Optional` `Readonly` **percentPlayed**: `number`

Optional. Percent to render for the percent played overlay.

**`memberof`** ImageApiGetUserImage

#### Defined in

[generated-client/api/image-api.ts:7931](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L7931)

___

### quality

• `Optional` `Readonly` **quality**: `number`

Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases.

**`memberof`** ImageApiGetUserImage

#### Defined in

[generated-client/api/image-api.ts:7959](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L7959)

___

### tag

• `Optional` `Readonly` **tag**: `string`

Optional. Supply the cache tag from the item object to receive strong caching headers.

**`memberof`** ImageApiGetUserImage

#### Defined in

[generated-client/api/image-api.ts:7903](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L7903)

___

### unplayedCount

• `Optional` `Readonly` **unplayedCount**: `number`

Optional. Unplayed count overlay to render.

**`memberof`** ImageApiGetUserImage

#### Defined in

[generated-client/api/image-api.ts:7938](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L7938)

___

### userId

• `Readonly` **userId**: `string`

User id.

**`memberof`** ImageApiGetUserImage

#### Defined in

[generated-client/api/image-api.ts:7889](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L7889)

___

### width

• `Optional` `Readonly` **width**: `number`

The fixed image width to return.

**`memberof`** ImageApiGetUserImage

#### Defined in

[generated-client/api/image-api.ts:7945](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L7945)
