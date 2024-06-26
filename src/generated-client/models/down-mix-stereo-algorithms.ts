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
 * An enum representing an algorithm to downmix 6ch+ to stereo.  Algorithms sourced from https://superuser.com/questions/852400/properly-downmix-5-1-to-stereo-using-ffmpeg/1410620#1410620.
 * @export
 * @enum {string}
 */

export const DownMixStereoAlgorithms = {
    None: 'None',
    Dave750: 'Dave750',
    NightmodeDialogue: 'NightmodeDialogue'
} as const;

export type DownMixStereoAlgorithms = typeof DownMixStereoAlgorithms[keyof typeof DownMixStereoAlgorithms];



