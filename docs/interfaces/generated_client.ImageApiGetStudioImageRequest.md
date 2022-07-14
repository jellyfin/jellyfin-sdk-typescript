[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / ImageApiGetStudioImageRequest

# Interface: ImageApiGetStudioImageRequest

[generated-client](../modules/generated_client.md).ImageApiGetStudioImageRequest

Request parameters for getStudioImage operation in ImageApi.

**`export`**

**`interface`** ImageApiGetStudioImageRequest

## Table of contents

### Properties

- [addPlayedIndicator](generated_client.ImageApiGetStudioImageRequest.md#addplayedindicator)
- [backgroundColor](generated_client.ImageApiGetStudioImageRequest.md#backgroundcolor)
- [blur](generated_client.ImageApiGetStudioImageRequest.md#blur)
- [cropWhitespace](generated_client.ImageApiGetStudioImageRequest.md#cropwhitespace)
- [fillHeight](generated_client.ImageApiGetStudioImageRequest.md#fillheight)
- [fillWidth](generated_client.ImageApiGetStudioImageRequest.md#fillwidth)
- [foregroundLayer](generated_client.ImageApiGetStudioImageRequest.md#foregroundlayer)
- [format](generated_client.ImageApiGetStudioImageRequest.md#format)
- [height](generated_client.ImageApiGetStudioImageRequest.md#height)
- [imageIndex](generated_client.ImageApiGetStudioImageRequest.md#imageindex)
- [imageType](generated_client.ImageApiGetStudioImageRequest.md#imagetype)
- [maxHeight](generated_client.ImageApiGetStudioImageRequest.md#maxheight)
- [maxWidth](generated_client.ImageApiGetStudioImageRequest.md#maxwidth)
- [name](generated_client.ImageApiGetStudioImageRequest.md#name)
- [percentPlayed](generated_client.ImageApiGetStudioImageRequest.md#percentplayed)
- [quality](generated_client.ImageApiGetStudioImageRequest.md#quality)
- [tag](generated_client.ImageApiGetStudioImageRequest.md#tag)
- [unplayedCount](generated_client.ImageApiGetStudioImageRequest.md#unplayedcount)
- [width](generated_client.ImageApiGetStudioImageRequest.md#width)

## Properties

### addPlayedIndicator

• `Optional` `Readonly` **addPlayedIndicator**: `boolean`

Optional. Add a played indicator.

**`memberof`** ImageApiGetStudioImage

#### Defined in

[generated-client/api/image-api.ts:7759](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L7759)

___

### backgroundColor

• `Optional` `Readonly` **backgroundColor**: `string`

Optional. Apply a background color for transparent images.

**`memberof`** ImageApiGetStudioImage

#### Defined in

[generated-client/api/image-api.ts:7773](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L7773)

___

### blur

• `Optional` `Readonly` **blur**: `number`

Optional. Blur image.

**`memberof`** ImageApiGetStudioImage

#### Defined in

[generated-client/api/image-api.ts:7766](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L7766)

___

### cropWhitespace

• `Optional` `Readonly` **cropWhitespace**: `boolean`

Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.

**`memberof`** ImageApiGetStudioImage

#### Defined in

[generated-client/api/image-api.ts:7752](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L7752)

___

### fillHeight

• `Optional` `Readonly` **fillHeight**: `number`

Height of box to fill.

**`memberof`** ImageApiGetStudioImage

#### Defined in

[generated-client/api/image-api.ts:7745](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L7745)

___

### fillWidth

• `Optional` `Readonly` **fillWidth**: `number`

Width of box to fill.

**`memberof`** ImageApiGetStudioImage

#### Defined in

[generated-client/api/image-api.ts:7738](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L7738)

___

### foregroundLayer

• `Optional` `Readonly` **foregroundLayer**: `string`

Optional. Apply a foreground layer on top of the image.

**`memberof`** ImageApiGetStudioImage

#### Defined in

[generated-client/api/image-api.ts:7780](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L7780)

___

### format

• `Optional` `Readonly` **format**: [`ImageFormat`](../enums/generated_client.ImageFormat.md)

Determines the output format of the image - original,gif,jpg,png.

**`memberof`** ImageApiGetStudioImage

#### Defined in

[generated-client/api/image-api.ts:7682](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L7682)

___

### height

• `Optional` `Readonly` **height**: `number`

The fixed image height to return.

**`memberof`** ImageApiGetStudioImage

#### Defined in

[generated-client/api/image-api.ts:7724](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L7724)

___

### imageIndex

• `Optional` `Readonly` **imageIndex**: `number`

Image index.

**`memberof`** ImageApiGetStudioImage

#### Defined in

[generated-client/api/image-api.ts:7787](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L7787)

___

### imageType

• `Readonly` **imageType**: [`ImageType`](../enums/generated_client.ImageType.md)

Image type.

**`memberof`** ImageApiGetStudioImage

#### Defined in

[generated-client/api/image-api.ts:7668](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L7668)

___

### maxHeight

• `Optional` `Readonly` **maxHeight**: `number`

The maximum image height to return.

**`memberof`** ImageApiGetStudioImage

#### Defined in

[generated-client/api/image-api.ts:7696](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L7696)

___

### maxWidth

• `Optional` `Readonly` **maxWidth**: `number`

The maximum image width to return.

**`memberof`** ImageApiGetStudioImage

#### Defined in

[generated-client/api/image-api.ts:7689](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L7689)

___

### name

• `Readonly` **name**: `string`

Studio name.

**`memberof`** ImageApiGetStudioImage

#### Defined in

[generated-client/api/image-api.ts:7661](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L7661)

___

### percentPlayed

• `Optional` `Readonly` **percentPlayed**: `number`

Optional. Percent to render for the percent played overlay.

**`memberof`** ImageApiGetStudioImage

#### Defined in

[generated-client/api/image-api.ts:7703](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L7703)

___

### quality

• `Optional` `Readonly` **quality**: `number`

Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases.

**`memberof`** ImageApiGetStudioImage

#### Defined in

[generated-client/api/image-api.ts:7731](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L7731)

___

### tag

• `Optional` `Readonly` **tag**: `string`

Optional. Supply the cache tag from the item object to receive strong caching headers.

**`memberof`** ImageApiGetStudioImage

#### Defined in

[generated-client/api/image-api.ts:7675](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L7675)

___

### unplayedCount

• `Optional` `Readonly` **unplayedCount**: `number`

Optional. Unplayed count overlay to render.

**`memberof`** ImageApiGetStudioImage

#### Defined in

[generated-client/api/image-api.ts:7710](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L7710)

___

### width

• `Optional` `Readonly` **width**: `number`

The fixed image width to return.

**`memberof`** ImageApiGetStudioImage

#### Defined in

[generated-client/api/image-api.ts:7717](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L7717)
