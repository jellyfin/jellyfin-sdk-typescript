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
 * Enum containing tonemapping modes.
 * @export
 * @enum {string}
 */

export const TonemappingMode = {
    Auto: 'auto',
    Max: 'max',
    Rgb: 'rgb',
    Lum: 'lum',
    Itp: 'itp'
} as const;

export type TonemappingMode = typeof TonemappingMode[keyof typeof TonemappingMode];



