[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / TrailersApiGetTrailersRequest

# Interface: TrailersApiGetTrailersRequest

[generated-client](../modules/generated_client.md).TrailersApiGetTrailersRequest

Request parameters for getTrailers operation in TrailersApi.

**`export`**

**`interface`** TrailersApiGetTrailersRequest

## Table of contents

### Properties

- [adjacentTo](generated_client.TrailersApiGetTrailersRequest.md#adjacentto)
- [albumArtistIds](generated_client.TrailersApiGetTrailersRequest.md#albumartistids)
- [albumIds](generated_client.TrailersApiGetTrailersRequest.md#albumids)
- [albums](generated_client.TrailersApiGetTrailersRequest.md#albums)
- [artistIds](generated_client.TrailersApiGetTrailersRequest.md#artistids)
- [artists](generated_client.TrailersApiGetTrailersRequest.md#artists)
- [collapseBoxSetItems](generated_client.TrailersApiGetTrailersRequest.md#collapseboxsetitems)
- [contributingArtistIds](generated_client.TrailersApiGetTrailersRequest.md#contributingartistids)
- [enableImageTypes](generated_client.TrailersApiGetTrailersRequest.md#enableimagetypes)
- [enableImages](generated_client.TrailersApiGetTrailersRequest.md#enableimages)
- [enableTotalRecordCount](generated_client.TrailersApiGetTrailersRequest.md#enabletotalrecordcount)
- [enableUserData](generated_client.TrailersApiGetTrailersRequest.md#enableuserdata)
- [excludeArtistIds](generated_client.TrailersApiGetTrailersRequest.md#excludeartistids)
- [excludeItemIds](generated_client.TrailersApiGetTrailersRequest.md#excludeitemids)
- [excludeItemTypes](generated_client.TrailersApiGetTrailersRequest.md#excludeitemtypes)
- [excludeLocationTypes](generated_client.TrailersApiGetTrailersRequest.md#excludelocationtypes)
- [fields](generated_client.TrailersApiGetTrailersRequest.md#fields)
- [filters](generated_client.TrailersApiGetTrailersRequest.md#filters)
- [genreIds](generated_client.TrailersApiGetTrailersRequest.md#genreids)
- [genres](generated_client.TrailersApiGetTrailersRequest.md#genres)
- [hasImdbId](generated_client.TrailersApiGetTrailersRequest.md#hasimdbid)
- [hasOfficialRating](generated_client.TrailersApiGetTrailersRequest.md#hasofficialrating)
- [hasOverview](generated_client.TrailersApiGetTrailersRequest.md#hasoverview)
- [hasParentalRating](generated_client.TrailersApiGetTrailersRequest.md#hasparentalrating)
- [hasSpecialFeature](generated_client.TrailersApiGetTrailersRequest.md#hasspecialfeature)
- [hasSubtitles](generated_client.TrailersApiGetTrailersRequest.md#hassubtitles)
- [hasThemeSong](generated_client.TrailersApiGetTrailersRequest.md#hasthemesong)
- [hasThemeVideo](generated_client.TrailersApiGetTrailersRequest.md#hasthemevideo)
- [hasTmdbId](generated_client.TrailersApiGetTrailersRequest.md#hastmdbid)
- [hasTrailer](generated_client.TrailersApiGetTrailersRequest.md#hastrailer)
- [hasTvdbId](generated_client.TrailersApiGetTrailersRequest.md#hastvdbid)
- [ids](generated_client.TrailersApiGetTrailersRequest.md#ids)
- [imageTypeLimit](generated_client.TrailersApiGetTrailersRequest.md#imagetypelimit)
- [imageTypes](generated_client.TrailersApiGetTrailersRequest.md#imagetypes)
- [is3D](generated_client.TrailersApiGetTrailersRequest.md#is3d)
- [is4K](generated_client.TrailersApiGetTrailersRequest.md#is4k)
- [isFavorite](generated_client.TrailersApiGetTrailersRequest.md#isfavorite)
- [isHd](generated_client.TrailersApiGetTrailersRequest.md#ishd)
- [isKids](generated_client.TrailersApiGetTrailersRequest.md#iskids)
- [isLocked](generated_client.TrailersApiGetTrailersRequest.md#islocked)
- [isMissing](generated_client.TrailersApiGetTrailersRequest.md#ismissing)
- [isMovie](generated_client.TrailersApiGetTrailersRequest.md#ismovie)
- [isNews](generated_client.TrailersApiGetTrailersRequest.md#isnews)
- [isPlaceHolder](generated_client.TrailersApiGetTrailersRequest.md#isplaceholder)
- [isPlayed](generated_client.TrailersApiGetTrailersRequest.md#isplayed)
- [isSeries](generated_client.TrailersApiGetTrailersRequest.md#isseries)
- [isSports](generated_client.TrailersApiGetTrailersRequest.md#issports)
- [isUnaired](generated_client.TrailersApiGetTrailersRequest.md#isunaired)
- [limit](generated_client.TrailersApiGetTrailersRequest.md#limit)
- [locationTypes](generated_client.TrailersApiGetTrailersRequest.md#locationtypes)
- [maxHeight](generated_client.TrailersApiGetTrailersRequest.md#maxheight)
- [maxOfficialRating](generated_client.TrailersApiGetTrailersRequest.md#maxofficialrating)
- [maxPremiereDate](generated_client.TrailersApiGetTrailersRequest.md#maxpremieredate)
- [maxWidth](generated_client.TrailersApiGetTrailersRequest.md#maxwidth)
- [mediaTypes](generated_client.TrailersApiGetTrailersRequest.md#mediatypes)
- [minCommunityRating](generated_client.TrailersApiGetTrailersRequest.md#mincommunityrating)
- [minCriticRating](generated_client.TrailersApiGetTrailersRequest.md#mincriticrating)
- [minDateLastSaved](generated_client.TrailersApiGetTrailersRequest.md#mindatelastsaved)
- [minDateLastSavedForUser](generated_client.TrailersApiGetTrailersRequest.md#mindatelastsavedforuser)
- [minHeight](generated_client.TrailersApiGetTrailersRequest.md#minheight)
- [minOfficialRating](generated_client.TrailersApiGetTrailersRequest.md#minofficialrating)
- [minPremiereDate](generated_client.TrailersApiGetTrailersRequest.md#minpremieredate)
- [minWidth](generated_client.TrailersApiGetTrailersRequest.md#minwidth)
- [nameLessThan](generated_client.TrailersApiGetTrailersRequest.md#namelessthan)
- [nameStartsWith](generated_client.TrailersApiGetTrailersRequest.md#namestartswith)
- [nameStartsWithOrGreater](generated_client.TrailersApiGetTrailersRequest.md#namestartswithorgreater)
- [officialRatings](generated_client.TrailersApiGetTrailersRequest.md#officialratings)
- [parentId](generated_client.TrailersApiGetTrailersRequest.md#parentid)
- [parentIndexNumber](generated_client.TrailersApiGetTrailersRequest.md#parentindexnumber)
- [person](generated_client.TrailersApiGetTrailersRequest.md#person)
- [personIds](generated_client.TrailersApiGetTrailersRequest.md#personids)
- [personTypes](generated_client.TrailersApiGetTrailersRequest.md#persontypes)
- [recursive](generated_client.TrailersApiGetTrailersRequest.md#recursive)
- [searchTerm](generated_client.TrailersApiGetTrailersRequest.md#searchterm)
- [seriesStatus](generated_client.TrailersApiGetTrailersRequest.md#seriesstatus)
- [sortBy](generated_client.TrailersApiGetTrailersRequest.md#sortby)
- [sortOrder](generated_client.TrailersApiGetTrailersRequest.md#sortorder)
- [startIndex](generated_client.TrailersApiGetTrailersRequest.md#startindex)
- [studioIds](generated_client.TrailersApiGetTrailersRequest.md#studioids)
- [studios](generated_client.TrailersApiGetTrailersRequest.md#studios)
- [tags](generated_client.TrailersApiGetTrailersRequest.md#tags)
- [userId](generated_client.TrailersApiGetTrailersRequest.md#userid)
- [videoTypes](generated_client.TrailersApiGetTrailersRequest.md#videotypes)
- [years](generated_client.TrailersApiGetTrailersRequest.md#years)

## Properties

### adjacentTo

• `Optional` `Readonly` **adjacentTo**: `string`

Optional. Return items that are siblings of a supplied item.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:778](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/trailers-api.ts#L778)

___

### albumArtistIds

• `Optional` `Readonly` **albumArtistIds**: `string`[]

Optional. If specified, results will be filtered to include only those containing the specified album artist id.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:1149](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/trailers-api.ts#L1149)

___

### albumIds

• `Optional` `Readonly` **albumIds**: `string`[]

Optional. If specified, results will be filtered based on album id. This allows multiple, pipe delimited.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:1170](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/trailers-api.ts#L1170)

___

### albums

• `Optional` `Readonly` **albums**: `string`[]

Optional. If specified, results will be filtered based on album. This allows multiple, pipe delimited.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:1163](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/trailers-api.ts#L1163)

___

### artistIds

• `Optional` `Readonly` **artistIds**: `string`[]

Optional. If specified, results will be filtered to include only those containing the specified artist id.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:1142](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/trailers-api.ts#L1142)

___

### artists

• `Optional` `Readonly` **artists**: `string`[]

Optional. If specified, results will be filtered based on artists. This allows multiple, pipe delimited.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:1128](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/trailers-api.ts#L1128)

___

### collapseBoxSetItems

• `Optional` `Readonly` **collapseBoxSetItems**: `boolean`

Whether or not to hide items behind their boxsets.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:1219](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/trailers-api.ts#L1219)

___

### contributingArtistIds

• `Optional` `Readonly` **contributingArtistIds**: `string`[]

Optional. If specified, results will be filtered to include only those containing the specified contributing artist id.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:1156](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/trailers-api.ts#L1156)

___

### enableImageTypes

• `Optional` `Readonly` **enableImageTypes**: [`ImageType`](../enums/generated_client.ImageType.md)[]

Optional. The image types to include in the output.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:1093](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/trailers-api.ts#L1093)

___

### enableImages

• `Optional` `Readonly` **enableImages**: `boolean`

Optional, include image information in output.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:1310](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/trailers-api.ts#L1310)

___

### enableTotalRecordCount

• `Optional` `Readonly` **enableTotalRecordCount**: `boolean`

Optional. Enable the total record count.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:1303](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/trailers-api.ts#L1303)

___

### enableUserData

• `Optional` `Readonly` **enableUserData**: `boolean`

Optional, include user data.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:1079](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/trailers-api.ts#L1079)

___

### excludeArtistIds

• `Optional` `Readonly` **excludeArtistIds**: `string`[]

Optional. If specified, results will be filtered based on artist id. This allows multiple, pipe delimited.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:1135](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/trailers-api.ts#L1135)

___

### excludeItemIds

• `Optional` `Readonly` **excludeItemIds**: `string`[]

Optional. If specified, results will be filtered by excluding item ids. This allows multiple, comma delimited.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:946](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/trailers-api.ts#L946)

___

### excludeItemTypes

• `Optional` `Readonly` **excludeItemTypes**: [`BaseItemKind`](../enums/generated_client.BaseItemKind.md)[]

Optional. If specified, results will be filtered based on item type. This allows multiple, comma delimited.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:1002](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/trailers-api.ts#L1002)

___

### excludeLocationTypes

• `Optional` `Readonly` **excludeLocationTypes**: [`LocationType`](../enums/generated_client.LocationType.md)[]

Optional. If specified, results will be filtered based on the LocationType. This allows multiple, comma delimited.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:820](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/trailers-api.ts#L820)

___

### fields

• `Optional` `Readonly` **fields**: [`ItemFields`](../enums/generated_client.ItemFields.md)[]

Optional. Specify additional fields of information to return in the output. This allows multiple, comma delimited. Options: Budget, Chapters, DateCreated, Genres, HomePageUrl, IndexOptions, MediaStreams, Overview, ParentId, Path, People, ProviderIds, PrimaryImageAspectRatio, Revenue, SortName, Studios, Taglines.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:995](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/trailers-api.ts#L995)

___

### filters

• `Optional` `Readonly` **filters**: [`ItemFilter`](../enums/generated_client.ItemFilter.md)[]

Optional. Specify additional filters to apply. This allows multiple, comma delimited. Options: IsFolder, IsNotFolder, IsUnplayed, IsPlayed, IsFavorite, IsResumable, Likes, Dislikes.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:1009](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/trailers-api.ts#L1009)

___

### genreIds

• `Optional` `Readonly` **genreIds**: `string`[]

Optional. If specified, results will be filtered based on genre id. This allows multiple, pipe delimited.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:1296](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/trailers-api.ts#L1296)

___

### genres

• `Optional` `Readonly` **genres**: `string`[]

Optional. If specified, results will be filtered based on genre. This allows multiple, pipe delimited.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:1051](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/trailers-api.ts#L1051)

___

### hasImdbId

• `Optional` `Readonly` **hasImdbId**: `boolean`

Optional filter by items that have an imdb id or not.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:890](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/trailers-api.ts#L890)

___

### hasOfficialRating

• `Optional` `Readonly` **hasOfficialRating**: `boolean`

Optional filter by items that have official ratings.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:1212](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/trailers-api.ts#L1212)

___

### hasOverview

• `Optional` `Readonly` **hasOverview**: `boolean`

Optional filter by items that have an overview or not.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:883](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/trailers-api.ts#L883)

___

### hasParentalRating

• `Optional` `Readonly` **hasParentalRating**: `boolean`

Optional filter by items that have or do not have a parental rating.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:792](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/trailers-api.ts#L792)

___

### hasSpecialFeature

• `Optional` `Readonly` **hasSpecialFeature**: `boolean`

Optional filter by items with special features.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:764](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/trailers-api.ts#L764)

___

### hasSubtitles

• `Optional` `Readonly` **hasSubtitles**: `boolean`

Optional filter by items with subtitles.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:757](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/trailers-api.ts#L757)

___

### hasThemeSong

• `Optional` `Readonly` **hasThemeSong**: `boolean`

Optional filter by items with theme songs.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:743](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/trailers-api.ts#L743)

___

### hasThemeVideo

• `Optional` `Readonly` **hasThemeVideo**: `boolean`

Optional filter by items with theme videos.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:750](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/trailers-api.ts#L750)

___

### hasTmdbId

• `Optional` `Readonly` **hasTmdbId**: `boolean`

Optional filter by items that have a tmdb id or not.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:897](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/trailers-api.ts#L897)

___

### hasTrailer

• `Optional` `Readonly` **hasTrailer**: `boolean`

Optional filter by items with trailers.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:771](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/trailers-api.ts#L771)

___

### hasTvdbId

• `Optional` `Readonly` **hasTvdbId**: `boolean`

Optional filter by items that have a tvdb id or not.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:904](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/trailers-api.ts#L904)

___

### ids

• `Optional` `Readonly` **ids**: `string`[]

Optional. If specific items are needed, specify a list of item id\&#39;s to retrieve. This allows multiple, comma delimited.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:1177](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/trailers-api.ts#L1177)

___

### imageTypeLimit

• `Optional` `Readonly` **imageTypeLimit**: `number`

Optional, the max number of images to return, per image type.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:1086](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/trailers-api.ts#L1086)

___

### imageTypes

• `Optional` `Readonly` **imageTypes**: [`ImageType`](../enums/generated_client.ImageType.md)[]

Optional. If specified, results will be filtered based on those containing image types. This allows multiple, comma delimited.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:1030](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/trailers-api.ts#L1030)

___

### is3D

• `Optional` `Readonly` **is3D**: `boolean`

Optional filter by items that are 3D, or not.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:1254](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/trailers-api.ts#L1254)

___

### is4K

• `Optional` `Readonly` **is4K**: `boolean`

Optional filter by items that are 4K or not.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:806](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/trailers-api.ts#L806)

___

### isFavorite

• `Optional` `Readonly` **isFavorite**: `boolean`

Optional filter by items that are marked as favorite, or not.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:1016](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/trailers-api.ts#L1016)

___

### isHd

• `Optional` `Readonly` **isHd**: `boolean`

Optional filter by items that are HD or not.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:799](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/trailers-api.ts#L799)

___

### isKids

• `Optional` `Readonly` **isKids**: `boolean`

Optional filter for live tv kids.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:932](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/trailers-api.ts#L932)

___

### isLocked

• `Optional` `Readonly` **isLocked**: `boolean`

Optional filter by items that are locked.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:1198](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/trailers-api.ts#L1198)

___

### isMissing

• `Optional` `Readonly` **isMissing**: `boolean`

Optional filter by items that are missing episodes or not.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:827](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/trailers-api.ts#L827)

___

### isMovie

• `Optional` `Readonly` **isMovie**: `boolean`

Optional filter for live tv movies.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:911](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/trailers-api.ts#L911)

___

### isNews

• `Optional` `Readonly` **isNews**: `boolean`

Optional filter for live tv news.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:925](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/trailers-api.ts#L925)

___

### isPlaceHolder

• `Optional` `Readonly` **isPlaceHolder**: `boolean`

Optional filter by items that are placeholders.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:1205](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/trailers-api.ts#L1205)

___

### isPlayed

• `Optional` `Readonly` **isPlayed**: `boolean`

Optional filter by items that are played, or not.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:1044](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/trailers-api.ts#L1044)

___

### isSeries

• `Optional` `Readonly` **isSeries**: `boolean`

Optional filter for live tv series.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:918](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/trailers-api.ts#L918)

___

### isSports

• `Optional` `Readonly` **isSports**: `boolean`

Optional filter for live tv sports.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:939](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/trailers-api.ts#L939)

___

### isUnaired

• `Optional` `Readonly` **isUnaired**: `boolean`

Optional filter by items that are unaired episodes or not.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:834](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/trailers-api.ts#L834)

___

### limit

• `Optional` `Readonly` **limit**: `number`

Optional. The maximum number of records to return.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:960](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/trailers-api.ts#L960)

___

### locationTypes

• `Optional` `Readonly` **locationTypes**: [`LocationType`](../enums/generated_client.LocationType.md)[]

Optional. If specified, results will be filtered based on LocationType. This allows multiple, comma delimited.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:813](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/trailers-api.ts#L813)

___

### maxHeight

• `Optional` `Readonly` **maxHeight**: `number`

Optional. Filter by the maximum height of the item.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:1247](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/trailers-api.ts#L1247)

___

### maxOfficialRating

• `Optional` `Readonly` **maxOfficialRating**: `string`

Optional filter by maximum official rating (PG, PG-13, TV-MA, etc).

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:736](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/trailers-api.ts#L736)

___

### maxPremiereDate

• `Optional` `Readonly` **maxPremiereDate**: `string`

Optional. The maximum premiere date. Format &#x3D; ISO.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:876](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/trailers-api.ts#L876)

___

### maxWidth

• `Optional` `Readonly` **maxWidth**: `number`

Optional. Filter by the maximum width of the item.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:1240](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/trailers-api.ts#L1240)

___

### mediaTypes

• `Optional` `Readonly` **mediaTypes**: `string`[]

Optional filter by MediaType. Allows multiple, comma delimited.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:1023](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/trailers-api.ts#L1023)

___

### minCommunityRating

• `Optional` `Readonly` **minCommunityRating**: `number`

Optional filter by minimum community rating.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:841](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/trailers-api.ts#L841)

___

### minCriticRating

• `Optional` `Readonly` **minCriticRating**: `number`

Optional filter by minimum critic rating.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:848](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/trailers-api.ts#L848)

___

### minDateLastSaved

• `Optional` `Readonly` **minDateLastSaved**: `string`

Optional. The minimum last saved date. Format &#x3D; ISO.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:862](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/trailers-api.ts#L862)

___

### minDateLastSavedForUser

• `Optional` `Readonly` **minDateLastSavedForUser**: `string`

Optional. The minimum last saved date for the current user. Format &#x3D; ISO.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:869](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/trailers-api.ts#L869)

___

### minHeight

• `Optional` `Readonly` **minHeight**: `number`

Optional. Filter by the minimum height of the item.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:1233](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/trailers-api.ts#L1233)

___

### minOfficialRating

• `Optional` `Readonly` **minOfficialRating**: `string`

Optional filter by minimum official rating (PG, PG-13, TV-MA, etc).

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:1191](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/trailers-api.ts#L1191)

___

### minPremiereDate

• `Optional` `Readonly` **minPremiereDate**: `string`

Optional. The minimum premiere date. Format &#x3D; ISO.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:855](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/trailers-api.ts#L855)

___

### minWidth

• `Optional` `Readonly` **minWidth**: `number`

Optional. Filter by the minimum width of the item.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:1226](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/trailers-api.ts#L1226)

___

### nameLessThan

• `Optional` `Readonly` **nameLessThan**: `string`

Optional filter by items whose name is equally or lesser than a given input string.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:1282](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/trailers-api.ts#L1282)

___

### nameStartsWith

• `Optional` `Readonly` **nameStartsWith**: `string`

Optional filter by items whose name is sorted equally than a given input string.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:1275](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/trailers-api.ts#L1275)

___

### nameStartsWithOrGreater

• `Optional` `Readonly` **nameStartsWithOrGreater**: `string`

Optional filter by items whose name is sorted equally or greater than a given input string.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:1268](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/trailers-api.ts#L1268)

___

### officialRatings

• `Optional` `Readonly` **officialRatings**: `string`[]

Optional. If specified, results will be filtered based on OfficialRating. This allows multiple, pipe delimited.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:1058](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/trailers-api.ts#L1058)

___

### parentId

• `Optional` `Readonly` **parentId**: `string`

Specify this to localize the search to a specific item or folder. Omit to use the root.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:988](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/trailers-api.ts#L988)

___

### parentIndexNumber

• `Optional` `Readonly` **parentIndexNumber**: `number`

Optional filter by parent index number.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:785](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/trailers-api.ts#L785)

___

### person

• `Optional` `Readonly` **person**: `string`

Optional. If specified, results will be filtered to include only those containing the specified person.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:1100](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/trailers-api.ts#L1100)

___

### personIds

• `Optional` `Readonly` **personIds**: `string`[]

Optional. If specified, results will be filtered to include only those containing the specified person id.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:1107](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/trailers-api.ts#L1107)

___

### personTypes

• `Optional` `Readonly` **personTypes**: `string`[]

Optional. If specified, along with Person, results will be filtered to include only those containing the specified person and PersonType. Allows multiple, comma-delimited.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:1114](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/trailers-api.ts#L1114)

___

### recursive

• `Optional` `Readonly` **recursive**: `boolean`

When searching within folders, this determines whether or not the search will be recursive. true/false.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:967](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/trailers-api.ts#L967)

___

### searchTerm

• `Optional` `Readonly` **searchTerm**: `string`

Optional. Filter based on a search term.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:974](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/trailers-api.ts#L974)

___

### seriesStatus

• `Optional` `Readonly` **seriesStatus**: [`SeriesStatus`](../enums/generated_client.SeriesStatus.md)[]

Optional filter by Series Status. Allows multiple, comma delimited.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:1261](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/trailers-api.ts#L1261)

___

### sortBy

• `Optional` `Readonly` **sortBy**: `string`[]

Optional. Specify one or more sort orders, comma delimited. Options: Album, AlbumArtist, Artist, Budget, CommunityRating, CriticRating, DateCreated, DatePlayed, PlayCount, PremiereDate, ProductionYear, SortName, Random, Revenue, Runtime.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:1037](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/trailers-api.ts#L1037)

___

### sortOrder

• `Optional` `Readonly` **sortOrder**: [`SortOrder`](../enums/generated_client.SortOrder.md)[]

Sort Order - Ascending,Descending.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:981](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/trailers-api.ts#L981)

___

### startIndex

• `Optional` `Readonly` **startIndex**: `number`

Optional. The record index to start at. All items with a lower index will be dropped from the results.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:953](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/trailers-api.ts#L953)

___

### studioIds

• `Optional` `Readonly` **studioIds**: `string`[]

Optional. If specified, results will be filtered based on studio id. This allows multiple, pipe delimited.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:1289](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/trailers-api.ts#L1289)

___

### studios

• `Optional` `Readonly` **studios**: `string`[]

Optional. If specified, results will be filtered based on studio. This allows multiple, pipe delimited.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:1121](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/trailers-api.ts#L1121)

___

### tags

• `Optional` `Readonly` **tags**: `string`[]

Optional. If specified, results will be filtered based on tag. This allows multiple, pipe delimited.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:1065](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/trailers-api.ts#L1065)

___

### userId

• `Optional` `Readonly` **userId**: `string`

The user id.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:729](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/trailers-api.ts#L729)

___

### videoTypes

• `Optional` `Readonly` **videoTypes**: [`VideoType`](../enums/generated_client.VideoType.md)[]

Optional filter by VideoType (videofile, dvd, bluray, iso). Allows multiple, comma delimited.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:1184](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/trailers-api.ts#L1184)

___

### years

• `Optional` `Readonly` **years**: `number`[]

Optional. If specified, results will be filtered based on production year. This allows multiple, comma delimited.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:1072](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/trailers-api.ts#L1072)
