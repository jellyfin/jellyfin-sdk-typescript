[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / LibraryStructureApi

# Class: LibraryStructureApi

[generated-client](../modules/generated_client.md).LibraryStructureApi

LibraryStructureApi - object-oriented interface

**`export`**

## Hierarchy

- `BaseAPI`

  ↳ **`LibraryStructureApi`**

## Table of contents

### Constructors

- [constructor](generated_client.LibraryStructureApi.md#constructor)

### Properties

- [axios](generated_client.LibraryStructureApi.md#axios)
- [basePath](generated_client.LibraryStructureApi.md#basepath)
- [configuration](generated_client.LibraryStructureApi.md#configuration)

### Methods

- [addMediaPath](generated_client.LibraryStructureApi.md#addmediapath)
- [addVirtualFolder](generated_client.LibraryStructureApi.md#addvirtualfolder)
- [getVirtualFolders](generated_client.LibraryStructureApi.md#getvirtualfolders)
- [removeMediaPath](generated_client.LibraryStructureApi.md#removemediapath)
- [removeVirtualFolder](generated_client.LibraryStructureApi.md#removevirtualfolder)
- [renameVirtualFolder](generated_client.LibraryStructureApi.md#renamevirtualfolder)
- [updateLibraryOptions](generated_client.LibraryStructureApi.md#updatelibraryoptions)
- [updateMediaPath](generated_client.LibraryStructureApi.md#updatemediapath)

## Constructors

### constructor

• **new LibraryStructureApi**(`configuration?`, `basePath?`, `axios?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](generated_client.Configuration.md) |
| `basePath` | `string` |
| `axios` | `AxiosInstance` |

#### Inherited from

BaseAPI.constructor

#### Defined in

[generated-client/base.ts:52](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/base.ts#L52)

## Properties

### axios

• `Protected` **axios**: `AxiosInstance`

#### Inherited from

BaseAPI.axios

___

### basePath

• `Protected` **basePath**: `string`

#### Inherited from

BaseAPI.basePath

___

### configuration

• `Protected` **configuration**: `undefined` \| [`Configuration`](generated_client.Configuration.md)

#### Inherited from

BaseAPI.configuration

#### Defined in

[generated-client/base.ts:50](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/base.ts#L50)

## Methods

### addMediaPath

▸ **addMediaPath**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Add a media path to a library.

**`throws`** {RequiredError}

**`memberof`** LibraryStructureApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`LibraryStructureApiAddMediaPathRequest`](../interfaces/generated_client.LibraryStructureApiAddMediaPathRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[generated-client/api/library-structure-api.ts:784](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/library-structure-api.ts#L784)

___

### addVirtualFolder

▸ **addVirtualFolder**(`requestParameters?`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Adds a virtual folder.

**`throws`** {RequiredError}

**`memberof`** LibraryStructureApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`LibraryStructureApiAddVirtualFolderRequest`](../interfaces/generated_client.LibraryStructureApiAddVirtualFolderRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[generated-client/api/library-structure-api.ts:796](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/library-structure-api.ts#L796)

___

### getVirtualFolders

▸ **getVirtualFolders**(`options?`): `Promise`<`AxiosResponse`<[`VirtualFolderInfo`](../interfaces/generated_client.VirtualFolderInfo.md)[]\>\>

**`summary`** Gets all virtual folders.

**`throws`** {RequiredError}

**`memberof`** LibraryStructureApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `any` |

#### Returns

`Promise`<`AxiosResponse`<[`VirtualFolderInfo`](../interfaces/generated_client.VirtualFolderInfo.md)[]\>\>

#### Defined in

[generated-client/api/library-structure-api.ts:807](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/library-structure-api.ts#L807)

___

### removeMediaPath

▸ **removeMediaPath**(`requestParameters?`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Remove a media path.

**`throws`** {RequiredError}

**`memberof`** LibraryStructureApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`LibraryStructureApiRemoveMediaPathRequest`](../interfaces/generated_client.LibraryStructureApiRemoveMediaPathRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[generated-client/api/library-structure-api.ts:819](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/library-structure-api.ts#L819)

___

### removeVirtualFolder

▸ **removeVirtualFolder**(`requestParameters?`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Removes a virtual folder.

**`throws`** {RequiredError}

**`memberof`** LibraryStructureApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`LibraryStructureApiRemoveVirtualFolderRequest`](../interfaces/generated_client.LibraryStructureApiRemoveVirtualFolderRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[generated-client/api/library-structure-api.ts:831](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/library-structure-api.ts#L831)

___

### renameVirtualFolder

▸ **renameVirtualFolder**(`requestParameters?`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Renames a virtual folder.

**`throws`** {RequiredError}

**`memberof`** LibraryStructureApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`LibraryStructureApiRenameVirtualFolderRequest`](../interfaces/generated_client.LibraryStructureApiRenameVirtualFolderRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[generated-client/api/library-structure-api.ts:843](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/library-structure-api.ts#L843)

___

### updateLibraryOptions

▸ **updateLibraryOptions**(`requestParameters?`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Update library options.

**`throws`** {RequiredError}

**`memberof`** LibraryStructureApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`LibraryStructureApiUpdateLibraryOptionsRequest`](../interfaces/generated_client.LibraryStructureApiUpdateLibraryOptionsRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[generated-client/api/library-structure-api.ts:855](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/library-structure-api.ts#L855)

___

### updateMediaPath

▸ **updateMediaPath**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Updates a media path.

**`throws`** {RequiredError}

**`memberof`** LibraryStructureApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`LibraryStructureApiUpdateMediaPathRequest`](../interfaces/generated_client.LibraryStructureApiUpdateMediaPathRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[generated-client/api/library-structure-api.ts:867](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/api/library-structure-api.ts#L867)
