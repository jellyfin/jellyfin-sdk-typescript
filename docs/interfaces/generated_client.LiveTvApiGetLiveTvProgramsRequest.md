[jellyfin-sdk-typescript](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / LiveTvApiGetLiveTvProgramsRequest

# Interface: LiveTvApiGetLiveTvProgramsRequest

[generated-client](../modules/generated_client.md).LiveTvApiGetLiveTvProgramsRequest

Request parameters for getLiveTvPrograms operation in LiveTvApi.

**`export`**

**`interface`** LiveTvApiGetLiveTvProgramsRequest

## Table of contents

### Properties

- [channelIds](generated_client.LiveTvApiGetLiveTvProgramsRequest.md#channelids)
- [enableImageTypes](generated_client.LiveTvApiGetLiveTvProgramsRequest.md#enableimagetypes)
- [enableImages](generated_client.LiveTvApiGetLiveTvProgramsRequest.md#enableimages)
- [enableTotalRecordCount](generated_client.LiveTvApiGetLiveTvProgramsRequest.md#enabletotalrecordcount)
- [enableUserData](generated_client.LiveTvApiGetLiveTvProgramsRequest.md#enableuserdata)
- [fields](generated_client.LiveTvApiGetLiveTvProgramsRequest.md#fields)
- [genreIds](generated_client.LiveTvApiGetLiveTvProgramsRequest.md#genreids)
- [genres](generated_client.LiveTvApiGetLiveTvProgramsRequest.md#genres)
- [hasAired](generated_client.LiveTvApiGetLiveTvProgramsRequest.md#hasaired)
- [imageTypeLimit](generated_client.LiveTvApiGetLiveTvProgramsRequest.md#imagetypelimit)
- [isAiring](generated_client.LiveTvApiGetLiveTvProgramsRequest.md#isairing)
- [isKids](generated_client.LiveTvApiGetLiveTvProgramsRequest.md#iskids)
- [isMovie](generated_client.LiveTvApiGetLiveTvProgramsRequest.md#ismovie)
- [isNews](generated_client.LiveTvApiGetLiveTvProgramsRequest.md#isnews)
- [isSeries](generated_client.LiveTvApiGetLiveTvProgramsRequest.md#isseries)
- [isSports](generated_client.LiveTvApiGetLiveTvProgramsRequest.md#issports)
- [librarySeriesId](generated_client.LiveTvApiGetLiveTvProgramsRequest.md#libraryseriesid)
- [limit](generated_client.LiveTvApiGetLiveTvProgramsRequest.md#limit)
- [maxEndDate](generated_client.LiveTvApiGetLiveTvProgramsRequest.md#maxenddate)
- [maxStartDate](generated_client.LiveTvApiGetLiveTvProgramsRequest.md#maxstartdate)
- [minEndDate](generated_client.LiveTvApiGetLiveTvProgramsRequest.md#minenddate)
- [minStartDate](generated_client.LiveTvApiGetLiveTvProgramsRequest.md#minstartdate)
- [seriesTimerId](generated_client.LiveTvApiGetLiveTvProgramsRequest.md#seriestimerid)
- [sortBy](generated_client.LiveTvApiGetLiveTvProgramsRequest.md#sortby)
- [sortOrder](generated_client.LiveTvApiGetLiveTvProgramsRequest.md#sortorder)
- [startIndex](generated_client.LiveTvApiGetLiveTvProgramsRequest.md#startindex)
- [userId](generated_client.LiveTvApiGetLiveTvProgramsRequest.md#userid)

## Properties

### channelIds

• `Optional` `Readonly` **channelIds**: `string`[]

The channels to return guide information for.

**`memberof`** LiveTvApiGetLiveTvPrograms

#### Defined in

[generated-client/api/live-tv-api.ts:3683](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/live-tv-api.ts#L3683)

___

### enableImageTypes

• `Optional` `Readonly` **enableImageTypes**: [`ImageType`](../enums/generated_client.ImageType.md)[]

Optional. The image types to include in the output.

**`memberof`** LiveTvApiGetLiveTvPrograms

#### Defined in

[generated-client/api/live-tv-api.ts:3830](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/live-tv-api.ts#L3830)

___

### enableImages

• `Optional` `Readonly` **enableImages**: `boolean`

Optional. Include image information in output.

**`memberof`** LiveTvApiGetLiveTvPrograms

#### Defined in

[generated-client/api/live-tv-api.ts:3816](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/live-tv-api.ts#L3816)

___

### enableTotalRecordCount

• `Optional` `Readonly` **enableTotalRecordCount**: `boolean`

Retrieve total record count.

**`memberof`** LiveTvApiGetLiveTvPrograms

#### Defined in

[generated-client/api/live-tv-api.ts:3865](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/live-tv-api.ts#L3865)

___

### enableUserData

• `Optional` `Readonly` **enableUserData**: `boolean`

Optional. Include user data.

**`memberof`** LiveTvApiGetLiveTvPrograms

#### Defined in

[generated-client/api/live-tv-api.ts:3837](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/live-tv-api.ts#L3837)

___

### fields

• `Optional` `Readonly` **fields**: [`ItemFields`](../enums/generated_client.ItemFields.md)[]

Optional. Specify additional fields of information to return in the output.

**`memberof`** LiveTvApiGetLiveTvPrograms

#### Defined in

[generated-client/api/live-tv-api.ts:3858](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/live-tv-api.ts#L3858)

___

### genreIds

• `Optional` `Readonly` **genreIds**: `string`[]

The genre ids to return guide information for.

**`memberof`** LiveTvApiGetLiveTvPrograms

#### Defined in

[generated-client/api/live-tv-api.ts:3809](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/live-tv-api.ts#L3809)

___

### genres

• `Optional` `Readonly` **genres**: `string`[]

The genres to return guide information for.

**`memberof`** LiveTvApiGetLiveTvPrograms

#### Defined in

[generated-client/api/live-tv-api.ts:3802](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/live-tv-api.ts#L3802)

___

### hasAired

• `Optional` `Readonly` **hasAired**: `boolean`

Optional. Filter by programs that have completed airing, or not.

**`memberof`** LiveTvApiGetLiveTvPrograms

#### Defined in

[generated-client/api/live-tv-api.ts:3704](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/live-tv-api.ts#L3704)

___

### imageTypeLimit

• `Optional` `Readonly` **imageTypeLimit**: `number`

Optional. The max number of images to return, per image type.

**`memberof`** LiveTvApiGetLiveTvPrograms

#### Defined in

[generated-client/api/live-tv-api.ts:3823](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/live-tv-api.ts#L3823)

___

### isAiring

• `Optional` `Readonly` **isAiring**: `boolean`

Optional. Filter by programs that are currently airing, or not.

**`memberof`** LiveTvApiGetLiveTvPrograms

#### Defined in

[generated-client/api/live-tv-api.ts:3711](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/live-tv-api.ts#L3711)

___

### isKids

• `Optional` `Readonly` **isKids**: `boolean`

Optional. Filter for kids.

**`memberof`** LiveTvApiGetLiveTvPrograms

#### Defined in

[generated-client/api/live-tv-api.ts:3760](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/live-tv-api.ts#L3760)

___

### isMovie

• `Optional` `Readonly` **isMovie**: `boolean`

Optional. Filter for movies.

**`memberof`** LiveTvApiGetLiveTvPrograms

#### Defined in

[generated-client/api/live-tv-api.ts:3739](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/live-tv-api.ts#L3739)

___

### isNews

• `Optional` `Readonly` **isNews**: `boolean`

Optional. Filter for news.

**`memberof`** LiveTvApiGetLiveTvPrograms

#### Defined in

[generated-client/api/live-tv-api.ts:3753](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/live-tv-api.ts#L3753)

___

### isSeries

• `Optional` `Readonly` **isSeries**: `boolean`

Optional. Filter for series.

**`memberof`** LiveTvApiGetLiveTvPrograms

#### Defined in

[generated-client/api/live-tv-api.ts:3746](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/live-tv-api.ts#L3746)

___

### isSports

• `Optional` `Readonly` **isSports**: `boolean`

Optional. Filter for sports.

**`memberof`** LiveTvApiGetLiveTvPrograms

#### Defined in

[generated-client/api/live-tv-api.ts:3767](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/live-tv-api.ts#L3767)

___

### librarySeriesId

• `Optional` `Readonly` **librarySeriesId**: `string`

Optional. Filter by library series id.

**`memberof`** LiveTvApiGetLiveTvPrograms

#### Defined in

[generated-client/api/live-tv-api.ts:3851](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/live-tv-api.ts#L3851)

___

### limit

• `Optional` `Readonly` **limit**: `number`

Optional. The maximum number of records to return.

**`memberof`** LiveTvApiGetLiveTvPrograms

#### Defined in

[generated-client/api/live-tv-api.ts:3781](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/live-tv-api.ts#L3781)

___

### maxEndDate

• `Optional` `Readonly` **maxEndDate**: `string`

Optional. The maximum premiere end date.

**`memberof`** LiveTvApiGetLiveTvPrograms

#### Defined in

[generated-client/api/live-tv-api.ts:3732](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/live-tv-api.ts#L3732)

___

### maxStartDate

• `Optional` `Readonly` **maxStartDate**: `string`

Optional. The maximum premiere start date.

**`memberof`** LiveTvApiGetLiveTvPrograms

#### Defined in

[generated-client/api/live-tv-api.ts:3718](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/live-tv-api.ts#L3718)

___

### minEndDate

• `Optional` `Readonly` **minEndDate**: `string`

Optional. The minimum premiere end date.

**`memberof`** LiveTvApiGetLiveTvPrograms

#### Defined in

[generated-client/api/live-tv-api.ts:3725](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/live-tv-api.ts#L3725)

___

### minStartDate

• `Optional` `Readonly` **minStartDate**: `string`

Optional. The minimum premiere start date.

**`memberof`** LiveTvApiGetLiveTvPrograms

#### Defined in

[generated-client/api/live-tv-api.ts:3697](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/live-tv-api.ts#L3697)

___

### seriesTimerId

• `Optional` `Readonly` **seriesTimerId**: `string`

Optional. Filter by series timer id.

**`memberof`** LiveTvApiGetLiveTvPrograms

#### Defined in

[generated-client/api/live-tv-api.ts:3844](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/live-tv-api.ts#L3844)

___

### sortBy

• `Optional` `Readonly` **sortBy**: `string`[]

Optional. Specify one or more sort orders, comma delimited. Options: Name, StartDate.

**`memberof`** LiveTvApiGetLiveTvPrograms

#### Defined in

[generated-client/api/live-tv-api.ts:3788](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/live-tv-api.ts#L3788)

___

### sortOrder

• `Optional` `Readonly` **sortOrder**: [`SortOrder`](../enums/generated_client.SortOrder.md)[]

Sort Order - Ascending,Descending.

**`memberof`** LiveTvApiGetLiveTvPrograms

#### Defined in

[generated-client/api/live-tv-api.ts:3795](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/live-tv-api.ts#L3795)

___

### startIndex

• `Optional` `Readonly` **startIndex**: `number`

Optional. The record index to start at. All items with a lower index will be dropped from the results.

**`memberof`** LiveTvApiGetLiveTvPrograms

#### Defined in

[generated-client/api/live-tv-api.ts:3774](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/live-tv-api.ts#L3774)

___

### userId

• `Optional` `Readonly` **userId**: `string`

Optional. Filter by user id.

**`memberof`** LiveTvApiGetLiveTvPrograms

#### Defined in

[generated-client/api/live-tv-api.ts:3690](https://github.com/thornbill/jellyfin-sdk-typescript/blob/46678c1/src/generated-client/api/live-tv-api.ts#L3690)
