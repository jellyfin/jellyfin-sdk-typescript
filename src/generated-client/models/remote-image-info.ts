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
import type { ImageType } from './image-type';
// May contain unused imports in some cases
// @ts-ignore
import type { RatingType } from './rating-type';

/**
 * Class RemoteImageInfo.
 * @export
 * @interface RemoteImageInfo
 */
export interface RemoteImageInfo {
    /**
     * Gets or sets the name of the provider.
     * @type {string}
     * @memberof RemoteImageInfo
     */
    'ProviderName'?: string | null;
    /**
     * Gets or sets the URL.
     * @type {string}
     * @memberof RemoteImageInfo
     */
    'Url'?: string | null;
    /**
     * Gets or sets a url used for previewing a smaller version.
     * @type {string}
     * @memberof RemoteImageInfo
     */
    'ThumbnailUrl'?: string | null;
    /**
     * Gets or sets the height.
     * @type {number}
     * @memberof RemoteImageInfo
     */
    'Height'?: number | null;
    /**
     * Gets or sets the width.
     * @type {number}
     * @memberof RemoteImageInfo
     */
    'Width'?: number | null;
    /**
     * Gets or sets the community rating.
     * @type {number}
     * @memberof RemoteImageInfo
     */
    'CommunityRating'?: number | null;
    /**
     * Gets or sets the vote count.
     * @type {number}
     * @memberof RemoteImageInfo
     */
    'VoteCount'?: number | null;
    /**
     * Gets or sets the language.
     * @type {string}
     * @memberof RemoteImageInfo
     */
    'Language'?: string | null;
    /**
     * 
     * @type {ImageType}
     * @memberof RemoteImageInfo
     */
    'Type'?: ImageType;
    /**
     * 
     * @type {RatingType}
     * @memberof RemoteImageInfo
     */
    'RatingType'?: RatingType;
}



