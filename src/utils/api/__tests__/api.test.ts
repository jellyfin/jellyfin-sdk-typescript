/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import { describe, it, expect } from 'vitest';

import { getArtistApi, getAudioApi, getAuthenticationApi, getBackupApi, getBrandingApi, getChannelApi, getCollectionApi, getDeviceApi, getDisplayPreferenceApi, getEnvironmentApi, getFilterApi, getGenreApi, getImageApi, getInstantMixApi, getItemLookupApi, getItemUpdateApi, getLibraryApi, getLibraryStructureApi, getLiveTvApi, getLocalizationApi, getLyricApi, getMediaInfoApi, getMediaSegmentApi, getMovieApi, getMusicGenreApi, getPersonApi, getPlaylistApi, getPluginApi, getRemoteImageApi, getScheduledTaskApi, getSearchApi, getSessionApi, getShowApi, getStartupApi, getStudioApi, getSubtitleApi, getSuggestionApi, getSyncPlayApi, getSystemApi, getTrailerApi, getTrickPlayApi, getUserApi, getUserDataApi, getUserViewApi, getVideoApi, getYearApi } from '..';

import { SERVER_URL, TEST_CLIENT, TEST_DEVICE } from '../../../__helpers__/common';

import { Api } from '../../../api';
import { ArtistApi, AudioApi, AuthenticationApi, BackupApi, BrandingApi, ChannelApi, CollectionApi, DeviceApi, DisplayPreferenceApi, EnvironmentApi, FilterApi, GenreApi, ImageApi, InstantMixApi, ItemLookupApi, ItemUpdateApi, LibraryApi, LibraryStructureApi, LiveTvApi, LocalizationApi, LyricApi, MediaInfoApi, MediaSegmentApi, MovieApi, MusicGenreApi, PersonApi, PlaylistApi, PluginApi, RemoteImageApi, ScheduledTaskApi, SearchApi, SessionApi, ShowApi, StartupApi, StudioApi, SubtitleApi, SuggestionApi, SyncPlayApi, SystemApi, TrailerApi, TrickPlayApi, UserApi, UserDataApi, UserViewApi, VideoApi, YearApi } from '../../../generated-client/api';

/**
 * Api helper function tests.
 *
 * @group unit/utils/api
 */
describe('Api Utilities', () => {
	it('get api functions should return api instances', () => {
		const api = new Api(SERVER_URL, TEST_CLIENT, TEST_DEVICE);

		expect(getArtistApi(api)).toBeInstanceOf(ArtistApi);
		expect(getAudioApi(api)).toBeInstanceOf(AudioApi);
		expect(getAuthenticationApi(api)).toBeInstanceOf(AuthenticationApi);
		expect(getBackupApi(api)).toBeInstanceOf(BackupApi);
		expect(getBrandingApi(api)).toBeInstanceOf(BrandingApi);
		expect(getChannelApi(api)).toBeInstanceOf(ChannelApi);
		expect(getCollectionApi(api)).toBeInstanceOf(CollectionApi);
		expect(getDeviceApi(api)).toBeInstanceOf(DeviceApi);
		expect(getDisplayPreferenceApi(api)).toBeInstanceOf(DisplayPreferenceApi);
		expect(getEnvironmentApi(api)).toBeInstanceOf(EnvironmentApi);
		expect(getFilterApi(api)).toBeInstanceOf(FilterApi);
		expect(getGenreApi(api)).toBeInstanceOf(GenreApi);
		expect(getImageApi(api)).toBeInstanceOf(ImageApi);
		expect(getInstantMixApi(api)).toBeInstanceOf(InstantMixApi);
		expect(getItemLookupApi(api)).toBeInstanceOf(ItemLookupApi);
		expect(getItemUpdateApi(api)).toBeInstanceOf(ItemUpdateApi);
		expect(getLibraryApi(api)).toBeInstanceOf(LibraryApi);
		expect(getLibraryStructureApi(api)).toBeInstanceOf(LibraryStructureApi);
		expect(getLiveTvApi(api)).toBeInstanceOf(LiveTvApi);
		expect(getLocalizationApi(api)).toBeInstanceOf(LocalizationApi);
		expect(getLyricApi(api)).toBeInstanceOf(LyricApi);
		expect(getMediaInfoApi(api)).toBeInstanceOf(MediaInfoApi);
		expect(getMediaSegmentApi(api)).toBeInstanceOf(MediaSegmentApi);
		expect(getMovieApi(api)).toBeInstanceOf(MovieApi);
		expect(getMusicGenreApi(api)).toBeInstanceOf(MusicGenreApi);
		expect(getPersonApi(api)).toBeInstanceOf(PersonApi);
		expect(getPlaylistApi(api)).toBeInstanceOf(PlaylistApi);
		expect(getPluginApi(api)).toBeInstanceOf(PluginApi);
		expect(getRemoteImageApi(api)).toBeInstanceOf(RemoteImageApi);
		expect(getScheduledTaskApi(api)).toBeInstanceOf(ScheduledTaskApi);
		expect(getSearchApi(api)).toBeInstanceOf(SearchApi);
		expect(getSessionApi(api)).toBeInstanceOf(SessionApi);
		expect(getShowApi(api)).toBeInstanceOf(ShowApi);
		expect(getStartupApi(api)).toBeInstanceOf(StartupApi);
		expect(getStudioApi(api)).toBeInstanceOf(StudioApi);
		expect(getSubtitleApi(api)).toBeInstanceOf(SubtitleApi);
		expect(getSuggestionApi(api)).toBeInstanceOf(SuggestionApi);
		expect(getSyncPlayApi(api)).toBeInstanceOf(SyncPlayApi);
		expect(getSystemApi(api)).toBeInstanceOf(SystemApi);
		expect(getTrailerApi(api)).toBeInstanceOf(TrailerApi);
		expect(getTrickPlayApi(api)).toBeInstanceOf(TrickPlayApi);
		expect(getUserApi(api)).toBeInstanceOf(UserApi);
		expect(getUserDataApi(api)).toBeInstanceOf(UserDataApi);
		expect(getUserViewApi(api)).toBeInstanceOf(UserViewApi);
		expect(getVideoApi(api)).toBeInstanceOf(VideoApi);
		expect(getYearApi(api)).toBeInstanceOf(YearApi);
	});
});
