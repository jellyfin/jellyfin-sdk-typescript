[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / ImageApiGetItemImageByIndexRequest

# Interface: ImageApiGetItemImageByIndexRequest

[generated-client](../modules/generated_client.md).ImageApiGetItemImageByIndexRequest

Request parameters for getItemImageByIndex operation in ImageApi.

**`export`**

**`interface`** ImageApiGetItemImageByIndexRequest

## Table of contents

### Properties

- [addPlayedIndicator](generated_client.ImageApiGetItemImageByIndexRequest.md#addplayedindicator)
- [backgroundColor](generated_client.ImageApiGetItemImageByIndexRequest.md#backgroundcolor)
- [blur](generated_client.ImageApiGetItemImageByIndexRequest.md#blur)
- [cropWhitespace](generated_client.ImageApiGetItemImageByIndexRequest.md#cropwhitespace)
- [fillHeight](generated_client.ImageApiGetItemImageByIndexRequest.md#fillheight)
- [fillWidth](generated_client.ImageApiGetItemImageByIndexRequest.md#fillwidth)
- [foregroundLayer](generated_client.ImageApiGetItemImageByIndexRequest.md#foregroundlayer)
- [format](generated_client.ImageApiGetItemImageByIndexRequest.md#format)
- [height](generated_client.ImageApiGetItemImageByIndexRequest.md#height)
- [imageIndex](generated_client.ImageApiGetItemImageByIndexRequest.md#imageindex)
- [imageType](generated_client.ImageApiGetItemImageByIndexRequest.md#imagetype)
- [itemId](generated_client.ImageApiGetItemImageByIndexRequest.md#itemid)
- [maxHeight](generated_client.ImageApiGetItemImageByIndexRequest.md#maxheight)
- [maxWidth](generated_client.ImageApiGetItemImageByIndexRequest.md#maxwidth)
- [percentPlayed](generated_client.ImageApiGetItemImageByIndexRequest.md#percentplayed)
- [quality](generated_client.ImageApiGetItemImageByIndexRequest.md#quality)
- [tag](generated_client.ImageApiGetItemImageByIndexRequest.md#tag)
- [unplayedCount](generated_client.ImageApiGetItemImageByIndexRequest.md#unplayedcount)
- [width](generated_client.ImageApiGetItemImageByIndexRequest.md#width)

## Properties

### addPlayedIndicator

• `Optional` `Readonly` **addPlayedIndicator**: `boolean`

Optional. Add a played indicator.

**`memberof`** ImageApiGetItemImageByIndex

#### Defined in

[generated-client/api/image-api.ts:6947](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L6947)

___

### backgroundColor

• `Optional` `Readonly` **backgroundColor**: `string`

Optional. Apply a background color for transparent images.

**`memberof`** ImageApiGetItemImageByIndex

#### Defined in

[generated-client/api/image-api.ts:6975](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L6975)

___

### blur

• `Optional` `Readonly` **blur**: `number`

Optional. Blur image.

**`memberof`** ImageApiGetItemImageByIndex

#### Defined in

[generated-client/api/image-api.ts:6968](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L6968)

___

### cropWhitespace

• `Optional` `Readonly` **cropWhitespace**: `boolean`

Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.

**`memberof`** ImageApiGetItemImageByIndex

#### Defined in

[generated-client/api/image-api.ts:6933](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L6933)

___

### fillHeight

• `Optional` `Readonly` **fillHeight**: `number`

Height of box to fill.

**`memberof`** ImageApiGetItemImageByIndex

#### Defined in

[generated-client/api/image-api.ts:6919](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L6919)

___

### fillWidth

• `Optional` `Readonly` **fillWidth**: `number`

Width of box to fill.

**`memberof`** ImageApiGetItemImageByIndex

#### Defined in

[generated-client/api/image-api.ts:6912](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L6912)

___

### foregroundLayer

• `Optional` `Readonly` **foregroundLayer**: `string`

Optional. Apply a foreground layer on top of the image.

**`memberof`** ImageApiGetItemImageByIndex

#### Defined in

[generated-client/api/image-api.ts:6982](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L6982)

___

### format

• `Optional` `Readonly` **format**: [`ImageFormat`](../enums/generated_client.ImageFormat.md)

Optional. The MediaBrowser.Model.Drawing.ImageFormat of the returned image.

**`memberof`** ImageApiGetItemImageByIndex

#### Defined in

[generated-client/api/image-api.ts:6940](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L6940)

___

### height

• `Optional` `Readonly` **height**: `number`

The fixed image height to return.

**`memberof`** ImageApiGetItemImageByIndex

#### Defined in

[generated-client/api/image-api.ts:6898](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L6898)

___

### imageIndex

• `Readonly` **imageIndex**: `number`

Image index.

**`memberof`** ImageApiGetItemImageByIndex

#### Defined in

[generated-client/api/image-api.ts:6870](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L6870)

___

### imageType

• `Readonly` **imageType**: [`ImageType`](../enums/generated_client.ImageType.md)

Image type.

**`memberof`** ImageApiGetItemImageByIndex

#### Defined in

[generated-client/api/image-api.ts:6863](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L6863)

___

### itemId

• `Readonly` **itemId**: `string`

Item id.

**`memberof`** ImageApiGetItemImageByIndex

#### Defined in

[generated-client/api/image-api.ts:6856](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L6856)

___

### maxHeight

• `Optional` `Readonly` **maxHeight**: `number`

The maximum image height to return.

**`memberof`** ImageApiGetItemImageByIndex

#### Defined in

[generated-client/api/image-api.ts:6884](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L6884)

___

### maxWidth

• `Optional` `Readonly` **maxWidth**: `number`

The maximum image width to return.

**`memberof`** ImageApiGetItemImageByIndex

#### Defined in

[generated-client/api/image-api.ts:6877](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L6877)

___

### percentPlayed

• `Optional` `Readonly` **percentPlayed**: `number`

Optional. Percent to render for the percent played overlay.

**`memberof`** ImageApiGetItemImageByIndex

#### Defined in

[generated-client/api/image-api.ts:6954](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L6954)

___

### quality

• `Optional` `Readonly` **quality**: `number`

Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases.

**`memberof`** ImageApiGetItemImageByIndex

#### Defined in

[generated-client/api/image-api.ts:6905](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L6905)

___

### tag

• `Optional` `Readonly` **tag**: `string`

Optional. Supply the cache tag from the item object to receive strong caching headers.

**`memberof`** ImageApiGetItemImageByIndex

#### Defined in

[generated-client/api/image-api.ts:6926](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L6926)

___

### unplayedCount

• `Optional` `Readonly` **unplayedCount**: `number`

Optional. Unplayed count overlay to render.

**`memberof`** ImageApiGetItemImageByIndex

#### Defined in

[generated-client/api/image-api.ts:6961](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L6961)

___

### width

• `Optional` `Readonly` **width**: `number`

The fixed image width to return.

**`memberof`** ImageApiGetItemImageByIndex

#### Defined in

[generated-client/api/image-api.ts:6891](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L6891)
