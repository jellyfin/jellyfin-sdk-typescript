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
import type { ParentalRatingScore } from './parental-rating-score';

/**
 * Class ParentalRating.
 * @export
 * @interface ParentalRating
 */
export interface ParentalRating {
    /**
     * Gets or sets the name.
     * @type {string}
     * @memberof ParentalRating
     */
    'Name'?: string;
    /**
     * Gets or sets the value.
     * @type {number}
     * @memberof ParentalRating
     */
    'Value'?: number | null;
    /**
     * 
     * @type {ParentalRatingScore}
     * @memberof ParentalRating
     */
    'RatingScore'?: ParentalRatingScore;
}

