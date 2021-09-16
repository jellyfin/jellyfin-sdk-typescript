[jellyfin-sdk-typescript](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / PlaylistsApiGetPlaylistItemsRequest

# Interface: PlaylistsApiGetPlaylistItemsRequest

[generated-client](../modules/generated_client.md).PlaylistsApiGetPlaylistItemsRequest

Request parameters for getPlaylistItems operation in PlaylistsApi.

**`export`**

**`interface`** PlaylistsApiGetPlaylistItemsRequest

## Table of contents

### Properties

- [enableImageTypes](generated_client.PlaylistsApiGetPlaylistItemsRequest.md#enableimagetypes)
- [enableImages](generated_client.PlaylistsApiGetPlaylistItemsRequest.md#enableimages)
- [enableUserData](generated_client.PlaylistsApiGetPlaylistItemsRequest.md#enableuserdata)
- [fields](generated_client.PlaylistsApiGetPlaylistItemsRequest.md#fields)
- [imageTypeLimit](generated_client.PlaylistsApiGetPlaylistItemsRequest.md#imagetypelimit)
- [limit](generated_client.PlaylistsApiGetPlaylistItemsRequest.md#limit)
- [playlistId](generated_client.PlaylistsApiGetPlaylistItemsRequest.md#playlistid)
- [startIndex](generated_client.PlaylistsApiGetPlaylistItemsRequest.md#startindex)
- [userId](generated_client.PlaylistsApiGetPlaylistItemsRequest.md#userid)

## Properties

### enableImageTypes

• `Optional` `Readonly` **enableImageTypes**: [`ImageType`](../enums/generated_client.ImageType.md)[]

Optional. The image types to include in the output.

**`memberof`** PlaylistsApiGetPlaylistItems

#### Defined in

[generated-client/api/playlists-api.ts:608](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b0f5501/src/generated-client/api/playlists-api.ts#L608)

___

### enableImages

• `Optional` `Readonly` **enableImages**: `boolean`

Optional. Include image information in output.

**`memberof`** PlaylistsApiGetPlaylistItems

#### Defined in

[generated-client/api/playlists-api.ts:587](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b0f5501/src/generated-client/api/playlists-api.ts#L587)

___

### enableUserData

• `Optional` `Readonly` **enableUserData**: `boolean`

Optional. Include user data.

**`memberof`** PlaylistsApiGetPlaylistItems

#### Defined in

[generated-client/api/playlists-api.ts:594](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b0f5501/src/generated-client/api/playlists-api.ts#L594)

___

### fields

• `Optional` `Readonly` **fields**: [`ItemFields`](../enums/generated_client.ItemFields.md)[]

Optional. Specify additional fields of information to return in the output.

**`memberof`** PlaylistsApiGetPlaylistItems

#### Defined in

[generated-client/api/playlists-api.ts:580](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b0f5501/src/generated-client/api/playlists-api.ts#L580)

___

### imageTypeLimit

• `Optional` `Readonly` **imageTypeLimit**: `number`

Optional. The max number of images to return, per image type.

**`memberof`** PlaylistsApiGetPlaylistItems

#### Defined in

[generated-client/api/playlists-api.ts:601](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b0f5501/src/generated-client/api/playlists-api.ts#L601)

___

### limit

• `Optional` `Readonly` **limit**: `number`

Optional. The maximum number of records to return.

**`memberof`** PlaylistsApiGetPlaylistItems

#### Defined in

[generated-client/api/playlists-api.ts:573](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b0f5501/src/generated-client/api/playlists-api.ts#L573)

___

### playlistId

• `Readonly` **playlistId**: `string`

The playlist id.

**`memberof`** PlaylistsApiGetPlaylistItems

#### Defined in

[generated-client/api/playlists-api.ts:552](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b0f5501/src/generated-client/api/playlists-api.ts#L552)

___

### startIndex

• `Optional` `Readonly` **startIndex**: `number`

Optional. The record index to start at. All items with a lower index will be dropped from the results.

**`memberof`** PlaylistsApiGetPlaylistItems

#### Defined in

[generated-client/api/playlists-api.ts:566](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b0f5501/src/generated-client/api/playlists-api.ts#L566)

___

### userId

• `Readonly` **userId**: `string`

User id.

**`memberof`** PlaylistsApiGetPlaylistItems

#### Defined in

[generated-client/api/playlists-api.ts:559](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b0f5501/src/generated-client/api/playlists-api.ts#L559)
