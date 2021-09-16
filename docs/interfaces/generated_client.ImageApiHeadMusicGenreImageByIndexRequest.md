[jellyfin-sdk-typescript](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / ImageApiHeadMusicGenreImageByIndexRequest

# Interface: ImageApiHeadMusicGenreImageByIndexRequest

[generated-client](../modules/generated_client.md).ImageApiHeadMusicGenreImageByIndexRequest

Request parameters for headMusicGenreImageByIndex operation in ImageApi.

**`export`**

**`interface`** ImageApiHeadMusicGenreImageByIndexRequest

## Table of contents

### Properties

- [addPlayedIndicator](generated_client.ImageApiHeadMusicGenreImageByIndexRequest.md#addplayedindicator)
- [backgroundColor](generated_client.ImageApiHeadMusicGenreImageByIndexRequest.md#backgroundcolor)
- [blur](generated_client.ImageApiHeadMusicGenreImageByIndexRequest.md#blur)
- [cropWhitespace](generated_client.ImageApiHeadMusicGenreImageByIndexRequest.md#cropwhitespace)
- [fillHeight](generated_client.ImageApiHeadMusicGenreImageByIndexRequest.md#fillheight)
- [fillWidth](generated_client.ImageApiHeadMusicGenreImageByIndexRequest.md#fillwidth)
- [foregroundLayer](generated_client.ImageApiHeadMusicGenreImageByIndexRequest.md#foregroundlayer)
- [format](generated_client.ImageApiHeadMusicGenreImageByIndexRequest.md#format)
- [height](generated_client.ImageApiHeadMusicGenreImageByIndexRequest.md#height)
- [imageIndex](generated_client.ImageApiHeadMusicGenreImageByIndexRequest.md#imageindex)
- [imageType](generated_client.ImageApiHeadMusicGenreImageByIndexRequest.md#imagetype)
- [maxHeight](generated_client.ImageApiHeadMusicGenreImageByIndexRequest.md#maxheight)
- [maxWidth](generated_client.ImageApiHeadMusicGenreImageByIndexRequest.md#maxwidth)
- [name](generated_client.ImageApiHeadMusicGenreImageByIndexRequest.md#name)
- [percentPlayed](generated_client.ImageApiHeadMusicGenreImageByIndexRequest.md#percentplayed)
- [quality](generated_client.ImageApiHeadMusicGenreImageByIndexRequest.md#quality)
- [tag](generated_client.ImageApiHeadMusicGenreImageByIndexRequest.md#tag)
- [unplayedCount](generated_client.ImageApiHeadMusicGenreImageByIndexRequest.md#unplayedcount)
- [width](generated_client.ImageApiHeadMusicGenreImageByIndexRequest.md#width)

## Properties

### addPlayedIndicator

• `Optional` `Readonly` **addPlayedIndicator**: `boolean`

Optional. Add a played indicator.

**`memberof`** ImageApiHeadMusicGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:8972](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/image-api.ts#L8972)

___

### backgroundColor

• `Optional` `Readonly` **backgroundColor**: `string`

Optional. Apply a background color for transparent images.

**`memberof`** ImageApiHeadMusicGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:8986](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/image-api.ts#L8986)

___

### blur

• `Optional` `Readonly` **blur**: `number`

Optional. Blur image.

**`memberof`** ImageApiHeadMusicGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:8979](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/image-api.ts#L8979)

___

### cropWhitespace

• `Optional` `Readonly` **cropWhitespace**: `boolean`

Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.

**`memberof`** ImageApiHeadMusicGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:8965](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/image-api.ts#L8965)

___

### fillHeight

• `Optional` `Readonly` **fillHeight**: `number`

Height of box to fill.

**`memberof`** ImageApiHeadMusicGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:8958](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/image-api.ts#L8958)

___

### fillWidth

• `Optional` `Readonly` **fillWidth**: `number`

Width of box to fill.

**`memberof`** ImageApiHeadMusicGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:8951](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/image-api.ts#L8951)

___

### foregroundLayer

• `Optional` `Readonly` **foregroundLayer**: `string`

Optional. Apply a foreground layer on top of the image.

**`memberof`** ImageApiHeadMusicGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:8993](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/image-api.ts#L8993)

___

### format

• `Optional` `Readonly` **format**: [`ImageFormat`](../enums/generated_client.ImageFormat.md)

Determines the output format of the image - original,gif,jpg,png.

**`memberof`** ImageApiHeadMusicGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:8895](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/image-api.ts#L8895)

___

### height

• `Optional` `Readonly` **height**: `number`

The fixed image height to return.

**`memberof`** ImageApiHeadMusicGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:8937](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/image-api.ts#L8937)

___

### imageIndex

• `Readonly` **imageIndex**: `number`

Image index.

**`memberof`** ImageApiHeadMusicGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:8881](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/image-api.ts#L8881)

___

### imageType

• `Readonly` **imageType**: [`ImageType`](../enums/generated_client.ImageType.md)

Image type.

**`memberof`** ImageApiHeadMusicGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:8874](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/image-api.ts#L8874)

___

### maxHeight

• `Optional` `Readonly` **maxHeight**: `number`

The maximum image height to return.

**`memberof`** ImageApiHeadMusicGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:8909](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/image-api.ts#L8909)

___

### maxWidth

• `Optional` `Readonly` **maxWidth**: `number`

The maximum image width to return.

**`memberof`** ImageApiHeadMusicGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:8902](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/image-api.ts#L8902)

___

### name

• `Readonly` **name**: `string`

Music genre name.

**`memberof`** ImageApiHeadMusicGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:8867](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/image-api.ts#L8867)

___

### percentPlayed

• `Optional` `Readonly` **percentPlayed**: `number`

Optional. Percent to render for the percent played overlay.

**`memberof`** ImageApiHeadMusicGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:8916](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/image-api.ts#L8916)

___

### quality

• `Optional` `Readonly` **quality**: `number`

Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases.

**`memberof`** ImageApiHeadMusicGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:8944](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/image-api.ts#L8944)

___

### tag

• `Optional` `Readonly` **tag**: `string`

Optional. Supply the cache tag from the item object to receive strong caching headers.

**`memberof`** ImageApiHeadMusicGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:8888](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/image-api.ts#L8888)

___

### unplayedCount

• `Optional` `Readonly` **unplayedCount**: `number`

Optional. Unplayed count overlay to render.

**`memberof`** ImageApiHeadMusicGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:8923](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/image-api.ts#L8923)

___

### width

• `Optional` `Readonly` **width**: `number`

The fixed image width to return.

**`memberof`** ImageApiHeadMusicGenreImageByIndex

#### Defined in

[generated-client/api/image-api.ts:8930](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/image-api.ts#L8930)
