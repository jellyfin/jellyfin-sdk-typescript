[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / Discovery

# Class: Discovery

[index](../modules/index.md).Discovery

## Table of contents

### Constructors

- [constructor](index.Discovery.md#constructor)

### Properties

- [jellyfin](index.Discovery.md#jellyfin)

### Methods

- [getAddressCandidates](index.Discovery.md#getaddresscandidates)

## Constructors

### constructor

• **new Discovery**(`jellyfin`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jellyfin` | [`Jellyfin`](index.Jellyfin.md) |

#### Defined in

[discovery.ts:14](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/discovery.ts#L14)

## Properties

### jellyfin

• `Private` **jellyfin**: [`Jellyfin`](index.Jellyfin.md)

#### Defined in

[discovery.ts:12](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/discovery.ts#L12)

## Methods

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

[discovery.ts:24](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/discovery.ts#L24)
