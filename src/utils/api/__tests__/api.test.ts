/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import { SERVER_URL, TEST_CLIENT, TEST_DEVICE } from '../../../__helpers__/common';

import { Api } from '../../../api';
import { ActivityLogApi, ApiKeyApi, ArtistsApi, AudioApi, BrandingApi, ChannelsApi, CollectionApi, ConfigurationApi, DashboardApi, DevicesApi, DisplayPreferencesApi, DlnaApi, DlnaServerApi, DynamicHlsApi, EnvironmentApi, FilterApi, GenresApi, HlsSegmentApi, ImageApi, ImageByNameApi, InstantMixApi, ItemLookupApi, ItemRefreshApi, ItemsApi, ItemUpdateApi, LibraryApi, LibraryStructureApi, LiveTvApi, LocalizationApi, MediaInfoApi, MoviesApi, MusicGenresApi, NotificationsApi, PackageApi, PersonsApi, PlaylistsApi, PlaystateApi, PluginsApi, QuickConnectApi, RemoteImageApi, ScheduledTasksApi, SearchApi, SessionApi, StartupApi, StudiosApi, SubtitleApi, SuggestionsApi, SyncPlayApi, SystemApi, TimeSyncApi, TrailersApi, TvShowsApi, UniversalAudioApi, UserApi, UserLibraryApi, UserViewsApi, VideoAttachmentsApi, VideoHlsApi, VideosApi, YearsApi } from '../../../generated-client/api';
import { getActivityLogApi } from '../activity-log-api';
import { getApiKeyApi } from '../api-key-api';
import { getArtistsApi } from '../artists-api';
import { getAudioApi } from '../audio-api';
import { getBrandingApi } from '../branding-api';
import { getChannelsApi } from '../channels-api';
import { getCollectionApi } from '../collection-api';
import { getConfigurationApi } from '../configuration-api';
import { getDashboardApi } from '../dashboard-api';
import { getDevicesApi } from '../devices-api';
import { getDisplayPreferencesApi } from '../display-preferences-api';
import { getDlnaApi } from '../dlna-api';
import { getDlnaServerApi } from '../dlna-server-api';
import { getDynamicHlsApi } from '../dynamic-hls-api';
import { getEnvironmentApi } from '../environment-api';
import { getFilterApi } from '../filter-api';
import { getGenresApi } from '../genres-api';
import { getHlsSegmentApi } from '../hls-segment-api';
import { getImageApi } from '../image-api';
import { getImageByNameApi } from '../image-by-name-api';
import { getInstantMixApi } from '../instant-mix-api';
import { getItemLookupApi } from '../item-lookup-api';
import { getItemRefreshApi } from '../item-refresh-api';
import { getItemUpdateApi } from '../item-update-api';
import { getItemsApi } from '../items-api';
import { getLibraryApi } from '../library-api';
import { getLibraryStructureApi } from '../library-structure-api';
import { getLiveTvApi } from '../live-tv-api';
import { getLocalizationApi } from '../localization-api';
import { getMediaInfoApi } from '../media-info-api';
import { getMoviesApi } from '../movies-api';
import { getMusicGenresApi } from '../music-genres-api';
import { getNotificationsApi } from '../notifications-api';
import { getPackageApi } from '../package-api';
import { getPersonsApi } from '../persons-api';
import { getPlaylistsApi } from '../playlists-api';
import { getPlaystateApi } from '../playstate-api';
import { getPluginsApi } from '../plugins-api';
import { getQuickConnectApi } from '../quick-connect-api';
import { getRemoteImageApi } from '../remote-image-api';
import { getScheduledTasksApi } from '../scheduled-tasks-api';
import { getSearchApi } from '../search-api';
import { getSessionApi } from '../session-api';
import { getStartupApi } from '../startup-api';
import { getStudiosApi } from '../studios-api';
import { getSubtitleApi } from '../subtitle-api';
import { getSuggestionsApi } from '../suggestions-api';
import { getSyncPlayApi } from '../sync-play-api';
import { getSystemApi } from '../system-api';
import { getTimeSyncApi } from '../time-sync-api';
import { getTrailersApi } from '../trailers-api';
import { getTvShowsApi } from '../tv-shows-api';
import { getUniversalAudioApi } from '../universal-audio-api';
import { getUserApi } from '../user-api';
import { getUserLibraryApi } from '../user-library-api';
import { getUserViewsApi } from '../user-views-api';
import { getVideoAttachmentsApi } from '../video-attachments-api';
import { getVideoHlsApi } from '../video-hls-api';
import { getVideosApi } from '../videos-api';
import { getYearsApi } from '../years-api';

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
		expect(getBrandingApi(api)).toBeInstanceOf(BrandingApi);
		expect(getChannelsApi(api)).toBeInstanceOf(ChannelsApi);
		expect(getCollectionApi(api)).toBeInstanceOf(CollectionApi);
		expect(getConfigurationApi(api)).toBeInstanceOf(ConfigurationApi);
		expect(getDashboardApi(api)).toBeInstanceOf(DashboardApi);
		expect(getDevicesApi(api)).toBeInstanceOf(DevicesApi);
		expect(getDisplayPreferencesApi(api)).toBeInstanceOf(DisplayPreferencesApi);
		expect(getDlnaApi(api)).toBeInstanceOf(DlnaApi);
		expect(getDlnaServerApi(api)).toBeInstanceOf(DlnaServerApi);
		expect(getDynamicHlsApi(api)).toBeInstanceOf(DynamicHlsApi);
		expect(getEnvironmentApi(api)).toBeInstanceOf(EnvironmentApi);
		expect(getFilterApi(api)).toBeInstanceOf(FilterApi);
		expect(getGenresApi(api)).toBeInstanceOf(GenresApi);
		expect(getHlsSegmentApi(api)).toBeInstanceOf(HlsSegmentApi);
		expect(getImageApi(api)).toBeInstanceOf(ImageApi);
		expect(getImageByNameApi(api)).toBeInstanceOf(ImageByNameApi);
		expect(getInstantMixApi(api)).toBeInstanceOf(InstantMixApi);
		expect(getItemLookupApi(api)).toBeInstanceOf(ItemLookupApi);
		expect(getItemRefreshApi(api)).toBeInstanceOf(ItemRefreshApi);
		expect(getItemUpdateApi(api)).toBeInstanceOf(ItemUpdateApi);
		expect(getItemsApi(api)).toBeInstanceOf(ItemsApi);
		expect(getLibraryApi(api)).toBeInstanceOf(LibraryApi);
		expect(getLibraryStructureApi(api)).toBeInstanceOf(LibraryStructureApi);
		expect(getLiveTvApi(api)).toBeInstanceOf(LiveTvApi);
		expect(getLocalizationApi(api)).toBeInstanceOf(LocalizationApi);
		expect(getMediaInfoApi(api)).toBeInstanceOf(MediaInfoApi);
		expect(getMoviesApi(api)).toBeInstanceOf(MoviesApi);
		expect(getMusicGenresApi(api)).toBeInstanceOf(MusicGenresApi);
		expect(getNotificationsApi(api)).toBeInstanceOf(NotificationsApi);
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
		expect(getTrailersApi(api)).toBeInstanceOf(TrailersApi);
		expect(getTvShowsApi(api)).toBeInstanceOf(TvShowsApi);
		expect(getUniversalAudioApi(api)).toBeInstanceOf(UniversalAudioApi);
		expect(getUserApi(api)).toBeInstanceOf(UserApi);
		expect(getUserLibraryApi(api)).toBeInstanceOf(UserLibraryApi);
		expect(getUserViewsApi(api)).toBeInstanceOf(UserViewsApi);
		expect(getVideoAttachmentsApi(api)).toBeInstanceOf(VideoAttachmentsApi);
		expect(getVideoHlsApi(api)).toBeInstanceOf(VideoHlsApi);
		expect(getVideosApi(api)).toBeInstanceOf(VideosApi);
		expect(getYearsApi(api)).toBeInstanceOf(YearsApi);
	});
});
