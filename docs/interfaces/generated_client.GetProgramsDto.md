[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / GetProgramsDto

# Interface: GetProgramsDto

[generated-client](../modules/generated_client.md).GetProgramsDto

Get programs dto.

**`export`**

**`interface`** GetProgramsDto

## Table of contents

### Properties

- [ChannelIds](generated_client.GetProgramsDto.md#channelids)
- [EnableImageTypes](generated_client.GetProgramsDto.md#enableimagetypes)
- [EnableImages](generated_client.GetProgramsDto.md#enableimages)
- [EnableTotalRecordCount](generated_client.GetProgramsDto.md#enabletotalrecordcount)
- [EnableUserData](generated_client.GetProgramsDto.md#enableuserdata)
- [Fields](generated_client.GetProgramsDto.md#fields)
- [GenreIds](generated_client.GetProgramsDto.md#genreids)
- [Genres](generated_client.GetProgramsDto.md#genres)
- [HasAired](generated_client.GetProgramsDto.md#hasaired)
- [ImageTypeLimit](generated_client.GetProgramsDto.md#imagetypelimit)
- [IsAiring](generated_client.GetProgramsDto.md#isairing)
- [IsKids](generated_client.GetProgramsDto.md#iskids)
- [IsMovie](generated_client.GetProgramsDto.md#ismovie)
- [IsNews](generated_client.GetProgramsDto.md#isnews)
- [IsSeries](generated_client.GetProgramsDto.md#isseries)
- [IsSports](generated_client.GetProgramsDto.md#issports)
- [LibrarySeriesId](generated_client.GetProgramsDto.md#libraryseriesid)
- [Limit](generated_client.GetProgramsDto.md#limit)
- [MaxEndDate](generated_client.GetProgramsDto.md#maxenddate)
- [MaxStartDate](generated_client.GetProgramsDto.md#maxstartdate)
- [MinEndDate](generated_client.GetProgramsDto.md#minenddate)
- [MinStartDate](generated_client.GetProgramsDto.md#minstartdate)
- [SeriesTimerId](generated_client.GetProgramsDto.md#seriestimerid)
- [SortBy](generated_client.GetProgramsDto.md#sortby)
- [SortOrder](generated_client.GetProgramsDto.md#sortorder)
- [StartIndex](generated_client.GetProgramsDto.md#startindex)
- [UserId](generated_client.GetProgramsDto.md#userid)

## Properties

### ChannelIds

• `Optional` **ChannelIds**: ``null`` \| `string`[]

Gets or sets the channels to return guide information for.

**`memberof`** GetProgramsDto

#### Defined in

[generated-client/models/get-programs-dto.ts:31](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/models/get-programs-dto.ts#L31)

___

### EnableImageTypes

• `Optional` **EnableImageTypes**: ``null`` \| [`ImageType`](../enums/generated_client.ImageType.md)[]

Gets or sets the image types to include in the output.  Optional.

**`memberof`** GetProgramsDto

#### Defined in

[generated-client/models/get-programs-dto.ts:163](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/models/get-programs-dto.ts#L163)

___

### EnableImages

• `Optional` **EnableImages**: ``null`` \| `boolean`

Gets or sets include image information in output.  Optional.

**`memberof`** GetProgramsDto

#### Defined in

[generated-client/models/get-programs-dto.ts:145](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/models/get-programs-dto.ts#L145)

___

### EnableTotalRecordCount

• `Optional` **EnableTotalRecordCount**: `boolean`

Gets or sets a value indicating whether retrieve total record count.

**`memberof`** GetProgramsDto

#### Defined in

[generated-client/models/get-programs-dto.ts:151](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/models/get-programs-dto.ts#L151)

___

### EnableUserData

• `Optional` **EnableUserData**: ``null`` \| `boolean`

Gets or sets include user data.  Optional.

**`memberof`** GetProgramsDto

#### Defined in

[generated-client/models/get-programs-dto.ts:169](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/models/get-programs-dto.ts#L169)

___

### Fields

• `Optional` **Fields**: ``null`` \| [`ItemFields`](../enums/generated_client.ItemFields.md)[]

Gets or sets specify additional fields of information to return in the output. This allows multiple, comma delimited. Options: Budget, Chapters, DateCreated, Genres, HomePageUrl, IndexOptions, MediaStreams, Overview, ParentId, Path, People, ProviderIds, PrimaryImageAspectRatio, Revenue, SortName, Studios, Taglines.  Optional.

**`memberof`** GetProgramsDto

#### Defined in

[generated-client/models/get-programs-dto.ts:187](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/models/get-programs-dto.ts#L187)

___

### GenreIds

• `Optional` **GenreIds**: ``null`` \| `string`[]

Gets or sets the genre ids to return guide information for.

**`memberof`** GetProgramsDto

#### Defined in

[generated-client/models/get-programs-dto.ts:139](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/models/get-programs-dto.ts#L139)

___

### Genres

• `Optional` **Genres**: ``null`` \| `string`[]

Gets or sets the genres to return guide information for.

**`memberof`** GetProgramsDto

#### Defined in

[generated-client/models/get-programs-dto.ts:133](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/models/get-programs-dto.ts#L133)

___

### HasAired

• `Optional` **HasAired**: ``null`` \| `boolean`

Gets or sets filter by programs that have completed airing, or not.  Optional.

**`memberof`** GetProgramsDto

#### Defined in

[generated-client/models/get-programs-dto.ts:49](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/models/get-programs-dto.ts#L49)

___

### ImageTypeLimit

• `Optional` **ImageTypeLimit**: ``null`` \| `number`

Gets or sets the max number of images to return, per image type.  Optional.

**`memberof`** GetProgramsDto

#### Defined in

[generated-client/models/get-programs-dto.ts:157](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/models/get-programs-dto.ts#L157)

___

### IsAiring

• `Optional` **IsAiring**: ``null`` \| `boolean`

Gets or sets filter by programs that are currently airing, or not.  Optional.

**`memberof`** GetProgramsDto

#### Defined in

[generated-client/models/get-programs-dto.ts:55](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/models/get-programs-dto.ts#L55)

___

### IsKids

• `Optional` **IsKids**: ``null`` \| `boolean`

Gets or sets filter for kids.  Optional.

**`memberof`** GetProgramsDto

#### Defined in

[generated-client/models/get-programs-dto.ts:97](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/models/get-programs-dto.ts#L97)

___

### IsMovie

• `Optional` **IsMovie**: ``null`` \| `boolean`

Gets or sets filter for movies.  Optional.

**`memberof`** GetProgramsDto

#### Defined in

[generated-client/models/get-programs-dto.ts:79](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/models/get-programs-dto.ts#L79)

___

### IsNews

• `Optional` **IsNews**: ``null`` \| `boolean`

Gets or sets filter for news.  Optional.

**`memberof`** GetProgramsDto

#### Defined in

[generated-client/models/get-programs-dto.ts:91](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/models/get-programs-dto.ts#L91)

___

### IsSeries

• `Optional` **IsSeries**: ``null`` \| `boolean`

Gets or sets filter for series.  Optional.

**`memberof`** GetProgramsDto

#### Defined in

[generated-client/models/get-programs-dto.ts:85](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/models/get-programs-dto.ts#L85)

___

### IsSports

• `Optional` **IsSports**: ``null`` \| `boolean`

Gets or sets filter for sports.  Optional.

**`memberof`** GetProgramsDto

#### Defined in

[generated-client/models/get-programs-dto.ts:103](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/models/get-programs-dto.ts#L103)

___

### LibrarySeriesId

• `Optional` **LibrarySeriesId**: `string`

Gets or sets filter by library series id.  Optional.

**`memberof`** GetProgramsDto

#### Defined in

[generated-client/models/get-programs-dto.ts:181](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/models/get-programs-dto.ts#L181)

___

### Limit

• `Optional` **Limit**: ``null`` \| `number`

Gets or sets the maximum number of records to return.  Optional.

**`memberof`** GetProgramsDto

#### Defined in

[generated-client/models/get-programs-dto.ts:115](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/models/get-programs-dto.ts#L115)

___

### MaxEndDate

• `Optional` **MaxEndDate**: ``null`` \| `string`

Gets or sets the maximum premiere end date.  Optional.

**`memberof`** GetProgramsDto

#### Defined in

[generated-client/models/get-programs-dto.ts:73](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/models/get-programs-dto.ts#L73)

___

### MaxStartDate

• `Optional` **MaxStartDate**: ``null`` \| `string`

Gets or sets the maximum premiere start date.  Optional.

**`memberof`** GetProgramsDto

#### Defined in

[generated-client/models/get-programs-dto.ts:61](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/models/get-programs-dto.ts#L61)

___

### MinEndDate

• `Optional` **MinEndDate**: ``null`` \| `string`

Gets or sets the minimum premiere end date.  Optional.

**`memberof`** GetProgramsDto

#### Defined in

[generated-client/models/get-programs-dto.ts:67](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/models/get-programs-dto.ts#L67)

___

### MinStartDate

• `Optional` **MinStartDate**: ``null`` \| `string`

Gets or sets the minimum premiere start date.  Optional.

**`memberof`** GetProgramsDto

#### Defined in

[generated-client/models/get-programs-dto.ts:43](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/models/get-programs-dto.ts#L43)

___

### SeriesTimerId

• `Optional` **SeriesTimerId**: ``null`` \| `string`

Gets or sets filter by series timer id.  Optional.

**`memberof`** GetProgramsDto

#### Defined in

[generated-client/models/get-programs-dto.ts:175](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/models/get-programs-dto.ts#L175)

___

### SortBy

• `Optional` **SortBy**: ``null`` \| `string`[]

Gets or sets specify one or more sort orders, comma delimited. Options: Name, StartDate.  Optional.

**`memberof`** GetProgramsDto

#### Defined in

[generated-client/models/get-programs-dto.ts:121](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/models/get-programs-dto.ts#L121)

___

### SortOrder

• `Optional` **SortOrder**: ``null`` \| [`SortOrder`](../enums/generated_client.SortOrder.md)[]

Gets or sets sort Order - Ascending,Descending.

**`memberof`** GetProgramsDto

#### Defined in

[generated-client/models/get-programs-dto.ts:127](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/models/get-programs-dto.ts#L127)

___

### StartIndex

• `Optional` **StartIndex**: ``null`` \| `number`

Gets or sets the record index to start at. All items with a lower index will be dropped from the results.  Optional.

**`memberof`** GetProgramsDto

#### Defined in

[generated-client/models/get-programs-dto.ts:109](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/models/get-programs-dto.ts#L109)

___

### UserId

• `Optional` **UserId**: `string`

Gets or sets optional. Filter by user id.

**`memberof`** GetProgramsDto

#### Defined in

[generated-client/models/get-programs-dto.ts:37](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/models/get-programs-dto.ts#L37)
