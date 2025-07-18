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
 * Used to control the data that gets attached to DtoBaseItems.
 * @export
 * @enum {string}
 */

export const ItemFields = {
    AirTime: 'AirTime',
    CanDelete: 'CanDelete',
    CanDownload: 'CanDownload',
    ChannelInfo: 'ChannelInfo',
    Chapters: 'Chapters',
    Trickplay: 'Trickplay',
    ChildCount: 'ChildCount',
    CumulativeRunTimeTicks: 'CumulativeRunTimeTicks',
    CustomRating: 'CustomRating',
    DateCreated: 'DateCreated',
    DateLastMediaAdded: 'DateLastMediaAdded',
    DisplayPreferencesId: 'DisplayPreferencesId',
    Etag: 'Etag',
    ExternalUrls: 'ExternalUrls',
    Genres: 'Genres',
    ItemCounts: 'ItemCounts',
    MediaSourceCount: 'MediaSourceCount',
    MediaSources: 'MediaSources',
    OriginalTitle: 'OriginalTitle',
    Overview: 'Overview',
    ParentId: 'ParentId',
    Path: 'Path',
    People: 'People',
    PlayAccess: 'PlayAccess',
    ProductionLocations: 'ProductionLocations',
    ProviderIds: 'ProviderIds',
    PrimaryImageAspectRatio: 'PrimaryImageAspectRatio',
    RecursiveItemCount: 'RecursiveItemCount',
    Settings: 'Settings',
    SeriesStudio: 'SeriesStudio',
    SortName: 'SortName',
    SpecialEpisodeNumbers: 'SpecialEpisodeNumbers',
    Studios: 'Studios',
    Taglines: 'Taglines',
    Tags: 'Tags',
    RemoteTrailers: 'RemoteTrailers',
    MediaStreams: 'MediaStreams',
    SeasonUserData: 'SeasonUserData',
    DateLastRefreshed: 'DateLastRefreshed',
    DateLastSaved: 'DateLastSaved',
    RefreshState: 'RefreshState',
    ChannelImage: 'ChannelImage',
    EnableMediaSourceDisplay: 'EnableMediaSourceDisplay',
    Width: 'Width',
    Height: 'Height',
    ExtraIds: 'ExtraIds',
    LocalTrailerCount: 'LocalTrailerCount',
    IsHd: 'IsHD',
    SpecialFeatureCount: 'SpecialFeatureCount'
} as const;

export type ItemFields = typeof ItemFields[keyof typeof ItemFields];



