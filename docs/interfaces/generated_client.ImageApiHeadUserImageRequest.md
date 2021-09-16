[jellyfin-sdk-typescript](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / ImageApiHeadUserImageRequest

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

[generated-client/api/image-api.ts:9665](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b0f5501/src/generated-client/api/image-api.ts#L9665)

___

### backgroundColor

• `Optional` `Readonly` **backgroundColor**: `string`

Optional. Apply a background color for transparent images.

**`memberof`** ImageApiHeadUserImage

#### Defined in

[generated-client/api/image-api.ts:9679](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b0f5501/src/generated-client/api/image-api.ts#L9679)

___

### blur

• `Optional` `Readonly` **blur**: `number`

Optional. Blur image.

**`memberof`** ImageApiHeadUserImage

#### Defined in

[generated-client/api/image-api.ts:9672](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b0f5501/src/generated-client/api/image-api.ts#L9672)

___

### cropWhitespace

• `Optional` `Readonly` **cropWhitespace**: `boolean`

Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.

**`memberof`** ImageApiHeadUserImage

#### Defined in

[generated-client/api/image-api.ts:9658](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b0f5501/src/generated-client/api/image-api.ts#L9658)

___

### fillHeight

• `Optional` `Readonly` **fillHeight**: `number`

Height of box to fill.

**`memberof`** ImageApiHeadUserImage

#### Defined in

[generated-client/api/image-api.ts:9651](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b0f5501/src/generated-client/api/image-api.ts#L9651)

___

### fillWidth

• `Optional` `Readonly` **fillWidth**: `number`

Width of box to fill.

**`memberof`** ImageApiHeadUserImage

#### Defined in

[generated-client/api/image-api.ts:9644](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b0f5501/src/generated-client/api/image-api.ts#L9644)

___

### foregroundLayer

• `Optional` `Readonly` **foregroundLayer**: `string`

Optional. Apply a foreground layer on top of the image.

**`memberof`** ImageApiHeadUserImage

#### Defined in

[generated-client/api/image-api.ts:9686](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b0f5501/src/generated-client/api/image-api.ts#L9686)

___

### format

• `Optional` `Readonly` **format**: [`ImageFormat`](../enums/generated_client.ImageFormat.md)

Determines the output format of the image - original,gif,jpg,png.

**`memberof`** ImageApiHeadUserImage

#### Defined in

[generated-client/api/image-api.ts:9588](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b0f5501/src/generated-client/api/image-api.ts#L9588)

___

### height

• `Optional` `Readonly` **height**: `number`

The fixed image height to return.

**`memberof`** ImageApiHeadUserImage

#### Defined in

[generated-client/api/image-api.ts:9630](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b0f5501/src/generated-client/api/image-api.ts#L9630)

___

### imageIndex

• `Optional` `Readonly` **imageIndex**: `number`

Image index.

**`memberof`** ImageApiHeadUserImage

#### Defined in

[generated-client/api/image-api.ts:9693](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b0f5501/src/generated-client/api/image-api.ts#L9693)

___

### imageType

• `Readonly` **imageType**: [`ImageType`](../enums/generated_client.ImageType.md)

Image type.

**`memberof`** ImageApiHeadUserImage

#### Defined in

[generated-client/api/image-api.ts:9574](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b0f5501/src/generated-client/api/image-api.ts#L9574)

___

### maxHeight

• `Optional` `Readonly` **maxHeight**: `number`

The maximum image height to return.

**`memberof`** ImageApiHeadUserImage

#### Defined in

[generated-client/api/image-api.ts:9602](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b0f5501/src/generated-client/api/image-api.ts#L9602)

___

### maxWidth

• `Optional` `Readonly` **maxWidth**: `number`

The maximum image width to return.

**`memberof`** ImageApiHeadUserImage

#### Defined in

[generated-client/api/image-api.ts:9595](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b0f5501/src/generated-client/api/image-api.ts#L9595)

___

### percentPlayed

• `Optional` `Readonly` **percentPlayed**: `number`

Optional. Percent to render for the percent played overlay.

**`memberof`** ImageApiHeadUserImage

#### Defined in

[generated-client/api/image-api.ts:9609](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b0f5501/src/generated-client/api/image-api.ts#L9609)

___

### quality

• `Optional` `Readonly` **quality**: `number`

Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases.

**`memberof`** ImageApiHeadUserImage

#### Defined in

[generated-client/api/image-api.ts:9637](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b0f5501/src/generated-client/api/image-api.ts#L9637)

___

### tag

• `Optional` `Readonly` **tag**: `string`

Optional. Supply the cache tag from the item object to receive strong caching headers.

**`memberof`** ImageApiHeadUserImage

#### Defined in

[generated-client/api/image-api.ts:9581](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b0f5501/src/generated-client/api/image-api.ts#L9581)

___

### unplayedCount

• `Optional` `Readonly` **unplayedCount**: `number`

Optional. Unplayed count overlay to render.

**`memberof`** ImageApiHeadUserImage

#### Defined in

[generated-client/api/image-api.ts:9616](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b0f5501/src/generated-client/api/image-api.ts#L9616)

___

### userId

• `Readonly` **userId**: `string`

User id.

**`memberof`** ImageApiHeadUserImage

#### Defined in

[generated-client/api/image-api.ts:9567](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b0f5501/src/generated-client/api/image-api.ts#L9567)

___

### width

• `Optional` `Readonly` **width**: `number`

The fixed image width to return.

**`memberof`** ImageApiHeadUserImage

#### Defined in

[generated-client/api/image-api.ts:9623](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b0f5501/src/generated-client/api/image-api.ts#L9623)
