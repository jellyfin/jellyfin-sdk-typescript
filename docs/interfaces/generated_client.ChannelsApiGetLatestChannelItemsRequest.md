[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / ChannelsApiGetLatestChannelItemsRequest

# Interface: ChannelsApiGetLatestChannelItemsRequest

[generated-client](../modules/generated_client.md).ChannelsApiGetLatestChannelItemsRequest

Request parameters for getLatestChannelItems operation in ChannelsApi.

**`export`**

**`interface`** ChannelsApiGetLatestChannelItemsRequest

## Table of contents

### Properties

- [channelIds](generated_client.ChannelsApiGetLatestChannelItemsRequest.md#channelids)
- [fields](generated_client.ChannelsApiGetLatestChannelItemsRequest.md#fields)
- [filters](generated_client.ChannelsApiGetLatestChannelItemsRequest.md#filters)
- [limit](generated_client.ChannelsApiGetLatestChannelItemsRequest.md#limit)
- [startIndex](generated_client.ChannelsApiGetLatestChannelItemsRequest.md#startindex)
- [userId](generated_client.ChannelsApiGetLatestChannelItemsRequest.md#userid)

## Properties

### channelIds

• `Optional` `Readonly` **channelIds**: `string`[]

Optional. Specify one or more channel id\&#39;s, comma delimited.

**`memberof`** ChannelsApiGetLatestChannelItems

#### Defined in

[generated-client/api/channels-api.ts:653](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/channels-api.ts#L653)

___

### fields

• `Optional` `Readonly` **fields**: [`ItemFields`](../enums/generated_client.ItemFields.md)[]

Optional. Specify additional fields of information to return in the output.

**`memberof`** ChannelsApiGetLatestChannelItems

#### Defined in

[generated-client/api/channels-api.ts:646](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/channels-api.ts#L646)

___

### filters

• `Optional` `Readonly` **filters**: [`ItemFilter`](../enums/generated_client.ItemFilter.md)[]

Optional. Specify additional filters to apply.

**`memberof`** ChannelsApiGetLatestChannelItems

#### Defined in

[generated-client/api/channels-api.ts:639](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/channels-api.ts#L639)

___

### limit

• `Optional` `Readonly` **limit**: `number`

Optional. The maximum number of records to return.

**`memberof`** ChannelsApiGetLatestChannelItems

#### Defined in

[generated-client/api/channels-api.ts:632](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/channels-api.ts#L632)

___

### startIndex

• `Optional` `Readonly` **startIndex**: `number`

Optional. The record index to start at. All items with a lower index will be dropped from the results.

**`memberof`** ChannelsApiGetLatestChannelItems

#### Defined in

[generated-client/api/channels-api.ts:625](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/channels-api.ts#L625)

___

### userId

• `Optional` `Readonly` **userId**: `string`

Optional. User Id.

**`memberof`** ChannelsApiGetLatestChannelItems

#### Defined in

[generated-client/api/channels-api.ts:618](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/channels-api.ts#L618)
