/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import { describe, it, expect } from 'vitest';

import { getActivityLogApi, getApiKeyApi, getArtistsApi, getAudioApi, getBackupApi, getBrandingApi, getChannelsApi, getClientLogApi, getCollectionApi, getConfigurationApi, getDashboardApi, getDevicesApi, getDisplayPreferencesApi, getDynamicHlsApi, getEnvironmentApi, getFilterApi, getGenresApi, getHlsSegmentApi, getImageApi, getInstantMixApi, getItemLookupApi, getItemRefreshApi, getItemUpdateApi, getItemsApi, getLibraryApi, getLibraryStructureApi, getLiveTvApi, getLocalizationApi, getLyricsApi, getMediaInfoApi, getMediaSegmentsApi, getMoviesApi, getMusicGenresApi, getPackageApi, getPersonsApi, getPlaylistsApi, getPlaystateApi, getPluginsApi, getQuickConnectApi, getRemoteImageApi, getScheduledTasksApi, getSearchApi, getSessionApi, getStartupApi, getStudiosApi, getSubtitleApi, getSuggestionsApi, getSyncPlayApi, getSystemApi, getTimeSyncApi, getTmdbApi, getTrailersApi, getTrickplayApi, getTvShowsApi, getUniversalAudioApi, getUserApi, getUserLibraryApi, getUserViewsApi, getVideoAttachmentsApi, getVideosApi, getYearsApi } from '..';

import { SERVER_URL, TEST_CLIENT, TEST_DEVICE } from '../../../__helpers__/common';

import { Api } from '../../../api';
import { ActivityLogApi, ApiKeyApi, ArtistsApi, AudioApi, BackupApi, BrandingApi, ChannelsApi, ClientLogApi, CollectionApi, ConfigurationApi, DashboardApi, DevicesApi, DisplayPreferencesApi, DynamicHlsApi, EnvironmentApi, FilterApi, GenresApi, HlsSegmentApi, ImageApi, InstantMixApi, ItemLookupApi, ItemRefreshApi, ItemsApi, ItemUpdateApi, LibraryApi, LibraryStructureApi, LiveTvApi, LocalizationApi, LyricsApi, MediaInfoApi, MediaSegmentsApi, MoviesApi, MusicGenresApi, PackageApi, PersonsApi, PlaylistsApi, PlaystateApi, PluginsApi, QuickConnectApi, RemoteImageApi, ScheduledTasksApi, SearchApi, SessionApi, StartupApi, StudiosApi, SubtitleApi, SuggestionsApi, SyncPlayApi, SystemApi, TimeSyncApi, TmdbApi, TrailersApi, TrickplayApi, TvShowsApi, UniversalAudioApi, UserApi, UserLibraryApi, UserViewsApi, VideoAttachmentsApi, VideosApi, YearsApi } from '../../../generated-client/api';

/**
 * Api helper function tests.
 *
 * @group unit/utils/api
 */
