[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / [discovery](../modules/index.discovery.md) / RecommendedServerDiscovery

# Class: RecommendedServerDiscovery

[index](../modules/index.md).[discovery](../modules/index.discovery.md).RecommendedServerDiscovery

Class to discover and evaluate potential servers.

## Table of contents

### Constructors

- [constructor](index.discovery.RecommendedServerDiscovery.md#constructor)

### Properties

- [jellyfin](index.discovery.RecommendedServerDiscovery.md#jellyfin)

### Methods

- [discover](index.discovery.RecommendedServerDiscovery.md#discover)
- [fetchRecommendedServerInfo](index.discovery.RecommendedServerDiscovery.md#fetchrecommendedserverinfo)

## Constructors

### constructor

• **new RecommendedServerDiscovery**(`jellyfin`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jellyfin` | [`Jellyfin`](index.Jellyfin.md) |

#### Defined in

[discovery/recommended-server-discovery.ts:83](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/discovery/recommended-server-discovery.ts#L83)

## Properties

### jellyfin

• `Private` **jellyfin**: [`Jellyfin`](index.Jellyfin.md)

#### Defined in

[discovery/recommended-server-discovery.ts:81](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/discovery/recommended-server-discovery.ts#L81)

## Methods

### discover

▸ **discover**(`servers`, `minimumScore?`): `Promise`<[`RecommendedServerInfo`](../interfaces/index.RecommendedServerInfo.md)[]\>

Fetches the RecommendedServerInfo for multiple server addresses.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `servers` | `string`[] | `undefined` | An array of server addresses. |
| `minimumScore` | [`RecommendedServerInfoScore`](../enums/index.RecommendedServerInfoScore.md) | `RecommendedServerInfoScore.BAD` | - |

#### Returns

`Promise`<[`RecommendedServerInfo`](../interfaces/index.RecommendedServerInfo.md)[]\>

The RecommendedServerInfo for each address.

#### Defined in

[discovery/recommended-server-discovery.ts:115](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/discovery/recommended-server-discovery.ts#L115)

___

### fetchRecommendedServerInfo

▸ **fetchRecommendedServerInfo**(`address`): `Promise`<[`RecommendedServerInfo`](../interfaces/index.RecommendedServerInfo.md)\>

Fetches the RecommendedServerInfo for a single server address.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | `string` | The server address. |

#### Returns

`Promise`<[`RecommendedServerInfo`](../interfaces/index.RecommendedServerInfo.md)\>

The resulting RecommendedServerInfo.

#### Defined in

[discovery/recommended-server-discovery.ts:92](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/discovery/recommended-server-discovery.ts#L92)
