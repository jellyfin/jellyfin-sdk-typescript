[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / LiveTvApi

# Class: LiveTvApi

[generated-client](../modules/generated_client.md).LiveTvApi

LiveTvApi - object-oriented interface

**`export`**

## Hierarchy

- `BaseAPI`

  ↳ **`LiveTvApi`**

## Table of contents

### Constructors

- [constructor](generated_client.LiveTvApi.md#constructor)

### Properties

- [axios](generated_client.LiveTvApi.md#axios)
- [basePath](generated_client.LiveTvApi.md#basepath)
- [configuration](generated_client.LiveTvApi.md#configuration)

### Methods

- [addListingProvider](generated_client.LiveTvApi.md#addlistingprovider)
- [addTunerHost](generated_client.LiveTvApi.md#addtunerhost)
- [cancelSeriesTimer](generated_client.LiveTvApi.md#cancelseriestimer)
- [cancelTimer](generated_client.LiveTvApi.md#canceltimer)
- [createSeriesTimer](generated_client.LiveTvApi.md#createseriestimer)
- [createTimer](generated_client.LiveTvApi.md#createtimer)
- [deleteListingProvider](generated_client.LiveTvApi.md#deletelistingprovider)
- [deleteRecording](generated_client.LiveTvApi.md#deleterecording)
- [deleteTunerHost](generated_client.LiveTvApi.md#deletetunerhost)
- [discoverTuners](generated_client.LiveTvApi.md#discovertuners)
- [discvoverTuners](generated_client.LiveTvApi.md#discvovertuners)
- [getChannel](generated_client.LiveTvApi.md#getchannel)
- [getChannelMappingOptions](generated_client.LiveTvApi.md#getchannelmappingoptions)
- [getDefaultListingProvider](generated_client.LiveTvApi.md#getdefaultlistingprovider)
- [getDefaultTimer](generated_client.LiveTvApi.md#getdefaulttimer)
- [getGuideInfo](generated_client.LiveTvApi.md#getguideinfo)
- [getLineups](generated_client.LiveTvApi.md#getlineups)
- [getLiveRecordingFile](generated_client.LiveTvApi.md#getliverecordingfile)
- [getLiveStreamFile](generated_client.LiveTvApi.md#getlivestreamfile)
- [getLiveTvChannels](generated_client.LiveTvApi.md#getlivetvchannels)
- [getLiveTvInfo](generated_client.LiveTvApi.md#getlivetvinfo)
- [getLiveTvPrograms](generated_client.LiveTvApi.md#getlivetvprograms)
- [getProgram](generated_client.LiveTvApi.md#getprogram)
- [getPrograms](generated_client.LiveTvApi.md#getprograms)
- [getRecommendedPrograms](generated_client.LiveTvApi.md#getrecommendedprograms)
- [getRecording](generated_client.LiveTvApi.md#getrecording)
- [getRecordingFolders](generated_client.LiveTvApi.md#getrecordingfolders)
- [getRecordingGroup](generated_client.LiveTvApi.md#getrecordinggroup)
- [getRecordingGroups](generated_client.LiveTvApi.md#getrecordinggroups)
- [getRecordings](generated_client.LiveTvApi.md#getrecordings)
- [getRecordingsSeries](generated_client.LiveTvApi.md#getrecordingsseries)
- [getSchedulesDirectCountries](generated_client.LiveTvApi.md#getschedulesdirectcountries)
- [getSeriesTimer](generated_client.LiveTvApi.md#getseriestimer)
- [getSeriesTimers](generated_client.LiveTvApi.md#getseriestimers)
- [getTimer](generated_client.LiveTvApi.md#gettimer)
- [getTimers](generated_client.LiveTvApi.md#gettimers)
- [getTunerHostTypes](generated_client.LiveTvApi.md#gettunerhosttypes)
- [resetTuner](generated_client.LiveTvApi.md#resettuner)
- [setChannelMapping](generated_client.LiveTvApi.md#setchannelmapping)
- [updateSeriesTimer](generated_client.LiveTvApi.md#updateseriestimer)
- [updateTimer](generated_client.LiveTvApi.md#updatetimer)

## Constructors

### constructor

• **new LiveTvApi**(`configuration?`, `basePath?`, `axios?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](generated_client.Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Inherited from

BaseAPI.constructor

#### Defined in

[generated-client/base.ts:52](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/base.ts#L52)

## Properties

### axios

• `Protected` **axios**: `AxiosInstance` = `globalAxios`

#### Inherited from

BaseAPI.axios

___

### basePath

• `Protected` **basePath**: `string` = `BASE_PATH`

#### Inherited from

BaseAPI.basePath

___

### configuration

• `Protected` **configuration**: `undefined` \| [`Configuration`](generated_client.Configuration.md)

#### Inherited from

BaseAPI.configuration

#### Defined in

[generated-client/base.ts:50](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/base.ts#L50)

## Methods

### addListingProvider

▸ **addListingProvider**(`requestParameters?`, `options?`): `Promise`<`AxiosResponse`<[`ListingsProviderInfo`](../interfaces/generated_client.ListingsProviderInfo.md), `any`\>\>

**`summary`** Adds a listings provider.

**`throws`** {RequiredError}

**`memberof`** LiveTvApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`LiveTvApiAddListingProviderRequest`](../interfaces/generated_client.LiveTvApiAddListingProviderRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`ListingsProviderInfo`](../interfaces/generated_client.ListingsProviderInfo.md), `any`\>\>

#### Defined in

[generated-client/api/live-tv-api.ts:4499](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/live-tv-api.ts#L4499)

___

### addTunerHost

▸ **addTunerHost**(`requestParameters?`, `options?`): `Promise`<`AxiosResponse`<[`TunerHostInfo`](../interfaces/generated_client.TunerHostInfo.md), `any`\>\>

**`summary`** Adds a tuner host.

**`throws`** {RequiredError}

**`memberof`** LiveTvApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`LiveTvApiAddTunerHostRequest`](../interfaces/generated_client.LiveTvApiAddTunerHostRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`TunerHostInfo`](../interfaces/generated_client.TunerHostInfo.md), `any`\>\>

#### Defined in

[generated-client/api/live-tv-api.ts:4511](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/live-tv-api.ts#L4511)

___

### cancelSeriesTimer

▸ **cancelSeriesTimer**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`, `any`\>\>

**`summary`** Cancels a live tv series timer.

**`throws`** {RequiredError}

**`memberof`** LiveTvApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`LiveTvApiCancelSeriesTimerRequest`](../interfaces/generated_client.LiveTvApiCancelSeriesTimerRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`, `any`\>\>

#### Defined in

[generated-client/api/live-tv-api.ts:4523](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/live-tv-api.ts#L4523)

___

### cancelTimer

▸ **cancelTimer**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`, `any`\>\>

**`summary`** Cancels a live tv timer.

**`throws`** {RequiredError}

**`memberof`** LiveTvApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`LiveTvApiCancelTimerRequest`](../interfaces/generated_client.LiveTvApiCancelTimerRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`, `any`\>\>

#### Defined in

[generated-client/api/live-tv-api.ts:4535](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/live-tv-api.ts#L4535)

___

### createSeriesTimer

▸ **createSeriesTimer**(`requestParameters?`, `options?`): `Promise`<`AxiosResponse`<`void`, `any`\>\>

**`summary`** Creates a live tv series timer.

**`throws`** {RequiredError}

**`memberof`** LiveTvApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`LiveTvApiCreateSeriesTimerRequest`](../interfaces/generated_client.LiveTvApiCreateSeriesTimerRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`, `any`\>\>

#### Defined in

[generated-client/api/live-tv-api.ts:4547](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/live-tv-api.ts#L4547)

___

### createTimer

▸ **createTimer**(`requestParameters?`, `options?`): `Promise`<`AxiosResponse`<`void`, `any`\>\>

**`summary`** Creates a live tv timer.

**`throws`** {RequiredError}

**`memberof`** LiveTvApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`LiveTvApiCreateTimerRequest`](../interfaces/generated_client.LiveTvApiCreateTimerRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`, `any`\>\>

#### Defined in

[generated-client/api/live-tv-api.ts:4559](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/live-tv-api.ts#L4559)

___

### deleteListingProvider

▸ **deleteListingProvider**(`requestParameters?`, `options?`): `Promise`<`AxiosResponse`<`void`, `any`\>\>

**`summary`** Delete listing provider.

**`throws`** {RequiredError}

**`memberof`** LiveTvApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`LiveTvApiDeleteListingProviderRequest`](../interfaces/generated_client.LiveTvApiDeleteListingProviderRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`, `any`\>\>

#### Defined in

[generated-client/api/live-tv-api.ts:4571](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/live-tv-api.ts#L4571)

___

### deleteRecording

▸ **deleteRecording**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`, `any`\>\>

**`summary`** Deletes a live tv recording.

**`throws`** {RequiredError}

**`memberof`** LiveTvApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`LiveTvApiDeleteRecordingRequest`](../interfaces/generated_client.LiveTvApiDeleteRecordingRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`, `any`\>\>

#### Defined in

[generated-client/api/live-tv-api.ts:4583](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/live-tv-api.ts#L4583)

___

### deleteTunerHost

▸ **deleteTunerHost**(`requestParameters?`, `options?`): `Promise`<`AxiosResponse`<`void`, `any`\>\>

**`summary`** Deletes a tuner host.

**`throws`** {RequiredError}

**`memberof`** LiveTvApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`LiveTvApiDeleteTunerHostRequest`](../interfaces/generated_client.LiveTvApiDeleteTunerHostRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`, `any`\>\>

#### Defined in

[generated-client/api/live-tv-api.ts:4595](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/live-tv-api.ts#L4595)

___

### discoverTuners

▸ **discoverTuners**(`requestParameters?`, `options?`): `Promise`<`AxiosResponse`<[`TunerHostInfo`](../interfaces/generated_client.TunerHostInfo.md)[], `any`\>\>

**`summary`** Discover tuners.

**`throws`** {RequiredError}

**`memberof`** LiveTvApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`LiveTvApiDiscoverTunersRequest`](../interfaces/generated_client.LiveTvApiDiscoverTunersRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`TunerHostInfo`](../interfaces/generated_client.TunerHostInfo.md)[], `any`\>\>

#### Defined in

[generated-client/api/live-tv-api.ts:4607](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/live-tv-api.ts#L4607)

___

### discvoverTuners

▸ **discvoverTuners**(`requestParameters?`, `options?`): `Promise`<`AxiosResponse`<[`TunerHostInfo`](../interfaces/generated_client.TunerHostInfo.md)[], `any`\>\>

**`summary`** Discover tuners.

**`throws`** {RequiredError}

**`memberof`** LiveTvApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`LiveTvApiDiscvoverTunersRequest`](../interfaces/generated_client.LiveTvApiDiscvoverTunersRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`TunerHostInfo`](../interfaces/generated_client.TunerHostInfo.md)[], `any`\>\>

#### Defined in

[generated-client/api/live-tv-api.ts:4619](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/live-tv-api.ts#L4619)

___

### getChannel

▸ **getChannel**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`BaseItemDto`](../interfaces/generated_client.BaseItemDto.md), `any`\>\>

**`summary`** Gets a live tv channel.

**`throws`** {RequiredError}

**`memberof`** LiveTvApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`LiveTvApiGetChannelRequest`](../interfaces/generated_client.LiveTvApiGetChannelRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`BaseItemDto`](../interfaces/generated_client.BaseItemDto.md), `any`\>\>

#### Defined in

[generated-client/api/live-tv-api.ts:4631](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/live-tv-api.ts#L4631)

___

### getChannelMappingOptions

▸ **getChannelMappingOptions**(`requestParameters?`, `options?`): `Promise`<`AxiosResponse`<[`ChannelMappingOptionsDto`](../interfaces/generated_client.ChannelMappingOptionsDto.md), `any`\>\>

**`summary`** Get channel mapping options.

**`throws`** {RequiredError}

**`memberof`** LiveTvApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`LiveTvApiGetChannelMappingOptionsRequest`](../interfaces/generated_client.LiveTvApiGetChannelMappingOptionsRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`ChannelMappingOptionsDto`](../interfaces/generated_client.ChannelMappingOptionsDto.md), `any`\>\>

#### Defined in

[generated-client/api/live-tv-api.ts:4643](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/live-tv-api.ts#L4643)

___

### getDefaultListingProvider

▸ **getDefaultListingProvider**(`options?`): `Promise`<`AxiosResponse`<[`ListingsProviderInfo`](../interfaces/generated_client.ListingsProviderInfo.md), `any`\>\>

**`summary`** Gets default listings provider info.

**`throws`** {RequiredError}

**`memberof`** LiveTvApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `any` |

#### Returns

`Promise`<`AxiosResponse`<[`ListingsProviderInfo`](../interfaces/generated_client.ListingsProviderInfo.md), `any`\>\>

#### Defined in

[generated-client/api/live-tv-api.ts:4654](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/live-tv-api.ts#L4654)

___

### getDefaultTimer

▸ **getDefaultTimer**(`requestParameters?`, `options?`): `Promise`<`AxiosResponse`<[`SeriesTimerInfoDto`](../interfaces/generated_client.SeriesTimerInfoDto.md), `any`\>\>

**`summary`** Gets the default values for a new timer.

**`throws`** {RequiredError}

**`memberof`** LiveTvApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`LiveTvApiGetDefaultTimerRequest`](../interfaces/generated_client.LiveTvApiGetDefaultTimerRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`SeriesTimerInfoDto`](../interfaces/generated_client.SeriesTimerInfoDto.md), `any`\>\>

#### Defined in

[generated-client/api/live-tv-api.ts:4666](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/live-tv-api.ts#L4666)

___

### getGuideInfo

▸ **getGuideInfo**(`options?`): `Promise`<`AxiosResponse`<[`GuideInfo`](../interfaces/generated_client.GuideInfo.md), `any`\>\>

**`summary`** Get guid info.

**`throws`** {RequiredError}

**`memberof`** LiveTvApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `any` |

#### Returns

`Promise`<`AxiosResponse`<[`GuideInfo`](../interfaces/generated_client.GuideInfo.md), `any`\>\>

#### Defined in

[generated-client/api/live-tv-api.ts:4677](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/live-tv-api.ts#L4677)

___

### getLineups

▸ **getLineups**(`requestParameters?`, `options?`): `Promise`<`AxiosResponse`<[`NameIdPair`](../interfaces/generated_client.NameIdPair.md)[], `any`\>\>

**`summary`** Gets available lineups.

**`throws`** {RequiredError}

**`memberof`** LiveTvApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`LiveTvApiGetLineupsRequest`](../interfaces/generated_client.LiveTvApiGetLineupsRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`NameIdPair`](../interfaces/generated_client.NameIdPair.md)[], `any`\>\>

#### Defined in

[generated-client/api/live-tv-api.ts:4689](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/live-tv-api.ts#L4689)

___

### getLiveRecordingFile

▸ **getLiveRecordingFile**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`any`, `any`\>\>

**`summary`** Gets a live tv recording stream.

**`throws`** {RequiredError}

**`memberof`** LiveTvApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`LiveTvApiGetLiveRecordingFileRequest`](../interfaces/generated_client.LiveTvApiGetLiveRecordingFileRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`any`, `any`\>\>

#### Defined in

[generated-client/api/live-tv-api.ts:4701](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/live-tv-api.ts#L4701)

___

### getLiveStreamFile

▸ **getLiveStreamFile**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`any`, `any`\>\>

**`summary`** Gets a live tv channel stream.

**`throws`** {RequiredError}

**`memberof`** LiveTvApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`LiveTvApiGetLiveStreamFileRequest`](../interfaces/generated_client.LiveTvApiGetLiveStreamFileRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`any`, `any`\>\>

#### Defined in

[generated-client/api/live-tv-api.ts:4713](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/live-tv-api.ts#L4713)

___

### getLiveTvChannels

▸ **getLiveTvChannels**(`requestParameters?`, `options?`): `Promise`<`AxiosResponse`<[`BaseItemDtoQueryResult`](../interfaces/generated_client.BaseItemDtoQueryResult.md), `any`\>\>

**`summary`** Gets available live tv channels.

**`throws`** {RequiredError}

**`memberof`** LiveTvApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`LiveTvApiGetLiveTvChannelsRequest`](../interfaces/generated_client.LiveTvApiGetLiveTvChannelsRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`BaseItemDtoQueryResult`](../interfaces/generated_client.BaseItemDtoQueryResult.md), `any`\>\>

#### Defined in

[generated-client/api/live-tv-api.ts:4725](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/live-tv-api.ts#L4725)

___

### getLiveTvInfo

▸ **getLiveTvInfo**(`options?`): `Promise`<`AxiosResponse`<[`LiveTvInfo`](../interfaces/generated_client.LiveTvInfo.md), `any`\>\>

**`summary`** Gets available live tv services.

**`throws`** {RequiredError}

**`memberof`** LiveTvApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `any` |

#### Returns

`Promise`<`AxiosResponse`<[`LiveTvInfo`](../interfaces/generated_client.LiveTvInfo.md), `any`\>\>

#### Defined in

[generated-client/api/live-tv-api.ts:4736](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/live-tv-api.ts#L4736)

___

### getLiveTvPrograms

▸ **getLiveTvPrograms**(`requestParameters?`, `options?`): `Promise`<`AxiosResponse`<[`BaseItemDtoQueryResult`](../interfaces/generated_client.BaseItemDtoQueryResult.md), `any`\>\>

**`summary`** Gets available live tv epgs.

**`throws`** {RequiredError}

**`memberof`** LiveTvApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`LiveTvApiGetLiveTvProgramsRequest`](../interfaces/generated_client.LiveTvApiGetLiveTvProgramsRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`BaseItemDtoQueryResult`](../interfaces/generated_client.BaseItemDtoQueryResult.md), `any`\>\>

#### Defined in

[generated-client/api/live-tv-api.ts:4748](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/live-tv-api.ts#L4748)

___

### getProgram

▸ **getProgram**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`BaseItemDto`](../interfaces/generated_client.BaseItemDto.md), `any`\>\>

**`summary`** Gets a live tv program.

**`throws`** {RequiredError}

**`memberof`** LiveTvApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`LiveTvApiGetProgramRequest`](../interfaces/generated_client.LiveTvApiGetProgramRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`BaseItemDto`](../interfaces/generated_client.BaseItemDto.md), `any`\>\>

#### Defined in

[generated-client/api/live-tv-api.ts:4760](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/live-tv-api.ts#L4760)

___

### getPrograms

▸ **getPrograms**(`requestParameters?`, `options?`): `Promise`<`AxiosResponse`<[`BaseItemDtoQueryResult`](../interfaces/generated_client.BaseItemDtoQueryResult.md), `any`\>\>

**`summary`** Gets available live tv epgs.

**`throws`** {RequiredError}

**`memberof`** LiveTvApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`LiveTvApiGetProgramsRequest`](../interfaces/generated_client.LiveTvApiGetProgramsRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`BaseItemDtoQueryResult`](../interfaces/generated_client.BaseItemDtoQueryResult.md), `any`\>\>

#### Defined in

[generated-client/api/live-tv-api.ts:4772](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/live-tv-api.ts#L4772)

___

### getRecommendedPrograms

▸ **getRecommendedPrograms**(`requestParameters?`, `options?`): `Promise`<`AxiosResponse`<[`BaseItemDtoQueryResult`](../interfaces/generated_client.BaseItemDtoQueryResult.md), `any`\>\>

**`summary`** Gets recommended live tv epgs.

**`throws`** {RequiredError}

**`memberof`** LiveTvApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`LiveTvApiGetRecommendedProgramsRequest`](../interfaces/generated_client.LiveTvApiGetRecommendedProgramsRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`BaseItemDtoQueryResult`](../interfaces/generated_client.BaseItemDtoQueryResult.md), `any`\>\>

#### Defined in

[generated-client/api/live-tv-api.ts:4784](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/live-tv-api.ts#L4784)

___

### getRecording

▸ **getRecording**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`BaseItemDto`](../interfaces/generated_client.BaseItemDto.md), `any`\>\>

**`summary`** Gets a live tv recording.

**`throws`** {RequiredError}

**`memberof`** LiveTvApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`LiveTvApiGetRecordingRequest`](../interfaces/generated_client.LiveTvApiGetRecordingRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`BaseItemDto`](../interfaces/generated_client.BaseItemDto.md), `any`\>\>

#### Defined in

[generated-client/api/live-tv-api.ts:4796](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/live-tv-api.ts#L4796)

___

### getRecordingFolders

▸ **getRecordingFolders**(`requestParameters?`, `options?`): `Promise`<`AxiosResponse`<[`BaseItemDtoQueryResult`](../interfaces/generated_client.BaseItemDtoQueryResult.md), `any`\>\>

**`summary`** Gets recording folders.

**`throws`** {RequiredError}

**`memberof`** LiveTvApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`LiveTvApiGetRecordingFoldersRequest`](../interfaces/generated_client.LiveTvApiGetRecordingFoldersRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`BaseItemDtoQueryResult`](../interfaces/generated_client.BaseItemDtoQueryResult.md), `any`\>\>

#### Defined in

[generated-client/api/live-tv-api.ts:4808](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/live-tv-api.ts#L4808)

___

### getRecordingGroup

▸ **getRecordingGroup**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`, `any`\>\>

**`summary`** Get recording group.

**`deprecated`**

**`throws`** {RequiredError}

**`memberof`** LiveTvApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`LiveTvApiGetRecordingGroupRequest`](../interfaces/generated_client.LiveTvApiGetRecordingGroupRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`, `any`\>\>

#### Defined in

[generated-client/api/live-tv-api.ts:4821](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/live-tv-api.ts#L4821)

___

### getRecordingGroups

▸ **getRecordingGroups**(`requestParameters?`, `options?`): `Promise`<`AxiosResponse`<[`BaseItemDtoQueryResult`](../interfaces/generated_client.BaseItemDtoQueryResult.md), `any`\>\>

**`summary`** Gets live tv recording groups.

**`deprecated`**

**`throws`** {RequiredError}

**`memberof`** LiveTvApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`LiveTvApiGetRecordingGroupsRequest`](../interfaces/generated_client.LiveTvApiGetRecordingGroupsRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`BaseItemDtoQueryResult`](../interfaces/generated_client.BaseItemDtoQueryResult.md), `any`\>\>

#### Defined in

[generated-client/api/live-tv-api.ts:4834](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/live-tv-api.ts#L4834)

___

### getRecordings

▸ **getRecordings**(`requestParameters?`, `options?`): `Promise`<`AxiosResponse`<[`BaseItemDtoQueryResult`](../interfaces/generated_client.BaseItemDtoQueryResult.md), `any`\>\>

**`summary`** Gets live tv recordings.

**`throws`** {RequiredError}

**`memberof`** LiveTvApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`LiveTvApiGetRecordingsRequest`](../interfaces/generated_client.LiveTvApiGetRecordingsRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`BaseItemDtoQueryResult`](../interfaces/generated_client.BaseItemDtoQueryResult.md), `any`\>\>

#### Defined in

[generated-client/api/live-tv-api.ts:4846](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/live-tv-api.ts#L4846)

___

### getRecordingsSeries

▸ **getRecordingsSeries**(`requestParameters?`, `options?`): `Promise`<`AxiosResponse`<[`BaseItemDtoQueryResult`](../interfaces/generated_client.BaseItemDtoQueryResult.md), `any`\>\>

**`summary`** Gets live tv recording series.

**`deprecated`**

**`throws`** {RequiredError}

**`memberof`** LiveTvApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`LiveTvApiGetRecordingsSeriesRequest`](../interfaces/generated_client.LiveTvApiGetRecordingsSeriesRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`BaseItemDtoQueryResult`](../interfaces/generated_client.BaseItemDtoQueryResult.md), `any`\>\>

#### Defined in

[generated-client/api/live-tv-api.ts:4859](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/live-tv-api.ts#L4859)

___

### getSchedulesDirectCountries

▸ **getSchedulesDirectCountries**(`options?`): `Promise`<`AxiosResponse`<`any`, `any`\>\>

**`summary`** Gets available countries.

**`throws`** {RequiredError}

**`memberof`** LiveTvApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `any` |

#### Returns

`Promise`<`AxiosResponse`<`any`, `any`\>\>

#### Defined in

[generated-client/api/live-tv-api.ts:4870](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/live-tv-api.ts#L4870)

___

### getSeriesTimer

▸ **getSeriesTimer**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`SeriesTimerInfoDto`](../interfaces/generated_client.SeriesTimerInfoDto.md), `any`\>\>

**`summary`** Gets a live tv series timer.

**`throws`** {RequiredError}

**`memberof`** LiveTvApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`LiveTvApiGetSeriesTimerRequest`](../interfaces/generated_client.LiveTvApiGetSeriesTimerRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`SeriesTimerInfoDto`](../interfaces/generated_client.SeriesTimerInfoDto.md), `any`\>\>

#### Defined in

[generated-client/api/live-tv-api.ts:4882](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/live-tv-api.ts#L4882)

___

### getSeriesTimers

▸ **getSeriesTimers**(`requestParameters?`, `options?`): `Promise`<`AxiosResponse`<[`SeriesTimerInfoDtoQueryResult`](../interfaces/generated_client.SeriesTimerInfoDtoQueryResult.md), `any`\>\>

**`summary`** Gets live tv series timers.

**`throws`** {RequiredError}

**`memberof`** LiveTvApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`LiveTvApiGetSeriesTimersRequest`](../interfaces/generated_client.LiveTvApiGetSeriesTimersRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`SeriesTimerInfoDtoQueryResult`](../interfaces/generated_client.SeriesTimerInfoDtoQueryResult.md), `any`\>\>

#### Defined in

[generated-client/api/live-tv-api.ts:4894](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/live-tv-api.ts#L4894)

___

### getTimer

▸ **getTimer**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`TimerInfoDto`](../interfaces/generated_client.TimerInfoDto.md), `any`\>\>

**`summary`** Gets a timer.

**`throws`** {RequiredError}

**`memberof`** LiveTvApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`LiveTvApiGetTimerRequest`](../interfaces/generated_client.LiveTvApiGetTimerRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`TimerInfoDto`](../interfaces/generated_client.TimerInfoDto.md), `any`\>\>

#### Defined in

[generated-client/api/live-tv-api.ts:4906](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/live-tv-api.ts#L4906)

___

### getTimers

▸ **getTimers**(`requestParameters?`, `options?`): `Promise`<`AxiosResponse`<[`TimerInfoDtoQueryResult`](../interfaces/generated_client.TimerInfoDtoQueryResult.md), `any`\>\>

**`summary`** Gets the live tv timers.

**`throws`** {RequiredError}

**`memberof`** LiveTvApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`LiveTvApiGetTimersRequest`](../interfaces/generated_client.LiveTvApiGetTimersRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`TimerInfoDtoQueryResult`](../interfaces/generated_client.TimerInfoDtoQueryResult.md), `any`\>\>

#### Defined in

[generated-client/api/live-tv-api.ts:4918](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/live-tv-api.ts#L4918)

___

### getTunerHostTypes

▸ **getTunerHostTypes**(`options?`): `Promise`<`AxiosResponse`<[`NameIdPair`](../interfaces/generated_client.NameIdPair.md)[], `any`\>\>

**`summary`** Get tuner host types.

**`throws`** {RequiredError}

**`memberof`** LiveTvApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `any` |

#### Returns

`Promise`<`AxiosResponse`<[`NameIdPair`](../interfaces/generated_client.NameIdPair.md)[], `any`\>\>

#### Defined in

[generated-client/api/live-tv-api.ts:4929](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/live-tv-api.ts#L4929)

___

### resetTuner

▸ **resetTuner**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`, `any`\>\>

**`summary`** Resets a tv tuner.

**`throws`** {RequiredError}

**`memberof`** LiveTvApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`LiveTvApiResetTunerRequest`](../interfaces/generated_client.LiveTvApiResetTunerRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`, `any`\>\>

#### Defined in

[generated-client/api/live-tv-api.ts:4941](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/live-tv-api.ts#L4941)

___

### setChannelMapping

▸ **setChannelMapping**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`TunerChannelMapping`](../interfaces/generated_client.TunerChannelMapping.md), `any`\>\>

**`summary`** Set channel mappings.

**`throws`** {RequiredError}

**`memberof`** LiveTvApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`LiveTvApiSetChannelMappingRequest`](../interfaces/generated_client.LiveTvApiSetChannelMappingRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`TunerChannelMapping`](../interfaces/generated_client.TunerChannelMapping.md), `any`\>\>

#### Defined in

[generated-client/api/live-tv-api.ts:4953](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/live-tv-api.ts#L4953)

___

### updateSeriesTimer

▸ **updateSeriesTimer**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`, `any`\>\>

**`summary`** Updates a live tv series timer.

**`throws`** {RequiredError}

**`memberof`** LiveTvApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`LiveTvApiUpdateSeriesTimerRequest`](../interfaces/generated_client.LiveTvApiUpdateSeriesTimerRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`, `any`\>\>

#### Defined in

[generated-client/api/live-tv-api.ts:4965](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/live-tv-api.ts#L4965)

___

### updateTimer

▸ **updateTimer**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`, `any`\>\>

**`summary`** Updates a live tv timer.

**`throws`** {RequiredError}

**`memberof`** LiveTvApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`LiveTvApiUpdateTimerRequest`](../interfaces/generated_client.LiveTvApiUpdateTimerRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`, `any`\>\>

#### Defined in

[generated-client/api/live-tv-api.ts:4977](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/live-tv-api.ts#L4977)
