[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / Api

# Class: Api

[index](../modules/index.md).Api

Class representing the Jellyfin API.

## Table of contents

### Constructors

- [constructor](index.Api.md#constructor)

### Properties

- [accessToken](index.Api.md#accesstoken)
- [axiosInstance](index.Api.md#axiosinstance)
- [basePath](index.Api.md#basepath)
- [clientInfo](index.Api.md#clientinfo)
- [deviceInfo](index.Api.md#deviceinfo)

### Accessors

- [activityLogApi](index.Api.md#activitylogapi)
- [apiKeyApi](index.Api.md#apikeyapi)
- [artistsApi](index.Api.md#artistsapi)
- [audioApi](index.Api.md#audioapi)
- [authorizationHeader](index.Api.md#authorizationheader)
- [brandingApi](index.Api.md#brandingapi)
- [channelsApi](index.Api.md#channelsapi)
- [collectionApi](index.Api.md#collectionapi)
- [configuration](index.Api.md#configuration)
- [configurationApi](index.Api.md#configurationapi)
- [dashboardApi](index.Api.md#dashboardapi)
- [devicesApi](index.Api.md#devicesapi)
- [displayPreferencesApi](index.Api.md#displaypreferencesapi)
- [dlnaApi](index.Api.md#dlnaapi)
- [dlnaServerApi](index.Api.md#dlnaserverapi)
- [dynamicHlsApi](index.Api.md#dynamichlsapi)
- [environmentApi](index.Api.md#environmentapi)
- [filterApi](index.Api.md#filterapi)
- [genresApi](index.Api.md#genresapi)
- [hlsSegmentApi](index.Api.md#hlssegmentapi)
- [imageApi](index.Api.md#imageapi)
- [imageByNameApi](index.Api.md#imagebynameapi)
- [instantMixApi](index.Api.md#instantmixapi)
- [itemLookupApi](index.Api.md#itemlookupapi)
- [itemRefreshApi](index.Api.md#itemrefreshapi)
- [itemUpdateApi](index.Api.md#itemupdateapi)
- [itemsApi](index.Api.md#itemsapi)
- [libraryApi](index.Api.md#libraryapi)
- [libraryStructureApi](index.Api.md#librarystructureapi)
- [liveTvApi](index.Api.md#livetvapi)
- [localizationApi](index.Api.md#localizationapi)
- [mediaInfoApi](index.Api.md#mediainfoapi)
- [moviesApi](index.Api.md#moviesapi)
- [musicGenresApi](index.Api.md#musicgenresapi)
- [notificationsApi](index.Api.md#notificationsapi)
- [packageApi](index.Api.md#packageapi)
- [personsApi](index.Api.md#personsapi)
- [playlistsApi](index.Api.md#playlistsapi)
- [playstateApi](index.Api.md#playstateapi)
- [pluginsApi](index.Api.md#pluginsapi)
- [quickConnectApi](index.Api.md#quickconnectapi)
- [remoteImageApi](index.Api.md#remoteimageapi)
- [scheduledTasksApi](index.Api.md#scheduledtasksapi)
- [searchApi](index.Api.md#searchapi)
- [sessionApi](index.Api.md#sessionapi)
- [startupApi](index.Api.md#startupapi)
- [studiosApi](index.Api.md#studiosapi)
- [subtitleApi](index.Api.md#subtitleapi)
- [suggestionsApi](index.Api.md#suggestionsapi)
- [syncPlayApi](index.Api.md#syncplayapi)
- [systemApi](index.Api.md#systemapi)
- [timeSyncApi](index.Api.md#timesyncapi)
- [trailersApi](index.Api.md#trailersapi)
- [tvShowsApi](index.Api.md#tvshowsapi)
- [universalAudioApi](index.Api.md#universalaudioapi)
- [userApi](index.Api.md#userapi)
- [userLibraryApi](index.Api.md#userlibraryapi)
- [userViewsApi](index.Api.md#userviewsapi)
- [videoAttachmentsApi](index.Api.md#videoattachmentsapi)
- [videoHlsApi](index.Api.md#videohlsapi)
- [videosApi](index.Api.md#videosapi)
- [yearsApi](index.Api.md#yearsapi)

### Methods

- [authenticateUserByName](index.Api.md#authenticateuserbyname)
- [logout](index.Api.md#logout)

## Constructors

### constructor

• **new Api**(`basePath`, `clientInfo`, `deviceInfo`, `accessToken?`, `axiosInstance?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `basePath` | `string` | `undefined` |
| `clientInfo` | [`ClientInfo`](../interfaces/index.ClientInfo.md) | `undefined` |
| `deviceInfo` | [`DeviceInfo`](../interfaces/index.DeviceInfo.md) | `undefined` |
| `accessToken` | `string` | `''` |
| `axiosInstance` | `AxiosInstance` | `undefined` |

#### Defined in

[api.ts:23](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/api.ts#L23)

## Properties

### accessToken

• **accessToken**: `string`

#### Defined in

[api.ts:20](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/api.ts#L20)

___

### axiosInstance

• **axiosInstance**: `AxiosInstance`

#### Defined in

[api.ts:21](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/api.ts#L21)

___

### basePath

• **basePath**: `string`

#### Defined in

[api.ts:17](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/api.ts#L17)

___

### clientInfo

• **clientInfo**: [`ClientInfo`](../interfaces/index.ClientInfo.md)

#### Defined in

[api.ts:18](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/api.ts#L18)

___

### deviceInfo

• **deviceInfo**: [`DeviceInfo`](../interfaces/index.DeviceInfo.md)

#### Defined in

[api.ts:19](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/api.ts#L19)

## Accessors

### activityLogApi

• `get` **activityLogApi**(): [`ActivityLogApi`](generated_client.ActivityLogApi.md)

#### Returns

[`ActivityLogApi`](generated_client.ActivityLogApi.md)

#### Defined in

[api.ts:75](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/api.ts#L75)

___

### apiKeyApi

• `get` **apiKeyApi**(): [`ApiKeyApi`](generated_client.ApiKeyApi.md)

#### Returns

[`ApiKeyApi`](generated_client.ApiKeyApi.md)

#### Defined in

[api.ts:79](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/api.ts#L79)

___

### artistsApi

• `get` **artistsApi**(): [`ArtistsApi`](generated_client.ArtistsApi.md)

#### Returns

[`ArtistsApi`](generated_client.ArtistsApi.md)

#### Defined in

[api.ts:83](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/api.ts#L83)

___

### audioApi

• `get` **audioApi**(): [`AudioApi`](generated_client.AudioApi.md)

#### Returns

[`AudioApi`](generated_client.AudioApi.md)

#### Defined in

[api.ts:87](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/api.ts#L87)

___

### authorizationHeader

• `get` **authorizationHeader**(): `string`

#### Returns

`string`

#### Defined in

[api.ts:71](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/api.ts#L71)

___

### brandingApi

• `get` **brandingApi**(): [`BrandingApi`](generated_client.BrandingApi.md)

#### Returns

[`BrandingApi`](generated_client.BrandingApi.md)

#### Defined in

[api.ts:91](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/api.ts#L91)

___

### channelsApi

• `get` **channelsApi**(): [`ChannelsApi`](generated_client.ChannelsApi.md)

#### Returns

[`ChannelsApi`](generated_client.ChannelsApi.md)

#### Defined in

[api.ts:95](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/api.ts#L95)

___

### collectionApi

• `get` **collectionApi**(): [`CollectionApi`](generated_client.CollectionApi.md)

#### Returns

[`CollectionApi`](generated_client.CollectionApi.md)

#### Defined in

[api.ts:99](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/api.ts#L99)

___

### configuration

• `Private` `get` **configuration**(): [`Configuration`](generated_client.Configuration.md)

#### Returns

[`Configuration`](generated_client.Configuration.md)

#### Defined in

[api.ts:37](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/api.ts#L37)

___

### configurationApi

• `get` **configurationApi**(): [`ConfigurationApi`](generated_client.ConfigurationApi.md)

#### Returns

[`ConfigurationApi`](generated_client.ConfigurationApi.md)

#### Defined in

[api.ts:103](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/api.ts#L103)

___

### dashboardApi

• `get` **dashboardApi**(): [`DashboardApi`](generated_client.DashboardApi.md)

#### Returns

[`DashboardApi`](generated_client.DashboardApi.md)

#### Defined in

[api.ts:107](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/api.ts#L107)

___

### devicesApi

• `get` **devicesApi**(): [`DevicesApi`](generated_client.DevicesApi.md)

#### Returns

[`DevicesApi`](generated_client.DevicesApi.md)

#### Defined in

[api.ts:111](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/api.ts#L111)

___

### displayPreferencesApi

• `get` **displayPreferencesApi**(): [`DisplayPreferencesApi`](generated_client.DisplayPreferencesApi.md)

#### Returns

[`DisplayPreferencesApi`](generated_client.DisplayPreferencesApi.md)

#### Defined in

[api.ts:115](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/api.ts#L115)

___

### dlnaApi

• `get` **dlnaApi**(): [`DlnaApi`](generated_client.DlnaApi.md)

#### Returns

[`DlnaApi`](generated_client.DlnaApi.md)

#### Defined in

[api.ts:119](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/api.ts#L119)

___

### dlnaServerApi

• `get` **dlnaServerApi**(): [`DlnaServerApi`](generated_client.DlnaServerApi.md)

#### Returns

[`DlnaServerApi`](generated_client.DlnaServerApi.md)

#### Defined in

[api.ts:123](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/api.ts#L123)

___

### dynamicHlsApi

• `get` **dynamicHlsApi**(): [`DynamicHlsApi`](generated_client.DynamicHlsApi.md)

#### Returns

[`DynamicHlsApi`](generated_client.DynamicHlsApi.md)

#### Defined in

[api.ts:127](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/api.ts#L127)

___

### environmentApi

• `get` **environmentApi**(): [`EnvironmentApi`](generated_client.EnvironmentApi.md)

#### Returns

[`EnvironmentApi`](generated_client.EnvironmentApi.md)

#### Defined in

[api.ts:131](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/api.ts#L131)

___

### filterApi

• `get` **filterApi**(): [`FilterApi`](generated_client.FilterApi.md)

#### Returns

[`FilterApi`](generated_client.FilterApi.md)

#### Defined in

[api.ts:135](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/api.ts#L135)

___

### genresApi

• `get` **genresApi**(): [`GenresApi`](generated_client.GenresApi.md)

#### Returns

[`GenresApi`](generated_client.GenresApi.md)

#### Defined in

[api.ts:139](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/api.ts#L139)

___

### hlsSegmentApi

• `get` **hlsSegmentApi**(): [`HlsSegmentApi`](generated_client.HlsSegmentApi.md)

#### Returns

[`HlsSegmentApi`](generated_client.HlsSegmentApi.md)

#### Defined in

[api.ts:143](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/api.ts#L143)

___

### imageApi

• `get` **imageApi**(): [`ImageApi`](generated_client.ImageApi.md)

#### Returns

[`ImageApi`](generated_client.ImageApi.md)

#### Defined in

[api.ts:147](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/api.ts#L147)

___

### imageByNameApi

• `get` **imageByNameApi**(): [`ImageByNameApi`](generated_client.ImageByNameApi.md)

#### Returns

[`ImageByNameApi`](generated_client.ImageByNameApi.md)

#### Defined in

[api.ts:151](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/api.ts#L151)

___

### instantMixApi

• `get` **instantMixApi**(): [`InstantMixApi`](generated_client.InstantMixApi.md)

#### Returns

[`InstantMixApi`](generated_client.InstantMixApi.md)

#### Defined in

[api.ts:155](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/api.ts#L155)

___

### itemLookupApi

• `get` **itemLookupApi**(): [`ItemLookupApi`](generated_client.ItemLookupApi.md)

#### Returns

[`ItemLookupApi`](generated_client.ItemLookupApi.md)

#### Defined in

[api.ts:159](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/api.ts#L159)

___

### itemRefreshApi

• `get` **itemRefreshApi**(): [`ItemRefreshApi`](generated_client.ItemRefreshApi.md)

#### Returns

[`ItemRefreshApi`](generated_client.ItemRefreshApi.md)

#### Defined in

[api.ts:163](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/api.ts#L163)

___

### itemUpdateApi

• `get` **itemUpdateApi**(): [`ItemUpdateApi`](generated_client.ItemUpdateApi.md)

#### Returns

[`ItemUpdateApi`](generated_client.ItemUpdateApi.md)

#### Defined in

[api.ts:167](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/api.ts#L167)

___

### itemsApi

• `get` **itemsApi**(): [`ItemsApi`](generated_client.ItemsApi.md)

#### Returns

[`ItemsApi`](generated_client.ItemsApi.md)

#### Defined in

[api.ts:171](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/api.ts#L171)

___

### libraryApi

• `get` **libraryApi**(): [`LibraryApi`](generated_client.LibraryApi.md)

#### Returns

[`LibraryApi`](generated_client.LibraryApi.md)

#### Defined in

[api.ts:175](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/api.ts#L175)

___

### libraryStructureApi

• `get` **libraryStructureApi**(): [`LibraryStructureApi`](generated_client.LibraryStructureApi.md)

#### Returns

[`LibraryStructureApi`](generated_client.LibraryStructureApi.md)

#### Defined in

[api.ts:179](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/api.ts#L179)

___

### liveTvApi

• `get` **liveTvApi**(): [`LiveTvApi`](generated_client.LiveTvApi.md)

#### Returns

[`LiveTvApi`](generated_client.LiveTvApi.md)

#### Defined in

[api.ts:183](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/api.ts#L183)

___

### localizationApi

• `get` **localizationApi**(): [`LocalizationApi`](generated_client.LocalizationApi.md)

#### Returns

[`LocalizationApi`](generated_client.LocalizationApi.md)

#### Defined in

[api.ts:187](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/api.ts#L187)

___

### mediaInfoApi

• `get` **mediaInfoApi**(): [`MediaInfoApi`](generated_client.MediaInfoApi.md)

#### Returns

[`MediaInfoApi`](generated_client.MediaInfoApi.md)

#### Defined in

[api.ts:191](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/api.ts#L191)

___

### moviesApi

• `get` **moviesApi**(): [`MoviesApi`](generated_client.MoviesApi.md)

#### Returns

[`MoviesApi`](generated_client.MoviesApi.md)

#### Defined in

[api.ts:195](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/api.ts#L195)

___

### musicGenresApi

• `get` **musicGenresApi**(): [`MusicGenresApi`](generated_client.MusicGenresApi.md)

#### Returns

[`MusicGenresApi`](generated_client.MusicGenresApi.md)

#### Defined in

[api.ts:199](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/api.ts#L199)

___

### notificationsApi

• `get` **notificationsApi**(): [`NotificationsApi`](generated_client.NotificationsApi.md)

#### Returns

[`NotificationsApi`](generated_client.NotificationsApi.md)

#### Defined in

[api.ts:203](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/api.ts#L203)

___

### packageApi

• `get` **packageApi**(): [`PackageApi`](generated_client.PackageApi.md)

#### Returns

[`PackageApi`](generated_client.PackageApi.md)

#### Defined in

[api.ts:207](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/api.ts#L207)

___

### personsApi

• `get` **personsApi**(): [`PersonsApi`](generated_client.PersonsApi.md)

#### Returns

[`PersonsApi`](generated_client.PersonsApi.md)

#### Defined in

[api.ts:211](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/api.ts#L211)

___

### playlistsApi

• `get` **playlistsApi**(): [`PlaylistsApi`](generated_client.PlaylistsApi.md)

#### Returns

[`PlaylistsApi`](generated_client.PlaylistsApi.md)

#### Defined in

[api.ts:215](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/api.ts#L215)

___

### playstateApi

• `get` **playstateApi**(): [`PlaystateApi`](generated_client.PlaystateApi.md)

#### Returns

[`PlaystateApi`](generated_client.PlaystateApi.md)

#### Defined in

[api.ts:219](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/api.ts#L219)

___

### pluginsApi

• `get` **pluginsApi**(): [`PluginsApi`](generated_client.PluginsApi.md)

#### Returns

[`PluginsApi`](generated_client.PluginsApi.md)

#### Defined in

[api.ts:223](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/api.ts#L223)

___

### quickConnectApi

• `get` **quickConnectApi**(): [`QuickConnectApi`](generated_client.QuickConnectApi.md)

#### Returns

[`QuickConnectApi`](generated_client.QuickConnectApi.md)

#### Defined in

[api.ts:227](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/api.ts#L227)

___

### remoteImageApi

• `get` **remoteImageApi**(): [`RemoteImageApi`](generated_client.RemoteImageApi.md)

#### Returns

[`RemoteImageApi`](generated_client.RemoteImageApi.md)

#### Defined in

[api.ts:231](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/api.ts#L231)

___

### scheduledTasksApi

• `get` **scheduledTasksApi**(): [`ScheduledTasksApi`](generated_client.ScheduledTasksApi.md)

#### Returns

[`ScheduledTasksApi`](generated_client.ScheduledTasksApi.md)

#### Defined in

[api.ts:235](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/api.ts#L235)

___

### searchApi

• `get` **searchApi**(): [`SearchApi`](generated_client.SearchApi.md)

#### Returns

[`SearchApi`](generated_client.SearchApi.md)

#### Defined in

[api.ts:239](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/api.ts#L239)

___

### sessionApi

• `get` **sessionApi**(): [`SessionApi`](generated_client.SessionApi.md)

#### Returns

[`SessionApi`](generated_client.SessionApi.md)

#### Defined in

[api.ts:243](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/api.ts#L243)

___

### startupApi

• `get` **startupApi**(): [`StartupApi`](generated_client.StartupApi.md)

#### Returns

[`StartupApi`](generated_client.StartupApi.md)

#### Defined in

[api.ts:247](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/api.ts#L247)

___

### studiosApi

• `get` **studiosApi**(): [`StudiosApi`](generated_client.StudiosApi.md)

#### Returns

[`StudiosApi`](generated_client.StudiosApi.md)

#### Defined in

[api.ts:251](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/api.ts#L251)

___

### subtitleApi

• `get` **subtitleApi**(): [`SubtitleApi`](generated_client.SubtitleApi.md)

#### Returns

[`SubtitleApi`](generated_client.SubtitleApi.md)

#### Defined in

[api.ts:255](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/api.ts#L255)

___

### suggestionsApi

• `get` **suggestionsApi**(): [`SuggestionsApi`](generated_client.SuggestionsApi.md)

#### Returns

[`SuggestionsApi`](generated_client.SuggestionsApi.md)

#### Defined in

[api.ts:259](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/api.ts#L259)

___

### syncPlayApi

• `get` **syncPlayApi**(): [`SyncPlayApi`](generated_client.SyncPlayApi.md)

#### Returns

[`SyncPlayApi`](generated_client.SyncPlayApi.md)

#### Defined in

[api.ts:263](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/api.ts#L263)

___

### systemApi

• `get` **systemApi**(): [`SystemApi`](generated_client.SystemApi.md)

#### Returns

[`SystemApi`](generated_client.SystemApi.md)

#### Defined in

[api.ts:267](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/api.ts#L267)

___

### timeSyncApi

• `get` **timeSyncApi**(): [`TimeSyncApi`](generated_client.TimeSyncApi.md)

#### Returns

[`TimeSyncApi`](generated_client.TimeSyncApi.md)

#### Defined in

[api.ts:271](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/api.ts#L271)

___

### trailersApi

• `get` **trailersApi**(): [`TrailersApi`](generated_client.TrailersApi.md)

#### Returns

[`TrailersApi`](generated_client.TrailersApi.md)

#### Defined in

[api.ts:275](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/api.ts#L275)

___

### tvShowsApi

• `get` **tvShowsApi**(): [`TvShowsApi`](generated_client.TvShowsApi.md)

#### Returns

[`TvShowsApi`](generated_client.TvShowsApi.md)

#### Defined in

[api.ts:279](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/api.ts#L279)

___

### universalAudioApi

• `get` **universalAudioApi**(): [`UniversalAudioApi`](generated_client.UniversalAudioApi.md)

#### Returns

[`UniversalAudioApi`](generated_client.UniversalAudioApi.md)

#### Defined in

[api.ts:283](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/api.ts#L283)

___

### userApi

• `get` **userApi**(): [`UserApi`](generated_client.UserApi.md)

#### Returns

[`UserApi`](generated_client.UserApi.md)

#### Defined in

[api.ts:287](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/api.ts#L287)

___

### userLibraryApi

• `get` **userLibraryApi**(): [`UserLibraryApi`](generated_client.UserLibraryApi.md)

#### Returns

[`UserLibraryApi`](generated_client.UserLibraryApi.md)

#### Defined in

[api.ts:291](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/api.ts#L291)

___

### userViewsApi

• `get` **userViewsApi**(): [`UserViewsApi`](generated_client.UserViewsApi.md)

#### Returns

[`UserViewsApi`](generated_client.UserViewsApi.md)

#### Defined in

[api.ts:295](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/api.ts#L295)

___

### videoAttachmentsApi

• `get` **videoAttachmentsApi**(): [`VideoAttachmentsApi`](generated_client.VideoAttachmentsApi.md)

#### Returns

[`VideoAttachmentsApi`](generated_client.VideoAttachmentsApi.md)

#### Defined in

[api.ts:299](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/api.ts#L299)

___

### videoHlsApi

• `get` **videoHlsApi**(): [`VideoHlsApi`](generated_client.VideoHlsApi.md)

#### Returns

[`VideoHlsApi`](generated_client.VideoHlsApi.md)

#### Defined in

[api.ts:303](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/api.ts#L303)

___

### videosApi

• `get` **videosApi**(): [`VideosApi`](generated_client.VideosApi.md)

#### Returns

[`VideosApi`](generated_client.VideosApi.md)

#### Defined in

[api.ts:307](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/api.ts#L307)

___

### yearsApi

• `get` **yearsApi**(): [`YearsApi`](generated_client.YearsApi.md)

#### Returns

[`YearsApi`](generated_client.YearsApi.md)

#### Defined in

[api.ts:311](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/api.ts#L311)

## Methods

### authenticateUserByName

▸ **authenticateUserByName**(`username`, `password?`): `Promise`<`AxiosResponse`<[`AuthenticationResult`](../interfaces/generated_client.AuthenticationResult.md)\>\>

Convenience method for authenticating a user by name and updating the internal state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `username` | `string` |
| `password?` | `string` |

#### Returns

`Promise`<`AxiosResponse`<[`AuthenticationResult`](../interfaces/generated_client.AuthenticationResult.md)\>\>

#### Defined in

[api.ts:48](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/api.ts#L48)

___

### logout

▸ **logout**(): `Promise`<`AxiosResponse`<`never`\> \| `AxiosResponse`<`void`\>\>

Convenience method for logging out and updating the internal state.

#### Returns

`Promise`<`AxiosResponse`<`never`\> \| `AxiosResponse`<`void`\>\>

#### Defined in

[api.ts:64](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/api.ts#L64)
