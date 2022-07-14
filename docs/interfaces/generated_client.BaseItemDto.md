[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / BaseItemDto

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

[generated-client/models/base-item-dto.ts:480](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L480)

___

### AirTime

• `Optional` **AirTime**: ``null`` \| `string`

Gets or sets the air time.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:474](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L474)

___

### AirsAfterSeasonNumber

• `Optional` **AirsAfterSeasonNumber**: ``null`` \| `number`

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:114](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L114)

___

### AirsBeforeEpisodeNumber

• `Optional` **AirsBeforeEpisodeNumber**: ``null`` \| `number`

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:120](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L120)

___

### AirsBeforeSeasonNumber

• `Optional` **AirsBeforeSeasonNumber**: ``null`` \| `number`

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:108](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L108)

___

### Album

• `Optional` **Album**: ``null`` \| `string`

Gets or sets the album.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:510](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L510)

___

### AlbumArtist

• `Optional` **AlbumArtist**: ``null`` \| `string`

Gets or sets the album artist.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:546](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L546)

___

### AlbumArtists

• `Optional` **AlbumArtists**: ``null`` \| [`NameGuidPair`](generated_client.NameGuidPair.md)[]

Gets or sets the album artists.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:552](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L552)

___

### AlbumCount

• `Optional` **AlbumCount**: ``null`` \| `number`

Gets or sets the album count.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:738](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L738)

___

### AlbumId

• `Optional` **AlbumId**: ``null`` \| `string`

Gets or sets the album id.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:528](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L528)

___

### AlbumPrimaryImageTag

• `Optional` **AlbumPrimaryImageTag**: ``null`` \| `string`

Gets or sets the album image tag.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:534](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L534)

___

### Altitude

• `Optional` **Altitude**: ``null`` \| `number`

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:834](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L834)

___

### Aperture

• `Optional` **Aperture**: ``null`` \| `number`

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:810](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L810)

___

### ArtistCount

• `Optional` **ArtistCount**: ``null`` \| `number`

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:744](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L744)

___

### ArtistItems

• `Optional` **ArtistItems**: ``null`` \| [`NameGuidPair`](generated_client.NameGuidPair.md)[]

Gets or sets the artist items.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:504](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L504)

___

### Artists

• `Optional` **Artists**: ``null`` \| `string`[]

Gets or sets the artists.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:498](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L498)

___

### AspectRatio

• `Optional` **AspectRatio**: ``null`` \| `string`

Gets or sets the aspect ratio.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:294](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L294)

___

### Audio

• `Optional` **Audio**: [`ProgramAudio`](../enums/generated_client.ProgramAudio.md)

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:894](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L894)

___

### BackdropImageTags

• `Optional` **BackdropImageTags**: ``null`` \| `string`[]

Gets or sets the backdrop image tags.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:594](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L594)

___

### CameraMake

• `Optional` **CameraMake**: ``null`` \| `string`

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:774](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L774)

___

### CameraModel

• `Optional` **CameraModel**: ``null`` \| `string`

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:780](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L780)

___

### CanDelete

• `Optional` **CanDelete**: ``null`` \| `boolean`

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:126](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L126)

___

### CanDownload

• `Optional` **CanDownload**: ``null`` \| `boolean`

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:132](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L132)

___

### ChannelId

• `Optional` **ChannelId**: ``null`` \| `string`

Gets or sets the channel identifier.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:240](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L240)

___

### ChannelName

• `Optional` **ChannelName**: ``null`` \| `string`

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:246](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L246)

___

### ChannelNumber

• `Optional` **ChannelNumber**: ``null`` \| `string`

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:318](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L318)

___

### ChannelPrimaryImageTag

• `Optional` **ChannelPrimaryImageTag**: ``null`` \| `string`

Gets or sets the channel primary image tag.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:858](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L858)

___

### ChannelType

• `Optional` **ChannelType**: [`ChannelType`](../enums/generated_client.ChannelType.md)

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:888](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L888)

___

### Chapters

• `Optional` **Chapters**: ``null`` \| [`ChapterInfo`](generated_client.ChapterInfo.md)[]

Gets or sets the chapters.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:666](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L666)

___

### ChildCount

• `Optional` **ChildCount**: ``null`` \| `number`

Gets or sets the child count.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:432](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L432)

___

### CollectionType

• `Optional` **CollectionType**: ``null`` \| `string`

Gets or sets the type of the collection.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:516](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L516)

___

### CommunityRating

• `Optional` **CommunityRating**: ``null`` \| `number`

