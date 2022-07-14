[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / ItemsApiGetItemsRequest

# Interface: ItemsApiGetItemsRequest

[generated-client](../modules/generated_client.md).ItemsApiGetItemsRequest

Request parameters for getItems operation in ItemsApi.

**`export`**

**`interface`** ItemsApiGetItemsRequest

## Table of contents

### Properties

- [adjacentTo](generated_client.ItemsApiGetItemsRequest.md#adjacentto)
- [albumArtistIds](generated_client.ItemsApiGetItemsRequest.md#albumartistids)
- [albumIds](generated_client.ItemsApiGetItemsRequest.md#albumids)
- [albums](generated_client.ItemsApiGetItemsRequest.md#albums)
- [artistIds](generated_client.ItemsApiGetItemsRequest.md#artistids)
- [artists](generated_client.ItemsApiGetItemsRequest.md#artists)
- [collapseBoxSetItems](generated_client.ItemsApiGetItemsRequest.md#collapseboxsetitems)
- [contributingArtistIds](generated_client.ItemsApiGetItemsRequest.md#contributingartistids)
- [enableImageTypes](generated_client.ItemsApiGetItemsRequest.md#enableimagetypes)
- [enableImages](generated_client.ItemsApiGetItemsRequest.md#enableimages)
- [enableTotalRecordCount](generated_client.ItemsApiGetItemsRequest.md#enabletotalrecordcount)
- [enableUserData](generated_client.ItemsApiGetItemsRequest.md#enableuserdata)
- [excludeArtistIds](generated_client.ItemsApiGetItemsRequest.md#excludeartistids)
- [excludeItemIds](generated_client.ItemsApiGetItemsRequest.md#excludeitemids)
- [excludeItemTypes](generated_client.ItemsApiGetItemsRequest.md#excludeitemtypes)
- [excludeLocationTypes](generated_client.ItemsApiGetItemsRequest.md#excludelocationtypes)
- [fields](generated_client.ItemsApiGetItemsRequest.md#fields)
- [filters](generated_client.ItemsApiGetItemsRequest.md#filters)
- [genreIds](generated_client.ItemsApiGetItemsRequest.md#genreids)
- [genres](generated_client.ItemsApiGetItemsRequest.md#genres)
- [hasImdbId](generated_client.ItemsApiGetItemsRequest.md#hasimdbid)
- [hasOfficialRating](generated_client.ItemsApiGetItemsRequest.md#hasofficialrating)
- [hasOverview](generated_client.ItemsApiGetItemsRequest.md#hasoverview)
- [hasParentalRating](generated_client.ItemsApiGetItemsRequest.md#hasparentalrating)
- [hasSpecialFeature](generated_client.ItemsApiGetItemsRequest.md#hasspecialfeature)
- [hasSubtitles](generated_client.ItemsApiGetItemsRequest.md#hassubtitles)
- [hasThemeSong](generated_client.ItemsApiGetItemsRequest.md#hasthemesong)
- [hasThemeVideo](generated_client.ItemsApiGetItemsRequest.md#hasthemevideo)
- [hasTmdbId](generated_client.ItemsApiGetItemsRequest.md#hastmdbid)
- [hasTrailer](generated_client.ItemsApiGetItemsRequest.md#hastrailer)
- [hasTvdbId](generated_client.ItemsApiGetItemsRequest.md#hastvdbid)
- [ids](generated_client.ItemsApiGetItemsRequest.md#ids)
- [imageTypeLimit](generated_client.ItemsApiGetItemsRequest.md#imagetypelimit)
- [imageTypes](generated_client.ItemsApiGetItemsRequest.md#imagetypes)
- [includeItemTypes](generated_client.ItemsApiGetItemsRequest.md#includeitemtypes)
- [is3D](generated_client.ItemsApiGetItemsRequest.md#is3d)
- [is4K](generated_client.ItemsApiGetItemsRequest.md#is4k)
- [isFavorite](generated_client.ItemsApiGetItemsRequest.md#isfavorite)
- [isHd](generated_client.ItemsApiGetItemsRequest.md#ishd)
- [isKids](generated_client.ItemsApiGetItemsRequest.md#iskids)
- [isLocked](generated_client.ItemsApiGetItemsRequest.md#islocked)
- [isMissing](generated_client.ItemsApiGetItemsRequest.md#ismissing)
- [isMovie](generated_client.ItemsApiGetItemsRequest.md#ismovie)
- [isNews](generated_client.ItemsApiGetItemsRequest.md#isnews)
- [isPlaceHolder](generated_client.ItemsApiGetItemsRequest.md#isplaceholder)
- [isPlayed](generated_client.ItemsApiGetItemsRequest.md#isplayed)
- [isSeries](generated_client.ItemsApiGetItemsRequest.md#isseries)
- [isSports](generated_client.ItemsApiGetItemsRequest.md#issports)
- [isUnaired](generated_client.ItemsApiGetItemsRequest.md#isunaired)
- [limit](generated_client.ItemsApiGetItemsRequest.md#limit)
- [locationTypes](generated_client.ItemsApiGetItemsRequest.md#locationtypes)
- [maxHeight](generated_client.ItemsApiGetItemsRequest.md#maxheight)
- [maxOfficialRating](generated_client.ItemsApiGetItemsRequest.md#maxofficialrating)
- [maxPremiereDate](generated_client.ItemsApiGetItemsRequest.md#maxpremieredate)
- [maxWidth](generated_client.ItemsApiGetItemsRequest.md#maxwidth)
- [mediaTypes](generated_client.ItemsApiGetItemsRequest.md#mediatypes)
- [minCommunityRating](generated_client.ItemsApiGetItemsRequest.md#mincommunityrating)
- [minCriticRating](generated_client.ItemsApiGetItemsRequest.md#mincriticrating)
- [minDateLastSaved](generated_client.ItemsApiGetItemsRequest.md#mindatelastsaved)
- [minDateLastSavedForUser](generated_client.ItemsApiGetItemsRequest.md#mindatelastsavedforuser)
- [minHeight](generated_client.ItemsApiGetItemsRequest.md#minheight)
- [minOfficialRating](generated_client.ItemsApiGetItemsRequest.md#minofficialrating)
- [minPremiereDate](generated_client.ItemsApiGetItemsRequest.md#minpremieredate)
- [minWidth](generated_client.ItemsApiGetItemsRequest.md#minwidth)
- [nameLessThan](generated_client.ItemsApiGetItemsRequest.md#namelessthan)
- [nameStartsWith](generated_client.ItemsApiGetItemsRequest.md#namestartswith)
- [nameStartsWithOrGreater](generated_client.ItemsApiGetItemsRequest.md#namestartswithorgreater)
- [officialRatings](generated_client.ItemsApiGetItemsRequest.md#officialratings)
- [parentId](generated_client.ItemsApiGetItemsRequest.md#parentid)
- [parentIndexNumber](generated_client.ItemsApiGetItemsRequest.md#parentindexnumber)
- [person](generated_client.ItemsApiGetItemsRequest.md#person)
- [personIds](generated_client.ItemsApiGetItemsRequest.md#personids)
- [personTypes](generated_client.ItemsApiGetItemsRequest.md#persontypes)
- [recursive](generated_client.ItemsApiGetItemsRequest.md#recursive)
- [searchTerm](generated_client.ItemsApiGetItemsRequest.md#searchterm)
- [seriesStatus](generated_client.ItemsApiGetItemsRequest.md#seriesstatus)
- [sortBy](generated_client.ItemsApiGetItemsRequest.md#sortby)
- [sortOrder](generated_client.ItemsApiGetItemsRequest.md#sortorder)
- [startIndex](generated_client.ItemsApiGetItemsRequest.md#startindex)
- [studioIds](generated_client.ItemsApiGetItemsRequest.md#studioids)
- [studios](generated_client.ItemsApiGetItemsRequest.md#studios)
- [tags](generated_client.ItemsApiGetItemsRequest.md#tags)
- [userId](generated_client.ItemsApiGetItemsRequest.md#userid)
- [videoTypes](generated_client.ItemsApiGetItemsRequest.md#videotypes)
- [years](generated_client.ItemsApiGetItemsRequest.md#years)

## Properties

### adjacentTo

• `Optional` `Readonly` **adjacentTo**: `string`

Optional. Return items that are siblings of a supplied item.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1595](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L1595)

___

### albumArtistIds

• `Optional` `Readonly` **albumArtistIds**: `string`[]

Optional. If specified, results will be filtered to include only those containing the specified album artist id.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1973](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L1973)

___

### albumIds

• `Optional` `Readonly` **albumIds**: `string`[]

Optional. If specified, results will be filtered based on album id. This allows multiple, pipe delimited.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1994](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L1994)

___

### albums

• `Optional` `Readonly` **albums**: `string`[]

Optional. If specified, results will be filtered based on album. This allows multiple, pipe delimited.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1987](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L1987)

___

### artistIds

• `Optional` `Readonly` **artistIds**: `string`[]

Optional. If specified, results will be filtered to include only those containing the specified artist id.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1966](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L1966)

___

### artists

• `Optional` `Readonly` **artists**: `string`[]

Optional. If specified, results will be filtered based on artists. This allows multiple, pipe delimited.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1952](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L1952)

___

### collapseBoxSetItems

• `Optional` `Readonly` **collapseBoxSetItems**: `boolean`

Whether or not to hide items behind their boxsets.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:2043](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L2043)

___

### contributingArtistIds

• `Optional` `Readonly` **contributingArtistIds**: `string`[]

Optional. If specified, results will be filtered to include only those containing the specified contributing artist id.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1980](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L1980)

___

### enableImageTypes

• `Optional` `Readonly` **enableImageTypes**: [`ImageType`](../enums/generated_client.ImageType.md)[]

Optional. The image types to include in the output.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1917](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L1917)

___

### enableImages

• `Optional` `Readonly` **enableImages**: `boolean`

Optional, include image information in output.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:2134](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L2134)

___

### enableTotalRecordCount

• `Optional` `Readonly` **enableTotalRecordCount**: `boolean`

Optional. Enable the total record count.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:2127](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L2127)

___

### enableUserData

• `Optional` `Readonly` **enableUserData**: `boolean`

Optional, include user data.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1903](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L1903)

___

### excludeArtistIds

• `Optional` `Readonly` **excludeArtistIds**: `string`[]

Optional. If specified, results will be filtered based on artist id. This allows multiple, pipe delimited.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1959](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L1959)

___

### excludeItemIds

• `Optional` `Readonly` **excludeItemIds**: `string`[]

Optional. If specified, results will be filtered by excluding item ids. This allows multiple, comma delimited.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1763](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L1763)

___

### excludeItemTypes

• `Optional` `Readonly` **excludeItemTypes**: [`BaseItemKind`](../enums/generated_client.BaseItemKind.md)[]

Optional. If specified, results will be filtered based on item type. This allows multiple, comma delimited.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1819](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L1819)

___

### excludeLocationTypes

• `Optional` `Readonly` **excludeLocationTypes**: [`LocationType`](../enums/generated_client.LocationType.md)[]

Optional. If specified, results will be filtered based on the LocationType. This allows multiple, comma delimited.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1637](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L1637)

___

### fields

• `Optional` `Readonly` **fields**: [`ItemFields`](../enums/generated_client.ItemFields.md)[]

Optional. Specify additional fields of information to return in the output. This allows multiple, comma delimited. Options: Budget, Chapters, DateCreated, Genres, HomePageUrl, IndexOptions, MediaStreams, Overview, ParentId, Path, People, ProviderIds, PrimaryImageAspectRatio, Revenue, SortName, Studios, Taglines.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1812](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L1812)

___

### filters

• `Optional` `Readonly` **filters**: [`ItemFilter`](../enums/generated_client.ItemFilter.md)[]

Optional. Specify additional filters to apply. This allows multiple, comma delimited. Options: IsFolder, IsNotFolder, IsUnplayed, IsPlayed, IsFavorite, IsResumable, Likes, Dislikes.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1833](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L1833)

___

### genreIds

• `Optional` `Readonly` **genreIds**: `string`[]

Optional. If specified, results will be filtered based on genre id. This allows multiple, pipe delimited.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:2120](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L2120)

___

### genres

• `Optional` `Readonly` **genres**: `string`[]

Optional. If specified, results will be filtered based on genre. This allows multiple, pipe delimited.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1875](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L1875)

___

### hasImdbId

• `Optional` `Readonly` **hasImdbId**: `boolean`

Optional filter by items that have an imdb id or not.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1707](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L1707)

___

### hasOfficialRating

• `Optional` `Readonly` **hasOfficialRating**: `boolean`

Optional filter by items that have official ratings.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:2036](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L2036)

___

### hasOverview

• `Optional` `Readonly` **hasOverview**: `boolean`

Optional filter by items that have an overview or not.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1700](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L1700)

___

### hasParentalRating

• `Optional` `Readonly` **hasParentalRating**: `boolean`

Optional filter by items that have or do not have a parental rating.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1609](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L1609)

___

### hasSpecialFeature

• `Optional` `Readonly` **hasSpecialFeature**: `boolean`

Optional filter by items with special features.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1581](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L1581)

___

### hasSubtitles

• `Optional` `Readonly` **hasSubtitles**: `boolean`

Optional filter by items with subtitles.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1574](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L1574)

___

### hasThemeSong

• `Optional` `Readonly` **hasThemeSong**: `boolean`

Optional filter by items with theme songs.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1560](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L1560)

___

### hasThemeVideo

• `Optional` `Readonly` **hasThemeVideo**: `boolean`

Optional filter by items with theme videos.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1567](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L1567)

___

### hasTmdbId

• `Optional` `Readonly` **hasTmdbId**: `boolean`

Optional filter by items that have a tmdb id or not.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1714](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L1714)

___

### hasTrailer

• `Optional` `Readonly` **hasTrailer**: `boolean`

Optional filter by items with trailers.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1588](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L1588)

___

### hasTvdbId

• `Optional` `Readonly` **hasTvdbId**: `boolean`

Optional filter by items that have a tvdb id or not.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1721](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L1721)

___

### ids

• `Optional` `Readonly` **ids**: `string`[]

Optional. If specific items are needed, specify a list of item id\&#39;s to retrieve. This allows multiple, comma delimited.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:2001](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L2001)

___

### imageTypeLimit

• `Optional` `Readonly` **imageTypeLimit**: `number`

Optional, the max number of images to return, per image type.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1910](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L1910)

___

### imageTypes

• `Optional` `Readonly` **imageTypes**: [`ImageType`](../enums/generated_client.ImageType.md)[]

Optional. If specified, results will be filtered based on those containing image types. This allows multiple, comma delimited.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1854](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L1854)

___

### includeItemTypes

• `Optional` `Readonly` **includeItemTypes**: [`BaseItemKind`](../enums/generated_client.BaseItemKind.md)[]

Optional. If specified, results will be filtered based on the item type. This allows multiple, comma delimited.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1826](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L1826)

___

### is3D

• `Optional` `Readonly` **is3D**: `boolean`

Optional filter by items that are 3D, or not.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:2078](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L2078)

___

### is4K

• `Optional` `Readonly` **is4K**: `boolean`

Optional filter by items that are 4K or not.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1623](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L1623)

___

### isFavorite

• `Optional` `Readonly` **isFavorite**: `boolean`

Optional filter by items that are marked as favorite, or not.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1840](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L1840)

___

### isHd

• `Optional` `Readonly` **isHd**: `boolean`

Optional filter by items that are HD or not.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1616](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L1616)

___

### isKids

• `Optional` `Readonly` **isKids**: `boolean`

Optional filter for live tv kids.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1749](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L1749)

___

### isLocked

• `Optional` `Readonly` **isLocked**: `boolean`

Optional filter by items that are locked.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:2022](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L2022)

___

### isMissing

• `Optional` `Readonly` **isMissing**: `boolean`

Optional filter by items that are missing episodes or not.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1644](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L1644)

___

### isMovie

• `Optional` `Readonly` **isMovie**: `boolean`

Optional filter for live tv movies.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1728](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L1728)

___

### isNews

• `Optional` `Readonly` **isNews**: `boolean`

Optional filter for live tv news.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1742](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L1742)

___

### isPlaceHolder

• `Optional` `Readonly` **isPlaceHolder**: `boolean`

Optional filter by items that are placeholders.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:2029](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L2029)

___

### isPlayed

• `Optional` `Readonly` **isPlayed**: `boolean`

Optional filter by items that are played, or not.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1868](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L1868)

___

### isSeries

• `Optional` `Readonly` **isSeries**: `boolean`

Optional filter for live tv series.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1735](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L1735)

___

### isSports

• `Optional` `Readonly` **isSports**: `boolean`

Optional filter for live tv sports.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1756](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L1756)

___

### isUnaired

• `Optional` `Readonly` **isUnaired**: `boolean`

Optional filter by items that are unaired episodes or not.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1651](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L1651)

___

### limit

• `Optional` `Readonly` **limit**: `number`

Optional. The maximum number of records to return.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1777](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L1777)

___

### locationTypes

• `Optional` `Readonly` **locationTypes**: [`LocationType`](../enums/generated_client.LocationType.md)[]

Optional. If specified, results will be filtered based on LocationType. This allows multiple, comma delimited.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1630](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L1630)

___

### maxHeight

• `Optional` `Readonly` **maxHeight**: `number`

Optional. Filter by the maximum height of the item.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:2071](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L2071)

___

### maxOfficialRating

• `Optional` `Readonly` **maxOfficialRating**: `string`

Optional filter by maximum official rating (PG, PG-13, TV-MA, etc).

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1553](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L1553)

___

### maxPremiereDate

• `Optional` `Readonly` **maxPremiereDate**: `string`

Optional. The maximum premiere date. Format &#x3D; ISO.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1693](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L1693)

___

### maxWidth

• `Optional` `Readonly` **maxWidth**: `number`

Optional. Filter by the maximum width of the item.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:2064](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L2064)

___

### mediaTypes

• `Optional` `Readonly` **mediaTypes**: `string`[]

Optional filter by MediaType. Allows multiple, comma delimited.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1847](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L1847)

___

### minCommunityRating

• `Optional` `Readonly` **minCommunityRating**: `number`

Optional filter by minimum community rating.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1658](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L1658)

___

### minCriticRating

• `Optional` `Readonly` **minCriticRating**: `number`

Optional filter by minimum critic rating.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1665](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L1665)

___

### minDateLastSaved

• `Optional` `Readonly` **minDateLastSaved**: `string`

Optional. The minimum last saved date. Format &#x3D; ISO.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1679](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L1679)

___

### minDateLastSavedForUser

• `Optional` `Readonly` **minDateLastSavedForUser**: `string`

Optional. The minimum last saved date for the current user. Format &#x3D; ISO.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1686](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L1686)

___

### minHeight

• `Optional` `Readonly` **minHeight**: `number`

Optional. Filter by the minimum height of the item.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:2057](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L2057)

___

### minOfficialRating

• `Optional` `Readonly` **minOfficialRating**: `string`

Optional filter by minimum official rating (PG, PG-13, TV-MA, etc).

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:2015](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L2015)

___

### minPremiereDate

• `Optional` `Readonly` **minPremiereDate**: `string`

Optional. The minimum premiere date. Format &#x3D; ISO.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1672](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L1672)

___

### minWidth

• `Optional` `Readonly` **minWidth**: `number`

Optional. Filter by the minimum width of the item.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:2050](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L2050)

___

### nameLessThan

• `Optional` `Readonly` **nameLessThan**: `string`

Optional filter by items whose name is equally or lesser than a given input string.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:2106](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L2106)

___

### nameStartsWith

• `Optional` `Readonly` **nameStartsWith**: `string`

Optional filter by items whose name is sorted equally than a given input string.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:2099](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L2099)

___

### nameStartsWithOrGreater

• `Optional` `Readonly` **nameStartsWithOrGreater**: `string`

Optional filter by items whose name is sorted equally or greater than a given input string.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:2092](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L2092)

___

### officialRatings

• `Optional` `Readonly` **officialRatings**: `string`[]

Optional. If specified, results will be filtered based on OfficialRating. This allows multiple, pipe delimited.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1882](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L1882)

___

### parentId

• `Optional` `Readonly` **parentId**: `string`

Specify this to localize the search to a specific item or folder. Omit to use the root.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1805](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L1805)

___

### parentIndexNumber

• `Optional` `Readonly` **parentIndexNumber**: `number`

Optional filter by parent index number.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1602](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L1602)

___

### person

• `Optional` `Readonly` **person**: `string`

Optional. If specified, results will be filtered to include only those containing the specified person.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1924](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L1924)

___

### personIds

• `Optional` `Readonly` **personIds**: `string`[]

Optional. If specified, results will be filtered to include only those containing the specified person id.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1931](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L1931)

___

### personTypes

• `Optional` `Readonly` **personTypes**: `string`[]

Optional. If specified, along with Person, results will be filtered to include only those containing the specified person and PersonType. Allows multiple, comma-delimited.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1938](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L1938)

___

### recursive

• `Optional` `Readonly` **recursive**: `boolean`

When searching within folders, this determines whether or not the search will be recursive. true/false.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1784](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L1784)

___

### searchTerm

• `Optional` `Readonly` **searchTerm**: `string`

Optional. Filter based on a search term.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1791](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L1791)

___

### seriesStatus

• `Optional` `Readonly` **seriesStatus**: [`SeriesStatus`](../enums/generated_client.SeriesStatus.md)[]

Optional filter by Series Status. Allows multiple, comma delimited.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:2085](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L2085)

___

### sortBy

• `Optional` `Readonly` **sortBy**: `string`[]

Optional. Specify one or more sort orders, comma delimited. Options: Album, AlbumArtist, Artist, Budget, CommunityRating, CriticRating, DateCreated, DatePlayed, PlayCount, PremiereDate, ProductionYear, SortName, Random, Revenue, Runtime.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1861](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L1861)

___

### sortOrder

• `Optional` `Readonly` **sortOrder**: [`SortOrder`](../enums/generated_client.SortOrder.md)[]

Sort Order - Ascending,Descending.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1798](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L1798)

___

### startIndex

• `Optional` `Readonly` **startIndex**: `number`

Optional. The record index to start at. All items with a lower index will be dropped from the results.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1770](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L1770)

___

### studioIds

• `Optional` `Readonly` **studioIds**: `string`[]

Optional. If specified, results will be filtered based on studio id. This allows multiple, pipe delimited.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:2113](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L2113)

___

### studios

• `Optional` `Readonly` **studios**: `string`[]

Optional. If specified, results will be filtered based on studio. This allows multiple, pipe delimited.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1945](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L1945)

___

### tags

• `Optional` `Readonly` **tags**: `string`[]

Optional. If specified, results will be filtered based on tag. This allows multiple, pipe delimited.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1889](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L1889)

___

### userId

• `Optional` `Readonly` **userId**: `string`

The user id supplied as query parameter.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1546](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L1546)

___

### videoTypes

• `Optional` `Readonly` **videoTypes**: [`VideoType`](../enums/generated_client.VideoType.md)[]

Optional filter by VideoType (videofile, dvd, bluray, iso). Allows multiple, comma delimited.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:2008](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L2008)

___

### years

• `Optional` `Readonly` **years**: `number`[]

Optional. If specified, results will be filtered based on production year. This allows multiple, comma delimited.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1896](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/items-api.ts#L1896)
