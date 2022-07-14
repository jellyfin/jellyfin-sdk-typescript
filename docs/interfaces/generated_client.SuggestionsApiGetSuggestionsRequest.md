[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / SuggestionsApiGetSuggestionsRequest

# Interface: SuggestionsApiGetSuggestionsRequest

[generated-client](../modules/generated_client.md).SuggestionsApiGetSuggestionsRequest

Request parameters for getSuggestions operation in SuggestionsApi.

**`export`**

**`interface`** SuggestionsApiGetSuggestionsRequest

## Table of contents

### Properties

- [enableTotalRecordCount](generated_client.SuggestionsApiGetSuggestionsRequest.md#enabletotalrecordcount)
- [limit](generated_client.SuggestionsApiGetSuggestionsRequest.md#limit)
- [mediaType](generated_client.SuggestionsApiGetSuggestionsRequest.md#mediatype)
- [startIndex](generated_client.SuggestionsApiGetSuggestionsRequest.md#startindex)
- [type](generated_client.SuggestionsApiGetSuggestionsRequest.md#type)
- [userId](generated_client.SuggestionsApiGetSuggestionsRequest.md#userid)

## Properties

### enableTotalRecordCount

• `Optional` `Readonly` **enableTotalRecordCount**: `boolean`

Whether to enable the total record count.

**`memberof`** SuggestionsApiGetSuggestions

#### Defined in

[generated-client/api/suggestions-api.ts:195](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/suggestions-api.ts#L195)

___

### limit

• `Optional` `Readonly` **limit**: `number`

Optional. The limit.

**`memberof`** SuggestionsApiGetSuggestions

#### Defined in

[generated-client/api/suggestions-api.ts:188](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/suggestions-api.ts#L188)

___

### mediaType

• `Optional` `Readonly` **mediaType**: `string`[]

The media types.

**`memberof`** SuggestionsApiGetSuggestions

#### Defined in

[generated-client/api/suggestions-api.ts:167](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/suggestions-api.ts#L167)

___

### startIndex

• `Optional` `Readonly` **startIndex**: `number`

Optional. The start index.

**`memberof`** SuggestionsApiGetSuggestions

#### Defined in

[generated-client/api/suggestions-api.ts:181](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/suggestions-api.ts#L181)

___

### type

• `Optional` `Readonly` **type**: [`BaseItemKind`](../enums/generated_client.BaseItemKind.md)[]

The type.

**`memberof`** SuggestionsApiGetSuggestions

#### Defined in

[generated-client/api/suggestions-api.ts:174](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/suggestions-api.ts#L174)

___

### userId

• `Readonly` **userId**: `string`

The user id.

**`memberof`** SuggestionsApiGetSuggestions

#### Defined in

[generated-client/api/suggestions-api.ts:160](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/suggestions-api.ts#L160)
