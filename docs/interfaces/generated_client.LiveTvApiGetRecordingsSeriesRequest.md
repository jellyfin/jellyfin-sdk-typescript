[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / LiveTvApiGetRecordingsSeriesRequest

# Interface: LiveTvApiGetRecordingsSeriesRequest

[generated-client](../modules/generated_client.md).LiveTvApiGetRecordingsSeriesRequest

Request parameters for getRecordingsSeries operation in LiveTvApi.

**`export`**

**`interface`** LiveTvApiGetRecordingsSeriesRequest

## Table of contents

### Properties

- [channelId](generated_client.LiveTvApiGetRecordingsSeriesRequest.md#channelid)
- [enableImageTypes](generated_client.LiveTvApiGetRecordingsSeriesRequest.md#enableimagetypes)
- [enableImages](generated_client.LiveTvApiGetRecordingsSeriesRequest.md#enableimages)
- [enableTotalRecordCount](generated_client.LiveTvApiGetRecordingsSeriesRequest.md#enabletotalrecordcount)
- [enableUserData](generated_client.LiveTvApiGetRecordingsSeriesRequest.md#enableuserdata)
- [fields](generated_client.LiveTvApiGetRecordingsSeriesRequest.md#fields)
- [groupId](generated_client.LiveTvApiGetRecordingsSeriesRequest.md#groupid)
- [imageTypeLimit](generated_client.LiveTvApiGetRecordingsSeriesRequest.md#imagetypelimit)
- [isInProgress](generated_client.LiveTvApiGetRecordingsSeriesRequest.md#isinprogress)
- [limit](generated_client.LiveTvApiGetRecordingsSeriesRequest.md#limit)
- [seriesTimerId](generated_client.LiveTvApiGetRecordingsSeriesRequest.md#seriestimerid)
- [startIndex](generated_client.LiveTvApiGetRecordingsSeriesRequest.md#startindex)
- [status](generated_client.LiveTvApiGetRecordingsSeriesRequest.md#status)
- [userId](generated_client.LiveTvApiGetRecordingsSeriesRequest.md#userid)

## Properties

### channelId

• `Optional` `Readonly` **channelId**: `string`

Optional. Filter by channel id.

**`memberof`** LiveTvApiGetRecordingsSeries

#### Defined in

[generated-client/api/live-tv-api.ts:4236](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/live-tv-api.ts#L4236)

___

### enableImageTypes

• `Optional` `Readonly` **enableImageTypes**: [`ImageType`](../enums/generated_client.ImageType.md)[]

Optional. The image types to include in the output.

**`memberof`** LiveTvApiGetRecordingsSeries

#### Defined in

[generated-client/api/live-tv-api.ts:4306](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/live-tv-api.ts#L4306)

___

### enableImages

• `Optional` `Readonly` **enableImages**: `boolean`

Optional. Include image information in output.

**`memberof`** LiveTvApiGetRecordingsSeries

#### Defined in

[generated-client/api/live-tv-api.ts:4292](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/live-tv-api.ts#L4292)

___

### enableTotalRecordCount

• `Optional` `Readonly` **enableTotalRecordCount**: `boolean`

Optional. Return total record count.

**`memberof`** LiveTvApiGetRecordingsSeries

#### Defined in

[generated-client/api/live-tv-api.ts:4327](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/live-tv-api.ts#L4327)

___

### enableUserData

• `Optional` `Readonly` **enableUserData**: `boolean`

Optional. Include user data.

**`memberof`** LiveTvApiGetRecordingsSeries

#### Defined in

[generated-client/api/live-tv-api.ts:4320](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/live-tv-api.ts#L4320)

___

### fields

• `Optional` `Readonly` **fields**: [`ItemFields`](../enums/generated_client.ItemFields.md)[]

Optional. Specify additional fields of information to return in the output.

**`memberof`** LiveTvApiGetRecordingsSeries

#### Defined in

[generated-client/api/live-tv-api.ts:4313](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/live-tv-api.ts#L4313)

___

### groupId

• `Optional` `Readonly` **groupId**: `string`

Optional. Filter by recording group.

**`memberof`** LiveTvApiGetRecordingsSeries

#### Defined in

[generated-client/api/live-tv-api.ts:4250](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/live-tv-api.ts#L4250)

___

### imageTypeLimit

• `Optional` `Readonly` **imageTypeLimit**: `number`

Optional. The max number of images to return, per image type.

**`memberof`** LiveTvApiGetRecordingsSeries

#### Defined in

[generated-client/api/live-tv-api.ts:4299](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/live-tv-api.ts#L4299)

___

### isInProgress

• `Optional` `Readonly` **isInProgress**: `boolean`

Optional. Filter by recordings that are in progress, or not.

**`memberof`** LiveTvApiGetRecordingsSeries

#### Defined in

[generated-client/api/live-tv-api.ts:4278](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/live-tv-api.ts#L4278)

___

### limit

• `Optional` `Readonly` **limit**: `number`

Optional. The maximum number of records to return.

**`memberof`** LiveTvApiGetRecordingsSeries

#### Defined in

[generated-client/api/live-tv-api.ts:4264](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/live-tv-api.ts#L4264)

___

### seriesTimerId

• `Optional` `Readonly` **seriesTimerId**: `string`

Optional. Filter by recordings belonging to a series timer.

**`memberof`** LiveTvApiGetRecordingsSeries

#### Defined in

[generated-client/api/live-tv-api.ts:4285](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/live-tv-api.ts#L4285)

___

### startIndex

• `Optional` `Readonly` **startIndex**: `number`

Optional. The record index to start at. All items with a lower index will be dropped from the results.

**`memberof`** LiveTvApiGetRecordingsSeries

#### Defined in

[generated-client/api/live-tv-api.ts:4257](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/live-tv-api.ts#L4257)

___

### status

• `Optional` `Readonly` **status**: [`RecordingStatus`](../enums/generated_client.RecordingStatus.md)

Optional. Filter by recording status.

**`memberof`** LiveTvApiGetRecordingsSeries

#### Defined in

[generated-client/api/live-tv-api.ts:4271](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/live-tv-api.ts#L4271)

___

### userId

• `Optional` `Readonly` **userId**: `string`

Optional. Filter by user and attach user data.

**`memberof`** LiveTvApiGetRecordingsSeries

#### Defined in

[generated-client/api/live-tv-api.ts:4243](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/live-tv-api.ts#L4243)
