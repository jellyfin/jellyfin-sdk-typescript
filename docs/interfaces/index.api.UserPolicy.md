[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / [api](../modules/index.api.md) / UserPolicy

# Interface: UserPolicy

[index](../modules/index.md).[api](../modules/index.api.md).UserPolicy

**`export`**

**`interface`** UserPolicy

## Table of contents

### Properties

- [AccessSchedules](index.api.UserPolicy.md#accessschedules)
- [AuthenticationProviderId](index.api.UserPolicy.md#authenticationproviderid)
- [BlockUnratedItems](index.api.UserPolicy.md#blockunrateditems)
- [BlockedChannels](index.api.UserPolicy.md#blockedchannels)
- [BlockedMediaFolders](index.api.UserPolicy.md#blockedmediafolders)
- [BlockedTags](index.api.UserPolicy.md#blockedtags)
- [EnableAllChannels](index.api.UserPolicy.md#enableallchannels)
- [EnableAllDevices](index.api.UserPolicy.md#enablealldevices)
- [EnableAllFolders](index.api.UserPolicy.md#enableallfolders)
- [EnableAudioPlaybackTranscoding](index.api.UserPolicy.md#enableaudioplaybacktranscoding)
- [EnableContentDeletion](index.api.UserPolicy.md#enablecontentdeletion)
- [EnableContentDeletionFromFolders](index.api.UserPolicy.md#enablecontentdeletionfromfolders)
- [EnableContentDownloading](index.api.UserPolicy.md#enablecontentdownloading)
- [EnableLiveTvAccess](index.api.UserPolicy.md#enablelivetvaccess)
- [EnableLiveTvManagement](index.api.UserPolicy.md#enablelivetvmanagement)
- [EnableMediaConversion](index.api.UserPolicy.md#enablemediaconversion)
- [EnableMediaPlayback](index.api.UserPolicy.md#enablemediaplayback)
- [EnablePlaybackRemuxing](index.api.UserPolicy.md#enableplaybackremuxing)
- [EnablePublicSharing](index.api.UserPolicy.md#enablepublicsharing)
- [EnableRemoteAccess](index.api.UserPolicy.md#enableremoteaccess)
- [EnableRemoteControlOfOtherUsers](index.api.UserPolicy.md#enableremotecontrolofotherusers)
- [EnableSharedDeviceControl](index.api.UserPolicy.md#enableshareddevicecontrol)
- [EnableSyncTranscoding](index.api.UserPolicy.md#enablesynctranscoding)
- [EnableUserPreferenceAccess](index.api.UserPolicy.md#enableuserpreferenceaccess)
- [EnableVideoPlaybackTranscoding](index.api.UserPolicy.md#enablevideoplaybacktranscoding)
- [EnabledChannels](index.api.UserPolicy.md#enabledchannels)
- [EnabledDevices](index.api.UserPolicy.md#enableddevices)
- [EnabledFolders](index.api.UserPolicy.md#enabledfolders)
- [ForceRemoteSourceTranscoding](index.api.UserPolicy.md#forceremotesourcetranscoding)
- [InvalidLoginAttemptCount](index.api.UserPolicy.md#invalidloginattemptcount)
- [IsAdministrator](index.api.UserPolicy.md#isadministrator)
- [IsDisabled](index.api.UserPolicy.md#isdisabled)
- [IsHidden](index.api.UserPolicy.md#ishidden)
- [LoginAttemptsBeforeLockout](index.api.UserPolicy.md#loginattemptsbeforelockout)
- [MaxActiveSessions](index.api.UserPolicy.md#maxactivesessions)
- [MaxParentalRating](index.api.UserPolicy.md#maxparentalrating)
- [PasswordResetProviderId](index.api.UserPolicy.md#passwordresetproviderid)
- [RemoteClientBitrateLimit](index.api.UserPolicy.md#remoteclientbitratelimit)
- [SyncPlayAccess](index.api.UserPolicy.md#syncplayaccess)

## Properties

### AccessSchedules

• `Optional` **AccessSchedules**: ``null`` \| [`AccessSchedule`](index.api.AccessSchedule.md)[]

**`memberof`** UserPolicy

#### Defined in

[generated-client/models/user-policy.ts:67](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/user-policy.ts#L67)

___

### AuthenticationProviderId

• `Optional` **AuthenticationProviderId**: ``null`` \| `string`

**`memberof`** UserPolicy

#### Defined in

[generated-client/models/user-policy.ts:247](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/user-policy.ts#L247)

___

### BlockUnratedItems

• `Optional` **BlockUnratedItems**: ``null`` \| [`UnratedItem`](../enums/index.api.UnratedItem.md)[]

**`memberof`** UserPolicy

#### Defined in

[generated-client/models/user-policy.ts:73](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/user-policy.ts#L73)

___

### BlockedChannels

• `Optional` **BlockedChannels**: ``null`` \| `string`[]

**`memberof`** UserPolicy

#### Defined in

[generated-client/models/user-policy.ts:235](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/user-policy.ts#L235)

___

### BlockedMediaFolders

• `Optional` **BlockedMediaFolders**: ``null`` \| `string`[]

**`memberof`** UserPolicy

#### Defined in

[generated-client/models/user-policy.ts:229](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/user-policy.ts#L229)

___

### BlockedTags

• `Optional` **BlockedTags**: ``null`` \| `string`[]

**`memberof`** UserPolicy

#### Defined in

[generated-client/models/user-policy.ts:55](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/user-policy.ts#L55)

___

### EnableAllChannels

• `Optional` **EnableAllChannels**: `boolean`

**`memberof`** UserPolicy

#### Defined in

[generated-client/models/user-policy.ts:187](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/user-policy.ts#L187)

___

### EnableAllDevices

• `Optional` **EnableAllDevices**: `boolean`

**`memberof`** UserPolicy

#### Defined in

[generated-client/models/user-policy.ts:175](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/user-policy.ts#L175)

___

### EnableAllFolders

• `Optional` **EnableAllFolders**: `boolean`

**`memberof`** UserPolicy

#### Defined in

[generated-client/models/user-policy.ts:199](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/user-policy.ts#L199)

___

### EnableAudioPlaybackTranscoding

• `Optional` **EnableAudioPlaybackTranscoding**: `boolean`

**`memberof`** UserPolicy

#### Defined in

[generated-client/models/user-policy.ts:115](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/user-policy.ts#L115)

___

### EnableContentDeletion

• `Optional` **EnableContentDeletion**: `boolean`

**`memberof`** UserPolicy

#### Defined in

[generated-client/models/user-policy.ts:139](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/user-policy.ts#L139)

___

### EnableContentDeletionFromFolders

• `Optional` **EnableContentDeletionFromFolders**: ``null`` \| `string`[]

**`memberof`** UserPolicy

#### Defined in

[generated-client/models/user-policy.ts:145](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/user-policy.ts#L145)

___

### EnableContentDownloading

• `Optional` **EnableContentDownloading**: `boolean`

**`memberof`** UserPolicy

#### Defined in

[generated-client/models/user-policy.ts:151](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/user-policy.ts#L151)

___

### EnableLiveTvAccess

• `Optional` **EnableLiveTvAccess**: `boolean`

**`memberof`** UserPolicy

#### Defined in

[generated-client/models/user-policy.ts:103](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/user-policy.ts#L103)

___

### EnableLiveTvManagement

• `Optional` **EnableLiveTvManagement**: `boolean`

**`memberof`** UserPolicy

#### Defined in

[generated-client/models/user-policy.ts:97](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/user-policy.ts#L97)

___

### EnableMediaConversion

• `Optional` **EnableMediaConversion**: `boolean`

**`memberof`** UserPolicy

#### Defined in

[generated-client/models/user-policy.ts:163](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/user-policy.ts#L163)

___

### EnableMediaPlayback

• `Optional` **EnableMediaPlayback**: `boolean`

**`memberof`** UserPolicy

#### Defined in

[generated-client/models/user-policy.ts:109](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/user-policy.ts#L109)

___

### EnablePlaybackRemuxing

• `Optional` **EnablePlaybackRemuxing**: `boolean`

**`memberof`** UserPolicy

#### Defined in

[generated-client/models/user-policy.ts:127](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/user-policy.ts#L127)

___

### EnablePublicSharing

• `Optional` **EnablePublicSharing**: `boolean`

**`memberof`** UserPolicy

#### Defined in

[generated-client/models/user-policy.ts:223](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/user-policy.ts#L223)

___

### EnableRemoteAccess

• `Optional` **EnableRemoteAccess**: `boolean`

**`memberof`** UserPolicy

#### Defined in

[generated-client/models/user-policy.ts:91](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/user-policy.ts#L91)

___

### EnableRemoteControlOfOtherUsers

• `Optional` **EnableRemoteControlOfOtherUsers**: `boolean`

**`memberof`** UserPolicy

#### Defined in

[generated-client/models/user-policy.ts:79](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/user-policy.ts#L79)

___

### EnableSharedDeviceControl

• `Optional` **EnableSharedDeviceControl**: `boolean`

**`memberof`** UserPolicy

#### Defined in

[generated-client/models/user-policy.ts:85](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/user-policy.ts#L85)

___

### EnableSyncTranscoding

• `Optional` **EnableSyncTranscoding**: `boolean`

Gets or sets a value indicating whether [enable synchronize].

**`memberof`** UserPolicy

#### Defined in

[generated-client/models/user-policy.ts:157](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/user-policy.ts#L157)

___

### EnableUserPreferenceAccess

• `Optional` **EnableUserPreferenceAccess**: `boolean`

**`memberof`** UserPolicy

#### Defined in

[generated-client/models/user-policy.ts:61](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/user-policy.ts#L61)

___

### EnableVideoPlaybackTranscoding

• `Optional` **EnableVideoPlaybackTranscoding**: `boolean`

**`memberof`** UserPolicy

#### Defined in

[generated-client/models/user-policy.ts:121](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/user-policy.ts#L121)

___

### EnabledChannels

• `Optional` **EnabledChannels**: ``null`` \| `string`[]

**`memberof`** UserPolicy

#### Defined in

[generated-client/models/user-policy.ts:181](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/user-policy.ts#L181)

___

### EnabledDevices

• `Optional` **EnabledDevices**: ``null`` \| `string`[]

**`memberof`** UserPolicy

#### Defined in

[generated-client/models/user-policy.ts:169](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/user-policy.ts#L169)

___

### EnabledFolders

• `Optional` **EnabledFolders**: ``null`` \| `string`[]

**`memberof`** UserPolicy

#### Defined in

[generated-client/models/user-policy.ts:193](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/user-policy.ts#L193)

___

### ForceRemoteSourceTranscoding

• `Optional` **ForceRemoteSourceTranscoding**: `boolean`

**`memberof`** UserPolicy

#### Defined in

[generated-client/models/user-policy.ts:133](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/user-policy.ts#L133)

___

### InvalidLoginAttemptCount

• `Optional` **InvalidLoginAttemptCount**: `number`

**`memberof`** UserPolicy

#### Defined in

[generated-client/models/user-policy.ts:205](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/user-policy.ts#L205)

___

### IsAdministrator

• `Optional` **IsAdministrator**: `boolean`

Gets or sets a value indicating whether this instance is administrator.

**`memberof`** UserPolicy

#### Defined in

[generated-client/models/user-policy.ts:31](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/user-policy.ts#L31)

___

### IsDisabled

• `Optional` **IsDisabled**: `boolean`

Gets or sets a value indicating whether this instance is disabled.

**`memberof`** UserPolicy

#### Defined in

[generated-client/models/user-policy.ts:43](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/user-policy.ts#L43)

___

### IsHidden

• `Optional` **IsHidden**: `boolean`

Gets or sets a value indicating whether this instance is hidden.

**`memberof`** UserPolicy

#### Defined in

[generated-client/models/user-policy.ts:37](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/user-policy.ts#L37)

___

### LoginAttemptsBeforeLockout

• `Optional` **LoginAttemptsBeforeLockout**: `number`

**`memberof`** UserPolicy

#### Defined in

[generated-client/models/user-policy.ts:211](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/user-policy.ts#L211)

___

### MaxActiveSessions

• `Optional` **MaxActiveSessions**: `number`

**`memberof`** UserPolicy

#### Defined in

[generated-client/models/user-policy.ts:217](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/user-policy.ts#L217)

___

### MaxParentalRating

• `Optional` **MaxParentalRating**: ``null`` \| `number`

Gets or sets the max parental rating.

**`memberof`** UserPolicy

#### Defined in

[generated-client/models/user-policy.ts:49](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/user-policy.ts#L49)

___

### PasswordResetProviderId

• `Optional` **PasswordResetProviderId**: ``null`` \| `string`

**`memberof`** UserPolicy

#### Defined in

[generated-client/models/user-policy.ts:253](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/user-policy.ts#L253)

___

### RemoteClientBitrateLimit

• `Optional` **RemoteClientBitrateLimit**: `number`

**`memberof`** UserPolicy

#### Defined in

[generated-client/models/user-policy.ts:241](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/user-policy.ts#L241)

___

### SyncPlayAccess

• `Optional` **SyncPlayAccess**: [`SyncPlayUserAccessType`](../enums/index.api.SyncPlayUserAccessType.md)

**`memberof`** UserPolicy

#### Defined in

[generated-client/models/user-policy.ts:259](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/user-policy.ts#L259)
