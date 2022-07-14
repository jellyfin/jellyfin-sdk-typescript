[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / DlnaOptions

# Interface: DlnaOptions

[generated-client](../modules/generated_client.md).DlnaOptions

The DlnaOptions class contains the user definable parameters for the dlna subsystems.

**`export`**

**`interface`** DlnaOptions

## Table of contents

### Properties

- [AliveMessageIntervalSeconds](generated_client.DlnaOptions.md#alivemessageintervalseconds)
- [AutoCreatePlayToProfiles](generated_client.DlnaOptions.md#autocreateplaytoprofiles)
- [BlastAliveMessageIntervalSeconds](generated_client.DlnaOptions.md#blastalivemessageintervalseconds)
- [BlastAliveMessages](generated_client.DlnaOptions.md#blastalivemessages)
- [ClientDiscoveryIntervalSeconds](generated_client.DlnaOptions.md#clientdiscoveryintervalseconds)
- [DefaultUserId](generated_client.DlnaOptions.md#defaultuserid)
- [EnableDebugLog](generated_client.DlnaOptions.md#enabledebuglog)
- [EnablePlayTo](generated_client.DlnaOptions.md#enableplayto)
- [EnablePlayToTracing](generated_client.DlnaOptions.md#enableplaytotracing)
- [EnableServer](generated_client.DlnaOptions.md#enableserver)
- [SendOnlyMatchedHost](generated_client.DlnaOptions.md#sendonlymatchedhost)

## Properties

### AliveMessageIntervalSeconds

• `Optional` **AliveMessageIntervalSeconds**: `number`

Gets or sets the frequency at which ssdp alive notifications are transmitted.

**`memberof`** DlnaOptions

#### Defined in

[generated-client/models/dlna-options.ts:58](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/dlna-options.ts#L58)

___

### AutoCreatePlayToProfiles

• `Optional` **AutoCreatePlayToProfiles**: `boolean`

Gets or sets a value indicating whether playTo device profiles should be created.

**`memberof`** DlnaOptions

#### Defined in

[generated-client/models/dlna-options.ts:76](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/dlna-options.ts#L76)

___

### BlastAliveMessageIntervalSeconds

• `Optional` **BlastAliveMessageIntervalSeconds**: `number`

Gets or sets the frequency at which ssdp alive notifications are transmitted. MIGRATING - TO BE REMOVED ONCE WEB HAS BEEN ALTERED.

**`memberof`** DlnaOptions

#### Defined in

[generated-client/models/dlna-options.ts:64](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/dlna-options.ts#L64)

___

### BlastAliveMessages

• `Optional` **BlastAliveMessages**: `boolean`

Gets or sets a value indicating whether to blast alive messages.

**`memberof`** DlnaOptions

#### Defined in

[generated-client/models/dlna-options.ts:82](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/dlna-options.ts#L82)

___

### ClientDiscoveryIntervalSeconds

• `Optional` **ClientDiscoveryIntervalSeconds**: `number`

Gets or sets the ssdp client discovery interval time (in seconds).  This is the time after which the server will send a ssdp search request.

**`memberof`** DlnaOptions

#### Defined in

[generated-client/models/dlna-options.ts:52](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/dlna-options.ts#L52)

___

### DefaultUserId

• `Optional` **DefaultUserId**: ``null`` \| `string`

Gets or sets the default user account that the dlna server uses.

**`memberof`** DlnaOptions

#### Defined in

[generated-client/models/dlna-options.ts:70](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/dlna-options.ts#L70)

___

### EnableDebugLog

• `Optional` **EnableDebugLog**: `boolean`

Gets or sets a value indicating whether detailed dlna server logs are sent to the console/log.  If the setting \"Emby.Dlna\": \"Debug\" msut be set in logging.default.json for this property to work.

**`memberof`** DlnaOptions

#### Defined in

[generated-client/models/dlna-options.ts:40](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/dlna-options.ts#L40)

___

### EnablePlayTo

• `Optional` **EnablePlayTo**: `boolean`

Gets or sets a value indicating whether gets or sets a value to indicate the status of the dlna playTo subsystem.

**`memberof`** DlnaOptions

#### Defined in

[generated-client/models/dlna-options.ts:28](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/dlna-options.ts#L28)

___

### EnablePlayToTracing

• `Optional` **EnablePlayToTracing**: `boolean`

Gets or sets a value indicating whether whether detailed playTo debug logs are sent to the console/log.  If the setting \"Emby.Dlna.PlayTo\": \"Debug\" msut be set in logging.default.json for this property to work.

**`memberof`** DlnaOptions

#### Defined in

[generated-client/models/dlna-options.ts:46](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/dlna-options.ts#L46)

___

### EnableServer

• `Optional` **EnableServer**: `boolean`

Gets or sets a value indicating whether gets or sets a value to indicate the status of the dlna server subsystem.

**`memberof`** DlnaOptions

#### Defined in

[generated-client/models/dlna-options.ts:34](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/dlna-options.ts#L34)

___

### SendOnlyMatchedHost

• `Optional` **SendOnlyMatchedHost**: `boolean`

gets or sets a value indicating whether to send only matched host.

**`memberof`** DlnaOptions

#### Defined in

[generated-client/models/dlna-options.ts:88](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/models/dlna-options.ts#L88)
