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
- [isKids](generated_client.ItemsApiGetItemsByUserIdRequest.md#iskids)
- [isLocked](generated_client.ItemsApiGetItemsByUserIdRequest.md#islocked)
- [isMissing](generated_client.ItemsApiGetItemsByUserIdRequest.md#ismissing)
- [isMovie](generated_client.ItemsApiGetItemsByUserIdRequest.md#ismovie)
- [isNews](generated_client.ItemsApiGetItemsByUserIdRequest.md#isnews)
- [isPlaceHolder](generated_client.ItemsApiGetItemsByUserIdRequest.md#isplaceholder)
- [isPlayed](generated_client.ItemsApiGetItemsByUserIdRequest.md#isplayed)
- [isSeries](generated_client.ItemsApiGetItemsByUserIdRequest.md#isseries)
- [isSports](generated_client.ItemsApiGetItemsByUserIdRequest.md#issports)
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

[generated-client/api/items-api.ts:2197](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L2197)

___

### albumArtistIds

• `Optional` `Readonly` **albumArtistIds**: `string`[]

Optional. If specified, results will be filtered to include only those containing the specified album artist id.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2575](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L2575)

___

### albumIds

• `Optional` `Readonly` **albumIds**: `string`[]

Optional. If specified, results will be filtered based on album id. This allows multiple, pipe delimited.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2596](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L2596)

___

### albums

• `Optional` `Readonly` **albums**: `string`[]

Optional. If specified, results will be filtered based on album. This allows multiple, pipe delimited.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2589](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L2589)

___

### artistIds

• `Optional` `Readonly` **artistIds**: `string`[]

Optional. If specified, results will be filtered to include only those containing the specified artist id.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2568](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L2568)

___

### artists

• `Optional` `Readonly` **artists**: `string`[]

Optional. If specified, results will be filtered based on artists. This allows multiple, pipe delimited.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2554](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L2554)

___

### collapseBoxSetItems

• `Optional` `Readonly` **collapseBoxSetItems**: `boolean`

Whether or not to hide items behind their boxsets.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2645](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L2645)

___

### contributingArtistIds

• `Optional` `Readonly` **contributingArtistIds**: `string`[]

Optional. If specified, results will be filtered to include only those containing the specified contributing artist id.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2582](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L2582)

___

### enableImageTypes

• `Optional` `Readonly` **enableImageTypes**: [`ImageType`](../enums/generated_client.ImageType.md)[]

Optional. The image types to include in the output.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2519](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L2519)

___

### enableImages

• `Optional` `Readonly` **enableImages**: `boolean`

Optional, include image information in output.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2736](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L2736)

___

### enableTotalRecordCount

• `Optional` `Readonly` **enableTotalRecordCount**: `boolean`

Optional. Enable the total record count.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2729](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L2729)

___

### enableUserData

• `Optional` `Readonly` **enableUserData**: `boolean`

Optional, include user data.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2505](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L2505)

___

### excludeArtistIds

• `Optional` `Readonly` **excludeArtistIds**: `string`[]

Optional. If specified, results will be filtered based on artist id. This allows multiple, pipe delimited.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2561](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L2561)

___

### excludeItemIds

• `Optional` `Readonly` **excludeItemIds**: `string`[]

Optional. If specified, results will be filtered by excluding item ids. This allows multiple, comma delimited.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2365](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L2365)

___

### excludeItemTypes

• `Optional` `Readonly` **excludeItemTypes**: [`BaseItemKind`](../enums/generated_client.BaseItemKind.md)[]

Optional. If specified, results will be filtered based on item type. This allows multiple, comma delimited.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2421](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L2421)

___

### excludeLocationTypes

• `Optional` `Readonly` **excludeLocationTypes**: [`LocationType`](../enums/generated_client.LocationType.md)[]

Optional. If specified, results will be filtered based on the LocationType. This allows multiple, comma delimited.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2239](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L2239)

___

### fields

• `Optional` `Readonly` **fields**: [`ItemFields`](../enums/generated_client.ItemFields.md)[]

