[jellyfin-sdk-typescript](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / BaseItemDto

# Interface: BaseItemDto

[generated-client](../modules/generated_client.md).BaseItemDto

This is strictly used as a data transfer object from the api layer.  This holds information about a BaseItem in a format that is convenient for the client.

**`export`**

**`interface`** BaseItemDto

## Table of contents

### Properties

- [AirDays](generated_client.BaseItemDto.md#airdays)
- [AirTime](generated_client.BaseItemDto.md#airtime)
- [AirsAfterSeasonNumber](generated_client.BaseItemDto.md#airsafterseasonnumber)
- [AirsBeforeEpisodeNumber](generated_client.BaseItemDto.md#airsbeforeepisodenumber)
- [AirsBeforeSeasonNumber](generated_client.BaseItemDto.md#airsbeforeseasonnumber)
- [Album](generated_client.BaseItemDto.md#album)
- [AlbumArtist](generated_client.BaseItemDto.md#albumartist)
- [AlbumArtists](generated_client.BaseItemDto.md#albumartists)
- [AlbumCount](generated_client.BaseItemDto.md#albumcount)
- [AlbumId](generated_client.BaseItemDto.md#albumid)
- [AlbumPrimaryImageTag](generated_client.BaseItemDto.md#albumprimaryimagetag)
- [Altitude](generated_client.BaseItemDto.md#altitude)
- [Aperture](generated_client.BaseItemDto.md#aperture)
- [ArtistCount](generated_client.BaseItemDto.md#artistcount)
- [ArtistItems](generated_client.BaseItemDto.md#artistitems)
- [Artists](generated_client.BaseItemDto.md#artists)
- [AspectRatio](generated_client.BaseItemDto.md#aspectratio)
- [Audio](generated_client.BaseItemDto.md#audio)
- [BackdropImageTags](generated_client.BaseItemDto.md#backdropimagetags)
- [CameraMake](generated_client.BaseItemDto.md#cameramake)
- [CameraModel](generated_client.BaseItemDto.md#cameramodel)
- [CanDelete](generated_client.BaseItemDto.md#candelete)
- [CanDownload](generated_client.BaseItemDto.md#candownload)
- [ChannelId](generated_client.BaseItemDto.md#channelid)
- [ChannelName](generated_client.BaseItemDto.md#channelname)
- [ChannelNumber](generated_client.BaseItemDto.md#channelnumber)
- [ChannelPrimaryImageTag](generated_client.BaseItemDto.md#channelprimaryimagetag)
- [ChannelType](generated_client.BaseItemDto.md#channeltype)
- [Chapters](generated_client.BaseItemDto.md#chapters)
- [ChildCount](generated_client.BaseItemDto.md#childcount)
- [CollectionType](generated_client.BaseItemDto.md#collectiontype)
- [CommunityRating](generated_client.BaseItemDto.md#communityrating)
- [CompletionPercentage](generated_client.BaseItemDto.md#completionpercentage)
- [Container](generated_client.BaseItemDto.md#container)
- [CriticRating](generated_client.BaseItemDto.md#criticrating)
- [CumulativeRunTimeTicks](generated_client.BaseItemDto.md#cumulativeruntimeticks)
- [CurrentProgram](generated_client.BaseItemDto.md#currentprogram)
- [CustomRating](generated_client.BaseItemDto.md#customrating)
- [DateCreated](generated_client.BaseItemDto.md#datecreated)
- [DateLastMediaAdded](generated_client.BaseItemDto.md#datelastmediaadded)
- [DisplayOrder](generated_client.BaseItemDto.md#displayorder)
- [DisplayPreferencesId](generated_client.BaseItemDto.md#displaypreferencesid)
- [EnableMediaSourceDisplay](generated_client.BaseItemDto.md#enablemediasourcedisplay)
- [EndDate](generated_client.BaseItemDto.md#enddate)
- [EpisodeCount](generated_client.BaseItemDto.md#episodecount)
- [EpisodeTitle](generated_client.BaseItemDto.md#episodetitle)
- [Etag](generated_client.BaseItemDto.md#etag)
- [ExposureTime](generated_client.BaseItemDto.md#exposuretime)
- [ExternalUrls](generated_client.BaseItemDto.md#externalurls)
- [ExtraType](generated_client.BaseItemDto.md#extratype)
- [FocalLength](generated_client.BaseItemDto.md#focallength)
- [ForcedSortName](generated_client.BaseItemDto.md#forcedsortname)
- [GenreItems](generated_client.BaseItemDto.md#genreitems)
- [Genres](generated_client.BaseItemDto.md#genres)
- [HasSubtitles](generated_client.BaseItemDto.md#hassubtitles)
- [Height](generated_client.BaseItemDto.md#height)
- [Id](generated_client.BaseItemDto.md#id)
- [ImageBlurHashes](generated_client.BaseItemDto.md#imageblurhashes)
- [ImageOrientation](generated_client.BaseItemDto.md#imageorientation)
- [ImageTags](generated_client.BaseItemDto.md#imagetags)
- [IndexNumber](generated_client.BaseItemDto.md#indexnumber)
- [IndexNumberEnd](generated_client.BaseItemDto.md#indexnumberend)
- [IsFolder](generated_client.BaseItemDto.md#isfolder)
- [IsHD](generated_client.BaseItemDto.md#ishd)
- [IsKids](generated_client.BaseItemDto.md#iskids)
- [IsLive](generated_client.BaseItemDto.md#islive)
- [IsMovie](generated_client.BaseItemDto.md#ismovie)
- [IsNews](generated_client.BaseItemDto.md#isnews)
- [IsPlaceHolder](generated_client.BaseItemDto.md#isplaceholder)
- [IsPremiere](generated_client.BaseItemDto.md#ispremiere)
- [IsRepeat](generated_client.BaseItemDto.md#isrepeat)
- [IsSeries](generated_client.BaseItemDto.md#isseries)
- [IsSports](generated_client.BaseItemDto.md#issports)
- [IsoSpeedRating](generated_client.BaseItemDto.md#isospeedrating)
- [IsoType](generated_client.BaseItemDto.md#isotype)
- [Latitude](generated_client.BaseItemDto.md#latitude)
- [LocalTrailerCount](generated_client.BaseItemDto.md#localtrailercount)
- [LocationType](generated_client.BaseItemDto.md#locationtype)
- [LockData](generated_client.BaseItemDto.md#lockdata)
- [LockedFields](generated_client.BaseItemDto.md#lockedfields)
- [Longitude](generated_client.BaseItemDto.md#longitude)
- [MediaSourceCount](generated_client.BaseItemDto.md#mediasourcecount)
- [MediaSources](generated_client.BaseItemDto.md#mediasources)
- [MediaStreams](generated_client.BaseItemDto.md#mediastreams)
- [MediaType](generated_client.BaseItemDto.md#mediatype)
- [MovieCount](generated_client.BaseItemDto.md#moviecount)
- [MusicVideoCount](generated_client.BaseItemDto.md#musicvideocount)
- [Name](generated_client.BaseItemDto.md#name)
- [Number](generated_client.BaseItemDto.md#number)
- [OfficialRating](generated_client.BaseItemDto.md#officialrating)
- [OriginalTitle](generated_client.BaseItemDto.md#originaltitle)
- [Overview](generated_client.BaseItemDto.md#overview)
- [ParentArtImageTag](generated_client.BaseItemDto.md#parentartimagetag)
- [ParentArtItemId](generated_client.BaseItemDto.md#parentartitemid)
- [ParentBackdropImageTags](generated_client.BaseItemDto.md#parentbackdropimagetags)
- [ParentBackdropItemId](generated_client.BaseItemDto.md#parentbackdropitemid)
- [ParentId](generated_client.BaseItemDto.md#parentid)
- [ParentIndexNumber](generated_client.BaseItemDto.md#parentindexnumber)
- [ParentLogoImageTag](generated_client.BaseItemDto.md#parentlogoimagetag)
- [ParentLogoItemId](generated_client.BaseItemDto.md#parentlogoitemid)
- [ParentPrimaryImageItemId](generated_client.BaseItemDto.md#parentprimaryimageitemid)
- [ParentPrimaryImageTag](generated_client.BaseItemDto.md#parentprimaryimagetag)
- [ParentThumbImageTag](generated_client.BaseItemDto.md#parentthumbimagetag)
- [ParentThumbItemId](generated_client.BaseItemDto.md#parentthumbitemid)
- [PartCount](generated_client.BaseItemDto.md#partcount)
- [Path](generated_client.BaseItemDto.md#path)
- [People](generated_client.BaseItemDto.md#people)
- [PlayAccess](generated_client.BaseItemDto.md#playaccess)
- [PlaylistItemId](generated_client.BaseItemDto.md#playlistitemid)
- [PreferredMetadataCountryCode](generated_client.BaseItemDto.md#preferredmetadatacountrycode)
- [PreferredMetadataLanguage](generated_client.BaseItemDto.md#preferredmetadatalanguage)
- [PremiereDate](generated_client.BaseItemDto.md#premieredate)
- [PrimaryImageAspectRatio](generated_client.BaseItemDto.md#primaryimageaspectratio)
- [ProductionLocations](generated_client.BaseItemDto.md#productionlocations)
- [ProductionYear](generated_client.BaseItemDto.md#productionyear)
- [ProgramCount](generated_client.BaseItemDto.md#programcount)
- [ProgramId](generated_client.BaseItemDto.md#programid)
- [ProviderIds](generated_client.BaseItemDto.md#providerids)
- [RecursiveItemCount](generated_client.BaseItemDto.md#recursiveitemcount)
- [RemoteTrailers](generated_client.BaseItemDto.md#remotetrailers)
- [RunTimeTicks](generated_client.BaseItemDto.md#runtimeticks)
- [ScreenshotImageTags](generated_client.BaseItemDto.md#screenshotimagetags)
- [SeasonId](generated_client.BaseItemDto.md#seasonid)
- [SeasonName](generated_client.BaseItemDto.md#seasonname)
- [SeriesCount](generated_client.BaseItemDto.md#seriescount)
- [SeriesId](generated_client.BaseItemDto.md#seriesid)
- [SeriesName](generated_client.BaseItemDto.md#seriesname)
- [SeriesPrimaryImageTag](generated_client.BaseItemDto.md#seriesprimaryimagetag)
- [SeriesStudio](generated_client.BaseItemDto.md#seriesstudio)
- [SeriesThumbImageTag](generated_client.BaseItemDto.md#seriesthumbimagetag)
- [SeriesTimerId](generated_client.BaseItemDto.md#seriestimerid)
- [ServerId](generated_client.BaseItemDto.md#serverid)
- [ShutterSpeed](generated_client.BaseItemDto.md#shutterspeed)
- [Software](generated_client.BaseItemDto.md#software)
- [SongCount](generated_client.BaseItemDto.md#songcount)
- [SortName](generated_client.BaseItemDto.md#sortname)
- [SourceType](generated_client.BaseItemDto.md#sourcetype)
- [SpecialFeatureCount](generated_client.BaseItemDto.md#specialfeaturecount)
- [StartDate](generated_client.BaseItemDto.md#startdate)
- [Status](generated_client.BaseItemDto.md#status)
- [Studios](generated_client.BaseItemDto.md#studios)
- [SupportsSync](generated_client.BaseItemDto.md#supportssync)
- [Taglines](generated_client.BaseItemDto.md#taglines)
- [Tags](generated_client.BaseItemDto.md#tags)
- [TimerId](generated_client.BaseItemDto.md#timerid)
- [TrailerCount](generated_client.BaseItemDto.md#trailercount)
- [Type](generated_client.BaseItemDto.md#type)
- [UserData](generated_client.BaseItemDto.md#userdata)
- [Video3DFormat](generated_client.BaseItemDto.md#video3dformat)
- [VideoType](generated_client.BaseItemDto.md#videotype)
- [Width](generated_client.BaseItemDto.md#width)

## Properties

### AirDays

• `Optional` **AirDays**: ``null`` \| [`DayOfWeek`](../enums/generated_client.DayOfWeek.md)[]

Gets or sets the air days.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:479](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L479)

___

### AirTime

• `Optional` **AirTime**: ``null`` \| `string`

Gets or sets the air time.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:473](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L473)

___

### AirsAfterSeasonNumber

• `Optional` **AirsAfterSeasonNumber**: ``null`` \| `number`

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:113](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L113)

___

### AirsBeforeEpisodeNumber

• `Optional` **AirsBeforeEpisodeNumber**: ``null`` \| `number`

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:119](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L119)

___

### AirsBeforeSeasonNumber

• `Optional` **AirsBeforeSeasonNumber**: ``null`` \| `number`

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:107](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L107)

___

### Album

• `Optional` **Album**: ``null`` \| `string`

Gets or sets the album.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:509](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L509)

___

### AlbumArtist

• `Optional` **AlbumArtist**: ``null`` \| `string`

Gets or sets the album artist.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:545](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L545)

___

### AlbumArtists

• `Optional` **AlbumArtists**: ``null`` \| [`NameGuidPair`](generated_client.NameGuidPair.md)[]

Gets or sets the album artists.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:551](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L551)

___

### AlbumCount

• `Optional` **AlbumCount**: ``null`` \| `number`

Gets or sets the album count.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:737](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L737)

___

### AlbumId

• `Optional` **AlbumId**: ``null`` \| `string`

Gets or sets the album id.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:527](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L527)

___

### AlbumPrimaryImageTag

• `Optional` **AlbumPrimaryImageTag**: ``null`` \| `string`

Gets or sets the album image tag.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:533](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L533)

___

### Altitude

• `Optional` **Altitude**: ``null`` \| `number`

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:833](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L833)

___

### Aperture

• `Optional` **Aperture**: ``null`` \| `number`

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:809](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L809)

___

### ArtistCount

• `Optional` **ArtistCount**: ``null`` \| `number`

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:743](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L743)

___

### ArtistItems

• `Optional` **ArtistItems**: ``null`` \| [`NameGuidPair`](generated_client.NameGuidPair.md)[]

Gets or sets the artist items.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:503](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L503)

___

### Artists

• `Optional` **Artists**: ``null`` \| `string`[]

Gets or sets the artists.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:497](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L497)

___

### AspectRatio

• `Optional` **AspectRatio**: ``null`` \| `string`

Gets or sets the aspect ratio.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:293](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L293)

___

### Audio

• `Optional` **Audio**: [`ProgramAudio`](../enums/generated_client.ProgramAudio.md)

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:893](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L893)

___

### BackdropImageTags

• `Optional` **BackdropImageTags**: ``null`` \| `string`[]

Gets or sets the backdrop image tags.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:593](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L593)

___

### CameraMake

• `Optional` **CameraMake**: ``null`` \| `string`

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:773](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L773)

___

### CameraModel

• `Optional` **CameraModel**: ``null`` \| `string`

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:779](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L779)

___

### CanDelete

• `Optional` **CanDelete**: ``null`` \| `boolean`

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:125](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L125)

___

### CanDownload

• `Optional` **CanDownload**: ``null`` \| `boolean`

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:131](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L131)

___

### ChannelId

• `Optional` **ChannelId**: ``null`` \| `string`

Gets or sets the channel identifier.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:239](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L239)

___

### ChannelName

• `Optional` **ChannelName**: ``null`` \| `string`

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:245](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L245)

___

### ChannelNumber

• `Optional` **ChannelNumber**: ``null`` \| `string`

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:317](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L317)

___

### ChannelPrimaryImageTag

• `Optional` **ChannelPrimaryImageTag**: ``null`` \| `string`

Gets or sets the channel primary image tag.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:857](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L857)

___

### ChannelType

• `Optional` **ChannelType**: [`ChannelType`](../enums/generated_client.ChannelType.md)

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:887](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L887)

___

### Chapters

• `Optional` **Chapters**: ``null`` \| [`ChapterInfo`](generated_client.ChapterInfo.md)[]

Gets or sets the chapters.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:665](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L665)

___

### ChildCount

• `Optional` **ChildCount**: ``null`` \| `number`

Gets or sets the child count.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:431](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L431)

___

### CollectionType

• `Optional` **CollectionType**: ``null`` \| `string`

Gets or sets the type of the collection.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:515](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L515)

___

### CommunityRating

• `Optional` **CommunityRating**: ``null`` \| `number`

Gets or sets the community rating.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:269](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L269)

___

### CompletionPercentage

• `Optional` **CompletionPercentage**: ``null`` \| `number`

Gets or sets the completion percentage.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:869](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L869)

___

### Container

• `Optional` **Container**: ``null`` \| `string`

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:161](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L161)

___

### CriticRating

• `Optional` **CriticRating**: ``null`` \| `number`

Gets or sets the critic rating.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:203](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L203)

___

### CumulativeRunTimeTicks

• `Optional` **CumulativeRunTimeTicks**: ``null`` \| `number`

Gets or sets the cumulative run time ticks.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:275](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L275)

___

### CurrentProgram

• `Optional` **CurrentProgram**: [`BaseItemDto`](generated_client.BaseItemDto.md)

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:947](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L947)

___

### CustomRating

• `Optional` **CustomRating**: ``null`` \| `string`

Gets or sets the custom rating.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:233](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L233)

___

### DateCreated

• `Optional` **DateCreated**: ``null`` \| `string`

Gets or sets the date created.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:89](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L89)

___

### DateLastMediaAdded

• `Optional` **DateLastMediaAdded**: ``null`` \| `string`

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:95](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L95)

___

### DisplayOrder

• `Optional` **DisplayOrder**: ``null`` \| `string`

Gets or sets the display order.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:521](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L521)

___

### DisplayPreferencesId

• `Optional` **DisplayPreferencesId**: ``null`` \| `string`

Gets or sets the display preferences id.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:461](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L461)

___

### EnableMediaSourceDisplay

• `Optional` **EnableMediaSourceDisplay**: ``null`` \| `boolean`

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:221](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L221)

___

### EndDate

• `Optional` **EndDate**: ``null`` \| `string`

Gets or sets the end date.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:689](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L689)

___

### EpisodeCount

• `Optional` **EpisodeCount**: ``null`` \| `number`

Gets or sets the episode count.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:725](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L725)

___

### EpisodeTitle

• `Optional` **EpisodeTitle**: ``null`` \| `string`

Gets or sets the episode title.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:881](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L881)

___

### Etag

• `Optional` **Etag**: ``null`` \| `string`

Gets or sets the etag.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:71](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L71)

___

### ExposureTime

• `Optional` **ExposureTime**: ``null`` \| `number`

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:791](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L791)

___

### ExternalUrls

• `Optional` **ExternalUrls**: ``null`` \| [`ExternalUrl`](generated_client.ExternalUrl.md)[]

Gets or sets the external urls.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:191](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L191)

___

### ExtraType

• `Optional` **ExtraType**: ``null`` \| `string`

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:101](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L101)

___

### FocalLength

• `Optional` **FocalLength**: ``null`` \| `number`

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:797](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L797)

___

### ForcedSortName

• `Optional` **ForcedSortName**: ``null`` \| `string`

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:173](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L173)

___

### GenreItems

• `Optional` **GenreItems**: ``null`` \| [`NameGuidPair`](generated_client.NameGuidPair.md)[]

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:389](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L389)

___

### Genres

• `Optional` **Genres**: ``null`` \| `string`[]

Gets or sets the genres.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:263](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L263)

___

### HasSubtitles

• `Optional` **HasSubtitles**: ``null`` \| `boolean`

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:137](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L137)

___

### Height

• `Optional` **Height**: ``null`` \| `number`

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:767](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L767)

___

### Id

• `Optional` **Id**: `string`

Gets or sets the id.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:65](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L65)

___

### ImageBlurHashes

• `Optional` **ImageBlurHashes**: ``null`` \| [`BaseItemDtoImageBlurHashes`](generated_client.BaseItemDtoImageBlurHashes.md)

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:629](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L629)

___

### ImageOrientation

• `Optional` **ImageOrientation**: [`ImageOrientation`](../enums/generated_client.ImageOrientation.md)

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:803](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L803)

___

### ImageTags

• `Optional` **ImageTags**: ``null`` \| { [key: string]: `string`;  }

Gets or sets the image tags.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:587](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L587)

___

### IndexNumber

• `Optional` **IndexNumber**: ``null`` \| `number`

Gets or sets the index number.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:323](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L323)

___

### IndexNumberEnd

• `Optional` **IndexNumberEnd**: ``null`` \| `number`

Gets or sets the index number end.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:329](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L329)

___

### IsFolder

• `Optional` **IsFolder**: ``null`` \| `boolean`

Gets or sets a value indicating whether this instance is folder.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:359](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L359)

___

### IsHD

• `Optional` **IsHD**: ``null`` \| `boolean`

Gets or sets a value indicating whether this instance is HD.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:353](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L353)

___

### IsKids

• `Optional` **IsKids**: ``null`` \| `boolean`

Gets or sets a value indicating whether this instance is kids.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:929](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L929)

___

### IsLive

• `Optional` **IsLive**: ``null`` \| `boolean`

Gets or sets a value indicating whether this instance is live.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:917](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L917)

___

### IsMovie

• `Optional` **IsMovie**: ``null`` \| `boolean`

Gets or sets a value indicating whether this instance is movie.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:899](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L899)

___

### IsNews

• `Optional` **IsNews**: ``null`` \| `boolean`

Gets or sets a value indicating whether this instance is news.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:923](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L923)

___

### IsPlaceHolder

• `Optional` **IsPlaceHolder**: ``null`` \| `boolean`

Gets or sets a value indicating whether this instance is place holder.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:305](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L305)

___

### IsPremiere

• `Optional` **IsPremiere**: ``null`` \| `boolean`

Gets or sets a value indicating whether this instance is premiere.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:935](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L935)

___

### IsRepeat

• `Optional` **IsRepeat**: ``null`` \| `boolean`

Gets or sets a value indicating whether this instance is repeat.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:875](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L875)

___

### IsSeries

• `Optional` **IsSeries**: ``null`` \| `boolean`

Gets or sets a value indicating whether this instance is series.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:911](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L911)

___

### IsSports

• `Optional` **IsSports**: ``null`` \| `boolean`

Gets or sets a value indicating whether this instance is sports.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:905](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L905)

___

### IsoSpeedRating

• `Optional` **IsoSpeedRating**: ``null`` \| `number`

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:839](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L839)

___

### IsoType

• `Optional` **IsoType**: [`IsoType`](../enums/generated_client.IsoType.md)

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:677](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L677)

___

### Latitude

• `Optional` **Latitude**: ``null`` \| `number`

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:821](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L821)

___

### LocalTrailerCount

• `Optional` **LocalTrailerCount**: ``null`` \| `number`

Gets or sets the local trailer count.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:413](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L413)

___

### LocationType

• `Optional` **LocationType**: [`LocationType`](../enums/generated_client.LocationType.md)

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:671](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L671)

___

### LockData

• `Optional` **LockData**: ``null`` \| `boolean`

Gets or sets a value indicating whether [enable internet providers].

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:755](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L755)

___

### LockedFields

• `Optional` **LockedFields**: ``null`` \| [`MetadataField`](../enums/generated_client.MetadataField.md)[]

Gets or sets the locked fields.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:695](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L695)

___

### Longitude

• `Optional` **Longitude**: ``null`` \| `number`

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:827](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L827)

___

### MediaSourceCount

• `Optional` **MediaSourceCount**: ``null`` \| `number`

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:581](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L581)

___

### MediaSources

• `Optional` **MediaSources**: ``null`` \| [`MediaSourceInfo`](generated_client.MediaSourceInfo.md)[]

Gets or sets the media versions.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:197](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L197)

___

### MediaStreams

• `Optional` **MediaStreams**: ``null`` \| [`MediaStream`](generated_client.MediaStream.md)[]

Gets or sets the media streams.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:563](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L563)

___

### MediaType

• `Optional` **MediaType**: ``null`` \| `string`

Gets or sets the type of the media.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:683](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L683)

___

### MovieCount

• `Optional` **MovieCount**: ``null`` \| `number`

Gets or sets the movie count.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:707](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L707)

___

### MusicVideoCount

• `Optional` **MusicVideoCount**: ``null`` \| `number`

Gets or sets the music video count.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:749](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L749)

___

### Name

• `Optional` **Name**: ``null`` \| `string`

Gets or sets the name.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:47](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L47)

___

### Number

• `Optional` **Number**: ``null`` \| `string`

Gets or sets the number.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:311](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L311)

___

### OfficialRating

• `Optional` **OfficialRating**: ``null`` \| `string`

Gets or sets the official rating.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:227](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L227)

___

### OriginalTitle

• `Optional` **OriginalTitle**: ``null`` \| `string`

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:53](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L53)

___

### Overview

• `Optional` **Overview**: ``null`` \| `string`

Gets or sets the overview.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:251](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L251)

___

### ParentArtImageTag

• `Optional` **ParentArtImageTag**: ``null`` \| `string`

Gets or sets the parent art image tag.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:617](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L617)

___

### ParentArtItemId

• `Optional` **ParentArtItemId**: ``null`` \| `string`

If the item does not have a art, this will hold the Id of the Parent that has one.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:611](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L611)

___

### ParentBackdropImageTags

• `Optional` **ParentBackdropImageTags**: ``null`` \| `string`[]

Gets or sets the parent backdrop image tags.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:407](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L407)

___

### ParentBackdropItemId

• `Optional` **ParentBackdropItemId**: ``null`` \| `string`

If the item does not have any backdrops, this will hold the Id of the Parent that has one.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:401](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L401)

___

### ParentId

• `Optional` **ParentId**: ``null`` \| `string`

Gets or sets the parent id.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:365](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L365)

___

### ParentIndexNumber

• `Optional` **ParentIndexNumber**: ``null`` \| `number`

Gets or sets the parent index number.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:335](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L335)

___

### ParentLogoImageTag

• `Optional` **ParentLogoImageTag**: ``null`` \| `string`

Gets or sets the parent logo image tag.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:605](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L605)

___

### ParentLogoItemId

• `Optional` **ParentLogoItemId**: ``null`` \| `string`

If the item does not have a logo, this will hold the Id of the Parent that has one.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:395](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L395)

___

### ParentPrimaryImageItemId

• `Optional` **ParentPrimaryImageItemId**: ``null`` \| `string`

Gets or sets the parent primary image item identifier.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:653](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L653)

___

### ParentPrimaryImageTag

• `Optional` **ParentPrimaryImageTag**: ``null`` \| `string`

Gets or sets the parent primary image tag.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:659](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L659)

___

### ParentThumbImageTag

• `Optional` **ParentThumbImageTag**: ``null`` \| `string`

Gets or sets the parent thumb image tag.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:647](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L647)

___

### ParentThumbItemId

• `Optional` **ParentThumbItemId**: ``null`` \| `string`

Gets or sets the parent thumb item id.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:641](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L641)

___

### PartCount

• `Optional` **PartCount**: ``null`` \| `number`

Gets or sets the part count.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:575](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L575)

___

### Path

• `Optional` **Path**: ``null`` \| `string`

Gets or sets the path.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:215](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L215)

___

### People

• `Optional` **People**: ``null`` \| [`BaseItemPerson`](generated_client.BaseItemPerson.md)[]

Gets or sets the people.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:377](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L377)

___

### PlayAccess

• `Optional` **PlayAccess**: [`PlayAccess`](../enums/generated_client.PlayAccess.md)

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:287](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L287)

___

### PlaylistItemId

• `Optional` **PlaylistItemId**: ``null`` \| `string`

Gets or sets the playlist item identifier.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:83](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L83)

___

### PreferredMetadataCountryCode

• `Optional` **PreferredMetadataCountryCode**: ``null`` \| `string`

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:149](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L149)

___

### PreferredMetadataLanguage

• `Optional` **PreferredMetadataLanguage**: ``null`` \| `string`

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:143](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L143)

___

### PremiereDate

• `Optional` **PremiereDate**: ``null`` \| `string`

Gets or sets the premiere date.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:185](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L185)

___

### PrimaryImageAspectRatio

• `Optional` **PrimaryImageAspectRatio**: ``null`` \| `number`

Gets or sets the primary image aspect ratio, after image enhancements.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:491](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L491)

___

### ProductionLocations

• `Optional` **ProductionLocations**: ``null`` \| `string`[]

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:209](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L209)

___

### ProductionYear

• `Optional` **ProductionYear**: ``null`` \| `number`

Gets or sets the production year.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:299](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L299)

___

### ProgramCount

• `Optional` **ProgramCount**: ``null`` \| `number`

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:719](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L719)

___

### ProgramId

• `Optional` **ProgramId**: ``null`` \| `string`

Gets or sets the program identifier.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:851](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L851)

___

### ProviderIds

• `Optional` **ProviderIds**: ``null`` \| { [key: string]: `string`;  }

Gets or sets the provider ids.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:347](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L347)

___

### RecursiveItemCount

• `Optional` **RecursiveItemCount**: ``null`` \| `number`

Gets or sets the recursive item count.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:425](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L425)

___

### RemoteTrailers

• `Optional` **RemoteTrailers**: ``null`` \| [`MediaUrl`](generated_client.MediaUrl.md)[]

Gets or sets the trailer urls.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:341](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L341)

___

### RunTimeTicks

• `Optional` **RunTimeTicks**: ``null`` \| `number`

Gets or sets the run time ticks.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:281](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L281)

___

### ScreenshotImageTags

• `Optional` **ScreenshotImageTags**: ``null`` \| `string`[]

Gets or sets the screenshot image tags.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:599](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L599)

___

### SeasonId

• `Optional` **SeasonId**: ``null`` \| `string`

Gets or sets the season identifier.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:449](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L449)

___

### SeasonName

• `Optional` **SeasonName**: ``null`` \| `string`

Gets or sets the name of the season.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:557](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L557)

___

### SeriesCount

• `Optional` **SeriesCount**: ``null`` \| `number`

Gets or sets the series count.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:713](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L713)

___

### SeriesId

• `Optional` **SeriesId**: ``null`` \| `string`

Gets or sets the series id.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:443](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L443)

___

### SeriesName

• `Optional` **SeriesName**: ``null`` \| `string`

Gets or sets the name of the series.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:437](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L437)

___

### SeriesPrimaryImageTag

• `Optional` **SeriesPrimaryImageTag**: ``null`` \| `string`

Gets or sets the series primary image tag.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:539](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L539)

___

### SeriesStudio

• `Optional` **SeriesStudio**: ``null`` \| `string`

Gets or sets the series studio.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:635](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L635)

___

### SeriesThumbImageTag

• `Optional` **SeriesThumbImageTag**: ``null`` \| `string`

Gets or sets the series thumb image tag.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:623](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L623)

___

### SeriesTimerId

• `Optional` **SeriesTimerId**: ``null`` \| `string`

Gets or sets the series timer identifier.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:845](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L845)

___

### ServerId

• `Optional` **ServerId**: ``null`` \| `string`

Gets or sets the server identifier.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:59](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L59)

___

### ShutterSpeed

• `Optional` **ShutterSpeed**: ``null`` \| `number`

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:815](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L815)

___

### Software

• `Optional` **Software**: ``null`` \| `string`

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:785](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L785)

___

### SongCount

• `Optional` **SongCount**: ``null`` \| `number`

Gets or sets the song count.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:731](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L731)

___

### SortName

• `Optional` **SortName**: ``null`` \| `string`

Gets or sets the name of the sort.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:167](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L167)

___

### SourceType

• `Optional` **SourceType**: ``null`` \| `string`

Gets or sets the type of the source.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:77](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L77)

___

### SpecialFeatureCount

• `Optional` **SpecialFeatureCount**: ``null`` \| `number`

Gets or sets the special feature count.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:455](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L455)

___

### StartDate

• `Optional` **StartDate**: ``null`` \| `string`

The start date of the recording, in UTC.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:863](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L863)

___

### Status

• `Optional` **Status**: ``null`` \| `string`

Gets or sets the status.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:467](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L467)

___

### Studios

• `Optional` **Studios**: ``null`` \| [`NameGuidPair`](generated_client.NameGuidPair.md)[]

Gets or sets the studios.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:383](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L383)

___

### SupportsSync

• `Optional` **SupportsSync**: ``null`` \| `boolean`

Gets or sets a value indicating whether [supports synchronize].

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:155](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L155)

___

### Taglines

• `Optional` **Taglines**: ``null`` \| `string`[]

Gets or sets the taglines.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:257](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L257)

___

### Tags

• `Optional` **Tags**: ``null`` \| `string`[]

Gets or sets the tags.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:485](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L485)

___

### TimerId

• `Optional` **TimerId**: ``null`` \| `string`

Gets or sets the timer identifier.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:941](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L941)

___

### TrailerCount

• `Optional` **TrailerCount**: ``null`` \| `number`

Gets or sets the trailer count.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:701](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L701)

___

### Type

• `Optional` **Type**: ``null`` \| `string`

Gets or sets the type.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:371](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L371)

___

### UserData

• `Optional` **UserData**: [`UserItemDataDto`](generated_client.UserItemDataDto.md)

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:419](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L419)

___

### Video3DFormat

• `Optional` **Video3DFormat**: [`Video3DFormat`](../enums/generated_client.Video3DFormat.md)

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:179](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L179)

___

### VideoType

• `Optional` **VideoType**: [`VideoType`](../enums/generated_client.VideoType.md)

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:569](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L569)

___

### Width

• `Optional` **Width**: ``null`` \| `number`

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:761](https://github.com/thornbill/jellyfin-sdk-typescript/blob/350a9a5/src/generated-client/models/base-item-dto.ts#L761)
