[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / ImageApiGetStudioImageByIndexRequest

# Interface: ImageApiGetStudioImageByIndexRequest

[generated-client](../modules/generated_client.md).ImageApiGetStudioImageByIndexRequest

Request parameters for getStudioImageByIndex operation in ImageApi.

**`export`**

**`interface`** ImageApiGetStudioImageByIndexRequest

## Table of contents

### Properties

- [addPlayedIndicator](generated_client.ImageApiGetStudioImageByIndexRequest.md#addplayedindicator)
- [backgroundColor](generated_client.ImageApiGetStudioImageByIndexRequest.md#backgroundcolor)
- [blur](generated_client.ImageApiGetStudioImageByIndexRequest.md#blur)
- [cropWhitespace](generated_client.ImageApiGetStudioImageByIndexRequest.md#cropwhitespace)
- [fillHeight](generated_client.ImageApiGetStudioImageByIndexRequest.md#fillheight)
- [fillWidth](generated_client.ImageApiGetStudioImageByIndexRequest.md#fillwidth)
- [foregroundLayer](generated_client.ImageApiGetStudioImageByIndexRequest.md#foregroundlayer)
- [format](generated_client.ImageApiGetStudioImageByIndexRequest.md#format)
- [height](generated_client.ImageApiGetStudioImageByIndexRequest.md#height)
- [imageIndex](generated_client.ImageApiGetStudioImageByIndexRequest.md#imageindex)
- [imageType](generated_client.ImageApiGetStudioImageByIndexRequest.md#imagetype)
- [maxHeight](generated_client.ImageApiGetStudioImageByIndexRequest.md#maxheight)
- [maxWidth](generated_client.ImageApiGetStudioImageByIndexRequest.md#maxwidth)
- [name](generated_client.ImageApiGetStudioImageByIndexRequest.md#name)
- [percentPlayed](generated_client.ImageApiGetStudioImageByIndexRequest.md#percentplayed)
- [quality](generated_client.ImageApiGetStudioImageByIndexRequest.md#quality)
- [tag](generated_client.ImageApiGetStudioImageByIndexRequest.md#tag)
- [unplayedCount](generated_client.ImageApiGetStudioImageByIndexRequest.md#unplayedcount)
- [width](generated_client.ImageApiGetStudioImageByIndexRequest.md#width)

## Properties

### addPlayedIndicator

• `Optional` `Readonly` **addPlayedIndicator**: `boolean`

Optional. Add a played indicator.

**`memberof`** ImageApiGetStudioImageByIndex

#### Defined in

[generated-client/api/image-api.ts:7906](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L7906)

___

### backgroundColor

• `Optional` `Readonly` **backgroundColor**: `string`

Optional. Apply a background color for transparent images.

**`memberof`** ImageApiGetStudioImageByIndex

#### Defined in

[generated-client/api/image-api.ts:7920](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L7920)

___

### blur

• `Optional` `Readonly` **blur**: `number`

Optional. Blur image.

**`memberof`** ImageApiGetStudioImageByIndex

#### Defined in

[generated-client/api/image-api.ts:7913](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L7913)

___

### cropWhitespace

• `Optional` `Readonly` **cropWhitespace**: `boolean`

Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.

**`memberof`** ImageApiGetStudioImageByIndex

#### Defined in

[generated-client/api/image-api.ts:7899](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L7899)

___

### fillHeight

• `Optional` `Readonly` **fillHeight**: `number`

Height of box to fill.

**`memberof`** ImageApiGetStudioImageByIndex

#### Defined in

[generated-client/api/image-api.ts:7892](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L7892)

___

### fillWidth

• `Optional` `Readonly` **fillWidth**: `number`

Width of box to fill.

**`memberof`** ImageApiGetStudioImageByIndex

#### Defined in

[generated-client/api/image-api.ts:7885](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L7885)

___

### foregroundLayer

• `Optional` `Readonly` **foregroundLayer**: `string`

Optional. Apply a foreground layer on top of the image.

**`memberof`** ImageApiGetStudioImageByIndex

#### Defined in

[generated-client/api/image-api.ts:7927](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L7927)

___

### format

• `Optional` `Readonly` **format**: [`ImageFormat`](../enums/generated_client.ImageFormat.md)

Determines the output format of the image - original,gif,jpg,png.

**`memberof`** ImageApiGetStudioImageByIndex

#### Defined in

[generated-client/api/image-api.ts:7829](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L7829)

___

### height

• `Optional` `Readonly` **height**: `number`

The fixed image height to return.

**`memberof`** ImageApiGetStudioImageByIndex

#### Defined in

[generated-client/api/image-api.ts:7871](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L7871)

___

### imageIndex

• `Readonly` **imageIndex**: `number`

Image index.

**`memberof`** ImageApiGetStudioImageByIndex

#### Defined in

[generated-client/api/image-api.ts:7815](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L7815)

___

### imageType

• `Readonly` **imageType**: [`ImageType`](../enums/generated_client.ImageType.md)

Image type.

**`memberof`** ImageApiGetStudioImageByIndex

#### Defined in

[generated-client/api/image-api.ts:7808](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L7808)

___

### maxHeight

• `Optional` `Readonly` **maxHeight**: `number`

The maximum image height to return.

**`memberof`** ImageApiGetStudioImageByIndex

#### Defined in

[generated-client/api/image-api.ts:7843](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L7843)

___

### maxWidth

• `Optional` `Readonly` **maxWidth**: `number`

The maximum image width to return.

**`memberof`** ImageApiGetStudioImageByIndex

#### Defined in

[generated-client/api/image-api.ts:7836](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L7836)

___

### name

• `Readonly` **name**: `string`

Studio name.

**`memberof`** ImageApiGetStudioImageByIndex

#### Defined in

[generated-client/api/image-api.ts:7801](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L7801)

___

### percentPlayed

• `Optional` `Readonly` **percentPlayed**: `number`

Optional. Percent to render for the percent played overlay.

**`memberof`** ImageApiGetStudioImageByIndex

#### Defined in

[generated-client/api/image-api.ts:7850](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L7850)

___

### quality

• `Optional` `Readonly` **quality**: `number`

Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases.

**`memberof`** ImageApiGetStudioImageByIndex

#### Defined in

[generated-client/api/image-api.ts:7878](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L7878)

___

### tag

• `Optional` `Readonly` **tag**: `string`

Optional. Supply the cache tag from the item object to receive strong caching headers.

**`memberof`** ImageApiGetStudioImageByIndex

#### Defined in

[generated-client/api/image-api.ts:7822](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L7822)

___

### unplayedCount

• `Optional` `Readonly` **unplayedCount**: `number`

Optional. Unplayed count overlay to render.

**`memberof`** ImageApiGetStudioImageByIndex

#### Defined in

[generated-client/api/image-api.ts:7857](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L7857)

___

### width

• `Optional` `Readonly` **width**: `number`

The fixed image width to return.

**`memberof`** ImageApiGetStudioImageByIndex

#### Defined in

[generated-client/api/image-api.ts:7864](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L7864)
