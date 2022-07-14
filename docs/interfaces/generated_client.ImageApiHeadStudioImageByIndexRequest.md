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

[generated-client/api/image-api.ts:9866](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L9866)

___

### backgroundColor

• `Optional` `Readonly` **backgroundColor**: `string`

Optional. Apply a background color for transparent images.

**`memberof`** ImageApiHeadStudioImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9880](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L9880)

___

### blur

• `Optional` `Readonly` **blur**: `number`

Optional. Blur image.

**`memberof`** ImageApiHeadStudioImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9873](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L9873)

___

### cropWhitespace

• `Optional` `Readonly` **cropWhitespace**: `boolean`

Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.

**`memberof`** ImageApiHeadStudioImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9859](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L9859)

___

### fillHeight

• `Optional` `Readonly` **fillHeight**: `number`

Height of box to fill.

**`memberof`** ImageApiHeadStudioImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9852](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L9852)

___

### fillWidth

• `Optional` `Readonly` **fillWidth**: `number`

Width of box to fill.

**`memberof`** ImageApiHeadStudioImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9845](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L9845)

___

### foregroundLayer

• `Optional` `Readonly` **foregroundLayer**: `string`

Optional. Apply a foreground layer on top of the image.

**`memberof`** ImageApiHeadStudioImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9887](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L9887)

___

### format

• `Optional` `Readonly` **format**: [`ImageFormat`](../enums/generated_client.ImageFormat.md)

Determines the output format of the image - original,gif,jpg,png.

**`memberof`** ImageApiHeadStudioImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9789](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L9789)

___

### height

• `Optional` `Readonly` **height**: `number`

The fixed image height to return.

**`memberof`** ImageApiHeadStudioImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9831](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L9831)

___

### imageIndex

• `Readonly` **imageIndex**: `number`

Image index.

**`memberof`** ImageApiHeadStudioImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9775](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L9775)

___

### imageType

• `Readonly` **imageType**: [`ImageType`](../enums/generated_client.ImageType.md)

Image type.

**`memberof`** ImageApiHeadStudioImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9768](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L9768)

___

### maxHeight

• `Optional` `Readonly` **maxHeight**: `number`

The maximum image height to return.

**`memberof`** ImageApiHeadStudioImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9803](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L9803)

___

### maxWidth

• `Optional` `Readonly` **maxWidth**: `number`

The maximum image width to return.

**`memberof`** ImageApiHeadStudioImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9796](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L9796)

___

### name

• `Readonly` **name**: `string`

Studio name.

**`memberof`** ImageApiHeadStudioImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9761](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L9761)

___

### percentPlayed

• `Optional` `Readonly` **percentPlayed**: `number`

Optional. Percent to render for the percent played overlay.

**`memberof`** ImageApiHeadStudioImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9810](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L9810)

___

### quality

• `Optional` `Readonly` **quality**: `number`

Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases.

**`memberof`** ImageApiHeadStudioImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9838](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L9838)

___

### tag

• `Optional` `Readonly` **tag**: `string`

Optional. Supply the cache tag from the item object to receive strong caching headers.

**`memberof`** ImageApiHeadStudioImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9782](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L9782)

___

### unplayedCount

• `Optional` `Readonly` **unplayedCount**: `number`

Optional. Unplayed count overlay to render.

**`memberof`** ImageApiHeadStudioImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9817](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L9817)

___

### width

• `Optional` `Readonly` **width**: `number`

The fixed image width to return.

**`memberof`** ImageApiHeadStudioImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9824](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L9824)
