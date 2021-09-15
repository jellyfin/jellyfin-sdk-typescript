[jellyfin-sdk-typescript](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / ChannelsApiGetChannelsRequest

# Interface: ChannelsApiGetChannelsRequest

[generated-client](../modules/generated_client.md).ChannelsApiGetChannelsRequest

Request parameters for getChannels operation in ChannelsApi.

**`export`**

**`interface`** ChannelsApiGetChannelsRequest

## Table of contents

### Properties

- [isFavorite](generated_client.ChannelsApiGetChannelsRequest.md#isfavorite)
- [limit](generated_client.ChannelsApiGetChannelsRequest.md#limit)
- [startIndex](generated_client.ChannelsApiGetChannelsRequest.md#startindex)
- [supportsLatestItems](generated_client.ChannelsApiGetChannelsRequest.md#supportslatestitems)
- [supportsMediaDeletion](generated_client.ChannelsApiGetChannelsRequest.md#supportsmediadeletion)
- [userId](generated_client.ChannelsApiGetChannelsRequest.md#userid)

## Properties

### isFavorite

• `Optional` `Readonly` **isFavorite**: `boolean`

Optional. Filter by channels that are favorite.

**`memberof`** ChannelsApiGetChannels

#### Defined in

[generated-client/api/channels-api.ts:604](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/channels-api.ts#L604)

___

### limit

• `Optional` `Readonly` **limit**: `number`

Optional. The maximum number of records to return.

**`memberof`** ChannelsApiGetChannels

#### Defined in

[generated-client/api/channels-api.ts:583](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/channels-api.ts#L583)

___

### startIndex

• `Optional` `Readonly` **startIndex**: `number`

Optional. The record index to start at. All items with a lower index will be dropped from the results.

**`memberof`** ChannelsApiGetChannels

#### Defined in

[generated-client/api/channels-api.ts:576](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/channels-api.ts#L576)

___

### supportsLatestItems

• `Optional` `Readonly` **supportsLatestItems**: `boolean`

Optional. Filter by channels that support getting latest items.

**`memberof`** ChannelsApiGetChannels

#### Defined in

[generated-client/api/channels-api.ts:590](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/channels-api.ts#L590)

___

### supportsMediaDeletion

• `Optional` `Readonly` **supportsMediaDeletion**: `boolean`

Optional. Filter by channels that support media deletion.

**`memberof`** ChannelsApiGetChannels

#### Defined in

[generated-client/api/channels-api.ts:597](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/channels-api.ts#L597)

___

### userId

• `Optional` `Readonly` **userId**: `string`

User Id to filter by. Use System.Guid.Empty to not filter by user.

**`memberof`** ChannelsApiGetChannels

#### Defined in

[generated-client/api/channels-api.ts:569](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/api/channels-api.ts#L569)
