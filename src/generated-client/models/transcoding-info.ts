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
import { HardwareEncodingType } from './hardware-encoding-type.js';
// May contain unused imports in some cases
// @ts-ignore
import { TranscodeReason } from './transcode-reason.js';

/**
 * 
 * @export
 * @interface TranscodingInfo
 */
export interface TranscodingInfo {
    /**
     * 
     * @type {string}
     * @memberof TranscodingInfo
     */
    'AudioCodec'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof TranscodingInfo
     */
    'VideoCodec'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof TranscodingInfo
     */
    'Container'?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof TranscodingInfo
     */
    'IsVideoDirect'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof TranscodingInfo
     */
    'IsAudioDirect'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof TranscodingInfo
     */
    'Bitrate'?: number | null;
    /**
     * 
     * @type {number}
     * @memberof TranscodingInfo
     */
    'Framerate'?: number | null;
    /**
     * 
     * @type {number}
     * @memberof TranscodingInfo
     */
    'CompletionPercentage'?: number | null;
    /**
     * 
     * @type {number}
     * @memberof TranscodingInfo
     */
    'Width'?: number | null;
    /**
     * 
     * @type {number}
     * @memberof TranscodingInfo
     */
    'Height'?: number | null;
    /**
     * 
     * @type {number}
     * @memberof TranscodingInfo
     */
    'AudioChannels'?: number | null;
    /**
     * 
     * @type {HardwareEncodingType}
     * @memberof TranscodingInfo
     */
    'HardwareAccelerationType'?: HardwareEncodingType;
    /**
     * 
     * @type {Array<TranscodeReason>}
     * @memberof TranscodingInfo
     */
    'TranscodeReasons'?: Array<TranscodeReason>;
}