Optional. Specify additional fields of information to return in the output. This allows multiple, comma delimited. Options: Budget, Chapters, DateCreated, Genres, HomePageUrl, IndexOptions, MediaStreams, Overview, ParentId, Path, People, ProviderIds, PrimaryImageAspectRatio, Revenue, SortName, Studios, Taglines.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2414](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L2414)

___

### filters

• `Optional` `Readonly` **filters**: [`ItemFilter`](../enums/generated_client.ItemFilter.md)[]

Optional. Specify additional filters to apply. This allows multiple, comma delimited. Options: IsFolder, IsNotFolder, IsUnplayed, IsPlayed, IsFavorite, IsResumable, Likes, Dislikes.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2435](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L2435)

___

### genreIds

• `Optional` `Readonly` **genreIds**: `string`[]

Optional. If specified, results will be filtered based on genre id. This allows multiple, pipe delimited.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2722](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L2722)

___

### genres

• `Optional` `Readonly` **genres**: `string`[]

Optional. If specified, results will be filtered based on genre. This allows multiple, pipe delimited.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2477](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L2477)

___

### hasImdbId

• `Optional` `Readonly` **hasImdbId**: `boolean`

Optional filter by items that have an imdb id or not.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2309](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L2309)

___

### hasOfficialRating

• `Optional` `Readonly` **hasOfficialRating**: `boolean`

Optional filter by items that have official ratings.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2638](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L2638)

___

### hasOverview

• `Optional` `Readonly` **hasOverview**: `boolean`

Optional filter by items that have an overview or not.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2302](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L2302)

___

### hasParentalRating

• `Optional` `Readonly` **hasParentalRating**: `boolean`

Optional filter by items that have or do not have a parental rating.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2211](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L2211)

___

### hasSpecialFeature

• `Optional` `Readonly` **hasSpecialFeature**: `boolean`

Optional filter by items with special features.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2183](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L2183)

___

### hasSubtitles

• `Optional` `Readonly` **hasSubtitles**: `boolean`

Optional filter by items with subtitles.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2176](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L2176)

___

### hasThemeSong

• `Optional` `Readonly` **hasThemeSong**: `boolean`

Optional filter by items with theme songs.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2162](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L2162)

___

### hasThemeVideo

• `Optional` `Readonly` **hasThemeVideo**: `boolean`

Optional filter by items with theme videos.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2169](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L2169)

___

### hasTmdbId

• `Optional` `Readonly` **hasTmdbId**: `boolean`

Optional filter by items that have a tmdb id or not.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2316](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L2316)

___

### hasTrailer

• `Optional` `Readonly` **hasTrailer**: `boolean`

Optional filter by items with trailers.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2190](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L2190)

___

### hasTvdbId

• `Optional` `Readonly` **hasTvdbId**: `boolean`

Optional filter by items that have a tvdb id or not.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2323](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L2323)

___

### ids

• `Optional` `Readonly` **ids**: `string`[]

Optional. If specific items are needed, specify a list of item id\&#39;s to retrieve. This allows multiple, comma delimited.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2603](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L2603)

___

### imageTypeLimit

• `Optional` `Readonly` **imageTypeLimit**: `number`

Optional, the max number of images to return, per image type.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2512](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L2512)

___

### imageTypes

• `Optional` `Readonly` **imageTypes**: [`ImageType`](../enums/generated_client.ImageType.md)[]

Optional. If specified, results will be filtered based on those containing image types. This allows multiple, comma delimited.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2456](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L2456)

___

### includeItemTypes

• `Optional` `Readonly` **includeItemTypes**: [`BaseItemKind`](../enums/generated_client.BaseItemKind.md)[]

Optional. If specified, results will be filtered based on the item type. This allows multiple, comma delimited.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2428](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L2428)

___

### is3D

• `Optional` `Readonly` **is3D**: `boolean`

Optional filter by items that are 3D, or not.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2680](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L2680)

___

### is4K

• `Optional` `Readonly` **is4K**: `boolean`

Optional filter by items that are 4K or not.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2225](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L2225)

___

### isFavorite

• `Optional` `Readonly` **isFavorite**: `boolean`

Optional filter by items that are marked as favorite, or not.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2442](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L2442)

___

### isHd

• `Optional` `Readonly` **isHd**: `boolean`

