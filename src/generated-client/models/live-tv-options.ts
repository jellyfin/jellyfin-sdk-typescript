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


import { ListingsProviderInfo } from './listings-provider-info';
import { TunerHostInfo } from './tuner-host-info';

/**
 * 
 * @export
 * @interface LiveTvOptions
 */
export interface LiveTvOptions {
    /**
     * 
     * @type {number}
     * @memberof LiveTvOptions
     */
    'GuideDays'?: number | null;
    /**
     * 
     * @type {string}
     * @memberof LiveTvOptions
     */
    'RecordingPath'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof LiveTvOptions
     */
    'MovieRecordingPath'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof LiveTvOptions
     */
    'SeriesRecordingPath'?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof LiveTvOptions
     */
    'EnableRecordingSubfolders'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof LiveTvOptions
     */
    'EnableOriginalAudioWithEncodedRecordings'?: boolean;
    /**
     * 
     * @type {Array<TunerHostInfo>}
     * @memberof LiveTvOptions
     */
    'TunerHosts'?: Array<TunerHostInfo> | null;
    /**
     * 
     * @type {Array<ListingsProviderInfo>}
     * @memberof LiveTvOptions
     */
    'ListingProviders'?: Array<ListingsProviderInfo> | null;
    /**
     * 
     * @type {number}
     * @memberof LiveTvOptions
     */
    'PrePaddingSeconds'?: number;
    /**
     * 
     * @type {number}
     * @memberof LiveTvOptions
     */
    'PostPaddingSeconds'?: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof LiveTvOptions
     */
    'MediaLocationsCreated'?: Array<string> | null;
    /**
     * 
     * @type {string}
     * @memberof LiveTvOptions
     */
    'RecordingPostProcessor'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof LiveTvOptions
     */
    'RecordingPostProcessorArguments'?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof LiveTvOptions
     */
    'SaveRecordingNFO'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof LiveTvOptions
     */
    'SaveRecordingImages'?: boolean;
}

