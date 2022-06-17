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

[generated-client/api/image-api.ts:8134](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L8134)

___

### backgroundColor

• `Optional` `Readonly` **backgroundColor**: `string`

Optional. Apply a background color for transparent images.

**`memberof`** ImageApiGetUserImageByIndex

#### Defined in

[generated-client/api/image-api.ts:8148](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L8148)

___

### blur

• `Optional` `Readonly` **blur**: `number`

Optional. Blur image.

**`memberof`** ImageApiGetUserImageByIndex

#### Defined in

[generated-client/api/image-api.ts:8141](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L8141)

___

### cropWhitespace

• `Optional` `Readonly` **cropWhitespace**: `boolean`

Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.

**`memberof`** ImageApiGetUserImageByIndex

#### Defined in

[generated-client/api/image-api.ts:8127](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L8127)

___

### fillHeight

• `Optional` `Readonly` **fillHeight**: `number`

Height of box to fill.

**`memberof`** ImageApiGetUserImageByIndex

#### Defined in

[generated-client/api/image-api.ts:8120](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L8120)

___

### fillWidth

• `Optional` `Readonly` **fillWidth**: `number`

Width of box to fill.

**`memberof`** ImageApiGetUserImageByIndex

#### Defined in

[generated-client/api/image-api.ts:8113](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L8113)

___

### foregroundLayer

• `Optional` `Readonly` **foregroundLayer**: `string`

Optional. Apply a foreground layer on top of the image.

**`memberof`** ImageApiGetUserImageByIndex

#### Defined in

[generated-client/api/image-api.ts:8155](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L8155)

___

### format

• `Optional` `Readonly` **format**: [`ImageFormat`](../enums/generated_client.ImageFormat.md)

Determines the output format of the image - original,gif,jpg,png.

**`memberof`** ImageApiGetUserImageByIndex

#### Defined in

[generated-client/api/image-api.ts:8057](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L8057)

___

### height

• `Optional` `Readonly` **height**: `number`

The fixed image height to return.

**`memberof`** ImageApiGetUserImageByIndex

#### Defined in

[generated-client/api/image-api.ts:8099](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L8099)

___

### imageIndex

• `Readonly` **imageIndex**: `number`

Image index.

**`memberof`** ImageApiGetUserImageByIndex

#### Defined in

[generated-client/api/image-api.ts:8043](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L8043)

___

### imageType

• `Readonly` **imageType**: [`ImageType`](../enums/generated_client.ImageType.md)

Image type.

**`memberof`** ImageApiGetUserImageByIndex

#### Defined in

[generated-client/api/image-api.ts:8036](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L8036)

___

### maxHeight

• `Optional` `Readonly` **maxHeight**: `number`

The maximum image height to return.

**`memberof`** ImageApiGetUserImageByIndex

#### Defined in

[generated-client/api/image-api.ts:8071](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L8071)

___

### maxWidth

• `Optional` `Readonly` **maxWidth**: `number`

The maximum image width to return.

**`memberof`** ImageApiGetUserImageByIndex

#### Defined in

[generated-client/api/image-api.ts:8064](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L8064)

___

### percentPlayed

• `Optional` `Readonly` **percentPlayed**: `number`

Optional. Percent to render for the percent played overlay.

**`memberof`** ImageApiGetUserImageByIndex

#### Defined in

[generated-client/api/image-api.ts:8078](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L8078)

___

### quality

• `Optional` `Readonly` **quality**: `number`

Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases.

**`memberof`** ImageApiGetUserImageByIndex

#### Defined in

[generated-client/api/image-api.ts:8106](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L8106)

___

### tag

• `Optional` `Readonly` **tag**: `string`

Optional. Supply the cache tag from the item object to receive strong caching headers.

**`memberof`** ImageApiGetUserImageByIndex

#### Defined in

[generated-client/api/image-api.ts:8050](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L8050)

___

### unplayedCount

• `Optional` `Readonly` **unplayedCount**: `number`

Optional. Unplayed count overlay to render.

**`memberof`** ImageApiGetUserImageByIndex

#### Defined in

[generated-client/api/image-api.ts:8085](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L8085)

___

### userId

• `Readonly` **userId**: `string`

User id.

**`memberof`** ImageApiGetUserImageByIndex

#### Defined in

[generated-client/api/image-api.ts:8029](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L8029)

___

### width

• `Optional` `Readonly` **width**: `number`

The fixed image width to return.

**`memberof`** ImageApiGetUserImageByIndex

#### Defined in

[generated-client/api/image-api.ts:8092](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L8092)
