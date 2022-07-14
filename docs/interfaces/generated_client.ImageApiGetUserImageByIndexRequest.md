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

[generated-client/api/image-api.ts:8186](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L8186)

___

### backgroundColor

• `Optional` `Readonly` **backgroundColor**: `string`

Optional. Apply a background color for transparent images.

**`memberof`** ImageApiGetUserImageByIndex

#### Defined in

[generated-client/api/image-api.ts:8200](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L8200)

___

### blur

• `Optional` `Readonly` **blur**: `number`

Optional. Blur image.

**`memberof`** ImageApiGetUserImageByIndex

#### Defined in

[generated-client/api/image-api.ts:8193](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L8193)

___

### cropWhitespace

• `Optional` `Readonly` **cropWhitespace**: `boolean`

Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.

**`memberof`** ImageApiGetUserImageByIndex

#### Defined in

[generated-client/api/image-api.ts:8179](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L8179)

___

### fillHeight

• `Optional` `Readonly` **fillHeight**: `number`

Height of box to fill.

**`memberof`** ImageApiGetUserImageByIndex

#### Defined in

[generated-client/api/image-api.ts:8172](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L8172)

___

### fillWidth

• `Optional` `Readonly` **fillWidth**: `number`

Width of box to fill.

**`memberof`** ImageApiGetUserImageByIndex

#### Defined in

[generated-client/api/image-api.ts:8165](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L8165)

___

### foregroundLayer

• `Optional` `Readonly` **foregroundLayer**: `string`

Optional. Apply a foreground layer on top of the image.

**`memberof`** ImageApiGetUserImageByIndex

#### Defined in

[generated-client/api/image-api.ts:8207](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L8207)

___

### format

• `Optional` `Readonly` **format**: [`ImageFormat`](../enums/generated_client.ImageFormat.md)

Determines the output format of the image - original,gif,jpg,png.

**`memberof`** ImageApiGetUserImageByIndex

#### Defined in

[generated-client/api/image-api.ts:8109](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L8109)

___

### height

• `Optional` `Readonly` **height**: `number`

The fixed image height to return.

**`memberof`** ImageApiGetUserImageByIndex

#### Defined in

[generated-client/api/image-api.ts:8151](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L8151)

___

### imageIndex

• `Readonly` **imageIndex**: `number`

Image index.

**`memberof`** ImageApiGetUserImageByIndex

#### Defined in

[generated-client/api/image-api.ts:8095](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L8095)

___

### imageType

• `Readonly` **imageType**: [`ImageType`](../enums/generated_client.ImageType.md)

Image type.

**`memberof`** ImageApiGetUserImageByIndex

#### Defined in

[generated-client/api/image-api.ts:8088](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L8088)

___

### maxHeight

• `Optional` `Readonly` **maxHeight**: `number`

The maximum image height to return.

**`memberof`** ImageApiGetUserImageByIndex

#### Defined in

[generated-client/api/image-api.ts:8123](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L8123)

___

### maxWidth

• `Optional` `Readonly` **maxWidth**: `number`

The maximum image width to return.

**`memberof`** ImageApiGetUserImageByIndex

#### Defined in

[generated-client/api/image-api.ts:8116](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L8116)

___

### percentPlayed

• `Optional` `Readonly` **percentPlayed**: `number`

Optional. Percent to render for the percent played overlay.

**`memberof`** ImageApiGetUserImageByIndex

#### Defined in

[generated-client/api/image-api.ts:8130](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L8130)

___

### quality

• `Optional` `Readonly` **quality**: `number`

Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases.

**`memberof`** ImageApiGetUserImageByIndex

#### Defined in

[generated-client/api/image-api.ts:8158](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L8158)

___

### tag

• `Optional` `Readonly` **tag**: `string`

Optional. Supply the cache tag from the item object to receive strong caching headers.

**`memberof`** ImageApiGetUserImageByIndex

#### Defined in

[generated-client/api/image-api.ts:8102](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L8102)

___

### unplayedCount

• `Optional` `Readonly` **unplayedCount**: `number`

Optional. Unplayed count overlay to render.

**`memberof`** ImageApiGetUserImageByIndex

#### Defined in

[generated-client/api/image-api.ts:8137](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L8137)

___

### userId

• `Readonly` **userId**: `string`

User id.

**`memberof`** ImageApiGetUserImageByIndex

#### Defined in

[generated-client/api/image-api.ts:8081](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L8081)

___

### width

• `Optional` `Readonly` **width**: `number`

The fixed image width to return.

**`memberof`** ImageApiGetUserImageByIndex

#### Defined in

[generated-client/api/image-api.ts:8144](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/image-api.ts#L8144)
