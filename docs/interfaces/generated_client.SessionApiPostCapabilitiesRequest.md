[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / SessionApiPostCapabilitiesRequest

# Interface: SessionApiPostCapabilitiesRequest

[generated-client](../modules/generated_client.md).SessionApiPostCapabilitiesRequest

Request parameters for postCapabilities operation in SessionApi.

**`export`**

**`interface`** SessionApiPostCapabilitiesRequest

## Table of contents

### Properties

- [id](generated_client.SessionApiPostCapabilitiesRequest.md#id)
- [playableMediaTypes](generated_client.SessionApiPostCapabilitiesRequest.md#playablemediatypes)
- [supportedCommands](generated_client.SessionApiPostCapabilitiesRequest.md#supportedcommands)
- [supportsMediaControl](generated_client.SessionApiPostCapabilitiesRequest.md#supportsmediacontrol)
- [supportsPersistentIdentifier](generated_client.SessionApiPostCapabilitiesRequest.md#supportspersistentidentifier)
- [supportsSync](generated_client.SessionApiPostCapabilitiesRequest.md#supportssync)

## Properties

### id

• `Optional` `Readonly` **id**: `string`

The session id.

**`memberof`** SessionApiPostCapabilities

#### Defined in

[generated-client/api/session-api.ts:1348](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/session-api.ts#L1348)

___

### playableMediaTypes

• `Optional` `Readonly` **playableMediaTypes**: `string`[]

A list of playable media types, comma delimited. Audio, Video, Book, Photo.

**`memberof`** SessionApiPostCapabilities

#### Defined in

[generated-client/api/session-api.ts:1355](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/session-api.ts#L1355)

___

### supportedCommands

• `Optional` `Readonly` **supportedCommands**: [`GeneralCommandType`](../enums/generated_client.GeneralCommandType.md)[]

A list of supported remote control commands, comma delimited.

**`memberof`** SessionApiPostCapabilities

#### Defined in

[generated-client/api/session-api.ts:1362](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/session-api.ts#L1362)

___

### supportsMediaControl

• `Optional` `Readonly` **supportsMediaControl**: `boolean`

Determines whether media can be played remotely..

**`memberof`** SessionApiPostCapabilities

#### Defined in

[generated-client/api/session-api.ts:1369](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/session-api.ts#L1369)

___

### supportsPersistentIdentifier

• `Optional` `Readonly` **supportsPersistentIdentifier**: `boolean`

Determines whether the device supports a unique identifier.

**`memberof`** SessionApiPostCapabilities

#### Defined in

[generated-client/api/session-api.ts:1383](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/session-api.ts#L1383)

___

### supportsSync

• `Optional` `Readonly` **supportsSync**: `boolean`

Determines whether sync is supported.

**`memberof`** SessionApiPostCapabilities

#### Defined in

[generated-client/api/session-api.ts:1376](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/session-api.ts#L1376)
