[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / ImageApiGetPersonImageByIndexRequest

# Interface: ImageApiGetPersonImageByIndexRequest

[generated-client](../modules/generated_client.md).ImageApiGetPersonImageByIndexRequest

Request parameters for getPersonImageByIndex operation in ImageApi.

**`export`**

**`interface`** ImageApiGetPersonImageByIndexRequest

## Table of contents

### Properties

- [addPlayedIndicator](generated_client.ImageApiGetPersonImageByIndexRequest.md#addplayedindicator)
- [backgroundColor](generated_client.ImageApiGetPersonImageByIndexRequest.md#backgroundcolor)
- [blur](generated_client.ImageApiGetPersonImageByIndexRequest.md#blur)
- [cropWhitespace](generated_client.ImageApiGetPersonImageByIndexRequest.md#cropwhitespace)
- [fillHeight](generated_client.ImageApiGetPersonImageByIndexRequest.md#fillheight)
- [fillWidth](generated_client.ImageApiGetPersonImageByIndexRequest.md#fillwidth)
- [foregroundLayer](generated_client.ImageApiGetPersonImageByIndexRequest.md#foregroundlayer)
- [format](generated_client.ImageApiGetPersonImageByIndexRequest.md#format)
- [height](generated_client.ImageApiGetPersonImageByIndexRequest.md#height)
- [imageIndex](generated_client.ImageApiGetPersonImageByIndexRequest.md#imageindex)
- [imageType](generated_client.ImageApiGetPersonImageByIndexRequest.md#imagetype)
- [maxHeight](generated_client.ImageApiGetPersonImageByIndexRequest.md#maxheight)
- [maxWidth](generated_client.ImageApiGetPersonImageByIndexRequest.md#maxwidth)
- [name](generated_client.ImageApiGetPersonImageByIndexRequest.md#name)
- [percentPlayed](generated_client.ImageApiGetPersonImageByIndexRequest.md#percentplayed)
- [quality](generated_client.ImageApiGetPersonImageByIndexRequest.md#quality)
- [tag](generated_client.ImageApiGetPersonImageByIndexRequest.md#tag)
- [unplayedCount](generated_client.ImageApiGetPersonImageByIndexRequest.md#unplayedcount)
- [width](generated_client.ImageApiGetPersonImageByIndexRequest.md#width)

## Properties

### addPlayedIndicator

• `Optional` `Readonly` **addPlayedIndicator**: `boolean`

Optional. Add a played indicator.

**`memberof`** ImageApiGetPersonImageByIndex

#### Defined in

[generated-client/api/image-api.ts:7483](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L7483)

___

### backgroundColor

• `Optional` `Readonly` **backgroundColor**: `string`

Optional. Apply a background color for transparent images.

**`memberof`** ImageApiGetPersonImageByIndex

#### Defined in

[generated-client/api/image-api.ts:7497](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L7497)

___

### blur

• `Optional` `Readonly` **blur**: `number`

Optional. Blur image.

**`memberof`** ImageApiGetPersonImageByIndex

#### Defined in

[generated-client/api/image-api.ts:7490](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L7490)

___

### cropWhitespace

• `Optional` `Readonly` **cropWhitespace**: `boolean`

Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.

**`memberof`** ImageApiGetPersonImageByIndex

#### Defined in

[generated-client/api/image-api.ts:7476](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L7476)

___

### fillHeight

• `Optional` `Readonly` **fillHeight**: `number`

Height of box to fill.

**`memberof`** ImageApiGetPersonImageByIndex

#### Defined in

[generated-client/api/image-api.ts:7469](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L7469)

___

### fillWidth

• `Optional` `Readonly` **fillWidth**: `number`

Width of box to fill.

**`memberof`** ImageApiGetPersonImageByIndex

#### Defined in

[generated-client/api/image-api.ts:7462](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L7462)

___

### foregroundLayer

• `Optional` `Readonly` **foregroundLayer**: `string`

Optional. Apply a foreground layer on top of the image.

**`memberof`** ImageApiGetPersonImageByIndex

#### Defined in

[generated-client/api/image-api.ts:7504](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L7504)

___

### format

• `Optional` `Readonly` **format**: [`ImageFormat`](../enums/generated_client.ImageFormat.md)

Determines the output format of the image - original,gif,jpg,png.

**`memberof`** ImageApiGetPersonImageByIndex

#### Defined in

[generated-client/api/image-api.ts:7406](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L7406)

___

### height

• `Optional` `Readonly` **height**: `number`

The fixed image height to return.

**`memberof`** ImageApiGetPersonImageByIndex

#### Defined in

[generated-client/api/image-api.ts:7448](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L7448)

___

### imageIndex

• `Readonly` **imageIndex**: `number`

Image index.

**`memberof`** ImageApiGetPersonImageByIndex

#### Defined in

[generated-client/api/image-api.ts:7392](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L7392)

___

### imageType

• `Readonly` **imageType**: [`ImageType`](../enums/generated_client.ImageType.md)

Image type.

**`memberof`** ImageApiGetPersonImageByIndex

#### Defined in

[generated-client/api/image-api.ts:7385](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L7385)

___

### maxHeight

• `Optional` `Readonly` **maxHeight**: `number`

The maximum image height to return.

**`memberof`** ImageApiGetPersonImageByIndex

#### Defined in

[generated-client/api/image-api.ts:7420](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L7420)

___

### maxWidth

• `Optional` `Readonly` **maxWidth**: `number`

The maximum image width to return.

**`memberof`** ImageApiGetPersonImageByIndex

#### Defined in

[generated-client/api/image-api.ts:7413](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L7413)

___

### name

• `Readonly` **name**: `string`

Person name.

**`memberof`** ImageApiGetPersonImageByIndex

#### Defined in

[generated-client/api/image-api.ts:7378](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L7378)

___

### percentPlayed

• `Optional` `Readonly` **percentPlayed**: `number`

Optional. Percent to render for the percent played overlay.

**`memberof`** ImageApiGetPersonImageByIndex

#### Defined in

[generated-client/api/image-api.ts:7427](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L7427)

___

### quality

• `Optional` `Readonly` **quality**: `number`

Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases.

**`memberof`** ImageApiGetPersonImageByIndex

#### Defined in

[generated-client/api/image-api.ts:7455](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L7455)

___

### tag

• `Optional` `Readonly` **tag**: `string`

Optional. Supply the cache tag from the item object to receive strong caching headers.

**`memberof`** ImageApiGetPersonImageByIndex

#### Defined in

[generated-client/api/image-api.ts:7399](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L7399)

___

### unplayedCount

• `Optional` `Readonly` **unplayedCount**: `number`

Optional. Unplayed count overlay to render.

**`memberof`** ImageApiGetPersonImageByIndex

#### Defined in

[generated-client/api/image-api.ts:7434](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L7434)

___

### width

• `Optional` `Readonly` **width**: `number`

The fixed image width to return.

**`memberof`** ImageApiGetPersonImageByIndex

#### Defined in

[generated-client/api/image-api.ts:7441](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L7441)
