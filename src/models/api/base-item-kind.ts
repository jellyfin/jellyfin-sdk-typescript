/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

// NOTE: This should be included in the generated models in the 10.8 openapi spec

/**
 * An enum representing the possible base item types.
 * References: https://github.com/jellyfin/jellyfin/blob/master/Jellyfin.Data/Enums/BaseItemKind.cs
 * @export
 * @enum {string}
 */

export enum BaseItemKind {
	AggregateFolder = 'AggregateFolder',
	Audio = 'Audio',
	AudioBook = 'AudioBook',
	BasePluginFolder = 'BasePluginFolder',
	Book = 'Book',
	BoxSet = 'BoxSet',
	Channel = 'Channel',
	ChannelFolderItem = 'ChannelFolderItem',
	CollectionFolder = 'CollectionFolder',
	Episode = 'Episode',
	Folder = 'Folder',
	Genre = 'Genre',
	ManualPlaylistsFolder = 'ManualPlaylistsFolder',
	Movie = 'Movie',
	LiveTvChannel = 'LiveTvChannel',
	LiveTvProgram = 'LiveTvProgram',
	MusicAlbum = 'MusicAlbum',
	MusicArtist = 'MusicArtist',
	MusicGenre = 'MusicGenre',
	MusicVideo = 'MusicVideo',
	Person = 'Person',
	Photo = 'Photo',
	PhotoAlbum = 'PhotoAlbum',
	Playlist = 'Playlist',
	PlaylistsFolder = 'PlaylistsFolder',
	Program = 'Program',
	Recording = 'Recording',
	Season = 'Season',
	Series = 'Series',
	Studio = 'Studio',
	Trailer = 'Trailer',
	TvChannel = 'TvChannel',
	TvProgram = 'TvProgram',
	UserRootFolder = 'UserRootFolder',
	UserView = 'UserView',
	Video = 'Video',
	Year = 'Year'
}
