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
import type { NameValuePair } from './name-value-pair';

/**
 * 
 * @export
 * @interface ListingsProviderInfo
 */
export interface ListingsProviderInfo {
    /**
     * 
     * @type {string}
     * @memberof ListingsProviderInfo
     */
    'Id'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ListingsProviderInfo
     */
    'Type'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ListingsProviderInfo
     */
    'Username'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ListingsProviderInfo
     */
    'Password'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ListingsProviderInfo
     */
    'ListingsId'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ListingsProviderInfo
     */
    'ZipCode'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ListingsProviderInfo
     */
    'Country'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ListingsProviderInfo
     */
    'Path'?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof ListingsProviderInfo
     */
    'EnabledTuners'?: Array<string> | null;
    /**
     * 
     * @type {boolean}
     * @memberof ListingsProviderInfo
     */
    'EnableAllTuners'?: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof ListingsProviderInfo
     */
    'NewsCategories'?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof ListingsProviderInfo
     */
    'SportsCategories'?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof ListingsProviderInfo
     */
    'KidsCategories'?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof ListingsProviderInfo
     */
    'MovieCategories'?: Array<string> | null;
    /**
     * 
     * @type {Array<NameValuePair>}
     * @memberof ListingsProviderInfo
     */
    'ChannelMappings'?: Array<NameValuePair> | null;
    /**
     * 
     * @type {string}
     * @memberof ListingsProviderInfo
     */
    'MoviePrefix'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ListingsProviderInfo
     */
    'PreferredLanguage'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ListingsProviderInfo
     */
    'UserAgent'?: string | null;
}

