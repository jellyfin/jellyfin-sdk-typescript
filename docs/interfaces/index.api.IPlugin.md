[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / [api](../modules/index.api.md) / IPlugin

# Interface: IPlugin

[index](../modules/index.md).[api](../modules/index.api.md).IPlugin

Defines the MediaBrowser.Common.Plugins.IPlugin.

**`export`**

**`interface`** IPlugin

## Table of contents

### Properties

- [AssemblyFilePath](index.api.IPlugin.md#assemblyfilepath)
- [CanUninstall](index.api.IPlugin.md#canuninstall)
- [DataFolderPath](index.api.IPlugin.md#datafolderpath)
- [Description](index.api.IPlugin.md#description)
- [Id](index.api.IPlugin.md#id)
- [Name](index.api.IPlugin.md#name)
- [Version](index.api.IPlugin.md#version)

## Properties

### AssemblyFilePath

• `Optional` **AssemblyFilePath**: ``null`` \| `string`

Gets the path to the assembly file.

**`memberof`** IPlugin

#### Defined in

[generated-client/models/iplugin.ts:53](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/iplugin.ts#L53)

___

### CanUninstall

• `Optional` **CanUninstall**: `boolean`

Gets a value indicating whether the plugin can be uninstalled.

**`memberof`** IPlugin

#### Defined in

[generated-client/models/iplugin.ts:59](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/iplugin.ts#L59)

___

### DataFolderPath

• `Optional` **DataFolderPath**: ``null`` \| `string`

Gets the full path to the data folder, where the plugin can store any miscellaneous files needed.

**`memberof`** IPlugin

#### Defined in

[generated-client/models/iplugin.ts:65](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/iplugin.ts#L65)

___

### Description

• `Optional` **Description**: ``null`` \| `string`

Gets the Description.

**`memberof`** IPlugin

#### Defined in

[generated-client/models/iplugin.ts:35](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/iplugin.ts#L35)

___

### Id

• `Optional` **Id**: `string`

Gets the unique id.

**`memberof`** IPlugin

#### Defined in

[generated-client/models/iplugin.ts:41](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/iplugin.ts#L41)

___

### Name

• `Optional` **Name**: ``null`` \| `string`

Gets the name of the plugin.

**`memberof`** IPlugin

#### Defined in

[generated-client/models/iplugin.ts:29](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/iplugin.ts#L29)

___

### Version

• `Optional` **Version**: [`Version`](index.api.Version.md)

**`memberof`** IPlugin

#### Defined in

[generated-client/models/iplugin.ts:47](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/iplugin.ts#L47)
