[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / ImageApiGetPersonImageRequest

# Interface: ImageApiGetPersonImageRequest

[generated-client](../modules/generated_client.md).ImageApiGetPersonImageRequest

Request parameters for getPersonImage operation in ImageApi.

**`export`**

**`interface`** ImageApiGetPersonImageRequest

## Table of contents

### Properties

- [addPlayedIndicator](generated_client.ImageApiGetPersonImageRequest.md#addplayedindicator)
- [backgroundColor](generated_client.ImageApiGetPersonImageRequest.md#backgroundcolor)
- [blur](generated_client.ImageApiGetPersonImageRequest.md#blur)
- [cropWhitespace](generated_client.ImageApiGetPersonImageRequest.md#cropwhitespace)
- [fillHeight](generated_client.ImageApiGetPersonImageRequest.md#fillheight)
- [fillWidth](generated_client.ImageApiGetPersonImageRequest.md#fillwidth)
- [foregroundLayer](generated_client.ImageApiGetPersonImageRequest.md#foregroundlayer)
- [format](generated_client.ImageApiGetPersonImageRequest.md#format)
- [height](generated_client.ImageApiGetPersonImageRequest.md#height)
- [imageIndex](generated_client.ImageApiGetPersonImageRequest.md#imageindex)
- [imageType](generated_client.ImageApiGetPersonImageRequest.md#imagetype)
- [maxHeight](generated_client.ImageApiGetPersonImageRequest.md#maxheight)
- [maxWidth](generated_client.ImageApiGetPersonImageRequest.md#maxwidth)
- [name](generated_client.ImageApiGetPersonImageRequest.md#name)
- [percentPlayed](generated_client.ImageApiGetPersonImageRequest.md#percentplayed)
- [quality](generated_client.ImageApiGetPersonImageRequest.md#quality)
- [tag](generated_client.ImageApiGetPersonImageRequest.md#tag)
- [unplayedCount](generated_client.ImageApiGetPersonImageRequest.md#unplayedcount)
- [width](generated_client.ImageApiGetPersonImageRequest.md#width)

## Properties

### addPlayedIndicator

• `Optional` `Readonly` **addPlayedIndicator**: `boolean`

Optional. Add a played indicator.

**`memberof`** ImageApiGetPersonImage

#### Defined in

[generated-client/api/image-api.ts:7336](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L7336)

___

### backgroundColor

• `Optional` `Readonly` **backgroundColor**: `string`

Optional. Apply a background color for transparent images.

**`memberof`** ImageApiGetPersonImage

#### Defined in

[generated-client/api/image-api.ts:7350](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L7350)

___

### blur

• `Optional` `Readonly` **blur**: `number`

Optional. Blur image.

**`memberof`** ImageApiGetPersonImage

#### Defined in

[generated-client/api/image-api.ts:7343](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L7343)

___

### cropWhitespace

• `Optional` `Readonly` **cropWhitespace**: `boolean`

Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.

**`memberof`** ImageApiGetPersonImage

#### Defined in

[generated-client/api/image-api.ts:7329](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L7329)

___

### fillHeight

• `Optional` `Readonly` **fillHeight**: `number`

Height of box to fill.

**`memberof`** ImageApiGetPersonImage

#### Defined in

[generated-client/api/image-api.ts:7322](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L7322)

___

### fillWidth

• `Optional` `Readonly` **fillWidth**: `number`

Width of box to fill.

**`memberof`** ImageApiGetPersonImage

#### Defined in

[generated-client/api/image-api.ts:7315](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L7315)

___

### foregroundLayer

• `Optional` `Readonly` **foregroundLayer**: `string`

Optional. Apply a foreground layer on top of the image.

**`memberof`** ImageApiGetPersonImage

#### Defined in

[generated-client/api/image-api.ts:7357](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L7357)

___

### format

• `Optional` `Readonly` **format**: [`ImageFormat`](../enums/generated_client.ImageFormat.md)

Determines the output format of the image - original,gif,jpg,png.

**`memberof`** ImageApiGetPersonImage

#### Defined in

[generated-client/api/image-api.ts:7259](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L7259)

___

### height

• `Optional` `Readonly` **height**: `number`

The fixed image height to return.

**`memberof`** ImageApiGetPersonImage

#### Defined in

[generated-client/api/image-api.ts:7301](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L7301)

___

### imageIndex

• `Optional` `Readonly` **imageIndex**: `number`

Image index.

**`memberof`** ImageApiGetPersonImage

#### Defined in

[generated-client/api/image-api.ts:7364](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L7364)

___

### imageType

• `Readonly` **imageType**: [`ImageType`](../enums/generated_client.ImageType.md)

Image type.

**`memberof`** ImageApiGetPersonImage

#### Defined in

[generated-client/api/image-api.ts:7245](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L7245)

___

### maxHeight

• `Optional` `Readonly` **maxHeight**: `number`

The maximum image height to return.

**`memberof`** ImageApiGetPersonImage

#### Defined in

[generated-client/api/image-api.ts:7273](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L7273)

___

### maxWidth

• `Optional` `Readonly` **maxWidth**: `number`

The maximum image width to return.

**`memberof`** ImageApiGetPersonImage

#### Defined in

[generated-client/api/image-api.ts:7266](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L7266)

___

### name

• `Readonly` **name**: `string`

Person name.

**`memberof`** ImageApiGetPersonImage

#### Defined in

[generated-client/api/image-api.ts:7238](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L7238)

___

### percentPlayed

• `Optional` `Readonly` **percentPlayed**: `number`

Optional. Percent to render for the percent played overlay.

**`memberof`** ImageApiGetPersonImage

#### Defined in

[generated-client/api/image-api.ts:7280](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L7280)

___

### quality

• `Optional` `Readonly` **quality**: `number`

Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases.

**`memberof`** ImageApiGetPersonImage

#### Defined in

[generated-client/api/image-api.ts:7308](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L7308)

___

### tag

• `Optional` `Readonly` **tag**: `string`

Optional. Supply the cache tag from the item object to receive strong caching headers.

**`memberof`** ImageApiGetPersonImage

#### Defined in

[generated-client/api/image-api.ts:7252](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L7252)

___

### unplayedCount

• `Optional` `Readonly` **unplayedCount**: `number`

Optional. Unplayed count overlay to render.

**`memberof`** ImageApiGetPersonImage

#### Defined in

[generated-client/api/image-api.ts:7287](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L7287)

___

### width

• `Optional` `Readonly` **width**: `number`

The fixed image width to return.

**`memberof`** ImageApiGetPersonImage

#### Defined in

[generated-client/api/image-api.ts:7294](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/image-api.ts#L7294)
