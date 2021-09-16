[jellyfin-sdk-typescript](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / Api

# Class: Api

[index](../modules/index.md).Api

Class representing the Jellyfin API.

## Table of contents

### Constructors

- [constructor](index.Api.md#constructor)

### Properties

- [accessToken](index.Api.md#accesstoken)
- [axiosInstance](index.Api.md#axiosinstance)
- [clientInfo](index.Api.md#clientinfo)
- [configuration](index.Api.md#configuration)
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

• **new Api**(`clientInfo`, `deviceInfo`, `configuration`, `axiosInstance?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `clientInfo` | [`ClientInfo`](../interfaces/index.ClientInfo.md) |
| `deviceInfo` | [`DeviceInfo`](../interfaces/index.DeviceInfo.md) |
| `configuration` | [`Configuration`](index.Configuration.md) |
| `axiosInstance` | `AxiosStatic` |

#### Defined in

[api.ts:28](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/api.ts#L28)

## Properties

### accessToken

• **accessToken**: `string` = `''`

#### Defined in

[api.ts:26](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/api.ts#L26)

___

### axiosInstance

• **axiosInstance**: `AxiosStatic`

#### Defined in

[api.ts:25](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/api.ts#L25)

___

### clientInfo

• **clientInfo**: [`ClientInfo`](../interfaces/index.ClientInfo.md)

#### Defined in

[api.ts:22](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/api.ts#L22)

___

### configuration

• **configuration**: [`Configuration`](index.Configuration.md)

#### Defined in

[api.ts:24](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/api.ts#L24)

___

### deviceInfo

• **deviceInfo**: [`DeviceInfo`](../interfaces/index.DeviceInfo.md)

#### Defined in

[api.ts:23](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/api.ts#L23)

## Accessors

### activityLogApi

• `get` **activityLogApi**(): [`ActivityLogApi`](generated_client.ActivityLogApi.md)

#### Returns

[`ActivityLogApi`](generated_client.ActivityLogApi.md)

#### Defined in

[api.ts:68](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/api.ts#L68)

___

### apiKeyApi

• `get` **apiKeyApi**(): [`ApiKeyApi`](generated_client.ApiKeyApi.md)

#### Returns

[`ApiKeyApi`](generated_client.ApiKeyApi.md)

#### Defined in

[api.ts:72](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/api.ts#L72)

___

### artistsApi

• `get` **artistsApi**(): [`ArtistsApi`](generated_client.ArtistsApi.md)

#### Returns

[`ArtistsApi`](generated_client.ArtistsApi.md)

#### Defined in

[api.ts:76](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/api.ts#L76)

___

### audioApi

• `get` **audioApi**(): [`AudioApi`](generated_client.AudioApi.md)

#### Returns

[`AudioApi`](generated_client.AudioApi.md)

#### Defined in

[api.ts:80](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/api.ts#L80)

___

### authorizationHeader

• `get` **authorizationHeader**(): `string`

#### Returns

`string`

#### Defined in

[api.ts:64](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/api.ts#L64)

___

### brandingApi

• `get` **brandingApi**(): [`BrandingApi`](generated_client.BrandingApi.md)

#### Returns

[`BrandingApi`](generated_client.BrandingApi.md)

#### Defined in

[api.ts:84](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/api.ts#L84)

___

### channelsApi

• `get` **channelsApi**(): [`ChannelsApi`](generated_client.ChannelsApi.md)

#### Returns

[`ChannelsApi`](generated_client.ChannelsApi.md)

#### Defined in

[api.ts:88](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/api.ts#L88)

___

### collectionApi

• `get` **collectionApi**(): [`CollectionApi`](generated_client.CollectionApi.md)

#### Returns

[`CollectionApi`](generated_client.CollectionApi.md)

#### Defined in

[api.ts:92](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/api.ts#L92)

___

### configurationApi

• `get` **configurationApi**(): [`ConfigurationApi`](generated_client.ConfigurationApi.md)

#### Returns

[`ConfigurationApi`](generated_client.ConfigurationApi.md)

#### Defined in

[api.ts:96](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/api.ts#L96)

___

### dashboardApi

• `get` **dashboardApi**(): [`DashboardApi`](generated_client.DashboardApi.md)

#### Returns

[`DashboardApi`](generated_client.DashboardApi.md)

#### Defined in

[api.ts:100](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/api.ts#L100)

___

### devicesApi

• `get` **devicesApi**(): [`DevicesApi`](generated_client.DevicesApi.md)

#### Returns

[`DevicesApi`](generated_client.DevicesApi.md)

#### Defined in

[api.ts:104](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/api.ts#L104)

___

### displayPreferencesApi

• `get` **displayPreferencesApi**(): [`DisplayPreferencesApi`](generated_client.DisplayPreferencesApi.md)

#### Returns

[`DisplayPreferencesApi`](generated_client.DisplayPreferencesApi.md)

#### Defined in

[api.ts:108](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/api.ts#L108)

___

### dlnaApi

• `get` **dlnaApi**(): [`DlnaApi`](generated_client.DlnaApi.md)

#### Returns

[`DlnaApi`](generated_client.DlnaApi.md)

#### Defined in

[api.ts:112](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/api.ts#L112)

___

### dlnaServerApi

• `get` **dlnaServerApi**(): [`DlnaServerApi`](generated_client.DlnaServerApi.md)

#### Returns

[`DlnaServerApi`](generated_client.DlnaServerApi.md)

#### Defined in

[api.ts:116](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/api.ts#L116)

___

### dynamicHlsApi

• `get` **dynamicHlsApi**(): [`DynamicHlsApi`](generated_client.DynamicHlsApi.md)

#### Returns

[`DynamicHlsApi`](generated_client.DynamicHlsApi.md)

#### Defined in

[api.ts:120](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/api.ts#L120)

___

### environmentApi

• `get` **environmentApi**(): [`EnvironmentApi`](generated_client.EnvironmentApi.md)

#### Returns

[`EnvironmentApi`](generated_client.EnvironmentApi.md)

#### Defined in

[api.ts:124](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/api.ts#L124)

___

### filterApi

• `get` **filterApi**(): [`FilterApi`](generated_client.FilterApi.md)

#### Returns

[`FilterApi`](generated_client.FilterApi.md)

#### Defined in

[api.ts:128](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/api.ts#L128)

___

### genresApi

• `get` **genresApi**(): [`GenresApi`](generated_client.GenresApi.md)

#### Returns

[`GenresApi`](generated_client.GenresApi.md)

#### Defined in

[api.ts:132](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/api.ts#L132)

___

### hlsSegmentApi

• `get` **hlsSegmentApi**(): [`HlsSegmentApi`](generated_client.HlsSegmentApi.md)

#### Returns

[`HlsSegmentApi`](generated_client.HlsSegmentApi.md)

#### Defined in

[api.ts:136](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/api.ts#L136)

___

### imageApi

• `get` **imageApi**(): [`ImageApi`](generated_client.ImageApi.md)

#### Returns

[`ImageApi`](generated_client.ImageApi.md)

#### Defined in

[api.ts:140](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/api.ts#L140)

___

### imageByNameApi

• `get` **imageByNameApi**(): [`ImageByNameApi`](generated_client.ImageByNameApi.md)

#### Returns

[`ImageByNameApi`](generated_client.ImageByNameApi.md)

#### Defined in

[api.ts:144](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/api.ts#L144)

___

### instantMixApi

• `get` **instantMixApi**(): [`InstantMixApi`](generated_client.InstantMixApi.md)

#### Returns

[`InstantMixApi`](generated_client.InstantMixApi.md)

#### Defined in

[api.ts:148](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/api.ts#L148)

___

### itemLookupApi

• `get` **itemLookupApi**(): [`ItemLookupApi`](generated_client.ItemLookupApi.md)

#### Returns

[`ItemLookupApi`](generated_client.ItemLookupApi.md)

#### Defined in

[api.ts:152](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/api.ts#L152)

___

### itemRefreshApi

• `get` **itemRefreshApi**(): [`ItemRefreshApi`](generated_client.ItemRefreshApi.md)

#### Returns

[`ItemRefreshApi`](generated_client.ItemRefreshApi.md)

#### Defined in

[api.ts:156](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/api.ts#L156)

___

### itemUpdateApi

• `get` **itemUpdateApi**(): [`ItemUpdateApi`](generated_client.ItemUpdateApi.md)

#### Returns

[`ItemUpdateApi`](generated_client.ItemUpdateApi.md)

#### Defined in

[api.ts:160](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/api.ts#L160)

___

### itemsApi

• `get` **itemsApi**(): [`ItemsApi`](generated_client.ItemsApi.md)

#### Returns

[`ItemsApi`](generated_client.ItemsApi.md)

#### Defined in

[api.ts:164](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/api.ts#L164)

___

### libraryApi

• `get` **libraryApi**(): [`LibraryApi`](generated_client.LibraryApi.md)

#### Returns

[`LibraryApi`](generated_client.LibraryApi.md)

#### Defined in

[api.ts:168](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/api.ts#L168)

___

### libraryStructureApi

• `get` **libraryStructureApi**(): [`LibraryStructureApi`](generated_client.LibraryStructureApi.md)

#### Returns

[`LibraryStructureApi`](generated_client.LibraryStructureApi.md)

#### Defined in

[api.ts:172](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/api.ts#L172)

___

### liveTvApi

• `get` **liveTvApi**(): [`LiveTvApi`](generated_client.LiveTvApi.md)

#### Returns

[`LiveTvApi`](generated_client.LiveTvApi.md)

#### Defined in

[api.ts:176](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/api.ts#L176)

___

### localizationApi

• `get` **localizationApi**(): [`LocalizationApi`](generated_client.LocalizationApi.md)

#### Returns

[`LocalizationApi`](generated_client.LocalizationApi.md)

#### Defined in

[api.ts:180](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/api.ts#L180)

___

### mediaInfoApi

• `get` **mediaInfoApi**(): [`MediaInfoApi`](generated_client.MediaInfoApi.md)

#### Returns

[`MediaInfoApi`](generated_client.MediaInfoApi.md)

#### Defined in

[api.ts:184](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/api.ts#L184)

___

### moviesApi

• `get` **moviesApi**(): [`MoviesApi`](generated_client.MoviesApi.md)

#### Returns

[`MoviesApi`](generated_client.MoviesApi.md)

#### Defined in

[api.ts:188](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/api.ts#L188)

___

### musicGenresApi

• `get` **musicGenresApi**(): [`MusicGenresApi`](generated_client.MusicGenresApi.md)

#### Returns

[`MusicGenresApi`](generated_client.MusicGenresApi.md)

#### Defined in

[api.ts:192](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/api.ts#L192)

___

### notificationsApi

• `get` **notificationsApi**(): [`NotificationsApi`](generated_client.NotificationsApi.md)

#### Returns

[`NotificationsApi`](generated_client.NotificationsApi.md)

#### Defined in

[api.ts:196](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/api.ts#L196)

___

### packageApi

• `get` **packageApi**(): [`PackageApi`](generated_client.PackageApi.md)

#### Returns

[`PackageApi`](generated_client.PackageApi.md)

#### Defined in

[api.ts:200](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/api.ts#L200)

___

### personsApi

• `get` **personsApi**(): [`PersonsApi`](generated_client.PersonsApi.md)

#### Returns

[`PersonsApi`](generated_client.PersonsApi.md)

#### Defined in

[api.ts:204](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/api.ts#L204)

___

### playlistsApi

• `get` **playlistsApi**(): [`PlaylistsApi`](generated_client.PlaylistsApi.md)

#### Returns

[`PlaylistsApi`](generated_client.PlaylistsApi.md)

#### Defined in

[api.ts:208](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/api.ts#L208)

___

### playstateApi

• `get` **playstateApi**(): [`PlaystateApi`](generated_client.PlaystateApi.md)

#### Returns

[`PlaystateApi`](generated_client.PlaystateApi.md)

#### Defined in

[api.ts:212](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/api.ts#L212)

___

### pluginsApi

• `get` **pluginsApi**(): [`PluginsApi`](generated_client.PluginsApi.md)

#### Returns

[`PluginsApi`](generated_client.PluginsApi.md)

#### Defined in

[api.ts:216](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/api.ts#L216)

___

### quickConnectApi

• `get` **quickConnectApi**(): [`QuickConnectApi`](generated_client.QuickConnectApi.md)

#### Returns

[`QuickConnectApi`](generated_client.QuickConnectApi.md)

#### Defined in

[api.ts:220](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/api.ts#L220)

___

### remoteImageApi

• `get` **remoteImageApi**(): [`RemoteImageApi`](generated_client.RemoteImageApi.md)

#### Returns

[`RemoteImageApi`](generated_client.RemoteImageApi.md)

#### Defined in

[api.ts:224](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/api.ts#L224)

___

### scheduledTasksApi

• `get` **scheduledTasksApi**(): [`ScheduledTasksApi`](generated_client.ScheduledTasksApi.md)

#### Returns

[`ScheduledTasksApi`](generated_client.ScheduledTasksApi.md)

#### Defined in

[api.ts:228](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/api.ts#L228)

___

### searchApi

• `get` **searchApi**(): [`SearchApi`](generated_client.SearchApi.md)

#### Returns

[`SearchApi`](generated_client.SearchApi.md)

#### Defined in

[api.ts:232](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/api.ts#L232)

___

### sessionApi

• `get` **sessionApi**(): [`SessionApi`](generated_client.SessionApi.md)

#### Returns

[`SessionApi`](generated_client.SessionApi.md)

#### Defined in

[api.ts:236](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/api.ts#L236)

___

### startupApi

• `get` **startupApi**(): [`StartupApi`](generated_client.StartupApi.md)

#### Returns

[`StartupApi`](generated_client.StartupApi.md)

#### Defined in

[api.ts:240](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/api.ts#L240)

___

### studiosApi

• `get` **studiosApi**(): [`StudiosApi`](generated_client.StudiosApi.md)

#### Returns

[`StudiosApi`](generated_client.StudiosApi.md)

#### Defined in

[api.ts:244](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/api.ts#L244)

___

### subtitleApi

• `get` **subtitleApi**(): [`SubtitleApi`](generated_client.SubtitleApi.md)

#### Returns

[`SubtitleApi`](generated_client.SubtitleApi.md)

#### Defined in

[api.ts:248](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/api.ts#L248)

___

### suggestionsApi

• `get` **suggestionsApi**(): [`SuggestionsApi`](generated_client.SuggestionsApi.md)

#### Returns

[`SuggestionsApi`](generated_client.SuggestionsApi.md)

#### Defined in

[api.ts:252](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/api.ts#L252)

___

### syncPlayApi

• `get` **syncPlayApi**(): [`SyncPlayApi`](generated_client.SyncPlayApi.md)

#### Returns

[`SyncPlayApi`](generated_client.SyncPlayApi.md)

#### Defined in

[api.ts:256](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/api.ts#L256)

___

### systemApi

• `get` **systemApi**(): [`SystemApi`](generated_client.SystemApi.md)

#### Returns

[`SystemApi`](generated_client.SystemApi.md)

#### Defined in

[api.ts:260](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/api.ts#L260)

___

### timeSyncApi

• `get` **timeSyncApi**(): [`TimeSyncApi`](generated_client.TimeSyncApi.md)

#### Returns

[`TimeSyncApi`](generated_client.TimeSyncApi.md)

#### Defined in

[api.ts:264](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/api.ts#L264)

___

### trailersApi

• `get` **trailersApi**(): [`TrailersApi`](generated_client.TrailersApi.md)

#### Returns

[`TrailersApi`](generated_client.TrailersApi.md)

#### Defined in

[api.ts:268](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/api.ts#L268)

___

### tvShowsApi

• `get` **tvShowsApi**(): [`TvShowsApi`](generated_client.TvShowsApi.md)

#### Returns

[`TvShowsApi`](generated_client.TvShowsApi.md)

#### Defined in

[api.ts:272](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/api.ts#L272)

___

### universalAudioApi

• `get` **universalAudioApi**(): [`UniversalAudioApi`](generated_client.UniversalAudioApi.md)

#### Returns

[`UniversalAudioApi`](generated_client.UniversalAudioApi.md)

#### Defined in

[api.ts:276](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/api.ts#L276)

___

### userApi

• `get` **userApi**(): [`UserApi`](generated_client.UserApi.md)

#### Returns

[`UserApi`](generated_client.UserApi.md)

#### Defined in

[api.ts:280](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/api.ts#L280)

___

### userLibraryApi

• `get` **userLibraryApi**(): [`UserLibraryApi`](generated_client.UserLibraryApi.md)

#### Returns

[`UserLibraryApi`](generated_client.UserLibraryApi.md)

#### Defined in

[api.ts:284](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/api.ts#L284)

___

### userViewsApi

• `get` **userViewsApi**(): [`UserViewsApi`](generated_client.UserViewsApi.md)

#### Returns

[`UserViewsApi`](generated_client.UserViewsApi.md)

#### Defined in

[api.ts:288](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/api.ts#L288)

___

### videoAttachmentsApi

• `get` **videoAttachmentsApi**(): [`VideoAttachmentsApi`](generated_client.VideoAttachmentsApi.md)

#### Returns

[`VideoAttachmentsApi`](generated_client.VideoAttachmentsApi.md)

#### Defined in

[api.ts:292](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/api.ts#L292)

___

### videoHlsApi

• `get` **videoHlsApi**(): [`VideoHlsApi`](generated_client.VideoHlsApi.md)

#### Returns

[`VideoHlsApi`](generated_client.VideoHlsApi.md)

#### Defined in

[api.ts:296](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/api.ts#L296)

___

### videosApi

• `get` **videosApi**(): [`VideosApi`](generated_client.VideosApi.md)

#### Returns

[`VideosApi`](generated_client.VideosApi.md)

#### Defined in

[api.ts:300](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/api.ts#L300)

___

### yearsApi

• `get` **yearsApi**(): [`YearsApi`](generated_client.YearsApi.md)

#### Returns

[`YearsApi`](generated_client.YearsApi.md)

#### Defined in

[api.ts:304](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/api.ts#L304)

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

[api.ts:50](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/api.ts#L50)
