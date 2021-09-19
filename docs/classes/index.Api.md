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

[api.ts:27](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/api.ts#L27)

## Properties

### accessToken

• **accessToken**: `string`

#### Defined in

[api.ts:24](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/api.ts#L24)

___

### axiosInstance

• **axiosInstance**: `AxiosInstance`

#### Defined in

[api.ts:25](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/api.ts#L25)

___

### basePath

• **basePath**: `string`

#### Defined in

[api.ts:21](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/api.ts#L21)

___

### clientInfo

• **clientInfo**: [`ClientInfo`](../interfaces/index.ClientInfo.md)

#### Defined in

[api.ts:22](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/api.ts#L22)

___

### deviceInfo

• **deviceInfo**: [`DeviceInfo`](../interfaces/index.DeviceInfo.md)

#### Defined in

[api.ts:23](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/api.ts#L23)

## Accessors

### activityLogApi

• `get` **activityLogApi**(): [`ActivityLogApi`](generated_client.ActivityLogApi.md)

#### Returns

[`ActivityLogApi`](generated_client.ActivityLogApi.md)

#### Defined in

[api.ts:69](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/api.ts#L69)

___

### apiKeyApi

• `get` **apiKeyApi**(): [`ApiKeyApi`](generated_client.ApiKeyApi.md)

#### Returns

[`ApiKeyApi`](generated_client.ApiKeyApi.md)

#### Defined in

[api.ts:73](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/api.ts#L73)

___

### artistsApi

• `get` **artistsApi**(): [`ArtistsApi`](generated_client.ArtistsApi.md)

#### Returns

[`ArtistsApi`](generated_client.ArtistsApi.md)

#### Defined in

[api.ts:77](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/api.ts#L77)

___

### audioApi

• `get` **audioApi**(): [`AudioApi`](generated_client.AudioApi.md)

#### Returns

[`AudioApi`](generated_client.AudioApi.md)

#### Defined in

[api.ts:81](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/api.ts#L81)

___

### authorizationHeader

• `get` **authorizationHeader**(): `string`

#### Returns

`string`

#### Defined in

[api.ts:65](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/api.ts#L65)

___

### brandingApi

• `get` **brandingApi**(): [`BrandingApi`](generated_client.BrandingApi.md)

#### Returns

[`BrandingApi`](generated_client.BrandingApi.md)

#### Defined in

[api.ts:85](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/api.ts#L85)

___

### channelsApi

• `get` **channelsApi**(): [`ChannelsApi`](generated_client.ChannelsApi.md)

#### Returns

[`ChannelsApi`](generated_client.ChannelsApi.md)

#### Defined in

[api.ts:89](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/api.ts#L89)

___

### collectionApi

• `get` **collectionApi**(): [`CollectionApi`](generated_client.CollectionApi.md)

#### Returns

[`CollectionApi`](generated_client.CollectionApi.md)

#### Defined in

[api.ts:93](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/api.ts#L93)

___

### configuration

• `Private` `get` **configuration**(): [`Configuration`](generated_client.Configuration.md)

#### Returns

[`Configuration`](generated_client.Configuration.md)

#### Defined in

[api.ts:41](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/api.ts#L41)

___

### configurationApi

• `get` **configurationApi**(): [`ConfigurationApi`](generated_client.ConfigurationApi.md)

#### Returns

[`ConfigurationApi`](generated_client.ConfigurationApi.md)

#### Defined in

[api.ts:97](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/api.ts#L97)

___

### dashboardApi

• `get` **dashboardApi**(): [`DashboardApi`](generated_client.DashboardApi.md)

#### Returns

[`DashboardApi`](generated_client.DashboardApi.md)

#### Defined in

[api.ts:101](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/api.ts#L101)

___

### devicesApi

• `get` **devicesApi**(): [`DevicesApi`](generated_client.DevicesApi.md)

#### Returns

[`DevicesApi`](generated_client.DevicesApi.md)

#### Defined in

[api.ts:105](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/api.ts#L105)

___

### displayPreferencesApi

• `get` **displayPreferencesApi**(): [`DisplayPreferencesApi`](generated_client.DisplayPreferencesApi.md)

#### Returns

[`DisplayPreferencesApi`](generated_client.DisplayPreferencesApi.md)

#### Defined in

[api.ts:109](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/api.ts#L109)

___

### dlnaApi

• `get` **dlnaApi**(): [`DlnaApi`](generated_client.DlnaApi.md)

#### Returns

[`DlnaApi`](generated_client.DlnaApi.md)

#### Defined in

[api.ts:113](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/api.ts#L113)

___

### dlnaServerApi

• `get` **dlnaServerApi**(): [`DlnaServerApi`](generated_client.DlnaServerApi.md)

#### Returns

[`DlnaServerApi`](generated_client.DlnaServerApi.md)

#### Defined in

[api.ts:117](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/api.ts#L117)

___

### dynamicHlsApi

• `get` **dynamicHlsApi**(): [`DynamicHlsApi`](generated_client.DynamicHlsApi.md)

#### Returns

[`DynamicHlsApi`](generated_client.DynamicHlsApi.md)

#### Defined in

[api.ts:121](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/api.ts#L121)

___

### environmentApi

• `get` **environmentApi**(): [`EnvironmentApi`](generated_client.EnvironmentApi.md)

#### Returns

[`EnvironmentApi`](generated_client.EnvironmentApi.md)

#### Defined in

[api.ts:125](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/api.ts#L125)

___

### filterApi

• `get` **filterApi**(): [`FilterApi`](generated_client.FilterApi.md)

#### Returns

[`FilterApi`](generated_client.FilterApi.md)

#### Defined in

[api.ts:129](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/api.ts#L129)

___

### genresApi

• `get` **genresApi**(): [`GenresApi`](generated_client.GenresApi.md)

#### Returns

[`GenresApi`](generated_client.GenresApi.md)

#### Defined in

[api.ts:133](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/api.ts#L133)

___

### hlsSegmentApi

• `get` **hlsSegmentApi**(): [`HlsSegmentApi`](generated_client.HlsSegmentApi.md)

#### Returns

[`HlsSegmentApi`](generated_client.HlsSegmentApi.md)

#### Defined in

[api.ts:137](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/api.ts#L137)

___

### imageApi

• `get` **imageApi**(): [`ImageApi`](generated_client.ImageApi.md)

#### Returns

[`ImageApi`](generated_client.ImageApi.md)

#### Defined in

[api.ts:141](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/api.ts#L141)

___

### imageByNameApi

• `get` **imageByNameApi**(): [`ImageByNameApi`](generated_client.ImageByNameApi.md)

#### Returns

[`ImageByNameApi`](generated_client.ImageByNameApi.md)

#### Defined in

[api.ts:145](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/api.ts#L145)

___

### instantMixApi

• `get` **instantMixApi**(): [`InstantMixApi`](generated_client.InstantMixApi.md)

#### Returns

[`InstantMixApi`](generated_client.InstantMixApi.md)

#### Defined in

[api.ts:149](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/api.ts#L149)

___

### itemLookupApi

• `get` **itemLookupApi**(): [`ItemLookupApi`](generated_client.ItemLookupApi.md)

#### Returns

[`ItemLookupApi`](generated_client.ItemLookupApi.md)

#### Defined in

[api.ts:153](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/api.ts#L153)

___

### itemRefreshApi

• `get` **itemRefreshApi**(): [`ItemRefreshApi`](generated_client.ItemRefreshApi.md)

#### Returns

[`ItemRefreshApi`](generated_client.ItemRefreshApi.md)

#### Defined in

[api.ts:157](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/api.ts#L157)

___

### itemUpdateApi

• `get` **itemUpdateApi**(): [`ItemUpdateApi`](generated_client.ItemUpdateApi.md)

#### Returns

[`ItemUpdateApi`](generated_client.ItemUpdateApi.md)

#### Defined in

[api.ts:161](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/api.ts#L161)

___

### itemsApi

• `get` **itemsApi**(): [`ItemsApi`](generated_client.ItemsApi.md)

#### Returns

[`ItemsApi`](generated_client.ItemsApi.md)

#### Defined in

[api.ts:165](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/api.ts#L165)

___

### libraryApi

• `get` **libraryApi**(): [`LibraryApi`](generated_client.LibraryApi.md)

#### Returns

[`LibraryApi`](generated_client.LibraryApi.md)

#### Defined in

[api.ts:169](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/api.ts#L169)

___

### libraryStructureApi

• `get` **libraryStructureApi**(): [`LibraryStructureApi`](generated_client.LibraryStructureApi.md)

#### Returns

[`LibraryStructureApi`](generated_client.LibraryStructureApi.md)

#### Defined in

[api.ts:173](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/api.ts#L173)

___

### liveTvApi

• `get` **liveTvApi**(): [`LiveTvApi`](generated_client.LiveTvApi.md)

#### Returns

[`LiveTvApi`](generated_client.LiveTvApi.md)

#### Defined in

[api.ts:177](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/api.ts#L177)

___

### localizationApi

• `get` **localizationApi**(): [`LocalizationApi`](generated_client.LocalizationApi.md)

#### Returns

[`LocalizationApi`](generated_client.LocalizationApi.md)

#### Defined in

[api.ts:181](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/api.ts#L181)

___

### mediaInfoApi

• `get` **mediaInfoApi**(): [`MediaInfoApi`](generated_client.MediaInfoApi.md)

#### Returns

[`MediaInfoApi`](generated_client.MediaInfoApi.md)

#### Defined in

[api.ts:185](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/api.ts#L185)

___

### moviesApi

• `get` **moviesApi**(): [`MoviesApi`](generated_client.MoviesApi.md)

#### Returns

[`MoviesApi`](generated_client.MoviesApi.md)

#### Defined in

[api.ts:189](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/api.ts#L189)

___

### musicGenresApi

• `get` **musicGenresApi**(): [`MusicGenresApi`](generated_client.MusicGenresApi.md)

#### Returns

[`MusicGenresApi`](generated_client.MusicGenresApi.md)

#### Defined in

[api.ts:193](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/api.ts#L193)

___

### notificationsApi

• `get` **notificationsApi**(): [`NotificationsApi`](generated_client.NotificationsApi.md)

#### Returns

[`NotificationsApi`](generated_client.NotificationsApi.md)

#### Defined in

[api.ts:197](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/api.ts#L197)

___

### packageApi

• `get` **packageApi**(): [`PackageApi`](generated_client.PackageApi.md)

#### Returns

[`PackageApi`](generated_client.PackageApi.md)

#### Defined in

[api.ts:201](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/api.ts#L201)

___

### personsApi

• `get` **personsApi**(): [`PersonsApi`](generated_client.PersonsApi.md)

#### Returns

[`PersonsApi`](generated_client.PersonsApi.md)

#### Defined in

[api.ts:205](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/api.ts#L205)

___

### playlistsApi

• `get` **playlistsApi**(): [`PlaylistsApi`](generated_client.PlaylistsApi.md)

#### Returns

[`PlaylistsApi`](generated_client.PlaylistsApi.md)

#### Defined in

[api.ts:209](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/api.ts#L209)

___

### playstateApi

• `get` **playstateApi**(): [`PlaystateApi`](generated_client.PlaystateApi.md)

#### Returns

[`PlaystateApi`](generated_client.PlaystateApi.md)

#### Defined in

[api.ts:213](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/api.ts#L213)

___

### pluginsApi

• `get` **pluginsApi**(): [`PluginsApi`](generated_client.PluginsApi.md)

#### Returns

[`PluginsApi`](generated_client.PluginsApi.md)

#### Defined in

[api.ts:217](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/api.ts#L217)

___

### quickConnectApi

• `get` **quickConnectApi**(): [`QuickConnectApi`](generated_client.QuickConnectApi.md)

#### Returns

[`QuickConnectApi`](generated_client.QuickConnectApi.md)

#### Defined in

[api.ts:221](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/api.ts#L221)

___

### remoteImageApi

• `get` **remoteImageApi**(): [`RemoteImageApi`](generated_client.RemoteImageApi.md)

#### Returns

[`RemoteImageApi`](generated_client.RemoteImageApi.md)

#### Defined in

[api.ts:225](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/api.ts#L225)

___

### scheduledTasksApi

• `get` **scheduledTasksApi**(): [`ScheduledTasksApi`](generated_client.ScheduledTasksApi.md)

#### Returns

[`ScheduledTasksApi`](generated_client.ScheduledTasksApi.md)

#### Defined in

[api.ts:229](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/api.ts#L229)

___

### searchApi

• `get` **searchApi**(): [`SearchApi`](generated_client.SearchApi.md)

#### Returns

[`SearchApi`](generated_client.SearchApi.md)

#### Defined in

[api.ts:233](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/api.ts#L233)

___

### sessionApi

• `get` **sessionApi**(): [`SessionApi`](generated_client.SessionApi.md)

#### Returns

[`SessionApi`](generated_client.SessionApi.md)

#### Defined in

[api.ts:237](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/api.ts#L237)

___

### startupApi

• `get` **startupApi**(): [`StartupApi`](generated_client.StartupApi.md)

#### Returns

[`StartupApi`](generated_client.StartupApi.md)

#### Defined in

[api.ts:241](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/api.ts#L241)

___

### studiosApi

• `get` **studiosApi**(): [`StudiosApi`](generated_client.StudiosApi.md)

#### Returns

[`StudiosApi`](generated_client.StudiosApi.md)

#### Defined in

[api.ts:245](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/api.ts#L245)

___

### subtitleApi

• `get` **subtitleApi**(): [`SubtitleApi`](generated_client.SubtitleApi.md)

#### Returns

[`SubtitleApi`](generated_client.SubtitleApi.md)

#### Defined in

[api.ts:249](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/api.ts#L249)

___

### suggestionsApi

• `get` **suggestionsApi**(): [`SuggestionsApi`](generated_client.SuggestionsApi.md)

#### Returns

[`SuggestionsApi`](generated_client.SuggestionsApi.md)

#### Defined in

[api.ts:253](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/api.ts#L253)

___

### syncPlayApi

• `get` **syncPlayApi**(): [`SyncPlayApi`](generated_client.SyncPlayApi.md)

#### Returns

[`SyncPlayApi`](generated_client.SyncPlayApi.md)

#### Defined in

[api.ts:257](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/api.ts#L257)

___

### systemApi

• `get` **systemApi**(): [`SystemApi`](generated_client.SystemApi.md)

#### Returns

[`SystemApi`](generated_client.SystemApi.md)

#### Defined in

[api.ts:261](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/api.ts#L261)

___

### timeSyncApi

• `get` **timeSyncApi**(): [`TimeSyncApi`](generated_client.TimeSyncApi.md)

#### Returns

[`TimeSyncApi`](generated_client.TimeSyncApi.md)

#### Defined in

[api.ts:265](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/api.ts#L265)

___

### trailersApi

• `get` **trailersApi**(): [`TrailersApi`](generated_client.TrailersApi.md)

#### Returns

[`TrailersApi`](generated_client.TrailersApi.md)

#### Defined in

[api.ts:269](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/api.ts#L269)

___

### tvShowsApi

• `get` **tvShowsApi**(): [`TvShowsApi`](generated_client.TvShowsApi.md)

#### Returns

[`TvShowsApi`](generated_client.TvShowsApi.md)

#### Defined in

[api.ts:273](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/api.ts#L273)

___

### universalAudioApi

• `get` **universalAudioApi**(): [`UniversalAudioApi`](generated_client.UniversalAudioApi.md)

#### Returns

[`UniversalAudioApi`](generated_client.UniversalAudioApi.md)

#### Defined in

[api.ts:277](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/api.ts#L277)

___

### userApi

• `get` **userApi**(): [`UserApi`](generated_client.UserApi.md)

#### Returns

[`UserApi`](generated_client.UserApi.md)

#### Defined in

[api.ts:281](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/api.ts#L281)

___

### userLibraryApi

• `get` **userLibraryApi**(): [`UserLibraryApi`](generated_client.UserLibraryApi.md)

#### Returns

[`UserLibraryApi`](generated_client.UserLibraryApi.md)

#### Defined in

[api.ts:285](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/api.ts#L285)

___

### userViewsApi

• `get` **userViewsApi**(): [`UserViewsApi`](generated_client.UserViewsApi.md)

#### Returns

[`UserViewsApi`](generated_client.UserViewsApi.md)

#### Defined in

[api.ts:289](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/api.ts#L289)

___

### videoAttachmentsApi

• `get` **videoAttachmentsApi**(): [`VideoAttachmentsApi`](generated_client.VideoAttachmentsApi.md)

#### Returns

[`VideoAttachmentsApi`](generated_client.VideoAttachmentsApi.md)

#### Defined in

[api.ts:293](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/api.ts#L293)

___

### videoHlsApi

• `get` **videoHlsApi**(): [`VideoHlsApi`](generated_client.VideoHlsApi.md)

#### Returns

[`VideoHlsApi`](generated_client.VideoHlsApi.md)

#### Defined in

[api.ts:297](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/api.ts#L297)

___

### videosApi

• `get` **videosApi**(): [`VideosApi`](generated_client.VideosApi.md)

#### Returns

[`VideosApi`](generated_client.VideosApi.md)

#### Defined in

[api.ts:301](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/api.ts#L301)

___

### yearsApi

• `get` **yearsApi**(): [`YearsApi`](generated_client.YearsApi.md)

#### Returns

[`YearsApi`](generated_client.YearsApi.md)

#### Defined in

[api.ts:305](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/api.ts#L305)

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

[api.ts:52](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/api.ts#L52)
