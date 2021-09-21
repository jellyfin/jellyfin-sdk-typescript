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

[generated-client/api/image-api.ts:6298](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/image-api.ts#L6298)

___

### backgroundColor

• `Optional` `Readonly` **backgroundColor**: `string`

Optional. Apply a background color for transparent images.

**`memberof`** ImageApiGetGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:6312](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/image-api.ts#L6312)

___

### blur

• `Optional` `Readonly` **blur**: `number`

Optional. Blur image.

**`memberof`** ImageApiGetGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:6305](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/image-api.ts#L6305)

___

### cropWhitespace

• `Optional` `Readonly` **cropWhitespace**: `boolean`

Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.

**`memberof`** ImageApiGetGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:6291](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/image-api.ts#L6291)

___

### fillHeight

• `Optional` `Readonly` **fillHeight**: `number`

Height of box to fill.

**`memberof`** ImageApiGetGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:6284](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/image-api.ts#L6284)

___

### fillWidth

• `Optional` `Readonly` **fillWidth**: `number`

Width of box to fill.

**`memberof`** ImageApiGetGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:6277](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/image-api.ts#L6277)

___

### foregroundLayer

• `Optional` `Readonly` **foregroundLayer**: `string`

Optional. Apply a foreground layer on top of the image.

**`memberof`** ImageApiGetGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:6319](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/image-api.ts#L6319)

___

### format

• `Optional` `Readonly` **format**: [`ImageFormat`](../enums/generated_client.ImageFormat.md)

Determines the output format of the image - original,gif,jpg,png.

**`memberof`** ImageApiGetGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:6221](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/image-api.ts#L6221)

___

### height

• `Optional` `Readonly` **height**: `number`

The fixed image height to return.

**`memberof`** ImageApiGetGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:6263](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/image-api.ts#L6263)

___

### imageIndex

• `Readonly` **imageIndex**: `number`

Image index.

**`memberof`** ImageApiGetGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:6207](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/image-api.ts#L6207)

___

### imageType

• `Readonly` **imageType**: [`ImageType`](../enums/generated_client.ImageType.md)

Image type.

**`memberof`** ImageApiGetGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:6200](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/image-api.ts#L6200)

___

### maxHeight

• `Optional` `Readonly` **maxHeight**: `number`

The maximum image height to return.

**`memberof`** ImageApiGetGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:6235](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/image-api.ts#L6235)

___

### maxWidth

• `Optional` `Readonly` **maxWidth**: `number`

The maximum image width to return.

**`memberof`** ImageApiGetGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:6228](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/image-api.ts#L6228)

___

### name

• `Readonly` **name**: `string`

Genre name.

**`memberof`** ImageApiGetGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:6193](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/image-api.ts#L6193)

___

### percentPlayed

• `Optional` `Readonly` **percentPlayed**: `number`

Optional. Percent to render for the percent played overlay.

**`memberof`** ImageApiGetGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:6242](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/image-api.ts#L6242)

___

### quality

• `Optional` `Readonly` **quality**: `number`

Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases.

**`memberof`** ImageApiGetGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:6270](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/image-api.ts#L6270)

___

### tag

• `Optional` `Readonly` **tag**: `string`

Optional. Supply the cache tag from the item object to receive strong caching headers.

**`memberof`** ImageApiGetGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:6214](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/image-api.ts#L6214)

___

### unplayedCount

• `Optional` `Readonly` **unplayedCount**: `number`

Optional. Unplayed count overlay to render.

**`memberof`** ImageApiGetGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:6249](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/image-api.ts#L6249)

___

### width

• `Optional` `Readonly` **width**: `number`

The fixed image width to return.

**`memberof`** ImageApiGetGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:6256](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/image-api.ts#L6256)
