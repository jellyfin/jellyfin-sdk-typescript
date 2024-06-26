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
 * Enum PlaybackRequestType.
 * @export
 * @enum {string}
 */

export const PlaybackRequestType = {
    Play: 'Play',
    SetPlaylistItem: 'SetPlaylistItem',
    RemoveFromPlaylist: 'RemoveFromPlaylist',
    MovePlaylistItem: 'MovePlaylistItem',
    Queue: 'Queue',
    Unpause: 'Unpause',
    Pause: 'Pause',
    Stop: 'Stop',
    Seek: 'Seek',
    Buffer: 'Buffer',
    Ready: 'Ready',
    NextItem: 'NextItem',
    PreviousItem: 'PreviousItem',
    SetRepeatMode: 'SetRepeatMode',
    SetShuffleMode: 'SetShuffleMode',
    Ping: 'Ping',
    IgnoreWait: 'IgnoreWait'
} as const;

export type PlaybackRequestType = typeof PlaybackRequestType[keyof typeof PlaybackRequestType];



