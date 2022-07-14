[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / [discovery](../modules/index.discovery.md) / DiscoveryService

# Class: DiscoveryService

[index](../modules/index.md).[discovery](../modules/index.discovery.md).DiscoveryService

Class used for discovering recommended servers.

## Table of contents

### Constructors

- [constructor](index.discovery.DiscoveryService.md#constructor)

### Properties

- [jellyfin](index.discovery.DiscoveryService.md#jellyfin)
- [recommendedServerDiscovery](index.discovery.DiscoveryService.md#recommendedserverdiscovery)

### Methods

- [findBestServer](index.discovery.DiscoveryService.md#findbestserver)
- [getAddressCandidates](index.discovery.DiscoveryService.md#getaddresscandidates)
- [getRecommendedServerCandidates](index.discovery.DiscoveryService.md#getrecommendedservercandidates)
- [getRecommendedServers](index.discovery.DiscoveryService.md#getrecommendedservers)

## Constructors

### constructor

• **new DiscoveryService**(`jellyfin`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jellyfin` | [`Jellyfin`](index.Jellyfin.md) |

#### Defined in

[discovery/discovery-service.ts:18](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/discovery/discovery-service.ts#L18)

## Properties

### jellyfin

• `Private` **jellyfin**: [`Jellyfin`](index.Jellyfin.md)

#### Defined in

[discovery/discovery-service.ts:15](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/discovery/discovery-service.ts#L15)

___

### recommendedServerDiscovery

• `Private` **recommendedServerDiscovery**: [`RecommendedServerDiscovery`](index.discovery.RecommendedServerDiscovery.md)

#### Defined in

[discovery/discovery-service.ts:16](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/discovery/discovery-service.ts#L16)

## Methods

### findBestServer

▸ **findBestServer**(`servers`): `undefined` \| [`RecommendedServerInfo`](../interfaces/index.RecommendedServerInfo.md)

Finds the best server from a list of recommended servers by score.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `servers` | [`RecommendedServerInfo`](../interfaces/index.RecommendedServerInfo.md)[] | A list of recommended servers. |

#### Returns

`undefined` \| [`RecommendedServerInfo`](../interfaces/index.RecommendedServerInfo.md)

The best scoring recommended server.

#### Defined in

[discovery/discovery-service.ts:28](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/discovery/discovery-service.ts#L28)

___

### getAddressCandidates

▸ **getAddressCandidates**(`input`): `string`[]

Gets a list of address candidates url strings
from a provided url address string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `string` | A server url address string. |

#### Returns

`string`[]

A list of potential server addresses.

#### Defined in

[discovery/discovery-service.ts:49](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/discovery/discovery-service.ts#L49)

___

### getRecommendedServerCandidates

▸ **getRecommendedServerCandidates**(`input`, `minimumScore?`): `Promise`<[`RecommendedServerInfo`](../interfaces/index.RecommendedServerInfo.md)[]\>

Gets a list of recommended server information from the address
candidates of a potential server address.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `string` | A potential server address. |
| `minimumScore?` | [`RecommendedServerInfoScore`](../enums/index.RecommendedServerInfoScore.md) | The minimum server score to include in the results. |

#### Returns

`Promise`<[`RecommendedServerInfo`](../interfaces/index.RecommendedServerInfo.md)[]\>

A list of RecommendedServerInfo from the address candidates.

#### Defined in

[discovery/discovery-service.ts:74](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/discovery/discovery-service.ts#L74)

___

### getRecommendedServers

▸ **getRecommendedServers**(`servers`, `minimumScore?`): `Promise`<[`RecommendedServerInfo`](../interfaces/index.RecommendedServerInfo.md)[]\>

Gets a list of recommended server information from a provided
list of possible server addresses.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `servers` | `string`[] | A list of possible server addresses. |
| `minimumScore?` | [`RecommendedServerInfoScore`](../enums/index.RecommendedServerInfoScore.md) | The minimum server score to include in the results. |

#### Returns

`Promise`<[`RecommendedServerInfo`](../interfaces/index.RecommendedServerInfo.md)[]\>

A list of RecommendedServerInfo from the possible server addresses.

#### Defined in

[discovery/discovery-service.ts:60](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/discovery/discovery-service.ts#L60)