Gets or sets the community rating.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:270](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L270)

___

### CompletionPercentage

• `Optional` **CompletionPercentage**: ``null`` \| `number`

Gets or sets the completion percentage.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:870](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L870)

___

### Container

• `Optional` **Container**: ``null`` \| `string`

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:162](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L162)

___

### CriticRating

• `Optional` **CriticRating**: ``null`` \| `number`

Gets or sets the critic rating.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:204](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L204)

___

### CumulativeRunTimeTicks

• `Optional` **CumulativeRunTimeTicks**: ``null`` \| `number`

Gets or sets the cumulative run time ticks.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:276](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L276)

___

### CurrentProgram

• `Optional` **CurrentProgram**: [`BaseItemDto`](generated_client.BaseItemDto.md)

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:948](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L948)

___

### CustomRating

• `Optional` **CustomRating**: ``null`` \| `string`

Gets or sets the custom rating.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:234](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L234)

___

### DateCreated

• `Optional` **DateCreated**: ``null`` \| `string`

Gets or sets the date created.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:90](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L90)

___

### DateLastMediaAdded

• `Optional` **DateLastMediaAdded**: ``null`` \| `string`

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:96](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L96)

___

### DisplayOrder

• `Optional` **DisplayOrder**: ``null`` \| `string`

Gets or sets the display order.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:522](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L522)

___

### DisplayPreferencesId

• `Optional` **DisplayPreferencesId**: ``null`` \| `string`

Gets or sets the display preferences id.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:462](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L462)

___

### EnableMediaSourceDisplay

• `Optional` **EnableMediaSourceDisplay**: ``null`` \| `boolean`

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:222](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L222)

___

### EndDate

• `Optional` **EndDate**: ``null`` \| `string`

Gets or sets the end date.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:690](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L690)

___

### EpisodeCount

• `Optional` **EpisodeCount**: ``null`` \| `number`

Gets or sets the episode count.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:726](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L726)

___

### EpisodeTitle

• `Optional` **EpisodeTitle**: ``null`` \| `string`

Gets or sets the episode title.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:882](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L882)

___

### Etag

• `Optional` **Etag**: ``null`` \| `string`

Gets or sets the etag.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:72](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L72)

___

### ExposureTime

• `Optional` **ExposureTime**: ``null`` \| `number`

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:792](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L792)

___

### ExternalUrls

• `Optional` **ExternalUrls**: ``null`` \| [`ExternalUrl`](generated_client.ExternalUrl.md)[]

Gets or sets the external urls.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:192](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L192)

___

### ExtraType

• `Optional` **ExtraType**: ``null`` \| `string`

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:102](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L102)

___

### FocalLength

• `Optional` **FocalLength**: ``null`` \| `number`

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:798](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L798)

___

### ForcedSortName

• `Optional` **ForcedSortName**: ``null`` \| `string`

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:174](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L174)

___

### GenreItems

• `Optional` **GenreItems**: ``null`` \| [`NameGuidPair`](generated_client.NameGuidPair.md)[]

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:390](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L390)

___

### Genres

• `Optional` **Genres**: ``null`` \| `string`[]

Gets or sets the genres.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:264](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L264)

___

### HasSubtitles

• `Optional` **HasSubtitles**: ``null`` \| `boolean`

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:138](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L138)

___

### Height

• `Optional` **Height**: ``null`` \| `number`

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:768](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L768)

___

### Id

• `Optional` **Id**: `string`

Gets or sets the id.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:66](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L66)

___

### ImageBlurHashes

• `Optional` **ImageBlurHashes**: ``null`` \| [`BaseItemDtoImageBlurHashes`](generated_client.BaseItemDtoImageBlurHashes.md)

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:630](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L630)

___

### ImageOrientation

• `Optional` **ImageOrientation**: [`ImageOrientation`](../enums/generated_client.ImageOrientation.md)

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:804](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L804)

___

### ImageTags

• `Optional` **ImageTags**: ``null`` \| { `[key: string]`: `string`;  }

Gets or sets the image tags.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:588](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L588)

___

### IndexNumber

• `Optional` **IndexNumber**: ``null`` \| `number`

Gets or sets the index number.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:324](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L324)

___

### IndexNumberEnd

• `Optional` **IndexNumberEnd**: ``null`` \| `number`

Gets or sets the index number end.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:330](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L330)

___

### IsFolder

• `Optional` **IsFolder**: ``null`` \| `boolean`

Gets or sets a value indicating whether this instance is folder.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:360](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L360)

