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
 * These represent sort orders.
 * @export
 * @enum {string}
 */

export const ItemSortBy = {
    Default: 'Default',
    AiredEpisodeOrder: 'AiredEpisodeOrder',
    Album: 'Album',
    AlbumArtist: 'AlbumArtist',
    Artist: 'Artist',
    DateCreated: 'DateCreated',
    OfficialRating: 'OfficialRating',
    DatePlayed: 'DatePlayed',
    PremiereDate: 'PremiereDate',
    StartDate: 'StartDate',
    SortName: 'SortName',
    Name: 'Name',
    Random: 'Random',
    Runtime: 'Runtime',
    CommunityRating: 'CommunityRating',
    ProductionYear: 'ProductionYear',
    PlayCount: 'PlayCount',
    CriticRating: 'CriticRating',
    IsFolder: 'IsFolder',
    IsUnplayed: 'IsUnplayed',
    IsPlayed: 'IsPlayed',
    SeriesSortName: 'SeriesSortName',
    VideoBitRate: 'VideoBitRate',
    AirTime: 'AirTime',
    Studio: 'Studio',
    IsFavoriteOrLiked: 'IsFavoriteOrLiked',
    DateLastContentAdded: 'DateLastContentAdded',
    SeriesDatePlayed: 'SeriesDatePlayed',
    ParentIndexNumber: 'ParentIndexNumber',
    IndexNumber: 'IndexNumber'
} as const;

export type ItemSortBy = typeof ItemSortBy[keyof typeof ItemSortBy];



