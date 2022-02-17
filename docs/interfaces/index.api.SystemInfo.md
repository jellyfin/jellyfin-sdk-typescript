[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / [api](../modules/index.api.md) / SystemInfo

# Interface: SystemInfo

[index](../modules/index.md).[api](../modules/index.api.md).SystemInfo

Class SystemInfo.

**`export`**

**`interface`** SystemInfo

## Table of contents

### Properties

- [CachePath](index.api.SystemInfo.md#cachepath)
- [CanLaunchWebBrowser](index.api.SystemInfo.md#canlaunchwebbrowser)
- [CanSelfRestart](index.api.SystemInfo.md#canselfrestart)
- [CompletedInstallations](index.api.SystemInfo.md#completedinstallations)
- [EncoderLocation](index.api.SystemInfo.md#encoderlocation)
- [HasPendingRestart](index.api.SystemInfo.md#haspendingrestart)
- [HasUpdateAvailable](index.api.SystemInfo.md#hasupdateavailable)
- [Id](index.api.SystemInfo.md#id)
- [InternalMetadataPath](index.api.SystemInfo.md#internalmetadatapath)
- [IsShuttingDown](index.api.SystemInfo.md#isshuttingdown)
- [ItemsByNamePath](index.api.SystemInfo.md#itemsbynamepath)
- [LocalAddress](index.api.SystemInfo.md#localaddress)
- [LogPath](index.api.SystemInfo.md#logpath)
- [OperatingSystem](index.api.SystemInfo.md#operatingsystem)
- [OperatingSystemDisplayName](index.api.SystemInfo.md#operatingsystemdisplayname)
- [PackageName](index.api.SystemInfo.md#packagename)
- [ProductName](index.api.SystemInfo.md#productname)
- [ProgramDataPath](index.api.SystemInfo.md#programdatapath)
- [ServerName](index.api.SystemInfo.md#servername)
- [StartupWizardCompleted](index.api.SystemInfo.md#startupwizardcompleted)
- [SupportsLibraryMonitor](index.api.SystemInfo.md#supportslibrarymonitor)
- [SystemArchitecture](index.api.SystemInfo.md#systemarchitecture)
- [TranscodingTempPath](index.api.SystemInfo.md#transcodingtemppath)
- [Version](index.api.SystemInfo.md#version)
- [WebPath](index.api.SystemInfo.md#webpath)
- [WebSocketPortNumber](index.api.SystemInfo.md#websocketportnumber)

## Properties

### CachePath

• `Optional` **CachePath**: ``null`` \| `string`

Gets or sets the cache path.

**`memberof`** SystemInfo

#### Defined in

[generated-client/models/system-info.ts:145](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/system-info.ts#L145)

___

### CanLaunchWebBrowser

• `Optional` **CanLaunchWebBrowser**: `boolean`

**`memberof`** SystemInfo

#### Defined in

[generated-client/models/system-info.ts:121](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/system-info.ts#L121)

___

### CanSelfRestart

• `Optional` **CanSelfRestart**: `boolean`

Gets or sets a value indicating whether this instance can self restart.

**`memberof`** SystemInfo

#### Defined in

[generated-client/models/system-info.ts:115](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/system-info.ts#L115)

___

### CompletedInstallations

• `Optional` **CompletedInstallations**: ``null`` \| [`InstallationInfo`](index.api.InstallationInfo.md)[]

Gets or sets the completed installations.

**`memberof`** SystemInfo

#### Defined in

[generated-client/models/system-info.ts:109](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/system-info.ts#L109)

___

### EncoderLocation

• `Optional` **EncoderLocation**: [`FFmpegLocation`](../enums/index.api.FFmpegLocation.md)

**`memberof`** SystemInfo

#### Defined in

[generated-client/models/system-info.ts:175](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/system-info.ts#L175)

___

### HasPendingRestart

• `Optional` **HasPendingRestart**: `boolean`

Gets or sets a value indicating whether this instance has pending restart.

**`memberof`** SystemInfo

#### Defined in

[generated-client/models/system-info.ts:85](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/system-info.ts#L85)

___

### HasUpdateAvailable

• `Optional` **HasUpdateAvailable**: `boolean`

Gets or sets a value indicating whether this instance has update available.

**`memberof`** SystemInfo

#### Defined in

[generated-client/models/system-info.ts:169](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/system-info.ts#L169)

___

### Id

• `Optional` **Id**: ``null`` \| `string`

Gets or sets the id.

**`memberof`** SystemInfo

#### Defined in

[generated-client/models/system-info.ts:61](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/system-info.ts#L61)

___

### InternalMetadataPath

• `Optional` **InternalMetadataPath**: ``null`` \| `string`

Gets or sets the internal metadata path.

**`memberof`** SystemInfo

#### Defined in

[generated-client/models/system-info.ts:157](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/system-info.ts#L157)

___

### IsShuttingDown

• `Optional` **IsShuttingDown**: `boolean`

**`memberof`** SystemInfo

#### Defined in

[generated-client/models/system-info.ts:91](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/system-info.ts#L91)

___

### ItemsByNamePath

• `Optional` **ItemsByNamePath**: ``null`` \| `string`

Gets or sets the items by name path.

**`memberof`** SystemInfo

#### Defined in

[generated-client/models/system-info.ts:139](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/system-info.ts#L139)

___

### LocalAddress

• `Optional` **LocalAddress**: ``null`` \| `string`

Gets or sets the local address.

**`memberof`** SystemInfo

#### Defined in

[generated-client/models/system-info.ts:31](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/system-info.ts#L31)

___

### LogPath

• `Optional` **LogPath**: ``null`` \| `string`

Gets or sets the log path.

**`memberof`** SystemInfo

#### Defined in

[generated-client/models/system-info.ts:151](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/system-info.ts#L151)

___

### OperatingSystem

• `Optional` **OperatingSystem**: ``null`` \| `string`

Gets or sets the operating system.

**`memberof`** SystemInfo

#### Defined in

[generated-client/models/system-info.ts:55](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/system-info.ts#L55)

___

### OperatingSystemDisplayName

• `Optional` **OperatingSystemDisplayName**: ``null`` \| `string`

Gets or sets the display name of the operating system.

**`memberof`** SystemInfo

#### Defined in

[generated-client/models/system-info.ts:73](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/system-info.ts#L73)

___

### PackageName

• `Optional` **PackageName**: ``null`` \| `string`

Get or sets the package name.

**`memberof`** SystemInfo

#### Defined in

[generated-client/models/system-info.ts:79](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/system-info.ts#L79)

___

### ProductName

• `Optional` **ProductName**: ``null`` \| `string`

Gets or sets the product name. This is the AssemblyProduct name.

**`memberof`** SystemInfo

#### Defined in

[generated-client/models/system-info.ts:49](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/system-info.ts#L49)

___

### ProgramDataPath

• `Optional` **ProgramDataPath**: ``null`` \| `string`

Gets or sets the program data path.

**`memberof`** SystemInfo

#### Defined in

[generated-client/models/system-info.ts:127](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/system-info.ts#L127)

___

### ServerName

• `Optional` **ServerName**: ``null`` \| `string`

Gets or sets the name of the server.

**`memberof`** SystemInfo

#### Defined in

[generated-client/models/system-info.ts:37](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/system-info.ts#L37)

___

### StartupWizardCompleted

• `Optional` **StartupWizardCompleted**: ``null`` \| `boolean`

Gets or sets a value indicating whether the startup wizard is completed.

**`memberof`** SystemInfo

#### Defined in

[generated-client/models/system-info.ts:67](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/system-info.ts#L67)

___

### SupportsLibraryMonitor

• `Optional` **SupportsLibraryMonitor**: `boolean`

Gets or sets a value indicating whether [supports library monitor].

**`memberof`** SystemInfo

#### Defined in

[generated-client/models/system-info.ts:97](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/system-info.ts#L97)

___

### SystemArchitecture

• `Optional` **SystemArchitecture**: [`Architecture`](../enums/index.api.Architecture.md)

**`memberof`** SystemInfo

#### Defined in

[generated-client/models/system-info.ts:181](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/system-info.ts#L181)

___

### TranscodingTempPath

• `Optional` **TranscodingTempPath**: ``null`` \| `string`

Gets or sets the transcode path.

**`memberof`** SystemInfo

#### Defined in

[generated-client/models/system-info.ts:163](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/system-info.ts#L163)

___

### Version

• `Optional` **Version**: ``null`` \| `string`

Gets or sets the server version.

**`memberof`** SystemInfo

#### Defined in

[generated-client/models/system-info.ts:43](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/system-info.ts#L43)

___

### WebPath

• `Optional` **WebPath**: ``null`` \| `string`

Gets or sets the web UI resources path.

**`memberof`** SystemInfo

#### Defined in

[generated-client/models/system-info.ts:133](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/system-info.ts#L133)

___

### WebSocketPortNumber

• `Optional` **WebSocketPortNumber**: `number`

Gets or sets the web socket port number.

**`memberof`** SystemInfo

#### Defined in

[generated-client/models/system-info.ts:103](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/system-info.ts#L103)
