[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / PackageApiInstallPackageRequest

# Interface: PackageApiInstallPackageRequest

[generated-client](../modules/generated_client.md).PackageApiInstallPackageRequest

Request parameters for installPackage operation in PackageApi.

**`export`**

**`interface`** PackageApiInstallPackageRequest

## Table of contents

### Properties

- [assemblyGuid](generated_client.PackageApiInstallPackageRequest.md#assemblyguid)
- [name](generated_client.PackageApiInstallPackageRequest.md#name)
- [repositoryUrl](generated_client.PackageApiInstallPackageRequest.md#repositoryurl)
- [version](generated_client.PackageApiInstallPackageRequest.md#version)

## Properties

### assemblyGuid

• `Optional` `Readonly` **assemblyGuid**: `string`

GUID of the associated assembly.

**`memberof`** PackageApiInstallPackage

#### Defined in

[generated-client/api/package-api.ts:477](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/package-api.ts#L477)

___

### name

• `Readonly` **name**: `string`

Package name.

**`memberof`** PackageApiInstallPackage

#### Defined in

[generated-client/api/package-api.ts:470](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/package-api.ts#L470)

___

### repositoryUrl

• `Optional` `Readonly` **repositoryUrl**: `string`

Optional. Specify the repository to install from.

**`memberof`** PackageApiInstallPackage

#### Defined in

[generated-client/api/package-api.ts:491](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/package-api.ts#L491)

___

### version

• `Optional` `Readonly` **version**: `string`

Optional version. Defaults to latest version.

**`memberof`** PackageApiInstallPackage

#### Defined in

[generated-client/api/package-api.ts:484](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c65c42e/src/generated-client/api/package-api.ts#L484)
