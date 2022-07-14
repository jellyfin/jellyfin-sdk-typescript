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

[generated-client/api/image-api.ts:8326](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L8326)

___

### backgroundColor

• `Optional` `Readonly` **backgroundColor**: `string`

Optional. Apply a background color for transparent images.

**`memberof`** ImageApiHeadArtistImage

#### Defined in

[generated-client/api/image-api.ts:8340](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L8340)

___

### blur

• `Optional` `Readonly` **blur**: `number`

Optional. Blur image.

**`memberof`** ImageApiHeadArtistImage

#### Defined in

[generated-client/api/image-api.ts:8333](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L8333)

___

### cropWhitespace

• `Optional` `Readonly` **cropWhitespace**: `boolean`

Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.

**`memberof`** ImageApiHeadArtistImage

#### Defined in

[generated-client/api/image-api.ts:8319](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L8319)

___

### fillHeight

• `Optional` `Readonly` **fillHeight**: `number`

Height of box to fill.

**`memberof`** ImageApiHeadArtistImage

#### Defined in

[generated-client/api/image-api.ts:8312](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L8312)

___

### fillWidth

• `Optional` `Readonly` **fillWidth**: `number`

Width of box to fill.

**`memberof`** ImageApiHeadArtistImage

#### Defined in

[generated-client/api/image-api.ts:8305](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L8305)

___

### foregroundLayer

• `Optional` `Readonly` **foregroundLayer**: `string`

Optional. Apply a foreground layer on top of the image.

**`memberof`** ImageApiHeadArtistImage

#### Defined in

[generated-client/api/image-api.ts:8347](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L8347)

___

### format

• `Optional` `Readonly` **format**: [`ImageFormat`](../enums/generated_client.ImageFormat.md)

Determines the output format of the image - original,gif,jpg,png.

**`memberof`** ImageApiHeadArtistImage

#### Defined in

[generated-client/api/image-api.ts:8249](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L8249)

___

### height

• `Optional` `Readonly` **height**: `number`

The fixed image height to return.

**`memberof`** ImageApiHeadArtistImage

#### Defined in

[generated-client/api/image-api.ts:8291](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L8291)

___

### imageIndex

• `Readonly` **imageIndex**: `number`

Image index.

**`memberof`** ImageApiHeadArtistImage

#### Defined in

[generated-client/api/image-api.ts:8235](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L8235)

___

### imageType

• `Readonly` **imageType**: [`ImageType`](../enums/generated_client.ImageType.md)

Image type.

**`memberof`** ImageApiHeadArtistImage

#### Defined in

[generated-client/api/image-api.ts:8228](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L8228)

___

### maxHeight

• `Optional` `Readonly` **maxHeight**: `number`

The maximum image height to return.

**`memberof`** ImageApiHeadArtistImage

#### Defined in

[generated-client/api/image-api.ts:8263](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L8263)

___

### maxWidth

• `Optional` `Readonly` **maxWidth**: `number`

The maximum image width to return.

**`memberof`** ImageApiHeadArtistImage

#### Defined in

[generated-client/api/image-api.ts:8256](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L8256)

___

### name

• `Readonly` **name**: `string`

Artist name.

**`memberof`** ImageApiHeadArtistImage

#### Defined in

[generated-client/api/image-api.ts:8221](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L8221)

___

### percentPlayed

• `Optional` `Readonly` **percentPlayed**: `number`

Optional. Percent to render for the percent played overlay.

**`memberof`** ImageApiHeadArtistImage

#### Defined in

[generated-client/api/image-api.ts:8270](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L8270)

___

### quality

• `Optional` `Readonly` **quality**: `number`

Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases.

**`memberof`** ImageApiHeadArtistImage

#### Defined in

[generated-client/api/image-api.ts:8298](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L8298)

___

### tag

• `Optional` `Readonly` **tag**: `string`

Optional. Supply the cache tag from the item object to receive strong caching headers.

**`memberof`** ImageApiHeadArtistImage

#### Defined in

[generated-client/api/image-api.ts:8242](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L8242)

___

### unplayedCount

• `Optional` `Readonly` **unplayedCount**: `number`

Optional. Unplayed count overlay to render.

**`memberof`** ImageApiHeadArtistImage

#### Defined in

[generated-client/api/image-api.ts:8277](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L8277)

___

### width

• `Optional` `Readonly` **width**: `number`

The fixed image width to return.

**`memberof`** ImageApiHeadArtistImage

#### Defined in

[generated-client/api/image-api.ts:8284](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L8284)
