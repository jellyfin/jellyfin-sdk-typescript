[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / SyncPlayApi

# Class: SyncPlayApi

[generated-client](../modules/generated_client.md).SyncPlayApi

SyncPlayApi - object-oriented interface

**`export`**

## Hierarchy

- `BaseAPI`

  ↳ **`SyncPlayApi`**

## Table of contents

### Constructors

- [constructor](generated_client.SyncPlayApi.md#constructor)

### Properties

- [axios](generated_client.SyncPlayApi.md#axios)
- [basePath](generated_client.SyncPlayApi.md#basepath)
- [configuration](generated_client.SyncPlayApi.md#configuration)

### Methods

- [syncPlayBuffering](generated_client.SyncPlayApi.md#syncplaybuffering)
- [syncPlayCreateGroup](generated_client.SyncPlayApi.md#syncplaycreategroup)
- [syncPlayGetGroups](generated_client.SyncPlayApi.md#syncplaygetgroups)
- [syncPlayJoinGroup](generated_client.SyncPlayApi.md#syncplayjoingroup)
- [syncPlayLeaveGroup](generated_client.SyncPlayApi.md#syncplayleavegroup)
- [syncPlayMovePlaylistItem](generated_client.SyncPlayApi.md#syncplaymoveplaylistitem)
- [syncPlayNextItem](generated_client.SyncPlayApi.md#syncplaynextitem)
- [syncPlayPause](generated_client.SyncPlayApi.md#syncplaypause)
- [syncPlayPing](generated_client.SyncPlayApi.md#syncplayping)
- [syncPlayPreviousItem](generated_client.SyncPlayApi.md#syncplaypreviousitem)
- [syncPlayQueue](generated_client.SyncPlayApi.md#syncplayqueue)
- [syncPlayReady](generated_client.SyncPlayApi.md#syncplayready)
- [syncPlayRemoveFromPlaylist](generated_client.SyncPlayApi.md#syncplayremovefromplaylist)
- [syncPlaySeek](generated_client.SyncPlayApi.md#syncplayseek)
- [syncPlaySetIgnoreWait](generated_client.SyncPlayApi.md#syncplaysetignorewait)
- [syncPlaySetNewQueue](generated_client.SyncPlayApi.md#syncplaysetnewqueue)
- [syncPlaySetPlaylistItem](generated_client.SyncPlayApi.md#syncplaysetplaylistitem)
- [syncPlaySetRepeatMode](generated_client.SyncPlayApi.md#syncplaysetrepeatmode)
- [syncPlaySetShuffleMode](generated_client.SyncPlayApi.md#syncplaysetshufflemode)
- [syncPlayStop](generated_client.SyncPlayApi.md#syncplaystop)
- [syncPlayUnpause](generated_client.SyncPlayApi.md#syncplayunpause)

## Constructors

### constructor

• **new SyncPlayApi**(`configuration?`, `basePath?`, `axios?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](generated_client.Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Inherited from

BaseAPI.constructor

#### Defined in

[generated-client/base.ts:52](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/base.ts#L52)

## Properties

### axios

• `Protected` **axios**: `AxiosInstance` = `globalAxios`

#### Inherited from

BaseAPI.axios

___

### basePath

• `Protected` **basePath**: `string` = `BASE_PATH`

#### Inherited from

BaseAPI.basePath

___

### configuration

• `Protected` **configuration**: `undefined` \| [`Configuration`](generated_client.Configuration.md)

#### Inherited from

BaseAPI.configuration

#### Defined in

[generated-client/base.ts:50](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/base.ts#L50)

## Methods

### syncPlayBuffering

▸ **syncPlayBuffering**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`, `any`\>\>

**`summary`** Notify SyncPlay group that member is buffering.

**`throws`** {RequiredError}

**`memberof`** SyncPlayApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`SyncPlayApiSyncPlayBufferingRequest`](../interfaces/generated_client.SyncPlayApiSyncPlayBufferingRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`, `any`\>\>

#### Defined in

[generated-client/api/sync-play-api.ts:1545](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/sync-play-api.ts#L1545)

___

### syncPlayCreateGroup

▸ **syncPlayCreateGroup**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`, `any`\>\>

**`summary`** Create a new SyncPlay group.

**`throws`** {RequiredError}

**`memberof`** SyncPlayApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`SyncPlayApiSyncPlayCreateGroupRequest`](../interfaces/generated_client.SyncPlayApiSyncPlayCreateGroupRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`, `any`\>\>

#### Defined in

[generated-client/api/sync-play-api.ts:1557](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/sync-play-api.ts#L1557)

___

### syncPlayGetGroups

▸ **syncPlayGetGroups**(`options?`): `Promise`<`AxiosResponse`<[`GroupInfoDto`](../interfaces/generated_client.GroupInfoDto.md)[], `any`\>\>

**`summary`** Gets all SyncPlay groups.

**`throws`** {RequiredError}

**`memberof`** SyncPlayApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `any` |

#### Returns

`Promise`<`AxiosResponse`<[`GroupInfoDto`](../interfaces/generated_client.GroupInfoDto.md)[], `any`\>\>

#### Defined in

[generated-client/api/sync-play-api.ts:1568](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/sync-play-api.ts#L1568)

___

### syncPlayJoinGroup

▸ **syncPlayJoinGroup**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`, `any`\>\>

**`summary`** Join an existing SyncPlay group.

**`throws`** {RequiredError}

**`memberof`** SyncPlayApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`SyncPlayApiSyncPlayJoinGroupRequest`](../interfaces/generated_client.SyncPlayApiSyncPlayJoinGroupRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`, `any`\>\>

#### Defined in

[generated-client/api/sync-play-api.ts:1580](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/sync-play-api.ts#L1580)

___

### syncPlayLeaveGroup

▸ **syncPlayLeaveGroup**(`options?`): `Promise`<`AxiosResponse`<`void`, `any`\>\>

**`summary`** Leave the joined SyncPlay group.

**`throws`** {RequiredError}

**`memberof`** SyncPlayApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `any` |

#### Returns

`Promise`<`AxiosResponse`<`void`, `any`\>\>

#### Defined in

[generated-client/api/sync-play-api.ts:1591](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/sync-play-api.ts#L1591)

___

### syncPlayMovePlaylistItem

▸ **syncPlayMovePlaylistItem**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`, `any`\>\>

**`summary`** Request to move an item in the playlist in SyncPlay group.

**`throws`** {RequiredError}

**`memberof`** SyncPlayApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`SyncPlayApiSyncPlayMovePlaylistItemRequest`](../interfaces/generated_client.SyncPlayApiSyncPlayMovePlaylistItemRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`, `any`\>\>

#### Defined in

[generated-client/api/sync-play-api.ts:1603](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/sync-play-api.ts#L1603)

___

### syncPlayNextItem

▸ **syncPlayNextItem**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`, `any`\>\>

**`summary`** Request next item in SyncPlay group.

**`throws`** {RequiredError}

**`memberof`** SyncPlayApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`SyncPlayApiSyncPlayNextItemRequest`](../interfaces/generated_client.SyncPlayApiSyncPlayNextItemRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`, `any`\>\>

#### Defined in

[generated-client/api/sync-play-api.ts:1615](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/sync-play-api.ts#L1615)

___

### syncPlayPause

▸ **syncPlayPause**(`options?`): `Promise`<`AxiosResponse`<`void`, `any`\>\>

**`summary`** Request pause in SyncPlay group.

**`throws`** {RequiredError}

**`memberof`** SyncPlayApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `any` |

#### Returns

`Promise`<`AxiosResponse`<`void`, `any`\>\>

#### Defined in

[generated-client/api/sync-play-api.ts:1626](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/sync-play-api.ts#L1626)

___

### syncPlayPing

▸ **syncPlayPing**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`, `any`\>\>

**`summary`** Update session ping.

**`throws`** {RequiredError}

**`memberof`** SyncPlayApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`SyncPlayApiSyncPlayPingRequest`](../interfaces/generated_client.SyncPlayApiSyncPlayPingRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`, `any`\>\>

#### Defined in

[generated-client/api/sync-play-api.ts:1638](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/sync-play-api.ts#L1638)

___

### syncPlayPreviousItem

▸ **syncPlayPreviousItem**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`, `any`\>\>

**`summary`** Request previous item in SyncPlay group.

**`throws`** {RequiredError}

**`memberof`** SyncPlayApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`SyncPlayApiSyncPlayPreviousItemRequest`](../interfaces/generated_client.SyncPlayApiSyncPlayPreviousItemRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`, `any`\>\>

#### Defined in

[generated-client/api/sync-play-api.ts:1650](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/sync-play-api.ts#L1650)

___

### syncPlayQueue

▸ **syncPlayQueue**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`, `any`\>\>

**`summary`** Request to queue items to the playlist of a SyncPlay group.

**`throws`** {RequiredError}

**`memberof`** SyncPlayApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`SyncPlayApiSyncPlayQueueRequest`](../interfaces/generated_client.SyncPlayApiSyncPlayQueueRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`, `any`\>\>

#### Defined in

[generated-client/api/sync-play-api.ts:1662](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/sync-play-api.ts#L1662)

___

### syncPlayReady

▸ **syncPlayReady**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`, `any`\>\>

**`summary`** Notify SyncPlay group that member is ready for playback.

**`throws`** {RequiredError}

**`memberof`** SyncPlayApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`SyncPlayApiSyncPlayReadyRequest`](../interfaces/generated_client.SyncPlayApiSyncPlayReadyRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`, `any`\>\>

#### Defined in

[generated-client/api/sync-play-api.ts:1674](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/sync-play-api.ts#L1674)

___

### syncPlayRemoveFromPlaylist

▸ **syncPlayRemoveFromPlaylist**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`, `any`\>\>

**`summary`** Request to remove items from the playlist in SyncPlay group.

**`throws`** {RequiredError}

**`memberof`** SyncPlayApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`SyncPlayApiSyncPlayRemoveFromPlaylistRequest`](../interfaces/generated_client.SyncPlayApiSyncPlayRemoveFromPlaylistRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`, `any`\>\>

#### Defined in

[generated-client/api/sync-play-api.ts:1686](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/sync-play-api.ts#L1686)

___

### syncPlaySeek

▸ **syncPlaySeek**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`, `any`\>\>

**`summary`** Request seek in SyncPlay group.

**`throws`** {RequiredError}

**`memberof`** SyncPlayApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`SyncPlayApiSyncPlaySeekRequest`](../interfaces/generated_client.SyncPlayApiSyncPlaySeekRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`, `any`\>\>

#### Defined in

[generated-client/api/sync-play-api.ts:1698](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/sync-play-api.ts#L1698)

___

### syncPlaySetIgnoreWait

▸ **syncPlaySetIgnoreWait**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`, `any`\>\>

**`summary`** Request SyncPlay group to ignore member during group-wait.

**`throws`** {RequiredError}

**`memberof`** SyncPlayApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`SyncPlayApiSyncPlaySetIgnoreWaitRequest`](../interfaces/generated_client.SyncPlayApiSyncPlaySetIgnoreWaitRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`, `any`\>\>

#### Defined in

[generated-client/api/sync-play-api.ts:1710](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/sync-play-api.ts#L1710)

___

### syncPlaySetNewQueue

▸ **syncPlaySetNewQueue**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`, `any`\>\>

**`summary`** Request to set new playlist in SyncPlay group.

**`throws`** {RequiredError}

**`memberof`** SyncPlayApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`SyncPlayApiSyncPlaySetNewQueueRequest`](../interfaces/generated_client.SyncPlayApiSyncPlaySetNewQueueRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`, `any`\>\>

#### Defined in

[generated-client/api/sync-play-api.ts:1722](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/sync-play-api.ts#L1722)

___

### syncPlaySetPlaylistItem

▸ **syncPlaySetPlaylistItem**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`, `any`\>\>

**`summary`** Request to change playlist item in SyncPlay group.

**`throws`** {RequiredError}

**`memberof`** SyncPlayApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`SyncPlayApiSyncPlaySetPlaylistItemRequest`](../interfaces/generated_client.SyncPlayApiSyncPlaySetPlaylistItemRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`, `any`\>\>

#### Defined in

[generated-client/api/sync-play-api.ts:1734](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/sync-play-api.ts#L1734)

___

### syncPlaySetRepeatMode

▸ **syncPlaySetRepeatMode**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`, `any`\>\>

**`summary`** Request to set repeat mode in SyncPlay group.

**`throws`** {RequiredError}

**`memberof`** SyncPlayApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`SyncPlayApiSyncPlaySetRepeatModeRequest`](../interfaces/generated_client.SyncPlayApiSyncPlaySetRepeatModeRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`, `any`\>\>

#### Defined in

[generated-client/api/sync-play-api.ts:1746](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/sync-play-api.ts#L1746)

___

### syncPlaySetShuffleMode

▸ **syncPlaySetShuffleMode**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`, `any`\>\>

**`summary`** Request to set shuffle mode in SyncPlay group.

**`throws`** {RequiredError}

**`memberof`** SyncPlayApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`SyncPlayApiSyncPlaySetShuffleModeRequest`](../interfaces/generated_client.SyncPlayApiSyncPlaySetShuffleModeRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`, `any`\>\>

#### Defined in

[generated-client/api/sync-play-api.ts:1758](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/sync-play-api.ts#L1758)

___

### syncPlayStop

▸ **syncPlayStop**(`options?`): `Promise`<`AxiosResponse`<`void`, `any`\>\>

**`summary`** Request stop in SyncPlay group.

**`throws`** {RequiredError}

**`memberof`** SyncPlayApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `any` |

#### Returns

`Promise`<`AxiosResponse`<`void`, `any`\>\>

#### Defined in

[generated-client/api/sync-play-api.ts:1769](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/sync-play-api.ts#L1769)

___

### syncPlayUnpause

▸ **syncPlayUnpause**(`options?`): `Promise`<`AxiosResponse`<`void`, `any`\>\>

**`summary`** Request unpause in SyncPlay group.

**`throws`** {RequiredError}

**`memberof`** SyncPlayApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `any` |

#### Returns

`Promise`<`AxiosResponse`<`void`, `any`\>\>

#### Defined in

[generated-client/api/sync-play-api.ts:1780](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/sync-play-api.ts#L1780)
