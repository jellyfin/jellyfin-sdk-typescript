[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / SlowResponseIssue

# Class: SlowResponseIssue

[index](../modules/index.md).SlowResponseIssue

Class representing a slow response from a server.

## Hierarchy

- [`RecommendedServerIssue`](index.RecommendedServerIssue.md)

  ↳ **`SlowResponseIssue`**

## Table of contents

### Constructors

- [constructor](index.SlowResponseIssue.md#constructor)

### Properties

- [responseTime](index.SlowResponseIssue.md#responsetime)

## Constructors

### constructor

• **new SlowResponseIssue**(`responseTime`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `responseTime` | `number` |

#### Overrides

[RecommendedServerIssue](index.RecommendedServerIssue.md).[constructor](index.RecommendedServerIssue.md#constructor)

#### Defined in

[models/recommended-server-issue.ts:26](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/models/recommended-server-issue.ts#L26)

## Properties

### responseTime

• **responseTime**: `number`

The response time from the server.

#### Defined in

[models/recommended-server-issue.ts:24](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/models/recommended-server-issue.ts#L24)
