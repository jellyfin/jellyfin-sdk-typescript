/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import { describe, expect, it, vi } from 'vitest';

import { SERVER_URL, TEST_CLIENT, TEST_DEVICE } from '../../../__helpers__/common';
import { Api } from '../../../api';
import { BaseItemKind } from '../../../generated-client';
import { ItemLookupApi } from '../../../generated-client/api/item-lookup-api';
import { getItemLookupApi } from '../item-lookup-api';

vi.mock('../../../generated-client/api/item-lookup-api');
const MockItemLookupApi = vi.mocked(ItemLookupApi);

const getSearchInfo = (name: string) => ({ SearchInfo: { Name: name } });

describe('ItemLookupApi', () => {
	it('should call the appropriate method when remoteSearch is called', () => {
		const api = new Api(SERVER_URL, TEST_CLIENT, TEST_DEVICE);
		const itemLookupApi = getItemLookupApi(api);

		let info = getSearchInfo(BaseItemKind.Book);
		itemLookupApi.remoteSearch(BaseItemKind.Book, info);
		expect(MockItemLookupApi.prototype.getBookRemoteSearchResults).toHaveBeenCalledWith({ bookInfoRemoteSearchQuery: info });

		info = getSearchInfo(BaseItemKind.BoxSet);
		itemLookupApi.remoteSearch(BaseItemKind.BoxSet, info);
		expect(MockItemLookupApi.prototype.getBoxSetRemoteSearchResults).toHaveBeenCalledWith({ boxSetInfoRemoteSearchQuery: info });

		info = getSearchInfo(BaseItemKind.Movie);
		itemLookupApi.remoteSearch(BaseItemKind.Movie, info);
		expect(MockItemLookupApi.prototype.getMovieRemoteSearchResults).toHaveBeenCalledWith({ movieInfoRemoteSearchQuery: info });

		info = getSearchInfo(BaseItemKind.MusicAlbum);
		itemLookupApi.remoteSearch(BaseItemKind.MusicAlbum, info);
		expect(MockItemLookupApi.prototype.getMusicAlbumRemoteSearchResults).toHaveBeenCalledWith({ albumInfoRemoteSearchQuery: info });

		info = getSearchInfo(BaseItemKind.MusicArtist);
		itemLookupApi.remoteSearch(BaseItemKind.MusicArtist, info);
		expect(MockItemLookupApi.prototype.getMusicArtistRemoteSearchResults).toHaveBeenCalledWith({ artistInfoRemoteSearchQuery: info });

		info = getSearchInfo(BaseItemKind.MusicVideo);
		itemLookupApi.remoteSearch(BaseItemKind.MusicVideo, info);
		expect(MockItemLookupApi.prototype.getMusicVideoRemoteSearchResults).toHaveBeenCalledWith({ musicVideoInfoRemoteSearchQuery: info });

		info = getSearchInfo(BaseItemKind.Person);
		itemLookupApi.remoteSearch(BaseItemKind.Person, info);
		expect(MockItemLookupApi.prototype.getPersonRemoteSearchResults).toHaveBeenCalledWith({ personLookupInfoRemoteSearchQuery: info });

		info = getSearchInfo(BaseItemKind.Series);
		itemLookupApi.remoteSearch(BaseItemKind.Series, info);
		expect(MockItemLookupApi.prototype.getSeriesRemoteSearchResults).toHaveBeenCalledWith({ seriesInfoRemoteSearchQuery: info });

		info = getSearchInfo(BaseItemKind.Trailer);
		itemLookupApi.remoteSearch(BaseItemKind.Trailer, info);
		expect(MockItemLookupApi.prototype.getTrailerRemoteSearchResults).toHaveBeenCalledWith({ trailerInfoRemoteSearchQuery: info });
	});
});
