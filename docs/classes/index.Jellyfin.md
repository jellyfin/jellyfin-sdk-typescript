[jellyfin-sdk-typescript](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / Jellyfin

# Class: Jellyfin

[index](../modules/index.md).Jellyfin

## Table of contents

### Constructors

- [constructor](index.Jellyfin.md#constructor)

### Properties

- [axiosInstance](index.Jellyfin.md#axiosinstance)
- [clientInfo](index.Jellyfin.md#clientinfo)
- [configuration](index.Jellyfin.md#configuration)
- [deviceInfo](index.Jellyfin.md#deviceinfo)
- [token](index.Jellyfin.md#token)

### Accessors

- [activityLogApi](index.Jellyfin.md#activitylogapi)
- [apiKeyApi](index.Jellyfin.md#apikeyapi)
- [artistsApi](index.Jellyfin.md#artistsapi)
- [audioApi](index.Jellyfin.md#audioapi)
- [authorizationHeader](index.Jellyfin.md#authorizationheader)
- [brandingApi](index.Jellyfin.md#brandingapi)
- [channelsApi](index.Jellyfin.md#channelsapi)
- [collectionApi](index.Jellyfin.md#collectionapi)
- [configurationApi](index.Jellyfin.md#configurationapi)
- [dashboardApi](index.Jellyfin.md#dashboardapi)
- [devicesApi](index.Jellyfin.md#devicesapi)
- [displayPreferencesApi](index.Jellyfin.md#displaypreferencesapi)
- [dlnaApi](index.Jellyfin.md#dlnaapi)
- [dlnaServerApi](index.Jellyfin.md#dlnaserverapi)
- [dynamicHlsApi](index.Jellyfin.md#dynamichlsapi)
- [environmentApi](index.Jellyfin.md#environmentapi)
- [filterApi](index.Jellyfin.md#filterapi)
- [genresApi](index.Jellyfin.md#genresapi)
- [hlsSegmentApi](index.Jellyfin.md#hlssegmentapi)
- [imageApi](index.Jellyfin.md#imageapi)
- [imageByNameApi](index.Jellyfin.md#imagebynameapi)
- [instantMixApi](index.Jellyfin.md#instantmixapi)
- [itemLookupApi](index.Jellyfin.md#itemlookupapi)
- [itemRefreshApi](index.Jellyfin.md#itemrefreshapi)
- [itemUpdateApi](index.Jellyfin.md#itemupdateapi)
- [itemsApi](index.Jellyfin.md#itemsapi)
- [libraryApi](index.Jellyfin.md#libraryapi)
- [libraryStructureApi](index.Jellyfin.md#librarystructureapi)
- [liveTvApi](index.Jellyfin.md#livetvapi)
- [localizationApi](index.Jellyfin.md#localizationapi)
- [mediaInfoApi](index.Jellyfin.md#mediainfoapi)
- [moviesApi](index.Jellyfin.md#moviesapi)
- [musicGenresApi](index.Jellyfin.md#musicgenresapi)
- [notificationsApi](index.Jellyfin.md#notificationsapi)
- [packageApi](index.Jellyfin.md#packageapi)
- [personsApi](index.Jellyfin.md#personsapi)
- [playlistsApi](index.Jellyfin.md#playlistsapi)
- [playstateApi](index.Jellyfin.md#playstateapi)
- [pluginsApi](index.Jellyfin.md#pluginsapi)
- [quickConnectApi](index.Jellyfin.md#quickconnectapi)
- [remoteImageApi](index.Jellyfin.md#remoteimageapi)
- [scheduledTasksApi](index.Jellyfin.md#scheduledtasksapi)
- [searchApi](index.Jellyfin.md#searchapi)
- [sessionApi](index.Jellyfin.md#sessionapi)
- [startupApi](index.Jellyfin.md#startupapi)
- [studiosApi](index.Jellyfin.md#studiosapi)
- [subtitleApi](index.Jellyfin.md#subtitleapi)
- [suggestionsApi](index.Jellyfin.md#suggestionsapi)
- [syncPlayApi](index.Jellyfin.md#syncplayapi)
- [systemApi](index.Jellyfin.md#systemapi)
- [timeSyncApi](index.Jellyfin.md#timesyncapi)
- [trailersApi](index.Jellyfin.md#trailersapi)
- [tvShowsApi](index.Jellyfin.md#tvshowsapi)
- [universalAudioApi](index.Jellyfin.md#universalaudioapi)
- [userApi](index.Jellyfin.md#userapi)
- [userLibraryApi](index.Jellyfin.md#userlibraryapi)
- [userViewsApi](index.Jellyfin.md#userviewsapi)
- [videoAttachmentsApi](index.Jellyfin.md#videoattachmentsapi)
- [videoHlsApi](index.Jellyfin.md#videohlsapi)
- [videosApi](index.Jellyfin.md#videosapi)
- [yearsApi](index.Jellyfin.md#yearsapi)

### Methods

- [authenticateUserByName](index.Jellyfin.md#authenticateuserbyname)

## Constructors

### constructor

• **new Jellyfin**(`configuration?`, `axiosInstance?`, `clientInfo?`, `deviceInfo?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration` | [`Configuration`](generated_client.Configuration.md) |
| `axiosInstance` | `AxiosStatic` |
| `clientInfo` | [`ClientInfo`](../interfaces/models.ClientInfo.md) |
| `deviceInfo` | [`DeviceInfo`](../interfaces/models.DeviceInfo.md) |

#### Defined in

[index.ts:21](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/index.ts#L21)

## Properties

### axiosInstance

• **axiosInstance**: `AxiosStatic`

#### Defined in

[index.ts:14](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/index.ts#L14)

___

### clientInfo

• **clientInfo**: [`ClientInfo`](../interfaces/models.ClientInfo.md)

#### Defined in

[index.ts:16](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/index.ts#L16)

___

### configuration

• **configuration**: [`Configuration`](generated_client.Configuration.md)

#### Defined in

[index.ts:13](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/index.ts#L13)

___

### deviceInfo

• **deviceInfo**: [`DeviceInfo`](../interfaces/models.DeviceInfo.md)

#### Defined in

[index.ts:17](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/index.ts#L17)

___

### token

• **token**: `string` = `''`

#### Defined in

[index.ts:19](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/index.ts#L19)

## Accessors

### activityLogApi

• `get` **activityLogApi**(): [`ActivityLogApi`](generated_client.ActivityLogApi.md)

#### Returns

[`ActivityLogApi`](generated_client.ActivityLogApi.md)

#### Defined in

[index.ts:71](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/index.ts#L71)

___

### apiKeyApi

• `get` **apiKeyApi**(): [`ApiKeyApi`](generated_client.ApiKeyApi.md)

#### Returns

[`ApiKeyApi`](generated_client.ApiKeyApi.md)

#### Defined in

[index.ts:75](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/index.ts#L75)

___

### artistsApi

• `get` **artistsApi**(): [`ArtistsApi`](generated_client.ArtistsApi.md)

#### Returns

[`ArtistsApi`](generated_client.ArtistsApi.md)

#### Defined in

[index.ts:79](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/index.ts#L79)

___

### audioApi

• `get` **audioApi**(): [`AudioApi`](generated_client.AudioApi.md)

#### Returns

[`AudioApi`](generated_client.AudioApi.md)

#### Defined in

[index.ts:83](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/index.ts#L83)

___

### authorizationHeader

• `get` **authorizationHeader**(): `string`

Generates the authorization header value based on the current state.

#### Returns

`string`

#### Defined in

[index.ts:60](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/index.ts#L60)

___

### brandingApi

• `get` **brandingApi**(): [`BrandingApi`](generated_client.BrandingApi.md)

#### Returns

[`BrandingApi`](generated_client.BrandingApi.md)

#### Defined in

[index.ts:87](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/index.ts#L87)

___

### channelsApi

• `get` **channelsApi**(): [`ChannelsApi`](generated_client.ChannelsApi.md)

#### Returns

[`ChannelsApi`](generated_client.ChannelsApi.md)

#### Defined in

[index.ts:91](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/index.ts#L91)

___

### collectionApi

• `get` **collectionApi**(): [`CollectionApi`](generated_client.CollectionApi.md)

#### Returns

[`CollectionApi`](generated_client.CollectionApi.md)

#### Defined in

[index.ts:95](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/index.ts#L95)

___

### configurationApi

• `get` **configurationApi**(): [`ConfigurationApi`](generated_client.ConfigurationApi.md)

#### Returns

[`ConfigurationApi`](generated_client.ConfigurationApi.md)

#### Defined in

[index.ts:99](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/index.ts#L99)

___

### dashboardApi

• `get` **dashboardApi**(): [`DashboardApi`](generated_client.DashboardApi.md)

#### Returns

[`DashboardApi`](generated_client.DashboardApi.md)

#### Defined in

[index.ts:103](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/index.ts#L103)

___

### devicesApi

• `get` **devicesApi**(): [`DevicesApi`](generated_client.DevicesApi.md)

#### Returns

[`DevicesApi`](generated_client.DevicesApi.md)

#### Defined in

[index.ts:107](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/index.ts#L107)

___

### displayPreferencesApi

• `get` **displayPreferencesApi**(): [`DisplayPreferencesApi`](generated_client.DisplayPreferencesApi.md)

#### Returns

[`DisplayPreferencesApi`](generated_client.DisplayPreferencesApi.md)

#### Defined in

[index.ts:111](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/index.ts#L111)

___

### dlnaApi

• `get` **dlnaApi**(): [`DlnaApi`](generated_client.DlnaApi.md)

#### Returns

[`DlnaApi`](generated_client.DlnaApi.md)

#### Defined in

[index.ts:115](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/index.ts#L115)

___

### dlnaServerApi

• `get` **dlnaServerApi**(): [`DlnaServerApi`](generated_client.DlnaServerApi.md)

#### Returns

[`DlnaServerApi`](generated_client.DlnaServerApi.md)

#### Defined in

[index.ts:119](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/index.ts#L119)

___

### dynamicHlsApi

• `get` **dynamicHlsApi**(): [`DynamicHlsApi`](generated_client.DynamicHlsApi.md)

#### Returns

[`DynamicHlsApi`](generated_client.DynamicHlsApi.md)

#### Defined in

[index.ts:123](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/index.ts#L123)

___

### environmentApi

• `get` **environmentApi**(): [`EnvironmentApi`](generated_client.EnvironmentApi.md)

#### Returns

[`EnvironmentApi`](generated_client.EnvironmentApi.md)

#### Defined in

[index.ts:127](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/index.ts#L127)

___

### filterApi

• `get` **filterApi**(): [`FilterApi`](generated_client.FilterApi.md)

#### Returns

[`FilterApi`](generated_client.FilterApi.md)

#### Defined in

[index.ts:131](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/index.ts#L131)

___

### genresApi

• `get` **genresApi**(): [`GenresApi`](generated_client.GenresApi.md)

#### Returns

[`GenresApi`](generated_client.GenresApi.md)

#### Defined in

[index.ts:135](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/index.ts#L135)

___

### hlsSegmentApi

• `get` **hlsSegmentApi**(): [`HlsSegmentApi`](generated_client.HlsSegmentApi.md)

#### Returns

[`HlsSegmentApi`](generated_client.HlsSegmentApi.md)

#### Defined in

[index.ts:139](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/index.ts#L139)

___

### imageApi

• `get` **imageApi**(): [`ImageApi`](generated_client.ImageApi.md)

#### Returns

[`ImageApi`](generated_client.ImageApi.md)

#### Defined in

[index.ts:143](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/index.ts#L143)

___

### imageByNameApi

• `get` **imageByNameApi**(): [`ImageByNameApi`](generated_client.ImageByNameApi.md)

#### Returns

[`ImageByNameApi`](generated_client.ImageByNameApi.md)

#### Defined in

[index.ts:147](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/index.ts#L147)

___

### instantMixApi

• `get` **instantMixApi**(): [`InstantMixApi`](generated_client.InstantMixApi.md)

#### Returns

[`InstantMixApi`](generated_client.InstantMixApi.md)

#### Defined in

[index.ts:151](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/index.ts#L151)

___

### itemLookupApi

• `get` **itemLookupApi**(): [`ItemLookupApi`](generated_client.ItemLookupApi.md)

#### Returns

[`ItemLookupApi`](generated_client.ItemLookupApi.md)

#### Defined in

[index.ts:155](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/index.ts#L155)

___

### itemRefreshApi

• `get` **itemRefreshApi**(): [`ItemRefreshApi`](generated_client.ItemRefreshApi.md)

#### Returns

[`ItemRefreshApi`](generated_client.ItemRefreshApi.md)

#### Defined in

[index.ts:159](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/index.ts#L159)

___

### itemUpdateApi

• `get` **itemUpdateApi**(): [`ItemUpdateApi`](generated_client.ItemUpdateApi.md)

#### Returns

[`ItemUpdateApi`](generated_client.ItemUpdateApi.md)

#### Defined in

[index.ts:163](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/index.ts#L163)

___

### itemsApi

• `get` **itemsApi**(): [`ItemsApi`](generated_client.ItemsApi.md)

#### Returns

[`ItemsApi`](generated_client.ItemsApi.md)

#### Defined in

[index.ts:167](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/index.ts#L167)

___

### libraryApi

• `get` **libraryApi**(): [`LibraryApi`](generated_client.LibraryApi.md)

#### Returns

[`LibraryApi`](generated_client.LibraryApi.md)

#### Defined in

[index.ts:171](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/index.ts#L171)

___

### libraryStructureApi

• `get` **libraryStructureApi**(): [`LibraryStructureApi`](generated_client.LibraryStructureApi.md)

#### Returns

[`LibraryStructureApi`](generated_client.LibraryStructureApi.md)

#### Defined in

[index.ts:175](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/index.ts#L175)

___

### liveTvApi

• `get` **liveTvApi**(): [`LiveTvApi`](generated_client.LiveTvApi.md)

#### Returns

[`LiveTvApi`](generated_client.LiveTvApi.md)

#### Defined in

[index.ts:179](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/index.ts#L179)

___

### localizationApi

• `get` **localizationApi**(): [`LocalizationApi`](generated_client.LocalizationApi.md)

#### Returns

[`LocalizationApi`](generated_client.LocalizationApi.md)

#### Defined in

[index.ts:183](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/index.ts#L183)

___

### mediaInfoApi

• `get` **mediaInfoApi**(): [`MediaInfoApi`](generated_client.MediaInfoApi.md)

#### Returns

[`MediaInfoApi`](generated_client.MediaInfoApi.md)

#### Defined in

[index.ts:187](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/index.ts#L187)

___

### moviesApi

• `get` **moviesApi**(): [`MoviesApi`](generated_client.MoviesApi.md)

#### Returns

[`MoviesApi`](generated_client.MoviesApi.md)

#### Defined in

[index.ts:191](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/index.ts#L191)

___

### musicGenresApi

• `get` **musicGenresApi**(): [`MusicGenresApi`](generated_client.MusicGenresApi.md)

#### Returns

[`MusicGenresApi`](generated_client.MusicGenresApi.md)

#### Defined in

[index.ts:195](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/index.ts#L195)

___

### notificationsApi

• `get` **notificationsApi**(): [`NotificationsApi`](generated_client.NotificationsApi.md)

#### Returns

[`NotificationsApi`](generated_client.NotificationsApi.md)

#### Defined in

[index.ts:199](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/index.ts#L199)

___

### packageApi

• `get` **packageApi**(): [`PackageApi`](generated_client.PackageApi.md)

#### Returns

[`PackageApi`](generated_client.PackageApi.md)

#### Defined in

[index.ts:203](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/index.ts#L203)

___

### personsApi

• `get` **personsApi**(): [`PersonsApi`](generated_client.PersonsApi.md)

#### Returns

[`PersonsApi`](generated_client.PersonsApi.md)

#### Defined in

[index.ts:207](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/index.ts#L207)

___

### playlistsApi

• `get` **playlistsApi**(): [`PlaylistsApi`](generated_client.PlaylistsApi.md)

#### Returns

[`PlaylistsApi`](generated_client.PlaylistsApi.md)

#### Defined in

[index.ts:211](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/index.ts#L211)

___

### playstateApi

• `get` **playstateApi**(): [`PlaystateApi`](generated_client.PlaystateApi.md)

#### Returns

[`PlaystateApi`](generated_client.PlaystateApi.md)

#### Defined in

[index.ts:215](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/index.ts#L215)

___

### pluginsApi

• `get` **pluginsApi**(): [`PluginsApi`](generated_client.PluginsApi.md)

#### Returns

[`PluginsApi`](generated_client.PluginsApi.md)

#### Defined in

[index.ts:219](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/index.ts#L219)

___

### quickConnectApi

• `get` **quickConnectApi**(): [`QuickConnectApi`](generated_client.QuickConnectApi.md)

#### Returns

[`QuickConnectApi`](generated_client.QuickConnectApi.md)

#### Defined in

[index.ts:223](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/index.ts#L223)

___

### remoteImageApi

• `get` **remoteImageApi**(): [`RemoteImageApi`](generated_client.RemoteImageApi.md)

#### Returns

[`RemoteImageApi`](generated_client.RemoteImageApi.md)

#### Defined in

[index.ts:227](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/index.ts#L227)

___

### scheduledTasksApi

• `get` **scheduledTasksApi**(): [`ScheduledTasksApi`](generated_client.ScheduledTasksApi.md)

#### Returns

[`ScheduledTasksApi`](generated_client.ScheduledTasksApi.md)

#### Defined in

[index.ts:231](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/index.ts#L231)

___

### searchApi

• `get` **searchApi**(): [`SearchApi`](generated_client.SearchApi.md)

#### Returns

[`SearchApi`](generated_client.SearchApi.md)

#### Defined in

[index.ts:235](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/index.ts#L235)

___

### sessionApi

• `get` **sessionApi**(): [`SessionApi`](generated_client.SessionApi.md)

#### Returns

[`SessionApi`](generated_client.SessionApi.md)

#### Defined in

[index.ts:239](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/index.ts#L239)

___

### startupApi

• `get` **startupApi**(): [`StartupApi`](generated_client.StartupApi.md)

#### Returns

[`StartupApi`](generated_client.StartupApi.md)

#### Defined in

[index.ts:243](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/index.ts#L243)

___

### studiosApi

• `get` **studiosApi**(): [`StudiosApi`](generated_client.StudiosApi.md)

#### Returns

[`StudiosApi`](generated_client.StudiosApi.md)

#### Defined in

[index.ts:247](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/index.ts#L247)

___

### subtitleApi

• `get` **subtitleApi**(): [`SubtitleApi`](generated_client.SubtitleApi.md)

#### Returns

[`SubtitleApi`](generated_client.SubtitleApi.md)

#### Defined in

[index.ts:251](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/index.ts#L251)

___

### suggestionsApi

• `get` **suggestionsApi**(): [`SuggestionsApi`](generated_client.SuggestionsApi.md)

#### Returns

[`SuggestionsApi`](generated_client.SuggestionsApi.md)

#### Defined in

[index.ts:255](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/index.ts#L255)

___

### syncPlayApi

• `get` **syncPlayApi**(): [`SyncPlayApi`](generated_client.SyncPlayApi.md)

#### Returns

[`SyncPlayApi`](generated_client.SyncPlayApi.md)

#### Defined in

[index.ts:259](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/index.ts#L259)

___

### systemApi

• `get` **systemApi**(): [`SystemApi`](generated_client.SystemApi.md)

#### Returns

[`SystemApi`](generated_client.SystemApi.md)

#### Defined in

[index.ts:263](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/index.ts#L263)

___

### timeSyncApi

• `get` **timeSyncApi**(): [`TimeSyncApi`](generated_client.TimeSyncApi.md)

#### Returns

[`TimeSyncApi`](generated_client.TimeSyncApi.md)

#### Defined in

[index.ts:267](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/index.ts#L267)

___

### trailersApi

• `get` **trailersApi**(): [`TrailersApi`](generated_client.TrailersApi.md)

#### Returns

[`TrailersApi`](generated_client.TrailersApi.md)

#### Defined in

[index.ts:271](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/index.ts#L271)

___

### tvShowsApi

• `get` **tvShowsApi**(): [`TvShowsApi`](generated_client.TvShowsApi.md)

#### Returns

[`TvShowsApi`](generated_client.TvShowsApi.md)

#### Defined in

[index.ts:275](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/index.ts#L275)

___

### universalAudioApi

• `get` **universalAudioApi**(): [`UniversalAudioApi`](generated_client.UniversalAudioApi.md)

#### Returns

[`UniversalAudioApi`](generated_client.UniversalAudioApi.md)

#### Defined in

[index.ts:279](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/index.ts#L279)

___

### userApi

• `get` **userApi**(): [`UserApi`](generated_client.UserApi.md)

#### Returns

[`UserApi`](generated_client.UserApi.md)

#### Defined in

[index.ts:283](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/index.ts#L283)

___

### userLibraryApi

• `get` **userLibraryApi**(): [`UserLibraryApi`](generated_client.UserLibraryApi.md)

#### Returns

[`UserLibraryApi`](generated_client.UserLibraryApi.md)

#### Defined in

[index.ts:287](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/index.ts#L287)

___

### userViewsApi

• `get` **userViewsApi**(): [`UserViewsApi`](generated_client.UserViewsApi.md)

#### Returns

[`UserViewsApi`](generated_client.UserViewsApi.md)

#### Defined in

[index.ts:291](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/index.ts#L291)

___

### videoAttachmentsApi

• `get` **videoAttachmentsApi**(): [`VideoAttachmentsApi`](generated_client.VideoAttachmentsApi.md)

#### Returns

[`VideoAttachmentsApi`](generated_client.VideoAttachmentsApi.md)

#### Defined in

[index.ts:295](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/index.ts#L295)

___

### videoHlsApi

• `get` **videoHlsApi**(): [`VideoHlsApi`](generated_client.VideoHlsApi.md)

#### Returns

[`VideoHlsApi`](generated_client.VideoHlsApi.md)

#### Defined in

[index.ts:299](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/index.ts#L299)

___

### videosApi

• `get` **videosApi**(): [`VideosApi`](generated_client.VideosApi.md)

#### Returns

[`VideosApi`](generated_client.VideosApi.md)

#### Defined in

[index.ts:303](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/index.ts#L303)

___

### yearsApi

• `get` **yearsApi**(): [`YearsApi`](generated_client.YearsApi.md)

#### Returns

[`YearsApi`](generated_client.YearsApi.md)

#### Defined in

[index.ts:307](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/index.ts#L307)

## Methods

### authenticateUserByName

▸ **authenticateUserByName**(`authenticateUserByNameParam`): `Promise`<`AxiosResponse`<[`AuthenticationResult`](../interfaces/generated_client.AuthenticationResult.md)\>\>

Convenience method for authenticating a user by name and updating the internal state.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `authenticateUserByNameParam` | [`AuthenticateUserByName`](../interfaces/generated_client.AuthenticateUserByName.md) | The authentication parameters object. |

#### Returns

`Promise`<`AxiosResponse`<[`AuthenticationResult`](../interfaces/generated_client.AuthenticationResult.md)\>\>

#### Defined in

[index.ts:43](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/index.ts#L43)
