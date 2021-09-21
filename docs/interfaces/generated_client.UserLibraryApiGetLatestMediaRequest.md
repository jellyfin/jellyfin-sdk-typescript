[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / UserLibraryApiGetLatestMediaRequest

# Interface: UserLibraryApiGetLatestMediaRequest

[generated-client](../modules/generated_client.md).UserLibraryApiGetLatestMediaRequest

Request parameters for getLatestMedia operation in UserLibraryApi.

**`export`**

**`interface`** UserLibraryApiGetLatestMediaRequest

## Table of contents

### Properties

- [enableImageTypes](generated_client.UserLibraryApiGetLatestMediaRequest.md#enableimagetypes)
- [enableImages](generated_client.UserLibraryApiGetLatestMediaRequest.md#enableimages)
- [enableUserData](generated_client.UserLibraryApiGetLatestMediaRequest.md#enableuserdata)
- [fields](generated_client.UserLibraryApiGetLatestMediaRequest.md#fields)
- [groupItems](generated_client.UserLibraryApiGetLatestMediaRequest.md#groupitems)
- [imageTypeLimit](generated_client.UserLibraryApiGetLatestMediaRequest.md#imagetypelimit)
- [includeItemTypes](generated_client.UserLibraryApiGetLatestMediaRequest.md#includeitemtypes)
- [isPlayed](generated_client.UserLibraryApiGetLatestMediaRequest.md#isplayed)
- [limit](generated_client.UserLibraryApiGetLatestMediaRequest.md#limit)
- [parentId](generated_client.UserLibraryApiGetLatestMediaRequest.md#parentid)
- [userId](generated_client.UserLibraryApiGetLatestMediaRequest.md#userid)

## Properties

### enableImageTypes

• `Optional` `Readonly` **enableImageTypes**: [`ImageType`](../enums/generated_client.ImageType.md)[]

Optional. The image types to include in the output.

**`memberof`** UserLibraryApiGetLatestMedia

#### Defined in

[generated-client/api/user-library-api.ts:890](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/user-library-api.ts#L890)

___

### enableImages

• `Optional` `Readonly` **enableImages**: `boolean`

Optional. include image information in output.

**`memberof`** UserLibraryApiGetLatestMedia

#### Defined in

[generated-client/api/user-library-api.ts:876](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/user-library-api.ts#L876)

___

### enableUserData

• `Optional` `Readonly` **enableUserData**: `boolean`

Optional. include user data.

**`memberof`** UserLibraryApiGetLatestMedia

#### Defined in

[generated-client/api/user-library-api.ts:897](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/user-library-api.ts#L897)

___

### fields

• `Optional` `Readonly` **fields**: [`ItemFields`](../enums/generated_client.ItemFields.md)[]

Optional. Specify additional fields of information to return in the output.

**`memberof`** UserLibraryApiGetLatestMedia

#### Defined in

[generated-client/api/user-library-api.ts:855](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/user-library-api.ts#L855)

___

### groupItems

• `Optional` `Readonly` **groupItems**: `boolean`

Whether or not to group items into a parent container.

**`memberof`** UserLibraryApiGetLatestMedia

#### Defined in

[generated-client/api/user-library-api.ts:911](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/user-library-api.ts#L911)

___

### imageTypeLimit

• `Optional` `Readonly` **imageTypeLimit**: `number`

Optional. the max number of images to return, per image type.

**`memberof`** UserLibraryApiGetLatestMedia

#### Defined in

[generated-client/api/user-library-api.ts:883](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/user-library-api.ts#L883)

___

### includeItemTypes

• `Optional` `Readonly` **includeItemTypes**: `string`[]

Optional. If specified, results will be filtered based on item type. This allows multiple, comma delimited.

**`memberof`** UserLibraryApiGetLatestMedia

#### Defined in

[generated-client/api/user-library-api.ts:862](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/user-library-api.ts#L862)

___

### isPlayed

• `Optional` `Readonly` **isPlayed**: `boolean`

Filter by items that are played, or not.

**`memberof`** UserLibraryApiGetLatestMedia

#### Defined in

[generated-client/api/user-library-api.ts:869](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/user-library-api.ts#L869)

___

### limit

• `Optional` `Readonly` **limit**: `number`

Return item limit.

**`memberof`** UserLibraryApiGetLatestMedia

#### Defined in

[generated-client/api/user-library-api.ts:904](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/user-library-api.ts#L904)

___

### parentId

• `Optional` `Readonly` **parentId**: `string`

Specify this to localize the search to a specific item or folder. Omit to use the root.

**`memberof`** UserLibraryApiGetLatestMedia

#### Defined in

[generated-client/api/user-library-api.ts:848](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/user-library-api.ts#L848)

___

### userId

• `Readonly` **userId**: `string`

User id.

**`memberof`** UserLibraryApiGetLatestMedia

#### Defined in

[generated-client/api/user-library-api.ts:841](https://github.com/thornbill/jellyfin-sdk-typescript/blob/029620a/src/generated-client/api/user-library-api.ts#L841)
