[jellyfin-sdk-typescript](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / IPlugin

# Interface: IPlugin

[generated-client](../modules/generated_client.md).IPlugin

Defines the MediaBrowser.Common.Plugins.IPlugin.

**`export`**

**`interface`** IPlugin

## Table of contents

### Properties

- [AssemblyFilePath](generated_client.IPlugin.md#assemblyfilepath)
- [CanUninstall](generated_client.IPlugin.md#canuninstall)
- [DataFolderPath](generated_client.IPlugin.md#datafolderpath)
- [Description](generated_client.IPlugin.md#description)
- [Id](generated_client.IPlugin.md#id)
- [Name](generated_client.IPlugin.md#name)
- [Version](generated_client.IPlugin.md#version)

## Properties

### AssemblyFilePath

• `Optional` **AssemblyFilePath**: ``null`` \| `string`

Gets the path to the assembly file.

**`memberof`** IPlugin

#### Defined in

[generated-client/models/iplugin.ts:53](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/models/iplugin.ts#L53)

___

### CanUninstall

• `Optional` **CanUninstall**: `boolean`

Gets a value indicating whether the plugin can be uninstalled.

**`memberof`** IPlugin

#### Defined in

[generated-client/models/iplugin.ts:59](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/models/iplugin.ts#L59)

___

### DataFolderPath

• `Optional` **DataFolderPath**: ``null`` \| `string`

Gets the full path to the data folder, where the plugin can store any miscellaneous files needed.

**`memberof`** IPlugin

#### Defined in

[generated-client/models/iplugin.ts:65](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/models/iplugin.ts#L65)

___

### Description

• `Optional` **Description**: ``null`` \| `string`

Gets the Description.

**`memberof`** IPlugin

#### Defined in

[generated-client/models/iplugin.ts:35](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/models/iplugin.ts#L35)

___

### Id

• `Optional` **Id**: `string`

Gets the unique id.

**`memberof`** IPlugin

#### Defined in

[generated-client/models/iplugin.ts:41](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/models/iplugin.ts#L41)

___

### Name

• `Optional` **Name**: ``null`` \| `string`

Gets the name of the plugin.

**`memberof`** IPlugin

#### Defined in

[generated-client/models/iplugin.ts:29](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/models/iplugin.ts#L29)

___

### Version

• `Optional` **Version**: [`Version`](generated_client.Version.md)

**`memberof`** IPlugin

#### Defined in

[generated-client/models/iplugin.ts:47](https://github.com/thornbill/jellyfin-sdk-typescript/blob/e430881/src/generated-client/models/iplugin.ts#L47)
