[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / ChannelsApi

# Class: ChannelsApi

[generated-client](../modules/generated_client.md).ChannelsApi

ChannelsApi - object-oriented interface

**`export`**

## Hierarchy

- `BaseAPI`

  ↳ **`ChannelsApi`**

## Table of contents

### Constructors

- [constructor](generated_client.ChannelsApi.md#constructor)

### Properties

- [axios](generated_client.ChannelsApi.md#axios)
- [basePath](generated_client.ChannelsApi.md#basepath)
- [configuration](generated_client.ChannelsApi.md#configuration)

### Methods

- [getAllChannelFeatures](generated_client.ChannelsApi.md#getallchannelfeatures)
- [getChannelFeatures](generated_client.ChannelsApi.md#getchannelfeatures)
- [getChannelItems](generated_client.ChannelsApi.md#getchannelitems)
- [getChannels](generated_client.ChannelsApi.md#getchannels)
- [getLatestChannelItems](generated_client.ChannelsApi.md#getlatestchannelitems)

## Constructors

### constructor

• **new ChannelsApi**(`configuration?`, `basePath?`, `axios?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](generated_client.Configuration.md) |
| `basePath` | `string` |
| `axios` | `AxiosInstance` |

#### Inherited from

BaseAPI.constructor

#### Defined in

[generated-client/base.ts:52](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/base.ts#L52)

## Properties

### axios

• `Protected` **axios**: `AxiosInstance`

#### Inherited from

BaseAPI.axios

___

### basePath

• `Protected` **basePath**: `string`

#### Inherited from

BaseAPI.basePath

___

### configuration

• `Protected` **configuration**: `undefined` \| [`Configuration`](generated_client.Configuration.md)

#### Inherited from

BaseAPI.configuration

#### Defined in

[generated-client/base.ts:50](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/base.ts#L50)

## Methods

### getAllChannelFeatures

▸ **getAllChannelFeatures**(`options?`): `Promise`<`AxiosResponse`<[`ChannelFeatures`](../interfaces/generated_client.ChannelFeatures.md)[]\>\>

**`summary`** Get all channel features.

**`throws`** {RequiredError}

**`memberof`** ChannelsApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `any` |

#### Returns

`Promise`<`AxiosResponse`<[`ChannelFeatures`](../interfaces/generated_client.ChannelFeatures.md)[]\>\>

#### Defined in

[generated-client/api/channels-api.ts:670](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/channels-api.ts#L670)

___

### getChannelFeatures

▸ **getChannelFeatures**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`ChannelFeatures`](../interfaces/generated_client.ChannelFeatures.md)\>\>

**`summary`** Get channel features.

**`throws`** {RequiredError}

**`memberof`** ChannelsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`ChannelsApiGetChannelFeaturesRequest`](../interfaces/generated_client.ChannelsApiGetChannelFeaturesRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`ChannelFeatures`](../interfaces/generated_client.ChannelFeatures.md)\>\>

#### Defined in

[generated-client/api/channels-api.ts:682](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/channels-api.ts#L682)

___

### getChannelItems

▸ **getChannelItems**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`BaseItemDtoQueryResult`](../interfaces/generated_client.BaseItemDtoQueryResult.md)\>\>

**`summary`** Get channel items.

**`throws`** {RequiredError}

**`memberof`** ChannelsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`ChannelsApiGetChannelItemsRequest`](../interfaces/generated_client.ChannelsApiGetChannelItemsRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`BaseItemDtoQueryResult`](../interfaces/generated_client.BaseItemDtoQueryResult.md)\>\>

#### Defined in

[generated-client/api/channels-api.ts:694](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/channels-api.ts#L694)

___

### getChannels

▸ **getChannels**(`requestParameters?`, `options?`): `Promise`<`AxiosResponse`<[`BaseItemDtoQueryResult`](../interfaces/generated_client.BaseItemDtoQueryResult.md)\>\>

**`summary`** Gets available channels.

**`throws`** {RequiredError}

**`memberof`** ChannelsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`ChannelsApiGetChannelsRequest`](../interfaces/generated_client.ChannelsApiGetChannelsRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`BaseItemDtoQueryResult`](../interfaces/generated_client.BaseItemDtoQueryResult.md)\>\>

#### Defined in

[generated-client/api/channels-api.ts:706](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/channels-api.ts#L706)

___

### getLatestChannelItems

▸ **getLatestChannelItems**(`requestParameters?`, `options?`): `Promise`<`AxiosResponse`<[`BaseItemDtoQueryResult`](../interfaces/generated_client.BaseItemDtoQueryResult.md)\>\>

**`summary`** Gets latest channel items.

**`throws`** {RequiredError}

**`memberof`** ChannelsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`ChannelsApiGetLatestChannelItemsRequest`](../interfaces/generated_client.ChannelsApiGetLatestChannelItemsRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`BaseItemDtoQueryResult`](../interfaces/generated_client.BaseItemDtoQueryResult.md)\>\>

#### Defined in

[generated-client/api/channels-api.ts:718](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/channels-api.ts#L718)
