[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / ImageApiGetMusicGenreImageByIndexRequest

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

[generated-client/api/image-api.ts:7255](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L7255)

___

### backgroundColor

• `Optional` `Readonly` **backgroundColor**: `string`

Optional. Apply a background color for transparent images.

**`memberof`** ImageApiGetMusicGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:7269](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L7269)

___

### blur

• `Optional` `Readonly` **blur**: `number`

Optional. Blur image.

**`memberof`** ImageApiGetMusicGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:7262](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L7262)

___

### cropWhitespace

• `Optional` `Readonly` **cropWhitespace**: `boolean`

Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.

**`memberof`** ImageApiGetMusicGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:7248](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L7248)

___

### fillHeight

• `Optional` `Readonly` **fillHeight**: `number`

Height of box to fill.

**`memberof`** ImageApiGetMusicGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:7241](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L7241)

___

### fillWidth

• `Optional` `Readonly` **fillWidth**: `number`

Width of box to fill.

**`memberof`** ImageApiGetMusicGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:7234](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L7234)

___

### foregroundLayer

• `Optional` `Readonly` **foregroundLayer**: `string`

Optional. Apply a foreground layer on top of the image.

**`memberof`** ImageApiGetMusicGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:7276](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L7276)

___

### format

• `Optional` `Readonly` **format**: [`ImageFormat`](../enums/generated_client.ImageFormat.md)

Determines the output format of the image - original,gif,jpg,png.

**`memberof`** ImageApiGetMusicGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:7178](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L7178)

___

### height

• `Optional` `Readonly` **height**: `number`

The fixed image height to return.

**`memberof`** ImageApiGetMusicGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:7220](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L7220)

___

### imageIndex

• `Readonly` **imageIndex**: `number`

Image index.

**`memberof`** ImageApiGetMusicGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:7164](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L7164)

___

### imageType

• `Readonly` **imageType**: [`ImageType`](../enums/generated_client.ImageType.md)

Image type.

**`memberof`** ImageApiGetMusicGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:7157](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L7157)

___

### maxHeight

• `Optional` `Readonly` **maxHeight**: `number`

The maximum image height to return.

**`memberof`** ImageApiGetMusicGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:7192](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L7192)

___

### maxWidth

• `Optional` `Readonly` **maxWidth**: `number`

The maximum image width to return.

**`memberof`** ImageApiGetMusicGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:7185](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L7185)

___

### name

• `Readonly` **name**: `string`

Music genre name.

**`memberof`** ImageApiGetMusicGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:7150](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L7150)

___

### percentPlayed

• `Optional` `Readonly` **percentPlayed**: `number`

Optional. Percent to render for the percent played overlay.

**`memberof`** ImageApiGetMusicGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:7199](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L7199)

___

### quality

• `Optional` `Readonly` **quality**: `number`

Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases.

**`memberof`** ImageApiGetMusicGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:7227](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L7227)

___

### tag

• `Optional` `Readonly` **tag**: `string`

Optional. Supply the cache tag from the item object to receive strong caching headers.

**`memberof`** ImageApiGetMusicGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:7171](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L7171)

___

### unplayedCount

• `Optional` `Readonly` **unplayedCount**: `number`

Optional. Unplayed count overlay to render.

**`memberof`** ImageApiGetMusicGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:7206](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L7206)

___

### width

• `Optional` `Readonly` **width**: `number`

The fixed image width to return.

**`memberof`** ImageApiGetMusicGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:7213](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L7213)
