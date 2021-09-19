[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / UserPolicy

# Interface: UserPolicy

[generated-client](../modules/generated_client.md).UserPolicy

**`export`**

**`interface`** UserPolicy

## Table of contents

### Properties

- [AccessSchedules](generated_client.UserPolicy.md#accessschedules)
- [AuthenticationProviderId](generated_client.UserPolicy.md#authenticationproviderid)
- [BlockUnratedItems](generated_client.UserPolicy.md#blockunrateditems)
- [BlockedChannels](generated_client.UserPolicy.md#blockedchannels)
- [BlockedMediaFolders](generated_client.UserPolicy.md#blockedmediafolders)
- [BlockedTags](generated_client.UserPolicy.md#blockedtags)
- [EnableAllChannels](generated_client.UserPolicy.md#enableallchannels)
- [EnableAllDevices](generated_client.UserPolicy.md#enablealldevices)
- [EnableAllFolders](generated_client.UserPolicy.md#enableallfolders)
- [EnableAudioPlaybackTranscoding](generated_client.UserPolicy.md#enableaudioplaybacktranscoding)
- [EnableContentDeletion](generated_client.UserPolicy.md#enablecontentdeletion)
- [EnableContentDeletionFromFolders](generated_client.UserPolicy.md#enablecontentdeletionfromfolders)
- [EnableContentDownloading](generated_client.UserPolicy.md#enablecontentdownloading)
- [EnableLiveTvAccess](generated_client.UserPolicy.md#enablelivetvaccess)
- [EnableLiveTvManagement](generated_client.UserPolicy.md#enablelivetvmanagement)
- [EnableMediaConversion](generated_client.UserPolicy.md#enablemediaconversion)
- [EnableMediaPlayback](generated_client.UserPolicy.md#enablemediaplayback)
- [EnablePlaybackRemuxing](generated_client.UserPolicy.md#enableplaybackremuxing)
- [EnablePublicSharing](generated_client.UserPolicy.md#enablepublicsharing)
- [EnableRemoteAccess](generated_client.UserPolicy.md#enableremoteaccess)
- [EnableRemoteControlOfOtherUsers](generated_client.UserPolicy.md#enableremotecontrolofotherusers)
- [EnableSharedDeviceControl](generated_client.UserPolicy.md#enableshareddevicecontrol)
- [EnableSyncTranscoding](generated_client.UserPolicy.md#enablesynctranscoding)
- [EnableUserPreferenceAccess](generated_client.UserPolicy.md#enableuserpreferenceaccess)
- [EnableVideoPlaybackTranscoding](generated_client.UserPolicy.md#enablevideoplaybacktranscoding)
- [EnabledChannels](generated_client.UserPolicy.md#enabledchannels)
- [EnabledDevices](generated_client.UserPolicy.md#enableddevices)
- [EnabledFolders](generated_client.UserPolicy.md#enabledfolders)
- [ForceRemoteSourceTranscoding](generated_client.UserPolicy.md#forceremotesourcetranscoding)
- [InvalidLoginAttemptCount](generated_client.UserPolicy.md#invalidloginattemptcount)
- [IsAdministrator](generated_client.UserPolicy.md#isadministrator)
- [IsDisabled](generated_client.UserPolicy.md#isdisabled)
- [IsHidden](generated_client.UserPolicy.md#ishidden)
- [LoginAttemptsBeforeLockout](generated_client.UserPolicy.md#loginattemptsbeforelockout)
- [MaxActiveSessions](generated_client.UserPolicy.md#maxactivesessions)
- [MaxParentalRating](generated_client.UserPolicy.md#maxparentalrating)
- [PasswordResetProviderId](generated_client.UserPolicy.md#passwordresetproviderid)
- [RemoteClientBitrateLimit](generated_client.UserPolicy.md#remoteclientbitratelimit)
- [SyncPlayAccess](generated_client.UserPolicy.md#syncplayaccess)

## Properties

### AccessSchedules

• `Optional` **AccessSchedules**: ``null`` \| [`AccessSchedule`](generated_client.AccessSchedule.md)[]

**`memberof`** UserPolicy

#### Defined in

[generated-client/models/user-policy.ts:67](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/models/user-policy.ts#L67)

___

### AuthenticationProviderId

• `Optional` **AuthenticationProviderId**: ``null`` \| `string`

**`memberof`** UserPolicy

#### Defined in

[generated-client/models/user-policy.ts:247](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/models/user-policy.ts#L247)

___

### BlockUnratedItems

• `Optional` **BlockUnratedItems**: ``null`` \| [`UnratedItem`](../enums/generated_client.UnratedItem.md)[]

**`memberof`** UserPolicy

#### Defined in

[generated-client/models/user-policy.ts:73](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/models/user-policy.ts#L73)

___

### BlockedChannels

• `Optional` **BlockedChannels**: ``null`` \| `string`[]

**`memberof`** UserPolicy

#### Defined in

[generated-client/models/user-policy.ts:235](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/models/user-policy.ts#L235)

___

### BlockedMediaFolders

• `Optional` **BlockedMediaFolders**: ``null`` \| `string`[]

**`memberof`** UserPolicy

#### Defined in

[generated-client/models/user-policy.ts:229](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/models/user-policy.ts#L229)

___

### BlockedTags

• `Optional` **BlockedTags**: ``null`` \| `string`[]

**`memberof`** UserPolicy

#### Defined in

[generated-client/models/user-policy.ts:55](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/models/user-policy.ts#L55)

___

### EnableAllChannels

• `Optional` **EnableAllChannels**: `boolean`

**`memberof`** UserPolicy

#### Defined in

[generated-client/models/user-policy.ts:187](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/models/user-policy.ts#L187)

___

### EnableAllDevices

• `Optional` **EnableAllDevices**: `boolean`

**`memberof`** UserPolicy

#### Defined in

[generated-client/models/user-policy.ts:175](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/models/user-policy.ts#L175)

___

### EnableAllFolders

• `Optional` **EnableAllFolders**: `boolean`

**`memberof`** UserPolicy

#### Defined in

[generated-client/models/user-policy.ts:199](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/models/user-policy.ts#L199)

___

### EnableAudioPlaybackTranscoding

• `Optional` **EnableAudioPlaybackTranscoding**: `boolean`

**`memberof`** UserPolicy

#### Defined in

[generated-client/models/user-policy.ts:115](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/models/user-policy.ts#L115)

___

### EnableContentDeletion

• `Optional` **EnableContentDeletion**: `boolean`

**`memberof`** UserPolicy

#### Defined in

[generated-client/models/user-policy.ts:139](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/models/user-policy.ts#L139)

___

### EnableContentDeletionFromFolders

• `Optional` **EnableContentDeletionFromFolders**: ``null`` \| `string`[]

**`memberof`** UserPolicy

#### Defined in

[generated-client/models/user-policy.ts:145](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/models/user-policy.ts#L145)

___

### EnableContentDownloading

• `Optional` **EnableContentDownloading**: `boolean`

**`memberof`** UserPolicy

#### Defined in

[generated-client/models/user-policy.ts:151](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/models/user-policy.ts#L151)

___

### EnableLiveTvAccess

• `Optional` **EnableLiveTvAccess**: `boolean`

**`memberof`** UserPolicy

#### Defined in

[generated-client/models/user-policy.ts:103](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/models/user-policy.ts#L103)

___

### EnableLiveTvManagement

• `Optional` **EnableLiveTvManagement**: `boolean`

**`memberof`** UserPolicy

#### Defined in

[generated-client/models/user-policy.ts:97](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/models/user-policy.ts#L97)

___

### EnableMediaConversion

• `Optional` **EnableMediaConversion**: `boolean`

**`memberof`** UserPolicy

#### Defined in

[generated-client/models/user-policy.ts:163](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/models/user-policy.ts#L163)

___

### EnableMediaPlayback

• `Optional` **EnableMediaPlayback**: `boolean`

**`memberof`** UserPolicy

#### Defined in

[generated-client/models/user-policy.ts:109](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/models/user-policy.ts#L109)

___

### EnablePlaybackRemuxing

• `Optional` **EnablePlaybackRemuxing**: `boolean`

**`memberof`** UserPolicy

#### Defined in

[generated-client/models/user-policy.ts:127](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/models/user-policy.ts#L127)

___

### EnablePublicSharing

• `Optional` **EnablePublicSharing**: `boolean`

**`memberof`** UserPolicy

#### Defined in

[generated-client/models/user-policy.ts:223](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/models/user-policy.ts#L223)

___

### EnableRemoteAccess

• `Optional` **EnableRemoteAccess**: `boolean`

**`memberof`** UserPolicy

#### Defined in

[generated-client/models/user-policy.ts:91](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/models/user-policy.ts#L91)

___

### EnableRemoteControlOfOtherUsers

• `Optional` **EnableRemoteControlOfOtherUsers**: `boolean`

**`memberof`** UserPolicy

#### Defined in

[generated-client/models/user-policy.ts:79](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/models/user-policy.ts#L79)

___

### EnableSharedDeviceControl

• `Optional` **EnableSharedDeviceControl**: `boolean`

**`memberof`** UserPolicy

#### Defined in

[generated-client/models/user-policy.ts:85](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/models/user-policy.ts#L85)

___

### EnableSyncTranscoding

• `Optional` **EnableSyncTranscoding**: `boolean`

Gets or sets a value indicating whether [enable synchronize].

**`memberof`** UserPolicy

#### Defined in

[generated-client/models/user-policy.ts:157](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/models/user-policy.ts#L157)

___

### EnableUserPreferenceAccess

• `Optional` **EnableUserPreferenceAccess**: `boolean`

**`memberof`** UserPolicy

#### Defined in

[generated-client/models/user-policy.ts:61](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/models/user-policy.ts#L61)

___

### EnableVideoPlaybackTranscoding

• `Optional` **EnableVideoPlaybackTranscoding**: `boolean`

**`memberof`** UserPolicy

#### Defined in

[generated-client/models/user-policy.ts:121](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/models/user-policy.ts#L121)

___

### EnabledChannels

• `Optional` **EnabledChannels**: ``null`` \| `string`[]

**`memberof`** UserPolicy

#### Defined in

[generated-client/models/user-policy.ts:181](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/models/user-policy.ts#L181)

___

### EnabledDevices

• `Optional` **EnabledDevices**: ``null`` \| `string`[]

**`memberof`** UserPolicy

#### Defined in

[generated-client/models/user-policy.ts:169](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/models/user-policy.ts#L169)

___

### EnabledFolders

• `Optional` **EnabledFolders**: ``null`` \| `string`[]

**`memberof`** UserPolicy

#### Defined in

[generated-client/models/user-policy.ts:193](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/models/user-policy.ts#L193)

___

### ForceRemoteSourceTranscoding

• `Optional` **ForceRemoteSourceTranscoding**: `boolean`

**`memberof`** UserPolicy

#### Defined in

[generated-client/models/user-policy.ts:133](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/models/user-policy.ts#L133)

___

### InvalidLoginAttemptCount

• `Optional` **InvalidLoginAttemptCount**: `number`

**`memberof`** UserPolicy

#### Defined in

[generated-client/models/user-policy.ts:205](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/models/user-policy.ts#L205)

___

### IsAdministrator

• `Optional` **IsAdministrator**: `boolean`

Gets or sets a value indicating whether this instance is administrator.

**`memberof`** UserPolicy

#### Defined in

[generated-client/models/user-policy.ts:31](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/models/user-policy.ts#L31)

___

### IsDisabled

• `Optional` **IsDisabled**: `boolean`

Gets or sets a value indicating whether this instance is disabled.

**`memberof`** UserPolicy

#### Defined in

[generated-client/models/user-policy.ts:43](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/models/user-policy.ts#L43)

___

### IsHidden

• `Optional` **IsHidden**: `boolean`

Gets or sets a value indicating whether this instance is hidden.

**`memberof`** UserPolicy

#### Defined in

[generated-client/models/user-policy.ts:37](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/models/user-policy.ts#L37)

___

### LoginAttemptsBeforeLockout

• `Optional` **LoginAttemptsBeforeLockout**: `number`

**`memberof`** UserPolicy

#### Defined in

[generated-client/models/user-policy.ts:211](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/models/user-policy.ts#L211)

___

### MaxActiveSessions

• `Optional` **MaxActiveSessions**: `number`

**`memberof`** UserPolicy

#### Defined in

[generated-client/models/user-policy.ts:217](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/models/user-policy.ts#L217)

___

### MaxParentalRating

• `Optional` **MaxParentalRating**: ``null`` \| `number`

Gets or sets the max parental rating.

**`memberof`** UserPolicy

#### Defined in

[generated-client/models/user-policy.ts:49](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/models/user-policy.ts#L49)

___

### PasswordResetProviderId

• `Optional` **PasswordResetProviderId**: ``null`` \| `string`

**`memberof`** UserPolicy

#### Defined in

[generated-client/models/user-policy.ts:253](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/models/user-policy.ts#L253)

___

### RemoteClientBitrateLimit

• `Optional` **RemoteClientBitrateLimit**: `number`

**`memberof`** UserPolicy

#### Defined in

[generated-client/models/user-policy.ts:241](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/models/user-policy.ts#L241)

___

### SyncPlayAccess

• `Optional` **SyncPlayAccess**: [`SyncPlayUserAccessType`](../enums/generated_client.SyncPlayUserAccessType.md)

**`memberof`** UserPolicy

#### Defined in

[generated-client/models/user-policy.ts:259](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/models/user-policy.ts#L259)