___

### IsHD

• `Optional` **IsHD**: ``null`` \| `boolean`

Gets or sets a value indicating whether this instance is HD.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:354](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L354)

___

### IsKids

• `Optional` **IsKids**: ``null`` \| `boolean`

Gets or sets a value indicating whether this instance is kids.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:930](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L930)

___

### IsLive

• `Optional` **IsLive**: ``null`` \| `boolean`

Gets or sets a value indicating whether this instance is live.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:918](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L918)

___

### IsMovie

• `Optional` **IsMovie**: ``null`` \| `boolean`

Gets or sets a value indicating whether this instance is movie.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:900](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L900)

___

### IsNews

• `Optional` **IsNews**: ``null`` \| `boolean`

Gets or sets a value indicating whether this instance is news.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:924](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L924)

___

### IsPlaceHolder

• `Optional` **IsPlaceHolder**: ``null`` \| `boolean`

Gets or sets a value indicating whether this instance is place holder.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:306](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L306)

___

### IsPremiere

• `Optional` **IsPremiere**: ``null`` \| `boolean`

Gets or sets a value indicating whether this instance is premiere.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:936](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L936)

___

### IsRepeat

• `Optional` **IsRepeat**: ``null`` \| `boolean`

Gets or sets a value indicating whether this instance is repeat.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:876](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L876)

___

### IsSeries

• `Optional` **IsSeries**: ``null`` \| `boolean`

Gets or sets a value indicating whether this instance is series.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:912](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L912)

___

### IsSports

• `Optional` **IsSports**: ``null`` \| `boolean`

Gets or sets a value indicating whether this instance is sports.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:906](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L906)

___

### IsoSpeedRating

• `Optional` **IsoSpeedRating**: ``null`` \| `number`

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:840](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L840)

___

### IsoType

• `Optional` **IsoType**: [`IsoType`](../enums/generated_client.IsoType.md)

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:678](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L678)

___

### Latitude

• `Optional` **Latitude**: ``null`` \| `number`

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:822](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L822)

___

### LocalTrailerCount

• `Optional` **LocalTrailerCount**: ``null`` \| `number`

Gets or sets the local trailer count.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:414](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L414)

___

### LocationType

• `Optional` **LocationType**: [`LocationType`](../enums/generated_client.LocationType.md)

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:672](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L672)

___

### LockData

• `Optional` **LockData**: ``null`` \| `boolean`

Gets or sets a value indicating whether [enable internet providers].

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:756](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L756)

___

### LockedFields

• `Optional` **LockedFields**: ``null`` \| [`MetadataField`](../enums/generated_client.MetadataField.md)[]

Gets or sets the locked fields.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:696](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L696)

___

### Longitude

• `Optional` **Longitude**: ``null`` \| `number`

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:828](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L828)

___

### MediaSourceCount

• `Optional` **MediaSourceCount**: ``null`` \| `number`

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:582](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L582)

___

### MediaSources

• `Optional` **MediaSources**: ``null`` \| [`MediaSourceInfo`](generated_client.MediaSourceInfo.md)[]

Gets or sets the media versions.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:198](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L198)

___

### MediaStreams

• `Optional` **MediaStreams**: ``null`` \| [`MediaStream`](generated_client.MediaStream.md)[]

Gets or sets the media streams.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:564](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L564)

___

### MediaType

• `Optional` **MediaType**: ``null`` \| `string`

Gets or sets the type of the media.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:684](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L684)

___

### MovieCount

• `Optional` **MovieCount**: ``null`` \| `number`

Gets or sets the movie count.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:708](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L708)

___

### MusicVideoCount

• `Optional` **MusicVideoCount**: ``null`` \| `number`

Gets or sets the music video count.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:750](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L750)

___

### Name

• `Optional` **Name**: ``null`` \| `string`

Gets or sets the name.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:48](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L48)

___

### Number

• `Optional` **Number**: ``null`` \| `string`

Gets or sets the number.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:312](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L312)

___

### OfficialRating

• `Optional` **OfficialRating**: ``null`` \| `string`

Gets or sets the official rating.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:228](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L228)

___

### OriginalTitle

• `Optional` **OriginalTitle**: ``null`` \| `string`

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:54](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L54)

___

### Overview

• `Optional` **Overview**: ``null`` \| `string`

Gets or sets the overview.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:252](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L252)

___

### ParentArtImageTag

• `Optional` **ParentArtImageTag**: ``null`` \| `string`

Gets or sets the parent art image tag.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:618](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L618)

