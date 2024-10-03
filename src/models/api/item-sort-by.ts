/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

/**
 * An enum representing the item sort by options.
 * References: https://github.com/jellyfin/jellyfin/blob/master/MediaBrowser.Model/Querying/ItemSortBy.cs
 * @export
 * @enum {string}
 */

export enum ItemSortBy {
	AiredEpisodeOrder = 'AiredEpisodeOrder',
	AirTime = 'AirTime',
	Album = 'Album',
	AlbumArtist = 'AlbumArtist',
	Artist = 'Artist',
	CommunityRating = 'CommunityRating',
	CriticRating = 'CriticRating',
	DateCreated = 'DateCreated',
	DateLastContentAdded = 'DateLastContentAdded',
	DatePlayed = 'DatePlayed',
	IsFavoriteOrLiked = 'IsFavoriteOrLiked',
	IsWatchlisted = 'IsWatchlisted',
	IsFolder = 'IsFolder',
	IsPlayed = 'IsPlayed',
	IsUnplayed = 'IsUnplayed',
	Name = 'Name',
	OfficialRating = 'OfficialRating',
	PlayCount = 'PlayCount',
	PremiereDate = 'PremiereDate',
	ProductionYear = 'ProductionYear',
	Random = 'Random',
	Runtime = 'Runtime',
	SeriesDatePlayed = 'SeriesDatePlayed',
	SeriesSortName = 'SeriesSortName',
	SortName = 'SortName',
	StartDate = 'StartDate',
	Studio = 'Studio',
	VideoBitRate = 'VideoBitRate'
}
