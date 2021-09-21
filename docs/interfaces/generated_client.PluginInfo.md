[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / PluginInfo

# Interface: PluginInfo

[generated-client](../modules/generated_client.md).PluginInfo

This is a serializable stub class that is used by the api to provide information about installed plugins.

**`export`**

**`interface`** PluginInfo

## Table of contents

### Properties

- [CanUninstall](generated_client.PluginInfo.md#canuninstall)
- [ConfigurationFileName](generated_client.PluginInfo.md#configurationfilename)
- [Description](generated_client.PluginInfo.md#description)
- [HasImage](generated_client.PluginInfo.md#hasimage)
- [Id](generated_client.PluginInfo.md#id)
- [Name](generated_client.PluginInfo.md#name)
- [Status](generated_client.PluginInfo.md#status)
- [Version](generated_client.PluginInfo.md#version)

## Properties

### CanUninstall

• `Optional` **CanUninstall**: `boolean`

Gets or sets a value indicating whether the plugin can be uninstalled.

**`memberof`** PluginInfo

#### Defined in

[generated-client/models/plugin-info.ts:60](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/models/plugin-info.ts#L60)

___

### ConfigurationFileName

• `Optional` **ConfigurationFileName**: ``null`` \| `string`

Gets or sets the name of the configuration file.

**`memberof`** PluginInfo

#### Defined in

[generated-client/models/plugin-info.ts:42](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/models/plugin-info.ts#L42)

___

### Description

• `Optional` **Description**: ``null`` \| `string`

Gets or sets the description.

**`memberof`** PluginInfo

#### Defined in

[generated-client/models/plugin-info.ts:48](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/models/plugin-info.ts#L48)

___

### HasImage

• `Optional` **HasImage**: `boolean`

Gets or sets a value indicating whether this plugin has a valid image.

**`memberof`** PluginInfo

#### Defined in

[generated-client/models/plugin-info.ts:66](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/models/plugin-info.ts#L66)

___

### Id

• `Optional` **Id**: `string`

Gets or sets the unique id.

**`memberof`** PluginInfo

#### Defined in

[generated-client/models/plugin-info.ts:54](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/models/plugin-info.ts#L54)

___

### Name

• `Optional` **Name**: ``null`` \| `string`

Gets or sets the name.

**`memberof`** PluginInfo

#### Defined in

[generated-client/models/plugin-info.ts:30](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/models/plugin-info.ts#L30)

___

### Status

• `Optional` **Status**: [`PluginStatus`](../enums/generated_client.PluginStatus.md)

**`memberof`** PluginInfo

#### Defined in

[generated-client/models/plugin-info.ts:72](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/models/plugin-info.ts#L72)

___

### Version

• `Optional` **Version**: [`Version`](generated_client.Version.md)

**`memberof`** PluginInfo

#### Defined in

[generated-client/models/plugin-info.ts:36](https://github.com/thornbill/jellyfin-sdk-typescript/blob/b5d0506/src/generated-client/models/plugin-info.ts#L36)