___

### ParentArtItemId

• `Optional` **ParentArtItemId**: ``null`` \| `string`

Gets or sets wether the item has fan art, this will hold the Id of the Parent that has one.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:612](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L612)

___

### ParentBackdropImageTags

• `Optional` **ParentBackdropImageTags**: ``null`` \| `string`[]

Gets or sets the parent backdrop image tags.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:408](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L408)

___

### ParentBackdropItemId

• `Optional` **ParentBackdropItemId**: ``null`` \| `string`

Gets or sets wether the item has any backdrops, this will hold the Id of the Parent that has one.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:402](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L402)

___

### ParentId

• `Optional` **ParentId**: ``null`` \| `string`

Gets or sets the parent id.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:366](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L366)

___

### ParentIndexNumber

• `Optional` **ParentIndexNumber**: ``null`` \| `number`

Gets or sets the parent index number.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:336](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L336)

___

### ParentLogoImageTag

• `Optional` **ParentLogoImageTag**: ``null`` \| `string`

Gets or sets the parent logo image tag.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:606](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L606)

___

### ParentLogoItemId

• `Optional` **ParentLogoItemId**: ``null`` \| `string`

Gets or sets wether the item has a logo, this will hold the Id of the Parent that has one.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:396](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L396)

___

### ParentPrimaryImageItemId

• `Optional` **ParentPrimaryImageItemId**: ``null`` \| `string`

Gets or sets the parent primary image item identifier.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:654](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L654)

___

### ParentPrimaryImageTag

• `Optional` **ParentPrimaryImageTag**: ``null`` \| `string`

Gets or sets the parent primary image tag.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:660](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L660)

___

### ParentThumbImageTag

• `Optional` **ParentThumbImageTag**: ``null`` \| `string`

Gets or sets the parent thumb image tag.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:648](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L648)

___

### ParentThumbItemId

• `Optional` **ParentThumbItemId**: ``null`` \| `string`

Gets or sets the parent thumb item id.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:642](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L642)

___

### PartCount

• `Optional` **PartCount**: ``null`` \| `number`

Gets or sets the part count.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:576](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L576)

___

### Path

• `Optional` **Path**: ``null`` \| `string`

Gets or sets the path.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:216](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L216)

___

### People

• `Optional` **People**: ``null`` \| [`BaseItemPerson`](generated_client.BaseItemPerson.md)[]

Gets or sets the people.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:378](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L378)

___

### PlayAccess

• `Optional` **PlayAccess**: [`PlayAccess`](../enums/generated_client.PlayAccess.md)

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:288](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L288)

___

### PlaylistItemId

• `Optional` **PlaylistItemId**: ``null`` \| `string`

Gets or sets the playlist item identifier.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:84](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L84)

___

### PreferredMetadataCountryCode

• `Optional` **PreferredMetadataCountryCode**: ``null`` \| `string`

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:150](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L150)

___

### PreferredMetadataLanguage

• `Optional` **PreferredMetadataLanguage**: ``null`` \| `string`

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:144](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L144)

___

### PremiereDate

• `Optional` **PremiereDate**: ``null`` \| `string`

Gets or sets the premiere date.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:186](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L186)

___

### PrimaryImageAspectRatio

• `Optional` **PrimaryImageAspectRatio**: ``null`` \| `number`

Gets or sets the primary image aspect ratio, after image enhancements.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:492](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L492)

___

### ProductionLocations

• `Optional` **ProductionLocations**: ``null`` \| `string`[]

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:210](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L210)

___

### ProductionYear

• `Optional` **ProductionYear**: ``null`` \| `number`

Gets or sets the production year.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:300](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L300)

___

### ProgramCount

• `Optional` **ProgramCount**: ``null`` \| `number`

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:720](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L720)

___

### ProgramId

• `Optional` **ProgramId**: ``null`` \| `string`

Gets or sets the program identifier.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:852](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L852)

___

### ProviderIds

• `Optional` **ProviderIds**: ``null`` \| { `[key: string]`: `string`;  }

Gets or sets the provider ids.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:348](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L348)

___

### RecursiveItemCount

• `Optional` **RecursiveItemCount**: ``null`` \| `number`

Gets or sets the recursive item count.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:426](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L426)

___

### RemoteTrailers

• `Optional` **RemoteTrailers**: ``null`` \| [`MediaUrl`](generated_client.MediaUrl.md)[]

Gets or sets the trailer urls.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:342](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L342)

___

### RunTimeTicks

• `Optional` **RunTimeTicks**: ``null`` \| `number`

