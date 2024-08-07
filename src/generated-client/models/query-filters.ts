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
import type { NameGuidPair } from './name-guid-pair';

/**
 * 
 * @export
 * @interface QueryFilters
 */
export interface QueryFilters {
    /**
     * 
     * @type {Array<NameGuidPair>}
     * @memberof QueryFilters
     */
    'Genres'?: Array<NameGuidPair> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof QueryFilters
     */
    'Tags'?: Array<string> | null;
}

