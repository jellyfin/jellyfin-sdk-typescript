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
import type { ProcessPriorityClass } from './process-priority-class';
// May contain unused imports in some cases
// @ts-ignore
import type { TrickplayScanBehavior } from './trickplay-scan-behavior';

/**
 * Class TrickplayOptions.
 * @export
 * @interface TrickplayOptions
 */
export interface TrickplayOptions {
    /**
     * Gets or sets a value indicating whether or not to use HW acceleration.
     * @type {boolean}
     * @memberof TrickplayOptions
     */
    'EnableHwAcceleration'?: boolean;
    /**
     * Gets or sets a value indicating whether or not to use HW accelerated MJPEG encoding.
     * @type {boolean}
     * @memberof TrickplayOptions
     */
    'EnableHwEncoding'?: boolean;
    /**
     * Gets or sets a value indicating whether to only extract key frames.  Significantly faster, but is not compatible with all decoders and/or video files.
     * @type {boolean}
     * @memberof TrickplayOptions
     */
    'EnableKeyFrameOnlyExtraction'?: boolean;
    /**
     * 
     * @type {TrickplayScanBehavior}
     * @memberof TrickplayOptions
     */
    'ScanBehavior'?: TrickplayScanBehavior;
    /**
     * 
     * @type {ProcessPriorityClass}
     * @memberof TrickplayOptions
     */
    'ProcessPriority'?: ProcessPriorityClass;
    /**
     * Gets or sets the interval, in ms, between each new trickplay image.
     * @type {number}
     * @memberof TrickplayOptions
     */
    'Interval'?: number;
    /**
     * Gets or sets the target width resolutions, in px, to generates preview images for.
     * @type {Array<number>}
     * @memberof TrickplayOptions
     */
    'WidthResolutions'?: Array<number>;
    /**
     * Gets or sets number of tile images to allow in X dimension.
     * @type {number}
     * @memberof TrickplayOptions
     */
    'TileWidth'?: number;
    /**
     * Gets or sets number of tile images to allow in Y dimension.
     * @type {number}
     * @memberof TrickplayOptions
     */
    'TileHeight'?: number;
    /**
     * Gets or sets the ffmpeg output quality level.
     * @type {number}
     * @memberof TrickplayOptions
     */
    'Qscale'?: number;
    /**
     * Gets or sets the jpeg quality to use for image tiles.
     * @type {number}
     * @memberof TrickplayOptions
     */
    'JpegQuality'?: number;
    /**
     * Gets or sets the number of threads to be used by ffmpeg.
     * @type {number}
     * @memberof TrickplayOptions
     */
    'ProcessThreads'?: number;
}