Gets or sets the run time ticks.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:282](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L282)

___

### ScreenshotImageTags

• `Optional` **ScreenshotImageTags**: ``null`` \| `string`[]

Gets or sets the screenshot image tags.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:600](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L600)

___

### SeasonId

• `Optional` **SeasonId**: ``null`` \| `string`

Gets or sets the season identifier.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:450](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L450)

___

### SeasonName

• `Optional` **SeasonName**: ``null`` \| `string`

Gets or sets the name of the season.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:558](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L558)

___

### SeriesCount

• `Optional` **SeriesCount**: ``null`` \| `number`

Gets or sets the series count.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:714](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L714)

___

### SeriesId

• `Optional` **SeriesId**: ``null`` \| `string`

Gets or sets the series id.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:444](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L444)

___

### SeriesName

• `Optional` **SeriesName**: ``null`` \| `string`

Gets or sets the name of the series.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:438](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L438)

___

### SeriesPrimaryImageTag

• `Optional` **SeriesPrimaryImageTag**: ``null`` \| `string`

Gets or sets the series primary image tag.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:540](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L540)

___

### SeriesStudio

• `Optional` **SeriesStudio**: ``null`` \| `string`

Gets or sets the series studio.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:636](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L636)

___

### SeriesThumbImageTag

• `Optional` **SeriesThumbImageTag**: ``null`` \| `string`

Gets or sets the series thumb image tag.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:624](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L624)

___

### SeriesTimerId

• `Optional` **SeriesTimerId**: ``null`` \| `string`

Gets or sets the series timer identifier.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:846](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L846)

___

### ServerId

• `Optional` **ServerId**: ``null`` \| `string`

Gets or sets the server identifier.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:60](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L60)

___

### ShutterSpeed

• `Optional` **ShutterSpeed**: ``null`` \| `number`

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:816](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L816)

___

### Software

• `Optional` **Software**: ``null`` \| `string`

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:786](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L786)

___

### SongCount

• `Optional` **SongCount**: ``null`` \| `number`

Gets or sets the song count.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:732](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L732)

___

### SortName

• `Optional` **SortName**: ``null`` \| `string`

Gets or sets the name of the sort.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:168](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L168)

___

### SourceType

• `Optional` **SourceType**: ``null`` \| `string`

Gets or sets the type of the source.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:78](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L78)

___

### SpecialFeatureCount

• `Optional` **SpecialFeatureCount**: ``null`` \| `number`

Gets or sets the special feature count.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:456](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L456)

___

### StartDate

• `Optional` **StartDate**: ``null`` \| `string`

Gets or sets the start date of the recording, in UTC.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:864](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L864)

___

### Status

• `Optional` **Status**: ``null`` \| `string`

Gets or sets the status.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:468](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L468)

___

### Studios

• `Optional` **Studios**: ``null`` \| [`NameGuidPair`](generated_client.NameGuidPair.md)[]

Gets or sets the studios.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:384](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L384)

___

### SupportsSync

• `Optional` **SupportsSync**: ``null`` \| `boolean`

Gets or sets a value indicating whether [supports synchronize].

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:156](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L156)

___

### Taglines

• `Optional` **Taglines**: ``null`` \| `string`[]

Gets or sets the taglines.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:258](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L258)

___

### Tags

• `Optional` **Tags**: ``null`` \| `string`[]

Gets or sets the tags.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:486](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L486)

___

### TimerId

• `Optional` **TimerId**: ``null`` \| `string`

Gets or sets the timer identifier.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:942](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L942)

___

### TrailerCount

• `Optional` **TrailerCount**: ``null`` \| `number`

Gets or sets the trailer count.

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:702](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L702)

___

### Type

• `Optional` **Type**: [`BaseItemKind`](../enums/generated_client.BaseItemKind.md)

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:372](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L372)

___

### UserData

• `Optional` **UserData**: [`UserItemDataDto`](generated_client.UserItemDataDto.md)

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:420](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L420)

___

### Video3DFormat

• `Optional` **Video3DFormat**: [`Video3DFormat`](../enums/generated_client.Video3DFormat.md)

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:180](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L180)

___

### VideoType

• `Optional` **VideoType**: [`VideoType`](../enums/generated_client.VideoType.md)

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:570](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L570)

___

### Width

• `Optional` **Width**: ``null`` \| `number`

**`memberof`** BaseItemDto

#### Defined in

[generated-client/models/base-item-dto.ts:762](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/base-item-dto.ts#L762)
