[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / ServerConfiguration

# Interface: ServerConfiguration

[generated-client](../modules/generated_client.md).ServerConfiguration

Represents the server configuration.

**`export`**

**`interface`** ServerConfiguration

## Table of contents

### Properties

- [ActivityLogRetentionDays](generated_client.ServerConfiguration.md#activitylogretentiondays)
- [AutoDiscovery](generated_client.ServerConfiguration.md#autodiscovery)
- [AutoDiscoveryTracing](generated_client.ServerConfiguration.md#autodiscoverytracing)
- [BaseUrl](generated_client.ServerConfiguration.md#baseurl)
- [CachePath](generated_client.ServerConfiguration.md#cachepath)
- [CertificatePassword](generated_client.ServerConfiguration.md#certificatepassword)
- [CertificatePath](generated_client.ServerConfiguration.md#certificatepath)
- [CodecsUsed](generated_client.ServerConfiguration.md#codecsused)
- [ContentTypes](generated_client.ServerConfiguration.md#contenttypes)
- [CorsHosts](generated_client.ServerConfiguration.md#corshosts)
- [DisableLiveTvChannelUserDataName](generated_client.ServerConfiguration.md#disablelivetvchanneluserdataname)
- [DisplaySpecialsWithinSeasons](generated_client.ServerConfiguration.md#displayspecialswithinseasons)
- [EnableCaseSensitiveItemIds](generated_client.ServerConfiguration.md#enablecasesensitiveitemids)
- [EnableDashboardResponseCaching](generated_client.ServerConfiguration.md#enabledashboardresponsecaching)
- [EnableExternalContentInSuggestions](generated_client.ServerConfiguration.md#enableexternalcontentinsuggestions)
- [EnableFolderView](generated_client.ServerConfiguration.md#enablefolderview)
- [EnableGroupingIntoCollections](generated_client.ServerConfiguration.md#enablegroupingintocollections)
- [EnableHttps](generated_client.ServerConfiguration.md#enablehttps)
- [EnableIPV4](generated_client.ServerConfiguration.md#enableipv4)
- [EnableIPV6](generated_client.ServerConfiguration.md#enableipv6)
- [EnableMetrics](generated_client.ServerConfiguration.md#enablemetrics)
- [EnableMultiSocketBinding](generated_client.ServerConfiguration.md#enablemultisocketbinding)
- [EnableNewOmdbSupport](generated_client.ServerConfiguration.md#enablenewomdbsupport)
- [EnableNormalizedItemByNameIds](generated_client.ServerConfiguration.md#enablenormalizeditembynameids)
- [EnableRemoteAccess](generated_client.ServerConfiguration.md#enableremoteaccess)
- [EnableSSDPTracing](generated_client.ServerConfiguration.md#enablessdptracing)
- [EnableSlowResponseWarning](generated_client.ServerConfiguration.md#enableslowresponsewarning)
- [EnableUPnP](generated_client.ServerConfiguration.md#enableupnp)
- [GatewayMonitorPeriod](generated_client.ServerConfiguration.md#gatewaymonitorperiod)
- [HDHomerunPortRange](generated_client.ServerConfiguration.md#hdhomerunportrange)
- [HttpServerPortNumber](generated_client.ServerConfiguration.md#httpserverportnumber)
- [HttpsPortNumber](generated_client.ServerConfiguration.md#httpsportnumber)
- [IgnoreVirtualInterfaces](generated_client.ServerConfiguration.md#ignorevirtualinterfaces)
- [ImageExtractionTimeoutMs](generated_client.ServerConfiguration.md#imageextractiontimeoutms)
- [ImageSavingConvention](generated_client.ServerConfiguration.md#imagesavingconvention)
- [IsPortAuthorized](generated_client.ServerConfiguration.md#isportauthorized)
- [IsRemoteIPFilterBlacklist](generated_client.ServerConfiguration.md#isremoteipfilterblacklist)
- [IsStartupWizardCompleted](generated_client.ServerConfiguration.md#isstartupwizardcompleted)
- [KnownProxies](generated_client.ServerConfiguration.md#knownproxies)
- [LibraryMetadataRefreshConcurrency](generated_client.ServerConfiguration.md#librarymetadatarefreshconcurrency)
- [LibraryMonitorDelay](generated_client.ServerConfiguration.md#librarymonitordelay)
- [LibraryScanFanoutConcurrency](generated_client.ServerConfiguration.md#libraryscanfanoutconcurrency)
- [LocalNetworkAddresses](generated_client.ServerConfiguration.md#localnetworkaddresses)
- [LocalNetworkSubnets](generated_client.ServerConfiguration.md#localnetworksubnets)
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
- [PublicHttpsPort](generated_client.ServerConfiguration.md#publichttpsport)
- [PublicPort](generated_client.ServerConfiguration.md#publicport)
- [PublishedServerUriBySubnet](generated_client.ServerConfiguration.md#publishedserveruribysubnet)
- [QuickConnectAvailable](generated_client.ServerConfiguration.md#quickconnectavailable)
- [RemoteClientBitrateLimit](generated_client.ServerConfiguration.md#remoteclientbitratelimit)
- [RemoteIPFilter](generated_client.ServerConfiguration.md#remoteipfilter)
- [RemoveOldPlugins](generated_client.ServerConfiguration.md#removeoldplugins)
- [RequireHttps](generated_client.ServerConfiguration.md#requirehttps)
- [SSDPTracingFilter](generated_client.ServerConfiguration.md#ssdptracingfilter)
- [SaveMetadataHidden](generated_client.ServerConfiguration.md#savemetadatahidden)
- [ServerName](generated_client.ServerConfiguration.md#servername)
- [SkipDeserializationForBasicTypes](generated_client.ServerConfiguration.md#skipdeserializationforbasictypes)
- [SlowResponseThresholdMs](generated_client.ServerConfiguration.md#slowresponsethresholdms)
- [SortRemoveCharacters](generated_client.ServerConfiguration.md#sortremovecharacters)
- [SortRemoveWords](generated_client.ServerConfiguration.md#sortremovewords)
- [SortReplaceCharacters](generated_client.ServerConfiguration.md#sortreplacecharacters)
- [TrustAllIP6Interfaces](generated_client.ServerConfiguration.md#trustallip6interfaces)
- [UDPPortRange](generated_client.ServerConfiguration.md#udpportrange)
- [UDPSendCount](generated_client.ServerConfiguration.md#udpsendcount)
- [UDPSendDelay](generated_client.ServerConfiguration.md#udpsenddelay)
- [UICulture](generated_client.ServerConfiguration.md#uiculture)
- [UPnPCreateHttpPortMap](generated_client.ServerConfiguration.md#upnpcreatehttpportmap)
- [UninstalledPlugins](generated_client.ServerConfiguration.md#uninstalledplugins)
- [VirtualInterfaceNames](generated_client.ServerConfiguration.md#virtualinterfacenames)

## Properties

### ActivityLogRetentionDays

• `Optional` **ActivityLogRetentionDays**: ``null`` \| `number`

Gets or sets the number of days we should retain activity logs.

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:508](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/models/server-configuration.ts#L508)

___

### AutoDiscovery

• `Optional` **AutoDiscovery**: `boolean`

Gets or sets a value indicating whether Autodiscovery is enabled.

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:178](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/models/server-configuration.ts#L178)

___

### AutoDiscoveryTracing

• `Optional` **AutoDiscoveryTracing**: `boolean`

Gets or sets a value indicating whether Autodiscovery tracing is enabled.

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:172](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/models/server-configuration.ts#L172)

___

### BaseUrl

• `Optional` **BaseUrl**: ``null`` \| `string`

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:364](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/models/server-configuration.ts#L364)

___

### CachePath

• `Optional` **CachePath**: ``null`` \| `string`

Gets or sets the cache path.

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:46](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/models/server-configuration.ts#L46)

___

### CertificatePassword

• `Optional` **CertificatePassword**: ``null`` \| `string`

Gets or sets the password required to access the X.509 certificate data in the file specified by MediaBrowser.Model.Configuration.ServerConfiguration.CertificatePath.

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:220](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/models/server-configuration.ts#L220)

___

### CertificatePath

• `Optional` **CertificatePath**: ``null`` \| `string`

Gets or sets the filesystem path of an X.509 certificate to use for SSL.

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:214](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/models/server-configuration.ts#L214)

___

### CodecsUsed

• `Optional` **CodecsUsed**: ``null`` \| `string`[]

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:424](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/models/server-configuration.ts#L424)

___

### ContentTypes

• `Optional` **ContentTypes**: ``null`` \| [`NameValuePair`](generated_client.NameValuePair.md)[]

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:382](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/models/server-configuration.ts#L382)

___

### CorsHosts

• `Optional` **CorsHosts**: ``null`` \| `string`[]

Gets or sets the cors hosts.

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:496](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/models/server-configuration.ts#L496)

___

### DisableLiveTvChannelUserDataName

• `Optional` **DisableLiveTvChannelUserDataName**: `boolean`

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:250](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/models/server-configuration.ts#L250)

___

### DisplaySpecialsWithinSeasons

• `Optional` **DisplaySpecialsWithinSeasons**: `boolean`

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:406](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/models/server-configuration.ts#L406)

___

### EnableCaseSensitiveItemIds

• `Optional` **EnableCaseSensitiveItemIds**: `boolean`

Gets or sets a value indicating whether [enable case sensitive item ids].

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:244](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/models/server-configuration.ts#L244)

___

### EnableDashboardResponseCaching

• `Optional` **EnableDashboardResponseCaching**: `boolean`

Gets or sets a value indicating whether [enable dashboard response caching].  Allows potential contributors without visual studio to modify production dashboard code and test changes.

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:334](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/models/server-configuration.ts#L334)

___

### EnableExternalContentInSuggestions

• `Optional` **EnableExternalContentInSuggestions**: `boolean`

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:436](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/models/server-configuration.ts#L436)

___

### EnableFolderView

• `Optional` **EnableFolderView**: `boolean`

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:394](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/models/server-configuration.ts#L394)

___

### EnableGroupingIntoCollections

• `Optional` **EnableGroupingIntoCollections**: `boolean`

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:400](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/models/server-configuration.ts#L400)

___

### EnableHttps

• `Optional` **EnableHttps**: `boolean`

Gets or sets a value indicating whether to use HTTPS.

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:202](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/models/server-configuration.ts#L202)

___

### EnableIPV4

• `Optional` **EnableIPV4**: `boolean`

Gets or sets a value indicating whether IPV4 capability is enabled.

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:100](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/models/server-configuration.ts#L100)

___

### EnableIPV6

• `Optional` **EnableIPV6**: `boolean`

Gets or sets a value indicating whether IPV6 capability is enabled.

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:94](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/models/server-configuration.ts#L94)

___

### EnableMetrics

• `Optional` **EnableMetrics**: `boolean`

Gets or sets a value indicating whether to enable prometheus metrics exporting.

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:70](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/models/server-configuration.ts#L70)

___

### EnableMultiSocketBinding

• `Optional` **EnableMultiSocketBinding**: `boolean`

Gets a value indicating whether multi-socket binding is available.

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:148](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/models/server-configuration.ts#L148)

___

### EnableNewOmdbSupport

• `Optional` **EnableNewOmdbSupport**: `boolean`

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:448](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/models/server-configuration.ts#L448)

___

### EnableNormalizedItemByNameIds

• `Optional` **EnableNormalizedItemByNameIds**: `boolean`

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:208](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/models/server-configuration.ts#L208)

___

### EnableRemoteAccess

• `Optional` **EnableRemoteAccess**: `boolean`

Gets or sets a value indicating whether access outside of the LAN is permitted.

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:238](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/models/server-configuration.ts#L238)

___

### EnableSSDPTracing

• `Optional` **EnableSSDPTracing**: `boolean`

Gets or sets a value indicating whether detailed ssdp logs are sent to the console/log.  \"Emby.Dlna\": \"Debug\" must be set in logging.default.json for this property to work.

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:106](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/models/server-configuration.ts#L106)

___

### EnableSlowResponseWarning

• `Optional` **EnableSlowResponseWarning**: `boolean`

Gets or sets a value indicating whether slow server responses should be logged as a warning.

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:484](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/models/server-configuration.ts#L484)

___

### EnableUPnP

• `Optional` **EnableUPnP**: `boolean`

Gets or sets a value indicating whether to enable automatic port forwarding.

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:64](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/models/server-configuration.ts#L64)

___

### GatewayMonitorPeriod

• `Optional` **GatewayMonitorPeriod**: `number`

Gets or sets the time (in seconds) between the pings of SSDP gateway monitor.

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:142](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/models/server-configuration.ts#L142)

___

### HDHomerunPortRange

• `Optional` **HDHomerunPortRange**: ``null`` \| `string`

Gets or sets the ports that HDHomerun uses.

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:160](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/models/server-configuration.ts#L160)

___

### HttpServerPortNumber

• `Optional` **HttpServerPortNumber**: `number`

Gets or sets the HTTP server port number.

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:190](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/models/server-configuration.ts#L190)

___

### HttpsPortNumber

• `Optional` **HttpsPortNumber**: `number`

Gets or sets the HTTPS server port number.

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:196](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/models/server-configuration.ts#L196)

___

### IgnoreVirtualInterfaces

• `Optional` **IgnoreVirtualInterfaces**: `boolean`

Gets or sets a value indicating whether address names that match MediaBrowser.Model.Configuration.ServerConfiguration.VirtualInterfaceNames should be Ignore for the purposes of binding.

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:130](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/models/server-configuration.ts#L130)

___

### ImageExtractionTimeoutMs

• `Optional` **ImageExtractionTimeoutMs**: `number`

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:466](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/models/server-configuration.ts#L466)

___

### ImageSavingConvention

• `Optional` **ImageSavingConvention**: [`ImageSavingConvention`](../enums/generated_client.ImageSavingConvention.md)

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:340](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/models/server-configuration.ts#L340)

___

### IsPortAuthorized

• `Optional` **IsPortAuthorized**: `boolean`

Gets or sets a value indicating whether this instance is port authorized.

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:226](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/models/server-configuration.ts#L226)

___

### IsRemoteIPFilterBlacklist

• `Optional` **IsRemoteIPFilterBlacklist**: `boolean`

Gets or sets a value indicating whether <seealso cref=\"P:MediaBrowser.Model.Configuration.ServerConfiguration.RemoteIPFilter\" /> contains a blacklist or a whitelist. Default is a whitelist.

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:460](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/models/server-configuration.ts#L460)

___

### IsStartupWizardCompleted

• `Optional` **IsStartupWizardCompleted**: `boolean`

Gets or sets a value indicating whether this instance is first run.

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:40](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/models/server-configuration.ts#L40)

___

### KnownProxies

• `Optional` **KnownProxies**: ``null`` \| `string`[]

Gets or sets the known proxies.

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:502](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/models/server-configuration.ts#L502)

___

### LibraryMetadataRefreshConcurrency

• `Optional` **LibraryMetadataRefreshConcurrency**: `number`

Gets or sets the how many metadata refreshes can run concurrently.

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:520](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/models/server-configuration.ts#L520)

___

### LibraryMonitorDelay

• `Optional` **LibraryMonitorDelay**: `number`

Gets or sets the delay in seconds that we will wait after a file system change to try and discover what has been added/removed  Some delay is necessary with some items because their creation is not atomic.  It involves the creation of several  different directories and files.

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:328](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/models/server-configuration.ts#L328)

___

### LibraryScanFanoutConcurrency

• `Optional` **LibraryScanFanoutConcurrency**: `number`

Gets or sets the how the library scan fans out.

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:514](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/models/server-configuration.ts#L514)

___

### LocalNetworkAddresses

• `Optional` **LocalNetworkAddresses**: ``null`` \| `string`[]

Gets or sets the interface addresses which Jellyfin will bind to. If empty, all interfaces will be used.

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:418](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/models/server-configuration.ts#L418)

___

### LocalNetworkSubnets

• `Optional` **LocalNetworkSubnets**: ``null`` \| `string`[]

Gets or sets the subnets that are deemed to make up the LAN.

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:412](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/models/server-configuration.ts#L412)

___

### LogFileRetentionDays

• `Optional` **LogFileRetentionDays**: `number`

Gets or sets the number of days we should retain log files.

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:34](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/models/server-configuration.ts#L34)

___

### MaxAudiobookResume

• `Optional` **MaxAudiobookResume**: `number`

Gets or sets the remaining minutes of a book that can be played while still saving playstate. If this percentage is crossed playstate will be reset to the beginning and the item will be marked watched.

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:322](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/models/server-configuration.ts#L322)

___

### MaxResumePct

• `Optional` **MaxResumePct**: `number`

Gets or sets the maximum percentage of an item that can be played while still saving playstate. If this percentage is crossed playstate will be reset to the beginning and the item will be marked watched.

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:304](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/models/server-configuration.ts#L304)

___

### MetadataCountryCode

• `Optional` **MetadataCountryCode**: ``null`` \| `string`

Gets or sets the metadata country code.

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:274](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/models/server-configuration.ts#L274)

___

### MetadataNetworkPath

• `Optional` **MetadataNetworkPath**: ``null`` \| `string`

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:262](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/models/server-configuration.ts#L262)

___

### MetadataOptions

• `Optional` **MetadataOptions**: ``null`` \| [`MetadataOptions`](generated_client.MetadataOptions.md)[]

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:346](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/models/server-configuration.ts#L346)

___

### MetadataPath

• `Optional` **MetadataPath**: ``null`` \| `string`

Gets or sets the metadata path.

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:256](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/models/server-configuration.ts#L256)

___

### MinAudiobookResume

• `Optional` **MinAudiobookResume**: `number`

Gets or sets the minimum minutes of a book that must be played in order for playstate to be updated.

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:316](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/models/server-configuration.ts#L316)

___

### MinResumeDurationSeconds

• `Optional` **MinResumeDurationSeconds**: `number`

Gets or sets the minimum duration that an item must have in order to be eligible for playstate updates..

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:310](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/models/server-configuration.ts#L310)

___

### MinResumePct

• `Optional` **MinResumePct**: `number`

Gets or sets the minimum percentage of an item that must be played in order for playstate to be updated.

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:298](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/models/server-configuration.ts#L298)

___

### PathSubstitutions

• `Optional` **PathSubstitutions**: ``null`` \| [`PathSubstitution`](generated_client.PathSubstitution.md)[]

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:472](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/models/server-configuration.ts#L472)

___

### PluginRepositories

• `Optional` **PluginRepositories**: ``null`` \| [`RepositoryInfo`](generated_client.RepositoryInfo.md)[]

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:430](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/models/server-configuration.ts#L430)

___

### PreferredMetadataLanguage

• `Optional` **PreferredMetadataLanguage**: ``null`` \| `string`

Gets or sets the preferred metadata language.

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:268](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/models/server-configuration.ts#L268)

___

### PreviousVersion

• `Optional` **PreviousVersion**: [`Version`](generated_client.Version.md)

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:52](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/models/server-configuration.ts#L52)

___

### PreviousVersionStr

• `Optional` **PreviousVersionStr**: ``null`` \| `string`

Gets or sets the stringified PreviousVersion to be stored/loaded,  because System.Version itself isn\'t xml-serializable.

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:58](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/models/server-configuration.ts#L58)

___

### PublicHttpsPort

• `Optional` **PublicHttpsPort**: `number`

Gets or sets the public HTTPS port.

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:184](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/models/server-configuration.ts#L184)

___

### PublicPort

• `Optional` **PublicPort**: `number`

Gets or sets the public mapped port.

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:76](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/models/server-configuration.ts#L76)

___

### PublishedServerUriBySubnet

• `Optional` **PublishedServerUriBySubnet**: ``null`` \| `string`[]

Gets or sets PublishedServerUri to advertise for specific subnets.

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:166](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/models/server-configuration.ts#L166)

___

### QuickConnectAvailable

• `Optional` **QuickConnectAvailable**: `boolean`

Gets or sets a value indicating whether quick connect is available for use on this server.

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:232](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/models/server-configuration.ts#L232)

___

### RemoteClientBitrateLimit

• `Optional` **RemoteClientBitrateLimit**: `number`

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:388](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/models/server-configuration.ts#L388)

___

### RemoteIPFilter

• `Optional` **RemoteIPFilter**: ``null`` \| `string`[]

Gets or sets the filter for remote IP connectivity. Used in conjuntion with <seealso cref=\"P:MediaBrowser.Model.Configuration.ServerConfiguration.IsRemoteIPFilterBlacklist\" />.

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:454](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/models/server-configuration.ts#L454)

___

### RemoveOldPlugins

• `Optional` **RemoveOldPlugins**: `boolean`

Gets or sets a value indicating whether older plugins should automatically be deleted from the plugin folder.

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:526](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/models/server-configuration.ts#L526)

___

### RequireHttps

• `Optional` **RequireHttps**: `boolean`

Gets or sets a value indicating whether the server should force connections over HTTPS.

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:442](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/models/server-configuration.ts#L442)

___

### SSDPTracingFilter

• `Optional` **SSDPTracingFilter**: ``null`` \| `string`

Gets or sets a value indicating whether an IP address is to be used to filter the detailed ssdp logs that are being sent to the console/log.  If the setting \"Emby.Dlna\": \"Debug\" msut be set in logging.default.json for this property to work.

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:112](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/models/server-configuration.ts#L112)

___

### SaveMetadataHidden

• `Optional` **SaveMetadataHidden**: `boolean`

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:376](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/models/server-configuration.ts#L376)

___

### ServerName

• `Optional` **ServerName**: ``null`` \| `string`

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:358](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/models/server-configuration.ts#L358)

___

### SkipDeserializationForBasicTypes

• `Optional` **SkipDeserializationForBasicTypes**: `boolean`

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:352](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/models/server-configuration.ts#L352)

___

### SlowResponseThresholdMs

• `Optional` **SlowResponseThresholdMs**: `number`

Gets or sets the threshold for the slow response time warning in ms.

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:490](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/models/server-configuration.ts#L490)

___

### SortRemoveCharacters

• `Optional` **SortRemoveCharacters**: ``null`` \| `string`[]

Gets or sets characters to be removed from strings to create a sort name.

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:286](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/models/server-configuration.ts#L286)

___

### SortRemoveWords

• `Optional` **SortRemoveWords**: ``null`` \| `string`[]

Gets or sets words to be removed from strings to create a sort name.

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:292](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/models/server-configuration.ts#L292)

___

### SortReplaceCharacters

• `Optional` **SortReplaceCharacters**: ``null`` \| `string`[]

Gets or sets characters to be replaced with a \' \' in strings to create a sort name.

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:280](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/models/server-configuration.ts#L280)

___

### TrustAllIP6Interfaces

• `Optional` **TrustAllIP6Interfaces**: `boolean`

Gets or sets a value indicating whether all IPv6 interfaces should be treated as on the internal network.  Depending on the address range implemented ULA ranges might not be used.

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:154](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/models/server-configuration.ts#L154)

___

### UDPPortRange

• `Optional` **UDPPortRange**: ``null`` \| `string`

Gets or sets client udp port range.

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:88](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/models/server-configuration.ts#L88)

___

### UDPSendCount

• `Optional` **UDPSendCount**: `number`

Gets or sets the number of times SSDP UDP messages are sent.

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:118](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/models/server-configuration.ts#L118)

___

### UDPSendDelay

• `Optional` **UDPSendDelay**: `number`

Gets or sets the delay between each groups of SSDP messages (in ms).

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:124](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/models/server-configuration.ts#L124)

___

### UICulture

• `Optional` **UICulture**: ``null`` \| `string`

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:370](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/models/server-configuration.ts#L370)

___

### UPnPCreateHttpPortMap

• `Optional` **UPnPCreateHttpPortMap**: `boolean`

Gets or sets a value indicating whether the http port should be mapped as part of UPnP automatic port forwarding.

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:82](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/models/server-configuration.ts#L82)

___

### UninstalledPlugins

• `Optional` **UninstalledPlugins**: ``null`` \| `string`[]

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:478](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/models/server-configuration.ts#L478)

___

### VirtualInterfaceNames

• `Optional` **VirtualInterfaceNames**: ``null`` \| `string`

Gets or sets a value indicating the interfaces that should be ignored. The list can be comma separated. <seealso cref=\"P:MediaBrowser.Model.Configuration.ServerConfiguration.IgnoreVirtualInterfaces\" />.

**`memberof`** ServerConfiguration

#### Defined in

[generated-client/models/server-configuration.ts:136](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/models/server-configuration.ts#L136)
