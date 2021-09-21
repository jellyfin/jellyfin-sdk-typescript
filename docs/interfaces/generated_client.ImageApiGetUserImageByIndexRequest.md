[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / ImageApiGetUserImageByIndexRequest

# Interface: ImageApiGetUserImageByIndexRequest

[generated-client](../modules/generated_client.md).ImageApiGetUserImageByIndexRequest

Request parameters for getUserImageByIndex operation in ImageApi.

**`export`**

**`interface`** ImageApiGetUserImageByIndexRequest

## Table of contents

### Properties

- [addPlayedIndicator](generated_client.ImageApiGetUserImageByIndexRequest.md#addplayedindicator)
- [backgroundColor](generated_client.ImageApiGetUserImageByIndexRequest.md#backgroundcolor)
- [blur](generated_client.ImageApiGetUserImageByIndexRequest.md#blur)
- [cropWhitespace](generated_client.ImageApiGetUserImageByIndexRequest.md#cropwhitespace)
- [fillHeight](generated_client.ImageApiGetUserImageByIndexRequest.md#fillheight)
- [fillWidth](generated_client.ImageApiGetUserImageByIndexRequest.md#fillwidth)
- [foregroundLayer](generated_client.ImageApiGetUserImageByIndexRequest.md#foregroundlayer)
- [format](generated_client.ImageApiGetUserImageByIndexRequest.md#format)
- [height](generated_client.ImageApiGetUserImageByIndexRequest.md#height)
- [imageIndex](generated_client.ImageApiGetUserImageByIndexRequest.md#imageindex)
- [imageType](generated_client.ImageApiGetUserImageByIndexRequest.md#imagetype)
- [maxHeight](generated_client.ImageApiGetUserImageByIndexRequest.md#maxheight)
- [maxWidth](generated_client.ImageApiGetUserImageByIndexRequest.md#maxwidth)
- [percentPlayed](generated_client.ImageApiGetUserImageByIndexRequest.md#percentplayed)
- [quality](generated_client.ImageApiGetUserImageByIndexRequest.md#quality)
- [tag](generated_client.ImageApiGetUserImageByIndexRequest.md#tag)
- [unplayedCount](generated_client.ImageApiGetUserImageByIndexRequest.md#unplayedcount)
- [userId](generated_client.ImageApiGetUserImageByIndexRequest.md#userid)
- [width](generated_client.ImageApiGetUserImageByIndexRequest.md#width)

## Properties

### addPlayedIndicator

• `Optional` `Readonly` **addPlayedIndicator**: `boolean`

Optional. Add a played indicator.

**`memberof`** ImageApiGetUserImageByIndex

#### Defined in

[generated-client/api/image-api.ts:7852](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/image-api.ts#L7852)

___

### backgroundColor

• `Optional` `Readonly` **backgroundColor**: `string`

Optional. Apply a background color for transparent images.

**`memberof`** ImageApiGetUserImageByIndex

#### Defined in

[generated-client/api/image-api.ts:7866](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/image-api.ts#L7866)

___

### blur

• `Optional` `Readonly` **blur**: `number`

Optional. Blur image.

**`memberof`** ImageApiGetUserImageByIndex

#### Defined in

[generated-client/api/image-api.ts:7859](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/image-api.ts#L7859)

___

### cropWhitespace

• `Optional` `Readonly` **cropWhitespace**: `boolean`

Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.

**`memberof`** ImageApiGetUserImageByIndex

#### Defined in

[generated-client/api/image-api.ts:7845](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/image-api.ts#L7845)

___

### fillHeight

• `Optional` `Readonly` **fillHeight**: `number`

Height of box to fill.

**`memberof`** ImageApiGetUserImageByIndex

#### Defined in

[generated-client/api/image-api.ts:7838](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/image-api.ts#L7838)

___

### fillWidth

• `Optional` `Readonly` **fillWidth**: `number`

Width of box to fill.

**`memberof`** ImageApiGetUserImageByIndex

#### Defined in

[generated-client/api/image-api.ts:7831](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/image-api.ts#L7831)

___

### foregroundLayer

• `Optional` `Readonly` **foregroundLayer**: `string`

Optional. Apply a foreground layer on top of the image.

**`memberof`** ImageApiGetUserImageByIndex

#### Defined in

[generated-client/api/image-api.ts:7873](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/image-api.ts#L7873)

___

### format

• `Optional` `Readonly` **format**: [`ImageFormat`](../enums/generated_client.ImageFormat.md)

Determines the output format of the image - original,gif,jpg,png.

**`memberof`** ImageApiGetUserImageByIndex

#### Defined in

[generated-client/api/image-api.ts:7775](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/image-api.ts#L7775)

___

### height

• `Optional` `Readonly` **height**: `number`

The fixed image height to return.

**`memberof`** ImageApiGetUserImageByIndex

#### Defined in

[generated-client/api/image-api.ts:7817](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/image-api.ts#L7817)

___

### imageIndex

• `Readonly` **imageIndex**: `number`

Image index.

**`memberof`** ImageApiGetUserImageByIndex

#### Defined in

[generated-client/api/image-api.ts:7761](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/image-api.ts#L7761)

___

### imageType

• `Readonly` **imageType**: [`ImageType`](../enums/generated_client.ImageType.md)

Image type.

**`memberof`** ImageApiGetUserImageByIndex

#### Defined in

[generated-client/api/image-api.ts:7754](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/image-api.ts#L7754)

___

### maxHeight

• `Optional` `Readonly` **maxHeight**: `number`

The maximum image height to return.

**`memberof`** ImageApiGetUserImageByIndex

#### Defined in

[generated-client/api/image-api.ts:7789](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/image-api.ts#L7789)

___

### maxWidth

• `Optional` `Readonly` **maxWidth**: `number`

The maximum image width to return.

**`memberof`** ImageApiGetUserImageByIndex

#### Defined in

[generated-client/api/image-api.ts:7782](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/image-api.ts#L7782)

___

### percentPlayed

• `Optional` `Readonly` **percentPlayed**: `number`

Optional. Percent to render for the percent played overlay.

**`memberof`** ImageApiGetUserImageByIndex

#### Defined in

[generated-client/api/image-api.ts:7796](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/image-api.ts#L7796)

___

### quality

• `Optional` `Readonly` **quality**: `number`

Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases.

**`memberof`** ImageApiGetUserImageByIndex

#### Defined in

[generated-client/api/image-api.ts:7824](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/image-api.ts#L7824)

___

### tag

• `Optional` `Readonly` **tag**: `string`

Optional. Supply the cache tag from the item object to receive strong caching headers.

**`memberof`** ImageApiGetUserImageByIndex

#### Defined in

[generated-client/api/image-api.ts:7768](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/image-api.ts#L7768)

___

### unplayedCount

• `Optional` `Readonly` **unplayedCount**: `number`

Optional. Unplayed count overlay to render.

**`memberof`** ImageApiGetUserImageByIndex

#### Defined in

[generated-client/api/image-api.ts:7803](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/image-api.ts#L7803)

___

### userId

• `Readonly` **userId**: `string`

User id.

**`memberof`** ImageApiGetUserImageByIndex

#### Defined in

[generated-client/api/image-api.ts:7747](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/image-api.ts#L7747)

___

### width

• `Optional` `Readonly` **width**: `number`

The fixed image width to return.

**`memberof`** ImageApiGetUserImageByIndex

#### Defined in

[generated-client/api/image-api.ts:7810](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/image-api.ts#L7810)
