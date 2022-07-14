[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / HlsSegmentApiStopEncodingProcessRequest

# Interface: HlsSegmentApiStopEncodingProcessRequest

[generated-client](../modules/generated_client.md).HlsSegmentApiStopEncodingProcessRequest

Request parameters for stopEncodingProcess operation in HlsSegmentApi.

**`export`**

**`interface`** HlsSegmentApiStopEncodingProcessRequest

## Table of contents

### Properties

- [deviceId](generated_client.HlsSegmentApiStopEncodingProcessRequest.md#deviceid)
- [playSessionId](generated_client.HlsSegmentApiStopEncodingProcessRequest.md#playsessionid)

## Properties

### deviceId

• `Readonly` **deviceId**: `string`

The device id of the client requesting. Used to stop encoding processes when needed.

**`memberof`** HlsSegmentApiStopEncodingProcess

#### Defined in

[generated-client/api/hls-segment-api.ts:492](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/hls-segment-api.ts#L492)

___

### playSessionId

• `Readonly` **playSessionId**: `string`

The play session id.

**`memberof`** HlsSegmentApiStopEncodingProcess

#### Defined in

[generated-client/api/hls-segment-api.ts:499](https://github.com/jellyfin/jellyfin-sdk-typescript/blob/fa599ae/src/generated-client/api/hls-segment-api.ts#L499)
