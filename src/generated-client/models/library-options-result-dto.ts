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
import type { LibraryOptionInfoDto } from './library-option-info-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { LibraryTypeOptionsDto } from './library-type-options-dto';

/**
 * Library options result dto.
 * @export
 * @interface LibraryOptionsResultDto
 */
export interface LibraryOptionsResultDto {
    /**
     * Gets or sets the metadata savers.
     * @type {Array<LibraryOptionInfoDto>}
     * @memberof LibraryOptionsResultDto
     */
    'MetadataSavers'?: Array<LibraryOptionInfoDto>;
    /**
     * Gets or sets the metadata readers.
     * @type {Array<LibraryOptionInfoDto>}
     * @memberof LibraryOptionsResultDto
     */
    'MetadataReaders'?: Array<LibraryOptionInfoDto>;
    /**
     * Gets or sets the subtitle fetchers.
     * @type {Array<LibraryOptionInfoDto>}
     * @memberof LibraryOptionsResultDto
     */
    'SubtitleFetchers'?: Array<LibraryOptionInfoDto>;
    /**
     * Gets or sets the list of lyric fetchers.
     * @type {Array<LibraryOptionInfoDto>}
     * @memberof LibraryOptionsResultDto
     */
    'LyricFetchers'?: Array<LibraryOptionInfoDto>;
    /**
     * Gets or sets the list of MediaSegment Providers.
     * @type {Array<LibraryOptionInfoDto>}
     * @memberof LibraryOptionsResultDto
     */
    'MediaSegmentProviders'?: Array<LibraryOptionInfoDto>;
    /**
     * Gets or sets the type options.
     * @type {Array<LibraryTypeOptionsDto>}
     * @memberof LibraryOptionsResultDto
     */
    'TypeOptions'?: Array<LibraryTypeOptionsDto>;
}

