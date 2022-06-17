[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / RemoveFromPlaylistRequestDto

# Interface: RemoveFromPlaylistRequestDto

[generated-client](../modules/generated_client.md).RemoveFromPlaylistRequestDto

Class RemoveFromPlaylistRequestDto.

**`export`**

**`interface`** RemoveFromPlaylistRequestDto

## Table of contents

### Properties

- [ClearPlayingItem](generated_client.RemoveFromPlaylistRequestDto.md#clearplayingitem)
- [ClearPlaylist](generated_client.RemoveFromPlaylistRequestDto.md#clearplaylist)
- [PlaylistItemIds](generated_client.RemoveFromPlaylistRequestDto.md#playlistitemids)

## Properties

### ClearPlayingItem

• `Optional` **ClearPlayingItem**: `boolean`

Gets or sets a value indicating whether the playing item should be removed as well. Used only when clearing the playlist.

**`memberof`** RemoveFromPlaylistRequestDto

#### Defined in

[generated-client/models/remove-from-playlist-request-dto.ts:40](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/models/remove-from-playlist-request-dto.ts#L40)

___

### ClearPlaylist

• `Optional` **ClearPlaylist**: `boolean`

Gets or sets a value indicating whether the entire playlist should be cleared.

**`memberof`** RemoveFromPlaylistRequestDto

#### Defined in

[generated-client/models/remove-from-playlist-request-dto.ts:34](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/models/remove-from-playlist-request-dto.ts#L34)

___

### PlaylistItemIds

• `Optional` **PlaylistItemIds**: `string`[]

Gets or sets the playlist identifiers ot the items. Ignored when clearing the playlist.

**`memberof`** RemoveFromPlaylistRequestDto

#### Defined in

[generated-client/models/remove-from-playlist-request-dto.ts:28](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/models/remove-from-playlist-request-dto.ts#L28)
