[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / ImageApiHeadUserImageRequest

# Interface: ImageApiHeadUserImageRequest

[generated-client](../modules/generated_client.md).ImageApiHeadUserImageRequest

Request parameters for headUserImage operation in ImageApi.

**`export`**

**`interface`** ImageApiHeadUserImageRequest

## Table of contents

### Properties

- [addPlayedIndicator](generated_client.ImageApiHeadUserImageRequest.md#addplayedindicator)
- [backgroundColor](generated_client.ImageApiHeadUserImageRequest.md#backgroundcolor)
- [blur](generated_client.ImageApiHeadUserImageRequest.md#blur)
- [cropWhitespace](generated_client.ImageApiHeadUserImageRequest.md#cropwhitespace)
- [fillHeight](generated_client.ImageApiHeadUserImageRequest.md#fillheight)
- [fillWidth](generated_client.ImageApiHeadUserImageRequest.md#fillwidth)
- [foregroundLayer](generated_client.ImageApiHeadUserImageRequest.md#foregroundlayer)
- [format](generated_client.ImageApiHeadUserImageRequest.md#format)
- [height](generated_client.ImageApiHeadUserImageRequest.md#height)
- [imageIndex](generated_client.ImageApiHeadUserImageRequest.md#imageindex)
- [imageType](generated_client.ImageApiHeadUserImageRequest.md#imagetype)
- [maxHeight](generated_client.ImageApiHeadUserImageRequest.md#maxheight)
- [maxWidth](generated_client.ImageApiHeadUserImageRequest.md#maxwidth)
- [percentPlayed](generated_client.ImageApiHeadUserImageRequest.md#percentplayed)
- [quality](generated_client.ImageApiHeadUserImageRequest.md#quality)
- [tag](generated_client.ImageApiHeadUserImageRequest.md#tag)
- [unplayedCount](generated_client.ImageApiHeadUserImageRequest.md#unplayedcount)
- [userId](generated_client.ImageApiHeadUserImageRequest.md#userid)
- [width](generated_client.ImageApiHeadUserImageRequest.md#width)

## Properties

### addPlayedIndicator

• `Optional` `Readonly` **addPlayedIndicator**: `boolean`

Optional. Add a played indicator.

**`memberof`** ImageApiHeadUserImage

#### Defined in

[generated-client/api/image-api.ts:9947](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9947)

___

### backgroundColor

• `Optional` `Readonly` **backgroundColor**: `string`

Optional. Apply a background color for transparent images.

**`memberof`** ImageApiHeadUserImage

#### Defined in

[generated-client/api/image-api.ts:9961](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9961)

___

### blur

• `Optional` `Readonly` **blur**: `number`

Optional. Blur image.

**`memberof`** ImageApiHeadUserImage

#### Defined in

[generated-client/api/image-api.ts:9954](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9954)

___

### cropWhitespace

• `Optional` `Readonly` **cropWhitespace**: `boolean`

Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.

**`memberof`** ImageApiHeadUserImage

#### Defined in

[generated-client/api/image-api.ts:9940](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9940)

___

### fillHeight

• `Optional` `Readonly` **fillHeight**: `number`

Height of box to fill.

**`memberof`** ImageApiHeadUserImage

#### Defined in

[generated-client/api/image-api.ts:9933](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9933)

___

### fillWidth

• `Optional` `Readonly` **fillWidth**: `number`

Width of box to fill.

**`memberof`** ImageApiHeadUserImage

#### Defined in

[generated-client/api/image-api.ts:9926](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9926)

___

### foregroundLayer

• `Optional` `Readonly` **foregroundLayer**: `string`

Optional. Apply a foreground layer on top of the image.

**`memberof`** ImageApiHeadUserImage

#### Defined in

[generated-client/api/image-api.ts:9968](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9968)

___

### format

• `Optional` `Readonly` **format**: [`ImageFormat`](../enums/generated_client.ImageFormat.md)

Determines the output format of the image - original,gif,jpg,png.

**`memberof`** ImageApiHeadUserImage

#### Defined in

[generated-client/api/image-api.ts:9870](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9870)

___

### height

• `Optional` `Readonly` **height**: `number`

The fixed image height to return.

**`memberof`** ImageApiHeadUserImage

#### Defined in

[generated-client/api/image-api.ts:9912](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9912)

___

### imageIndex

• `Optional` `Readonly` **imageIndex**: `number`

Image index.

**`memberof`** ImageApiHeadUserImage

#### Defined in

[generated-client/api/image-api.ts:9975](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9975)

___

### imageType

• `Readonly` **imageType**: [`ImageType`](../enums/generated_client.ImageType.md)

Image type.

**`memberof`** ImageApiHeadUserImage

#### Defined in

[generated-client/api/image-api.ts:9856](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9856)

___

### maxHeight

• `Optional` `Readonly` **maxHeight**: `number`

The maximum image height to return.

**`memberof`** ImageApiHeadUserImage

#### Defined in

[generated-client/api/image-api.ts:9884](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9884)

___

### maxWidth

• `Optional` `Readonly` **maxWidth**: `number`

The maximum image width to return.

**`memberof`** ImageApiHeadUserImage

#### Defined in

[generated-client/api/image-api.ts:9877](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9877)

___

### percentPlayed

• `Optional` `Readonly` **percentPlayed**: `number`

Optional. Percent to render for the percent played overlay.

**`memberof`** ImageApiHeadUserImage

#### Defined in

[generated-client/api/image-api.ts:9891](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9891)

___

### quality

• `Optional` `Readonly` **quality**: `number`

Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases.

**`memberof`** ImageApiHeadUserImage

#### Defined in

[generated-client/api/image-api.ts:9919](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9919)

___

### tag

• `Optional` `Readonly` **tag**: `string`

Optional. Supply the cache tag from the item object to receive strong caching headers.

**`memberof`** ImageApiHeadUserImage

#### Defined in

[generated-client/api/image-api.ts:9863](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9863)

___

### unplayedCount

• `Optional` `Readonly` **unplayedCount**: `number`

Optional. Unplayed count overlay to render.

**`memberof`** ImageApiHeadUserImage

#### Defined in

[generated-client/api/image-api.ts:9898](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9898)

___

### userId

• `Readonly` **userId**: `string`

User id.

**`memberof`** ImageApiHeadUserImage

#### Defined in

[generated-client/api/image-api.ts:9849](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9849)

___

### width

• `Optional` `Readonly` **width**: `number`

The fixed image width to return.

**`memberof`** ImageApiHeadUserImage

#### Defined in

[generated-client/api/image-api.ts:9905](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9905)
