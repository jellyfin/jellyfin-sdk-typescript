[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / SeriesTimerInfoDto

# Interface: SeriesTimerInfoDto

[generated-client](../modules/generated_client.md).SeriesTimerInfoDto

Class SeriesTimerInfoDto.

**`export`**

**`interface`** SeriesTimerInfoDto

## Table of contents

### Properties

- [ChannelId](generated_client.SeriesTimerInfoDto.md#channelid)
- [ChannelName](generated_client.SeriesTimerInfoDto.md#channelname)
- [ChannelPrimaryImageTag](generated_client.SeriesTimerInfoDto.md#channelprimaryimagetag)
- [DayPattern](generated_client.SeriesTimerInfoDto.md#daypattern)
- [Days](generated_client.SeriesTimerInfoDto.md#days)
- [EndDate](generated_client.SeriesTimerInfoDto.md#enddate)
- [ExternalChannelId](generated_client.SeriesTimerInfoDto.md#externalchannelid)
- [ExternalId](generated_client.SeriesTimerInfoDto.md#externalid)
- [ExternalProgramId](generated_client.SeriesTimerInfoDto.md#externalprogramid)
- [Id](generated_client.SeriesTimerInfoDto.md#id)
- [ImageTags](generated_client.SeriesTimerInfoDto.md#imagetags)
- [IsPostPaddingRequired](generated_client.SeriesTimerInfoDto.md#ispostpaddingrequired)
- [IsPrePaddingRequired](generated_client.SeriesTimerInfoDto.md#isprepaddingrequired)
- [KeepUntil](generated_client.SeriesTimerInfoDto.md#keepuntil)
- [KeepUpTo](generated_client.SeriesTimerInfoDto.md#keepupto)
- [Name](generated_client.SeriesTimerInfoDto.md#name)
- [Overview](generated_client.SeriesTimerInfoDto.md#overview)
- [ParentBackdropImageTags](generated_client.SeriesTimerInfoDto.md#parentbackdropimagetags)
- [ParentBackdropItemId](generated_client.SeriesTimerInfoDto.md#parentbackdropitemid)
- [ParentPrimaryImageItemId](generated_client.SeriesTimerInfoDto.md#parentprimaryimageitemid)
- [ParentPrimaryImageTag](generated_client.SeriesTimerInfoDto.md#parentprimaryimagetag)
- [ParentThumbImageTag](generated_client.SeriesTimerInfoDto.md#parentthumbimagetag)
- [ParentThumbItemId](generated_client.SeriesTimerInfoDto.md#parentthumbitemid)
- [PostPaddingSeconds](generated_client.SeriesTimerInfoDto.md#postpaddingseconds)
- [PrePaddingSeconds](generated_client.SeriesTimerInfoDto.md#prepaddingseconds)
- [Priority](generated_client.SeriesTimerInfoDto.md#priority)
- [ProgramId](generated_client.SeriesTimerInfoDto.md#programid)
- [RecordAnyChannel](generated_client.SeriesTimerInfoDto.md#recordanychannel)
- [RecordAnyTime](generated_client.SeriesTimerInfoDto.md#recordanytime)
- [RecordNewOnly](generated_client.SeriesTimerInfoDto.md#recordnewonly)
- [ServerId](generated_client.SeriesTimerInfoDto.md#serverid)
- [ServiceName](generated_client.SeriesTimerInfoDto.md#servicename)
- [SkipEpisodesInLibrary](generated_client.SeriesTimerInfoDto.md#skipepisodesinlibrary)
- [StartDate](generated_client.SeriesTimerInfoDto.md#startdate)
- [Type](generated_client.SeriesTimerInfoDto.md#type)

## Properties

### ChannelId

• `Optional` **ChannelId**: `string`

ChannelId of the recording.

**`memberof`** SeriesTimerInfoDto

#### Defined in

[generated-client/models/series-timer-info-dto.ts:55](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/models/series-timer-info-dto.ts#L55)

___

### ChannelName

• `Optional` **ChannelName**: ``null`` \| `string`

ChannelName of the recording.

**`memberof`** SeriesTimerInfoDto

#### Defined in

[generated-client/models/series-timer-info-dto.ts:67](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/models/series-timer-info-dto.ts#L67)

___

### ChannelPrimaryImageTag

• `Optional` **ChannelPrimaryImageTag**: ``null`` \| `string`

**`memberof`** SeriesTimerInfoDto

#### Defined in

[generated-client/models/series-timer-info-dto.ts:73](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/models/series-timer-info-dto.ts#L73)

___

### DayPattern

• `Optional` **DayPattern**: [`DayPattern`](../enums/generated_client.DayPattern.md)

**`memberof`** SeriesTimerInfoDto

#### Defined in

[generated-client/models/series-timer-info-dto.ts:205](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/models/series-timer-info-dto.ts#L205)

___

### Days

• `Optional` **Days**: ``null`` \| [`DayOfWeek`](../enums/generated_client.DayOfWeek.md)[]

Gets or sets the days.

**`memberof`** SeriesTimerInfoDto

#### Defined in

[generated-client/models/series-timer-info-dto.ts:199](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/models/series-timer-info-dto.ts#L199)

___

### EndDate

• `Optional` **EndDate**: `string`

The end date of the recording, in UTC.

**`memberof`** SeriesTimerInfoDto

#### Defined in

[generated-client/models/series-timer-info-dto.ts:109](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/models/series-timer-info-dto.ts#L109)

___

### ExternalChannelId

• `Optional` **ExternalChannelId**: ``null`` \| `string`

Gets or sets the external channel identifier.

**`memberof`** SeriesTimerInfoDto

#### Defined in

[generated-client/models/series-timer-info-dto.ts:61](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/models/series-timer-info-dto.ts#L61)

___

### ExternalId

• `Optional` **ExternalId**: ``null`` \| `string`

Gets or sets the external identifier.

**`memberof`** SeriesTimerInfoDto

#### Defined in

[generated-client/models/series-timer-info-dto.ts:49](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/models/series-timer-info-dto.ts#L49)

___

### ExternalProgramId

• `Optional` **ExternalProgramId**: ``null`` \| `string`

Gets or sets the external program identifier.

**`memberof`** SeriesTimerInfoDto

#### Defined in

[generated-client/models/series-timer-info-dto.ts:85](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/models/series-timer-info-dto.ts#L85)

___

### Id

• `Optional` **Id**: ``null`` \| `string`

Id of the recording.

**`memberof`** SeriesTimerInfoDto

#### Defined in

[generated-client/models/series-timer-info-dto.ts:31](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/models/series-timer-info-dto.ts#L31)

___

### ImageTags

• `Optional` **ImageTags**: ``null`` \| { [key: string]: `string`;  }

Gets or sets the image tags.

**`memberof`** SeriesTimerInfoDto

#### Defined in

[generated-client/models/series-timer-info-dto.ts:211](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/models/series-timer-info-dto.ts#L211)

___

### IsPostPaddingRequired

• `Optional` **IsPostPaddingRequired**: `boolean`

Gets or sets a value indicating whether this instance is post padding required.

**`memberof`** SeriesTimerInfoDto

#### Defined in

[generated-client/models/series-timer-info-dto.ts:157](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/models/series-timer-info-dto.ts#L157)

___

### IsPrePaddingRequired

• `Optional` **IsPrePaddingRequired**: `boolean`

Gets or sets a value indicating whether this instance is pre padding required.

**`memberof`** SeriesTimerInfoDto

#### Defined in

[generated-client/models/series-timer-info-dto.ts:139](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/models/series-timer-info-dto.ts#L139)

___

### KeepUntil

• `Optional` **KeepUntil**: [`KeepUntil`](../enums/generated_client.KeepUntil.md)

**`memberof`** SeriesTimerInfoDto

#### Defined in

[generated-client/models/series-timer-info-dto.ts:163](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/models/series-timer-info-dto.ts#L163)

___

### KeepUpTo

• `Optional` **KeepUpTo**: `number`

**`memberof`** SeriesTimerInfoDto

#### Defined in

[generated-client/models/series-timer-info-dto.ts:187](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/models/series-timer-info-dto.ts#L187)

___

### Name

• `Optional` **Name**: ``null`` \| `string`

Name of the recording.

**`memberof`** SeriesTimerInfoDto

#### Defined in

[generated-client/models/series-timer-info-dto.ts:91](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/models/series-timer-info-dto.ts#L91)

___

### Overview

• `Optional` **Overview**: ``null`` \| `string`

Description of the recording.

**`memberof`** SeriesTimerInfoDto

#### Defined in

[generated-client/models/series-timer-info-dto.ts:97](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/models/series-timer-info-dto.ts#L97)

___

### ParentBackdropImageTags

• `Optional` **ParentBackdropImageTags**: ``null`` \| `string`[]

Gets or sets the parent backdrop image tags.

**`memberof`** SeriesTimerInfoDto

#### Defined in

[generated-client/models/series-timer-info-dto.ts:151](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/models/series-timer-info-dto.ts#L151)

___

### ParentBackdropItemId

• `Optional` **ParentBackdropItemId**: ``null`` \| `string`

If the item does not have any backdrops, this will hold the Id of the Parent that has one.

**`memberof`** SeriesTimerInfoDto

#### Defined in

[generated-client/models/series-timer-info-dto.ts:145](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/models/series-timer-info-dto.ts#L145)

___

### ParentPrimaryImageItemId

• `Optional` **ParentPrimaryImageItemId**: ``null`` \| `string`

Gets or sets the parent primary image item identifier.

**`memberof`** SeriesTimerInfoDto

#### Defined in

[generated-client/models/series-timer-info-dto.ts:229](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/models/series-timer-info-dto.ts#L229)

___

### ParentPrimaryImageTag

• `Optional` **ParentPrimaryImageTag**: ``null`` \| `string`

Gets or sets the parent primary image tag.

**`memberof`** SeriesTimerInfoDto

#### Defined in

[generated-client/models/series-timer-info-dto.ts:235](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/models/series-timer-info-dto.ts#L235)

___

### ParentThumbImageTag

• `Optional` **ParentThumbImageTag**: ``null`` \| `string`

Gets or sets the parent thumb image tag.

**`memberof`** SeriesTimerInfoDto

#### Defined in

[generated-client/models/series-timer-info-dto.ts:223](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/models/series-timer-info-dto.ts#L223)

___

### ParentThumbItemId

• `Optional` **ParentThumbItemId**: ``null`` \| `string`

Gets or sets the parent thumb item id.

**`memberof`** SeriesTimerInfoDto

#### Defined in

[generated-client/models/series-timer-info-dto.ts:217](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/models/series-timer-info-dto.ts#L217)

___

### PostPaddingSeconds

• `Optional` **PostPaddingSeconds**: `number`

Gets or sets the post padding seconds.

**`memberof`** SeriesTimerInfoDto

#### Defined in

[generated-client/models/series-timer-info-dto.ts:133](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/models/series-timer-info-dto.ts#L133)

___

### PrePaddingSeconds

• `Optional` **PrePaddingSeconds**: `number`

Gets or sets the pre padding seconds.

**`memberof`** SeriesTimerInfoDto

#### Defined in

[generated-client/models/series-timer-info-dto.ts:127](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/models/series-timer-info-dto.ts#L127)

___

### Priority

• `Optional` **Priority**: `number`

Gets or sets the priority.

**`memberof`** SeriesTimerInfoDto

#### Defined in

[generated-client/models/series-timer-info-dto.ts:121](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/models/series-timer-info-dto.ts#L121)

___

### ProgramId

• `Optional` **ProgramId**: ``null`` \| `string`

Gets or sets the program identifier.

**`memberof`** SeriesTimerInfoDto

#### Defined in

[generated-client/models/series-timer-info-dto.ts:79](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/models/series-timer-info-dto.ts#L79)

___

### RecordAnyChannel

• `Optional` **RecordAnyChannel**: `boolean`

Gets or sets a value indicating whether [record any channel].

**`memberof`** SeriesTimerInfoDto

#### Defined in

[generated-client/models/series-timer-info-dto.ts:181](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/models/series-timer-info-dto.ts#L181)

___

### RecordAnyTime

• `Optional` **RecordAnyTime**: `boolean`

Gets or sets a value indicating whether [record any time].

**`memberof`** SeriesTimerInfoDto

#### Defined in

[generated-client/models/series-timer-info-dto.ts:169](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/models/series-timer-info-dto.ts#L169)

___

### RecordNewOnly

• `Optional` **RecordNewOnly**: `boolean`

Gets or sets a value indicating whether [record new only].

**`memberof`** SeriesTimerInfoDto

#### Defined in

[generated-client/models/series-timer-info-dto.ts:193](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/models/series-timer-info-dto.ts#L193)

___

### ServerId

• `Optional` **ServerId**: ``null`` \| `string`

Gets or sets the server identifier.

**`memberof`** SeriesTimerInfoDto

#### Defined in

[generated-client/models/series-timer-info-dto.ts:43](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/models/series-timer-info-dto.ts#L43)

___

### ServiceName

• `Optional` **ServiceName**: ``null`` \| `string`

Gets or sets the name of the service.

**`memberof`** SeriesTimerInfoDto

#### Defined in

[generated-client/models/series-timer-info-dto.ts:115](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/models/series-timer-info-dto.ts#L115)

___

### SkipEpisodesInLibrary

• `Optional` **SkipEpisodesInLibrary**: `boolean`

**`memberof`** SeriesTimerInfoDto

#### Defined in

[generated-client/models/series-timer-info-dto.ts:175](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/models/series-timer-info-dto.ts#L175)

___

### StartDate

• `Optional` **StartDate**: `string`

The start date of the recording, in UTC.

**`memberof`** SeriesTimerInfoDto

#### Defined in

[generated-client/models/series-timer-info-dto.ts:103](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/models/series-timer-info-dto.ts#L103)

___

### Type

• `Optional` **Type**: ``null`` \| `string`

**`memberof`** SeriesTimerInfoDto

#### Defined in

[generated-client/models/series-timer-info-dto.ts:37](https://github.com/thornbill/jellyfin-sdk-typescript/blob/1142a3e/src/generated-client/models/series-timer-info-dto.ts#L37)
