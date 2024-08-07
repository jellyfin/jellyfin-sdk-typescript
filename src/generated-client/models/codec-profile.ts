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
import type { CodecType } from './codec-type';
// May contain unused imports in some cases
// @ts-ignore
import type { ProfileCondition } from './profile-condition';

/**
 * 
 * @export
 * @interface CodecProfile
 */
export interface CodecProfile {
    /**
     * 
     * @type {CodecType}
     * @memberof CodecProfile
     */
    'Type'?: CodecType;
    /**
     * 
     * @type {Array<ProfileCondition>}
     * @memberof CodecProfile
     */
    'Conditions'?: Array<ProfileCondition> | null;
    /**
     * 
     * @type {Array<ProfileCondition>}
     * @memberof CodecProfile
     */
    'ApplyConditions'?: Array<ProfileCondition> | null;
    /**
     * 
     * @type {string}
     * @memberof CodecProfile
     */
    'Codec'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CodecProfile
     */
    'Container'?: string | null;
}



