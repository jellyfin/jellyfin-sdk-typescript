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
import type { PackageInfo } from './package-info';

/**
 * Class InstallationInfo.
 * @export
 * @interface InstallationInfo
 */
export interface InstallationInfo {
    /**
     * Gets or sets the Id.
     * @type {string}
     * @memberof InstallationInfo
     */
    'Guid'?: string;
    /**
     * Gets or sets the name.
     * @type {string}
     * @memberof InstallationInfo
     */
    'Name'?: string | null;
    /**
     * Gets or sets the version.
     * @type {string}
     * @memberof InstallationInfo
     */
    'Version'?: string | null;
    /**
     * Gets or sets the changelog for this version.
     * @type {string}
     * @memberof InstallationInfo
     */
    'Changelog'?: string | null;
    /**
     * Gets or sets the source URL.
     * @type {string}
     * @memberof InstallationInfo
     */
    'SourceUrl'?: string | null;
    /**
     * Gets or sets a checksum for the binary.
     * @type {string}
     * @memberof InstallationInfo
     */
    'Checksum'?: string | null;
    /**
     * 
     * @type {PackageInfo}
     * @memberof InstallationInfo
     */
    'PackageInfo'?: PackageInfo;
}

