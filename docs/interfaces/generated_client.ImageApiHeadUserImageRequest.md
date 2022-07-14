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

[generated-client/api/image-api.ts:9999](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L9999)

___

### backgroundColor

• `Optional` `Readonly` **backgroundColor**: `string`

Optional. Apply a background color for transparent images.

**`memberof`** ImageApiHeadUserImage

#### Defined in

[generated-client/api/image-api.ts:10013](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L10013)

___

### blur

• `Optional` `Readonly` **blur**: `number`

Optional. Blur image.

**`memberof`** ImageApiHeadUserImage

#### Defined in

[generated-client/api/image-api.ts:10006](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L10006)

___

### cropWhitespace

• `Optional` `Readonly` **cropWhitespace**: `boolean`

Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.

**`memberof`** ImageApiHeadUserImage

#### Defined in

[generated-client/api/image-api.ts:9992](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L9992)

___

### fillHeight

• `Optional` `Readonly` **fillHeight**: `number`

Height of box to fill.

**`memberof`** ImageApiHeadUserImage

#### Defined in

[generated-client/api/image-api.ts:9985](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L9985)

___

### fillWidth

• `Optional` `Readonly` **fillWidth**: `number`

Width of box to fill.

**`memberof`** ImageApiHeadUserImage

#### Defined in

[generated-client/api/image-api.ts:9978](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L9978)

___

### foregroundLayer

• `Optional` `Readonly` **foregroundLayer**: `string`

Optional. Apply a foreground layer on top of the image.

**`memberof`** ImageApiHeadUserImage

#### Defined in

[generated-client/api/image-api.ts:10020](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L10020)

___

### format

• `Optional` `Readonly` **format**: [`ImageFormat`](../enums/generated_client.ImageFormat.md)

Determines the output format of the image - original,gif,jpg,png.

**`memberof`** ImageApiHeadUserImage

#### Defined in

[generated-client/api/image-api.ts:9922](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L9922)

___

### height

• `Optional` `Readonly` **height**: `number`

The fixed image height to return.

**`memberof`** ImageApiHeadUserImage

#### Defined in

[generated-client/api/image-api.ts:9964](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L9964)

___

### imageIndex

• `Optional` `Readonly` **imageIndex**: `number`

Image index.

**`memberof`** ImageApiHeadUserImage

#### Defined in

[generated-client/api/image-api.ts:10027](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L10027)

___

### imageType

• `Readonly` **imageType**: [`ImageType`](../enums/generated_client.ImageType.md)

Image type.

**`memberof`** ImageApiHeadUserImage

#### Defined in

[generated-client/api/image-api.ts:9908](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L9908)

___

### maxHeight

• `Optional` `Readonly` **maxHeight**: `number`

The maximum image height to return.

**`memberof`** ImageApiHeadUserImage

#### Defined in

[generated-client/api/image-api.ts:9936](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L9936)

___

### maxWidth

• `Optional` `Readonly` **maxWidth**: `number`

The maximum image width to return.

**`memberof`** ImageApiHeadUserImage

#### Defined in

[generated-client/api/image-api.ts:9929](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L9929)

___

### percentPlayed

• `Optional` `Readonly` **percentPlayed**: `number`

Optional. Percent to render for the percent played overlay.

**`memberof`** ImageApiHeadUserImage

#### Defined in

[generated-client/api/image-api.ts:9943](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L9943)

___

### quality

• `Optional` `Readonly` **quality**: `number`

Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases.

**`memberof`** ImageApiHeadUserImage

#### Defined in

[generated-client/api/image-api.ts:9971](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L9971)

___

### tag

• `Optional` `Readonly` **tag**: `string`

Optional. Supply the cache tag from the item object to receive strong caching headers.

**`memberof`** ImageApiHeadUserImage

#### Defined in

[generated-client/api/image-api.ts:9915](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L9915)

___

### unplayedCount

• `Optional` `Readonly` **unplayedCount**: `number`

Optional. Unplayed count overlay to render.

**`memberof`** ImageApiHeadUserImage

#### Defined in

[generated-client/api/image-api.ts:9950](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L9950)

___

### userId

• `Readonly` **userId**: `string`

User id.

**`memberof`** ImageApiHeadUserImage

#### Defined in

[generated-client/api/image-api.ts:9901](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L9901)

___

### width

• `Optional` `Readonly` **width**: `number`

The fixed image width to return.

**`memberof`** ImageApiHeadUserImage

#### Defined in

[generated-client/api/image-api.ts:9957](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/image-api.ts#L9957)
