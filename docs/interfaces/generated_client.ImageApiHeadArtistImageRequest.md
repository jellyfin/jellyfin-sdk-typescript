[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / ImageApiHeadArtistImageRequest

# Interface: ImageApiHeadArtistImageRequest

[generated-client](../modules/generated_client.md).ImageApiHeadArtistImageRequest

Request parameters for headArtistImage operation in ImageApi.

**`export`**

**`interface`** ImageApiHeadArtistImageRequest

## Table of contents

### Properties

- [addPlayedIndicator](generated_client.ImageApiHeadArtistImageRequest.md#addplayedindicator)
- [backgroundColor](generated_client.ImageApiHeadArtistImageRequest.md#backgroundcolor)
- [blur](generated_client.ImageApiHeadArtistImageRequest.md#blur)
- [cropWhitespace](generated_client.ImageApiHeadArtistImageRequest.md#cropwhitespace)
- [fillHeight](generated_client.ImageApiHeadArtistImageRequest.md#fillheight)
- [fillWidth](generated_client.ImageApiHeadArtistImageRequest.md#fillwidth)
- [foregroundLayer](generated_client.ImageApiHeadArtistImageRequest.md#foregroundlayer)
- [format](generated_client.ImageApiHeadArtistImageRequest.md#format)
- [height](generated_client.ImageApiHeadArtistImageRequest.md#height)
- [imageIndex](generated_client.ImageApiHeadArtistImageRequest.md#imageindex)
- [imageType](generated_client.ImageApiHeadArtistImageRequest.md#imagetype)
- [maxHeight](generated_client.ImageApiHeadArtistImageRequest.md#maxheight)
- [maxWidth](generated_client.ImageApiHeadArtistImageRequest.md#maxwidth)
- [name](generated_client.ImageApiHeadArtistImageRequest.md#name)
- [percentPlayed](generated_client.ImageApiHeadArtistImageRequest.md#percentplayed)
- [quality](generated_client.ImageApiHeadArtistImageRequest.md#quality)
- [tag](generated_client.ImageApiHeadArtistImageRequest.md#tag)
- [unplayedCount](generated_client.ImageApiHeadArtistImageRequest.md#unplayedcount)
- [width](generated_client.ImageApiHeadArtistImageRequest.md#width)

## Properties

### addPlayedIndicator

• `Optional` `Readonly` **addPlayedIndicator**: `boolean`

Optional. Add a played indicator.

**`memberof`** ImageApiHeadArtistImage

#### Defined in

[generated-client/api/image-api.ts:7992](https://github.com/thornbill/jellyfin-sdk-typescript/blob/21a118e/src/generated-client/api/image-api.ts#L7992)

___

### backgroundColor

• `Optional` `Readonly` **backgroundColor**: `string`

Optional. Apply a background color for transparent images.

**`memberof`** ImageApiHeadArtistImage

#### Defined in

[generated-client/api/image-api.ts:8006](https://github.com/thornbill/jellyfin-sdk-typescript/blob/21a118e/src/generated-client/api/image-api.ts#L8006)

___

### blur

• `Optional` `Readonly` **blur**: `number`

Optional. Blur image.

**`memberof`** ImageApiHeadArtistImage

#### Defined in

[generated-client/api/image-api.ts:7999](https://github.com/thornbill/jellyfin-sdk-typescript/blob/21a118e/src/generated-client/api/image-api.ts#L7999)

___

### cropWhitespace

• `Optional` `Readonly` **cropWhitespace**: `boolean`

Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.

**`memberof`** ImageApiHeadArtistImage

#### Defined in

[generated-client/api/image-api.ts:7985](https://github.com/thornbill/jellyfin-sdk-typescript/blob/21a118e/src/generated-client/api/image-api.ts#L7985)

___

### fillHeight

• `Optional` `Readonly` **fillHeight**: `number`

Height of box to fill.

**`memberof`** ImageApiHeadArtistImage

#### Defined in

[generated-client/api/image-api.ts:7978](https://github.com/thornbill/jellyfin-sdk-typescript/blob/21a118e/src/generated-client/api/image-api.ts#L7978)

___

### fillWidth

• `Optional` `Readonly` **fillWidth**: `number`

Width of box to fill.

**`memberof`** ImageApiHeadArtistImage

#### Defined in

[generated-client/api/image-api.ts:7971](https://github.com/thornbill/jellyfin-sdk-typescript/blob/21a118e/src/generated-client/api/image-api.ts#L7971)

___

### foregroundLayer

• `Optional` `Readonly` **foregroundLayer**: `string`

Optional. Apply a foreground layer on top of the image.

**`memberof`** ImageApiHeadArtistImage

#### Defined in

[generated-client/api/image-api.ts:8013](https://github.com/thornbill/jellyfin-sdk-typescript/blob/21a118e/src/generated-client/api/image-api.ts#L8013)

___

### format

• `Optional` `Readonly` **format**: [`ImageFormat`](../enums/generated_client.ImageFormat.md)

Determines the output format of the image - original,gif,jpg,png.

**`memberof`** ImageApiHeadArtistImage

#### Defined in

[generated-client/api/image-api.ts:7915](https://github.com/thornbill/jellyfin-sdk-typescript/blob/21a118e/src/generated-client/api/image-api.ts#L7915)

___

### height

• `Optional` `Readonly` **height**: `number`

The fixed image height to return.

**`memberof`** ImageApiHeadArtistImage

#### Defined in

[generated-client/api/image-api.ts:7957](https://github.com/thornbill/jellyfin-sdk-typescript/blob/21a118e/src/generated-client/api/image-api.ts#L7957)

___

### imageIndex

• `Readonly` **imageIndex**: `number`

Image index.

**`memberof`** ImageApiHeadArtistImage

#### Defined in

[generated-client/api/image-api.ts:7901](https://github.com/thornbill/jellyfin-sdk-typescript/blob/21a118e/src/generated-client/api/image-api.ts#L7901)

___

### imageType

• `Readonly` **imageType**: [`ImageType`](../enums/generated_client.ImageType.md)

Image type.

**`memberof`** ImageApiHeadArtistImage

#### Defined in

[generated-client/api/image-api.ts:7894](https://github.com/thornbill/jellyfin-sdk-typescript/blob/21a118e/src/generated-client/api/image-api.ts#L7894)

___

### maxHeight

• `Optional` `Readonly` **maxHeight**: `number`

The maximum image height to return.

**`memberof`** ImageApiHeadArtistImage

#### Defined in

[generated-client/api/image-api.ts:7929](https://github.com/thornbill/jellyfin-sdk-typescript/blob/21a118e/src/generated-client/api/image-api.ts#L7929)

___

### maxWidth

• `Optional` `Readonly` **maxWidth**: `number`

The maximum image width to return.

**`memberof`** ImageApiHeadArtistImage

#### Defined in

[generated-client/api/image-api.ts:7922](https://github.com/thornbill/jellyfin-sdk-typescript/blob/21a118e/src/generated-client/api/image-api.ts#L7922)

___

### name

• `Readonly` **name**: `string`

Artist name.

**`memberof`** ImageApiHeadArtistImage

#### Defined in

[generated-client/api/image-api.ts:7887](https://github.com/thornbill/jellyfin-sdk-typescript/blob/21a118e/src/generated-client/api/image-api.ts#L7887)

___

### percentPlayed

• `Optional` `Readonly` **percentPlayed**: `number`

Optional. Percent to render for the percent played overlay.

**`memberof`** ImageApiHeadArtistImage

#### Defined in

[generated-client/api/image-api.ts:7936](https://github.com/thornbill/jellyfin-sdk-typescript/blob/21a118e/src/generated-client/api/image-api.ts#L7936)

___

### quality

• `Optional` `Readonly` **quality**: `number`

Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases.

**`memberof`** ImageApiHeadArtistImage

#### Defined in

[generated-client/api/image-api.ts:7964](https://github.com/thornbill/jellyfin-sdk-typescript/blob/21a118e/src/generated-client/api/image-api.ts#L7964)

___

### tag

• `Optional` `Readonly` **tag**: `string`

Optional. Supply the cache tag from the item object to receive strong caching headers.

**`memberof`** ImageApiHeadArtistImage

#### Defined in

[generated-client/api/image-api.ts:7908](https://github.com/thornbill/jellyfin-sdk-typescript/blob/21a118e/src/generated-client/api/image-api.ts#L7908)

___

### unplayedCount

• `Optional` `Readonly` **unplayedCount**: `number`

Optional. Unplayed count overlay to render.

**`memberof`** ImageApiHeadArtistImage

#### Defined in

[generated-client/api/image-api.ts:7943](https://github.com/thornbill/jellyfin-sdk-typescript/blob/21a118e/src/generated-client/api/image-api.ts#L7943)

___

### width

• `Optional` `Readonly` **width**: `number`

The fixed image width to return.

**`memberof`** ImageApiHeadArtistImage

#### Defined in

[generated-client/api/image-api.ts:7950](https://github.com/thornbill/jellyfin-sdk-typescript/blob/21a118e/src/generated-client/api/image-api.ts#L7950)
