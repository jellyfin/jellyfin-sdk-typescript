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
- [isLocked](generated_client.ItemsApiGetItemsRequest.md#islocked)
- [isMissing](generated_client.ItemsApiGetItemsRequest.md#ismissing)
- [isPlaceHolder](generated_client.ItemsApiGetItemsRequest.md#isplaceholder)
- [isPlayed](generated_client.ItemsApiGetItemsRequest.md#isplayed)
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

[generated-client/api/items-api.ts:1516](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/items-api.ts#L1516)

___

### albumArtistIds

• `Optional` `Readonly` **albumArtistIds**: `string`[]

Optional. If specified, results will be filtered to include only those containing the specified album artist id.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1859](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/items-api.ts#L1859)

___

### albumIds

• `Optional` `Readonly` **albumIds**: `string`[]

Optional. If specified, results will be filtered based on album id. This allows multiple, pipe delimited.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1880](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/items-api.ts#L1880)

___

### albums

• `Optional` `Readonly` **albums**: `string`[]

Optional. If specified, results will be filtered based on album. This allows multiple, pipe delimited.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1873](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/items-api.ts#L1873)

___

### artistIds

• `Optional` `Readonly` **artistIds**: `string`[]

Optional. If specified, results will be filtered to include only those containing the specified artist id.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1852](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/items-api.ts#L1852)

___

### artists

• `Optional` `Readonly` **artists**: `string`[]

Optional. If specified, results will be filtered based on artists. This allows multiple, pipe delimited.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1838](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/items-api.ts#L1838)

___

### collapseBoxSetItems

• `Optional` `Readonly` **collapseBoxSetItems**: `boolean`

Whether or not to hide items behind their boxsets.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1929](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/items-api.ts#L1929)

___

### contributingArtistIds

• `Optional` `Readonly` **contributingArtistIds**: `string`[]

Optional. If specified, results will be filtered to include only those containing the specified contributing artist id.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1866](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/items-api.ts#L1866)

___

### enableImageTypes

• `Optional` `Readonly` **enableImageTypes**: [`ImageType`](../enums/generated_client.ImageType.md)[]

Optional. The image types to include in the output.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1803](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/items-api.ts#L1803)

___

### enableImages

• `Optional` `Readonly` **enableImages**: `boolean`

Optional, include image information in output.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:2020](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/items-api.ts#L2020)

___

### enableTotalRecordCount

• `Optional` `Readonly` **enableTotalRecordCount**: `boolean`

Optional. Enable the total record count.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:2013](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/items-api.ts#L2013)

___

### enableUserData

• `Optional` `Readonly` **enableUserData**: `boolean`

Optional, include user data.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1789](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/items-api.ts#L1789)

___

### excludeArtistIds

• `Optional` `Readonly` **excludeArtistIds**: `string`[]

Optional. If specified, results will be filtered based on artist id. This allows multiple, pipe delimited.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1845](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/items-api.ts#L1845)

___

### excludeItemIds

• `Optional` `Readonly` **excludeItemIds**: `string`[]

Optional. If specified, results will be filtered by excluding item ids. This allows multiple, comma delimited.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1649](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/items-api.ts#L1649)

___

### excludeItemTypes

• `Optional` `Readonly` **excludeItemTypes**: `string`[]

Optional. If specified, results will be filtered based on item type. This allows multiple, comma delimited.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1705](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/items-api.ts#L1705)

___

### excludeLocationTypes

• `Optional` `Readonly` **excludeLocationTypes**: [`LocationType`](../enums/generated_client.LocationType.md)[]

Optional. If specified, results will be filtered based on the LocationType. This allows multiple, comma delimited.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1558](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/items-api.ts#L1558)

___

### fields

• `Optional` `Readonly` **fields**: [`ItemFields`](../enums/generated_client.ItemFields.md)[]

Optional. Specify additional fields of information to return in the output. This allows multiple, comma delimited. Options: Budget, Chapters, DateCreated, Genres, HomePageUrl, IndexOptions, MediaStreams, Overview, ParentId, Path, People, ProviderIds, PrimaryImageAspectRatio, Revenue, SortName, Studios, Taglines.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1698](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/items-api.ts#L1698)

___

### filters

• `Optional` `Readonly` **filters**: [`ItemFilter`](../enums/generated_client.ItemFilter.md)[]

Optional. Specify additional filters to apply. This allows multiple, comma delimited. Options: IsFolder, IsNotFolder, IsUnplayed, IsPlayed, IsFavorite, IsResumable, Likes, Dislikes.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1719](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/items-api.ts#L1719)

___

### genreIds

• `Optional` `Readonly` **genreIds**: `string`[]

Optional. If specified, results will be filtered based on genre id. This allows multiple, pipe delimited.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:2006](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/items-api.ts#L2006)

___

### genres

• `Optional` `Readonly` **genres**: `string`[]

Optional. If specified, results will be filtered based on genre. This allows multiple, pipe delimited.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1761](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/items-api.ts#L1761)

___

### hasImdbId

• `Optional` `Readonly` **hasImdbId**: `boolean`

Optional filter by items that have an imdb id or not.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1628](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/items-api.ts#L1628)

___

### hasOfficialRating

• `Optional` `Readonly` **hasOfficialRating**: `boolean`

Optional filter by items that have official ratings.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1922](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/items-api.ts#L1922)

___

### hasOverview

• `Optional` `Readonly` **hasOverview**: `boolean`

Optional filter by items that have an overview or not.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1621](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/items-api.ts#L1621)

___

### hasParentalRating

• `Optional` `Readonly` **hasParentalRating**: `boolean`

Optional filter by items that have or do not have a parental rating.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1530](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/items-api.ts#L1530)

___

### hasSpecialFeature

• `Optional` `Readonly` **hasSpecialFeature**: `boolean`

Optional filter by items with special features.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1502](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/items-api.ts#L1502)

___

### hasSubtitles

• `Optional` `Readonly` **hasSubtitles**: `boolean`

Optional filter by items with subtitles.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1495](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/items-api.ts#L1495)

___

### hasThemeSong

• `Optional` `Readonly` **hasThemeSong**: `boolean`

Optional filter by items with theme songs.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1481](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/items-api.ts#L1481)

___

### hasThemeVideo

• `Optional` `Readonly` **hasThemeVideo**: `boolean`

Optional filter by items with theme videos.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1488](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/items-api.ts#L1488)

___

### hasTmdbId

• `Optional` `Readonly` **hasTmdbId**: `boolean`

Optional filter by items that have a tmdb id or not.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1635](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/items-api.ts#L1635)

___

### hasTrailer

• `Optional` `Readonly` **hasTrailer**: `boolean`

Optional filter by items with trailers.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1509](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/items-api.ts#L1509)

___

### hasTvdbId

• `Optional` `Readonly` **hasTvdbId**: `boolean`

Optional filter by items that have a tvdb id or not.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1642](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/items-api.ts#L1642)

___

### ids

• `Optional` `Readonly` **ids**: `string`[]

Optional. If specific items are needed, specify a list of item id\&#39;s to retrieve. This allows multiple, comma delimited.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1887](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/items-api.ts#L1887)

___

### imageTypeLimit

• `Optional` `Readonly` **imageTypeLimit**: `number`

Optional, the max number of images to return, per image type.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1796](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/items-api.ts#L1796)

___

### imageTypes

• `Optional` `Readonly` **imageTypes**: [`ImageType`](../enums/generated_client.ImageType.md)[]

Optional. If specified, results will be filtered based on those containing image types. This allows multiple, comma delimited.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1740](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/items-api.ts#L1740)

___

### includeItemTypes

• `Optional` `Readonly` **includeItemTypes**: `string`[]

Optional. If specified, results will be filtered based on the item type. This allows multiple, comma delimited.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1712](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/items-api.ts#L1712)

___

### is3D

• `Optional` `Readonly` **is3D**: `boolean`

Optional filter by items that are 3D, or not.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1964](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/items-api.ts#L1964)

___

### is4K

• `Optional` `Readonly` **is4K**: `boolean`

Optional filter by items that are 4K or not.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1544](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/items-api.ts#L1544)

___

### isFavorite

• `Optional` `Readonly` **isFavorite**: `boolean`

Optional filter by items that are marked as favorite, or not.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1726](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/items-api.ts#L1726)

___

### isHd

• `Optional` `Readonly` **isHd**: `boolean`

Optional filter by items that are HD or not.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1537](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/items-api.ts#L1537)

___

### isLocked

• `Optional` `Readonly` **isLocked**: `boolean`

Optional filter by items that are locked.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1908](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/items-api.ts#L1908)

___

### isMissing

• `Optional` `Readonly` **isMissing**: `boolean`

Optional filter by items that are missing episodes or not.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1565](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/items-api.ts#L1565)

___

### isPlaceHolder

• `Optional` `Readonly` **isPlaceHolder**: `boolean`

Optional filter by items that are placeholders.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1915](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/items-api.ts#L1915)

___

### isPlayed

• `Optional` `Readonly` **isPlayed**: `boolean`

Optional filter by items that are played, or not.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1754](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/items-api.ts#L1754)

___

### isUnaired

• `Optional` `Readonly` **isUnaired**: `boolean`

Optional filter by items that are unaired episodes or not.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1572](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/items-api.ts#L1572)

___

### limit

• `Optional` `Readonly` **limit**: `number`

Optional. The maximum number of records to return.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1663](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/items-api.ts#L1663)

___

### locationTypes

• `Optional` `Readonly` **locationTypes**: [`LocationType`](../enums/generated_client.LocationType.md)[]

Optional. If specified, results will be filtered based on LocationType. This allows multiple, comma delimited.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1551](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/items-api.ts#L1551)

___

### maxHeight

• `Optional` `Readonly` **maxHeight**: `number`

Optional. Filter by the maximum height of the item.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1957](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/items-api.ts#L1957)

___

### maxOfficialRating

• `Optional` `Readonly` **maxOfficialRating**: `string`

Optional filter by maximum official rating (PG, PG-13, TV-MA, etc).

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1474](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/items-api.ts#L1474)

___

### maxPremiereDate

• `Optional` `Readonly` **maxPremiereDate**: `string`

Optional. The maximum premiere date. Format &#x3D; ISO.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1614](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/items-api.ts#L1614)

___

### maxWidth

• `Optional` `Readonly` **maxWidth**: `number`

Optional. Filter by the maximum width of the item.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1950](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/items-api.ts#L1950)

___

### mediaTypes

• `Optional` `Readonly` **mediaTypes**: `string`[]

Optional filter by MediaType. Allows multiple, comma delimited.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1733](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/items-api.ts#L1733)

___

### minCommunityRating

• `Optional` `Readonly` **minCommunityRating**: `number`

Optional filter by minimum community rating.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1579](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/items-api.ts#L1579)

___

### minCriticRating

• `Optional` `Readonly` **minCriticRating**: `number`

Optional filter by minimum critic rating.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1586](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/items-api.ts#L1586)

___

### minDateLastSaved

• `Optional` `Readonly` **minDateLastSaved**: `string`

Optional. The minimum last saved date. Format &#x3D; ISO.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1600](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/items-api.ts#L1600)

___

### minDateLastSavedForUser

• `Optional` `Readonly` **minDateLastSavedForUser**: `string`

Optional. The minimum last saved date for the current user. Format &#x3D; ISO.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1607](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/items-api.ts#L1607)

___

### minHeight

• `Optional` `Readonly` **minHeight**: `number`

Optional. Filter by the minimum height of the item.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1943](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/items-api.ts#L1943)

___

### minOfficialRating

• `Optional` `Readonly` **minOfficialRating**: `string`

Optional filter by minimum official rating (PG, PG-13, TV-MA, etc).

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1901](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/items-api.ts#L1901)

___

### minPremiereDate

• `Optional` `Readonly` **minPremiereDate**: `string`

Optional. The minimum premiere date. Format &#x3D; ISO.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1593](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/items-api.ts#L1593)

___

### minWidth

• `Optional` `Readonly` **minWidth**: `number`

Optional. Filter by the minimum width of the item.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1936](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/items-api.ts#L1936)

___

### nameLessThan

• `Optional` `Readonly` **nameLessThan**: `string`

Optional filter by items whose name is equally or lesser than a given input string.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1992](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/items-api.ts#L1992)

___

### nameStartsWith

• `Optional` `Readonly` **nameStartsWith**: `string`

Optional filter by items whose name is sorted equally than a given input string.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1985](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/items-api.ts#L1985)

___

### nameStartsWithOrGreater

• `Optional` `Readonly` **nameStartsWithOrGreater**: `string`

Optional filter by items whose name is sorted equally or greater than a given input string.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1978](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/items-api.ts#L1978)

___

### officialRatings

• `Optional` `Readonly` **officialRatings**: `string`[]

Optional. If specified, results will be filtered based on OfficialRating. This allows multiple, pipe delimited.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1768](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/items-api.ts#L1768)

___

### parentId

• `Optional` `Readonly` **parentId**: `string`

Specify this to localize the search to a specific item or folder. Omit to use the root.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1691](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/items-api.ts#L1691)

___

### parentIndexNumber

• `Optional` `Readonly` **parentIndexNumber**: `number`

Optional filter by parent index number.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1523](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/items-api.ts#L1523)

___

### person

• `Optional` `Readonly` **person**: `string`

Optional. If specified, results will be filtered to include only those containing the specified person.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1810](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/items-api.ts#L1810)

___

### personIds

• `Optional` `Readonly` **personIds**: `string`[]

Optional. If specified, results will be filtered to include only those containing the specified person id.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1817](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/items-api.ts#L1817)

___

### personTypes

• `Optional` `Readonly` **personTypes**: `string`[]

Optional. If specified, along with Person, results will be filtered to include only those containing the specified person and PersonType. Allows multiple, comma-delimited.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1824](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/items-api.ts#L1824)

___

### recursive

• `Optional` `Readonly` **recursive**: `boolean`

When searching within folders, this determines whether or not the search will be recursive. true/false.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1670](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/items-api.ts#L1670)

___

### searchTerm

• `Optional` `Readonly` **searchTerm**: `string`

Optional. Filter based on a search term.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1677](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/items-api.ts#L1677)

___

### seriesStatus

• `Optional` `Readonly` **seriesStatus**: [`SeriesStatus`](../enums/generated_client.SeriesStatus.md)[]

Optional filter by Series Status. Allows multiple, comma delimited.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1971](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/items-api.ts#L1971)

___

### sortBy

• `Optional` `Readonly` **sortBy**: `string`[]

Optional. Specify one or more sort orders, comma delimited. Options: Album, AlbumArtist, Artist, Budget, CommunityRating, CriticRating, DateCreated, DatePlayed, PlayCount, PremiereDate, ProductionYear, SortName, Random, Revenue, Runtime.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1747](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/items-api.ts#L1747)

___

### sortOrder

• `Optional` `Readonly` **sortOrder**: [`SortOrder`](../enums/generated_client.SortOrder.md)[]

Sort Order - Ascending,Descending.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1684](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/items-api.ts#L1684)

___

### startIndex

• `Optional` `Readonly` **startIndex**: `number`

Optional. The record index to start at. All items with a lower index will be dropped from the results.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1656](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/items-api.ts#L1656)

___

### studioIds

• `Optional` `Readonly` **studioIds**: `string`[]

Optional. If specified, results will be filtered based on studio id. This allows multiple, pipe delimited.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1999](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/items-api.ts#L1999)

___

### studios

• `Optional` `Readonly` **studios**: `string`[]

Optional. If specified, results will be filtered based on studio. This allows multiple, pipe delimited.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1831](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/items-api.ts#L1831)

___

### tags

• `Optional` `Readonly` **tags**: `string`[]

Optional. If specified, results will be filtered based on tag. This allows multiple, pipe delimited.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1775](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/items-api.ts#L1775)

___

### userId

• `Optional` `Readonly` **userId**: `string`

The user id supplied as query parameter.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1467](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/items-api.ts#L1467)

___

### videoTypes

• `Optional` `Readonly` **videoTypes**: [`VideoType`](../enums/generated_client.VideoType.md)[]

Optional filter by VideoType (videofile, dvd, bluray, iso). Allows multiple, comma delimited.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1894](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/items-api.ts#L1894)

___

### years

• `Optional` `Readonly` **years**: `number`[]

Optional. If specified, results will be filtered based on production year. This allows multiple, comma delimited.

**`memberof`** ItemsApiGetItems

#### Defined in

[generated-client/api/items-api.ts:1782](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c68c853/src/generated-client/api/items-api.ts#L1782)
