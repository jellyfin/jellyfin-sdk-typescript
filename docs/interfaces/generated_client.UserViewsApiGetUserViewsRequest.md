[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / UserViewsApiGetUserViewsRequest

# Interface: UserViewsApiGetUserViewsRequest

[generated-client](../modules/generated_client.md).UserViewsApiGetUserViewsRequest

Request parameters for getUserViews operation in UserViewsApi.

**`export`**

**`interface`** UserViewsApiGetUserViewsRequest

## Table of contents

### Properties

- [includeExternalContent](generated_client.UserViewsApiGetUserViewsRequest.md#includeexternalcontent)
- [includeHidden](generated_client.UserViewsApiGetUserViewsRequest.md#includehidden)
- [presetViews](generated_client.UserViewsApiGetUserViewsRequest.md#presetviews)
- [userId](generated_client.UserViewsApiGetUserViewsRequest.md#userid)

## Properties

### includeExternalContent

• `Optional` `Readonly` **includeExternalContent**: `boolean`

Whether or not to include external views such as channels or live tv.

**`memberof`** UserViewsApiGetUserViews

#### Defined in

[generated-client/api/user-views-api.ts:227](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/user-views-api.ts#L227)

___

### includeHidden

• `Optional` `Readonly` **includeHidden**: `boolean`

Whether or not to include hidden content.

**`memberof`** UserViewsApiGetUserViews

#### Defined in

[generated-client/api/user-views-api.ts:241](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/user-views-api.ts#L241)

___

### presetViews

• `Optional` `Readonly` **presetViews**: `string`[]

Preset views.

**`memberof`** UserViewsApiGetUserViews

#### Defined in

[generated-client/api/user-views-api.ts:234](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/user-views-api.ts#L234)

___

### userId

• `Readonly` **userId**: `string`

User id.

**`memberof`** UserViewsApiGetUserViews

#### Defined in

[generated-client/api/user-views-api.ts:220](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/7402732/src/generated-client/api/user-views-api.ts#L220)
