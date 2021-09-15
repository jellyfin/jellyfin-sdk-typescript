[jellyfin-sdk-typescript](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / ImageApiGetItemImageByIndexRequest

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

[generated-client/api/image-api.ts:6704](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/image-api.ts#L6704)

___

### backgroundColor

• `Optional` `Readonly` **backgroundColor**: `string`

Optional. Apply a background color for transparent images.

**`memberof`** ImageApiGetItemImageByIndex

#### Defined in

[generated-client/api/image-api.ts:6732](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/image-api.ts#L6732)

___

### blur

• `Optional` `Readonly` **blur**: `number`

Optional. Blur image.

**`memberof`** ImageApiGetItemImageByIndex

#### Defined in

[generated-client/api/image-api.ts:6725](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/image-api.ts#L6725)

___

### cropWhitespace

• `Optional` `Readonly` **cropWhitespace**: `boolean`

Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.

**`memberof`** ImageApiGetItemImageByIndex

#### Defined in

[generated-client/api/image-api.ts:6690](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/image-api.ts#L6690)

___

### fillHeight

• `Optional` `Readonly` **fillHeight**: `number`

Height of box to fill.

**`memberof`** ImageApiGetItemImageByIndex

#### Defined in

[generated-client/api/image-api.ts:6676](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/image-api.ts#L6676)

___

### fillWidth

• `Optional` `Readonly` **fillWidth**: `number`

Width of box to fill.

**`memberof`** ImageApiGetItemImageByIndex

#### Defined in

[generated-client/api/image-api.ts:6669](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/image-api.ts#L6669)

___

### foregroundLayer

• `Optional` `Readonly` **foregroundLayer**: `string`

Optional. Apply a foreground layer on top of the image.

**`memberof`** ImageApiGetItemImageByIndex

#### Defined in

[generated-client/api/image-api.ts:6739](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/image-api.ts#L6739)

___

### format

• `Optional` `Readonly` **format**: [`ImageFormat`](../enums/generated_client.ImageFormat.md)

Optional. The MediaBrowser.Model.Drawing.ImageFormat of the returned image.

**`memberof`** ImageApiGetItemImageByIndex

#### Defined in

[generated-client/api/image-api.ts:6697](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/image-api.ts#L6697)

___

### height

• `Optional` `Readonly` **height**: `number`

The fixed image height to return.

**`memberof`** ImageApiGetItemImageByIndex

#### Defined in

[generated-client/api/image-api.ts:6655](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/image-api.ts#L6655)

___

### imageIndex

• `Readonly` **imageIndex**: `number`

Image index.

**`memberof`** ImageApiGetItemImageByIndex

#### Defined in

[generated-client/api/image-api.ts:6627](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/image-api.ts#L6627)

___

### imageType

• `Readonly` **imageType**: [`ImageType`](../enums/generated_client.ImageType.md)

Image type.

**`memberof`** ImageApiGetItemImageByIndex

#### Defined in

[generated-client/api/image-api.ts:6620](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/image-api.ts#L6620)

___

### itemId

• `Readonly` **itemId**: `string`

Item id.

**`memberof`** ImageApiGetItemImageByIndex

#### Defined in

[generated-client/api/image-api.ts:6613](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/image-api.ts#L6613)

___

### maxHeight

• `Optional` `Readonly` **maxHeight**: `number`

The maximum image height to return.

**`memberof`** ImageApiGetItemImageByIndex

#### Defined in

[generated-client/api/image-api.ts:6641](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/image-api.ts#L6641)

___

### maxWidth

• `Optional` `Readonly` **maxWidth**: `number`

The maximum image width to return.

**`memberof`** ImageApiGetItemImageByIndex

#### Defined in

[generated-client/api/image-api.ts:6634](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/image-api.ts#L6634)

___

### percentPlayed

• `Optional` `Readonly` **percentPlayed**: `number`

Optional. Percent to render for the percent played overlay.

**`memberof`** ImageApiGetItemImageByIndex

#### Defined in

[generated-client/api/image-api.ts:6711](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/image-api.ts#L6711)

___

### quality

• `Optional` `Readonly` **quality**: `number`

Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases.

**`memberof`** ImageApiGetItemImageByIndex

#### Defined in

[generated-client/api/image-api.ts:6662](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/image-api.ts#L6662)

___

### tag

• `Optional` `Readonly` **tag**: `string`

Optional. Supply the cache tag from the item object to receive strong caching headers.

**`memberof`** ImageApiGetItemImageByIndex

#### Defined in

[generated-client/api/image-api.ts:6683](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/image-api.ts#L6683)

___

### unplayedCount

• `Optional` `Readonly` **unplayedCount**: `number`

Optional. Unplayed count overlay to render.

**`memberof`** ImageApiGetItemImageByIndex

#### Defined in

[generated-client/api/image-api.ts:6718](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/image-api.ts#L6718)

___

### width

• `Optional` `Readonly` **width**: `number`

The fixed image width to return.

**`memberof`** ImageApiGetItemImageByIndex

#### Defined in

[generated-client/api/image-api.ts:6648](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/image-api.ts#L6648)
