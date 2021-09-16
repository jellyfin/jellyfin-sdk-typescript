[jellyfin-sdk-typescript](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / TrailersApiGetTrailersRequest

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
- [isLocked](generated_client.TrailersApiGetTrailersRequest.md#islocked)
- [isMissing](generated_client.TrailersApiGetTrailersRequest.md#ismissing)
- [isPlaceHolder](generated_client.TrailersApiGetTrailersRequest.md#isplaceholder)
- [isPlayed](generated_client.TrailersApiGetTrailersRequest.md#isplayed)
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

[generated-client/api/trailers-api.ts:741](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/generated-client/api/trailers-api.ts#L741)

___

### albumArtistIds

• `Optional` `Readonly` **albumArtistIds**: `string`[]

Optional. If specified, results will be filtered to include only those containing the specified album artist id.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:1077](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/generated-client/api/trailers-api.ts#L1077)

___

### albumIds

• `Optional` `Readonly` **albumIds**: `string`[]

Optional. If specified, results will be filtered based on album id. This allows multiple, pipe delimited.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:1098](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/generated-client/api/trailers-api.ts#L1098)

___

### albums

• `Optional` `Readonly` **albums**: `string`[]

Optional. If specified, results will be filtered based on album. This allows multiple, pipe delimited.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:1091](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/generated-client/api/trailers-api.ts#L1091)

___

### artistIds

• `Optional` `Readonly` **artistIds**: `string`[]

Optional. If specified, results will be filtered to include only those containing the specified artist id.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:1070](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/generated-client/api/trailers-api.ts#L1070)

___

### artists

• `Optional` `Readonly` **artists**: `string`[]

Optional. If specified, results will be filtered based on artists. This allows multiple, pipe delimited.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:1056](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/generated-client/api/trailers-api.ts#L1056)

___

### collapseBoxSetItems

• `Optional` `Readonly` **collapseBoxSetItems**: `boolean`

Whether or not to hide items behind their boxsets.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:1147](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/generated-client/api/trailers-api.ts#L1147)

___

### contributingArtistIds

• `Optional` `Readonly` **contributingArtistIds**: `string`[]

Optional. If specified, results will be filtered to include only those containing the specified contributing artist id.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:1084](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/generated-client/api/trailers-api.ts#L1084)

___

### enableImageTypes

• `Optional` `Readonly` **enableImageTypes**: [`ImageType`](../enums/generated_client.ImageType.md)[]

Optional. The image types to include in the output.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:1021](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/generated-client/api/trailers-api.ts#L1021)

___

### enableImages

• `Optional` `Readonly` **enableImages**: `boolean`

Optional, include image information in output.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:1238](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/generated-client/api/trailers-api.ts#L1238)

___

### enableTotalRecordCount

• `Optional` `Readonly` **enableTotalRecordCount**: `boolean`

Optional. Enable the total record count.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:1231](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/generated-client/api/trailers-api.ts#L1231)

___

### enableUserData

• `Optional` `Readonly` **enableUserData**: `boolean`

Optional, include user data.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:1007](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/generated-client/api/trailers-api.ts#L1007)

___

### excludeArtistIds

• `Optional` `Readonly` **excludeArtistIds**: `string`[]

Optional. If specified, results will be filtered based on artist id. This allows multiple, pipe delimited.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:1063](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/generated-client/api/trailers-api.ts#L1063)

___

### excludeItemIds

• `Optional` `Readonly` **excludeItemIds**: `string`[]

Optional. If specified, results will be filtered by excluding item ids. This allows multiple, comma delimited.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:874](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/generated-client/api/trailers-api.ts#L874)

___

### excludeItemTypes

• `Optional` `Readonly` **excludeItemTypes**: `string`[]

Optional. If specified, results will be filtered based on item type. This allows multiple, comma delimited.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:930](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/generated-client/api/trailers-api.ts#L930)

___

### excludeLocationTypes

• `Optional` `Readonly` **excludeLocationTypes**: [`LocationType`](../enums/generated_client.LocationType.md)[]

Optional. If specified, results will be filtered based on the LocationType. This allows multiple, comma delimited.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:783](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/generated-client/api/trailers-api.ts#L783)

___

### fields

• `Optional` `Readonly` **fields**: [`ItemFields`](../enums/generated_client.ItemFields.md)[]

Optional. Specify additional fields of information to return in the output. This allows multiple, comma delimited. Options: Budget, Chapters, DateCreated, Genres, HomePageUrl, IndexOptions, MediaStreams, Overview, ParentId, Path, People, ProviderIds, PrimaryImageAspectRatio, Revenue, SortName, Studios, Taglines.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:923](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/generated-client/api/trailers-api.ts#L923)

___

### filters

• `Optional` `Readonly` **filters**: [`ItemFilter`](../enums/generated_client.ItemFilter.md)[]

Optional. Specify additional filters to apply. This allows multiple, comma delimited. Options: IsFolder, IsNotFolder, IsUnplayed, IsPlayed, IsFavorite, IsResumable, Likes, Dislikes.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:937](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/generated-client/api/trailers-api.ts#L937)

___

### genreIds

• `Optional` `Readonly` **genreIds**: `string`[]

Optional. If specified, results will be filtered based on genre id. This allows multiple, pipe delimited.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:1224](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/generated-client/api/trailers-api.ts#L1224)

___

### genres

• `Optional` `Readonly` **genres**: `string`[]

Optional. If specified, results will be filtered based on genre. This allows multiple, pipe delimited.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:979](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/generated-client/api/trailers-api.ts#L979)

___

### hasImdbId

• `Optional` `Readonly` **hasImdbId**: `boolean`

Optional filter by items that have an imdb id or not.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:853](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/generated-client/api/trailers-api.ts#L853)

___

### hasOfficialRating

• `Optional` `Readonly` **hasOfficialRating**: `boolean`

Optional filter by items that have official ratings.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:1140](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/generated-client/api/trailers-api.ts#L1140)

___

### hasOverview

• `Optional` `Readonly` **hasOverview**: `boolean`

Optional filter by items that have an overview or not.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:846](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/generated-client/api/trailers-api.ts#L846)

___

### hasParentalRating

• `Optional` `Readonly` **hasParentalRating**: `boolean`

Optional filter by items that have or do not have a parental rating.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:755](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/generated-client/api/trailers-api.ts#L755)

___

### hasSpecialFeature

• `Optional` `Readonly` **hasSpecialFeature**: `boolean`

Optional filter by items with special features.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:727](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/generated-client/api/trailers-api.ts#L727)

___

### hasSubtitles

• `Optional` `Readonly` **hasSubtitles**: `boolean`

Optional filter by items with subtitles.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:720](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/generated-client/api/trailers-api.ts#L720)

___

### hasThemeSong

• `Optional` `Readonly` **hasThemeSong**: `boolean`

Optional filter by items with theme songs.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:706](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/generated-client/api/trailers-api.ts#L706)

___

### hasThemeVideo

• `Optional` `Readonly` **hasThemeVideo**: `boolean`

Optional filter by items with theme videos.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:713](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/generated-client/api/trailers-api.ts#L713)

___

### hasTmdbId

• `Optional` `Readonly` **hasTmdbId**: `boolean`

Optional filter by items that have a tmdb id or not.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:860](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/generated-client/api/trailers-api.ts#L860)

___

### hasTrailer

• `Optional` `Readonly` **hasTrailer**: `boolean`

Optional filter by items with trailers.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:734](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/generated-client/api/trailers-api.ts#L734)

___

### hasTvdbId

• `Optional` `Readonly` **hasTvdbId**: `boolean`

Optional filter by items that have a tvdb id or not.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:867](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/generated-client/api/trailers-api.ts#L867)

___

### ids

• `Optional` `Readonly` **ids**: `string`[]

Optional. If specific items are needed, specify a list of item id\&#39;s to retrieve. This allows multiple, comma delimited.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:1105](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/generated-client/api/trailers-api.ts#L1105)

___

### imageTypeLimit

• `Optional` `Readonly` **imageTypeLimit**: `number`

Optional, the max number of images to return, per image type.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:1014](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/generated-client/api/trailers-api.ts#L1014)

___

### imageTypes

• `Optional` `Readonly` **imageTypes**: [`ImageType`](../enums/generated_client.ImageType.md)[]

Optional. If specified, results will be filtered based on those containing image types. This allows multiple, comma delimited.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:958](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/generated-client/api/trailers-api.ts#L958)

___

### is3D

• `Optional` `Readonly` **is3D**: `boolean`

Optional filter by items that are 3D, or not.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:1182](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/generated-client/api/trailers-api.ts#L1182)

___

### is4K

• `Optional` `Readonly` **is4K**: `boolean`

Optional filter by items that are 4K or not.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:769](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/generated-client/api/trailers-api.ts#L769)

___

### isFavorite

• `Optional` `Readonly` **isFavorite**: `boolean`

Optional filter by items that are marked as favorite, or not.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:944](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/generated-client/api/trailers-api.ts#L944)

___

### isHd

• `Optional` `Readonly` **isHd**: `boolean`

Optional filter by items that are HD or not.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:762](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/generated-client/api/trailers-api.ts#L762)

___

### isLocked

• `Optional` `Readonly` **isLocked**: `boolean`

Optional filter by items that are locked.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:1126](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/generated-client/api/trailers-api.ts#L1126)

___

### isMissing

• `Optional` `Readonly` **isMissing**: `boolean`

Optional filter by items that are missing episodes or not.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:790](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/generated-client/api/trailers-api.ts#L790)

___

### isPlaceHolder

• `Optional` `Readonly` **isPlaceHolder**: `boolean`

Optional filter by items that are placeholders.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:1133](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/generated-client/api/trailers-api.ts#L1133)

___

### isPlayed

• `Optional` `Readonly` **isPlayed**: `boolean`

Optional filter by items that are played, or not.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:972](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/generated-client/api/trailers-api.ts#L972)

___

### isUnaired

• `Optional` `Readonly` **isUnaired**: `boolean`

Optional filter by items that are unaired episodes or not.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:797](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/generated-client/api/trailers-api.ts#L797)

___

### limit

• `Optional` `Readonly` **limit**: `number`

Optional. The maximum number of records to return.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:888](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/generated-client/api/trailers-api.ts#L888)

___

### locationTypes

• `Optional` `Readonly` **locationTypes**: [`LocationType`](../enums/generated_client.LocationType.md)[]

Optional. If specified, results will be filtered based on LocationType. This allows multiple, comma delimited.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:776](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/generated-client/api/trailers-api.ts#L776)

___

### maxHeight

• `Optional` `Readonly` **maxHeight**: `number`

Optional. Filter by the maximum height of the item.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:1175](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/generated-client/api/trailers-api.ts#L1175)

___

### maxOfficialRating

• `Optional` `Readonly` **maxOfficialRating**: `string`

Optional filter by maximum official rating (PG, PG-13, TV-MA, etc).

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:699](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/generated-client/api/trailers-api.ts#L699)

___

### maxPremiereDate

• `Optional` `Readonly` **maxPremiereDate**: `string`

Optional. The maximum premiere date. Format &#x3D; ISO.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:839](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/generated-client/api/trailers-api.ts#L839)

___

### maxWidth

• `Optional` `Readonly` **maxWidth**: `number`

Optional. Filter by the maximum width of the item.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:1168](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/generated-client/api/trailers-api.ts#L1168)

___

### mediaTypes

• `Optional` `Readonly` **mediaTypes**: `string`[]

Optional filter by MediaType. Allows multiple, comma delimited.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:951](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/generated-client/api/trailers-api.ts#L951)

___

### minCommunityRating

• `Optional` `Readonly` **minCommunityRating**: `number`

Optional filter by minimum community rating.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:804](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/generated-client/api/trailers-api.ts#L804)

___

### minCriticRating

• `Optional` `Readonly` **minCriticRating**: `number`

Optional filter by minimum critic rating.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:811](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/generated-client/api/trailers-api.ts#L811)

___

### minDateLastSaved

• `Optional` `Readonly` **minDateLastSaved**: `string`

Optional. The minimum last saved date. Format &#x3D; ISO.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:825](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/generated-client/api/trailers-api.ts#L825)

___

### minDateLastSavedForUser

• `Optional` `Readonly` **minDateLastSavedForUser**: `string`

Optional. The minimum last saved date for the current user. Format &#x3D; ISO.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:832](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/generated-client/api/trailers-api.ts#L832)

___

### minHeight

• `Optional` `Readonly` **minHeight**: `number`

Optional. Filter by the minimum height of the item.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:1161](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/generated-client/api/trailers-api.ts#L1161)

___

### minOfficialRating

• `Optional` `Readonly` **minOfficialRating**: `string`

Optional filter by minimum official rating (PG, PG-13, TV-MA, etc).

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:1119](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/generated-client/api/trailers-api.ts#L1119)

___

### minPremiereDate

• `Optional` `Readonly` **minPremiereDate**: `string`

Optional. The minimum premiere date. Format &#x3D; ISO.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:818](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/generated-client/api/trailers-api.ts#L818)

___

### minWidth

• `Optional` `Readonly` **minWidth**: `number`

Optional. Filter by the minimum width of the item.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:1154](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/generated-client/api/trailers-api.ts#L1154)

___

### nameLessThan

• `Optional` `Readonly` **nameLessThan**: `string`

Optional filter by items whose name is equally or lesser than a given input string.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:1210](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/generated-client/api/trailers-api.ts#L1210)

___

### nameStartsWith

• `Optional` `Readonly` **nameStartsWith**: `string`

Optional filter by items whose name is sorted equally than a given input string.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:1203](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/generated-client/api/trailers-api.ts#L1203)

___

### nameStartsWithOrGreater

• `Optional` `Readonly` **nameStartsWithOrGreater**: `string`

Optional filter by items whose name is sorted equally or greater than a given input string.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:1196](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/generated-client/api/trailers-api.ts#L1196)

___

### officialRatings

• `Optional` `Readonly` **officialRatings**: `string`[]

Optional. If specified, results will be filtered based on OfficialRating. This allows multiple, pipe delimited.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:986](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/generated-client/api/trailers-api.ts#L986)

___

### parentId

• `Optional` `Readonly` **parentId**: `string`

Specify this to localize the search to a specific item or folder. Omit to use the root.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:916](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/generated-client/api/trailers-api.ts#L916)

___

### parentIndexNumber

• `Optional` `Readonly` **parentIndexNumber**: `number`

Optional filter by parent index number.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:748](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/generated-client/api/trailers-api.ts#L748)

___

### person

• `Optional` `Readonly` **person**: `string`

Optional. If specified, results will be filtered to include only those containing the specified person.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:1028](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/generated-client/api/trailers-api.ts#L1028)

___

### personIds

• `Optional` `Readonly` **personIds**: `string`[]

Optional. If specified, results will be filtered to include only those containing the specified person id.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:1035](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/generated-client/api/trailers-api.ts#L1035)

___

### personTypes

• `Optional` `Readonly` **personTypes**: `string`[]

Optional. If specified, along with Person, results will be filtered to include only those containing the specified person and PersonType. Allows multiple, comma-delimited.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:1042](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/generated-client/api/trailers-api.ts#L1042)

___

### recursive

• `Optional` `Readonly` **recursive**: `boolean`

When searching within folders, this determines whether or not the search will be recursive. true/false.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:895](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/generated-client/api/trailers-api.ts#L895)

___

### searchTerm

• `Optional` `Readonly` **searchTerm**: `string`

Optional. Filter based on a search term.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:902](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/generated-client/api/trailers-api.ts#L902)

___

### seriesStatus

• `Optional` `Readonly` **seriesStatus**: [`SeriesStatus`](../enums/generated_client.SeriesStatus.md)[]

Optional filter by Series Status. Allows multiple, comma delimited.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:1189](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/generated-client/api/trailers-api.ts#L1189)

___

### sortBy

• `Optional` `Readonly` **sortBy**: `string`[]

Optional. Specify one or more sort orders, comma delimited. Options: Album, AlbumArtist, Artist, Budget, CommunityRating, CriticRating, DateCreated, DatePlayed, PlayCount, PremiereDate, ProductionYear, SortName, Random, Revenue, Runtime.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:965](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/generated-client/api/trailers-api.ts#L965)

___

### sortOrder

• `Optional` `Readonly` **sortOrder**: [`SortOrder`](../enums/generated_client.SortOrder.md)[]

Sort Order - Ascending,Descending.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:909](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/generated-client/api/trailers-api.ts#L909)

___

### startIndex

• `Optional` `Readonly` **startIndex**: `number`

Optional. The record index to start at. All items with a lower index will be dropped from the results.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:881](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/generated-client/api/trailers-api.ts#L881)

___

### studioIds

• `Optional` `Readonly` **studioIds**: `string`[]

Optional. If specified, results will be filtered based on studio id. This allows multiple, pipe delimited.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:1217](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/generated-client/api/trailers-api.ts#L1217)

___

### studios

• `Optional` `Readonly` **studios**: `string`[]

Optional. If specified, results will be filtered based on studio. This allows multiple, pipe delimited.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:1049](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/generated-client/api/trailers-api.ts#L1049)

___

### tags

• `Optional` `Readonly` **tags**: `string`[]

Optional. If specified, results will be filtered based on tag. This allows multiple, pipe delimited.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:993](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/generated-client/api/trailers-api.ts#L993)

___

### userId

• `Optional` `Readonly` **userId**: `string`

The user id.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:692](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/generated-client/api/trailers-api.ts#L692)

___

### videoTypes

• `Optional` `Readonly` **videoTypes**: [`VideoType`](../enums/generated_client.VideoType.md)[]

Optional filter by VideoType (videofile, dvd, bluray, iso). Allows multiple, comma delimited.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:1112](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/generated-client/api/trailers-api.ts#L1112)

___

### years

• `Optional` `Readonly` **years**: `number`[]

Optional. If specified, results will be filtered based on production year. This allows multiple, comma delimited.

**`memberof`** TrailersApiGetTrailers

#### Defined in

[generated-client/api/trailers-api.ts:1000](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/generated-client/api/trailers-api.ts#L1000)
