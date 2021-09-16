[jellyfin-sdk-typescript](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / PlaylistsApi

# Class: PlaylistsApi

[generated-client](../modules/generated_client.md).PlaylistsApi

PlaylistsApi - object-oriented interface

**`export`**

## Hierarchy

- `BaseAPI`

  ↳ **`PlaylistsApi`**

## Table of contents

### Constructors

- [constructor](generated_client.PlaylistsApi.md#constructor)

### Properties

- [axios](generated_client.PlaylistsApi.md#axios)
- [basePath](generated_client.PlaylistsApi.md#basepath)
- [configuration](generated_client.PlaylistsApi.md#configuration)

### Methods

- [addToPlaylist](generated_client.PlaylistsApi.md#addtoplaylist)
- [createPlaylist](generated_client.PlaylistsApi.md#createplaylist)
- [getPlaylistItems](generated_client.PlaylistsApi.md#getplaylistitems)
- [moveItem](generated_client.PlaylistsApi.md#moveitem)
- [removeFromPlaylist](generated_client.PlaylistsApi.md#removefromplaylist)

## Constructors

### constructor

• **new PlaylistsApi**(`configuration?`, `basePath?`, `axios?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](generated_client.Configuration.md) |
| `basePath` | `string` |
| `axios` | `AxiosInstance` |

#### Inherited from

BaseAPI.constructor

#### Defined in

[generated-client/base.ts:52](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/base.ts#L52)

## Properties

### axios

• `Protected` **axios**: `AxiosInstance`

#### Inherited from

BaseAPI.axios

___

### basePath

• `Protected` **basePath**: `string`

#### Inherited from

BaseAPI.basePath

___

### configuration

• `Protected` **configuration**: `undefined` \| [`Configuration`](generated_client.Configuration.md)

#### Inherited from

BaseAPI.configuration

#### Defined in

[generated-client/base.ts:50](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/base.ts#L50)

## Methods

### addToPlaylist

▸ **addToPlaylist**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Adds items to a playlist.

**`throws`** {RequiredError}

**`memberof`** PlaylistsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`PlaylistsApiAddToPlaylistRequest`](../interfaces/generated_client.PlaylistsApiAddToPlaylistRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[generated-client/api/playlists-api.ts:675](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/playlists-api.ts#L675)

___

### createPlaylist

▸ **createPlaylist**(`requestParameters?`, `options?`): `Promise`<`AxiosResponse`<[`PlaylistCreationResult`](../interfaces/generated_client.PlaylistCreationResult.md)\>\>

For backwards compatibility parameters can be sent via Query or Body, with Query having higher precedence.  Query parameters are obsolete.

**`summary`** Creates a new playlist.

**`throws`** {RequiredError}

**`memberof`** PlaylistsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`PlaylistsApiCreatePlaylistRequest`](../interfaces/generated_client.PlaylistsApiCreatePlaylistRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`PlaylistCreationResult`](../interfaces/generated_client.PlaylistCreationResult.md)\>\>

#### Defined in

[generated-client/api/playlists-api.ts:687](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/playlists-api.ts#L687)

___

### getPlaylistItems

▸ **getPlaylistItems**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`BaseItemDtoQueryResult`](../interfaces/generated_client.BaseItemDtoQueryResult.md)\>\>

**`summary`** Gets the original items of a playlist.

**`throws`** {RequiredError}

**`memberof`** PlaylistsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`PlaylistsApiGetPlaylistItemsRequest`](../interfaces/generated_client.PlaylistsApiGetPlaylistItemsRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`BaseItemDtoQueryResult`](../interfaces/generated_client.BaseItemDtoQueryResult.md)\>\>

#### Defined in

[generated-client/api/playlists-api.ts:699](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/playlists-api.ts#L699)

___

### moveItem

▸ **moveItem**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Moves a playlist item.

**`throws`** {RequiredError}

**`memberof`** PlaylistsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`PlaylistsApiMoveItemRequest`](../interfaces/generated_client.PlaylistsApiMoveItemRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[generated-client/api/playlists-api.ts:711](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/playlists-api.ts#L711)

___

### removeFromPlaylist

▸ **removeFromPlaylist**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Removes items from a playlist.

**`throws`** {RequiredError}

**`memberof`** PlaylistsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`PlaylistsApiRemoveFromPlaylistRequest`](../interfaces/generated_client.PlaylistsApiRemoveFromPlaylistRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[generated-client/api/playlists-api.ts:723](https://github.com/thornbill/jellyfin-sdk-typescript/blob/7534c86/src/generated-client/api/playlists-api.ts#L723)
