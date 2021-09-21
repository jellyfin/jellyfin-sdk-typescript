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

[generated-client/api/image-api.ts:7705](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/image-api.ts#L7705)

___

### backgroundColor

• `Optional` `Readonly` **backgroundColor**: `string`

Optional. Apply a background color for transparent images.

**`memberof`** ImageApiGetUserImage

#### Defined in

[generated-client/api/image-api.ts:7719](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/image-api.ts#L7719)

___

### blur

• `Optional` `Readonly` **blur**: `number`

Optional. Blur image.

**`memberof`** ImageApiGetUserImage

#### Defined in

[generated-client/api/image-api.ts:7712](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/image-api.ts#L7712)

___

### cropWhitespace

• `Optional` `Readonly` **cropWhitespace**: `boolean`

Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.

**`memberof`** ImageApiGetUserImage

#### Defined in

[generated-client/api/image-api.ts:7698](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/image-api.ts#L7698)

___

### fillHeight

• `Optional` `Readonly` **fillHeight**: `number`

Height of box to fill.

**`memberof`** ImageApiGetUserImage

#### Defined in

[generated-client/api/image-api.ts:7691](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/image-api.ts#L7691)

___

### fillWidth

• `Optional` `Readonly` **fillWidth**: `number`

Width of box to fill.

**`memberof`** ImageApiGetUserImage

#### Defined in

[generated-client/api/image-api.ts:7684](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/image-api.ts#L7684)

___

### foregroundLayer

• `Optional` `Readonly` **foregroundLayer**: `string`

Optional. Apply a foreground layer on top of the image.

**`memberof`** ImageApiGetUserImage

#### Defined in

[generated-client/api/image-api.ts:7726](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/image-api.ts#L7726)

___

### format

• `Optional` `Readonly` **format**: [`ImageFormat`](../enums/generated_client.ImageFormat.md)

Determines the output format of the image - original,gif,jpg,png.

**`memberof`** ImageApiGetUserImage

#### Defined in

[generated-client/api/image-api.ts:7628](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/image-api.ts#L7628)

___

### height

• `Optional` `Readonly` **height**: `number`

The fixed image height to return.

**`memberof`** ImageApiGetUserImage

#### Defined in

[generated-client/api/image-api.ts:7670](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/image-api.ts#L7670)

___

### imageIndex

• `Optional` `Readonly` **imageIndex**: `number`

Image index.

**`memberof`** ImageApiGetUserImage

#### Defined in

[generated-client/api/image-api.ts:7733](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/image-api.ts#L7733)

___

### imageType

• `Readonly` **imageType**: [`ImageType`](../enums/generated_client.ImageType.md)

Image type.

**`memberof`** ImageApiGetUserImage

#### Defined in

[generated-client/api/image-api.ts:7614](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/image-api.ts#L7614)

___

### maxHeight

• `Optional` `Readonly` **maxHeight**: `number`

The maximum image height to return.

**`memberof`** ImageApiGetUserImage

#### Defined in

[generated-client/api/image-api.ts:7642](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/image-api.ts#L7642)

___

### maxWidth

• `Optional` `Readonly` **maxWidth**: `number`

The maximum image width to return.

**`memberof`** ImageApiGetUserImage

#### Defined in

[generated-client/api/image-api.ts:7635](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/image-api.ts#L7635)

___

### percentPlayed

• `Optional` `Readonly` **percentPlayed**: `number`

Optional. Percent to render for the percent played overlay.

**`memberof`** ImageApiGetUserImage

#### Defined in

[generated-client/api/image-api.ts:7649](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/image-api.ts#L7649)

___

### quality

• `Optional` `Readonly` **quality**: `number`

Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases.

**`memberof`** ImageApiGetUserImage

#### Defined in

[generated-client/api/image-api.ts:7677](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/image-api.ts#L7677)

___

### tag

• `Optional` `Readonly` **tag**: `string`

Optional. Supply the cache tag from the item object to receive strong caching headers.

**`memberof`** ImageApiGetUserImage

#### Defined in

[generated-client/api/image-api.ts:7621](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/image-api.ts#L7621)

___

### unplayedCount

• `Optional` `Readonly` **unplayedCount**: `number`

Optional. Unplayed count overlay to render.

**`memberof`** ImageApiGetUserImage

#### Defined in

[generated-client/api/image-api.ts:7656](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/image-api.ts#L7656)

___

### userId

• `Readonly` **userId**: `string`

User id.

**`memberof`** ImageApiGetUserImage

#### Defined in

[generated-client/api/image-api.ts:7607](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/image-api.ts#L7607)

___

### width

• `Optional` `Readonly` **width**: `number`

The fixed image width to return.

**`memberof`** ImageApiGetUserImage

#### Defined in

[generated-client/api/image-api.ts:7663](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/image-api.ts#L7663)
