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
import type { DayOfWeek } from './day-of-week';
// May contain unused imports in some cases
// @ts-ignore
import type { TaskTriggerInfoType } from './task-trigger-info-type';

/**
 * Class TaskTriggerInfo.
 * @export
 * @interface TaskTriggerInfo
 */
export interface TaskTriggerInfo {
    /**
     * 
     * @type {TaskTriggerInfoType}
     * @memberof TaskTriggerInfo
     */
    'Type'?: TaskTriggerInfoType;
    /**
     * Gets or sets the time of day.
     * @type {number}
     * @memberof TaskTriggerInfo
     */
    'TimeOfDayTicks'?: number | null;
    /**
     * Gets or sets the interval.
     * @type {number}
     * @memberof TaskTriggerInfo
     */
    'IntervalTicks'?: number | null;
    /**
     * 
     * @type {DayOfWeek}
     * @memberof TaskTriggerInfo
     */
    'DayOfWeek'?: DayOfWeek;
    /**
     * Gets or sets the maximum runtime ticks.
     * @type {number}
     * @memberof TaskTriggerInfo
     */
    'MaxRuntimeTicks'?: number | null;
}



