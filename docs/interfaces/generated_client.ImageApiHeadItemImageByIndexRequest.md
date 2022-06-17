[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / ImageApiHeadItemImageByIndexRequest

# Interface: ImageApiHeadItemImageByIndexRequest

[generated-client](../modules/generated_client.md).ImageApiHeadItemImageByIndexRequest

Request parameters for headItemImageByIndex operation in ImageApi.

**`export`**

**`interface`** ImageApiHeadItemImageByIndexRequest

## Table of contents

### Properties

- [addPlayedIndicator](generated_client.ImageApiHeadItemImageByIndexRequest.md#addplayedindicator)
- [backgroundColor](generated_client.ImageApiHeadItemImageByIndexRequest.md#backgroundcolor)
- [blur](generated_client.ImageApiHeadItemImageByIndexRequest.md#blur)
- [cropWhitespace](generated_client.ImageApiHeadItemImageByIndexRequest.md#cropwhitespace)
- [fillHeight](generated_client.ImageApiHeadItemImageByIndexRequest.md#fillheight)
- [fillWidth](generated_client.ImageApiHeadItemImageByIndexRequest.md#fillwidth)
- [foregroundLayer](generated_client.ImageApiHeadItemImageByIndexRequest.md#foregroundlayer)
- [format](generated_client.ImageApiHeadItemImageByIndexRequest.md#format)
- [height](generated_client.ImageApiHeadItemImageByIndexRequest.md#height)
- [imageIndex](generated_client.ImageApiHeadItemImageByIndexRequest.md#imageindex)
- [imageType](generated_client.ImageApiHeadItemImageByIndexRequest.md#imagetype)
- [itemId](generated_client.ImageApiHeadItemImageByIndexRequest.md#itemid)
- [maxHeight](generated_client.ImageApiHeadItemImageByIndexRequest.md#maxheight)
- [maxWidth](generated_client.ImageApiHeadItemImageByIndexRequest.md#maxwidth)
- [percentPlayed](generated_client.ImageApiHeadItemImageByIndexRequest.md#percentplayed)
- [quality](generated_client.ImageApiHeadItemImageByIndexRequest.md#quality)
- [tag](generated_client.ImageApiHeadItemImageByIndexRequest.md#tag)
- [unplayedCount](generated_client.ImageApiHeadItemImageByIndexRequest.md#unplayedcount)
- [width](generated_client.ImageApiHeadItemImageByIndexRequest.md#width)

## Properties

### addPlayedIndicator

• `Optional` `Readonly` **addPlayedIndicator**: `boolean`

Optional. Add a played indicator.

**`memberof`** ImageApiHeadItemImageByIndex

#### Defined in

[generated-client/api/image-api.ts:8960](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L8960)

___

### backgroundColor

• `Optional` `Readonly` **backgroundColor**: `string`

Optional. Apply a background color for transparent images.

**`memberof`** ImageApiHeadItemImageByIndex

#### Defined in

[generated-client/api/image-api.ts:8988](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L8988)

___

### blur

• `Optional` `Readonly` **blur**: `number`

Optional. Blur image.

**`memberof`** ImageApiHeadItemImageByIndex

#### Defined in

[generated-client/api/image-api.ts:8981](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L8981)

___

### cropWhitespace

• `Optional` `Readonly` **cropWhitespace**: `boolean`

Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.

**`memberof`** ImageApiHeadItemImageByIndex

#### Defined in

[generated-client/api/image-api.ts:8946](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L8946)

___

### fillHeight

• `Optional` `Readonly` **fillHeight**: `number`

Height of box to fill.

**`memberof`** ImageApiHeadItemImageByIndex

#### Defined in

[generated-client/api/image-api.ts:8932](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L8932)

___

### fillWidth

• `Optional` `Readonly` **fillWidth**: `number`

Width of box to fill.

**`memberof`** ImageApiHeadItemImageByIndex

#### Defined in

[generated-client/api/image-api.ts:8925](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L8925)

___

### foregroundLayer

• `Optional` `Readonly` **foregroundLayer**: `string`

Optional. Apply a foreground layer on top of the image.

**`memberof`** ImageApiHeadItemImageByIndex

#### Defined in

[generated-client/api/image-api.ts:8995](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L8995)

___

### format

• `Optional` `Readonly` **format**: [`ImageFormat`](../enums/generated_client.ImageFormat.md)

Optional. The MediaBrowser.Model.Drawing.ImageFormat of the returned image.

**`memberof`** ImageApiHeadItemImageByIndex

#### Defined in

[generated-client/api/image-api.ts:8953](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L8953)

___

### height

• `Optional` `Readonly` **height**: `number`

The fixed image height to return.

**`memberof`** ImageApiHeadItemImageByIndex

#### Defined in

[generated-client/api/image-api.ts:8911](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L8911)

___

### imageIndex

• `Readonly` **imageIndex**: `number`

Image index.

**`memberof`** ImageApiHeadItemImageByIndex

#### Defined in

[generated-client/api/image-api.ts:8883](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L8883)

___

### imageType

• `Readonly` **imageType**: [`ImageType`](../enums/generated_client.ImageType.md)

Image type.

**`memberof`** ImageApiHeadItemImageByIndex

#### Defined in

[generated-client/api/image-api.ts:8876](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L8876)

___

### itemId

• `Readonly` **itemId**: `string`

Item id.

**`memberof`** ImageApiHeadItemImageByIndex

#### Defined in

[generated-client/api/image-api.ts:8869](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L8869)

___

### maxHeight

• `Optional` `Readonly` **maxHeight**: `number`

The maximum image height to return.

**`memberof`** ImageApiHeadItemImageByIndex

#### Defined in

[generated-client/api/image-api.ts:8897](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L8897)

___

### maxWidth

• `Optional` `Readonly` **maxWidth**: `number`

The maximum image width to return.

**`memberof`** ImageApiHeadItemImageByIndex

#### Defined in

[generated-client/api/image-api.ts:8890](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L8890)

___

### percentPlayed

• `Optional` `Readonly` **percentPlayed**: `number`

Optional. Percent to render for the percent played overlay.

**`memberof`** ImageApiHeadItemImageByIndex

#### Defined in

[generated-client/api/image-api.ts:8967](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L8967)

___

### quality

• `Optional` `Readonly` **quality**: `number`

Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases.

**`memberof`** ImageApiHeadItemImageByIndex

#### Defined in

[generated-client/api/image-api.ts:8918](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L8918)

___

### tag

• `Optional` `Readonly` **tag**: `string`

Optional. Supply the cache tag from the item object to receive strong caching headers.

**`memberof`** ImageApiHeadItemImageByIndex

#### Defined in

[generated-client/api/image-api.ts:8939](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L8939)

___

### unplayedCount

• `Optional` `Readonly` **unplayedCount**: `number`

Optional. Unplayed count overlay to render.

**`memberof`** ImageApiHeadItemImageByIndex

#### Defined in

[generated-client/api/image-api.ts:8974](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L8974)

___

### width

• `Optional` `Readonly` **width**: `number`

The fixed image width to return.

**`memberof`** ImageApiHeadItemImageByIndex

#### Defined in

[generated-client/api/image-api.ts:8904](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L8904)
