[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / SessionInfo

# Interface: SessionInfo

[generated-client](../modules/generated_client.md).SessionInfo

Class SessionInfo.

**`export`**

**`interface`** SessionInfo

## Table of contents

### Properties

- [AdditionalUsers](generated_client.SessionInfo.md#additionalusers)
- [ApplicationVersion](generated_client.SessionInfo.md#applicationversion)
- [Capabilities](generated_client.SessionInfo.md#capabilities)
- [Client](generated_client.SessionInfo.md#client)
- [DeviceId](generated_client.SessionInfo.md#deviceid)
- [DeviceName](generated_client.SessionInfo.md#devicename)
- [DeviceType](generated_client.SessionInfo.md#devicetype)
- [FullNowPlayingItem](generated_client.SessionInfo.md#fullnowplayingitem)
- [HasCustomDeviceName](generated_client.SessionInfo.md#hascustomdevicename)
- [Id](generated_client.SessionInfo.md#id)
- [IsActive](generated_client.SessionInfo.md#isactive)
- [LastActivityDate](generated_client.SessionInfo.md#lastactivitydate)
- [LastPlaybackCheckIn](generated_client.SessionInfo.md#lastplaybackcheckin)
- [NowPlayingItem](generated_client.SessionInfo.md#nowplayingitem)
- [NowPlayingQueue](generated_client.SessionInfo.md#nowplayingqueue)
- [NowViewingItem](generated_client.SessionInfo.md#nowviewingitem)
- [PlayState](generated_client.SessionInfo.md#playstate)
- [PlayableMediaTypes](generated_client.SessionInfo.md#playablemediatypes)
- [PlaylistItemId](generated_client.SessionInfo.md#playlistitemid)
- [RemoteEndPoint](generated_client.SessionInfo.md#remoteendpoint)
- [ServerId](generated_client.SessionInfo.md#serverid)
- [SupportedCommands](generated_client.SessionInfo.md#supportedcommands)
- [SupportsMediaControl](generated_client.SessionInfo.md#supportsmediacontrol)
- [SupportsRemoteControl](generated_client.SessionInfo.md#supportsremotecontrol)
- [TranscodingInfo](generated_client.SessionInfo.md#transcodinginfo)
- [UserId](generated_client.SessionInfo.md#userid)
- [UserName](generated_client.SessionInfo.md#username)
- [UserPrimaryImageTag](generated_client.SessionInfo.md#userprimaryimagetag)

## Properties

### AdditionalUsers

• `Optional` **AdditionalUsers**: ``null`` \| [`SessionUserInfo`](generated_client.SessionUserInfo.md)[]

**`memberof`** SessionInfo

#### Defined in

[generated-client/models/session-info.ts:42](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/models/session-info.ts#L42)

___

### ApplicationVersion

• `Optional` **ApplicationVersion**: ``null`` \| `string`

Gets or sets the application version.

**`memberof`** SessionInfo

#### Defined in

[generated-client/models/session-info.ts:138](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/models/session-info.ts#L138)

___

### Capabilities

• `Optional` **Capabilities**: [`ClientCapabilities`](generated_client.ClientCapabilities.md)

**`memberof`** SessionInfo

#### Defined in

[generated-client/models/session-info.ts:48](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/models/session-info.ts#L48)

___

### Client

• `Optional` **Client**: ``null`` \| `string`

Gets or sets the type of the client.

**`memberof`** SessionInfo

#### Defined in

[generated-client/models/session-info.ts:84](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/models/session-info.ts#L84)

___

### DeviceId

• `Optional` **DeviceId**: ``null`` \| `string`

Gets or sets the device id.

**`memberof`** SessionInfo

#### Defined in

[generated-client/models/session-info.ts:132](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/models/session-info.ts#L132)

___

### DeviceName

• `Optional` **DeviceName**: ``null`` \| `string`

Gets or sets the name of the device.

**`memberof`** SessionInfo

#### Defined in

[generated-client/models/session-info.ts:102](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/models/session-info.ts#L102)

___

### DeviceType

• `Optional` **DeviceType**: ``null`` \| `string`

Gets or sets the type of the device.

**`memberof`** SessionInfo

#### Defined in

[generated-client/models/session-info.ts:108](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/models/session-info.ts#L108)

___

### FullNowPlayingItem

• `Optional` **FullNowPlayingItem**: [`BaseItem`](generated_client.BaseItem.md)

**`memberof`** SessionInfo

#### Defined in

[generated-client/models/session-info.ts:120](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/models/session-info.ts#L120)

___

### HasCustomDeviceName

• `Optional` **HasCustomDeviceName**: `boolean`

**`memberof`** SessionInfo

#### Defined in

[generated-client/models/session-info.ts:174](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/models/session-info.ts#L174)

___

### Id

• `Optional` **Id**: ``null`` \| `string`

Gets or sets the id.

**`memberof`** SessionInfo

#### Defined in

[generated-client/models/session-info.ts:66](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/models/session-info.ts#L66)

___

### IsActive

• `Optional` **IsActive**: `boolean`

Gets a value indicating whether this instance is active.

**`memberof`** SessionInfo

#### Defined in

[generated-client/models/session-info.ts:150](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/models/session-info.ts#L150)

___

### LastActivityDate

• `Optional` **LastActivityDate**: `string`

Gets or sets the last activity date.

**`memberof`** SessionInfo

#### Defined in

[generated-client/models/session-info.ts:90](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/models/session-info.ts#L90)

___

### LastPlaybackCheckIn

• `Optional` **LastPlaybackCheckIn**: `string`

Gets or sets the last playback check in.

**`memberof`** SessionInfo

#### Defined in

[generated-client/models/session-info.ts:96](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/models/session-info.ts#L96)

___

### NowPlayingItem

• `Optional` **NowPlayingItem**: [`BaseItemDto`](generated_client.BaseItemDto.md)

**`memberof`** SessionInfo

#### Defined in

[generated-client/models/session-info.ts:114](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/models/session-info.ts#L114)

___

### NowPlayingQueue

• `Optional` **NowPlayingQueue**: ``null`` \| [`QueueItem`](generated_client.QueueItem.md)[]

**`memberof`** SessionInfo

#### Defined in

[generated-client/models/session-info.ts:168](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/models/session-info.ts#L168)

___

### NowViewingItem

• `Optional` **NowViewingItem**: [`BaseItemDto`](generated_client.BaseItemDto.md)

**`memberof`** SessionInfo

#### Defined in

[generated-client/models/session-info.ts:126](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/models/session-info.ts#L126)

___

### PlayState

• `Optional` **PlayState**: [`PlayerStateInfo`](generated_client.PlayerStateInfo.md)

**`memberof`** SessionInfo

#### Defined in

[generated-client/models/session-info.ts:36](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/models/session-info.ts#L36)

___

### PlayableMediaTypes

• `Optional` **PlayableMediaTypes**: ``null`` \| `string`[]

Gets or sets the playable media types.

**`memberof`** SessionInfo

#### Defined in

[generated-client/models/session-info.ts:60](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/models/session-info.ts#L60)

___

### PlaylistItemId

• `Optional` **PlaylistItemId**: ``null`` \| `string`

**`memberof`** SessionInfo

#### Defined in

[generated-client/models/session-info.ts:180](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/models/session-info.ts#L180)

___

### RemoteEndPoint

• `Optional` **RemoteEndPoint**: ``null`` \| `string`

Gets or sets the remote end point.

**`memberof`** SessionInfo

#### Defined in

[generated-client/models/session-info.ts:54](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/models/session-info.ts#L54)

___

### ServerId

• `Optional` **ServerId**: ``null`` \| `string`

**`memberof`** SessionInfo

#### Defined in

[generated-client/models/session-info.ts:186](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/models/session-info.ts#L186)

___

### SupportedCommands

• `Optional` **SupportedCommands**: ``null`` \| [`GeneralCommandType`](../enums/generated_client.GeneralCommandType.md)[]

Gets or sets the supported commands.

**`memberof`** SessionInfo

#### Defined in

[generated-client/models/session-info.ts:198](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/models/session-info.ts#L198)

___

### SupportsMediaControl

• `Optional` **SupportsMediaControl**: `boolean`

**`memberof`** SessionInfo

#### Defined in

[generated-client/models/session-info.ts:156](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/models/session-info.ts#L156)

___

### SupportsRemoteControl

• `Optional` **SupportsRemoteControl**: `boolean`

**`memberof`** SessionInfo

#### Defined in

[generated-client/models/session-info.ts:162](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/models/session-info.ts#L162)

___

### TranscodingInfo

• `Optional` **TranscodingInfo**: [`TranscodingInfo`](generated_client.TranscodingInfo.md)

**`memberof`** SessionInfo

#### Defined in

[generated-client/models/session-info.ts:144](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/models/session-info.ts#L144)

___

### UserId

• `Optional` **UserId**: `string`

Gets or sets the user id.

**`memberof`** SessionInfo

#### Defined in

[generated-client/models/session-info.ts:72](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/models/session-info.ts#L72)

___

### UserName

• `Optional` **UserName**: ``null`` \| `string`

Gets or sets the username.

**`memberof`** SessionInfo

#### Defined in

[generated-client/models/session-info.ts:78](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/models/session-info.ts#L78)

___

### UserPrimaryImageTag

• `Optional` **UserPrimaryImageTag**: ``null`` \| `string`

**`memberof`** SessionInfo

#### Defined in

[generated-client/models/session-info.ts:192](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/models/session-info.ts#L192)
