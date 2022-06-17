[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / ImageApiGetGenreImageByIndexRequest

# Interface: ImageApiGetGenreImageByIndexRequest

[generated-client](../modules/generated_client.md).ImageApiGetGenreImageByIndexRequest

Request parameters for getGenreImageByIndex operation in ImageApi.

**`export`**

**`interface`** ImageApiGetGenreImageByIndexRequest

## Table of contents

### Properties

- [addPlayedIndicator](generated_client.ImageApiGetGenreImageByIndexRequest.md#addplayedindicator)
- [backgroundColor](generated_client.ImageApiGetGenreImageByIndexRequest.md#backgroundcolor)
- [blur](generated_client.ImageApiGetGenreImageByIndexRequest.md#blur)
- [cropWhitespace](generated_client.ImageApiGetGenreImageByIndexRequest.md#cropwhitespace)
- [fillHeight](generated_client.ImageApiGetGenreImageByIndexRequest.md#fillheight)
- [fillWidth](generated_client.ImageApiGetGenreImageByIndexRequest.md#fillwidth)
- [foregroundLayer](generated_client.ImageApiGetGenreImageByIndexRequest.md#foregroundlayer)
- [format](generated_client.ImageApiGetGenreImageByIndexRequest.md#format)
- [height](generated_client.ImageApiGetGenreImageByIndexRequest.md#height)
- [imageIndex](generated_client.ImageApiGetGenreImageByIndexRequest.md#imageindex)
- [imageType](generated_client.ImageApiGetGenreImageByIndexRequest.md#imagetype)
- [maxHeight](generated_client.ImageApiGetGenreImageByIndexRequest.md#maxheight)
- [maxWidth](generated_client.ImageApiGetGenreImageByIndexRequest.md#maxwidth)
- [name](generated_client.ImageApiGetGenreImageByIndexRequest.md#name)
- [percentPlayed](generated_client.ImageApiGetGenreImageByIndexRequest.md#percentplayed)
- [quality](generated_client.ImageApiGetGenreImageByIndexRequest.md#quality)
- [tag](generated_client.ImageApiGetGenreImageByIndexRequest.md#tag)
- [unplayedCount](generated_client.ImageApiGetGenreImageByIndexRequest.md#unplayedcount)
- [width](generated_client.ImageApiGetGenreImageByIndexRequest.md#width)

## Properties

### addPlayedIndicator

• `Optional` `Readonly` **addPlayedIndicator**: `boolean`

Optional. Add a played indicator.

**`memberof`** ImageApiGetGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:6489](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L6489)

___

### backgroundColor

• `Optional` `Readonly` **backgroundColor**: `string`

Optional. Apply a background color for transparent images.

**`memberof`** ImageApiGetGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:6503](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L6503)

___

### blur

• `Optional` `Readonly` **blur**: `number`

Optional. Blur image.

**`memberof`** ImageApiGetGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:6496](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L6496)

___

### cropWhitespace

• `Optional` `Readonly` **cropWhitespace**: `boolean`

Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.

**`memberof`** ImageApiGetGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:6482](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L6482)

___

### fillHeight

• `Optional` `Readonly` **fillHeight**: `number`

Height of box to fill.

**`memberof`** ImageApiGetGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:6475](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L6475)

___

### fillWidth

• `Optional` `Readonly` **fillWidth**: `number`

Width of box to fill.

**`memberof`** ImageApiGetGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:6468](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L6468)

___

### foregroundLayer

• `Optional` `Readonly` **foregroundLayer**: `string`

Optional. Apply a foreground layer on top of the image.

**`memberof`** ImageApiGetGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:6510](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L6510)

___

### format

• `Optional` `Readonly` **format**: [`ImageFormat`](../enums/generated_client.ImageFormat.md)

Determines the output format of the image - original,gif,jpg,png.

**`memberof`** ImageApiGetGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:6412](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L6412)

___

### height

• `Optional` `Readonly` **height**: `number`

The fixed image height to return.

**`memberof`** ImageApiGetGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:6454](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L6454)

___

### imageIndex

• `Readonly` **imageIndex**: `number`

Image index.

**`memberof`** ImageApiGetGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:6398](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L6398)

___

### imageType

• `Readonly` **imageType**: [`ImageType`](../enums/generated_client.ImageType.md)

Image type.

**`memberof`** ImageApiGetGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:6391](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L6391)

___

### maxHeight

• `Optional` `Readonly` **maxHeight**: `number`

The maximum image height to return.

**`memberof`** ImageApiGetGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:6426](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L6426)

___

### maxWidth

• `Optional` `Readonly` **maxWidth**: `number`

The maximum image width to return.

**`memberof`** ImageApiGetGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:6419](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L6419)

___

### name

• `Readonly` **name**: `string`

Genre name.

**`memberof`** ImageApiGetGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:6384](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L6384)

___

### percentPlayed

• `Optional` `Readonly` **percentPlayed**: `number`

Optional. Percent to render for the percent played overlay.

**`memberof`** ImageApiGetGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:6433](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L6433)

___

### quality

• `Optional` `Readonly` **quality**: `number`

Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases.

**`memberof`** ImageApiGetGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:6461](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L6461)

___

### tag

• `Optional` `Readonly` **tag**: `string`

Optional. Supply the cache tag from the item object to receive strong caching headers.

**`memberof`** ImageApiGetGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:6405](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L6405)

___

### unplayedCount

• `Optional` `Readonly` **unplayedCount**: `number`

Optional. Unplayed count overlay to render.

**`memberof`** ImageApiGetGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:6440](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L6440)

___

### width

• `Optional` `Readonly` **width**: `number`

The fixed image width to return.

**`memberof`** ImageApiGetGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:6447](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L6447)
