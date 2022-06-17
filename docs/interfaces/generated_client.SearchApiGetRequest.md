[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / SearchApiGetRequest

# Interface: SearchApiGetRequest

[generated-client](../modules/generated_client.md).SearchApiGetRequest

Request parameters for get operation in SearchApi.

**`export`**

**`interface`** SearchApiGetRequest

## Table of contents

### Properties

- [excludeItemTypes](generated_client.SearchApiGetRequest.md#excludeitemtypes)
- [includeArtists](generated_client.SearchApiGetRequest.md#includeartists)
- [includeGenres](generated_client.SearchApiGetRequest.md#includegenres)
- [includeItemTypes](generated_client.SearchApiGetRequest.md#includeitemtypes)
- [includeMedia](generated_client.SearchApiGetRequest.md#includemedia)
- [includePeople](generated_client.SearchApiGetRequest.md#includepeople)
- [includeStudios](generated_client.SearchApiGetRequest.md#includestudios)
- [isKids](generated_client.SearchApiGetRequest.md#iskids)
- [isMovie](generated_client.SearchApiGetRequest.md#ismovie)
- [isNews](generated_client.SearchApiGetRequest.md#isnews)
- [isSeries](generated_client.SearchApiGetRequest.md#isseries)
- [isSports](generated_client.SearchApiGetRequest.md#issports)
- [limit](generated_client.SearchApiGetRequest.md#limit)
- [mediaTypes](generated_client.SearchApiGetRequest.md#mediatypes)
- [parentId](generated_client.SearchApiGetRequest.md#parentid)
- [searchTerm](generated_client.SearchApiGetRequest.md#searchterm)
- [startIndex](generated_client.SearchApiGetRequest.md#startindex)
- [userId](generated_client.SearchApiGetRequest.md#userid)

## Properties

### excludeItemTypes

• `Optional` `Readonly` **excludeItemTypes**: [`BaseItemKind`](../enums/generated_client.BaseItemKind.md)[]

If specified, results with these item types are filtered out. This allows multiple, comma delimeted.

**`memberof`** SearchApiGet

#### Defined in

[generated-client/api/search-api.ts:282](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/search-api.ts#L282)

___

### includeArtists

• `Optional` `Readonly` **includeArtists**: `boolean`

Optional filter whether to include artists.

**`memberof`** SearchApiGet

#### Defined in

[generated-client/api/search-api.ts:366](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/search-api.ts#L366)

___

### includeGenres

• `Optional` `Readonly` **includeGenres**: `boolean`

Optional filter whether to include genres.

**`memberof`** SearchApiGet

#### Defined in

[generated-client/api/search-api.ts:352](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/search-api.ts#L352)

___

### includeItemTypes

• `Optional` `Readonly` **includeItemTypes**: [`BaseItemKind`](../enums/generated_client.BaseItemKind.md)[]

If specified, only results with the specified item types are returned. This allows multiple, comma delimeted.

**`memberof`** SearchApiGet

#### Defined in

[generated-client/api/search-api.ts:275](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/search-api.ts#L275)

___

### includeMedia

• `Optional` `Readonly` **includeMedia**: `boolean`

Optional filter whether to include media.

**`memberof`** SearchApiGet

#### Defined in

[generated-client/api/search-api.ts:345](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/search-api.ts#L345)

___

### includePeople

• `Optional` `Readonly` **includePeople**: `boolean`

Optional filter whether to include people.

**`memberof`** SearchApiGet

#### Defined in

[generated-client/api/search-api.ts:338](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/search-api.ts#L338)

___

### includeStudios

• `Optional` `Readonly` **includeStudios**: `boolean`

Optional filter whether to include studios.

**`memberof`** SearchApiGet

#### Defined in

[generated-client/api/search-api.ts:359](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/search-api.ts#L359)

___

### isKids

• `Optional` `Readonly` **isKids**: `boolean`

Optional filter for kids.

**`memberof`** SearchApiGet

#### Defined in

[generated-client/api/search-api.ts:324](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/search-api.ts#L324)

___

### isMovie

• `Optional` `Readonly` **isMovie**: `boolean`

Optional filter for movies.

**`memberof`** SearchApiGet

#### Defined in

[generated-client/api/search-api.ts:303](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/search-api.ts#L303)

___

### isNews

• `Optional` `Readonly` **isNews**: `boolean`

Optional filter for news.

**`memberof`** SearchApiGet

#### Defined in

[generated-client/api/search-api.ts:317](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/search-api.ts#L317)

___

### isSeries

• `Optional` `Readonly` **isSeries**: `boolean`

Optional filter for series.

**`memberof`** SearchApiGet

#### Defined in

[generated-client/api/search-api.ts:310](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/search-api.ts#L310)

___

### isSports

• `Optional` `Readonly` **isSports**: `boolean`

Optional filter for sports.

**`memberof`** SearchApiGet

#### Defined in

[generated-client/api/search-api.ts:331](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/search-api.ts#L331)

___

### limit

• `Optional` `Readonly` **limit**: `number`

Optional. The maximum number of records to return.

**`memberof`** SearchApiGet

#### Defined in

[generated-client/api/search-api.ts:261](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/search-api.ts#L261)

___

### mediaTypes

• `Optional` `Readonly` **mediaTypes**: `string`[]

If specified, only results with the specified media types are returned. This allows multiple, comma delimeted.

**`memberof`** SearchApiGet

#### Defined in

[generated-client/api/search-api.ts:289](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/search-api.ts#L289)

___

### parentId

• `Optional` `Readonly` **parentId**: `string`

If specified, only children of the parent are returned.

**`memberof`** SearchApiGet

#### Defined in

[generated-client/api/search-api.ts:296](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/search-api.ts#L296)

___

### searchTerm

• `Readonly` **searchTerm**: `string`

The search term to filter on.

**`memberof`** SearchApiGet

#### Defined in

[generated-client/api/search-api.ts:247](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/search-api.ts#L247)

___

### startIndex

• `Optional` `Readonly` **startIndex**: `number`

Optional. The record index to start at. All items with a lower index will be dropped from the results.

**`memberof`** SearchApiGet

#### Defined in

[generated-client/api/search-api.ts:254](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/search-api.ts#L254)

___

### userId

• `Optional` `Readonly` **userId**: `string`

Optional. Supply a user id to search within a user\&#39;s library or omit to search all.

**`memberof`** SearchApiGet

#### Defined in

[generated-client/api/search-api.ts:268](https://github.com/thornbill/jellyfin-sdk-typescript/blob/3ae780a/src/generated-client/api/search-api.ts#L268)