Optional filter by items that are HD or not.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2218](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L2218)

___

### isKids

• `Optional` `Readonly` **isKids**: `boolean`

Optional filter for live tv kids.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2351](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L2351)

___

### isLocked

• `Optional` `Readonly` **isLocked**: `boolean`

Optional filter by items that are locked.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2624](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L2624)

___

### isMissing

• `Optional` `Readonly` **isMissing**: `boolean`

Optional filter by items that are missing episodes or not.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2246](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L2246)

___

### isMovie

• `Optional` `Readonly` **isMovie**: `boolean`

Optional filter for live tv movies.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2330](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L2330)

___

### isNews

• `Optional` `Readonly` **isNews**: `boolean`

Optional filter for live tv news.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2344](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L2344)

___

### isPlaceHolder

• `Optional` `Readonly` **isPlaceHolder**: `boolean`

Optional filter by items that are placeholders.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2631](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L2631)

___

### isPlayed

• `Optional` `Readonly` **isPlayed**: `boolean`

Optional filter by items that are played, or not.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2470](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L2470)

___

### isSeries

• `Optional` `Readonly` **isSeries**: `boolean`

Optional filter for live tv series.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2337](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L2337)

___

### isSports

• `Optional` `Readonly` **isSports**: `boolean`

Optional filter for live tv sports.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2358](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L2358)

___

### isUnaired

• `Optional` `Readonly` **isUnaired**: `boolean`

Optional filter by items that are unaired episodes or not.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2253](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L2253)

___

### limit

• `Optional` `Readonly` **limit**: `number`

Optional. The maximum number of records to return.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2379](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L2379)

___

### locationTypes

• `Optional` `Readonly` **locationTypes**: [`LocationType`](../enums/generated_client.LocationType.md)[]

Optional. If specified, results will be filtered based on LocationType. This allows multiple, comma delimited.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2232](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L2232)

___

### maxHeight

• `Optional` `Readonly` **maxHeight**: `number`

Optional. Filter by the maximum height of the item.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2673](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L2673)

___

### maxOfficialRating

• `Optional` `Readonly` **maxOfficialRating**: `string`

Optional filter by maximum official rating (PG, PG-13, TV-MA, etc).

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2155](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L2155)

___

### maxPremiereDate

• `Optional` `Readonly` **maxPremiereDate**: `string`

Optional. The maximum premiere date. Format &#x3D; ISO.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2295](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L2295)

___

### maxWidth

• `Optional` `Readonly` **maxWidth**: `number`

Optional. Filter by the maximum width of the item.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2666](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L2666)

___

### mediaTypes

• `Optional` `Readonly` **mediaTypes**: `string`[]

Optional filter by MediaType. Allows multiple, comma delimited.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2449](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L2449)

___

### minCommunityRating

• `Optional` `Readonly` **minCommunityRating**: `number`

Optional filter by minimum community rating.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2260](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L2260)

___

### minCriticRating

• `Optional` `Readonly` **minCriticRating**: `number`

Optional filter by minimum critic rating.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2267](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L2267)

___

### minDateLastSaved

• `Optional` `Readonly` **minDateLastSaved**: `string`

Optional. The minimum last saved date. Format &#x3D; ISO.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2281](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L2281)

___

### minDateLastSavedForUser

• `Optional` `Readonly` **minDateLastSavedForUser**: `string`

Optional. The minimum last saved date for the current user. Format &#x3D; ISO.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2288](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L2288)

___

### minHeight

• `Optional` `Readonly` **minHeight**: `number`

Optional. Filter by the minimum height of the item.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2659](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L2659)

___

### minOfficialRating

• `Optional` `Readonly` **minOfficialRating**: `string`

Optional filter by minimum official rating (PG, PG-13, TV-MA, etc).

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2617](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L2617)

___

### minPremiereDate

• `Optional` `Readonly` **minPremiereDate**: `string`

Optional. The minimum premiere date. Format &#x3D; ISO.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2274](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L2274)

___

### minWidth

• `Optional` `Readonly` **minWidth**: `number`

Optional. Filter by the minimum width of the item.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2652](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L2652)

___

