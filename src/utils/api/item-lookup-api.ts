/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import type { Api } from '../../api';
import { ItemLookupApi } from '../../generated-client/api/item-lookup-api';
import type { AlbumInfoRemoteSearchQuery } from '../../generated-client/models/album-info-remote-search-query';
import type { ArtistInfoRemoteSearchQuery } from '../../generated-client/models/artist-info-remote-search-query';
import { BaseItemKind } from '../../generated-client/models/base-item-kind';
import type { BookInfoRemoteSearchQuery } from '../../generated-client/models/book-info-remote-search-query';
import type { BoxSetInfoRemoteSearchQuery } from '../../generated-client/models/box-set-info-remote-search-query';
import type { MovieInfoRemoteSearchQuery } from '../../generated-client/models/movie-info-remote-search-query';
import type { MusicVideoInfoRemoteSearchQuery } from '../../generated-client/models/music-video-info-remote-search-query';
import type { PersonLookupInfoRemoteSearchQuery } from '../../generated-client/models/person-lookup-info-remote-search-query';
import type { SeriesInfoRemoteSearchQuery } from '../../generated-client/models/series-info-remote-search-query';
import type { TrailerInfoRemoteSearchQuery } from '../../generated-client/models/trailer-info-remote-search-query';

type RemoteSearchArgs =
	| [typeof BaseItemKind.Book, BookInfoRemoteSearchQuery]
	| [typeof BaseItemKind.BoxSet, BoxSetInfoRemoteSearchQuery]
	| [typeof BaseItemKind.Movie, MovieInfoRemoteSearchQuery]
	| [typeof BaseItemKind.MusicAlbum, AlbumInfoRemoteSearchQuery]
	| [typeof BaseItemKind.MusicArtist, ArtistInfoRemoteSearchQuery]
	| [typeof BaseItemKind.MusicVideo, MusicVideoInfoRemoteSearchQuery]
	| [typeof BaseItemKind.Person, PersonLookupInfoRemoteSearchQuery]
	| [typeof BaseItemKind.Series, SeriesInfoRemoteSearchQuery]
	| [typeof BaseItemKind.Trailer, TrailerInfoRemoteSearchQuery];

class AugmentedItemLookupApi extends ItemLookupApi {
	/**
	 * Performs a remote search for the given item kind and query using the provided API.
	 * @param itemKind - The kind of item to search for.
	 * @param query - The search query to use.
	 * @returns A promise that resolves to the search results.
	 */
	public remoteSearch(...[itemKind, query]: RemoteSearchArgs) {
		switch (itemKind) {
			case BaseItemKind.Book:
				return this.getBookRemoteSearchResults({
					bookInfoRemoteSearchQuery: query
				});
			case BaseItemKind.BoxSet:
				return this.getBoxSetRemoteSearchResults({
					boxSetInfoRemoteSearchQuery: query
				});
			case BaseItemKind.Movie:
				return this.getMovieRemoteSearchResults({
					movieInfoRemoteSearchQuery: query
				});
			case BaseItemKind.MusicAlbum:
				return this.getMusicAlbumRemoteSearchResults({
					albumInfoRemoteSearchQuery: query
				});
			case BaseItemKind.MusicArtist:
				return this.getMusicArtistRemoteSearchResults({
					artistInfoRemoteSearchQuery: query
				});
			case BaseItemKind.MusicVideo:
				return this.getMusicVideoRemoteSearchResults({
					musicVideoInfoRemoteSearchQuery: query
				});
			case BaseItemKind.Person:
				return this.getPersonRemoteSearchResults({
					personLookupInfoRemoteSearchQuery: query
				});
			case BaseItemKind.Series:
				return this.getSeriesRemoteSearchResults({
					seriesInfoRemoteSearchQuery: query
				});
			case BaseItemKind.Trailer:
				return this.getTrailerRemoteSearchResults({
					trailerInfoRemoteSearchQuery: query
				});
		}

		throw new Error(`Unsupported base item kind: ${String(itemKind)}`);
	}
}

export function getItemLookupApi(api: Api) {
	return new AugmentedItemLookupApi(api.configuration, undefined, api.axiosInstance);
}
