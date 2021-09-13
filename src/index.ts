import globalInstance from 'axios';

import { ActivityLogApi, ApiKeyApi, ArtistsApi, AudioApi, BrandingApi, ChannelsApi, CollectionApi, Configuration, ConfigurationApi, DashboardApi, DevicesApi, DisplayPreferencesApi, DlnaApi, DlnaServerApi, DynamicHlsApi, EnvironmentApi, FilterApi, GenresApi, HlsSegmentApi, ImageApi, ImageByNameApi, InstantMixApi, ItemLookupApi, ItemRefreshApi, ItemsApi, ItemUpdateApi, LibraryApi, LibraryStructureApi, LiveTvApi, LocalizationApi, MediaInfoApi, MoviesApi, MusicGenresApi, NotificationsApi, PackageApi, PersonsApi, PlaylistsApi, PlaystateApi, PluginsApi, QuickConnectApi, RemoteImageApi, ScheduledTasksApi, SearchApi, SessionApi, StartupApi, StudiosApi, SubtitleApi, SuggestionsApi, SyncPlayApi, SystemApi, TimeSyncApi, TrailersApi, TvShowsApi, UniversalAudioApi, UserApi, UserLibraryApi, UserViewsApi, VideoAttachmentsApi, VideoHlsApi, VideosApi, YearsApi } from './generated-client';

export class Jellyfin {
	configuration;
	axiosInstance;

	constructor(configuration = new Configuration(), axiosInstance = globalInstance) {
		this.configuration = configuration;
		this.axiosInstance = axiosInstance;
	}

	get activityLogApi(): ActivityLogApi {
		return new ActivityLogApi(this.configuration, undefined, this.axiosInstance);
	}

	get apiKeyApi(): ApiKeyApi {
		return new ApiKeyApi(this.configuration, undefined, this.axiosInstance);
	}

	get artistsApi(): ArtistsApi {
		return new ArtistsApi(this.configuration, undefined, this.axiosInstance);
	}

	get audioApi(): AudioApi {
		return new AudioApi(this.configuration, undefined, this.axiosInstance);
	}

	get brandingApi(): BrandingApi {
		return new BrandingApi(this.configuration, undefined, this.axiosInstance);
	}

	get channelsApi(): ChannelsApi {
		return new ChannelsApi(this.configuration, undefined, this.axiosInstance);
	}

	get collectionApi(): CollectionApi {
		return new CollectionApi(this.configuration, undefined, this.axiosInstance);
	}

	get configurationApi(): ConfigurationApi {
		return new ConfigurationApi(this.configuration, undefined, this.axiosInstance);
	}

	get dashboardApi(): DashboardApi {
		return new DashboardApi(this.configuration, undefined, this.axiosInstance);
	}

	get devicesApi(): DevicesApi {
		return new DevicesApi(this.configuration, undefined, this.axiosInstance);
	}

	get displayPreferencesApi(): DisplayPreferencesApi {
		return new DisplayPreferencesApi(this.configuration, undefined, this.axiosInstance);
	}

	get dlnaApi(): DlnaApi {
		return new DlnaApi(this.configuration, undefined, this.axiosInstance);
	}

	get dlnaServerApi(): DlnaServerApi {
		return new DlnaServerApi(this.configuration, undefined, this.axiosInstance);
	}

	get dynamicHlsApi(): DynamicHlsApi {
		return new DynamicHlsApi(this.configuration, undefined, this.axiosInstance);
	}

	get environmentApi(): EnvironmentApi {
		return new EnvironmentApi(this.configuration, undefined, this.axiosInstance);
	}

	get filterApi(): FilterApi {
		return new FilterApi(this.configuration, undefined, this.axiosInstance);
	}

	get genresApi(): GenresApi {
		return new GenresApi(this.configuration, undefined, this.axiosInstance);
	}

	get hlsSegmentApi(): HlsSegmentApi {
		return new HlsSegmentApi(this.configuration, undefined, this.axiosInstance);
	}

	get imageApi(): ImageApi {
		return new ImageApi(this.configuration, undefined, this.axiosInstance);
	}

	get imageByNameApi(): ImageByNameApi {
		return new ImageByNameApi(this.configuration, undefined, this.axiosInstance);
	}

	get instantMixApi(): InstantMixApi {
		return new InstantMixApi(this.configuration, undefined, this.axiosInstance);
	}

	get itemLookupApi(): ItemLookupApi {
		return new ItemLookupApi(this.configuration, undefined, this.axiosInstance);
	}

	get itemRefreshApi(): ItemRefreshApi {
		return new ItemRefreshApi(this.configuration, undefined, this.axiosInstance);
	}

	get itemUpdateApi(): ItemUpdateApi {
		return new ItemUpdateApi(this.configuration, undefined, this.axiosInstance);
	}

