/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * Do not edit the class manually.
 *
 * Jellyfin API
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { MediaSourceInfo } from './media-source-info';
// May contain unused imports in some cases
// @ts-ignore
import type { PlaybackErrorCode } from './playback-error-code';

/**
 * Class PlaybackInfoResponse.
 * @export
 * @interface PlaybackInfoResponse
 */
export interface PlaybackInfoResponse {
    /**
     * Gets or sets the media sources.
     * @type {Array<MediaSourceInfo>}
     * @memberof PlaybackInfoResponse
     */
    'MediaSources'?: Array<MediaSourceInfo>;
    /**
     * Gets or sets the play session identifier.
     * @type {string}
     * @memberof PlaybackInfoResponse
     */
    'PlaySessionId'?: string | null;
    /**
     * 
     * @type {PlaybackErrorCode}
     * @memberof PlaybackInfoResponse
     */
    'ErrorCode'?: PlaybackErrorCode;
}



