[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / LibraryStructureApiAddVirtualFolderRequest

# Interface: LibraryStructureApiAddVirtualFolderRequest

[generated-client](../modules/generated_client.md).LibraryStructureApiAddVirtualFolderRequest

Request parameters for addVirtualFolder operation in LibraryStructureApi.

**`export`**

**`interface`** LibraryStructureApiAddVirtualFolderRequest

## Table of contents

### Properties

- [addVirtualFolderDto](generated_client.LibraryStructureApiAddVirtualFolderRequest.md#addvirtualfolderdto)
- [collectionType](generated_client.LibraryStructureApiAddVirtualFolderRequest.md#collectiontype)
- [name](generated_client.LibraryStructureApiAddVirtualFolderRequest.md#name)
- [paths](generated_client.LibraryStructureApiAddVirtualFolderRequest.md#paths)
- [refreshLibrary](generated_client.LibraryStructureApiAddVirtualFolderRequest.md#refreshlibrary)

## Properties

### addVirtualFolderDto

• `Optional` `Readonly` **addVirtualFolderDto**: [`AddVirtualFolderDto`](generated_client.AddVirtualFolderDto.md)

The library options.

**`memberof`** LibraryStructureApiAddVirtualFolder

#### Defined in

[generated-client/api/library-structure-api.ts:661](https://github.com/thornbill/jellyfin-sdk-typescript/blob/21a118e/src/generated-client/api/library-structure-api.ts#L661)

___

### collectionType

• `Optional` `Readonly` **collectionType**: [`CollectionTypeOptions`](../enums/generated_client.CollectionTypeOptions.md)

The type of the collection.

**`memberof`** LibraryStructureApiAddVirtualFolder

#### Defined in

[generated-client/api/library-structure-api.ts:640](https://github.com/thornbill/jellyfin-sdk-typescript/blob/21a118e/src/generated-client/api/library-structure-api.ts#L640)

___

### name

• `Optional` `Readonly` **name**: `string`

The name of the virtual folder.

**`memberof`** LibraryStructureApiAddVirtualFolder

#### Defined in

[generated-client/api/library-structure-api.ts:633](https://github.com/thornbill/jellyfin-sdk-typescript/blob/21a118e/src/generated-client/api/library-structure-api.ts#L633)

___

### paths

• `Optional` `Readonly` **paths**: `string`[]

The paths of the virtual folder.

**`memberof`** LibraryStructureApiAddVirtualFolder

#### Defined in

[generated-client/api/library-structure-api.ts:647](https://github.com/thornbill/jellyfin-sdk-typescript/blob/21a118e/src/generated-client/api/library-structure-api.ts#L647)

___

### refreshLibrary

• `Optional` `Readonly` **refreshLibrary**: `boolean`

Whether to refresh the library.

**`memberof`** LibraryStructureApiAddVirtualFolder

#### Defined in

[generated-client/api/library-structure-api.ts:654](https://github.com/thornbill/jellyfin-sdk-typescript/blob/21a118e/src/generated-client/api/library-structure-api.ts#L654)
