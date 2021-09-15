[jellyfin-sdk-typescript](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / ImageApiGetMusicGenreImageByIndexRequest

# Interface: ImageApiGetMusicGenreImageByIndexRequest

[generated-client](../modules/generated_client.md).ImageApiGetMusicGenreImageByIndexRequest

Request parameters for getMusicGenreImageByIndex operation in ImageApi.

**`export`**

**`interface`** ImageApiGetMusicGenreImageByIndexRequest

## Table of contents

### Properties

- [addPlayedIndicator](generated_client.ImageApiGetMusicGenreImageByIndexRequest.md#addplayedindicator)
- [backgroundColor](generated_client.ImageApiGetMusicGenreImageByIndexRequest.md#backgroundcolor)
- [blur](generated_client.ImageApiGetMusicGenreImageByIndexRequest.md#blur)
- [cropWhitespace](generated_client.ImageApiGetMusicGenreImageByIndexRequest.md#cropwhitespace)
- [fillHeight](generated_client.ImageApiGetMusicGenreImageByIndexRequest.md#fillheight)
- [fillWidth](generated_client.ImageApiGetMusicGenreImageByIndexRequest.md#fillwidth)
- [foregroundLayer](generated_client.ImageApiGetMusicGenreImageByIndexRequest.md#foregroundlayer)
- [format](generated_client.ImageApiGetMusicGenreImageByIndexRequest.md#format)
- [height](generated_client.ImageApiGetMusicGenreImageByIndexRequest.md#height)
- [imageIndex](generated_client.ImageApiGetMusicGenreImageByIndexRequest.md#imageindex)
- [imageType](generated_client.ImageApiGetMusicGenreImageByIndexRequest.md#imagetype)
- [maxHeight](generated_client.ImageApiGetMusicGenreImageByIndexRequest.md#maxheight)
- [maxWidth](generated_client.ImageApiGetMusicGenreImageByIndexRequest.md#maxwidth)
- [name](generated_client.ImageApiGetMusicGenreImageByIndexRequest.md#name)
- [percentPlayed](generated_client.ImageApiGetMusicGenreImageByIndexRequest.md#percentplayed)
- [quality](generated_client.ImageApiGetMusicGenreImageByIndexRequest.md#quality)
- [tag](generated_client.ImageApiGetMusicGenreImageByIndexRequest.md#tag)
- [unplayedCount](generated_client.ImageApiGetMusicGenreImageByIndexRequest.md#unplayedcount)
- [width](generated_client.ImageApiGetMusicGenreImageByIndexRequest.md#width)

## Properties

### addPlayedIndicator

• `Optional` `Readonly` **addPlayedIndicator**: `boolean`

Optional. Add a played indicator.

**`memberof`** ImageApiGetMusicGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:7012](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/image-api.ts#L7012)

___

### backgroundColor

• `Optional` `Readonly` **backgroundColor**: `string`

Optional. Apply a background color for transparent images.

**`memberof`** ImageApiGetMusicGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:7026](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/image-api.ts#L7026)

___

### blur

• `Optional` `Readonly` **blur**: `number`

Optional. Blur image.

**`memberof`** ImageApiGetMusicGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:7019](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/image-api.ts#L7019)

___

### cropWhitespace

• `Optional` `Readonly` **cropWhitespace**: `boolean`

Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.

**`memberof`** ImageApiGetMusicGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:7005](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/image-api.ts#L7005)

___

### fillHeight

• `Optional` `Readonly` **fillHeight**: `number`

Height of box to fill.

**`memberof`** ImageApiGetMusicGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:6998](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/image-api.ts#L6998)

___

### fillWidth

• `Optional` `Readonly` **fillWidth**: `number`

Width of box to fill.

**`memberof`** ImageApiGetMusicGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:6991](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/image-api.ts#L6991)

___

### foregroundLayer

• `Optional` `Readonly` **foregroundLayer**: `string`

Optional. Apply a foreground layer on top of the image.

**`memberof`** ImageApiGetMusicGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:7033](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/image-api.ts#L7033)

___

### format

• `Optional` `Readonly` **format**: [`ImageFormat`](../enums/generated_client.ImageFormat.md)

Determines the output format of the image - original,gif,jpg,png.

**`memberof`** ImageApiGetMusicGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:6935](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/image-api.ts#L6935)

___

### height

• `Optional` `Readonly` **height**: `number`

The fixed image height to return.

**`memberof`** ImageApiGetMusicGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:6977](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/image-api.ts#L6977)

___

### imageIndex

• `Readonly` **imageIndex**: `number`

Image index.

**`memberof`** ImageApiGetMusicGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:6921](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/image-api.ts#L6921)

___

### imageType

• `Readonly` **imageType**: [`ImageType`](../enums/generated_client.ImageType.md)

Image type.

**`memberof`** ImageApiGetMusicGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:6914](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/image-api.ts#L6914)

___

### maxHeight

• `Optional` `Readonly` **maxHeight**: `number`

The maximum image height to return.

**`memberof`** ImageApiGetMusicGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:6949](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/image-api.ts#L6949)

___

### maxWidth

• `Optional` `Readonly` **maxWidth**: `number`

The maximum image width to return.

**`memberof`** ImageApiGetMusicGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:6942](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/image-api.ts#L6942)

___

### name

• `Readonly` **name**: `string`

Music genre name.

**`memberof`** ImageApiGetMusicGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:6907](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/image-api.ts#L6907)

___

### percentPlayed

• `Optional` `Readonly` **percentPlayed**: `number`

Optional. Percent to render for the percent played overlay.

**`memberof`** ImageApiGetMusicGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:6956](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/image-api.ts#L6956)

___

### quality

• `Optional` `Readonly` **quality**: `number`

Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases.

**`memberof`** ImageApiGetMusicGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:6984](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/image-api.ts#L6984)

___

### tag

• `Optional` `Readonly` **tag**: `string`

Optional. Supply the cache tag from the item object to receive strong caching headers.

**`memberof`** ImageApiGetMusicGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:6928](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/image-api.ts#L6928)

___

### unplayedCount

• `Optional` `Readonly` **unplayedCount**: `number`

Optional. Unplayed count overlay to render.

**`memberof`** ImageApiGetMusicGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:6963](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/image-api.ts#L6963)

___

### width

• `Optional` `Readonly` **width**: `number`

The fixed image width to return.

**`memberof`** ImageApiGetMusicGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:6970](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/image-api.ts#L6970)
