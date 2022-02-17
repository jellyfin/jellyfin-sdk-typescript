[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / [api](../modules/index.api.md) / SessionInfo

# Interface: SessionInfo

[index](../modules/index.md).[api](../modules/index.api.md).SessionInfo

Class SessionInfo.

**`export`**

**`interface`** SessionInfo

## Table of contents

### Properties

- [AdditionalUsers](index.api.SessionInfo.md#additionalusers)
- [ApplicationVersion](index.api.SessionInfo.md#applicationversion)
- [Capabilities](index.api.SessionInfo.md#capabilities)
- [Client](index.api.SessionInfo.md#client)
- [DeviceId](index.api.SessionInfo.md#deviceid)
- [DeviceName](index.api.SessionInfo.md#devicename)
- [DeviceType](index.api.SessionInfo.md#devicetype)
- [FullNowPlayingItem](index.api.SessionInfo.md#fullnowplayingitem)
- [HasCustomDeviceName](index.api.SessionInfo.md#hascustomdevicename)
- [Id](index.api.SessionInfo.md#id)
- [IsActive](index.api.SessionInfo.md#isactive)
- [LastActivityDate](index.api.SessionInfo.md#lastactivitydate)
- [LastPlaybackCheckIn](index.api.SessionInfo.md#lastplaybackcheckin)
- [NowPlayingItem](index.api.SessionInfo.md#nowplayingitem)
- [NowPlayingQueue](index.api.SessionInfo.md#nowplayingqueue)
- [NowViewingItem](index.api.SessionInfo.md#nowviewingitem)
- [PlayState](index.api.SessionInfo.md#playstate)
- [PlayableMediaTypes](index.api.SessionInfo.md#playablemediatypes)
- [PlaylistItemId](index.api.SessionInfo.md#playlistitemid)
- [RemoteEndPoint](index.api.SessionInfo.md#remoteendpoint)
- [ServerId](index.api.SessionInfo.md#serverid)
- [SupportedCommands](index.api.SessionInfo.md#supportedcommands)
- [SupportsMediaControl](index.api.SessionInfo.md#supportsmediacontrol)
- [SupportsRemoteControl](index.api.SessionInfo.md#supportsremotecontrol)
- [TranscodingInfo](index.api.SessionInfo.md#transcodinginfo)
- [UserId](index.api.SessionInfo.md#userid)
- [UserName](index.api.SessionInfo.md#username)
- [UserPrimaryImageTag](index.api.SessionInfo.md#userprimaryimagetag)

## Properties

### AdditionalUsers

• `Optional` **AdditionalUsers**: ``null`` \| [`SessionUserInfo`](index.api.SessionUserInfo.md)[]

**`memberof`** SessionInfo

#### Defined in

[generated-client/models/session-info.ts:42](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/session-info.ts#L42)

___

### ApplicationVersion

• `Optional` **ApplicationVersion**: ``null`` \| `string`

Gets or sets the application version.

**`memberof`** SessionInfo

#### Defined in

[generated-client/models/session-info.ts:138](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/session-info.ts#L138)

___

### Capabilities

• `Optional` **Capabilities**: [`ClientCapabilities`](index.api.ClientCapabilities.md)

**`memberof`** SessionInfo

#### Defined in

[generated-client/models/session-info.ts:48](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/session-info.ts#L48)

___

### Client

• `Optional` **Client**: ``null`` \| `string`

Gets or sets the type of the client.

**`memberof`** SessionInfo

#### Defined in

[generated-client/models/session-info.ts:84](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/session-info.ts#L84)

___

### DeviceId

• `Optional` **DeviceId**: ``null`` \| `string`

Gets or sets the device id.

**`memberof`** SessionInfo

#### Defined in

[generated-client/models/session-info.ts:132](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/session-info.ts#L132)

___

### DeviceName

• `Optional` **DeviceName**: ``null`` \| `string`

Gets or sets the name of the device.

**`memberof`** SessionInfo

#### Defined in

[generated-client/models/session-info.ts:102](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/session-info.ts#L102)

___

### DeviceType

• `Optional` **DeviceType**: ``null`` \| `string`

Gets or sets the type of the device.

**`memberof`** SessionInfo

#### Defined in

[generated-client/models/session-info.ts:108](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/session-info.ts#L108)

___

### FullNowPlayingItem

• `Optional` **FullNowPlayingItem**: [`BaseItem`](index.api.BaseItem.md)

**`memberof`** SessionInfo

#### Defined in

[generated-client/models/session-info.ts:120](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/session-info.ts#L120)

___

### HasCustomDeviceName

• `Optional` **HasCustomDeviceName**: `boolean`

**`memberof`** SessionInfo

#### Defined in

[generated-client/models/session-info.ts:174](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/session-info.ts#L174)

___

### Id

• `Optional` **Id**: ``null`` \| `string`

Gets or sets the id.

**`memberof`** SessionInfo

#### Defined in

[generated-client/models/session-info.ts:66](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/session-info.ts#L66)

___

### IsActive

• `Optional` **IsActive**: `boolean`

Gets a value indicating whether this instance is active.

**`memberof`** SessionInfo

#### Defined in

[generated-client/models/session-info.ts:150](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/session-info.ts#L150)

___

### LastActivityDate

• `Optional` **LastActivityDate**: `string`

Gets or sets the last activity date.

**`memberof`** SessionInfo

#### Defined in

[generated-client/models/session-info.ts:90](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/session-info.ts#L90)

___

### LastPlaybackCheckIn

• `Optional` **LastPlaybackCheckIn**: `string`

Gets or sets the last playback check in.

**`memberof`** SessionInfo

#### Defined in

[generated-client/models/session-info.ts:96](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/session-info.ts#L96)

___

### NowPlayingItem

• `Optional` **NowPlayingItem**: [`BaseItemDto`](index.api.BaseItemDto.md)

**`memberof`** SessionInfo

#### Defined in

[generated-client/models/session-info.ts:114](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/session-info.ts#L114)

___

### NowPlayingQueue

• `Optional` **NowPlayingQueue**: ``null`` \| [`QueueItem`](index.api.QueueItem.md)[]

**`memberof`** SessionInfo

#### Defined in

[generated-client/models/session-info.ts:168](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/session-info.ts#L168)

___

### NowViewingItem

• `Optional` **NowViewingItem**: [`BaseItemDto`](index.api.BaseItemDto.md)

**`memberof`** SessionInfo

#### Defined in

[generated-client/models/session-info.ts:126](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/session-info.ts#L126)

___

### PlayState

• `Optional` **PlayState**: [`PlayerStateInfo`](index.api.PlayerStateInfo.md)

**`memberof`** SessionInfo

#### Defined in

[generated-client/models/session-info.ts:36](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/session-info.ts#L36)

___

### PlayableMediaTypes

• `Optional` **PlayableMediaTypes**: ``null`` \| `string`[]

Gets or sets the playable media types.

**`memberof`** SessionInfo

#### Defined in

[generated-client/models/session-info.ts:60](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/session-info.ts#L60)

___

### PlaylistItemId

• `Optional` **PlaylistItemId**: ``null`` \| `string`

**`memberof`** SessionInfo

#### Defined in

[generated-client/models/session-info.ts:180](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/session-info.ts#L180)

___

### RemoteEndPoint

• `Optional` **RemoteEndPoint**: ``null`` \| `string`

Gets or sets the remote end point.

**`memberof`** SessionInfo

#### Defined in

[generated-client/models/session-info.ts:54](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/session-info.ts#L54)

___

### ServerId

• `Optional` **ServerId**: ``null`` \| `string`

**`memberof`** SessionInfo

#### Defined in

[generated-client/models/session-info.ts:186](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/session-info.ts#L186)

___

### SupportedCommands

• `Optional` **SupportedCommands**: ``null`` \| [`GeneralCommandType`](../enums/index.api.GeneralCommandType.md)[]

Gets or sets the supported commands.

**`memberof`** SessionInfo

#### Defined in

[generated-client/models/session-info.ts:198](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/session-info.ts#L198)

___

### SupportsMediaControl

• `Optional` **SupportsMediaControl**: `boolean`

**`memberof`** SessionInfo

#### Defined in

[generated-client/models/session-info.ts:156](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/session-info.ts#L156)

___

### SupportsRemoteControl

• `Optional` **SupportsRemoteControl**: `boolean`

**`memberof`** SessionInfo

#### Defined in

[generated-client/models/session-info.ts:162](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/session-info.ts#L162)

___

### TranscodingInfo

• `Optional` **TranscodingInfo**: [`TranscodingInfo`](index.api.TranscodingInfo.md)

**`memberof`** SessionInfo

#### Defined in

[generated-client/models/session-info.ts:144](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/session-info.ts#L144)

___

### UserId

• `Optional` **UserId**: `string`

Gets or sets the user id.

**`memberof`** SessionInfo

#### Defined in

[generated-client/models/session-info.ts:72](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/session-info.ts#L72)

___

### UserName

• `Optional` **UserName**: ``null`` \| `string`

Gets or sets the username.

**`memberof`** SessionInfo

#### Defined in

[generated-client/models/session-info.ts:78](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/session-info.ts#L78)

___

### UserPrimaryImageTag

• `Optional` **UserPrimaryImageTag**: ``null`` \| `string`

**`memberof`** SessionInfo

#### Defined in

[generated-client/models/session-info.ts:192](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/session-info.ts#L192)
