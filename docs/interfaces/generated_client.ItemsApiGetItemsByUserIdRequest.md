[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / ItemsApiGetItemsByUserIdRequest

# Interface: ItemsApiGetItemsByUserIdRequest

[generated-client](../modules/generated_client.md).ItemsApiGetItemsByUserIdRequest

Request parameters for getItemsByUserId operation in ItemsApi.

**`export`**

**`interface`** ItemsApiGetItemsByUserIdRequest

## Table of contents

### Properties

- [adjacentTo](generated_client.ItemsApiGetItemsByUserIdRequest.md#adjacentto)
- [albumArtistIds](generated_client.ItemsApiGetItemsByUserIdRequest.md#albumartistids)
- [albumIds](generated_client.ItemsApiGetItemsByUserIdRequest.md#albumids)
- [albums](generated_client.ItemsApiGetItemsByUserIdRequest.md#albums)
- [artistIds](generated_client.ItemsApiGetItemsByUserIdRequest.md#artistids)
- [artists](generated_client.ItemsApiGetItemsByUserIdRequest.md#artists)
- [collapseBoxSetItems](generated_client.ItemsApiGetItemsByUserIdRequest.md#collapseboxsetitems)
- [contributingArtistIds](generated_client.ItemsApiGetItemsByUserIdRequest.md#contributingartistids)
- [enableImageTypes](generated_client.ItemsApiGetItemsByUserIdRequest.md#enableimagetypes)
- [enableImages](generated_client.ItemsApiGetItemsByUserIdRequest.md#enableimages)
- [enableTotalRecordCount](generated_client.ItemsApiGetItemsByUserIdRequest.md#enabletotalrecordcount)
- [enableUserData](generated_client.ItemsApiGetItemsByUserIdRequest.md#enableuserdata)
- [excludeArtistIds](generated_client.ItemsApiGetItemsByUserIdRequest.md#excludeartistids)
- [excludeItemIds](generated_client.ItemsApiGetItemsByUserIdRequest.md#excludeitemids)
- [excludeItemTypes](generated_client.ItemsApiGetItemsByUserIdRequest.md#excludeitemtypes)
- [excludeLocationTypes](generated_client.ItemsApiGetItemsByUserIdRequest.md#excludelocationtypes)
- [fields](generated_client.ItemsApiGetItemsByUserIdRequest.md#fields)
- [filters](generated_client.ItemsApiGetItemsByUserIdRequest.md#filters)
- [genreIds](generated_client.ItemsApiGetItemsByUserIdRequest.md#genreids)
- [genres](generated_client.ItemsApiGetItemsByUserIdRequest.md#genres)
- [hasImdbId](generated_client.ItemsApiGetItemsByUserIdRequest.md#hasimdbid)
- [hasOfficialRating](generated_client.ItemsApiGetItemsByUserIdRequest.md#hasofficialrating)
- [hasOverview](generated_client.ItemsApiGetItemsByUserIdRequest.md#hasoverview)
- [hasParentalRating](generated_client.ItemsApiGetItemsByUserIdRequest.md#hasparentalrating)
- [hasSpecialFeature](generated_client.ItemsApiGetItemsByUserIdRequest.md#hasspecialfeature)
- [hasSubtitles](generated_client.ItemsApiGetItemsByUserIdRequest.md#hassubtitles)
- [hasThemeSong](generated_client.ItemsApiGetItemsByUserIdRequest.md#hasthemesong)
- [hasThemeVideo](generated_client.ItemsApiGetItemsByUserIdRequest.md#hasthemevideo)
- [hasTmdbId](generated_client.ItemsApiGetItemsByUserIdRequest.md#hastmdbid)
- [hasTrailer](generated_client.ItemsApiGetItemsByUserIdRequest.md#hastrailer)
- [hasTvdbId](generated_client.ItemsApiGetItemsByUserIdRequest.md#hastvdbid)
- [ids](generated_client.ItemsApiGetItemsByUserIdRequest.md#ids)
- [imageTypeLimit](generated_client.ItemsApiGetItemsByUserIdRequest.md#imagetypelimit)
- [imageTypes](generated_client.ItemsApiGetItemsByUserIdRequest.md#imagetypes)
- [includeItemTypes](generated_client.ItemsApiGetItemsByUserIdRequest.md#includeitemtypes)
- [is3D](generated_client.ItemsApiGetItemsByUserIdRequest.md#is3d)
- [is4K](generated_client.ItemsApiGetItemsByUserIdRequest.md#is4k)
- [isFavorite](generated_client.ItemsApiGetItemsByUserIdRequest.md#isfavorite)
- [isHd](generated_client.ItemsApiGetItemsByUserIdRequest.md#ishd)
- [isLocked](generated_client.ItemsApiGetItemsByUserIdRequest.md#islocked)
- [isMissing](generated_client.ItemsApiGetItemsByUserIdRequest.md#ismissing)
- [isPlaceHolder](generated_client.ItemsApiGetItemsByUserIdRequest.md#isplaceholder)
- [isPlayed](generated_client.ItemsApiGetItemsByUserIdRequest.md#isplayed)
- [isUnaired](generated_client.ItemsApiGetItemsByUserIdRequest.md#isunaired)
- [limit](generated_client.ItemsApiGetItemsByUserIdRequest.md#limit)
- [locationTypes](generated_client.ItemsApiGetItemsByUserIdRequest.md#locationtypes)
- [maxHeight](generated_client.ItemsApiGetItemsByUserIdRequest.md#maxheight)
- [maxOfficialRating](generated_client.ItemsApiGetItemsByUserIdRequest.md#maxofficialrating)
- [maxPremiereDate](generated_client.ItemsApiGetItemsByUserIdRequest.md#maxpremieredate)
- [maxWidth](generated_client.ItemsApiGetItemsByUserIdRequest.md#maxwidth)
- [mediaTypes](generated_client.ItemsApiGetItemsByUserIdRequest.md#mediatypes)
- [minCommunityRating](generated_client.ItemsApiGetItemsByUserIdRequest.md#mincommunityrating)
- [minCriticRating](generated_client.ItemsApiGetItemsByUserIdRequest.md#mincriticrating)
- [minDateLastSaved](generated_client.ItemsApiGetItemsByUserIdRequest.md#mindatelastsaved)
- [minDateLastSavedForUser](generated_client.ItemsApiGetItemsByUserIdRequest.md#mindatelastsavedforuser)
- [minHeight](generated_client.ItemsApiGetItemsByUserIdRequest.md#minheight)
- [minOfficialRating](generated_client.ItemsApiGetItemsByUserIdRequest.md#minofficialrating)
- [minPremiereDate](generated_client.ItemsApiGetItemsByUserIdRequest.md#minpremieredate)
- [minWidth](generated_client.ItemsApiGetItemsByUserIdRequest.md#minwidth)
- [nameLessThan](generated_client.ItemsApiGetItemsByUserIdRequest.md#namelessthan)
- [nameStartsWith](generated_client.ItemsApiGetItemsByUserIdRequest.md#namestartswith)
- [nameStartsWithOrGreater](generated_client.ItemsApiGetItemsByUserIdRequest.md#namestartswithorgreater)
- [officialRatings](generated_client.ItemsApiGetItemsByUserIdRequest.md#officialratings)
- [parentId](generated_client.ItemsApiGetItemsByUserIdRequest.md#parentid)
- [parentIndexNumber](generated_client.ItemsApiGetItemsByUserIdRequest.md#parentindexnumber)
- [person](generated_client.ItemsApiGetItemsByUserIdRequest.md#person)
- [personIds](generated_client.ItemsApiGetItemsByUserIdRequest.md#personids)
- [personTypes](generated_client.ItemsApiGetItemsByUserIdRequest.md#persontypes)
- [recursive](generated_client.ItemsApiGetItemsByUserIdRequest.md#recursive)
- [searchTerm](generated_client.ItemsApiGetItemsByUserIdRequest.md#searchterm)
- [seriesStatus](generated_client.ItemsApiGetItemsByUserIdRequest.md#seriesstatus)
- [sortBy](generated_client.ItemsApiGetItemsByUserIdRequest.md#sortby)
- [sortOrder](generated_client.ItemsApiGetItemsByUserIdRequest.md#sortorder)
- [startIndex](generated_client.ItemsApiGetItemsByUserIdRequest.md#startindex)
- [studioIds](generated_client.ItemsApiGetItemsByUserIdRequest.md#studioids)
- [studios](generated_client.ItemsApiGetItemsByUserIdRequest.md#studios)
- [tags](generated_client.ItemsApiGetItemsByUserIdRequest.md#tags)
- [userId](generated_client.ItemsApiGetItemsByUserIdRequest.md#userid)
- [videoTypes](generated_client.ItemsApiGetItemsByUserIdRequest.md#videotypes)
- [years](generated_client.ItemsApiGetItemsByUserIdRequest.md#years)

## Properties

### adjacentTo

• `Optional` `Readonly` **adjacentTo**: `string`

Optional. Return items that are siblings of a supplied item.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2083](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/items-api.ts#L2083)

___

### albumArtistIds

• `Optional` `Readonly` **albumArtistIds**: `string`[]

Optional. If specified, results will be filtered to include only those containing the specified album artist id.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2426](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/items-api.ts#L2426)

___

### albumIds

• `Optional` `Readonly` **albumIds**: `string`[]

Optional. If specified, results will be filtered based on album id. This allows multiple, pipe delimeted.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2447](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/items-api.ts#L2447)

___

### albums

• `Optional` `Readonly` **albums**: `string`[]

Optional. If specified, results will be filtered based on album. This allows multiple, pipe delimeted.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2440](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/items-api.ts#L2440)

___

### artistIds

• `Optional` `Readonly` **artistIds**: `string`[]

Optional. If specified, results will be filtered to include only those containing the specified artist id.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2419](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/items-api.ts#L2419)

___

### artists

• `Optional` `Readonly` **artists**: `string`[]

Optional. If specified, results will be filtered based on artists. This allows multiple, pipe delimeted.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2405](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/items-api.ts#L2405)

___

### collapseBoxSetItems

• `Optional` `Readonly` **collapseBoxSetItems**: `boolean`

Whether or not to hide items behind their boxsets.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2496](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/items-api.ts#L2496)

___

### contributingArtistIds

• `Optional` `Readonly` **contributingArtistIds**: `string`[]

Optional. If specified, results will be filtered to include only those containing the specified contributing artist id.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2433](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/items-api.ts#L2433)

___

### enableImageTypes

• `Optional` `Readonly` **enableImageTypes**: [`ImageType`](../enums/index.api.ImageType.md)[]

Optional. The image types to include in the output.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2370](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/items-api.ts#L2370)

___

### enableImages

• `Optional` `Readonly` **enableImages**: `boolean`

Optional, include image information in output.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2587](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/items-api.ts#L2587)

___

### enableTotalRecordCount

• `Optional` `Readonly` **enableTotalRecordCount**: `boolean`

Optional. Enable the total record count.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2580](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/items-api.ts#L2580)

___

### enableUserData

• `Optional` `Readonly` **enableUserData**: `boolean`

Optional, include user data.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2356](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/items-api.ts#L2356)

___

### excludeArtistIds

• `Optional` `Readonly` **excludeArtistIds**: `string`[]

Optional. If specified, results will be filtered based on artist id. This allows multiple, pipe delimeted.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2412](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/items-api.ts#L2412)

___

### excludeItemIds

• `Optional` `Readonly` **excludeItemIds**: `string`[]

Optional. If specified, results will be filtered by exxcluding item ids. This allows multiple, comma delimeted.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2216](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/items-api.ts#L2216)

___

### excludeItemTypes

• `Optional` `Readonly` **excludeItemTypes**: `string`[]

Optional. If specified, results will be filtered based on item type. This allows multiple, comma delimeted.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2272](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/items-api.ts#L2272)

___

### excludeLocationTypes

• `Optional` `Readonly` **excludeLocationTypes**: [`LocationType`](../enums/index.api.LocationType.md)[]

Optional. If specified, results will be filtered based on the LocationType. This allows multiple, comma delimeted.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2125](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/items-api.ts#L2125)

___

### fields

• `Optional` `Readonly` **fields**: [`ItemFields`](../enums/index.api.ItemFields.md)[]

Optional. Specify additional fields of information to return in the output. This allows multiple, comma delimeted. Options: Budget, Chapters, DateCreated, Genres, HomePageUrl, IndexOptions, MediaStreams, Overview, ParentId, Path, People, ProviderIds, PrimaryImageAspectRatio, Revenue, SortName, Studios, Taglines.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2265](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/items-api.ts#L2265)

___

### filters

• `Optional` `Readonly` **filters**: [`ItemFilter`](../enums/index.api.ItemFilter.md)[]

Optional. Specify additional filters to apply. This allows multiple, comma delimeted. Options: IsFolder, IsNotFolder, IsUnplayed, IsPlayed, IsFavorite, IsResumable, Likes, Dislikes.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2286](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/items-api.ts#L2286)

___

### genreIds

• `Optional` `Readonly` **genreIds**: `string`[]

Optional. If specified, results will be filtered based on genre id. This allows multiple, pipe delimeted.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2573](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/items-api.ts#L2573)

___

### genres

• `Optional` `Readonly` **genres**: `string`[]

Optional. If specified, results will be filtered based on genre. This allows multiple, pipe delimeted.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2328](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/items-api.ts#L2328)

___

### hasImdbId

• `Optional` `Readonly` **hasImdbId**: `boolean`

Optional filter by items that have an imdb id or not.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2195](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/items-api.ts#L2195)

___

### hasOfficialRating

• `Optional` `Readonly` **hasOfficialRating**: `boolean`

Optional filter by items that have official ratings.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2489](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/items-api.ts#L2489)

___

### hasOverview

• `Optional` `Readonly` **hasOverview**: `boolean`

Optional filter by items that have an overview or not.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2188](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/items-api.ts#L2188)

___

### hasParentalRating

• `Optional` `Readonly` **hasParentalRating**: `boolean`

Optional filter by items that have or do not have a parental rating.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2097](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/items-api.ts#L2097)

___

### hasSpecialFeature

• `Optional` `Readonly` **hasSpecialFeature**: `boolean`

Optional filter by items with special features.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2069](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/items-api.ts#L2069)

___

### hasSubtitles

• `Optional` `Readonly` **hasSubtitles**: `boolean`

Optional filter by items with subtitles.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2062](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/items-api.ts#L2062)

___

### hasThemeSong

• `Optional` `Readonly` **hasThemeSong**: `boolean`

Optional filter by items with theme songs.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2048](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/items-api.ts#L2048)

___

### hasThemeVideo

• `Optional` `Readonly` **hasThemeVideo**: `boolean`

Optional filter by items with theme videos.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2055](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/items-api.ts#L2055)

___

### hasTmdbId

• `Optional` `Readonly` **hasTmdbId**: `boolean`

Optional filter by items that have a tmdb id or not.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2202](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/items-api.ts#L2202)

___

### hasTrailer

• `Optional` `Readonly` **hasTrailer**: `boolean`

Optional filter by items with trailers.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2076](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/items-api.ts#L2076)

___

### hasTvdbId

• `Optional` `Readonly` **hasTvdbId**: `boolean`

Optional filter by items that have a tvdb id or not.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2209](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/items-api.ts#L2209)

___

### ids

• `Optional` `Readonly` **ids**: `string`[]

Optional. If specific items are needed, specify a list of item id\&#39;s to retrieve. This allows multiple, comma delimited.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2454](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/items-api.ts#L2454)

___

### imageTypeLimit

• `Optional` `Readonly` **imageTypeLimit**: `number`

Optional, the max number of images to return, per image type.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2363](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/items-api.ts#L2363)

___

### imageTypes

• `Optional` `Readonly` **imageTypes**: [`ImageType`](../enums/index.api.ImageType.md)[]

Optional. If specified, results will be filtered based on those containing image types. This allows multiple, comma delimited.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2307](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/items-api.ts#L2307)

___

### includeItemTypes

• `Optional` `Readonly` **includeItemTypes**: `string`[]

Optional. If specified, results will be filtered based on the item type. This allows multiple, comma delimeted.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2279](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/items-api.ts#L2279)

___

### is3D

• `Optional` `Readonly` **is3D**: `boolean`

Optional filter by items that are 3D, or not.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2531](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/items-api.ts#L2531)

___

### is4K

• `Optional` `Readonly` **is4K**: `boolean`

Optional filter by items that are 4K or not.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2111](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/items-api.ts#L2111)

___

### isFavorite

• `Optional` `Readonly` **isFavorite**: `boolean`

Optional filter by items that are marked as favorite, or not.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2293](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/items-api.ts#L2293)

___

### isHd

• `Optional` `Readonly` **isHd**: `boolean`

Optional filter by items that are HD or not.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2104](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/items-api.ts#L2104)

___

### isLocked

• `Optional` `Readonly` **isLocked**: `boolean`

Optional filter by items that are locked.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2475](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/items-api.ts#L2475)

___

### isMissing

• `Optional` `Readonly` **isMissing**: `boolean`

Optional filter by items that are missing episodes or not.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2132](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/items-api.ts#L2132)

___

### isPlaceHolder

• `Optional` `Readonly` **isPlaceHolder**: `boolean`

Optional filter by items that are placeholders.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2482](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/items-api.ts#L2482)

___

### isPlayed

• `Optional` `Readonly` **isPlayed**: `boolean`

Optional filter by items that are played, or not.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2321](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/items-api.ts#L2321)

___

### isUnaired

• `Optional` `Readonly` **isUnaired**: `boolean`

Optional filter by items that are unaired episodes or not.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2139](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/items-api.ts#L2139)

___

### limit

• `Optional` `Readonly` **limit**: `number`

Optional. The maximum number of records to return.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2230](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/items-api.ts#L2230)

___

### locationTypes

• `Optional` `Readonly` **locationTypes**: [`LocationType`](../enums/index.api.LocationType.md)[]

Optional. If specified, results will be filtered based on LocationType. This allows multiple, comma delimeted.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2118](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/items-api.ts#L2118)

___

### maxHeight

• `Optional` `Readonly` **maxHeight**: `number`

Optional. Filter by the maximum height of the item.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2524](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/items-api.ts#L2524)

___

### maxOfficialRating

• `Optional` `Readonly` **maxOfficialRating**: `string`

Optional filter by maximum official rating (PG, PG-13, TV-MA, etc).

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2041](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/items-api.ts#L2041)

___

### maxPremiereDate

• `Optional` `Readonly` **maxPremiereDate**: `string`

Optional. The maximum premiere date. Format &#x3D; ISO.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2181](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/items-api.ts#L2181)

___

### maxWidth

• `Optional` `Readonly` **maxWidth**: `number`

Optional. Filter by the maximum width of the item.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2517](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/items-api.ts#L2517)

___

### mediaTypes

• `Optional` `Readonly` **mediaTypes**: `string`[]

Optional filter by MediaType. Allows multiple, comma delimited.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2300](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/items-api.ts#L2300)

___

### minCommunityRating

• `Optional` `Readonly` **minCommunityRating**: `number`

Optional filter by minimum community rating.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2146](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/items-api.ts#L2146)

___

### minCriticRating

• `Optional` `Readonly` **minCriticRating**: `number`

Optional filter by minimum critic rating.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2153](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/items-api.ts#L2153)

___

### minDateLastSaved

• `Optional` `Readonly` **minDateLastSaved**: `string`

Optional. The minimum last saved date. Format &#x3D; ISO.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2167](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/items-api.ts#L2167)

___

### minDateLastSavedForUser

• `Optional` `Readonly` **minDateLastSavedForUser**: `string`

Optional. The minimum last saved date for the current user. Format &#x3D; ISO.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2174](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/items-api.ts#L2174)

___

### minHeight

• `Optional` `Readonly` **minHeight**: `number`

Optional. Filter by the minimum height of the item.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2510](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/items-api.ts#L2510)

___

### minOfficialRating

• `Optional` `Readonly` **minOfficialRating**: `string`

Optional filter by minimum official rating (PG, PG-13, TV-MA, etc).

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2468](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/items-api.ts#L2468)

___

### minPremiereDate

• `Optional` `Readonly` **minPremiereDate**: `string`

Optional. The minimum premiere date. Format &#x3D; ISO.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2160](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/items-api.ts#L2160)

___

### minWidth

• `Optional` `Readonly` **minWidth**: `number`

Optional. Filter by the minimum width of the item.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2503](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/items-api.ts#L2503)

___

### nameLessThan

• `Optional` `Readonly` **nameLessThan**: `string`

Optional filter by items whose name is equally or lesser than a given input string.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2559](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/items-api.ts#L2559)

___

### nameStartsWith

• `Optional` `Readonly` **nameStartsWith**: `string`

Optional filter by items whose name is sorted equally than a given input string.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2552](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/items-api.ts#L2552)

___

### nameStartsWithOrGreater

• `Optional` `Readonly` **nameStartsWithOrGreater**: `string`

Optional filter by items whose name is sorted equally or greater than a given input string.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2545](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/items-api.ts#L2545)

___

### officialRatings

• `Optional` `Readonly` **officialRatings**: `string`[]

Optional. If specified, results will be filtered based on OfficialRating. This allows multiple, pipe delimeted.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2335](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/items-api.ts#L2335)

___

### parentId

• `Optional` `Readonly` **parentId**: `string`

Specify this to localize the search to a specific item or folder. Omit to use the root.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2258](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/items-api.ts#L2258)

___

### parentIndexNumber

• `Optional` `Readonly` **parentIndexNumber**: `number`

Optional filter by parent index number.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2090](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/items-api.ts#L2090)

___

### person

• `Optional` `Readonly` **person**: `string`

Optional. If specified, results will be filtered to include only those containing the specified person.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2377](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/items-api.ts#L2377)

___

### personIds

• `Optional` `Readonly` **personIds**: `string`[]

Optional. If specified, results will be filtered to include only those containing the specified person id.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2384](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/items-api.ts#L2384)

___

### personTypes

• `Optional` `Readonly` **personTypes**: `string`[]

Optional. If specified, along with Person, results will be filtered to include only those containing the specified person and PersonType. Allows multiple, comma-delimited.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2391](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/items-api.ts#L2391)

___

### recursive

• `Optional` `Readonly` **recursive**: `boolean`

When searching within folders, this determines whether or not the search will be recursive. true/false.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2237](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/items-api.ts#L2237)

___

### searchTerm

• `Optional` `Readonly` **searchTerm**: `string`

Optional. Filter based on a search term.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2244](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/items-api.ts#L2244)

___

### seriesStatus

• `Optional` `Readonly` **seriesStatus**: [`SeriesStatus`](../enums/index.api.SeriesStatus.md)[]

Optional filter by Series Status. Allows multiple, comma delimeted.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2538](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/items-api.ts#L2538)

___

### sortBy

• `Optional` `Readonly` **sortBy**: `string`[]

Optional. Specify one or more sort orders, comma delimeted. Options: Album, AlbumArtist, Artist, Budget, CommunityRating, CriticRating, DateCreated, DatePlayed, PlayCount, PremiereDate, ProductionYear, SortName, Random, Revenue, Runtime.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2314](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/items-api.ts#L2314)

___

### sortOrder

• `Optional` `Readonly` **sortOrder**: [`SortOrder`](../enums/index.api.SortOrder.md)[]

Sort Order - Ascending,Descending.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2251](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/items-api.ts#L2251)

___

### startIndex

• `Optional` `Readonly` **startIndex**: `number`

Optional. The record index to start at. All items with a lower index will be dropped from the results.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2223](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/items-api.ts#L2223)

___

### studioIds

• `Optional` `Readonly` **studioIds**: `string`[]

Optional. If specified, results will be filtered based on studio id. This allows multiple, pipe delimeted.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2566](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/items-api.ts#L2566)

___

### studios

• `Optional` `Readonly` **studios**: `string`[]

Optional. If specified, results will be filtered based on studio. This allows multiple, pipe delimeted.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2398](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/items-api.ts#L2398)

___

### tags

• `Optional` `Readonly` **tags**: `string`[]

Optional. If specified, results will be filtered based on tag. This allows multiple, pipe delimeted.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2342](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/items-api.ts#L2342)

___

### userId

• `Readonly` **userId**: `string`

The user id supplied as query parameter.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2034](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/items-api.ts#L2034)

___

### videoTypes

• `Optional` `Readonly` **videoTypes**: [`VideoType`](../enums/index.api.VideoType.md)[]

Optional filter by VideoType (videofile, dvd, bluray, iso). Allows multiple, comma delimeted.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2461](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/items-api.ts#L2461)

___

### years

• `Optional` `Readonly` **years**: `number`[]

Optional. If specified, results will be filtered based on production year. This allows multiple, comma delimeted.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2349](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/items-api.ts#L2349)
