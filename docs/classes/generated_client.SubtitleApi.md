[jellyfin-sdk-typescript](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / SubtitleApi

# Class: SubtitleApi

[generated-client](../modules/generated_client.md).SubtitleApi

SubtitleApi - object-oriented interface

**`export`**

## Hierarchy

- `BaseAPI`

  ↳ **`SubtitleApi`**

## Table of contents

### Constructors

- [constructor](generated_client.SubtitleApi.md#constructor)

### Properties

- [axios](generated_client.SubtitleApi.md#axios)
- [basePath](generated_client.SubtitleApi.md#basepath)
- [configuration](generated_client.SubtitleApi.md#configuration)

### Methods

- [deleteSubtitle](generated_client.SubtitleApi.md#deletesubtitle)
- [downloadRemoteSubtitles](generated_client.SubtitleApi.md#downloadremotesubtitles)
- [getFallbackFont](generated_client.SubtitleApi.md#getfallbackfont)
- [getFallbackFontList](generated_client.SubtitleApi.md#getfallbackfontlist)
- [getRemoteSubtitles](generated_client.SubtitleApi.md#getremotesubtitles)
- [getSubtitle](generated_client.SubtitleApi.md#getsubtitle)
- [getSubtitlePlaylist](generated_client.SubtitleApi.md#getsubtitleplaylist)
- [getSubtitleWithTicks](generated_client.SubtitleApi.md#getsubtitlewithticks)
- [searchRemoteSubtitles](generated_client.SubtitleApi.md#searchremotesubtitles)
- [uploadSubtitle](generated_client.SubtitleApi.md#uploadsubtitle)

## Constructors

### constructor

• **new SubtitleApi**(`configuration?`, `basePath?`, `axios?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](index.Configuration.md) |
| `basePath` | `string` |
| `axios` | `AxiosInstance` |

#### Inherited from

BaseAPI.constructor

#### Defined in

[generated-client/base.ts:52](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/base.ts#L52)

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

• `Protected` **configuration**: `undefined` \| [`Configuration`](index.Configuration.md)

#### Inherited from

BaseAPI.configuration

#### Defined in

[generated-client/base.ts:50](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/base.ts#L50)

## Methods

### deleteSubtitle

▸ **deleteSubtitle**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Deletes an external subtitle file.

**`throws`** {RequiredError}

**`memberof`** SubtitleApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`SubtitleApiDeleteSubtitleRequest`](../interfaces/generated_client.SubtitleApiDeleteSubtitleRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[generated-client/api/subtitle-api.ts:1194](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/subtitle-api.ts#L1194)

___

### downloadRemoteSubtitles

▸ **downloadRemoteSubtitles**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Downloads a remote subtitle.

**`throws`** {RequiredError}

**`memberof`** SubtitleApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`SubtitleApiDownloadRemoteSubtitlesRequest`](../interfaces/generated_client.SubtitleApiDownloadRemoteSubtitlesRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[generated-client/api/subtitle-api.ts:1206](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/subtitle-api.ts#L1206)

___

### getFallbackFont

▸ **getFallbackFont**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`any`\>\>

**`summary`** Gets a fallback font file.

**`throws`** {RequiredError}

**`memberof`** SubtitleApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`SubtitleApiGetFallbackFontRequest`](../interfaces/generated_client.SubtitleApiGetFallbackFontRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`any`\>\>

#### Defined in

[generated-client/api/subtitle-api.ts:1218](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/subtitle-api.ts#L1218)

___

### getFallbackFontList

▸ **getFallbackFontList**(`options?`): `Promise`<`AxiosResponse`<[`FontFile`](../interfaces/generated_client.FontFile.md)[]\>\>

**`summary`** Gets a list of available fallback font files.

**`throws`** {RequiredError}

**`memberof`** SubtitleApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `any` |

#### Returns

`Promise`<`AxiosResponse`<[`FontFile`](../interfaces/generated_client.FontFile.md)[]\>\>

#### Defined in

[generated-client/api/subtitle-api.ts:1229](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/subtitle-api.ts#L1229)

___

### getRemoteSubtitles

▸ **getRemoteSubtitles**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`any`\>\>

**`summary`** Gets the remote subtitles.

**`throws`** {RequiredError}

**`memberof`** SubtitleApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`SubtitleApiGetRemoteSubtitlesRequest`](../interfaces/generated_client.SubtitleApiGetRemoteSubtitlesRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`any`\>\>

#### Defined in

[generated-client/api/subtitle-api.ts:1241](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/subtitle-api.ts#L1241)

___

### getSubtitle

▸ **getSubtitle**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`any`\>\>

**`summary`** Gets subtitles in a specified format.

**`throws`** {RequiredError}

**`memberof`** SubtitleApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`SubtitleApiGetSubtitleRequest`](../interfaces/generated_client.SubtitleApiGetSubtitleRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`any`\>\>

#### Defined in

[generated-client/api/subtitle-api.ts:1253](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/subtitle-api.ts#L1253)

___

### getSubtitlePlaylist

▸ **getSubtitlePlaylist**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`any`\>\>

**`summary`** Gets an HLS subtitle playlist.

**`throws`** {RequiredError}

**`memberof`** SubtitleApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`SubtitleApiGetSubtitlePlaylistRequest`](../interfaces/generated_client.SubtitleApiGetSubtitlePlaylistRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`any`\>\>

#### Defined in

[generated-client/api/subtitle-api.ts:1265](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/subtitle-api.ts#L1265)

___

### getSubtitleWithTicks

▸ **getSubtitleWithTicks**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`any`\>\>

**`summary`** Gets subtitles in a specified format.

**`throws`** {RequiredError}

**`memberof`** SubtitleApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`SubtitleApiGetSubtitleWithTicksRequest`](../interfaces/generated_client.SubtitleApiGetSubtitleWithTicksRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`any`\>\>

#### Defined in

[generated-client/api/subtitle-api.ts:1277](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/subtitle-api.ts#L1277)

___

### searchRemoteSubtitles

▸ **searchRemoteSubtitles**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`RemoteSubtitleInfo`](../interfaces/generated_client.RemoteSubtitleInfo.md)[]\>\>

**`summary`** Search remote subtitles.

**`throws`** {RequiredError}

**`memberof`** SubtitleApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`SubtitleApiSearchRemoteSubtitlesRequest`](../interfaces/generated_client.SubtitleApiSearchRemoteSubtitlesRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`RemoteSubtitleInfo`](../interfaces/generated_client.RemoteSubtitleInfo.md)[]\>\>

#### Defined in

[generated-client/api/subtitle-api.ts:1289](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/subtitle-api.ts#L1289)

___

### uploadSubtitle

▸ **uploadSubtitle**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Upload an external subtitle file.

**`throws`** {RequiredError}

**`memberof`** SubtitleApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`SubtitleApiUploadSubtitleRequest`](../interfaces/generated_client.SubtitleApiUploadSubtitleRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[generated-client/api/subtitle-api.ts:1301](https://github.com/thornbill/jellyfin-sdk-typescript/blob/0f61f16/src/generated-client/api/subtitle-api.ts#L1301)