### nameLessThan

• `Optional` `Readonly` **nameLessThan**: `string`

Optional filter by items whose name is equally or lesser than a given input string.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2708](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L2708)

___

### nameStartsWith

• `Optional` `Readonly` **nameStartsWith**: `string`

Optional filter by items whose name is sorted equally than a given input string.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2701](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L2701)

___

### nameStartsWithOrGreater

• `Optional` `Readonly` **nameStartsWithOrGreater**: `string`

Optional filter by items whose name is sorted equally or greater than a given input string.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2694](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L2694)

___

### officialRatings

• `Optional` `Readonly` **officialRatings**: `string`[]

Optional. If specified, results will be filtered based on OfficialRating. This allows multiple, pipe delimited.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2484](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L2484)

___

### parentId

• `Optional` `Readonly` **parentId**: `string`

Specify this to localize the search to a specific item or folder. Omit to use the root.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2407](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L2407)

___

### parentIndexNumber

• `Optional` `Readonly` **parentIndexNumber**: `number`

Optional filter by parent index number.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2204](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L2204)

___

### person

• `Optional` `Readonly` **person**: `string`

Optional. If specified, results will be filtered to include only those containing the specified person.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2526](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L2526)

___

### personIds

• `Optional` `Readonly` **personIds**: `string`[]

Optional. If specified, results will be filtered to include only those containing the specified person id.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2533](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L2533)

___

### personTypes

• `Optional` `Readonly` **personTypes**: `string`[]

Optional. If specified, along with Person, results will be filtered to include only those containing the specified person and PersonType. Allows multiple, comma-delimited.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2540](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L2540)

___

### recursive

• `Optional` `Readonly` **recursive**: `boolean`

When searching within folders, this determines whether or not the search will be recursive. true/false.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2386](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L2386)

___

### searchTerm

• `Optional` `Readonly` **searchTerm**: `string`

Optional. Filter based on a search term.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2393](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L2393)

___

### seriesStatus

• `Optional` `Readonly` **seriesStatus**: [`SeriesStatus`](../enums/generated_client.SeriesStatus.md)[]

Optional filter by Series Status. Allows multiple, comma delimited.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2687](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L2687)

___

### sortBy

• `Optional` `Readonly` **sortBy**: `string`[]

Optional. Specify one or more sort orders, comma delimited. Options: Album, AlbumArtist, Artist, Budget, CommunityRating, CriticRating, DateCreated, DatePlayed, PlayCount, PremiereDate, ProductionYear, SortName, Random, Revenue, Runtime.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2463](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L2463)

___

### sortOrder

• `Optional` `Readonly` **sortOrder**: [`SortOrder`](../enums/generated_client.SortOrder.md)[]

Sort Order - Ascending,Descending.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2400](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L2400)

___

### startIndex

• `Optional` `Readonly` **startIndex**: `number`

Optional. The record index to start at. All items with a lower index will be dropped from the results.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2372](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L2372)

___

### studioIds

• `Optional` `Readonly` **studioIds**: `string`[]

Optional. If specified, results will be filtered based on studio id. This allows multiple, pipe delimited.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2715](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L2715)

___

### studios

• `Optional` `Readonly` **studios**: `string`[]

Optional. If specified, results will be filtered based on studio. This allows multiple, pipe delimited.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2547](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L2547)

___

### tags

• `Optional` `Readonly` **tags**: `string`[]

Optional. If specified, results will be filtered based on tag. This allows multiple, pipe delimited.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2491](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L2491)

___

### userId

• `Readonly` **userId**: `string`

The user id supplied as query parameter.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2148](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L2148)

___

### videoTypes

• `Optional` `Readonly` **videoTypes**: [`VideoType`](../enums/generated_client.VideoType.md)[]

Optional filter by VideoType (videofile, dvd, bluray, iso). Allows multiple, comma delimited.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2610](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L2610)

___

### years

• `Optional` `Readonly` **years**: `number`[]

Optional. If specified, results will be filtered based on production year. This allows multiple, comma delimited.

**`memberof`** ItemsApiGetItemsByUserId

#### Defined in

[generated-client/api/items-api.ts:2498](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L2498)
