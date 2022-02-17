[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / LiveTvApiGetRecommendedProgramsRequest

# Interface: LiveTvApiGetRecommendedProgramsRequest

[generated-client](../modules/generated_client.md).LiveTvApiGetRecommendedProgramsRequest

Request parameters for getRecommendedPrograms operation in LiveTvApi.

**`export`**

**`interface`** LiveTvApiGetRecommendedProgramsRequest

## Table of contents

### Properties

- [enableImageTypes](generated_client.LiveTvApiGetRecommendedProgramsRequest.md#enableimagetypes)
- [enableImages](generated_client.LiveTvApiGetRecommendedProgramsRequest.md#enableimages)
- [enableTotalRecordCount](generated_client.LiveTvApiGetRecommendedProgramsRequest.md#enabletotalrecordcount)
- [enableUserData](generated_client.LiveTvApiGetRecommendedProgramsRequest.md#enableuserdata)
- [fields](generated_client.LiveTvApiGetRecommendedProgramsRequest.md#fields)
- [genreIds](generated_client.LiveTvApiGetRecommendedProgramsRequest.md#genreids)
- [hasAired](generated_client.LiveTvApiGetRecommendedProgramsRequest.md#hasaired)
- [imageTypeLimit](generated_client.LiveTvApiGetRecommendedProgramsRequest.md#imagetypelimit)
- [isAiring](generated_client.LiveTvApiGetRecommendedProgramsRequest.md#isairing)
- [isKids](generated_client.LiveTvApiGetRecommendedProgramsRequest.md#iskids)
- [isMovie](generated_client.LiveTvApiGetRecommendedProgramsRequest.md#ismovie)
- [isNews](generated_client.LiveTvApiGetRecommendedProgramsRequest.md#isnews)
- [isSeries](generated_client.LiveTvApiGetRecommendedProgramsRequest.md#isseries)
- [isSports](generated_client.LiveTvApiGetRecommendedProgramsRequest.md#issports)
- [limit](generated_client.LiveTvApiGetRecommendedProgramsRequest.md#limit)
- [userId](generated_client.LiveTvApiGetRecommendedProgramsRequest.md#userid)

## Properties

### enableImageTypes

• `Optional` `Readonly` **enableImageTypes**: [`ImageType`](../enums/index.api.ImageType.md)[]

Optional. The image types to include in the output.

**`memberof`** LiveTvApiGetRecommendedPrograms

#### Defined in

[generated-client/api/live-tv-api.ts:3991](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/live-tv-api.ts#L3991)

___

### enableImages

• `Optional` `Readonly` **enableImages**: `boolean`

Optional. Include image information in output.

**`memberof`** LiveTvApiGetRecommendedPrograms

#### Defined in

[generated-client/api/live-tv-api.ts:3977](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/live-tv-api.ts#L3977)

___

### enableTotalRecordCount

• `Optional` `Readonly` **enableTotalRecordCount**: `boolean`

Retrieve total record count.

**`memberof`** LiveTvApiGetRecommendedPrograms

#### Defined in

[generated-client/api/live-tv-api.ts:4019](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/live-tv-api.ts#L4019)

___

### enableUserData

• `Optional` `Readonly` **enableUserData**: `boolean`

Optional. include user data.

**`memberof`** LiveTvApiGetRecommendedPrograms

#### Defined in

[generated-client/api/live-tv-api.ts:4012](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/live-tv-api.ts#L4012)

___

### fields

• `Optional` `Readonly` **fields**: [`ItemFields`](../enums/index.api.ItemFields.md)[]

Optional. Specify additional fields of information to return in the output.

**`memberof`** LiveTvApiGetRecommendedPrograms

#### Defined in

[generated-client/api/live-tv-api.ts:4005](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/live-tv-api.ts#L4005)

___

### genreIds

• `Optional` `Readonly` **genreIds**: `string`[]

The genres to return guide information for.

**`memberof`** LiveTvApiGetRecommendedPrograms

#### Defined in

[generated-client/api/live-tv-api.ts:3998](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/live-tv-api.ts#L3998)

___

### hasAired

• `Optional` `Readonly` **hasAired**: `boolean`

Optional. Filter by programs that have completed airing, or not.

**`memberof`** LiveTvApiGetRecommendedPrograms

#### Defined in

[generated-client/api/live-tv-api.ts:3935](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/live-tv-api.ts#L3935)

___

### imageTypeLimit

• `Optional` `Readonly` **imageTypeLimit**: `number`

Optional. The max number of images to return, per image type.

**`memberof`** LiveTvApiGetRecommendedPrograms

#### Defined in

[generated-client/api/live-tv-api.ts:3984](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/live-tv-api.ts#L3984)

___

### isAiring

• `Optional` `Readonly` **isAiring**: `boolean`

Optional. Filter by programs that are currently airing, or not.

**`memberof`** LiveTvApiGetRecommendedPrograms

#### Defined in

[generated-client/api/live-tv-api.ts:3928](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/live-tv-api.ts#L3928)

___

### isKids

• `Optional` `Readonly` **isKids**: `boolean`

Optional. Filter for kids.

**`memberof`** LiveTvApiGetRecommendedPrograms

#### Defined in

[generated-client/api/live-tv-api.ts:3963](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/live-tv-api.ts#L3963)

___

### isMovie

• `Optional` `Readonly` **isMovie**: `boolean`

Optional. Filter for movies.

**`memberof`** LiveTvApiGetRecommendedPrograms

#### Defined in

[generated-client/api/live-tv-api.ts:3949](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/live-tv-api.ts#L3949)

___

### isNews

• `Optional` `Readonly` **isNews**: `boolean`

Optional. Filter for news.

**`memberof`** LiveTvApiGetRecommendedPrograms

#### Defined in

[generated-client/api/live-tv-api.ts:3956](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/live-tv-api.ts#L3956)

___

### isSeries

• `Optional` `Readonly` **isSeries**: `boolean`

Optional. Filter for series.

**`memberof`** LiveTvApiGetRecommendedPrograms

#### Defined in

[generated-client/api/live-tv-api.ts:3942](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/live-tv-api.ts#L3942)

___

### isSports

• `Optional` `Readonly` **isSports**: `boolean`

Optional. Filter for sports.

**`memberof`** LiveTvApiGetRecommendedPrograms

#### Defined in

[generated-client/api/live-tv-api.ts:3970](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/live-tv-api.ts#L3970)

___

### limit

• `Optional` `Readonly` **limit**: `number`

Optional. The maximum number of records to return.

**`memberof`** LiveTvApiGetRecommendedPrograms

#### Defined in

[generated-client/api/live-tv-api.ts:3921](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/live-tv-api.ts#L3921)

___

### userId

• `Optional` `Readonly` **userId**: `string`

Optional. filter by user id.

**`memberof`** LiveTvApiGetRecommendedPrograms

#### Defined in

[generated-client/api/live-tv-api.ts:3914](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/live-tv-api.ts#L3914)