describe('Api Utilities', () => {
	it('get api functions should return api instances', () => {
		const api = new Api(SERVER_URL, TEST_CLIENT, TEST_DEVICE);

		expect(getActivityLogApi(api)).toBeInstanceOf(ActivityLogApi);
		expect(getApiKeyApi(api)).toBeInstanceOf(ApiKeyApi);
		expect(getArtistsApi(api)).toBeInstanceOf(ArtistsApi);
		expect(getAudioApi(api)).toBeInstanceOf(AudioApi);
		expect(getBackupApi(api)).toBeInstanceOf(BackupApi);
		expect(getBrandingApi(api)).toBeInstanceOf(BrandingApi);
		expect(getChannelsApi(api)).toBeInstanceOf(ChannelsApi);
		expect(getClientLogApi(api)).toBeInstanceOf(ClientLogApi);
		expect(getCollectionApi(api)).toBeInstanceOf(CollectionApi);
		expect(getConfigurationApi(api)).toBeInstanceOf(ConfigurationApi);
		expect(getDashboardApi(api)).toBeInstanceOf(DashboardApi);
		expect(getDevicesApi(api)).toBeInstanceOf(DevicesApi);
		expect(getDisplayPreferencesApi(api)).toBeInstanceOf(DisplayPreferencesApi);
		expect(getDynamicHlsApi(api)).toBeInstanceOf(DynamicHlsApi);
		expect(getEnvironmentApi(api)).toBeInstanceOf(EnvironmentApi);
		expect(getFilterApi(api)).toBeInstanceOf(FilterApi);
		expect(getGenresApi(api)).toBeInstanceOf(GenresApi);
		expect(getHlsSegmentApi(api)).toBeInstanceOf(HlsSegmentApi);
		expect(getImageApi(api)).toBeInstanceOf(ImageApi);
		expect(getInstantMixApi(api)).toBeInstanceOf(InstantMixApi);
		expect(getItemLookupApi(api)).toBeInstanceOf(ItemLookupApi);
		expect(getItemRefreshApi(api)).toBeInstanceOf(ItemRefreshApi);
		expect(getItemUpdateApi(api)).toBeInstanceOf(ItemUpdateApi);
		expect(getItemsApi(api)).toBeInstanceOf(ItemsApi);
		expect(getLibraryApi(api)).toBeInstanceOf(LibraryApi);
		expect(getLibraryStructureApi(api)).toBeInstanceOf(LibraryStructureApi);
		expect(getLiveTvApi(api)).toBeInstanceOf(LiveTvApi);
		expect(getLocalizationApi(api)).toBeInstanceOf(LocalizationApi);
		expect(getLyricsApi(api)).toBeInstanceOf(LyricsApi);
		expect(getMediaInfoApi(api)).toBeInstanceOf(MediaInfoApi);
		expect(getMediaSegmentsApi(api)).toBeInstanceOf(MediaSegmentsApi);
		expect(getMoviesApi(api)).toBeInstanceOf(MoviesApi);
		expect(getMusicGenresApi(api)).toBeInstanceOf(MusicGenresApi);
		expect(getPackageApi(api)).toBeInstanceOf(PackageApi);
		expect(getPersonsApi(api)).toBeInstanceOf(PersonsApi);
		expect(getPlaylistsApi(api)).toBeInstanceOf(PlaylistsApi);
		expect(getPlaystateApi(api)).toBeInstanceOf(PlaystateApi);
		expect(getPluginsApi(api)).toBeInstanceOf(PluginsApi);
		expect(getQuickConnectApi(api)).toBeInstanceOf(QuickConnectApi);
		expect(getRemoteImageApi(api)).toBeInstanceOf(RemoteImageApi);
		expect(getScheduledTasksApi(api)).toBeInstanceOf(ScheduledTasksApi);
		expect(getSearchApi(api)).toBeInstanceOf(SearchApi);
		expect(getSessionApi(api)).toBeInstanceOf(SessionApi);
		expect(getStartupApi(api)).toBeInstanceOf(StartupApi);
		expect(getStudiosApi(api)).toBeInstanceOf(StudiosApi);
		expect(getSubtitleApi(api)).toBeInstanceOf(SubtitleApi);
		expect(getSuggestionsApi(api)).toBeInstanceOf(SuggestionsApi);
		expect(getSyncPlayApi(api)).toBeInstanceOf(SyncPlayApi);
		expect(getSystemApi(api)).toBeInstanceOf(SystemApi);
		expect(getTimeSyncApi(api)).toBeInstanceOf(TimeSyncApi);
		expect(getTmdbApi(api)).toBeInstanceOf(TmdbApi);
		expect(getTrailersApi(api)).toBeInstanceOf(TrailersApi);
		expect(getTrickplayApi(api)).toBeInstanceOf(TrickplayApi);
		expect(getTvShowsApi(api)).toBeInstanceOf(TvShowsApi);
		expect(getUniversalAudioApi(api)).toBeInstanceOf(UniversalAudioApi);
		expect(getUserApi(api)).toBeInstanceOf(UserApi);
		expect(getUserLibraryApi(api)).toBeInstanceOf(UserLibraryApi);
		expect(getUserViewsApi(api)).toBeInstanceOf(UserViewsApi);
		expect(getVideoAttachmentsApi(api)).toBeInstanceOf(VideoAttachmentsApi);
		expect(getVideosApi(api)).toBeInstanceOf(VideosApi);
		expect(getYearsApi(api)).toBeInstanceOf(YearsApi);
	});
});
