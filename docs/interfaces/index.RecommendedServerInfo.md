[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / RecommendedServerInfo

# Interface: RecommendedServerInfo

[index](../modules/index.md).RecommendedServerInfo

Information about a recommended server.

## Table of contents

### Properties

- [address](index.RecommendedServerInfo.md#address)
- [issues](index.RecommendedServerInfo.md#issues)
- [responseTime](index.RecommendedServerInfo.md#responsetime)
- [score](index.RecommendedServerInfo.md#score)
- [systemInfo](index.RecommendedServerInfo.md#systeminfo)

## Properties

### address

• **address**: `string`

#### Defined in

[models/recommended-server-info.ts:21](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/models/recommended-server-info.ts#L21)

___

### issues

• **issues**: [`RecommendedServerIssue`](../classes/index.RecommendedServerIssue.md)[]

#### Defined in

[models/recommended-server-info.ts:24](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/models/recommended-server-info.ts#L24)

___

### responseTime

• **responseTime**: `number`

#### Defined in

[models/recommended-server-info.ts:22](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/models/recommended-server-info.ts#L22)

___

### score

• **score**: [`RecommendedServerInfoScore`](../enums/index.RecommendedServerInfoScore.md)

#### Defined in

[models/recommended-server-info.ts:23](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/models/recommended-server-info.ts#L23)

___

### systemInfo

• `Optional` **systemInfo**: [`PublicSystemInfo`](generated_client.PublicSystemInfo.md)

#### Defined in

[models/recommended-server-info.ts:25](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/models/recommended-server-info.ts#L25)
