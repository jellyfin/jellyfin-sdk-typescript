[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / ServerConfiguration

# Interface: ServerConfiguration

[generated-client](../modules/generated_client.md).ServerConfiguration

Represents the server configuration.

**`export`**

**`interface`** ServerConfiguration

## Table of contents

### Properties

- [ActivityLogRetentionDays](generated_client.ServerConfiguration.md#activitylogretentiondays)
- [AllowClientLogUpload](generated_client.ServerConfiguration.md#allowclientlogupload)
- [CachePath](generated_client.ServerConfiguration.md#cachepath)
- [CodecsUsed](generated_client.ServerConfiguration.md#codecsused)
- [ContentTypes](generated_client.ServerConfiguration.md#contenttypes)
- [CorsHosts](generated_client.ServerConfiguration.md#corshosts)
- [DisableLiveTvChannelUserDataName](generated_client.ServerConfiguration.md#disablelivetvchanneluserdataname)
- [DisplaySpecialsWithinSeasons](generated_client.ServerConfiguration.md#displayspecialswithinseasons)
- [EnableCaseSensitiveItemIds](generated_client.ServerConfiguration.md#enablecasesensitiveitemids)
- [EnableExternalContentInSuggestions](generated_client.ServerConfiguration.md#enableexternalcontentinsuggestions)
- [EnableFolderView](generated_client.ServerConfiguration.md#enablefolderview)
- [EnableGroupingIntoCollections](generated_client.ServerConfiguration.md#enablegroupingintocollections)
- [EnableMetrics](generated_client.ServerConfiguration.md#enablemetrics)
- [EnableNormalizedItemByNameIds](generated_client.ServerConfiguration.md#enablenormalizeditembynameids)
- [EnableSlowResponseWarning](generated_client.ServerConfiguration.md#enableslowresponsewarning)
- [ImageExtractionTimeoutMs](generated_client.ServerConfiguration.md#imageextractiontimeoutms)
- [ImageSavingConvention](generated_client.ServerConfiguration.md#imagesavingconvention)
- [IsPortAuthorized](generated_client.ServerConfiguration.md#isportauthorized)
- [IsStartupWizardCompleted](generated_client.ServerConfiguration.md#isstartupwizardcompleted)
- [LibraryMetadataRefreshConcurrency](generated_client.ServerConfiguration.md#librarymetadatarefreshconcurrency)
- [LibraryMonitorDelay](generated_client.ServerConfiguration.md#librarymonitordelay)
- [LibraryScanFanoutConcurrency](generated_client.ServerConfiguration.md#libraryscanfanoutconcurrency)
- [LogFileRetentionDays](generated_client.ServerConfiguration.md#logfileretentiondays)
- [MaxAudiobookResume](generated_client.ServerConfiguration.md#maxaudiobookresume)
- [MaxResumePct](generated_client.ServerConfiguration.md#maxresumepct)
- [MetadataCountryCode](generated_client.ServerConfiguration.md#metadatacountrycode)
- [MetadataNetworkPath](generated_client.ServerConfiguration.md#metadatanetworkpath)
- [MetadataOptions](generated_client.ServerConfiguration.md#metadataoptions)
- [MetadataPath](generated_client.ServerConfiguration.md#metadatapath)
- [MinAudiobookResume](generated_client.ServerConfiguration.md#minaudiobookresume)
- [MinResumeDurationSeconds](generated_client.ServerConfiguration.md#minresumedurationseconds)
- [MinResumePct](generated_client.ServerConfiguration.md#minresumepct)
- [PathSubstitutions](generated_client.ServerConfiguration.md#pathsubstitutions)
- [PluginRepositories](generated_client.ServerConfiguration.md#pluginrepositories)
- [PreferredMetadataLanguage](generated_client.ServerConfiguration.md#preferredmetadatalanguage)
- [PreviousVersion](generated_client.ServerConfiguration.md#previousversion)
- [PreviousVersionStr](generated_client.ServerConfiguration.md#previousversionstr)
- [QuickConnectAvailable](generated_client.ServerConfiguration.md#quickconnectavailable)
- [RemoteClientBitrateLimit](generated_client.ServerConfiguration.md#remoteclientbitratelimit)
- [RemoveOldPlugins](generated_client.ServerConfiguration.md#removeoldplugins)
- [SaveMetadataHidden](generated_client.ServerConfiguration.md#savemetadatahidden)
- [ServerName](generated_client.ServerConfiguration.md#servername)
- [SkipDeserializationForBasicTypes](generated_client.ServerConfiguration.md#skipdeserializationforbasictypes)
- [SlowResponseThresholdMs](generated_client.ServerConfiguration.md#slowresponsethresholdms)
- [SortRemoveCharacters](generated_client.ServerConfiguration.md#sortremovecharacters)
- [SortRemoveWords](generated_client.ServerConfiguration.md#sortremovewords)
- [SortReplaceCharacters](generated_client.ServerConfiguration.md#sortreplacecharacters)
- [UICulture](generated_client.ServerConfiguration.md#uiculture)

## Properties

### ActivityLogRetentionDays

• `Optional` **ActivityLogRetentionDays**: ``null`` \| `number`

Gets or sets the number of days we should retain activity logs.

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:291](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/server-configuration.ts#L291)

___

### AllowClientLogUpload

• `Optional` **AllowClientLogUpload**: `boolean`

Gets or sets a value indicating whether clients should be allowed to upload logs.

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:315](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/server-configuration.ts#L315)

___

### CachePath

• `Optional` **CachePath**: ``null`` \| `string`

Gets or sets the cache path.

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:45](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/server-configuration.ts#L45)

___

### CodecsUsed

• `Optional` **CodecsUsed**: `string`[]

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:243](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/server-configuration.ts#L243)

___

### ContentTypes

• `Optional` **ContentTypes**: [`NameValuePair`](generated_client.NameValuePair.md)[]

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:213](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/server-configuration.ts#L213)

___

### CorsHosts

• `Optional` **CorsHosts**: `string`[]

Gets or sets the cors hosts.

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:285](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/server-configuration.ts#L285)

___

### DisableLiveTvChannelUserDataName

• `Optional` **DisableLiveTvChannelUserDataName**: `boolean`

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:93](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/server-configuration.ts#L93)

___

### DisplaySpecialsWithinSeasons

• `Optional` **DisplaySpecialsWithinSeasons**: `boolean`

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:237](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/server-configuration.ts#L237)

___

### EnableCaseSensitiveItemIds

• `Optional` **EnableCaseSensitiveItemIds**: `boolean`

Gets or sets a value indicating whether [enable case sensitive item ids].

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:87](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/server-configuration.ts#L87)

___

### EnableExternalContentInSuggestions

• `Optional` **EnableExternalContentInSuggestions**: `boolean`

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:255](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/server-configuration.ts#L255)

___

### EnableFolderView

• `Optional` **EnableFolderView**: `boolean`

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:225](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/server-configuration.ts#L225)

___

### EnableGroupingIntoCollections

• `Optional` **EnableGroupingIntoCollections**: `boolean`

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:231](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/server-configuration.ts#L231)

___

### EnableMetrics

• `Optional` **EnableMetrics**: `boolean`

Gets or sets a value indicating whether to enable prometheus metrics exporting.

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:63](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/server-configuration.ts#L63)

___

### EnableNormalizedItemByNameIds

• `Optional` **EnableNormalizedItemByNameIds**: `boolean`

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:69](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/server-configuration.ts#L69)

___

### EnableSlowResponseWarning

• `Optional` **EnableSlowResponseWarning**: `boolean`

Gets or sets a value indicating whether slow server responses should be logged as a warning.

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:273](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/server-configuration.ts#L273)

___

### ImageExtractionTimeoutMs

• `Optional` **ImageExtractionTimeoutMs**: `number`

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:261](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/server-configuration.ts#L261)

___

### ImageSavingConvention

• `Optional` **ImageSavingConvention**: [`ImageSavingConvention`](../enums/generated_client.ImageSavingConvention.md)

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:177](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/server-configuration.ts#L177)

___

### IsPortAuthorized

• `Optional` **IsPortAuthorized**: `boolean`

Gets or sets a value indicating whether this instance is port authorized.

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:75](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/server-configuration.ts#L75)

___

### IsStartupWizardCompleted

• `Optional` **IsStartupWizardCompleted**: `boolean`

Gets or sets a value indicating whether this instance is first run.

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:39](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/server-configuration.ts#L39)

___

### LibraryMetadataRefreshConcurrency

• `Optional` **LibraryMetadataRefreshConcurrency**: `number`

Gets or sets the how many metadata refreshes can run concurrently.

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:303](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/server-configuration.ts#L303)

___

### LibraryMonitorDelay

• `Optional` **LibraryMonitorDelay**: `number`

Gets or sets the delay in seconds that we will wait after a file system change to try and discover what has been added/removed  Some delay is necessary with some items because their creation is not atomic.  It involves the creation of several  different directories and files.

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:171](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/server-configuration.ts#L171)

___

### LibraryScanFanoutConcurrency

• `Optional` **LibraryScanFanoutConcurrency**: `number`

Gets or sets the how the library scan fans out.

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:297](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/server-configuration.ts#L297)

___

### LogFileRetentionDays

• `Optional` **LogFileRetentionDays**: `number`

Gets or sets the number of days we should retain log files.

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:33](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/server-configuration.ts#L33)

___

### MaxAudiobookResume

• `Optional` **MaxAudiobookResume**: `number`

Gets or sets the remaining minutes of a book that can be played while still saving playstate. If this percentage is crossed playstate will be reset to the beginning and the item will be marked watched.

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:165](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/server-configuration.ts#L165)

___

### MaxResumePct

• `Optional` **MaxResumePct**: `number`

Gets or sets the maximum percentage of an item that can be played while still saving playstate. If this percentage is crossed playstate will be reset to the beginning and the item will be marked watched.

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:147](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/server-configuration.ts#L147)

___

### MetadataCountryCode

• `Optional` **MetadataCountryCode**: `string`

Gets or sets the metadata country code.

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:117](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/server-configuration.ts#L117)

___

### MetadataNetworkPath

• `Optional` **MetadataNetworkPath**: `string`

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:105](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/server-configuration.ts#L105)

___

### MetadataOptions

• `Optional` **MetadataOptions**: [`MetadataOptions`](generated_client.MetadataOptions.md)[]

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:183](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/server-configuration.ts#L183)

___

### MetadataPath

• `Optional` **MetadataPath**: `string`

Gets or sets the metadata path.

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:99](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/server-configuration.ts#L99)

___

### MinAudiobookResume

• `Optional` **MinAudiobookResume**: `number`

Gets or sets the minimum minutes of a book that must be played in order for playstate to be updated.

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:159](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/server-configuration.ts#L159)

___

### MinResumeDurationSeconds

• `Optional` **MinResumeDurationSeconds**: `number`

Gets or sets the minimum duration that an item must have in order to be eligible for playstate updates..

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:153](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/server-configuration.ts#L153)

___

### MinResumePct

• `Optional` **MinResumePct**: `number`

Gets or sets the minimum percentage of an item that must be played in order for playstate to be updated.

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:141](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/server-configuration.ts#L141)

___

### PathSubstitutions

• `Optional` **PathSubstitutions**: [`PathSubstitution`](generated_client.PathSubstitution.md)[]

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:267](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/server-configuration.ts#L267)

___

### PluginRepositories

• `Optional` **PluginRepositories**: [`RepositoryInfo`](generated_client.RepositoryInfo.md)[]

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:249](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/server-configuration.ts#L249)

___

### PreferredMetadataLanguage

• `Optional` **PreferredMetadataLanguage**: `string`

Gets or sets the preferred metadata language.

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:111](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/server-configuration.ts#L111)

___

### PreviousVersion

• `Optional` **PreviousVersion**: ``null`` \| `string`

Gets or sets the last known version that was ran using the configuration.

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:51](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/server-configuration.ts#L51)

___

### PreviousVersionStr

• `Optional` **PreviousVersionStr**: ``null`` \| `string`

Gets or sets the stringified PreviousVersion to be stored/loaded,  because System.Version itself isn\'t xml-serializable.

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:57](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/server-configuration.ts#L57)

___

### QuickConnectAvailable

• `Optional` **QuickConnectAvailable**: `boolean`

Gets or sets a value indicating whether quick connect is available for use on this server.

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:81](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/server-configuration.ts#L81)

___

### RemoteClientBitrateLimit

• `Optional` **RemoteClientBitrateLimit**: `number`

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:219](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/server-configuration.ts#L219)

___

### RemoveOldPlugins

• `Optional` **RemoveOldPlugins**: `boolean`

Gets or sets a value indicating whether older plugins should automatically be deleted from the plugin folder.

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:309](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/server-configuration.ts#L309)

___

### SaveMetadataHidden

• `Optional` **SaveMetadataHidden**: `boolean`

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:207](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/server-configuration.ts#L207)

___

### ServerName

• `Optional` **ServerName**: `string`

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:195](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/server-configuration.ts#L195)

___

### SkipDeserializationForBasicTypes

• `Optional` **SkipDeserializationForBasicTypes**: `boolean`

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:189](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/server-configuration.ts#L189)

___

### SlowResponseThresholdMs

• `Optional` **SlowResponseThresholdMs**: `number`

Gets or sets the threshold for the slow response time warning in ms.

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:279](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/server-configuration.ts#L279)

___

### SortRemoveCharacters

• `Optional` **SortRemoveCharacters**: `string`[]

Gets or sets characters to be removed from strings to create a sort name.

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:129](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/server-configuration.ts#L129)

___

### SortRemoveWords

• `Optional` **SortRemoveWords**: `string`[]

Gets or sets words to be removed from strings to create a sort name.

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:135](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/server-configuration.ts#L135)

___

### SortReplaceCharacters

• `Optional` **SortReplaceCharacters**: `string`[]

Gets or sets characters to be replaced with a \' \' in strings to create a sort name.

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:123](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/server-configuration.ts#L123)

___

### UICulture

• `Optional` **UICulture**: `string`

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:201](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/server-configuration.ts#L201)
