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
 * Class PlayRequestDto.
 * @export
 * @interface PlayRequestDto
 */
export interface PlayRequestDto {
    /**
     * Gets or sets the playing queue.
     * @type {Array<string>}
     * @memberof PlayRequestDto
     */
    'PlayingQueue'?: Array<string>;
    /**
     * Gets or sets the position of the playing item in the queue.
     * @type {number}
     * @memberof PlayRequestDto
     */
    'PlayingItemPosition'?: number;
    /**
     * Gets or sets the start position ticks.
     * @type {number}
     * @memberof PlayRequestDto
     */
    'StartPositionTicks'?: number;
}

