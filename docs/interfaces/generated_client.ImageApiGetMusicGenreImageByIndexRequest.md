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

[generated-client/api/image-api.ts:7203](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L7203)

___

### backgroundColor

• `Optional` `Readonly` **backgroundColor**: `string`

Optional. Apply a background color for transparent images.

**`memberof`** ImageApiGetMusicGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:7217](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L7217)

___

### blur

• `Optional` `Readonly` **blur**: `number`

Optional. Blur image.

**`memberof`** ImageApiGetMusicGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:7210](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L7210)

___

### cropWhitespace

• `Optional` `Readonly` **cropWhitespace**: `boolean`

Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.

**`memberof`** ImageApiGetMusicGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:7196](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L7196)

___

### fillHeight

• `Optional` `Readonly` **fillHeight**: `number`

Height of box to fill.

**`memberof`** ImageApiGetMusicGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:7189](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L7189)

___

### fillWidth

• `Optional` `Readonly` **fillWidth**: `number`

Width of box to fill.

**`memberof`** ImageApiGetMusicGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:7182](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L7182)

___

### foregroundLayer

• `Optional` `Readonly` **foregroundLayer**: `string`

Optional. Apply a foreground layer on top of the image.

**`memberof`** ImageApiGetMusicGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:7224](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L7224)

___

### format

• `Optional` `Readonly` **format**: [`ImageFormat`](../enums/generated_client.ImageFormat.md)

Determines the output format of the image - original,gif,jpg,png.

**`memberof`** ImageApiGetMusicGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:7126](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L7126)

___

### height

• `Optional` `Readonly` **height**: `number`

The fixed image height to return.

**`memberof`** ImageApiGetMusicGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:7168](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L7168)

___

### imageIndex

• `Readonly` **imageIndex**: `number`

Image index.

**`memberof`** ImageApiGetMusicGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:7112](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L7112)

___

### imageType

• `Readonly` **imageType**: [`ImageType`](../enums/generated_client.ImageType.md)

Image type.

**`memberof`** ImageApiGetMusicGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:7105](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L7105)

___

### maxHeight

• `Optional` `Readonly` **maxHeight**: `number`

The maximum image height to return.

**`memberof`** ImageApiGetMusicGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:7140](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L7140)

___

### maxWidth

• `Optional` `Readonly` **maxWidth**: `number`

The maximum image width to return.

**`memberof`** ImageApiGetMusicGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:7133](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L7133)

___

### name

• `Readonly` **name**: `string`

Music genre name.

**`memberof`** ImageApiGetMusicGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:7098](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L7098)

___

### percentPlayed

• `Optional` `Readonly` **percentPlayed**: `number`

Optional. Percent to render for the percent played overlay.

**`memberof`** ImageApiGetMusicGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:7147](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L7147)

___

### quality

• `Optional` `Readonly` **quality**: `number`

Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases.

**`memberof`** ImageApiGetMusicGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:7175](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L7175)

___

### tag

• `Optional` `Readonly` **tag**: `string`

Optional. Supply the cache tag from the item object to receive strong caching headers.

**`memberof`** ImageApiGetMusicGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:7119](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L7119)

___

### unplayedCount

• `Optional` `Readonly` **unplayedCount**: `number`

Optional. Unplayed count overlay to render.

**`memberof`** ImageApiGetMusicGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:7154](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L7154)

___

### width

• `Optional` `Readonly` **width**: `number`

The fixed image width to return.

**`memberof`** ImageApiGetMusicGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:7161](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L7161)
