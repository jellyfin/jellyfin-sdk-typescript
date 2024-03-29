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
 * Create new playlist dto.
 * @export
 * @interface CreatePlaylistDto
 */
export interface CreatePlaylistDto {
    /**
     * Gets or sets the name of the new playlist.
     * @type {string}
     * @memberof CreatePlaylistDto
     */
    'Name'?: string | null;
    /**
     * Gets or sets item ids to add to the playlist.
     * @type {Array<string>}
     * @memberof CreatePlaylistDto
     */
    'Ids'?: Array<string>;
    /**
     * Gets or sets the user id.
     * @type {string}
     * @memberof CreatePlaylistDto
     */
    'UserId'?: string | null;
    /**
     * Gets or sets the media type.
     * @type {string}
     * @memberof CreatePlaylistDto
     */
    'MediaType'?: string | null;
}

