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
import type { EmbeddedSubtitleOptions } from './embedded-subtitle-options';
// May contain unused imports in some cases
// @ts-ignore
import type { MediaPathInfo } from './media-path-info';
// May contain unused imports in some cases
// @ts-ignore
import type { TypeOptions } from './type-options';

/**
 * 
 * @export
 * @interface LibraryOptions
 */
export interface LibraryOptions {
    /**
     * 
     * @type {boolean}
     * @memberof LibraryOptions
     */
    'Enabled'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof LibraryOptions
     */
    'EnablePhotos'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof LibraryOptions
     */
    'EnableRealtimeMonitor'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof LibraryOptions
     */
    'EnableLUFSScan'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof LibraryOptions
     */
    'EnableChapterImageExtraction'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof LibraryOptions
     */
    'ExtractChapterImagesDuringLibraryScan'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof LibraryOptions
     */
    'EnableTrickplayImageExtraction'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof LibraryOptions
     */
    'ExtractTrickplayImagesDuringLibraryScan'?: boolean;
    /**
     * 
     * @type {Array<MediaPathInfo>}
     * @memberof LibraryOptions
     */
    'PathInfos'?: Array<MediaPathInfo>;
    /**
     * 
     * @type {boolean}
     * @memberof LibraryOptions
     */
    'SaveLocalMetadata'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof LibraryOptions
     * @deprecated
     */
    'EnableInternetProviders'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof LibraryOptions
     */
    'EnableAutomaticSeriesGrouping'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof LibraryOptions
     */
    'EnableEmbeddedTitles'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof LibraryOptions
     */
    'EnableEmbeddedExtrasTitles'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof LibraryOptions
     */
    'EnableEmbeddedEpisodeInfos'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof LibraryOptions
     */
    'AutomaticRefreshIntervalDays'?: number;
    /**
     * Gets or sets the preferred metadata language.
     * @type {string}
     * @memberof LibraryOptions
     */
    'PreferredMetadataLanguage'?: string | null;
    /**
     * Gets or sets the metadata country code.
     * @type {string}
     * @memberof LibraryOptions
     */
    'MetadataCountryCode'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof LibraryOptions
     */
    'SeasonZeroDisplayName'?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof LibraryOptions
     */
    'MetadataSavers'?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof LibraryOptions
     */
    'DisabledLocalMetadataReaders'?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof LibraryOptions
     */
    'LocalMetadataReaderOrder'?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof LibraryOptions
     */
    'DisabledSubtitleFetchers'?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof LibraryOptions
     */
    'SubtitleFetcherOrder'?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof LibraryOptions
     */
    'DisabledMediaSegmentProviders'?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof LibraryOptions
     */
    'MediaSegmentProviderOrder'?: Array<string>;
    /**
     * 
     * @type {boolean}
     * @memberof LibraryOptions
     */
    'SkipSubtitlesIfEmbeddedSubtitlesPresent'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof LibraryOptions
     */
    'SkipSubtitlesIfAudioTrackMatches'?: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof LibraryOptions
     */
    'SubtitleDownloadLanguages'?: Array<string> | null;
    /**
     * 
     * @type {boolean}
     * @memberof LibraryOptions
     */
    'RequirePerfectSubtitleMatch'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof LibraryOptions
     */
    'SaveSubtitlesWithMedia'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof LibraryOptions
     */
    'SaveLyricsWithMedia'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof LibraryOptions
     */
    'SaveTrickplayWithMedia'?: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof LibraryOptions
     */
    'DisabledLyricFetchers'?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof LibraryOptions
     */
    'LyricFetcherOrder'?: Array<string>;
    /**
     * 
     * @type {boolean}
     * @memberof LibraryOptions
     */
    'PreferNonstandardArtistsTag'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof LibraryOptions
     */
    'UseCustomTagDelimiters'?: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof LibraryOptions
     */
    'CustomTagDelimiters'?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof LibraryOptions
     */
    'DelimiterWhitelist'?: Array<string>;
    /**
     * 
     * @type {boolean}
     * @memberof LibraryOptions
     */
    'AutomaticallyAddToCollection'?: boolean;
    /**
     * 
     * @type {EmbeddedSubtitleOptions}
     * @memberof LibraryOptions
     */
    'AllowEmbeddedSubtitles'?: EmbeddedSubtitleOptions;
    /**
     * 
     * @type {Array<TypeOptions>}
     * @memberof LibraryOptions
     */
    'TypeOptions'?: Array<TypeOptions>;
}



