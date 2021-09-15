[jellyfin-sdk-typescript](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / ImageApiGetMusicGenreImageRequest

# Interface: ImageApiGetMusicGenreImageRequest

[generated-client](../modules/generated_client.md).ImageApiGetMusicGenreImageRequest

Request parameters for getMusicGenreImage operation in ImageApi.

**`export`**

**`interface`** ImageApiGetMusicGenreImageRequest

## Table of contents

### Properties

- [addPlayedIndicator](generated_client.ImageApiGetMusicGenreImageRequest.md#addplayedindicator)
- [backgroundColor](generated_client.ImageApiGetMusicGenreImageRequest.md#backgroundcolor)
- [blur](generated_client.ImageApiGetMusicGenreImageRequest.md#blur)
- [cropWhitespace](generated_client.ImageApiGetMusicGenreImageRequest.md#cropwhitespace)
- [fillHeight](generated_client.ImageApiGetMusicGenreImageRequest.md#fillheight)
- [fillWidth](generated_client.ImageApiGetMusicGenreImageRequest.md#fillwidth)
- [foregroundLayer](generated_client.ImageApiGetMusicGenreImageRequest.md#foregroundlayer)
- [format](generated_client.ImageApiGetMusicGenreImageRequest.md#format)
- [height](generated_client.ImageApiGetMusicGenreImageRequest.md#height)
- [imageIndex](generated_client.ImageApiGetMusicGenreImageRequest.md#imageindex)
- [imageType](generated_client.ImageApiGetMusicGenreImageRequest.md#imagetype)
- [maxHeight](generated_client.ImageApiGetMusicGenreImageRequest.md#maxheight)
- [maxWidth](generated_client.ImageApiGetMusicGenreImageRequest.md#maxwidth)
- [name](generated_client.ImageApiGetMusicGenreImageRequest.md#name)
- [percentPlayed](generated_client.ImageApiGetMusicGenreImageRequest.md#percentplayed)
- [quality](generated_client.ImageApiGetMusicGenreImageRequest.md#quality)
- [tag](generated_client.ImageApiGetMusicGenreImageRequest.md#tag)
- [unplayedCount](generated_client.ImageApiGetMusicGenreImageRequest.md#unplayedcount)
- [width](generated_client.ImageApiGetMusicGenreImageRequest.md#width)

## Properties

### addPlayedIndicator

• `Optional` `Readonly` **addPlayedIndicator**: `boolean`

Optional. Add a played indicator.

**`memberof`** ImageApiGetMusicGenreImage

#### Defined in

[generated-client/api/image-api.ts:6865](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/image-api.ts#L6865)

___

### backgroundColor

• `Optional` `Readonly` **backgroundColor**: `string`

Optional. Apply a background color for transparent images.

**`memberof`** ImageApiGetMusicGenreImage

#### Defined in

[generated-client/api/image-api.ts:6879](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/image-api.ts#L6879)

___

### blur

• `Optional` `Readonly` **blur**: `number`

Optional. Blur image.

**`memberof`** ImageApiGetMusicGenreImage

#### Defined in

[generated-client/api/image-api.ts:6872](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/image-api.ts#L6872)

___

### cropWhitespace

• `Optional` `Readonly` **cropWhitespace**: `boolean`

Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.

**`memberof`** ImageApiGetMusicGenreImage

#### Defined in

[generated-client/api/image-api.ts:6858](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/image-api.ts#L6858)

___

### fillHeight

• `Optional` `Readonly` **fillHeight**: `number`

Height of box to fill.

**`memberof`** ImageApiGetMusicGenreImage

#### Defined in

[generated-client/api/image-api.ts:6851](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/image-api.ts#L6851)

___

### fillWidth

• `Optional` `Readonly` **fillWidth**: `number`

Width of box to fill.

**`memberof`** ImageApiGetMusicGenreImage

#### Defined in

[generated-client/api/image-api.ts:6844](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/image-api.ts#L6844)

___

### foregroundLayer

• `Optional` `Readonly` **foregroundLayer**: `string`

Optional. Apply a foreground layer on top of the image.

**`memberof`** ImageApiGetMusicGenreImage

#### Defined in

[generated-client/api/image-api.ts:6886](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/image-api.ts#L6886)

___

### format

• `Optional` `Readonly` **format**: [`ImageFormat`](../enums/generated_client.ImageFormat.md)

Determines the output format of the image - original,gif,jpg,png.

**`memberof`** ImageApiGetMusicGenreImage

#### Defined in

[generated-client/api/image-api.ts:6788](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/image-api.ts#L6788)

___

### height

• `Optional` `Readonly` **height**: `number`

The fixed image height to return.

**`memberof`** ImageApiGetMusicGenreImage

#### Defined in

[generated-client/api/image-api.ts:6830](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/image-api.ts#L6830)

___

### imageIndex

• `Optional` `Readonly` **imageIndex**: `number`

Image index.

**`memberof`** ImageApiGetMusicGenreImage

#### Defined in

[generated-client/api/image-api.ts:6893](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/image-api.ts#L6893)

___

### imageType

• `Readonly` **imageType**: [`ImageType`](../enums/generated_client.ImageType.md)

Image type.

**`memberof`** ImageApiGetMusicGenreImage

#### Defined in

[generated-client/api/image-api.ts:6774](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/image-api.ts#L6774)

___

### maxHeight

• `Optional` `Readonly` **maxHeight**: `number`

The maximum image height to return.

**`memberof`** ImageApiGetMusicGenreImage

#### Defined in

[generated-client/api/image-api.ts:6802](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/image-api.ts#L6802)

___

### maxWidth

• `Optional` `Readonly` **maxWidth**: `number`

The maximum image width to return.

**`memberof`** ImageApiGetMusicGenreImage

#### Defined in

[generated-client/api/image-api.ts:6795](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/image-api.ts#L6795)

___

### name

• `Readonly` **name**: `string`

Music genre name.

**`memberof`** ImageApiGetMusicGenreImage

#### Defined in

[generated-client/api/image-api.ts:6767](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/image-api.ts#L6767)

___

### percentPlayed

• `Optional` `Readonly` **percentPlayed**: `number`

Optional. Percent to render for the percent played overlay.

**`memberof`** ImageApiGetMusicGenreImage

#### Defined in

[generated-client/api/image-api.ts:6809](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/image-api.ts#L6809)

___

### quality

• `Optional` `Readonly` **quality**: `number`

Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases.

**`memberof`** ImageApiGetMusicGenreImage

#### Defined in

[generated-client/api/image-api.ts:6837](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/image-api.ts#L6837)

___

### tag

• `Optional` `Readonly` **tag**: `string`

Optional. Supply the cache tag from the item object to receive strong caching headers.

**`memberof`** ImageApiGetMusicGenreImage

#### Defined in

[generated-client/api/image-api.ts:6781](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/image-api.ts#L6781)

___

### unplayedCount

• `Optional` `Readonly` **unplayedCount**: `number`

Optional. Unplayed count overlay to render.

**`memberof`** ImageApiGetMusicGenreImage

#### Defined in

[generated-client/api/image-api.ts:6816](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/image-api.ts#L6816)

___

### width

• `Optional` `Readonly` **width**: `number`

The fixed image width to return.

**`memberof`** ImageApiGetMusicGenreImage

#### Defined in

[generated-client/api/image-api.ts:6823](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/image-api.ts#L6823)
