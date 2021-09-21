[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / RemoteImageApiGetRemoteImagesRequest

# Interface: RemoteImageApiGetRemoteImagesRequest

[generated-client](../modules/generated_client.md).RemoteImageApiGetRemoteImagesRequest

Request parameters for getRemoteImages operation in RemoteImageApi.

**`export`**

**`interface`** RemoteImageApiGetRemoteImagesRequest

## Table of contents

### Properties

- [includeAllLanguages](generated_client.RemoteImageApiGetRemoteImagesRequest.md#includealllanguages)
- [itemId](generated_client.RemoteImageApiGetRemoteImagesRequest.md#itemid)
- [limit](generated_client.RemoteImageApiGetRemoteImagesRequest.md#limit)
- [providerName](generated_client.RemoteImageApiGetRemoteImagesRequest.md#providername)
- [startIndex](generated_client.RemoteImageApiGetRemoteImagesRequest.md#startindex)
- [type](generated_client.RemoteImageApiGetRemoteImagesRequest.md#type)

## Properties

### includeAllLanguages

• `Optional` `Readonly` **includeAllLanguages**: `boolean`

Optional. Include all languages.

**`memberof`** RemoteImageApiGetRemoteImages

#### Defined in

[generated-client/api/remote-image-api.ts:373](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/remote-image-api.ts#L373)

___

### itemId

• `Readonly` **itemId**: `string`

Item Id.

**`memberof`** RemoteImageApiGetRemoteImages

#### Defined in

[generated-client/api/remote-image-api.ts:338](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/remote-image-api.ts#L338)

___

### limit

• `Optional` `Readonly` **limit**: `number`

Optional. The maximum number of records to return.

**`memberof`** RemoteImageApiGetRemoteImages

#### Defined in

[generated-client/api/remote-image-api.ts:359](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/remote-image-api.ts#L359)

___

### providerName

• `Optional` `Readonly` **providerName**: `string`

Optional. The image provider to use.

**`memberof`** RemoteImageApiGetRemoteImages

#### Defined in

[generated-client/api/remote-image-api.ts:366](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/remote-image-api.ts#L366)

___

### startIndex

• `Optional` `Readonly` **startIndex**: `number`

Optional. The record index to start at. All items with a lower index will be dropped from the results.

**`memberof`** RemoteImageApiGetRemoteImages

#### Defined in

[generated-client/api/remote-image-api.ts:352](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/remote-image-api.ts#L352)

___

### type

• `Optional` `Readonly` **type**: [`ImageType`](../enums/generated_client.ImageType.md)

The image type.

**`memberof`** RemoteImageApiGetRemoteImages

#### Defined in

[generated-client/api/remote-image-api.ts:345](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/remote-image-api.ts#L345)
