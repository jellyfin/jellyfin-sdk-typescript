[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / LiveTvApiGetRecordingsRequest

# Interface: LiveTvApiGetRecordingsRequest

[generated-client](../modules/generated_client.md).LiveTvApiGetRecordingsRequest

Request parameters for getRecordings operation in LiveTvApi.

**`export`**

**`interface`** LiveTvApiGetRecordingsRequest

## Table of contents

### Properties

- [channelId](generated_client.LiveTvApiGetRecordingsRequest.md#channelid)
- [enableImageTypes](generated_client.LiveTvApiGetRecordingsRequest.md#enableimagetypes)
- [enableImages](generated_client.LiveTvApiGetRecordingsRequest.md#enableimages)
- [enableTotalRecordCount](generated_client.LiveTvApiGetRecordingsRequest.md#enabletotalrecordcount)
- [enableUserData](generated_client.LiveTvApiGetRecordingsRequest.md#enableuserdata)
- [fields](generated_client.LiveTvApiGetRecordingsRequest.md#fields)
- [imageTypeLimit](generated_client.LiveTvApiGetRecordingsRequest.md#imagetypelimit)
- [isInProgress](generated_client.LiveTvApiGetRecordingsRequest.md#isinprogress)
- [isKids](generated_client.LiveTvApiGetRecordingsRequest.md#iskids)
- [isLibraryItem](generated_client.LiveTvApiGetRecordingsRequest.md#islibraryitem)
- [isMovie](generated_client.LiveTvApiGetRecordingsRequest.md#ismovie)
- [isNews](generated_client.LiveTvApiGetRecordingsRequest.md#isnews)
- [isSeries](generated_client.LiveTvApiGetRecordingsRequest.md#isseries)
- [isSports](generated_client.LiveTvApiGetRecordingsRequest.md#issports)
- [limit](generated_client.LiveTvApiGetRecordingsRequest.md#limit)
- [seriesTimerId](generated_client.LiveTvApiGetRecordingsRequest.md#seriestimerid)
- [startIndex](generated_client.LiveTvApiGetRecordingsRequest.md#startindex)
- [status](generated_client.LiveTvApiGetRecordingsRequest.md#status)
- [userId](generated_client.LiveTvApiGetRecordingsRequest.md#userid)

## Properties

### channelId

• `Optional` `Readonly` **channelId**: `string`

Optional. Filter by channel id.

**`memberof`** LiveTvApiGetRecordings

#### Defined in

[generated-client/api/live-tv-api.ts:4096](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/live-tv-api.ts#L4096)

___

### enableImageTypes

• `Optional` `Readonly` **enableImageTypes**: [`ImageType`](../enums/generated_client.ImageType.md)[]

Optional. The image types to include in the output.

**`memberof`** LiveTvApiGetRecordings

#### Defined in

[generated-client/api/live-tv-api.ts:4159](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/live-tv-api.ts#L4159)

___

### enableImages

• `Optional` `Readonly` **enableImages**: `boolean`

Optional. Include image information in output.

**`memberof`** LiveTvApiGetRecordings

#### Defined in

[generated-client/api/live-tv-api.ts:4145](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/live-tv-api.ts#L4145)

___

### enableTotalRecordCount

• `Optional` `Readonly` **enableTotalRecordCount**: `boolean`

Optional. Return total record count.

**`memberof`** LiveTvApiGetRecordings

#### Defined in

[generated-client/api/live-tv-api.ts:4222](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/live-tv-api.ts#L4222)

___

### enableUserData

• `Optional` `Readonly` **enableUserData**: `boolean`

Optional. Include user data.

**`memberof`** LiveTvApiGetRecordings

#### Defined in

[generated-client/api/live-tv-api.ts:4173](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/live-tv-api.ts#L4173)

___

### fields

• `Optional` `Readonly` **fields**: [`ItemFields`](../enums/generated_client.ItemFields.md)[]

Optional. Specify additional fields of information to return in the output.

**`memberof`** LiveTvApiGetRecordings

#### Defined in

[generated-client/api/live-tv-api.ts:4166](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/live-tv-api.ts#L4166)

___

### imageTypeLimit

• `Optional` `Readonly` **imageTypeLimit**: `number`

Optional. The max number of images to return, per image type.

**`memberof`** LiveTvApiGetRecordings

#### Defined in

[generated-client/api/live-tv-api.ts:4152](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/live-tv-api.ts#L4152)

___

### isInProgress

• `Optional` `Readonly` **isInProgress**: `boolean`

Optional. Filter by recordings that are in progress, or not.

**`memberof`** LiveTvApiGetRecordings

#### Defined in

[generated-client/api/live-tv-api.ts:4131](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/live-tv-api.ts#L4131)

___

### isKids

• `Optional` `Readonly` **isKids**: `boolean`

Optional. Filter for kids.

**`memberof`** LiveTvApiGetRecordings

#### Defined in

[generated-client/api/live-tv-api.ts:4194](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/live-tv-api.ts#L4194)

___

### isLibraryItem

• `Optional` `Readonly` **isLibraryItem**: `boolean`

Optional. Filter for is library item.

**`memberof`** LiveTvApiGetRecordings

#### Defined in

[generated-client/api/live-tv-api.ts:4215](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/live-tv-api.ts#L4215)

___

### isMovie

• `Optional` `Readonly` **isMovie**: `boolean`

Optional. Filter for movies.

**`memberof`** LiveTvApiGetRecordings

#### Defined in

[generated-client/api/live-tv-api.ts:4180](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/live-tv-api.ts#L4180)

___

### isNews

• `Optional` `Readonly` **isNews**: `boolean`

Optional. Filter for news.

**`memberof`** LiveTvApiGetRecordings

#### Defined in

[generated-client/api/live-tv-api.ts:4208](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/live-tv-api.ts#L4208)

___

### isSeries

• `Optional` `Readonly` **isSeries**: `boolean`

Optional. Filter for series.

**`memberof`** LiveTvApiGetRecordings

#### Defined in

[generated-client/api/live-tv-api.ts:4187](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/live-tv-api.ts#L4187)

___

### isSports

• `Optional` `Readonly` **isSports**: `boolean`

Optional. Filter for sports.

**`memberof`** LiveTvApiGetRecordings

#### Defined in

[generated-client/api/live-tv-api.ts:4201](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/live-tv-api.ts#L4201)

___

### limit

• `Optional` `Readonly` **limit**: `number`

Optional. The maximum number of records to return.

**`memberof`** LiveTvApiGetRecordings

#### Defined in

[generated-client/api/live-tv-api.ts:4117](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/live-tv-api.ts#L4117)

___

### seriesTimerId

• `Optional` `Readonly` **seriesTimerId**: `string`

Optional. Filter by recordings belonging to a series timer.

**`memberof`** LiveTvApiGetRecordings

#### Defined in

[generated-client/api/live-tv-api.ts:4138](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/live-tv-api.ts#L4138)

___

### startIndex

• `Optional` `Readonly` **startIndex**: `number`

Optional. The record index to start at. All items with a lower index will be dropped from the results.

**`memberof`** LiveTvApiGetRecordings

#### Defined in

[generated-client/api/live-tv-api.ts:4110](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/live-tv-api.ts#L4110)

___

### status

• `Optional` `Readonly` **status**: [`RecordingStatus`](../enums/generated_client.RecordingStatus.md)

Optional. Filter by recording status.

**`memberof`** LiveTvApiGetRecordings

#### Defined in

[generated-client/api/live-tv-api.ts:4124](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/live-tv-api.ts#L4124)

___

### userId

• `Optional` `Readonly` **userId**: `string`

Optional. Filter by user and attach user data.

**`memberof`** LiveTvApiGetRecordings

#### Defined in

[generated-client/api/live-tv-api.ts:4103](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/live-tv-api.ts#L4103)
