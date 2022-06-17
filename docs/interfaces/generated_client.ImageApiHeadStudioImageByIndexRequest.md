[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / ImageApiHeadStudioImageByIndexRequest

# Interface: ImageApiHeadStudioImageByIndexRequest

[generated-client](../modules/generated_client.md).ImageApiHeadStudioImageByIndexRequest

Request parameters for headStudioImageByIndex operation in ImageApi.

**`export`**

**`interface`** ImageApiHeadStudioImageByIndexRequest

## Table of contents

### Properties

- [addPlayedIndicator](generated_client.ImageApiHeadStudioImageByIndexRequest.md#addplayedindicator)
- [backgroundColor](generated_client.ImageApiHeadStudioImageByIndexRequest.md#backgroundcolor)
- [blur](generated_client.ImageApiHeadStudioImageByIndexRequest.md#blur)
- [cropWhitespace](generated_client.ImageApiHeadStudioImageByIndexRequest.md#cropwhitespace)
- [fillHeight](generated_client.ImageApiHeadStudioImageByIndexRequest.md#fillheight)
- [fillWidth](generated_client.ImageApiHeadStudioImageByIndexRequest.md#fillwidth)
- [foregroundLayer](generated_client.ImageApiHeadStudioImageByIndexRequest.md#foregroundlayer)
- [format](generated_client.ImageApiHeadStudioImageByIndexRequest.md#format)
- [height](generated_client.ImageApiHeadStudioImageByIndexRequest.md#height)
- [imageIndex](generated_client.ImageApiHeadStudioImageByIndexRequest.md#imageindex)
- [imageType](generated_client.ImageApiHeadStudioImageByIndexRequest.md#imagetype)
- [maxHeight](generated_client.ImageApiHeadStudioImageByIndexRequest.md#maxheight)
- [maxWidth](generated_client.ImageApiHeadStudioImageByIndexRequest.md#maxwidth)
- [name](generated_client.ImageApiHeadStudioImageByIndexRequest.md#name)
- [percentPlayed](generated_client.ImageApiHeadStudioImageByIndexRequest.md#percentplayed)
- [quality](generated_client.ImageApiHeadStudioImageByIndexRequest.md#quality)
- [tag](generated_client.ImageApiHeadStudioImageByIndexRequest.md#tag)
- [unplayedCount](generated_client.ImageApiHeadStudioImageByIndexRequest.md#unplayedcount)
- [width](generated_client.ImageApiHeadStudioImageByIndexRequest.md#width)

## Properties

### addPlayedIndicator

• `Optional` `Readonly` **addPlayedIndicator**: `boolean`

Optional. Add a played indicator.

**`memberof`** ImageApiHeadStudioImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9814](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9814)

___

### backgroundColor

• `Optional` `Readonly` **backgroundColor**: `string`

Optional. Apply a background color for transparent images.

**`memberof`** ImageApiHeadStudioImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9828](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9828)

___

### blur

• `Optional` `Readonly` **blur**: `number`

Optional. Blur image.

**`memberof`** ImageApiHeadStudioImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9821](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9821)

___

### cropWhitespace

• `Optional` `Readonly` **cropWhitespace**: `boolean`

Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.

**`memberof`** ImageApiHeadStudioImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9807](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9807)

___

### fillHeight

• `Optional` `Readonly` **fillHeight**: `number`

Height of box to fill.

**`memberof`** ImageApiHeadStudioImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9800](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9800)

___

### fillWidth

• `Optional` `Readonly` **fillWidth**: `number`

Width of box to fill.

**`memberof`** ImageApiHeadStudioImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9793](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9793)

___

### foregroundLayer

• `Optional` `Readonly` **foregroundLayer**: `string`

Optional. Apply a foreground layer on top of the image.

**`memberof`** ImageApiHeadStudioImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9835](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9835)

___

### format

• `Optional` `Readonly` **format**: [`ImageFormat`](../enums/generated_client.ImageFormat.md)

Determines the output format of the image - original,gif,jpg,png.

**`memberof`** ImageApiHeadStudioImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9737](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9737)

___

### height

• `Optional` `Readonly` **height**: `number`

The fixed image height to return.

**`memberof`** ImageApiHeadStudioImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9779](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9779)

___

### imageIndex

• `Readonly` **imageIndex**: `number`

Image index.

**`memberof`** ImageApiHeadStudioImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9723](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9723)

___

### imageType

• `Readonly` **imageType**: [`ImageType`](../enums/generated_client.ImageType.md)

Image type.

**`memberof`** ImageApiHeadStudioImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9716](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9716)

___

### maxHeight

• `Optional` `Readonly` **maxHeight**: `number`

The maximum image height to return.

**`memberof`** ImageApiHeadStudioImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9751](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9751)

___

### maxWidth

• `Optional` `Readonly` **maxWidth**: `number`

The maximum image width to return.

**`memberof`** ImageApiHeadStudioImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9744](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9744)

___

### name

• `Readonly` **name**: `string`

Studio name.

**`memberof`** ImageApiHeadStudioImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9709](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9709)

___

### percentPlayed

• `Optional` `Readonly` **percentPlayed**: `number`

Optional. Percent to render for the percent played overlay.

**`memberof`** ImageApiHeadStudioImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9758](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9758)

___

### quality

• `Optional` `Readonly` **quality**: `number`

Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases.

**`memberof`** ImageApiHeadStudioImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9786](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9786)

___

### tag

• `Optional` `Readonly` **tag**: `string`

Optional. Supply the cache tag from the item object to receive strong caching headers.

**`memberof`** ImageApiHeadStudioImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9730](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9730)

___

### unplayedCount

• `Optional` `Readonly` **unplayedCount**: `number`

Optional. Unplayed count overlay to render.

**`memberof`** ImageApiHeadStudioImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9765](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9765)

___

### width

• `Optional` `Readonly` **width**: `number`

The fixed image width to return.

**`memberof`** ImageApiHeadStudioImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9772](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L9772)
