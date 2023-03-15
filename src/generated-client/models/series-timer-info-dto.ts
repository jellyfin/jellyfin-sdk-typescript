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
import { DayOfWeek } from './day-of-week.js';
// May contain unused imports in some cases
// @ts-ignore
import { DayPattern } from './day-pattern.js';
// May contain unused imports in some cases
// @ts-ignore
import { KeepUntil } from './keep-until.js';

/**
 * Class SeriesTimerInfoDto.
 * @export
 * @interface SeriesTimerInfoDto
 */
export interface SeriesTimerInfoDto {
    /**
     * Gets or sets the Id of the recording.
     * @type {string}
     * @memberof SeriesTimerInfoDto
     */
    'Id'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SeriesTimerInfoDto
     */
    'Type'?: string | null;
    /**
     * Gets or sets the server identifier.
     * @type {string}
     * @memberof SeriesTimerInfoDto
     */
    'ServerId'?: string | null;
    /**
     * Gets or sets the external identifier.
     * @type {string}
     * @memberof SeriesTimerInfoDto
     */
    'ExternalId'?: string | null;
    /**
     * Gets or sets the channel id of the recording.
     * @type {string}
     * @memberof SeriesTimerInfoDto
     */
    'ChannelId'?: string;
    /**
     * Gets or sets the external channel identifier.
     * @type {string}
     * @memberof SeriesTimerInfoDto
     */
    'ExternalChannelId'?: string | null;
    /**
     * Gets or sets the channel name of the recording.
     * @type {string}
     * @memberof SeriesTimerInfoDto
     */
    'ChannelName'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SeriesTimerInfoDto
     */
    'ChannelPrimaryImageTag'?: string | null;
    /**
     * Gets or sets the program identifier.
     * @type {string}
     * @memberof SeriesTimerInfoDto
     */
    'ProgramId'?: string | null;
    /**
     * Gets or sets the external program identifier.
     * @type {string}
     * @memberof SeriesTimerInfoDto
     */
    'ExternalProgramId'?: string | null;
    /**
     * Gets or sets the name of the recording.
     * @type {string}
     * @memberof SeriesTimerInfoDto
     */
    'Name'?: string | null;
    /**
     * Gets or sets the description of the recording.
     * @type {string}
     * @memberof SeriesTimerInfoDto
     */
    'Overview'?: string | null;
    /**
     * Gets or sets the start date of the recording, in UTC.
     * @type {string}
     * @memberof SeriesTimerInfoDto
     */
    'StartDate'?: string;
    /**
     * Gets or sets the end date of the recording, in UTC.
     * @type {string}
     * @memberof SeriesTimerInfoDto
     */
    'EndDate'?: string;
    /**
     * Gets or sets the name of the service.
     * @type {string}
     * @memberof SeriesTimerInfoDto
     */
    'ServiceName'?: string | null;
    /**
     * Gets or sets the priority.
     * @type {number}
     * @memberof SeriesTimerInfoDto
     */
    'Priority'?: number;
    /**
     * Gets or sets the pre padding seconds.
     * @type {number}
     * @memberof SeriesTimerInfoDto
     */
    'PrePaddingSeconds'?: number;
    /**
     * Gets or sets the post padding seconds.
     * @type {number}
     * @memberof SeriesTimerInfoDto
     */
    'PostPaddingSeconds'?: number;
    /**
     * Gets or sets a value indicating whether this instance is pre padding required.
     * @type {boolean}
     * @memberof SeriesTimerInfoDto
     */
    'IsPrePaddingRequired'?: boolean;
    /**
     * Gets or sets the Id of the Parent that has a backdrop if the item does not have one.
     * @type {string}
     * @memberof SeriesTimerInfoDto
     */
    'ParentBackdropItemId'?: string | null;
    /**
     * Gets or sets the parent backdrop image tags.
     * @type {Array<string>}
     * @memberof SeriesTimerInfoDto
     */
    'ParentBackdropImageTags'?: Array<string> | null;
    /**
     * Gets or sets a value indicating whether this instance is post padding required.
     * @type {boolean}
     * @memberof SeriesTimerInfoDto
     */
    'IsPostPaddingRequired'?: boolean;
    /**
     * 
     * @type {KeepUntil}
     * @memberof SeriesTimerInfoDto
     */
    'KeepUntil'?: KeepUntil;
    /**
     * Gets or sets a value indicating whether [record any time].
     * @type {boolean}
     * @memberof SeriesTimerInfoDto
     */
    'RecordAnyTime'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof SeriesTimerInfoDto
     */
    'SkipEpisodesInLibrary'?: boolean;
    /**
     * Gets or sets a value indicating whether [record any channel].
     * @type {boolean}
     * @memberof SeriesTimerInfoDto
     */
    'RecordAnyChannel'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof SeriesTimerInfoDto
     */
    'KeepUpTo'?: number;
    /**
     * Gets or sets a value indicating whether [record new only].
     * @type {boolean}
     * @memberof SeriesTimerInfoDto
     */
    'RecordNewOnly'?: boolean;
    /**
     * Gets or sets the days.
     * @type {Array<DayOfWeek>}
     * @memberof SeriesTimerInfoDto
     */
    'Days'?: Array<DayOfWeek> | null;
    /**
     * 
     * @type {DayPattern}
     * @memberof SeriesTimerInfoDto
     */
    'DayPattern'?: DayPattern;
    /**
     * Gets or sets the image tags.
     * @type {{ [key: string]: string; }}
     * @memberof SeriesTimerInfoDto
     */
    'ImageTags'?: { [key: string]: string; } | null;
    /**
     * Gets or sets the parent thumb item id.
     * @type {string}
     * @memberof SeriesTimerInfoDto
     */
    'ParentThumbItemId'?: string | null;
    /**
     * Gets or sets the parent thumb image tag.
     * @type {string}
     * @memberof SeriesTimerInfoDto
     */
    'ParentThumbImageTag'?: string | null;
    /**
     * Gets or sets the parent primary image item identifier.
     * @type {string}
     * @memberof SeriesTimerInfoDto
     */
    'ParentPrimaryImageItemId'?: string | null;
    /**
     * Gets or sets the parent primary image tag.
     * @type {string}
     * @memberof SeriesTimerInfoDto
     */
    'ParentPrimaryImageTag'?: string | null;
}

