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



/**
 * Class CultureDto.
 * @export
 * @interface CultureDto
 */
export interface CultureDto {
    /**
     * Gets the name.
     * @type {string}
     * @memberof CultureDto
     */
    'Name'?: string;
    /**
     * Gets the display name.
     * @type {string}
     * @memberof CultureDto
     */
    'DisplayName'?: string;
    /**
     * Gets the name of the two letter ISO language.
     * @type {string}
     * @memberof CultureDto
     */
    'TwoLetterISOLanguageName'?: string;
    /**
     * Gets the name of the three letter ISO language.
     * @type {string}
     * @memberof CultureDto
     */
    'ThreeLetterISOLanguageName'?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof CultureDto
     */
    'ThreeLetterISOLanguageNames'?: Array<string>;
}

