[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / [api](../modules/index.api.md) / DisplayPreferencesDto

# Interface: DisplayPreferencesDto

[index](../modules/index.md).[api](../modules/index.api.md).DisplayPreferencesDto

Defines the display preferences for any item that supports them (usually Folders).

**`export`**

**`interface`** DisplayPreferencesDto

## Table of contents

### Properties

- [Client](index.api.DisplayPreferencesDto.md#client)
- [CustomPrefs](index.api.DisplayPreferencesDto.md#customprefs)
- [Id](index.api.DisplayPreferencesDto.md#id)
- [IndexBy](index.api.DisplayPreferencesDto.md#indexby)
- [PrimaryImageHeight](index.api.DisplayPreferencesDto.md#primaryimageheight)
- [PrimaryImageWidth](index.api.DisplayPreferencesDto.md#primaryimagewidth)
- [RememberIndexing](index.api.DisplayPreferencesDto.md#rememberindexing)
- [RememberSorting](index.api.DisplayPreferencesDto.md#remembersorting)
- [ScrollDirection](index.api.DisplayPreferencesDto.md#scrolldirection)
- [ShowBackdrop](index.api.DisplayPreferencesDto.md#showbackdrop)
- [ShowSidebar](index.api.DisplayPreferencesDto.md#showsidebar)
- [SortBy](index.api.DisplayPreferencesDto.md#sortby)
- [SortOrder](index.api.DisplayPreferencesDto.md#sortorder)
- [ViewType](index.api.DisplayPreferencesDto.md#viewtype)

## Properties

### Client

• `Optional` **Client**: ``null`` \| `string`

Gets or sets the client.

**`memberof`** DisplayPreferencesDto

#### Defined in

[generated-client/models/display-preferences-dto.ts:108](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/display-preferences-dto.ts#L108)

___

### CustomPrefs

• `Optional` **CustomPrefs**: ``null`` \| { [key: string]: `string`;  }

Gets or sets the custom prefs.

**`memberof`** DisplayPreferencesDto

#### Defined in

[generated-client/models/display-preferences-dto.ts:72](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/display-preferences-dto.ts#L72)

___

### Id

• `Optional` **Id**: ``null`` \| `string`

Gets or sets the user id.

**`memberof`** DisplayPreferencesDto

#### Defined in

[generated-client/models/display-preferences-dto.ts:30](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/display-preferences-dto.ts#L30)

___

### IndexBy

• `Optional` **IndexBy**: ``null`` \| `string`

Gets or sets the index by.

**`memberof`** DisplayPreferencesDto

#### Defined in

[generated-client/models/display-preferences-dto.ts:48](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/display-preferences-dto.ts#L48)

___

### PrimaryImageHeight

• `Optional` **PrimaryImageHeight**: `number`

Gets or sets the height of the primary image.

**`memberof`** DisplayPreferencesDto

#### Defined in

[generated-client/models/display-preferences-dto.ts:60](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/display-preferences-dto.ts#L60)

___

### PrimaryImageWidth

• `Optional` **PrimaryImageWidth**: `number`

Gets or sets the width of the primary image.

**`memberof`** DisplayPreferencesDto

#### Defined in

[generated-client/models/display-preferences-dto.ts:66](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/display-preferences-dto.ts#L66)

___

### RememberIndexing

• `Optional` **RememberIndexing**: `boolean`

Gets or sets a value indicating whether [remember indexing].

**`memberof`** DisplayPreferencesDto

#### Defined in

[generated-client/models/display-preferences-dto.ts:54](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/display-preferences-dto.ts#L54)

___

### RememberSorting

• `Optional` **RememberSorting**: `boolean`

Gets or sets a value indicating whether [remember sorting].

**`memberof`** DisplayPreferencesDto

#### Defined in

[generated-client/models/display-preferences-dto.ts:90](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/display-preferences-dto.ts#L90)

___

### ScrollDirection

• `Optional` **ScrollDirection**: [`ScrollDirection`](../enums/index.api.ScrollDirection.md)

**`memberof`** DisplayPreferencesDto

#### Defined in

[generated-client/models/display-preferences-dto.ts:78](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/display-preferences-dto.ts#L78)

___

### ShowBackdrop

• `Optional` **ShowBackdrop**: `boolean`

Gets or sets a value indicating whether to show backdrops on this item.

**`memberof`** DisplayPreferencesDto

#### Defined in

[generated-client/models/display-preferences-dto.ts:84](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/display-preferences-dto.ts#L84)

___

### ShowSidebar

• `Optional` **ShowSidebar**: `boolean`

Gets or sets a value indicating whether [show sidebar].

**`memberof`** DisplayPreferencesDto

#### Defined in

[generated-client/models/display-preferences-dto.ts:102](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/display-preferences-dto.ts#L102)

___

### SortBy

• `Optional` **SortBy**: ``null`` \| `string`

Gets or sets the sort by.

**`memberof`** DisplayPreferencesDto

#### Defined in

[generated-client/models/display-preferences-dto.ts:42](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/display-preferences-dto.ts#L42)

___

### SortOrder

• `Optional` **SortOrder**: [`SortOrder`](../enums/index.api.SortOrder.md)

**`memberof`** DisplayPreferencesDto

#### Defined in

[generated-client/models/display-preferences-dto.ts:96](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/display-preferences-dto.ts#L96)

___

### ViewType

• `Optional` **ViewType**: ``null`` \| `string`

Gets or sets the type of the view.

**`memberof`** DisplayPreferencesDto

#### Defined in

[generated-client/models/display-preferences-dto.ts:36](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/display-preferences-dto.ts#L36)
