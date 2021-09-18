[jellyfin-sdk-typescript](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / ChannelsApiGetChannelItemsRequest

# Interface: ChannelsApiGetChannelItemsRequest

[generated-client](../modules/generated_client.md).ChannelsApiGetChannelItemsRequest

Request parameters for getChannelItems operation in ChannelsApi.

**`export`**

**`interface`** ChannelsApiGetChannelItemsRequest

## Table of contents

### Properties

- [channelId](generated_client.ChannelsApiGetChannelItemsRequest.md#channelid)
- [fields](generated_client.ChannelsApiGetChannelItemsRequest.md#fields)
- [filters](generated_client.ChannelsApiGetChannelItemsRequest.md#filters)
- [folderId](generated_client.ChannelsApiGetChannelItemsRequest.md#folderid)
- [limit](generated_client.ChannelsApiGetChannelItemsRequest.md#limit)
- [sortBy](generated_client.ChannelsApiGetChannelItemsRequest.md#sortby)
- [sortOrder](generated_client.ChannelsApiGetChannelItemsRequest.md#sortorder)
- [startIndex](generated_client.ChannelsApiGetChannelItemsRequest.md#startindex)
- [userId](generated_client.ChannelsApiGetChannelItemsRequest.md#userid)

## Properties

### channelId

• `Readonly` **channelId**: `string`

Channel Id.

**`memberof`** ChannelsApiGetChannelItems

#### Defined in

[generated-client/api/channels-api.ts:499](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e4df7f8/src/generated-client/api/channels-api.ts#L499)

___

### fields

• `Optional` `Readonly` **fields**: [`ItemFields`](../enums/generated_client.ItemFields.md)[]

Optional. Specify additional fields of information to return in the output.

**`memberof`** ChannelsApiGetChannelItems

#### Defined in

[generated-client/api/channels-api.ts:555](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e4df7f8/src/generated-client/api/channels-api.ts#L555)

___

### filters

• `Optional` `Readonly` **filters**: [`ItemFilter`](../enums/generated_client.ItemFilter.md)[]

Optional. Specify additional filters to apply.

**`memberof`** ChannelsApiGetChannelItems

#### Defined in

[generated-client/api/channels-api.ts:541](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e4df7f8/src/generated-client/api/channels-api.ts#L541)

___

### folderId

• `Optional` `Readonly` **folderId**: `string`

Optional. Folder Id.

**`memberof`** ChannelsApiGetChannelItems

#### Defined in

[generated-client/api/channels-api.ts:506](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e4df7f8/src/generated-client/api/channels-api.ts#L506)

___

### limit

• `Optional` `Readonly` **limit**: `number`

Optional. The maximum number of records to return.

**`memberof`** ChannelsApiGetChannelItems

#### Defined in

[generated-client/api/channels-api.ts:527](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e4df7f8/src/generated-client/api/channels-api.ts#L527)

___

### sortBy

• `Optional` `Readonly` **sortBy**: `string`[]

Optional. Specify one or more sort orders, comma delimited. Options: Album, AlbumArtist, Artist, Budget, CommunityRating, CriticRating, DateCreated, DatePlayed, PlayCount, PremiereDate, ProductionYear, SortName, Random, Revenue, Runtime.

**`memberof`** ChannelsApiGetChannelItems

#### Defined in

[generated-client/api/channels-api.ts:548](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e4df7f8/src/generated-client/api/channels-api.ts#L548)

___

### sortOrder

• `Optional` `Readonly` **sortOrder**: [`SortOrder`](../enums/generated_client.SortOrder.md)[]

Optional. Sort Order - Ascending,Descending.

**`memberof`** ChannelsApiGetChannelItems

#### Defined in

[generated-client/api/channels-api.ts:534](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e4df7f8/src/generated-client/api/channels-api.ts#L534)

___

### startIndex

• `Optional` `Readonly` **startIndex**: `number`

Optional. The record index to start at. All items with a lower index will be dropped from the results.

**`memberof`** ChannelsApiGetChannelItems

#### Defined in

[generated-client/api/channels-api.ts:520](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e4df7f8/src/generated-client/api/channels-api.ts#L520)

___

### userId

• `Optional` `Readonly` **userId**: `string`

Optional. User Id.

**`memberof`** ChannelsApiGetChannelItems

#### Defined in

[generated-client/api/channels-api.ts:513](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e4df7f8/src/generated-client/api/channels-api.ts#L513)
