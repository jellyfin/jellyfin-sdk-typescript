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

[generated-client/api/image-api.ts:8039](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L8039)

___

### backgroundColor

• `Optional` `Readonly` **backgroundColor**: `string`

Optional. Apply a background color for transparent images.

**`memberof`** ImageApiGetUserImage

#### Defined in

[generated-client/api/image-api.ts:8053](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L8053)

___

### blur

• `Optional` `Readonly` **blur**: `number`

Optional. Blur image.

**`memberof`** ImageApiGetUserImage

#### Defined in

[generated-client/api/image-api.ts:8046](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L8046)

___

### cropWhitespace

• `Optional` `Readonly` **cropWhitespace**: `boolean`

Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.

**`memberof`** ImageApiGetUserImage

#### Defined in

[generated-client/api/image-api.ts:8032](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L8032)

___

### fillHeight

• `Optional` `Readonly` **fillHeight**: `number`

Height of box to fill.

**`memberof`** ImageApiGetUserImage

#### Defined in

[generated-client/api/image-api.ts:8025](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L8025)

___

### fillWidth

• `Optional` `Readonly` **fillWidth**: `number`

Width of box to fill.

**`memberof`** ImageApiGetUserImage

#### Defined in

[generated-client/api/image-api.ts:8018](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L8018)

___

### foregroundLayer

• `Optional` `Readonly` **foregroundLayer**: `string`

Optional. Apply a foreground layer on top of the image.

**`memberof`** ImageApiGetUserImage

#### Defined in

[generated-client/api/image-api.ts:8060](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L8060)

___

### format

• `Optional` `Readonly` **format**: [`ImageFormat`](../enums/generated_client.ImageFormat.md)

Determines the output format of the image - original,gif,jpg,png.

**`memberof`** ImageApiGetUserImage

#### Defined in

[generated-client/api/image-api.ts:7962](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L7962)

___

### height

• `Optional` `Readonly` **height**: `number`

The fixed image height to return.

**`memberof`** ImageApiGetUserImage

#### Defined in

[generated-client/api/image-api.ts:8004](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L8004)

___

### imageIndex

• `Optional` `Readonly` **imageIndex**: `number`

Image index.

**`memberof`** ImageApiGetUserImage

#### Defined in

[generated-client/api/image-api.ts:8067](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L8067)

___

### imageType

• `Readonly` **imageType**: [`ImageType`](../enums/generated_client.ImageType.md)

Image type.

**`memberof`** ImageApiGetUserImage

#### Defined in

[generated-client/api/image-api.ts:7948](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L7948)

___

### maxHeight

• `Optional` `Readonly` **maxHeight**: `number`

The maximum image height to return.

**`memberof`** ImageApiGetUserImage

#### Defined in

[generated-client/api/image-api.ts:7976](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L7976)

___

### maxWidth

• `Optional` `Readonly` **maxWidth**: `number`

The maximum image width to return.

**`memberof`** ImageApiGetUserImage

#### Defined in

[generated-client/api/image-api.ts:7969](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L7969)

___

### percentPlayed

• `Optional` `Readonly` **percentPlayed**: `number`

Optional. Percent to render for the percent played overlay.

**`memberof`** ImageApiGetUserImage

#### Defined in

[generated-client/api/image-api.ts:7983](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L7983)

___

### quality

• `Optional` `Readonly` **quality**: `number`

Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases.

**`memberof`** ImageApiGetUserImage

#### Defined in

[generated-client/api/image-api.ts:8011](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L8011)

___

### tag

• `Optional` `Readonly` **tag**: `string`

Optional. Supply the cache tag from the item object to receive strong caching headers.

**`memberof`** ImageApiGetUserImage

#### Defined in

[generated-client/api/image-api.ts:7955](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L7955)

___

### unplayedCount

• `Optional` `Readonly` **unplayedCount**: `number`

Optional. Unplayed count overlay to render.

**`memberof`** ImageApiGetUserImage

#### Defined in

[generated-client/api/image-api.ts:7990](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L7990)

___

### userId

• `Readonly` **userId**: `string`

User id.

**`memberof`** ImageApiGetUserImage

#### Defined in

[generated-client/api/image-api.ts:7941](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L7941)

___

### width

• `Optional` `Readonly` **width**: `number`

The fixed image width to return.

**`memberof`** ImageApiGetUserImage

#### Defined in

[generated-client/api/image-api.ts:7997](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L7997)
