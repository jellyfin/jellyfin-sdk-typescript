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

[generated-client/api/user-library-api.ts:892](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/user-library-api.ts#L892)

___

### enableImages

• `Optional` `Readonly` **enableImages**: `boolean`

Optional. include image information in output.

**`memberof`** UserLibraryApiGetLatestMedia

#### Defined in

[generated-client/api/user-library-api.ts:878](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/user-library-api.ts#L878)

___

### enableUserData

• `Optional` `Readonly` **enableUserData**: `boolean`

Optional. include user data.

**`memberof`** UserLibraryApiGetLatestMedia

#### Defined in

[generated-client/api/user-library-api.ts:899](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/user-library-api.ts#L899)

___

### fields

• `Optional` `Readonly` **fields**: [`ItemFields`](../enums/generated_client.ItemFields.md)[]

Optional. Specify additional fields of information to return in the output.

**`memberof`** UserLibraryApiGetLatestMedia

#### Defined in

[generated-client/api/user-library-api.ts:857](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/user-library-api.ts#L857)

___

### groupItems

• `Optional` `Readonly` **groupItems**: `boolean`

Whether or not to group items into a parent container.

**`memberof`** UserLibraryApiGetLatestMedia

#### Defined in

[generated-client/api/user-library-api.ts:913](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/user-library-api.ts#L913)

___

### imageTypeLimit

• `Optional` `Readonly` **imageTypeLimit**: `number`

Optional. the max number of images to return, per image type.

**`memberof`** UserLibraryApiGetLatestMedia

#### Defined in

[generated-client/api/user-library-api.ts:885](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/user-library-api.ts#L885)

___

### includeItemTypes

• `Optional` `Readonly` **includeItemTypes**: [`BaseItemKind`](../enums/generated_client.BaseItemKind.md)[]

Optional. If specified, results will be filtered based on item type. This allows multiple, comma delimited.

**`memberof`** UserLibraryApiGetLatestMedia

#### Defined in

[generated-client/api/user-library-api.ts:864](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/user-library-api.ts#L864)

___

### isPlayed

• `Optional` `Readonly` **isPlayed**: `boolean`

Filter by items that are played, or not.

**`memberof`** UserLibraryApiGetLatestMedia

#### Defined in

[generated-client/api/user-library-api.ts:871](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/user-library-api.ts#L871)

___

### limit

• `Optional` `Readonly` **limit**: `number`

Return item limit.

**`memberof`** UserLibraryApiGetLatestMedia

#### Defined in

[generated-client/api/user-library-api.ts:906](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/user-library-api.ts#L906)

___

### parentId

• `Optional` `Readonly` **parentId**: `string`

Specify this to localize the search to a specific item or folder. Omit to use the root.

**`memberof`** UserLibraryApiGetLatestMedia

#### Defined in

[generated-client/api/user-library-api.ts:850](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/user-library-api.ts#L850)

___

### userId

• `Readonly` **userId**: `string`

User id.

**`memberof`** UserLibraryApiGetLatestMedia

#### Defined in

[generated-client/api/user-library-api.ts:843](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/user-library-api.ts#L843)
