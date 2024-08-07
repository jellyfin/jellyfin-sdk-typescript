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
import type { DeviceProfile } from './device-profile';
// May contain unused imports in some cases
// @ts-ignore
import type { GeneralCommandType } from './general-command-type';
// May contain unused imports in some cases
// @ts-ignore
import type { MediaType } from './media-type';

/**
 * 
 * @export
 * @interface ClientCapabilities
 */
export interface ClientCapabilities {
    /**
     * 
     * @type {Array<MediaType>}
     * @memberof ClientCapabilities
     */
    'PlayableMediaTypes'?: Array<MediaType> | null;
    /**
     * 
     * @type {Array<GeneralCommandType>}
     * @memberof ClientCapabilities
     */
    'SupportedCommands'?: Array<GeneralCommandType> | null;
    /**
     * 
     * @type {boolean}
     * @memberof ClientCapabilities
     */
    'SupportsMediaControl'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ClientCapabilities
     */
    'SupportsPersistentIdentifier'?: boolean;
    /**
     * 
     * @type {DeviceProfile}
     * @memberof ClientCapabilities
     */
    'DeviceProfile'?: DeviceProfile;
    /**
     * 
     * @type {string}
     * @memberof ClientCapabilities
     */
    'AppStoreUrl'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ClientCapabilities
     */
    'IconUrl'?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof ClientCapabilities
     * @deprecated
     */
    'SupportsContentUploading'?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof ClientCapabilities
     * @deprecated
     */
    'SupportsSync'?: boolean | null;
}