	get itemsApi(): ItemsApi {
		return new ItemsApi(this.configuration, undefined, this.axiosInstance);
	}

	get libraryApi(): LibraryApi {
		return new LibraryApi(this.configuration, undefined, this.axiosInstance);
	}

	get libraryStructureApi(): LibraryStructureApi {
		return new LibraryStructureApi(this.configuration, undefined, this.axiosInstance);
	}

	get liveTvApi(): LiveTvApi {
		return new LiveTvApi(this.configuration, undefined, this.axiosInstance);
	}

	get localizationApi(): LocalizationApi {
		return new LocalizationApi(this.configuration, undefined, this.axiosInstance);
	}

	get mediaInfoApi(): MediaInfoApi {
		return new MediaInfoApi(this.configuration, undefined, this.axiosInstance);
	}

	get moviesApi(): MoviesApi {
		return new MoviesApi(this.configuration, undefined, this.axiosInstance);
	}

	get musicGenresApi(): MusicGenresApi {
		return new MusicGenresApi(this.configuration, undefined, this.axiosInstance);
	}

	get notificationsApi(): NotificationsApi {
		return new NotificationsApi(this.configuration, undefined, this.axiosInstance);
	}

	get packageApi(): PackageApi {
		return new PackageApi(this.configuration, undefined, this.axiosInstance);
	}

	get personsApi(): PersonsApi {
		return new PersonsApi(this.configuration, undefined, this.axiosInstance);
	}

	get playlistsApi(): PlaylistsApi {
		return new PlaylistsApi(this.configuration, undefined, this.axiosInstance);
	}

	get playstateApi(): PlaystateApi {
		return new PlaystateApi(this.configuration, undefined, this.axiosInstance);
	}

	get pluginsApi(): PluginsApi {
		return new PluginsApi(this.configuration, undefined, this.axiosInstance);
	}

	get quickConnectApi(): QuickConnectApi {
		return new QuickConnectApi(this.configuration, undefined, this.axiosInstance);
	}

	get remoteImageApi(): RemoteImageApi {
		return new RemoteImageApi(this.configuration, undefined, this.axiosInstance);
	}

	get scheduledTasksApi(): ScheduledTasksApi {
		return new ScheduledTasksApi(this.configuration, undefined, this.axiosInstance);
	}

	get searchApi(): SearchApi {
		return new SearchApi(this.configuration, undefined, this.axiosInstance);
	}

	get sessionApi(): SessionApi {
		return new SessionApi(this.configuration, undefined, this.axiosInstance);
	}

	get startupApi(): StartupApi {
		return new StartupApi(this.configuration, undefined, this.axiosInstance);
	}

	get studiosApi(): StudiosApi {
		return new StudiosApi(this.configuration, undefined, this.axiosInstance);
	}

	get subtitleApi(): SubtitleApi {
		return new SubtitleApi(this.configuration, undefined, this.axiosInstance);
	}

	get suggestionsApi(): SuggestionsApi {
		return new SuggestionsApi(this.configuration, undefined, this.axiosInstance);
	}

	get syncPlayApi(): SyncPlayApi {
		return new SyncPlayApi(this.configuration, undefined, this.axiosInstance);
	}

	get systemApi(): SystemApi {
		return new SystemApi(this.configuration, undefined, this.axiosInstance);
	}

	get timeSyncApi(): TimeSyncApi {
		return new TimeSyncApi(this.configuration, undefined, this.axiosInstance);
	}

	get trailersApi(): TrailersApi {
		return new TrailersApi(this.configuration, undefined, this.axiosInstance);
	}

	get tvShowsApi(): TvShowsApi {
		return new TvShowsApi(this.configuration, undefined, this.axiosInstance);
	}

	get universalAudioApi(): UniversalAudioApi {
		return new UniversalAudioApi(this.configuration, undefined, this.axiosInstance);
	}

	get userApi(): UserApi {
		return new UserApi(this.configuration, undefined, this.axiosInstance);
	}

	get userLibraryApi(): UserLibraryApi {
		return new UserLibraryApi(this.configuration, undefined, this.axiosInstance);
	}

	get userViewsApi(): UserViewsApi {
		return new UserViewsApi(this.configuration, undefined, this.axiosInstance);
	}

	get videoAttachmentsApi(): VideoAttachmentsApi {
		return new VideoAttachmentsApi(this.configuration, undefined, this.axiosInstance);
	}

	get videoHlsApi(): VideoHlsApi {
		return new VideoHlsApi(this.configuration, undefined, this.axiosInstance);
	}

	get videosApi(): VideosApi {
		return new VideosApi(this.configuration, undefined, this.axiosInstance);
	}

	get yearsApi(): YearsApi {
		return new YearsApi(this.configuration, undefined, this.axiosInstance);
	}
}
