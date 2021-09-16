[jellyfin-sdk-typescript](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / LiveTvApiGetLiveTvChannelsRequest

# Interface: LiveTvApiGetLiveTvChannelsRequest

[generated-client](../modules/generated_client.md).LiveTvApiGetLiveTvChannelsRequest

Request parameters for getLiveTvChannels operation in LiveTvApi.

**`export`**

**`interface`** LiveTvApiGetLiveTvChannelsRequest

## Table of contents

### Properties

- [addCurrentProgram](generated_client.LiveTvApiGetLiveTvChannelsRequest.md#addcurrentprogram)
- [enableFavoriteSorting](generated_client.LiveTvApiGetLiveTvChannelsRequest.md#enablefavoritesorting)
- [enableImageTypes](generated_client.LiveTvApiGetLiveTvChannelsRequest.md#enableimagetypes)
- [enableImages](generated_client.LiveTvApiGetLiveTvChannelsRequest.md#enableimages)
- [enableUserData](generated_client.LiveTvApiGetLiveTvChannelsRequest.md#enableuserdata)
- [fields](generated_client.LiveTvApiGetLiveTvChannelsRequest.md#fields)
- [imageTypeLimit](generated_client.LiveTvApiGetLiveTvChannelsRequest.md#imagetypelimit)
- [isDisliked](generated_client.LiveTvApiGetLiveTvChannelsRequest.md#isdisliked)
- [isFavorite](generated_client.LiveTvApiGetLiveTvChannelsRequest.md#isfavorite)
- [isKids](generated_client.LiveTvApiGetLiveTvChannelsRequest.md#iskids)
- [isLiked](generated_client.LiveTvApiGetLiveTvChannelsRequest.md#isliked)
- [isMovie](generated_client.LiveTvApiGetLiveTvChannelsRequest.md#ismovie)
- [isNews](generated_client.LiveTvApiGetLiveTvChannelsRequest.md#isnews)
- [isSeries](generated_client.LiveTvApiGetLiveTvChannelsRequest.md#isseries)
- [isSports](generated_client.LiveTvApiGetLiveTvChannelsRequest.md#issports)
- [limit](generated_client.LiveTvApiGetLiveTvChannelsRequest.md#limit)
- [sortBy](generated_client.LiveTvApiGetLiveTvChannelsRequest.md#sortby)
- [sortOrder](generated_client.LiveTvApiGetLiveTvChannelsRequest.md#sortorder)
- [startIndex](generated_client.LiveTvApiGetLiveTvChannelsRequest.md#startindex)
- [type](generated_client.LiveTvApiGetLiveTvChannelsRequest.md#type)
- [userId](generated_client.LiveTvApiGetLiveTvChannelsRequest.md#userid)

## Properties

### addCurrentProgram

• `Optional` `Readonly` **addCurrentProgram**: `boolean`

Optional. Adds current program info to each channel.

**`memberof`** LiveTvApiGetLiveTvChannels

#### Defined in

[generated-client/api/live-tv-api.ts:3669](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b0f5501/src/generated-client/api/live-tv-api.ts#L3669)

___

### enableFavoriteSorting

• `Optional` `Readonly` **enableFavoriteSorting**: `boolean`

Optional. Incorporate favorite and like status into channel sorting.

**`memberof`** LiveTvApiGetLiveTvChannels

#### Defined in

[generated-client/api/live-tv-api.ts:3662](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b0f5501/src/generated-client/api/live-tv-api.ts#L3662)

___

### enableImageTypes

• `Optional` `Readonly` **enableImageTypes**: [`ImageType`](../enums/generated_client.ImageType.md)[]

\&quot;Optional. The image types to include in the output.

**`memberof`** LiveTvApiGetLiveTvChannels

#### Defined in

[generated-client/api/live-tv-api.ts:3627](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b0f5501/src/generated-client/api/live-tv-api.ts#L3627)

___

### enableImages

• `Optional` `Readonly` **enableImages**: `boolean`

Optional. Include image information in output.

**`memberof`** LiveTvApiGetLiveTvChannels

#### Defined in

[generated-client/api/live-tv-api.ts:3613](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b0f5501/src/generated-client/api/live-tv-api.ts#L3613)

___

### enableUserData

• `Optional` `Readonly` **enableUserData**: `boolean`

Optional. Include user data.

**`memberof`** LiveTvApiGetLiveTvChannels

#### Defined in

[generated-client/api/live-tv-api.ts:3641](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b0f5501/src/generated-client/api/live-tv-api.ts#L3641)

___

### fields

• `Optional` `Readonly` **fields**: [`ItemFields`](../enums/generated_client.ItemFields.md)[]

Optional. Specify additional fields of information to return in the output.

**`memberof`** LiveTvApiGetLiveTvChannels

#### Defined in

[generated-client/api/live-tv-api.ts:3634](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b0f5501/src/generated-client/api/live-tv-api.ts#L3634)

___

### imageTypeLimit

• `Optional` `Readonly` **imageTypeLimit**: `number`

Optional. The max number of images to return, per image type.

**`memberof`** LiveTvApiGetLiveTvChannels

#### Defined in

[generated-client/api/live-tv-api.ts:3620](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b0f5501/src/generated-client/api/live-tv-api.ts#L3620)

___

### isDisliked

• `Optional` `Readonly` **isDisliked**: `boolean`

Optional. Filter by channels that are disliked, or not.

**`memberof`** LiveTvApiGetLiveTvChannels

#### Defined in

[generated-client/api/live-tv-api.ts:3606](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b0f5501/src/generated-client/api/live-tv-api.ts#L3606)

___

### isFavorite

• `Optional` `Readonly` **isFavorite**: `boolean`

Optional. Filter by channels that are favorites, or not.

**`memberof`** LiveTvApiGetLiveTvChannels

#### Defined in

[generated-client/api/live-tv-api.ts:3592](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b0f5501/src/generated-client/api/live-tv-api.ts#L3592)

___

### isKids

• `Optional` `Readonly` **isKids**: `boolean`

Optional. Filter for kids.

**`memberof`** LiveTvApiGetLiveTvChannels

#### Defined in

[generated-client/api/live-tv-api.ts:3571](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b0f5501/src/generated-client/api/live-tv-api.ts#L3571)

___

### isLiked

• `Optional` `Readonly` **isLiked**: `boolean`

Optional. Filter by channels that are liked, or not.

**`memberof`** LiveTvApiGetLiveTvChannels

#### Defined in

[generated-client/api/live-tv-api.ts:3599](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b0f5501/src/generated-client/api/live-tv-api.ts#L3599)

___

### isMovie

• `Optional` `Readonly` **isMovie**: `boolean`

Optional. Filter for movies.

**`memberof`** LiveTvApiGetLiveTvChannels

#### Defined in

[generated-client/api/live-tv-api.ts:3550](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b0f5501/src/generated-client/api/live-tv-api.ts#L3550)

___

### isNews

• `Optional` `Readonly` **isNews**: `boolean`

Optional. Filter for news.

**`memberof`** LiveTvApiGetLiveTvChannels

#### Defined in

[generated-client/api/live-tv-api.ts:3564](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b0f5501/src/generated-client/api/live-tv-api.ts#L3564)

___

### isSeries

• `Optional` `Readonly` **isSeries**: `boolean`

Optional. Filter for series.

**`memberof`** LiveTvApiGetLiveTvChannels

#### Defined in

[generated-client/api/live-tv-api.ts:3557](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b0f5501/src/generated-client/api/live-tv-api.ts#L3557)

___

### isSports

• `Optional` `Readonly` **isSports**: `boolean`

Optional. Filter for sports.

**`memberof`** LiveTvApiGetLiveTvChannels

#### Defined in

[generated-client/api/live-tv-api.ts:3578](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b0f5501/src/generated-client/api/live-tv-api.ts#L3578)

___

### limit

• `Optional` `Readonly` **limit**: `number`

Optional. The maximum number of records to return.

**`memberof`** LiveTvApiGetLiveTvChannels

#### Defined in

[generated-client/api/live-tv-api.ts:3585](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b0f5501/src/generated-client/api/live-tv-api.ts#L3585)

___

### sortBy

• `Optional` `Readonly` **sortBy**: `string`[]

Optional. Key to sort by.

**`memberof`** LiveTvApiGetLiveTvChannels

#### Defined in

[generated-client/api/live-tv-api.ts:3648](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b0f5501/src/generated-client/api/live-tv-api.ts#L3648)

___

### sortOrder

• `Optional` `Readonly` **sortOrder**: [`SortOrder`](../enums/generated_client.SortOrder.md)

Optional. Sort order.

**`memberof`** LiveTvApiGetLiveTvChannels

#### Defined in

[generated-client/api/live-tv-api.ts:3655](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b0f5501/src/generated-client/api/live-tv-api.ts#L3655)

___

### startIndex

• `Optional` `Readonly` **startIndex**: `number`

Optional. The record index to start at. All items with a lower index will be dropped from the results.

**`memberof`** LiveTvApiGetLiveTvChannels

#### Defined in

[generated-client/api/live-tv-api.ts:3543](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b0f5501/src/generated-client/api/live-tv-api.ts#L3543)

___

### type

• `Optional` `Readonly` **type**: [`ChannelType`](../enums/generated_client.ChannelType.md)

Optional. Filter by channel type.

**`memberof`** LiveTvApiGetLiveTvChannels

#### Defined in

[generated-client/api/live-tv-api.ts:3529](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b0f5501/src/generated-client/api/live-tv-api.ts#L3529)

___

### userId

• `Optional` `Readonly` **userId**: `string`

Optional. Filter by user and attach user data.

**`memberof`** LiveTvApiGetLiveTvChannels

#### Defined in

[generated-client/api/live-tv-api.ts:3536](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b0f5501/src/generated-client/api/live-tv-api.ts#L3536)
